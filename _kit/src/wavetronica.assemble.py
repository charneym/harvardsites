# Assemble /_kit/src/wavetronica.src.html from the mlmbiologics home-only build (shared plumbing only: loader, router,
# build-out, gates) with WaveTronica's own content, palette, hero render and story. Run: python3 wavetronica.assemble.py <partsdir>
import re, sys, os
K = os.path.dirname(os.path.abspath(__file__))
P = sys.argv[1]
s = open(os.path.join(K, 'mlmbiologics.src.html'), encoding='utf-8').read()
part = lambda n: open(os.path.join(P, n), encoding='utf-8').read()

def region(name, new, html=False):
    global s
    if html:
        a, b = '<!--<R:%s>-->' % name, '<!--</R:%s>-->' % name
    else:
        a, b = '/*<R:%s>*/' % name, '/*</R:%s>*/' % name
    i = s.index(a) + len(a); j = s.index(b, i)
    s = s[:i] + new + s[j:]

def rep(old, new, count=1):
    global s
    if old not in s:
        raise SystemExit('missing: ' + old[:80])
    s = s.replace(old, new) if count == 0 else s.replace(old, new, count)

region('meta', '''<title>WaveTronica — RF coils and MRI hardware for metabolic cancer imaging</title>
<meta name="description" content="WaveTronica B.V., a 2018 spin-off of UMC Utrecht in Geldermalsen, designs, builds and installs RF coils for high-field and ultra-high field MRI and spectroscopy, and develops the MIRACLE breast coil for metabolic MRI.">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#0a1a2e">
<link rel="icon" href="fav.png">''', html=True)
region('fonts', '/*@fonts Sora:300,400,500; IBM Plex Sans:400,500; IBM Plex Mono:400,500*/')
region('root', ''':root{
  --ink:#0a1a2e;--inkr:10,26,46;--boner:238,243,249;--accr:74,155,232;--ink2:#0c1f37;--ink3:#132a48;--deep:#071425;
  --bone:#eef3f9;--bone2:#e3ebf4;--bone3:#dbe8f7;
  --stone:#9fb0c4;--stoneD:#4a5d73;
  --acc:#0e64bf;--accL:#5fa6ee;--accD:#0e5cb0;--rd:#0e5cb0;--rdL:#dbe8f7;--gy:#8a9bb0;
  --flame:#4a9be8;--flameL:#dbe8f7;
  --hair:rgba(238,243,249,.14);--hairD:rgba(10,26,46,.15);
  --disp:'Sora','Helvetica Neue',system-ui,sans-serif;
  --serif:'Sora','Helvetica Neue',system-ui,sans-serif;
  --sans:'IBM Plex Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,'SFMono-Regular',monospace;
  --deco:'Sora','Helvetica Neue',system-ui,sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1560px}}''')
region('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:#0a1a2e}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
rep('.scene text{font-family:var(--mono);font-weight:500;font-size:12px;letter-spacing:.12em;fill:#e2f2df}', '.scene text{font-family:var(--mono);font-weight:500;font-size:12px;letter-spacing:.12em;fill:#dbe7f5}')
rep('.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#a4b2c4;', '.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#a9b9cc;')
# site layer: drop MLM's own layer and write WaveTronica's
i = s.index('/* ===== MLM Biologics:'); j = s.index('</style>', i)
layer = s[i:j]
layer = layer.split('\n', 1)[1]  # drop MLM's comment line
cut = layer.index('/* the story scene: a block of skin')
end = layer.index('/* pipeline source link arrow')
layer = layer[:cut] + layer[end:]
layer = layer.replace('#0e1813', '#0a1a2e').replace('#a6b5aa', '#a9b9cc').replace('#4a5e51', '#3d5675')
layer = layer.replace('/* MLM type scale: Barlow, light display weight */', '/* type scale: light display weight */')
layer = layer.replace('/* MLM weights: light display, medium emphasis in the logo green */', '/* weights: light display, emphasis in the brand blue */')
layer = re.sub(r'/\* header and loader carry the real logo \(reversed[^*]*\*/', '/* header and loader carry the real logo */', layer)
layer = layer.replace('@keyframes mlRise', '@keyframes wtRise').replace('animation:mlRise', 'animation:wtRise')
s = s[:i] + '/* ===== WaveTronica: palette sampled from their logo (blue #0e64bf "Wave" and arcs, navy #124473 "Tronica") and site (blue #0e64bf buttons on white). A deep navy ink from the logo navy, the brand blue lifted to #5fa6ee for type on navy (#0e5cb0 on the light ground), cool white bone. Sora display, IBM Plex Sans and Mono. Square corners (DE). */\n' + layer + part('site.css') + s[j:]
region('seen', '<script>try{if(sessionStorage.getItem("wavetronica-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>', html=True)
region('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <div class="mk"><img class="plogo" src="logo-w.png" alt="" width="300" height="104"></div>
    <div class="wm" hidden><span></span></div>
  </div>
  <span class="lab pl">RF coils for MRI<span class="nomob"> · Metabolic imaging · Geldermalsen</span></span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''', html=True)
region('brand', '<a href="#/" class="brand" id="brand" aria-label="WaveTronica, home"><img class="lgo" src="logo-w.png" alt="WaveTronica" width="300" height="104"></a>', html=True)
region('navmenu', '''<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/technology">Technology</a>
    <a class="nl ul" href="#/projects">Projects</a>
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
    <li><a href="#/projects">Projects</a></li>
    <li><a href="#/team">Team</a></li>
    <li><a href="#/news">News</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Visiting address</span><br>Oudenhof 2F, 4191 NW Geldermalsen</div>
    <div><span class="lab">Write to us</span><br><a href="mailto:info@wavetronica.com">info@wavetronica.com</a></div>
  </div>
</div>''', html=True)
region('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">WaveTronica</span><div class="t" id="xtt"></div></div>''', html=True)
region('site', 'var SITE="WaveTronica";\nvar PK="wavetronica";')
region('content', part('content.js'))
# views: WaveTronica's views + the base router tail (after its SECS map)
a = s.index('/*<R:views>*/') + len('/*<R:views>*/'); b = s.index('/*</R:views>*/')
old = s[a:b]; tail = old[old.index('\n', old.index('var SECS=')) + 1:]
tail = tail.replace('MLM Biologics — collagen wound matrices for wound closure', 'WaveTronica — RF coils and MRI hardware for metabolic cancer imaging')
s = s[:a] + part('views.js') + tail + s[b:]
region('field', part('field.js'))
region('story', part('story.js'))
# Safari dash fix: the kit's lib/nssfix.js, as-is
i = s.index('<script>/*R:nssfix*/'); j = s.index('</script>', i) + len('</script>')
s = s[:i] + open(os.path.join(K, '..', 'lib', 'nssfix.js'), encoding='utf-8').read().strip() + s[j:]
assert 'mlm' not in s.lower().replace('mlmbiologics', ''), [m.start() for m in re.finditer('mlm', s.lower())][:5]
open(os.path.join(K, 'wavetronica.src.html'), 'w', encoding='utf-8').write(s)
print('ok', len(s))
