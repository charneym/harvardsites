#!/usr/bin/env python3
"""Assemble the HekeTiss home-only page from firelight.src.html regions (HOME_BRIEF)."""
import re, pathlib
H = pathlib.Path(__file__).resolve().parent
K = H.parent.parent
src = (K / 'src/firelight.src.html').read_text()
def part(n): return (H / n).read_text().rstrip('\n')
REG = {
 'meta':'meta.html','fonts':'fonts.txt','root':'root.css','fieldbg':'fieldbg.css','logocss':'logocss.css',
 'scenecss':'scenecss.css','seen':'seen.html','pre':'pre.html','brand':'brand.html','navmenu':'navmenu.html',
 'xc':'xc.html','site':'site.js','content':'content.js','views':'views.js','field':'field.js','story':'story.js'}
for name, f in REG.items():
    pat = re.compile(r'(/\*<R:%s>\*/|<!--<R:%s>-->)(.*?)(/\*</R:%s>\*/|<!--</R:%s>-->)' % ((name,)*4), re.S)
    new, n = pat.subn(lambda m: m.group(1) + part(f) + m.group(3), src)
    assert n == 1, (name, n)
    src = new
# the firm's real logo (heketiss.ch/logo.svg), its paths unchanged; colours become classes so each context can set them
lg = (H / 'logo.svg').read_text()
lg = lg[lg.index('<svg'):]
lg = re.sub(r'<svg[^>]*>', '', lg, count=1).replace('</svg>', '').strip()
lg = re.sub(r'\s*style="fill:none;fill-rule:nonzero;stroke:rgb\(167,23,37\);stroke-width:13.2px;"', ' class="hkrs"', lg)
lg = lg.replace('style="fill:rgb(167,23,37);fill-rule:nonzero;"', 'class="hkr"').replace('style="fill:rgb(167,23,37);"', 'class="hkr"')
lg = lg.replace('style="fill:rgb(35,31,32);fill-rule:nonzero;"', 'class="hkc"')
lg = lg.replace('id="logo-heketiss-2022" ', '')
assert 'style=' not in lg, lg
lg = re.sub(r'>\s+<', '><', lg)
def logo(cls, label=None):
    a = ' role="img" aria-label="%s"' % label if label else ' aria-hidden="true"'
    return '<svg class="%s" viewBox="0 0 2761 632"%s style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:10">%s</svg>' % (cls, a, lg)
src = src.replace('__LOGO_NAV__', logo('hk-logo', 'HekeTiss')).replace('__LOGO_PRE__', logo('mk hk-logo'))
src = src.replace("var SHEETS=[];", "var SHEETS=[];\nvar LOGO_FTR='" + logo('bigsvg hk-logo') + "';", 1)
assert src.count('<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx-->') == 1
src = src.replace('<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx-->', '<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx buildout-->')
assert src.count('</style>') == 1
src = src.replace('</style>', part('extra.css') + '\n</style>')
# Safari dash fix (PRINCIPLES DR4), inline before </body>
nss = (K / 'lib/nssfix.js').read_text()
assert src.count('</body>') == 1
src = src.replace('</body>', nss.strip() + '\n</body>')
assert 'Firelight' not in re.sub(r'/\*.*?\*/', '', src, flags=re.S).replace('===== Firelight', ''), 'leftover Firelight text'
(K / 'src/heketiss.src.html').write_text(src)
print('wrote src/heketiss.src.html', len(src))
