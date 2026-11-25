/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c,i){
  return '<li><span class="lab tg"><b>'+(i<9?"0":"")+(i+1)+'</b></span><h3>'+esc(c[0])+'<span class="loc">'+esc(c[1])+'</span></h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Entwicklung im Haus","Konstruktion mit 3D-CAD, ein 3D-Drucker, Maschinen für Dauerversuche und Arbeitsplätze für den Musterbau. Dazu eine Vielzahl an Patenten, Gebrauchsmustern und geschützten Designs.",'<path d="M10 44h36"/><path d="M16 44V22h24v22"/><path class="a" d="M22 32h12M28 26v12"/><circle class="f" cx="28" cy="16" r="2.4"/>'],
  ["Endmontage in Leer","Enge Zusammenarbeit mit Zulieferern aus der Region, kurze Innovationszyklen und die Endmontage im Hause. Sonderbauten konfigurieren wir ganz nach Kundenwunsch.",'<path d="M8 46V24l12 8V24l12 8V16h16v30Z"/><path class="a" d="M8 46H48"/><circle class="f" cx="40" cy="24" r="2.4"/>'],
  ["Schnell geliefert","„Doppelt hilft, wer schnell hilft.“ Ein scannergeführtes Hochregallager, kurze Lieferzeiten für Lagerware und ein eigener Fuhrpark, der jederzeit per GPS verfolgt werden kann.",'<path d="M6 36V18h26v18"/><path d="M32 24h10l6 7v5H32"/><circle cx="16" cy="40" r="4"/><circle cx="40" cy="40" r="4"/><path class="a" d="M12 26h12"/><circle class="f" cx="44" cy="30" r="1.8"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick">Aus Leer, für Europa</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab">'+esc(e[0])+'</dt><dd>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s">Quellen: hammerlit.de (Historie, Das Unternehmen, Nachhaltigkeit, Verbundene Unternehmen). Neben den gezeigten Ausführungen fertigt Hammerlit Wagen individuell nach Kundenwunsch.</p></div></div>'}
function newsGrid(){return '<ul class="evg">'+NEWS.slice(0,4).map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Hersteller aus Leer, Ostfriesland<span class="nomob"> · seit 1954</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Logistikgeräte,</span><span class="l">für die Arbeit</span><span class="l"><em>gemacht.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Hammerlit entwickelt, fertigt und liefert Logistikgeräte für Krankenhäuser und Pflegeheime, vom Wäschetransportsack bis zur mobilen Workstation. Hier: der Pflegewagen <span class="nw">PMEF 6414</span> aus Edelstahl.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Unsere Produktbereiche '+ARR+'</a><a class="btn" href="#/konfiguration">Der PMEF 6414</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick">Das Unternehmen</span>'+
   '<h2 class="txt" id="mani">„Qualität schafft Vertrauen.“ Seit über 70 Jahren machen wir <em>praktische Helfer</em> für den Arbeitsalltag in Klinik und Pflege, ein ganzes Berufsleben lang.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1954</span><p class="k">In Leer gegründet; unabhängig und inhabergeführt bis heute</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10</span><p class="k">Produktfelder, von der Patientenversorgung bis zur Entsorgung</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~100</span><p class="k">Mitarbeiter; 25-jährige Dienstjubiläen sind fast die Regel</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Pflegewagen PMEF 6414</span><h2 class="d3">Ein Wagen, <em>Modul für Modul.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Korpus</span><span>Module</span><span>Mobil</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Ein stabiler Korpus aus Edelstahl.</h2><p>Der einreihige Edelstahlkorpus gibt dem Wagen Stabilität und Langlebigkeit, mit Raum für 14 Höheneinheiten.</p></article>'+
     '<article class="step"><h2>Module nach Bedarf.</h2><p>Eine Modulschublade mit 1 HE, eine mit 2 HE, darunter ein abschließbarer Schrank mit Modul-Trägerwänden über 11 HE, Modulkörben und zwei Flügeltüren. Die Schubladen sind frei konfigurierbar.</p></article>'+
     '<article class="step"><h2>Mobil auf vier Lenkrollen.</h2><p>Vier Lenkrollen, davon zwei Kombi-Rollen mit Richtungs- und Totalfeststellung, und ein ergonomischer Bogengriff. Außenmaße: 740 × 580 × 1107 mm.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="kompetenz" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Kompetenz</span><h2 class="d2 split">Entwickeln, fertigen, <em>liefern.</em></h2></div><p>Auf unseren zehn Produktfeldern beanspruchen wir Qualitätsführerschaft, im ständigen Dialog mit unseren Kunden: für die Arbeitsabläufe, wie sie sind, und wie sie sich weiterentwickeln.</p></div>'+
   caps()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick">Werkstoffe</span><p>Nichtrostende Stähle, Leichtmetalle, Thermo- und Duroplaste, Elastomere, Holzwerkstoffe und Textilien, dazu eigene Spritzguss-, Strangguss- und Tiefziehwerkzeuge.</p></div>'+
    '<div><span class="lab kick">halitec Reinraum</span><p>Reinraumtische, Kittelhänge- und Schuhsysteme, Schränke und Personenschleusen für Pharma, Labor, Lebensmittelindustrie und Krankenhäuser.</p></div>'+
    '<div><span class="lab kick">Forschung</span><p>Mit Know-how und Pflegewagen unterstützt Hammerlit das Fraunhofer IPA bei der Entwicklung autonomer Transportroboter für Kliniken und Pflegeheime.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Produkte</span><h2 class="d2 split">Zehn Bereiche, <em>ein Anspruch.</em></h2></div><p>Logistikgeräte für Pflege, Wäsche, Sterilgut, OP, Entsorgung und Lager, in exzellenter Qualität und von robuster, funktionssicherer Langlebigkeit.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec dark" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Aktuelles</span><h2 class="d2 split">Neu bei <em>Hammerlit.</em></h2></div><p>Messen, Produktneuheiten, der aktuelle Katalog und unser Engagement.</p></div>'+
   newsGrid()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick">Kliniken, Pflegeheime und Fachhandel</span>'+
   '<h2 class="big split">Sprechen wir über <em>Ihren Wagen.</em></h2>'+
   '<p class="sub">Ein Angebot, eine Sonderanfertigung oder ein Besuch durch unseren Außendienst: unsere Kundenberater sind für Sie da.</p>'+
   '<div class="act"><a class="btn solid" href="mailto:'+MAIL+'">E-Mail an Hammerlit '+ARR+'</a><a class="btn" href="#/produkte">Zu den Produkten</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab">Sitz und Endmontage</span><p><span>Hammerlit GmbH</span><br><span>Sägemühlenstraße 49</span><br><span>26789 Leer, Deutschland</span></p></div>'+
    '<div><span class="lab">Telefon</span><p><a class="ul" href="tel:+4949192900">0491 92 900</a></p></div>'+
    '<div><span class="lab">E-Mail</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Sitz</span>Sägemühlenstraße 49<br>26789 Leer, Deutschland</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+4949192900">0491 92 900</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/kompetenz">Kompetenz</a><br><a class="ul" href="#/aktuelles">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Unser Anspruch</span>… made to work.<br>Qualität schafft Vertrauen.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="54" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:600;font-style:italic;font-size:64px;letter-spacing:-.01em">Hammerlit</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Hammerlit GmbH</span><span class="lab">Konzeptentwurf</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={unternehmen:"unternehmen",konfiguration:"story",kompetenz:"kompetenz",produkte:"produkte",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Hammerlit — Logistikgeräte für Krankenhäuser und Pflegeheime, seit 1954",x:"Startseite"};
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
