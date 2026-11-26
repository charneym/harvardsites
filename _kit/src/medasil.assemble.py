# Assemble _kit/src/medasil.src.html from the ceatec home-only build (shared plumbing: whole-lockup loader, router, build-out,
# reveal, nssfix, gates) with Medasil Surgical's own content, palette, traced badge logo, Guedel-airway hero render and story.
# Run: python3 medasil.assemble.py   (parts in medasil-parts/; hero: medasil-parts/render.html -> hero.webp)
import os
K = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(K, 'medasil-parts')
s = open(os.path.join(K, 'ceatec.src.html'), encoding='utf-8').read()
part = lambda n: open(os.path.join(P, n), encoding='utf-8').read()

def region(name, new):
    global s
    for a, b in (('/*<R:%s>*/' % name, '/*</R:%s>*/' % name), ('<!--<R:%s>-->' % name, '<!--</R:%s>-->' % name)):
        i = s.find(a)
        if i >= 0:
            j = s.find(b, i); assert j > i, name
            s = s[:i + len(a)] + new + s[j:]; return
    raise SystemExit('no region ' + name)
def getr(name):
    a, b = '/*<R:%s>*/' % name, '/*</R:%s>*/' % name
    i = s.index(a) + len(a); return s[i:s.index(b, i)]
def rep(a, b, count=1):
    global s
    n = s.count(a); assert n >= 1, 'missing: ' + a[:90]
    if count == 1: assert n == 1, 'ambiguous (%d): %s' % (n, a[:90])
    s = s.replace(a, b)

# Medasil's own badge (medasil.com logo PNG, traced in medasil-parts/trace.py): maroon disc, white "m" with "vincent", "medasil", (R)
D = {k: part('logo-%s.d' % k) for k in 'mvwr'}
def badge(cls='mdb'):
    return ('<svg class="%s" viewBox="0 0 1655 1655" role="img" aria-label="Medasil"><circle cx="827.5" cy="827.5" r="826" fill="#670336"/>'
            '<path fill="#fff" fill-rule="evenodd" d="%s"/></svg>' % (cls, D['m'] + D['v'] + D['w'] + D['r']))

region('meta', '''<title>Medasil Surgical Limited — single-use medical devices made in Leeds</title>
<meta name="description" content="Medasil Surgical Limited, Leeds: an independent, family-owned UK manufacturer of single-use medical devices since 1974. ENT and general surgical devices, wound drains, tubing and the LASERGUARD laser protection range, made in a Class 8 cleanroom under ISO 13485:2016.">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#25111b">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23670336'/%3E%3Cpath fill='%23fff' d='M7 22V14a5 5 0 0 1 9-3a5 5 0 0 1 9 3v8h-3.4v-7.6a1.8 1.8 0 0 0-3.6 0V22h-4v-7.6a1.8 1.8 0 0 0-3.6 0V22z'/%3E%3C/svg%3E">''')
region('root', ''':root{
  --ink:#25111b;--inkr:37,17,27;--boner:246,246,245;--accr:103,3,54;--ink2:#2d1621;--ink3:#37202b;--deep:#1b0b13;
  --bone:#f6f6f5;--bone2:#eeeeeb;--bone3:#d4d4cc;
  --stone:#b4aaae;--stoneD:#5b4e54;
  --acc:#670336;--accL:#e3a6c4;--accD:#670336;--rd:#670336;--rdL:#e3a6c4;--gy:#333333;--vio:#670336;--vioD:#4d0228;--blL:#e3a6c4;
  --hair:rgba(246,246,245,.14);--hairD:rgba(37,17,27,.15);
  --disp:'Archivo','Helvetica Neue',Arial,sans-serif;
  --serif:'Archivo','Helvetica Neue',Arial,sans-serif;
  --sans:'Barlow',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,'SFMono-Regular',Menlo,monospace;
  --deco:'Archivo',system-ui,-apple-system,'Segoe UI',sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
''')
region('logocss', '.brand{display:flex;align-items:center;height:58px;color:var(--ink);text-decoration:none}')
sc = getr('scenecss'); k = sc.index('.scene .base')
region('scenecss', sc[:k] + part('scene-tail.css'))
region('seen', '<script>try{if(sessionStorage.getItem("md-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>')
region('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <div class="mk"><span class="plk">''' + badge() + '''</span></div>
    <div class="wm" hidden><span></span></div>
  </div>
  <span class="lab pl">Single-use medical devices<span class="nomob"> · Leeds, since 1974</span></span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''')
