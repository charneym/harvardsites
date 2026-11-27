/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function dq(A,cls){
  return '<dl class="drq'+(cls?' '+cls:'')+'">'+A.map(function(q){return '<div data-r><dt class="lab">'+esc(q[0])+'</dt><dd>'+(q.length>2?'<b>'+esc(q[1])+'</b>':'')+'<span>'+esc(q[q.length-1])+'</span></dd></div>'}).join("")+'</dl>'}
function mach(){return '<ul class="pfr pipe np">'+MACH.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[3])+'</p><span class="lab cpy">'+esc(c[2])+'</span></li>'}).join("")+'</ul>'}
function proc(){return '<ul class="pfr pl2 np">'+PROC.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><div><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></div></li>'}).join("")+'</ul>'}
function apps(){return '<ul class="apps">'+APPS.map(function(a){return '<li data-r>'+esc(a)+'</li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["1864","F.W. Bündgens baut Maschinen für die Textil- und Nadelindustrie, später Drahtricht-, Abschneide- und Schleifmaschinen."],
  ["1982","Hubert Jouhsen gründet die Jouhsen Maschinenbau GmbH und entwickelt Kaltstauchmaschinen für die Elektronik- und Elektroindustrie."],
  ["1991","Übernahme des Bündgens-Programms: Drahtverarbeitungs- und Abfüllanlagen aus einer Hand."],
  ["2018","Gütesiegel „Innovation durch Forschung“ des Stifterverbands für die Deutsche Wissenschaft."]];
  return '<ol class="sg-tl">'+H.map(function(h){return '<li data-r><span class="y">'+esc(h[0])+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1200" height="1383" alt="Blaue Richt- und Abschneidemaschine PrecisionCut UD von Jouhsen-bündgens mit geöffneter Haube, orangefarbenem Richtrad und Bedienpult" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Drahtverarbeitung<span class="nomob"> · Stolberg bei Aachen · seit 1864</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Maschinen für</span></span> <span class="l"><span class="nw">Draht und Rohr.</span></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Jouhsen-bündgens ist Spezialist für das rotierende Richten. Seit mehr als 150 Jahren bauen wir in Stolberg Maschinen, die Draht und Rohr richten, trennen, an den Enden bearbeiten, kalt umformen und schleifen, für Kunden in Europa, Amerika und Asien.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/kontakt">Anfrage senden '+ARR+'</a><a class="btn" href="#/prozesse">Unsere Prozesse</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Unternehmen</span>'+
   '<h2 class="txt" id="mani"><span class="nwp">Hochpräziser Maschinenbau</span> <span class="nwp">mit jahrzehntelanger Erfahrung:</span> <span class="nwp">vom Ring oder Coil</span> <span class="nwp">zum fertigen Teil.</span></h2></div>'+
   '<div class="stats sst">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1864</span><p class="k">gründet F.W. Bündgens den Betrieb; 1982 folgt die Jouhsen Maschinenbau GmbH</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0,02–16</span><p class="k">Millimeter Draht- und Rohrdurchmesser, abgelängt von 2 bis 6.000 mm</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">850</span><p class="k">Nadelspitzen pro Minute schleift eine PrecisionGrind-Maschine</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2 Werke</span><p class="k">Mutterwerk in Stolberg, Niederlassung in Atlanta seit 1999</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Rotierendes Richten</span><h2 class="d3"><span class="nw">Vom Ring</span> <span class="nw">zum Fertigteil.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Richten</span><span>Abschneiden</span><span>Spitzen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Der Draht kommt</span> <span class="nw">vom Ring.</span></h2><p>Er läuft durch den rotierenden Richtflügel: versetzte Richtsteine biegen ihn rundum, bis er gerade herauskommt. Rotierendes Richten ist unsere Kernkompetenz.</p></article>'+
     '<article class="step"><h2><span class="nw">Rechtwinklig</span> <span class="nw">abgelängt.</span></h2><p>Das Messer trennt maßhaltige Abschnitte von 2 bis 6.000 mm Länge, aus Drähten und Rohren von 0,02 bis 16 mm, auch aus Wolfram, Molybdän oder Tantal.</p></article>'+
     '<article class="step"><h2><span class="nw">Das Ende</span> <span class="nw">wird zur Spitze.</span></h2><p>Je nach Teil folgt die Endenbearbeitung: Fasen und Radien, Kaltstauchen oder, auf den PrecisionGrind-Maschinen, runde Nadelspitzen mit bis zu 850 Teilen pro Minute.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="prozesse" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Prozesse</span><h2 class="d2 split"><span class="nw">Fünf Prozesse,</span> <em class="nw">ein Maschinenbauer.</em></h2></div><p data-r>Engineering, ein moderner Maschinenpark in der hauseigenen Teilefertigung, eine hohe Fertigungstiefe und ein gruppeneigener Steuerungsbau sind die Grundlage. Wir begleiten Ihre Produktion über Jahrzehnte.</p></div>'+
   proc()+
  '</div></section>'+

  '<section class="sec dark2" id="maschinen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Maschinenprogramm</span><h2 class="d2 split"><span class="nw">Präzision und Tempo,</span> <em class="nw">für Ihr Teil gebaut.</em></h2></div><p data-r>Das Herzstück jeder Maschine ist die Werkzeugeinheit: tausendfach erprobt und individuell auf Ihre Anwendung hin entwickelt. Für Neuanlagen sind wir mit Nachweisen wie Validierung oder FMEA bestens vertraut.</p></div>'+
   mach()+
  '</div></section>'+

  '<section class="sec light" id="anwendungen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Anwendungen</span><h2 class="d2 split"><span class="nw">Kaum sichtbar,</span> <em class="nw">aber unverzichtbar.</em></h2></div><p data-r>Von Achsen und Wellen für Automobilteile über Batteriestifte bis zu Kanülen und haarfeinen Drähten mit empfindlichen Oberflächen: Bauteile aus Draht und Rohr für viele Branchen, zum Beispiel für Medizintechnik oder Elektromobilität.</p></div>'+
   apps()+
  '</div></section>'+

  '<section class="sec dark" id="service" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Service und Historie</span><h2 class="d2 split"><span class="nw">Maschinenbau</span> <em class="nw">mit Tradition.</em></h2></div><p data-r>Unser Service sichert Ihre Produktivität, die Verfügbarkeit und den Werterhalt Ihrer Anlagen. Geführt wird Jouhsen-bündgens von Dr. Bert Bosserhoff und Dr. Jörg Peter Renz als geschäftsführenden Gesellschaftern.</p></div>'+
   dq(SERV,"dq4")+
   hist()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Messen</span> <em class="nw">und Neuigkeiten.</em></h2></div><p data-r>Jeder Eintrag verlinkt auf seine Quelle.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Sprechen Sie mit uns</span> <em class="nw">über Ihr Bauteil.</em></h2>'+
   '<p class="sub" data-r>Ob Draht, Rohr oder Infusionsbeutel: wir entwickeln die Prozessschritte, die Ihr Produkt braucht.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Standort Deutschland</span><p data-r>Jouhsen-bündgens Maschinenbau GmbH<br>Industriestr. 11–13<br><span>52224 Stolberg</span></p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><span>Fax +49 2402 102067-90</span></p></div>'+
    '<div><span class="lab" data-r>Standort USA</span><p data-r>JouhsenBundgens Inc.<br>225 Peachtree Street NE, 1100 South Tower<br>Atlanta, GA 30303<br><span><a class="ul" href="tel:+14048509753">+1 404 850 9753</a></span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Stolberg</span>Industriestr. 11–13, 52224 Stolberg</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Seiten</span><a class="ul" href="#/prozesse">Prozesse</a><br><a class="ul" href="#/maschinen">Maschinen</a><br><a class="ul" href="#/anwendungen">Anwendungen</a><br><a class="ul" href="#/service">Service</a></div>'+
   '<div class="c"><span class="lab">Atlanta</span>JouhsenBundgens Inc.<br>Atlanta, GA 30303</div>'+
  '</div><svg class="bigsvg flogo" viewBox="0 0 1000 70" aria-hidden="true"><text x="500" y="56" text-anchor="middle" style="letter-spacing:.16em">JOUHSEN-BÜNDGENS · STOLBERG</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Jouhsen-bündgens Maschinenbau GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",unternehmen:"about",story:"story",prozesse:"prozesse",maschinen:"maschinen",anwendungen:"anwendungen",service:"service",news:"news",aktuelles:"news",kontakt:"kontakt",contact:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Jouhsen-bündgens — Maschinen für die Draht- und Rohrverarbeitung, Stolberg",x:"Home"};
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
