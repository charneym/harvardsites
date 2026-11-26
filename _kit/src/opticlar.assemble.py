# Opticlar (Albert Waeschle Ltd) home-only concept build.
# Base: _kit/src/emaled.src.html (light-ground medtech home build). Regions are swapped here; the big file is never hand-edited.
# Run: python3 _kit/src/opticlar.assemble.py && node _kit/build.js _kit/src/opticlar.src.html opticlar/index.html
import json, os, re
HERE = os.path.dirname(os.path.abspath(__file__))
SP = os.environ.get('OPT_SCRATCH', '')
src = open(os.path.join(HERE, 'emaled.src.html'), encoding='utf-8').read()
L = json.load(open(os.path.join(HERE, 'opticlar.logo.json')))
VB = '0 -32 741 158'
AR = '741/158'


def logo(extra=''):
    return ('<svg %sviewBox="%s" aria-hidden="true"><path fill="currentColor" d="%s"/>'
            '<path fill="currentColor" opacity=".48" d="%s"/><path fill="currentColor" d="%s"/></svg>') % (extra, VB, L['outer'], L['inner'], L['txt'])


def region(name, new):
    global src
    for a, b in (('/*<R:%s>*/' % name, '/*</R:%s>*/' % name), ('<!--<R:%s>-->' % name, '<!--</R:%s>-->' % name)):
        i = src.find(a)
        if i >= 0:
            j = src.find(b, i)
            assert j > 0, name
            src = src[:i] + a + new + src[j:]
            return
    raise SystemExit('no region ' + name)


# ---------------------------------------------------------------- palette: global colour swap of the base's hard-coded values
SWAP = [('#0b1450', '#1f2326'), ('#0d1858', '#23272b'), ('#121f66', '#2a2f33'), ('#111da3', '#007a72'), ('#3e79bf', '#00aa9f'),
        ('#4a5672', '#535b61'), ('#7d8aa6', '#8a9397'), ('#9dbcf0', '#3cc7bb'), ('#ebf3f6', '#eef0f0'), ('#e2edf2', '#e5e8e8'),
        ('#d7e5ec', '#dadede'), ('#b7c3de', '#b4bcc0'), ('235,243,246', '238,240,240'), ('11,20,80', '31,35,38'),
        ('17,29,163', '0,122,114'), ('62,121,191', '0,170,159')]
for a, b in SWAP:
    src = re.sub(re.escape(a), b, src, flags=re.I)

src = src.replace('<html lang="de">', '<html lang="en-GB">')
src = src.replace('Zum Inhalt springen', 'Skip to content')
src = src.replace('"Schließen"', '"Close"').replace('"Menü"', '"Menu"').replace('>Schließen<', '>Close<')
src = src.replace('aria-label="Hauptnavigation"', 'aria-label="Main navigation"')

region('meta', '''<title>Opticlar — LED diagnostic instruments, Poole, Dorset</title>
<meta name="description" content="Opticlar, the diagnostic instrument brand of Albert Waeschle Ltd in Poole, Dorset: TrueTone LED ophthalmoscopes, otoscopes, diagnostic sets, laryngoscopes, loupes and headlights.">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#eef0f0">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%231f2326'/%3E%3Ccircle cx='32' cy='32' r='20' fill='none' stroke='%2300aa9f' stroke-width='5'/%3E%3C/svg%3E">''')

region('root', ''':root{
  --ink:#eef0f0;--inkr:238,240,240;--boner:31,35,38;--accr:0,122,114;--ink2:#e5e8e8;--ink3:#dadede;--deep:#eef0f0;
  --bone:#1f2326;--bone2:#23272b;--bone3:#2a2f33;
  --stone:#535b61;--stoneD:#b4bcc0;
  --acc:#00aa9f;--accL:#007a72;--accD:#3cc7bb;--or:#00aa9f;--gold:#00aa9f;
  --hair:rgba(31,35,38,.15);--hairD:rgba(255,255,255,.18);
  --disp:'Archivo','Helvetica Neue',Arial,sans-serif;
  --serif:'Archivo','Helvetica Neue',Arial,sans-serif;
  --sans:'Open Sans','Helvetica Neue',Arial,system-ui,sans-serif;
  --mono:'Open Sans','Helvetica Neue',Arial,system-ui,sans-serif;
  --deco:'Archivo',system-ui,sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}''')

