/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="prd">'+PROD.map(function(c){
  return '<li><a href="'+c[4]+'" target="_blank" rel="noopener"><span class="pim"><img src="'+c[3]+'" alt="'+esc(c[1])+', Standardsystem von BUSCH Microsystems" width="708" height="580" loading="lazy" decoding="async"></span><span class="lab tg" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p><span class="lab lk" data-r>Datenblatt '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function opts(){return '<div class="qual"><span class="lab kick" data-r>Optionen</span><p class="cr" data-r>'+OPT.map(function(o){return '<span>'+esc(o)+'</span>'}).join("")+'</p></div>'}
function apps(){return '<div class="ev ind"><span class="lab kick" data-r>Anwendungen</span><dl>'+APP.map(function(c){return '<div data-r><dt class="lab">'+esc(c[0])+'</dt><dd>'+esc(c[1])+'</dd></div>'}).join("")+'</dl></div>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* the three feet of BUSCH Engineering (busch-microsystems.de > Engineering), each with a small line icon */
var ICO={
 c:'<svg viewBox="0 0 56 56"><path d="M28 8L48 19V39L28 50L8 39V19Z"/><path d="M8 19L28 30L48 19M28 30V50"/><path class="a" d="M2 19V39M0 19H4M0 39H4"/></svg>',
 d:'<svg viewBox="0 0 56 56"><path d="M6 34H50"/><path d="M10 34V24H22V34M26 34V24H38V34"/><path class="a" d="M6 42H50"/><path d="M42 18H50V26H42Z"/><path d="M46 26V34"/></svg>',
 s:'<svg viewBox="0 0 56 56"><path d="M6 10H50V44H6Z"/><path d="M6 18H50"/><path class="a" d="M12 38C18 38 20 26 26 26S34 34 40 30 44 24 46 24"/></svg>'};
var ENG=[
 ["c","CAD-Konstruktion","Wir entwerfen Ihre Lösung.","Aus ersten Ideen, losen Skizzen oder Anforderungen werden reale Produkte, die exakt zum Anforderungsprofil passen: von der Granitbaugruppe bis zum 3-Achssystem, konstruiert mit SOLIDWORKS."],
 ["d","Antriebs- & Steuerungstechnik","Wir steuern Ihre Lösung.","Exakt abgestimmte Antriebe und Steuerungen, bevorzugt mit EtherCAT als Bussystem: für kürzere Taktzeiten, höhere Durchsätze und ausgezeichnete Wiederholgenauigkeiten."],
 ["s","Software","Die Basis effizienter Produktion.","Anwenderfreundliche, speziell angepasste Steuerungssoftware, in eigener Regie mit bewährten Partnern im Software Engineering entwickelt."]];
function eng(){return '<div class="caps eng">'+ENG.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["17.–22.01.2026","SPIE Photonics West 2026, Moscone Center, San Francisco","SPIE","https://spie.org/conferences-and-exhibitions/photonics-west/exhibitions"],
 ["18.–21.11.2025","Aussteller auf der productronica 2025 in München","productronica","https://exhibitors.productronica.com/ausstellerportal/2025/aussteller/ausstellerdetails/busch-microsystems-gmbh/?elb=228.1100.2271.1.111"],
 ["24.–27.06.2025","Aussteller auf der LASER World of PHOTONICS 2025","BUSCH",PW+"/news-media/termine/"],
 ["08.–10.04.2025","Aussteller auf der Smart Systems Integration 2025","BUSCH",PW+"/news-media/termine/"],
 ["Auszeichnung","Gütesiegel „Innovativ durch Forschung“ des Stifterverbandes für die Deutsche Wissenschaft","BUSCH",PW+"/news-media/aktuelles/"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<span class="lab eyebrow" data-r>Präzisions-Positioniersysteme<span class="nomob"> · Langenlonsheim</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Standard ist nur</span> <span class="l"><em>die Präzision.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Hochpräzise XY-, Linear- und Hubtische sowie Gantry-Systeme, mechanisch oder luftgelagert: nach Ihren Anforderungen konstruiert und gefertigt, bei Bedarf als anschlussfertige Systemlösung inklusive Steuerung.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Zu den Produkten '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt aufnehmen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Positionieren nach Maß</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Ein Familienunternehmen</span> <span class="nw">in zwei Generationen.</span> <span class="nw">Wir denken in</span> <span class="nw">langfristigen Partnerschaften,</span> <em><span class="nw">mit unseren Kunden</span> <span class="nw">und unseren Mitarbeitern.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1999</span><p class="k">gegründet als Ingenieurbüro von Dipl.-Ing. Winfried Busch, seit 2006 eine Familien-GmbH</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1.500 m²</span><p class="k">Produktionsfläche in Langenlonsheim und Bretzenheim, mit vollklimatisiertem Arbeitsbereich</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2 µm</span><p class="k">Ebenheit oder besser erreichen wir durch Läppen der Granitoberfläche</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Präzisionsgarantie</span><h2 class="d3"><span class="nw">Es gibt nur</span> <em class="nw">eine Position.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Granit</span><span>Montage</span><span>Antrieb</span><span>Messung</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Der Granit,</span> <span class="nw">von Hand geläppt.</span></h2><p>Granit ist frei von inneren Spannungen, dämpft gut und bleibt bei wechselnden Temperaturen stabil. Durch Läppen erreichen wir Ebenheiten von 2 µm oder besser.</p></article>'+
     '<article class="step"><h2><span class="nw">Exakt parallel</span> <span class="nw">montiert und justiert.</span></h2><p>Führungssysteme und Motoren montieren und justieren wir exakt parallel, mit Kreuzrollenführungen oder Luftlagern für höchste Ansprüche.</p></article>'+
     '<article class="step"><h2><span class="nw">Antrieb und</span> <span class="nw">Steuerung im Takt.</span></h2><p>Linearmotoren und eine EtherCAT-basierte Steuerung, exakt aufeinander abgestimmt: für kurze Taktzeiten und ausgezeichnete Wiederholgenauigkeit.</p></article>'+
     '<article class="step"><h2><span class="nw">Jedes System</span> <span class="nw">exakt vermessen.</span></h2><p>Mit Laser-Interferometer, Autokollimator und elektronischer Wasserwaage geprüft: Jede Lieferung enthält ein ausführliches Messprotokoll.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="produkte" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Positioniersysteme</span><h2 class="d2 split"><span class="nw">6 Basismodule.</span> <em class="nw">Über 1000 Produkte.</em></h2></div><p data-r>XY-, Linear- und Hubtische, Gantry-Systeme und XYZ-Achsen aus Granit oder Aluminium, nach Kundenanforderung konstruiert und gefertigt: kompakt, steif und mit geringer Trägheit, für hohe Beschleunigungen bei geringen Gier-, Nick- und Rollfehlern.</p></div>'+
   prods()+
   opts()+
  '</div></section>'+

  '<section class="sec dark2" id="engineering" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>BUSCH Engineering</span><h2 class="d2 split"><span class="nw">Kluge Köpfe</span> <em class="nw">mit Köpfchen.</em></h2></div><p data-r>Wir kombinieren Ingenieur-Know-how mit Manpower. Das Engineering von BUSCH steht auf drei Füßen, und für Kunden heißt das: ein Ansprechpartner von der reinen Granitbaugruppe bis zur Montage hochpräziser Achssysteme.</p></div>'+
   eng()+
   apps()+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Lösungen entstehen</span> <em class="nw">von Mensch zu Mensch.</em></h2></div><p data-r>Produkte von der Stange kann man en gros bestellen. Unsere Lösungen sind maßgeschneidert: Dazu braucht es Menschen, die zuhören, verstehen und in Lösungen denken. Hier finden Sie sie, in Langenlonsheim und weltweit.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>1999 bis 2006</span><h3 data-r>Vom Ingenieurbüro zur Familien-GmbH</h3><p data-r>1999 von Winfried Busch als Ingenieurbüro gegründet, 2002 der eigene Bau in Bretzenheim, 2006 die GmbH mit seinen Töchtern Helen und Nicola.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>2012 bis 2016</span><h3 data-r>Platz für Wachstum</h3><p data-r>2012 verdoppelte sich die Produktionsfläche in Bretzenheim, im Dezember 2016 folgte der neue Standort in Langenlonsheim, mit Räumen für Schulungen.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Qualität</span><h3 data-r>Zertifiziert nach DIN EN ISO 9001</h3><p data-r>2021 von der DEKRA ohne Abweichungen re-zertifiziert. 2020 erhielt BUSCH das Gütesiegel „Innovativ durch Forschung“.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="messen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Messen und Aktuelles</span><h2 class="d2 split"><span class="nw">Hier können Sie</span> <em class="nw">was erleben.</em></h2></div><p data-r>Maßgeschneiderte Positioniersysteme und intelligente Systemlösungen live erleben: BUSCH stellt auf den führenden Messen für Photonik, Laser und Elektronikfertigung aus.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Alles andere ist</span> <em class="nw">nicht von der Stange.</em></h2>'+
   '<p class="sub" data-r>Ob Granitbaugruppe oder Komplettsystem mit Antrieb, Steuerung und Software: rufen Sie uns einfach an oder schreiben Sie uns eine Nachricht. Wir reagieren schnellstmöglich.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>BUSCH Microsystems GmbH<br>An der Altnah 34<br>55450 Langenlonsheim</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Downloads</span><p data-r><a class="ul" href="'+PW+'/news-media/downloads/" target="_blank" rel="noopener">Kataloge und Datenblätter</a><br><a class="ul" href="'+PW+'/produkte/produktuebersicht/" target="_blank" rel="noopener">Produktübersicht</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>BUSCH Microsystems GmbH<br>An der Altnah 34, 55450 Langenlonsheim</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/engineering">Engineering</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/messen">Messen</a></div>'+
   '<div class="c"><span class="lab">Zertifiziert</span>Qualitätsmanagement nach DIN EN ISO 9001</div>'+
  '</div>'+'<svg class="bigsvg bmf" viewBox="0 0 448 120" aria-hidden="true">@@LOGO@@</svg>'+
  '<div class="legal"><span class="lab">© 2026 BUSCH Microsystems GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",praezision:"story",produkte:"produkte",engineering:"engineering",unternehmen:"unternehmen",messen:"messen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"BUSCH Microsystems — Präzisions-Positioniersysteme aus Langenlonsheim",x:"Start"};
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
