# Assemble spinalresources.src.html from the DW-compliant home-only build (limaxbio v7: plumbing, reveal failsafe, build-out,
# router), as nerxbiosciences does, swapping every region and re-theming the shared CSS. Never hand-edit the big file.
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

# ---------------------------------------------------------------- head
region('meta', '''<title>Spinal Resources, Inc. — Bezier Parametric Curve spinal rods, Fort Lauderdale</title>
<meta name="description" content="Spinal Resources, Inc. (SRI) develops the FDA-cleared, patented Bezier Parametric Curve Transition Rod and the Swedge pedicle screw system for deformity and degenerative spine surgery. Fort Lauderdale, Florida.">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#07090c">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%2307090c'/%3E%3Ccircle cx='17' cy='31' r='7' fill='%23248bd1'/%3E%3Ccircle cx='32' cy='16' r='7' fill='%23e2a223'/%3E%3C/svg%3E">''')
region('fonts', '/*@fonts Outfit:300,400,500,600; Figtree:400,500,600*/')
region('root', ''':root{
  --ink:#07090c;--inkr:7,9,12;--boner:245,247,248;--accr:36,139,209;--ink2:#0b0e13;--ink3:#121720;--deep:#050608;
  --bone:#f5f7f8;--bone2:#e6eaee;--bone3:#cfd6dd;
  --stone:#a5adb8;--stoneD:#59616d;
  --acc:#248bd1;--accL:#6bb6ea;--accD:#1a69a3;--ember:#e2a223;
  --red:#e2a223;--redL:#e9b54a;--blue:#248bd1;--blueL:#6bb6ea;--vio:#248bd1;
  --grad:linear-gradient(90deg,#248bd1 0%,#248bd1 60%,#e2a223 100%);
  --hair:rgba(245,247,248,.13);--hairD:rgba(245,247,248,.13);
  --disp:'Outfit',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Outfit',system-ui,sans-serif;
  --sans:'Figtree',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'Figtree',system-ui,-apple-system,'Segoe UI',sans-serif;
  --deco:'Figtree',system-ui,-apple-system,sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}''')
