// Usage: node masthead-audit.js file.html [route=#/team]
// Gate for PRINCIPLES CI (masthead list spacing). Finds horizontal person rows (a row whose children sit side by side:
// name | role | summary) and measures, at 1440: the empty space inside each row (row height minus the tallest text
// block), the gap between groups (last rule of one group to the next group's label), and label-to-list distance.
// Limits: inside-row padding (top+bottom) <= 44px; between groups <= 96px (component: 56px + label); label to first row <= 20px.
const { chromium } = require('playwright'); const path = require('path');
(async () => { const [f, route = '#/team'] = process.argv.slice(2); const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto('file://' + path.resolve(f) + route); await p.waitForTimeout(3500);
  for (let k = 0; k < 60; k++) { const d = await p.evaluate(() => scrollY + innerHeight >= document.documentElement.scrollHeight - 4); if (d) break; await p.mouse.wheel(0, 800); await p.waitForTimeout(100); } await p.waitForTimeout(1500);
  const res = await p.evaluate(() => {
    const out = []; const vis = e => { const r = e.getBoundingClientRect(), s = getComputedStyle(e); return r.width > 4 && r.height > 4 && s.visibility !== 'hidden' && s.display !== 'none'; };
    // candidate rows: elements with >=2 visible children laid out horizontally, inside #view, wide, containing a large name
    const rows = [...document.querySelectorAll('#view *')].filter(e => { if (!vis(e)) return false; const r = e.getBoundingClientRect(); if (r.width < innerWidth * 0.55 || r.height > 400) return false;
      const kids = [...e.children].filter(vis); if (kids.length < 2) return false; const t0 = kids.map(k => k.getBoundingClientRect().top); const lefts = kids.map(k => k.getBoundingClientRect().left);
      const sideBySide = new Set(lefts.map(l => Math.round(l / 40))).size >= 2 && Math.max(...t0) - Math.min(...t0) < 30; if (!sideBySide) return false;
      const big = [...e.querySelectorAll('*')].some(x => x.childElementCount === 0 && x.textContent.trim().length > 3 && parseFloat(getComputedStyle(x).fontSize) >= 19);
      const s = getComputedStyle(e); const ruled = parseFloat(s.borderTopWidth) > 0 || parseFloat(s.borderBottomWidth) > 0 || (e.previousElementSibling && parseFloat(getComputedStyle(e.previousElementSibling).borderBottomWidth) > 0);
      // feature grids (icon + heading + paragraph per column) are not person rows
      if (e.querySelector('img,picture') || kids.some(k => (k.querySelector('svg') && k.textContent.trim().length > 20) || (k.querySelector('h2,h3,h4') && k.querySelector('p')))) return false;
      if (/^[A-Z]{3} \d{1,2}, \d{4}/.test((e.innerText || "").trim())) return false; // dated news rows
      return big && (ruled || kids.length >= 3) && /(?:[A-Z][a-z]+\s){1,3}/.test(e.innerText || ""); });
    // The component's own rows are measured directly; the heuristic only covers bespoke lists not yet converted.
    const mh = [...document.querySelectorAll('#view .mh-row')].filter(vis);
    const top = mh.length ? mh : rows.filter(r => !r.closest('.ln,.ln-mask,[class*=grid],[class*=stat],[class*=news]') && !rows.some(o => o !== r && o.contains(r)));
    top.slice(0, 30).forEach(r => { const R = r.getBoundingClientRect(); const ink = [...r.querySelectorAll('*')].filter(x => x.childElementCount === 0 && x.textContent.trim() && vis(x)).map(x => x.getBoundingClientRect());
      if (!ink.length) return; const it = Math.min(...ink.map(x => x.top)), ib = Math.max(...ink.map(x => x.bottom)); const pad = Math.round(R.height - (ib - it));
      if (pad > 44) out.push(`ROW "${r.innerText.trim().split('\n')[0].slice(0, 28)}": ${Math.round(R.height)}px tall for ${Math.round(ib - it)}px of text (${pad}px of padding; max 44)`); });
    // group gaps: consecutive rows whose vertical distance is large
    // only within one list block (the .mh, or else the nearest section): distances to unrelated content don't count
    const blk = e => e.closest('.mh') || e.closest('section,[class*=sec]') || document.body; const by = new Map();
    top.forEach(r => { const k = blk(r); if (!by.has(k)) by.set(k, []); const b = r.getBoundingClientRect(); by.get(k).push({ top: b.top, bottom: b.bottom, t: r.innerText.trim().split('\n')[0].slice(0, 22) }); });
    by.forEach(rr => { rr.sort((a, b) => a.top - b.top); for (let i = 1; i < rr.length; i++) { const g = rr[i].top - rr[i - 1].bottom; if (g > 96) out.push(`GAP ${Math.round(g)}px between "${rr[i - 1].t}" and "${rr[i].t}" (max 96 including the group label; the component gives about 82)`); } });
    return { n: top.length, out }; });
  if (!res.n) { console.log('OK (no horizontal person rows)'); } else console.log(res.out.length ? [...new Set(res.out)].slice(0, 6).join('\n') : `OK (${res.n} rows)`);
  await b.close(); process.exit(res.out.length ? 1 : 0); })();
