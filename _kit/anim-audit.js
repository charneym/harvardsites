// Usage: node anim-audit.js <file.html> [route] [width] [height]
// Flags content below the fold that is ALREADY fully shown before the user scrolls to it,
// meaning it will NOT animate in. Every heading, paragraph, list item, card, stat, button, image,
// figure, table row and label must be pre-hidden (opacity < .05, offset transform, clip/mask)
// until it reveals.
const {chromium} = require('playwright');
const [,, file, route = '', w = '1440', h = '900'] = process.argv;
(async () => {
  const b = await chromium.launch({args: ['--use-gl=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist']});
  const p = await b.newPage({viewport: {width: +w, height: +h}});
  const R = route ? (route.startsWith('#') ? route : '#' + route) : ''; const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + require('path').resolve(file) + R);
  await p.waitForTimeout(6000);
  const res = await p.evaluate(() => {
    const H = innerHeight, out = [];
    const sel = 'h1,h2,h3,h4,h5,h6,p,li,blockquote,figcaption,dt,dd,td,th,label,button,a[class],img,svg,figure,canvas,[class*=card],[class*=stat],[class*=tile],[class*=eyebrow],[class*=kicker],[class*=label],[class*=tag]';
    const hidden = el => {
      for (let e = el; e && e !== document.body; e = e.parentElement) {
        const s = getComputedStyle(e);
        if (+s.opacity < 0.05 || s.visibility === 'hidden') return true;
        if (s.transform !== 'none') {
          const m = new DOMMatrix(s.transform);
          if (Math.abs(m.m42) > 4 || Math.abs(m.m41) > 4 || Math.abs(m.a - 1) > .02) return true;
        }
        if (s.clipPath && s.clipPath !== 'none' && !/inset\(0(px)?( 0(px)?)*\)/.test(s.clipPath)) return true;
        if ((s.overflow === 'hidden' || s.overflowY === 'hidden' || s.overflowY === 'clip') && e !== el) {
          const r = el.getBoundingClientRect(), q = e.getBoundingClientRect();
          if (r.top >= q.bottom - 1 || r.bottom <= q.top + 1) return true; // masked-line reveal
        }
      }
      return false;
    };
    const seen = new Set();
    for (const el of document.querySelectorAll(sel)) {
      const r = el.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) continue;
      if (r.top + scrollY < H * 1.15) continue; // hero / intro handled separately
      if (el.closest('nav,header,footer,[aria-hidden=true],.sr-only')) continue;
      if (getComputedStyle(el).display === 'none') continue;
      const txt = (el.innerText || el.alt || el.tagName).trim().slice(0, 60);
      const kids = el.querySelectorAll('*');
      let kidHidden = false;
      for (const k of kids) { const kr = k.getBoundingClientRect(); if (kr.width > 1 && kr.height > 1 && hidden(k)) { kidHidden = true; break; } }
      if (!hidden(el) && !kidHidden) {
        const k = el.tagName + txt;
        if (!seen.has(k)) { seen.add(k); out.push(`${el.tagName.toLowerCase()}.${(el.className && el.className.baseVal === undefined ? el.className : '').toString().split(' ')[0]} @${Math.round(r.top + scrollY)} "${txt.replace(/\s+/g, ' ')}"`); }
      }
    }
    const zeros = [...document.querySelectorAll('body *')].filter(e => e.children.length === 0 && /^[$€£]?0([.,]0+)?\s*[MKBk%×x+]?$/.test((e.textContent || '').trim()) && e.getBoundingClientRect().width > 0).map(e => 'ZERO-VALUE COUNTER: "' + e.textContent.trim() + '" in ' + (e.parentElement.innerText || '').replace(/\s+/g, ' ').slice(0, 60));
    const vis = [...document.querySelectorAll('h1,h2,h3,p')].filter(e => { const r = e.getBoundingClientRect(); return r.width > 2 && r.height > 2 && e.innerText.trim(); }).length;
    if (vis < 2) out.unshift('BLANK: the route rendered fewer than 2 visible headings/paragraphs');
    return zeros.concat(out);
  });
  if (errs.length) res.unshift('JS ERRORS: ' + errs.slice(0, 3).join(' | '));
  console.log(res.length ? `NOT ANIMATED (${res.length}):\n` + res.slice(0, 60).join('\n') : 'OK: every below-fold element is pre-hidden for a reveal');
  await b.close();
})();
