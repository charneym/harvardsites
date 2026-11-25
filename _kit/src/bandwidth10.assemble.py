# Assemble _kit/src/bandwidth10.src.html from the isomet home-only build (shared plumbing only: loader, router, build-out,
# reveal, gates) with Bandwidth10's own content, palette, logo, hero render and story.
# Run: python3 bandwidth10.assemble.py   (parts in bandwidth10-parts/)
import re, os
K = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(K, 'bandwidth10-parts')
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

MARK = part('mark.d')
RED = '#d71718'
# logo lockups (redrawn from bandwidth10.com/wp-content/uploads/2019/01/logo-white.png: red ellipse with white wave crescents,
# "BANDWIDTH" in small caps and a red "10"); the text is set in Arimo Bold (embedded), the mark is filled paths
def wordmark(x, y, anchor='middle', fill='currentColor'):
    return ('<text x="%s" y="%s" text-anchor="%s" style="font-family:\'Arimo\',Arial,sans-serif;font-weight:700" fill="%s">'
            '<tspan font-size="33.5">B</tspan><tspan font-size="26.5">ANDWIDTH</tspan><tspan font-size="33.5" fill="%s" dx="1">10</tspan></text>') % (x, y, anchor, fill, RED)
STACK = ('<svg class="plogo" viewBox="4 26 212 100" role="img" aria-label="Bandwidth10">'
         '<g transform="translate(110 55)"><path fill="%s" fill-rule="evenodd" d="%s"/></g>%s</svg>') % (RED, MARK, wordmark(110, 121, fill='#f3f2ef'))
# horizontal lockup for the header: the mark scaled to the wordmark's height, then the wordmark
HORIZ = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 40" aria-hidden="true">'
         '<g transform="translate(46 20) scale(.5)"><path fill="%s" fill-rule="evenodd" d="%s"/></g>%s</svg>') % (RED, MARK, wordmark(104, 32, 'start'))

