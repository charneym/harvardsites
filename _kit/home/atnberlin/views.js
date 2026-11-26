/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
/* the soldering processes (atn-berlin.de > Löten > Lötverfahren), each with a small line icon of its heat source */
function caps(){var C=[
  ["Licht","Selektives Reflowlöten","Mit LightBeam wird kurzwelliges Infrarotlicht im Bereich von 1 µm auf die Lötstelle fokussiert. Damit ist ATN Marktführer für selektives Lichtlöten.",'<path d="M20 8H36L40 18H16Z"/><path class="a" d="M18 18L28 40L38 18"/><path d="M8 46H48"/><circle class="f" cx="28" cy="40" r="2.4"/>'],
  ["Laser","Präzise und selektiv","Der Laser erzeugt ein stark gebündeltes, kohärentes Licht gleicher Wellenlänge mit hoher Energiedichte: präzise und selektiv.",'<path d="M22 6H34V18H22Z"/><path class="a" d="M28 18V40"/><path d="M8 46H48"/><circle class="f" cx="28" cy="40" r="2.4"/>'],
  ["Kolben","Universell und flexibel","Die Palette reicht bis zur automatisierten Herstellung einer Platine mit Lötkolben und Flussmittel, mit Werkzeug und Material nach Anwendung.",'<path d="M24 6H32V24H24Z"/><path class="a" d="M26 24L28 38L30 24"/><path d="M8 46H48"/><circle class="f" cx="28" cy="40" r="2.4"/>'],
  ["Induktion","Energie direkt in der Lötstelle","An eine Sekundärspule, den Lötinduktor, wird eine Mittel- oder Hochfrequenz-Stromquelle angelegt: hoher Energieeintrag direkt in der Lötstelle.",'<path d="M14 30C14 22 42 22 42 30S14 38 14 30"/><path class="a" d="M18 22C18 16 38 16 38 22"/><path d="M8 46H48"/><circle class="f" cx="28" cy="40" r="2.4"/>'],
  ["Mikroflamme","Brenngas durch Elektrolyse","Die Mikroflamme erzeugt die Wärme mit einer Wasserstoff-Sauerstoff-Flamme; das Brenngas entsteht durch Elektrolyse.",'<path d="M25 6H31V22H25Z"/><path class="a" d="M28 24C24 30 25 35 28 38C31 35 32 30 28 24Z"/><path d="M8 46H48"/><circle class="f" cx="28" cy="40" r="2.4"/>'],
  ["Thermode","Löten unter Vorspannung","Thermodensysteme löten unter Vorspannung und eignen sich auch zum Heiß-Siegeln (ACF-Kleben) und zum Heißverstemmen von Kunststoffen.",'<path d="M16 10H40V22H16Z"/><path class="a" d="M20 22V34H36V22"/><path d="M8 46H48"/><circle class="f" cx="28" cy="40" r="2.4"/>']];
  return '<div class="caps six">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["06.–08. Okt. 2026","Expo for Electronics Manufacturing 2026 in Stuttgart, Halle 9, Stand 9A58","atn-berlin.de",AT+"atn-events.php"],
 ["18.–21. Nov. 2025","productronica 2025 in München, Halle A4 und auf der FutureLine in Halle B2","productronica.com","https://exhibitors.productronica.com/ausstellerportal/2025/aussteller/ausstellerdetails/atn-automatisierungstechnik-niemeier-gmbh/?elb=228.1100.2091.1.111"],
 ["25. Juni 2025","EMIL – Elektronik zum Anfassen: Technologietag in der Alten Brauerei Stegen am Ammersee","Agenda (PDF)",AT+"media/eventarchiv/2025/Agenda-EMIL-Final-Rev-2.pdf"],
 ["Neu bei ATN","<span class=\"nw\">Laserbeschriftung, neu</span> <span class=\"nw\">im INOPLACER-Programm</span> <span class=\"nw\">für die SMD-Fertigung</span>","atn-berlin.de",AT+"inoplacer/laserbeschriftung.php"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+(n[1].indexOf('<span')===0?n[1]:esc(n[1]))+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function team(){var P=[
  ["Dr.-Ing. Jörg Niemeier","Geschäftsleitung und Vertrieb","Geschäftsführer der ATN Automatisierungstechnik Niemeier GmbH und der ATN Produktionstechnik Niemeier GmbH."],
  ["Luca Ballenthin","Vertrieb","Telefon +49 (0)30 5659 095-46"],
  ["Michael Neugebauer","Leiter Technik und Löten","Telefon +49 (0)30 5659 095-39"],
  ["Bastian Klein","Bereich Solar","Telefon +49 (0)30 5659 095-36"],
  ["Suzanne Sonntag","Administration","Telefon +49 (0)30 5659 095-0"]];
  return '<div class="mh"><div><p class="mh-label">Ansprechpartner</p><ul class="mh-list">'+P.map(function(p){return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Dosieren · Bestücken · Löten<span class="nomob"> · Berlin</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Vom Klebepunkt</span> <span class="l"><em>bis zur Lötstelle.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ATN entwickelt, produziert und vertreibt in Berlin Komponenten, Systeme, Anlagen und Software für die Elektronikfertigung: Löttechnik und Lötroboter, Dosiertechnik und SMD-Bestückautomaten, alles aus einer Hand.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Zu den Produkten '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage senden</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Aus einer Hand</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Automatisierung ist</span> <span class="nw">ein wichtiger Bestandteil</span> <span class="nw">einer modernen und</span> <span class="nw">wirtschaftlichen Produktion.</span> <span class="nw">Wir liefern sie</span> <em><span class="nw">vom Prozess</span> <span class="nw">bis zur Anlage.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1996</span><p class="k">gegründet aus dem Produktionstechnischen Zentrum Berlin (PTZ) der TU Berlin</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40</span><p class="k">Mitarbeiter in Applikation Löten, Konstruktion, Steuerungsbau und Programmierung</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">300+</span><p class="k">Induktionslötsysteme weltweit für die Randverschaltung von Solarmodulen</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Verfahren · Eine Baugruppe</span><h2 class="d3"><span class="nw">Drei Schritte,</span> <em><span class="nw">eine Lötstelle.</span></em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Dosieren</span><span>Bestücken</span><span>Löten</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Dosieren.</h2><p>Der Dispenser setzt Lotpaste präzise auf die Pads der Leiterplatte, per Druck-Zeit, Volumen oder Jet. ATN bietet die komplette Dosiertechnik, auch für Leitkleber, das Kleben von Bauteilen und das Vergießen.</p></article>'+
     '<article class="step"><h2>Bestücken.</h2><p>Der INOPLACER nimmt das SMD-Bauteil auf und setzt es auf die Paste: „surface-mounted device“, ein oberflächenmontiertes Bauelement. Für Labor, Muster und Kleinserie.</p></article>'+
     '<article class="step"><h2>Löten.</h2><p>LightBeam fokussiert kurzwelliges Infrarotlicht im Bereich von 1 µm genau auf die Lötstelle. Die Paste schmilzt, und das Lot verbindet Pad und Anschluss: selektives Lichtlöten, Lötstelle für Lötstelle.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="loettechnik" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Löttechnik</span><h2 class="d2 split"><span class="nw">Licht, Laser,</span> <em><span class="nw">Kolben, Induktion.</span></em></h2></div><p data-r>Automatisiertes Einzelpunktlöten mit rund 15 standardisierten Lötwerkzeugen. Kunden sind Elektronikproduzenten mit Serien- bis Großserienfertigung, wie Automobilzulieferer und Hersteller von elektronischen Bauelementen.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split"><span class="nw">Sechs Bereiche,</span> <em><span class="nw">eine Fertigung.</span></em></h2></div><p data-r>Von der Lötstation bis zur Linie: Lötsysteme, Dosiertechnik und SMD-Bestückung, dazu Induktions- und Thermodensysteme und die Lötsysteme für die Solarmodulfertigung.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Kunden</span><p class="cr" data-r><span>Automobilzulieferer</span><span>Elektronische Bauelemente</span><span>Elektro-Produkte</span><span>Optoelektronik</span><span>Medizintechnik</span><span>Solarmodule</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Aus der TU Berlin,</span> <em><span class="nw">seit 1996.</span></em></h2></div><p data-r>Das Team von ATN zeichnet sich aus durch ein hohes Wissen über Prozesse und Applikationen, von der Planung über die Applikationserprobung und das Angebot bis zum After-Sales-Service.</p></div>'+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab">Forschung</span><h3>Mit Universitäten und Fraunhofer</h3><p>Produktentwicklungen entstehen in enger Zusammenarbeit mit Universitäten und Fraunhofer-Instituten; ATN investiert einen erheblichen Anteil des jährlichen Umsatzes in Forschung und Entwicklung.</p></div>'+
    '<div class="oz-site"><span class="lab">Nachwuchs</span><h3>Praxis für Studierende</h3><p>Studierende lernen bei ATN in praxisorientierten Arbeiten den Industriealltag kennen, und können nach dem Abschluss ihre Karriere bei ATN starten.</p></div>'+
    '<div class="oz-site"><span class="lab">Standort</span><h3>Segelfliegerdamm 94–98</h3><p>Entwicklung, Fertigung und Vertrieb in 12487 Berlin. Besuche nach Terminvereinbarung, Montag bis Freitag von 8 bis 17 Uhr; Besuchereingang Winckelmannstraße 81.</p></div>'+
   '</div>'+
   '<div class="tm">'+team()+'</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="messen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Messen</span><h2 class="d2 split"><span class="nw">Live an der Linie,</span> <em><span class="nw">auf der Messe.</span></em></h2></div><p data-r>ATN ist regelmäßig auf den wichtigsten Messen in Deutschland vertreten, wie der productronica, der SMTconnect und den EMIL-Technologietagen.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihre Baugruppe,</span> <em><span class="nw">unser Prozess.</span></em></h2>'+
   '<p class="sub" data-r>Senden Sie uns Ihre Anwendung: Wir begleiten Sie von der Planung über die Applikationserprobung und das Angebot bis zum After-Sales-Service.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+SALES+'">Anfrage senden '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab">Anschrift</span><p>ATN Automatisierungstechnik Niemeier GmbH<br>Segelfliegerdamm 94–98<br>12487 Berlin</p></div>'+
    '<div><span class="lab">Kontakt</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Anfragen <a class="ul" href="mailto:'+SALES+'">'+SALES+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab">Besuch</span><p>Montag bis Freitag, 8 bis 17 Uhr, nach Terminvereinbarung<br>Besuchereingang Winckelmannstraße 81</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>ATN Automatisierungstechnik Niemeier GmbH<br>Segelfliegerdamm 94–98, 12487 Berlin</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/loettechnik">Löttechnik</a><br><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/messen">Messen</a></div>'+
   '<div class="c"><span class="lab">Produkte</span>Löten und Lötroboter<br>Dosieren<br>Bestücken (SMD)<br>Induktion und Solar</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Barlow\',Arial,sans-serif;font-weight:500;font-size:56px;letter-spacing:.14em">ATN BERLIN</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ATN Automatisierungstechnik Niemeier GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",verfahren:"story",loettechnik:"loettechnik",produkte:"produkte",unternehmen:"unternehmen",messen:"messen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ATN Automatisierungstechnik Niemeier GmbH — Dosieren, Bestücken, Löten aus einer Hand, Berlin",x:"Start"};
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
