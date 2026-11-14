// Usage: node logo-audit.js file.html [route ...]   (default: every top-level #/ route)
// Gate for PRINCIPLES BW (client review round 3: "logos that are unreadable and detract from the quality").
// For every partner/funder/investor/award logo (images in a logo/partner/support/award block, or alt/src mentioning logo),
// screenshots it with a margin and measures, against the tile behind it:
//   FAINT   too little visible ink, or ink contrast < 3:1  (washed-out white-on-light logos)
//   BOX     the logo image carries its own opaque background rectangle that differs from the tile
//   MIXED   some logos are in colour and others grey: one consistent treatment is required
//   SMALL   rendered ink height < 18px at 1440 (illegible wordmark)
const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const [file, ...routes0] = process.argv.slice(2);
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  await p.goto('file://' + path.resolve(file)); await p.waitForTimeout(3500);
  const routes = routes0.length ? routes0 : await p.evaluate(() => ['#/', ...new Set([...document.querySelectorAll('a[href^="#/"]')].map(a => a.getAttribute('href')).filter(h => h.split('/').filter(Boolean).length <= 2 && h !== '#/'))]);
  const problems = []; const ana = await b.newPage();
  for (const r of routes) {
    await p.evaluate(r => { location.hash = r; }, r); await p.waitForTimeout(2600);
    for (let k = 0; k < 80; k++) { const d = await p.evaluate(() => scrollY + innerHeight >= document.documentElement.scrollHeight - 4); if (d) break; await p.mouse.wheel(0, 700); await p.waitForTimeout(150); }
    await p.waitForTimeout(1500);
    const n = await p.evaluate(() => {
      const L = [...document.querySelectorAll('#view img, main img, #view svg, main svg')].filter(im => {
        if (im.closest('header,footer,nav,[role=dialog]')) return false;
        const r = im.getBoundingClientRect(); if (r.width < 30 || r.height < 12) return false;
        const ctx = (im.closest('[class*=logo],[class*=partner],[class*=support],[class*=investor],[class*=backer],[class*=fund],[class*=award],[class*=valid],[class*=collab],[class*=sponsor],[class*=press]') || {}).className || '';
        const own = (im.getAttribute('alt') || '') + ' ' + (im.getAttribute('src') || '').slice(0, 200) + ' ' + (im.getAttribute('class') || '');
        if (/logo/i.test(own) || (ctx && im.tagName === 'IMG')) return true;
        // structural: a row of >=3 small tiles that each hold just one image
        const t = im.parentElement, row = t && t.parentElement; if (!row || im.tagName !== 'IMG' || r.height > 160) return false;
        const sib = [...row.children].filter(k => k.querySelectorAll('img').length === 1 && (k.innerText || '').trim().length < 3);
        return sib.length >= 3 && sib.includes(t);
      });
      L.forEach((im, i) => im.setAttribute('data-la', i)); return L.length;
    });
    const items = [];
    for (let i = 0; i < n; i++) {
      const box = await p.evaluate(i => { const e = document.querySelector(`[data-la="${i}"]`); e.scrollIntoView({ block: 'center' }); const r = e.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height, alt: (e.getAttribute('alt') || e.getAttribute('src') || '').split('/').pop().slice(0, 40) }; }, i);
      await p.waitForTimeout(500);
      const m = 6; const clip = { x: Math.max(0, box.x - m), y: Math.max(0, box.y - m), width: box.w + 2 * m, height: box.h + 2 * m };
      const buf = await p.screenshot({ clip }).catch(() => null); if (!buf) continue;
      const a = await ana.evaluate(async ([png, m]) => {
        const im = new Image(); im.src = 'data:image/png;base64,' + png; await im.decode();
        const c = document.createElement('canvas'); c.width = im.width; c.height = im.height; const g = c.getContext('2d'); g.drawImage(im, 0, 0);
        const d = g.getImageData(0, 0, c.width, c.height).data; const px = (x, y) => { const k = (y * c.width + x) * 4; return [d[k], d[k + 1], d[k + 2]]; };
        const lum = ([r, g2, b]) => { const f = v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }; return .2126 * f(r) + .7152 * f(g2) + .0722 * f(b); };
        // tile bg = median of the margin ring (outside the image)
        const ring = []; for (let x = 0; x < c.width; x += 2) { ring.push(px(x, 1), px(x, c.height - 2)); } for (let y = 0; y < c.height; y += 2) { ring.push(px(1, y), px(c.width - 2, y)); }
        const med = k => ring.map(q => q[k]).sort((a, b) => a - b)[ring.length >> 1]; const bg = [med(0), med(1), med(2)];
        // corners just inside the image: does the image carry its own background box?
        const ins = [px(m + 2, m + 2), px(c.width - m - 3, m + 2), px(m + 2, c.height - m - 3), px(c.width - m - 3, c.height - m - 3)];
        const dist = (p1, p2) => Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]) + Math.abs(p1[2] - p2[2]);
        const boxed = ins.filter(q => dist(q, bg) > 36).length >= 3 && dist(ins[0], ins[3]) < 20;
        const ref = boxed ? ins[0] : bg; let ink = 0, tot = 0, sat = 0, top = 1e9, bot = -1; const Ls = [];
        for (let y = m; y < c.height - m; y++) for (let x = m; x < c.width - m; x++) { tot++; const q = px(x, y); if (dist(q, ref) > 60) { ink++; Ls.push(lum(q)); const mx = Math.max(...q), mn = Math.min(...q); sat += mx ? (mx - mn) / mx : 0; top = Math.min(top, y); bot = Math.max(bot, y); } }
        Ls.sort((a, b) => a - b); const Li = Ls.length ? Ls[Ls.length >> 1] : lum(ref); const Lb = lum(ref);
        const cr = (Math.max(Li, Lb) + .05) / (Math.min(Li, Lb) + .05);
        const strong = Ls.filter(L => (Math.max(L, Lb) + .05) / (Math.min(L, Lb) + .05) >= 3).length;
        return { inkFrac: ink / tot, contrast: cr, legible: Ls.length ? strong / Ls.length : 0, sat: ink ? sat / ink : 0, boxed, inkH: bot - top };
      }, [buf.toString('base64'), m]);
      items.push({ ...a, alt: box.alt });
    }
    if (process.env.LA_DEBUG) items.forEach(it => console.error(JSON.stringify(it)));
    items.forEach(it => {
      if (it.inkFrac < 0.03 || it.contrast < 3 || it.legible < 0.7) problems.push(`${r}: FAINT logo "${it.alt}" (ink ${Math.round(it.inkFrac * 100)}%, median contrast ${it.contrast.toFixed(1)}:1, only ${Math.round(it.legible * 100)}% of its ink reaches 3:1); recolour it to one solid tone that reads on the tile, or set the name in type`);
      if (it.boxed) problems.push(`${r}: BOX logo "${it.alt}" carries its own background rectangle; use a transparent version or set the name in type`);
      if (it.inkH > 0 && it.inkH < 18) problems.push(`${r}: SMALL logo "${it.alt}" ink is ${it.inkH}px tall; illegible`);
    });
    const col = items.filter(i => i.sat > 0.3).length, grey = items.filter(i => i.sat <= 0.15).length;
    if (col && grey) problems.push(`${r}: MIXED logo treatments (${col} in colour, ${grey} grey); render every logo in one consistent tone`);
  }
  console.log(problems.length ? problems.join('\n') : 'OK');
  await b.close(); process.exit(problems.length ? 1 : 0);
})();
