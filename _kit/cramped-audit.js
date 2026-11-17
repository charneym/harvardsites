// Flags display headings squeezed into a narrow column: many lines while the section has lots of free width.
const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  for (const s of process.argv.slice(2)) { const out = [];
    try { await p.goto('file:///home/user/harvardsites/' + s + '/index.html'); await p.waitForTimeout(2500);
      const routes = await p.evaluate(() => ['#/', ...new Set([...document.querySelectorAll('a[href^="#/"]')].map(a => a.getAttribute('href')).filter(h => h.split('/').filter(Boolean).length === 2))]);
      for (const r of routes) { if (r !== '#/') { await p.evaluate(r => location.hash = r, r); await p.waitForTimeout(1600); }
        const bad = await p.evaluate(() => { const o = [];
          document.querySelectorAll('#view h1, #view h2').forEach(h => { if (h.closest('[aria-hidden=true],[role=dialog],.hero')) return; const r = h.getBoundingClientRect(); if (r.width < 50 || r.height < 20) return;
            const lh = parseFloat(getComputedStyle(h).lineHeight) || parseFloat(getComputedStyle(h).fontSize) * 1.1; const lines = Math.round(r.height / lh); const words = h.textContent.trim().split(/\s+/).length;
            const wrap = h.closest('.wrap,section') || document.body; const W = wrap.getBoundingClientRect().width;
            if (lines >= 4 && words / lines < 2.2 && r.width < W * 0.5) o.push(`"${h.textContent.trim().slice(0, 40)}" ${lines} lines in ${Math.round(r.width)}px of ${Math.round(W)}px`); });
          return o; });
        bad.forEach(x => out.push(r + ' ' + x)); }
    } catch (e) { out.push('ERR ' + e.message.slice(0, 60)); }
    console.log(s, out.length ? out.join(' ; ') : 'OK'); }
  await b.close(); })();
