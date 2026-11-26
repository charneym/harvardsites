#!/usr/bin/env python3
"""Freek home-only build (WAVE_BRIEF CURRENT STANDARD): reuses the charlesausten v4 source (CSS + motion script) with Freek's
own brand, photos and German copy. Writes _kit/src/freek.src.html."""
import pathlib, re, html
H = pathlib.Path(__file__).resolve().parent
K = H.parent.parent
ref = (K / 'src/charlesausten.src.html').read_text().split('\n')
css = '\n'.join(ref[15:299])          # lines 16-299 of the reference (inside the 2nd <style>)
js = '\n'.join(ref[443:539])          # the motion script body (lines 443-539)
css = re.sub(r'/\*.*?\*/', '', css, flags=re.S)
css = re.sub(r'^\.(cawm|cam|cadv|catx)[^\n]*\n', '', css, flags=re.M)
css = re.sub(r'^@media \(max-width:420px\)\{\.cam[^\n]*\n', '', css, flags=re.M)
js = re.sub(r'/\*.*?\*/', '', js, flags=re.S)
FAV = (pathlib.Path('/tmp/claude-0/-home-user-harvardsites/56ca03b9-ee5a-5849-b017-dd96a50c3a79/scratchpad/fk/fav.txt')).read_text().strip() if pathlib.Path('/tmp/claude-0/-home-user-harvardsites/56ca03b9-ee5a-5849-b017-dd96a50c3a79/scratchpad/fk/fav.txt').exists() else (H / 'fav.txt').read_text().strip()
(H / 'fav.txt').write_text(FAV)

def rep(s, a, b, n=1):
    assert s.count(a) == n, (a[:60], s.count(a)); return s.replace(a, b)

# ---------- CSS ----------
css = '/* Freek */\n' + css
#css = re.sub(r'/\* STRUCTURE v3.*?\*/', '/* Freek (2026-11-26): their own light brand: white ground, logo red #E10000 (buttons, links, the red band), dark red #810000,\n   their light greys #F1F1F1 / #DBDBDB (the ground of their product photography) and graphite text #333. */', css, count=1, flags=re.S)
css = re.sub(r':root\{.*?\n\}', ''':root{
  --bg:#ffffff;--panel:#f1f1f1;--panel2:#dbdbdb;--text:#333333;--head:#1e1e1e;--mute:#5c5c5c;
  --acc:#e10000;--accD:#b30000;--hair:rgba(30,30,30,.14);
  --ink:#ffffff;--deep:#ffffff;--bone:#1e1e1e;--bone2:#333333;--stone:#5c5c5c;--stoneD:#5c5c5c;--accL:#e10000;
  --disp:'PT Sans','Segoe UI',system-ui,sans-serif;--sans:'Open Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --gut:clamp(16px,4vw,64px);--maxw:1280px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(52px,6.4vw,92px);
}''', css, count=1, flags=re.S)
css = rep(css, '.hdr.solid .cam{height:36px}.hdr.solid .cadv{height:28px}.cam,.cadv{transition:height .35s}',
          '.brand img{display:block;height:40px;width:auto;transition:height .35s}.hdr.solid .brand img{height:34px}')
css = rep(css, 'box-shadow:0 6px 24px rgba(31,35,40,.08)', 'box-shadow:0 6px 24px rgba(30,30,30,.08)')
# hero: text left, their product photo right (the spread is symmetric; it sits in its own column on its own flat grey ground)
css = rep(css, '.hero{display:grid;grid-template-columns:minmax(0,1.04fr) minmax(0,1fr);', '.hero{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.06fr);')
css = rep(css, '.hero-ph{margin:0;background:var(--panel);', '.hero-ph{grid-column:2;grid-row:1;margin:0;background:#dbdbdb;')
css = rep(css, 'object-position:50% 100%}', 'object-position:50% 50%}')
css = rep(css, '.hero-tx{display:flex;flex-direction:column;justify-content:center;min-height:0;padding:clamp(28px,4vw,64px) var(--side) clamp(28px,4vw,64px) clamp(32px,5vw,80px)}',
          '.hero-tx{grid-column:1;grid-row:1;display:flex;flex-direction:column;justify-content:center;min-height:0;padding:clamp(28px,4vw,64px) clamp(32px,4.4vw,72px) clamp(28px,4vw,64px) var(--side)}')
css = rep(css, '.hero h1{font-size:clamp(36px,4.1vw,62px);line-height:1.06;letter-spacing:-.015em;max-width:13ch}',
          '.hero h1{font-size:clamp(38px,4.3vw,66px);line-height:1.04;letter-spacing:-.01em;max-width:16em}')
