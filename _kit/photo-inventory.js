// Usage: node photo-inventory.js https://their-site.com out-prefix [built-file.html]
// For PRINCIPLES BJ/BK. Crawls their real site (home + up to 24 internal pages) in Chromium and lists every
// meaningful image: <img>/<picture>/CSS background images at least 160px on a side, plus the logo.
// Writes <out-prefix>.json and a labelled contact sheet <out-prefix>.png to LOOK at, and (if a built file is
// given) marks which images the concept already uses. Also prints the logo's dominant colours (pixel-sampled,
// works for raster and SVG logos) so the palette can be derived from the real brand.
const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const [site, out, built] = process.argv.slice(2);
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36' });
  const p = await ctx.newPage();
  const imgs = new Map(); let logo = null; const pages = [site];
  const seen = new Set();
  for (let i = 0; i < pages.length && i < 25; i++) {
    const u = pages[i]; if (seen.has(u)) continue; seen.add(u);
    try { await p.goto(u, { timeout: 30000, waitUntil: 'domcontentloaded' }); } catch (e) { continue; }
    await p.waitForTimeout(2500);
    // lazy images: scroll the page
    for (let y = 0; y < 12; y++) { await p.mouse.wheel(0, 800); await p.waitForTimeout(150); }
    await p.waitForTimeout(800);
    const r = await p.evaluate(() => {
      const host = location.host; const list = [];
      const abs = s => { try { return new URL(s, location.href).href; } catch (e) { return null; } };
      document.querySelectorAll('img,picture source').forEach(el => {
        const src = abs(el.currentSrc || el.src || (el.srcset || '').split(',').pop().trim().split(' ')[0]);
        if (!src || src.startsWith('data:')) return;
        const rr = el.getBoundingClientRect();
        list.push({ src, w: el.naturalWidth || Math.round(rr.width), h: el.naturalHeight || Math.round(rr.height), alt: el.alt || '', ctx: (el.closest('section,header,footer,main,div') || {}).className || '' });
      });
      document.querySelectorAll('*').forEach(el => {
        const bg = getComputedStyle(el).backgroundImage; if (!bg || bg === 'none') return;
        const m = bg.match(/url\(["']?([^"')]+)/); if (!m) return; const src = abs(m[1]); if (!src || src.startsWith('data:')) return;
        const rr = el.getBoundingClientRect(); list.push({ src, w: Math.round(rr.width), h: Math.round(rr.height), alt: '(css background)', ctx: String(el.className).slice(0, 40) });
      });
      const lg = [...document.querySelectorAll('header img, header svg, a[href="/"] img, a[href="/"] svg, [class*=logo] img, img[alt*=logo i], img[src*=logo i], [class*=logo] svg')].find(e => { const q = e.getBoundingClientRect(); return q.width > 30 && q.height > 10; });
      let logoBox = null; if (lg) { const q = lg.getBoundingClientRect(); logoBox = { x: q.left + scrollX, y: q.top + scrollY, w: q.width, h: q.height, src: lg.currentSrc || lg.src || '(inline svg)' }; }
      const links = [...new Set([...document.querySelectorAll('a[href]')].map(a => a.href.split('#')[0]).filter(h => { try { const x = new URL(h); return x.host === host && !/\.(pdf|jpg|png|zip|docx?)$/i.test(x.pathname) && !/cart|login|account|privacy|terms|cookie/i.test(x.pathname); } catch (e) { return false; } }))];
      return { list, logoBox, links };
    });
    r.list.forEach(x => { const k = x.src.split('?')[0]; const o = imgs.get(k); if (!o || x.w * x.h > o.w * o.h) imgs.set(k, { ...x, page: u }); });
    r.links.forEach(l => { if (!seen.has(l) && !pages.includes(l)) pages.push(l); });
    if (!logo && r.logoBox) {
      await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(600);
      const box = await p.evaluate(() => { const lg = [...document.querySelectorAll('header img, header svg, a[href="/"] img, a[href="/"] svg, [class*=logo] img, img[alt*=logo i], img[src*=logo i], [class*=logo] svg')].find(e => { const q = e.getBoundingClientRect(); return q.width > 30 && q.height > 10 && q.top >= 0; }); if (!lg) return null; const q = lg.getBoundingClientRect(); return { x: q.left, y: q.top, width: q.width, height: q.height }; });
      const buf = box ? await p.screenshot({ clip: box }).catch(() => null) : null;
      if (buf) logo = { src: r.logoBox.src, png: buf.toString('base64') };
    }
  }
  let list = [...imgs.values()].filter(x => (x.w >= 160 && x.h >= 160) || /logo/i.test(x.src + x.alt));
  const builtHtml = built && fs.existsSync(built) ? fs.readFileSync(built, 'utf8') : '';
  const keyOf = u => { const b = u.split('?')[0]; const m = b.match(/[0-9a-f]{6}_[0-9a-f]{20,}(~mv2)?/i) || b.match(/[0-9a-f-]{24,}/i); return m ? m[0] : b.split('/').pop(); };
  // collapse CDN size variants of the same asset (Wix/Squarespace put resize params in the path)
  const byKey = new Map(); list.forEach(x => { const k = keyOf(x.src); const o = byKey.get(k); if (!o || x.w * x.h > o.w * o.h) byKey.set(k, x); }); list = [...byKey.values()];
  list.forEach(x => { const base = x.src.split('?')[0]; x.used = !!builtHtml && (builtHtml.includes(base) || builtHtml.includes(keyOf(x.src))); x.stockGuess = /dreamstime|shutterstock|istock|adobestock|pexels|unsplash|pixabay|getty|stock|ChatGPT|dall|midjourney|wallpaper/i.test(x.src + ' ' + x.alt); });
  list.sort((a, b) => (a.stockGuess - b.stockGuess) || (b.w * b.h - a.w * a.h));
  // logo palette: sample pixels in a page canvas (no CORS issue: we feed it our own screenshot)
  let palette = [];
  if (logo) {
    const q = await b.newPage();
    palette = await q.evaluate(async (png) => {
      const im = new Image(); im.src = 'data:image/png;base64,' + png; await im.decode();
      const c = document.createElement('canvas'); c.width = im.width; c.height = im.height; const g = c.getContext('2d'); g.drawImage(im, 0, 0);
      const d = g.getImageData(0, 0, c.width, c.height).data; const bins = {};
      const corner = (x, y) => { const i = (y * c.width + x) * 4; return [d[i], d[i + 1], d[i + 2]]; }; const bg = corner(1, 1);
      for (let i = 0; i < d.length; i += 4) {
        const r = d[i], gg = d[i + 1], bb = d[i + 2];
        if (Math.abs(r - bg[0]) + Math.abs(gg - bg[1]) + Math.abs(bb - bg[2]) < 40) continue; // skip background
        const k = [r, gg, bb].map(v => Math.round(v / 24) * 24).join(','); bins[k] = (bins[k] || 0) + 1;
      }
      const tot = Object.values(bins).reduce((a, v) => a + v, 0) || 1;
      return Object.entries(bins).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([k, v]) => '#' + k.split(',').map(x => Math.min(255, +x).toString(16).padStart(2, '0')).join('') + ' ' + Math.round(v / tot * 100) + '%');
    }, logo.png);
    fs.writeFileSync(out + '-logo.png', Buffer.from(logo.png, 'base64'));
    await q.close();
  }
  fs.writeFileSync(out + '.json', JSON.stringify({ site, pagesCrawled: [...seen], logo: logo && logo.src, logoPalette: palette, images: list }, null, 1));
  // contact sheet
  const sheet = await b.newPage({ viewport: { width: 1600, height: 900 } });
  await sheet.setContent(`<style>body{margin:0;font:12px system-ui;background:#fff}div{display:inline-block;width:250px;margin:6px;vertical-align:top}img{width:250px;height:170px;object-fit:contain;background:#eee}.u{outline:4px solid #2a2}.s{opacity:.45}</style>` +
    list.slice(0, 60).map((x, i) => `<div class="${x.used ? 'u' : ''} ${x.stockGuess ? 's' : ''}"><img src="${x.src}"><br>#${i} ${x.w}x${x.h} ${x.used ? 'USED' : ''}${x.stockGuess ? ' stock?' : ''}<br>${(x.alt || '').slice(0, 40)}</div>`).join(''));
  await sheet.waitForTimeout(5000);
  await sheet.screenshot({ path: out + '.png', fullPage: true });
  console.log(`pages crawled: ${seen.size}; meaningful images: ${list.length}; used in concept: ${list.filter(x => x.used).length}; likely stock: ${list.filter(x => x.stockGuess).length}`);
  console.log('logo:', logo ? logo.src : 'NOT FOUND', '| logo palette:', palette.join('  '));
  list.filter(x => !x.used && !x.stockGuess).slice(0, 30).forEach((x, i) => console.log(`UNUSED ${x.w}x${x.h} ${x.src}  alt="${x.alt.slice(0, 50)}"  (${x.page})`));
  await b.close();
})();
