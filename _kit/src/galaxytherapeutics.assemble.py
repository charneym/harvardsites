#!/usr/bin/env python3
"""Assemble galaxytherapeutics.src.html from the gerdcare home-only engine (shared plumbing: loader shell, transitions,
build-out, footer fit, gates) with Galaxy Therapeutics' own content, palette, hero render, story scene and logo.
Run from _kit/src:  python3 galaxytherapeutics.assemble.py && node ../build.js galaxytherapeutics.src.html ../../galaxytherapeutics/index.html"""
import re, os
H = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(H, 'galaxytherapeutics-parts')
s = open(os.path.join(H, 'gerdcare.src.html'), encoding='utf8').read()
rd = lambda n: open(os.path.join(P, n), encoding='utf8').read()

def region(s, name, new, html=False):
    a, b = ('<!--<R:%s>-->' % name, '<!--</R:%s>-->' % name) if html else ('/*<R:%s>*/' % name, '/*</R:%s>*/' % name)
    i = s.index(a); j = s.index(b, i) + len(b)
    return s[:i] + new + s[j:]

def sub(s, a, b, count=1):
    assert a in s, a[:80]
    return s.replace(a, b, count)

# ---- palette + type (global maps: the engine's red/navy tokens become Galaxy's purple/gold/aubergine) ----
CMAP = {'#0f1626': '#170d1c', '15,22,38': '23,13,28', '245,246,249': '246,243,247', '226,84,90': '240,180,60',
        '#131c2f': '#1d1224', '#1b2640': '#26182e', '#0b111e': '#100914', '#f5f6f9': '#f6f3f7', '#e9ecf3': '#ece6ef',
        '#f0f2f7': '#f1edf3', '#a9b2c6': '#b4a9bb', '#4f5a72': '#5a4a62', '#bc2e34': '#6a3473', '#e2545a': '#f0b43c',
        '#a3262c': '#582c5f', '#f5d6d7': '#efe2f1', '#ef6a6f': '#f0b43c', '#ec5d63': '#f0b43c', '#ef8a8e': '#f0b43c',
        '#1c1b2a': '#170d1c', '#120e0b': '#170d1c'}
for a, b in CMAP.items():
    s = s.replace(a, b)
s = s.replace('Spectral', 'Jost')
s = sub(s, 'Inter:400,500,600*/', 'Inter:400,500,600; Krona One:400*/')

import math
def rosette(cx, cy, n=14, r=26.5):
    out = ''
    for k, cls in ((0, 'rp'), (0.5, 'rg')):
        for q in range(n):
            a = 2 * math.pi * (q + k) / n
            out += '<circle class="ro %s" cx="%.2f" cy="%.2f" r="%s"/>' % (cls, cx + r * math.cos(a), cy + r * math.sin(a), r)
    return out
def logo(cls, label=True):
    return ('<svg class="%s" viewBox="0 0 482 120" role="img" aria-label="Galaxy Therapeutics">' % cls +
            rosette(60, 60) + '<circle class="hd" cx="60" cy="60" r="17"/>'
            '<text class="gt" x="60" y="67.5" text-anchor="middle" style="font-family:\'Krona One\',sans-serif;font-size:19px;letter-spacing:-.06em">GT</text>'
            '<text class="gx" x="134" y="70" textLength="338" lengthAdjust="spacing" style="font-family:\'Krona One\',sans-serif;font-size:62px">GALAXY</text>'
            '<text class="th" x="136" y="99" textLength="335" lengthAdjust="spacing" style="font-family:\'Krona One\',sans-serif;font-size:15px">THERAPEUTICS</text></svg>')

s = region(s, 'meta', '<!--<R:meta>--><title>Galaxy Therapeutics — SEAL™ for brain aneurysms</title>\n'
    '<meta name="description" content="Galaxy Therapeutics, Milpitas, California, makes SEAL™, a dual-layer intrasaccular flow diverter for brain aneurysms from 2 to 19 mm, CE marked under the EU MDR and investigational in the United States.">\n'
    '<meta name="robots" content="noindex,nofollow">\n<meta name="theme-color" content="#170d1c">\n<link rel="icon" href="fav.png"><!--</R:meta>-->', html=True)