css = rep(css, '.hero-tx{padding:22px var(--side) 22px}', '.hero-tx{grid-column:1;grid-row:2;padding:22px var(--side) 22px}.hero-ph{grid-column:1;grid-row:1}')
css = rep(css, '.hero h1{max-width:none;font-size:clamp(30px,8.4vw,40px)}', '.hero h1{max-width:none;font-size:clamp(31px,8.6vw,42px)}')
css = rep(css, 'border-left:1px solid rgba(255,255,255,.35)}\n.strip li::before', 'border-left:1px solid rgba(255,255,255,.4)}\n.strip li::before')
# the blue band becomes their red band
css = css.replace('.blue', '.band')
css = rep(css, '.frame figcaption{position:absolute;left:16px;bottom:14px;font:500 15px/1.3 var(--disp);color:var(--head);background:rgba(255,255,255,.92);padding:6px 10px}',
          '.frame figcaption{position:absolute;left:16px;bottom:14px;font:400 15px/1.3 var(--disp);color:var(--head);background:rgba(255,255,255,.94);padding:6px 10px}')
css = rep(css, '#pre .cawm{color:#111;transform-origin:50% 50%}', '#pre .plk img{display:block;width:344px;height:auto;max-width:76vw}')
css = rep(css, '#pre .catx{gap:10px}#pre .cam{height:64px}#pre .cadv{height:52px}#pre .catx b{font-size:23px}#pre .catx i{font-size:20px}\n', '')
css = rep(css, '@media (max-width:420px){#pre .cam{height:48px}#pre .cadv{height:40px}#pre .catx b{font-size:17px}#pre .catx i{font-size:15px}}\n', '')
css = rep(css, '#pre .wm,#pre .wm *{overflow:visible!important}', '#pre .wm,#pre .wm *{overflow:visible!important;clip-path:none!important}')
css += '''
/* ---- Freek additions ---- */
h1,h2,h3{font-weight:700;hyphens:manual}
p,dd,li,figcaption,blockquote{hyphens:auto;-webkit-hyphens:auto;overflow-wrap:break-word}
.nl,.btn,.lab,.burger,.mm li a,.strip,.rail span,.ranges .dv,.more,.addr dt,.ftr .ft,.kv dt{font-weight:400}
.btn{font-weight:700}
.nl{white-space:nowrap}
@media (max-width:1120px){.nav .nl,.nav .btn{display:none}.burger{display:inline-flex}}
@media (max-width:420px){.brand img{height:32px}.hdr.solid .brand img{height:30px}}
@media (min-width:861px){.gal{grid-template-columns:repeat(3,minmax(0,1fr))}}
.gal .ph{aspect-ratio:16/10;background:#dbdbdb}
.ranges h3 a{color:inherit;text-decoration:none}.ranges h3 a:hover{color:var(--acc)}
.band .sh p{color:#fff}
.qt{margin:clamp(28px,3vw,44px) 0 0;padding:clamp(20px,2.4vw,30px) 0 0;border-top:1px solid rgba(255,255,255,.55);display:grid;grid-template-columns:minmax(0,8fr) minmax(0,4fr);gap:12px 40px;align-items:end}
.qt p{font:400 clamp(21px,1.9vw,28px)/1.35 var(--disp);color:#fff;max-width:40ch}
.qt cite{font:400 16px/1.4 var(--sans);font-style:normal;color:#fff}
@media (max-width:860px){.qt{grid-template-columns:minmax(0,1fr)}}
.split2{display:grid;grid-template-columns:minmax(0,6fr) minmax(0,6fr);gap:clamp(28px,5vw,80px);align-items:center}
.uph{margin:0;position:relative;overflow:hidden;aspect-ratio:5/4;background:var(--panel)}
.uph .pi{position:absolute;inset:0}.uph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.uph figcaption{position:absolute;left:16px;bottom:14px;font:400 15px/1.3 var(--disp);color:var(--head);background:rgba(255,255,255,.94);padding:6px 10px}
.split2 .sub{margin-top:14px;max-width:52ch}
.kv{margin:clamp(20px,2.4vw,30px) 0 0;border-top:2px solid var(--acc)}
.kv div{display:grid;grid-template-columns:minmax(0,11em) minmax(0,1fr);gap:4px 24px;padding:12px 0;border-bottom:1px solid var(--hair)}
.kv dt{font:400 17px/1.4 var(--disp);color:var(--head)}.kv dd{margin:0;font-size:16.5px}
@media (max-width:860px){.split2{grid-template-columns:minmax(0,1fr)}}
@media (max-width:560px){.kv div{grid-template-columns:minmax(0,1fr)}}
.hist .yr{font-weight:700}
.hist h3 a{color:inherit;text-decoration:none;background:linear-gradient(var(--acc),var(--acc)) 0 100%/0 2px no-repeat;transition:background-size .35s cubic-bezier(.22,1,.36,1),color .2s}
.hist h3 a:hover{color:var(--acc);background-size:100% 2px}
.facts b{font-weight:700}
/* story frames never above 1.2x their 725px sources, incl. the 1.1 inner parallax scale */
.frames,.frame.mstep{max-width:790px}
.pinmode .frames{width:min(100%,790px,calc((100vh - 170px) * 1.25))}
.ftr{background:#262626;color:#dadada}
.ftr .legal{color:#bdbdbd}.ftr .legal a{color:#bdbdbd}
.addr dd a,.kv dd a{color:var(--acc)}
'''

