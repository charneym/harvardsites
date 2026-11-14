// Usage: node split-audit.js file.html [route ...]   (default: every #/ route linked from the nav)
// Gate for PRINCIPLES BS: a split-text reveal must not change layout. For every heading on each route, splits it into
// masked lines exactly the way the site does (SplitText lines+mask, linesClass "ln") using the page's own CSS, and
// compares the heading's height and each glyph line's top with the unsplit heading. Any shift > 1.5px means the text
// visibly "jumps" when the split is reverted (classic cause: collapsing negative margins on .ln-mask).
const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const [file, ...routes0] = process.argv.slice(2);
  const b = await chromium.launch(); const problems = [];
  for (const w of [1440, 390]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 } });
    await p.goto('file://' + path.resolve(file)); await p.waitForTimeout(3500);
    let routes = routes0.length ? routes0 : await p.evaluate(() => ['#/', ...new Set([...document.querySelectorAll('a[href^="#/"]')].map(a => a.getAttribute('href')).filter(h => h.split('/').length <= 2))]);
    for (const r of routes) {
      await p.evaluate(r => { location.hash = r.replace(/^#?/, '#'); }, r); await p.waitForTimeout(2600);
      // scroll the whole page so every pending split reveal runs and reverts, then settle
      for (let k = 0; k < 60; k++) { const done = await p.evaluate(() => scrollY + innerHeight >= document.documentElement.scrollHeight - 4); if (done) break; await p.mouse.wheel(0, 700); await p.waitForTimeout(160); }
      await p.waitForTimeout(2200);
      const res = await p.evaluate(() => {
        if (!window.SplitText) return ['no SplitText on page'];
        const out = [];
        const tops = el => { const tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); const ys = []; let n; while ((n = tw.nextNode())) { if (!n.nodeValue.trim()) continue; const rg = document.createRange(); rg.selectNodeContents(n); [...rg.getClientRects()].filter(x => x.width > 2).forEach(x => ys.push(Math.round(x.top + scrollY))); } return [...new Set(ys)].sort((a, b) => a - b); };
        const H = [...document.querySelectorAll('#view h1,#view h2,#view h3,main h1,main h2,main h3,.split')].filter(e => e.offsetParent && e.textContent.trim().length > 2 && !e.querySelector('.ln,.ln-mask'));
        for (const el of [...new Set(H)].slice(0, 40)) {
          const h0 = el.getBoundingClientRect().height, t0 = tops(el), nb = el.nextElementSibling, n0 = nb ? nb.getBoundingClientRect().top + scrollY : null;
          let s; try { s = SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'ln' }); } catch (e) { continue; }
          const h1 = el.getBoundingClientRect().height, t1 = tops(el), n1 = nb ? nb.getBoundingClientRect().top + scrollY : null;
          s.revert();
          const dt = t0.length === t1.length ? Math.max(...t0.map((v, i) => Math.abs(v - t1[i]))) : 99;
          const dn = n0 == null ? 0 : Math.abs(n1 - n0);
          if (dt > 1.5 || dn > 1.5) out.push(`"${el.textContent.trim().slice(0, 40)}" height ${Math.round(h0)}->${Math.round(h1)}, line shift ${dt}px, next block shift ${Math.round(dn)}px`);
        }
        return out;
      });
      res.forEach(x => problems.push(`[${w}] ${r}: ${x}`));
    }
    await p.close();
  }
  console.log(problems.length ? problems.slice(0, 30).join('\n') + (problems.length > 30 ? `\n...${problems.length - 30} more` : '') : 'OK');
  await b.close(); process.exit(problems.length ? 1 : 0);
})();
