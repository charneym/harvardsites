/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np lpr">'+PROD.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function inds(){return '<div class="ev ind lind"><dl>'+IND.map(function(c){return '<div data-r><dt class="lab">'+esc(c[0])+'</dt><dd>'+esc(c[1])+'</dd></div>'}).join("")+'</dl></div>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* the services (limmerlaser.de > Unternehmen > Dienstleistungen), each with a small line icon */
var ICO={
 s:'<svg viewBox="0 0 56 56"><path d="M8 12H48V40H8Z"/><path d="M20 48H36M28 40V48"/><path class="a" d="M16 28L23 34L38 19"/></svg>',
 b:'<svg viewBox="0 0 56 56"><path d="M6 46H50"/><path d="M12 46V22H30V46"/><path class="a" d="M38 46V30M34 34L38 30L42 34"/><path d="M17 28H25M17 34H25"/></svg>',
 o:'<svg viewBox="0 0 56 56"><path d="M28 28m-16 0a16 16 0 1 0 32 0a16 16 0 1 0-32 0"/><path class="a" d="M28 28m-7 0a7 7 0 1 0 14 0a7 7 0 1 0-14 0"/><path d="M4 28H10M46 28H52"/></svg>',
 z:'<svg viewBox="0 0 56 56"><path d="M8 20H30V36H8Z"/><path class="a" d="M30 28H50"/><path d="M14 20V14H24V20M42 22L50 28L42 34"/></svg>'};
var SERV=[
 ["s","Sicherheit","STK und Wartung","Sicherheitstechnische Kontrollen und Wartung, auch für Lasergeräte und Zubehör anderer Hersteller, je nach Modell und Zustand."],
 ["b","Beratung","Der Laser-Bereich","Beratung zum Beispiel bei der Einrichtung des Laser-Bereichs in Klinik oder Praxis."],
 ["o","Optiken","Reinigung und Reparatur","Reinigung und Reparatur von Optiken, zum Beispiel bei Fokussierhandstücken."],
 ["z","Zubehör","Auch für Dritthersteller","Kompatibles Zubehör für Geräte anderer Hersteller, dazu Lichtleiter, Handstücke und Augenschutz."]];
