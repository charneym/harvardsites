/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Serienprodukte","Netzteile für Hochspannung und Laser","Hochspannungsmodule mit DC- und AC-Ausgang, Lasernetzteile und Netzteile für Diodenlaser: für analytische Geräte, Spektrometrie, Detektoren und Lasersysteme.",'<rect x="8" y="18" width="40" height="22"/><path class="a" d="M8 34H48"/><path d="M14 18V12M42 18V12"/><circle class="f" cx="40" cy="26" r="2.2"/>'],
  ["Individuelle Lösungen","Nach Ihrer Spezifikation","Wir entwickeln für Sie Stromversorgungen, Baugruppen für die Leistungselektronik und sonstige elektronische Teile. Viele Serien sind auch als kundenspezifische Ausführung lieferbar.",'<path d="M10 44V12H34L46 24V44Z"/><path d="M34 12V24H46"/><path class="a" d="M16 32H40M16 38H32"/><circle class="f" cx="20" cy="22" r="2.2"/>'],
  ["Wandlertechnik","Vom Linearregler zum Resonanzwandler","Unsere Spannungswandler zeichnen sich durch innovative Technik und Zuverlässigkeit aus, ob Linearregler, Sperrwandler, Durchflusswandler oder Resonanzwandler.",'<path d="M6 28C11 14 16 14 21 28S31 42 36 28"/><path class="a" d="M36 28H50"/><path d="M6 44H50"/><circle class="f" cx="36" cy="28" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Stromversorgungen<span class="nomob"> · Bünde</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Stabile Spannung.</span> <span class="l"><em>Präziser Strom.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Heim Electronic entwickelt und produziert in Bünde Stromversorgungen für die Industrie, Medizin, Wissenschaft und Forschung: Hochspannungsmodule, Lasernetzteile und kundenspezifische Leistungselektronik.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Zu den Produkten '+ARR+'</a><a class="btn" href="#/kontakt">Entwicklungsanfrage</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Ihr Spezialist</span>'+
   '<h2 class="txt" id="mani">Wir entwickeln <span class="nw">für Sie Stromversorgungen,</span> <span class="nw">Baugruppen für die</span> <span class="nw">Leistungselektronik und</span> <span class="nw">sonstige elektronische Teile,</span> <span class="nw">für die</span> <em><span class="nw">Industrie, Medizin,</span> <span class="nw">Wissenschaft und Forschung.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">15 kV</span><p class="k">bei 10 W aus 24 V / 1 A Eingang, im Mini-Format der Serie SMQ</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0,001 %</span><p class="k">Last- und Eingangsregelung der Hochspannungsmodule SMQ und SMP</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2 MHz</span><p class="k">effektive Ripplefrequenz des Laserdiodentreibers DL60-250</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technologie · Laserdiodentreiber</span><h2 class="d3">Der <em>DL60-250.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Mehrkanal</span><span>Puls / CW</span><span>Schutz</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Viele Kanäle, ein Strom.</h2><p>Der DL60-250 ist eine schaltende Stromquelle in Mehrkanaltechnik mit sehr hohem Ausgangsstrom. Durch die Mehrkanal-Architektur liegt die effektive Ripplefrequenz sehr hoch, bei 2 MHz, und der Stromripple sehr niedrig.</p></article>'+
     '<article class="step"><h2>Gepulst oder CW.</h2><p>Er treibt Laserdioden in industriellen Anwendungen, mit Rechteckpulsen oder im CW-Betrieb; analoge Modulation ist ebenfalls möglich. Die maximale CW-Ausgangsleistung beträgt 250 W bei 20 °C Gehäusetemperatur.</p></article>'+
     '<article class="step"><h2>Geschützt und überwacht.</h2><p>Bei Überstrom, Überspannung oder Übertemperatur stoppt der Wandler, ein MOSFET schließt den Ausgang kurz und „Power good“ wird deaktiviert. Die Innentemperatur liegt als Analogspannung an, so bleibt die thermische Reserve sichtbar.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="entwicklung" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Entwicklung</span><h2 class="d2 split">Individuelle <em>Lösungen.</em></h2></div><p data-r>Wir liefern Serienprodukte und kundenspezifische Lösungen. Für eine Entwicklungsanfrage senden Sie uns Ihre Spezifikation; nutzen Sie auch unsere langjährige Erfahrung auf diesem Gebiet.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split">Hochspannung, <em>Laserstrom.</em></h2></div><p data-r>Hochspannungsversorgungen mit DC- und AC-Ausgang und Spezialnetzteile für Laser und Diodenlaser, als Serienprodukt und in kundenspezifischer Ausführung.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Anwendungen</span><p class="cr" data-r><span>Analytische Geräte</span><span>Elektrophorese</span><span>Spektrometrie</span><span>Elektronen- und Ionenquellen</span><span>Fotovervielfacher</span><span>Halbleiterdetektoren</span><span>Gaschromatographen</span><span>Szintillatoren</span><span>MCPs und Bildwandler</span><span>Elektrostatische Filter</span><span>Diodenlaser</span><span>Nd:YAG-Laser</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split">Heim Electronic <em>in Bünde.</em></h2></div><p data-r>Heim Electronic ist spezialisiert auf die Entwicklung, die Produktion und den Vertrieb von Stromversorgungen für die Industrie, Medizin, Wissenschaft und Forschung.</p></div>'+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab">Geschäftsführung</span><h3>Marc Ohlf und Norbert Grebe</h3><p>Geschäftsführer der Heim Electronic GmbH, eingetragen beim Amtsgericht Bad Oeynhausen unter HRB 15404.</p></div>'+
    '<div class="oz-site"><span class="lab">Standort</span><h3>Haßkampstraße 75–77</h3><p>Firmensitz in 32257 Bünde. Für ein persönliches Gespräch rufen Sie uns einfach an: <span class="nw">'+TELT+'</span>.</p></div>'+
    '<div class="oz-site"><span class="lab">Auf der Messe</span><h3>LASER World of PHOTONICS 2025</h3><p>Heim Electronic war 2025 Aussteller auf der Messe in München. <a class="ul" href="https://exhibitors.world-of-photonics.com/ausstellerportal/2025/aussteller/ausstellerdetails/heim-electronic-gmbh/?elb=178.1100.4132.1.111" target="_blank" rel="noopener">Zum Ausstellerprofil</a></p></div>'+
   '</div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihre Anfrage,</span> <em><span class="nw">unsere Lösung.</span></em></h2>'+
   '<p class="sub" data-r>Vielen Dank für Ihr Interesse an unseren Produkten. Für eine individuelle Entwicklungsanfrage oder ein persönliches Gespräch erreichen Sie uns direkt in Bünde.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab">Anschrift</span><p>Heim Electronic GmbH<br>Haßkampstraße 75–77<br>32257 Bünde</p></div>'+
    '<div><span class="lab">Kontakt</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab">Produkte</span><p><a class="ul" href="'+HE+'index.html" target="_blank" rel="noopener">Produktübersicht und Datenblätter</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>Heim Electronic GmbH<br>Haßkampstraße 75–77, 32257 Bünde</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/technologie">Technologie</a><br><a class="ul" href="#/entwicklung">Entwicklung</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Produkte</span>Hochspannung DC und AC<br>Lasernetzteile<br>Netzteile für Diodenlaser<br>Kundenspezifische Lösungen</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:500;font-size:56px;letter-spacing:.14em">HEIM ELECTRONIC</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Heim Electronic GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technologie:"story",produkte:"produkte",entwicklung:"entwicklung",unternehmen:"unternehmen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Heim Electronic GmbH — Stromversorgungen für Industrie, Medizin, Wissenschaft und Forschung, Bünde",x:"Start"};
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
