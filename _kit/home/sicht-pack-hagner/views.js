/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Mehr '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Medizin & Pharma","Blister, sterilisierbar","Für Primär- und Sekundärverpackungen auf Form-, Füll- und Schließanlagen und konventionellen Tiefziehanlagen. Die Folien sind ETO- und Gamma-sterilisierbar.",'<rect x="8" y="14" width="40" height="28"/><circle class="a" cx="18" cy="23" r="4"/><circle class="a" cx="28" cy="23" r="4"/><circle class="a" cx="38" cy="23" r="4"/><circle cx="18" cy="34" r="4"/><circle cx="28" cy="34" r="4"/><circle class="f" cx="38" cy="34" r="2.2"/>'],
  ["Lebensmittel","Siegeln, peelen, schützen","Folienverbunde mit PE erhalten Siegel-, Peel- und Barriereeigenschaften. Hergestellt nach FSSC 22000 und BRCGS, unter hygienisch einwandfreien Bedingungen.",'<path d="M8 22H48L44 42H12Z"/><path class="a" d="M6 22H50"/><path d="M16 22V16H40V22"/><circle class="f" cx="28" cy="32" r="2.2"/>'],
  ["Klarsichtverpackungen","Das Produkt im Vordergrund","Für Faltschachteln, Runddosen und andere Klarsichtverpackungen: transparent, standfest und gut bedruckbar.",'<path d="M14 18L28 10L42 18V40L28 48L14 40Z"/><path class="a" d="M14 18L28 26L42 18"/><path d="M28 26V48"/><circle class="f" cx="28" cy="26" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="934" height="690" alt="Eine Rolle klarer PET-Folie Polylux auf einem Kartonkern, Blick auf die Stirnseite mit den Folienlagen" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>HAGNER PET-Folien Polylux®<span class="nomob"> · Dornstetten</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Nicht die Verpackung.</span></span> <span class="l"><span class="nw">Ihr Produkt.</span></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>sicht-pack HAGNER extrudiert, kaschiert und konfektioniert in Dornstetten PET-Hartfolien für Tiefzieh- und Verpackungsanwendungen, in Rollen und Formaten.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Zu den Produkten '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Seit 1961 in Familienhand</span>'+
   '<h2 class="txt" id="mani"><span class="nw">sicht-pack HAGNER gehört</span> <span class="nw">zu den bedeutendsten</span> <span class="nw">europäischen Herstellern</span> <span class="nw">von <em>Klarsichtfolien</em></span> <em><span class="nw">aus Polyester.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1961</span><p class="k">gegründet von Hans und Margarete Hagner, heute geführt von Heinrich Hagner</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><p class="k">Extrusionsanlagen mit unterschiedlichen Nennleistungen und Fertigungsmöglichkeiten</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100.000 t</span><p class="k">und mehr Jahreskapazität an PET-Folien und -Verbunden</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Folienherstellung</span><h2 class="d3">Vom Granulat <em>zur Rolle.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Extrusion</span><span>Kaschieren</span><span>Konfektion</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>In drei Schichten extrudiert.</h2><p>Aus chargenrein vorgehaltenem PET-Rohstoff entstehen auf fünf Extrusionsanlagen 3-Schicht-Co-Extrusionsfolien: A-PET, G/A/G oder G-PET.</p></article>'+
     '<article class="step"><h2>Veredelt zum Verbund.</h2><p>Auf Kaschieranlagen wird PE-Folie mit einem lösemittelfreien 2-Komponenten-Kleber aufgebracht: für Siegel- und Peelfähigkeit und, mit EVOH, für eine höhere Barriere.</p></article>'+
     '<article class="step"><h2>Auf Maß geschnitten.</h2><p>Vollautomatische Anlagen schneiden die Folien und Verbunde in die Breiten und Durchmesser, die Ihre Verpackungsvorschrift verlangt, und verpacken die Rollen für den Versand.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="maerkte" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Märkte</span><h2 class="d2 split">Überall, wo <em>Klarheit zählt.</em></h2></div><p data-r>HAGNER PET-Folien Polylux® sind gefragt, wo Umweltverträglichkeit, Transparenz, Standfestigkeit, gute Barriere und Bedruckbarkeit gefordert sind. Gute Laufeigenschaften und hohe Taktzahlen machen die Verarbeitung wirtschaftlich.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split">PET-Folien <em>Polylux®.</em></h2></div><p data-r>Hartfolien aus Originalrohstoff als 3-Schicht-Co-Extrusion und lösemittelfrei kaschierte Verbundfolien, in Rollen und Formaten. Dazu Folien mit Recyclinganteil (R-PET) und Bio-PET.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>PET</span><p class="cr" data-r><span>Recyclingfähig</span><span>Ohne schädliche Rückstände bei der Verbrennung</span><span>ETO- und Gamma-sterilisierbar</span><span>Für FFS-Linien und Tiefziehanlagen</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split">Ein Familienname <em>seit 1961.</em></h2></div><p data-r>Aus einer Firma für Klarsichtverpackungen in angemieteten Räumen wurde ein Spezialist für PET-Hartfolien. Geführt wird das Unternehmen von Heinrich Hagner, dem Sohn der Gründer.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="qualitaet" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produktsicherheit</span><h2 class="d2 split"><span class="nw">Geprüfte Qualität,</span> <em><span class="nw">lückenlos verfolgt.</span></em></h2></div><p data-r>Ein Team aus Produktion, Planung, Administration, Qualität, Energie, Hygiene und Arbeitsschutz führt das Unternehmen, geprüft durch zehn Zertifizierungen. Good Manufacturing Practice ist die Basis der Produktion.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Prüfen und verfolgen</span><dl>'+
    '<div data-r><dt class="lab">Inspektion</dt><dd>Optisches Bahninspektionssystem und externe Produktprüfungen</dd></div>'+
    '<div data-r><dt class="lab">Rückverfolgbarkeit</dt><dd>Digital und lückenlos, mit digitaler Rollendatenerfassung (RDH)</dd></div>'+
    '<div data-r><dt class="lab">Rohstoff</dt><dd>Chargenreine Vorhaltung, permanente digitale Inventur über Wiegezellen</dd></div>'+
    '<div data-r><dt class="lab">Daten</dt><dd>SAP-gestützt, eigene IT-Abteilung, VMI und EDI mit Kunden</dd></div>'+
   '</dl></div>'+
   '<div class="bk"><span class="lab kick" data-r>Zertifiziert</span><p class="cr" data-r><span>ISO 9001</span><span>FSSC 22000</span><span>BRCGS</span><span>SA 8000</span><span>ISO 45001</span><span>ISO 50001</span><span>ISO 14001</span><span>IFS Logistik</span><span>SAM</span><span>AEO</span></p></div>'+
   '<div class="bk"><span class="lab kick" data-r>Auf der Messe</span><p class="cr" data-r><a class="ul" href="https://www.interpack.com/vis/v1/en/exhibitors/interpack2026.3007664" target="_blank" rel="noopener">interpack 2026, Düsseldorf</a></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split">Wir sind <em>für Sie da.</em></h2>'+
   '<p class="sub" data-r>Von der Projektphase und Verpackungsberatung über die Bemusterung bis zur Belieferung: Für Anfragen und Muster erreichen Sie uns direkt in Dornstetten.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>sicht-pack HAGNER GmbH<br>Musbacher Str. 21–23<br>72280 Dornstetten</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Geschäftsführer</span><p data-r>Heinrich Hagner</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>sicht-pack HAGNER GmbH<br>Musbacher Str. 21–23, 72280 Dornstetten</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/maerkte">Märkte</a><br><a class="ul" href="#/qualitaet">Qualität</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Produkte</span>PET-Folien Polylux® und Folienverbunde, in Rollen und Formaten</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 80" aria-hidden="true"><text x="652" y="64" text-anchor="end" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:900;font-style:italic;font-size:76px;letter-spacing:.02em">HAGNER</text><path d="M676 22h56l-10 42h-56z" fill="#d6ecee"/></svg>'+
  '<div class="legal"><span class="lab">© 2026 sicht-pack HAGNER GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",prozess:"story",produkte:"produkte",maerkte:"maerkte",qualitaet:"qualitaet",unternehmen:"unternehmen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"sicht-pack HAGNER — PET-Folien Polylux® aus Dornstetten",x:"Start"};
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