s = region(s, 'seen', '<!--<R:seen>--><script>try{if(sessionStorage.getItem("gxt-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script><!--</R:seen>-->', html=True)
s = region(s, 'pre', '<!--<R:pre>--><div id="pre" aria-hidden="true">\n  <div class="pc">\n    <div class="lk-u"><div class="mk">' + logo('plogo') +
    '</div></div>\n    <div class="wm" hidden><span></span></div>\n  </div>\n'
    '  <span class="lab pl">Intrasaccular flow diversion<span class="nomob"> · Milpitas, California</span></span>\n'
    '  <div class="bar"><i id="preBar"></i></div>\n  <span class="cnt" id="preCnt">000</span>\n</div><!--</R:pre>-->', html=True)
s = region(s, 'brand', '<!--<R:brand>--><a href="#/" class="brand" id="brand" aria-label="Galaxy Therapeutics, home">' + logo('lgo') + '</a><!--</R:brand>-->', html=True)
ARRS = '<svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>'
s = region(s, 'navmenu', '''<!--<R:navmenu>--><nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/technology">Technology</a>
    <a class="nl ul" href="#/clinical">Clinical</a>
    <a class="nl ul" href="#/team">Team</a>
    <a class="nl ul" href="#/news">News</a>
    <a class="btn" href="#/contact">Contact ''' + ARRS + '''</a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
    <li><a href="#/technology">Technology</a></li>
    <li><a href="#/clinical">Clinical</a></li>
    <li><a href="#/team">Team</a></li>
    <li><a href="#/news">News</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Based in</span><br>Milpitas, California</div>
    <div><span class="lab">Write to us</span><br><a href="mailto:Contact@gtseal.com">Contact@gtseal.com</a></div>
  </div>
</div><!--</R:navmenu>-->''', html=True)
s = s.replace('<span class="lab" id="xlab">GerdCare</span>', '<span class="lab" id="xlab">Galaxy</span>')

# ---- content, views, story ----
c = rd('content.js')
s = region(s, 'site', c[c.index('/*<R:site>*/'):c.index('/*</R:site>*/') + len('/*</R:site>*/')])
s = region(s, 'content', c[c.index('/*<R:content>*/'):c.index('/*</R:content>*/') + len('/*</R:content>*/')])
v = rd('views.js')
i = s.index('/*<R:views>*/'); j = s.index('function secEl(', i)
s = s[:i] + v + s[j:]
s = region(s, 'story', rd('story.js').strip())

# ---- hero field: the SEAL implant render (true alpha, page-ink ground) ----
s = sub(s, 'var BG="#170d1c",IW=986,IH=628;', 'var BG="#170d1c",IW=835,IH=1028;')
s = sub(s, 'var s=Math.min(1,(w*.74)/IW,(h*.26)/IH,Math.max(100,h*.33-Math.max(88,h*.11)-16)/IH),dw=IW*s,dh=IH*s,cy=Math.max(88,h*.11)+dh/2+6;',
           'var s=Math.min(1,(w*.7)/IW,(h*.32)/IH),dw=IW*s,dh=IH*s,cy=Math.max(84,h*.1)+dh/2+4;')
s = sub(s, 'var s=Math.min(1,cw*.4/IW,h*.58/IH),dw=IW*s,dh=IH*s,cx=side+cw*.71,cy=Math.max(h*.54,96+dh/2+40);',
           'var s=Math.min(1,cw*.38/IW,h*.68/IH),dw=IW*s,dh=IH*s,cx=side+cw*.72,cy=Math.max(h*.54,100+dh/2+24);')
