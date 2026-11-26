/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">'+"Details"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Ansprechpartner</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* four service steps (bock-mf.de > Produkte > Service "ROBO – Maßgeschneiderte Lösungen", Unternehmen > Über uns) */
function caps(){var C=[
  ["Konstruktion","<span class=\"nw\">Von der technischen</span> <span class=\"nw\">Zeichnung an</span>","Wir übernehmen den kompletten Konstruktions- und Planungsprozess, mit neuester CAD-Technologie und einem Team, das planerisch, organisatorisch und technisch hochqualifiziert ausgebildet ist.",'<rect x="8" y="10" width="40" height="36"/><path d="M8 38H48M16 30L28 18L40 30"/><path class="a" d="M14 46V50M42 46V50M14 50H42"/>'],
  ["Fertigung","<span class=\"nw\">Gebaut</span> <span class=\"nw\">in Lüdenscheid</span>","Der Einsatz moderner Fertigungsmaschinen sichert Produktionsverfahren auf höchstem Niveau. Die robuste Bauweise unserer Maschinen erlaubt hohe Beanspruchung, die große Härte der Kaliber eine lange Lebensdauer.",'<circle cx="20" cy="28" r="10"/><circle cx="20" cy="28" r="3"/><circle cx="38" cy="28" r="10"/><circle cx="38" cy="28" r="3"/><path class="a" d="M2 28H8M50 28H54"/>'],
  ["Inbetriebnahme","<span class=\"nw\">Bis in</span> <span class=\"nw\">Ihr Werk</span>","Von der Fertigung Ihrer Maschine bis zur Inbetriebnahme in Ihrem Werk erhalten Sie alle Dienstleistungen aus einer Hand, für Kunden in allen Teilen der Welt.",'<rect x="10" y="22" width="36" height="24"/><path d="M10 22L28 10L46 22"/><path class="a" d="M22 36L27 41L36 30"/>'],
  ["Sonderlösungen","<span class=\"nw\">Standard,</span> <span class=\"nw\">auf Sie angepasst</span>","In der Hauptsache bauen wir standardisierte Maschinen und Lösungen, die wir jeweils individuell auf Kundenwunsch zu Sonderlösungen anpassen. Fordern Sie uns: Wir setzen Ihre Ideen um.",'<path d="M6 30H30"/><path class="a" d="M30 30L50 26V34Z"/><circle class="f" cx="18" cy="30" r="2.2"/><path d="M6 18H50M6 42H50"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Anspitz-, Hämmer- und Richtmaschinen<span class="nomob"> · Lüdenscheid</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Draht, Stangen, Rohre,</span> <span class="l"><em class="nw">präzise bearbeitet.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Seit 1966 baut die Maschinenfabrik Bock in Lüdenscheid Maschinen für die Draht- und Rohrindustrie. Kunden in allen Teilen der Welt setzen sie ein.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Unsere Maschinen '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Seit 1966 in Lüdenscheid</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Ein weltweit operierendes</span> <span class="nw">Familienunternehmen,</span> <em><span class="nw">führend bei Anspitzmaschinen</span> <span class="nw">mit unterschiedlichen</span> <span class="nw">Technologien.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1966</span><p class="k">gegründet in Lüdenscheid, seither Maschinen für die Draht- und Rohrindustrie</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">11</span><p class="k">Baureihen zum Anspitzen, Hämmern und Richten von Draht, Stangen und Rohren</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">12</span><p class="k">Länder mit eigenen Vertretungen, von Australien bis Brasilien</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Anspitzwalzmaschine Typ DSM</span><h2 class="d3"><span class="nw">Vom Drahtende</span> <em class="nw">zur Ziehangel.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Richten</span><span>Einführen</span><span>Anspitzen</span><span>Ziehen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Erst wird</span> <span class="nw">das Ende gerichtet.</span></h2><p>Als Sonderausstattung richtet ein Richtwerk das Drahtende auf 1 bis 2 Meter. Das erleichtert das Anspitzen und ist besonders für dicke Stahldrähte zu empfehlen.</p></article>'+
     '<article class="step"><h2><span class="nw">Zwischen</span> <span class="nw">die Kaliberwalzen.</span></h2><p>Das gerichtete Ende läuft zwischen zwei Walzen mit einer Reihe von Kalibern ein, beginnend beim größten. Individuelle Kalibrierungen sind möglich.</p></article>'+
     '<article class="step"><h2><span class="nw">Kaliber</span> <span class="nw">für Kaliber dünner.</span></h2><p>Von Kaliber zu Kaliber wird der Querschnitt kleiner. Kann der Draht nicht gedreht werden, übernimmt bei den Typen (+ v) ein zusätzliches vertikales Walzenpaar.</p></article>'+
     '<article class="step"><h2><span class="nw">Bereit für</span> <span class="nw">den Ziehstein.</span></h2><p>Das Ergebnis ist die Ziehangel: ein Ende, das durch den Ziehstein passt, damit Draht, Stange oder Rohr auf der Ziehmaschine oder Ziehbank gezogen werden kann.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split"><span class="nw">Anspitzen, Hämmern</span> <em class="nw">und Richten.</em></h2></div><p data-r>Wir produzieren umformende und spanende Anspitzmaschinen, Hämmer- und Richtmaschinen, dazu Ablaufhaspeln, Vereinzelungen und Zuführungen für Anspitzmaschinen.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="service" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Service</span><h2 class="d2 split"><span class="nw">Maßgeschneidert,</span> <em class="nw">aus einer Hand.</em></h2></div><p data-r>Neben der Produktion erstklassiger Maschinen für die Drahtbearbeitung bieten wir den kompletten Weg: von der technischen Zeichnung über die Fertigung bis zur Inbetriebnahme in Ihrem Werk.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Kompetenz in Draht-</span> <em class="nw">und Rohrbearbeitung.</em></h2></div><p data-r>Aus den Anfängen 1966 entwickelte sich ein weltweit tätiges Familienunternehmen mit Vertretungen in vielen Ländern und High-Tech-Produkten „Made in Germany“.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>Ihre Vorteile</span><ul>'+
     '<li data-r><b>Know-how</b>Ein Team, das planerisch, organisatorisch und technisch hochqualifiziert ausgebildet ist.</li>'+
     '<li data-r><b>Individualität</b>Wir bauen genau die Maschinen, die Sie benötigen. Ihre Anforderungen sind unser Anspruch.</li>'+
     '<li data-r><b>Persönliche Beratung</b>Persönlichkeit, Einfühlungsvermögen und technisches Gespür. Sprechen Sie mit uns.</li>'+
    '</ul></div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Vertretungen weltweit</span><p class="cr" data-r><span>Australien</span><span>Skandinavien</span><span>Türkei</span><span>Russland</span><span>Thailand</span><span>USA und Kanada</span><span>Mexiko</span><span>Brasilien</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News und Messen</span><h2 class="d2 split"><span class="nw">Zuletzt in Düsseldorf,</span> <em class="nw">auf der wire.</em></h2></div><p data-r>Alle zwei Jahre treffen Sie uns auf der wire in Düsseldorf, zuletzt im April 2026 in Halle 10, Stand 10/A34. Jeder Eintrag verweist auf seine Quelle.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihre Anforderung,</span> <em class="nw">unsere Maschine.</em></h2>'+
   '<p class="sub" data-r>Sprechen Sie mit uns und verlassen Sie sich auf unser Team. Wir finden die passende Lösung, vom Standardmodell bis zur Sonderlösung für Ihr Werk.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail an den Vertrieb '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Adresse</span><p data-r><span>Maschinenfabrik Bock GmbH & Co. KG</span><br><span>Altenaer Straße 170</span><br><span>58513 Lüdenscheid</span></p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Telefon '+TELT+'</span><br><span>Fax '+FAXT+'</span></p></div>'+
    '<div><span class="lab" data-r>Ansprechpartner</span><p data-r><span>Dipl.-Ing. Karsten Bock</span><br><span>Geschäftsführer</span><br><a class="ul" href="https://www.youtube.com/user/MaschinenfabrikBock/" target="_blank" rel="noopener">Maschinen im Video auf YouTube</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresse</span>Maschinenfabrik Bock GmbH & Co. KG<br>Altenaer Straße 170, 58513 Lüdenscheid</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/service">Service</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Maschinen</span>Anspitzmaschinen, Hämmermaschinen, Richtmaschinen und Ablaufhaspeln für Draht, Stangen und Rohre</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:400;font-size:40px;letter-spacing:.2em">MASCHINENFABRIK BOCK</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Maschinenfabrik Bock GmbH & Co. KG</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",produkte:"produkte",service:"service",unternehmen:"unternehmen",news:"news",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Maschinenfabrik Bock — Anspitz-, Hämmer- und Richtmaschinen, Lüdenscheid",x:"Start"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){secGo(r.sec,true);try{history.replaceState(null,"","#/")}catch(x){}},300)})()})();
