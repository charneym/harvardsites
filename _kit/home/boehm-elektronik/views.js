/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function areas(){return '<ul class="pfr pipe np">'+AREAS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab cpy">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["1979","Klaus Böhm gründet das Unternehmen und baut anfangs elektronische Messgeräte für die Federnindustrie."],
  ["Wachstum","Das Portfolio wächst innerhalb kurzer Zeit: Messautomaten, Federwindemaschinen, Anlassöfen, Haspel, Schleif- und Verpackungsautomaten, Fördertechnik."],
  ["Heute","Feder-Produktionsstraßen und Sonderanlagen aus Reutlingen. Die Kunden kommen überwiegend aus Deutschland, geliefert wird weltweit."],
  ["2026","Aussteller auf der wire 2026 in Düsseldorf, der Fachmesse für Draht und Kabel."]];
  return '<ol class="sg-tl">'+H.map(function(h){return '<li data-r><span class="y">'+esc(h[0])+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function team(){
  return '<div class="mh"><div class="mh-group"><p class="mh-label">Geschäftsführung</p><ul class="mh-list">'+TEAM.map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function neu(){
  return '<dl class="drq">'+NEU.map(function(q){return '<div data-r><dt class="lab">'+esc(q[0])+'</dt><dd><b>'+esc(q[1])+'</b><span>'+esc(q[2])+'</span></dd></div>'}).join("")+'</dl>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="940" height="1736" alt="Federmessgerät von Böhm Elektronik mit Touch-Bedienteil, blauem Grundgestell und eingespannter Druckfeder" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Mess-, Förder- und Zuführtechnik<span class="nomob"> · Reutlingen</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Rund um die Feder,</span></span> <span class="l"><span class="nw">seit 1979.</span></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Böhm Elektronik entwickelt und produziert Komponenten und Maschinen für die Antriebs- und Fördertechnik sowie die Mess- und Prüftechnik, im Einsatz bei vielen international tätigen Unternehmen der metallverarbeitenden Industrie.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Unsere Produkte '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage senden</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Ihr Spezialist für Automatisierungslösungen</span>'+
   '<h2 class="txt" id="mani"><span class="nwp">Messen, fördern,</span> <span class="nwp">zuführen:</span> <span class="nwp">Maschinen für</span> <span class="nwp">die Federnindustrie,</span> <span class="nwp">entwickelt und gebaut</span> <span class="nwp">in Reutlingen.</span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1979</span><p class="k">gegründet von Klaus Böhm, mit elektronischen Messgeräten für die Federnindustrie</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><p class="k">Produktbereiche rund um Draht und Feder, vom Winden bis zur Prüfung</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1000 kg</span><p class="k">Spulen trägt die Spulenhaspel SPH1000, mit integrierter Hebeeinrichtung</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Rund um die Feder</span><h2 class="d3"><span class="nw">Vom Winden</span> <span class="nw">bis zur Prüfung.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Winden</span><span>Zuführen</span><span>Prüfen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Federn winden</span> <span class="nw">und schleifen.</span></h2><p>Mit der Federwindemaschine FWM-1 und den Federschleifmaschinen baut Böhm Elektronik Maschinen für die Federproduktion selbst, bis hin zu kompletten Feder-Produktionsstraßen.</p></article>'+
     '<article class="step"><h2><span class="nw">Entwirren, fördern,</span> <span class="nw">beladen.</span></h2><p>Federentwirrsystem, Entwirrtopf EW-1, Vorratsbehälter und Federzuführung FZ, dazu Trommel-, Rund- und Linearförderer, Steilförderer mit Bunker und Beladeeinrichtungen mit Roboter.</p></article>'+
     '<article class="step"><h2><span class="nw">Federkraft messen</span> <span class="nw">und prüfen.</span></h2><p>Mit elektronischen Messgeräten für die Federnindustrie hat das Unternehmen 1979 begonnen. Heute gehören Messgeräte, Torsionsfederprüfgeräte und Setz- und Prüfautomaten dazu.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split"><span class="nw">Fünf Produktbereiche</span> <em><span class="nw">rund um</span> <span class="nw">Draht und Feder.</span></em></h2></div><p data-r>Präzise und wirtschaftliche Fördersysteme, Automatisierungslösungen und bewährte Haspeln. Dazu individuell erstellte Zuführsysteme, Feder-Produktionsstraßen und Sonderanlagen.</p></div>'+
   areas()+
  '</div></section>'+

  '<section class="sec light" id="loesungen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Neue Lösungen</span><h2 class="d2 split"><span class="nw">Beladen, zuführen</span> <em class="nw">und abwickeln.</em></h2></div><p data-r>Aktuelle Anlagen für die zuverlässige Optimierung Ihrer Anlagen und Produktionsprozesse, modular aufgebaut und auf Ihre Anwendung zugeschnitten.</p></div>'+
   neu()+
  '</div></section>'+

  '<section class="sec dark" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Seit 1979</span> <em class="nw">in Reutlingen.</em></h2></div><p data-r>Heute fertigt Böhm Elektronik Federkraftmessgeräte, Messautomaten, Federwindemaschinen, Anlassöfen, Haspel, Federenden-Schleifmaschinen, Verpackungsautomaten, Fördertechnik, Feder-Produktionsstraßen und Sonderanlagen.</p></div>'+
   hist()+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Zuletzt auf</span> <em class="nw">der wire in Düsseldorf.</em></h2></div><p data-r>Jeder Eintrag verlinkt auf seine Quelle.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Sprechen Sie mit uns</span> <em class="nw">über Ihr Projekt.</em></h2>'+
   '<p class="sub" data-r>Unser Vertrieb und unsere Konstruktion stehen für Anfragen zur Verfügung. Nutzen Sie unser technisches Know-how und unsere Fertigungskompetenz.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Zentrale</span><p data-r>Klaus Böhm Elektronik GmbH<br>Germanenstraße 24<br>72768 Reutlingen<br>Deutschland</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Wir sind für Sie da</span><p data-r>Montag bis Donnerstag<br>7:30–12:00 und 13:00–16:00<br>Freitag 7:30–12:00</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresse</span>Klaus Böhm Elektronik GmbH<br>Germanenstraße 24, 72768 Reutlingen</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Seiten</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/loesungen">Lösungen</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/news">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Register</span>Amtsgericht Stuttgart HRB 351005<br>Geschäftsführung: Ralf Böhm, Matthias Seehuber</div>'+
  '</div><svg class="bigsvg flogo" viewBox="0 0 1000 70" aria-hidden="true"><text x="500" y="56" text-anchor="middle" style="letter-spacing:.16em">BÖHM ELEKTRONIK · REUTLINGEN</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Klaus Böhm Elektronik GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",produkte:"produkte",loesungen:"loesungen",unternehmen:"unternehmen",news:"news",kontakt:"kontakt",contact:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Böhm Elektronik — Mess-, Förder- und Zuführtechnik, Reutlingen",x:"Home"};
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
