# Assemble _kit/src/ndhmedical.src.html from the isomet home-only build (shared plumbing only: loader, router, build-out,
# reveal, gates) with NDH Medical's own content, palette, logo, hero render and story.
# Run: python3 _kit/home/ndhmedical/assemble.py && node _kit/build.js _kit/src/ndhmedical.src.html ndhmedical/index.html
import re, os
P = os.path.dirname(os.path.abspath(__file__))
K = os.path.join(P, '..', '..', 'src')
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

# logo (redrawn from ndhmedical.com/assets/images/NDHlogo.jpg and the sign on their building): heavy block letters N D H filled
# with a deep-green-to-lime gradient and cut by horizontal stripes, "MEDICAL" in wide grey serif capitals, and the green italic
# tagline "Working Together For Life". Letters are filled paths; the words are set in Cinzel / Libre Baskerville (embedded).
NDH = ('M0 0H27L55 54V0H80V100H53L25 46V100H0Z '
       'M90 0H128C158 0 172 20 172 50C172 80 158 100 128 100H90Z M116 22V78H125C140 78 146 67 146 50C146 33 140 22 125 22Z '
       'M182 0H208V38H234V0H260V100H234V61H208V100H182Z')
def mark(uid, stripes=True):
    st = ''.join('<rect x="0" y="%.2f" width="260" height="%.2f"/>' % (i * 100 / 9, 100 / 9 - 2.4) for i in range(9)) if stripes else '<rect width="260" height="100"/>'
    return ('<defs><linearGradient id="g%s" x1="0" x2="260" y1="0" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00763a"/>'
            '<stop offset=".42" stop-color="#1f8f4c"/><stop offset=".7" stop-color="#6fb043"/><stop offset="1" stop-color="#b4d544"/></linearGradient>'
            '<clipPath id="c%s">%s</clipPath></defs><path fill="url(#g%s)" fill-rule="evenodd" clip-path="url(#c%s)" d="%s"/>') % (uid, uid, st, uid, uid, NDH)
MEDTXT = '<text x="130" y="%s" text-anchor="middle" textLength="256" lengthAdjust="spacing" style="font-family:\'Cinzel\',Georgia,serif;font-weight:500;font-size:%spx" fill="%s">MEDICAL</text>'
STACK = ('<svg class="plogo" viewBox="-4 -4 268 190" role="img" aria-label="NDH Medical">%s%s'
         '<text x="130" y="178" text-anchor="middle" style="font-family:\'Libre Baskerville\',Georgia,serif;font-style:italic;font-size:17.5px" fill="#5fbf86">Working Together For Life</text></svg>') % (mark('p'), MEDTXT % (138, 36, '#c3c6c1'))
