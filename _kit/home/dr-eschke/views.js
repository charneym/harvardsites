/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function tools(){return '<div class="frtw"><ol class="frtl">'+TOOLS.map(function(t,i){
  return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(t)+'</h3></li>'}).join("")+'</ol>'+
  '<aside class="frsp" data-r><span class="lab kick">CT350 Comet T · Funktions- und In-Circuit-Test</span><dl>'+
   '<div><dt class="lab">ICT-Testpunkte</dt><dd>bis 2736</dd></div>'+
   '<div><dt class="lab">Abtastraten</dt><dd>1500 MS/s digital, 5 GS/s analog</dd></div>'+
   '<div><dt class="lab">Amplitudenauflösung</dt><dd>24 Bit analog</dd></div>'+
   '<div><dt class="lab">Strommessung</dt><dd>Auflösung 1 pA</dd></div>'+
   '<div><dt class="lab">Leistung</dt><dd>bis 10 kW mit Power Rack</dd></div>'+
  '</dl><p>Mit High Pin Count Interface, Adapter, Monitor und integriertem PC; sehr schneller Adapterwechsel.</p></aside></div>'}
/* four strengths of the CT3xx family (dr-eschke.de > Start: "Besondere Eigenschaften", "CT3XX Testerfamilie") */
function caps(){var C=[
  ["CTestAdvisor","<span class=\"nw\">Ein offenes</span> <span class=\"nw\">Tester-Betriebssystem</span>","Ein interpreterbasierter Testsequenzer mit offener Systemstruktur: CAD- und Testdatenimport, automatischer Testprogrammgenerator, Testabdeckungsanalyse und die Einbindung externer Geräte, Systeme und Software.",'<rect x="6" y="10" width="44" height="30"/><path d="M20 48H36M28 40V48"/><path class="a" d="M14 20L20 25L14 30M24 30H34"/>'],
  ["Modultechnik","<span class=\"nw\">Frei skalierbar,</span> <span class=\"nw\">Module austauschbar</span>","Ein einheitliches Tester-Bussystem und eine einheitliche Betriebssoftware: Die Module lassen sich zwischen den Testertypen tauschen, die Testerressourcen wachsen nach Bedarf.",'<rect x="6" y="8" width="44" height="40"/><path d="M15 8V48M24 8V48M33 8V48"/><path class="a" d="M42 14V42"/>'],
  ["Mixed Signal","<span class=\"nw\">Schnell gemessen,</span> <span class=\"nw\">fein aufgelöst</span>","Abtastraten bis 1500 MS/s digital und 5 GS/s analog, bis zu 6 GS/s Timing-Auflösung, programmierbare Pegel, Frequenzen und Delays, dazu Teach-In-Funktionen.",'<path d="M4 40H12V16H20V40H28V16H36V40H52"/><path class="a" d="M4 28C10 12 16 12 22 28S34 44 40 28S48 18 52 22"/>'],
  ["Logging und Reparatur","<span class=\"nw\">Papierlos repariert,</span> <span class=\"nw\">lückenlos protokolliert</span>","Logging und Statistik mit SQL-Export, das ParetoX-Diagramm für den Prüfprozess in Echtzeit und eine Reparaturstation mit serverbasierter Datenverwaltung, angebunden an Ihr Qualitätsmanagement.",'<path d="M6 50H50"/><rect x="9" y="14" width="8" height="36"/><rect x="21" y="26" width="8" height="24"/><rect x="33" y="36" width="8" height="14"/><path class="a" d="M13 12L25 6L37 4L48 3"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function svc(){var S=[
  ["Beratung","Prüfstrategien zu Ihren Testobjekten, die Optimierung von Testsystem und Adapter und Komplettlösungen zur Prüftechnik."],
  ["Testprojekte","Systemkonfiguration für ICT/MDA, Funktionstest, Boundary Scan Test und AOI-Testfunktionen, mit Erstellung der Testprogramme."],
  ["Programmierung","Programmierung, Debugging, Logging und Statistik, die papierlose Reparaturstation und kundenspezifische Testeranpassungen."],
  ["Adapter und Integration","Wir erstellen Testadapter und koppeln die Testsysteme an Handling- und Inline-Systeme."],
  ["Service","Tester-Selbsttest, Wartung und Reparatur sowie die Kalibrierung der Testsysteme."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["2020","CT350 Comet T EH mit Paralleltest-Option; neue Module DM1G, XIMP20 und PSM2M; TCP/IP Interface"],
  ["2017","Neue Module SA5-E, AM30-4B und CDM24; serverbasierte Reparaturstation"],
  ["2013","Kompakttester CT350 Comet C; Thermostreamer mit Kopplung an die Testsysteme"],
  ["2009","CT350 Comet T, Analogmodul AM30-4, Boundary Scan Test und Tester-Betriebssystem TestOS4"],
  ["2005","High-Speed-Kombinationstester der Serie CT300: Galaxy, Meteor und Satellite"],
  ["1998","Funktionstester DAT500 mit 500 MS/s analogen und 1024 digitalen Kanälen"],
  ["1990","Gründung des Unternehmens; Digitaltester DKTS-2 mit 88 Kanälen bei 30 MS/s"]];
  return '<ol class="hst">'+H.map(function(h){return '<li data-r><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Kombinationstester<span class="nomob"> · CT3xx</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Prüftechnik aus Berlin,</span> <span class="l"><em class="nw">seit 1990.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Die Dr. Eschke Elektronik GmbH entwickelt und fertigt die Testsysteme der Familie CT3xx für Fertigung, Entwicklung und Service: In-Circuit-Test, Funktionstest, Boundary Scan und AOI-Testfunktionen in einem System.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/testsysteme">Unsere Testsysteme '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Seit 1990 in Berlin</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Die Anforderungen</span> <span class="nw">unserer Kunden bestimmen</span> <span class="nw">Inhalt und Richtung</span> <span class="nw">unserer Entwicklungen.</span> <em><span class="nw">Wir liefern Testsysteme</span> <span class="nw">und Komplettlösungen</span> <span class="nw">zur Prüftechnik.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1990</span><p class="k">gegründet in Berlin; hier entwickeln, fertigen und betreuen wir bis heute unsere Tester</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">750+</span><p class="k">Testsysteme international im Einsatz, von Deutschland und den Niederlanden bis China und Singapur</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6 GS/s</span><p class="k">Timing-Auflösung im Burst-Modus mit dem High-Speed-Digitalmodul DM1G</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Ein Prüfablauf am CT3xx</span><h2 class="d3"><span class="nw">Von der Kontaktierung</span> <em class="nw">zum Ergebnis.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Adapter</span><span>ICT</span><span>Funktion</span><span>Logging</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Erst wird</span> <span class="nw">der Prüfling kontaktiert.</span></h2><p>Der Adapter setzt seine federnden Prüfstifte auf die Testpunkte der Baugruppe, beim CT350 Comet T auf bis zu 2736. Die Adapter-Kassette ist schnell gewechselt.</p></article>'+
     '<article class="step"><h2><span class="nw">Der In-Circuit-Test</span> <span class="nw">misst jedes Bauteil.</span></h2><p>Über die Prüfstifte misst der Tester einzelne Bauteile direkt auf der Baugruppe, Widerstände, Kapazitäten und Induktivitäten, mit dem Modul XIMP20 auch sehr kleine Werte.</p></article>'+
     '<article class="step"><h2><span class="nw">Der Funktionstest</span> <span class="nw">prüft das Zusammenspiel.</span></h2><p>Mixed-Signal-Tests mit 1500 MS/s digital und 5 GS/s analog, programmierbaren Pegeln, Frequenzen und Delays: Die Baugruppe läuft, wie sie später arbeiten soll.</p></article>'+
     '<article class="step"><h2><span class="nw">Jedes Ergebnis</span> <span class="nw">wird protokolliert.</span></h2><p>Logging und Statistik halten jeden Prüfling fest. Das ParetoX-Diagramm zeigt die häufigsten Fehler in Echtzeit, die Reparaturstation arbeitet papierlos.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="testsysteme" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Testsysteme</span><h2 class="d2 split"><span class="nw">Sieben Prüfverfahren,</span> <em class="nw">eine Testerfamilie.</em></h2></div><p data-r>In-Circuit-Test, Funktionstest, Boundary Scan Test und AOI-Testfunktionen in einem einzigen Kompakttester: Die CT3xx-Systeme ersetzen verschiedene Test- und Messgeräte und kombinieren die Verfahren flexibel.</p></div>'+
   tools()+
  '</div></section>'+

  '<section class="sec light" id="technik" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technik</span><h2 class="d2 split"><span class="nw">Was CT3xx</span> <em class="nw">für Sie bedeutet.</em></h2></div><p data-r>Ein Bussystem, eine Betriebssoftware und Module, die zwischen allen Testertypen austauschbar sind: Das hält die Testerfamilie flexibel und die Kosten gering.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Neue Module</span><p class="cr" data-r><span>DM1G Digital</span><span>XIMP20 Impedanz</span><span>AM30-4B Analog</span><span>CDM24 Farbanalyse</span><span>PSM2M</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="service" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Service</span><h2 class="d2 split"><span class="nw">Vom Prüfkonzept</span> <em class="nw">bis zur Kalibrierung.</em></h2></div><p data-r>Wir begleiten Ihre Prüftechnik über den ganzen Weg: mit Beratung, Testprojekten, Programmierung und Service, und mit einem fünftägigen Trainingsprogramm in Berlin.</p></div>'+
   svc()+
   '<div class="trn" data-r><span class="lab kick">Trainingsprogramm · 5 Tage · Berlin</span><p>Tester-Betriebssystem und Module, Funktions- und In-Circuit-Test, CAD-Import, Testabdeckungsanalyse, Testprogrammgenerator und Debugging, Logging und Statistik, Boundary Scan, AOI und die Kopplung externer Geräte.</p><a class="ul" href="mailto:'+MAILS+'">'+MAILS+'</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Über 25 Jahre</span> <em class="nw">im Testerbau.</em></h2></div><p data-r>Am Hauptsitz in Berlin entwickeln, produzieren und vertreiben wir unsere Testsysteme und betreuen sie im Support. Mehr als 750 davon sind international im Einsatz.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Ansprechpartner</span><ul>'+
     '<li data-r><span class="nm">Thorsten Schmieder</span><span class="lab rl">Geschäftsführender Gesellschafter</span></li>'+
     '<li data-r><span class="nm">Martin Böhler</span><span class="lab rl">Vertrieb, Support, Service · Region Südwest</span></li>'+
    '</ul></div>'+
    '<div class="engpol"><span class="lab kick" data-r>Firmengeschichte</span>'+hist()+'</div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Im Einsatz in</span><p class="cr" data-r><span>Deutschland</span><span>Niederlande</span><span>Österreich</span><span>Schweiz</span><span>China</span><span>Malaysia</span><span>Rumänien</span><span>Slowenien</span><span>Malta</span><span>Philippinen</span><span>Singapur</span><span>Ungarn</span><span>Norwegen</span><span>Tschechien</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Zuletzt in München,</span> <em class="nw">auf der productronica.</em></h2></div><p data-r>Neue Module, neue Software-Funktionen und unsere Messeauftritte. Jeder Eintrag verweist auf seine Quelle.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihre Baugruppe,</span> <em class="nw">unser Testsystem.</em></h2>'+
   '<p class="sub" data-r>Sprechen Sie uns an, vom einzelnen Prüfadapter bis zur kompletten Testlösung für Ihre Fertigung.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail senden '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Hauptsitz</span><p data-r><span>Dr. Eschke Elektronik GmbH</span><br><span>Wolfener Straße 32–34, Haus J</span><br><span>12681 Berlin</span></p></div>'+
    '<div><span class="lab" data-r>Information und Vertrieb</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+MAILV+'">'+MAILV+'</a><br><span>Telefon '+TELT+'</span></p></div>'+
    '<div><span class="lab" data-r>Support</span><p data-r><a class="ul" href="mailto:'+MAILS+'">'+MAILS+'</a><br><span>Telefon '+TELT+'</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresse</span>Dr. Eschke Elektronik GmbH, Wolfener Straße 32–34, Haus J, 12681 Berlin, Deutschland</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/testsysteme">Testsysteme</a><br><a class="ul" href="#/technik">Technik</a><br><a class="ul" href="#/service">Service</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Testsysteme</span>Kombinationstester CT3xx für Fertigung, Entwicklung und Service. Verkauf nur an Unternehmen.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:400;font-size:44px;letter-spacing:.2em">DR. ESCHKE ELEKTRONIK</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Dr. Eschke Elektronik GmbH · Amtsgericht Berlin-Charlottenburg HRB 73704</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",testsysteme:"testsysteme",technik:"technik",service:"service",unternehmen:"unternehmen",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Dr. Eschke Elektronik GmbH — Testsysteme für die Elektronikfertigung, Berlin",x:"Start"};
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
