/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np lpr">'+PROD.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function inds(){return '<div class="ev ind lind"><dl>'+IND.map(function(c){return '<div data-r><dt class="lab">'+esc(c[0])+'</dt><dd>'+esc(c[1])+'</dd></div>'}).join("")+'</dl></div>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* WIRTH Kantprofile (wirth-gmbh.com > Kantprofile, Profilsortiment), each with a small line icon */
var ICO={
 p:'<svg viewBox="0 0 56 56"><path d="M10 14H24V42H38"/><path class="a" d="M24 14H38V28"/><path d="M6 46H50"/></svg>',
 b:'<svg viewBox="0 0 56 56"><path d="M8 36H48V42H8Z"/><path class="a" d="M16 36V30M28 36V24M40 36V30"/><path d="M14 18H42M20 18V12M36 18V12"/></svg>',
 c:'<svg viewBox="0 0 56 56"><path d="M10 10H24V24H10ZM32 10H46V24H32ZM10 32H24V46H10Z"/><path class="a" d="M32 32H46V46H32Z"/></svg>',
 s:'<svg viewBox="0 0 56 56"><path d="M6 40H50"/><path d="M12 40V24L28 14L44 24V40"/><path class="a" d="M12 24H44M28 14V40"/></svg>'};
var SERV=[
 ["p","Profilsortiment","Bis 12 m, bis 4 mm","Standardteile und alle kantbaren Kundenprofile bis 12 m Länge und 4 mm Materialstärke, aus verzinktem Stahl, AluZink, Aluminium und Edelstahl."],
 ["b","Anarbeitung","Fertig für die Baustelle","Lasern, Lochen, Stanzen, Klinken, Nibbeln, Schweißen, Nieten: unter industriellen Bedingungen, damit es auf der Baustelle entfällt."],
 ["c","Material & Farbe","Über 30 RAL-Töne","Ein Vormateriallager in mehr als 30 ständig verfügbaren RAL-Farbtönen, dazu nachträgliche Pulver- oder Nasslackbeschichtung in allen gängigen RAL- und NCS-Tönen."],
 ["s","Statik","Prüffähig berechnet","Für tragende Profile, Dachpfetten, Lichtbandzargen, Wandriegel und Traufprofile samt Befestigungen, erstellt unser Ingenieurbüro prüffähige statische Berechnungen."]];
