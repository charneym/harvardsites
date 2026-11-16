// Usage: node polish-audit.js file.html [peopleRoute=#/team]
// Gate for PRINCIPLES v16 (client review round 4). Fails on:
//  OVERFLOW  visible text that runs past the viewport edge (e.g. a footer wordmark cut off) at 1440 or 390
//  MASKCLIP  a heading line wider than its reveal mask, so glyphs are hidden during the entrance and pop in at the end
//  UNDERLAP  during the page-load entrance, a heading's moving glyphs overlap another visible text block
//  POPIN     text in the first screen that is invisible mid-entrance and appears in one frame after it
//  HOVER     a person/card hover whose colour/filter/background change has a delay > 0.1s or no transition (snaps)
//  LINK      an internal #/ link that leads to a not-found view, or a link whose visible text is a single character
//  SCRUB     a scroll-coloured statement still partly faded when it sits in the middle of the screen
//  CUE       a scroll cue (line/arrow) in the hero: remove it
const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const [file, peopleRoute = '#/team'] = process.argv.slice(2); const url = 'file://' + path.resolve(file);
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist'] }); const out = [];
  // ---- entrance: UNDERLAP / POPIN / MASKCLIP (fresh load, preloader skipped via sessionStorage if the site uses it)
  for (const w of [1440, 390]) {
    const ctx = await b.newContext({ viewport: { width: w, height: 900 } }); const p = await ctx.newPage();
    await p.addInitScript(() => { window.__frames = []; const tick = () => { const v = document.querySelector('#view'); if (v) { const H = [...v.querySelectorAll('h1,h2')].filter(h => h.getBoundingClientRect().top < innerHeight); const f = { t: performance.now(), heads: [], masks: [] };
      H.forEach((h, hi) => { const others = [...v.querySelectorAll('p,h2,h3,a,button')].filter(o => !h.contains(o) && !o.contains(h)).map(o => { const r = o.getBoundingClientRect(); const s = getComputedStyle(o); return (r.width > 4 && r.height > 4 && +s.opacity > .2 && s.visibility !== 'hidden') ? r : null; }).filter(Boolean);
        const glyphs = [...h.querySelectorAll('.ln > *, .ch, .c, .w, .ln')].filter(g => +getComputedStyle(g).opacity > .15);
        let hit = 0; glyphs.forEach(g => { const r = g.getBoundingClientRect(); if (others.some(o => r.bottom > o.top + 3 && r.top < o.bottom - 3 && r.right > o.left && r.left < o.right)) hit++; });
        f.heads.push({ hi, hit, txt: h.textContent.trim().slice(0, 30), op: [...h.querySelectorAll('*')].filter(e => !e.children.length && e.textContent.trim()).map(e => { let o = 1, a = e; while (a && a !== h.parentElement) { o *= +getComputedStyle(a).opacity; a = a.parentElement; } const m = new DOMMatrixReadOnly(getComputedStyle(e).transform); const r = e.getBoundingClientRect(); return [Math.round(o * 100), Math.round(r.top), e.textContent.trim().slice(0, 4)]; }) });
        h.querySelectorAll('.ln-mask, [class*=mask]').forEach(m => { if (!/hidden|clip/.test(getComputedStyle(m).overflowX) && getComputedStyle(m).clipPath === 'none') return; const mr = m.getBoundingClientRect(); const rg = document.createRange(); rg.selectNodeContents(m); const cr = [...rg.getClientRects()].filter(x => x.width > 1); if (cr.length && Math.max(...cr.map(x => x.right)) > mr.right + 2) f.masks.push(h.textContent.trim().slice(0, 30)); }); });
      window.__frames.push(f); } if (performance.now() < 9000) requestAnimationFrame(tick); }; requestAnimationFrame(tick); });
    // emulate a slower device (4x CPU) so timer races (failsafes firing mid-entrance) show up as they do on real laptops
    const cdp = await ctx.newCDPSession(p); await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
    await p.goto(url); await p.waitForTimeout(9000);
    const fr = await p.evaluate(() => window.__frames);
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: 1 });
    const pop = new Set();
    for (let i = 1; i < fr.length; i++) { const dt = fr[i].t - fr[i - 1].t; if (dt > 160) continue; fr[i].heads.forEach((h, hi) => { const prev = fr[i - 1].heads[hi]; if (!prev || !prev.op || prev.op.length !== h.op.length) return; h.op.forEach((g, gi) => { const q = prev.op[gi]; if (q[0] < 35 && g[0] > 90) pop.add(`"${g[2]}" in "${h.txt}"`); if (Math.abs(q[1] - g[1]) > 120 && g[0] > 50) pop.add(`"${g[2]}" (jumps ${Math.abs(q[1] - g[1])}px) in "${h.txt}"`); }); }); }
    pop.forEach(t => out.push(`[${w}] POPIN: ${t} snaps into view in one frame instead of animating (often a failsafe timer firing before the entrance has finished)`));
    const und = new Set(), mc = new Set(); fr.forEach(f => { f.heads.forEach(h => { if (h.hit) und.add(h.txt); }); f.masks.forEach(m => mc.add(m)); });
    und.forEach(t => out.push(`[${w}] UNDERLAP: entrance glyphs of "${t}" overlap the text below/around it while animating`));
    // sub-route page heads: navigate (4x throttle) and watch the title entrance
    { const rts = await p.evaluate(() => [...new Set([...document.querySelectorAll('a[href^="#/"]')].map(a => a.getAttribute('href')).filter(h => h.split('/').filter(Boolean).length === 1))]);
      await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
      for (const rt of rts.slice(0, 6)) { await p.evaluate(() => window.scrollTo(0, 0)); await p.evaluate(r => { window.__frames = []; const t0 = performance.now(); const tick = () => { const v = document.querySelector('#view'); const h = v && v.querySelector('h1'); if (h) { const others = [...v.querySelectorAll('p,h2,h3,a,button')].filter(o => !h.contains(o)).map(o => { const r = o.getBoundingClientRect(); const s = getComputedStyle(o); return (r.width > 4 && r.height > 4 && +s.opacity > .2 && r.top < innerHeight) ? r : null; }).filter(Boolean);
            const g = [...h.querySelectorAll('.ln > *, .ch, .c, .w, .ln')].filter(x => +getComputedStyle(x).opacity > .15); let hit = 0; g.forEach(x => { const r = x.getBoundingClientRect(); if (others.some(o => r.bottom > o.top + 3 && r.top < o.bottom - 3 && r.right > o.left && r.left < o.right)) hit++; }); window.__frames.push(hit); }
            if (performance.now() - t0 < 4500) requestAnimationFrame(tick); }; location.hash = r; requestAnimationFrame(tick); }, rt);
        await p.waitForTimeout(4800); const hits = await p.evaluate(() => Math.max(0, ...window.__frames)); if (hits) out.push(`[${w}] ${rt} UNDERLAP: the page title's entrance glyphs overlap the text beneath it while animating`); }
      await cdp.send('Emulation.setCPUThrottlingRate', { rate: 1 }); await p.evaluate(() => { location.hash = '#/'; }); await p.waitForTimeout(2500); }
    mc.forEach(t => out.push(`[${w}] MASKCLIP: "${t}" is wider than its reveal mask, so glyphs are clipped during the entrance and pop in afterwards`));
    // OVERFLOW on every top-level route
    const routes = await p.evaluate(() => ['#/', ...new Set([...document.querySelectorAll('a[href^="#/"]')].map(a => a.getAttribute('href')).filter(h => h.split('/').filter(Boolean).length <= 2 && h !== '#/'))]);
    for (const r of routes) {
      await p.evaluate(r => { location.hash = r; }, r); await p.waitForTimeout(2200);
      for (let k = 0; k < 60; k++) { const d = await p.evaluate(() => scrollY + innerHeight >= document.documentElement.scrollHeight - 4); if (d) break; await p.mouse.wheel(0, 900); await p.waitForTimeout(90); }
      await p.waitForTimeout(1500);
      const ov = await p.evaluate(() => { const res = []; const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n; while ((n = tw.nextNode())) { if (!n.nodeValue.trim()) continue; const el = n.parentElement; const s = getComputedStyle(el); if (s.visibility === 'hidden' || +s.opacity < .1 || el.closest('.sr-only,[role=dialog],.ps')) continue; const rg = document.createRange(); rg.selectNodeContents(n); for (const r of rg.getClientRects()) { if (r.width < 2) continue; if (r.right > innerWidth + 1 || r.left < -1) { let a = el, clipped = false; while (a && a !== document.body) { const cs = getComputedStyle(a); if (/hidden|clip|auto|scroll/.test(cs.overflowX) && a.getBoundingClientRect().right <= innerWidth + 1) { clipped = true; break; } a = a.parentElement; } res.push((clipped ? 'cut off: ' : 'off-screen: ') + n.nodeValue.trim().slice(0, 30)); break; } } } return [...new Set(res)].slice(0, 6); });
      if (ov.length) out.push(`[${w}] ${r} OVERFLOW: text runs past the screen edge (${ov.join(' | ')})`);
      // SCRUB: scroll-coloured statements fully coloured when centred
      if (w === 1440) { const sc = await p.evaluate(async () => { const res = []; const cands = [...document.querySelectorAll('#view p, #view h2, #view div')].filter(e => e.querySelectorAll('span,div').length >= 10 && (e.innerText || '').split(/\s+/).length >= 15 && parseFloat(getComputedStyle(e).fontSize) >= 24 && ![...e.children].some(k => (k.innerText || '').split(/\s+/).length >= 15 && k.querySelectorAll('span,div').length >= 10));
          for (const e of cands) { const r = e.getBoundingClientRect(); window.scrollTo(0, r.top + scrollY + r.height / 2 - innerHeight / 2); await new Promise(z => setTimeout(z, 1600)); const ws = [...e.querySelectorAll('span,div')].filter(x => !x.children.length && x.textContent.trim()); const faded = ws.filter(x => +getComputedStyle(x).opacity < .9 || /rgba\(.*,\s*0?\.[0-8]/.test(getComputedStyle(x).color)); if (faded.length) res.push(`"${e.innerText.trim().slice(0, 30)}" has ${faded.length} words still faded when the block is centred`); } return res; });
        sc.forEach(x => out.push(`[1440] ${r} SCRUB: ${x}; finish the colour sweep by the time the block reaches mid-screen`)); }
    }
    // LINK + CUE (once, at 1440)
    if (w === 1440) {
      await p.evaluate(() => { location.hash = '#/'; }); await p.waitForTimeout(2000);
      const cue = await p.evaluate(() => [...document.querySelectorAll('#view .hero *, #view header *, #hero *')].filter(e => /scroll|cue/i.test((e.className && String(e.className)) + ' ' + (e.getAttribute('aria-label') || ''))).filter(e => e.getBoundingClientRect().height > 8).length);
      if (cue) out.push(`[1440] CUE: the hero has a scroll cue (line/arrow); remove it`);
      const links = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => ({ h: a.getAttribute('href'), t: (a.innerText || '').trim(), l: a.getAttribute('aria-label') || '' })));
      const singles = [...new Set(links.filter(l => l.t.length === 1 && /[A-Za-z0-9]/.test(l.t)).map(l => `"${l.t}" → ${l.h}`))];
      singles.forEach(s => out.push(`[1440] LINK: single-character link ${s}; remove it or make it a real labelled link`));
      const internal = [...new Set(links.map(l => l.h).filter(h => /^#\//.test(h)))];
      for (const h of internal) { await p.evaluate(h => { location.hash = h; }, h); await p.waitForTimeout(900); const nf = await p.evaluate(() => /not found|page (doesn.t|does not) exist|no such page|^\s*404\s*$/im.test((document.querySelector('#view') || document.body).innerText.slice(0, 600))); if (nf) out.push(`[1440] LINK: ${h} leads to a not-found page`); }
      await p.keyboard.press('Escape').catch(() => {});
    }
    await ctx.close();
  }
  // ---- HOVER on people/cards
  { const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } }); const p = await ctx.newPage(); await p.goto(url + peopleRoute); await p.waitForTimeout(3500);
    for (let k = 0; k < 40; k++) { const d = await p.evaluate(() => scrollY + innerHeight >= document.documentElement.scrollHeight - 4); if (d) break; await p.mouse.wheel(0, 900); await p.waitForTimeout(90); }
    const n = await p.evaluate(() => { const T = [...document.querySelectorAll('#view [data-bio],#view [data-person],#view a[href*="#/team/"],#view a[href*="#/company/"],#view article,#view [class*=card]')].filter(e => e.offsetParent && e.getBoundingClientRect().width > 120); T.slice(0, 6).forEach((e, i) => e.setAttribute('data-ph', i)); return Math.min(T.length, 6); });
    const issues = new Set();
    for (let i = 0; i < n; i++) {
      await p.evaluate(i => document.querySelector(`[data-ph="${i}"]`).scrollIntoView({ block: 'center' }), i); await p.mouse.move(5, 5); await p.waitForTimeout(500);
      const snap = () => p.evaluate(i => { const c = document.querySelector(`[data-ph="${i}"]`); return [c, ...c.querySelectorAll('*')].slice(0, 60).map(e => { const s = getComputedStyle(e); return [s.color, s.backgroundColor, s.filter, s.opacity, s.borderColor, s.transitionProperty, s.transitionDuration, s.transitionDelay].join('|'); }); }, i);
      const snapTf = () => p.evaluate(i => { const c = document.querySelector(`[data-ph="${i}"]`); return [c, ...c.querySelectorAll('*')].slice(0, 60).map(e => { const s = getComputedStyle(e); return s.transform + '|' + s.clipPath + '|' + s.filter + '|' + s.opacity + '|' + s.backgroundColor; }).join(';'); }, i);
      const tf0 = await snapTf();
      const before = await snap(); const box = await p.evaluate(i => { const r = document.querySelector(`[data-ph="${i}"]`).getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; }, i);
      await p.mouse.move(box.x, box.y); await p.waitForTimeout(900); const after = await snap(); const tf1 = await snapTf();
      const isLink = await p.evaluate(i => { const c = document.querySelector(`[data-ph="${i}"]`); return !!(c.closest('a') || c.querySelector('a') || c.matches('[data-bio],[data-person]')); }, i);
      if (isLink && tf0 === tf1 && before.join() !== after.join()) issues.add('only changes text colour (no arrow, portrait or underline motion): add the specified hover');
      before.forEach((bv, j) => { if (!after[j] || bv === after[j]) return; const [c0, bg0, f0, o0, bc0] = bv.split('|'), [c1, bg1, f1, o1, bc1, tp, td, tdl] = after[j].split('|'); const changed = []; if (c0 !== c1) changed.push('color'); if (bg0 !== bg1) changed.push('background'); if (f0 !== f1) changed.push('filter'); if (o0 !== o1) changed.push('opacity'); if (!changed.length) return;
        const props = tp.split(',').map(s => s.trim()), durs = td.split(',').map(parseFloat), dels = tdl.split(',').map(parseFloat);
        changed.forEach(cp => { const idx = props.findIndex(x => x === 'all' || x === cp || (cp === 'background' && x.startsWith('background'))); if (idx < 0 || !(durs[idx % durs.length] >= .12)) issues.add(`${cp} snaps with no transition`); else if (dels[idx % dels.length] > .1) issues.add(`${cp} starts after a ${dels[idx % dels.length]}s delay`); }); });
    }
    issues.forEach(x => out.push(`[1440] ${peopleRoute} HOVER: card ${x}; hover must start at once and ease over 0.2-0.4s`)); await ctx.close(); }
  const u = [...new Set(out)]; console.log(u.length ? u.join('\n') : 'OK'); await b.close(); process.exit(u.length ? 1 : 0);
})();
