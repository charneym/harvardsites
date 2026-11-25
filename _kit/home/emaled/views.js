/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prod(){return '<ul class="pfr mip">'+PROD.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function blog(){return '<ul class="nws">'+BLOG.map(function(n){return '<li><a href="'+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">Lesen '+ARR+'</span></a></li>'}).join("")+'</ul>'}
/* examination lights and ceiling supply units (emaled.de > Untersuchungsleuchten, DVE), each with a small line icon */
function caps(){var C=[
  ["Serie 200","Untersuchungsleuchten 200","Blendfreies Licht für alle ärztlichen Untersuchungen: 50.000 lx, 3 Helligkeitsstufen, für Decke und Wand oder als Standleuchte mit Rollen.",'<path d="M28 6V20"/><path d="M14 30A14 10 0 0 1 42 30Z"/><path class="a" d="M20 36L16 48M28 36V50M36 36L40 48"/>'],
  ["Serie 202","Untersuchungsleuchten 202","Neu: hohe Beweglichkeit über Liege oder Behandlungsstuhl, 5 Helligkeits- und 5 Farbtemperaturstufen von 3.500 bis 5.000 K.",'<path d="M10 8H30V20"/><path d="M18 30A12 9 0 0 1 42 30Z"/><path class="a" d="M24 36L20 48M30 36V50M36 36L40 48"/>'],
  ["DVE","Deckenversorgungseinheiten","Medizinische Gase, Strom und Daten aus der Decke, für Anästhesie, Chirurgie und Intensivstation, mit DIN-, BS- oder AFNOR-Komponenten.",'<path d="M8 8H48"/><path d="M28 8V18H44V24"/><path d="M36 24H52V30H36Z"/><path class="a" d="M40 30V48M48 30V48M36 40H52"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
var MOUNT=["Deckenmontage","Wandmontage","Fahrgestell","Mobil mit Notstrom","Doppelleuchte","Mit Kamera und Monitor"];
var CERT=["ISO 13485","Bestätigt durch die DQS Medizinprodukte GmbH","High-Tech made in Germany"];
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>OP- und Untersuchungsleuchten<span class="nomob"> · Obernburg am Main</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Perfektes Licht</span><span class="l"><em>für den OP.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>EMA-LED entwickelt OP-Leuchten, Untersuchungsleuchten und Deckenversorgungseinheiten mit modernster LED-Lichttechnik, gemeinsam mit erfahrenen Operateuren.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/op-leuchten">Zu den OP-Leuchten '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt aufnehmen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Willkommen bei EMALED</span>'+
   '<h2 class="txt" id="mani">Als eines der ersten Unternehmen der Branche haben wir erkannt, welch großen Nutzen LED-Technik bei medizinischen Leuchten bringen kann. <em class="nw">Heute weltweit aktiv.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">95 %</span><p class="k">der Lichtstärke der Leuchtdioden werden durch die EMA-Reflektoren genutzt</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50 %</span><p class="k">bis zu so viel weniger LEDs als vergleichbare Produkte, bei gleicher Leistung</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">160.000</span><p class="k">Lux Beleuchtungsstärke: die EMALED 560 ist unser hellster Leuchtenkörper</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">EMA-Reflextionstechnik</span><h2 class="d3"><span class="nw">Mehr Licht</span> <em class="nw">aus jeder LED.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Reflektor</span><span>Lichtfeld</span><span>Luft</span><span>Fokus</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Ein Reflektor je Diode.</h2><p>Spezielle Reflektoren bündeln das Licht jeder einzelnen Leuchtdiode: 95 % ihrer Lichtstärke werden genutzt. So braucht eine EMALED bis zu 50 % weniger LEDs bei gleicher Leistung.</p></article>'+
     '<article class="step"><h2>Ein Feld ohne Schatten.</h2><p>Die Lichtkegel aller Reflektoren überlagern sich im Eingriffsfeld: schattenfreie Ausleuchtung, kontrastreiches Licht und eine natürliche Farbwiedergabe.</p></article>'+
     '<article class="step"><h2>Offen für Laminar Flow.</h2><p>Der flache Leuchtenkörper ist nicht geschlossen. Die Luft der Laminar-Flow-Decke strömt hindurch und verteilt sich gleichmäßig im Arbeitsraum.</p></article>'+
     '<article class="step"><h2>Licht nach Maß.</h2><p>Bei der EMALED 602 lässt sich das Lichtfeld in 4 Stufen fokussieren, die Helligkeit in 10 und die Farbtemperatur in 5 Stufen einstellen, bequem über das Bedienpanel.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="op-leuchten" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>OP-Leuchten</span><h2 class="d2 split"><span class="nw">Gutes Licht</span> <em class="nw">für jeden Eingriff.</em></h2></div><p data-r>Von der kompakten Serie 300 bis zur EMALED 602 mit 650 mm Durchmesser, dem größten Leuchtenkörper im Programm: als Einzel- oder Doppelleuchte, mobil, mit Kamera und Monitor.</p></div>'+
   prod()+
  '</div></section>'+

  '<section class="sec light" id="untersuchungsleuchten" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Untersuchungsleuchten und DVE</span><h2 class="d2 split"><span class="nw">Klares Licht</span> <em class="nw">zum Untersuchen.</em></h2></div><p data-r>Für Untersuchungs- und Behandlungsräume die Serien 200 und 202, leicht zu positionieren und sparsam im Verbrauch; für den OP die passende Versorgung aus der Decke.</p></div>'+
   caps()+
   '<div class="bk lbk"><span class="lab kick" data-r>Montage</span><p class="cr" data-r>'+MOUNT.map(function(c){return '<span>'+esc(c)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
   '<div class="bk lbk bk2"><span class="lab kick" data-r>Qualität</span><p class="cr" data-r>'+CERT.map(function(c){return '<span>'+esc(c)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">In der Mitte</span> <em class="nw">von Deutschland.</em></h2></div><p data-r>EMA-LED ist ein weltweit agierender Spezialanbieter für medizinische Leuchten, mit Sitz in Obernburg am Main, rund 50 km südlich von Frankfurt.</p></div>'+
   '<div class="uf">'+
    '<div class="uf-p"><span class="lab" data-r>Geschäftsführung</span>'+
     '<ul class="dirs"><li data-r><span class="dn">Natalie Ster</span><span class="dr">Geschäftsführerin</span></li></ul>'+
     '<blockquote class="uf-q" data-r>„Unsere Ingenieure arbeiten mit erfahrenen Operateuren zusammen, um die Wünsche der Anwender bestmöglich zu verstehen und in den Leuchten umzusetzen.“<cite>EMA-LED GmbH</cite></blockquote></div>'+
    '<div class="uf-s">'+
     '<div class="site"><span class="lab" data-r>Sitz</span><p data-r>Ottostraße 3<br>63785 Obernburg am Main</p></div>'+
     '<div class="site"><span class="lab" data-r>Showroom</span><p data-r>Alle OP- und Untersuchungsleuchten vor Ort erleben, mit dem ganzen Team</p></div>'+
     '<div class="site"><span class="lab" data-r>Vertrieb</span><p data-r>Partner in Deutschland, Indien, Libanon, Pakistan und Peru</p></div>'+
     '<div class="site"><span class="lab" data-r>Kataloge</span><p data-r>Deutsch, Englisch, Französisch, Spanisch und Arabisch</p></div>'+
    '</div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Neues Licht,</span> <em class="nw">neue Termine.</em></h2></div><p data-r>Neu im Sortiment sind die OP-Leuchten 602 und die Untersuchungsleuchten 202. Zuletzt waren wir auf der MEDICA in Düsseldorf.</p></div>'+
   '<div class="ev">'+
    '<span class="lab kick" data-r>Zuletzt</span>'+
    '<dl>'+
     '<div><dt class="lab" data-r>Messe</dt><dd data-r>MEDICA 2026, Düsseldorf</dd></div>'+
     '<div><dt class="lab" data-r>Termin</dt><dd data-r>16. bis 19. November 2026</dd></div>'+
     '<div><dt class="lab" data-r>Stand</dt><dd data-r>Halle 12, Stand A41</dd></div>'+
     '<div><dt class="lab" data-r>Aussteller</dt><dd data-r>EMA-LED GmbH, Obernburg am Main</dd></div>'+
    '</dl>'+
   '</div>'+
   '<span class="lab kick sub-l pr" data-r>Mehr lesen</span>'+
   blog()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Sprechen Sie</span> <em class="nw">mit uns.</em></h2>'+
   '<p class="sub" data-r>Informieren Sie sich in Obernburg über unsere OP- und Untersuchungsleuchten. Unser gesamtes Team steht Ihnen gerne zur Verfügung.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>EMA-LED GmbH<br>Ottostraße 3<br>63785 Obernburg am Main</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Bürozeiten</span><p data-r>Montag bis Freitag<br>8.00 bis 17.00 Uhr</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>EMA-LED GmbH<br>Ottostraße 3, 63785 Obernburg am Main</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Zertifiziert</span>Qualitätsmanagement nach ISO 13485, bestätigt durch die DQS Medizinprodukte GmbH</div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/op-leuchten">OP-Leuchten</a><br><a class="ul" href="#/untersuchungsleuchten">Untersuchungsleuchten</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/aktuelles">Aktuelles</a></div>'+
  '</div><div class="fwm" aria-hidden="true">'+FLOGO+'</div>'+
  '<div class="legal"><span class="lab">© 2026 EMA-LED GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technik:"story","op-leuchten":"op-leuchten",untersuchungsleuchten:"untersuchungsleuchten",unternehmen:"unternehmen",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"EMALED — OP-Leuchten und Untersuchungsleuchten aus Obernburg am Main",x:"Start"};
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
