#!/usr/bin/env python3
"""Assemble the Japan Private Equity (JPE) home-only page from firelight.src.html regions (HOME_BRIEF)."""
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
import base64 as _b
src = src.replace('__HERO__', _b.b64encode((H / 'hero.webp').read_bytes()).decode())
src = src.replace('<html lang="en">','<html lang="ja">',1)
# site-specific CSS goes after every template rule
assert src.count('</style>') == 1
src = src.replace('</style>', part('extra.css') + '\n</style>')
assert 'Firelight' not in re.sub(r'/\*.*?\*/', '', src, flags=re.S).replace('===== Firelight', ''), 'leftover Firelight text'
# Japanese fonts: subset Shippori Mincho and Noto Sans JP to exactly the characters on the page, inline as woff2
import subprocess, base64, os, tempfile
FD = pathlib.Path(os.environ.get('JPFONTS', '/tmp/claude-0/-home-user-harvardsites/7d8c0af1-0927-515b-b7b9-8d8017a264e6/scratchpad/jpe/fonts'))
chars = ''.join(sorted(set(c for c in src if ord(c) > 32) | set(chr(i) for i in range(32, 127)) | set('、。「」『』（）・ー〜～“”’…！？：　％／')))
tmp = tempfile.mkdtemp(); txt = os.path.join(tmp, 'c.txt'); open(txt, 'w').write(chars)
faces = ''
for fam, fn, wt in [('Shippori Mincho', 'ShipporiMincho-Regular.ttf', '400'), ('Shippori Mincho', 'ShipporiMincho-Medium.ttf', '500'), ('Noto Sans JP', 'NotoSansJP%5Bwght%5D.ttf', '300 700')]:
    out = os.path.join(tmp, fn + '.woff2')
    subprocess.check_call(['pyftsubset', str(FD / fn), '--text-file=' + txt, '--flavor=woff2', '--layout-features=*', '--output-file=' + out])
    faces += "@font-face{font-family:'%s';font-style:normal;font-weight:%s;font-display:swap;src:url(data:font/woff2;base64,%s) format('woff2')}\n" % (fam, wt, base64.b64encode(open(out, 'rb').read()).decode())
src = src.replace('<style>', '<style>\n' + faces, 1)
src = src.replace('<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx-->','<!--@libs gsap ScrollTrigger SplitText CustomEase lenis storyfx buildout-->',1)  # BUILDOUT v2 owns #/more/* (one implementation: _kit/lib/buildout.js)
(K / 'src/japan-private-equity.src.html').write_text(src)
print('wrote src/japan-private-equity.src.html', len(src))
