/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[4])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Industriestühle","Über 50 Jahre Erfahrung im Industriestuhlbereich: Arbeitsstühle nach DIN 68877 für Industrie und Werkstatt, Labor-, Reinraum- und ESD-Stühle, 24-Stunden-Stühle für Leitstellen, Stehhilfen und Schwerlaststühle bis 160 bzw. 220 kg.",'<path d="M18 8h20v18H18z"/><path d="M14 30h28"/><path class="a" d="M28 30v12"/><path d="M16 48l12-6 12 6"/><circle class="f" cx="16" cy="48" r="2.4"/><circle class="f" cx="40" cy="48" r="2.4"/>'],
  ["Arbeitstische","Höhenverstellbar, elektrisch, elektro-hydraulisch, per Handkurbel oder Raster, mit Traglasten von 220 bis 2.480 kg. Auf Wunsch mit Memoryfunktion, Antikollisionsschutz, Beleuchtung, Energieleisten und ESD-fähig.",'<path d="M8 18h40"/><path d="M14 18v30M42 18v30"/><path class="a" d="M28 26v14M23 30l5-5 5 5M23 36l5 5 5-5"/><circle class="f" cx="28" cy="18" r="2.4"/>'],
  ["Bodenfliesen und Markierung","PVC-Bodenfliesen im Klicksystem, verlegbar bei laufender Produktion, auch als volumenleitfähige ESD-Fliesen, vom Fraunhofer-Institut zertifiziert. Dazu PVC-Bodenmarkierungsbänder.",'<path d="M8 20l20-10 20 10-20 10z"/><path d="M8 30l20 10 20-10"/><path class="a" d="M8 40l20 10 20-10"/><circle class="f" cx="28" cy="20" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick">Ergebnisse</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab">'+esc(e[0])+'</dt><dd>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s">Quelle: Auszug aus der Studie zur Arbeitsplatzmatte ERGOKOMFORT® FN-PLUS, QIMOTO – Labor für Bewegungs- und Funktionsdiagnostik. Die komplette Studie stellt Ergokomfort auf Anfrage gern zur Verfügung.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Arbeitsplatzmatten · Industriestühle · Arbeitstische<span class="nomob"> · Harsefeld</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Wellness für</span><span class="l"><em>Beine und Rücken.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Ergokomfort fertigt ergonomische Arbeitsplatzmatten für Produktion, ESD-Bereich, Labor, Reinraum und Lebensmittel, in allen Längen und auch als Sonderform, dazu Industriestühle und höhenverstellbare Arbeitstische.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">Wie die Matte wirkt '+ARR+'</a><a class="btn" href="#/matten">Zu den Matten</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick">Komplette Lösungen für ergonomische Arbeitsplätze</span>'+
   '<h2 class="txt" id="mani">Rund jeder zweite Arbeitnehmer leistet andauernde Steharbeit. Die richtige Unterlage entlastet den Körper und <em>dient der Gesundheit wie dem Betriebsergebnis.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">50+</span><p class="k">Jahre Erfahrung und technische Kompetenz im Industriestuhlbereich</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">14</span><p class="k">Tage kostenloser Matten-Test, bevor Sie sich entscheiden</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2.480</span><p class="k">Kilogramm Traglast: die stärksten höhenverstellbaren Arbeitstische im Sortiment</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Wie die Matte wirkt</span><h2 class="d3">Vom harten Boden <em>zum stabilen Gang.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Boden</span><span>Matte</span><span>Studie</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Harter Boden belastet.</h2><p>Wer auch nur ein bis zwei Stunden auf Beton oder Fliesen steht, setzt den Körper Belastungen aus, die er nicht ausgleichen kann: verspannte Muskeln, steife Gelenke, eine verminderte Durchblutung.</p></article>'+
     '<article class="step"><h2>Eine weiche Unterlage.</h2><p>Die ERGOKOMFORT®-Matte FN-PLUS ist aus geschäumtem Polyurethan, 12 mm stark, mit flachen Noppen und abgeschrägten Kanten. Sie gibt unter jedem Schritt nach und bleibt leicht befahrbar.</p></article>'+
     '<article class="step"><h2>Messbar stabiler.</h2><p>In einer 3D-Ganganalyse wirkte die Matte in der stoßdämpfenden Belastungsantwort positiv auf Knie und Sprunggelenk. Der Gang wird zu Beginn der Stützphase besser stabilisiert.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="sortiment" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Sortiment</span><h2 class="d2 split">Der ganze Arbeitsplatz, <em>ergonomisch.</em></h2></div><p>Als Hersteller bieten wir neben Arbeitsplatzmatten auch Stühle, Tische und Böden, damit Stehen, Sitzen und Arbeiten zusammenpassen. Sprechen Sie uns an, wir beraten Sie gern.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="matten" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Arbeitsplatzmatten</span><h2 class="d2 split">Für jeden Boden <em>die passende Matte.</em></h2></div><p>Trocken, ölig, ESD-sensibel oder hygienisch: Wir bieten unterschiedliche Mattentypen und Materialien, damit die Erfordernisse jedes Arbeitsplatzes im Sinne der Ergonomie erfüllt werden.</p></div>'+
   pipeRows(PIPE)+
   '<div class="bk"><span class="lab kick">Sonderformen</span><p class="cr">Standardmaß ca. 66 × 96 cm, erhältlich in allen Längen. <i>Wir fertigen auch Sonderbreiten und Sonderformen, auf Wunsch mit Verlegung.</i></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Unternehmen</span><h2 class="d2 split">Hersteller <em>aus Harsefeld.</em></h2></div><p>Für unsere Kunden bringen wir das Wissen aus vielen Jahren Erfahrung in der Ergonomie ein, mit kompetenter Beratung zu den unterschiedlichsten Problemstellungen in der Industrie.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick">Gefertigt in Deutschland</span><p>Unsere Produkte für den industriellen Bereich werden in Deutschland bzw. der EU gefertigt, neben den ergonomischen Ausführungen auch als ESD-Varianten.</p></div>'+
    '<div><span class="lab kick">productronica 2025</span><p>Aussteller auf der Weltleitmesse für Elektronikfertigung in München, Halle A4, Stand 132. <a class="ul" href="https://exhibitors.productronica.com/ausstellerportal/2025/aussteller/ausstellerdetails/ergokomfort-gmbh/?elb=228.1100.5870.1.111" target="_blank" rel="noopener">Ausstellerprofil</a></p></div>'+
    '<div><span class="lab kick">Beratung und Service</span><p>Kostenlos erreichbar unter <a class="ul" href="tel:08000052222">0800 005 2222</a>, mit Katalog per Post auf Anfrage.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="studie" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Studie</span><h2 class="d2 split">Gemessen <em>im Ganglabor.</em></h2></div><p>Das Labor QIMOTO untersuchte, wie die Arbeitsplatzmatte FN-PLUS Gelenkwinkel und Gelenkkräfte beim Gehen verändert, im Vergleich zum Gehen auf normalem Boden.</p></div>'+
   evid()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick">Beratung und Service</span>'+
   '<h2 class="big split">Testen Sie die Matte <em>14 Tage kostenlos.</em></h2>'+
   '<p class="sub">Wir beraten Sie gern, damit Sie die individuell optimale ergonomische Matte einsetzen können, und senden Ihnen auf Wunsch unseren Katalog.</p>'+
   '<div class="act"><a class="btn solid" href="mailto:'+MAIL+'">E-Mail an Ergokomfort '+ARR+'</a><a class="btn" href="tel:08000052222">0800 005 2222</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab">Ergokomfort GmbH</span><p>Südstraße 43<br>21698 Harsefeld</p></div>'+
    '<div><span class="lab">Telefon</span><p><a class="ul" href="tel:08000052222">0800 005 2222</a> (kostenlos)<br><a class="ul" href="tel:+494164907840">+49 4164 907840</a></p></div>'+
    '<div><span class="lab">E-Mail</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Ergokomfort GmbH</span>Südstraße 43<br>21698 Harsefeld</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:08000052222">0800 005 2222</a></div>'+
   '<div class="c"><span class="lab">Seiten</span><a class="ul" href="#/matten">Matten</a><br><a class="ul" href="#/sortiment">Sortiment</a><br><a class="ul" href="#/studie">Studie</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Wellness</span>für Beine<br>und Rücken</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Barlow\',Arial,sans-serif;font-size:58px;letter-spacing:.02em"><tspan style="font-weight:400">ERGO</tspan><tspan style="font-weight:600">KOMFORT</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Ergokomfort GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",approach:"story",matten:"matten",sortiment:"sortiment",studie:"studie",unternehmen:"unternehmen",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ERGOKOMFORT® — Arbeitsplatzmatten, Industriestühle und Arbeitstische · Ergokomfort GmbH, Harsefeld",x:"Start"};
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