region('meta', '''<title>Bandwidth10 — wavelength-tunable VCSELs and swept sources, Berkeley</title>
<meta name="description" content="Bandwidth10, a 2011 UC Berkeley spin-out, makes wavelength-tunable High Contrast Grating VCSELs and swept sources from 720 nm to 1700 nm for OCT, fiber Bragg grating sensing, gas sensing, LIDAR and imaging.">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#0b0c0e">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-90 -32 180 64'%3E%3Cellipse rx='86' ry='28' fill='%23d71718'/%3E%3C/svg%3E">''', html=True)
region('fonts', '/*@fonts Manrope:300,400,500,600; Inter:400,500; IBM Plex Mono:400,500; Arimo:700*/')
region('root', ''':root{
  --ink:#0b0c0e;--inkr:11,12,14;--boner:243,242,239;--accr:255,92,82;--ink2:#101114;--ink3:#16171b;--deep:#070809;
  --bone:#f3f2ef;--bone2:#e9e7e2;--bone3:#dcd9d2;
  --stone:#a3a5aa;--stoneD:#55575c;
  --acc:#d71718;--accL:#ff5c52;--accD:#b81318;--teal:#a3a5aa;--tealL:#c9cbcf;
  --hair:rgba(243,242,239,.14);--hairD:rgba(11,12,14,.15);
  --disp:'Manrope',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Manrope',system-ui,sans-serif;
  --sans:'Inter',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,'SFMono-Regular',monospace;
  --deco:'Manrope',system-ui,-apple-system,'Segoe UI',sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
  --sp1:#d71718;--sp2:#ff5c52;--sp3:#ff8a7a;--sp4:#f3f2ef;--sp5:#ff5c52;--sp6:#d71718;
}
@media (min-width:1800px){:root{--maxw:1560px}}''')
region('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:#0b0c0e}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
region('logocss', '''.brand{display:flex;align-items:center;height:56px;color:var(--bone)}
.brand svg{height:30px;width:auto;display:block;overflow:visible}
@media (max-width:420px){.brand svg{height:25px}}''')
region('seen', '<script>try{if(sessionStorage.getItem("bandwidth10-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>', html=True)
region('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <div class="mk lock">%s<span class="lab ptag">Wavelength-tunable VCSELs · since 2011</span></div>
  </div>
  <span class="lab pl">Berkeley · Taoyuan · Berlin</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''' % STACK, html=True)
region('brand', '<a href="#/" class="brand" id="brand" aria-label="Bandwidth10, home">%s</a>' % HORIZ, html=True)
NAV = [('technology', 'Technology'), ('products', 'Products'), ('applications', 'Applications'), ('team', 'Team'), ('papers', 'Papers')]
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
    <div><span class="lab">Headquarters</span><br>Berkeley, California</div>
    <div><span class="lab">Sales</span><br><a href="mailto:us.sales@bandwidth10.com">us.sales@bandwidth10.com</a></div>
  </div>
</div>''' % ('\n'.join('    <a class="nl ul" href="#/%s">%s</a>' % n for n in NAV), '\n'.join('    <li><a href="#/%s">%s</a></li>' % n for n in NAV)), html=True)
region('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Bandwidth10</span><div class="t" id="xtt"></div></div>''', html=True)
region('site', 'var SITE="Bandwidth10";\nvar PK="bandwidth10";')
region('content', part('content.js'))
region('views', part('views.js'))
region('field', part('field.js'))
region('story', part('story.js'))
# CSS: swap Isomet's own layer for Bandwidth10's
i = s.index('/* ===== Isomet:'); j = s.index('\n', i)
s = s[:i] + '/* ===== Bandwidth10: their logo is a red (#d71718) ellipse of wave crescents over a black/white BANDWIDTH and a red 10. Here: neutral ink, warm bone, their red as the accent (lifted to #ff5c52 on ink for legibility) =====' + s[j:]
rep('background:linear-gradient(90deg,var(--sp2),var(--accL) 60%,rgba(77,163,255,0))', 'background:linear-gradient(90deg,var(--acc),var(--accL) 60%,rgba(255,92,82,0))')
rep('@media (max-width:860px){.fieldbg{background:linear-gradient(#0c0b0b,#0c0b0b)}}', '@media (max-width:860px){.fieldbg{background:#0b0c0e}}')
rep('@media (max-width:860px){.fieldbg{background:#120e0b}}', '')
rep('.scene .xtl{fill:rgba(170,200,255,.045);stroke:none}', '')
rep('.scene .aw{fill:none;stroke:rgba(122,180,255,.62);stroke-width:1}\n.scene .awa{fill:none;stroke:rgba(122,180,255,.8);stroke-width:1.1;stroke-linejoin:round;stroke-linecap:round}\n', '')
rep('.scene .bm{fill:none;stroke:var(--accL);stroke-width:2.2;stroke-linejoin:round;stroke-linecap:round}\n.scene .bm0{fill:none;stroke:rgba(77,163,255,.55);stroke-width:1.6;stroke-linejoin:round;stroke-linecap:round}\n.scene .sma{fill:#c99a45;stroke:rgba(242,243,241,.5);stroke-width:.8}\n.scene .pad{fill:#d9a54a}\n', '')
rep('</style>\n</head>', part('layer.css') + '\n</style>\n</head>')
# loader: the whole lockup rises in as one unit (keyframes renamed)
rep('animation:isLock', 'animation:bwLock'); rep('@keyframes isLock', '@keyframes bwLock')
rep('#pre .mk.lock .plogo{width:clamp(220px,22vw,320px);height:auto;display:block;overflow:visible}', '#pre .mk.lock .plogo{width:clamp(240px,24vw,340px);height:auto;display:block;overflow:visible}')
rep('@media (max-width:560px){#pre .mk.lock .plogo{width:220px}', '@media (max-width:560px){#pre .mk.lock .plogo{width:236px}')
if 'isomet' in s.lower().replace('isomet.src', ''):
    for m in re.finditer(r'(?i)isomet', s):
        print('leftover:', s[max(0, m.start()-60):m.end()+40].replace('\n', ' '))
open(os.path.join(K, 'bandwidth10.src.html'), 'w', encoding='utf-8').write(s)
print('ok', len(s))
