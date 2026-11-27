// node _kit/v4/check.js SLUG [only]   (from anywhere; SLUG = folder with index.html at the repo root)
// The v4 checks the older gates do not cover. Exit 1 on any failure. only = first|story|upscale|overflow (comma list) to run a subset.
//  first    (a) the first screen (hero + fact strip) ends exactly at the viewport bottom: no band, no overflow, at 1440x900, 1920x1080, 390x844
//  story    (b) at no scroll position in the pinned story is more than one step text visible: every 5% of the pin (settled), plus a 1% sweep of the timeline;
//              and no two story photos are both mid-fade (opacity 0.15-0.85) at any of the 21 settled positions (no ghosted double exposure)
//  upscale  (c) no image renders above 1.2x its native pixels (object-fit cover/contain and transforms included), at 1440, 1920, 390, scrolled through the page
//  overflow no element sticks out to the right at 360, 390, 414
const { chromium } = require('playwright'); const path = require('path');
const ROOT = path.resolve(__dirname, '../..');
const [slug, onlyArg] = process.argv.slice(2);
if (!slug) { console.log('usage: node _kit/v4/check.js SLUG [first,story,upscale,overflow]'); process.exit(2); }
const only = new Set((onlyArg || 'first,story,upscale,overflow').split(','));
const URL = 'file://' + path.join(ROOT, slug, 'index.html') + '#/';
const fails = []; const say = (ok, m) => { console.log((ok ? 'ok   ' : 'FAIL ') + m); if (!ok) fails.push(m); };

async function open(b, w, h, opts = {}) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, reducedMotion: opts.rm ? 'reduce' : 'no-preference' });
  const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto(URL); await p.waitForTimeout(opts.wait || 3600); p.errs = errs; p.ctx = ctx; return p;
}
async function scrollTo(p, y, wait = 900) {
  await p.evaluate(y => { const l = window.V4lenis; if (l) l.scrollTo(y, { immediate: true, force: true }); else window.scrollTo(0, y); }, y);
  await p.waitForTimeout(wait);
}

