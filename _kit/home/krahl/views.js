/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function rows(L){return '<ul class="pfr pipe np">'+L.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+c[1].split('|').map(function(x){return '<span class="nw">'+esc(x)+'</span>'}).join(' ')+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};GROUP.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* quality (krahl.de > Unternehmen > Qualität) */
function caps(){var C=[
  ["DIN EN ISO 9001","Zertifiziert seit 1996","Seit 2018 nach DIN EN ISO 9001:2015, bestätigt durch den TÜV Süd.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M19 28.5l6 6 12-13"/>'],
  ["Individuell","Auf jeden Kunden abgestimmt","Die Werkzeuge werden flexibel nach den Wünschen jedes Kunden hergestellt, so dass sie einen effektiven Einsatz gewährleisten.",'<path d="M10 44L28 12L46 44Z"/><path class="a" d="M19 44H37"/><circle class="f" cx="28" cy="31" r="2.4"/>'],
  ["Aus einem Haus","Von Anfang bis Ende","Formen und Werkzeuge entstehen bei Spezialisten im eigenen Haus. Das sichert Unabhängigkeit, Einfluss auf die Herstellung und eine kurze Lieferzeit.",'<path d="M8 46V24L28 10L48 24V46Z"/><path class="a" d="M22 46V32H34V46"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3><span class="nw">'+esc(c[1])+'</span></h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* technologies and equipment (krahl.de > Leistungen > Technologien), grouped by process */
function mats(){var M=[["Spanen","Drehen"],["Spanen","Fräsen, 5 Achsen"],["Schleifen","Flachschleifen"],["Schleifen","Strömungs|schleifen"],
  ["Erodieren","Senkerodieren"],["Erodieren","Drahterodieren"],["Schweißen","WIG-Schweißen"],["Schweißen","Plasma-Pulver-|Schweißen"],
  ["Beschichten","Metallpulver|spritzen"],["Additiv","3D-Druck, verschiedene Kunststoffe"],["Messen","3D-Mess|maschine"],["Digital","3D-Scan und Reverse Engineering"]];
  return '<ul class="kmat ktec">'+M.map(function(m){return '<li><span class="lab">'+esc(m[0])+'</span><b>'+m[1].split('|').map(esc).join('\u00AD')+'</b></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Modell- und Formenbau<span class="nomob"> · Krauschwitz</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Wir bringen</span> <span class="l acc">Ihre Idee in Form.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Modelle, Formenwerkzeuge und Vorrichtungen für manuelle und maschinelle Fertigungsverfahren, darunter Formen für die Glasfertigung. Seit 1992 aus Krauschwitz in Sachsen.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/leistungen">Zu den Leistungen '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Das Besondere ist unsere Stärke</span>'+
   '<h2 class="txt" id="mani"><em>Moderne CNC-Fertigung</em> <span class="nw">und das handwerkliche</span> <span class="nw">Können der Mitarbeiter,</span> <span class="nw">für Formenwerkzeuge,</span> <span class="nw">die pünktlich kommen.</span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1992</span><p class="k">gegründet von Ekkehart Krahl, Meister des Modellbauerhandwerks</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1996</span><p class="k">zertifiziert nach DIN EN ISO 9001, seit 2018 nach DIN EN ISO 9001:2015</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><p class="k">Achsen: CNC-Fräsen neben Drehen, Erodieren und Schleifen im eigenen Haus</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Vom Modell zur Form</span><h2 class="d3"><span class="nw">Erst das Modell,</span> <em class="nw">dann die Form.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Modell</span><span>Guss</span><span>Form</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Das Modell</span> <span class="nw">aus Holz.</span></h2><p>Nach Skizze oder CAD-Daten entsteht im eigenen Modellbau das Gießereimodell aus Holz oder Kunststoff, CNC-gefräst und von Hand vollendet.</p></article>'+
     '<article class="step"><h2><span class="nw">Der Guss</span> <span class="nw">in Eisen.</span></h2><p>Mit dem Modell wird das Gussstück hergestellt: der Rohling der späteren Glasform. Der eigene Modellbau sichert einen schnellen und unkomplizierten Einkauf von Gussstücken.</p></article>'+
     '<article class="step"><h2><span class="nw">Die Form</span> <span class="nw">für das Glas.</span></h2><p>Gedreht, gefräst und erodiert wird aus dem Rohling die fertige Form, CNC und konventionell bearbeitet, für die manuelle und maschinelle Glasfertigung.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="leistungen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Leistungen</span><h2 class="d2 split"><span class="nw">Modelle, Formen</span> <em class="nw">und Vorrichtungen.</em></h2></div><p data-r>Zum Fertigungsprogramm gehören Modelle, Formenwerkzeuge und Vorrichtungen für manuelle und maschinelle Fertigungsverfahren. Egal ob von Skizze oder CAD-Daten.</p></div>'+
   rows(PRODS)+
   '<div class="bk"><span class="lab kick" data-r>Werkstoffe</span><p class="cr" data-r><span>Gusseisen</span><span>Aluminium</span><span>Edelstahl</span><span>Kohlenstoff</span><span>Kunststoff</span><span>Holz</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="qualitaet" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Qualität</span><h2 class="d2 split"><span class="nw">Die Kraft steckt</span> <em class="nw">in der Qualität.</em></h2></div><p data-r>Qualifizierte Mitarbeiter fertigen die Werkzeuge mit großem handwerklichem Können, von Anfang bis Ende im eigenen Haus.</p></div>'+
   caps()+
   '<div class="bk"><span class="lab kick" data-r>Zertifikat</span><p class="cr" data-r><span>TÜV Süd, DIN EN ISO 9001:2015</span><a class="ul" href="'+DG+'app/download/32237087/7415ms_de.pdf" target="_blank" rel="noopener">Zertifikat (deutsch, PDF)</a><a class="ul" href="'+DG+'app/download/32237101/7415ms_en.pdf" target="_blank" rel="noopener">Certificate (English, PDF)</a></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="technologien" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technologien</span><h2 class="d2 split"><span class="nw">Der Maschinenpark</span> <em class="nw">im eigenen Haus.</em></h2></div><p data-r>Umfangreiche Investitionen in moderne CNC-gesteuerte Fertigungsverfahren und umfangreiche Möglichkeiten der Bearbeitung, CNC und konventionell, garantieren eine flexible und vielseitige Formenherstellung.</p></div>'+
   mats()+
  '</div></section>'+

  '<section class="sec dark2" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Unsere Erfahrung</span> <em class="nw">ist Ihr Vorteil.</em></h2></div><p data-r>1992 gründete Ekkehart Krahl, Meister des Modellbauerhandwerks, den Modell- und Formenbau E. Krahl. Das Unternehmen entwickelte sich schnell zu einem mittelständischen Zulieferer der Industrie.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Aktuelles</span><div class="bkl"><p class="cr" data-r><span>glasstec 2026, Düsseldorf</span><span>Halle 13, Stand 13A39</span><a class="ul" href="https://www.glasstec-online.com/vis/v1/en/exhibitors/glasstec2026.3063648" target="_blank" rel="noopener">Im Ausstellerverzeichnis</a></p>'+
   '<p class="cr" data-r><span>Ausbildung bei Krahl</span><span>Technische Modellbauer/innen, Gießerei</span><span>Kaufleute für Büromanagement</span><a class="ul" href="'+DG+'deutsch/ausbildung-job/" target="_blank" rel="noopener">Ausbildung und Jobs</a></p></div></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Sprechen wir</span> <em class="nw">über Ihre Form.</em></h2>'+
   '<p class="sub" data-r>Ob Skizze, Muster oder CAD-Daten: Ekkehart Krahl und Susann Sprejz beantworten Ihre Anfrage direkt aus Krauschwitz.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>Modell- und Formenbau E. Krahl<br>Mühlenstraße 40<br>02957 Krauschwitz</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Öffnungszeiten</span><p data-r>Montag bis Donnerstag 6–16 Uhr<br>Freitag 6–13 Uhr</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>Modell- und Formenbau E. Krahl<br>Mühlenstraße 40, 02957 Krauschwitz</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/leistungen">Leistungen</a><br><a class="ul" href="#/technologien">Technologien</a><br><a class="ul" href="#/qualitaet">Qualität</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Register</span>Inhaber: Ekkehart Krahl<br>USt-IdNr. DE 140 786 435</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="54" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:500;font-style:italic;font-size:64px;letter-spacing:.3em">KRAHL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Modell- und Formenbau E. Krahl</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",fertigung:"story",leistungen:"leistungen",qualitaet:"qualitaet",technologien:"technologien",unternehmen:"unternehmen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Krahl — Modell- und Formenbau in Krauschwitz",x:"Start"};
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
