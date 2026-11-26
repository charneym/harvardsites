# Assemble _kit/src/fiberoptics.src.html from the isomet home-only build (shared plumbing only: loader, router, build-out,
# reveal, gates) with Fiberoptics Technology's own content, palette, logo, hero render and story.
# Run: python3 fiberoptics.assemble.py   (parts in fiberoptics-parts/)
import re, os
K = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(K, 'fiberoptics-parts')
s = open(os.path.join(K, 'isomet.src.html'), encoding='utf-8').read()
part = lambda n: open(os.path.join(P, n), encoding='utf-8').read()

def region(name, new, html=False):
    global s
    a, b = (('<!--<R:%s>-->' % name, '<!--</R:%s>-->' % name) if html else ('/*<R:%s>*/' % name, '/*</R:%s>*/' % name))
    i = s.index(a) + len(a); j = s.index(b, i)
    s = s[:i] + new + s[j:]

def rep(old, new, count=1):
    global s
    if old not in s:
        raise SystemExit('missing: ' + old[:90])
    s = s.replace(old, new) if count == 0 else s.replace(old, new, count)

MARK = part('mark.d').strip()
BUNDLE = part('bundle.svg.txt').strip()
RED = '#d71f26'
# the mark: traced from fiber-optics.com/wp-content/uploads/2019/06/fti_site_icon.png (512 px): the black "fti" swoosh as filled
# paths, the red seven-fibre bundle redrawn as exact circles. Wordmark set in Fraunces Bold Italic (embedded), as their italic serif.
def mark(x, y, s, fill='currentColor'):
    return '<g transform="translate(%s %s) scale(%s)"><path fill="%s" fill-rule="evenodd" d="%s"/>%s</g>' % (x, y, s, fill, MARK, BUNDLE)
WM = "font-family:'Fraunces',Georgia,serif;font-style:italic;font-weight:700"
STACK = ('<svg class="plogo" viewBox="0 0 346 134" role="img" aria-label="Fiberoptics Technology Incorporated, established 1977">%s'
         '<g style="%s" fill="%s" font-size="28"><text x="118" y="28">fiberoptics</text><text x="118" y="64">technology</text><text x="118" y="100">incorporated</text></g>'
         '<text x="120" y="127" fill="#f3f1ed" style="font-family:\'IBM Plex Mono\',monospace;font-weight:500;letter-spacing:.2em" font-size="11.5">ESTABLISHED 1977</text></svg>') % (mark(-22, 4, .236, '#f3f1ed'), WM, '#ff3b42')
HORIZ = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 318 44" aria-hidden="true">%s'
         '<text x="58" y="31" style="%s" fill="currentColor" font-size="27">fiberoptics technology</text></svg>') % (mark(-9.5, -1, .0875), WM)
