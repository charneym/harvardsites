/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Zum Gerät '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* quality (mtrplus.com > Zertifikate, Startseite), each with a small line icon */
var ICO={
 i:'<svg viewBox="0 0 56 56"><path d="M12 6H38L46 14V50H12Z"/><path d="M38 6V14H46"/><path class="a" d="M20 30L26 36L38 22"/><path d="M20 44H38"/></svg>',
 c:'<svg viewBox="0 0 56 56"><path d="M28 28m-21 0a21 21 0 1 0 42 0a21 21 0 1 0-42 0"/><path class="a" d="M26 19A10 10 0 1 0 26 37M40 19A10 10 0 1 0 40 37M32 28H40"/></svg>',
 h:'<svg viewBox="0 0 56 56"><path d="M8 10H48V46H8Z"/><path d="M8 20H48"/><path class="a" d="M16 29H30M16 37H40"/><path d="M38 29H40"/></svg>',
 r:'<svg viewBox="0 0 56 56"><path d="M28 28m-20 0a20 20 0 1 0 40 0a20 20 0 1 0-40 0"/><path class="a" d="M28 14V28L37 34"/><path d="M28 6V9M28 47V50M6 28H9M47 28H50"/></svg>'};
var QUAL=[
 ["i","DIN EN ISO 13485:2021","Zertifizierter Hersteller","Ein Qualitätsmanagement, das regelmäßig von einer unabhängigen benannten Stelle überprüft wird, für Entwicklung, Produktion und Verkauf."],
 ["c","Verordnung (EU) 2017/745","CE 0123 auf jedem Gerät","Alle Geräte sind qualitätskontrolliert und erfüllen die Medizinprodukte-Verordnung; die Konformitätserklärungen stehen zum Download bereit."],
 ["h","GKV-Spitzenverband","Im Hilfsmittelverzeichnis","Alle Geräte sind im Hilfsmittelverzeichnis gelistet und finden so auch im professionellen Bereich ihren Einsatz."],
 ["r","Real Time Clock","Therapie mit Datum","In TENS-, EMS- und Inkontinenzgeräten integriert: der Therapeut sieht die Behandlungsdaten mit zeitlicher Zuordnung jeder Sitzung."]];
