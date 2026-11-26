/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Mehr erfahren '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* Anwendungsfelder and Leistungsumfang (dienes.net home page), each with a small line icon */
var ICO={
 y:'<svg viewBox="0 0 56 56"><path d="M6 20C18 20 18 36 30 36S42 20 50 20"/><path class="a" d="M6 28C18 28 18 44 30 44S42 28 50 28"/><path d="M6 12C18 12 18 28 30 28S42 12 50 12"/></svg>',
 m:'<svg viewBox="0 0 56 56"><path d="M8 14H48V42H8Z"/><path class="a" d="M8 22H48M8 30H48"/><path d="M28 14V42"/></svg>',
 c:'<svg viewBox="0 0 56 56"><path d="M28 28m-20 0a20 20 0 1 0 40 0a20 20 0 1 0-40 0"/><path class="a" d="M28 28m-9 0a9 9 0 1 0 18 0a9 9 0 1 0-18 0"/><path d="M8 28H19M37 28H48"/></svg>',
 f:'<svg viewBox="0 0 56 56"><path d="M6 18H50M6 38H50"/><path class="a" d="M6 28H50"/><path d="M12 14V42M44 14V42"/></svg>'};
var APP=[
 ["y","Garne","Textile und technische Garne","Mono- und Multifilamentgarne, Sonderfasern inklusive Bi- und Multikomponentenfasern."],
 ["m","Medizin","Medizinische Fasern und Membranen","Faserbehandlung für die Medizintechnik: 2026 zum ersten Mal Aussteller auf der COMPAMED in Düsseldorf."],
 ["c","Hochleistung","Precursor-, Carbon- und Keramikfasern","Nassspinnen, Oxidieren, Carbonisieren und Aktivieren von Carbon-Precursor: Anlagen, die DIENES bereits realisiert hat."],
 ["f","Flachprodukte","Folien, Bänder und dünne Metallbänder","Mechanische und thermische Behandlung auch von Folien und Bändern aus neuen Werkstoffen."]];
