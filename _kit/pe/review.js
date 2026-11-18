// Usage: node _kit/pe/review.js <slug> [outdir=_kit/pe/review]
// 1) TITLEFIT gate (SPEC §5.8): at 1024/1280/1366/1536/1920/2560/390, on every route, no heading line is wider than
//    its box (measured per text line with Range rects). Prints OK or FAIL lines.
// 2) Review images for a human/agent look:  <out>/<slug>-hero.png (1440x900 first screen, settled)
//    <out>/<slug>-strip.png: phones 360/390/430 at scroll 0 / 140 / 300 / 520 px with real wheel input (CW check:
//    hero art must never cross the eyebrow, title or copy), plus the footer bookend at 390.
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const slug = process.argv[2]; if (!slug) { console.log('usage: node review.js <slug> [outdir]'); process.exit(1); }
const ROOT = path.join(__dirname, '..', '..'), out = process.argv[3] || path.join(__dirname, 'review');
fs.mkdirSync(out, { recursive: true });
const url = 'file://' + path.join(ROOT, slug, 'index.html');
(async () => {
  const b = await chromium.launch({ ignoreDefaultArgs: ['--hide-scrollbars'] }); let fails = [];
  // ---- title fit
  for (const W of [1024, 1280, 1366, 1536, 1920, 2560, 390]) {
    const p = await b.newPage({ viewport: { width: W, height: W < 500 ? 844 : 900 } });
    await p.goto(url); await p.waitForTimeout(3600);
    const routes = await p.evaluate(() => ['#/', ...new Set([...document.querySelectorAll('.nav a[href^="#/"]')].map(a => a.getAttribute('href')))]);
    for (const r of routes) {
      if (r !== '#/') { await p.evaluate(r => location.hash = r, r); await p.waitForTimeout(2200); }
      const bad = await p.evaluate(() => { const o = [];
        document.querySelectorAll('#view h1, #view h2, #view h3').forEach(h => { const box = h.getBoundingClientRect(); if (box.width < 20 || h.closest('[aria-hidden=true]')) return;
          const rg = document.createRange(); rg.selectNodeContents(h); const rs = [...rg.getClientRects()];
          const cs = getComputedStyle(h), pr = parseFloat(cs.paddingRight) || 0;
          const right = Math.max(...rs.map(x => x.right), 0), left = Math.min(...rs.map(x => x.left), 1e9);
          if (right > box.right - pr + 2 || left < box.left - 2 || right > innerWidth + 1) o.push('"' + h.textContent.trim().slice(0, 40) + '" line ' + Math.round(right - box.right) + 'px past its box'); });
        return o; });
      bad.forEach(x => fails.push(W + ' ' + r + ' ' + x));
    }
    await p.close();
  }
  console.log(fails.length ? fails.map(f => 'FAIL TITLEFIT ' + f).join('\n') : 'OK titlefit (7 widths, every route)');
  // ---- hero frame
  { const p = await b.newPage({ viewport: { width: 1440, height: 900 } }); await p.goto(url); await p.waitForTimeout(5200);
    await p.screenshot({ path: path.join(out, slug + '-hero.png') }); await p.close(); }
  // ---- phone strip (CW)
  const shots = [];
  for (const W of [360, 390, 430]) {
    const p = await b.newPage({ viewport: { width: W, height: 800 }, deviceScaleFactor: 1, hasTouch: false });
    await p.goto(url); await p.waitForTimeout(4600); let y = 0;
    for (const target of [0, 140, 300, 520]) { while (y < target) { await p.mouse.move(W / 2, 400); await p.mouse.wheel(0, 70); y += 70; await p.waitForTimeout(60); }
      await p.waitForTimeout(700); shots.push({ W, y: target, b64: (await p.screenshot()).toString('base64') }); }
    if (W === 390) { await p.evaluate(() => scrollTo(0, document.body.scrollHeight)); await p.waitForTimeout(1500); shots.push({ W, y: 'footer', b64: (await p.screenshot()).toString('base64') }); }
    await p.close();
  }
  const p = await b.newPage({ viewport: { width: 1800, height: 900 } });
  await p.setContent('<body style="margin:0;background:#888;font:12px monospace;display:flex;flex-wrap:wrap;gap:8px;padding:8px">' + shots.map(s => '<figure style="margin:0"><img style="width:200px;display:block" src="data:image/png;base64,' + s.b64 + '"><figcaption>' + s.W + ' @ ' + s.y + '</figcaption></figure>').join('') + '</body>');
  await p.screenshot({ path: path.join(out, slug + '-strip.png'), fullPage: true });
  await b.close();
  console.log('review images: ' + path.relative(ROOT, path.join(out, slug + '-hero.png')) + ' and ' + path.relative(ROOT, path.join(out, slug + '-strip.png')));
  process.exit(fails.length ? 1 : 0);
})();
