# Assemble sostos.src.html from the newest gated home-only build (nerxbiosciences: DW never-hidden failsafe, whole-lockup loader,
# build-out, router, nssfix), swapping every region and re-theming the shared CSS. Never hand-edit the big file.
import re, os
D = os.path.dirname(os.path.abspath(__file__))
s = open(os.path.join(D, 'nerxbiosciences.src.html'), encoding='utf-8').read()

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

# the Sostos lockup: their own logo, downsampled from the 7116px master on sostosinc.com (never upscaled), the mark's
# navy-to-blue gradient lifted for the dark ground and the wordmark and tagline in bone (logo-d.png, 1353x300)
def logo(cls='lm'):
    return '<img class="%s" src="logo-d.png" width="1353" height="300" alt="" decoding="async">' % cls

region('meta', '''<title>Sostos — AI and gene-expression assays for precision oncology, Morgantown, West Virginia</title>
<meta name="description" content="Sostos builds Cancer Treatment Optimization Solutions (CATOS): AI and big-data software and gene-expression assays for personalized cancer care, from diagnosis to treatment selection and drug repositioning.">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#060e24">
<link rel="icon" href="mark-d.png">''')
region('fonts', '/*@fonts Exo:500,600,500i; Inter:400,500,600; Saira Semi Condensed:500,600*/')
region('root', ''':root{
  --ink:#060e24;--inkr:6,14,36;--boner:243,245,250;--accr:47,123,240;--ink2:#091430;--ink3:#0f1c3c;--deep:#040a1b;
  --bone:#f3f5fa;--bone2:#e3e8f2;--bone3:#cbd3e2;
  --stone:#a4adc2;--stoneD:#566078;
  --acc:#2f7bf0;--accL:#7fb2ff;--accD:#022670;--ember:#2f7bf0;
  --red:#2f7bf0;--redL:#7fb2ff;--blue:#022670;--blueL:#7fb2ff;--vio:#4f8ff5;
  --grad:linear-gradient(90deg,#1f56c8 0%,#2f7bf0 55%,#6aa8ff 100%);
  --hair:rgba(243,245,250,.13);--hairD:rgba(243,245,250,.13);
  --disp:'Exo','Segoe UI',system-ui,sans-serif;
  --serif:'Exo','Segoe UI',system-ui,sans-serif;
  --sans:'Inter',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'Saira Semi Condensed','Inter',system-ui,sans-serif;
  --deco:'Saira Semi Condensed','Inter',system-ui,sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}''')
