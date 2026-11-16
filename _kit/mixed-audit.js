// Usage: node mixed-audit.js file.html [route ...]  (default: all top-level routes)
// Gate (client review round 5): within a section, either everything animates in on scroll or nothing does.
// Client: "why on some sites do some things in the same section animate up but not others!!! shouldn't everything?"
// Scrolls each route slowly with real wheel input; for each text block / rule / image it records whether it was
// hidden or displaced when it first entered the viewport. A section where some blocks animated and others appeared
// already in place is reported, with examples of the static ones.
const { chromium } = require('playwright'); const path = require('path');
(async () => { const [f, ...r0] = process.argv.slice(2); const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-webgl'] }); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto('file://' + path.resolve(f)); await p.waitForTimeout(3500);
  const routes = r0.length ? r0 : await p.evaluate(() => ['#/', ...new Set([...document.querySelectorAll('a[href^="#/"]')].map(a => a.getAttribute('href')).filter(h => h.split('/').filter(Boolean).length <= 2 && h !== '#/'))]);
  const out = [];
  for (const r of routes) {
    await p.evaluate(r => { location.hash = r; }, r); await p.waitForTimeout(2600); await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(600);
    await p.evaluate(() => { window.__mx = new Map(); let id = 0;
      const sel = '#view p, #view h2, #view h3, #view h4, #view li, #view dt, #view dd, #view figcaption, #view img, #view figure, #view hr, #view [class*=rule], #view [class*=label], #view [class*=eyebrow], #view [class*=kick]';
      const cands = () => { const set = new Set(document.querySelectorAll(sel)); document.querySelectorAll('#view *').forEach(e => { if ([...e.childNodes].some(n => n.nodeType === 3 && n.nodeValue.trim().length > 2)) set.add(e); }); return [...set].filter(e => !e.closest('.ln,.ln-mask,.w,.ch') || e.matches('p,h2,h3,h4,li')).filter(e => ![...set].some(o => o !== e && o.contains(e) && o.matches('p,h2,h3,h4,li,dt,dd,figcaption'))); };
      window.__mxTick = () => { cands().forEach(e => { if (e.closest('header,nav,footer,[role=dialog],[aria-hidden=true],.sr-only,[class*=story],[data-story],.pin-spacer')) return; const rc = e.getBoundingClientRect(); if (rc.width < 6 || rc.height < 2) return;
        if (!e.__mx) { e.__mx = ++id; }
        let rec = window.__mx.get(e.__mx); if (rec && rec.done) return;
        if (rc.top < innerHeight * 0.97 && rc.bottom > 0) { let op = 1, a = e; while (a && a !== document.body) { op *= +getComputedStyle(a).opacity; a = a.parentElement; }
          const y = rc.top + scrollY; if (!rec) { rec = { el: e, op0: op, y0: y, sec: (e.closest('section,[class*=sec],[class*=band]') || document.body), txt: (e.innerText || e.getAttribute('alt') || e.tagName).trim().slice(0, 30) }; window.__mx.set(e.__mx, rec); } rec.y1 = y; rec.op1 = op; } }); }; });
    for (let k = 0; k < 120; k++) { await p.evaluate(() => window.__mxTick()); const d = await p.evaluate(() => scrollY + innerHeight >= document.documentElement.scrollHeight - 4); if (d) break; await p.mouse.wheel(0, 220); await p.waitForTimeout(110); }
    for (let k = 0; k < 10; k++) { await p.evaluate(() => window.__mxTick()); await p.waitForTimeout(150); }
    const res = await p.evaluate(() => { const bySec = new Map(); window.__mx.forEach(rec => { if (!rec.sec.isConnected) return; const anim = rec.op0 < 0.55 || Math.abs((rec.y0 || 0) - (rec.y1 || 0)) > 10; const k = rec.sec; if (!bySec.has(k)) bySec.set(k, { a: [], s: [] }); (anim ? bySec.get(k).a : bySec.get(k).s).push(rec.txt); });
      const o = []; bySec.forEach((v, sec) => { if (v.a.length >= 2 && v.s.length >= 2) o.push(`section "${(sec.querySelector('h2,h3') || sec).innerText.trim().split('\n')[0].slice(0, 30)}": ${v.a.length} blocks animate, ${v.s.length} don't (e.g. ${v.s.slice(0, 3).map(x => '"' + x + '"').join(', ')})`); }); return o; });
    res.forEach(x => out.push(`${r} MIXED: ${x}`));
  }
  console.log(out.length ? out.slice(0, 12).join('\n') : 'OK'); await b.close(); process.exit(out.length ? 1 : 0); })();
