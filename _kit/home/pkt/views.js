/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function techs(){return '<ul class="pfr pipe np">'+TECH.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function inds(){return '<div class="ev ind"><span class="lab kick" data-r>Branchen</span><dl>'+IND.map(function(c){return '<div data-r><dt class="lab">'+esc(c[0])+'</dt><dd>'+esc(c[1])+'</dd></div>'}).join("")+'</dl></div>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* the four stages of the one-stop shop (pkt-gmbh.de > Leistungen), each with a small line icon */
var ICO={
 k:'<svg viewBox="0 0 56 56"><path d="M6 46H50M6 46V10"/><path class="a" d="M10 40C18 38 22 18 30 18C38 18 40 30 50 30"/><path d="M6 18H9M6 30H9"/></svg>',
 w:'<svg viewBox="0 0 56 56"><path d="M6 14H50V42H6Z"/><path class="a" d="M22 28m-7 0a7 7 0 1 0 14 0a7 7 0 1 0-14 0"/><path d="M40 20V36M36 28H44"/></svg>',
 p:'<svg viewBox="0 0 56 56"><path d="M4 22H30V34H4Z"/><path d="M30 25H40V31H30"/><path class="a" d="M40 28H52"/><path d="M10 22V14H24V22"/></svg>',
 q:'<svg viewBox="0 0 56 56"><path d="M28 28m-18 0a18 18 0 1 0 36 0a18 18 0 1 0-36 0"/><path class="a" d="M28 28m-8 0a8 8 0 1 0 16 0a8 8 0 1 0-16 0"/><path d="M28 4V12M28 44V52M4 28H12M44 28H52"/></svg>'};
var SERV=[
 ["k","Entwicklung / Konstruktion","Beratung von Anfang an","Machbarkeitsanalyse, Bauteiloptimierung gemeinsam mit Ihnen und Moldflow-Analyse für Füllung, Verzug und Schwund, Anspritzpunkt und Entlüftung."],
 ["w","Werkzeugbau","Ausgangspunkt höchster Präzision","Mit der Sarix 3D-Mikro-Funkenerosion: Bohrungen bis 0,02 mm, Eckradien bis 3 µm, Oberflächen bis Ra 0,05 µm."],
 ["p","Produktion","Hoch automatisiert","Über 70, zum Teil vollelektrische Spritzgießmaschinen mit Schließkräften bis 2.000 kN, alle gängigen Materialien bis zum Hochtemperaturkunststoff."],
 ["q","Qualitätssicherung","Tag für Tag gesichert","Hochpräzisionsmesstechnik, dreidimensionale Teilemessung mit dem Werth TomoScope XS 160 und Inline-Kameraüberwachung in der Produktion."]];
function serv(){return '<div class="caps svc">'+SERV.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["Nov. 2026","Aussteller auf der COMPAMED 2026 in Düsseldorf","COMPAMED","https://www.medica-tradefair.com/vis/v1/en/exhibitors/compamed2026.3069303"],
 ["11.08.2026","IATF 16949: erfolgreich zertifiziert","PKT",PW+"/iatf-16949/"],
 ["23.06.2026","Wir bilden aus: Ausbildungsstart im September","PKT",PW+"/wir-bilden-aus-4/"],
 ["09.01.2025","Prozesskette Mikrospritzguss: alles aus einer Hand","PKT",PW+"/prozesskette-mikrospritzguss-alles-aus-einer-hand/"],
 ["09.08.2023","Kundenreportage Junghans: fokussiert auf kleinste Teile","PKT",PW+"/kundenreportage-junghans/"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Mikro- und Präzisionsspritzguss<span class="nomob"> · Tiefenbronn</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Zukunft</span><span class="l"><em>durch Präzision.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Von der Konstruktion über den eigenen Werkzeugbau bis zur Serie: PKT fertigt Kunststoffteile bis unter 0,001\u00a0g für Medizintechnik, Uhrenindustrie und Automotive.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technologien">Zu den Technologien '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt aufnehmen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>PKT – Gut in Form!</span>'+
   '<h2 class="txt" id="mani">Beständigkeit und Innovation verbinden PKT seit der Gründung durch Walter Spielmann im Jahr 1969. <em><span class="nw">Richtig,</span> <span class="nw">und richtig gut.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1969</span><p class="k">gegründet, heute mittelständisch und familiengeführt</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">70+</span><p class="k">Spritzgießmaschinen, zum Teil vollelektrisch, bis 2.000 kN Schließkraft</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">150</span><p class="k">Köpfe im Team, mit eigener Ausbildung im Werkzeugbau und in der Produktion</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Prozesskette Mikrospritzguss</span><h2 class="d3">Alles aus <em>einer Hand.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Konstruktion</span><span>Werkzeug</span><span>Serie</span><span>Messung</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Erst gerechnet, dann gebaut.</h2><p>Die Moldflow-Analyse bestimmt die optimale Bauteilfüllung, Verzug und Schwund, die Lage des Anspritzpunkts und die Entlüftung, bevor der Werkzeugbau beginnt.</p></article>'+
     '<article class="step"><h2>Ein Werkzeug im µ-Bereich.</h2><p>Im eigenen Werkzeugbau entstehen die Formeinsätze: per 3D-Mikro-Funkenerosion mit Eckradien bis 3 µm und Wiederholgenauigkeit der Positionierung unter 1 µm.</p></article>'+
     '<article class="step"><h2>Serie, Schuss für Schuss.</h2><p>Teile- und Schussgewichte unter 0,001 g, gleichmäßig gefüllte Hochkavitätenwerkzeuge und eine formnestgetrennte Bauteilablage direkt an der Maschine.</p></article>'+
     '<article class="step"><h2>Gemessen, in drei Dimensionen.</h2><p>Das Werth TomoScope XS 160 misst die Teile dreidimensional nach dem Prinzip der Computertomografie, Kameras überwachen die Produktion inline.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="leistungen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Leistungen</span><h2 class="d2 split">Ihr <em>One-Stop-Shop.</em></h2></div><p data-r>Ein Ansprechpartner für das gesamte Projekt: PKT betreut Sie mit 360°-Fachkompetenz von der Beratung über Entwicklung, Konstruktion und Werkzeugbau bis zu Produktion und Logistik.</p></div>'+
   serv()+
  '</div></section>'+

  '<section class="sec dark2" id="technologien" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technologien</span><h2 class="d2 split"><span class="nw">Bis an den Rand</span> <em class="nw">des Machbaren.</em></h2></div><p data-r>Mikro- oder Präzisionsspritzguss, technische Dünnwand- und Mehrkomponententeile oder Hybridbauteile: für jede Anforderung die passende Lösung.</p></div>'+
   techs()+
   inds()+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split">Authentisch: <em>Das sind wir.</em></h2></div><p data-r>Ein mittelständisches, familiengeführtes Unternehmen mit flachen Hierarchien und kurzen Entscheidungswegen, und einem großen Kundenstamm weltweit tätiger, namhafter Unternehmen.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Zertifiziert</span><h3 data-r>IATF 16949 und ISO</h3><p data-r>Zertifiziert nach IATF 16949, ISO 9001, ISO 14001, ISO 45001 und ISO 50001, mit eigener Prozessvalidierung.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Projektmanagement</span><h3 data-r>Bis zur Serienreife</h3><p data-r>Betreuung von der Angebotsphase über Validierung und Qualifizierung; übergeben wird erst, wenn alle Meilensteine erfüllt sind.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Ausbildung</span><h3 data-r>Wir bilden aus</h3><p data-r>Werkzeugmechaniker und Kunststoff- und Kautschuktechnologen, in einem modernen Ausbildungsbereich.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split">Gut <em>inFORMiert.</em></h2></div><p data-r>News, Messen und Hintergründe aus Tiefenbronn: Zertifizierungen, Ausbildung und Reportagen aus der Fertigung.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split">Sprechen Sie <em>mit uns.</em></h2>'+
   '<p class="sub" data-r>Komplexe Anforderungen sehen wir als Herausforderung, nicht als Hindernis. Wir finden sicher auch für Ihre Aufgabe eine Lösung.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>PKT Präzisions-Kunststoff-Teile GmbH<br>Daimlerstraße 5<br>75233 Tiefenbronn</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Downloads</span><p data-r><a class="ul" href="'+PW+'/infocenter/" target="_blank" rel="noopener">Zertifikate und Broschüre</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>PKT Präzisions-Kunststoff-Teile GmbH<br>Daimlerstraße 5, 75233 Tiefenbronn</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/leistungen">Leistungen</a><br><a class="ul" href="#/technologien">Technologien</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/aktuelles">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Branchen</span>Medizintechnik · Uhrenindustrie<br>Automotive · Elektrotechnik<br>Feinwerktechnik<br>Verpackungsindustrie</div>'+
  '</div><svg class="bigsvg" viewBox="-20 -10 823 99" aria-hidden="true"><g fill="currentColor"><path d="M0 0H130C200 0 222 12 222 27C222 42 200 54 130 54H93V79H0ZM93 18V36H118C128 36 133 32 133 27C133 22 128 18 118 18Z" fill-rule="evenodd"/><path d="M284 0H376V34L425 0H524L464 38L533 79H430L376 43V79H284Z"/><path d="M571 0H783V21H723V79H630V21H571Z"/></g></svg>'+
  '<div class="legal"><span class="lab">© 2026 PKT Präzisions-Kunststoff-Teile GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",prozesskette:"story",leistungen:"leistungen",technologien:"technologien",unternehmen:"unternehmen",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"PKT Präzisions-Kunststoff-Teile GmbH — Mikro- und Präzisionsspritzguss aus Tiefenbronn",x:"Start"};
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
