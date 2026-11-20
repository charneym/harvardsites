// Usage: node fit-audit.js <site>/index.html
// LAYOUT FIT gate (2026-11-20, finatem "€ 10–50 Mio23"): at 390, 1280, 1440, 1920 and 2560 every stat numeral's glyphs stay inside its own column
// and never intersect the next stat's glyphs. Also flags horizontal overflow. Scrolls to the stats and waits for counters to finish.
const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const file = path.resolve(process.argv[2]); const b = await chromium.launch(); const bad = []; let n = 0;
  for (const [w, h] of [[390, 844], [1280, 800], [1440, 900], [1920, 1080], [2560, 1440]]) {
    const p = await b.newPage({ viewport: { width: w, height: h } }); const errs = []; p.on('pageerror', e => errs.push(e.message));
    await p.goto('file://' + file + '#/'); await p.waitForTimeout(3200);
    const y = await p.evaluate(() => { const s = document.querySelector('#view .stats'); return s ? s.getBoundingClientRect().top + scrollY - innerHeight / 2 : -1 });
    if (y < 0) { await p.close(); continue; }
    for (let yy = 0; yy <= y; yy += 300) { await p.evaluate(v => window.scrollTo(0, v), yy); await p.waitForTimeout(80); }
    await p.waitForTimeout(3200);
    const r = await p.evaluate(() => {
      const box = v => { let l = 1e9, r = -1e9, t = 1e9, bt = -1e9; const tw = document.createTreeWalker(v, 4); let x; while ((x = tw.nextNode())) { if (!x.nodeValue.trim()) continue; const g = document.createRange(); g.selectNodeContents(x); for (const q of g.getClientRects()) { if (!q.width) continue; l = Math.min(l, q.left); r = Math.max(r, q.right); t = Math.min(t, q.top); bt = Math.max(bt, q.bottom) } } return r > l ? { l, r, t, b: bt } : null };
      const out = []; document.querySelectorAll('#view .stats').forEach(st => { const vs = [...st.querySelectorAll('.stat .v')];
        const bx = vs.map(v => ({ v, g: box(v), c: v.parentElement.getBoundingClientRect(), txt: v.textContent.trim() }));
        bx.forEach((o, i) => { if (!o.g) return; if (o.g.r > o.c.right + 1 || o.g.l < o.c.left - 1) out.push(`"${o.txt}" spills its column (${Math.round(o.g.l)}-${Math.round(o.g.r)} vs ${Math.round(o.c.left)}-${Math.round(o.c.right)})`);
          for (let j = i + 1; j < bx.length; j++) { const q = bx[j]; if (!q.g) continue; if (o.g.l < q.g.r && q.g.l < o.g.r && o.g.t < q.g.b && q.g.t < o.g.b) out.push(`"${o.txt}" overlaps "${q.txt}"`) } }) });
      if (document.documentElement.scrollWidth > innerWidth + 1) out.push('horizontal overflow ' + document.documentElement.scrollWidth);
      return out });
    r.forEach(x => bad.push(`${w}: ${x}`)); if (errs.length) bad.push(`${w}: JS ${errs[0].slice(0, 160)}`); n++;
    await p.close();
  }
  await b.close(); console.log(bad.length ? 'FAIL\n' + bad.join('\n') : `OK (${n} widths)`); process.exit(bad.length ? 1 : 0);
})();
