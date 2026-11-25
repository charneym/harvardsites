#!/usr/bin/env python3
"""Assemble clearguidemedical.src.html from the gerdcare home-only engine (shared plumbing: loader shell, transitions,
build-out, footer fit, gates) with Clear Guide Medical's own content, palette, hero render, story scene and logo.
Run from _kit/src:  python3 clearguidemedical.assemble.py && node ../build.js clearguidemedical.src.html ../../clearguidemedical/index.html"""
import re, os
H = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(H, 'clearguidemedical-parts')
s = open(os.path.join(H, 'gerdcare.src.html'), encoding='utf8').read()
rd = lambda n: open(os.path.join(P, n), encoding='utf8').read()

def region(s, name, new, html=False):
    a, b = ('<!--<R:%s>-->' % name, '<!--</R:%s>-->' % name) if html else ('/*<R:%s>*/' % name, '/*</R:%s>*/' % name)
    i = s.index(a); j = s.index(b, i) + len(b)
    return s[:i] + new + s[j:]

def sub(s, a, b, count=1):
    assert a in s, a[:80]
    return s.replace(a, b, count)

# ---- palette + type (global maps: the engine's red/navy tokens become Clear Guide's blue/ink) ----
CMAP = {'#0f1626': '#0c1320', '15,22,38': '12,19,32', '245,246,249': '242,244,248', '226,84,90': '143,171,232',
        '#131c2f': '#111a2b', '#1b2640': '#18233a', '#0b111e': '#080d17', '#f5f6f9': '#f2f4f8', '#e9ecf3': '#e6eaf2',
        '#f0f2f7': '#eef1f6', '#a9b2c6': '#a7b0c2', '#4f5a72': '#4c566b', '#bc2e34': '#4969ac', '#e2545a': '#8fabe8',
        '#a3262c': '#3d5c9e', '#f5d6d7': '#dbe4f6', '#ef6a6f': '#8fabe8', '#ec5d63': '#8fabe8', '#ef8a8e': '#8fabe8',
        '#1c1b2a': '#0c1320', '#120e0b': '#0c1320'}
for a, b in CMAP.items():
    s = s.replace(a, b)
s = s.replace('Spectral', 'Archivo')

LK = rd('logo_k.txt').strip(); LG = rd('logo_g.txt').strip()
def logo(cls, label=True):
    return ('<svg class="%s" viewBox="-2 -2 454 141" role="img" aria-label="Clear Guide Medical"><path class="k" fill-rule="evenodd" d="%s"/>'
            '<path class="g" fill-rule="evenodd" d="%s"/></svg>') % (cls, LK, LG)

s = region(s, 'meta', '<!--<R:meta>--><title>Clear Guide Medical — AR- and AI-guided procedures</title>\n'
    '<meta name="description" content="Clear Guide Medical, a Johns Hopkins spin-out in Baltimore, applies computer vision, AI and augmented reality to image-guided needle procedures: SCENERGY, SCENERGY TP and the investigational LUMENA.">\n'
    '<meta name="robots" content="noindex,nofollow">\n<meta name="theme-color" content="#0c1320">\n<link rel="icon" href="fav.png"><!--</R:meta>-->', html=True)
s = region(s, 'seen', '<!--<R:seen>--><script>try{if(sessionStorage.getItem("cgm-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script><!--</R:seen>-->', html=True)
s = region(s, 'pre', '<!--<R:pre>--><div id="pre" aria-hidden="true">\n  <div class="pc">\n    <div class="lk-u"><div class="mk">' + logo('plogo') +
    '</div></div>\n    <div class="wm" hidden><span></span></div>\n  </div>\n'
    '  <span class="lab pl">AR- and AI-guided procedures<span class="nomob"> · Baltimore, Maryland</span></span>\n'
    '  <div class="bar"><i id="preBar"></i></div>\n  <span class="cnt" id="preCnt">000</span>\n</div><!--</R:pre>-->', html=True)
s = region(s, 'brand', '<!--<R:brand>--><a href="#/" class="brand" id="brand" aria-label="Clear Guide Medical, home">' + logo('lgo') + '</a><!--</R:brand>-->', html=True)
ARRS = '<svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>'
s = region(s, 'navmenu', '''<!--<R:navmenu>--><nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/technology">Technology</a>
    <a class="nl ul" href="#/procedures">Procedures</a>
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
    <li><a href="#/procedures">Procedures</a></li>
    <li><a href="#/team">Team</a></li>
    <li><a href="#/news">News</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Based in</span><br>Baltimore, Maryland</div>
    <div><span class="lab">Write to us</span><br><a href="mailto:sales@clearguidemedical.com">sales@clearguidemedical.com</a></div>
  </div>
</div><!--</R:navmenu>-->''', html=True)
s = s.replace('<span class="lab" id="xlab">GerdCare</span>', '<span class="lab" id="xlab">Clear Guide</span>')

# ---- content, views, story ----
c = rd('content.js')
s = region(s, 'site', c[c.index('/*<R:site>*/'):c.index('/*</R:site>*/') + len('/*</R:site>*/')])
s = region(s, 'content', c[c.index('/*<R:content>*/'):c.index('/*</R:content>*/') + len('/*</R:content>*/')])
v = rd('views.js')
i = s.index('/*<R:views>*/'); j = s.index('function secEl(', i)
s = s[:i] + v + s[j:]
s = region(s, 'story', rd('story.js').strip())

