#!/usr/bin/env python3
"""Assemble liberatemedical.src.html from the gerdcare home-only engine (shared plumbing: loader shell, transitions,
build-out, footer fit, gates) with Liberate Medical's own content, palette, hero render, story scene and logo.
Run from _kit/src:  python3 liberatemedical.assemble.py && node ../build.js liberatemedical.src.html ../../liberatemedical/index.html"""
import re, os
H = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(H, 'liberatemedical-parts')
s = open(os.path.join(H, 'gerdcare.src.html'), encoding='utf8').read()
rd = lambda n: open(os.path.join(P, n), encoding='utf8').read()

def region(s, name, new, html=False):
    a, b = ('<!--<R:%s>-->' % name, '<!--</R:%s>-->' % name) if html else ('/*<R:%s>*/' % name, '/*</R:%s>*/' % name)
    i = s.index(a); j = s.index(b, i) + len(b)
    return s[:i] + new + s[j:]

def sub(s, a, b, count=1):
    assert a in s, a[:80]
    return s.replace(a, b, count)

# ---- palette + type (global maps: the engine's red/navy tokens become Liberate's cyan/blue/navy) ----
CMAP = {'#0f1626': '#0a1426', '15,22,38': '10,20,38', '245,246,249': '242,246,250', '226,84,90': '95,205,242',
        '#131c2f': '#0f1a30', '#1b2640': '#16233d', '#0b111e': '#070f1d', '#f5f6f9': '#f2f6fa', '#e9ecf3': '#e4ebf3',
        '#f0f2f7': '#edf2f7', '#a9b2c6': '#a6b4c6', '#4f5a72': '#4b5a70', '#bc2e34': '#0454ba', '#e2545a': '#5fcdf2',
        '#a3262c': '#03479c', '#f5d6d7': '#d6eef8', '#ef6a6f': '#5fcdf2', '#ec5d63': '#5fcdf2', '#ef8a8e': '#5fcdf2',
        '#1c1b2a': '#0a1426', '#120e0b': '#0a1426'}
for a, b in CMAP.items():
    s = s.replace(a, b)
s = region(s, 'fonts', '/*<R:fonts>*//*@fonts Figtree:300,400,500,300i,400i; Inter:400,500,600*//*</R:fonts>*/')
s = s.replace('Spectral', 'Figtree')

LOGO_L = '<img class="lgo" src="logo-l.png" width="900" height="298" alt="Liberate Medical">'
LOGO_C = '<img class="plogo" src="logo-c.png" width="900" height="298" alt="">'

s = region(s, 'meta', '<!--<R:meta>--><title>Liberate Medical — VentFree Respiratory Muscle Stimulator</title>\n'
    '<meta name="description" content="Liberate Medical, Crestwood, Kentucky, develops VentFree, a non-invasive, breath-synchronised respiratory muscle stimulator for mechanically ventilated ICU patients, now in the 250-patient PREVENT pivotal trial.">\n'
    '<meta name="robots" content="noindex,nofollow">\n<meta name="theme-color" content="#0a1426">\n<link rel="icon" href="fav.png"><!--</R:meta>-->', html=True)
s = region(s, 'seen', '<!--<R:seen>--><script>try{if(sessionStorage.getItem("lbm-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script><!--</R:seen>-->', html=True)
s = region(s, 'pre', '<!--<R:pre>--><div id="pre" aria-hidden="true">\n  <div class="pc">\n    <div class="lk-u"><div class="mk">' + LOGO_C +
    '</div></div>\n    <div class="wm" hidden><span></span></div>\n  </div>\n'
    '  <span class="lab pl">Respiratory muscle stimulation<span class="nomob"> · Crestwood, Kentucky</span></span>\n'
    '  <div class="bar"><i id="preBar"></i></div>\n  <span class="cnt" id="preCnt">000</span>\n</div><!--</R:pre>-->', html=True)
