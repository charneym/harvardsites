#!/usr/bin/env python3
"""Assemble the Synvivia home-only page from firelight.src.html regions (HOME_BRIEF)."""
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
# DR: the loader wordmark rises in and leaves as ONE unit (no per-letter SplitText fly-out, no stray fragments)
LDR = [
 ('var wm=SplitText.create("#pre .wm span",{type:"chars",charsClass:"c"});gsap.set(wm.chars,{yPercent:190,opacity:0});',
  'var wm={chars:[$("#pre .wm span")]};gsap.set(wm.chars,{y:18,opacity:0});'),
 ('.to(wm.chars,{yPercent:0,opacity:1,duration:.75,ease:"silk",stagger:.03},.15)',
  '.to(wm.chars,{y:0,opacity:1,duration:.8,ease:"power2.out"},.15)'),
 ('.to(wm.chars,{yPercent:-120,opacity:0,duration:.38,ease:"power3.in",stagger:.012},.08)',
  '.to(["#pre .wm"],{opacity:0,duration:.3,ease:"power2.in"},.12)'),
]
for a, b in LDR:
    assert src.count(a) == 1, a
    src = src.replace(a, b)
L='<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx-->'
assert src.count(L) == 1
src = src.replace(L, '<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx buildout-->')
assert src.count('</style>') == 1
src = src.replace('</style>', part('extra.css') + '\n</style>')
assert 'Firelight' not in re.sub(r'/\*.*?\*/', '', src, flags=re.S).replace('===== Firelight', ''), 'leftover Firelight text'
NSS = (K / 'lib/nssfix.js').read_text()
assert src.count('</body>') == 1
src = src.replace('</body>', NSS.strip() + '\n</body>')
(K / 'src/synvivia.src.html').write_text(src)
print('wrote src/synvivia.src.html', len(src))
