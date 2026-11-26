/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Mehr '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Beratung","Beratung und Antestung vor Ort","Unsere Kundenberater finden mit fundiertem Wissen die beste Lösung für Ihren Prozess. Gern beraten wir Sie bei Ihnen vor Ort und testen unsere Produkte ausgiebig in Ihrem Haus.",'<path d="M8 14H40V36H22L12 44V36H8Z"/><path class="a" d="M16 22H32M16 28H27"/><circle class="f" cx="44" cy="12" r="2.2"/>'],
  ["Lieferung","Kurze Lieferzeiten","Vorrätige Lagerware liefern wir sofort oder zu Ihrem Wunschtermin, alles andere innerhalb von ein bis zwei Wochen. Expresslieferungen sind möglich.",'<path d="M6 18H32V38H6Z"/><path d="M32 24H42L48 31V38H32"/><circle class="a" cx="15" cy="40" r="4"/><circle class="a" cx="40" cy="40" r="4"/><circle class="f" cx="15" cy="40" r="1.6"/>'],
  ["Wissen","Workshops und Schulungen","Mit unserem praxisorientierten Wissen stehen wir Ihnen wahlweise bei Ihnen oder bei uns in Strausberg zur Verfügung. Antworten auf viele Fachfragen bietet das Resist-Wiki.",'<path d="M6 20L28 10L50 20L28 30Z"/><path class="a" d="M16 25V36C22 41 34 41 40 36V25"/><path d="M50 20V34"/><circle class="f" cx="50" cy="36" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Resists für die Lithographie<span class="nomob"> · seit 1992</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Resists für</span></span> <span class="l"><em class="nw">feinste Strukturen.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Allresist entwickelt, produziert und vertreibt in Strausberg Resists für die optische und die Elektronenstrahl-Lithographie, mit den passenden Prozesschemikalien und als Resistentwicklung nach Kundenwunsch.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Zu den Produkten '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Was uns auszeichnet</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Unsere Stärke ist</span> <span class="nw">die Resistentwicklung</span> <span class="nw">nach Kundenwunsch:</span> <em><span class="nw">mit hohem Know-how,</span> <span class="nw">kostengünstig und</span> <span class="nw">in kurzer Zeit.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1992</span><p class="k">gegründet, mit Wurzeln in den Fotochemischen Werken Berlin; seit 1999 in Strausberg</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40+</span><p class="k">nationale und europäische Forschungsprojekte mit erfolgreicher Produktmarktreife</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;10 nm</span><p class="k">Auflösung mit dem E-Beam-Resist CSAR 62, bei sehr hohem Kontrast</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Lithographie</span><h2 class="d3"><span class="nw">Vom Lack</span> <em class="nw">zur Struktur.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Beschichten</span><span>Belichten</span><span>Entwickeln</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Aufgeschleudert.</h2><p>Der Resist wird auf das Substrat geschleudert. Die Drehzahl bestimmt die Schichtdicke: CSAR 62 etwa ergibt zwischen 6000 und 1000 rpm Schichten von 0,05 bis 1,6 µm.</p></article>'+
     '<article class="step"><h2>Belichtet.</h2><p>UV-Licht oder ein Elektronenstrahl schreibt das Muster in den Lack. Auf isolierenden Substraten leitet ein dünner Schutzlack wie Electra 92 die Aufladung ab.</p></article>'+
     '<article class="step"><h2>Entwickelt.</h2><p>Der Entwickler löst beim Positivresist die belichteten Bereiche heraus. Zurück bleibt die Maske für Ätzen oder Lift-off, mit CSAR 62 in Strukturen unter 10 nm.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="service" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Service</span><h2 class="d2 split"><span class="nw">Nah am <em>Kunden.</em></span></h2></div><p data-r>Wir bieten eine breite Service-Palette, von Sonderanfertigungen bis zu Schulungen. Durch unsere Forschungsabteilung und unser Ohr am Kunden gehen wir schnell auf die Bedürfnisse des Marktes ein.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Gebindegrößen</span><p class="cr" data-r><span>Resists: ¼ l, 1 l, 6 × 1 l</span><span>Prozesschemikalien: 1 l, 2,5 l, 4 × 2,5 l</span><span>Entwickler: bis 4 × 5 l</span><span>Testmuster: 100 ml</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split"><span class="nw">Resists für</span> <em class="nw">jede Lithographie.</em></h2></div><p data-r>Ein breites Portfolio zuverlässiger Standard-Resists für etablierte Prozesse, Speziallacke für die Technologie unserer Kunden und hochinnovative, umweltfreundliche Spitzenprodukte für die High-Tech-Lithographie.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Ausgezeichnet</span><p class="cr" data-r><span>Medusa 84 SiH: Finale Deutscher Nachhaltigkeitspreis Produkte 2027</span><span>Ludwig-Erhard-Preis 2012</span><span>Innovationspreis des Landes Brandenburg</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Seit 1992</span> <em class="nw">in Familienhand.</em></h2></div><p data-r>Eine ostdeutsche Erfolgsgeschichte: komplett eigenfinanziert gegründet, um das Resist-Know-how der Fotochemischen Werke Berlin zu bewahren, heute Partner für Unternehmen der Halbleiterbranche und für Forschungseinrichtungen.</p></div>'+
   team()+
   '<div class="qual"><span class="lab kick" data-r>Standort Strausberg</span><p class="cr" data-r><span>1999: 800 m² auf eigenem Grund</span><span>2014: +250 m²</span><span>2018: +450 m²</span><span>2026: neues Logistikzentrum, rund 700 m²</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="neuigkeiten" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Neuigkeiten</span><h2 class="d2 split"><span class="nw">Aus Labor</span> <em class="nw">und Presse.</em></h2></div><p data-r>Neue Entwicklungen, Messen und Konferenzen, der Resist des Monats und Berichte über Allresist, aus unserem Pressebereich.</p></div>'+
   news()+
   '<div class="bk"><span class="lab kick" data-r>Auf der Messe</span><p class="cr" data-r><a class="ul" href="https://exhibitors.productronica.com/ausstellerportal/2025/aussteller/ausstellerdetails/allresist-gmbh/?elb=238.1100.6124.1.111" target="_blank" rel="noopener">productronica 2025, München</a><span>EIPBN 2026</span><span>MNE 2026, Interlaken</span></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihr Resist,</span> <em class="nw">Ihr Prozess.</em></h2>'+
   '<p class="sub" data-r>Für Anfragen, Testmuster und Beratung erreichen Sie uns direkt in Strausberg. Gern entwickeln wir eine Lösung für Ihre Technologie.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>Allresist GmbH<br>Am Biotop 14<br>15344 Strausberg</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Wissen</span><p data-r><a class="ul" href="'+AR+'resist-wiki/" target="_blank" rel="noopener">Zum Resist-Wiki</a><br><a class="ul" href="'+AR+'downloads/" target="_blank" rel="noopener">Downloads</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>Allresist GmbH<br>Am Biotop 14, 15344 Strausberg</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/service">Service</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/neuigkeiten">Neuigkeiten</a></div>'+
   '<div class="c"><span class="lab">Produkte</span>E-Beam-Resists, Photoresists, Schutzlacke und Prozesschemikalien</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:900;font-size:56px;letter-spacing:.14em">ALLRESIST</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Allresist GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",prozess:"story",produkte:"produkte",service:"service",unternehmen:"unternehmen",neuigkeiten:"neuigkeiten",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Allresist GmbH — Photoresists, E-Beam-Resists und Prozesschemikalien aus Strausberg",x:"Start"};
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
