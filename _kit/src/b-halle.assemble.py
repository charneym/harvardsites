# Assemble /_kit/src/b-halle.src.html from the akaoptics home-only build (shared plumbing only: loader, router,
# build-out, gates) with Bernhard Halle Nachfl.'s own content, palette, hero render and story.
# Run: python3 b-halle.assemble.py   then   node ../build.js b-halle.src.html ../../b-halle/index.html
import os
K = os.path.dirname(os.path.abspath(__file__))
s = open(os.path.join(K, 'akaoptics.src.html'), encoding='utf-8').read()

def region(name, new, html=False):
    global s
    a, b = (('<!--<R:%s>-->' % name, '<!--</R:%s>-->' % name) if html else ('/*<R:%s>*/' % name, '/*</R:%s>*/' % name))
    i = s.index(a) + len(a); j = s.index(b, i)
    s = s[:i] + new + s[j:]

def rep(old, new, count=1):
    global s
    if old not in s:
        raise SystemExit('missing: ' + old[:80])
    s = s.replace(old, new) if count == 0 else s.replace(old, new, count)

region('meta', '''<title>Bernhard Halle Nachfl. — Optical workshop in Berlin since 1873: polarizers, retarders, prisms, lenses</title>
<meta name="description" content="Bernhard Halle Nachfl. GmbH, optical workshop in Berlin founded in 1873: polarizers, retarders, mirrors and plates, prisms, lenses and objectives, opto-mechanics and custom optical systems.">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#070c22">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%230033cc'/%3E%3Ctext x='24' y='33' text-anchor='middle' font-family='Georgia,serif' font-style='italic' font-size='26' fill='%23ffffff'%3EH%3C/text%3E%3C/svg%3E">''', html=True)

region('fonts', '/*@fonts Spectral:300,300i,400; IBM Plex Sans:400,400i,500,600; Pinyon Script:400*/')

region('root', ''':root{
  --ink:#070c22;--inkr:7,12,34;--boner:243,245,250;--accr:0,51,204;--ink2:#0a1130;--ink3:#121b44;--deep:#050919;
  --bone:#f3f5fa;--bone2:#e6eaf3;--bone3:#cfd6e6;
  --stone:#9ba4bd;--stoneD:#4a5472;
  --acc:#0033cc;--accL:#8ba6ff;--accD:#0033cc;--rd:#0033cc;--rdL:#8ba6ff;--gy:#4a5472;--vio:#0033cc;--vioD:#0033cc;
  --hair:rgba(243,245,250,.14);--hairD:rgba(7,12,34,.15);
  --disp:'Spectral',Georgia,'Times New Roman',serif;
  --serif:'Spectral',Georgia,serif;
  --sans:'IBM Plex Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --deco:'Spectral',Georgia,serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}''')

region('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:#070c22}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')

# their logo: a white copperplate script "Bernhard Halle Nachfl." with "Optical Workshop" and a small "GmbH", on royal blue (#0033cc)
region('logocss', '''.brand{display:flex;align-items:center;height:58px;color:var(--bone);text-decoration:none}
.bhl{display:inline-flex;flex-direction:column;align-items:flex-start;line-height:1;white-space:nowrap;color:inherit;font-size:30px}
.bhw{display:block;font:400 1em/1.08 'Pinyon Script',cursive;letter-spacing:0;color:inherit;padding:0 .12em 0 .02em}
.bhs{display:block;font:500 .3em/1 'IBM Plex Sans',system-ui,sans-serif;letter-spacing:.22em;text-transform:uppercase;color:inherit;opacity:.82;margin:.1em 0 0 .3em}
@media (max-width:420px){.bhl{font-size:25px}}''')

region('seen', '<script>try{if(sessionStorage.getItem("b-halle-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>', html=True)

