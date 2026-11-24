#!/usr/bin/env python3
"""RoentDek home-only concept: assembled from the sutramedical home build (plumbing: loader, router, build-out, gates fixes),
with RoentDek's own content, palette, hero field (their DLD40 photograph on real alpha) and a delay-line story scene.
Run: python3 _kit/src/roentdek.assemble.py && node _kit/build.js _kit/src/roentdek.src.html roentdek/index.html"""
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
region('meta', '''<title>RoentDek — delay-line, MCP and TOF detectors</title>
<meta name="description" content="RoentDek Handels GmbH, Kelkheim (Taunus), Germany, builds time- and position-sensitive delay-line detectors, COLTRIMS momentum spectroscopy systems, readout electronics and the CoboldPC software.">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#121214">
<link rel="icon" href="fav.png">''', html=True)

region('fonts', "/*@fonts Inter Tight:300,400,500; Inter:400,500,600; IBM Plex Mono:400,500*/")

region('root', ''':root{
  --ink:#121214;--inkr:18,18,20;--boner:243,241,237;--accr:240,87,74;--ink2:#17181b;--ink3:#202125;--deep:#0b0b0c;
  --bone:#f3f1ed;--bone2:#e7e4de;--bone3:#d8d4cc;
  --stone:#a7a39c;--stoneD:#5c5852;
  --acc:#da2b2a;--accL:#f0574a;--accD:#b3191a;--rd:#b3191a;--rdL:#f6dcd8;--gy:#a7a39c;
  --cu:#cf9068;--flame:#cf9068;--flameL:#f2e2d6;--star:#cf9068;
  --hair:rgba(243,241,237,.14);--hairD:rgba(18,18,20,.15);
  --disp:'Inter Tight','Inter',system-ui,sans-serif;
  --serif:'Inter Tight','Inter',system-ui,sans-serif;
  --sans:'Inter',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,monospace;
  --deco:'Inter',system-ui,sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1560px}}''')

region('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:#121214}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')

rep('@media (max-width:860px){.fieldbg{background:#04223a}}', '@media (max-width:860px){.fieldbg{background:#121214}}')

region('seen', '<script>try{if(sessionStorage.getItem("roentdek-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>', html=True)

region('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <div class="mk"><img class="plogo" src="mark.png" alt="" width="329" height="334"></div>
    <div class="pwrap"><div class="wm"><span><img class="pwm" src="wordmark-ink.png" alt="" width="1200" height="146"></span></div><div class="pdesc">The detector factory</div></div>
  </div>
  <span class="lab pl">Delay-line detectors<span class="nomob"> · Kelkheim (Taunus), Germany</span></span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''', html=True)

region('brand', '<a href="#/" class="brand" id="brand" aria-label="RoentDek, home"><img class="lgo" src="mark.png" alt="" width="329" height="334"><img class="bwi" src="wordmark.png" alt="RoentDek" width="1600" height="195"></a>', html=True)

NAV = [('detectors', 'Detectors'), ('spectroscopy', 'Spectroscopy'), ('electronics', 'Electronics'), ('company', 'Company')]
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
    <div><span class="lab">Office</span><br>Kelkheim (Taunus), Germany</div>
    <div><span class="lab">Write to us</span><br><a href="mailto:info@roentdek.com">info@roentdek.com</a></div>
  </div>
</div>''', html=True)

region('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">RoentDek</span><div class="t" id="xtt"></div></div>''', html=True)

region('site', '''var SITE="RoentDek";
var PK="roentdek";
var FONTS=['300 1em "Inter Tight"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "Inter"','500 1em "Inter"','500 1em "IBM Plex Mono"'];
var MAIL="mailto:info@roentdek.com";''')

# ---------------- content ----------------
region('content', open(os.path.join(K, 'roentdek.content.js')).read())
region('views', open(os.path.join(K, 'roentdek.views.js')).read())
region('field', open(os.path.join(K, 'roentdek.field.js')).read())
region('story', open(os.path.join(K, 'roentdek.story.js')).read())

# ---------------- site CSS: appended after the base's tail rules, so it wins ----------------
rep('</style>\n</head>', open(os.path.join(K, 'roentdek.extra.css')).read() + '\n</style>\n</head>')

# nssfix as-is (already inline in the base, before </body>): verify it is there
assert 'R:nssfix' in s
s = s.replace('sutraRise', 'rdkRise')
s = re.sub(r'/\*[^*]*(Sutra|Hemi-Valve|mitral)[^*]*\*/', '', s)
left = [m.start() for m in re.finditer(r'[Ss]utra|Hemi|mitral', s)]
for i in left: print('LEFT:', s[max(0, i - 60):i + 60].replace('\n', ' '))
open(os.path.join(K, 'roentdek.src.html'), 'w').write(s)
print('ok', len(s))
