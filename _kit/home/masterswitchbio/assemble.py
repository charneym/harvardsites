#!/usr/bin/env python3
"""Assemble the MasterSwitch Bio home-only page from firelight.src.html regions (HOME_BRIEF)."""
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
L='<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx-->'
assert src.count(L) == 1
src = src.replace(L, '<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx buildout-->')
assert src.count('</style>') == 1
import base64
NM = K / 'node_modules/@fontsource'
gk = ''.join("@font-face{font-family:'%s';font-style:normal;font-weight:%s;font-display:swap;src:url(data:font/woff2;base64,%s) format('woff2');unicode-range:U+0370-03FF}\n" % (fam, w, base64.b64encode((NM / d / 'files' / ('%s-greek-%s-normal.woff2' % (d, w))).read_bytes()).decode()) for fam, d, ws in (('Jura','jura',(400,500,600)),('Source Sans 3','source-sans-3',(400,600))) for w in ws)
src = src.replace('</style>', gk + part('extra.css') + '\n</style>')
assert 'Firelight' not in re.sub(r'/\*.*?\*/', '', src, flags=re.S).replace('===== Firelight', ''), 'leftover Firelight text'
assert src.count('</body>') == 1
src = src.replace('</body>', (K / 'lib/nssfix.js').read_text().replace('/*<R:nssfix>*/','').replace('/*</R:nssfix>*/','') + '\n</body>')
(K / 'src/masterswitchbio.src.html').write_text(src)
print('wrote src/masterswitchbio.src.html', len(src))
