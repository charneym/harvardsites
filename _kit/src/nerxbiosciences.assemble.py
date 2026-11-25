# Assemble nerxbiosciences.src.html from the newest DW-compliant home-only build (limaxbio v7: plumbing, reveal failsafe,
# build-out, router), swapping every region and re-theming the shared CSS. Never hand-edit the big file.
import re, os
D = os.path.dirname(os.path.abspath(__file__))
s = open(os.path.join(D, 'limaxbio.src.html'), encoding='utf-8').read()

def region(name, new):
    global s
    for a, b in (('/*<R:%s>*/' % name, '/*</R:%s>*/' % name), ('<!--<R:%s>-->' % name, '<!--</R:%s>-->' % name)):
        i = s.find(a)
        if i >= 0:
            j = s.find(b, i)
            assert j > i, name
            s = s[:i + len(a)] + new + s[j:]
            return
    raise SystemExit('no region ' + name)

def rep(a, b, count=1):
    global s
    n = s.count(a)
    assert n >= 1, 'missing: ' + a[:90]
    if count == 1:
        assert n == 1, 'ambiguous (%d): %s' % (n, a[:90])
    s = s.replace(a, b)

# ---------------------------------------------------------------- logo (redrawn from their mark as clean SVG)
def logo(uid, cls='lm'):
    h = ''
    import math
    # helix under the x: two strands, one full turn and a half, blue at the top to red at the base, pale rungs
    pa = pb = ''
    rungs = ''
    for k in range(0, 53):
        y = 66 + k
        t = (y - 66) / 52.0 * 2 * math.pi * 1.25
        xa = 163 + 13 * math.sin(t)
        xb = 163 - 13 * math.sin(t)
        pa += ('M' if not pa else 'L') + '%.1f %.1f' % (xa, y)
        pb += ('M' if not pb else 'L') + '%.1f %.1f' % (xb, y)
        if k % 5 == 2 and abs(xa - xb) > 9:
            rungs += 'M%.1f %.1fL%.1f %.1f' % (min(xa, xb) + 3, y, max(xa, xb) - 3, y)
    return ('<svg class="%s" viewBox="0 0 184 122" aria-hidden="true"><defs><linearGradient id="%s" gradientUnits="userSpaceOnUse" x1="0" y1="64" x2="0" y2="120">'
            '<stop offset="0" stop-color="#4d82c0"/><stop offset=".55" stop-color="#7d4f8e"/><stop offset="1" stop-color="#cf1f2b"/></linearGradient></defs>'
            '<g class="lw" fill="currentColor"><text y="58" style="font:600 64px \'Open Sans\',sans-serif"><tspan x="0">N</tspan><tspan x="56">E</tspan><tspan x="97.7">R</tspan><tspan x="144.6">x</tspan></text>'
            '<rect x="61.8" y="2.5" width="26" height="5.2"/>'
            '<text class="lb" x="1" y="104" style="font:500 22.5px \'Open Sans\',sans-serif;letter-spacing:.01em">BioSciences</text></g>'
            '<path d="%s" fill="none" stroke="#f1f3f8" stroke-width="2.2" stroke-linecap="round" opacity=".9"/>'
            '<path d="%s" fill="none" stroke="url(#%s)" stroke-width="5.4" stroke-linecap="round"/><path d="%s" fill="none" stroke="url(#%s)" stroke-width="5.4" stroke-linecap="round"/></svg>'
            ) % (cls, uid, rungs, pa, uid, pb, uid)

