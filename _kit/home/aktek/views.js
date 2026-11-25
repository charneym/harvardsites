/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
var UP=AK+"/wp-content/uploads/";
function tech(){return '<ul class="pfr tch">'+TECH.map(function(c,i){
  return '<li><span class="lab tg"><b>0'+(i+1)+'</b><i>'+esc(c[0])+'</i></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function photos(){return '<div class="akph">'+PHOTOS.map(function(p){
  return '<figure data-r><div class="fr"><img src="'+p[0]+'" alt="'+esc(p[2])+'" width="'+p[3]+'" height="'+p[4]+'" loading="lazy" decoding="async"></div><figcaption><span class="lab">'+esc(p[1])+'</span>'+esc(p[2])+'</figcaption></figure>'}).join("")+'</div>'}
function prods(){return '<div class="caps aksk">'+PRODS.map(function(c){
  return '<div class="cap"><div class="skf" data-r><img src="'+c[1]+'" alt="Skizze: '+esc(c[0])+'" width="640" height="640" loading="lazy" decoding="async"></div><h3 data-r>'+esc(c[0])+'</h3><ul class="skl" data-r>'+c[2].map(function(x){return '<li>'+esc(x)+'</li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh akmh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function phases(){var P=[["Verifizierung","Ihre Produkt-Idee, vertraulich geprüft."],["Entwicklung","CAD-Konstruktion und Finite-Elemente-Berechnung."],["Validierung","Fatigue-Test und Prüf- und Messverfahren."],["Fertigung","Von der Einzel- bis zur Serienfertigung."],["Dokumentation","Für Medizinprodukte und ihre Zulassungen."]];
  return '<ol class="phz">'+P.map(function(p,i){return '<li data-r><span class="lab">0'+(i+1)+'</span><h3>'+p[0]+'</h3><p>'+p[1]+'</p></li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Medizintechnik<span class="nomob"> · Hagen</span> · über drei Jahrzehnte</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Präzision für das,</span> <span class="l"><em>was dem Körper</em></span> <span class="l"><em>verloren ging.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>A.K. TEK entwickelt und fertigt Zahnimplantat-Systeme, Klein-Implantate für die Wirbelsäulen- und Handchirurgie und Miniaturwerkzeuge: von der Zeichnung bis zum fertigen Produkt.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/kompetenz">Unsere Kompetenz '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt aufnehmen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Wir folgen der Formel Natur</span>'+
   '<h2 class="txt" id="mani">Unser „täglich Brot“ ist das Übersetzen von Naturphänomenen. Wir analysieren Kräfte, wie sie beim Kauen <span class="nw">im Kiefer wirken,</span> <em><span class="nw">und machen daraus</span> <span class="nw">technisch hochpräzise,</span> <span class="nw">sehr kleine Produkte.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+</span><p class="k">Jahre Forschergeist in der Medizintechnik, als Familienunternehmen</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">ISO 7</span><p class="k">Reinraumklasse für Reinigung, Montage und Verpackung, EU-GMP Grade C</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Fachgebiete: dentale Implantologie, Wirbelsäulen- und Handchirurgie</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Aus einer Hand</span><h2 class="d3"><span class="nw">Von der Zeichnung</span> <em class="nw">zum Implantat.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Entwicklung</span><span>Fertigung</span><span>Prüfung</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Erst gerechnet, dann gebaut.</h2><p>Die Kräfte, die beim Kauen auf ein Implantat wirken, übersetzt A.K. TEK mit der Finite-Elemente-Methode in Geometrie, konstruiert in Siemens NX und abgesichert im Fatigue-Test.</p></article>'+
     '<article class="step"><h2>Gedreht, gefräst, veredelt.</h2><p>Präzisionsdrehen, Fräsen und Dreh-Fräsen formen Gewinde und Verbindungsgeometrie. Strahlen, Ätzen oder Anodisieren geben der Oberfläche, was die Fusion von Knochen und Implantat fördert.</p></article>'+
     '<article class="step"><h2><span class="nw">Gemessen, gereinigt</span> <span class="nw">und verpackt.</span></h2><p>3D- und optische Messmaschinen prüfen die Maße, die Rauheitsmessung die Oberfläche. Reinigung, Montage und Verpackung laufen im Reinraum der ISO Klasse 7.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="kompetenz" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Kernkompetenz</span><h2 class="d2 split"><span class="nw">Vom Kundenwunsch</span> <em class="nw">zur High-End-Lösung.</em></h2></div><p data-r>A.K. TEK Medizintechnik verbindet Entwicklungs-Kompetenz mit High-End-Fertigungstechnik, intelligenter Oberflächentechnik und kontinuierlicher Qualitätssicherung, von der Einzel- bis zur Serienfertigung.</p></div>'+
   phases()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Diskretion</span><h3 data-r>Geheimhaltung zuerst</h3><p data-r>Ob Produkt-Idee oder Herstellungsprozess: Geheimhaltung und Qualität stehen ganz oben auf der Werteskala des Unternehmens.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Service</span><h3 data-r>Ideen und Handskizzen</h3><p data-r>Schicken Sie uns Ihre Ideen und Handskizzen. A.K. TEK diskutiert sie persönlich mit Ihnen und unterstützt Ihre Produktentwicklung technologisch.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Erfahrung</span><h3 data-r>Bewegung verstanden</h3><p data-r>Kinematik und Funktion des menschlichen Bewegungsapparates, mit Finite-Elemente-Berechnung und Fatigue-Test fundiert in technische Lösungen übersetzt.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="technologien" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technologien &amp; Verfahren</span><h2 class="d2 split"><span class="nw">Unsere Vielfalt,</span> <em class="nw">Ihr Vorteil.</em></h2></div><p data-r>Ein umfangreiches Portfolio von Technologien, Oberflächentechnik und Verfahren, bei A.K. TEK Medizintechnik in Hagen.</p></div>'+
   photos()+
   tech()+
   '<div class="bk"><span class="lab kick" data-r>Übersicht</span><p class="cr" data-r><a class="ul" href="'+UP+'2023/10/AKTEK-Technologien-Verfahren.pdf" target="_blank" rel="noopener">Technologien &amp; Verfahren (PDF)</a><a class="ul" href="'+UP+'2024/07/leistungsspektrum-AKTEK-diagramm_de.pdf" target="_blank" rel="noopener">Leistungsspektrum (PDF)</a></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="produkte" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split"><span class="nw">Die Natur</span> <em class="nw">als Vorbild.</em></h2></div><p data-r>Produktionsreife Lösungen für minimal-invasive und mikrochirurgische Eingriffe, individuell für jeden Kunden gefertigt. Aus Gründen der Diskretion zeigt A.K. TEK seine Produkte nur als Skizze.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec dark" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Familiär geführt,</span> <em class="nw">ein gutes Team.</em></h2></div><p data-r>Mehrfach qualifizierte Fachleute, Techniker und Meister für Medizinprodukte, gestalten den kompletten Herstellungsprozess, in enger Zusammenarbeit mit Implantologen, Kliniken und Instituten.</p></div>'+
   team()+
   '<ul class="nws">'+
    '<li><a href="https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3083705" target="_blank" rel="noopener"><span class="lab dt">16.–19. Nov. 2026</span><h3>MEDICA 2026, Düsseldorf: Halle 3, Stand C80</h3><span class="lab src">MEDICA '+ARR+'</span></a></li>'+
    '<li><a href="'+UP+'2024/07/Zertifikat-QS-ISO-13485-Medizintechnik.pdf" target="_blank" rel="noopener"><span class="lab dt">Zertifikate</span><h3>Qualitätsmanagement nach DIN EN ISO 13485, für Medizintechnik und Reinraum</h3><span class="lab src">PDF '+ARR+'</span></a></li>'+
    '<li><a href="'+AK+'/jobs/" target="_blank" rel="noopener"><span class="lab dt">Jobs</span><h3>Zerspanungsmechaniker (m/w/d) für Dreh- und Frästechnik</h3><span class="lab src">Stellen '+ARR+'</span></a></li>'+
   '</ul>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Gerne persönlich</span> <em class="nw">für Sie da.</em></h2>'+
   '<p class="sub" data-r>Sprechen Sie mit uns über Ihre Idee: über Finite-Elemente-Berechnung, Verfahren, Oberflächen, Verbindungsgeometrien, Miniaturwerkzeuge, Reinraumtechnik oder Verpackungsentwicklung.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>A.K. TEK GmbH Medizintechnik<br>Röhrenspring 16<br>58093 Hagen</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Bewerbungen</span><p data-r><a class="ul" href="mailto:'+JOBS+'">'+JOBS+'</a><br>Initiativbewerbungen willkommen</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>A.K. TEK GmbH Medizintechnik<br>Röhrenspring 16, 58093 Hagen</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/kompetenz">Kompetenz</a><br><a class="ul" href="#/technologien">Technologien</a><br><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Fachgebiete</span>Dentale Implantologie<br>Wirbelsäulenchirurgie<br>Handchirurgie<br>Miniaturwerkzeuge</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:500;font-size:60px;letter-spacing:.06em">A.K. TEK</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 A.K. TEK GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",ablauf:"story",kompetenz:"kompetenz",technologien:"technologien",produkte:"produkte",unternehmen:"unternehmen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"A.K. TEK Medizintechnik — Implantat-Komponenten und Fertigung aus Hagen",x:"Start"};
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
