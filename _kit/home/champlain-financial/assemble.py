#!/usr/bin/env python3
"""Assemble the Champlain Financial Corporation home-only page from firelight.src.html regions (HOME_BRIEF)."""
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
# site-specific CSS goes after every template rule
assert src.count('</style>') == 1
src = src.replace('</style>', part('extra.css') + '\n</style>')
assert 'Firelight' not in re.sub(r'/\*.*?\*/', '', src, flags=re.S).replace('===== Firelight', ''), 'leftover Firelight text'
src = src.replace('<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx-->','<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx buildout-->',1)  # BUILDOUT v2 owns #/more/* (one implementation: _kit/lib/buildout.js)
(K / 'src/champlain-financial.src.html').write_text(src)
print('wrote src/champlain-financial.src.html', len(src))

import shutil
(K.parent / 'champlain-financial').mkdir(exist_ok=True)
shutil.copy(H / 'hero.jpg', K.parent / 'champlain-financial' / 'hero.jpg')
print('copied hero.jpg')
