// Usage: node buildout-test.js <site>/index.html [shotdir]
// HOME_BRIEF UPDATE part 1 + PRINCIPLES DK (v2): a sub-page hero (eyebrow = item, H1 = the section's own heading), cloned home sections, the concept note;
// every primary nav item (not Contact) opens #/more/<slug> with the build-out copy; browser back lands on home at the top;
// the secondary link returns to the home page; Contact still scrolls on home. Runs at 1440 (header nav) and 390 (menu).
const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const file = path.resolve(process.argv[2]), shots = process.argv[3]; const b = await chromium.launch(); const bad = []; let n = 0;
  for (const [w, h] of [[1440, 900], [390, 844]]) {
    const p = await b.newPage({ viewport: { width: w, height: h } }); const errs = []; p.on('pageerror', e => errs.push(e.message));
    await p.goto('file://' + file + '#/'); await p.waitForTimeout(3200);
    const items = await p.evaluate(() => window.BuildOut ? window.BuildOut.items() : null);
    if (!items || !items.length) { bad.push(`${w}: no build-out nav items`); await p.close(); continue; }
    const mobile = w < 900;
    for (const it of items) {
      if (!mobile && !(await p.evaluate(l => [...document.querySelectorAll('#hdr nav a')].some(a => a.textContent.trim() === l), it.label))) continue; // menu-only item: covered at 390
      if (mobile) { await p.click('#burger'); await p.waitForTimeout(1000); await p.locator('#mm a', { hasText: new RegExp('^\\s*' + it.label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*$') }).first().click(); }
      else { await p.evaluate(() => window.scrollTo(0, 1700)); await p.waitForTimeout(300); await p.evaluate(() => window.scrollTo(0, 1500)); await p.waitForTimeout(700); await p.locator('#hdr nav a', { hasText: new RegExp('^\\s*' + it.label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*$') }).first().click(); }
      await p.waitForTimeout(2800);
      const st = await p.evaluate(() => { const bo = document.getElementById('bo'); const r = bo && bo.getBoundingClientRect();
        return { hash: location.hash, on: !!(bo && bo.classList.contains('on') && r.height > 300), h1: (document.getElementById('boTitle') || {}).textContent || '', eye: (bo && bo.querySelector('.bo-eye') || {}).textContent || '',
          note: !!(bo && bo.querySelector('.bo-note .bo-p') && bo.querySelector('.bo-note [data-bo-home]')), secs: bo ? bo.querySelectorAll('.bo-body > *').length : 0, ph: !!(bo && bo.querySelector('.ph-head.bo-ph')),
          xt: (document.getElementById('xtt') || {}).textContent || '', empty: bo ? [...bo.querySelectorAll('.bo-body h2, .bo-body h3, .bo-body p')].filter(e => getComputedStyle(e).opacity < 0.5 && e.getBoundingClientRect().top < innerHeight - 40 && e.getBoundingClientRect().bottom > 0).length : 0,
          txt: bo ? bo.innerText : '', btnR: (() => { const x = bo && bo.querySelector('.btn'); return x ? getComputedStyle(x).borderRadius : '' })(),
          ftr: !!(bo && bo.querySelector('.ftr, footer')), mail: bo ? [...bo.querySelectorAll('.bo-ph, .bo-note')].some(e => /@|mailto:/.test(e.innerHTML)) : false, // the module's own copy; cloned home sections keep the site's published contacts
          homeY: window.scrollY, hdrOff: (() => { const hd = document.getElementById('hdr'); return hd ? hd.getBoundingClientRect().top < -4 || getComputedStyle(hd).visibility === 'hidden' : true })(), over: document.documentElement.scrollWidth > innerWidth + 1 || (bo && bo.scrollWidth > bo.clientWidth + 1) } });
      const tag = `${w} ${it.label}`;
      if (st.hash !== '#/more/' + it.slug) bad.push(`${tag}: hash ${st.hash}`);
      if (!st.on) bad.push(`${tag}: build-out layer not shown`);
      if (!st.eye.includes(it.label)) bad.push(`${tag}: eyebrow "${st.eye}"`);
      if (!st.h1.trim()) bad.push(`${tag}: empty H1`);
      if (!st.ph) bad.push(`${tag}: no sub-page hero`);
      if (!st.secs) bad.push(`${tag}: no content sections cloned from home`);
      if (!st.note) bad.push(`${tag}: no concept note with back button`);
      if (!/Back to the home page/.test(st.txt) && !/[^\x00-\x7f]/.test(st.txt)) bad.push(`${tag}: no back button`);
      if (st.btnR && st.btnR !== '0px') bad.push(`${tag}: button radius ${st.btnR}`);
      if (!st.ftr) bad.push(`${tag}: no footer`); if (st.mail) bad.push(`${tag}: email in page body`); if (st.over) bad.push(`${tag}: horizontal overflow`); if (st.homeY > 2) bad.push(`${tag}: home not parked at top (${st.homeY})`); if (st.hdrOff) bad.push(`${tag}: header hidden`);
      if (shots && it === items[0]) { await p.screenshot({ path: path.join(shots, `bo-${w}.png`) }); await p.evaluate(() => { const bo = document.getElementById('bo'); bo.scrollTop = bo.scrollHeight }); await p.waitForTimeout(300); await p.screenshot({ path: path.join(shots, `bo-${w}-foot.png`) }); await p.evaluate(() => { document.getElementById('bo').scrollTop = 0 }); }
      await p.goBack(); await p.waitForTimeout(2600);
      const hm = await p.evaluate(() => ({ hash: location.hash, y: window.scrollY, on: !!document.querySelector('#bo.on'), lock: document.documentElement.classList.contains('bo-open') }));
      if (!(hm.hash === '#/' || hm.hash === '') || hm.on || hm.lock || hm.y > 2) bad.push(`${tag}: back -> ${JSON.stringify(hm)}`);
      n++;
    }
    // secondary link returns to home (and scrolls to its section); forward re-opens the page
    const it = items[0];
    await p.evaluate(s => window.BuildOut.open(s), it.slug); await p.waitForTimeout(2000);
    await p.click('#bo [data-bo-keep]'); await p.waitForTimeout(3200);
    const k = await p.evaluate(() => ({ hash: location.hash, on: !!document.querySelector('#bo.on'), y: window.scrollY }));
    if (k.on || !/^#\/?[^m]*$/.test(k.hash)) bad.push(`${w} keep-scrolling: ${JSON.stringify(k)}`);
    await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(400);
    await p.goForward(); await p.waitForTimeout(2000);
    const fw = await p.evaluate(() => ({ hash: location.hash, on: !!document.querySelector('#bo.on') }));
    if (/^#\/more\//.test(fw.hash) && !fw.on) bad.push(`${w} forward: hash ${fw.hash} but page not shown`);
    if (fw.on) { await p.goBack(); await p.waitForTimeout(1900); }
    // Contact still scrolls on home
    await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(400);
    if (mobile) { await p.click('#burger'); await p.waitForTimeout(1000); }
    const ch = await p.evaluate(m => { const a = [...document.querySelectorAll(m ? '#mm a[href^="#"]' : '#hdr nav a[href^="#"]')].find(a => /contact/i.test(a.getAttribute('href') + a.textContent)); if (!a) return null; a.click(); return a.getAttribute('href') }, mobile);
    await p.waitForTimeout(3000);
    const cy = await p.evaluate(() => ({ y: window.scrollY, on: !!document.querySelector('#bo.on'), hash: location.hash }));
    if (ch && (cy.on || cy.y < 400 || /more/.test(cy.hash))) bad.push(`${w} contact: ${JSON.stringify(cy)}`);
    if (errs.length) bad.push(`${w}: JS errors: ${errs.join(' | ').slice(0, 300)}`);
    await p.close();
  }
  await b.close(); console.log(bad.length ? 'FAIL\n' + bad.join('\n') : `OK (${n} nav clicks)`); process.exit(bad.length ? 1 : 0);
})();
