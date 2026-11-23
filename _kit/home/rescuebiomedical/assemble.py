#!/usr/bin/env python3
"""Assemble the Rescue Biomedical home-only page from firelight.src.html regions (HOME_BRIEF)."""
import re, pathlib, json, urllib.parse
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
logo = (H / 'logo.svg').read_text().strip().replace('<svg xmlns="http://www.w3.org/2000/svg" ', '<svg ')
assert src.count('__LOGO__') == 2
src = src.replace('__LOGO__', logo)
src = src.replace('var SHEETS=[];', 'var SHEETS=[];\nvar LOGO=' + json.dumps(logo) + ';', 1)
mk = re.search(r'<path fill="url\(#rbG\)" d="([^"]+)"', logo).group(1)
fav = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="61 59 172 172"><defs><linearGradient id="g" x1="0" y1="61" x2="0" y2="230" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FBA919"/><stop offset="1" stop-color="#EF3E36"/></linearGradient></defs><path fill="url(#g)" d="'+mk+'"/></svg>'
src = src.replace('__FAV__', urllib.parse.quote(fav))
assert src.count('<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx-->') == 1
src = src.replace('<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx-->', '<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx buildout-->')
assert src.count('</style>') == 1
src = src.replace('</style>', part('extra.css') + '\n</style>')
assert 'Firelight' not in re.sub(r'/\*.*?\*/', '', src, flags=re.S).replace('===== Firelight', ''), 'leftover Firelight text'
nss = (K / 'lib/nssfix.js').read_text()
assert src.count('</body>') == 1
nss = re.search(r'<script>.*?</script>', nss, re.S).group(0)
src = src.replace('</body>', nss + '\n</body>')
(K / 'src/rescuebiomedical.src.html').write_text(src)
print('wrote src/rescuebiomedical.src.html', len(src))
