// Usage: node clip-audit.js file.html "<route>" [width=1440] [height=900] [--bios]
// Gate for PRINCIPLES BH: no glyph may be cut off by any clipping ancestor, in the SETTLED state.
// Scrolls through the whole route with real wheel input so every reveal plays, waits for everything to settle,
// then measures every text node's line boxes (Range.getClientRects) against every ancestor that clips
// (overflow hidden/clip/auto/scroll, or clip-path), plus the viewport edges horizontally.
// With --bios it also opens every person overlay on the route and checks the text inside it.
// Also flags text whose computed line-height is tighter than its font's content area inside an overflow mask
// (the classic "descenders cut" bug) even before it is visibly clipped.
// Prints OK or one line per problem. Exit code 1 on failure.
const { chromium } = require('playwright');
(async () => {
  const args = process.argv.slice(2);
  const bios = args.includes('--bios');
  const [file, route = '', w = '1440', h = '900'] = args.filter(a => a !== '--bios');
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: +w, height: +h } });
  const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + require('path').resolve(file) + route);
  await p.waitForTimeout(4000);
  await p.mouse.move(+w / 2, +h / 2);
  // scroll to the bottom with real wheel input so every reveal fires, then back to top
  let last = -1;
  for (let i = 0; i < 400; i++) {
    await p.mouse.wheel(0, 240);
    await p.waitForTimeout(90);
    if (i % 10 === 9) {
      const y = await p.evaluate(() => Math.round(window.scrollY));
      if (y === last) break;
      last = y;
    }
  }
  await p.waitForTimeout(2600);
  const scan = async (rootSel, label) => p.evaluate(([rootSel, label]) => {
    const out = [];
    const root = rootSel ? document.querySelector(rootSel) : document.body;
    if (!root) return out;
    const vw = document.documentElement.clientWidth;
    const clipsOf = (el) => {
      const list = [];
      for (let a = el.parentElement; a && a !== document.documentElement; a = a.parentElement) {
        const cs = getComputedStyle(a);
        const ox = cs.overflowX, oy = cs.overflowY;
        const clipX = ox !== 'visible', clipY = oy !== 'visible';
        const cp = cs.clipPath && cs.clipPath !== 'none';
        if (clipX || clipY || cp) {
          const r = a.getBoundingClientRect();
          const bl = parseFloat(cs.borderLeftWidth) || 0, bt = parseFloat(cs.borderTopWidth) || 0;
          list.push({ a, clipX: clipX || cp, clipY: clipY || cp, scroll: /auto|scroll/.test(ox + oy),
            l: r.left + bl, t: r.top + bt, r: r.left + bl + a.clientWidth, b: r.top + bt + a.clientHeight, cp });
        }
        if (cs.position === 'fixed') break;
      }
      return list;
    };
    const desc = (el) => {
      const t = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 50);
      const cls = (el.className && el.className.baseVal === undefined ? el.className : '') || '';
      return `${label} <${el.tagName.toLowerCase()}${cls ? '.' + String(cls).split(' ').filter(Boolean).slice(0, 2).join('.') : ''}> "${t}"`;
    };
    const seen = new Set();
    const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => n.nodeValue.trim() ? 1 : 2 });
    let n;
    while ((n = tw.nextNode())) {
      const el = n.parentElement;
      if (!el || seen.has(el)) continue;
      const cs = getComputedStyle(el);
      if (cs.visibility === 'hidden' || cs.display === 'none') continue;
      // skip invisible things (opacity 0 anywhere up the tree), sr-only text, and aria-hidden decorative clones
      let hidden = false;
      for (let a = el; a; a = a.parentElement) {
        const s = getComputedStyle(a);
        if (+s.opacity < 0.05 || a.getAttribute('aria-hidden') === 'true' && a !== document.body) { hidden = true; break; }
        if (s.position === 'absolute' && a.clientWidth <= 1 && a.clientHeight <= 1) { hidden = true; break; }
      }
      if (hidden) continue;
      const range = document.createRange();
      range.selectNodeContents(n);
      const rects = [...range.getClientRects()].filter(r => r.width > 0.5 && r.height > 0.5);
      if (!rects.length) continue;
      const clips = clipsOf(el);
      const fs = parseFloat(cs.fontSize) || 16;
      const tol = Math.max(0.75, fs * 0.02);
      for (const r of rects) {
        // ignore text that is entirely outside the viewport vertically (not measurable in a meaningful way)
        for (const c of clips) {
          if (c.scroll && !c.cp) {
            // scroll containers: only flag horizontal clipping of single-line labels (text cut by a scroller edge)
            continue;
          }
          const cutTop = c.clipY && r.top < c.t - tol, cutBot = c.clipY && r.bottom > c.b + tol;
          const cutL = c.clipX && r.left < c.l - tol, cutR = c.clipX && r.right > c.r + tol;
          // a container that clips the text ENTIRELY is a hidden element (e.g. offscreen marquee), not a glyph cut
          const fully = r.bottom <= c.t || r.top >= c.b || r.right <= c.l || r.left >= c.r;
          if ((cutTop || cutBot || cutL || cutR) && !fully && !seen.has(el)) {
            seen.add(el);
            const side = [cutTop && `top ${(c.t - r.top).toFixed(1)}px`, cutBot && `bottom ${(r.bottom - c.b).toFixed(1)}px`, cutL && `left ${(c.l - r.left).toFixed(1)}px`, cutR && `right ${(r.right - c.r).toFixed(1)}px`].filter(Boolean).join(', ');
            out.push(`CLIPPED ${side} by <${c.a.tagName.toLowerCase()}.${String(c.a.className).split(' ')[0]}>: ${desc(el)}`);
          }
        }
        if (!clips.some(c => c.a === document.body) && (r.right > vw + tol || r.left < -tol) && r.width < vw && !seen.has(el)) {
          // text running off the side of the page
          const fixedish = getComputedStyle(el).whiteSpace === 'nowrap';
          if (!fixedish || r.left > -vw) { seen.add(el); out.push(`OFF-VIEWPORT x=${r.left.toFixed(0)}..${r.right.toFixed(0)} (vw ${vw}): ${desc(el)}`); }
        }
      }
      // tight-mask check: line-height smaller than the glyph box inside an overflow:hidden parent
      const lh = parseFloat(cs.lineHeight);
      const par = el.closest('*');
      if (!seen.has(el) && lh && rects[0].height > lh + tol && clips.some(c => c.clipY && !c.scroll && Math.abs(c.b - c.t - lh * rects.length) < fs * 0.6)) {
        seen.add(el);
        out.push(`TIGHT MASK (line-height ${lh.toFixed(1)}px < glyph box ${rects[0].height.toFixed(1)}px inside a clipping wrapper; descenders/ascenders will cut): ${desc(el)}`);
      }
    }
    return out;
  }, [rootSel, label]);

  let problems = [];
  // check at several scroll positions so sticky/pinned/fixed elements are measured in place
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  const stops = [];
  for (let y = 0; y < H; y += Math.round(+h * 0.8)) stops.push(y);
  for (const y of stops) {
    await p.evaluate(y => { window.__lenis ? window.__lenis.scrollTo(y, { immediate: true }) : window.scrollTo(0, y); window.scrollTo(0, y); }, y);
    await p.waitForTimeout(500);
    for (const s of await scan(null, `@y${y}`)) if (!problems.some(q => q.split(': ').slice(1).join(': ') === s.split(': ').slice(1).join(': '))) problems.push(s);
  }
  // INK CHECK (ground truth): rectangles miss glyph ink that overhangs the font box (italic tails, swashes,
  // descenders below a tight line-height). For every clipping wrapper that contains text, freeze animation,
  // screenshot its box expanded by ~0.45em, unclip it, screenshot again: any pixel difference = cut glyphs.
  await p.evaluate(() => {
    try { window.gsap && gsap.globalTimeline.pause(); } catch (e) {}
    document.querySelectorAll('canvas,video').forEach(c => c.style.setProperty('visibility', 'hidden', 'important'));
    const st = document.createElement('style'); st.id = '__ca'; st.textContent = '*{animation-play-state:paused!important;transition:none!important;caret-color:transparent!important}[data-inkfx],[data-inkfx] *{background:transparent!important;box-shadow:none!important;border-color:transparent!important;outline:none!important;text-decoration-color:transparent!important}[data-inkfx] svg,[data-inkfx] img{visibility:hidden!important}[data-inkfx]::before,[data-inkfx]::after,[data-inkfx] *::before,[data-inkfx] *::after{display:none!important}'; document.head.appendChild(st);
  });
  for (const y of stops) {
    await p.evaluate(y => window.scrollTo(0, y), y);
    await p.waitForTimeout(250);
    const cands = await p.evaluate(() => {
      const out = []; let id = 0;
      const vh = innerHeight, vw = innerWidth;
      document.querySelectorAll('body *').forEach(a => {
        const cs = getComputedStyle(a);
        const clips = (cs.overflowX !== 'visible' && !/auto|scroll/.test(cs.overflowX)) || (cs.overflowY !== 'visible' && !/auto|scroll/.test(cs.overflowY)) || (cs.clipPath && cs.clipPath !== 'none');
        if (!clips || cs.visibility === 'hidden' || +cs.opacity < 0.05) return;
        if (!a.textContent.trim() || a.querySelector('canvas,img,video,svg image')) return;
        const r = a.getBoundingClientRect();
        if (r.width < 4 || r.height < 4 || r.bottom < 0 || r.top > vh || r.right < 0 || r.left > vw) return;
        if (r.height > vh * 0.9) return; // page-level wrappers: covered by the rect check
        // only wrappers whose text is actually meant to be visible now: some text inside must be opaque and
        // overlap the wrapper (a mask hiding an inactive line on purpose is not a glyph cut)
        let shown = false;
        const tw = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, { acceptNode: n => n.nodeValue.trim() ? 1 : 2 });
        for (let n; (n = tw.nextNode()) && !shown;) {
          let op = 1; for (let e = n.parentElement; e && e !== document.body; e = e.parentElement) op *= +getComputedStyle(e).opacity;
          if (op < 0.5) continue;
          const rg = document.createRange(); rg.selectNodeContents(n);
          for (const q of rg.getClientRects()) if (q.bottom > r.top + 2 && q.top < r.bottom - 2 && q.right > r.left + 2 && q.left < r.right - 2) { shown = true; break; }
        }
        if (!shown) return;
        let el = a.querySelector('*') || a; const fs = parseFloat(getComputedStyle(a).fontSize) || 16;
        const pad = Math.ceil(fs * 0.45);
        a.setAttribute('data-ink', ++id);
        out.push({ id, x: Math.max(0, r.left - pad), y: Math.max(0, r.top - pad), w: Math.min(vw, r.right + pad) - Math.max(0, r.left - pad), h: Math.min(vh, r.bottom + pad) - Math.max(0, r.top - pad), t: a.textContent.trim().replace(/\s+/g, ' ').slice(0, 50), tag: a.tagName.toLowerCase() + '.' + String(a.className).split(' ')[0] });
      });
      return out.slice(0, 120);
    });
    for (const c of cands) {
      if (c.w < 2 || c.h < 2) continue;
      const clip = { x: c.x, y: c.y, width: c.w, height: c.h };
      await p.evaluate(id => document.querySelector(`[data-ink="${id}"]`).setAttribute('data-inkfx', ''), c.id);
      const a1 = await p.screenshot({ clip }); const a2 = await p.screenshot({ clip });
      if (!a1.equals(a2)) { await p.evaluate(id => document.querySelector(`[data-ink="${id}"]`).removeAttribute('data-inkfx'), c.id); continue; } // still moving: not measurable
      await p.evaluate(id => { const a = document.querySelector(`[data-ink="${id}"]`); a.style.setProperty('overflow', 'visible', 'important'); a.style.setProperty('clip-path', 'none', 'important'); }, c.id);
      const b1 = await p.screenshot({ clip });
      await p.evaluate(id => { const a = document.querySelector(`[data-ink="${id}"]`); a.style.removeProperty('overflow'); a.style.removeProperty('clip-path'); a.removeAttribute('data-inkfx'); }, c.id);
      if (!a1.equals(b1)) {
        const msg = `INK CUT by <${c.tag}> (pixels change when its clipping is removed): @y${y} "${c.t}"`;
        if (!problems.some(q => q.endsWith(`"${c.t}"`) && q.startsWith('INK'))) problems.push(msg);
      }
    }
    await p.evaluate(() => document.querySelectorAll('[data-ink]').forEach(a => a.removeAttribute('data-ink')));
  }
  await p.evaluate(() => { document.getElementById('__ca')?.remove(); document.querySelectorAll('canvas,video').forEach(c => c.style.removeProperty('visibility')); try { window.gsap && gsap.globalTimeline.resume(); } catch (e) {} });

  if (bios) {
    const n = await p.evaluate(() => document.querySelectorAll('[data-bio],[href*="/team/"],[href*="#/team/"],[href*="/people/"],[href*="/leadership/"]').length);
    for (let i = 0; i < Math.min(n, 30); i++) {
      const ok = await p.evaluate(i => {
        const el = document.querySelectorAll('[data-bio],[href*="/team/"],[href*="#/team/"],[href*="/people/"],[href*="/leadership/"]')[i];
        if (!el) return false; el.scrollIntoView({ block: 'center' }); el.click(); return true;
      }, i);
      if (!ok) continue;
      await p.waitForTimeout(1700);
      const sel = await p.evaluate(() => {
        const d = [...document.querySelectorAll('[role=dialog],[aria-modal=true],.bio,.overlay,.modal')].find(e => { const s = getComputedStyle(e); return s.visibility !== 'hidden' && s.display !== 'none' && e.getBoundingClientRect().height > 100; });
        if (!d) return null; d.setAttribute('data-clipaudit', '1'); return '[data-clipaudit]';
      });
      if (sel) {
        for (const s of await scan(sel, `bio#${i}`)) problems.push(s);
        await p.evaluate(() => document.querySelector('[data-clipaudit]').removeAttribute('data-clipaudit'));
      }
      await p.keyboard.press('Escape');
      await p.waitForTimeout(1100);
    }
  }
  problems = [...new Set(problems)];
  if (errs.length) problems.push('JS ERRORS: ' + errs.slice(0, 3).join(' | '));
  console.log(problems.length ? problems.slice(0, 60).join('\n') + (problems.length > 60 ? `\n...and ${problems.length - 60} more` : '') : 'OK');
  await b.close();
  process.exit(problems.length ? 1 : 0);
})();