# ---------- body ----------
body = (H / 'body.html').read_text()
ARR = '<svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>'
F = 'https://freek.de/produkte/'
RANGES = [
 ('Heizpatronen', 'Hochleistungs-, verdichtete (Spiral-), Kleinspannungs- und quadratische Heizpatronen, Heizplatten und heiße Oberflächen.', F+'heizpatronen/heizpatronen.php'),
 ('HotMicroCoil Heizelemente', 'MicroCoil-Düsenheizelemente, HotCoil-Wendelrohrpatronen, HotMicroCoil-Flächen-, Düsen- und Ersatz-Düsenheizungen.', F+'hotmicrocoil-heizelemente/hotmicrocoil-heizelemente.php'),
 ('Infrarotstrahler', 'Langwellige Keramikstrahler, mittel- und kurzwellige Quarzstrahler, ComfortSun für innen und außen.', F+'infrarotstrahler/infrarotstrahler.php'),
 ('Silikonheizmatten und Heizfolien', 'Silikon-Heizmatten, Kapton-(Polyimid-)Heizfolien und Polyester-Heizelemente bis 200&nbsp;°C.', F+'silikonheizmatten-und-heizfolien/silikonheizmatten-und-heizfolien.php'),
 ('Flächenheizelemente', 'Mikanit-Flächenheizelemente und Keramik-Heizbänder für Temperaturen über 200&nbsp;°C.', F+'flaechenheizelemente/flaechenheizelemente.php'),
 ('Rohrheizkörper', 'Flexible Rohrheizkörper (Heizschlangen), runde, Einschraub- und Rippenrohrheizkörper, Gussheizungen.', F+'rohrheizkoerper/rohrheizkoerper.php'),
 ('Heizbänder', 'UGL-Heizbänder in Edelstahl, MIKAPLAST, KERAPLAST-Keramik-Heizbänder und Motorstillstandsheizungen.', F+'heizbaender/heizbaender.php'),
 ('Fass- und Containerheizungen', 'Heizmäntel und Heizungen für Fässer und Container, auch für Lebensmittel zugelassen.', F+'fassheizungen-und-containerheizungen/fassheizungen-und-containerheizungen.php'),
 ('Thermofühler', 'Thermoelemente und Widerstandsfühler mit Farbkennzeichnung, Infrarotsensoren als Handmessgeräte.', F+'thermofuehler/thermofuehler.php'),
 ('Regler', 'Regelsystem der JC-Serie, Halbleiterrelais, Reglertischgerät und Mehrkanalreglereinheit.', F+'regler/regler.php'),
 ('Offenwendelige Heizelemente', 'Für Wäschetrockner in Serie und als Ersatz, für Querstrom- und Radialgebläse, Heizkreuze und Sonderkonstruktionen.', F+'offenwendelige-heizelemente/offenwendelige-heizelemente.php'),
 ('Zubehör', 'Leitungen, Schutzschläuche, Anschlussklemmen, Temperaturbegrenzer und -sicherungen.', F+'zubehoer/zubehoer.php'),
]
body = rep(body, 'RANGES', ''.join('<li><h3><a href="%s" target="_blank" rel="noopener">%s</a></h3><p>%s</p><a class="more" href="%s" target="_blank" rel="noopener">Zur Produktseite %s</a></li>' % (u, t, d, u, ARR) for t, d, u in RANGES))
NEWS = [
 ('2026-10', 'Okt. 2026', 'Freek auf der Fakuma 2026 in Friedrichshafen, Halle A2, Stand A2-2205', 'freek.de', 'https://freek.de/messen/messen.php'),
 ('2025-10', 'Okt. 2025', 'Freek stellt auf der K 2025 in Düsseldorf aus', 'K 2025', 'https://www.k-online.com/vis/v1/en/exhibitors/k2025.3006147'),
 ('2025-09-17', '17.09.2025', '75 Jahre Friedr. Freek GmbH: Tradition, Wandel und Zukunft in Familienhand', 'freek.de', 'https://freek.de/hot-news/artikel-75-jahre-freek-tradition-wandel-zukunft.php'),
 ('2025-03-20', '20.03.2025', '75 Jahre Heizelemente höchster Qualität', 'freek.de', 'https://freek.de/hot-news/artikel-75-jahre-heizelemente-hoechster-qualitaet.php'),
 ('2024-10-15', '15.10.2024', 'Freek schwerelos: wie unsere Heizelemente die Forschung auf der ISS befeuern', 'freek.de', 'https://freek.de/hot-news/artikel-freek-schwerelos-heizelemente-auf-der-iss.php'),
]
body = rep(body, 'NEWS', ''.join('<li><a href="%s" target="_blank" rel="noopener"><time datetime="%s">%s</time><h3>%s</h3><span class="src">%s %s</span></a></li>' % (u, dt, d, t, s, ARR) for dt, d, t, s, u in NEWS))

