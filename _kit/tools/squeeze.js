// squeeze.js SLUG [width=390] - flags phone-layout squeeze: text blocks with long text in a narrow column,
// and text blocks whose boxes overlap another text block (label-over-name). Exit 1 on flags.
const { chromium } = require('playwright');
(async () => {
  const [slug, w = '390'] = process.argv.slice(2);
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: +w, height: 844 } });
  await p.goto('file://' + process.cwd() + '/' + slug + '/index.html'); await p.waitForTimeout(4500);
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < H; y += 600) { await p.evaluate(y => scrollTo(0, y), y); await p.waitForTimeout(120); }
  await p.waitForTimeout(800);
  const flags = await p.evaluate(() => {
    const out = [];
    const skip = el => el.closest('.skip,[class*=skip],a[href="#main"],a[href="#content"],#pre,#xc,nav,.menu,[aria-hidden="true"],svg,.story,[data-story]');
    const els = [...document.querySelectorAll('body *')].filter(el => {
      if (skip(el)) return false;
      const own = [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 1);
      if (!own) return false; const cs = getComputedStyle(el);
      if (cs.visibility === 'hidden' || cs.display === 'none' || +cs.opacity < 0.2) return false;
      const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0;
    });
    const boxes = els.map(el => ({ el, r: el.getBoundingClientRect(), t: el.textContent.trim().replace(/\s+/g, ' ') }));
    for (const b of boxes) {
      const rg = document.createRange(); rg.selectNodeContents(b.el);
      const tops = new Set([...rg.getClientRects()].filter(q => q.width > 1).map(q => Math.round(q.top / 4)));
      const lines = tops.size, cpl = b.t.length / Math.max(lines, 1);
      if (b.t.length > 40 && b.r.width < 0.4 * innerWidth) out.push('NARROW ' + Math.round(b.r.width) + 'px: ' + b.t.slice(0, 60));
      else if (lines >= 3 && cpl < 14 && b.r.width < 0.5 * innerWidth) out.push('SQUEEZED ' + lines + ' lines, ' + Math.round(cpl) + ' chars/line: ' + b.t.slice(0, 60));
    }
    for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
      const a = boxes[i], c = boxes[j]; if (a.el.contains(c.el) || c.el.contains(a.el)) continue;
      const ox = Math.min(a.r.right, c.r.right) - Math.max(a.r.left, c.r.left), oy = Math.min(a.r.bottom, c.r.bottom) - Math.max(a.r.top, c.r.top);
      if (ox > 6 && oy > 4) out.push('OVERLAP: "' + a.t.slice(0, 30) + '" x "' + c.t.slice(0, 30) + '"');
    }
    return [...new Set(out)];
  });
  console.log('squeeze ' + slug + ' @' + w + ': ' + (flags.length ? flags.length + ' flags' : 'OK')); flags.slice(0, 25).forEach(f => console.log('  ' + f));
  await b.close(); process.exit(flags.length ? 1 : 0);
})();
