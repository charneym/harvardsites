/* ================= VIEWS (home only: Produkte / Technologie / Leistungen / Aktuelles open build-out pages via _kit/lib/buildout.js;
   Kontakt and in-page CTAs scroll). Dark and bone grounds alternate: hero (dark, the SAW resonator render), about (bone, statement +
   figures), the SAW interrogation story (dark), products (bone: SAW and automotive in two columns, four network figures, three
   modules), services (dark: three disciplines and experience), news (bone), contact (dark). All copy from sentec-elektronik.de.
   Content is never hidden at rest: reveals only enhance (failsafe in site.js). ================= */
function prods(g){return '<ul class="dcat">'+PROD.filter(function(p){return g.indexOf(p[0])>=0}).map(function(c){return '<li><span class="dc-b">'+esc(c[1])+'</span><span class="dc-m">'+esc(c[2])+'</span></li>'}).join("")+'</ul>'}
function caps(){return '<div class="dmesh">'+CAPS.map(function(m){
  return '<div class="dm"><span class="dm-v">'+esc(m[0])+'<small>'+esc(m[1])+'</small></span><h3>'+m[2]+'</h3><p class="dm-use">'+esc(m[3])+'</p></div>'}).join("")+'</div>'}
function apps(){return '<div class="dapps">'+APPS.map(function(a){return '<div class="da"><h3 class="da-h">'+esc(a[0])+'</h3><p>'+esc(a[1])+'</p></div>'}).join("")+'</div>'}
function sites(){return '<ol class="dmfg">'+SITES.map(function(m,i){return '<li><span class="dmf-n">'+String(i+1).padStart(2,"0")+'</span><div><span class="lab dmf-k">'+esc(m[1])+'</span><h3>'+esc(m[0])+'</h3><p>'+esc(m[2])+'</p></div></li>'}).join("")+'</ol>'}
function certs(){return '<ul class="dcert">'+CERTS.map(function(c){return '<li><span class="dce-n">'+esc(c[0])+'</span><span class="lab">'+esc(c[1])+'</span></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
var ICO={saw:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4 20c3-8 5-8 8 0s5 8 8 0 5-8 8 0 5 8 8 0"/><path d="M4 32h32M4 8h32"/></svg>',
 net:'<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="3"/><circle cx="7" cy="9" r="2.5"/><circle cx="33" cy="9" r="2.5"/><circle cx="8" cy="32" r="2.5"/><circle cx="32" cy="31" r="2.5"/><path d="M9 11l8.5 7M31 11l-8.5 7M10 30.5l8-8.5M30 29.5l-8-7.5"/></svg>',
 dev:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M11 11h18v18H11Z"/><path d="M16 11V5M24 11V5M16 35v-6M24 35v-6M11 16H5M11 24H5M35 16h-6M35 24h-6"/><path d="M16 16h8v8h-8Z"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>Sensor System Solutions · <span class="nw">Hard- und Software-Design</span> · <span class="nw">Ilmenau</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="nw">Drahtlos messen,</span> <em class="nw">ohne Batterie.</em></h1>'+
    '<p class="s" data-r>senTec Elektronik bietet passive SAW-Temperatursensorik, Funksensornetze und Embedded-Module, und entwickelt Elektronik, Hard- und Software genau nach Ihren Wünschen, von der Idee bis zum Komplettsystem.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/produkte">Unsere Produkte '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt</a></div>'+
   '</div>'+
   '<ul class="pil" aria-label="Was wir tun">'+
    '<li class="p1" data-r><span class="pic">'+ICO.saw+'</span><div><span class="lab">SAW-Sensorik</span><p>Passive Funk-Temperatursensoren für stehende und bewegte Teile, 0 bis 300 °C.</p></div></li>'+
    '<li class="p2" data-r><span class="pic">'+ICO.net+'</span><div><span class="lab">Funksensornetze</span><p>IEEE-802.15.4-Funkmodule und TEDRA für die Bremsscheibe im Fahrversuch.</p></div></li>'+
    '<li class="p3" data-r><span class="pic">'+ICO.dev+'</span><div><span class="lab">Entwicklung</span><p>Hardware, Software und Systeme nach Ihren Wünschen, aus einer Hand.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="about" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>Über senTec</span>'+
   '<h2 class="txt" id="mani">Wir entwickeln Elektronik, Hard- und Software. Als langjähriger ehemaliger Design Alliance Partner von Freescale liefern wir Funksensornetze, Controller- und Prozessormodule und <span class="nw">passive SAW-Sensorsysteme,</span> <em>die auch Ihre Prozesse <span class="nw">optimieren können.</span></em></h2></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">300<small>°C</small></span><p class="k">Messbereich der passiven SAW-Sensoren, von 0 °C an, drahtlos und ohne eigene Energiequelle</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">64</span><p class="k">Drahtlose Sensoren arbeiten zusammen in einem Netzwerk</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">18<small>+</small></span><p class="k">Lagen: Leiterplatten mit über 18 Lagen gehören zu unserer Spezialität</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technologie</span><h2 class="d3"><span class="nw">Ein Funkimpuls,</span> <em class="nw">ein Echo.</em></h2>'+
    '<p class="st-in">Wie der passive SAW-Sensor von TRANSMITRON‑T die Temperatur meldet, ganz ohne Batterie und Kabel.</p>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Abfrage</span><span>Resonanz</span><span>Antwort</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Die Abfrage.</h2><p>Die Abfrageeinheit sendet ein Funksignal im freien 433-MHz-Band an den Sensor, auch an Teile, die sich bewegen.</p></article>'+
     '<article class="step"><h2>Die Resonanz.</h2><p>Auf dem Kristall des SAW-Resonators wird das Signal zu einer akustischen Oberflächenwelle. Der Sensor schwingt mit seiner eigenen Resonanzfrequenz, und die hängt von der Temperatur ab.</p></article>'+
     '<article class="step"><h2>Die Antwort.</h2><p>Nach dem Abschalten des Abfragesignals schwingt der Sensor gedämpft aus und sendet dabei per Funk zurück. Die Abfrageeinheit wertet die Frequenz aus, mit 1 °C Auflösung.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split"><span class="nw">Vom Sensor</span> <em class="nw">zum Modul.</em></h2></div><p data-r>Passive SAW-Temperatursensorik für die Prozesskontrolle, drahtlose Messtechnik für den Automobiltest, Funk- und Prozessormodule für Ihre eigenen Anwendungen.</p></div>'+
   '<div class="dcols"><div class="dcol"><div class="dcol-h"><span class="lab kick" data-r>SAW-Sensorik</span><span class="lab dn" data-r>04</span></div>'+prods(["SAW"])+'</div>'+
   '<div class="dcol"><div class="dcol-h"><span class="lab kick" data-r>Automotive-Tests</span><span class="lab dn" data-r>04</span></div>'+prods(["Auto"])+'</div></div>'+
   '<div class="dmesh-h"><div><span class="lab kick" data-r>Drahtlose Sensornetzwerke</span><h3 data-r><span class="nw">Klein und zuverlässig,</span> <span class="nw">einfach zu installieren</span></h3></div><p data-r>Die Funktechnik ermöglicht Sensoren an beweglichen und schwer zugänglichen Installationen, etwa direkt an den Rädern zur Überwachung der Bremsscheibentemperatur.</p></div>'+
   caps()+
   '<span class="lab kick sub-l pr" data-r>Funk- und Prozessormodule</span>'+
   apps()+
  '</div></section>'+

  '<section class="sec dark" id="services" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Leistungen</span><h2 class="d2 split"><span class="nw">Wir entwickeln</span> <span class="nw">die Lösung</span> <em class="nw">für Ihr Problem.</em></h2></div><p data-r>senTec Elektronik unterstützt Ihr Projekt in allen Phasen, vom Konzept bis zum Test und der Integration, mit effizienten Technologien und fortschrittlichen Entwurfs- und Simulationswerkzeugen.</p></div>'+
   '<div class="dmf-g"><div class="dmf-r">'+sites()+'</div>'+
   '<div class="dce-w"><span class="lab kick" data-r>Erfahrung</span>'+certs()+
   '<p class="dmask" data-r>Umfangreiche Erfahrung mit Messsystemen, Analyzern, Debuggern und Emulatoren.</p></div></div>'+
  '</div></section>'+

  '<section class="sec light" id="news" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Besuchen Sie uns</span> <em class="nw">auf der Messe.</em></h2></div><p data-r>Im Juni 2026 waren wir in Nürnberg und in Stuttgart, mit unseren drahtlosen Messsystemen.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Prozesstechnik, Fahrzeugtest und Embedded-Entwicklung</span>'+
   '<h2 class="big split"><span class="nw">Ihre Messaufgabe,</span> <em class="nw">unsere Elektronik.</em></h2>'+
   '<p class="sub" data-r>Erzählen Sie uns, was Sie messen, übertragen oder steuern wollen. Wir entwickeln die Schaltung, die Software oder das ganze System dazu.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Schreiben Sie uns '+ARR+'</a><a class="btn" href="'+TELH+'">Anrufen: '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Adresse</span><p data-r><span>Robert-Bosch-Ring 2</span><br><span>98693 Ilmenau</span></p></div>'+
    '<div><span class="lab" data-r>E-Mail</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Telefon und Fax</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a><br><span>Fax '+FAX+'</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>senTec Elektronik GmbH<br>Robert-Bosch-Ring 2<br>98693 Ilmenau, Deutschland</div>'+
   '<div class="c"><span class="lab">Produkte</span>SAW-Sensorik<br>Drahtlose Sensornetzwerke<br>Prozessor-Module</div>'+
   '<div class="c"><span class="lab">Seiten</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/technologie">Technologie</a><br><a class="ul" href="#/leistungen">Leistungen</a><br><a class="ul" href="#/aktuelles">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+TELH+'">'+TEL+'</a><br>Geschäftsführung: Michael Binhack, Rico Röhner</div>'+
  '</div>__LMARK3__'+
  '<div class="legal"><span class="lab">© 2026 senTec Elektronik GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route. Typed or linked hashes scroll to their section; nav clicks open the build-out pages (buildout.js) ================= */
var BOK={};/* typed or linked hashes scroll to their section; nav clicks open the build-out pages (buildout.js) */
function boOpen(k){try{if(window.BuildOut&&BuildOut.open){BuildOut.open(k);return true}}catch(x){}return false}
var SECS={about:"about",produkte:"products",technologie:"story",leistungen:"services",aktuelles:"news",kontakt:"contact",products:"products",technology:"story",services:"services",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"senTec Elektronik — Sensor System Solutions, Hard- und Software-Design",x:"Start"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home")return;e.stopImmediatePropagation();
  if(r.sec&&BOK[r.sec]){try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/";boOpen(r.sec);return}
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){try{history.replaceState(null,"","#/")}catch(x){}if(BOK[r.sec]&&boOpen(r.sec))return;secGo(r.sec,true)},300)})()})();
