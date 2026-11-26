/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function nwj(t){return t.split("|").map(function(x){return '<span class="nw">'+esc(x)+'</span>'}).join(" ")}
/* Adaption und Produktion (reinhardt-testsystem.de > Adaption, Sonstige Produkte, Inhalt). [area, name, text, url] */
var ADA=[
 ["Prüfadapter","Prüfadapter, manuell|und pneumatisch","Als Ergänzung zu unseren Testsystemen: eine ganze Reihe manueller und pneumatischer Prüfadapter, etwa die Typen 82C, 42C, 147 und 127, mit Schnittstellen- und Dockingboxen.",RE+"adaption.php"],
 ["Zubehör","Adapterzubehör","Kontaktierungsarme mit Kontakt-, Führungs- und Hochstromstiften, Wechselplatten und Adaptergrundgehäuse für die REINHARDT-Adapter.",RE+"adaption.php"],
 ["Bohrcenter","REINHARDT Bohrcenter|AAE-CNC 500","Das Prüfadapter-Erstellungscenter für den eigenen Nadelbettbau: typische Kosten von 500 bis 800 Euro netto für ein Nadelbett.",RE+"adaption.php"],
 ["Bauteilzähler","Elektronischer Bauteilzähler|ZE 300","Lasertechnik statt Lichtschranke: zählt axial, radial und SMD gegurtete Bauteile vorwärts und rückwärts, selbst bei mehr als 100.000 Bauteilen fehlerfrei.",RE+"sonstige_produkte/elektronischer_bauteilzaehler_ze_300.php"],
 ["Umspulen","Bauteilzähler|ZE 300 UV","Die erweiterte Ausführung mit Umspulvorrichtung für die typischen 7-, 13- und 22-Zoll-Bauteilrollen.",RE+"sonstige_produkte.php"]];
