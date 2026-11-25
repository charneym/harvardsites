#!/usr/bin/env python3
"""Assemble the AD Swiss MedTech home-only page from firelight.src.html regions (HOME_BRIEF)."""
import re, pathlib, shutil
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
AM = part('amark.svg'); AL = part('alock.svg')
src = src.replace('__AMARK1__', AM.replace('__C__', '#f4f5fa'))
src = src.replace('__ALOCK2__', AL.replace('__C__', '#f4f5fa').replace('class="lm"', 'class="lm plm"'))
src = src.replace('__ALOCK3__', AL.replace('__C__', '#f4f5fa').replace('class="lm"', 'class="bigsvg lmb"').replace('role="img" aria-label="AD Swiss MedTech"', 'aria-hidden="true"'))
assert '__AMARK' not in src and '__ALOCK' not in src
L = '<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx-->'
assert src.count(L) == 1
src = src.replace(L, L.replace('storyfx-->', 'storyfx buildout-->'))
assert src.count('</style>') == 1
src = src.replace('</style>', part('extra.css') + '\n</style>')
assert 'Firelight' not in re.sub(r'/\*.*?\*/', '', src, flags=re.S).replace('===== Firelight', ''), 'leftover Firelight text'
assert 'Lightel' not in re.sub(r'/\*.*?\*/', '', src, flags=re.S), 'leftover Lightel text'
nss = (K / 'lib/nssfix.js').read_text()
assert src.count('</body>') == 1
nss = re.search(r'<script>.*?</script>', nss, re.S).group(0)
src = src.replace('</body>', nss + '\n</body>')
(K / 'src/adswissmed.src.html').write_text(src)
(K.parent / 'adswissmed').mkdir(exist_ok=True)
for f in ('hero.webp', 'ponos.webp', 'monos.webp'):
    shutil.copy(H / f, K.parent / 'adswissmed' / f)
print('wrote src/adswissmed.src.html', len(src))
