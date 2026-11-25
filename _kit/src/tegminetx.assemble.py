# Assemble tegminetx.src.html from the newest gated home-only build (sostos: DW never-hidden failsafe, whole-lockup loader,
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

# the TegMine lockup: their own logo (tegminetx-Logo-Fin.svg from tegminetx.com), its 19 filled paths inline at their brand
# blue #69A1D1, cropped to the artwork. Crisp at any size (DR2).
PATHS = open(os.path.join(D, 'tegminetx.logo.txt'), encoding='utf-8').read().split('\n')
def logo(cls='lm'):
    return ('<svg class="%s" viewBox="28 22 657 234" role="img" aria-label="TegMine Therapeutics"><g fill="#69A1D1">' % cls +
            ''.join('<path d="%s"/>' % d for d in PATHS) + '</g></svg>')

region('meta', '''<title>TegMine Therapeutics — glycan-targeted antibody-drug conjugates, South San Francisco</title>
<meta name="description" content="TegMine Therapeutics develops antibody-drug conjugates that target cancer-specific glycans and glycoproteins in solid tumors, for targeted killing and restored immunity.">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#0c1a28">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%230c1a28'/%3E%3Cpath d='M6 7h14v3.4h-5.3V26h-3.4V10.4H6z' fill='%2369A1D1'/%3E%3Ccircle cx='23.5' cy='21.5' r='4.5' fill='%2369A1D1'/%3E%3C/svg%3E">''')
region('fonts', '/*@fonts Poppins:400,500,600; Inter:400,500,600*/')
region('root', ''':root{
  --ink:#0c1a28;--inkr:12,26,40;--boner:243,246,249;--accr:105,161,209;--ink2:#0f2133;--ink3:#142a40;--deep:#08121d;
  --bone:#f3f6f9;--bone2:#e2e8ee;--bone3:#c9d3dd;
  --stone:#a5b1bf;--stoneD:#55636f;
  --acc:#69a1d1;--accL:#9cc3e6;--accD:#113354;--ember:#69a1d1;
  --red:#69a1d1;--redL:#9cc3e6;--blue:#113354;--blueL:#9cc3e6;--vio:#69a1d1;
  --grad:linear-gradient(90deg,#3a7ab5 0%,#69a1d1 55%,#9cc3e6 100%);
  --hair:rgba(243,246,249,.13);--hairD:rgba(243,246,249,.13);
  --disp:'Poppins','Segoe UI',system-ui,sans-serif;
  --serif:'Poppins','Segoe UI',system-ui,sans-serif;
  --sans:'Inter',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'Poppins','Inter',system-ui,sans-serif;
  --deco:'Poppins','Inter',system-ui,sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}''')
region('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:#0c1a28}
.fieldbg.still{background:#0c1a28 url(adc-still.webp) 69% 47%/auto 50% no-repeat}
@media (max-width:860px){.fieldbg.still{background-position:50% 21%;background-size:auto 30%}}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
region('logocss', '''.brand{display:flex;align-items:center;height:56px;color:var(--bone)}
.brand .lm{width:auto;height:46px;flex:none;display:block;overflow:visible}
@media (max-width:420px){.brand .lm{height:40px}}''')
region('scenecss', open(os.path.join(D, 'tegminetx.scene.css'), encoding='utf-8').read())
region('seen', '<script>try{if(sessionStorage.getItem("tgm-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>')
region('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M6 92H90"/></svg>
    <div class="plk">''' + logo() + '''</div>
  </div>
  <span class="lab pl">Glycan-targeted ADCs · South San Francisco</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''')
region('brand', '<a href="#/" class="brand" id="brand" aria-label="TegMine Therapeutics, home">' + logo() + '</a>')
region('navmenu', '''<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/technology">Technology</a>
    <a class="nl ul" href="#/programs">Programs</a>
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
    <li><a href="#/programs">Programs</a></li>
    <li><a href="#/team">Team</a></li>
    <li><a href="#/news">News</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Headquarters</span><br>South San Francisco, California</div>
    <div><span class="lab">Focus</span><br>Glycan-targeted ADCs</div>
  </div>
</div>''')
region('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">TegMine</span><div class="t" id="xtt"></div></div>''')

rep('var SITE="Sostos";\nvar PK="sst";\n', 'var SITE="TegMine Therapeutics";\nvar PK="tgm";\n')

region('content', open(os.path.join(D, 'tegminetx.content.js'), encoding='utf-8').read())
region('views', open(os.path.join(D, 'tegminetx.views.js'), encoding='utf-8').read())
region('field', open(os.path.join(D, 'tegminetx.field.js'), encoding='utf-8').read())
region('story', open(os.path.join(D, 'tegminetx.story.js'), encoding='utf-8').read())

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
for a, b in [('#7fb2ff', '#9cc3e6'), ('#2f7bf0', '#69a1d1'), ('#a4adc2', '#a5b1bf'), ('#1846a6', '#2a6aa3'), ('#9cc4ff', '#a9cbe8'),
             ('#4f8ff5', '#69a1d1'), ('#060e24', '#0c1a28'), ('#4a5674', '#4a5d70'), ('#e3e8f2', '#e2e8ee'), ('#1f56c8', '#3a7ab5'),
             ('#091430', '#0f2133'), ('#0f1c3c', '#142a40'), ('#040a1b', '#08121d'), ('#6aa8ff', '#8dbbe3'), ('#a9cdff', '#b8d5ee'),
             ('#8792ab', '#8996a5'), ('#022670', '#113354'), ('#f3f5fa', '#f3f6f9'),
             ("'Exo'", "'Poppins'"), ("'Saira Semi Condensed'", "'Poppins'")]:
    css = css.replace(a, b)
s = css + rest
extra = open(os.path.join(D, 'tegminetx.extra.css'), encoding='utf-8').read()
k = s.rfind('</style>', 0, s.find('</head>'))
s = s[:k] + extra + s[k:]
for bad in ['Sostos', 'sostos', 'CATOS', 'Morgantown', 'strip-still', 'sst-pre', 'logo-d.png', 'mark-d.png', 'Guo']:
    assert bad not in s, bad
open(os.path.join(D, 'tegminetx.src.html'), 'w', encoding='utf-8').write(s)
print('assembled', len(s))
