#!/usr/bin/env python3
"""Kaminari Medical home-only concept: assembled from the sutramedical home build (plumbing: loader, router, build-out, gates fixes),
with Kaminari Medical's own content, palette, hero field (a crafted render of their imaging catheter tip on real alpha) and
an artery cross-section story scene.
Run: python3 _kit/src/kaminarimedical.assemble.py && node _kit/build.js _kit/src/kaminarimedical.src.html kaminarimedical/index.html"""
import re, os
K = os.path.dirname(os.path.abspath(__file__))
s = open(os.path.join(K, 'sutramedical.src.html')).read()

def region(name, new, html=False):
    global s
    a, b = ('<!--<R:%s>-->' % name, '<!--</R:%s>-->' % name) if html else ('/*<R:%s>*/' % name, '/*</R:%s>*/' % name)
    i = s.find(a); j = s.find(b)
    assert i >= 0 and j > i, name
    s = s[:i] + a + new + s[j:]

def rep(old, new, count=1):
    global s
    n = s.count(old)
    assert n >= 1, ('missing', old[:80])
    if count == 1: assert n == 1, ('ambiguous', n, old[:80])
    s = s.replace(old, new)

# ---------------- meta ----------------
region('meta', '''<title>Kaminari Medical — intravascular photoacoustic and ultrasound imaging</title>
<meta name="description" content="Kaminari Medical B.V., a 2020 spin-off of Erasmus MC in Rotterdam, is developing an intravascular imaging catheter that combines ultrasound and photoacoustics to show the structure and composition of coronary plaque.">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#111230">
<link rel="icon" href="fav.png">''', html=True)

region('fonts', "/*@fonts Raleway:400,500,600; Open Sans:400,500,600; IBM Plex Mono:400,500*/")

region('root', ''':root{
  --ink:#111230;--inkr:17,18,48;--boner:244,242,238;--accr:238,90,80;--ink2:#171940;--ink3:#1d1e46;--deep:#0b0c22;
  --bone:#f4f2ee;--bone2:#e8e5df;--bone3:#d9d5cd;
  --stone:#a9a8b8;--stoneD:#55566a;
  --acc:#ab0b16;--accL:#ee5a50;--accD:#ab0b16;--rd:#ab0b16;--rdL:#f6dcd8;--gy:#a9a8b8;
  --cu:#ee5a50;--flame:#ee5a50;--flameL:#f6dcd8;--star:#ee5a50;
  --hair:rgba(244,242,238,.14);--hairD:rgba(17,18,48,.15);
  --disp:'Raleway','Open Sans',system-ui,sans-serif;
  --serif:'Raleway','Open Sans',system-ui,sans-serif;
  --sans:'Open Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,monospace;
  --deco:'Open Sans',system-ui,sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1560px}}''')

region('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:#111230}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')

rep('@media (max-width:860px){.fieldbg{background:#04223a}}', '@media (max-width:860px){.fieldbg{background:#111230}}')

region('seen', '<script>try{if(sessionStorage.getItem("kaminarimedical-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>', html=True)

region('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <img class="plogo" src="logo.svg" alt="" width="881" height="284">
    <div class="pdesc">Intravascular imaging</div>
  </div>
  <span class="lab pl">Seeing plaque in a new light<span class="nomob"> · Rotterdam, the Netherlands</span></span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''', html=True)

region('brand', '<a href="#/" class="brand" id="brand" aria-label="Kaminari Medical, home"><img class="lgo" src="logo-w.svg" alt="Kaminari Medical" width="881" height="284"></a>', html=True)

NAV = [('technology', 'Technology'), ('development', 'Development'), ('team', 'Team'), ('news', 'News')]
region('navmenu', '''<nav class="nav" aria-label="Primary">
''' + ''.join('    <a class="nl ul" href="#/%s">%s</a>\n' % n for n in NAV) + '''    <a class="btn" href="#/contact">Contact <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
''' + ''.join('    <li><a href="#/%s">%s</a></li>\n' % n for n in NAV) + '''    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Office</span><br>Erasmus MC, Rotterdam, the Netherlands</div>
    <div><span class="lab">Write to us</span><br><a href="mailto:info@kaminarimedical.com">info@kaminarimedical.com</a></div>
  </div>
</div>''', html=True)

region('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Kaminari Medical</span><div class="t" id="xtt"></div></div>''', html=True)

region('site', '''var SITE="Kaminari Medical";
var PK="kaminarimedical";
var FONTS=['400 1em "Raleway"','500 1em "Raleway"','600 1em "Raleway"','400 1em "Open Sans"','600 1em "Open Sans"','500 1em "IBM Plex Mono"'];
var MAIL="mailto:info@kaminarimedical.com";''')

# ---------------- content ----------------
region('content', open(os.path.join(K, 'kaminarimedical.content.js')).read())
region('views', open(os.path.join(K, 'kaminarimedical.views.js')).read())
region('field', open(os.path.join(K, 'kaminarimedical.field.js')).read())
region('story', open(os.path.join(K, 'kaminarimedical.story.js')).read())

# ---------------- site CSS: appended after the base's tail rules, so it wins ----------------
rep('</style>\n</head>', open(os.path.join(K, 'kaminarimedical.extra.css')).read() + '\n</style>\n</head>')

# product photographs: their own scroll fade (the global reveal misses media inside flex plates)
rep('if(k==="home")homeScroll(view);', 'if(k==="home")homeScroll(view);if(k==="home"&&!RM)$$(".kmd-fig",view).forEach(function(el){gsap.fromTo(el,{opacity:0,y:30},{opacity:1,y:0,duration:1.1,ease:"silk",scrollTrigger:{trigger:el,start:"top 90%",once:true}})});')

# nssfix as-is (already inline in the base, before </body>): verify it is there
assert 'R:nssfix' in s
s = s.replace('sutraRise', 'kmdRise')
s = re.sub(r'/\*[^*]*(Sutra|Hemi-Valve|mitral)[^*]*\*/', '', s)
left = [m.start() for m in re.finditer(r'[Ss]utra|Hemi|mitral', s)]
for i in left: print('LEFT:', s[max(0, i - 60):i + 60].replace('\n', ' '))
open(os.path.join(K, 'kaminarimedical.src.html'), 'w').write(s)
print('ok', len(s))