function prods(){return '<ul class="pfr pipe np">'+ADA.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+nwj(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
/* Testsysteme as six cards, each with a small line icon (content.js PRODS) */
var ICO=[
 '<path d="M8 12H48V36H8Z"/><path class="a" d="M14 28L20 20L26 26L32 16L42 24"/><path d="M20 36V44M36 36V44M12 44H44"/>',
 '<path d="M8 10H48V46H8Z"/><path class="a" d="M16 18H22V24H16ZM28 18H34V24H28ZM16 32H22V38H16ZM28 32H34V38H28Z"/><path d="M40 18V38"/>',
 '<path d="M10 14H46V42H10Z"/><path class="a" d="M30 18L22 30H30L26 40"/><path d="M14 46H42"/>',
 '<path d="M8 12H48V40H8Z"/><path class="a" d="M16 22L22 26L16 30M26 32H36"/><path d="M22 46H34M28 40V46"/>',
 '<path d="M6 28C14 28 16 16 24 16H32"/><path d="M6 36C14 36 16 44 24 44H32"/><path class="a" d="M32 12H46V48H32Z"/><path d="M36 20H42M36 28H42M36 36H42"/>',
 '<path d="M12 8H38L46 16V48H12Z"/><path class="a" d="M20 26H38M20 33H38M20 40H30"/><path d="M38 8V16H46"/>'];
function caps(){return '<div class="caps six">'+PRODS.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+ICO[i]+'</svg><span class="lab">'+esc(c[0])+'</span><h3>'+nwj(c[1])+'</h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* Umwelt-Sensoren (reinhardt-testsystem.de > Umwelt-Sensoren, Wetterstationen) */
function refs(){var R=[
  ["MWS 10Y","7 Sensoren","Wetterstation mit Datenlogger: misst standardmäßig Temperatur und relative Feuchte, dazu unter anderem Regenmenge und Globalstrahlung."],
  ["MWS 88-2Y","Ø 145 mm","Wetterstation mit 5 Sensoren und Datenlogger in einem Schutzgehäuse mit 145 mm Durchmesser."],
  ["MWS 55VY","32 GB","Wetterstation mit 5 Sensoren und Datenlogger auf SD-Karte: Temperatur, relative Feuchte bzw. Taupunkt und barometrischer Druck."],
  ["MWS 3Y","Wind","5 Sensoren für Temperatur, relative Feuchte bzw. Taupunkt, barometrischen Druck und Windgeschwindigkeit mit Windspitze."],
  ["Zusatzmodule","WLAN · GSM","WLAN-Modul, GSM-Modul und ein Mobilitätspaket für den sicheren Transport erweitern Wetterstationen und Klima-Sensoren."],
  ["Anzeigen","Ohne PC","Eine eigene Familie von Anzeigen zeigt die Messwerte unserer Produkte auch ohne PC an; dazu Software wie das Universal Wetterdisplay."]];
  return '<ol class="hst rfs">'+R.map(function(h){return '<li><span class="lab">'+esc(h[0])+'</span><span class="yr">'+esc(h[1])+'</span><p>'+esc(h[2])+'</p></li>'}).join("")+'</ol>'}
var NEWS=[
 ["10.–13.11.2026","electronica 2026 in München: REINHARDT in Halle A4, Stand 401","exhibitors.electronica.de","https://exhibitors.electronica.de/ausstellerportal/2026/aussteller/ausstellerdetails/reinhardt-system-und-messelectronic-gmbh/?elb=809.1100.1622.1.111"],
 ["Neues Produkt","MCT 192-2: der neue REINHARDT Kabel- und Verdrahtungstester","reinhardt-testsystem.de",RE+"unternehmen/pressemitteilungen_news.php"],
 ["Neues Produkt","Das REINHARDT CAN-FD-Modul: zwei Kanäle, galvanisch trennbar, für den In-Circuit-Test","reinhardt-testsystem.de",RE+"unternehmen/neue_produkte.php"],
 ["Schulung","Seminare und Schulungen zu den REINHARDT-Testsystemen: zur Anmeldung","reinhardt-testsystem.de","https://www.reinhardt-testsystem.de/mailing/seminaranmeldung.php"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Automatische Testsysteme<span class="nomob"> · In-Circuit und Funktion</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Von Praktikern</span> <span class="l"><em>für Praktiker.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Automatische Testsysteme für den In-Circuit- und Funktionstest elektronischer Flachbaugruppen, Module und Geräte: vom Testsystem bis zum Prüfadapter, von der CAD-Datenübernahme bis zur statistischen Auswertung.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/testsysteme">Testsysteme ansehen '+ARR+'</a><a class="btn" href="#/kontakt">Angebot anfragen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Familienunternehmen</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Führend in Deutschland</span> <span class="nw">und der Schweiz</span> <span class="nw">bei automatischen</span> <span class="nw">Testsystemen für</span> <span class="nw">den In-Circuit-</span> <span class="nw">und Funktionstest.</span> <em><span class="nw">Entwicklung, Produktion</span> <span class="nw">und Service</span> <span class="nw">aus einer Hand.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1977</span><p class="k">seitdem liefert REINHARDT Bauteilzählgeräte, heute in der sechsten Generation</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3.840</span><p class="k">Messkanäle im In-Circuit- und Funktionstestsystem ATS-SMFT 780 (maximal)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2009</span><p class="k">seitdem in zweiter Generation geführt, von Melanie Reinhardt, Geschäftsführerin und Inhaberin</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">In-Circuit · Funktion</span><h2 class="d3"><span class="nw">Vom Layout zur</span> <em><span class="nw">geprüften Baugruppe.</span></em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Adaption</span><span>ICT</span><span>FKT</span><span>Auswertung</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Adaptieren.</h2><p>Aus den CAD-Daten der Baugruppe entstehen Prüfbarkeitsanalyse, Adaptionskonstruktion und das Bohrprogramm für den Nadelbettadapter. Mit dem REINHARDT Bohrcenter kostet ein Nadelbett typisch 500 bis 800 Euro netto.</p></article>'+
     '<article class="step"><h2>In-Circuit-Test.</h2><p>Die Baugruppe liegt auf den Kontaktstiften. Der In-Circuit-Test prüft Pinkontakt, Kurzschluss und Isolation, findet Lötfehler und Unterbrechungen und erkennt verpolte ICs und Transistoren, auf bis zu 3.840 Messkanälen.</p></article>'+
     '<article class="step"><h2>Funktionstest.</h2><p>Programmierbare Netzgeräte, Generatoren und eine elektronische Last versorgen und stimulieren die Baugruppe; gemessen werden Spannungen, Frequenzen und Zeiten. Feldbusse wie CAN-FD und LIN und das Flashing gehören dazu.</p></article>'+
     '<article class="step"><h2>Auswerten.</h2><p>Die grafische Fehlerortdarstellung zeigt den Fehler direkt auf der Baugruppe. Ausfall- und Reparaturstatistik, Histogramm und Traceability sichern die Qualität in der Serie.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="testsysteme" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Testsysteme</span><h2 class="d2 split"><span class="nw">Testlösungen für</span> <em><span class="nw">die Elektronik.</span></em></h2></div><p data-r>Das breiteste Spektrum an Testlösungen, für Automotive, Avionik, Industrieelektronik, Sensorik und EMS: Testsysteme, Erweiterungen und Software für die Qualitätssicherung in der Elektronik, entwickelt, produziert und betreut aus einer Hand.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="adaption" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Adaption · Produktion</span><h2 class="d2 split"><span class="nw">Vom Nadelbett</span> <em><span class="nw">bis zum Bauteilzähler.</span></em></h2></div><p data-r>Als Ergänzung zu unseren Testsystemen liefern wir Prüfadapter, das Zubehör und das Bohrcenter für den eigenen Nadelbettbau, dazu bewährte Hilfsmittel für die Produktion.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Aus einer Hand</span><p class="cr" data-r><span>Entwicklung</span><span>Produktion</span><span>Service</span><span>Seminare und Schulung</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="umwelt" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Umwelt-Sensoren</span><h2 class="d2 split"><span class="nw">Von Grönland</span> <em><span class="nw">bis in die Wüste.</span></em></h2></div><p data-r>Wetterstationen und Umweltsensorik nach WMO, mit umfassender Software: im Einsatz in der Umweltmesstechnik und Forschung, auf Flughäfen, beim Militär und bei Automobil- und Reifenherstellern.</p></div>'+
   refs()+
  '</div></section>'+

  '<section class="sec dark2" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Messen, Produkte</span> <em><span class="nw">und Seminare.</span></em></h2></div><p data-r>Im November auf der electronica 2026 in München, Halle A4, Stand 401: Testsysteme, Prüfadapter und Umweltsensorik. Dazu neue Produkte und unsere Seminare.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihre Baugruppe,</span> <em><span class="nw">unser Testsystem.</span></em></h2>'+
   '<p class="sub" data-r>Fragen Sie ein Angebot an, besprechen Sie Ihre Prüfaufgabe mit uns oder melden Sie sich zu einer Schulung an.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab">Adresse</span><p>REINHARDT System- und<br>Messelectronic GmbH<br>Bergstraße 33<br>86911 Dießen-Obermühlhausen</p></div>'+
    '<div><span class="lab">Kontakt</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAX+'</p></div>'+
    '<div><span class="lab">Anfahrt</span><p>Über die A96 München–Lindau,<br>Ausfahrt Schöffelding,<br>dann über Finning nach Obermühlhausen</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresse</span>REINHARDT System- und Messelectronic GmbH<br>Bergstraße 33, 86911 Dießen-Obermühlhausen</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/testsysteme">Testsysteme</a><br><a class="ul" href="#/adaption">Adaption</a><br><a class="ul" href="#/umwelt">Umwelt-Sensoren</a><br><a class="ul" href="#/aktuelles">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Bereiche</span>In-Circuit- und Funktionstest, Prüfadapter, Wetterstationen und Umweltsensorik</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Tinos\',\'Times New Roman\',serif;font-weight:700;font-size:60px;letter-spacing:.1em">REINHARDT</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 REINHARDT</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",testsysteme:"testsysteme",adaption:"adaption",umwelt:"umwelt",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"REINHARDT System- und Messelectronic — In-Circuit- und Funktionstestsysteme, Prüfadapter und Wetterstationen",x:"Start"};
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
