#!/usr/bin/env python3
"""Assemble the Stenseminde Holding home-only page from firelight.src.html regions (HOME_BRIEF)."""
import re, pathlib
H = pathlib.Path(__file__).resolve().parent
K = H.parent.parent
src = (K / 'src/firelight.src.html').read_text()
def part(n):
    t = (H / n).read_text().rstrip('\n')
    return t
REG = {
 'meta':'meta.html','fonts':'fonts.txt','root':'root.css','fieldbg':'fieldbg.css','logocss':'logocss.css',
 'scenecss':'scenecss.css','seen':'seen.html','pre':'pre.html','brand':'brand.html','navmenu':'navmenu.html',
 'xc':'xc.html','site':'site.js','content':'content.js','views':'views.js','field':'field.js','story':'story.js'}
for name, f in REG.items():
    pat = re.compile(r'(/\*<R:%s>\*/|<!--<R:%s>-->)(.*?)(/\*</R:%s>\*/|<!--</R:%s>-->)' % ((name,)*4), re.S)
    new, n = pat.subn(lambda m: m.group(1) + part(f) + m.group(3), src)
    assert n == 1, (name, n)
    src = new
assert 'Progress' not in src, 'leftover Progress'
# site-specific CSS goes after every template rule
import re as _r
AS=(H/'assets.js').read_text()
src = src.replace('%%WRL%%', _r.search(r'WRL="([^"]+)"', AS).group(1)).replace('%%WRR%%', _r.search(r'WRR="([^"]+)"', AS).group(1))
# Danish UI strings in the template
for a_,b_ in [('<html lang="en">','<html lang="da">'),('Skip to content','Spring til indhold'),('textContent="Close"','textContent="Luk"'),('data-ps-close>Close<','data-ps-close>Luk<')]:
    src = src.replace(a_, b_)
assert src.count('</style>') == 1
src = src.replace('</style>', part('extra.css') + '\n</style>')
assert 'Firelight' not in re.sub(r'/\*.*?\*/', '', src, flags=re.S).replace('===== Firelight', ''), 'leftover Firelight text'
(K / 'src/stenseminde.src.html').write_text(src)
print('wrote src/stenseminde.src.html', len(src))
