/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function meds(){return '<ul class="pfr pipe np">'+MED.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function mats(){return '<div class="ev ind"><span class="lab kick" data-r>Qualität</span><dl>'+MAT.map(function(c){return '<div data-r><dt class="lab">'+esc(c[0])+'</dt><dd>'+esc(c[1])+'</dd></div>'}).join("")+'</dl></div>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* how Rejlek supports manufacture (rejlek.at > Herstellung), each with a small line icon */
var ICO={
 d:'<svg viewBox="0 0 56 56"><path d="M8 44L36 16L44 24L16 52Z"/><path class="a" d="M8 44L6 52L14 50"/><path d="M40 6H52V18"/></svg>',
 w:'<svg viewBox="0 0 56 56"><path d="M6 10H50V26H6Z"/><path d="M6 30H50V46H6Z"/><path class="a" d="M20 26V22H36V26M28 10V4"/><path d="M14 38H18M38 38H42"/></svg>',
 m:'<svg viewBox="0 0 56 56"><path d="M10 50H46"/><path d="M18 50V36L28 26L36 34"/><path class="a" d="M36 34L44 26M44 26L48 30"/><path d="M14 50V44H22V50"/></svg>',
 q:'<svg viewBox="0 0 56 56"><path d="M8 8H48V48H8Z"/><path class="a" d="M8 28H48"/><path d="M18 18H38V38H18Z"/></svg>'};
var SERV=[
 ["d","Entwicklung und Design","Vom ersten Entwurf an","3D-Teilekonstruktion, Prototypen und Funktionsmuster aus dem Modelshop Vienna, Moldflow-Analysen und Stanzteilabwicklungen, konstruiert mit CAD/CAM und analysiert mit FEM."],
 ["w","Formen- und Werkzeugbau","100 Technikerinnen und Techniker","Mehrkomponenten-Spritzgusswerkzeuge, Folgeverbundwerkzeuge und Montageanlagen, gefertigt mit 5-Achs-CNC-Simultanfräsen, Senk- und Drahterosion."],
 ["m","Montagetechnik","Industrie 4.0 als Ziel","Maßgeschneiderte Produktionsanlagen mit frei programmierbaren 5-Achs-Robotern und Scara-Technologie, Laserschweißen mit Inline-Weld-Watching."],
 ["q","Lackieren, Bedrucken, Lasern","Mit wasserlöslichen Lacken","Lackieren, Mehrfarben-Tampondruck und Siebdruck, Schriftzüge und Designelemente industrialisiert und frei gelasert."]];
function serv(){return '<div class="caps svc">'+SERV.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["16.–19.11.2026","Aussteller auf der COMPAMED 2026 in Düsseldorf","COMPAMED","https://www.medica-tradefair.com/vis/v1/en/exhibitors/compamed2026.3080421"],
 ["29.06.2026","Das Rejlek Förderprojekt 2026: Zukunftsperspektiven aus Flaschenverschlüssen","Blog",PW+"/das-rejlek-foerderprojekt-2026/"],
 ["25.03.2026","Warum Familienunternehmen nachhaltigen Erfolg bedeuten: ein Gespräch mit Robert Rejlek","Blog",PW+"/warum-familienunternehmen-nachhaltigen-erfolg-bedeuten/"],
 ["23.03.2026","Stetiger Ausbau: Warum der Rejlek Maschinenpark kontinuierlich wächst","Blog",PW+"/warum-der-rejlek-maschinenpark-kontinuierlich-waechst/"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Metall und Kunststoff<span class="nomob"> · Auftragsfertigung aus Wien</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Vom Prototyp</span> <span class="l">bis zum Ende</span> <span class="l"><em>der Serie.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Spritzgussformen, Stanzwerkzeuge und Fertigungsanlagen aus eigener Entwicklung, und die Kunststoff- und Metallteile, die sie produzieren: für Medizintechnik, Automotive, Industrieelektronik und Maschinenbau.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/kontakt">Projekt anfragen '+ARR+'</a><a class="btn" href="#/werdegang">So entsteht ein Teil</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Ihre Welt der Meisterleistung</span>'+
   '<h2 class="txt" id="mani"><span class="nw">In unseren Produkten</span> <span class="nw">steckt mehr als nur</span> <span class="nw">Stahl oder Kunststoff.</span> <em><span class="nw">In ihnen stecken</span> <span class="nw">unsere Überzeugungen</span> <span class="nw">und Leidenschaften.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">10.000</span><p class="k">unterschiedliche Produkte</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">300 Mio.</span><p class="k">gelieferte Teile pro Jahr</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">900</span><p class="k">Mitarbeiterinnen und Mitarbeiter an vier Produktionsstandorten</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">600</span><p class="k">Produktionsmaschinen, täglich im Einsatz</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Herstellungsprozess</span><h2 class="d3"><span class="nw">Vom Teiledesign</span> <em class="nw">zum Serienteil.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Design</span><span>Werkzeug</span><span>Spritzguss</span><span>Prüfen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Zuerst in 3D.</span></h2><p>Am Beispiel eines Medizintechnik-Teils: Steht das Teiledesign, folgt die Moldflow-Analyse. Geringes Teilegewicht und kurze Zykluszeiten sparen Kosten und CO2.</p></article>'+
     '<article class="step"><h2><span class="nw">Das Werkzeug entsteht.</span></h2><p>Im eigenen Werkzeugbau: Formplatten, Kavitäten und smarte Kernkühlung, gefertigt mit 5-Achs-CNC-Simultanfräsen, Senk- und Drahterosion.</p></article>'+
     '<article class="step"><h2><span class="nw">Schuss für Schuss.</span></h2><p>Auf über 100 Spritzgussmaschinen, vom Mikrospritzguss bis 11.000 kN Schließkraft, für Medizinteile auch im eigenen Reinraum der Klasse 7.</p></article>'+
     '<article class="step"><h2><span class="nw">Gemessen und geprüft.</span></h2><p>Erste Muster werden mit Computertomographie bewertet, Serien mit 3D-CNC-Messmaschinen und eigenen Prüfvorrichtungen begleitet.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="herstellung" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Herstellung</span><h2 class="d2 split"><span class="nw">Alles aus</span> <em class="nw">einer Hand.</em></h2></div><p data-r>Produktions- und Prozessentwicklung in der Rejlek Metal &amp; Plastics Group: Unser Support beginnt bei Ihren ersten Ideen zur Produktgestaltung, vom Prototypenbau bis zu Hoch-Kavitäten-Werkzeugen.</p></div>'+
   serv()+
  '</div></section>'+

  '<section class="sec dark2" id="maerkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte und Märkte</span><h2 class="d2 split"><span class="nw">Ihr Produkt,</span> <em class="nw">unsere Expertise.</em></h2></div><p data-r>Spritzguss- und Metallkomponenten über die gesamte Produktlebensdauer, mit Standorten in West- und Osteuropa und Kooperationspartnern in Asien und den USA.</p></div>'+
   meds()+
   mats()+
  '</div></section>'+

  '<section class="sec light" id="ueber-uns" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Über uns</span><h2 class="d2 split"><span class="nw">Ein Familienbetrieb,</span> <em class="nw">vier Standorte.</em></h2></div><p data-r>Eigene Werkzeug- und Prozessentwicklung, Produktion an Standorten in Europa und Partner in Übersee. Jeder Standort konzentriert sich auf seine Kernkompetenz.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Österreich</span><h3 data-r>Wien-Liesing</h3><p data-r>Rejlek Metal &amp; Plastics Group und Karl Rejlek GmbH in der Kirchfeldgasse, dazu der Modelshop 1100 für Prototypen.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Ungarn</span><h3 data-r>Mór und Székesfehérvár</h3><p data-r>Rejlek Metal&amp;Stamping kft in Mór und General Plastic kft in Székesfehérvár.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Slowakei und Deutschland</span><h3 data-r>Martin, Vertrieb in Koblenz</h3><p data-r>Viena International s.r.o. in Martin und das Vertriebsbüro für Deutschland.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="blog" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Blog</span><h2 class="d2 split"><span class="nw">Bleiben Sie</span> <em class="nw">am neuesten Stand.</em></h2></div><p data-r>Messen, Maschinenpark und soziale Verantwortung: Neuigkeiten aus der Rejlek Metal &amp; Plastics Group.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihre Ideen</span> <em class="nw">werden Wirklichkeit.</em></h2>'+
   '<p class="sub" data-r>Seriennahe Prototypen, ein neues Werkzeug oder Teile in jeder Menge: Unsere Spezialistinnen und Spezialisten stehen Ihnen zur Verfügung.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Projekt anfragen '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>Rejlek Metal &amp; Plastics Group<br>Kirchfeldgasse 69<br>1230 Wien, Österreich</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Karriere</span><p data-r><a class="ul" href="'+PW+'/ueber-uns/" target="_blank" rel="noopener">Offene Stellen</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>Rejlek Metal &amp; Plastics Group<br>Kirchfeldgasse 69, 1230 Wien</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/maerkte">Produkte &amp; Märkte</a><br><a class="ul" href="#/herstellung">Herstellung</a><br><a class="ul" href="#/ueber-uns">Über uns</a><br><a class="ul" href="#/blog">Blog</a></div>'+
   '<div class="c"><span class="lab">Standorte</span>Wien · Mór · Székesfehérvár<br>Martin · Vertrieb Koblenz</div>'+
  '</div>'+'<img class="bigsvg rjbig" src="logo-l.png" width="1000" height="209" alt="">'+
  '<div class="legal"><span class="lab">© 2026 Rejlek GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",werdegang:"story",maerkte:"maerkte",herstellung:"herstellung","ueber-uns":"ueber-uns",blog:"blog",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Rejlek Metal & Plastics Group — Auftragsfertigung in Metall und Kunststoff, Wien",x:"Start"};
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
