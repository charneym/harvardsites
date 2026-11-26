/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Produkte '+ARR+'</a></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Reinraum / Sicherheitslabore","Druckkaskaden überwachen","In Pharmaindustrie, Halbleiterfertigung, Medizintechnik und Forschung liefern FISCHER Messgeräte die Werte für Druck, Temperatur und Feuchte, mit höchster Präzision und lange währender Reproduzierbarkeit.",FM+"solutions/reinraum",'<path d="M8 44V16H48V44Z"/><path class="a" d="M22 16V44M36 16V44"/><circle class="f" cx="15" cy="30" r="2.2"/><circle class="f" cx="29" cy="30" r="2.2"/><circle class="f" cx="42" cy="30" r="2.2"/>'],
  ["Gebäudetechnik","Lüftung und Pumpen","Überwachung von Volumenströmen, Filtern und Pumpen und die energieoptimierte Auslegung von Lüftungsanlagen, zum Beispiel mit dem DE90 der FISCHER PRO-LINE®.",FM+"solutions/gebaeudetechnik",'<path d="M10 46V22L28 10L46 22V46Z"/><path class="a" d="M18 30H38M18 37H38"/><circle class="f" cx="28" cy="22" r="2.2"/>'],
  ["Prozessoptimierung","Lecks erkennen","Lösungen auf Basis von Druck, Differenzdruck, Durchfluss, Füllstand und Temperatur: Verluste vermindern, Verbräuche reduzieren und Betriebskosten senken.",FM+"solutions/prozessoptimierung",'<path d="M8 40H18L24 18L32 44L38 28H48"/><path class="a" d="M8 48H48"/><circle class="f" cx="24" cy="18" r="2.2"/>'],
  ["OEM-Geräte","Kundenspezifisch, in Serie","Mess- und regeltechnische Lösungen zur direkten Integration in Komplettlösungen: vom Lasten- und Pflichtenheft über Musterbau und Zulassung bis zur Freigabe der Serie.",FM+"solutions/oem-geraete",'<path d="M12 14H44V42H12Z"/><path class="a" d="M20 24H36M20 32H30"/><circle class="f" cx="38" cy="34" r="2.2"/>'],
  ["Energieoptimierung","Energie sinnvoll nutzen","Geräte für das Energiemanagement, etwa der zweikanalige Differenzdruckschalter und -transmitter DE44 für Volumenströme in Zu- und Abluft.",FM+"solutions/energieoptimierung",'<path d="M30 8L14 32H28L24 48L42 22H28Z"/><path class="a" d="M10 50H46"/><circle class="f" cx="28" cy="32" r="2.2"/>'],
  ["Erneuerbare Energien","Blockheizkraftwerke und Biogas","Messgeräte zur Überwachung wichtiger Anlagenparameter: Gasdruck und Füllstand im Fermenter, Druck im Wasserkreislauf, Temperatur und Strömung im Wärmekreis.",FM+"solutions/erneuerbare-energien",'<circle cx="28" cy="28" r="18"/><path class="a" d="M28 28L28 12M28 28L42 36M28 28L14 36"/><circle class="f" cx="28" cy="28" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<a class="cap" href="'+c[3]+'" target="_blank" rel="noopener"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[4]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></a>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Mess- und Regeltechnik<span class="nomob"> · Bad Salzuflen</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Präzise gemessen,</span> <span class="l"><em class="nw">seit 1950.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>FISCHER entwickelt und fertigt in Bad Salzuflen Messgeräte für Druck, Differenzdruck, Feuchte und Temperatur und Füllstand, als Standardgerät oder als Lösung aus einer Hand.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Zu den Produkten '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Know-how seit 1950 · Made in Germany</span>'+
   '<h2 class="txt" id="mani">Ein inhabergeführtes Familienunternehmen im Herzen von Ostwestfalen-Lippe, das seit 1950 für <em>innovative Lösungen in der Mess- und Regeltechnik</em> steht.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1950</span><p class="k">gegründet, heute inhabergeführt und konzernunabhängig</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">120+</span><p class="k">Mitarbeiter, bei einem Umsatz von knapp 20 Millionen Euro im Jahr 2025</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10 %</span><p class="k">des Umsatzes fließen jedes Jahr in Forschung und Entwicklung</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Reinraumtechnik</span><h2 class="d3"><span class="nw">Die Druckkaskade,</span> <em class="nw">sicher überwacht.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Kaskade</span><span>Messen</span><span>Regeln</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Ein Gefälle aus Druck.</h2><p>Reinräume schützen Produkte vor luftgetragenen Partikeln. Belüftungsanlagen bauen dazu, je nach Reinraumklasse, eine Druckkaskade auf: Die Luft strömt stets vom reineren Raum nach außen, nie hinein.</p></article>'+
     '<article class="step"><h2>Jede Stufe gemessen.</h2><p>Differenzdrucktransmitter wie der DE90 erfassen den Druckunterschied zwischen den Räumen, ab 25 Pa Messbereich, mit Farbwechseldisplay und Schaltausgängen für den Alarm.</p></article>'+
     '<article class="step"><h2>Werte für die Leittechnik.</h2><p>Druck, Temperatur und Feuchte werden gemessen, aufgezeichnet und an die Gebäudeleittechnik übergeben, als Regelgröße für die Lüftung, analog von 4 bis 20 mA oder digital.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split">Messen <em>aus einer Hand.</em></h2></div><p data-r>Unsere Kompetenz umfasst eine Vielzahl mess- und regeltechnischer Geräte: Ob Druck, Differenzdruck, Temperatur, Füllstand oder Durchfluss, bei Messaufgaben bieten wir die Lösung aus einer Hand.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Neu: DD90</span><p class="cr" data-r><span>FISCHER PRO-LINE®</span><span>0…60 mbar bis 0…25 bar</span><span>Edelstahl-Messsystem 1.4404</span><span>IO-Link, RS485 Modbus RTU</span><span>0/4…20 mA, 0/2…10 V, 1…5 V</span><span>Auch für Trinkwasser</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="solutions" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Solutions</span><h2 class="d2 split">Lösungen für <em>Ihre Anwendung.</em></h2></div><p data-r>Neben Standardgeräten entwickeln wir Systemlösungen für Ihre Branche, in enger Zusammenarbeit mit Ihnen, technisch hochwertig und wirtschaftlich nutzbar.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen · developing solutions</span><h2 class="d2 split"><span class="nw">Innovativ, effizient</span> <em class="nw">und kundennah.</em></h2></div><p data-r>An modernsten Fertigungsanlagen produziert FISCHER Qualität „Made in Germany“. Regionale Außendienst-Mitarbeiter betreuen die Kunden in Deutschland, international unterstützen bewährte Partner in vielen Ländern den Vertrieb.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Unsere Grundsätze</span><dl>'+
    '<div data-r><dt class="lab">Fertigungstiefe</dt><dd>Moderne Fertigungstechnologien und eine hohe Fertigungstiefe: hohe Qualität, kurze Reaktionszeiten, termintreue Lieferungen</dd></div>'+
    '<div data-r><dt class="lab">Partnerschaft</dt><dd>Faire Umgangsformen mit Kunden, Lieferanten und Mitarbeitern; individuelle Lösungen mit modularen Produktkonzepten</dd></div>'+
    '<div data-r><dt class="lab">Unabhängigkeit</dt><dd>Inhabergeführt und konzernunabhängig, mit kontrolliertem Wachstum aus eigener Kraft</dd></div>'+
    '<div data-r><dt class="lab">Team</dt><dd>Ein gutes Betriebsklima, qualifizierte Mitarbeiter und eine geringe Fluktuation</dd></div>'+
   '</dl></div>'+
   '<div class="bk"><span class="lab kick" data-r>Geschäftsführung</span><p class="cr" data-r><span>Günter B. Gödde</span><span>Torsten Malischewski</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split">News <em>und Messen.</em></h2></div><p data-r>Neue Geräte, Updates für Bestandsgeräte und die Messen, auf denen Sie FISCHER persönlich treffen. Am 16. September 2026 war FISCHER zudem auf der MEORGA in Ludwigshafen.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihre Aufgabe,</span> <em class="nw">unsere Lösung.</em></h2>'+
   '<p class="sub" data-r>Für Anfragen, Angebote und Beratung erreichen Sie uns direkt in Bad Salzuflen, oder Ihren Ansprechpartner im Außendienst und bei unseren Vertretungen weltweit.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>FISCHER Mess- und Regeltechnik GmbH<br>Bielefelder Straße 37a<br>32107 Bad Salzuflen</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Ansprechpartner</span><p data-r><a class="ul" href="'+FM+'kontakte/ansprechpartner" target="_blank" rel="noopener">National und international</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>FISCHER Mess- und Regeltechnik GmbH<br>Bielefelder Straße 37a, 32107 Bad Salzuflen</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/solutions">Solutions</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/aktuelles">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Produkte</span>Druck · Differenzdruck<br>Feuchte / Temperatur<br>Füllstand · Signalverarbeitung</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:500;font-size:58px;letter-spacing:.16em">FISCHER</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 FISCHER Mess- und Regeltechnik GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",reinraum:"story",produkte:"produkte",solutions:"solutions",unternehmen:"unternehmen",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"FISCHER Mess- und Regeltechnik — Druck, Differenzdruck, Füllstand und Temperatur seit 1950, Bad Salzuflen",x:"Start"};
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