region('logocss', '''.brand{display:flex;align-items:center;gap:14px;height:64px;color:var(--bone)}
.brand .lg{display:block;height:30px;aspect-ratio:%s}
.brand .lg svg{display:block;width:100%%;height:100%%;overflow:visible}
@media (max-width:420px){.brand .lg{height:26px}}''' % AR)

region('seen', '<script>try{if(sessionStorage.getItem("opticlar-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>')

region('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <span class="wm"><span class="lg">%s</span><span class="tg">Optimal visual clarity as standard</span></span>
  </div>
  <span class="lab pl">Diagnostic instruments<span class="nomob"> · Poole, Dorset</span></span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''' % logo('role="img" aria-label="Opticlar" ').replace('aria-hidden="true">', '>', 1))

region('brand', '<a href="#/" class="brand" id="brand" aria-label="Opticlar, home"><span class="lg">%s</span></a>' % logo())

region('navmenu', '''<nav class="nav" aria-label="Main navigation">
    <a class="nl ul" href="#/instruments">Instruments</a>
    <a class="nl ul" href="#/aftersales">Aftersales</a>
    <a class="nl ul" href="#/company">Company</a>
    <a class="nl ul" href="#/news">News</a>
    <a class="btn" href="#/contact">Contact <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
    <li><a href="#/instruments">Instruments</a></li>
    <li><a href="#/aftersales">Aftersales</a></li>
    <li><a href="#/company">Company</a></li>
    <li><a href="#/news">News</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Address</span><br>11 Balena Close, Creekmoor, Poole BH17 7DB</div>
    <div><span class="lab">Telephone</span><br><a href="tel:+441202601177">+44 (0)1202 601177</a><br><a href="tel:08000151630">Freephone 0800 015 1630</a></div>
  </div>
</div>''')

region('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Opticlar</span><div class="t" id="xtt"></div></div>''')

region('site', 'var SITE="Opticlar";\nvar PK="opticlar";')

FLOGO = logo().replace("'", "\\'")
region('content', r'''var FONTS=['300 1em "Archivo"','400 1em "Archivo"','italic 400 1em "Archivo"','500 1em "Archivo"','400 1em "Open Sans"','600 1em "Open Sans"','700 1em "Open Sans"'];
/* contact: opticlar.co.uk footer and Contact Us page (November 2026). No email address is published: enquiries go through their form. */
var TEL="+441202601177",TELT="+44 (0)1202 601177",FREE="08000151630",FREET="0800 015 1630";
var OW="https://www.opticlar.co.uk/";
var FORM=OW+"contact-us/";
/* the five Opticlar ranges plus wall units (opticlar.co.uk > Product Range and each category page). Colour = the range colour on their site.
   [range, colour, title, detail, url] */
var PROD=[
 ["Vision Med","#00aa9f","Otoscopes, ophthalmoscopes and diagnostic sets","For the ENT, dermoscopy and ophthalmology markets: pocket and standard otoscopes and ophthalmoscopes, retinoscopes, slit lamp, D-Scope dermatoscopes and specula, on battery or rechargeable handles.",OW+"product-category/vision-med/"],
 ["Vision Air","#008fd5","Laryngoscopes","Macintosh, Macintosh Flexi and Miller blades, reusable and disposable, with handles, rechargers and spares.",OW+"product-category/vision-air/"],
 ["Vision Mag","#8f75b4","Loupes and loupe lights","DFK, SLH and SLT prismatic loupes, loupe lights and the Easy360 Plus mobile phone adaptor.",OW+"product-category/vision-mag/"],
 ["Vision Max","#eb9500","Headlights and examination lights","Headband and spectacle headlights, and the Flexi 3 and Flexi 10 examination lights, mains or mains and rechargeable.",OW+"product-category/vision-max/"],
 ["Vision Vet","#e01811","Veterinary instruments","Diagnostic instruments for veterinary practice, shown by Opticlar at the VPMA-SPVS Congress and the VÖK Small Animal Congress in Salzburg.",OW+"product-category/vision-vet/"],
 ["Wall units","#8a9397","Wall and trolley mounted systems","Wall and trolley mounted diagnostic stations for otoscopes, ophthalmoscopes and retinoscopes, always charged and to hand.",OW+"product-category/wall-units/"]];
/* outside links: MEDICA 2026 exhibitor directory, then their own news (opticlar.co.uk > News) */
var BLOG=[
 ["MEDICA 2026","Albert Waeschle Ltd of Poole in the MEDICA 2026 exhibitor directory, Düsseldorf","https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3073668"],
 ["Optometry","Supporting the Cardiff Optometry Society’s annual Eyeball, in aid of Guide Dogs and Maggie’s",OW+"supporting-the-cardiff-annual-eyeball-2019-event-with-an-opticlar-prize/"],
 ["Audiology","Opticlar at the British Tinnitus Association’s annual conference",OW+"british-tinnitus-annual-conference-2018/"],
 ["Dental","Fourteen Opticlar microscopes installed to train students at Liverpool Dental University",OW+"liverpool-dental-university/"]];
var SHEETS=[];

''' + "var FLOGO='" + FLOGO + "';")