region('brand', '<a href="#/" class="brand" id="brand" aria-label="Medasil Surgical Limited, home">' + badge() + '</a>')
region('navmenu', '''<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/products">Products</a>
    <a class="nl ul" href="#/quality">Quality</a>
    <a class="nl ul" href="#/company">Company</a>
    <a class="nl ul" href="#/news">News</a>
    <a class="btn" href="#/contact">Contact <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
    <li><a href="#/products">Products</a></li>
    <li><a href="#/quality">Quality</a></li>
    <li><a href="#/company">Company</a></li>
    <li><a href="#/news">News</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Headquarters</span><br>Medasil House, Hunslet Road, Leeds LS10 1AU</div>
    <div><span class="lab">Orders</span><br><a href="mailto:orders@medasil.com">orders@medasil.com</a><br><a href="tel:+441132433491">+44 (0) 113 243 3491</a></div>
  </div>
</div>''')
region('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Medasil</span><div class="t" id="xtt"></div></div>''')
region('site', 'var SITE="Medasil";\nvar PK="md";')
region('content', part('content.js') + 'var SHEETS=[];')
region('views', part('views.js').replace('@@WORD@@', D['w']))
fld = getr('field')
i = fld.index('var field=(function(){')
fld = '''/* ================= HERO FIELD: a crafted render of Medasil's own product (HOME_BRIEF update 2c): their Guedel airways, sizes 00
   to 4, the integral bite blocks colour-coded blue, black, white, green, yellow and red as in their product table (medasil.com >
   Products > Guedel Airways), lying on their sides in a staggered row as in their own product photograph (medasil-parts/render.html
   -> hero.webp). The canvas ground IS the render's ground, so there is no box (DP/DJ). Held in the open area right of the H1 (DO),
   at or below native size. Slow breath only. On phones it sits in the top band above the text (CW). ================= */
''' + fld[i:]
for a, b in [('var BG="#eceef1",AR=1618/995,NW=900;', 'var BG="#eeeeeb",AR=2125/776,NW=1000;'), ('var top=78,bot=Math.max(230,eyT-30),bh=bot-top,iw=Math.min(w*.98,', 'var top=86,bot=Math.max(230,eyT-30),bh=bot-top,iw=Math.min(w*.9,'), ('rgba(236,238,241,0)', 'rgba(238,238,235,0)'), ('rgba(236,238,241,1)', 'rgba(238,238,235,1)')]:
    assert a in fld, a; fld = fld.replace(a, b)
region('field', fld)
region('story', part('story.js'))

# loader: the whole lockup (badge) fades and rises in as one unit, and out as one unit
rep('gsap.timeline().to(mk,{strokeDashoffset:0,duration:1,ease:"flow"},0)',
    'gsap.timeline().fromTo("#pre .plk",{opacity:0,y:14},{opacity:1,y:0,duration:.7,ease:"silk"},.05)')

# nssfix: the shared module, as-is
i = s.find('<script>/*R:nssfix*/'); j = s.find('</script>', i)
assert i > 0
s = s[:i] + part('../../lib/nssfix.js').strip() + s[j + len('</script>'):]

# re-theme the inherited CSS (head only), then append ours
he = s.find('</head>'); css, rest = s[:he], s[he:]
for a, b in [('#c21924', '#670336'), ('#f07a80', '#e3a6c4'), ('#a3141e', '#4d0228'), ('#8e1119', '#4d0228'), ('#b02024', '#670336'),
             ('#a9aeb5', '#b4aaae'), ('#3d434b', '#47383f'), ('#1f2328', '#25111b'), ('#f4f4f3', '#f6f6f5'), ('#e7e8ea', '#eeeeeb'),
             ('#262b31', '#2d1621'), ('#2f353c', '#37202b'), ('#16191d', '#1b0b13'), ('#d2d4d8', '#d4d4cc'), ('#4d535b', '#5b4e54'),
             ('#6a7078', '#7a6870'), ('#e4e6e9', '#efe7eb'), ('#d9dcdf', '#e8dfe3'), ('#5f656d', '#6b5c63'), ('#41474f', '#4a3b42'),
             ('#eceef1', '#eeeeeb'), ('rgba(236,238,241', 'rgba(238,238,235'), ('rgba(31,35,40', 'rgba(37,17,27'),
             ('rgba(244,244,243', 'rgba(246,246,245'), ('rgba(240,122,128', 'rgba(227,166,196'), ('CEATEC Medizintechnik GmbH: palette', 'Inherited from the ceatec build; palette')]:
    css = css.replace(a, b)
import re
css = re.sub(r'/\* ===== Inherited from the ceatec build;[^*]*\*/', '/* ===== Inherited base overrides; Medasil palette is set in :root and in the block at the end of this stylesheet. ===== */', css)
css = css.replace('CEATEC overrides', 'Base overrides')
s = css + rest
k = s.rfind('</style>', 0, s.find('</head>'))
s = s[:k] + part('extra.css') + s[k:]
s = s.replace('<html lang="de">', '<html lang="en-GB">').replace('Zum Inhalt springen', 'Skip to content').replace('>Schließen<', '>Close<')
for bad in ['CEATEC', 'ceatec.de', 'Wurmlingen', 'Tuttlingen', 'ceScene', '"ce-pre"']:
    if bad in s: print("LEFT", bad, [s[m-80:m+40] for m in [s.find(bad)]])
open(os.path.join(K, 'medasil.src.html'), 'w', encoding='utf-8').write(s)
print('assembled', len(s))
