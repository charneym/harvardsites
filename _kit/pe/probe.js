// Usage: node _kit/pe/probe.js <url> [url...]   (run through flock /tmp/pw.lock)
// Research helper: for each page prints images (src, alt, natural size), outbound/article links with their text,
// background images, and the most used computed colours (text, backgrounds, borders) — for logo, photos and palette.
const { chromium } = require('playwright');
(async () => { const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1366, height: 900 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36' });
  for (const u of process.argv.slice(2)) { const p = await ctx.newPage();
    try { await p.goto(u, { timeout: 30000, waitUntil: 'domcontentloaded' }); await p.waitForTimeout(3500);
      await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); } });
      await p.waitForTimeout(800);
      const r = await p.evaluate(() => { const col = {}; const add = (k, v) => { if (!v || v === 'rgba(0, 0, 0, 0)' || v === 'transparent') return; col[k + ' ' + v] = (col[k + ' ' + v] || 0) + 1; };
        document.querySelectorAll('body *').forEach(e => { const s = getComputedStyle(e); if (e.innerText && e.children.length === 0) add('text', s.color); add('bg', s.backgroundColor); });
        const imgs = [...document.images].map(i => [i.currentSrc || i.src, i.alt, i.naturalWidth + 'x' + i.naturalHeight, (i.closest('header,nav') ? 'HEADER ' : '') + (i.closest('a') ? 'link:' + i.closest('a').href : '')]);
        const bgs = [...document.querySelectorAll('*')].map(e => getComputedStyle(e).backgroundImage).filter(x => /url\(/.test(x)).slice(0, 20);
        const links = [...document.querySelectorAll('main a[href], .entry-content a[href], article a[href], a[href*="news"], a[href*="prnewswire"], a[href*="businesswire"]')].map(a => [a.href, a.innerText.trim().slice(0, 80)]).filter(x => x[1] || true);
        return { imgs, bgs, links: [...new Map(links.map(l => [l[0], l])).values()], colors: Object.entries(col).sort((a, b) => b[1] - a[1]).slice(0, 14) }; });
      console.log('=== ' + u); r.imgs.forEach(i => console.log('IMG ' + i.join(' | '))); r.bgs.forEach(x => console.log('BG ' + x.slice(0, 200)));
      r.links.forEach(l => console.log('A ' + l[0] + ' | ' + l[1])); console.log('COLORS ' + r.colors.map(c => c[0] + '×' + c[1]).join(', '));
    } catch (e) { console.log('=== ' + u + ' ERROR ' + String(e).slice(0, 160)); } await p.close(); }
  await b.close(); })();