region('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:#060e24}
.fieldbg.still{background:#060e24 url(strip-still.webp) 72% 50%/auto 100% no-repeat}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
region('logocss', '''.brand{display:flex;align-items:center;height:56px;color:var(--bone)}
.brand .lm{width:auto;height:40px;flex:none;display:block}
@media (max-width:420px){.brand .lm{height:34px}}''')
region('scenecss', '''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:15ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#a4adc2;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #4a5674;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(220px,30vh,300px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:500;font-size:clamp(26px,2.3vw,38px);line-height:1.12;letter-spacing:-.015em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:44ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(70vh,640px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene .gh>g>*,.scene .gh>g{opacity:.55}
.scene .gh .bar{fill:rgba(127,178,255,.16);stroke:none}
.scene .gh .ax,.scene .gh .tr,.scene .gh .cv,.scene .gh .cv2{fill:none;stroke:rgba(var(--boner),.16);stroke-width:1.6}
.scene .gh .nd,.scene .gh .lf{fill:var(--ink2);stroke:rgba(var(--boner),.2);stroke-width:1.4}
.scene .act .bar{fill:rgba(127,178,255,.55);stroke:#7fb2ff;stroke-width:1.2;transition:fill .4s var(--eo)}
.scene .act .bar.on{fill:#4f8ff5}
.scene .act .ax{fill:none;stroke:rgba(var(--boner),.62);stroke-width:1.6;stroke-linecap:square}
.scene .act .tr{fill:none;stroke:#7fb2ff;stroke-width:2;stroke-linecap:round}
.scene .act .nd{fill:var(--ink2);stroke:#7fb2ff;stroke-width:2;opacity:0}
.scene .act .lf{fill:var(--ink2);stroke:rgba(var(--boner),.7);stroke-width:1.6;opacity:0;transition:fill .45s var(--eo),stroke .45s var(--eo)}
.scene .act .lf.bf.on{fill:#4f8ff5;stroke:#a9cdff}
.scene .act .lf.nb.on{fill:#3a4560;stroke:#8792ab}
.scene .act .cv{fill:none;stroke:#6aa8ff;stroke-width:3;stroke-linejoin:round}
.scene .act .cv2{fill:none;stroke:#8792ab;stroke-width:2.2;stroke-dasharray:none;stroke-linejoin:round}
.scene .lk{fill:none;stroke:rgba(var(--boner),.4);stroke-width:1.4}
.scene text{font-family:var(--deco);font-weight:600;font-size:12.5px;letter-spacing:.14em;fill:#eef2fa}
.scene text.a{fill:#9cc4ff}.scene text.a.g{fill:#aab3c8}
.scene text.t{font-weight:500;font-size:11px;letter-spacing:.16em;fill:rgba(var(--boner),.62)}
.scene #lb1,.scene #lb2,.scene #lb3,.scene #sxC text{opacity:0}
.scene svg.mob text{font-size:17px;letter-spacing:.06em}
.scene svg.mob text.t{font-size:14px;letter-spacing:.08em}''')
region('seen', '<script>try{if(sessionStorage.getItem("sst-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>')
region('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M6 92H90"/></svg>
    <div class="plk">''' + logo() + '''</div>
  </div>
  <span class="lab pl">AI for precision oncology · Morgantown, West Virginia</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''')
region('brand', '<a href="#/" class="brand" id="brand" aria-label="Sostos, home">' + logo() + '</a>')
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
    <div><span class="lab">Headquarters</span><br>Morgantown, West Virginia</div>
    <div><span class="lab">Focus</span><br>AI for precision oncology</div>
  </div>
</div>''')
region('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Sostos</span><div class="t" id="xtt"></div></div>''')

# site: keep the plumbing, rename
rep('var SITE="NĒRx BioSciences";\nvar PK="nrx";\n', 'var SITE="Sostos";\nvar PK="sst";\n')

region('content', open(os.path.join(D, 'sostos.content.js'), encoding='utf-8').read())
region('views', open(os.path.join(D, 'sostos.views.js'), encoding='utf-8').read())
region('field', open(os.path.join(D, 'sostos.field.js'), encoding='utf-8').read())
region('story', open(os.path.join(D, 'sostos.story.js'), encoding='utf-8').read())

# nssfix: the shared module, as-is
i = s.find('<script>/*R:nssfix*/'); j = s.find('</script>', i)
assert i > 0
s = s[:i] + open(os.path.join(D, '..', 'lib', 'nssfix.js'), encoding='utf-8').read().strip() + s[j + len('</script>'):]

# drop the NĒRx extra CSS, re-theme the shared CSS (head only), then append ours
head_end = s.find('</head>')
k0 = s.find('/* ===================================== NĒRx BioSciences: colours')
assert 0 < k0 < head_end
k1 = s.rfind('</style>', 0, head_end)
assert k1 > k0
s = s[:k0] + s[k1:]
head_end = s.find('</head>')
css, rest = s[:head_end], s[head_end:]
for a, b in [('#8fb6e6', '#7fb2ff'), ('#336699', '#2f7bf0'), ('#a3aabb', '#a4adc2'), ('#bf0d17', '#2f7bf0'), ('#2a5c91', '#1846a6'),
             ('#ef7d82', '#9cc4ff'), ('#c6a3cd', '#7fb2ff'), ('#5b8cc4', '#4f8ff5'), ('#070a12', '#060e24'), ('#4a5163', '#4a5674'),
             ('#e4e7ee', '#e3e8f2'), ('#ef6b70', '#7fb2ff'), ('#8a3a63', '#1f56c8'), ('#8a4f86', '#2f7bf0'), ('#b892c0', '#7fb2ff'),
             ('#7a4f8e', '#1f56c8'), ('#0b0f1a', '#091430'), ('#121828', '#0f1c3c'), ('#05070d', '#040a1b'), ('#a3121c', '#1846a6'),
             ('#c9718e', '#7fb2ff'), ('#cf2a35', '#6aa8ff'), ('#a9c4e8', '#a9cdff'), ('#4b5068', '#4a5674'), ('#8a90a3', '#8792ab'),
             ("'Playfair Display'", "'Exo'"), ("'Open Sans'", "'Inter'")]:
    css = css.replace(a, b)
s = css + rest
extra = open(os.path.join(D, 'sostos.extra.css'), encoding='utf-8').read()
k = s.rfind('</style>', 0, s.find('</head>'))
s = s[:k] + extra + s[k:]
for bad in ['NĒRx', 'NERx', 'nerx', 'Indianapolis', 'RPA', 'helix-still', 'Turchi', 'Playfair', 'nrx-pre']:
    assert bad not in s, bad
open(os.path.join(D, 'sostos.src.html'), 'w', encoding='utf-8').write(s)
print('assembled', len(s))
