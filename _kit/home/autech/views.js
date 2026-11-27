/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function dq(A,cls){
  return '<dl class="drq'+(cls?' '+cls:'')+'">'+A.map(function(q){return '<div data-r><dt class="lab">'+esc(q[0])+'</dt><dd>'+(q.length>2?'<b>'+esc(q[1])+'</b>':'')+'<span>'+esc(q[q.length-1])+'</span></dd></div>'}).join("")+'</dl>'}
function mach(){return '<ul class="pfr pipe np">'+MACH.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab cpy">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function spec(){return '<ul class="pfr pipe np">'+SPECIAL.map(function(c){
  return '<li><span class="lab tg"><b>Sondermaschine</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab cpy">'+esc(c[0])+'</span></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["2013","Umzug aus Platznot vom Eisbach nach Untergröningen; heute wieder in den eigenen Räumen im Kocherweg 37, Sulzbach-Laufen."],
  ["2018","Aussteller auf der Tube in Düsseldorf, ebenso 2022 und 2024."],
  ["2025","Nachfolge laufender Projekte von Anbietern, die den Betrieb eingestellt haben."],
  ["2026","Tube Düsseldorf, 13. bis 17. April."]];
  return '<ol class="sg-tl">'+H.map(function(h){return '<li data-r><span class="y">'+esc(h[0])+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1233" height="1332" alt="Rohrumformmaschine AU90 von AuTech mit blauer Schiebehaube und Bedienpanel" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Rohrtrenntechnik · Automation<span class="nomob"> · Sulzbach-Laufen</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Rohre spanlos trennen</span></span> <span class="l"><span class="nw">und umformen.</span></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Rohrtrenntechnik und Automation aus einer Hand: wir bauen Maschinen zum spanlosen Trennen und Umformen von Rohren, Roboterzellen und Sondermaschinen: von Konzept und Konstruktion über Fertigung und Inbetriebnahme bis zum Service.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/kontakt">Anfrage senden '+ARR+'</a><a class="btn" href="#/rohrtechnik">Unsere Produkte</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Spanlos, gratarm, trocken</span>'+
   '<h2 class="txt" id="mani"><span class="nwp">Kompetenz und Flexibilität</span> <span class="nwp">sind die Eckpfeiler</span> <span class="nwp">unserer Firmenphilosophie,</span> <span class="nwp">vom Konzept</span> <span class="nwp">bis zum Service.</span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">Ø 6–100</span><p class="k">Millimeter: Rohre spanlos, gratarm und trocken trennen, in einer patentierten Lösung</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt; 5 s</span><p class="k">Zykluszeit möglich auf der AS60, bei Wandstärken von 0,08 bis 2,0 mm</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">24h</span><p class="k">Service, Fernwartung und Wartungsverträge; Yaskawa Motoman Systempartner</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Rohre spanlos trennen und umformen</span><h2 class="d3"><span class="nw">Ein Rohr,</span> <span class="nw">ohne Späne.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Spannen</span><span>Trennen</span><span>Umformen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Eingespannt,</span> <span class="nw">exakt positioniert.</span></h2><p>Das Rohr läuft ein und wird gespannt. Die Schnittspalteinstellung ist auf 1/100 mm genau, auch für mehrlagige Rohre.</p></article>'+
     '<article class="step"><h2><span class="nw">Trennen und Rollieren</span> <span class="nw">in einem Arbeitsgang.</span></h2><p>Spanloses, materialschonendes Trennen mit bogennaher Endenbearbeitung. Die Standzeit liegt bei 100.000 Schnitten, zum Beispiel bei Ø 25 × 1,0 aus 1.4509.</p></article>'+
     '<article class="step"><h2><span class="nw">Aufweiten</span> <span class="nw">und Einziehen.</span></h2><p>Die Rohrumformmaschine AU90 weitet Rohrenden auf und zieht sie ein: vollelektrisch, mit bis zu 100 Tonnen radialer Umformkraft, für Rohre von 15 bis 90 mm.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="rohrtechnik" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Rohrtechnik</span><h2 class="d2 split"><span class="nw">Rohre spanlos trennen</span> <em class="nw">und umformen.</em></h2></div><p data-r>Spanloses, materialschonendes Trennen mit hochpräziser Schnittspalteinstellung und bogennaher Endenbearbeitung. Dazu das Aufweiten und Einziehen von Rohren mit höchster Präzision.</p></div>'+
   mach()+
  '</div></section>'+

  '<section class="sec light" id="automation" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Automation</span><h2 class="d2 split"><span class="nw">Roboterzellen für</span> <em class="nw">Ihre Fertigung.</em></h2></div><p data-r>Als Systempartner nutzen wir Robotertechnik von Yaskawa Motoman und beherrschen automatisiertes Fügen, Schneiden und Biegen. Sie erhalten eine Komplettlösung aus einer Hand, die wir in Ihr Umfeld einbinden.</p></div>'+
   dq(CELLS)+
  '</div></section>'+

  '<section class="sec dark" id="sondermaschinen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Sondermaschinenbau</span><h2 class="d2 split"><span class="nw">Wir bauen</span> <em class="nw">Ihre Maschine.</em></h2></div><p data-r>Individuell und in präziser Ausarbeitung, damit es wirklich Ihre Maschine wird. Konstruktion, Fertigung, Dokumentation, Installation und Service liefern wir aus einer Hand.</p></div>'+
   spec()+
  '</div></section>'+

  '<section class="sec light" id="leistungen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Leistungen</span><h2 class="d2 split"><span class="nw">Von der Idee</span> <em class="nw">bis zum Service.</em></h2></div><p data-r>Spezialisiert auf Rohrtrenntechnik und Automatisierung: unsere Erfahrung aus dem komplexen Anlagenbau setzen wir vor allem in der Rohrtrenntechnik ein. Details zu abgeschlossenen Projekten behandeln wir bewusst vertraulich.</p></div>'+
   dq(SERV,"dq4")+
   hist()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Aktuelles</span> <em class="nw">von AuTech.</em></h2></div><p data-r>Jeder Eintrag verlinkt auf seine Quelle.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Sprechen Sie mit uns</span> <em class="nw">über Ihr Projekt.</em></h2>'+
   '<p class="sub" data-r>Sie haben eine Idee und suchen einen Partner, um die Machbarkeit zu diskutieren? Oder bestehende Prozesse und Maschinen, die Sie automatisieren möchten?</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>AuTech GmbH<br>Automationstechnologie<br>Kocherweg 37<br><span>74429 Sulzbach-Laufen</span></p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></span></p></div>'+
    '<div><span class="lab" data-r>Service</span><p data-r>24h-Service und Fernwartung<br>Wartungsverträge<br><span>Schulung an der Maschine</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>Kocherweg 37<br>74429 Sulzbach-Laufen</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Seiten</span><a class="ul" href="#/rohrtechnik">Rohrtechnik</a><br><a class="ul" href="#/automation">Automation</a><br><a class="ul" href="#/sondermaschinen">Sondermaschinen</a><br><a class="ul" href="#/leistungen">Leistungen</a></div>'+
   '<div class="c"><span class="lab">AuTech GmbH</span>Automationstechnologie<br>Yaskawa Motoman Systempartner</div>'+
  '</div><svg class="bigsvg flogo" viewBox="0 0 1000 70" aria-hidden="true"><text x="500" y="56" text-anchor="middle" style="letter-spacing:.16em">AUTECH · SULZBACH-LAUFEN</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 AuTech GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",rohrtechnik:"rohrtechnik",automation:"automation",sondermaschinen:"sondermaschinen",leistungen:"leistungen",news:"news",kontakt:"kontakt",contact:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"AuTech GmbH — Rohrtrenntechnik und Automation aus Sulzbach-Laufen",x:"Home"};
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