region('meta', '''<title>Fiberoptics Technology — fiber optic light guides, illumination and fiber drawing since 1977</title>
<meta name="description" content="Fiberoptics Technology, Inc. (FTI), Pomfret, Connecticut: glass fiber drawn in-house and standard and custom OEM fiber optics since 1977: medical light guides, LED illuminators, machine vision lighting, fiberscopes and assemblies.">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#0b0b0c">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-110 -95 220 190'%3E%3Cg fill='none' stroke='%23d71f26' stroke-width='12'%3E%3Cellipse rx='100' ry='84'/%3E%3Ccircle r='26'/%3E%3Ccircle cy='-56' r='26'/%3E%3Ccircle cy='56' r='26'/%3E%3Ccircle cx='-49' cy='-28' r='26'/%3E%3Ccircle cx='-49' cy='28' r='26'/%3E%3Ccircle cx='49' cy='-28' r='26'/%3E%3Ccircle cx='49' cy='28' r='26'/%3E%3C/g%3E%3C/svg%3E">''', html=True)
region('fonts', '/*@fonts Hanken Grotesk:300,400,500,600; Inter:400,500; IBM Plex Mono:400,500; Fraunces:400i,700i*/')
region('root', ''':root{
  --ink:#0b0b0c;--inkr:11,11,12;--boner:243,241,237;--accr:255,90,95;--ink2:#111113;--ink3:#18181b;--deep:#070708;
  --bone:#f3f1ed;--bone2:#e9e6e0;--bone3:#dcd8d0;
  --stone:#a6a4a0;--stoneD:#57554f;
  --acc:#d71f26;--accL:#ff5a5f;--accD:#b3141b;--teal:#a6a4a0;--tealL:#cbc9c5;
  --hair:rgba(243,241,237,.14);--hairD:rgba(11,11,12,.15);
  --disp:'Hanken Grotesk',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Fraunces',Georgia,serif;
  --sans:'Inter',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,'SFMono-Regular',monospace;
  --deco:'Hanken Grotesk',system-ui,-apple-system,'Segoe UI',sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
  --sp1:#d71f26;--sp2:#ff5a5f;--sp3:#ff8a8c;--sp4:#f3f1ed;--sp5:#ff5a5f;--sp6:#d71f26;
}
@media (min-width:1800px){:root{--maxw:1560px}}''')
region('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:#0b0b0c}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
region('logocss', '''.brand{display:flex;align-items:center;height:56px;color:var(--bone)}
.brand svg{height:34px;width:auto;display:block;overflow:visible}
@media (max-width:420px){.brand svg{height:28px}}''')
region('seen', '<script>try{if(sessionStorage.getItem("fiberoptics-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>', html=True)
region('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <div class="mk lock">%s<span class="lab ptag">Fiber optics · drawn and built in the USA</span></div>
  </div>
  <span class="lab pl">Pomfret, Connecticut · Naples, Florida</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''' % STACK, html=True)
region('brand', '<a href="#/" class="brand" id="brand" aria-label="Fiberoptics Technology, home">%s</a>' % HORIZ, html=True)
NAV = [('capabilities', 'Capabilities'), ('products', 'Products'), ('markets', 'Markets'), ('company', 'Company'), ('news', 'News')]
region('navmenu', '''<nav class="nav" aria-label="Primary">
%s
    <a class="btn" href="#/contact">Contact <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
%s
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Headquarters</span><br>Pomfret, Connecticut</div>
    <div><span class="lab">Phone</span><br><a href="tel:+18004335248">+1 800 433 5248</a></div>
  </div>
</div>''' % ('\n'.join('    <a class="nl ul" href="#/%s">%s</a>' % n for n in NAV), '\n'.join('    <li><a href="#/%s">%s</a></li>' % n for n in NAV)), html=True)
region('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Fiberoptics Technology</span><div class="t" id="xtt"></div></div>''', html=True)
region('site', 'var SITE="Fiberoptics Technology";\nvar PK="fiberoptics";')
region('content', part('content.js'))
region('views', part('views.js'))
region('field', part('field.js'))
region('story', part('story.js'))
# CSS: swap Isomet's own layer for FTI's
i = s.index('/* ===== Isomet:'); j = s.index('\n', i)
s = s[:i] + '/* ===== Fiberoptics Technology: their logo is a black italic fti swoosh with a red (#d71f26) seven-fibre bundle and a red bold italic serif wordmark. Here: neutral ink, warm bone, their red as the accent (lifted to #ff5a5f on ink for legibility) =====' + s[j:]
rep('background:linear-gradient(90deg,var(--sp2),var(--accL) 60%,rgba(77,163,255,0))', 'background:linear-gradient(90deg,var(--acc),var(--accL) 60%,rgba(255,90,95,0))')
rep('@media (max-width:860px){.fieldbg{background:linear-gradient(#0c0b0b,#0c0b0b)}}', '@media (max-width:860px){.fieldbg{background:#0b0b0c}}')
rep('@media (max-width:860px){.fieldbg{background:#120e0b}}', '')
rep('.scene .xtl{fill:rgba(170,200,255,.045);stroke:none}', '')
rep('.scene .aw{fill:none;stroke:rgba(122,180,255,.62);stroke-width:1}\n.scene .awa{fill:none;stroke:rgba(122,180,255,.8);stroke-width:1.1;stroke-linejoin:round;stroke-linecap:round}\n', '')
rep('.scene .bm{fill:none;stroke:var(--accL);stroke-width:2.2;stroke-linejoin:round;stroke-linecap:round}\n.scene .bm0{fill:none;stroke:rgba(77,163,255,.55);stroke-width:1.6;stroke-linejoin:round;stroke-linecap:round}\n.scene .sma{fill:#c99a45;stroke:rgba(242,243,241,.5);stroke-width:.8}\n.scene .pad{fill:#d9a54a}\n', '')
rep('</style>\n</head>', part('layer.css') + '\n</style>\n</head>')
# loader: the whole lockup rises in as one unit (keyframes renamed)
rep('animation:isLock', 'animation:ftLock'); rep('@keyframes isLock', '@keyframes ftLock')
rep('#pre .mk.lock .plogo{width:clamp(220px,22vw,320px);height:auto;display:block;overflow:visible}', '#pre .mk.lock .plogo{width:clamp(270px,25vw,360px);height:auto;display:block;overflow:visible}')
rep('@media (max-width:560px){#pre .mk.lock .plogo{width:220px}', '@media (max-width:560px){#pre .mk.lock .plogo{width:262px}')
if 'isomet' in s.lower().replace('isomet.src', ''):
    for m in re.finditer(r'(?i)isomet', s):
        print('leftover:', s[max(0, m.start()-60):m.end()+40].replace('\n', ' '))
open(os.path.join(K, 'fiberoptics.src.html'), 'w', encoding='utf-8').write(s)
print('ok', len(s))