# ---------------------------------------------------------------- head
region('meta', '''<title>NĒRx BioSciences — first-in-class inhibitors of DNA damage sensors for cancer, Indianapolis</title>
<meta name="description" content="NĒRx BioSciences is a pre-clinical Indianapolis biotechnology company developing first-in-class small molecule inhibitors of the DNA damage sensors RPA and Ku for lung, ovarian and other hard-to-treat cancers.">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#070a12">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%23070a12'/%3E%3Cpath d='M17 8C31 18 17 30 31 40M31 8C17 18 31 30 17 40' fill='none' stroke='%23bf0d17' stroke-width='4'/%3E%3C/svg%3E">''')
region('fonts', '/*@fonts Playfair Display:400,500,600,400i; Open Sans:400,500,600,700*/')
region('root', ''':root{
  --ink:#070a12;--inkr:7,10,18;--boner:244,245,248;--accr:191,13,23;--ink2:#0b0f1a;--ink3:#121828;--deep:#05070d;
  --bone:#f4f5f8;--bone2:#e4e7ee;--bone3:#cfd4df;
  --stone:#a3aabb;--stoneD:#5b6275;
  --acc:#bf0d17;--accL:#8fb6e6;--accD:#2a5c91;--ember:#bf0d17;
  --red:#bf0d17;--redL:#ef6b70;--blue:#336699;--blueL:#8fb6e6;--vio:#8a4f86;
  --grad:linear-gradient(90deg,#bf0d17 0%,#8a3a63 48%,#336699 100%);
  --hair:rgba(244,245,248,.13);--hairD:rgba(244,245,248,.13);
  --disp:'Playfair Display',Georgia,'Times New Roman',serif;
  --serif:'Playfair Display',Georgia,serif;
  --sans:'Open Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'Open Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --deco:'Open Sans',system-ui,-apple-system,sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}''')
