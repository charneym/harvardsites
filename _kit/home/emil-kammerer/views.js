/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><h3>'+esc(c[2])+'</h3><p>'+esc(c[3])+'</p><a class="lab lk ul" href="'+c[4]+'" target="_blank" rel="noopener">'+"Datenblatt"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Geschäftsführung und Ansprechpartner</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* special valves (emil-kammerer.de > Sonderarmaturen, Geschichte, Anwendungsberichte) */
function caps(){var C=[
  ["Sonderwerkstoffe","Titan, Zirkonium, Duplex","Trennschieber aus Sonderwerkstoffen wie Duplex, Ni-Basis-Legierung, Titan oder Zirkonium; eine Titan-Spezialarmatur arbeitet im Chlor-Alkali-Betrieb.",'<rect x="10" y="22" width="36" height="12"/><path class="a" d="M10 28H46"/><circle class="f" cx="28" cy="28" r="2.4"/>'],
  ["Temperatur","Von −55 °C bis zur Schmelze","Trennschieber für Hoch- und Tieftemperatur-Anwendungen, mit innerer Kühlung, für den Kälteraum bei −55 °C und wassergekühlt in der Schmelzmetallurgie.",'<path d="M28 8V36"/><circle cx="28" cy="42" r="7"/><path class="a" d="M28 20V42"/><circle class="f" cx="28" cy="42" r="3"/>'],
  ["Dosieren und Spülen","Stufenlos bis 100 %","Dosierschieber mit stufenloser Einstellung oder Drei-Stellungs-Antrieb, Trennschieber mit integriertem Spülsystem und mit definierter Sicherheitsstellung.",'<circle cx="28" cy="28" r="17"/><path class="a" d="M28 28L40 18"/><path d="M14 28H18M38 28H42M28 14V18"/><circle class="f" cx="28" cy="28" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Trennschieber und Spezialarmaturen<span class="nomob"> · Bergisch Gladbach</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Intelligente Lösungen</span> <span class="l">der Absperr-</span> <span class="l"><em class="nw">und Vakuumtechnik.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Kammerer ist Ihr Qualitätshersteller von Trennschiebern für Anforderungen, die über das gewöhnliche Maß hinausgehen. Spezialarmaturen sind unsere Spezialität, und das seit über 75 Jahren.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/trennschieber">Unsere Trennschieber '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>100 % Made by Kammerer in Germany</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Von der Idee</span> <span class="nw">über die Konstruktion</span> <span class="nw">bis zur Fertigung</span> <span class="nw">und Qualitätskontrolle:</span> <em><span class="nw">alles aus einer Hand,</span> <span class="nw">in Bergisch Gladbach.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1946</span><p class="k">gründete Emil Kammerer das Unternehmen, mit Kompressions-Vakuummetern</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">DN 900</span><p class="k">Nennweite: Trennschieber dieser Größe entstanden in den 90er Jahren</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt; 50 ms</span><p class="k">Schließzeit des Schnellschluss-Schiebers im Ereignisfall</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">So arbeitet ein Trennschieber</span><h2 class="d3"><span class="nw">Sicher absperren,</span> <em class="nw">wo es darauf ankommt.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Offen</span><span>Trennen</span><span>Abdichten</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Offen für</span> <span class="nw">das Produkt.</span></h2><p>Granulate, Stäube, kristalline Produkte und Multi-Phasen-Medien fallen frei durch den Schieber, als Ein- oder Austragsschieber an Mischern, Trocknern, Reaktoren und Silos.</p></article>'+
     '<article class="step"><h2><span class="nw">Trennen, auch</span> <span class="nw">die fallende Säule.</span></h2><p>Pneumatik- oder Handantrieb fahren das Trennmesser ein. Es sperrt stehende und fallende Produktsäulen ab und schneidet sie durch.</p></article>'+
     '<article class="step"><h2><span class="nw">Dicht, je nach</span> <span class="nw">Ihrer Anforderung.</span></h2><p>Das Abdichtsystem schließt um das Messer: produktdicht, druckdicht bis 10 bar (auf Anfrage bis 40 bar), vakuumdicht bis 10⁻³ mbar abs.; Gehäuse und Spindeldurchführung bis 5 × 10⁻⁸ mbar.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="trennschieber" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Trennschieber</span><h2 class="d2 split"><span class="nw">Dicht für Produkt,</span> <em><span class="nw">Druck und Vakuum.</span></em></h2></div><p data-r>Alle Baureihen mit Flansch nach DIN EN 1092-1, gebohrt nach PN10 oder ASA 150 lbs., in Silumin, Sphäroguss oder Edelstahl, mit NBR, EPDM oder FKM. Weitere Anschlüsse, Werkstoffe und Optionen auf Anfrage.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="sonderarmaturen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Sonderarmaturen</span><h2 class="d2 split"><span class="nw">Gebaut nach Maß</span> <em class="nw">Ihrer Anwendung.</em></h2></div><p data-r>Unser überschaubarer Prozess erlaubt eine fachgerechte Entwicklung und Umsetzung innovativer Sonderlösungen, die den individuellen Anforderungen unserer Kunden gerecht werden.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Außerdem</span><p class="cr" data-r><span>Kundenindividuelle Nennweiten</span><span>Verschleißfeste Oberflächen</span><span>Abrasive und aggressive Medien</span><span>Federdruckschließend</span><span>Elektrischer Antrieb</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="anwendungen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Anwendungsbereiche</span><h2 class="d2 split"><span class="nw">Wo Kammerer-Schieber</span> <em class="nw">im Einsatz sind.</em></h2></div><p data-r>Kammerer-Schieber arbeiten als Ein- und Austragsschieber an Druckförderanlagen, Dünnschichtverdampfern, Mischern, Trocknern, Reaktoren, Zentrifugen und Silos.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Branchen</span><dl>'+
    '<div data-r><dt class="lab">Chemie · seit 1946</dt><dd>Polymere, Fein- und Spezialchemikalien, Glyzerin, Düngemittel, Wasch- und Pflegemittel</dd></div>'+
    '<div data-r><dt class="lab">Pharmazie · seit den 60er Jahren</dt><dd>Austragsschieber für Filtertrockner, Mischer, Reaktoren und Zentrifugen</dd></div>'+
    '<div data-r><dt class="lab">Nahrungs- und Futtermittel</dt><dd>Kaffee- und Kakaostäube, Gewürze, Trockenfrüchte, Futtermittel, Tabak</dd></div>'+
    '<div data-r><dt class="lab">Energietechnik · Pyrolyse</dt><dd>Kraftwerks- und Entsorgungstechnik, Drehrohröfen, Biomassevergasung, Reifenpyrolyse</dd></div>'+
    '<div data-r><dt class="lab">Metallurgie</dt><dd>Probeentnahme, Zugabe von Legierungen und Beobachtung der Schmelze, wassergekühlt</dd></div>'+
    '<div data-r><dt class="lab">Explosionsschutz</dt><dd>Schnellschluss-Schieber zur Entkopplung, zertifiziert nach ATEX</dd></div>'+
   '</dl></div>'+
   '<div class="bk"><span class="lab kick" data-r>Zertifikate</span><p class="cr" data-r><span>DEKRA Druckgeräte</span><span>ATEX</span><span>TA Luft</span><span>EcoVadis-Nachhaltigkeitsrating</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Mit Pioniergeist,</span> <em class="nw">seit 1946.</em></h2></div><p data-r>Gegründet 1946 von Emil Kammerer, dessen Entwicklungen Technik-Geschichte machten: Eines der ersten Kompressions-Vakuummeter war im Deutschen Museum in München zu sehen. Heute führt Bernd Kammerer das Unternehmen.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>Geschichte</span><ul>'+
     '<li data-r><b class="yr">1946</b>Gründung, erste Kompressions-Vakuummeter, erste Kontakte zu den heutigen Bayer-Werken in Leverkusen.</li>'+
     '<li data-r><b class="yr">1955 – 65</b>Eine aufblasbare Dichtung zur hochvakuumdichten Absperrung, der Wegbereiter für den Durchbruch im Vakuumbereich.</li>'+
     '<li data-r><b class="yr">70er Jahre</b>Erste Explosionsschutzschieber, Hochdruckschieber für 40 bar, erste Trennschieber aus Titan.</li>'+
     '<li data-r><b class="yr">90er Jahre</b>Schnellschluss-Schieber für die Lebensmittelindustrie, Trennschieber mit Spülsystem und bis DN 900.</li>'+
    '</ul></div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Service</span><p class="cr" data-r><span>Inbetriebnahme</span><span>Wartung</span><span>Reparatur</span><span>Generalüberholung</span><span>Umrüstungen</span><span>Sämtliche Ersatzteile</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Besuchen Sie uns</span> <em class="nw">in Düsseldorf.</em></h2></div><p data-r>Auf der Valve World Expo vom 1. bis 3. Dezember 2026 finden Sie uns am Stand 1F70. Dazu unsere Anwendungsberichte; jeder Eintrag verweist auf seine Quelle.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihre Anforderung,</span> <em class="nw">unser Schieber.</em></h2>'+
   '<p class="sub" data-r>Unsere Mitarbeiter stehen Ihnen für unverbindliche Beratungen gerne zur Seite. Wir freuen uns auf Ihre Anfrage.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Adresse</span><p data-r><span>Emil Kammerer GmbH</span><br><span>Mülheimer Str. 85</span><br><span>51469 Bergisch Gladbach</span></p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></span><br><span>Fax '+FAXT+'</span></p></div>'+
    '<div><span class="lab" data-r>Service</span><p data-r><span>Georg Post, Service Manager</span><br><span>Telefon +49 2202 95528-24</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresse</span>Emil Kammerer GmbH<br>Mülheimer Str. 85, 51469 Bergisch Gladbach</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/trennschieber">Trennschieber</a><br><a class="ul" href="#/sonderarmaturen">Sonderarmaturen</a><br><a class="ul" href="#/anwendungen">Anwendungen</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Baureihen</span>Produktdichte und druck- und vakuumdichte Trennschieber, Schnellschluss-Schieber und Sonderarmaturen.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Roboto Slab\',Georgia,serif;font-weight:900;font-size:60px;letter-spacing:.22em">KAMMERER</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Emil Kammerer GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",trennschieber:"trennschieber",sonderarmaturen:"sonderarmaturen",anwendungen:"anwendungen",unternehmen:"unternehmen",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Kammerer — Trennschieber und Spezialarmaturen seit 1946, Bergisch Gladbach",x:"Start"};
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