VIEWS = r'''/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prod(){return '<ul class="pfr mip">'+PROD.map(function(c){
  return '<li><span class="lab tg"><i class="rc" style="background:'+c[1]+'"></i>'+esc(c[0])+'</span><h3>'+esc(c[2])+'</h3><p>'+esc(c[3])+'</p><a class="lab lk ul" href="'+c[4]+'" target="_blank" rel="noopener">View range '+ARR+'</a></li>'}).join("")+'</ul>'}
function blog(){return '<ul class="nws">'+BLOG.map(function(n){return '<li><a href="'+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">Read '+ARR+'</span></a></li>'}).join("")+'</ul>'}
/* aftersales (opticlar.co.uk > Aftersales, Repairs and Calibration, Warranty Registration, and the three home-page panels) */
function caps(){var C=[
  ["Compatibility","International brand compatibility","Opticlar equipment is developed to work with other diagnostic brands. Whatever make you have in practice, there is an Opticlar solution for upgrades, spares and accessories.",'<path d="M10 20H30V36H10Z"/><path d="M26 20H46V36H26Z"/><path class="a" d="M26 24V32M30 24V32"/>'],
  ["Repairs","Repairs and calibration in Poole","All repairs and calibration are carried out at the Poole Distribution Centre, free of charge if a defect occurs within the warranty period.",'<path d="M28 28m-18 0a18 18 0 1 0 36 0a18 18 0 1 0-36 0"/><path class="a" d="M28 16V28L36 33"/>'],
  ["Warranty","Five years, and ten on the LED","An industry-leading five-year manufacturer’s warranty on all instruments and ten years on LED light sources, subject to registration.",'<path d="M28 6L46 13V28C46 39 38 46 28 50C18 46 10 39 10 28V13Z"/><path class="a" d="M20 28L26 34L37 22"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
var STUD=["Ophthalmic","Medical","Dental","Veterinary","Chiropractic"];
var POWER=["Pocket handle","ADAPT handle","E-Lithium handle","Single and twin port chargers","Wall and trolley systems"];
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>LED diagnostic instruments<span class="nomob"> · Poole, Dorset</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Optimal visual clarity,</span> <span class="l"><em>as standard.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Opticlar ophthalmoscopes, otoscopes and diagnostic sets bring together miniaturised optics, precision engineering and an advanced LED light source, for medical, dental and veterinary practitioners.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/instruments">See the instruments '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Welcome to Opticlar</span>'+
   '<h2 class="txt" id="mani">Diagnostic instruments made to <span class="nw">an entirely new</span> <span class="nw">benchmark standard:</span> <span class="nw">high quality,</span> <span class="nw">eminently affordable</span> <em class="nw">and backed by</em> <em class="nw">specialist service.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">500×</span><p class="k">longer life than a typical halogen bulb: Opticlar LEDs last in excess of 20,000 hours</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">60 h</span><p class="k">of battery life with C or AA cells, against 20 hours on ADAPT rechargeable handles</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10 yrs</span><p class="k">warranty on the LED light source, and five years on every instrument</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">TrueTone LED</span><h2 class="d3"><span class="nw">From the LED</span> <em class="nw">to the retina.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Light</span><span>Optics</span><span>Power</span><span>Life</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Light, not heat.</span></h2><p>At the heart of every instrument is an advanced LED that outperforms halogen and xenon. Energy goes into illumination rather than heat, tuned to the optimum level for each procedure.</p></article>'+
     '<article class="step"><h2><span class="nw">More lenses,</span> <span class="nw">filters and apertures.</span></h2><p>Opticlar specialist ophthalmic instruments carry more lenses, filters and apertures than the average range, with world-class miniaturised optics and the same TrueTone LED.</p></article>'+
     '<article class="step"><h2><span class="nw">Hours of light</span> <span class="nw">on one charge.</span></h2><p>Up to 60 hours on C cells, 60 hours on AA, 20 hours on ADAPT rechargeable and 10 hours on E-Lithium handles. Multi-voltage, so there is no stock of bulbs to hold.</p></article>'+
     '<article class="step"><h2><span class="nw">Built to</span> <span class="nw">outlast the bulb.</span></h2><p>Beyond 20,000 hours, 500 times longer than a typical halogen bulb, and as bright at the end as at the start. Hence a ten-year warranty on the LED light source.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="instruments" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Instruments</span><h2 class="d2 split"><span class="nw">Five ranges,</span> <em class="nw">one standard.</em></h2></div><p data-r>From the pocket ophthalmoscope to the wall-mounted diagnostic station: premium optics and LED light at extremely competitive prices, for medical and veterinary practice.</p></div>'+
   prod()+
  '</div></section>'+

  '<section class="sec light" id="aftersales" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aftersales</span><h2 class="d2 split"><span class="nw">Looked after</span> <em class="nw">in Poole.</em></h2></div><p data-r>Spares, upgrades, repairs and calibration come from the same team that supplies the instruments, with a warranty that covers the light source for a decade.</p></div>'+
   caps()+
   '<div class="bk lbk"><span class="lab kick" data-r>Power</span><p class="cr" data-r>'+POWER.map(function(c){return '<span>'+esc(c)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
   '<div class="bk lbk bk2"><span class="lab kick" data-r>Student ranges</span><p class="cr" data-r>'+STUD.map(function(c){return '<span>'+esc(c)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">A Dorset company</span> <em class="nw">since 1982.</em></h2></div><p data-r>Opticlar is a registered trading name of Albert Waeschle Ltd, incorporated in November 1982 and based at Creekmoor in Poole.</p></div>'+
   '<div class="uf">'+
    '<div class="uf-p"><span class="lab" data-r>Directors</span>'+
     '<ul class="dirs"><li data-r><span class="dn">Martin Albert Waeschle</span><span class="dr">Director</span></li><li data-r><span class="dn">Albert Karl Waeschle</span><span class="dr">Director</span></li></ul>'+
     '<blockquote class="uf-q" data-r>“Our brand OPTICLAR was created to signify premium quality and high performance whilst maintaining competitive prices.”<cite>Albert Waeschle Ltd</cite></blockquote></div>'+
    '<div class="uf-s">'+
     '<div class="site"><span class="lab" data-r>Head office</span><p data-r>11 Balena Close, Creekmoor<br>Poole, Dorset BH17 7DB</p></div>'+
     '<div class="site"><span class="lab" data-r>Dealers</span><p data-r>A network of partners chosen for service, technical knowledge and aftersales support, many for over 30 years</p></div>'+
     '<div class="site"><span class="lab" data-r>Specialities</span><p data-r>Audiology, general practice and veterinary dealers across the UK</p></div>'+
     '<div class="site"><span class="lab" data-r>Catalogue</span><p data-r><a class="ul" href="'+OW+'opticlar-catalogue/" target="_blank" rel="noopener">The Opticlar catalogue</a></p></div>'+
    '</div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Out where</span> <em class="nw">clinicians meet.</em></h2></div><p data-r>From optometry balls and audiology conferences to veterinary congresses, and this November the MEDICA trade fair in Düsseldorf.</p></div>'+
   '<div class="ev">'+
    '<span class="lab kick" data-r>Latest</span>'+
    '<dl>'+
     '<div><dt class="lab" data-r>Trade fair</dt><dd data-r>MEDICA 2026, Düsseldorf</dd></div>'+
     '<div><dt class="lab" data-r>Dates</dt><dd data-r>16 to 19 November 2026</dd></div>'+
     '<div><dt class="lab" data-r>Exhibitor</dt><dd data-r>Albert Waeschle Ltd, Poole</dd></div>'+
     '<div><dt class="lab" data-r>Brand</dt><dd data-r>Opticlar diagnostic instruments</dd></div>'+
    '</dl>'+
   '</div>'+
   '<span class="lab kick sub-l pr" data-r>Read more</span>'+
   blog()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Talk to</span> <em class="nw">Opticlar.</em></h2>'+
   '<p class="sub" data-r>A question about an instrument, a spare for another brand, or a repair: call free or send an enquiry, and the Poole team will help you choose.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+FORM+'" target="_blank" rel="noopener">Send an enquiry '+ARR+'</a><a class="btn" href="tel:'+FREE+'">Freephone '+FREET+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Albert Waeschle Ltd<br>11 Balena Close, Creekmoor<br>Poole, Dorset BH17 7DB</p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Freephone <a class="ul" href="tel:'+FREE+'">'+FREET+'</a></p></div>'+
    '<div><span class="lab" data-r>Where to buy</span><p data-r><a class="ul" href="'+OW+'dealers/" target="_blank" rel="noopener">Find a dealer</a><br><a class="ul" href="'+OW+'aftersales/warranty-registration/" target="_blank" rel="noopener">Register a warranty</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Albert Waeschle Ltd<br>11 Balena Close, Creekmoor, Poole BH17 7DB</div>'+
   '<div class="c"><span class="lab">Telephone</span><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><a class="ul" href="tel:'+FREE+'">Freephone '+FREET+'</a></div>'+
   '<div class="c"><span class="lab">Ranges</span>Vision Med · Vision Air<br>Vision Mag · Vision Max<br>Vision Vet · Wall units</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/instruments">Instruments</a><br><a class="ul" href="#/aftersales">Aftersales</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
  '</div><div class="fwm" aria-hidden="true">'+FLOGO+'</div>'+
  '<div class="legal"><span class="lab">© 2026 Albert Waeschle Ltd · Opticlar</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",instruments:"instruments",aftersales:"aftersales",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Opticlar — LED diagnostic instruments, Poole, Dorset",x:"Home"};
}
'''
# keep the base router tail (secEl, secGo, click/hashchange handlers) unchanged
i = src.find('/*<R:views>*/'); j = src.find('/*</R:views>*/')
old = src[i:j]
k = old.find('function secEl(')
region('views', VIEWS + old[k:])

