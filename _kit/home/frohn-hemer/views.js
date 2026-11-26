/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function tools(){return '<div class="frtw"><ol class="frtl">'+TOOLS.map(function(t,i){
  return '<li data-r><span class="lab ix">'+(i<9?"0":"")+(i+1)+'</span><h3>'+esc(t)+'</h3></li>'}).join("")+'</ol>'+
  '<aside class="frsp" data-r><span class="lab kick">Werkzeugabmessungen</span><dl>'+
   '<div><dt class="lab">Werkstoffe</dt><dd>Diverse Hartmetallsorten, diverse Stähle</dd></div>'+
   '<div><dt class="lab">Bohrungsdurchmesser</dt><dd>0,8 bis 16 mm</dd></div>'+
   '<div><dt class="lab">Außendurchmesser</dt><dd>bis 120 mm</dd></div>'+
   '<div><dt class="lab">Länge</dt><dd>bis 200 mm</dd></div>'+
  '</dl><p>Bohrungen unter Ø 0,8 mm benötigen eine individuelle Prüfung.</p></aside></div>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Ansprechpartner</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul>'+
    '<p class="frct" data-r><a class="ul" href="mailto:'+MAILMF+'">'+MAILMF+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* four capabilities (frohn-hemer.de > Start: Drahterodieren, Senkerodieren, CNC-Drehen; Werkzeuge: Qualitätsmanagement) */
function caps(){var C=[
  ["Drahterodieren","<span class=\"nw\">Feine Bohrungen,</span> <span class=\"nw\">endformnah</span>","Eine präzise Bearbeitungsmethode, die durch Funkenerosion feine, endformnahe Bohrungen und Koniken ermöglicht.",'<path d="M28 4V52"/><rect x="20" y="4" width="16" height="7"/><rect x="20" y="45" width="16" height="7"/><path class="a" d="M22 24L18 21M34 30L38 27M22 34L18 37"/><rect x="10" y="17" width="36" height="22"/>'],
  ["Senkerodieren","<span class=\"nw\">Komplexe Formen,</span> <span class=\"nw\">eigene Elektroden</span>","Die Anfertigung spezieller Elektroden ermöglicht es uns, komplexe Formen zu erodieren.",'<path d="M20 4H36V26L32 30H24L20 26Z"/><path d="M6 34H18L22 40H34L38 34H50V52H6Z"/><path class="a" d="M24 32L22 35M32 32L34 35"/>'],
  ["CNC-Drehen","<span class=\"nw\">Die Basis</span> <span class=\"nw\">im Werkzeugbau</span>","Moderne Maschinen dienen als Basis der spanenden Bearbeitung im Werkzeugbau.",'<rect x="6" y="18" width="30" height="20"/><path d="M36 22H50M36 34H50"/><path class="a" d="M40 6L46 16H34Z"/><path d="M14 18V38M22 18V38"/>'],
  ["Qualitätssicherung","<span class=\"nw\">Zertifiziert</span> <span class=\"nw\">nach DIN ISO 9001</span>","Jährlich entwerfen und bewerten wir Qualitäts- und Unternehmensziele, legen prozessoptimierende Korrekturmaßnahmen fest und führen Lieferantenbewertungen und Messmittelkontrollen durch.",'<circle cx="28" cy="28" r="20"/><path class="a" d="M19 28L25 34L37 22"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Hartmetall-Umformwerkzeuge<span class="nomob"> · Hemer</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Präzise Werkzeuge</span> <span class="l"><em class="nw">für die Kaltumformung.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Die M. Frohn GmbH fertigt in Hemer Hartmetall-Werkzeuge für die Massivumformung in der Schrauben- und Nietenindustrie: Matrizen, Stempel und Staucher, zertifiziert nach DIN ISO 9001.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/werkzeuge">Unsere Werkzeuge '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Seit 2021 in Hemer</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Ein verlässlicher Partner</span> <span class="nw">für hochwertige und</span> <span class="nw">präzise Umformwerkzeuge,</span> <em><span class="nw">mit technischer Fachkompetenz</span> <span class="nw">und Beratung für</span> <span class="nw">individuelle Anliegen.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2021</span><p class="k">gegründet im Dezember, mit eigenem Maschinenpark in einer modernen Produktionshalle in Deilinghofen</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0,8 mm</span><p class="k">kleinster Bohrungsdurchmesser im Standard, bis 16 mm; feinere Bohrungen nach Prüfung</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">120 mm</span><p class="k">Außendurchmesser und bis 200 mm Länge, aus Hartmetall oder Stahl</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Wie eine Matrize entsteht</span><h2 class="d3"><span class="nw">Vom Rohling</span> <em class="nw">zur Matrize.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Drehen</span><span>Erodieren</span><span>Senken</span><span>Umformen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Erst wird</span> <span class="nw">das Gehäuse gedreht.</span></h2><p>Moderne CNC-Drehmaschinen sind die Basis der spanenden Bearbeitung: Sie bringen das Stahlgehäuse in Form, das den Hartmetallkern aufnimmt.</p></article>'+
     '<article class="step"><h2><span class="nw">Der Draht</span> <span class="nw">schneidet die Bohrung.</span></h2><p>Beim Drahterodieren trägt Funkenerosion das Hartmetall ab, für feine, endformnahe Bohrungen und Koniken, im Standard von 0,8 bis 16 mm.</p></article>'+
     '<article class="step"><h2><span class="nw">Die Elektrode</span> <span class="nw">senkt die Form.</span></h2><p>Für komplexe Formen fertigen wir eigene Elektroden. Beim Senkerodieren bildet die Elektrode ihre Kontur im Hartmetall ab.</p></article>'+
     '<article class="step"><h2><span class="nw">Im Einsatz:</span> <span class="nw">kalt umgeformt.</span></h2><p>In der Presse formt der Stempel den Rohling in der Matrize: Schaft in die Bohrung, Kopf in die Form. Massivumformung für Schrauben und Nieten.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="werkzeuge" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Werkzeuge</span><h2 class="d2 split"><span class="nw">Matrizen, Stempel,</span> <em class="nw">Staucher und mehr.</em></h2></div><p data-r>Unsere Werkzeuge dienen speziell der Massivumformung in der Schrauben- und Nietenindustrie. Bei hoher Qualität garantieren wir zuverlässige Lieferzeiten und sind bei Bedarf auch für kurzfristige Termine flexibel.</p></div>'+
   tools()+
  '</div></section>'+

  '<section class="sec light" id="fertigung" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Fertigung</span><h2 class="d2 split"><span class="nw">Gedreht und erodiert,</span> <em class="nw">dann geprüft.</em></h2></div><p data-r>Drei Verfahren tragen unseren Werkzeugbau, und ein Qualitätsmanagement nach DIN ISO 9001 sichert jeden Schritt, vom Rohling bis zur fertigen Matrize.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Gegründet 2021,</span> <em class="nw">zuhause in Hemer.</em></h2></div><p data-r>Gegründet wurde die M. Frohn GmbH im Dezember 2021. Zur gleichen Zeit bezogen wir mit unserem Maschinenpark eine moderne Produktionshalle im neu erschlossenen Industriegebiet in Deilinghofen.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>Was Sie erwarten dürfen</span><ul>'+
     '<li data-r><b>Qualität</b>Seit 2022 nach DIN ISO 9001 zertifiziert. Damit gehen besonders hohe Qualitätsstandards und kompetentes, kundenorientiertes Handeln einher.</li>'+
     '<li data-r><b>Termintreue</b>Zuverlässige Lieferzeiten, und bei Bedarf auch Flexibilität für kurzfristige Termine.</li>'+
     '<li data-r><b>Beratung</b>Wir beraten Sie in individuellen Anliegen, um eine maßgeschneiderte Lösung für Ihre Anforderungen zu finden.</li>'+
    '</ul></div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Zertifizierung</span><p class="cr" data-r><span>DIN ISO 9001:2015</span><span>Qualitätsmanagement</span><span>Lieferantenbewertung</span><span>Messmittelkontrolle</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Zuletzt in Düsseldorf,</span> <em class="nw">auf der wire.</em></h2></div><p data-r>Auf der wire, der Fachmesse für Draht und Kabel, treffen Sie uns in Düsseldorf, zuletzt im April 2026. Jeder Eintrag verweist auf seine Quelle.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihre Zeichnung,</span> <em class="nw">unser Werkzeug.</em></h2>'+
   '<p class="sub" data-r>Gerne beraten wir Sie in allen technischen Anliegen, vom Standardwerkzeug bis zur individuellen Form für Ihre Presse.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail senden '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Adresse</span><p data-r><span>M. Frohn GmbH</span><br><span>Amerikastraße 13</span><br><span>58675 Hemer</span></p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Telefon '+TELT+'</span></p></div>'+
    '<div><span class="lab" data-r>Ansprechpartner</span><p data-r><span>Martin Frohn</span><br><span>Geschäftsführer</span><br><a class="ul" href="mailto:'+MAILMF+'">'+MAILMF+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresse</span>M. Frohn GmbH, Amerikastraße 13, 58675 Hemer, Deutschland</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/werkzeuge">Werkzeuge</a><br><a class="ul" href="#/fertigung">Fertigung</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/aktuelles">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Werkzeuge</span>Hartmetall-Umformwerkzeuge für die Schrauben- und Nietenindustrie, zertifiziert nach DIN ISO 9001</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Jost\',system-ui,sans-serif;font-weight:400;font-size:46px;letter-spacing:.24em">M. FROHN GMBH</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 M. Frohn GmbH · Amtsgericht Iserlohn HRB 10187</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",werkzeuge:"werkzeuge",fertigung:"fertigung",unternehmen:"unternehmen",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"M. Frohn GmbH — Hartmetall-Umformwerkzeuge, Hemer",x:"Start"};
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
