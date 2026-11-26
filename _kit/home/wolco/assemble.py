#!/usr/bin/env python3
"""Assemble the WOLCO home-only page from firelight.src.html regions (HOME_BRIEF)."""
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
assert src.count('<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx-->') == 1
src = src.replace('<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx-->', '<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx buildout-->')
# site-specific CSS goes after every template rule
assert src.count('</style>') == 1
src = src.replace('</style>', part('extra.css') + '\n</style>')
assert 'Firelight' not in re.sub(r'/\*.*?\*/', '', src, flags=re.S).replace('===== Firelight', ''), 'leftover Firelight text'
assert src.count('<html lang="en">') == 1
src = src.replace('<html lang="en">', '<html lang="pl">')
src = src.replace('$("#burgerLab").textContent="Close"', '$("#burgerLab").textContent="Zamknij"')
BO = '<script>window.BUILDOUT={copy:{eye:"Podgląd koncepcji",h:"Pełna\u00a0wersja strony\u00a0{item}.",body:"To jest koncepcja strony głównej. Jeśli ten kierunek Państwu odpowiada, rozbuduję tę stronę i resztę serwisu w tym samym stylu, z Państwa zespołem, ofertą i aktualnościami, i zajmę się przeniesieniem treści z obecnej strony. Wystarczy odpowiedzieć na e-mail, w którym przyszedł ten link, a dalej pójdzie już sprawnie.",back:"Powrót do strony głównej",keep:"Lub przewiń dalej koncepcję",crumb:"Strona główna"}};</script>'
assert src.count('<!--@libs') == 1
src = src.replace('<!--@libs', BO + '\n<!--@libs')
assert src.count('</body>') == 1
src = src.replace('</body>', (K / 'lib/nssfix.js').read_text().rstrip('\n') + '\n</body>')
(K / 'src/wolco.src.html').write_text(src)
print('wrote src/wolco.src.html', len(src))
