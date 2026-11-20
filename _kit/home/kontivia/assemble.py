#!/usr/bin/env python3
"""Assemble the Kontivia home-only page from firelight.src.html regions (HOME_BRIEF)."""
import re, pathlib
H = pathlib.Path(__file__).resolve().parent
K = H.parent.parent
src = (K / 'src/firelight.src.html').read_text()
import base64
HERO = base64.b64encode((H / 'hero.webp').read_bytes()).decode()
def part(n): return (H / n).read_text().rstrip('\n').replace('__HERO__', HERO)
REG = {
 'meta':'meta.html','fonts':'fonts.txt','root':'root.css','fieldbg':'fieldbg.css','logocss':'logocss.css',
 'scenecss':'scenecss.css','seen':'seen.html','pre':'pre.html','brand':'brand.html','navmenu':'navmenu.html',
 'xc':'xc.html','site':'site.js','content':'content.js','views':'views.js','field':'field.js','story':'story.js'}
for name, f in REG.items():
    pat = re.compile(r'(/\*<R:%s>\*/|<!--<R:%s>-->)(.*?)(/\*</R:%s>\*/|<!--</R:%s>-->)' % ((name,)*4), re.S)
    new, n = pat.subn(lambda m: m.group(1) + part(f) + m.group(3), src)
    assert n == 1, (name, n)
    src = new
TR = [('>Skip to content<','>Zum Inhalt springen<'),
 ('data-ps-close>Close<','data-ps-close>Schliessen<'),
 ('aria-label="Previous person">Prev<','aria-label="Vorherige Person">Zurück<'),
 ('aria-label="Next person">Next<','aria-label="Nächste Person">Weiter<'),
 ('textContent="Close"','textContent="Schliessen"'),
 ('textContent="Menu"','textContent="Menü"'),
 ('href="mailto:\'+p.mail+\'">Email</a>','href="mailto:\'+p.mail+\'">E-Mail</a>')]
# site-specific CSS goes after every template rule
assert src.count('</style>') == 1
src = src.replace('</style>', part('extra.css') + '\n</style>')
assert 'Firelight' not in re.sub(r'/\*.*?\*/', '', src, flags=re.S).replace('===== Firelight', ''), 'leftover Firelight text'
src = src.replace('<html lang="en"', '<html lang="de-CH"', 1)
for a, b in TR:
    assert a in src, a
    src = src.replace(a, b)
src = src.replace('<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx-->','<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx buildout-->',1)  # BUILDOUT v2 owns #/more/* (one implementation: _kit/lib/buildout.js)
(K / 'src/kontivia.src.html').write_text(src)
print('wrote src/kontivia.src.html', len(src))