s = sub(s, '[[0,.2],[.2,.15],[.4,.09],[.6,.045],[.8,.015],[1,0]].forEach(function(q){gl.addColorStop(q[0],"rgba(138,161,199,"+(q[1]*e)+")")});',
           '[[0,.22],[.2,.16],[.4,.09],[.6,.045],[.8,.015],[1,0]].forEach(function(q){gl.addColorStop(q[0],"rgba(106,52,115,"+(q[1]*e)+")")});')
# ---- loader: the whole lockup moves as one unit (WAVE_BRIEF LOADER), no SplitText chars, no dash draw on the logo ----
s = sub(s, 'var wm=SplitText.create("#pre .wm span",{type:"chars",charsClass:"c"});gsap.set(wm.chars,{yPercent:190,opacity:0});$("#pre .pc").style.visibility="visible";\n  var mk=$("#pre .mk path"),L=330;gsap.set(mk,{strokeDasharray:L,strokeDashoffset:L});',
           'var lk=$("#pre .lk-u");gsap.set(lk,{opacity:0,y:14});$("#pre .pc").style.visibility="visible";')
s = sub(s, 'gsap.timeline().to(mk,{strokeDashoffset:0,duration:1,ease:"flow"},0)\n      .to(wm.chars,{yPercent:0,opacity:1,duration:.75,ease:"silk",stagger:.03},.15)',
           'gsap.timeline().to(lk,{opacity:1,y:0,duration:.7,ease:"silk"},.1)')
s = sub(s, '.to(wm.chars,{yPercent:-120,opacity:0,duration:.38,ease:"power3.in",stagger:.012},.08)\n        .to(["#pre .mk","#pre .cnt","#pre .bar","#pre .pl"],{opacity:0,duration:.3,ease:"power2.in"},.12)',
           '.to(lk,{opacity:0,y:-10,duration:.36,ease:"power2.in"},.08)\n        .to(["#pre .cnt","#pre .bar","#pre .pl"],{opacity:0,duration:.3,ease:"power2.in"},.12)')

# ---- styles: drop the GerdCare logo/loader CSS hooks, append Galaxy's ----
s = sub(s, '</style>\n</head>', '\n' + rd('site.css') + '</style>\n</head>')
s = s.replace('/* GerdCare scene parts */', '/* engine scene parts */')
# nssfix: exactly _kit/lib/nssfix.js
nf = open(os.path.join(H, '..', 'lib', 'nssfix.js'), encoding='utf8').read().strip()
i = s.index('<script>/*R:nssfix*/'); j = s.index('</script>', i) + len('</script>')
s = s[:i] + nf + s[j:]
i = s.index('/*<R:field>*/') + len('/*<R:field>*/'); j = s.index('*/', i) + 2
s = s[:i] + ('/* ================= HERO FIELD: a crafted render of Galaxy\'s own device (HOME_BRIEF option c): the SEAL implant, '
  'a dual-layer braided nitinol and platinum lattice whose wires converge at one proximal hub (after the SEAL ARC artwork on '
  'galaxytherapeutics.com), with a short length of the delivery pusher. Rendered once with three.js (galaxytherapeutics.render.html) '
  'to an 835x1028 image with real alpha, shown at or below native size, whole and centred in the open area right of the headline '
  '(~72% of the content width), fully below the nav (DO/DP/DQ). Ground is the page ink, so no panel edge exists (DJ); a faint '
  'purple glow eases out behind the device only. Motion: a slow float and breath-like scale; no pointer parallax (CZ). ================= */') + s[j:]
s = s.replace('GerdCare', 'engine').replace('gerd-care.com', 'the source site')
s = re.sub(r'/\* ===== engine Medical:.*?\*/', '/* engine tokens (Galaxy palette appended at the end of this sheet) */', s, flags=re.S)
assert 'GerdCare' not in s and 'Gerd' not in s, [m.start() for m in re.finditer('GerdCare', s)][:5]
open(os.path.join(H, 'galaxytherapeutics.src.html'), 'w', encoding='utf8').write(s)
print('ok', len(s))
