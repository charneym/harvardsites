#!/usr/bin/env python3
"""Assemble the senTec Elektronik home-only page from firelight.src.html regions (HOME_BRIEF)."""
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
LF = part('lmark.svg'); LM = part('lmark_mark.svg'); LW = part('lmark_wide.svg')
src = src.replace('__LMARK1__', LM.replace('__C__', '#f3f5fa'))
src = src.replace('__LMARK2__', LF.replace('__C__', '#f3f5fa').replace('class="lm"', 'class="lm plm"'))
src = src.replace('__LMARK3__', LW.replace('__C__', 'currentColor').replace('class="lm"', 'class="bigsvg lmb"').replace('role="img" aria-label="senTec"', 'aria-hidden="true"'))
assert '__LMARK' not in src
L = '<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx-->'
assert src.count(L) == 1
src = src.replace(L, L.replace('storyfx-->', 'storyfx buildout-->'))
assert src.count('</style>') == 1
src = src.replace('</style>', part('extra.css') + '\n</style>')
assert 'Firelight' not in re.sub(r'/\*.*?\*/', '', src, flags=re.S).replace('===== Firelight', ''), 'leftover Firelight text'
assert 'Lightel' not in re.sub(r'/\*.*?\*/', '', src, flags=re.S), 'leftover Lightel text'
src = src.replace('<html lang="en">', '<html lang="de">', 1)
for a, b in [('Skip to content', 'Zum Inhalt springen'), ('textContent="Close"', 'textContent="Schließen"'), ('textContent="Menu"', 'textContent="Menü"'), ('>Close<', '>Schließen<')]:
    src = src.replace(a, b)
nss = re.search(r'<script>.*?</script>', (K / 'lib/nssfix.js').read_text(), re.S).group(0)
assert src.count('</body>') == 1
src = src.replace('</body>', nss + '\n</body>')
(K / 'src/sentec.src.html').write_text(src)
(K.parent / 'sentec').mkdir(exist_ok=True)
shutil.copy(H / 'hero.webp', K.parent / 'sentec' / 'hero.webp')
print('wrote src/sentec.src.html', len(src))
