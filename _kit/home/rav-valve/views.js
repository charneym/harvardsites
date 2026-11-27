/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">'+"Mehr erfahren"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Geschäftsführung</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* Sicherheit und Technik (rav-valve.com > Sicherheit und Technik, Märkte > Petrochemie) */
function caps(){var C=[
  ["Qualität","Nach internationalen Normen","Gefertigt unter einem Qualitätssicherungs-System nach DIN EN ISO 9001, API 6D, AD HP 0, GOST und TA-Luft.",'<circle cx="28" cy="28" r="17"/><path class="a" d="M20 28.5L26 34L37 22"/>'],
  ["Bauteilgeprüft","Für Gase und gefährdende Flüssigkeiten","Vom RWTÜV nach VdTÜV Merkblatt „Armatur 100“ bauteilgeprüft; die Kugelhähne erfüllen DIN 3230, Teil 5 und Teil 6.",'<path d="M8 22H18M8 34H18M38 22H48M38 34H48"/><circle cx="28" cy="28" r="10"/><path class="a" d="M18 28H38"/><circle class="f" cx="28" cy="28" r="2.2"/>'],
  ["Fire-Safe","Dicht auch über +650 °C","Im Notfall übernehmen metallische Dichtungssitze, ergänzt durch hitzebeständige Dichtungswerkstoffe, die Notabdichtung. Nach BS 6755 und API 6FA.",'<path d="M28 10C33 18 38 22 38 31A10 10 0 0 1 18 31C18 24 23 21 24 15C26 19 27 21 28 22Z"/><path class="a" d="M14 46H42"/>'],
  ["Schweißen","Verfahrensgeprüft","Schweißverfahrensprüfungen nach DIN EN ISO 3834 und AD-HP 2/1 (TÜV); Zulassungen unter anderem nach DIN-DVGW, SVGW, ATEX und BAM.",'<path d="M10 38H46"/><path class="a" d="M14 38C18 32 22 32 26 38C30 32 34 32 38 38C40 35 42 34 44 34"/><circle class="f" cx="28" cy="20" r="2.2"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-photo.jpg" width="626" height="272" alt="Gelbe RAV-Kugelhähne mit Handrad in der Werkshalle in Hattingen" decoding="async" fetchpriority="high"><figcaption>Kugelhähne für die Gasindustrie, in der Werkshalle in Hattingen</figcaption></figure></div>'+
   '<span class="lab eyebrow" data-r>Kugelhähne und Industriearmaturen<span class="nomob"> · Hattingen</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Präzise Kugelhähne,</span> <span class="l"><em class="nw">weltweit im Einsatz.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>RAV Armaturen fertigt in Hattingen Armaturen für sicherheitsrelevante Industrieanlagen und außerordentlich präzise Kugelhähne: für die Petrochemie, die Gasindustrie und den Pipelinebau.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Unsere Produkte '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Hattingen, weltweit</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Technisches Know-how,</span> <span class="nw">namhafte Lieferanten</span> <span class="nw">und anspruchsvolle Kunden</span> <span class="nw">machen uns zum Partner</span> <span class="nw">der Industrie. <em>Weltweit.</em></span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">DN 1400</span><p class="k">Nennweiten von DN 15 bis 1400 mm, ½ bis 56 Zoll; größere auf Anfrage</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">PN 420</span><p class="k">Druckstufen ab PN 10, nach ANSI Class 150 bis 2500</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">650 °C</span><p class="k">und mehr: Fire-Safe Kugelhähne bleiben im Notfall auch dann funktionssicher</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Vollverschweißter Kugelhahn</span><h2 class="d3"><span class="nw">Eine Vierteldrehung,</span> <em class="nw">sicher abgesperrt.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Offen</span><span>Drehen</span><span>Dichten</span><span>Fire-Safe</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Voller Durchgang</span> <span class="nw">für das Medium.</span></h2><p>In Offenstellung fluchtet die Bohrung der zapfengelagerten Kugel mit der Leitung. RAV Kugelhähne gibt es mit vollem oder reduziertem Durchgang, mit Flansch-, Anschweißende oder Gewinde.</p></article>'+
     '<article class="step"><h2><span class="nw">Eine Vierteldrehung</span> <span class="nw">sperrt ab.</span></h2><p>Über die ausblassichere Schaltwelle dreht die Kugel um 90 Grad. Für den automatisierten Transport sind hydraulische, pneumatische oder elektrische Antriebe verfügbar.</p></article>'+
     '<article class="step"><h2><span class="nw">Angefederte Sitzringe</span> <span class="nw">dichten ab.</span></h2><p>Weich dichtend, primär metallisch und sekundär weich dichtend oder rein metallisch dichtend; auf Wunsch als „Double Block and Bleed“-Ausführung.</p></article>'+
     '<article class="step"><h2><span class="nw">Dicht,</span> <span class="nw">auch im Feuer.</span></h2><p>Bei Temperaturen über +650 °C übernehmen metallische Dichtungssitze, ergänzt durch hitzebeständige Dichtungswerkstoffe, die Notabdichtung. Geprüft von unabhängigen Instituten.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split"><span class="nw">Vom Kugelhahn</span> <em class="nw">bis zur Turbine.</em></h2></div><p data-r>Speziell entwickelte und außerordentlich präzise gefertigte Produkte für sicherheitsrelevante Industrieanlagen: einige Beispiele aus dem umfangreichen RAV-Programm.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="technik" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Sicherheit und Technik</span><h2 class="d2 split"><span class="nw">Geprüfte Sicherheit,</span> <em class="nw">auch über 650 °C.</em></h2></div><p data-r>Qualität, Zuverlässigkeit und ein hohes Maß an Sicherheit: RAV Kugelhähne erfüllen die Anforderungen internationaler Normen und Zulassungen.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="maerkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Märkte und Einsatzbereiche</span><h2 class="d2 split"><span class="nw">Bewährt, ob kalt</span> <em class="nw">oder extrem warm.</em></h2></div><p data-r>Spezialanfertigungen für extreme Anforderungen, bauteilgeprüfte Kugelhähne für Gase und gefährdende Flüssigkeiten und zertifizierte Fire-Safe Ausführungen sind weltweit im Einsatz.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Im Einsatz in</span><dl>'+
    '<div data-r><dt class="lab">Gasindustrie</dt><dd>Vollverschweißte Fire-Safe Kugelhähne, international zertifiziert, für Förderung und Verarbeitung von Erdgas</dd></div>'+
    '<div data-r><dt class="lab">Pipelinebau</dt><dd>Kugelhähne für Öl-, Gas- und Produkt-Pipelines, Verdichter-, Mess-, Regel- und Molchstationen</dd></div>'+
    '<div data-r><dt class="lab">Fernwärme</dt><dd>Redundante Abdichtung der Schaltwelle, geeignet für Kaltverlegung und kompensationslose Erdflachverlegung</dd></div>'+
    '<div data-r><dt class="lab">Petrochemie</dt><dd>Mehrfach zertifizierte Kugelhahn-Technologie für Anlagen- und Rohrleitungssysteme</dd></div>'+
    '<div data-r><dt class="lab">Ethylen, Propylen</dt><dd>Entwickelt mit internationalen Betreibern von Ethylen- und Propylenpipelines</dd></div>'+
    '<div data-r><dt class="lab">Offshore</dt><dd>On- und Offshore-Plattformen, Schiffsbau, Gas-Speicher, Flüssiggas und Kraftwerke</dd></div>'+
   '</dl></div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Das Unternehmen</span><h2 class="d2 split"><span class="nw">Bewährte Systeme,</span> <em class="nw">auf Maß gebaut.</em></h2></div><p data-r>Die moderne Armaturentechnologie für Industrieanlagen ist ein Wirtschaftszweig voller Innovation und Dynamik. Bewährte Systemlösungen und anlagenspezifische Sonderanfertigungen sind die Basis unserer Geschäftsentwicklung.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>Konstruktionsmerkmale</span><ul>'+
     '<li data-r><b>Vollverschweißte Gehäuse</b>Äußerst zuverlässig und wartungsfrei, besonders für geschlossene Rohrleitungssysteme.</li>'+
     '<li data-r><b>Zapfengelagerte Kugel</b>Mit wartungsfreien Lagern und ausblassicherer Schaltwelle.</li>'+
     '<li data-r><b>Austauschbare Abdichtungen</b>Schaltwellen-Abdichtungen tauschbar unter vollem Druck, in Offen- und Geschlossenstellung.</li>'+
     '<li data-r><b>Notabdichtung</b>Optional mit Dichtmitteleinspritzung, Schaltwellenverlängerung und hochgezogenen Leitungen.</li>'+
    '</ul></div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Zulassungen und Normen</span><p class="cr" data-r><span>DIN EN ISO 9001</span><span>API 6D / 6DSS</span><span>AD HP 0 (TÜV)</span><span>DIN-DVGW</span><span>SVGW</span><span>EN 13774</span><span>EN 14141</span><span>ATEX</span><span>NACE</span><span>BAM</span><span>TA-Luft</span><span>GOST</span></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec dark2 cta" id="kontakt" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihre Anlage,</span> <em class="nw">unsere Armatur.</em></h2>'+
   '<p class="sub" data-r>Vollverschweißte Kugelhähne fertigen wir auch nach individuellem Kundenwunsch oder vorhandenen Konstruktionsplänen. Persönlich treffen Sie RAV auf der VALVE WORLD EXPO 2026 in Düsseldorf, 1. bis 3. Dezember, Halle 1, Stand C25.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail an RAV '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Adresse</span><p data-r><span>RAV Armaturen GmbH</span><br><span>Am Walzwerk 5</span><br><span>45527 Hattingen</span></p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Anreise</span><p data-r><span>Flughafen Essen/Mülheim 34 km</span><br><span>Dortmund 41 km</span><br><span>Düsseldorf International 50 km</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresse</span>RAV Armaturen GmbH, Am Walzwerk 5, 45527 Hattingen, Deutschland</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/technik">Technik</a><br><a class="ul" href="#/maerkte">Märkte</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Programm</span>Kugelhähne, Industrie- und Gasarmaturen, Erdgas-Entspannungsturbine</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:500;font-size:44px;letter-spacing:.2em">RAV ARMATUREN</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 RAV Armaturen GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",produkte:"produkte",technik:"technik",maerkte:"maerkte",unternehmen:"unternehmen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"RAV Armaturen — Kugelhähne und Industriearmaturen, Hattingen",x:"Start"};
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