# ---------------------------------------------------------------- field: their own photo of the Opticlar pocket ophthalmoscope
f0 = src.find('/*<R:field>*/'); f1 = src.find('/*</R:field>*/')
fld = src[f0 + len('/*<R:field>*/'):f1]
fld = fld[fld.find('*/') + 2:]
fld = fld.replace('var BG="#eef0f0",IW=1274,IH=697,TH=0;', 'var BG="#eef0f0",IW=256,IH=1013,TH=0;')
fld = fld.replace('rgba(238,240,240,0)', 'rgba(238,240,240,0)')
region('field', '''/* ================= HERO FIELD: Opticlar's own studio photograph of their black pocket ophthalmoscope (opticlar.co.uk product image
   100.010.025, 1100x1100, the instrument cropped from the pouch beside it). The white studio ground was multiplied to the page ink
   #EEF0F0 exactly (lossless), so the instrument stands on the page with its own soft shadow and no box or seam (DJ/DP). Whole and
   centred in the open area right of the text, at least 130px clear of the headline (DP/DO), never upscaled past its native size.
   Slow drift, no pointer (CZ). On phones it sits in the band above the eyebrow (CW). ================= */''' + fld)

# ---------------------------------------------------------------- story
STORY = open(os.path.join(HERE, 'opticlar.story.js'), encoding='utf-8').read()
region('story', STORY)
SCENECSS = open(os.path.join(HERE, 'opticlar.scene.css'), encoding='utf-8').read()
region('scenecss', SCENECSS)

