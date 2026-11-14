// Usage: node overlay-audit.js file.html "<route with people, e.g. #/team>" [width=1440] [height=900]
// Gate for PRINCIPLES BI: person/bio overlays must scroll with the mouse wheel and trackpad (not only by dragging the
// scrollbar), must not scroll the page behind, and must close/step correctly.
// For every person trigger on the route (max 12): open it, force the content to overflow (appends a tall test block
// if the real bio is short), wheel over the overlay, and require its scroll position to move while window.scrollY
// stays put. Then: Next/Prev must not add history entries, Escape must close it and return to the route.
// Also repeats the wheel test at 390x844 (touch-size viewport) for the first person.
// Prints OK or one line per problem.
// Run audits SERIALLY: several Chromium instances at once slow the page past the fixed waits and give false "Escape did not close" failures.
const { chromium } = require('playwright');
const path = require('path');
const TRIG = '[data-bio],[data-person],[href*="#/team/"],[href*="#/people/"],[href*="#/leadership/"],[href*="#/founder/"],[href*="#/company/"]';
async function run(b, file, route, w, h, maxN, problems, tag) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + path.resolve(file) + route); await p.waitForTimeout(4200);
  const n = await p.evaluate(s => [...document.querySelectorAll(s)].filter(e => e.offsetParent || e.getClientRects().length).length, TRIG);
  if (!n) { problems.push(`${tag} no person triggers found on ${route} (expected ${TRIG})`); await p.close(); return; }
  for (let i = 0; i < Math.min(n, maxN); i++) {
    const h0 = await p.evaluate(() => history.length);
    await p.evaluate(([s, i]) => { const e = [...document.querySelectorAll(s)].filter(e => e.offsetParent || e.getClientRects().length)[i]; e.scrollIntoView({ block: 'center' }); }, [TRIG, i]);
    await p.waitForTimeout(700);
    await p.evaluate(([s, i]) => [...document.querySelectorAll(s)].filter(e => e.offsetParent || e.getClientRects().length)[i].click(), [TRIG, i]);
    await p.waitForTimeout(1800);
    const info = await p.evaluate(() => {
      const d = [...document.querySelectorAll('[role=dialog],[aria-modal=true]')].find(e => { const s = getComputedStyle(e); return s.visibility !== 'hidden' && s.display !== 'none' && e.getBoundingClientRect().height > 100; });
      if (!d) return null;
      // the element that should scroll: the largest descendant (or d itself) with overflow-y auto/scroll
      const cands = [d, ...d.querySelectorAll('*')].filter(e => /auto|scroll/.test(getComputedStyle(e).overflowY));
      let sc = cands.sort((a, b) => b.clientHeight - a.clientHeight)[0];
      if (!sc) return { noScroller: true };
      sc.setAttribute('data-oa-sc', '1');
      if (sc.scrollHeight <= sc.clientHeight + 40) {
        // make it long enough to need scrolling, the way a long real bio would
        const host = sc.querySelector('p')?.parentElement || sc;
        const x = document.createElement('div'); x.setAttribute('data-oa-fill', '1');
        x.innerHTML = Array.from({ length: 40 }, (_, k) => `<p>Overlay scroll test paragraph ${k + 1}. A long biography must scroll with the wheel.</p>`).join('');
        host.appendChild(x);
      }
      const r = sc.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + Math.min(r.height / 2, 300), top: sc.scrollTop, sy: scrollY, right: Math.round(innerWidth - r.right), left: Math.round(r.left), w: Math.round(r.width) };
    });
    if (!info) { problems.push(`${tag} person #${i}: clicking did not open a visible [role=dialog]`); continue; }
    if (info.noScroller) { problems.push(`${tag} person #${i}: overlay has no overflow-y:auto/scroll container, so long bios cannot scroll`); }
    else {
      await p.mouse.move(info.x, info.y);
      for (let k = 0; k < 8; k++) { await p.mouse.wheel(0, 120); await p.waitForTimeout(60); }
      await p.waitForTimeout(700);
      const after = await p.evaluate(() => ({ top: document.querySelector('[data-oa-sc]').scrollTop, sy: scrollY }));
      if (after.top <= info.top + 20) problems.push(`${tag} person #${i}: WHEEL DOES NOT SCROLL the overlay (scrollTop ${info.top}->${after.top}); add data-lenis-prevent to the scroll container and keep overscroll-behavior:contain`);
      if (Math.abs(after.sy - info.sy) > 2) problems.push(`${tag} person #${i}: wheel over the overlay scrolled the PAGE behind it (${info.sy}->${after.sy})`);
      const lay = await p.evaluate(() => {
        const d = [...document.querySelectorAll('[role=dialog],[aria-modal=true]')].find(e => { const s = getComputedStyle(e); return s.visibility !== 'hidden' && s.display !== 'none' && e.getBoundingClientRect().height > 100; });
        if (!d) return null;
        const vis = e => { const r = e.getBoundingClientRect(), s = getComputedStyle(e); return r.width > 4 && r.height > 4 && s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > 0.05; };
        const card = [d, ...d.querySelectorAll('*')].filter(vis).filter(e => getComputedStyle(e).backgroundColor !== 'rgba(0, 0, 0, 0)' || getComputedStyle(e).boxShadow !== 'none').sort((a, b) => a.getBoundingClientRect().width * a.getBoundingClientRect().height - b.getBoundingClientRect().width * b.getBoundingClientRect().height).filter(e => e.getBoundingClientRect().width < innerWidth * 0.98)[0];
        const imgs = [...d.querySelectorAll('img')].filter(vis).map(im => ({ w: im.getBoundingClientRect().width, h: im.getBoundingClientRect().height, nw: im.naturalWidth }));
        const name = (d.querySelector('h2,h3')?.textContent || '').trim();
        const count = name ? [...d.querySelectorAll('*')].filter(vis).filter(e => [...e.childNodes].some(n => n.nodeType === 3 && n.nodeValue.trim()) && e.textContent.trim().length <= name.length + 4 && e.textContent.includes(name)).length : 0;
        const cr = (card || d).getBoundingClientRect();
        return { imgs, name, count, cw: Math.round(cr.width), ch: Math.round(cr.height), textH: Math.round([...d.querySelectorAll('p,h2,h3')].filter(vis).reduce((a, e) => Math.max(a, e.getBoundingClientRect().bottom), 0) - cr.top) };
      });
      if (lay) {
        if (lay.count > 1) problems.push(`${tag} person #${i}: the name "${lay.name}" appears ${lay.count}x in the sheet (a plate repeating the name/role is wasted space; BI)`);
        const big = lay.imgs.find(m => m.w * m.h > 200 * 200);
        if (w >= 1024 && !big && lay.cw > 820) problems.push(`${tag} person #${i}: no large photo but the sheet is ${lay.cw}px wide; use the compact single-column mode (BI)`);
        if (big && big.nw && big.nw < big.w * 0.98) problems.push(`${tag} person #${i}: portrait upscaled (${big.nw}px source shown ${Math.round(big.w)}px wide); use the slim mode with a small circle (BI)`);
      }
      if (i === 0 && w >= 1024 && info.left > w * 0.25 && info.right < 4) problems.push(`${tag} overlay is an edge-docked side drawer (x=${info.left}..${w - info.right}); BI requires the centred person sheet`);
    }
    await p.evaluate(() => { document.querySelector('[data-oa-fill]')?.remove(); document.querySelector('[data-oa-sc]')?.removeAttribute('data-oa-sc'); });
    // Next must not stack history
    const nextOk = await p.evaluate(() => { const d = document.querySelector('[role=dialog],[aria-modal=true]'); const nx = d && [...d.querySelectorAll('a,button')].find(e => /next/i.test((e.getAttribute('aria-label') || '') + e.textContent)); if (!nx) return 'none'; nx.click(); return 'clicked'; });
    if (nextOk === 'clicked') { await p.waitForTimeout(1200); const h1 = await p.evaluate(() => history.length); if (h1 > h0 + 1) problems.push(`${tag} person #${i}: Next added history entries (${h0}->${h1}); use history.replaceState`); }
    await p.keyboard.press('Escape'); await p.waitForTimeout(1400);
    const still = await p.evaluate(() => !![...document.querySelectorAll('[role=dialog],[aria-modal=true]')].find(e => { const s = getComputedStyle(e); return s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > 0.05 && e.getBoundingClientRect().height > 100; }));
    if (still) problems.push(`${tag} person #${i}: Escape did not close the overlay`);
    // page itself must scroll again after closing
    const y0 = await p.evaluate(() => scrollY); await p.mouse.move(w / 2, h / 2); for (let k = 0; k < 5; k++) { await p.mouse.wheel(0, 150); await p.waitForTimeout(60); } await p.waitForTimeout(600);
    const y1 = await p.evaluate(() => scrollY);
    const canScroll = await p.evaluate(() => document.documentElement.scrollHeight > innerHeight + 200 && scrollY + innerHeight < document.documentElement.scrollHeight - 50);
    if (canScroll && y1 <= y0) problems.push(`${tag} person #${i}: page does not scroll after closing the overlay (scroll lock not released)`);
  }
  if (errs.length) problems.push(`${tag} JS errors: ${errs.slice(0, 3).join(' | ')}`);
  await p.close();
}
(async () => {
  const [file, route = '#/team', w = '1440', h = '900'] = process.argv.slice(2);
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist'] });
  const problems = [];
  await run(b, file, route, +w, +h, 12, problems, `[${w}]`);
  await run(b, file, route, 390, 844, 1, problems, '[390]');
  console.log(problems.length ? problems.join('\n') : 'OK');
  await b.close(); process.exit(problems.length ? 1 : 0);
})();
