/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Ansehen '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<div class="caps nwc">'+NEWS.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener"><span>Datenblatt (PDF)</span>'+ARR+'</a></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Medizintechnik<span class="nomob"> · Tuttlingen</span> · seit 1976</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Medizintechnik, die</span><span class="l"><em>den Unterschied macht.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Tekno-Medical liefert aus Tuttlingen, dem Weltzentrum der Medizintechnik, chirurgische Instrumente, Endoskopie, OP-Ausstattung und HF-Chirurgie in über 130 Länder.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Zu den Produkten '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt aufnehmen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>TEKNO® makes the difference</span>'+
   '<h2 class="txt" id="mani">Seit 1976 hat sich Tekno-Medical zu einem weltweiten Partner für medizinische Instrumente und Lösungen entwickelt. <em><span class="nw">Gesundheit steht</span> <span class="nw">im Mittelpunkt</span> <span class="nw">unseres Handelns.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1976</span><p class="k">in Tuttlingen gegründet, heute in zweiter Generation familiengeführt</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">130+</span><p class="k">Länder, in denen Tekno-Medical aktiv ist</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~100</span><p class="k">Mitarbeitende, mit persönlicher Beratung und Betreuung</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Endoskopie</span><h2 class="d3">Vom Licht <em>zum Bild.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Licht</span><span>Optik</span><span>Bild</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Licht, wo es gebraucht wird.</h2><p>Die Lichtquelle speist das Licht über den Lichtleiteranschluss in die Optik ein. Beim CLS 50 sitzt eine leistungsstarke LED-Lichtquelle direkt im kompakten System.</p></article>'+
     '<article class="step"><h2>Eine Optik, die zeichnet.</h2><p>Das Bild läuft durch den schlanken Schaft zurück zum Okular. Die neuen Ureterorenoskope lösen mit bis zu 40.000 Pixeln auf, bei Ø 4,9 bis 8,1 Charr. und 150 bis 425 mm Arbeitslänge.</p></article>'+
     '<article class="step"><h2>Ein Bild, das bleibt.</h2><p>Am Okular nimmt der Kamerakopf das Bild auf. Das CLS 50 bietet 10-fachen digitalen Zoom, individuell belegbare Kameratasten und eine integrierte Bild- und Videospeicherung für die Dokumentation.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="neuheiten" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Neuheiten</span><h2 class="d2 split">Neu im <em>Programm.</em></h2></div><p data-r>Von der Urologie bis zur Arthroskopie: Systeme, die Tekno-Medical zuletzt in das Sortiment aufgenommen hat, jeweils mit Datenblatt.</p></div>'+
   news()+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split"><span class="nw">Ein Sortiment</span> <em class="nw">ohne offene Wünsche.</em></h2></div><p data-r>Das komplette Produktprogramm umfasst sämtliche Instrumente für die allgemeine Chirurgie und Endoskopie sowie eine Vielzahl an Spezialdisziplinen, abgebildet in mehrsprachigen Katalogen.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Service</span><p class="cr" data-r><a class="ul" href="'+TM+'/de/service/sales-team/" target="_blank" rel="noopener">Sales Team</a><a class="ul" href="'+TM+'/de/service/reparaturservice/" target="_blank" rel="noopener">Reparaturservice</a><a class="ul" href="'+TM+'/de/service/produktschulung/" target="_blank" rel="noopener">Produktschulung</a><a class="ul" href="'+TM+'/de/service/zertifikate/" target="_blank" rel="noopener">Zertifikate</a><a class="ul" href="'+TM+'/de/service/kataloge/" target="_blank" rel="noopener">Kataloge</a></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split">Familiengeführt, <em>in zweiter Generation.</em></h2></div><p data-r>Geschäftsführer sind die Söhne des Firmengründers Bruno Mattes. Mit Weitblick knüpfen sie an die bisherigen Erfolge an, um für die Zukunft entscheidende Akzente zu setzen.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Qualität</span><h3 data-r>ISO 13485 und MDR</h3><p data-r>Ein Qualitätsmanagementsystem nach DIN EN ISO 13485, das die Anforderungen der europäischen Medizinprodukte-Verordnung erfüllt. Die Produkte sind bei der FDA registriert (No. 9611503).</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Produktion</span><h3 data-r>Vom Entwurf zum Endprodukt</h3><p data-r>Mit spezialisierten Produktionspartnern: Neukonstruktionen, Machbarkeitsprüfungen und Musterbau bis zur Serienfertigung, aus deutschen Materialien wie Stahl, Kunststoff und Titan.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Nachhaltigkeit</span><h3 data-r>Grüner Strom seit 2005</h3><p data-r>Ökostrom von Greenpeace Energy, drei Photovoltaikanlagen mit rund 100 kWp auf den eigenen Dächern und eine elektrische Firmenflotte.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="messen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Messen</span><h2 class="d2 split">Persönlich <em>vor Ort.</em></h2></div><p data-r>Auf den großen Medizintechnik-Messen stellt Tekno-Medical Highlights und das gesamte Produktsortiment im persönlichen Gespräch vor.</p></div>'+
   '<ul class="nws">'+
    '<li><a href="https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3073734" target="_blank" rel="noopener"><span class="lab dt">16.–19. Nov. 2026</span><h3>MEDICA 2026, Düsseldorf: Halle 10, Stand 10A44</h3><span class="lab src">MEDICA '+ARR+'</span></a></li>'+
    '<li><a href="'+TM+'/de/news/messen/" target="_blank" rel="noopener"><span class="lab dt">25.–28. Jan. 2027</span><h3>WHX Dubai: Stand S9.E39</h3><span class="lab src">Tekno-Medical '+ARR+'</span></a></li>'+
   '</ul>'+
   '<div class="ev"><span class="lab kick" data-r>Historie</span><dl>'+
    '<div data-r><dt class="lab">2026</dt><dd>50 Jahre Tekno-Medical, gefeiert mit allen Mitarbeitenden</dd></div>'+
    '<div data-r><dt class="lab">2025</dt><dd>Ausbau der Ladeinfrastruktur, mit Wallboxen für Kunden und Mitarbeitende</dd></div>'+
    '<div data-r><dt class="lab">2024</dt><dd>EU-Qualitätsmanagement-Bescheinigung nach MDR (EU) 2017/745</dd></div>'+
    '<div data-r><dt class="lab">2023</dt><dd>Drittes Photovoltaik-Modul, Kapazität nahezu 100 kWp</dd></div>'+
   '</dl></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split">Wir sind <em>für Sie da.</em></h2>'+
   '<p class="sub" data-r>Für Fragen, Angebote und Beratung erreichen Sie uns direkt in Tuttlingen, oder über das Area Sales Management Ihres Landes.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>Tekno-Medical Optik-Chirurgie GmbH<br>Sattlerstrasse 11<br>78532 Tuttlingen</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Sales Team</span><p data-r><a class="ul" href="'+TM+'/de/service/sales-team/" target="_blank" rel="noopener">Ansprechpartner Ihres Landes</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>Tekno-Medical Optik-Chirurgie GmbH<br>Sattlerstrasse 11, 78532 Tuttlingen</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/neuheiten">Neuheiten</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/messen">Messen</a></div>'+
   '<div class="c"><span class="lab">Produkte</span>Offene Chirurgie · Endoskopie<br>OP-Ausstattung · HF-Chirurgie<br>Sterilisation · Dental<br>Veterinär · Ophthalmologie</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-style:italic;font-weight:800;font-size:60px;letter-spacing:.04em">TEKNO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Tekno-Medical Optik-Chirurgie GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",endoskopie:"story",produkte:"produkte",neuheiten:"neuheiten",unternehmen:"unternehmen",messen:"messen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Tekno-Medical Optik-Chirurgie GmbH — Medizintechnik aus Tuttlingen seit 1976",x:"Start"};
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
