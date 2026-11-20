#!/usr/bin/env python3
"""Assemble the Touro Capital Partners home-only page from firelight.src.html regions (HOME_BRIEF)."""
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
for a,b in [('<html lang="en">','<html lang="pt-PT">'),('>Skip to content<','>Saltar para o conteúdo<'),('textContent="Close"','textContent="Fechar"'),
             ('var mk=$("#pre .mk path"),L=330;','var mk=$("#pre .mk path"),L=Math.ceil(mk.getTotalLength());')]:
    assert src.count(a)==1,a; src=src.replace(a,b)
assert 'Firelight' not in re.sub(r'/\*.*?\*/', '', src, flags=re.S).replace('===== Firelight', ''), 'leftover Firelight text'
(K / 'src/touro-capital.src.html').write_text(src)
print('wrote src/touro-capital.src.html', len(src))
