// Usage: node smoke.js file.html   — visits every top-level #/ route at 1440; fails on any JS pageerror or a near-empty view.
// Added after Via/Haima built with a missing helper: every route threw and home rendered blank, yet layout gates "passed".
const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const file = process.argv[2]; const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + path.resolve(file)); await p.waitForTimeout(3000);
  const routes = await p.evaluate(() => ['#/', ...new Set([...document.querySelectorAll('a[href^="#/"]')].map(a => a.getAttribute('href')).filter(h => h.split('/').filter(Boolean).length <= 2 && h !== '#/'))]);
  const bad = [];
  for (const r of routes) {
    const before = errs.length;
    await p.evaluate(r => { location.hash = r; }, r); await p.waitForTimeout(1800);
    const n = await p.evaluate(() => ((document.querySelector('#view') || document.querySelector('main') || document.body).innerText || '').trim().length);
    if (n < 200) bad.push(`${r}: near-empty view (${n} chars)`);
    if (errs.length > before) bad.push(`${r}: JS error: ${errs.slice(before).join(' | ').slice(0, 200)}`);
  }
  console.log(bad.length ? bad.join('\n') : `OK (${routes.length} routes)`); await b.close(); process.exit(bad.length ? 1 : 0);
})();