function qual(){return '<div class="caps svc">'+QUAL.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["Nov. 2026","Aussteller auf der MEDICA 2026 in Düsseldorf, Halle 4 / H37","MEDICA","https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3070485"],
 ["Nov. 2024","Das Produktmagazin, jetzt auch auf Niederländisch","PDF",MW+"/wp-content/uploads/2024/11/Produktmagazin_MTR_Plus_NL.pdf"],
 ["Juni 2024","Das Produktheft 2024: alle Geräte im Überblick","PDF",MW+"/wp-content/uploads/2024/06/Produkheft-MTR-Plus-2024.pdf"],
 ["Zertifikate","MDR-Zertifikat, ISO 13485:2021 und Konformitätserklärungen","MTR+",MW+"/ueber-uns/zertifikate"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Elektrostimulation aus Berlin<span class="nomob"> · seit 2001</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Elektrotherapie</span><span class="l"><em>vom Fachmann.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>MTR+ entwickelt, produziert und vertreibt digitale Stimulationsgeräte für Schmerztherapie, Muskelaufbau, Inkontinenztherapie und Biofeedback, zertifiziert nach DIN EN ISO 13485.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/geraete">Zu den Geräten '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt aufnehmen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Alles Bravo</span>'+
   '<h2 class="txt" id="mani">Seit 2001 unterstützt MTR+ den Fachhandel <span class="nw">mit digitalen Geräten</span> <span class="nw">zur Elektrostimulation,</span> entwickelt im engen Kontakt <span class="nw">mit Ärzten und Patienten.</span> <em><span class="nw">Hochwertige Qualität</span> <span class="nw">zu marktgerechten Preisen.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2001</span><p class="k">in Berlin gegründet, als Partner des Fachhandels für Elektrotherapie</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2003</span><p class="k">stellt MTR+ die Bravo-Serie vor, eine völlig neue Modellreihe im zeitgemäßen Design</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">14</span><p class="k">Sprachen, in denen das Produktmagazin für Partner in aller Welt erscheint</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">So arbeitet ein Bravo</span><h2 class="d3"><span class="nw">Vom Impuls</span> <em class="nw">zur Therapie.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Programm</span><span>Impuls</span><span>EMG</span><span>Kontrolle</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Für jeden Zweck</span> <span class="nw">das Programm.</span></h2><p>Reine und mehrphasige Programme sind vorbelegt; drei frei konfigurierbare Programme schneidet der Arzt oder Physiotherapeut selbst zu und passt sie dem Therapiefortschritt an.</p></article>'+
     '<article class="step"><h2><span class="nw">Zwei Kanäle,</span> <span class="nw">vier Elektroden.</span></h2><p>Zwei isolierte, unabhängige Kanäle übertragen asymmetrische, rechteckige, biphasische Impulse ohne Gleichstromanteil über die Elektroden durch die Haut.</p></article>'+
     '<article class="step"><h2><span class="nw">Erst messen,</span> <span class="nw">dann stimulieren.</span></h2><p>Beim DuoBravo löst erst das gemessene Muskelpotential die Stimulation aus. Den Schwellenwert ermittelt das Gerät zu Beginn jeder Sitzung automatisch.</p></article>'+
     '<article class="step"><h2><span class="nw">Jede Sitzung,</span> <span class="nw">mit Datum dokumentiert.</span></h2><p>Die integrierte Echtzeituhr erlaubt die detaillierte Auswertung jeder Sitzung der letzten 60 Behandlungstage, beim SineBravo sogar der letzten 200.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="qualitaet" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Qualität</span><h2 class="d2 split"><span class="nw">Qualität mit</span> <em class="nw">Brief und Siegel.</em></h2></div><p data-r>Kunden und Geschäftspartner sollen sicher sein, ihre Ware von einem seriösen Unternehmen zu beziehen. Darum erstreckt sich das Qualitätsmanagement von MTR+ auf jedes Gerät.</p></div>'+
   qual()+
  '</div></section>'+

  '<section class="sec dark2" id="geraete" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Geräte</span><h2 class="d2 split"><span class="nw">Für jede</span> <em class="nw">Therapie das Gerät.</em></h2></div><p data-r>Die Bravo-Serie und ihre preiswerten „kleinen Brüder“ der Lito-Serie: digitale Stimulationsgeräte, die Ärzte überzeugen und von Patienten dank einfacher Handhabung gut angenommen werden.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Ein Partner</span> <em class="nw">für den Fachhandel.</em></h2></div><p data-r>Von unserem verkehrsgünstigen Standort in Berlin aus stehen wir dem Fachhandel in aller Welt als vertrauensvoller Partner im Bereich Elektrotherapie zur Seite.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Bravo-Serie</span><h3 data-r>Seit Ende 2003</h3><p data-r>Entstanden aus dem intensiven Kontakt zu Ärzten und Patienten und der Kooperation mit professionellen Kunden.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Lito-Serie</span><h3 data-r>Die kleinen Brüder</h3><p data-r>Dolito, Rehalito, Biolito und Myolito: preiswert, und doch nach Hilfsmittelverzeichnis und Medizinprodukte-Verordnung.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>International</span><h3 data-r>In 14 Sprachen</h3><p data-r>Das Produktmagazin erscheint von Englisch und Französisch bis Vietnamesisch und Türkisch.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Neues</span> <em class="nw">aus Berlin.</em></h2></div><p data-r>Messen, Produktinformationen und Zertifikate: was es bei MTR+ Neues gibt, und wo Sie uns persönlich treffen.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Sprechen Sie</span> <em class="nw">mit uns.</em></h2>'+
   '<p class="sub" data-r>Wir freuen uns auf jeden neuen Vertriebspartner, der unsere Philosophie teilt: hochwertige Qualität zu marktgerechten Preisen.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>MTR+ Vertriebs GmbH<br>Kamenzer Damm 80<br>12249 Berlin</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Shop und Downloads</span><p data-r><a class="ul" href="'+MW+'/shop" target="_blank" rel="noopener">Zum Onlineshop</a><br><a class="ul" href="'+MW+'/downloads/download-produktinformationen" target="_blank" rel="noopener">Produktinformationen</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>MTR+ Vertriebs GmbH<br>Kamenzer Damm 80, 12249 Berlin</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/geraete">Geräte</a><br><a class="ul" href="#/qualitaet">Qualität</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/aktuelles">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Therapien</span>Schmerztherapie · Muskelstimulation<br>Inkontinenztherapie · Biofeedback<br>Paresestimulation · FES<br>Iontophorese</div>'+
  '</div><svg class="bigsvg" viewBox="900 600 2090 660" aria-hidden="true"><text class="bmx" x="926" y="1052">MTR</text><path fill="currentColor" d="M2605 642H2750V866H2975V1012H2750V1237H2605V1012H2378V866H2605Z"/></svg>'+
  '<div class="legal"><span class="lab">© 2026 MTR+ Vertriebs GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",qualitaet:"qualitaet",geraete:"geraete",unternehmen:"unternehmen",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"MTR+ Vertriebs GmbH — Elektrotherapie vom Fachmann, Berlin",x:"Start"};
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