function serv(){return '<div class="caps svc">'+SERV.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["Okt. 2026","WIRTH GmbH als Aussteller auf der glasstec 2026 in Düsseldorf","glasstec","https://www.glasstec-online.com/vis/v1/en/exhibitors/glasstec2026.3053965"],
 ["Karriere","Stellenangebote: Konstruktion, Fertigung und Montage in Landsberg","WIRTH",PW+"/unternehmen/job"],
 ["Service","WIRTH PROFIL-Manager: Profile planen, bestellen und verwalten, rund um die Uhr","WIRTH",PW+"/kantprofile"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<span class="lab eyebrow" data-r>OKTOPUS® Vakuumhebetechnik<span class="nomob"> · Kantprofile</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Schwere Lasten,</span><span class="l"><em>sicher im Griff.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Seit 1992 entwickelt und baut die WIRTH GmbH in Landsberg Vakuumhebegeräte für Baustelle und Industrie, und fertigt Kant- und Stahlleichtprofile bis 12 m Länge.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/vakuumtechnik">Zur Vakuumtechnik '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt aufnehmen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Systempartner seit 1992</span>'+
   '<h2 class="txt" id="mani">Anspruchsvolle Aufgaben im <span class="nw">Industriebau</span> und im <span class="nw">Material\u00ADhandling</span> lösen wir <em><span class="nw">mit eigener Konstruktion</span> <span class="nw">und Fertigung.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">9.000 kg</span><p class="k">Tragfähigkeit des OKTOPUS® GL-M 9000 mit Dreh- und Schwenkfunktion</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">12 m</span><p class="k">Profillänge, bei bis zu 4 mm Materialstärke</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">24 h</span><p class="k">Express-Fertigung: heute bestellt, morgen abholbereit</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">So hebt OKTOPUS®</span><h2 class="d3">Vom Ansaugen <em class="nw">zum Drehen.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Saugen</span><span>Sichern</span><span>Heben</span><span>Drehen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Ansaugen.</h2><p>Die Saugteller setzen auf die Scheibe, die Pumpe baut das Vakuum auf. Ein integriertes Manometer zeigt es an, das druckschaltergeregelte Vakuumniveau spart Strom bzw. Druckluft.</p></article>'+
     '<article class="step"><h2>Zwei Kreise, doppelt gesichert.</h2><p>Baustellengeräte arbeiten als redundante 2-Kreis-Vakuumsysteme, jeder Kreis mit 2-facher Sicherheit. Ein Vakuumreservoir gleicht Verluste aus, Warneinrichtungen melden jede Abweichung.</p></article>'+
     '<article class="step"><h2>Heben.</h2><p>Am Kran, am Stapler oder am Manipulator: OKTOPUS® Vakuumheber erfüllen alle Kriterien der DIN EN 13155. Der GL-M 9000 hebt Glaselemente bis 9.000 kg.</p></article>'+
     '<article class="step"><h2><span class="nw">Drehen und schwenken.</span></h2><p>Integrierte manuelle oder angetriebene Dreh-, Schwenk-, Kipp- und Hebebewegungen bringen die Last in Position: effizient, ergonomisch und sicher.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="vakuumtechnik" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>OKTOPUS® Vakuumhebetechnik</span><h2 class="d2 split"><span class="nw">Für Baustelle</span> <em class="nw">und Werkhalle.</em></h2></div><p data-r>Wir entwickeln und produzieren Vakuumhebegeräte für den Baustelleneinsatz und für innerbetriebliche Anwendungen, dazu Manipulatoren und Krananlagen. Sonderlösungen konstruieren wir nach Ihrer Aufgabe.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec dark2" id="sicherheit" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Sicherheit</span><h2 class="d2 split"><span class="nw">Geprüft und</span> <em class="nw">doppelt gesichert.</em></h2></div><p data-r>Was an einem OKTOPUS® Vakuumheber hängt, ist oft Glas, Paneel oder Blech von vielen Hundert Kilo. Deshalb ist jedes Gerät auf Redundanz, Überwachung und klare Warnung ausgelegt.</p></div>'+
   inds()+
  '</div></section>'+

  '<section class="sec light" id="kantprofile" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>WIRTH Kantprofile</span><h2 class="d2 split"><span class="nw">Profile aus Blech,</span> <em class="nw">perfekt in Form.</em></h2></div><p data-r>Bereits seit 1992 planen und produzieren wir auf modernen Blechbearbeitungsanlagen Kant- und Stahlleichtprofile und Spezialformteile für Industrie- und Gewerbebau, Maschinen- und Anlagenbau, Nutz- und Sonderfahrzeugbau.</p></div>'+
   serv()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Pfetten und Riegel</span><h3 data-r>Tragende Profile</h3><p data-r>Z-Pfetten, C-Wandriegel, CL-Wandriegel und Traufpfetten, dazu Wechselprofile und Lichtbandzargen.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Express-Fertigung</span><h3 data-r>Innerhalb 24 Stunden</h3><p data-r>Expressaufträge bis spätestens 08:30 Uhr telefonisch anmelden: heute bestellt, morgen abholbereit.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Fahrzeugbau</span><h3 data-r>Bus- und Containerbau</h3><p data-r>Karosseriebleche für Reise-, Flughafen- und Citybusse, Seitenwandelemente, Eckprofile und Regenrinnen.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Konstruiert und gebaut</span> <em class="nw">in Landsberg.</em></h2></div><p data-r>Bauingenieure, Maschinenbau- und Automatisierungsingenieure, Elektrotechniker, Schweißer, Zerspaner und Anlagenmonteure arbeiten bei WIRTH mit CAD- und FEM-Programmen. Unser QM-System ist nach DIN ISO 9001:2015 zertifiziert.</p></div>'+
   '<div class="lteam">'+team()+'</div>'+
   '<div class="lnews">'+news()+'</div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Sprechen Sie</span> <em class="nw">mit uns.</em></h2>'+
   '<p class="sub" data-r>Gerne stehen wir Ihnen bei Fragen zur Verfügung, ob zu einem Vakuumhebegerät, einer Krananlage oder zu Ihren Kantprofilen.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>WIRTH GmbH<br>Brehnaer Straße 1<br>06188 Landsberg</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Zwei Bereiche</span><p data-r>OKTOPUS® Vakuumhebetechnik<br>WIRTH Kantprofile</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>WIRTH GmbH<br>Brehnaer Straße 1, 06188 Landsberg</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/vakuumtechnik">Vakuumtechnik</a><br><a class="ul" href="#/sicherheit">Sicherheit</a><br><a class="ul" href="#/kantprofile">Kantprofile</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Bereiche</span>OKTOPUS® PANEL-Jack · GLASS-Jack<br>Manipulatoren · Krananlagen<br>Kant- und Stahlleichtprofile</div>'+
  '</div><div class="bigwm" aria-hidden="true"><img src="logo-lt.png" alt="" width="600" height="140"></div>'+
  '<div class="legal"><span class="lab">© 2026 WIRTH GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",oktopus:"story",vakuumtechnik:"vakuumtechnik",sicherheit:"sicherheit",kantprofile:"kantprofile",unternehmen:"unternehmen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"WIRTH GmbH — OKTOPUS® Vakuumhebetechnik und Kantprofile, Landsberg",x:"Start"};
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
/* the white hero: while the home hero is under the header (and the header is not yet solid), the header reads dark on white */
(function(){function chk(){var h=document.querySelector("#view #hero"),on=!!h&&h.getBoundingClientRect().bottom>80&&!document.documentElement.classList.contains("bo-open");document.body.classList.toggle("hlt",on)}
  addEventListener("scroll",chk,{passive:true});setInterval(chk,250);chk()})();
