/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Mehr '+ARR+'</a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Analytik & Medizintechnik","Analytik und Diagnostik","Kompakte Abmessungen und eine präzise Kontrolle von Flüssigkeiten und Gasen: Fluidik-Komponenten, die hohe Leistungsfähigkeit mit kompakten Abmessungen verbinden, für hochintegrierte Geräte und Systeme.",'<rect x="10" y="14" width="36" height="28"/><path class="a" d="M10 28H20L24 20L30 36L34 28H46"/><circle class="f" cx="30" cy="36" r="2.2"/>'],
  ["Industrie & Anlagenbau","Fluidtechnik für Maschinen und Prozesse","Von kompakten Magnetventilen für mobile Geräte bis zu Fluidik-Lösungen für Maschinen, Produktionsanlagen und industrielle Prozesse, als Standardkomponente oder angepasst.",'<path d="M8 46V26L20 33V26L32 33V14H44V46Z"/><path class="a" d="M8 46H48"/><circle class="f" cx="38" cy="24" r="2.2"/>'],
  ["Aerospace","Fluidik für den Weltraum","Ventile für Satellitenantriebe ebenso wie Fluidik-Lösungen für Forschung und Experimente im Weltraum, aus der Erfahrung in Miniaturisierung und präziser Mediensteuerung.",'<circle cx="28" cy="28" r="9"/><ellipse class="a" cx="28" cy="28" rx="22" ry="8" transform="rotate(-24 28 28)"/><circle class="f" cx="47" cy="19.5" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function steps(){return '<div class="ev"><span class="lab kick" data-r>Ablauf eines Projekts</span><dl>'+STEPS.map(function(s,i){
  return '<div data-r><dt class="lab">'+(i+1)+' · '+esc(s[0])+'</dt><dd>'+esc(s[1])+'</dd></div>'}).join("")+'</dl></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Fluidtechnik seit 1994<span class="nomob"> · Friedrichsdorf</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Präzision in der</span><span class="l"><em>Fluidtechnik.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Pumpen, Ventile, Fluidik-Komponenten und Module für die präzise Steuerung, Regelung, Dosierung und Förderung von Flüssigkeiten und Gasen, in Analytik, Diagnostik, Medizintechnik, Industrie und Aerospace.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Zu den Produkten '+ARR+'</a><a class="btn" href="#/kontakt">Projekt anfragen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>From Micro to Orbit</span>'+
   '<h2 class="txt" id="mani">Von miniaturisierten Pumpen und Ventilen für <span class="nw">Analyse-, Diagnose-</span> <span class="nw">und Mikrofluidiksysteme</span> <span class="nw">bis zu Ventilen</span> <span class="nw">für Satellitenantriebe:</span> <span class="nw">Fluidik <em>from Micro</em></span> <em class="nw">to Orbit.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1994</span><p class="k">gegründet, seither Spezialist für Fluidtechnik, mit Sitz in Friedrichsdorf</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">ISO 9001</span><p class="k">Qualitätsmanagement nach DIN EN ISO 9001:2015, mit kontinuierlichem Verbesserungsprozess</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1/8″–2″</span><p class="k">Anschlussgrößen der Industrie-Magnetventile, vom Mikroventil bis zum Anlagenbau</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Das Magnetventil</span><h2 class="d3">Wie ein Ventil <em class="nw">schaltet.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Geschlossen</span><span>Geöffnet</span><span>Angepasst</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Stromlos <span class="nw">geschlossen.</span></h2><p>Im Ruhezustand drückt eine Feder den Anker mit seiner Dichtung auf den Ventilsitz: Der Durchgang ist dicht. 2/2-Wege-Ventile gibt es in normal geschlossener und normal offener Ausführung.</p></article>'+
     '<article class="step"><h2>Die Spule <span class="nw">zieht an.</span></h2><p>Fließt Strom durch die Spule, baut sich ein Magnetfeld auf und hebt den Anker gegen die Feder an. Der Sitz öffnet, das Medium strömt. Ohne Strom schließt die Feder das Ventil wieder.</p></article>'+
     '<article class="step"><h2>Auf Maß <span class="nw">abgestimmt.</span></h2><p>Druck, Durchfluss, Stromverbrauch, Wärmeentwicklung des Magneten, Totvolumen und Ansprechzeit lassen sich optimieren. BMT erarbeitet die Spezifikation gemeinsam mit Ihnen.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="anwendungen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Industriebereiche & Anwendungen</span><h2 class="d2 split">Wo präzise Fluidik <em class="nw">gefragt ist.</em></h2></div><p data-r>Unsere Produkte und Lösungen kommen in anspruchsvollen Anwendungen der Industrie, Analytik, Diagnostik, Medizintechnik, Forschung und Aerospace zum Einsatz.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Anwendungsgebiete unserer Kunden</span><p class="cr" data-r><span>Chromatographie</span><span>Autosampling</span><span>Blutdiagnostik</span><span>Infusion</span><span>Beatmung</span><span>Biotechnologie</span><span>Pharmazeutik</span><span>Life Sciences</span><span>Umweltanalytik</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split">Schalten, regeln, <em class="nw">dosieren, fördern.</em></h2></div><p data-r>Komponenten für neutrale Gase ebenso wie für aggressive und anspruchsvolle Flüssigkeiten, mit einem Schwerpunkt auf kompakten und miniaturisierten Fluidik-Komponenten.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Dazu</span><p class="cr" data-r><span>Sensoren</span><span>Druckregler</span><span>Manifolds & Chips</span><span>Laborpumpen</span><span>Fluidik-Systeme</span><span>Zellkultursysteme</span><span>Fittings, Schläuche und Zubehör</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Präzise Fluidik</span> <em class="nw">seit 1994.</em></h2></div><p data-r>Unser Ziel sind präzise, zuverlässige und wirtschaftliche Fluidik-Lösungen, von Industrie und Medizintechnik über Analytik und Forschung bis hin zu Aerospace. Wir begleiten Projekte von der ersten Idee über Entwicklung und Integration bis zur Serienfertigung.</p></div>'+
   '<dl class="uf">'+
    '<div data-r><dt class="lab">Geschäftsführung</dt><dd>Patrick Stamm</dd><p>Geschäftsführer der BMT Fluid Control Solutions GmbH und Ansprechpartner für die Presse.</p></div>'+
    '<div data-r><dt class="lab">Standort</dt><dd>Friedrichsdorf</dd><p>Max-Planck-Straße 16, 61381 Friedrichsdorf. Registergericht Bad Homburg v.d.H., HRB 15303.</p></div>'+
    '<div data-r><dt class="lab">Qualität</dt><dd>DIN EN ISO 9001:2015</dd><p>Ein Qualitätsmanagementsystem mit kontinuierlichem Verbesserungsprozess für Produkte und Prozesse.</p></div>'+
   '</dl>'+
   '<div class="qual"><span class="lab kick" data-r>Partner</span><p class="cr" data-r><span>Rotork Instruments Italy</span><span>Comparato Nello</span><span>Mecair · Goyen</span><span>Humphrey Products</span><span>AVS Römer</span></p></div>'+
   '<div class="qual"><span class="lab kick" data-r>Auf der Messe</span><p class="cr" data-r><a class="ul" href="https://www.medica-tradefair.com/vis/v1/en/exhibitors/compamed2026.3069211" target="_blank" rel="noopener">COMPAMED 2026, Düsseldorf</a></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="loesungen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Kundenspezifische Lösungen</span><h2 class="d2 split">Ihr Produkt, <em class="nw">auf Sie abgestimmt.</em></h2></div><p data-r>Das Sortiment umfasst einige tausend Variationen, und die kundenspezifische Anpassung ist eine der größten Stärken unserer Lieferanten. Gemeinsam mit Ihnen erarbeiten wir die Spezifikation. Diese Anpassungen und Entwicklungen sind für Sie kostenfrei.</p></div>'+
   steps()+
   '<div class="bk"><span class="lab kick" data-r>Optimierbar</span><p class="cr" data-r><span>Druck</span><span>Durchfluss</span><span>Förderrate</span><span>Stromverbrauch</span><span>Wärmeentwicklung des Magneten</span><span>Totvolumen</span><span>Pumping-Effekt</span><span>Ansprechzeit</span></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Sprechen wir</span> <span class="nw">über <em>Ihr Projekt.</em></span></h2>'+
   '<p class="sub" data-r>Für Anfragen, Angebote und Beratung zu Pumpen, Ventilen und Fluidik-Lösungen erreichen Sie uns direkt in Friedrichsdorf.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>BMT Fluid Control Solutions GmbH<br>Max-Planck-Straße 16<br>61381 Friedrichsdorf</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Kataloge</span><p data-r><a class="ul" href="'+BI+'kataloge-produktdaten/" target="_blank" rel="noopener">Kataloge und Produktdaten</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>BMT Fluid Control Solutions GmbH<br>Max-Planck-Straße 16, 61381 Friedrichsdorf</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/loesungen">Lösungen</a><br><a class="ul" href="#/anwendungen">Anwendungen</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Produkte</span>Ventile · Miniaturpumpen<br>Mikrofluidik<br>Industrie · Aerospace</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Saira\',Arial,sans-serif;font-style:italic;font-weight:800;font-size:60px;letter-spacing:.06em">BMT FLUID CONTROL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 BMT Fluid Control Solutions GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",prinzip:"story",anwendungen:"anwendungen",produkte:"produkte",unternehmen:"unternehmen",loesungen:"loesungen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"BMT Fluid Control Solutions — Pumpen, Ventile und Fluidik-Lösungen, Friedrichsdorf",x:"Start"};
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