# ---------- script ----------
js = rep(js, 'var SECS={about:"about",story:"story",pumps:"pumps",technology:"technology",capabilities:"capabilities",heritage:"heritage",news:"news",contact:"contact"};',
         'var SECS={unternehmen:"about",about:"about",story:"story",team:"team",produkte:"produkte",anwendungen:"anwendungen",forschung:"forschung",news:"news",kontakt:"kontakt"};')
js = rep(js, 'if(innerWidth>980&&', 'if(innerWidth>1120&&')
js = rep(js, '$("#burgerLab").textContent=on?"Close":"Menu"', '$("#burgerLab").textContent=on?"Schließen":"Menü"')
js = rep(js, 'gsap.fromTo(".hero-ph",{clipPath:"inset(0 100% 0 0)"},{clipPath:"inset(0 0% 0 0)"', 'gsap.fromTo(".hero-ph",{clipPath:"inset(0 0 0 100%)"},{clipPath:"inset(0 0 0 0%)"')
js = rep(js, 'var lk=$(".cawm",pre)', 'var lk=$(".plk",pre)')
js = js.replace('charlesausten-pre', 'freek-pre')
js = rep(js, '.cap4 li,.site,.hist li', '.cap4 li,.qt,.kv div,.split2 .sub,.hist li')
js = rep(js, '$$(".gal .ph,.mstep")', '$$(".gal .ph,.mstep,.uph")')

head = '''<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<script>document.documentElement.classList.add("js");try{if(sessionStorage.getItem("freek-pre")==="1"||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("seen")}catch(e){}</script>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex,nofollow">
<title>Freek — Elektrische Heizelemente aus Menden seit 1950</title>
<meta name="description" content="Friedr. Freek GmbH, Menden: Heizpatronen, HotMicroCoil-Düsenheizungen, Infrarotstrahler, Heizbänder, Rohrheizkörper, Thermofühler und Regler für Kunststoffindustrie, Verpackung, Maschinenbau und Messtechnik.">
<meta name="theme-color" content="#ffffff">
<link rel="icon" type="image/png" href="data:image/png;base64,''' + FAV + '''">
<style>
/*@fonts PT Sans:400,700; Open Sans:400,600*/
</style>
<style>
''' + css + '''
</style>
</head>
<body>
'''
out = head + body + '\n<script>window.BUILDOUT={copy:{h:"So geht es weiter."}};</script>\n<!--@libs gsap ScrollTrigger SplitText lenis buildout-->\n<script>gsap.set(".xc",{yPercent:101});</script>\n<script>\n' + js + '\n</script>\n' + (K / 'lib/nssfix.js').read_text().rstrip('\n') + '\n</body>\n</html>\n'
for bad in ['Charles', 'Austen', 'Byfleet', 'pump', 'Pump', '0072bc']:
    assert bad not in out, (bad, out[max(0,out.find(bad)-200):out.find(bad)+60])
(K / 'src/freek.src.html').write_text(out)
print('wrote src/freek.src.html', len(out))