s = region(s, 'brand', '<!--<R:brand>--><a href="#/" class="brand" id="brand" aria-label="Liberate Medical, home">' + LOGO_L + '</a><!--</R:brand>-->', html=True)
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
    <div><span class="lab">Based in</span><br>Crestwood, Kentucky</div>
    <div><span class="lab">Write to us</span><br><a href="mailto:info@liberatemedical.com">info@liberatemedical.com</a></div>
  </div>
</div><!--</R:navmenu>-->''', html=True)
s = s.replace('<span class="lab" id="xlab">GerdCare</span>', '<span class="lab" id="xlab">Liberate</span>')

# ---- content, views, story ----
c = rd('content.js')
s = region(s, 'site', c[c.index('/*<R:site>*/'):c.index('/*</R:site>*/') + len('/*</R:site>*/')])
s = region(s, 'content', c[c.index('/*<R:content>*/'):c.index('/*</R:content>*/') + len('/*</R:content>*/')])
v = rd('views.js')
i = s.index('/*<R:views>*/'); j = s.index('function secEl(', i)
s = s[:i] + v + s[j:]
s = region(s, 'story', rd('story.js').strip())

# ---- hero field: the VentFree control-unit render (true alpha, page-ink ground), with a live breath trace on its screen ----
s = sub(s, 'var BG="#0a1426",IW=986,IH=628;', 'var BG="#0a1426",IW=872,IH=726,WT=[269.7,197.6],WR=[481.1,200.9],WB=[270.3,311.9];')
s = sub(s, 'var s=Math.min(1,(w*.74)/IW,(h*.26)/IH,Math.max(100,h*.33-Math.max(88,h*.11)-16)/IH),dw=IW*s,dh=IH*s,cy=Math.max(88,h*.11)+dh/2+6;',
           'var s=Math.min(1,(w*.8)/IW,(h*.32)/IH),dw=IW*s,dh=IH*s,cy=Math.max(84,h*.1)+dh/2+6;')
s = sub(s, 'var s=Math.min(1,cw*.4/IW,h*.58/IH),dw=IW*s,dh=IH*s,cx=side+cw*.71,cy=Math.max(h*.54,96+dh/2+40);',
           'var s=Math.min(1,cw*.44/IW,h*.62/IH),dw=IW*s,dh=IH*s,cx=side+cw*.7,cy=Math.max(h*.53,100+dh/2+30);')
s = sub(s, '[[0,.2],[.2,.15],[.4,.09],[.6,.045],[.8,.015],[1,0]].forEach(function(q){gl.addColorStop(q[0],"rgba(138,161,199,"+(q[1]*e)+")")});',
           '[[0,.17],[.2,.13],[.4,.075],[.6,.035],[.8,.012],[1,0]].forEach(function(q){gl.addColorStop(q[0],"rgba(11,115,201,"+(q[1]*e)+")")});')
s = sub(s, 'c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;',
           'c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;'
           '/* the live flow trace on the VentFree screen: a breath every 4 s scrolls across; the exhalation part (when VentFree '
           'stimulates) is drawn in their cyan, inhalation in pale blue. Mapped onto the projected screen rectangle of the render. */'
           'var kx=dw/IW,ky=dh/IH,ox=x+WT[0]*kx,oy=y+WT[1]*ky,ax=(WR[0]-WT[0])*kx,ay=(WR[1]-WT[1])*ky,bx=(WB[0]-WT[0])*kx,by=(WB[1]-WT[1])*ky,N=96,tt=RM?1.3:t;'
           'c.save();c.lineJoin="round";c.lineCap="round";c.lineWidth=Math.max(1.2,dw*.0034);'
           'for(var pass=0;pass<2;pass++){c.beginPath();var on=false;for(var i=0;i<=N;i++){var u=i/N,ph=((tt/4-(1-u)*2)%1+1)%1,ex=ph>=.35,f=ph<.35?Math.sin(ph/.35*Math.PI):-Math.sin((ph-.35)/.65*Math.PI)*.75*Math.exp(-(ph-.35)*1.2),vv=.5-.36*f,px=ox+u*ax+vv*bx,py=oy+u*ay+vv*by;'
           'if((pass===1)===ex){if(!on){c.moveTo(px,py);on=true}else c.lineTo(px,py)}else{if(on){c.lineTo(px,py)}on=false}}'
           'c.strokeStyle=pass?"rgba(63,208,255,"+(.95*e)+")":"rgba(150,200,240,"+(.6*e)+")";c.stroke()}c.restore();')

# ---- loader: the whole lockup moves as one unit (WAVE_BRIEF LOADER), no SplitText chars, no dash draw on the logo ----
s = sub(s, 'var wm=SplitText.create("#pre .wm span",{type:"chars",charsClass:"c"});gsap.set(wm.chars,{yPercent:190,opacity:0});$("#pre .pc").style.visibility="visible";\n  var mk=$("#pre .mk path"),L=330;gsap.set(mk,{strokeDasharray:L,strokeDashoffset:L});',
           'var lk=$("#pre .lk-u");gsap.set(lk,{opacity:0,y:14});$("#pre .pc").style.visibility="visible";')
s = sub(s, 'gsap.timeline().to(mk,{strokeDashoffset:0,duration:1,ease:"flow"},0)\n      .to(wm.chars,{yPercent:0,opacity:1,duration:.75,ease:"silk",stagger:.03},.15)',
           'gsap.timeline().to(lk,{opacity:1,y:0,duration:.7,ease:"silk"},.1)')
s = sub(s, '.to(wm.chars,{yPercent:-120,opacity:0,duration:.38,ease:"power3.in",stagger:.012},.08)\n        .to(["#pre .mk","#pre .cnt","#pre .bar","#pre .pl"],{opacity:0,duration:.3,ease:"power2.in"},.12)',
           '.to(lk,{opacity:0,y:-10,duration:.36,ease:"power2.in"},.08)\n        .to(["#pre .cnt","#pre .bar","#pre .pl"],{opacity:0,duration:.3,ease:"power2.in"},.12)')

# ---- styles: append Liberate's ----
s = sub(s, '</style>\n</head>', '\n' + rd('site.css') + '</style>\n</head>')
s = s.replace('/* GerdCare scene parts */', '/* engine scene parts */')
# nssfix: exactly _kit/lib/nssfix.js
nf = open(os.path.join(H, '..', 'lib', 'nssfix.js'), encoding='utf8').read().strip()
i = s.index('<script>/*R:nssfix*/'); j = s.index('</script>', i) + len('</script>')
s = s[:i] + nf + s[j:]
i = s.index('/*<R:field>*/') + len('/*<R:field>*/'); j = s.index('*/', i) + 2
s = s[:i] + ('/* ================= HERO FIELD: a crafted render of Liberate Medical\'s own product (HOME_BRIEF option c): the VentFree '
  'Respiratory Muscle Stimulator control unit, after the product photograph on liberatemedical.com (blue housing, light bezel '
  'with +/− marks, blue inner panel with the screen and two round keys, Liberate Medical logo and VentFree wordmark). Rendered '
  'once with three.js (liberatemedical.render.html) to an 872x726 image with real alpha, shown at or below native size, whole '
  'and centred in the open area right of the headline (~70% of the content width), fully below the nav (DO/DP/DQ). Ground is '
  'the page ink, so no panel edge exists (DJ). Motion: a slow float and breath-like scale, and a live breath trace scrolling '
  'on the unit\'s screen with the exhalation (stimulation) phase in cyan; no pointer parallax (CZ). ================= */') + s[j:]
s = s.replace('GerdCare', 'engine').replace('gerd-care.com', 'the source site')
s = re.sub(r'/\* ===== engine Medical:.*?\*/', '/* engine tokens (Liberate palette appended at the end of this sheet) */', s, flags=re.S)
assert 'GerdCare' not in s and 'Gerd' not in s, [m.start() for m in re.finditer('Gerd', s)][:5]
open(os.path.join(H, 'liberatemedical.src.html'), 'w', encoding='utf8').write(s)
print('ok', len(s))
