#!/usr/bin/env python3
"""Assemble the Medical Index home-only page from firelight.src.html regions (HOME_BRIEF)."""
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
import re as _re
logo=(H/'logo.svg').read_text().strip()
logo=_re.sub(r'<svg xmlns="http://www.w3.org/2000/svg" ', '<svg ', logo)
assert src.count('__LOGO__')==2
src=src.replace('__LOGO__',logo)
def sub(a,b,n=1):
    global src
    assert src.count(a)==n,(a,src.count(a))
    src=src.replace(a,b)
sub('<html lang="en">','<html lang="de">')
sub('>Skip to content<','>Zum Inhalt springen<')
sub('$("#burgerLab").textContent="Close"','$("#burgerLab").textContent="Schließen"')
sub('$("#burgerLab").textContent="Menu"','$("#burgerLab").textContent="Menü"')
# loader: the whole logo lockup fades and rises as ONE unit (WAVE_BRIEF LOADER); no per-letter split
sub('var wm=SplitText.create("#pre .wm span",{type:"chars",charsClass:"c"});gsap.set(wm.chars,{yPercent:190,opacity:0});','var wm={chars:$("#pre .wm")};gsap.set(wm.chars,{y:14,opacity:0});')
sub('.to(wm.chars,{yPercent:0,opacity:1,duration:.75,ease:"silk",stagger:.03},.15)','.to(wm.chars,{y:0,opacity:1,duration:.7,ease:"power2.out"},.15)')
sub('.to(wm.chars,{yPercent:-120,opacity:0,duration:.38,ease:"power3.in",stagger:.012},.08)','.to(wm.chars,{opacity:0,duration:.34,ease:"power2.in"},.08)')
assert src.count('<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx-->') == 1
src = src.replace('<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx-->', '<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx buildout-->')
# site-specific CSS goes after every template rule
assert src.count('</style>') == 1
src = src.replace('</style>', part('extra.css') + '\n</style>')
assert 'Firelight' not in re.sub(r'/\*.*?\*/', '', src, flags=re.S).replace('===== Firelight', ''), 'leftover Firelight text'
assert src.count('</body>')==1
src=src.replace('</body>', (K/'lib/nssfix.js').read_text().rstrip('\n')+'\n</body>')
(K / 'src/medicalindex.src.html').write_text(src)
print('wrote src/medicalindex.src.html', len(src))
