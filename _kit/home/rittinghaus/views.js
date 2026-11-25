/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function meds(){return '<ul class="pfr pipe np">'+MED.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function mats(){return '<div class="ev ind"><span class="lab kick" data-r>Werkstoffe</span><dl>'+MAT.map(function(c){return '<div data-r><dt class="lab">'+esc(c[0])+'</dt><dd>'+esc(c[1])+'</dd></div>'}).join("")+'</dl></div>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* the four stages "alles aus einer Hand" (rittinghaus-gmbh.de > Leistungen), each with a small line icon */
var ICO={
 s:'<svg viewBox="0 0 56 56"><path d="M6 46H50M6 46V10"/><path class="a" d="M10 40C18 38 22 18 30 18C38 18 40 30 50 30"/><path d="M6 18H9M6 30H9"/></svg>',
 w:'<svg viewBox="0 0 56 56"><path d="M8 12H26V44H8Z"/><path d="M30 12H48V44H30Z"/><path class="a" d="M22 22H34V34H22Z"/></svg>',
 f:'<svg viewBox="0 0 56 56"><path d="M4 22H30V34H4Z"/><path d="M30 25H40V31H30"/><path class="a" d="M40 28H52"/><path d="M10 22V14H24V22"/></svg>',
 l:'<svg viewBox="0 0 56 56"><path d="M6 50V10M50 50V10M6 24H50M6 38H50"/><path class="a" d="M12 18H22V24H12ZM28 32H40V38H28Z"/></svg>'};
var SERV=[
 ["s","Simulation","Vor dem ersten Span","Füllzeit und Schmelzefluss, dünnwandige Bereiche, Oberflächenqualität, Lufteinschlüsse, Bindenähte und Verzug: das Werkzeuglayout wird vor Konstruktionsbeginn simuliert."],
 ["w","Konstruktion und Formenbau","Alles im eigenen Haus","Jedes Werkzeug wird im Haus in 3D konstruiert und gebaut: hohe Kavitätenzahlen, Schnellläufer, zirkulare Geometrien, hochlegierte Formenstähle. Ihre Daten bleiben bei uns."],
 ["f","Fertigung","Ausschließlich ARBURG","Überwiegend vollelektrische Spritzgießmaschinen mit 150 bis 1.500 kN Schließkraft, Artikelgewichte von 0,04 bis 300 g, jeder Zyklus im ARBURG-Leitrechner dokumentiert."],
 ["l","Fertigteillager","Lieferung in Stunden","Wir halten eine große Menge Fertigteile vor: Rahmenaufträge, flexible Losgrößen, terminierte Lieferungen oder Einzelabrufe, auch kurzfristig innerhalb weniger Stunden."]];
function serv(){return '<div class="caps svc">'+SERV.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["16.–19.11.2026","Aussteller auf der COMPAMED 2026 in Düsseldorf","COMPAMED","https://www.medica-tradefair.com/vis/v1/en/exhibitors/compamed2026.3074344"],
 ["22.–23.09.2026","Rittinghaus on Tour: VDI-Tagung Kunststoffe in der Medizintechnik","Rittinghaus",PW+"/"],
 ["Stellenangebot","Werkzeugmechaniker (m/w/d), Fachrichtung Formentechnik (Wartung)","Rittinghaus",PW+"/werkzeugmechaniker-m-w-d-fachrichtung-formentechnik_wartung/"],
 ["2020","Reportage im K-PROFI über Rittinghaus","K-PROFI · PDF",PW+"/wp-content/uploads/2020/12/K-PROFI_Sonderdruck_Rittinghaus_MR.pdf"],
 ["2018","Ausgezeichnet als TOP 100 Innovator","TOP 100 · PDF",PW+"/wp-content/uploads/2018/12/0x299382CDB62E45D08A0B47F11B3EF5DE_10527_Urkunde_T100UK2018_T100-18-Zertifikat-Top-Innovatoren-92.pdf"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<span class="lab eyebrow" data-r>Präzisionsspritzguss · Reinraum<span class="nomob"> · Halver</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Kunststoff</span><span class="l"><em>in Vollendung.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Hochpräzise Spritzgussteile von 0,04 bis 300 g, aus dem eigenen Formenbau und der Reinraumfertigung nach DIN ISO 14644, Klasse 7: für Medizintechnik, Diagnostik und Biotechnologie.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/medizintechnik">Zur Medizintechnik '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt aufnehmen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Seit 1956 in Halver</span>'+
   '<h2 class="txt" id="mani">Ein inhabergeführtes Familienunternehmen, das die gesamte Wertschöpfungskette abdeckt: von der Beratung über Werkzeug und Serie bis zur Lieferung ab Lager. <em><span class="nw">Alles aus</span> <span class="nw">einer Hand.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1956</span><p class="k">gegründet, heute in Familienhand und inhabergeführt</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3.000+</span><p class="k">m² Produktionsfläche, darunter eine Grauraumhalle von 480\u00a0m² mit den Reinräumen</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">120+</span><p class="k">Rohstoffe in der Verarbeitung, von PE bis PEEK und LCP</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Reinraumkonzept</span><h2 class="d3"><span class="nw">Reinraum</span> <em class="nw">im Grauraum.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Grauraum</span><span>Übergabe</span><span>Reinraum</span><span>Charge</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Die Maschine bleibt draußen.</h2><p>Die Spritzgießmaschinen stehen außerhalb des Reinraums. So bringen Werkzeugwechsel und Wartung keine Kontamination hinein.</p></article>'+
     '<article class="step"><h2>Ein Band durch die Wand.</h2><p>Ein gekapseltes Transportband bringt die Teile vom öffnenden Werkzeug in den Reinraum, permanent umspült von ausströmender Reinraumluft.</p></article>'+
     '<article class="step"><h2>Klasse 7, voll klimatisiert.</h2><p>Reinräume nach DIN ISO 14644, Klasse 7, regelmäßig requalifiziert. Temperatur, Luftfeuchte und Drücke werden kontinuierlich geregelt und dokumentiert.</p></article>'+
     '<article class="step"><h2>Jede Charge nachvollziehbar.</h2><p>Verpackt wird im Reinraum. Eine selbst entwickelte Software erstellt die Chargen per Barcodescan und verknüpft sie mit den SPC-Daten der Prüfungen.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="leistungen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Leistungen</span><h2 class="d2 split"><span class="nw">Ein Partner,</span> <em class="nw">kein Lieferant.</em></h2></div><p data-r>Von der Bauteilberatung über die hochpräzisen Spritzgusswerkzeuge und die Hightech-Fertigung bis zur Lieferung ab Lager: Ihr One-Stop-Supplier für Kunststoffteile, die weit über den Standard hinausgehen.</p></div>'+
   serv()+
  '</div></section>'+

  '<section class="sec dark2" id="medizintechnik" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Medizintechnik</span><h2 class="d2 split"><span class="nw">Partikelarm</span> <em class="nw">gefertigt.</em></h2></div><p data-r>Seit 2012 in der Reinraumtechnik, zertifiziert nach DIN EN ISO 13485: heute entstehen vor allem Produkte für Diagnostik und Biotechnologie unter Reinraumbedingungen.</p></div>'+
   meds()+
   mats()+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Flexibel,</span> <em class="nw">weil inhabergeführt.</em></h2></div><p data-r>Ein mittelständisches Familienunternehmen mit über 60 Jahren Erfahrung im Präzisionsspritzguss, das flexibel auf Ihre Anforderungen reagiert und Sie außergewöhnlich betreut.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Zertifiziert</span><h3 data-r>DIN EN ISO 9001 und 13485</h3><p data-r>Prüf- und Dokumentationsverfahren bis zum Erstmusterprüfbericht: 3D-Messplatz, optische Projektoren, CAQ-Software von Babtec.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Produktionsüberwachung</span><h3 data-r>Jeder Zyklus dokumentiert</h3><p data-r>Freigegebene Programme im ARBURG-Leitrechner, Erstteil-, Stichproben- und Letztteilprüfung, erst dann geht eine Serie ins Lager.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Nachhaltig</span><h3 data-r>Energiesparend gefertigt</h3><p data-r>Vollelektrische Maschinen und ressourcenschonende direkte Anspritzungen senken Energiebedarf und Zykluszeiten.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Rittinghaus</span> <em class="nw">on Tour.</em></h2></div><p data-r>Messen, Tagungen, Stellenangebote und Berichte über die Fertigung in Halver.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihr Bauteil,</span> <em class="nw">unsere Aufgabe.</em></h2>'+
   '<p class="sub" data-r>Kleinste Toleranzen, Hochtemperaturwerkstoffe, Fertigung im Reinraum: sprechen Sie uns an, wir beraten Sie schon in der Angebotsphase.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>Ernst Rittinghaus GmbH<br>Industriegebiet Oeckinghausen<br>Kruppstraße 33, 58553 Halver</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Downloads</span><p data-r><a class="ul" href="'+PW+'/download/" target="_blank" rel="noopener">Zertifikate und Publikationen</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>Ernst Rittinghaus GmbH<br>Kruppstraße 33, 58553 Halver</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/leistungen">Leistungen</a><br><a class="ul" href="#/medizintechnik">Medizintechnik</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/aktuelles">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Zertifiziert</span>DIN EN ISO 9001<br>DIN EN ISO 13485<br>Reinraum DIN ISO 14644, Klasse 7</div>'+
  '</div><svg class="bigsvg rhm" viewBox="-1 -1 128.7 24.6" aria-hidden="true"><polygon class=\"ry\" points=\"10.4,11.9 13.4,17.8 9.4,17.8 6.6,11.9 \"/><rect y=\"0.1\" class=\"rr\" width=\"3.5\" height=\"17.7\"/><path class=\"rg\" d=\"M16,17.8h3.2v-13H16V17.8z M16,2.6h3.3V0H16V2.6z\"/><path class=\"rg\" d=\"M40.4,17.8h3.2v-13h-3.2V17.8z M40.3,2.6h3.3V0h-3.3V2.6z\"/><path class=\"rg\" d=\"M58,17.8V9.5c0.1-1.4-0.4-2.7-1.3-3.7c-0.8-0.8-1.9-1.2-3.1-1.1c-1.2,0-2.4,0.5-3.2,1.3V4.8h-3.2v13h3.2V10 c-0.1-1.2,0.7-2.2,1.9-2.3c0.1,0,0.2,0,0.3,0c1.2,0,2.1,0.9,2.1,2c0,0.1,0,0.2,0,0.3v7.8H58z\"/><path class=\"rg\" d=\"M28.7,17.8h-1.8c-1.9,0.1-3.6-1.3-3.8-3.3c0-0.1,0-0.3,0-0.4V7.6h-1.4V5.2h1.4V1.4h3.2v3.8h5.5V1.4H35v3.8h2.3 v2.4H35v6.2c0,0.8,0.3,1.2,1.1,1.2h1.2v2.7h-1.6c-1.9,0.1-3.6-1.3-3.7-3.3c0-0.1,0-0.3,0-0.4V7.6h-5.5v6.2c0,0.8,0.3,1.2,1.1,1.2 h1.1V17.8z\"/><path class=\"rg\" fill-rule=\"evenodd\" d=\"M68.4,11c0,1.7-0.2,3.4-2.1,3.4s-2.1-1.7-2.1-3.4s0.2-3.3,2.1-3.3S68.4,9.3,68.4,11 M71.6,17.4V4.8h-3.1V6 c-0.8-0.9-2-1.4-3.2-1.4c-1.1,0-2.3,0.4-3.1,1.1c-1.2,1.2-1.3,2.9-1.3,5.1s0.1,3.9,1.3,5.2c0.8,0.8,1.9,1.2,3.1,1.1 c1.2,0.1,2.3-0.4,3.1-1.3v1.3c0.1,1.3-0.8,2.5-2.2,2.7c-0.1,0-0.3,0-0.4,0c-0.9,0-1.9-0.3-2.5-1l-2,2c1.2,1.2,2.9,1.8,4.7,1.7 C69.4,22.6,71.6,20.4,71.6,17.4\"/><path class=\"rg\" d=\"M85.9,17.8V9.4c0-2.7-1.5-4.7-4.3-4.7c-1.2,0-2.3,0.5-3.1,1.3V0.1h-3.2v17.7h3.2V9.9c-0.1-1.2,0.7-2.2,1.9-2.3 c1.2-0.1,2.2,0.7,2.3,1.9c0,0.1,0,0.3,0,0.4v7.9H85.9z\"/><path class=\"rg\" fill-rule=\"evenodd\" d=\"M96,13c0.1,0.6-0.1,1.2-0.5,1.6c-0.5,0.5-1.3,0.7-2,0.6c-1.3,0-1.9-0.6-1.9-1.5s0.7-1.5,1.8-1.5h2.5L96,13 L96,13z M99.2,17.8V9.3c0-3-1.9-4.6-5.5-4.6c-2.2,0-3.4,0.4-4.7,1.8l2.1,2c0.6-0.8,1.5-1.2,2.5-1.1c1.7,0,2.4,0.6,2.4,2V10h-3.1 c-3,0-4.4,1.7-4.4,3.8c0,1.1,0.4,2.1,1.1,2.9c0.9,0.8,2.1,1.2,3.3,1.1c1.2,0.1,2.3-0.4,3.1-1.2v1.1L99.2,17.8z\"/><path class=\"rg\" d=\"M113.3,17.8v-13H110v7.8c0.1,1.2-0.8,2.2-1.9,2.4c-1.2,0.1-2.2-0.8-2.4-1.9c0-0.1,0-0.3,0-0.4V4.8h-3.2v8.3 c-0.1,1.4,0.4,2.7,1.3,3.7c0.8,0.8,1.9,1.2,3,1.2c1.2,0.1,2.5-0.4,3.3-1.3v1.2L113.3,17.8z\"/><path class=\"rg\" d=\"M126.7,13.7c0-2.2-1.3-3.6-3.9-3.8l-2-0.2c-1.1-0.1-1.4-0.7-1.4-1.1c0-0.7,0.6-1.2,1.8-1.2 c1.1-0.1,2.1,0.2,3,0.9l2-2c-1.2-1.2-2.9-1.5-4.9-1.5c-2.6,0-5,1.4-5,4.1c0,2.4,1.4,3.4,3.8,3.6l2,0.2c1,0.1,1.4,0.5,1.4,1.2 c0,1-1.2,1.3-2.3,1.3c-1.3,0.1-2.5-0.4-3.5-1.2l-2.1,2.1c1.6,1.6,3.5,1.9,5.5,1.9C124.2,18,126.6,16.6,126.7,13.7\"/><path class=\"rb\" d=\"M4.4,7.7h2.3C8,7.8,9.1,6.8,9.1,5.6C9.2,4.3,8.2,3.2,7,3.2c-0.1,0-0.2,0-0.3,0H4.4V0.1H7 c2.2-0.1,4.3,1.1,5.3,3.1c0.3,0.7,0.5,1.4,0.5,2.2v0.1c0,0.7-0.2,1.5-0.5,2.2c-0.9,2-3,3.3-5.2,3.2H4.5L4.4,7.7L4.4,7.7z\"/></svg>'+
  '<div class="legal"><span class="lab">© 2026 Ernst Rittinghaus GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",reinraumkonzept:"story",leistungen:"leistungen",medizintechnik:"medizintechnik",unternehmen:"unternehmen",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Ernst Rittinghaus GmbH — Präzisionsspritzguss und Reinraumfertigung aus Halver",x:"Start"};
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
