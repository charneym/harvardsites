// Usage: node unstyled-audit.js file.html
// Gate (client review round 5: "WHAT IS THIS FLOATING SECTION" — a grant headline written as class="gq" that no CSS rule
// ever styled, so it rendered as 16px body text floating in a dark band). Visits every top-level route, scrolls it, and lists
// classes used on visible text elements inside #view that no stylesheet selector mentions at all. A class with no rule
// usually means a component that was never styled (or a rule lost in a refactor).
const { chromium } = require('playwright'); const path = require('path');
(async () => { const f = process.argv[2]; const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto('file://' + path.resolve(f)); await p.waitForTimeout(3500);
  const routes = await p.evaluate(() => ['#/', ...new Set([...document.querySelectorAll('a[href^="#/"]')].map(a => a.getAttribute('href')).filter(h => h.split('/').filter(Boolean).length === 2))]);
  const found = new Map();
  for (const r of routes) {
    await p.evaluate(r => { location.hash = r; }, r); await p.waitForTimeout(2200);
    const res = await p.evaluate(() => {
      const sel = []; for (const sh of document.styleSheets) { let rules; try { rules = sh.cssRules; } catch (e) { continue; } const walk = rs => { for (const x of rs) { if (x.selectorText) sel.push(x.selectorText); if (x.cssRules) walk(x.cssRules); } }; walk(rules); }
      const all = sel.join(' ');
      const ignore = /^(ln|ln-mask|rel|ch|char|w|word|line|split|is-|has-|active|on|open|in|done|vis|sr-only|js-)/;
      const o = {};
      document.querySelectorAll('#view [class]').forEach(e => { if (!e.textContent.trim() || e.closest('[aria-hidden=true]')) return; const r = e.getBoundingClientRect(); if (r.width < 4 || r.height < 4) return;
        e.classList.forEach(c => { if (ignore.test(c)) return; const re = new RegExp('\\.' + c.replace(/[^\w-]/g, '\\$&') + '(?![\\w-])'); if (!re.test(all)) { o[c] = o[c] || (e.tagName.toLowerCase() + ' "' + e.textContent.trim().slice(0, 40) + '" ' + getComputedStyle(e).fontSize); } }); });
      return o; });
    for (const [c, ex] of Object.entries(res)) if (!found.has(c)) found.set(c, r + ' ' + ex);
  }
  console.log(found.size ? [...found].map(([c, ex]) => `UNSTYLED .${c}: ${ex}`).join('\n') : 'OK');
  await b.close(); process.exit(found.size ? 1 : 0); })();