# ---- hero field: the SCENERGY TP render (true alpha, page-ink ground), plus a slow AR ring pulse at the target hole ----
s = sub(s, 'var BG="#0c1320",IW=986,IH=628;', 'var BG="#0c1320",IW=963,IH=1553,RX=.5774,RY=.4643;')
s = sub(s, 'var s=Math.min(1,(w*.74)/IW,(h*.26)/IH,Math.max(100,h*.33-Math.max(88,h*.11)-16)/IH),dw=IW*s,dh=IH*s,cy=Math.max(88,h*.11)+dh/2+6;',
           'var s=Math.min(1,(w*.74)/IW,(h*.3)/IH),dw=IW*s,dh=IH*s,cy=Math.max(84,h*.1)+dh/2+4;')
s = sub(s, 'var s=Math.min(1,cw*.4/IW,h*.58/IH),dw=IW*s,dh=IH*s,cx=side+cw*.71,cy=Math.max(h*.54,96+dh/2+40);',
           'var s=Math.min(1,cw*.34/IW,h*.7/IH),dw=IW*s,dh=IH*s,cx=side+cw*.72,cy=Math.max(h*.54,100+dh/2+24);')
s = sub(s, '[[0,.2],[.2,.15],[.4,.09],[.6,.045],[.8,.015],[1,0]].forEach(function(q){gl.addColorStop(q[0],"rgba(138,161,199,"+(q[1]*e)+")")});',
           '[[0,.16],[.2,.12],[.4,.07],[.6,.035],[.8,.012],[1,0]].forEach(function(q){gl.addColorStop(q[0],"rgba(73,105,172,"+(q[1]*e)+")")});')
s = sub(s, 'c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;',
           'c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;'
           '/* the AR ring: a soft green pulse widening from the target hole every 3.6 s */'
           'if(!RM){var ph=(t%3.6)/3.6,rr=dw*(.03+.07*ph),px=x+dw*RX,py=y+dh*RY;c.save();c.strokeStyle="rgba(82,224,138,"+(.55*(1-ph)*(1-ph)*e).toFixed(3)+")";c.lineWidth=Math.max(1,dw*.004);c.beginPath();c.ellipse(px,py,rr,rr*.98,0,0,Math.PI*2);c.stroke();c.restore()}')

# ---- loader: the whole lockup moves as one unit (WAVE_BRIEF LOADER), no SplitText chars, no dash draw on the logo ----
s = sub(s, 'var wm=SplitText.create("#pre .wm span",{type:"chars",charsClass:"c"});gsap.set(wm.chars,{yPercent:190,opacity:0});$("#pre .pc").style.visibility="visible";\n  var mk=$("#pre .mk path"),L=330;gsap.set(mk,{strokeDasharray:L,strokeDashoffset:L});',
           'var lk=$("#pre .lk-u");gsap.set(lk,{opacity:0,y:14});$("#pre .pc").style.visibility="visible";')
s = sub(s, 'gsap.timeline().to(mk,{strokeDashoffset:0,duration:1,ease:"flow"},0)\n      .to(wm.chars,{yPercent:0,opacity:1,duration:.75,ease:"silk",stagger:.03},.15)',
           'gsap.timeline().to(lk,{opacity:1,y:0,duration:.7,ease:"silk"},.1)')
s = sub(s, '.to(wm.chars,{yPercent:-120,opacity:0,duration:.38,ease:"power3.in",stagger:.012},.08)\n        .to(["#pre .mk","#pre .cnt","#pre .bar","#pre .pl"],{opacity:0,duration:.3,ease:"power2.in"},.12)',
           '.to(lk,{opacity:0,y:-10,duration:.36,ease:"power2.in"},.08)\n        .to(["#pre .cnt","#pre .bar","#pre .pl"],{opacity:0,duration:.3,ease:"power2.in"},.12)')

# ---- styles: drop the GerdCare logo/loader CSS hooks, append Clear Guide's ----
s = sub(s, '</style>\n</head>', '\n' + rd('site.css') + '</style>\n</head>')
s = s.replace('/* GerdCare scene parts */', '/* engine scene parts */')
# nssfix: exactly _kit/lib/nssfix.js
nf = open(os.path.join(H, '..', 'lib', 'nssfix.js'), encoding='utf8').read().strip()
i = s.index('<script>/*R:nssfix*/'); j = s.index('</script>', i) + len('</script>')
s = s[:i] + nf + s[j:]
i = s.index('/*<R:field>*/') + len('/*<R:field>*/'); j = s.index('*/', i) + 2
s = s[:i] + ('/* ================= HERO FIELD: a crafted render of Clear Guide\'s own product (HOME_BRIEF option c): the SCENERGY TP '
  'transperineal grid template (lettered A–M / 1–13 hole grid, header tab, two optical fiducial markers and the knob, after the '
  'product render on clearguidemedical.com), with a biopsy needle and a second probe through the grid and the AR target ring in '
  'their overlay green. Rendered once with three.js (clearguidemedical.render.html) to a 963x1553 PNG with real alpha, shown at '
  'or below native size, whole and centred in the open area right of the headline (~72% of the content width), fully below the '
  'nav (DO/DP/DQ). Ground is the page ink, so no panel edge exists (DJ). Motion: a slow float and breath-like scale and a soft '
  'green pulse widening from the target hole; no pointer parallax (CZ). ================= */') + s[j:]
s = s.replace('GerdCare', 'engine').replace('gerd-care.com', 'the source site')
s = re.sub(r'/\* ===== engine Medical:.*?\*/', '/* engine tokens (Clear Guide palette appended at the end of this sheet) */', s, flags=re.S)
assert 'GerdCare' not in s and 'Gerd' not in s, [m.start() for m in re.finditer('GerdCare', s)][:5]
open(os.path.join(H, 'clearguidemedical.src.html'), 'w', encoding='utf8').write(s)
print('ok', len(s))
