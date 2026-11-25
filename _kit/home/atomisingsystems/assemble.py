#!/usr/bin/env python3
"""Assemble the Atomising Systems home-only page from firelight.src.html regions (HOME_BRIEF, WAVE_BRIEF)."""
import re, pathlib, shutil
H = pathlib.Path(__file__).resolve().parent
K = H.parent.parent
src = (K / 'src/firelight.src.html').read_text()
def part(n): return (H / n).read_text().rstrip('\n')
MARK = part('mark.svg')
REG = {
 'meta':'meta.html','fonts':'fonts.txt','root':'root.css','fieldbg':'fieldbg.css','logocss':'logocss.css',
 'scenecss':'scenecss.css','seen':'seen.html','pre':'pre.html','brand':'brand.html','navmenu':'navmenu.html',
 'xc':'xc.html','site':'site.js','content':'content.js','views':'views.js','field':'field.js','story':'story.js'}
for name, f in REG.items():
    pat = re.compile(r'(/\*<R:%s>\*/|<!--<R:%s>-->)(.*?)(/\*</R:%s>\*/|<!--</R:%s>-->)' % ((name,)*4), re.S)
    body = part(f).replace('__MARK__', MARK)
    new, n = pat.subn(lambda m: m.group(1) + body + m.group(3), src)
    assert n == 1, (name, n)
    src = new
OLD = '<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx-->'
assert src.count(OLD) == 1
src = src.replace(OLD, '<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx buildout-->')
assert src.count('</style>') == 1
src = src.replace('</style>', part('extra.css') + '\n</style>')
assert 'Firelight' not in re.sub(r'/\*.*?\*/', '', src, flags=re.S).replace('===== Firelight', ''), 'leftover Firelight text'
nss = re.search(r'<script>.*?</script>', (K / 'lib/nssfix.js').read_text(), re.S).group(0)
assert src.count('</body>') == 1
src = src.replace('</body>', nss + '\n</body>')
(K / 'src/atomisingsystems.src.html').write_text(src)
out = K.parent / 'atomisingsystems'; out.mkdir(exist_ok=True)
shutil.copy(H / 'hero.webp', out / 'hero.webp')
print('wrote src/atomisingsystems.src.html', len(src))
