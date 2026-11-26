/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+c[1].split("|").map(function(x){return '<span class="nw">'+esc(x)+'</span>'}).join(" ")+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Lieferanten '+ARR+'</a></li>'}).join("")+'</ul>'}
/* what NIES does (nies-electronic.de > Home, Über NIES electronic, Kabelkonfektion), each with a small line icon */
function caps(){var C=[
  ["Distribution","<span class=\"nw\">Ein breites Sortiment</span>","Steckverbinder namhafter Hersteller: Markenprodukte der jeweils marktführenden, anerkanntesten und innovativsten Hersteller, mit umfassendem Marktüberblick.",'<path d="M10 22H30V36H10Z"/><path d="M30 25H40V33H30"/><path class="a" d="M40 27H48M40 31H48"/><path d="M6 46H50"/>'],
  ["Kabelkonfektion","<span class=\"nw\">Nach Maß,</span> <span class=\"nw\">vom Prototyp an</span>","Individuelle Kabelkonfektionen nach Kundenwunsch, von geringen Losgrößen bis zur Großserie, mit Beratung schon im Entwicklungsstadium.",'<path d="M6 30C16 30 18 18 28 18S40 30 50 30"/><path class="a" d="M6 36C16 36 18 24 28 24S40 36 50 36"/><path d="M6 46H50"/>'],
  ["Steckermontage","<span class=\"nw\">Aus Einzelteilen</span> <span class=\"nw\">zum Stecker</span>","Die hauseigene Stecker-Assemblierung montiert kurzfristig eine sehr große Typenvielfalt an Steckverbindern und Endgehäusen.",'<path d="M8 20H26V38H8Z"/><path d="M26 23H38V35H26"/><path class="a" d="M38 26H48M38 32H48"/><path d="M12 20V38M16 20V38M20 20V38"/>'],
  ["Anschlusstechnik","<span class=\"nw\">Alle gängigen Verfahren</span>","Löt-, Crimp-, Schneidklemm-, Federklemm- und Schraubverbindungen, Quetschkabelschuhe, Aderendhülsen und Ringkabelschuhe.",'<path d="M6 28H22"/><path d="M22 22H36V34H22Z"/><path class="a" d="M26 22V34M32 22V34"/><path d="M36 28H50"/>'],
  ["Prüfung","<span class=\"nw\">100 Prozent geprüft</span>","Jeder Kundenauftrag wird vollständig geprüft, auf Wunsch mit elektrischen Funktionskontrollen bis 1500 V.",'<path d="M12 10H44V44H12Z"/><path class="a" d="M20 28L26 34L37 20"/><path d="M6 50H50"/>'],
  ["Beratung","<span class=\"nw\">Persönlich,</span> <span class=\"nw\">von Anfang an</span>","Eine qualifizierte Innen- und Außendienstmannschaft begleitet Ihre Projekte vom Beginn bis zur Fertigstellung.",'<path d="M8 12H38V32H20L12 40V32H8Z"/><path class="a" d="M14 20H32M14 26H26"/><path d="M42 20H48V40H44V46L38 40H28"/>']];
  return '<div class="caps six">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3>'+c[1]+'</h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* references (nies-electronic.de > Referenzen/Projekte) */
function refs(){var R=[
  ["Paris","Eiffelturm","Rund 20.000 Lampen leuchten über Steckverbinder von Amphenol, die NIES electronic in der Farbe des Eiffelturms geliefert hat."],
  ["Frankfurt am Main","Historisches Museum","Zur Neueröffnung 2017 eine Besucherführungsanlage nach Praxisvergleich vor Ort: beyerdynamic Synexis mit 90 Empfängern."],
  ["Mainz","ZDF-Fernsehgarten","Seit Jahrzehnten Beschallungstechnik und Sonderkonfektion; 2015 mit Fohhn Linea Focus LF-220 Zeilenlautsprechern in Sonderfarbe."],
  ["Bahn","ICE · Hot Box Detector","Kabelkonfektionen für die Temperaturmessung an Rädern von Schienenfahrzeugen, ausgelegt auf Vibration und bis zu 600 °C."],
  ["Zugspitze","Radiometer SSARA-Z","Anschlussleitungen für das scannende Radiometer der Umweltforschungsstation Schneefernerhaus, in über 2500 m Höhe."],
  ["Deutsche Post","E-Bikes","Steckverbinder für Stromversorgung und Motorsteuerung der Zustell-E-Bikes: über 300 Tage im Jahr im Einsatz, bis 50 kg Zugladung."]];
  return '<ol class="hst rfs">'+R.map(function(h){return '<li><span class="lab">'+esc(h[0])+'</span><span class="yr">'+esc(h[1])+'</span><p>'+esc(h[2])+'</p></li>'}).join("")+'</ol>'}
var NEWS=[
 ["24.–26.11.2026","SPS 2026 in Nürnberg: Halle 10.0, Stand 105","sps.mesago.com","https://sps.mesago.com/nuernberg/en/exhibitor-search.detail.html/nies-electronic-gmbh.html"],
 ["Stellenangebote","Wir suchen Verstärkung im Außendienst Nord und Süd (w/m/d)","nies-electronic.de",NE+"stellenangebote"],
 ["Qualität","Zertifiziert nach DIN EN ISO 9001:2015","Zertifikat (PDF)",NE+"pdfs/Zertifikat_ZA_ISO_9001_2015.PDF"],
 ["Lieferservice","Die NIES Linecard: Hersteller und Sortiment auf einen Blick","Linecard (PDF)",NE+"pdfs/Nies-LINECARD-lieferservice.pdf"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Steckverbinder · Kabelkonfektion<span class="nomob"> · Frankfurt am Main seit 1932</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">NIES verbindet.</span> <span class="l"><em>Das Angenehme</em></span> <span class="l"><em>mit dem Nützlichen.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Ein breites Sortiment von Steckverbindern namhafter Hersteller, Kabelkonfektionen nach Maß und persönliche Beratung: aus Frankfurt am Main, inhabergeführt seit 1932.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/sortiment">Sortiment ansehen '+ARR+'</a><a class="btn" href="#/kontakt">Angebot anfragen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Seit 1932</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Ein Familienunternehmen,</span> <span class="nw">inhabergeführt, mit über</span> <span class="nw">90 Jahren Erfahrung</span> <span class="nw">in der Branche.</span> <em><span class="nw">Distributor, Konfektionär</span> <span class="nw">und Berater</span> <span class="nw">aus einer Hand.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1932</span><p class="k">von Jean H. Nies gegründet; seit 1980 die NIES electronic GmbH</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">14 Jahre</span><p class="k">durchschnittliche Betriebszugehörigkeit unserer Produktspezialisten</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1500 V</span><p class="k">elektrische Funktionskontrolle auf Kundenwunsch; jeder Auftrag wird zu 100 Prozent geprüft</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Kabelkonfektion · Steckermontage</span><h2 class="d3"><span class="nw">Vom Kabel</span> <span class="nw">zur Verbindung</span> <em><span class="nw">nach Maß.</span></em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Beraten</span><span>Anschließen</span><span>Montieren</span><span>Prüfen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Beraten.</h2><p>Individuelle Beratung und Betreuung schon im Entwicklungsstadium, mit Prototypen, für Losgrößen von wenigen Stück bis zur Großserie. Wir verarbeiten Kabel im Querschnitt von 0,08 mm² bis 185 mm².</p></article>'+
     '<article class="step"><h2>Anschließen.</h2><p>Steuer-, Daten- und Sensorleitungen, Koaxial-, Hybrid- und Hochspannungskabel, angeschlossen mit allen gängigen Techniken: Löten, Crimpen, Schneidklemm-, Federklemm- und Schraubverbindungen.</p></article>'+
     '<article class="step"><h2>Montieren.</h2><p>Die hauseigene Stecker-Assemblierung fügt Einzelteile zu kompletten Steckern zusammen: dank des umfangreichen Einzelteillagers kurzfristig, in großer Typenvielfalt und mit verschiedenen Oberflächen.</p></article>'+
     '<article class="step"><h2>Prüfen.</h2><p>Nach der Konfektion wird der gesamte Kundenauftrag zu 100 Prozent geprüft, auf Kundenwunsch mit elektrischen Funktionskontrollen bis 1500 V. Die umfangreiche Lagerhaltung sorgt für kurze Lieferzeiten.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="leistungen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Leistungen</span><h2 class="d2 split"><span class="nw">Das Nützliche</span> <em><span class="nw">und das Angenehme.</span></em></h2></div><p data-r>Markenprodukte, maßgeschneiderte Konfektion und kompetente, persönliche Beratung, die Ihre Anforderungen in den Mittelpunkt stellt. Gemeinsam mit Ihnen entwickeln unsere Experten die optimale Lösung.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="sortiment" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Sortiment</span><h2 class="d2 split"><span class="nw">Jede Branche,</span> <em><span class="nw">jede Verbindung.</span></em></h2></div><p data-r>Steckverbinder, Kabel und Komponenten der führenden Hersteller, für Industrie und Energietechnik ebenso wie für Luftfahrt, Automation und Broadcast, mit eigenen Ansprechpartnern für jeden Bereich.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Qualität</span><p class="cr" data-r><span>DIN EN ISO 9001:2015</span><span>Prüfung bis 1500 V</span><span>Querschnitte 0,08 bis 185 mm²</span><span>Kleinserie bis Großserie</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="referenzen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Referenzen</span><h2 class="d2 split"><span class="nw">Für die richtige</span> <em><span class="nw">Verbindung gesorgt.</span></em></h2></div><p data-r>Vom Eiffelturm bis zur Zugspitze, vom Fernsehstudio bis zum Schienenfahrzeug: Projekte, bei denen Steckverbinder und Kabelkonfektionen von NIES electronic im Einsatz sind.</p></div>'+
   refs()+
  '</div></section>'+

  '<section class="sec dark2" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Besuchen Sie uns</span> <em><span class="nw">auf der SPS.</span></em></h2></div><p data-r>Steckverbinder, Kabelkonfektion und Lösungen für eine starke Industrie: vom 24. bis 26. November 2026 in Nürnberg, Halle 10.0, Stand 105.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihr Projekt,</span> <em><span class="nw">unsere Verbindung.</span></em></h2>'+
   '<p class="sub" data-r>Fragen Sie ein Angebot an, prüfen Sie Lagerbestände oder besprechen Sie Ihre Anwendung mit unseren Produktspezialisten.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab">Adresse</span><p>NIES electronic GmbH<br>Edisonstraße 7<br>60388 Frankfurt am Main</p></div>'+
    '<div><span class="lab">Kontakt</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAX+'</p></div>'+
    '<div><span class="lab">Service-Zeiten</span><p>Mo bis Fr 8:00 bis 12:00<br>Mo bis Do 13:00 bis 16:30<br>Fr 13:00 bis 15:30</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresse</span>NIES electronic GmbH<br>Edisonstraße 7, 60388 Frankfurt am Main</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/leistungen">Leistungen</a><br><a class="ul" href="#/sortiment">Sortiment</a><br><a class="ul" href="#/referenzen">Referenzen</a><br><a class="ul" href="#/aktuelles">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Bereiche</span>Industrieelektronik, Kabelkonfektion, Steckermontage und Kommunikationstechnik</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:800;font-size:60px;letter-spacing:.12em">NIES</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 NIES electronic GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",leistungen:"leistungen",sortiment:"sortiment",referenzen:"referenzen",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"NIES electronic — Steckverbinder, Kabelkonfektion und Lösungen aus Frankfurt am Main, seit 1932",x:"Start"};
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
