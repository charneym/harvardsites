/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Datenblatt '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* the four technologies (budatec.de > Technologie), each with a small line icon */
var ICO={
 v:'<svg viewBox="0 0 56 56"><path d="M8 18H48V44H8Z"/><path class="a" d="M16 36H40M22 30H34"/><path d="M28 18V8M22 12L28 6L34 12"/></svg>',
 p:'<svg viewBox="0 0 56 56"><path d="M8 40H48"/><path class="a" d="M14 32C18 24 22 34 26 26S34 30 38 22S44 28 46 24"/><path d="M14 46H42"/></svg>',
 s:'<svg viewBox="0 0 56 56"><path d="M20 6V18H36V6"/><path class="a" d="M28 18V26"/><path d="M12 30H44V36H12Z"/><path d="M8 40H48"/></svg>',
 a:'<svg viewBox="0 0 56 56"><path d="M8 12H48V42H8Z"/><path class="a" d="M16 34L24 24L30 30L40 18"/><path d="M20 48H36"/></svg>'};
var TECH=[
 ["v","Vakuumlöten","<span class=\"nw\">Weniger Fehlstellen</span> <span class=\"nw\">im Lötverbund</span>","Vakuum in der Vorheiz- und Liquidusphase lässt Flussmittel- und Lösungsmittelreste entweichen, bevor sie als Voids oder Poren im Lötverbund bleiben."],
 ["p","Plasma","<span class=\"nw\">Bessere Benetzung,</span> <span class=\"nw\">höhere Ausbeute</span>","Eine Plasma-Atmosphäre in der Prozesskammer verbessert die Benetzbarkeit von Bauelementen und Substraten und reduziert Passivschichten auf den Anschlüssen."],
 ["s","Sintern","<span class=\"nw\">Fügen bei</span> <span class=\"nw\">200 bis 260 °C</span>","Mikroskalige Sinterpartikel verbinden Nacktchips und passive Bauelemente stoffschlüssig, unter Temperatur, Druck und Zeit: die Technik für Leistungsmodule."],
 ["a","Applikationszentrum","<span class=\"nw\">Vom Muster</span> <span class=\"nw\">zur Vorserie</span>","Pastendruck, Pastentrocknung, Bonding, Sintern, Vakuumlöten und Wire Bonding: Kundenapplikationen bis zum kompletten Modulaufbau, auch als Klein- und Vorserie."]];
