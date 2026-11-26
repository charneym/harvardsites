/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Zum Analyser '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* quality (dr-mueller-geraetebau.de > Qualität, product pages), each with a small line icon */
var ICO={
 i:'<svg viewBox="0 0 56 56"><path d="M12 6H38L46 14V50H12Z"/><path d="M38 6V14H46"/><path class="a" d="M20 30L26 36L38 22"/><path d="M20 44H38"/></svg>',
 k:'<svg viewBox="0 0 56 56"><path d="M8 44H48"/><path class="a" d="M8 28H48"/><path d="M8 18H48M8 38H48"/><path class="a" d="M14 30L22 26L30 29L38 25L46 28"/></svg>',
 p:'<svg viewBox="0 0 56 56"><path d="M22 6V22L10 46H46L34 22V6"/><path d="M18 6H38"/><path class="a" d="M15 36H41"/></svg>',
 v:'<svg viewBox="0 0 56 56"><path d="M8 10H48V46H8Z"/><path d="M8 20H48"/><path class="a" d="M16 29H30M16 37H40"/><path d="M38 29H40"/></svg>'};
var QUAL=[
 ["i","EN ISO 13485:2016","Zertifiziert seit 1998","Ein zertifiziertes Qualitätsmanagementsystem, anfangs nach EN ISO 9001 und EN 46001, heute nach EN ISO 13485:2016."],
 ["k","Richtlinie der Bundesärztekammer","Kontrollen nach RiLiBÄK","Die Auswertung der Kontrollen ist in die Software integriert: auf dem Touchscreen, als Ausdruck oder direkt an die EDV."],
 ["p","IFCC-Empfehlung","Plasmabezogene Glukose","Die Ausgabe plasmabezogener Glukosemesswerte nach der IFCC-Empfehlung ist in unseren Analysern bereits realisiert."],
 ["v","Richtlinie 98/79/EG","In-vitro-Diagnostikum","Geräte und Verbrauchsmaterial sind als In-vitro-Diagnostika eingeordnet; die Konformitätserklärungen stehen zum Download bereit."]];