region('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:#070a12}
.fieldbg.still{background:#070a12 url(helix-still.webp) 70% 50%/auto 100% no-repeat}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
region('logocss', '''.brand{display:flex;align-items:center;height:56px;color:var(--bone)}
.brand .lm{width:auto;height:50px;flex:none;display:block;overflow:visible}
@media (max-width:420px){.brand .lm{height:44px}}''')
region('scenecss', '''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:15ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#a3aabb;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #4d5468;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(220px,30vh,300px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:500;font-size:clamp(26px,2.3vw,38px);line-height:1.12;letter-spacing:-.02em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:44ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(70vh,640px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene .bb{fill:none;stroke:url(#nxg);stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
.scene .bb2{fill:none;stroke:rgba(var(--boner),.55);stroke-width:4;stroke-linecap:round}
.scene .bp{fill:none;stroke:rgba(var(--boner),.36);stroke-width:2;stroke-linecap:round}
.scene .bp.ex{stroke:rgba(var(--boner),.6)}
.scene .brk{fill:var(--ink2);stroke:rgba(var(--boner),.7);stroke-width:1.6}
.scene .hot{fill:none;stroke:#ef6b70;stroke-width:9;stroke-linecap:round;opacity:0;filter:drop-shadow(0 0 6px rgba(239,107,112,.7))}
.scene .rpb{fill:rgba(143,182,230,.16);stroke:#8fb6e6;stroke-width:1.8;stroke-linejoin:round}
.scene .inh{fill:#ef6b70;stroke:#ffd9db;stroke-width:1;opacity:0}
.scene .kb{fill:rgba(167,127,176,.16);stroke:#b892c0;stroke-width:1.8}
.scene .lk{fill:none;stroke:#b892c0;stroke-width:1.6;stroke-linecap:round}
.scene text{font-family:var(--deco);font-weight:600;font-size:12px;letter-spacing:.14em;fill:#eef1f8}
.scene text.a{fill:#8fb6e6}.scene text.a.r{fill:#ef7d82}.scene text.a.b{fill:#c6a3cd}
.scene text.t{font-weight:500;font-size:10.5px;letter-spacing:.16em;fill:rgba(var(--boner),.6)}
.scene #lb1,.scene #lb2,.scene #lb3,.scene #rpa,.scene #kin{opacity:0}
.scene svg.mob text{font-size:19px;letter-spacing:.05em}
.scene svg.mob text.t{font-size:15px;letter-spacing:.08em}''')
region('seen', '<script>try{if(sessionStorage.getItem("nrx-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>')
region('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M6 92H90"/></svg>
    <div class="plk">''' + logo('nxlg2') + '''
    <span class="tgl">Innovation uncompromised</span></div>
  </div>
  <span class="lab pl">DNA damage response therapeutics · Indianapolis, Indiana</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''')
region('brand', '<a href="#/" class="brand" id="brand" aria-label="NĒRx BioSciences, home">' + logo('nxlg1') + '</a>')
region('navmenu', '''<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/technology">Science</a>
    <a class="nl ul" href="#/pipeline">Pipeline</a>
    <a class="nl ul" href="#/team">Team</a>
    <a class="nl ul" href="#/news">News</a>
    <a class="btn" href="#/contact">Contact <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
    <li><a href="#/technology">Science</a></li>
    <li><a href="#/pipeline">Pipeline</a></li>
    <li><a href="#/team">Team</a></li>
    <li><a href="#/news">News</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Headquarters</span><br>Indianapolis, Indiana</div>
    <div><span class="lab">Focus</span><br>DNA damage response therapeutics</div>
  </div>
</div>''')
region('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">NĒRx BioSciences</span><div class="t" id="xtt"></div></div>''')

# ---------------------------------------------------------------- site: keep the v7 never-hidden failsafe, drop LiMax's loader mark code
i = s.find('/*<R:site>*/'); j = s.find('/*</R:site>*/')
site = s[i + len('/*<R:site>*/'):j]
k = site.find('/* v7 (client: sections rendered')
assert k > 0
region('site', 'var SITE="NĒRx BioSciences";\nvar PK="nrx";\n' + site[k:])

# ---------------------------------------------------------------- loader: the whole lockup moves as one (WAVE_BRIEF LOADER: no per-letter chars)
rep('var wm=SplitText.create("#pre .wm span",{type:"chars",charsClass:"c"});gsap.set(wm.chars,{yPercent:190,opacity:0});',
    'var wm={chars:[]};gsap.set("#pre .plk",{y:14,opacity:0});')
rep('.to(wm.chars,{yPercent:0,opacity:1,duration:.75,ease:"silk",stagger:.03},.15)', '.to("#pre .plk",{y:0,opacity:1,duration:.7,ease:"power2.out"},.12)')
rep('.to(wm.chars,{yPercent:-120,opacity:0,duration:.38,ease:"power3.in",stagger:.012},.08)', '.to("#pre .plk",{opacity:0,y:-10,duration:.36,ease:"power2.in"},.06)')

# ---------------------------------------------------------------- content / views / field / story
region('content', open(os.path.join(D, 'nerxbiosciences.content.js'), encoding='utf-8').read())
region('views', open(os.path.join(D, 'nerxbiosciences.views.js'), encoding='utf-8').read())
region('field', open(os.path.join(D, 'nerxbiosciences.field.js'), encoding='utf-8').read())
region('story', open(os.path.join(D, 'nerxbiosciences.story.js'), encoding='utf-8').read())

# ---------------------------------------------------------------- nssfix: the shared module, as-is
i = s.find('<script>/*R:nssfix*/'); j = s.find('</script>', i)
assert i > 0
s = s[:i] + open(os.path.join(D, '..', 'lib', 'nssfix.js'), encoding='utf-8').read().strip() + s[j + len('</script>'):]

# ---------------------------------------------------------------- re-theme the shared CSS (head only): LiMax teal/violet -> NĒRx red/blue
head_end = s.find('</head>')
css, rest = s[:head_end], s[head_end:]
for a, b in [('#59c7d4', '#8fb6e6'), ('#3fc6b5', '#ef7d82'), ('#6aa3f0', '#c6a3cd'), ('#ad86ec', '#8fb6e6'), ('#2fb5a5', '#bf0d17'),
             ('#4f8fe0', '#8a4f86'), ('#9a6ae0', '#336699'), ('#44a3c5', '#5b8cc4'), ('#3a7bd5', '#336699'), ('#835ea3', '#7a4f8e'),
             ('#8a4fd6', '#336699'), ('#9da3b8', '#a3aabb'), ('#4a5064', '#4a5163'), ('--accT:#0b7a70', '--accT:#2a5c91'), ("'Krona One'", "'Playfair Display'"),
             ('#e2e7f0', '#e4e7ee'), ('LiMax Biosciences', 'the previous build'), ('LiMax', 'shared'), ('LIMAX', 'wordmark')]:
    css = css.replace(a, b)
s = css + rest
extra = open(os.path.join(D, 'nerxbiosciences.extra.css'), encoding='utf-8').read()
k = s.rfind('</style>', 0, s.find('</head>'))
s = s[:k] + extra + s[k:]
# leftovers that must not survive
for bad in ['LiMax', 'limax', 'LIMAX', 'lmx-pre', 'hydrogel', 'Hydrogel']:
    assert bad not in s, bad
open(os.path.join(D, 'nerxbiosciences.src.html'), 'w', encoding='utf-8').write(s)
print('assembled', len(s))
