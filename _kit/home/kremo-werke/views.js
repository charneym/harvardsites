/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function rows(L){return '<ul class="pfr pipe np">'+L.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+c[1].split('|').map(function(x){return '<span class="nw">'+esc(x)+'</span>'}).join(' ')+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Mehr '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Material","Bis zu 50 % weniger Material","Gepresste Flansche sparen bis zu 50 % Material, bei gleicher Festigkeit wie traditionelle Flansche und gleichen Baumaßen.",'<path d="M8 40H48"/><path class="a" d="M8 30H30"/><path d="M8 20H48"/><circle class="f" cx="30" cy="30" r="2.4"/>'],
  ["Montage","Drehbarer Flanschring","Beim Anschweißen muss nicht mehr auf den Lochstich geachtet werden. Der Flanschring ist in axialer Richtung arretiert und kann nicht vom Rohr abrutschen.",'<circle cx="28" cy="28" r="18"/><circle cx="28" cy="28" r="9"/><path class="a" d="M28 6A22 22 0 0 1 50 28"/><circle class="f" cx="50" cy="28" r="2.4"/>'],
  ["Baumaße","Nach EN 1092-1","Die Baumaße entsprechen immer EN 1092-1. Geringe Wanddicke am Anschweißende, besonders für Schweißautomaten geeignet.",'<path d="M10 14V42M46 14V42"/><path class="a" d="M10 28H46"/><circle class="f" cx="10" cy="28" r="2.4"/><circle class="f" cx="46" cy="28" r="2.4"/>'],
  ["Zulassung","TÜV Rheinland und GL","Sämtliche gepressten Flansche sind vom TÜV Rheinland und dem Germanischen Lloyd zugelassen und für eine Betriebstemperatur bis 200 °C geeignet.",'<path d="M28 6L46 14V28C46 38 38 46 28 50C18 46 10 38 10 28V14Z"/><path class="a" d="M19 28L26 35L38 21"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3><span class="nw">'+esc(c[1])+'</span></h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* the standard stainless grades and their AISI equivalents (kremo-werke.de > Service > Allgemeine Hinweise, Vergleichstafel) */
function mats(){var M=[["1.4301","X5CrNi18-10","AISI 304"],["1.4307","X2CrNi18-9","AISI 304L"],["1.4404","X2CrNiMo17-12-2","AISI 316L"],["1.4435","X2CrNiMo18-14-3","AISI 316L"],["1.4541","X6CrNiTi18-10","AISI 321"],["1.4571","X6CrNiMoTi17-12-2","AISI 316Ti"],["1.4539","X1NiCrMoCu25-20-5","AISI 904L"],["RSt 37-2","Baustahl","serienmäßig"]];
  return '<ul class="kmat">'+M.map(function(m){return '<li><span class="lab">Werkstoff</span><b>'+esc(m[0])+'</b><span class="kz">'+esc(m[1])+'</span><span class="ai">'+esc(m[2])+'</span></li>'}).join("")+'</ul>'}
function qual(){var Q=[
  ["Geprüftes QS-System","Der TÜV Rheinland bestätigt mit dem Zertifikat Nr. 01 202 617/Q-00 0014, dass die KREMO-Werke ein Qualitätssicherungssystem für Werkstoffhersteller eingeführt haben und anwenden."],
  ["Stanz- und Tiefziehteile","Herstellung und Vertrieb von Stanzteilen und Tiefziehteilen wurden gemäß der Richtlinie 97/23/EG einer spezifischen Überprüfung unterzogen."],
  ["Abnahme mit Prüfzeugnis","Auf Wunsch mit Abnahmeprüfzeugnis 3.1 nach EN 10204 für das Vormaterial und mit Glühbescheinigung, falls gefordert auch mit Abnahmeprüfzeugnis 3.2 für die Fertigteile."]];
  return '<ol class="exps">'+Q.map(function(x,i){return '<li><span class="lab">'+('0'+(i+1)).slice(-2)+'</span><h3>'+esc(x[0])+'</h3><p>'+esc(x[1])+'</p></li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Edelstahlwerk<span class="nomob"> · Presswerk · Kaltumformung</span> · Krefeld</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Edelstahl in Form,</span> <span class="l acc">exakt nach Ihren Vorgaben.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Die KREMO-Werke in Krefeld fertigen Rohrzubehör, gepresste Flansche, mantelbeheizte Flansche und Schauglasarmaturen aus Edelstahl, dazu komplizierte Teile nach Ihrer Zeichnung, vom eigenen Werkzeugbau bis zur Abnahme im Haus.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Zu den Produkten '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>KREMO-WERKE Hermanns GmbH &amp; Co. KG</span>'+
   '<h2 class="txt" id="mani"><em>Stanzen, Tiefziehen, Streckprojizieren:</em> die Umformung von Edelstahl, seit mehr als einem <span class="nw">halben Jahrhundert.</span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2500 t</span><p class="k">Pressdruck: Pressen und Stanzen von 25 bis 2500 Tonnen</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50 %</span><p class="k">Materialersparnis bis zu: gepresste Flansche bei gleicher Festigkeit</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">DN 300</span><p class="k">gepresste Flansche bis einschließlich DN 300</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Im Edelstahlwerk</span><h2 class="d3">Vom Rohling <em>zum Bördel.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Pressen</span><span>Umformen</span><span>Abnahme</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Werkzeug und Presse</span> <span class="nw">aus einem Haus.</span></h2><p>Die Werkzeuge entstehen im eigenen Werkzeugbau. Pressen und Stanzen von 25 bis 2500 Tonnen Pressdruck schneiden den Rohling aus Edelstahl.</p></article>'+
     '<article class="step"><h2><span class="nw">Tiefgezogen,</span> <span class="nw">nahtlos geformt.</span></h2><p>Der Stempel zieht den Rohling in die Matrize. So entsteht ein nahtlos geformtes Teil, etwa ein Vorschweißbördel mit glattem Übergang vom Rohr zum Bund.</p></article>'+
     '<article class="step"><h2><span class="nw">Geglüht, gebeizt</span> <span class="nw">und abgenommen.</span></h2><p>Vakuum-Glühanlagen, Schweißerei, Beizerei und Abnahmen im Haus runden das Programm ab. Auf Wunsch mit Abnahmeprüfzeugnis 3.1 nach EN 10204 und Glühbescheinigung.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unsere Produkte</span><h2 class="d2 split"><span class="nw">Rohrzubehör und</span> <em class="nw">gepresste Flansche.</em></h2></div><p data-r>Die Produktpalette der KREMO-Edelstahlwerke umfasst Rohrzubehör, Flansche, mantelbeheizte Flansche und Zubehör sowie Schauglasarmaturen und wächst mit Ihren Wünschen.</p></div>'+
   rows(PRODS)+
  '</div></section>'+

  '<section class="sec light" id="flansche" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Gepresste Flansche</span><h2 class="d2 split"><span class="nw">Gleiche Festigkeit,</span> <em class="nw">weniger Material.</em></h2></div><p data-r>Bestärkt durch den Erfolg bei ihrer Einführung haben die KREMO-Werke die gepressten Flansche weiterentwickelt, bis einschließlich DN 300. Sie lassen sich mit herkömmlichen Flanschen montieren, auch in unterschiedlichen Werkstoffkombinationen.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="werkstoffe" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Werkstoffe</span><h2 class="d2 split"><span class="nw">Acht Werkstoffe</span> <em class="nw">in Serie.</em></h2></div><p data-r>Rohrformstücke liefern die KREMO-Werke serienmäßig in diesen Werkstoffen. Auf Wunsch verarbeiten sie auch Aluminium, Kupfer, Hastelloy, Inconel und Titan sowie Edelstähle nach AD 2000-Merkblatt W2, EN 10028-7, EN 10217-7 und EN 10216-5.</p></div>'+
   mats()+
  '</div></section>'+

  '<section class="sec light" id="qualitaet" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Qualität</span><h2 class="d2 split"><span class="nw">Geprüft mit</span> <em class="nw">Brief und Siegel.</em></h2></div><p data-r>Wer sich für die KREMO-Werke entscheidet, erhält im Bereich Edelstahl ausschließlich geprüfte Qualität, bestätigt vom TÜV Rheinland.</p></div>'+
   qual()+
  '</div></section>'+

  '<section class="sec dark2" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">90 Jahre Tradition</span> <em class="nw">am Standort Krefeld.</em></h2></div><p data-r>Hoch qualifizierte Mitarbeiter und ein moderner Maschinenpark mit Werkzeugbau, Pressen und Stanzen, Drehautomaten, Streckprojiziermaschinen und Vakuum-Glühanlagen machen die KREMO-Werke zu Ihrem zuverlässigen Partner am Standort Deutschland.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Messe</span><p class="cr" data-r><span>Tube 2026, Düsseldorf</span><span>Halle 1, Stand F90</span><a class="ul" href="https://www.wire-tradefair.com/vis/v1/en/exhibitors/tube2026.3064881" target="_blank" rel="noopener">Im Ausstellerverzeichnis</a></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihre Zeichnung,</span> <em class="nw">unser Werkzeug.</em></h2>'+
   '<p class="sub" data-r>Für Anfragen zu Rohrzubehör, Flanschen und Schauglasarmaturen oder zu Teilen exakt nach Ihren Vorgaben erreichen Sie die KREMO-Werke direkt in Krefeld.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>KREMO-WERKE Hermanns GmbH &amp; Co. KG<br>Blumentalstr. 141–145<br>47798 Krefeld</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Downloads</span><p data-r><a class="ul" href="'+KG+'Downloads.html" target="_blank" rel="noopener">Kataloge und Datenblätter</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>KREMO-WERKE Hermanns GmbH &amp; Co. KG<br>Blumentalstr. 141–145, 47798 Krefeld</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/flansche">Flansche</a><br><a class="ul" href="#/werkstoffe">Werkstoffe</a><br><a class="ul" href="#/qualitaet">Qualität</a></div>'+
   '<div class="c"><span class="lab">Register</span>Registergericht Krefeld<br>HRA 2632, HRB 84<br>Vertretungsberechtigter: Guido Becher</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="54" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:800;font-size:66px;letter-spacing:.3em">KREMO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 KREMO-Werke</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",werk:"story",produkte:"produkte",flansche:"flansche",werkstoffe:"werkstoffe",qualitaet:"qualitaet",unternehmen:"unternehmen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"KREMO-Werke — Edelstahl, Presswerk, Kaltumformung, Krefeld",x:"Start"};
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