function qual(){return '<div class="caps svc">'+QUAL.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["Nov. 2026","Aussteller auf der MEDICA 2026 in Düsseldorf, Halle 3 / A86","MEDICA","https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3069829"],
 ["Zertifikat","Das Zertifikat unseres QM-Systems nach EN ISO 13485:2016","PDF",MW+"/files/documents/M-0384-24_Dr.Muller_EN.pdf"],
 ["Verbrauchsmaterial","Das Bestellformular für Sensoren, Lösungen und Kontrollen","PDF",MW+"/Downloads/FB_04_01_Externe%20Bestellung_07.pdf"],
 ["SUPER GL compact","Die Gebrauchsanweisung des SUPER GL compact","PDF",MW+"/files/documents/Anleitungen/GA_GLcompact.pdf"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Diabetesdiagnostik aus Freital<span class="nomob"> · inhabergeführt</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Unsere Leistung</span><span class="l">für Ihre <em>Analysen&shy;qualität.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Dr. Müller Gerätebau entwickelt und produziert in Freital Analysegeräte und Verbrauchsmaterial für die Diabetesdiagnostik, vom klinischen Labor bis in die Hausarztpraxis.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/analysegeraete">Zu den Analysegeräten '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt aufnehmen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Über uns</span>'+
   '<h2 class="txt" id="mani">Seit über 20 Jahren inhabergeführt, <span class="nw">entwickeln und produzieren wir</span> <span class="nw">in Freital Analysegeräte</span> <span class="nw">für die Diabetesdiagnostik.</span> <em><span class="nw">Eine Mischung aus</span> <span class="nw">Erfahrung und Innovation.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">7.000+</span><p class="k">Analyser haben wir gemeinsam mit unseren Vertriebspartnern weltweit installiert</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1998</span><p class="k">seitdem arbeiten wir mit einem zertifizierten Qualitätsmanagementsystem</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10 µl</span><p class="k">Kapillarblut genügen für eine Messung von Glukose, Laktat und Hämoglobin</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">So misst ein SUPER GL</span><h2 class="d3"><span class="nw">Vom Tropfen</span> <em class="nw">zum Messwert.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Probe</span><span>Lösung</span><span>Sensor</span><span>Ergebnis</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Wenige Mikroliter</span> <span class="nw">genügen.</span></h2><p>Eine end-to-end-Kapillare nimmt 10 µl Kapillarblut aus der Fingerbeere oder aus einem Blutentnahmegefäß auf. Die Präanalytik ist denkbar einfach.</p></article>'+
     '<article class="step"><h2><span class="nw">Verdünnt</span> <span class="nw">und hämolysiert.</span></h2><p>Die Kapillare kommt in ein vordosiertes Probengefäß mit 500 µl Hämolysierlösung. Die Probe wird verdünnt, hämolysiert und kann sofort gemessen werden.</p></article>'+
     '<article class="step"><h2><span class="nw">Der Biosensor</span> <span class="nw">misst.</span></h2><p>Nach dem enzymatisch-amperometrischen Prinzip setzt das Enzym am Sensor die Glukose um; das entstehende Stromsignal ist das Maß für den Wert.</p></article>'+
     '<article class="step"><h2><span class="nw">Plasmabezogen,</span> <span class="nw">in einer Minute.</span></h2><p>Rund eine Minute nach der Blutentnahme liegt das Ergebnis vor, plasmabezogen nach IFCC-Empfehlung, die Kontrollen ausgewertet nach RiLiBÄK.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="qualitaet" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Qualität</span><h2 class="d2 split"><span class="nw">Präzise Werte,</span> <em class="nw">dauerhaft gesichert.</em></h2></div><p data-r>Das Streben nach höchster Qualität unserer Produkte und Serviceleistungen bestimmt die tägliche Arbeit: Grundvoraussetzung für zuverlässige und präzise Analyseergebnisse.</p></div>'+
   qual()+
  '</div></section>'+

  '<section class="sec dark2" id="analysegeraete" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Analysegeräte</span><h2 class="d2 split"><span class="nw">Vom Labor</span> <em class="nw">bis in die Praxis.</em></h2></div><p data-r>Biosensor-Analyser für Glukose und Laktat und ein Spektrometer für HbA1c: für jede Probenzahl das passende Gerät, und das Verbrauchsmaterial dazu aus eigener Herstellung.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Entwickelt und</span> <em class="nw">gefertigt in Freital.</em></h2></div><p data-r>Einige unserer Mitarbeiter entwickeln solche Systeme schon seit den 1980er Jahren, andere haben ihre Ausbildung erst vor wenigen Jahren abgeschlossen. Gemeinsam entwickeln wir unsere Produkte jeden Tag weiter.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Verbrauchsmaterial</span><h3 data-r>Alles aus einer Hand</h3><p data-r>Wir stellen das gesamte Verbrauchsmaterial für unsere Geräte selbst her, vorkonfektioniert für weniger Arbeitsaufwand und mehr Analysensicherheit.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Service-Center</span><h3 data-r>Betreuung in Europa</h3><p data-r>Unser eigenes Service-Center betreut Endkunden und Vertriebspartner in ganz Europa.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>International</span><h3 data-r>Geschulte Partner weltweit</h3><p data-r>Die Service-Teams unserer Vertriebspartner schulen wir umfassend, damit derselbe Service auch international gilt.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Neues</span> <em class="nw">aus Freital.</em></h2></div><p data-r>Messen, Zertifikate und Unterlagen: wo Sie uns persönlich treffen, und was Sie für Ihr Labor oder Ihre Praxis brauchen.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Sprechen Sie</span> <em class="nw">mit uns.</em></h2>'+
   '<p class="sub" data-r>Fragen zu unseren Produkten, Anregungen zu unseren Geräten oder Gebrauchsanweisungen: schreiben Sie uns, rufen Sie uns an oder schicken Sie uns eine E-Mail.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>Dr. Müller Gerätebau GmbH<br>Burgker Str. 133<br>01705 Freital</p></div>'+
    '<div><span class="lab" data-r>Allgemeine Anfragen</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Technische Fragen</span><p data-r><a class="ul" href="mailto:'+SUP+'">'+SUP+'</a><br>Telefon <a class="ul" href="tel:+4935165208621">+49 351 652086 21</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>Dr. Müller Gerätebau GmbH<br>Burgker Str. 133, 01705 Freital</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/analysegeraete">Analysegeräte</a><br><a class="ul" href="#/qualitaet">Qualität</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/aktuelles">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Analysegeräte</span>SUPER GL compact · SUPER GL2<br>SUPER GL speedy<br>SUPER ID clinchem</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="180" text-anchor="middle" textLength="990" lengthAdjust="spacingAndGlyphs">Dr. Müller</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Dr. Müller Gerätebau GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",qualitaet:"qualitaet",analysegeraete:"analysegeraete",unternehmen:"unternehmen",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Dr. Müller Gerätebau GmbH — Analysegeräte für die Diabetesdiagnostik, Freital",x:"Start"};
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