region('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:#07090c}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
region('logocss', '''.brand{display:flex;align-items:center;height:56px;color:var(--bone)}
.brand img{display:block}''')
region('scenecss', '''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:15ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#a5adb8;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #4d5562;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(220px,30vh,300px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:inherit}
.step h3,.step h2{font-family:var(--disp);font-weight:500;font-size:clamp(26px,2.3vw,38px);line-height:1.12;letter-spacing:-.02em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:44ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(70vh,640px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene .vt{fill:rgba(245,247,248,.035);stroke:rgba(245,247,248,.5);stroke-width:1.4}
.scene .dk{fill:none;stroke:rgba(245,247,248,.28);stroke-width:1.2}
.scene .sk{fill:none;stroke:#b9c2cc;stroke-width:3;stroke-linecap:round}
.scene .th{fill:none;stroke:#b9c2cc;stroke-width:1.3;stroke-linecap:round}
.scene .tu{fill:none;stroke:#dfe5ea;stroke-width:1.8;stroke-linejoin:round;stroke-linecap:round}
.scene .ax{fill:none;stroke:rgba(245,247,248,.3);stroke-width:1}
.scene .rodF{fill:rgba(185,194,204,.22)}
.scene .rodC{fill:url(#srg);opacity:0}
.scene .rodS{fill:none;stroke:#eef2f5;stroke-width:1.6;stroke-linejoin:round}
.scene .jn{fill:none;stroke:#e9b54a;stroke-width:1.2;stroke-dasharray:4 5}
.scene .st{fill:none;stroke:#6bb6ea;stroke-width:2;stroke-linejoin:round}
.scene .pk{fill:#e9b54a;stroke:#07090c;stroke-width:1.5}
.scene text{font-family:var(--deco);font-weight:600;font-size:12px;letter-spacing:.14em;fill:#eef1f5}
.scene text.a{fill:#eef1f5}.scene text.a.r{fill:#e9b54a}.scene text.a.b{fill:#6bb6ea}.scene text.a.g{fill:#8fd9b0}
.scene text.t{font-weight:500;font-size:10.5px;letter-spacing:.16em;fill:rgba(245,247,248,.62)}
.scene #lb1,.scene #lb2,.scene #lb3,.scene #srJn,.scene #srSt,.scene #srDm{opacity:0}
.scene svg.mob text{font-size:19px;letter-spacing:.05em}
.scene svg.mob text.t{font-size:16px;letter-spacing:.08em}''')
region('seen', '<script>try{if(sessionStorage.getItem("sri-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>')
region('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M6 92H90"/></svg>
    <div class="plk"><img class="sr-lg" src="logo.png" alt="" width="492" height="273" decoding="sync">
    <span class="tgl">Bring the rod to the patient</span></div>
  </div>
  <span class="lab pl">Spinal fixation · Fort Lauderdale, Florida</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''')
region('brand', '<a href="#/" class="brand" id="brand" aria-label="Spinal Resources, Inc., home"><img class="sr-mk" src="logo-mark.png" alt="SRi" width="416" height="180"></a>')
region('navmenu', '''<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/technology">Technology</a>
    <a class="nl ul" href="#/products">Products</a>
    <a class="nl ul" href="#/team">Team</a>
    <a class="nl ul" href="#/news">News</a>
    <a class="btn" href="#/contact">Contact <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
    <li><a href="#/technology">Technology</a></li>
    <li><a href="#/products">Products</a></li>
    <li><a href="#/team">Team</a></li>
    <li><a href="#/news">News</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Headquarters</span><br>Fort Lauderdale, Florida</div>
    <div><span class="lab">Focus</span><br>Spinal fixation rods and screws</div>
  </div>
</div>''')
region('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Spinal Resources</span><div class="t" id="xtt"></div></div>''')

# ---------------------------------------------------------------- site: keep the v7 never-hidden failsafe, drop LiMax's loader mark code
i = s.find('/*<R:site>*/'); j = s.find('/*</R:site>*/')
site = s[i + len('/*<R:site>*/'):j]
k = site.find('/* v7 (client: sections rendered')
assert k > 0
region('site', 'var SITE="Spinal Resources";\nvar PK="sri";\n' + site[k:])

# ---------------------------------------------------------------- loader: the whole lockup moves as one (WAVE_BRIEF LOADER: no per-letter chars)
rep('var wm=SplitText.create("#pre .wm span",{type:"chars",charsClass:"c"});gsap.set(wm.chars,{yPercent:190,opacity:0});',
    'var wm={chars:[]};gsap.set("#pre .plk",{y:14,opacity:0});')
rep('.to(wm.chars,{yPercent:0,opacity:1,duration:.75,ease:"silk",stagger:.03},.15)', '.to("#pre .plk",{y:0,opacity:1,duration:.7,ease:"power2.out"},.12)')
rep('.to(wm.chars,{yPercent:-120,opacity:0,duration:.38,ease:"power3.in",stagger:.012},.08)', '.to("#pre .plk",{opacity:0,y:-10,duration:.36,ease:"power2.in"},.06)')

# ---------------------------------------------------------------- content / views / field / story
for r in ('content', 'views', 'field', 'story'):
    region(r, open(os.path.join(D, 'spinalresources.%s.js' % r), encoding='utf-8').read())

# ---------------------------------------------------------------- nssfix: the shared module, as-is
i = s.find('<script>/*R:nssfix*/'); j = s.find('</script>', i)
assert i > 0
s = s[:i] + open(os.path.join(D, '..', 'lib', 'nssfix.js'), encoding='utf-8').read().strip() + s[j + len('</script>'):]

# ---------------------------------------------------------------- re-theme the shared CSS (head only): LiMax teal/violet -> SRI blue/gold
head_end = s.find('</head>')
css, rest = s[:head_end], s[head_end:]
for a, b in [('#59c7d4', '#6bb6ea'), ('#3fc6b5', '#e9b54a'), ('#6aa3f0', '#6bb6ea'), ('#ad86ec', '#6bb6ea'), ('#2fb5a5', '#248bd1'),
             ('#4f8fe0', '#248bd1'), ('#9a6ae0', '#1a69a3'), ('#44a3c5', '#3a9be0'), ('#3a7bd5', '#248bd1'), ('#835ea3', '#1a69a3'),
             ('#8a4fd6', '#248bd1'), ('#9da3b8', '#a5adb8'), ('#4a5064', '#4d5562'), ('--accT:#0b7a70', '--accT:#1a69a3'), ("'Krona One'", "'Outfit'"),
             ('#e2e7f0', '#e6eaee'), ('LiMax Biosciences', 'the previous build'), ('LiMax', 'shared'), ('LIMAX', 'wordmark')]:
    css = css.replace(a, b)
s = css + rest
extra = open(os.path.join(D, 'spinalresources.extra.css'), encoding='utf-8').read()
k = s.rfind('</style>', 0, s.find('</head>'))
s = s[:k] + extra + s[k:]
for bad in ['LiMax', 'limax', 'LIMAX', 'lmx-pre', 'hydrogel', 'Hydrogel', 'NĒRx', 'nrx-pre']:
    assert bad not in s, bad
assert '<!--@libs' in s and 'buildout' in s[s.find('<!--@libs'):s.find('-->', s.find('<!--@libs'))], 'buildout lib'
open(os.path.join(D, 'spinalresources.src.html'), 'w', encoding='utf-8').write(s)
print('assembled', len(s))
