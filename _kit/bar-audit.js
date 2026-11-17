// Usage: node bar-audit.js file.html [route ...]
// Gate (client review round 5, Kinea: "the bottom line animation ... can load before I scroll to it so it just looks static
// while the text around it comes up"). Scrolls each route with real wheel input and records, for every bar / track / rule
// that grows in (scaleX or width animation), how far it had grown when its row first came into view. A bar that is already
// fully grown on first sight, while it does animate (it was hidden earlier), animated off-screen: report it.
const { chromium } = require('playwright'); const path = require('path');
(async () => { const [f, ...r0] = process.argv.slice(2); const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto('file://' + path.resolve(f)); await p.waitForTimeout(3000);
  const routes = r0.length ? r0 : await p.evaluate(() => ['#/', ...new Set([...document.querySelectorAll('a[href^="#/"]')].map(a => a.getAttribute('href')).filter(h => h.split('/').filter(Boolean).length === 2))]);
  const out = [];
  for (const r of routes) {
    if (r !== '#/') { await p.evaluate(r => { location.hash = r; }, r); }
    await p.waitForTimeout(2200); await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(400);
    await p.evaluate(() => { window.__bars = new Map(); let id = 0;
      const sx = e => { const m = getComputedStyle(e).transform; if (!m || m === 'none') return 1; const v = m.match(/-?[\d.e-]+/g).map(Number); return v.length === 6 ? v[0] : v[0]; };
      window.__barTick = () => { document.querySelectorAll('#view [class*=bar], #view [class*=track] > *, #view [class*=fill], #view .prog, #view [class*=meter] > *').forEach(e => {
        const R = e.getBoundingClientRect(); if (R.height > 14 || R.height < 1) return; if (!e.__bid) e.__bid = ++id; let rec = window.__bars.get(e.__bid);
        const s = sx(e); if (!rec) { rec = { minAbove: s, seen: null, txt: ((e.closest('.prow,tr,li,[class*=row]') || e.parentElement).innerText || '').trim().split('\n')[0].slice(0, 40) }; window.__bars.set(e.__bid, rec); }
        if (rec.seen === null) { rec.minAbove = Math.min(rec.minAbove, s); if (R.top < innerHeight * 0.92 && R.bottom > 0) rec.seen = s; } }); }; });
    for (let k = 0; k < 140; k++) { await p.evaluate(() => window.__barTick()); const d = await p.evaluate(() => scrollY + innerHeight >= document.documentElement.scrollHeight - 4); if (d) break; await p.mouse.wheel(0, 140); await p.waitForTimeout(90); }
    const bad = await p.evaluate(() => { const o = []; window.__bars.forEach(r => { if (r.seen !== null && r.seen > 0.35 && r.minAbove < 0.2) o.push(r.txt); }); return o; });
    bad.slice(0, 4).forEach(t => out.push(`${r} "${t}" had already grown before it came into view`));
  }
  console.log(out.length ? out.join('\n') : 'OK'); await b.close(); process.exit(out.length ? 1 : 0); })();