function apps(){return '<div class="caps svc">'+APP.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["Nov. 2026","Zum ersten Mal auf der COMPAMED in Düsseldorf, auf dem VDMA-Gemeinschaftsstand","COMPAMED","https://www.medica-tradefair.com/vis/v1/en/exhibitors/compamed2026.3079074"],
 ["Nov. 2025","Zirkuläre, nachhaltige technische Textilien aus Polypropylen: das Projekt zPP","DIENES",DW+"/blog/2025/11/27/zirkulaere-nachhaltige-technische-textilien-aus-polypropylen/"],
 ["Mai 2025","Techtextil North America in Atlanta: das neue Nassspinnsystem im Labormaßstab","DIENES",DW+"/blog/2025/05/09/techtextil-nordamerika/"],
 ["März 2025","JEC World 2025: modulare Lösungen für das Nass- und Schmelzspinnen","DIENES",DW+"/blog/2025/03/07/jec-2025/"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Galetten · Heizer · Steuerungen<span class="nomob"> · seit 1930</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Your Experts in</span> <span class="l"><em>Fiber Processing.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Galetten, Heizkomponenten und Steuerungssysteme für Garne, Fasern und Filamente, dazu komplette Pilot- und Laboranlagen nach dem DIENES MultiMode<sup>®</sup>-System. Aus Mühlheim am Main.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Zu den Produkten '+ARR+'</a><a class="btn" href="#/kontakt">Sprechen Sie uns an</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Ein Unternehmen mit Tradition</span>'+
   '<h2 class="txt" id="mani">Seit Ende der 1950er Jahre entwickelt DIENES <span class="nw">Heiztechnik und Steuerungen</span> <span class="nw">für die Chemiefaser,</span> <span class="nw">von den ersten Polyamidfasern</span> <span class="nw">bis zu Carbon und Nanofasern.</span> <em><span class="nw">Innovative Entwicklungen</span> <span class="nw">brauchen kompetente Partner.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1930</span><p class="k">von Fritz Dienes in Mühlheim am Main gegründet</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">700 °C</span><p class="k">Heiztemperatur für die thermische Behandlung von Garnen, Folien und Bändern</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">8.000</span><p class="k">m/min: Antriebe für einen Geschwindigkeitsbereich ab 0,1 m/min</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Der Fadenlauf</span><h2 class="d3"><span class="nw">Vom Spinnen</span> <em class="nw">zum Garn.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Spinnen</span><span>Heizen</span><span>Verstrecken</span><span>Steuern</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Aus der Düse</span> <span class="nw">zum Faden.</span></h2><p>Ob Schmelz- oder Nassspinnen, mono oder bikomponent: die Filamente laufen gebündelt auf das erste Galettenduo. DIENES-Anlagen decken den Prozess vom Spinnen bis zum fertig verstreckten Garn ab.</p></article>'+
     '<article class="step"><h2><span class="nw">Induktiv beheizt,</span> <span class="nw">ohne Thermalöl.</span></h2><p>DIENES-Galetten sind induktionsgeheizt, ohne Dampfkammern. Seit der ersten Mehrzonengalette von 1988 steht der Name für gleichmäßige Temperaturen, heute bis 700 °C.</p></article>'+
     '<article class="step"><h2><span class="nw">Zwei Duos,</span> <span class="nw">zwei Geschwindigkeiten.</span></h2><p>Läuft das zweite Galettenduo schneller als das erste, wird der Faden verstreckt. Komplexe Antriebe decken dabei 0,1 bis 8.000 m/min ab.</p></article>'+
     '<article class="step"><h2><span class="nw">Jeder Wert</span> <span class="nw">im Blick.</span></h2><p>Jedes MultiMode<sup>®</sup>-Modul hat seine eigene Steuerung und Sensorik, etwa die Fadenspannungsmessung. Der MultiMode<sup>®</sup> Master zeigt alles auf einem 10,4″-Touchdisplay.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="anwendungen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Anwendungen</span><h2 class="d2 split"><span class="nw">Jede Faser,</span> <em class="nw">ihr Prozess.</em></h2></div><p data-r>Beratung, Konzeptfindung und Basic Engineering, Konstruktion, Lieferung, Montage, Inbetriebnahme, Schulung und Service: für diese Anwendungsfelder aus einer Hand.</p></div>'+
   apps()+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split"><span class="nw">Von der Galette</span> <em class="nw">zur Pilotanlage.</em></h2></div><p data-r>Der Weltruf von DIENES gründet sich auf die Komponenten für die Produktion und Behandlung von Garnen und Filamenten. Aus ihnen entstehen heute modulare Forschungs-, Pilot- und Laboranlagen.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Seit 1930</span> <em class="nw">in Mühlheim.</em></h2></div><p data-r>Was 1930 mit elektrischen Spielzeugen mit Heizanwendungen begann, wurde zum Partner der Synthesefaserindustrie weltweit, für Maschinenkomponenten ebenso wie für textile Sonderanwendungen.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Ende der 1950er</span><h3 data-r>Zur Textilindustrie</h3><p data-r>Erste Steuerungssysteme für die Textilindustrie, dann Heizprozesse für Polyamidfasern, heute bekannt als Nylon oder Perlon.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>1988</span><h3 data-r>Die Mehrzonengalette</h3><p data-r>Die erste Mehrzonengalette wurde bald zum Standard der Polyamid- und Polyesterindustrie; dazu kam das berührungslose Messsystem Rototronik<sup>®</sup>.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>1990er</span><h3 data-r>All-In-One-Galette</h3><p data-r>Mechanik und Elektronik in einer Galette, bis heute in zahlreichen Spinnereimaschinen weltweit im Einsatz.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Was es</span> <em class="nw">Neues gibt.</em></h2></div><p data-r>Messen, Konferenzen und Forschungsprojekte: wo Sie DIENES persönlich treffen und woran wir gerade arbeiten.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Sprechen Sie</span> <em class="nw">uns an.</em></h2>'+
   '<p class="sub" data-r>Angepasste Lösungen für Ihren Prozess: DIENES stellt sich Ihren Herausforderungen, von der einzelnen Galette bis zur kompletten Anlage.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>DIENES Apparatebau GmbH<br>Philipp-Reis-Straße 16<br>63165 Mühlheim am Main</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Anfragen und Ersatzteile</span><p data-r><a class="ul" href="mailto:'+SALES+'">'+SALES+'</a><br>Service: <a class="ul" href="mailto:service-dag@dienes.net">service-dag@dienes.net</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>DIENES Apparatebau GmbH<br>Philipp-Reis-Straße 16, 63165 Mühlheim am Main</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/anwendungen">Anwendungen</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/aktuelles">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Produkte</span>Galetten · Heizkomponenten<br>Steuerungssysteme · MultiMode<sup>®</sup><br>Anlagen · Nanofaser-Spinnanlage</div>'+
  '</div><svg class="bigsvg" viewBox="3 49 1658 435" aria-hidden="true"><path fill-rule="evenodd" d="@@LD@@"/></svg>'+
  '<div class="legal"><span class="lab">© 2026 DIENES Apparatebau GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",produkte:"produkte",anwendungen:"anwendungen",unternehmen:"unternehmen",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"DIENES Apparatebau GmbH — Your Experts in Fiber Processing",x:"Start"};
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
