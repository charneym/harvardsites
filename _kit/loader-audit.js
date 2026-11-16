// Usage: node loader-audit.js file.html — at 390 and 1440, samples the preloader for its first 1.5s and fails if any two
// visible text pieces inside it overlap (e.g. the tagline running under the counter).
const { chromium } = require('playwright'); const path = require('path');
(async () => { const f = process.argv[2]; const b = await chromium.launch(); const out = new Set();
  for (const w of [390, 1440]) { const p = await b.newPage({ viewport: { width: w, height: w < 500 ? 844 : 900 } });
    await p.goto('file://' + path.resolve(f));
    for (let t = 0; t < 15; t++) { const r = await p.evaluate(() => { const pre = document.querySelector('#pre,.pre,#loader,.loader,[class*=preload]'); if (!pre || getComputedStyle(pre).display === 'none' || getComputedStyle(pre).visibility === 'hidden') return null;
        const leaves = [...pre.querySelectorAll('*')].filter(e => e.childElementCount === 0 && e.textContent.trim().length > 1 && +getComputedStyle(e).opacity > .2).map(e => ({ t: e.textContent.trim().slice(0, 20), r: e.getBoundingClientRect() })).filter(x => x.r.width > 2);
        // group leaves by their nearest block parent text to avoid flagging letters of one word
        const hits = []; for (let i = 0; i < leaves.length; i++) for (let j = i + 1; j < leaves.length; j++) { const a = leaves[i].r, c = leaves[j].r; const ox = Math.min(a.right, c.right) - Math.max(a.left, c.left), oy = Math.min(a.bottom, c.bottom) - Math.max(a.top, c.top); if (ox > 4 && oy > 4) hits.push(leaves[i].t + ' / ' + leaves[j].t); } return hits; });
      if (r) r.forEach(h => out.add(`[${w}] loader text overlaps: ${h}`)); await p.waitForTimeout(100); }
    await p.close(); }
  console.log(out.size ? [...out].slice(0, 4).join('\n') : 'OK'); await b.close(); process.exit(out.size ? 1 : 0); })();
