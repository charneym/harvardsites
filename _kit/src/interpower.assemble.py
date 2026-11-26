# Assemble _kit/src/interpower.src.html from the bandwidth10 home-only build (shared plumbing only: loader, router, build-out,
# reveal, gates) with Interpower's own content, palette, logo, hero render and story.
# Run: python3 interpower.assemble.py   (parts in interpower-parts/)
import re, os
K = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(K, 'interpower-parts')
s = open(os.path.join(K, 'bandwidth10.src.html'), encoding='utf-8').read()
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

# the logo: interpower.com/ic/images/IC-black_noCorp.png traced to filled paths (interpower-parts/trace.py -> mark.d);
# the globe-topped "i" and the serif "interpower" wordmark, the ® marks dropped
MARK = part('mark.d').strip()
subs = re.findall(r'M[^Z]*Z', MARK)
def bbox(p):
    n = list(map(float, re.findall(r'-?[\d.]+', p))); return min(n[0::2]), min(n[1::2]), max(n[0::2]), max(n[1::2])
WORD = ''.join(p for p in subs if bbox(p)[0] > 74)
wb = [bbox(p) for p in subs if bbox(p)[0] > 74]
wx0, wy0, wx1, wy1 = min(b[0] for b in wb), min(b[1] for b in wb), max(b[2] for b in wb), max(b[3] for b in wb)
LOGO_VB = '0 -1 325 131'
STACK = '<svg class="plogo" viewBox="%s" role="img" aria-label="Interpower"><path fill="#f2f4f6" fill-rule="evenodd" d="%s"/></svg>' % (LOGO_VB, MARK)
HORIZ = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="%s" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="%s"/></svg>' % (LOGO_VB, MARK)
FOOT = '<svg class="bigsvg" viewBox="%.1f %.1f %.1f %.1f" aria-hidden="true"><path fill-rule="evenodd" d="%s"/></svg>' % (wx0 - 1, wy0 - 1, wx1 - wx0 + 2, wy1 - wy0 + 2, WORD)

region('meta', '''<title>Interpower — power cords, cord sets and components made in Iowa</title>
<meta name="description" content="Interpower makes North American and international power cords, cord sets, cable, IEC 60320 connectors and hospital-grade products in Oskaloosa and Lamoni, Iowa, with no minimum order requirements and same day shipments on stock items.">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#071a30">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23003366'/%3E%3Ccircle cx='16' cy='16' r='9' fill='none' stroke='%23fff' stroke-width='2.4'/%3E%3Cpath d='M7 16h18M16 7v18' stroke='%23fff' stroke-width='2.4'/%3E%3C/svg%3E">''', html=True)
region('fonts', '/*@fonts Archivo:300,400,500; Inter:400,500; IBM Plex Mono:400,500; Source Serif 4:400i*/')
region('root', ''':root{
  --ink:#071a30;--inkr:7,26,48;--boner:242,244,246;--accr:127,178,234;--ink2:#0a2039;--ink3:#0d2744;--deep:#041120;
  --bone:#f2f4f6;--bone2:#e6eaef;--bone3:#d5dce4;
  --stone:#9aa6b4;--stoneD:#4f5c6b;
  --navy:#003366;--acc:#1d5aa3;--accL:#7fb2ea;--accD:#003366;--teal:#9aa6b4;--tealL:#c4ccd6;
  --hair:rgba(242,244,246,.14);--hairD:rgba(7,26,48,.15);
  --disp:'Archivo',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Source Serif 4',Georgia,serif;
  --sans:'Inter',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,'SFMono-Regular',monospace;
  --deco:'Archivo',system-ui,-apple-system,'Segoe UI',sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
  --sp1:#003366;--sp2:#7fb2ea;--sp3:#a9cbf1;--sp4:#f2f4f6;--sp5:#7fb2ea;--sp6:#1d5aa3;
}
@media (min-width:1800px){:root{--maxw:1560px}}''')
region('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:#071a30}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
region('logocss', '''.brand{display:flex;align-items:center;height:56px;color:var(--bone)}
.brand svg{height:50px;width:auto;display:block;overflow:visible}
@media (max-width:420px){.brand svg{height:40px}}''')
region('seen', '<script>try{if(sessionStorage.getItem("interpower-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>', html=True)
region('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <div class="mk lock">%s<span class="lab ptag">Power cords and components · since 1975</span></div>
  </div>
  <span class="lab pl">Oskaloosa · Lamoni · Ames · Milton Keynes</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''' % STACK, html=True)
region('brand', '<a href="#/" class="brand" id="brand" aria-label="Interpower, home">%s</a>' % HORIZ, html=True)
NAV = [('products', 'Products'), ('hospital-grade', 'Hospital-grade'), ('manufacturing', 'Manufacturing'), ('company', 'Company'), ('news', 'News')]
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
    <div><span class="lab">Headquarters</span><br>Oskaloosa, Iowa</div>
    <div><span class="lab">Customer Service</span><br><a href="mailto:info@interpower.com">info@interpower.com</a></div>
  </div>
</div>''' % ('\n'.join('    <a class="nl ul" href="#/%s">%s</a>' % n for n in NAV), '\n'.join('    <li><a href="#/%s">%s</a></li>' % n for n in NAV)), html=True)
region('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Interpower</span><div class="t" id="xtt"></div></div>''', html=True)
region('site', 'var SITE="Interpower";\nvar PK="interpower";\nvar FOOTMARK=%r;' % FOOT)
region('content', part('content.js'))
region('views', part('views.js'))
region('field', part('field.js'))
region('story', part('story.js'))
# CSS: swap Bandwidth10's own layer for Interpower's
i = s.index('/* ===== Bandwidth10:'); j = s.index('\n', i)
s = s[:i] + '/* ===== Interpower: their logo is a globe-topped "i" with a serif "interpower" wordmark, white on their navy (#003366) header band. Here: deep navy ink, cool white, their navy and a lifted brand blue (#7fb2ea) as the accent on ink =====' + s[j:]
i = s.index('/* ===== Bandwidth10 site layer ===== */'); j = s.index('</style>\n</head>', i)
s = s[:i] + part('layer.css') + '\n' + s[j:]
rep('animation:bwLock', 'animation:ipLock'); rep('@keyframes bwLock', '@keyframes ipLock')
rep('#pre .mk.lock .plogo{width:clamp(240px,24vw,340px);height:auto;display:block;overflow:visible}', '#pre .mk.lock .plogo{width:clamp(250px,22vw,330px);height:auto;display:block;overflow:visible}')
rep('background:linear-gradient(90deg,var(--acc),var(--accL) 60%,rgba(255,92,82,0))', 'background:linear-gradient(90deg,var(--acc),var(--accL) 60%,rgba(127,178,234,0))')
s = s.replace('bandwidth10.src', 'interpower.src')
left = [m for m in re.finditer(r'(?i)bandwidth|d71718|ff5c52|215,23,24', s)]
for m in left:
    print('leftover:', s[max(0, m.start()-70):m.end()+40].replace('\n', ' '))
open(os.path.join(K, 'interpower.src.html'), 'w', encoding='utf-8').write(s)
print('ok', len(s))
