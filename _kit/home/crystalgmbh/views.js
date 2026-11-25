/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Mehr '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Forschung","Kristalle für interessante Entdeckungen","Hochgenau orientierte Einkristalle als Unikat und in kleinen Stückzahlen, optimierte CMP-Polituren für epitaktische Anwendungen und diffusionsgebondete Kristallverbunde aus zwei oder mehr Kristallen.",'<circle cx="24" cy="22" r="12"/><path d="M32 31L44 44"/><circle class="a" cx="24" cy="22" r="5"/><circle class="f" cx="24" cy="22" r="2.2"/>'],
  ["Industrie","Kristalle für zuverlässige Industrieanwendungen","Von Prototypen und Vorserien bis zur Serienfertigung von Präzisionsoptiken, OEM-Optiken und Baugruppen, mit Beratung zu Rahmenverträgen, Lagersicherheitsbeständen und KANBAN-Verträgen.",'<path d="M8 46V26L20 33V26L32 33V14H44V46Z"/><path class="a" d="M8 46H48"/><circle class="f" cx="38" cy="24" r="2.2"/>'],
  ["Ab Lager","Ein breites Standardsortiment","Substrate aus dem Standardsortiment ab Lager, mit Rabattstaffeln für größere Stückzahlen. Dazu bietet CRYSTAL einen Lagerverkauf an.",'<path d="M10 40L28 48L46 40L28 32Z"/><path class="a" d="M10 32L28 40L46 32L28 24Z"/><path d="M10 24L28 32L46 24L28 16Z"/><circle class="f" cx="28" cy="24" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Kristalltechnologie<span class="nomob"> · Berlin</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Präzise Oberflächen</span><span class="l">sind <em>unser Antrieb.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>CRYSTAL fertigt in Berlin Substrate und Wafer für die Dünnschichtabscheidung und optische Komponenten für die Mess- und Lasertechnik, vom Einzelstück bis zur Serienfertigung.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Zu den Produkten '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>CRYSTAL steht für Qualität und Zuverlässigkeit</span>'+
   '<h2 class="txt" id="mani">Mit langjähriger Erfahrung in der Bearbeitung sprödharter Materialien, Kristalle, Gläser und Keramiken, ist CRYSTAL Partner für <em>Forschung und Industrie.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+</span><p class="k">Jahre Firmengeschichte, mit Physikern, Ingenieuren und Facharbeitern am Standort Berlin</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">±0,1°</span><p class="k">Orientierungsgenauigkeit in der Kristallbearbeitung</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;0,5 nm</span><p class="k">Rauheit, bei einer Ebenheit von λ/10 und 5 arcsec Parallelität</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Kristallbearbeitung</span><h2 class="d3">Vom Kristall <em>zur Oberfläche.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Orientieren</span><span>Formen</span><span>Polieren</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Orientiert, auf ±0,1°.</h2><p>Ob eigener Kristall oder beigestelltes Material: CRYSTAL fertigt spezielle Formen in der gewünschten kristallografischen Orientierung, mit einer Orientierungsgenauigkeit von ±0,1°.</p></article>'+
     '<article class="step"><h2>Getrennt und geformt.</h2><p>Der Kristall wird getrennt und geschliffen, auf ±0,05 mm genau. Typische Substrate messen 5 × 5 bis 25 × 25 mm oder ø1″ und ø2″, bei 0,5 oder 1,0 mm Dicke.</p></article>'+
     '<article class="step"><h2>Poliert und gemessen.</h2><p>Ein- oder beidseitige Epi-Politur mit einer Ebenheit von λ/10 und einer Rauheit unter 0,5 nm, gemessen mit dem Interferometer-Mikroskop. Jede Lieferung erhält ein Rauheitszertifikat.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="kunden" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Für Kunden</span><h2 class="d2 split">Forschung <em>und Industrie.</em></h2></div><p data-r>Wir sehen uns als Ihr Partner bei der Umsetzung von Ideen und Projekten, vom Einzelstück bis zur Serienfertigung, mit umfassender Beratung und auf Ihre Anwendung maßgeschneiderten Produkten.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split">Entdecken Sie die <em>Welt der Kristalle.</em></h2></div><p data-r>Unser Angebot ist vielfältig, unsere Produkte für Sie individuell: von der Dünnschichttechnik über Sensorik und Gerätebau bis zur Lasertechnik.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Substrate im Überblick</span><p class="cr" data-r><span>(100), (001), (111), (110) und (0001) und weitere Orientierungen</span><span>5 × 5 bis 25 × 25 mm, ø1″, ø2″</span><span>0,5 und 1,0 mm dick, bis 0,1 mm auf Anfrage</span><span>Laterale Toleranz +0 / −0,05 mm</span><span>Kratzerfrei unter 50-facher Vergrößerung</span><span>Rauheitszertifikat mit jeder Lieferung</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Ansprechpartner</span><h2 class="d2 split">Ihr direkter Weg <em>zu uns.</em></h2></div><p data-r>Ein Team erfahrener Spezialisten, Physiker, Ingenieure und Facharbeiter, betreut den Produktlebenszyklus von der Entwicklung bis zur Serienfertigung.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="qualitaet" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Qualitätsmanagement</span><h2 class="d2 split">Der Kunde <em>im Mittelpunkt.</em></h2></div><p data-r>Seit über 20 Jahren arbeitet CRYSTAL mit einem Qualitätsmanagementsystem nach DIN EN ISO 9001. Die DQS überprüft es in jährlich wiederkehrenden Audits.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Messen und prüfen</span><dl>'+
    '<div data-r><dt class="lab">Zertifizierung</dt><dd>DIN EN ISO 9001:2015, jährlich auditiert durch die DQS</dd></div>'+
    '<div data-r><dt class="lab">Rauheit</dt><dd>Interferometer-Mikroskop, laterale Auflösung 0,64 µm, vertikal theoretisch 0,01 nm</dd></div>'+
    '<div data-r><dt class="lab">Rückverfolgbarkeit</dt><dd>Eine Seriennummer für jeden Laserkristall</dd></div>'+
    '<div data-r><dt class="lab">Rohstoffe</dt><dd>Hohe Ansprüche an Lieferanten und laufende Prüfung der verwendeten Rohstoffe</dd></div>'+
   '</dl></div>'+
   '<div class="bk"><span class="lab kick" data-r>Auf der Messe</span><p class="cr" data-r><a class="ul" href="https://exhibitors.world-of-photonics.com/ausstellerportal/2025/aussteller/ausstellerdetails/crystal-gmbh/?elb=178.1100.2206.1.111" target="_blank" rel="noopener">Laser World of Photonics 2025, München</a></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split">Auf Ihrer <em>Wellenlänge.</em></h2>'+
   '<p class="sub" data-r>Wir sind Ihr zuverlässiger Partner und wissen, was Ihnen wichtig ist. Für Anfragen, Angebote und Beratung erreichen Sie uns direkt in Berlin.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>CRYSTAL GmbH<br>Ostendstraße 25<br>12459 Berlin</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Datenblätter</span><p data-r><a class="ul" href="'+CG+'customers/datasheets.php" target="_blank" rel="noopener">Datenblätter ansehen</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>CRYSTAL GmbH<br>Ostendstraße 25, 12459 Berlin</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/kunden">Für Kunden</a><br><a class="ul" href="#/qualitaet">Qualität</a><br><a class="ul" href="#/team">Ansprechpartner</a></div>'+
   '<div class="c"><span class="lab">Produkte</span>Substrate / Wafer<br>Optische Komponenten<br>Laserkomponenten<br>Montage · Kristallbearbeitung</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Titillium Web\',Arial,sans-serif;font-weight:400;font-size:58px;letter-spacing:.16em">CRYSTAL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 CRYSTAL GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",prozess:"story",produkte:"produkte",kunden:"kunden",qualitaet:"qualitaet",team:"team",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"CRYSTAL GmbH — Substrate, Wafer und optische Komponenten aus Kristallen, Berlin",x:"Start"};
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
