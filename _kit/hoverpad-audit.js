const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  for (const s of process.argv.slice(2)) { const out = new Map();
    try { await p.goto('file:///home/user/harvardsites/' + s + '/index.html'); await p.waitForTimeout(2500);
      const routes = await p.evaluate(() => ['#/', ...new Set([...document.querySelectorAll('a[href^="#/"]')].map(a => a.getAttribute('href')).filter(h => h.split('/').filter(Boolean).length === 2))]);
      for (const r of routes) { if (r !== '#/') { await p.evaluate(r => location.hash = r, r); await p.waitForTimeout(1500); }
        const res = await p.evaluate(() => { const o = [];
          document.querySelectorAll('#view *').forEach(el => { const a = getComputedStyle(el, '::after'); if (a.content === 'none' || a.position !== 'absolute' || !/gradient/.test(a.backgroundImage)) return;
            const R = el.getBoundingClientRect(); if (R.width < 150 || R.height < 40) return;
            const glowL = R.left + parseFloat(a.left || 0), glowR = R.right - parseFloat(a.right || 0);
            const tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); let n, L = 1e9, Rt = -1e9; while (n = tw.nextNode()) { if (!n.nodeValue.trim()) continue; const rg = document.createRange(); rg.selectNodeContents(n); for (const q of rg.getClientRects()) { if (q.width) { L = Math.min(L, q.left); Rt = Math.max(Rt, q.right); } } }
            if (L > 1e8) return; const gl = L - glowL; if (gl < 14) o.push([(el.className || el.tagName).toString().split(' ')[0], Math.round(gl)]); });
          return o; });
        res.forEach(([c, g]) => { if (!out.has(c)) out.set(c, r + ' gap ' + g + 'px'); }); } } catch (e) { out.set('ERR', e.message.slice(0, 50)); }
    console.log(s, out.size ? [...out].map(([c, v]) => '.' + c + ' ' + v).join(' ; ') : 'OK'); }
  await b.close(); })();
