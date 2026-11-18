// Usage: node hero-audit.js file.html [route ...]   (default: #/ on a cold load, then every top-level sub-route)
// Gate (client review round 5: "the title usually loads first, there's a long pause, and then the rest comes up (the caption,
// buttons, etc.)" and the "r it" tail). Samples real frames inside the page at 4x CPU throttle (laptop speed), ignoring frames
// where a preloader / transition curtain covers the screen, and reports:
//  LATE   the copy around the title (eyebrow, lede, buttons) first shows > 0.4s after the whole title is visible (dead pause)
//  TRAIL  > 0.6s between half the title's letters/lines having landed and the last one landing (a tail that arrives late)
const { chromium } = require('playwright'); const path = require('path');
const SAMPLER = () => {
  window.__hs = []; const t0 = performance.now(); const gen = window.__hg = (window.__hg || 0) + 1;
  const covered = () => [...document.querySelectorAll('body > *, body > * > *')].some(x => { const cs = getComputedStyle(x); if (cs.position !== 'fixed' || cs.visibility === 'hidden' || cs.display === 'none') return false; let op = 1; for (let a = x; a && a !== document.body; a = a.parentElement) op *= +getComputedStyle(a).opacity; if (op < .9) return false; const r = x.getBoundingClientRect(); if (!(r.top <= innerHeight * .3 && r.bottom >= innerHeight * .7 && r.left <= 2 && r.right >= Math.min(innerWidth, document.documentElement.clientWidth) - 20)) return false; const bg = cs.backgroundColor; return bg && bg !== 'transparent' && !/rgba\([^)]*,\s*0\)$/.test(bg); });
  const st = el => { let ty = 0, op = 1; for (let a = el; a && a !== document.body; a = a.parentElement) { const cs = getComputedStyle(a); op *= +cs.opacity; if (cs.visibility === 'hidden') op = 0; const m = cs.transform; if (m && m !== 'none') { const v = m.match(/-?[\d.e-]+/g).map(Number); ty += Math.abs(v.length === 6 ? v[5] : v[13]); } } return [ty, op]; };
  const tick = () => {
    if (window.__hg !== gen) return; const t = (performance.now() - t0) / 1000;
    const h = document.querySelector('#view #pageTitle') || document.querySelector('#view h1') || document.querySelector('#pageTitle');
    if (h && h.getBoundingClientRect().height > 4) {
      if (!h.__hid) h.__hid = Math.random();
      let leaves = [...h.querySelectorAll('*')].filter(e => !e.children.length && e.textContent.trim() && e.getBoundingClientRect().width > 0); if (!leaves.length) leaves = [h];
      const ls = leaves.map(st);
      const box = h.closest('section,.hero,.ph-head,[class*=hero],[class*=head]') || h.parentElement;
      const copy = [...box.querySelectorAll('p,a,button,.btn,[data-r],[class*=eyebrow],[class*=kick],[class*=lede]')].filter(e => !h.contains(e) && !e.contains(h) && !e.closest('nav,.hdr,#hdr,[aria-hidden=true]') && e.textContent.trim() && e.getBoundingClientRect().height > 4 && e.getBoundingClientRect().top < innerHeight && e.getBoundingClientRect().bottom > 0);
      window.__hs.push({ t, hid: h.__hid, hash: location.hash, cov: covered(), ls, c: copy.map(e => st(e)[1]) });
    }
    if (t < 9) requestAnimationFrame(tick);
  }; requestAnimationFrame(tick);
};
function analyse(S) {
  if (!S.length) return 'no title found';
  const settled = ([ty, op]) => ty <= 2 && op >= .97;
  const V = S.filter(s => !s.cov); if (!V.length) return 'title never uncovered';
  const tVis = (V.find(s => s.ls.every(([ty, op]) => op >= .9)) || {}).t;
  const tHalf = (V.find(s => s.ls.filter(settled).length >= s.ls.length / 2) || {}).t;
  let tAll = null; for (const s of V) { const ok = s.ls.every(settled); if (ok && tAll === null) tAll = s.t; else if (!ok) tAll = null; }
  const hasCopy = V.some(s => s.c.length); const tCopy = (V.find(s => s.c.some(o => o > .5)) || {}).t;
  const out = [];
  if (tVis == null) out.push('title never fully visible');
  if (tAll != null && tHalf != null && tAll - tHalf > .6) out.push(`TRAIL last part of the title lands ${(tAll - tHalf).toFixed(2)}s after half of it (max 0.6)`);
  if (hasCopy && tVis != null && tCopy != null && tCopy - tVis > .4) out.push(`LATE copy shows ${(tCopy - tVis).toFixed(2)}s after the title is fully visible (max 0.4)`);
  if (hasCopy && tCopy == null) out.push('LATE copy never shows within 9s');
  return out.length ? out.join('; ') : `ok (copy ${tCopy == null || tVis == null ? '-' : (tCopy - tVis >= 0 ? '+' : '') + (tCopy - tVis).toFixed(2)}s, tail ${tAll == null || tHalf == null ? '-' : (tAll - tHalf).toFixed(2)}s)`;
}
(async () => {
  const [f, ...r0] = process.argv.slice(2); const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-webgl'] });
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } }); const results = [];
  const p = await ctx.newPage(); const cdp = await ctx.newCDPSession(p); await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  await p.addInitScript(SAMPLER); await p.goto('file://' + path.resolve(f)); await p.waitForTimeout(9500);
  results.push(['#/', analyse(await p.evaluate(() => window.__hs))]);
  const routes = r0.length ? r0 : await p.evaluate(() => [...new Set([...document.querySelectorAll('a[href^="#/"]')].map(a => a.getAttribute('href')).filter(h => h.split('/').filter(Boolean).length === 2))]);
  for (const r of routes) {
    await p.evaluate(SAMPLER); const old = await p.evaluate(() => { const h = document.querySelector('#view #pageTitle') || document.querySelector('#view h1'); return h && h.__hid; });
    await p.evaluate(r => { location.hash = r; }, r); await p.waitForTimeout(6000);
    results.push([r, analyse((await p.evaluate(() => window.__hs)).filter(s => s.hash === r && s.hid !== old))]);
  }
  const bad = results.filter(([, m]) => !/^ok/.test(m));
  console.log(bad.length ? bad.map(([r, m]) => `${r} ${m}`).join('\n') : 'OK ' + results.map(([r, m]) => r + ' ' + m.replace(/^ok /, '')).join(' | '));
  await b.close(); process.exit(bad.length ? 1 : 0);
})();
