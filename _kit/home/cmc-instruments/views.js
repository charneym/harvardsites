/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><h3>'+esc(c[2])+'</h3><p>'+esc(c[3])+'</p><a class="lab lk ul" href="'+c[4]+'" target="_blank" rel="noopener">'+"Details"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Geschäftsführung</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul>'+
    '<p class="offs">Ein Team aus hochqualifizierten Chemikern und Ingenieuren verschiedenster Fachrichtungen, von der individuellen Kundenanfrage bis zur Inbetriebnahme und Schulung.</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* where cmc instruments are used (cmc-instruments.de > Home, Karriere, Ölsensorsysteme) */
function caps(){var C=[
  ["Prozessüberwachung","Halbleiter und Chemie","Feuchtespurenmessgeräte, Gasanalysatoren und Filter für die Prozessüberwachung, insbesondere in der Halbleiterindustrie, und für raue Betriebsumgebungen über Jahre.",'<path d="M6 28H50"/><rect x="18" y="18" width="20" height="20"/><path class="a" d="M24 28H32"/><circle class="f" cx="28" cy="28" r="2.4"/>'],
  ["Labor","LC-MS, GC, FTIR und TOC","Reinstgas direkt neben dem Analysengerät: Stickstoff, Wasserstoff, Null-Luft und Spülgas aus dem Generator statt aus teuren und teilweise gefährlichen Gasflaschen.",'<path d="M22 8V24L10 46H46L34 24V8"/><path d="M18 8H38"/><path class="a" d="M15 37H41"/><circle class="f" cx="28" cy="31" r="2.4"/>'],
  ["Zustandsüberwachung","Wind, Transformatoren, Hydraulik","Online-Ölsensorik für Großgetriebe in der Windtechnik, Hochspannungstransformatoren und ölgefüllte Anlagen: Frühwarnung statt Ausfallzeit.",'<path d="M28 50V22"/><path d="M28 22L12 12M28 22L46 16M28 22L26 4"/><circle cx="28" cy="22" r="3"/><path class="a" d="M18 50H38"/><circle class="f" cx="28" cy="22" r="1.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>cmc Instruments<span class="nomob"> · Eschborn · Made in Germany</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Reine Gase,</span> <span class="l">genau gemessen,</span> <span class="l"><em class="nw">sauber gefiltert.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Feuchtespurenmessgeräte, Gasgeneratoren, Filter und Gasanalysatoren für die Prozessüberwachung und das Labor, entwickelt und gefertigt ausschließlich in Deutschland.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Unsere Produkte '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt aufnehmen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Constantly redefining the difference.</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Mess-, Regel- und</span> <span class="nw">Analysentechnik</span> <span class="nw">für Chemie, Pharmazie,</span> <span class="nw">Petrochemie und Automobil,</span> <em><span class="nw nwk">von der Anfrage</span> <span class="nw nwk">bis zur Inbetriebnahme.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+</span><p class="k">Jahre Vertrieb von Gasanalysatoren und Gaschromatographen</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">24 h</span><p class="k">Vor-Ort-Service in der Regel, vom Standort im zentralen Rhein-Main-Gebiet</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1050</span><p class="k">barg: die höchste Druckstufe der Wasserstoff-Hochdruckfilter</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">NGM-Stickstoffgenerator, Schritt für Schritt</span><h2 class="d3"><span class="nw">Stickstoff aus</span> <em class="nw">der Druckluft.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Filter</span><span>Membran</span><span>LC-MS</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Erst wird</span> <span class="nw">vorgefiltert.</span></h2><p>Eine sehr effiziente Filterkombination reinigt die Druckluft, bevor sie die Membran erreicht. Das Filterset wechselt man einmal im Jahr, ohne Werkzeug.</p></article>'+
     '<article class="step"><h2><span class="nw">Die Membran</span> <span class="nw">trennt den Stickstoff.</span></h2><p>Eine der hochwertigsten Membranen auf dem Markt liefert kontinuierlich Stickstoff mit bis zu 99,7 % Reinheit, verschleißfrei und ganz ohne Strom.</p></article>'+
     '<article class="step"><h2><span class="nw">Stickstoff direkt</span> <span class="nw">ins LC-MS.</span></h2><p>Als Drying Gas, und mit der NGM-C Hybrid zusätzlich als Collision Cell Gas mit 99,9995 % Reinheit. Die Zahl der Gasausgänge wird für Ihr LC-MS ausgelegt.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split"><span class="nw">Gase erzeugen,</span> <em><span class="nw">messen und filtern.</span></em></h2></div><p data-r>Von Gasgeneratoren über die Spurenfeuchtemessung bis zur Ölsensorik: Analysenmesstechnik für Gase und Fluide, für eine lange Nutzungsdauer konzipiert.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="anwendungen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Anwendungen</span><h2 class="d2 split"><span class="nw">Vom Reinraum</span> <em class="nw">bis zur Windkraft.</em></h2></div><p data-r>Industrielle Kunden in Chemie, Pharmazie, Petrochemie, Automobilindustrie und Zulieferern setzen cmc Instruments in Prozess, Labor und Anlage ein, dazu in der Immissions- und Emissionsüberwachung.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Branchen</span><p class="cr" data-r><span>Halbleiter</span><span>Chemie</span><span>Pharmazie</span><span>Petrochemie</span><span>Automobil</span><span>Windtechnik</span></p></div>'+
   '<div class="qual q2"><span class="lab kick" data-r>Messgrößen</span><p class="cr" data-r><span>Spurenfeuchte</span><span>Taupunkt</span><span>Gaszusammensetzung</span><span>Ölzustand</span><span>Verlustfaktor tan δ</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="service" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Service und Systeme</span><h2 class="d2 split"><span class="nw">Geplant, gebaut</span> <em class="nw">und betreut.</em></h2></div><p data-r>Neben Standardgeneratoren plant und fertigt cmc Gasversorgungssysteme nach Bedarf, baut sie mit dem eigenen Service bei Ihnen auf und nimmt sie in Betrieb.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Leistungen</span><dl>'+
    '<div data-r><dt class="lab">Systemlösungen</dt><dd>Gasversorgung mit Kompressoren, Trocknern und Pufferbehältern, als Skid- oder Containeranlage</dd></div>'+
    '<div data-r><dt class="lab">NGM Plus 5</dt><dd>Garantieerweiterung zum Festpreis für weitere 5 Jahre, weltweit und ohne Wartungsvertrag</dd></div>'+
    '<div data-r><dt class="lab">Technischer Service</dt><dd>Service und Support weltweit, mit Gerätemodell und Seriennummer schnell zugeordnet</dd></div>'+
    '<div data-r><dt class="lab">Ersatzteile</dt><dd>Das richtige Teil für Ihr Modell, für planmäßige Wartung und Verschleiß</dd></div>'+
   '</dl></div>'+
   '<div class="bk"><span class="lab kick" data-r>Verfahren</span><p class="cr" data-r><span class="one">Stickstoffanlagen nach dem Prinzip der Druckwechseladsorption (PSA) oder mit Membrantechnologie, je nach Gasmenge und Reinheit</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Made in Germany,</span> <em class="nw">weltweit im Einsatz.</em></h2></div><p data-r>Arbeit, Entwicklung und Produktion finden ausschließlich in Deutschland statt, in Eschborn im Rhein-Main-Gebiet. Partner in Italien, Spanien, der Türkei, im Nahen Osten, in Japan und Indien betreuen Kunden vor Ort.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>Qualität und Forschung</span><ul>'+
     '<li data-r><b class="yr">ISO 9001:2015</b>Zertifiziertes Qualitätsmanagement für Gasgeneratoren, Feuchtespurenmessgeräte, Filter, Analysatoren und Ölsensorsysteme.</li>'+
     '<li data-r><b class="yr">Innovativ durch Forschung</b>Das Gütesiegel des Stifterverbands für die Deutsche Wissenschaft, für die eigene Forschungsarbeit.</li>'+
     '<li data-r><b class="yr">Eigene Entwicklung</b>OilQSens: nach cmc-Angaben das weltweit einzige System zur Online-Überwachung des Verlustfaktors tan δ direkt am Transformator.</li>'+
     '<li data-r><b class="yr">Partner</b>Vertretungen in Italien, Spanien, der Türkei, im Nahen Osten, in Japan und Indien.</li>'+
    '</ul></div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Messen</span><p class="cr" data-r><span>ACHEMA Frankfurt</span><span>analytica München</span><span>Analyse Industrielle Paris</span><span>ESHG</span><span>Metabolomics</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Auf den Messen</span> <em class="nw">der Analytik.</em></h2></div><p data-r>cmc Instruments zeigt Innovationen und bewährte Produkte regelmäßig auf internationalen Messen. Jeder Eintrag verlinkt auf den Beitrag.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Zögern Sie nicht,</span> <em class="nw">uns zu kontaktieren.</em></h2>'+
   '<p class="sub" data-r>Fragen zu unseren Produkten, ein Gasgenerator, der Service braucht, oder eine neue Systemlösung: Rufen Sie an, schreiben Sie uns oder besuchen Sie uns in Eschborn.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Adresse</span><p data-r><span>cmc Instruments GmbH</span><br><span>Rudolf Diesel Strasse 12 A</span><br><span>65760 Eschborn</span></p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></span><br><span>Fax '+FAXT+'</span></p></div>'+
    '<div><span class="lab" data-r>Registereintrag</span><p data-r><span>HRB 43659</span><br><span>Amtsgericht Frankfurt am Main</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresse</span>cmc Instruments GmbH<br>Rudolf Diesel Strasse 12 A, 65760 Eschborn</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/anwendungen">Anwendungen</a><br><a class="ul" href="#/service">Service</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Produkte</span>Gasgeneratoren, Spurenfeuchtemessung, Filter, Gasanalysatoren und Ölsensorsysteme.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:800;font-size:58px;letter-spacing:.12em">cmc Instruments</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 cmc Instruments GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",produkte:"produkte",anwendungen:"anwendungen",service:"service",unternehmen:"unternehmen",news:"news",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"cmc Instruments GmbH — Gasgeneratoren, Spurenfeuchtemessung, Filter und Ölsensorik, Eschborn",x:"Start"};
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