# ---------------------------------------------------------------- tail CSS: logo ratios, range dots, overrides
src = src.replace('aspect-ratio:196/74', 'aspect-ratio:' + AR)
EXTRA = open(os.path.join(HERE, 'opticlar.extra.css'), encoding='utf-8').read()
src = src.replace('</style>\n</head>', EXTRA + '\n</style>\n</head>', 1)

# nssfix: the kit's file, as-is
a = src.find('<script>/*R:nssfix*/'); b = src.find('</script>', a) + len('</script>')
src = src[:a] + open(os.path.join(HERE, '..', 'lib', 'nssfix.js'), encoding='utf-8').read().strip() + src[b:]

src = re.sub(r'/\* ===== EMALED: palette.*?===== \*/', '/* ===== base palette (overridden below) ===== */', src, flags=re.S)
src = src.replace('/* ===== EMALED additions ===== */', '/* ===== base additions ===== */')
for w in ['EMALED', 'EMA-LED', 'Obernburg', 'emaled']:
    for m in re.finditer(w, src):
        print('LEFTOVER', w, src[max(0, m.start() - 60):m.start() + 40].replace('\n', ' '))
open(os.path.join(HERE, 'opticlar.src.html'), 'w', encoding='utf-8').write(src)
print('ok', len(src))