region('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <div class="mk"><span class="plk"><span class="bhb"><span class="bhl"><b class="bhw">Bernhard Halle Nachfl.</b><i class="bhs">Optical Workshop</i></span><i class="bhg">GmbH</i></span><i class="bht">Berlin · since 1873</i></span></div>
    <div class="wm" hidden><span></span></div>
  </div>
  <span class="lab pl">Optical workshop<span class="nomob"> · Berlin</span></span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''', html=True)

region('brand', '<a href="#/" class="brand" id="brand" aria-label="Bernhard Halle Nachfl., home"><span class="bhl"><b class="bhw">Bernhard Halle Nachfl.</b><i class="bhs">Optical Workshop</i></span></a>', html=True)

region('navmenu', '''<nav class="nav" aria-label="Main navigation">
    <a class="nl ul" href="#/products">Products</a>
    <a class="nl ul" href="#/custom">Custom optics</a>
    <a class="nl ul" href="#/company">Company</a>
    <a class="nl ul" href="#/events">Events</a>
    <a class="btn" href="#/contact">Contact <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
    <li><a href="#/products">Products</a></li>
    <li><a href="#/custom">Custom optics</a></li>
    <li><a href="#/company">Company</a></li>
    <li><a href="#/events">Events</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Workshop</span><br>Hubertusstraße 10, 12163 Berlin, Germany</div>
    <div><span class="lab">Contact</span><br><a href="mailto:office@b-halle.de">office@b-halle.de</a><br><a href="tel:+493079742960">+49 30 7974296-0</a></div>
  </div>
</div>''', html=True)

region('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Bernhard Halle Nachfl.</span><div class="t" id="xtt"></div></div>''', html=True)

region('site', 'var SITE="Bernhard Halle Nachfl.";\nvar PK="b-halle";')

P = os.path.join(K, 'b-halle-parts')
part = lambda n: open(os.path.join(P, n), encoding='utf-8').read()
region('content', part('content.js'))
region('views', part('views.js'))
region('field', part('field.js'))
region('story', part('story.js'))
region('scenecss', part('scene.css'))

# loader lockup CSS (scoped under #pre) and the old AKA lockup rules
rep('''#pre .plk .akal{font-size:clamp(64px,6vw,96px);flex-direction:column;align-items:center;gap:.08em;color:#e9e8e4}
#pre .plk .akam{gap:.14em}
#pre .plk .akas{font-size:.62em;padding-bottom:.28em}
#pre .plk .akat{display:block;font:500 clamp(15px,1.25vw,19px)/1 var(--sans);font-style:normal;letter-spacing:.2em;text-transform:uppercase;color:var(--stone);white-space:nowrap}''',
'''#pre .plk .bhb{position:relative;display:inline-flex;align-items:flex-end;background:#0033cc;padding:.34em .62em .42em .5em;font-size:clamp(46px,4.6vw,72px)}
#pre .plk .bhl{font-size:1em;color:#ffffff}
#pre .plk .bhs{font-size:.24em;opacity:1;margin-top:.02em}
#pre .plk .bhg{display:block;font:400 .3em/1 'Pinyon Script',cursive;font-style:normal;color:#ffffff;margin:0 0 .1em .2em}
#pre .plk .bht{display:block;font:500 clamp(13px,1.1vw,16px)/1 var(--sans);font-style:normal;letter-spacing:.24em;text-transform:uppercase;color:#b9c3dc;white-space:nowrap}''')
rep('@media (max-width:560px){#pre .plk .akal{font-size:54px}#pre .plk .akat{font-size:11px;letter-spacing:.1em}}',
    '@media (max-width:560px){#pre .plk .bhb{font-size:30px}#pre .plk .bht{font-size:11px;letter-spacing:.16em}}')
rep('.brand .akal{color:var(--bone)}', '.brand .bhl{color:var(--bone)}', 0)

rep('</style>\n</head>', part('extra.css') + '\n</style>\n</head>')

# nssfix: the kit's lib, as-is
i = s.index('<script>/*R:nssfix*/'); j = s.index('</script>', i) + len('</script>')
s = s[:i] + open(os.path.join(K, '..', 'lib', 'nssfix.js'), encoding='utf-8').read().strip() + s[j:]

rep('/* AKA Optics additions */', '/* base additions */')
for bad in ('akaoptics', 'AKA Optics', 'Marseille', 'cedc1c', 'd9e650'):
    if bad in s:
        print('WARN leftover', bad, s.count(bad))
open(os.path.join(K, 'b-halle.src.html'), 'w', encoding='utf-8').write(s)
print('ok', len(s))
