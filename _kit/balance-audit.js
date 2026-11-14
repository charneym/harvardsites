// Usage: node balance-audit.js file.html [route ...]   (default: every top-level #/ route in the nav)
// Gate for PRINCIPLES BU/BX/BZ/BT (client review round 3). At 1440 and 390, after scrolling every route so all reveals
// have settled, fails on layout that looks unfinished:
//  ROW     a grid/flex row of cards, people or logos whose last row is short and NOT centred (dead column on one side)
//  ORPHAN  an image/figure/card narrower than 60% of its section with nothing beside it (a "hanging" photo)
//  VOID    a bordered/filled card whose content fills less than 60% of its height (an empty box with a stranded label)
//  CENTRE  a statement paragraph (>=20 words, >=24px type) whose block is not centred on the page when nothing sits beside it
//  FOOTER  the footer has no living background (canvas or animated SVG), i.e. the hero visual does not bookend the page
const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const [file, ...routes0] = process.argv.slice(2);
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist'] }); const problems = [];
  for (const w of [1440, 390]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 } });
    await p.goto('file://' + path.resolve(file)); await p.waitForTimeout(3500);
    const routes = routes0.length ? routes0 : await p.evaluate(() => ['#/', ...new Set([...document.querySelectorAll('a[href^="#/"]')].map(a => a.getAttribute('href')).filter(h => h.split('/').filter(Boolean).length <= 2 && h !== '#/'))]);
    for (const r of routes) {
      await p.evaluate(r => { location.hash = r; }, r); await p.waitForTimeout(2600);
      for (let k = 0; k < 80; k++) { const d = await p.evaluate(() => scrollY + innerHeight >= document.documentElement.scrollHeight - 4); if (d) break; await p.mouse.wheel(0, 700); await p.waitForTimeout(150); }
      await p.waitForTimeout(2000);
      const res = await p.evaluate((w) => {
        const out = []; const VW = innerWidth;
        const vis = e => { const s = getComputedStyle(e), r = e.getBoundingClientRect(); return r.width > 8 && r.height > 8 && s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > 0.05; };
        const R = e => { const r = e.getBoundingClientRect(); return { l: r.left, r: r.right, t: r.top + scrollY, b: r.bottom + scrollY, w: r.width, h: r.height }; };
        const label = e => (e.className && String(e.className).split(' ')[0] ? '.' + String(e.className).split(' ')[0] : e.tagName.toLowerCase()) + ' "' + (e.innerText || e.getAttribute('alt') || '').trim().replace(/\s+/g, ' ').slice(0, 36) + '"';
        const root = document.querySelector('#view') || document.querySelector('main') || document.body;
        const inStory = e => !!e.closest('[data-story],.story,.sfx,[class*=story],[class*=pin]');
        const boxy = e => { const s = getComputedStyle(e); return (parseFloat(s.borderTopWidth) > 0 && s.borderTopStyle !== 'none' && parseFloat(s.borderLeftWidth) > 0) || (s.backgroundColor !== 'rgba(0, 0, 0, 0)' && s.backgroundColor !== getComputedStyle(e.parentElement).backgroundColor) || s.boxShadow !== 'none'; };
        // ROW: containers with >=2 similar visible children laid out in rows
        root.querySelectorAll('*').forEach(c => {
          if (!vis(c) || inStory(c)) return; const s = getComputedStyle(c);
          if (!/grid|flex/.test(s.display) || (s.display.includes('flex') && s.flexWrap !== 'wrap' && !s.display.includes('grid'))) return;
          const kids = [...c.children].filter(vis).filter(k => R(k).w >= 150 && R(k).h >= 110); if (kids.length < 2 || kids.length !== [...c.children].filter(vis).length) return;
          const tags = new Set(kids.map(k => k.tagName + (String(k.className).split(' ')[0] || ''))); if (tags.size > 1) return;
          const rows = {}; kids.forEach(k => { const y = Math.round(R(k).t / 8); (rows[y] = rows[y] || []).push(k); });
          const ys = Object.keys(rows).map(Number).sort((a, b) => a - b); if (ys.length < 1) return;
          const per = Math.max(...ys.map(y => rows[y].length)); const last = rows[ys[ys.length - 1]];
          const cr = R(c); if (cr.w < VW * 0.5) return;
          if (ys.length === 1 && per >= 2) { // single row: does it fill the container, or sit left with a dead column?
            const l = Math.min(...last.map(k => R(k).l)), rr = Math.max(...last.map(k => R(k).r));
            const gapR = cr.r - rr, gapL = l - cr.l; const kw = R(last[0]).w;
            if (gapR > kw * 0.6 && gapR - gapL > kw * 0.6) out.push(`ROW ${label(c)}: ${last.length} items leave an empty ${Math.round(gapR)}px column on the right; centre the row or size the columns to the item count`);
            return;
          }
          if (last.length < per) { const l = Math.min(...last.map(k => R(k).l)), rr = Math.max(...last.map(k => R(k).r)); const off = ((l + rr) / 2 - (cr.l + cr.r) / 2); if (Math.abs(off) > cr.w * 0.06) out.push(`ROW ${label(c)}: last row has ${last.length}/${per} items and is off-centre by ${Math.round(off)}px; centre the short row`); }
        });
        // ORPHAN: figure/img/card alone in a band
        const secs = [...root.querySelectorAll('section,.sec,[class*=section]')].filter(vis);
        root.querySelectorAll('figure,img,picture,video,canvas').forEach(m => {
          if (!vis(m) || inStory(m) || m.closest('header,footer,nav,[role=dialog],a[class*=logo],[class*=logo],[class*=partner],[class*=team],[class*=person]')) return;
          const fr = m.closest('figure') || m; const r = R(fr); if (r.w < 160 || r.h < 120) return;
          const sec = fr.closest('section') || root; const sr = R(sec); if (r.w >= sr.w * 0.6) return;
          const beside = [...sec.querySelectorAll('h1,h2,h3,h4,p,li,img,figure,svg,canvas,a,button,dl,table')].filter(vis).filter(e => !fr.contains(e) && !e.contains(fr)).some(e => { const q = R(e); return q.b > r.t + 20 && q.t < r.b - 20 && (q.l >= r.r - 4 || q.r <= r.l + 4); });
          if (!beside) out.push(`ORPHAN ${label(fr)} is ${Math.round(r.w)}px wide in a ${Math.round(sr.w)}px section with nothing beside it; compose it with text or give it the full measure`);
        });
        // VOID: cards with empty interiors
        root.querySelectorAll('article,li,a,div').forEach(c => {
          if (!vis(c) || inStory(c) || c.closest('[role=dialog],header,footer,nav')) return; const r = R(c);
          if (r.h < 160 || r.w < 180 || r.w > VW * 0.9 || !boxy(c)) return;
          const ink = [...c.querySelectorAll('*')].filter(e => vis(e) && (e.children.length === 0 || /IMG|SVG|CANVAS/.test(e.tagName)));
          if (!ink.length) return;
          if ([...c.querySelectorAll('svg,canvas,img')].some(g => vis(g) && R(g).w * R(g).h > r.w * r.h * 0.4)) return; // graphic-led tile
          // union of the vertical spans actually covered by content
          const spans = ink.map(e => R(e)).map(q => [Math.max(q.t, r.t), Math.min(q.b, r.b)]).filter(s => s[1] > s[0]).sort((a, b) => a[0] - b[0]);
          let cov = 0, cur = null; spans.forEach(s => { if (!cur || s[0] > cur[1]) { if (cur) cov += cur[1] - cur[0]; cur = [...s]; } else cur[1] = Math.max(cur[1], s[1]); }); if (cur) cov += cur[1] - cur[0];
          const pad = parseFloat(getComputedStyle(c).paddingTop) + parseFloat(getComputedStyle(c).paddingBottom);
          // largest vertical gap between content runs (a stranded label at the bottom)
          let gap = 0; for (let i = 1; i < spans.length; i++) gap = Math.max(gap, spans[i][0] - Math.max(...spans.slice(0, i).map(s => s[1])));
          if (gap > Math.max(70, r.h * 0.25)) out.push(`VOID ${label(c)}: card ${Math.round(r.h)}px tall has an empty gap of ${Math.round(gap)}px inside; size cards to content and keep labels with their text`);
          else if ((cov + pad) / r.h < 0.56) out.push(`VOID ${label(c)}: content covers only ${Math.round((cov + pad) / r.h * 100)}% of a ${Math.round(r.h)}px card`);
        });
        // CENTRE: statement paragraphs alone in their band
        if (w >= 1024) root.querySelectorAll('p,h2,blockquote,div').forEach(e => {
          if (!vis(e) || inStory(e)) return; const s = getComputedStyle(e); if (parseFloat(s.fontSize) < 24) return;
          const words = (e.innerText || '').trim().split(/\s+/).length; if (words < 20) return;
          if (e.querySelectorAll('span,div').length < 10) return; // only scroll-coloured statements (word-split), not plain intro ledes
          if ([...e.children].some(k => /^(P|H2|DIV|BLOCKQUOTE)$/.test(k.tagName) && (k.innerText || '').trim().split(/\s+/).length >= 20)) return; // innermost only
          const r = R(e); const sec = e.closest('section') || root;
          const beside = [...sec.querySelectorAll('h1,h2,h3,p,img,figure,svg,canvas,dl,ul')].filter(vis).filter(x => !e.contains(x) && !x.contains(e)).some(x => { const q = R(x); return q.b > r.t + 10 && q.t < r.b - 10 && (q.l >= r.r - 4 || q.r <= r.l + 4); });
          if (beside) return; const off = (r.l + r.r) / 2 - VW / 2;
          if (Math.abs(off) > VW * 0.04) out.push(`CENTRE ${label(e)}: statement block is off-centre by ${Math.round(off)}px with nothing beside it; centre the block (keep the text left-aligned)`);
        });
        return out;
      }, w);
      res.forEach(x => problems.push(`[${w}] ${r}: ${x}`));
    }
    if (w === 1440) {
      const f = await p.evaluate(() => { const ft = document.querySelector('footer'); if (!ft) return 'no <footer>'; const c = ft.querySelector('canvas'); const svgN = [...ft.querySelectorAll('svg')].reduce((a, s) => Math.max(a, s.querySelectorAll('*').length), 0); return c || svgN > 30 ? '' : 'footer has no living background (no canvas / animated SVG)'; });
      if (f) problems.push(`[1440] FOOTER ${f}; put the hero's living visual (quieter) behind the footer wordmark`);
    }
    await p.close();
  }
  const uniq = [...new Set(problems)];
  console.log(uniq.length ? uniq.slice(0, 40).join('\n') + (uniq.length > 40 ? `\n...${uniq.length - 40} more` : '') : 'OK');
  await b.close(); process.exit(uniq.length ? 1 : 0);
})();
