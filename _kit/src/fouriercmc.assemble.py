# Assemble fouriercmc.src.html from the newest gated home-only build (sostos: DW never-hidden failsafe, whole-lockup loader,
# build-out, router, nssfix), swapping every region and re-theming the shared CSS. Never hand-edit the big file.
import re, os
D = os.path.dirname(os.path.abspath(__file__))
s = open(os.path.join(D, 'sostos.src.html'), encoding='utf-8').read()

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

# the Fourier lockup: their own white logo from fouriercmc.com (2859px master, downsampled to 1030x300, never upscaled)
def logo(cls='lm'):
    return '<img class="%s" src="logo-d.png" width="1030" height="300" alt="" decoding="async">' % cls

region('meta', """<title>Fourier — thermoformable ceramics for thermal management, Burlington, Massachusetts</title>
<meta name="description" content="Fourier makes thermoformable ceramics: fully sintered ceramic sheets formed with heat and pressure into thin, conformal parts that are thermally conductive, electrically insulating and transparent to RF.">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#101125">
<link rel="icon" href="mark-d.png">""")
region('fonts', '/*@fonts Exo 2:500,600,600i; Lato:400,700; Titillium Web:600*/')
region('root', """:root{
  --ink:#101125;--inkr:16,17,37;--boner:244,242,238;--accr:255,76,0;--ink2:#141530;--ink3:#1c1d3d;--deep:#0b0c1b;
  --bone:#f4f2ee;--bone2:#e6e3dd;--bone3:#cfcbc3;
  --stone:#aaa9bf;--stoneD:#5a5970;
  --acc:#ff4c00;--accL:#ff8a52;--accD:#b83700;--ember:#ff4c00;
  --red:#ff4c00;--redL:#ff8a52;--blue:#324158;--blueL:#c9c8fb;--vio:#c9c8fb;
  --grad:linear-gradient(90deg,#d43f00 0%,#ff4c00 55%,#ffa071 100%);
  --hair:rgba(244,242,238,.13);--hairD:rgba(244,242,238,.13);
  --disp:'Exo 2','Segoe UI',system-ui,sans-serif;
  --serif:'Exo 2','Segoe UI',system-ui,sans-serif;
  --sans:'Lato',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'Titillium Web','Lato',system-ui,sans-serif;
  --deco:'Titillium Web','Lato',system-ui,sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}""")
region('fieldbg', """.fieldbg{position:fixed;inset:0;z-index:0;background:#101125}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}""")
region('logocss', """.brand{display:flex;align-items:center;height:56px;color:var(--bone)}
.brand .lm{width:auto;height:40px;flex:none;display:block}
@media (max-width:420px){.brand .lm{height:34px}}""")
region('scenecss', open(os.path.join(D, 'fouriercmc.scene.css'), encoding='utf-8').read())
region('seen', '<script>try{if(sessionStorage.getItem("frc-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>')
region('pre', """<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M6 92H90"/></svg>
    <div class="plk">""" + logo() + """</div>
  </div>
  <span class="lab pl">Thermoformable ceramics · Burlington, Massachusetts</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>""")
region('brand', '<a href="#/" class="brand" id="brand" aria-label="Fourier, home">' + logo() + '</a>')
region('navmenu', """<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/technology">Technology</a>
    <a class="nl ul" href="#/applications">Applications</a>
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
    <li><a href="#/applications">Applications</a></li>
    <li><a href="#/team">Team</a></li>
    <li><a href="#/news">News</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Headquarters</span><br>Burlington, Massachusetts</div>
    <div><span class="lab">Focus</span><br>Thermoformable ceramics</div>
  </div>
</div>""")
region('xc', """<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Fourier</span><div class="t" id="xtt"></div></div>""")

rep('var SITE="Sostos";\nvar PK="sst";\n', 'var SITE="Fourier";\nvar PK="frc";\n')

region('content', open(os.path.join(D, 'fouriercmc.content.js'), encoding='utf-8').read())
region('views', open(os.path.join(D, 'fouriercmc.views.js'), encoding='utf-8').read())
region('field', open(os.path.join(D, 'fouriercmc.field.js'), encoding='utf-8').read())
region('story', open(os.path.join(D, 'fouriercmc.story.js'), encoding='utf-8').read())

# nssfix: the shared module, as-is
i = s.find('<script>/*R:nssfix*/'); j = s.find('</script>', i)
assert i > 0
s = s[:i] + open(os.path.join(D, '..', 'lib', 'nssfix.js'), encoding='utf-8').read().strip() + s[j + len('</script>'):]

# drop the Sostos extra CSS, re-theme the shared CSS (head only), then append ours
head_end = s.find('</head>')
k0 = s.find('/* ===================================== Sostos: colours')
assert 0 < k0 < head_end
k1 = s.rfind('</style>', 0, head_end)
assert k1 > k0
s = s[:k0] + s[k1:]
head_end = s.find('</head>')
css, rest = s[:head_end], s[head_end:]
for a, b in [('#060e24', '#101125'), ('#091430', '#141530'), ('#0f1c3c', '#1c1d3d'), ('#040a1b', '#0b0c1b'), ('#f3f5fa', '#f4f2ee'),
             ('#e3e8f2', '#e6e3dd'), ('#cbd3e2', '#cfcbc3'), ('#a4adc2', '#aaa9bf'), ('#566078', '#5a5970'), ('#2f7bf0', '#ff4c00'),
             ('#7fb2ff', '#ff8a52'), ('#022670', '#b83700'), ('#4f8ff5', '#ff6a26'), ('#1f56c8', '#d43f00'), ('#6aa8ff', '#ffa071'),
             ('#9cc4ff', '#c9c8fb'), ('#1846a6', '#b83700'), ('#4a5674', '#4a4a68'), ('#a9cdff', '#ffc2a3'), ('#8792ab', '#8e8da6'),
             ('6,14,36', '16,17,37'), ('243,245,250', '244,242,238'), ('47,123,240', '255,76,0'),
             ("'Exo'", "'Exo 2'"), ("'Inter'", "'Lato'"), ("'Saira Semi Condensed'", "'Titillium Web'")]:
    css = css.replace(a, b)
s = css + rest
extra = open(os.path.join(D, 'fouriercmc.extra.css'), encoding='utf-8').read()
k = s.rfind('</style>', 0, s.find('</head>'))
s = s[:k] + extra + s[k:]
for bad in ['Sostos', 'sostos', 'CATOS', 'Morgantown', 'strip-still', 'Guo', 'sst-pre', 'Saira', "'Exo'", '"Exo"']:
    assert bad not in s, bad
open(os.path.join(D, 'fouriercmc.src.html'), 'w', encoding='utf-8').write(s)
print('assembled', len(s))