HORIZ = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 264 150" aria-hidden="true">%s%s</svg>') % (mark('h', False), MEDTXT % (143, 40, '#c3c6c1'))
region('meta', '''<title>NDH Medical — custom medical tubing extrusion and contract manufacturing, St. Petersburg, Florida</title>
<meta name="description" content="NDH Medical, Inc. is an ISO 13485:2016 certified contract medical device manufacturer in St. Petersburg, Florida: custom single-lumen, multi-lumen, coextruded, taper and braid-reinforced tubing, insert and injection molding, assembly and packaging.">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#07120c">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%2307120c'/%3E%3Cpath fill='%23b4d544' d='M10 14h11l12 22V14h11v36H33L21 28v22H10Z'/%3E%3C/svg%3E">''', html=True)
region('fonts', '/*@fonts Archivo:300,400,500; Inter:400,500; IBM Plex Mono:400,500; Cinzel:500; Libre Baskerville:400i*/')
region('root', ''':root{
  --ink:#07120c;--inkr:7,18,12;--boner:242,243,238;--accr:180,213,68;--ink2:#0b1a11;--ink3:#112418;--deep:#040a06;
  --bone:#f2f3ee;--bone2:#e7e9e1;--bone3:#d7dbd0;
  --stone:#9fa79f;--stoneD:#4f5850;
  --acc:#00763a;--accL:#b4d544;--accD:#00682f;--teal:#9fa79f;--tealL:#c6ccc4;
  --hair:rgba(242,243,238,.14);--hairD:rgba(7,18,12,.15);
  --disp:'Archivo',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Archivo',system-ui,sans-serif;
  --sans:'Inter',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,'SFMono-Regular',monospace;
  --deco:'Archivo',system-ui,-apple-system,'Segoe UI',sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
  --sp1:#00763a;--sp2:#b4d544;--sp3:#6fb043;--sp4:#f2f3ee;--sp5:#b4d544;--sp6:#00763a;
}
@media (min-width:1800px){:root{--maxw:1560px}}''')
region('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:#07120c}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
region('logocss', '''.brand{display:flex;align-items:center;height:56px;color:var(--bone)}
.brand svg{height:40px;width:auto;display:block;overflow:visible}
@media (max-width:420px){.brand svg{height:34px}}''')
region('seen', '<script>try{if(sessionStorage.getItem("ndhmedical-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>', html=True)
region('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <div class="mk lock">%s<span class="lab ptag">Custom extrusion · contract manufacturing</span></div>
  </div>
  <span class="lab pl">St. Petersburg, Florida</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''' % STACK, html=True)
region('brand', '<a href="#/" class="brand" id="brand" aria-label="NDH Medical, home">%s</a>' % HORIZ, html=True)
NAV = [('capabilities', 'Capabilities'), ('process', 'Process'), ('materials', 'Materials'), ('quality', 'Quality'), ('shows', 'Trade shows')]
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
    <div><span class="lab">Headquarters</span><br>St. Petersburg, Florida</div>
    <div><span class="lab">Email</span><br><a href="mailto:info@ndhmedical.com">info@ndhmedical.com</a></div>
  </div>
</div>''' % ('\n'.join('    <a class="nl ul" href="#/%s">%s</a>' % n for n in NAV), '\n'.join('    <li><a href="#/%s">%s</a></li>' % n for n in NAV)), html=True)
region('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">NDH Medical</span><div class="t" id="xtt"></div></div>''', html=True)
region('site', 'var SITE="NDH Medical";\nvar PK="ndhmedical";')
region('content', part('content.js'))
region('views', part('views.js'))
region('field', part('field.js'))
region('story', part('story.js'))
# CSS: swap Isomet's own layer for NDH Medical's
i = s.index('/* ===== Isomet:'); j = s.index('\n', i)
s = s[:i] + '/* ===== NDH Medical: their logo is a striped N D H running from deep green (#00763a) to lime (#b4d544), grey MEDICAL and a green italic tagline. Here: deep green-black ink, warm bone, lime as the accent on ink and the deep green on bone =====' + s[j:]
rep('background:linear-gradient(90deg,var(--sp2),var(--accL) 60%,rgba(77,163,255,0))', 'background:linear-gradient(90deg,var(--acc),var(--accL) 60%,rgba(180,213,68,0))')
rep('@media (max-width:860px){.fieldbg{background:linear-gradient(#0c0b0b,#0c0b0b)}}', '@media (max-width:860px){.fieldbg{background:#07120c}}')
rep('@media (max-width:860px){.fieldbg{background:#120e0b}}', '')
rep('.scene .xtl{fill:rgba(170,200,255,.045);stroke:none}', '')
rep('.scene .aw{fill:none;stroke:rgba(122,180,255,.62);stroke-width:1}\n.scene .awa{fill:none;stroke:rgba(122,180,255,.8);stroke-width:1.1;stroke-linejoin:round;stroke-linecap:round}\n', '')
rep('.scene .bm{fill:none;stroke:var(--accL);stroke-width:2.2;stroke-linejoin:round;stroke-linecap:round}\n.scene .bm0{fill:none;stroke:rgba(77,163,255,.55);stroke-width:1.6;stroke-linejoin:round;stroke-linecap:round}\n.scene .sma{fill:#c99a45;stroke:rgba(242,243,241,.5);stroke-width:.8}\n.scene .pad{fill:#d9a54a}\n', '')
rep('</style>\n</head>', part('layer.css') + '\n</style>\n</head>')
# loader: the whole lockup rises in as one unit (keyframes renamed)
rep('animation:isLock', 'animation:ndLock'); rep('@keyframes isLock', '@keyframes ndLock')
rep('#pre .mk.lock .plogo{width:clamp(220px,22vw,320px);height:auto;display:block;overflow:visible}', '#pre .mk.lock .plogo{width:clamp(220px,19vw,300px);height:auto;display:block;overflow:visible}')
rep('@media (max-width:560px){#pre .mk.lock .plogo{width:220px}', '@media (max-width:560px){#pre .mk.lock .plogo{width:210px}')
if 'isomet' in s.lower().replace('isomet.src', ''):
    for m in re.finditer(r'(?i)isomet', s):
        print('leftover:', s[max(0, m.start()-60):m.end()+40].replace('\n', ' '))
# nssfix (PRINCIPLES DR4): the shared module, as-is
ns = open(os.path.join(K, '..', 'lib', 'nssfix.js'), encoding='utf-8').read().strip()
i = s.index('<script>/*R:nssfix*/'); j = s.index('</script>', i) + len('</script>')
s = s[:i] + ns + s[j:]
for bad in ('bandwidth', 'Bandwidth', 'VCSEL', 'd71718', 'ff5c52'):
    if bad in s: print('leftover', bad, s.count(bad))
open(os.path.join(K, 'ndhmedical.src.html'), 'w', encoding='utf-8').write(s)
print('ok', len(s))