(async () => {
  const b = await chromium.launch();
  /* (a) first screen */
  if (only.has('first')) for (const [w, h] of [[1440, 900], [1920, 1080], [390, 844]]) {
    const p = await open(b, w, h);
    const r = await p.evaluate(() => {
      const first = document.querySelector('[data-v4-first]') || document.querySelector('.first');
      const strip = document.querySelector('[data-v4-strip]') || document.querySelector('.strip');
      const hero = document.querySelector('[data-v4-hero]') || document.querySelector('.hero');
      if (!hero) return { err: 'no hero' };
      const fr = (first || hero).getBoundingClientRect(), hr = hero.getBoundingClientRect(), sr = strip ? strip.getBoundingClientRect() : null;
      const bottom = Math.max(fr.bottom, sr ? sr.bottom : 0);
      /* the photo must fill its hero cell down to the strip (no band under the photo) */
      const ph = document.querySelector('[data-v4-photo]'), pr = ph && ph.getBoundingClientRect();
      const im = ph && ph.querySelector('img'), box = im && (im.parentElement === ph ? im : im.parentElement), ir = box && box.getBoundingClientRect();
      const fc = ph && ph.querySelector('figcaption'), fcr = fc && fc.getBoundingClientRect();
      const photoEnd = fcr && fcr.height ? fcr.top : pr && pr.bottom;
      /* the next section must start where the first screen ends */
      let nx = (first || hero).nextElementSibling; while (nx && nx === strip) nx = nx.nextElementSibling;
      return { vh: innerHeight, bottom, heroBottom: hr.bottom, stripTop: sr && sr.top, stripBottom: sr && sr.bottom,
        photoBottom: photoEnd, figBottom: pr && pr.bottom, imgBottom: ir && ir.bottom, nextTop: nx ? nx.getBoundingClientRect().top : null, sy: scrollY,
        fits: first ? first.scrollHeight <= first.clientHeight + 1 : true };
    });
    if (r.err) { say(false, `first ${w}x${h}: ${r.err}`); await p.ctx.close(); continue; }
    const d = Math.round((r.bottom - r.vh) * 10) / 10;
    say(Math.abs(d) <= 1 && r.sy === 0, `first ${w}x${h}: first screen ends at ${r.bottom.toFixed(1)} / viewport ${r.vh} (${d >= 0 ? '+' : ''}${d}px)`);
    if (r.stripTop != null) say(Math.abs(r.stripTop - r.heroBottom) <= 1, `first ${w}x${h}: strip sits on the hero (gap ${(r.stripTop - r.heroBottom).toFixed(1)}px)`);
    if (r.photoBottom != null) say(Math.abs(r.imgBottom - r.photoBottom) <= 1.5 && Math.abs(r.figBottom - r.heroBottom) <= 1.5, `first ${w}x${h}: hero photo fills its frame down to the strip (photo ends ${r.imgBottom.toFixed(1)}/${r.photoBottom.toFixed(1)}, figure ${r.figBottom.toFixed(1)}, hero ${r.heroBottom.toFixed(1)})`);
    say(r.fits, `first ${w}x${h}: hero content fits inside the first screen (no clipped/overflowing content)`);
    if (r.nextTop != null) say(Math.abs(r.nextTop - r.bottom) <= 1, `first ${w}x${h}: next section starts at the fold (${r.nextTop.toFixed(1)})`);
    if (p.errs.length) say(false, `first ${w}x${h}: JS errors: ${p.errs[0]}`);
    await p.ctx.close();
  }
  /* (b) story text never overlaps */
  if (only.has('story')) for (const [w, h] of [[1440, 900], [1920, 1080]]) {
    const p = await open(b, w, h);
    const info = await p.evaluate(() => {
      const ST = window.ScrollTrigger; if (!ST) return null;
      const t = ST.getAll().find(s => s.pin && s.trigger && (s.trigger.matches('[data-v4-story], .story, .pstory') || s.trigger.querySelector('.pstep, .step')));
      if (!t) return null; return { start: t.start, end: t.end };
    });
    if (!info) { const has = await p.evaluate(() => !!document.querySelector('[data-v4-story], .story, .pstory')); say(!has, `story ${w}x${h}: ${has ? 'story present but not pinned' : 'no pinned story on this page (check skipped)'}`); await p.ctx.close(); continue; }
    const count = () => p.evaluate(() => {
      const sec = document.querySelector('[data-v4-story]') || document.querySelector('.story, .pstory');
      const els = [...sec.querySelectorAll('.step .st, .pstep .pt, .pstep:not(:has(.pt))')];
      const vis = els.filter(e => { const r = e.getBoundingClientRect(); if (r.height < 2 || r.bottom < 0 || r.top > innerHeight) return false;
        for (let x = e; x && x !== document.body; x = x.parentElement) { const c = getComputedStyle(x); if (c.display === 'none' || c.visibility === 'hidden' || +c.opacity < 0.02) return false; } return true; });
      const caps = [...sec.querySelectorAll('.step figcaption, .spcap')].filter(e => { const r = e.getBoundingClientRect(); if (r.height < 2 || r.bottom < 0 || r.top > innerHeight) return false;
        for (let x = e; x && x !== document.body; x = x.parentElement) { const c = getComputedStyle(x); if (c.display === 'none' || c.visibility === 'hidden' || +c.opacity < 0.02) return false; } return true; });
      /* photos: two story images both mid-fade (effective opacity 0.15-0.85) = a ghosted double exposure */
      const eff = e => { let o = 1; for (let x = e; x && x !== document.body; x = x.parentElement) { const c = getComputedStyle(x); if (c.display === 'none' || c.visibility === 'hidden') return 0; o *= +c.opacity; const fm = /opacity\(([\d.]+)(%?)\)/.exec(c.filter || ''); if (fm) o *= fm[2] ? +fm[1] / 100 : +fm[1]; } return o; };
      const mid = [...sec.querySelectorAll('.step img, .pstep img')].map(eff).filter(o => o > 0.15 && o < 0.85).length;
      return { n: els.length, vis: Math.max(vis.length, caps.length), mid };
    });
    let worst = 0, n = 0, at = [], ghost = [];
    for (let k = 0; k <= 20; k++) { const y = Math.round(info.start + (info.end - info.start) * k / 20); await scrollTo(p, y, 1200); const c = await count(); n = c.n; if (c.vis > 1) at.push(k * 5 + '%'); if (c.mid > 1) ghost.push(k * 5 + '%'); worst = Math.max(worst, c.vis); }
    say(worst <= 1, `story ${w}x${h}: ${n} step texts, at most ${worst} text/caption visible at once across 21 settled scroll positions${at.length ? ' (overlap at ' + at.join(', ') + ')' : ''}`);
    say(!ghost.length, `story ${w}x${h}: no two story photos mid-fade (opacity 0.15-0.85) at once across 21 settled positions${ghost.length ? ' (ghosted at ' + ghost.join(', ') + ')' : ''}`);
    /* the scrubbed timeline itself, every 1%, so in-between (still easing) frames are covered too */
    await scrollTo(p, Math.round((info.start + info.end) / 2), 1200);
    const sweep = await p.evaluate(() => {
      const t = window.ScrollTrigger.getAll().find(s => s.pin && s.animation); if (!t) return null; const a = t.animation; const was = a.progress();
      const sec = t.trigger, shown = e => getComputedStyle(e.closest('.story-in') || e).display !== 'none';
      const els = [...sec.querySelectorAll('.step .st, .pstep .pt, .pstep:not(:has(.pt))')].filter(shown), caps = [...sec.querySelectorAll('.step figcaption')].filter(shown);
      const on = e => { for (let x = e; x && x !== sec.parentElement; x = x.parentElement) { const c = getComputedStyle(x); if (c.visibility === 'hidden' || +c.opacity <= 0.02 || c.display === 'none') return false; } return true; };
      let worst = 0, bad = [];
      for (let i = 0; i <= 100; i++) { a.progress(i / 100); const v = Math.max(els.filter(on).length, caps.filter(on).length); if (v > 1) bad.push(i); worst = Math.max(worst, v); }
      a.progress(was); return { worst, bad };
    });
    if (sweep) say(sweep.worst <= 1, `story ${w}x${h}: timeline sweep (101 frames): at most ${sweep.worst} step text / caption visible${sweep.bad.length ? ' (overlap at ' + sweep.bad.slice(0, 8).join(',') + '%)' : ''}`);
    if (p.errs.length) say(false, `story ${w}x${h}: JS errors: ${p.errs[0]}`);
    await p.ctx.close();
  }
  /* (c) no upscaling beyond 1.2x */
  if (only.has('upscale')) for (const [w, h] of [[1440, 900], [1920, 1080], [390, 844]]) {
    const p = await open(b, w, h);
    const H = await p.evaluate(() => document.documentElement.scrollHeight); const worst = {};
    for (let y = 0; y < H; y += Math.round(h * 0.6)) {
      await scrollTo(p, y, 700);
      const r = await p.evaluate(() => [...document.images].map(im => {
        if (!im.naturalWidth || !im.complete) return null; const r = im.getBoundingClientRect(); if (r.width < 8 || r.bottom < 0 || r.top > innerHeight) return null;
        if (im.closest('[aria-hidden="true"]') && getComputedStyle(im.closest('figure') || im).visibility === 'hidden') return null;
        const c = getComputedStyle(im), bw = im.offsetWidth || r.width, bh = im.offsetHeight || r.height, sx = r.width / bw, sy = r.height / bh;
        const kx = bw / im.naturalWidth, ky = bh / im.naturalHeight; let k;
        if (c.objectFit === 'cover') k = Math.max(kx, ky); else if (c.objectFit === 'contain' || c.objectFit === 'scale-down') k = Math.min(kx, ky); else k = Math.max(kx, ky);
        if (c.objectFit === 'scale-down') k = Math.min(k, 1);
        return { src: im.currentSrc.split('/').slice(-2).join('/'), k: k * Math.max(sx, sy) };
      }).filter(Boolean));
      r.forEach(x => { if (!worst[x.src] || worst[x.src] < x.k) worst[x.src] = x.k; });
    }
    const bad = Object.entries(worst).filter(([, k]) => k > 1.2).sort((a, b) => b[1] - a[1]);
    say(!bad.length, `upscale ${w}x${h}: ${Object.keys(worst).length} images checked${bad.length ? '; above 1.2x: ' + bad.map(([s, k]) => s + ' ' + k.toFixed(2) + 'x').join(', ') : ', max ' + Math.max(0, ...Object.values(worst)).toFixed(2) + 'x'}`);
    await p.ctx.close();
  }
  /* overflow 360 / 390 / 414 */
  if (only.has('overflow')) for (const w of [360, 390, 414]) {
    const p = await open(b, w, 800);
    const H = await p.evaluate(() => document.documentElement.scrollHeight); let worst = [];
    for (let y = 0; y < H; y += 600) {
      await scrollTo(p, y, 250);
      const r = await p.evaluate(() => { const W = document.documentElement.clientWidth, out = [];
        if (document.documentElement.scrollWidth > W + 1) out.push('page scrollWidth ' + document.documentElement.scrollWidth);
        document.querySelectorAll('#view *, header *, footer *').forEach(e => { const r = e.getBoundingClientRect(); if (r.width && r.right > W + 1 && r.bottom > 0 && r.top < innerHeight) {
          for (let x = e.parentElement; x && x !== document.body; x = x.parentElement) { const c = getComputedStyle(x); if (/(hidden|clip|auto|scroll)/.test(c.overflowX) && x.getBoundingClientRect().right <= W + 1) return; if (c.position === 'fixed' && (c.visibility === 'hidden' || +c.opacity === 0)) return; }
          if (getComputedStyle(e).visibility === 'hidden') return;
          out.push((e.className && typeof e.className === 'string' ? e.tagName.toLowerCase() + '.' + e.className.split(' ')[0] : e.tagName.toLowerCase()) + ' right=' + Math.round(r.right)); } }); return out; });
      worst = worst.concat(r);
    }
    worst = [...new Set(worst)];
    say(!worst.length, `overflow ${w}: ${worst.length ? worst.slice(0, 6).join('; ') : 'nothing past the right edge'}`);
    await p.ctx.close();
  }
  await b.close();
  console.log(fails.length ? `v4 checks ${slug}: ${fails.length} FAILED` : `v4 checks ${slug}: OK`);
  process.exit(fails.length ? 1 : 0);
})();
