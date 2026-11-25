# Assemble /_kit/src/divbio.src.html from the wavetronica home-only build (shared plumbing only: loader, router,
# build-out, gates) with Diversified Biotech's own content, palette, hero render and story. Run: python3 divbio.assemble.py divbio-parts
import re, sys, os
K = os.path.dirname(os.path.abspath(__file__))
P = sys.argv[1] if len(sys.argv) > 1 else os.path.join(K, 'divbio-parts')
if not os.path.isabs(P): P = os.path.join(K, P)
s = open(os.path.join(K, 'wavetronica.src.html'), encoding='utf-8').read()
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

region('meta', '''<title>Diversified Biotech — laboratory labels and Planet-Safe® plant-based labware</title>
<meta name="description" content="Diversified Biotech, Inc. of Dedham, Massachusetts, has designed and made research products since 1984: Cryo-Tags® and Tough-Tags® labels, sample cooling, liquid handling and Planet-Safe®, 100% plant-based cell cultureware.">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#091723">
<link rel="icon" href="fav.png">''', html=True)
region('fonts', '/*@fonts Barlow Semi Condensed:300,400,500; Barlow:400,500; IBM Plex Mono:400,500*/')
region('root', ''':root{
  --ink:#091723;--inkr:9,23,35;--boner:242,245,247;--accr:90,169,230;--ink2:#0c1d2c;--ink3:#12283a;--deep:#06111b;
  --bone:#f2f5f7;--bone2:#e6ecf0;--bone3:#d9e7f3;
  --stone:#9eb0bf;--stoneD:#4a5c6b;
  --acc:#1172b7;--accL:#5aa9e6;--accD:#0f66a4;--rd:#0f66a4;--rdL:#d9e7f3;--gy:#8a9bab;
  --grn:#3fc489;--grnD:#0f7a4a;
  --flame:#5aa9e6;--flameL:#d9e7f3;
  --hair:rgba(242,245,247,.14);--hairD:rgba(9,23,35,.15);
  --disp:'Barlow Semi Condensed','Helvetica Neue',system-ui,sans-serif;
  --serif:'Barlow Semi Condensed','Helvetica Neue',system-ui,sans-serif;
  --sans:'Barlow',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,'SFMono-Regular',monospace;
  --deco:'Barlow Semi Condensed','Helvetica Neue',system-ui,sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1560px}}''')
region('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:#091723}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
# site layer: keep the shared type/weight layer, drop WaveTronica's palette note and components, write Diversified Biotech's
i = s.index('/* ===== WaveTronica:'); j = s.index('/* ===== WaveTronica components ===== */'); k = s.index('</style>', j)
layer = s[i:j].split('\n', 1)[1]
layer = layer.replace('#0a1a2e', '#091723').replace('#0e64bf', '#1172b7').replace('#124473', '#0c1d2c').replace('#5fa6ee', '#5aa9e6').replace('#0e5cb0', '#0f66a4')
layer = layer.replace('@keyframes wtRise', '@keyframes dbRise').replace('animation:wtRise', 'animation:dbRise')
s = s[:i] + '/* ===== Diversified Biotech: palette sampled from their Planet-Safe® logo and site (blue #1172b7 type and globe, green #23b574 globe, magenta #d41c5c heart and slogans) and the black Diversified Biotech wordmark. A deep blue-black ink, the brand blue lifted to #5aa9e6 on the ink (#1172b7 on the light ground), the globe green for emphasis (#3fc489 on ink, #0f7a4a on light), magenta only in the culture medium. Barlow Semi Condensed display (after their condensed wordmark), Barlow and IBM Plex Mono. Square corners (DE). */\n' + layer + part('site.css') + s[k:]
s = s.replace('#0a1a2e', '#091723')
region('seen', '<script>try{if(sessionStorage.getItem("divbio-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>', html=True)
region('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <div class="mk"><img class="plogo" src="logo-w.png" alt="" width="320" height="104"></div>
    <div class="wm" hidden><span></span></div>
  </div>
  <span class="lab pl">Laboratory labels<span class="nomob"> · Planet-Safe® labware · Dedham, MA</span></span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''', html=True)
region('brand', '<a href="#/" class="brand" id="brand" aria-label="Diversified Biotech, home"><img class="lgo" src="logo-w.png" alt="Diversified Biotech" width="320" height="104"></a>', html=True)
region('navmenu', '''<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/planetsafe">Planet-Safe®</a>
    <a class="nl ul" href="#/products">Products</a>
    <a class="nl ul" href="#/sustainability">Sustainability</a>
    <a class="nl ul" href="#/news">News</a>
    <a class="btn" href="#/contact">Contact <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
    <li><a href="#/planetsafe">Planet-Safe®</a></li>
    <li><a href="#/products">Products</a></li>
    <li><a href="#/sustainability">Sustainability</a></li>
    <li><a href="#/news">News</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Address</span><br>65 Commerce Way, Dedham, MA 02026</div>
    <div><span class="lab">Write to us</span><br><a href="mailto:info@divbio.com">info@divbio.com</a></div>
  </div>
</div>''', html=True)
region('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Diversified Biotech</span><div class="t" id="xtt"></div></div>''', html=True)
region('site', 'var SITE="Diversified Biotech";\nvar PK="divbio";')
region('content', part('content.js'))
a = s.index('/*<R:views>*/') + len('/*<R:views>*/'); b = s.index('/*</R:views>*/')
old = s[a:b]; tail = old[old.index('\n', old.index('var SECS=')) + 1:]
tail = tail.replace('WaveTronica — RF coils and MRI hardware for metabolic cancer imaging', 'Diversified Biotech — laboratory labels and Planet-Safe® plant-based labware')
s = s[:a] + part('views.js') + tail + s[b:]
region('field', part('field.js'))
region('story', part('story.js'))
# Safari dash fix: the kit's lib/nssfix.js, as-is (wavetronica already carries it inline; refresh it from the kit)
m = re.search(r'<script>/\*R:nssfix\*/', s)
if m:
    i = m.start(); j = s.index('</script>', i) + len('</script>')
    s = s[:i] + open(os.path.join(K, '..', 'lib', 'nssfix.js'), encoding='utf-8').read().strip() + s[j:]
low = s.lower()
left = [low[max(0, x.start() - 40):x.start() + 40] for x in re.finditer('wavetronica|miracle|geldermalsen|wtrise|wt-', low)]
assert not left, left[:6]
open(os.path.join(K, 'divbio.src.html'), 'w', encoding='utf-8').write(s)
print('ok', len(s))
