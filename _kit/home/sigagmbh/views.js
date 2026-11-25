/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Mehr '+ARR+'</a></li>'}).join("")+'</ul>'}
function hist(){return '<ol class="sg-tl">'+HIST.map(function(h){return '<li data-r><span class="y">'+esc(h[0])+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function team(){
  return '<div class="mh"><div class="mh-group"><p class="mh-label">Geschäftsführung und Vertrieb</p><ul class="mh-list">'+
   '<li><div class="mh-row cg-r"><span class="mh-name">Dr.-Ing. Tobias Metz</span><span class="mh-role">Geschäftsführer</span><span class="mh-sum">Ansprechpartner für individuelle Systeme, Forschungssysteme, Prüfstände und Kooperationen. Seit 2025 Geschäftsführer der SIGA GmbH.</span></div></li>'+
  '</ul></div></div>'}
function caps(){var C=[
  ["Systeme","Angepasst, auf Basis eines Standardbaukastens","Serienanlagen und Sonderlösungen, basierend auf etablierten Standards und innovativen Lösungen. Jedes Projekt erweitert den Baukasten.",'<path d="M14 6H42V50H14Z"/><path d="M14 20H42M14 36H42"/><path class="a" d="M22 13H34M22 28H34M22 43H34"/><circle class="f" cx="37" cy="13" r="2.2"/>'],
  ["Engineering","Konstruktion bis Zertifizierung, aus einer Hand","3D-Konstruktion, Elektronik, Software, Hardware und Montage, mit Risikoanalyse und Sicherheitskonzept, Dokumentation, Bedienungsanleitung und CE-Zertifizierung.",'<path d="M8 46L22 32L30 40L48 14"/><path class="a" d="M8 50H48M8 50V10"/><circle class="f" cx="48" cy="14" r="2.2"/>'],
  ["Service","Betreuung über die gesamte Lebensdauer","Wartung und Ersatzteilversorgung, Umbauten und Reparaturen, damit Ihr System über Jahre zuverlässig läuft.",'<circle cx="28" cy="28" r="17"/><path class="a" d="M28 15V28L37 34"/><circle class="f" cx="28" cy="28" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<span class="lab eyebrow" data-r>Gassysteme<span class="nomob"> · Allershausen bei München</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Gase und Precursor,</span><span class="l"><em>präzise dosiert.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Anspruchsvolle Systeme zur Handhabung von Gasen und Flüssigkeiten: Precursor-Verdampfer und Gassysteme für Forschung, Entwicklung und Produktion, seit über 30 Jahren.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Zu den Produkten '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Das ist SIGA</span>'+
   '<h2 class="txt" id="mani">Genaue Dosierung, Mischung von Gasen und Verdampfen von Precursoren, individuell angepasst und <em>prozesssicher.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">500+</span><p class="k">Systeme gebaut, viele Einzelsysteme, aber auch Serien mit bis zu 50 Stück</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+</span><p class="k">Jahre Erfahrung in der Gastechnik, in Entwicklung und Produktion</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">120+</span><p class="k">zufriedene Kunden in Industrie und Forschung</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Precursor-Verdampfer</span><h2 class="d3">Dampf, <em>reproduzierbar dosiert.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Verdampfen</span><span>Laden</span><span>Ablassen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Direkt verdampft.</h2><p>Im beheizten Verdampfergefäß geht der flüssige Precursor in die Gasphase, ohne Trägergas. Die Leitungen liegen in einem beheizten Bereich, damit nichts kondensiert.</p></article>'+
     '<article class="step"><h2>Im Puffer geladen.</h2><p>Im Puffergefäß wird ein eingestellter Druck aus dem Verdampfer aufgebaut. Dann schließen die Ventile den Weg zum Verdampfer.</p></article>'+
     '<article class="step"><h2>In die Kammer abgegeben.</h2><p>Andere Ventile öffnen den Weg zur Prozesskammer, und der Dampf strömt aus dem Puffer. Aus Puffervolumen und Druckänderung ergibt sich eine reproduzierbare Dosis, auch für ALD.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="leistungen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unsere Leistungen</span><h2 class="d2 split">Individuelle Systeme, <em>ganzheitliche Lösungen.</em></h2></div><p data-r>SIGA verbindet über 30 Jahre Erfahrung in der Gastechnik mit moderner Systementwicklung: kundenspezifische Auslegung auf Basis etablierter Standards, vom ersten Konzept bis zum betriebsbereiten System.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Technik</span><p class="cr" data-r><span>UHP-Reinstgaskomponenten</span><span>Face-Seal-, VCR- und Klemmringtechnik</span><span>Dauerhaft technisch dicht</span><span>SPS und Sicherheits-SPS</span><span>CE-Zertifizierung, Abnahme durch ZÜS</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split">Für anspruchsvolle <em>Prozesse.</em></h2></div><p data-r>Maßgeschneiderte Systeme zur Verdampfung und Versorgung von Precursoren, zur Gasdosierung und vielem mehr, ob für die Produktion oder fürs Labor. Alle Produkte werden nach kundenspezifischen Anforderungen entwickelt und gefertigt.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Precursor</span><p class="cr" data-r><span>TMA</span><span>DEZ</span><span>TEOS</span><span>HMDSO</span><span>HMDS</span><span>TMCS</span><span>SiCl₄</span><span>TiCl₄</span><span>HSiCl₃</span><span>GeCl₄</span><span>Alkohole, Wasser und mehr</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="ueber-uns" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Über uns</span><h2 class="d2 split">30 Jahre Qualität <em>und Innovation.</em></h2></div><p data-r>In Allershausen bei München entwickelt SIGA Systeme zum Messen, Regeln und Verdampfen technischer Gase, individuell, verlässlich und mit hoher Fertigungstiefe. Als kleines Team sind wir flexibel und anpassungsfähig.</p></div>'+
   hist()+
   team()+
   '<div class="qual"><span class="lab kick" data-r>Zertifiziert</span><p class="cr" data-r><span>DIN EN ISO 9001:2015</span></p></div>'+
   '<div class="qual"><span class="lab kick" data-r>Karriere</span><p class="cr" data-r><span>Elektromechaniker, Elektroniker, Mechatroniker, Schaltschrankbauer (m/w/d)</span><span>Systemingenieur, Systemplaner (m/w/d)</span><a class="ul" href="'+SG+'siga-gmbh-karriere/" target="_blank" rel="noopener">Quereinsteiger und Initiativbewerbung</a></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="forschung" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Systeme für die Forschung</span><h2 class="d2 split">Die Technologien <em>von morgen.</em></h2></div><p data-r>Für und mit nationalen und internationalen Forschungseinrichtungen entwickelt SIGA Gasversorgungen für Experimente: Konzept, Hardware und Software aus einem Guss.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Gastransfersystem GS645</span><dl>'+
    '<div data-r><dt class="lab">Einsatz</dt><dd>Befüllung und Rückgewinnung von Helium-3, Argon und CO₂ in den Detektoren des CSPEC-Instruments der European Spallation Source in Lund</dd></div>'+
    '<div data-r><dt class="lab">Vakuum</dt><dd>Turbomolekular- und Scrollpumpe, Evakuierung bis unter 10⁻⁶ mbar</dd></div>'+
    '<div data-r><dt class="lab">Druck</dt><dd>Drucksensorkaskade, 1 % Genauigkeit von 50 mbar bis 16 bar</dd></div>'+
    '<div data-r><dt class="lab">Dichtheit</dt><dd>Face-Seal-Technik unter 10⁻⁸ mbar·l/s, SIL2-Überdruckbegrenzung</dd></div>'+
   '</dl></div>'+
   '<div class="bk"><span class="lab kick" data-r>Auf der Messe</span><p class="cr" data-r><a class="ul" href="https://exhibitors.electronica.de/ausstellerportal/2026/aussteller/ausstellerdetails/siga-gmbh-systeme-fuer-industrielle-gasanwendungen/?elb=239.1100.6359.1.111" target="_blank" rel="noopener">electronica 2026, München</a></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split">Sie haben <em>Fragen?</em></h2>'+
   '<p class="sub" data-r>Ob Verdampfersystem, Gasmischanlage, Forschungssystem oder Prüfstand: Sprechen Sie uns an, und wir finden die Lösung für Ihren Prozess.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>SIGA GmbH<br>Kesselbodenstr. 4b<br>85391 Allershausen</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Produkte</span><p data-r><a class="ul" href="'+SG+'produkte/" target="_blank" rel="noopener">Alle Produkte ansehen</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>SIGA – Systeme für industrielle Gasanwendungen GmbH<br>Kesselbodenstr. 4b, 85391 Allershausen</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/leistungen">Leistungen</a><br><a class="ul" href="#/forschung">Forschung</a><br><a class="ul" href="#/ueber-uns">Über uns</a></div>'+
   '<div class="c"><span class="lab">Produkte</span>Precursor-Verdampfer<br>Precursor-Versorgung G504<br>Gasmischanlagen<br>AKF-Beladestationen</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 120" aria-hidden="true"><text x="450" y="100" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:600;font-style:italic;font-size:118px;letter-spacing:.04em">SIGA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 SIGA GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",prozess:"story",produkte:"produkte",leistungen:"leistungen",forschung:"forschung","ueber-uns":"ueber-uns",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"SIGA GmbH — Precursor-Verdampfer und Gassysteme für Forschung, Entwicklung und Produktion",x:"Start"};
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
