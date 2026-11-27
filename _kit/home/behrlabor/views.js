/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">'+"Zu den Geräten"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Service","Weltweit im Einsatz","Wartungs- und Serviceverträge, Inbetriebnahme, IQ- und OQ-Dokumentation, Prüfzertifikate von Versuchsabläufen, Reparaturen und Ersatzteilservice, weltweit auch über autorisierte behr Fachhändler.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M10 28H46"/><path d="M28 10C20 20 20 36 28 46C36 36 36 20 28 10Z"/><circle class="f" cx="28" cy="28" r="2.4"/>'],
  ["Beratung","Ihr Lösungskonzept","Chemiker, Chemotechniker, Biotechnologen, Glasinstrumentenbauer, Maschinenbauer, Elektroniker und technische Redakteure erarbeiten mit Ihnen ein personalisiertes Lösungskonzept.",'<path d="M10 14H46V36H24L14 44V36H10Z"/><path class="a" d="M18 22H38"/><path d="M18 29H32"/><circle class="f" cx="38" cy="29" r="2.4"/>'],
  ["Training","Schulungen jedes Jahr","Für die deutsche und internationale Kundschaft bietet behr jährliche Verkaufs- und Produktschulungen an; die autorisierten Händler erhalten eigene Serviceschulungen.",'<rect x="10" y="12" width="36" height="26"/><path class="a" d="M18 46H38"/><path d="M28 38V46"/><path d="M17 30L24 22L30 27L39 18"/><circle class="f" cx="39" cy="18" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-photo.webp" width="1190" height="1240" alt="behrosog 6 Neutralisierer mit Waschflaschen, Prozessabsaugsystem für die Kjeldahl-Analyse" decoding="async" fetchpriority="high"><figcaption>behrosog 6: Neutralisierer für die Kjeldahl-Prozessabsaugung</figcaption></figure></div>'+
   '<span class="lab eyebrow" data-r>Laborgeräte<span class="nomob"> · Düsseldorf · seit 1951</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Analytik, die man</span><span class="l">einfach bedient.</span><span class="l"><em>Made in Germany.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>behr Labor-Technik entwickelt und fertigt in Düsseldorf Geräte für die Lebens- und Futtermittel-, Umwelt- und Elementaranalytik, von der Probenahme bis zur vollautomatischen Auswertung.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Zu den Produkten '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Das behr KISS-Prinzip</span>'+
   '<h2 class="txt" id="mani">Keep it simple and safe: einfache Bedienung, geprüfte Sicherheit und <em>präzise, reproduzierbare Messergebnisse.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1951</span><p class="k">Gegründet als Franz Behr Laborbedarf, heute in der dritten Generation am Standort Düsseldorf</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100+</span><p class="k">Länder, in die behr seine Laborgeräte exportiert, mit eigenem Exportbüro seit 2013</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">Eigene Werkstätten für Elektronik, Kunststoff, Metall und Glas, für die Fertigung im eigenen Haus</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Stickstoff nach Kjeldahl</span><h2 class="d3">Vier Stufen <em>zum Protein.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Aufschluss</span><span>Absaugen</span><span>Destillation</span><span>Titration</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Aufschluss.</h2><p>Die Probe wird in Schwefelsäure aufgeschlossen. Katalysatoren heben den Siedepunkt der Säure über 337 °C; rund 380 °C sind die optimale Aufschlusstemperatur. Dafür gibt es die InKjel Infrarot-Aufschlussgeräte und die K-Blöcke aus Edelstahl.</p></article>'+
     '<article class="step"><h2>Absaugen und neutralisieren.</h2><p>Die sauren Gase des Aufschlusses werden im behrotest® Absaugsystem, behrosog oder SIMVAC, neutralisiert, bevor sie in den Abzugsraum gelangen.</p></article>'+
     '<article class="step"><h2>Destillation.</h2><p>Im Wasserdampfdestillierer, vom S1 bis zum vollautomatischen S5, wird der Stickstoff mit Wasserdampf überdestilliert und in der Vorlage aufgefangen.</p></article>'+
     '<article class="step"><h2>Titration.</h2><p>Die Titration liefert den Stickstoffgehalt. Mal 6,25 ergibt er den Proteingehalt, bei Weizen und Grießmehl mal 5,7.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte für die Analyse</span><h2 class="d2 split">Von der Probenahme <em>bis zur Auswertung.</em></h2></div><p data-r>Von kostengünstigen Kompaktgeräten bis zu vollautomatischen Arbeitsplätzen für standardisierte Analysen nach nationalen und internationalen Normen (DIN/DEV, ISO/EN).</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="service" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Service und Beratung</span><h2 class="d2 split">Vom Futtermittelwerk <em>bis zum Aluminiumwerk.</em></h2></div><p data-r>behr Geräte sind tagtäglich weltweit im Einsatz, ob in einer Futtermittelfabrik in Vietnam oder in einem Aluminiumwerk in Nigeria. So vielfältig wie das Produktangebot ist das Service-Portfolio.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Qualität</span><p class="cr" data-r><span>DIN EN ISO 9001</span><span>Ökoprofit Düsseldorf</span><span>CE-Sicherheitsprüfung jedes Geräts</span><span>Fertigung nach DIN, EN und ISO</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="geschichte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Geschichte</span><h2 class="d2 split">Ein Familienunternehmen <em>mit Tradition.</em></h2></div><p data-r>International ausgerichtet, fortlaufend innovativ, kundennah und seit Jahrzehnten am Standort Düsseldorf verwurzelt: vom kleinen Laborfachhandel zum Hersteller.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Meilensteine</span><dl>'+
    '<div data-r><dt class="lab">1951</dt><dd>Gründung von Franz Behr Laborbedarf als Handelsunternehmen für Laborgeräte</dd></div>'+
    '<div data-r><dt class="lab">1960</dt><dd>Eine eigene Glasbläserei, 1961 eine Werkstatt für Kunststoffbearbeitung</dd></div>'+
    '<div data-r><dt class="lab">1981</dt><dd>Beginn der Produktion von behrotest® Geräten für die Umwelt- und Lebensmittelanalytik</dd></div>'+
    '<div data-r><dt class="lab">1997</dt><dd>Übernahme des Forschungs- und Entwicklungsteams der Ströhlein GmbH: der Start der Elementaranalytik</dd></div>'+
    '<div data-r><dt class="lab">2013</dt><dd>Ein eigenes Exportbüro für den rasant gestiegenen Exportanteil</dd></div>'+
    '<div data-r><dt class="lab">2014</dt><dd>Mit Maurice Behr tritt die dritte Generation in die Geschäftsführung ein</dd></div>'+
   '</dl></div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split">Ihr direkter Draht <em>nach Düsseldorf.</em></h2></div><p data-r>Der direkte Kundenkontakt ist das Erfolgsrezept des Familienunternehmens. Zu jeder Produktgruppe nehmen Ihre Anfrage die Experten im Haus direkt entgegen.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Messen und <em>Fachbeiträge.</em></h2></div><p data-r>behr ist auf Messen und Fachveranstaltungen vertreten, für den direkten Kontakt und den Austausch mit Kunden und Lieferanten. Jeder Eintrag führt zur Quelle.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split">Fragen Sie <em>die Experten.</em></h2>'+
   '<p class="sub" data-r>Für Produktanfragen, Angebote, Service und Schulungen erreichen Sie behr Labor-Technik direkt in Düsseldorf.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>Behr Labor-Technik GmbH<br>Spangerstraße 8<br>40599 Düsseldorf</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Weitere Ansprechpartner</span><p data-r><a class="ul" href="mailto:verkauf@behr-labor.com">verkauf@behr-labor.com</a><br><a class="ul" href="mailto:service@behr-labor.com">service@behr-labor.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>Behr Labor-Technik GmbH<br>Spangerstraße 8, 40599 Düsseldorf</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/service">Service</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Analytik</span>Lebens- und Futtermittel-, Umwelt- und Elementaranalytik, Labor-Instrumente</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 72" aria-hidden="true"><text x="450" y="58" text-anchor="middle" style="font-family:\'Arimo\',Arial,sans-serif;font-weight:700;font-size:66px;letter-spacing:.06em">behr</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Behr Labor-Technik GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",kjeldahl:"story",produkte:"produkte",service:"service",geschichte:"geschichte",unternehmen:"unternehmen",news:"news",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"behr Labor-Technik — Laborgeräte für die Lebensmittel- und Umweltanalytik, Düsseldorf",x:"Start"};
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
