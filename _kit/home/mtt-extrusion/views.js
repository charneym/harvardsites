/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np mtp">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Ansprechpartner</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul></div>'}
/* analysis and consulting (mtt-germany.com, the stand poster and the wire 2026 exhibitor profile) */
function caps(){var C=[
  ["Vermessen","Schnecken und Zylinder","Schnecken und Zylinder von 12 bis 200 mm werden vermessen, inklusive Zeichnungserstellung für die Fertigung.",'<path d="M8 20H48M8 36H48"/><path class="a" d="M28 8V48"/><path class="f" d="M28 8l-3 7h6zM28 48l-3-7h6z"/>'],
  ["Analyse","Verschleiß und Optimierung","Verschleiß- und Optimierungsanalysen von Plastifiziereinheiten, mit technischer Beratung für Designoptimierungen.",'<path d="M8 46H48"/><path class="a" d="M8 42C22 42 30 40 36 32S44 16 48 12"/>'],
  ["Evaluierung","Extruder und Linien","Evaluierung, Optimierung und Retrofits von Extrudern von 12 bis 200 mm und von ganzen Extrusionslinien, mit Steuerungskonzepten in Elektronik und Mechanik.",'<rect x="8" y="22" width="30" height="14"/><path d="M38 29H48"/><path class="a" d="M14 22V14H24V22"/>'],
  ["Mikroextrusion","Mikroextrusion und Peripherie","Mikroextrusion, Peripheriegeräte und technische Beratung: Leistungen, die MTT neben Schnecken, Zylindern und Extrudern anbietet.",'<circle cx="28" cy="28" r="17"/><circle class="a" cx="28" cy="28" r="6"/><circle class="f" cx="28" cy="28" r="2"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Extrusionstechnik<span class="nomob"> · Wetzlar und Wien</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Schnecken und Zylinder,</span> <span class="l nw">vermessen, optimiert,</span> <span class="l"><em class="nw">neu gefertigt.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>MTT Extrusion Expertise liefert Schnecken und Zylinder von 12 bis 200 mm, Extruder mit Torquemotor ohne Wasserkühlung und Retrofits für Extruder und Extrusionslinien, mit Vermessung, Zeichnung und technischer Beratung.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/leistungen">Unsere Leistungen '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage senden</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Passion for Extrusion</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Wir vermessen</span> <span class="nw">Ihre Plastifiziereinheit,</span> <span class="nw">analysieren den Verschleiß</span> <span class="nw">und empfehlen</span> <span class="nw">das <em>bessere Design.</em></span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">12–200</span><p class="k">mm Durchmesser: Schnecken und Zylinder, inklusive Vermessen und Zeichnungserstellung</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">12–60</span><p class="k">mm: Extruder mit Torquemotor, ohne Wasserkühlung</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Standorte: Wetzlar in Deutschland und Wien in Österreich</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Schnecke und Zylinder</span><h2 class="d3"><span class="nw">Vom Messwert</span> <em class="nw">zur neuen Schnecke.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Messen</span><span>Analyse</span><span>Zeichnung</span><span>Fertigung</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Schnecke und Zylinder</span> <span class="nw">vermessen.</span></h2><p>Schnecken und Zylinder von 12 bis 200 mm werden vermessen: die Schnecke ebenso wie die Bohrung des Zylinders, in dem sie läuft.</p></article>'+
     '<article class="step"><h2><span class="nw">Den Verschleiß</span> <span class="nw">analysieren.</span></h2><p>Verschleiß- und Optimierungsanalysen der Plastifiziereinheit zeigen, wo das Spiel zwischen Steg und Zylinder gewachsen ist und wo das Design besser werden kann.</p></article>'+
     '<article class="step"><h2><span class="nw">Zeichnung und</span> <span class="nw">Design-Empfehlung.</span></h2><p>Aus Messung und Analyse entstehen die Zeichnung und eine Design-Empfehlung, mit technischer Beratung für die Optimierung.</p></article>'+
     '<article class="step"><h2><span class="nw">Neu gefertigt,</span> <span class="nw">mit Microfinish.</span></h2><p>Die neue Schnecke wird hergestellt und geliefert. Das Microfinish-Verfahren veredelt die Oberfläche und minimiert die Polymeranhaftung.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="leistungen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Leistungen</span><h2 class="d2 split"><span class="nw">Von der Schnecke</span> <em class="nw">bis zur ganzen Linie.</em></h2></div><p data-r>Schnecken, Zylinder und Extruder, Retrofits für bestehende Extruder und Extrusionslinien, Reinigung und Oberflächenveredelung.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="beratung" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Beratung und Analyse</span><h2 class="d2 split"><span class="nw">Erst messen,</span> <em class="nw">dann entscheiden.</em></h2></div><p data-r>Bevor neu gefertigt oder nachgerüstet wird, steht die Analyse: Vermessung, Verschleißbild und Evaluierung der Anlage, mit einer Empfehlung, die sich auf Messwerte stützt.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Zwischen Wetzlar</span> <em class="nw">und Wien.</em></h2></div><p data-r>Die MTT Extrusion Expertise GmbH arbeitet von Wetzlar in Hessen und von Wien aus. Inhaber ist Ing. Gerhard Trunk.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>Standorte und Messe</span><ul>'+
     '<li data-r><b>Wetzlar</b>MTT Extrusion Expertise GmbH, D-35576 Wetzlar, Deutschland.</li>'+
     '<li data-r><b>Wien</b>MTT Extrusion Expertise GmbH, Liesingbachstraße 15, A-1100 Wien, Österreich.</li>'+
     '<li data-r><b>wire 2026</b><a class="ul" href="https://www.wire-tradefair.com/vis/v1/de/exhibitors/wire2026.3059799" target="_blank" rel="noopener">Aussteller in Düsseldorf, <span class="nw">Halle 10,</span> <span class="nw">Stand C42-05</span></a>, April 2026.</li>'+
     '<li data-r><b>Produktgruppen</b>Extrusionsmaschinen; Draht-, Faser- und Kabelführungen; sonstige Extrusionswerkzeuge.</li>'+
    '</ul></div></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec dark2 cta" id="kontakt" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihre Schnecke,</span> <em class="nw">unser Messwert.</em></h2>'+
   '<p class="sub" data-r>Schreiben Sie uns, worum es geht: Schnecke und Zylinder, Extruder oder eine ganze Linie.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail an MTT '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Wien</span><p data-r><span>MTT Extrusion Expertise GmbH</span><br><span>Liesingbachstraße 15</span><br><span>A-1100 Wien</span></p></div>'+
    '<div><span class="lab" data-r>Wetzlar</span><p data-r><span>MTT Extrusion Expertise GmbH</span><br><span>D-35576 Wetzlar</span></p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Standorte</span>Liesingbachstraße 15, A-1100 Wien<br>D-35576 Wetzlar</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/leistungen">Leistungen</a><br><a class="ul" href="#/verfahren">Verfahren</a><br><a class="ul" href="#/beratung">Beratung</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Leistungen</span>Schnecken und Zylinder, Extruder, Retrofits, Reinigung, Microfinish und Beratung</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:600;font-size:48px;letter-spacing:.32em">MTT EXTRUSION</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 MTT Extrusion Expertise GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",verfahren:"story",leistungen:"leistungen",beratung:"beratung",unternehmen:"unternehmen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"MTT Extrusion Expertise — Schnecken, Zylinder, Extruder und Retrofits, Wetzlar und Wien",x:"Start"};
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