function serv(){return '<div class="caps svc">'+SERV.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["Nov. 2026","Aussteller auf der MEDICA 2026 in Düsseldorf","MEDICA","https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3076069"],
 ["Jan. 2024","Arab Health in Dubai, Stand Z3.C58","Limmer Laser",PW+"/"],
 ["Nov. 2023","MEDICA 2023: der CO₂-Laser UNILAS Touch der 4. Generation und der Diodenlaser DIOLAS Newton","Limmer Laser",PW+"/"],
 ["Okt. 2023","Kolposkopie-Kurs für Fortgeschrittene in Berlin, mit dem UNILAS Touch im Praxisteil","Limmer Laser",PW+"/"],
 ["Juni 2023","FIME Miami Beach, German Pavilion, Stand U35","Limmer Laser",PW+"/"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<span class="lab eyebrow" data-r>Medizinische Lasertechnologie<span class="nomob"> · Berlin</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Medizinische Laser,</span><span class="l"><em>Made in Germany.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Limmer Laser entwickelt, fertigt und vertreibt in Berlin CO₂- und Diodenlaser mit dem passenden Zubehör, für Human-, Dental- und Veterinärmedizin.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Zu den Produkten '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt aufnehmen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Wir setzen den neuen Standard</span>'+
   '<h2 class="txt" id="mani">Lasertechnologie wird in der Medizin seit Jahrzehnten verwendet, doch Technologie und Behandlungsansätze sind <span class="nw">weitgehend gleich</span> <span class="nw">geblieben.</span> <em><span class="nw">Wir können</span> <span class="nw">das besser.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 mm</span><p class="k">Kollateralschaden am Weichgewebe im LFD-Modus, statt 9 bis 11 mm Eindringtiefe</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100 W</span><p class="k">im kompakten, leisen Tischgerät DIOLAS Newton</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">8</span><p class="k">medizinische Fachbereiche, von der HNO bis zur Dentalmedizin</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Präzision am Gewebe</span><h2 class="d3">Vom Strahl <em class="nw">zum Ergebnis.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Strahl</span><span>Scanner</span><span>LFD</span><span>Absaugung</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Ein scharfer Strahl.</h2><p>Der CO₂-Laser UNILAS Touch arbeitet bei 10.600 nm im TEM₀₀-Modus. UltraSharp sorgt für schärfere Strahldurchmesser, SolidBench hält Pilot- und Arbeitsstrahl dauerhaft in Übereinstimmung.</p></article>'+
     '<article class="step"><h2>Figur für Figur.</h2><p>Der Scanner SurgiScan X2 verteilt die Laserenergie feingesteuert über klar definierte Flächen: zum Abtragen, zum Schneiden oder fraktioniert, auf Wunsch randomisiert.</p></article>'+
     '<article class="step"><h2>Koagulation auf 1 mm.</h2><p>Der LFD-Modus der DIOLAS-Laser reduziert den Kollateralschaden am Weichgewebe auf nur 1 mm. Standard-Koagulationslaser dringen 9 bis 11 mm tief ein.</p></article>'+
     '<article class="step"><h2>Klare Sicht im Feld.</h2><p>Die Absaugpumpe VACULAS 4000 saugt bis zu 950 Liter pro Minute ab und filtert 99,99999995 % der Partikel bei 0,01 µm, leiser als 52 dB und per Funk vom Laser gesteuert.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="produkte" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte & Lösungen</span><h2 class="d2 split"><span class="nw">Laser und Zubehör</span> <em class="nw">aus einer Hand.</em></h2></div><p data-r>Hochpräzise CO₂-Laser, Diodenlaser und spezialisierte Systeme. Statt einzelner Geräte schaffen wir effiziente Gesamtlösungen für Ihren Arbeitsplatz, mit Lichtleitern, Handstücken und Augenschutz.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec dark2" id="anwendungen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Anwendungen</span><h2 class="d2 split"><span class="nw">Ein Laser</span> <em class="nw">für viele Disziplinen.</em></h2></div><p data-r>Unsere Produkte decken alle wichtigen Bereiche der Human-, Dental- und Veterinärmedizin ab. Dafür arbeiten wir eng mit Experten aller medizinischen Fachbereiche zusammen.</p></div>'+
   inds()+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Mit Service</span> <em class="nw">und Schulung.</em></h2></div><p data-r>Limmer Laser ist spezialisiert auf Design, Herstellung und Vertrieb medizinischer Laser und Zubehör. Unsere Schwerpunkte setzen wir auch in Service und Schulungen, in enger Zusammenarbeit mit Kliniken und Praxen.</p></div>'+
   serv()+
   '<div class="lteam">'+team()+'</div>'+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Zertifiziert</span><h3 data-r>EN ISO 13485:2016</h3><p data-r>Zertifiziert nach dem hohen europäischen Qualitätsstandard für Medizinprodukte.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Made in Germany</span><h3 data-r>Echt aus Berlin</h3><p data-r>Hergestellt in Deutschland, mit Komponenten, die wir gezielt von deutschen Herstellern beziehen.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Fortbildung</span><h3 data-r>Kurse und Kongresse</h3><p data-r>Veranstaltungen und Fortbildungen wie die Kolposkopie-Kurse, mit dem Laser im praktischen Teil.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Messen</span> <em class="nw">und Kurse.</em></h2></div><p data-r>Wo Sie uns treffen: auf den großen Medizintechnikmessen weltweit und bei Fortbildungen mit unseren Lasern.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Sprechen Sie</span> <em class="nw">mit uns.</em></h2>'+
   '<p class="sub" data-r>Sie haben noch Fragen? Wir freuen uns auf Ihre Kontaktaufnahme, ob zu einem Gerät, zu Zubehör oder zu Service und Schulung.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>Limmer Laser GmbH<br>Schwarzschildstraße 1<br>12489 Berlin</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Sekretariat</span><p data-r>Werktags von 08:00 bis 17:30 Uhr</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>Limmer Laser GmbH<br>Schwarzschildstraße 1, 12489 Berlin</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/anwendungen">Anwendungen</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/aktuelles">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Produkte</span>UNILAS Touch · DIOLAS Photon<br>DIOLAS Newton · DIOLAS LFD 3000<br>SurgiScan X2 · VACULAS 4000</div>'+
  '</div><div class="bigwm" aria-hidden="true">'+LOGO_MONO+'</div>'+
  '<div class="legal"><span class="lab">© 2026 Limmer Laser GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",praezision:"story",produkte:"produkte",anwendungen:"anwendungen",unternehmen:"unternehmen",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Limmer Laser GmbH — Medizinische Laser und Zubehör aus Berlin",x:"Start"};
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
/* the white hero: while the home hero is under the header (and the header is not yet solid), the header reads dark on white */
(function(){function chk(){var h=document.querySelector("#view #hero"),on=!!h&&h.getBoundingClientRect().bottom>80&&!document.documentElement.classList.contains("bo-open");document.body.classList.toggle("hlt",on)}
  addEventListener("scroll",chk,{passive:true});setInterval(chk,250);chk()})();
