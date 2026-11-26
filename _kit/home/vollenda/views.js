/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><h3>'+esc(c[2])+'</h3><p>'+esc(c[3])+'</p><a class="lab lk ul" href="'+c[4]+'" target="_blank" rel="noopener">'+"Details"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Geschäftsführung</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul>'+
    '<p class="offs">1983 übernahmen Florian und Frieder Pfister das Unternehmen vom Gründer; 2007 kam die dritte Generation der Eigentümer hinzu.</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* VOLLENDA strengths (vollenda.de > Unternehmen) */
function caps(){var C=[
  ["Gebinde","Von der ml-Flasche bis zum Big Bag","Anlagen für unterschiedlichste Gebinde, von einfachen semiautomatischen Lösungen bis zu vollautomatischen Anlagen, aus einem breiten Spektrum eigener Komponenten.",'<path d="M18 46V22L22 14H34L38 22V46Z"/><path class="a" d="M18 30H38"/><circle class="f" cx="28" cy="38" r="2.4"/>'],
  ["Schwierige Produkte","Explosionsschutz und Hygiene","Viele Anlagen sind für explosive Produkte geeignet. VOLLENDA kennt die Explosionsschutzvorschriften ebenso wie die Hygieneanforderungen der Lebensmittel- und Pharmaproduktion.",'<path d="M28 8L46 16V30C46 40 38 46 28 50C18 46 10 40 10 30V16Z"/><path class="a" d="M20 29L26 35L37 23"/>'],
  ["Generalunternehmer","Komplette Abpackstraßen","Abfüllanlagen mit Fördertechnik, Palettierung oder Verfahrenstechnik in einer Steuerung, mit VOLLENDA als Ansprechpartner für das gesamte Projekt.",'<rect x="6" y="30" width="12" height="12"/><rect x="22" y="30" width="12" height="12"/><path d="M4 46H52"/><path class="a" d="M38 36H50M46 32L50 36L46 40"/><circle class="f" cx="28" cy="22" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Vollenda-Werk GmbH<span class="nomob"> · Kaltenberg bei München, seit 1924</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Schüttgüter exakt</span> <span class="l">verwogen, <em>Flüssigkeiten</em></span> <span class="l"><em class="nw">genau dosiert.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Waagen, Absack- und Abfüllanlagen für Schüttgüter und Flüssigkeiten, von der kleinen ml-Flasche bis zum Big Bag, semiautomatisch bis vollautomatisch, geliefert in alle Teile der Welt.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/anlagen">Unsere Anlagen '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Unser Name</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Die vollendete Waage</span> <span class="nw">zu bauen, war 1924</span> <span class="nw">das Ziel des Gründers.</span> <em><span class="nw">Daher der Name VOLLENDA.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1924</span><p class="k">Michael Siegburg gründet das Unternehmen in München-Aubing und baut selbsttätige mechanische Waagen</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50</span><p class="k">Fast 50 Patente für Waagen und Abfüllmaschinen machten VOLLENDA weltweit bekannt</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">600</span><p class="k">Säcke pro Stunde füllt der Absackautomat VSF, eichfähig verwogen</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Bruttoabsackung, Schritt für Schritt</span><h2 class="d3"><span class="nw">Ein Sack,</span> <em class="nw">exakt verwogen.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sack</span><span>Grobstrom</span><span>Feinstrom</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Der Sack hängt</span> <span class="nw">an der Waage.</span></h2><p>Der Offensack wird auf den Füllstutzen gesteckt und von der Momentsackklemme gehalten. Füllstutzen und Sack sind Teil der Bruttowaage mit Wägezelle.</p></article>'+
     '<article class="step"><h2><span class="nw">Die Klappe öffnet</span> <span class="nw">im Grobstrom.</span></h2><p>Die pneumatische Schwenkklappe unter dem Vorbehälter öffnet weit, und das Produkt strömt schnell in den Sack: Kunststoffgranulat, Getreide, Pellets.</p></article>'+
     '<article class="step"><h2><span class="nw">Der Feinstrom</span> <span class="nw">trifft das Gewicht.</span></h2><p>Kurz vor dem Sollgewicht steuert die Klappe in den Feinstrom und schließt beim Zielgewicht. Eichfähig, 10 bis 100 kg, bis 200 Säcke pro Stunde.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="anlagen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Anlagen und Komponenten</span><h2 class="d2 split"><span class="nw">Für Schüttgüter</span> <em><span class="nw">und Flüssigkeiten.</span></em></h2></div><p data-r>VOLLENDA fertigt Anlagen für die Abfüllung von Schüttgütern oder Flüssigkeiten und stellt jedem Kunden aus einem breiten Spektrum eigener Komponenten die für seine Anforderungen beste Anlage zusammen.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="branchen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Branchen</span><h2 class="d2 split"><span class="nw">Seit Jahren</span> <em class="nw">erfolgreich abgefüllt.</em></h2></div><p data-r>Die Anlagen und Komponenten der Vollenda-Werk GmbH finden ihren Einsatz in den unterschiedlichsten Branchen, und die Konstruktionsabteilung passt sie an oder realisiert Sonderkonstruktionen.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Branchen</span><p class="cr" data-r><span>Agrar</span><span>Lebensmittel</span><span>Futtermittel</span><span>Kunststoffe, Gummi</span><span>Chemie</span><span>Pharma, Kosmetik</span><span>Baustoffe</span><span>Bergbau</span><span>Warenumschlag</span></p></div>'+
   '<div class="qual q2"><span class="lab kick" data-r>Ausführungen</span><p class="cr" data-r><span>Semiautomatisch</span><span>Vollautomatisch</span><span>Eichfähig</span><span>ATEX-konform</span><span>Hygieneausführung</span><span>Edelstahl</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="service" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Service</span><h2 class="d2 split"><span class="nw">Weltweit im Einsatz,</span> <em class="nw">lange versorgt.</em></h2></div><p data-r>VOLLENDA exportiert in alle Teile der Welt und bietet weltweiten Service und langfristige Ersatzteilversorgung, durch Vertretungen oder durch die Spezialisten vom Stammhaus aus.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Leistungen</span><dl>'+
    '<div data-r><dt class="lab">Montage · Inbetriebnahme</dt><dd>Aufstellen, Ausrichten und Parametrieren der Anlage vor Ort</dd></div>'+
    '<div data-r><dt class="lab">Schulung</dt><dd>Bedienpersonal lernt Feineinstellung, Sortenerstellung und Wartung</dd></div>'+
    '<div data-r><dt class="lab">Waagen-Eichung</dt><dd>Unterstützung bei Ersteichung und periodischer Nacheichung</dd></div>'+
    '<div data-r><dt class="lab">Wartung · Wartungsverträge</dt><dd>Regelmäßige Wartung durch qualifiziertes Fachpersonal</dd></div>'+
    '<div data-r><dt class="lab">Ersatzteile</dt><dd>Weltweite Versorgung, mit Artikelnummern aus der Dokumentation</dd></div>'+
    '<div data-r><dt class="lab">Fernwartung</dt><dd>Module für Telefon oder Ethernet für kurze Antwortzeiten</dd></div>'+
   '</dl></div>'+
   '<div class="bk"><span class="lab kick" data-r>Dokumentation</span><p class="cr" data-r><span class="one">Die Dokumentationen der Anlagen sind in viele Sprachen übersetzt</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Über hundert Jahre</span> <em class="nw">Wägen und Abfüllen.</em></h2></div><p data-r>Seit 1924 ist die Vollenda-Werk GmbH ein weltweit bekannter Anbieter für Waagen, Absack- und Abfüllanlagen, bekannt für zuverlässige Produkte, innovative Lösungen und engagierte Mitarbeiter.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>Historie</span><ul>'+
     '<li data-r><b class="yr">1924</b>Michael Siegburg gründet VOLLENDA in München-Aubing; fast 50 Patente für Waagen und Abfüllmaschinen folgen.</li>'+
     '<li data-r><b class="yr">1953</b>Das Programm wächst um die Sackverschließtechnik, heute die Tochter VVT Vollenda Verschließtechnik.</li>'+
     '<li data-r><b class="yr">1983</b>Florian und Frieder Pfister übernehmen und machen VOLLENDA zum international ausgerichteten Anbieter von Absack- und Abfülllinien.</li>'+
     '<li data-r><b class="yr">1985</b>Mit dem Kauf von CE-GE kommen Abfüllanlagen für Flüssigkeiten hinzu.</li>'+
     '<li data-r><b class="yr">1998</b>Umzug an den heutigen Standort in Kaltenberg, am Rand von München.</li>'+
     '<li data-r><b class="yr">2013</b>Die Tochter VCG Flüssigkeitsfüllmaschinen GmbH wird mit der Vollenda-Werk GmbH verschmolzen.</li>'+
    '</ul></div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Messen 2026</span><p class="cr" data-r><span>interpack, Düsseldorf</span><span>POWTECH, Nürnberg</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Auf der interpack</span> <em class="nw">und der POWTECH.</em></h2></div><p data-r>VOLLENDA zeigt seine Anlagen auf den Fachmessen für Verpackung und Schüttguttechnik. Jeder Eintrag verweist auf seine Quelle.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Haben Sie Interesse?</span> <em class="nw">Wir beraten Sie gerne.</em></h2>'+
   '<p class="sub" data-r>Wir erstellen Ihnen ein anlagenspezifisches Angebot, für eine einzelne Abfüllanlage ebenso wie für eine komplette Abpackstraße.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Schreiben Sie uns '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Adresse</span><p data-r><span>Vollenda-Werk GmbH</span><br><span>Schönauer Ring 18</span><br><span>82269 Kaltenberg</span></p></div>'+
    '<div><span class="lab" data-r>Zentrale · Vertrieb</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+SALES+'">'+SALES+'</a><br><span>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></span><br><span>Fax '+FAXT+'</span></p></div>'+
    '<div><span class="lab" data-r>Service · Ersatzteile</span><p data-r><a class="ul" href="mailto:'+SERV+'">'+SERV+'</a><br><span>Telefon <a class="ul" href="tel:'+STEL+'">'+STELT+'</a></span><br><span>VVT Verschließtechnik <a class="ul" href="tel:'+VTEL+'">'+VTELT+'</a></span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresse</span>Vollenda-Werk GmbH<br>Schönauer Ring 18, 82269 Kaltenberg</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/anlagen">Anlagen</a><br><a class="ul" href="#/branchen">Branchen</a><br><a class="ul" href="#/service">Service</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Programm</span>Waagen, Absack- und Abfüllanlagen für Schüttgüter und Flüssigkeiten, Sackverschließtechnik, Service und Ersatzteile.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Cuprum\',system-ui,sans-serif;font-weight:700;font-size:60px;letter-spacing:.24em">VOLLENDA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Vollenda-Werk GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",anlagen:"anlagen",branchen:"branchen",service:"service",unternehmen:"unternehmen",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"VOLLENDA-WERK — Waagen, Absack- und Abfüllanlagen, Kaltenberg, seit 1924",x:"Start"};
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
