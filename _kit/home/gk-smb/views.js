/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function machines(){return '<ul class="pfr gkmr">'+MACH.map(function(m){
  return '<li data-r><span class="lab tg">'+esc(m[0])+'</span><h3>'+m[1]+'</h3><p>'+esc(m[2])+'</p><a class="lab lk" href="'+CP+m[3]+'" target="_blank" rel="noopener">Datenblatt '+ARR+'</a></li>'}).join("")+'</ul>'+
  '<div class="bk"><span class="lab kick" data-r>Branchen</span><p class="cr" data-r><span>Nahrungsmittel</span><span>Pharmazeutika</span><span>Kosmetik</span><span>Chemie und Haushalt</span></p></div>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Ansprechpartner</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* four special-solution fields (gk-smb.de > Sonderlösungen, Fertigung, Service) */
function caps(){var C=[
  ["Fördertechnik","<span class=\"nw\">Für Schütt-</span> <span class=\"nw\">und Stückgüter</span>","Transportbänder, Bandwaagen, Schwingförderer und Rollenförderer, gewachsen aus unserer Zeit als Zulieferer von Förder- und Dosiertechnik für die tabakverarbeitende Industrie.",'<rect x="4" y="30" width="48" height="10"/><circle cx="10" cy="35" r="3"/><circle cx="46" cy="35" r="3"/><path d="M8 40V52M48 40V52"/><rect class="a" x="16" y="18" width="12" height="12"/><rect class="a" x="32" y="22" width="9" height="8"/>'],
  ["Sondermaschinen","<span class=\"nw\">Dosieren, heben,</span> <span class=\"nw\">kippen</span>","Schüttgut-Volumendosierer sowie Hebe- und Kippgeräte für Schüttgut-Behälter, maßgeschneidert für Kunden aus allen Industriebereichen.",'<path d="M10 52V20H24"/><path d="M24 14H48L44 36H28Z"/><path class="a" d="M36 36V44M32 48L36 44L40 48"/><path d="M4 52H52"/>'],
  ["Fertigung","<span class=\"nw\">Lohnfertigung als</span> <span class=\"nw\">verlängerte Werkbank</span>","Drehen, Fräsen, Honen, Schweißen, Blechbearbeitung, Glasperlstrahlen und Nasslackierung, in Stahl, Edelstahl und Aluminium, auf Wunsch mit Prüfprotokollen; dazu Schaltschrankbau und Automatisierung.",'<rect x="6" y="18" width="30" height="20"/><path d="M36 22H50M36 34H50"/><path class="a" d="M40 6L46 16H34Z"/><path d="M14 18V38M22 18V38"/>'],
  ["Service","<span class=\"nw\">Full-Service</span> <span class=\"nw\">aus einer Hand</span>","Telefonsupport, Fernwartung via VPN, zyklische Wartung, Ersatzteile und Formatsätze, Modernisierung von GKS- und Piltz-Verpackungsmaschinen, Wartungsverträge und Notfalleinsatz.",'<circle cx="28" cy="28" r="20"/><path class="a" d="M19 28L25 34L37 22"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Verpackungsmaschinen<span class="nomob"> · Arnsdorf bei Dresden</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Robust gebaut,</span> <span class="l"><em class="nw">modular gedacht.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>GK Sondermaschinenbau entwickelt und fertigt in Arnsdorf bei Dresden Siegelrandbeutel-, Schlauchbeutel- und Stickpackmaschinen mit eigenen Dosiersystemen, für Nahrungsmittel, Pharmazeutika, Kosmetik und Chemie.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/maschinen">Unsere Maschinen '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Inhabergeführt, seit 1969</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Ein mittelständisches</span> <span class="nw">Familienunternehmen</span> <span class="nw">mit hoher Fertigungstiefe:</span> <em><span class="nw">von der Beratung</span> <span class="nw">und Konstruktion</span> <span class="nw">bis zur schlüsselfertigen</span> <span class="nw">Übergabe, aus einer Hand.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1969</span><p class="k">begann Gerhard Kummerfeldt in einer Garage in Rellingen bei Hamburg, mit drei Maschinen</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1.600</span><p class="k">Beutel pro Minute auf der Siegelrandbeutelmaschine FB-L, thermisch gesiegelt auf bis zu 16 Bahnen</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2012</span><p class="k">zogen Verwaltung und Produktion auf das Gelände in Arnsdorf, mit neuen Produktionsstätten</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Wie ein Siegelrandbeutel entsteht</span><h2 class="d3"><span class="nw">Von der Folie</span> <em class="nw">zum Beutel.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Folie</span><span>Siegeln</span><span>Dosieren</span><span>Trennen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Die Folie läuft</span> <span class="nw">von der Rolle.</span></h2><p>Ein servo-angetriebener Folienabzug zieht die Packstoffbahn vertikal und im Takt in die Maschine, auch kompostierbare und recyclebare Folien, die wir im eigenen Technikum testen.</p></article>'+
     '<article class="step"><h2><span class="nw">Längs gesiegelt,</span> <span class="nw">in Bahnen.</span></h2><p>Servo-angetriebene Siegelbacken schließen die Längsnähte. So laufen mehrere Beutel nebeneinander, bei der FB-L auf bis zu 16 Bahnen.</p></article>'+
     '<article class="step"><h2><span class="nw">Jede Bahn</span> <span class="nw">wird dosiert.</span></h2><p>Kolben-, Drehschieber- oder Kugelventilpumpen füllen flüssige Produkte ab, auf Wunsch mit vollautomatischer CIP/SIP-Reinigung; für Pulver und Granulat gibt es eigene Dosierer.</p></article>'+
     '<article class="step"><h2><span class="nw">Quer gesiegelt,</span> <span class="nw">abgetrennt.</span></h2><p>Die Quersiegelung schließt die Beutel, das Messer trennt sie ab: thermisch bis zu 1.600 Beutel pro Minute, mit Ultraschall bis zu 640.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="maschinen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Verpackungsmaschinen</span><h2 class="d2 split"><span class="nw">Drei Beutelformen,</span> <em class="nw">modular gebaut.</em></h2></div><p data-r>Unsere Verpackungsmaschinen zeichnen sich durch ihre robuste, wartungsarme Bauweise und ihren modularen Aufbau aus. So lassen sie sich leicht an verschiedenste Produkte und Beutelformen anpassen.</p></div>'+
   machines()+
  '</div></section>'+

  '<section class="sec light" id="sonderloesungen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Sonderlösungen</span><h2 class="d2 split"><span class="nw">Gebaut und gefertigt,</span> <em class="nw">aus einer Hand.</em></h2></div><p data-r>Neben den Verpackungsmaschinen entwickeln und fertigen wir maßgeschneiderte Speziallösungen, vor allem in der Fördertechnik, und stellen unseren Maschinenpark als Lohnfertigung zur Verfügung.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Aus der Garage</span> <span class="nw">in Rellingen</span> <em class="nw">nach Arnsdorf.</em></h2></div><p data-r>Gerhard Kummerfeldt, Feinmechanikermeister, führt das Unternehmen mit der Erfahrung von über 50 Jahren Selbstständigkeit, zusammen mit einem jungen Team, das innovative und nachhaltige Impulse setzt.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>Stationen</span><ul>'+
     '<li data-r><b>1969, Rellingen</b>Mit drei Maschinen in einer Garage beginnt Gerhard Kummerfeldt als Lohnfertiger für die Film- und Schifffahrtsindustrie.</li>'+
     '<li data-r><b>1989, Verpackung</b>In den 1980er Jahren führt der Weg in die Verpackungsmaschinentechnik; 1989 folgt eine eigene Firma für die Verpackung von Obst und Gemüse.</li>'+
     '<li data-r><b>1995, Arnsdorf</b>Übernahme der Firma Varialux in Arnsdorf bei Dresden und erfolgreiche Neuausrichtung; seit 2009 bilden die zugekauften Firmen die heutige GK Sondermaschinenbau GmbH.</li>'+
     '<li data-r><b>Heute, Technikum</b>Gemeinsam mit Packstoffherstellern und Kunden testen wir kompostierbare und recyclebare Folien auf Maschinengängigkeit und Siegeleigenschaften.</li>'+
    '</ul></div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Zuletzt in Düsseldorf,</span> <em class="nw">auf der interpack.</em></h2></div><p data-r>Auf Messen und in unserem Technikum zeigen wir, was unsere Maschinen können, zuletzt im Mai 2026 auf der interpack. Jeder Eintrag verweist auf seine Quelle.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihr Produkt,</span> <em class="nw">unsere Maschine.</em></h2>'+
   '<p class="sub" data-r>Lassen Sie sich von unseren Mitarbeitern zu Ihrem Verpackungs-, Transport- oder Handlingsproblem beraten. Wir freuen uns auf Ihre Anfrage.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail senden '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Adresse</span><p data-r><span>GK Sondermaschinenbau GmbH</span><br><span>Kleinwolmsdorfer Str. 26</span><br><span>01477 Arnsdorf</span></p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Telefon '+TELT+'</span></p></div>'+
    '<div><span class="lab" data-r>Geschäftsführung</span><p data-r><span>Gerhard Kummerfeldt</span><br><span>Geschäftsführer</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresse</span>GK Sondermaschinenbau GmbH, Kleinwolmsdorfer Str. 26, 01477 Arnsdorf, Deutschland</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/maschinen">Maschinen</a><br><a class="ul" href="#/sonderloesungen">Sonderlösungen</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/aktuelles">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Maschinen</span>Siegelrandbeutel-, Schlauchbeutel- und Stickpackmaschinen, Dosiersysteme, Fördertechnik und Sondermaschinen</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:500;font-size:40px;letter-spacing:.2em">GK SONDERMASCHINENBAU</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 GK Sondermaschinenbau GmbH · Amtsgericht Dresden HRB 27797</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",maschinen:"maschinen",sonderloesungen:"sonderloesungen",unternehmen:"unternehmen",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"GK Sondermaschinenbau GmbH — Verpackungsmaschinen, Arnsdorf",x:"Start"};
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