function techs(){return '<div class="caps svc">'+TECH.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+c[2]+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["Okt 2026","IMAPS-Deutschland Herbstkonferenz, München, 15.–16. Oktober","budatec",SW+"/current/"],
 ["Okt 2026","EFX, das Branchenevent für Elektronikfertigung, Stuttgart, 6.–8. Oktober","budatec",SW+"/current/"],
 ["Sep 2026","THERMINIC 2026, Workshop zu thermischen Untersuchungen von ICs und Systemen, Berlin-Köpenick","budatec",SW+"/current/"],
 ["Nov 2025","Aussteller auf der productronica 2025, München, Halle A1, Stand 349","productronica","https://exhibitors.productronica.com/ausstellerportal/2025/aussteller/ausstellerdetails/budatec-gmbh/?elb=228.1100.2442.1.111"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Anlagenbau für Halbleiter und Solar<span class="nomob"> · Berlin</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Vakuumlöten und</span><span class="l"><em>Sintern aus Berlin.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>budatec baut Vakuumlötsysteme und Sinterpressen für die Fertigung von Elektronik und Leistungselektronik, von der kleinen Batch-Anlage bis zum vollautomatisierten Produktionssystem.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Unsere Systeme '+ARR+'</a><a class="btn" href="#/contact">Kontakt aufnehmen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Über budatec</span>'+
   '<h2 class="txt" id="mani"><span class="nw">budatec Systeme</span> <span class="nw">fertigen weltweit</span> <span class="nw">Elektronik und</span> <span class="nw">Leistungselektronik: bei</span> <span class="nw">Zulieferern der</span> <span class="nw">Automobilindustrie, in der</span> <span class="nw">Laserherstellung und</span> <span class="nw">in der Medizintechnik.</span> <em><span class="nw">Und in der</span> <span class="nw">Forschung sind sie</span> <span class="nw">die Grundlage</span> <span class="nw">neuer Technologien.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+</span><p class="k">Jahre Erfahrung des Teams in der Aufbau- und Verbindungstechnik</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100.</span><p class="k">Vakuumlötsystem, ausgeliefert 2018, neun Jahre nach der Gründung</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">300 kN</span><p class="k">Sinterkraft der SP 300, servoelektrisch und ohne Hydraulik</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Ein Lötprozess im Vakuum</span><h2 class="d3"><span class="nw">Vom Bauteil</span> <em class="nw">zum Verbund.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Bestücken</span><span>Heizen</span><span>Vakuum</span><span>Kühlen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Chip, Lot</span> <span class="nw">und Substrat.</span></h2><p>Der Aufbau liegt auf der Heizplatte in der Prozesskammer: Halbleiterchip, Lotschicht und Substrat. Noch sitzen Lösungsmittel und Flussmittel zwischen den Fügeteilen.</p></article>'+
     '<article class="step"><h2><span class="nw">Heizen in</span> <span class="nw">reduzierender Atmosphäre.</span></h2><p>Die Heizplatte fährt das Temperaturprofil, im VS 160 mit Raten im Bereich von 200 K/min. Wasserstoff oder HCOOH sorgen für eine reduzierende Atmosphäre, Plasma verbessert die Benetzung.</p></article>'+
     '<article class="step"><h2><span class="nw">Vakuum in</span> <span class="nw">der Liquidusphase.</span></h2><p>Ist das Lot flüssig, wird die Kammer evakuiert. Eingeschlossene Gase und Prozessrückstände entweichen aus dem Lötverbund, bevor sie zu Voids und Poren werden.</p></article>'+
     '<article class="step"><h2><span class="nw">Abkühlen zum</span> <span class="nw">fehlerfreien Verbund.</span></h2><p>Nach dem Belüften kühlt die Platte geregelt ab. Was bleibt, ist ein Lötverbund ohne Fehlstellen: die Grundlage für zuverlässige Leistungselektronik.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technologie</span><h2 class="d2 split"><span class="nw">Thermische Prozesse</span> <em class="nw">für Halbleiter.</em></h2></div><p data-r>Als Equipmenthersteller für die Halbleiterindustrie hat sich budatec zu einem der weltweit führenden Hersteller in den Bereichen Vakuumlöten und Sintern von Halbleitern etabliert.</p></div>'+
   techs()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split"><span class="nw">Vom Labor</span> <em class="nw">bis zur Linie.</em></h2></div><p data-r>Vakuumlötsysteme mit Heizplatten von 160 × 160 mm bis 1000 × 320 mm, Sinterpressen bis 300 kN und erprobtes Zubehör für die Aufbau- und Verbindungstechnik.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Gegründet 2009,</span> <em class="nw">gebaut in Berlin.</em></h2></div><p data-r>Entwicklung, Fertigung und Applikationszentrum unter einem Dach am ehemaligen Flugfeld Johannisthal, mit Vertriebspartnern in Europa, Nordamerika, Mexiko, Asien und Australien.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>2009</span><h3 data-r>Gründung</h3><p data-r>Dirk Buße und Alexander Dahlbüdding gründen budatec und stellen das VS 160 auf der productronica in München vor.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>2016</span><h3 data-r>Eigener Firmensitz</h3><p data-r>Produktionshalle und Bürogebäude in der Melli-Beese-Straße; im selben Jahr die Zertifizierung nach ISO 9001.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>2019</span><h3 data-r>SP 300</h3><p data-r>Die Sinterpresse mit rein servoelektrischem Antrieb, für einstellbare Atmosphären und Kräfte bis 300 kN.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Treffen Sie uns</span> <em class="nw">auf der Messe.</em></h2></div><p data-r>Messen und Konferenzen der Leistungselektronik und Aufbau- und Verbindungstechnik, auf denen budatec zuletzt vertreten war.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Sprechen Sie</span> <em class="nw">mit uns.</em></h2>'+
   '<p class="sub" data-r>Zu Vakuumlötsystemen, Sinterpressen, Musteraufbauten im Applikationszentrum oder Ihrer eigenen Applikation: das Team in Berlin hilft gern weiter.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Firmensitz</span><p data-r>budatec GmbH<br>Melli-Beese-Straße 28<br>12487 Berlin</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Tel. <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax +49 30 63224071</p></div>'+
    '<div><span class="lab" data-r>Vertrieb weltweit</span><p data-r>Partner in Spanien, Portugal, Italien, der Schweiz und Österreich, den USA und Mexiko, Indien, Japan, China, Taiwan, Südostasien und Australien</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Firmensitz</span>budatec GmbH<br>Melli-Beese-Straße 28, 12487 Berlin</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Seiten</span><a class="ul" href="#/products">Produkte</a><br><a class="ul" href="#/technology">Technologie</a><br><a class="ul" href="#/company">Unternehmen</a><br><a class="ul" href="#/news">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Unternehmen</span>Amtsgericht Berlin Charlottenburg<br>HRB 122897 B<br>ISO 9001 zertifiziert</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle">budatec</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 budatec GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",products:"products",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"budatec GmbH — Vakuumlötsysteme und Sinterpressen für Halbleiter und Leistungselektronik",x:"Start"};
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
