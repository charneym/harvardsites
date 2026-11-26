/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Mehr erfahren '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function caps(){return '<div class="caps">'+SYS.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* what SOLARC does (solarc.de > Über uns: "entwickelt, produziert und vertreibt ...", with the test lab) */
function tl(){var T=[["Entwickeln","Technisch hochwertige, autarke Stromversorgungskonzepte nach Kundenanforderung, bis zum fertigen Produkt"],["Prüfen","Klimaschrank, Sonnensimulatoren, Elektro- und Fotolumineszenz für eine hohe Produktqualität"],["Produzieren","Automatisierte Produktionsmethoden sowie Verguss- und Laminierungstechniken"],["Vertreiben","Dazu Handel mit in Deutschland geprüften Solarmodulen und Ladereglern"]];
  return '<ol class="amtl">'+T.map(function(t){return '<li><span class="v" data-r>'+t[0]+'</span><p data-r>'+esc(t[1])+'</p></li>'}).join("")+'</ol>'}
function refs(){return '<ul class="sorefs">'+REFS.map(function(r){return '<li data-r>'+esc(r)+'</li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Innovative Solarprodukte<span class="nomob"> · Berlin-Kreuzberg</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Solarstrom für</span> <span class="nw">Ihr Produkt,</span></span> <span class="l"><em><span class="nw">im Kleinformat.</span></em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>SOLARC entwickelt, produziert und vertreibt kundenspezifische Solarmodule, Solar-Laderegler und DC/DC-Wandler bis hin zu kompletten autarken Solarprodukten, vom Prototyp bis zur Serienfertigung.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Zu den Produkten '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Wer wir sind</span>'+
   '<h2 class="txt" id="mani">SOLARC ist der Spezialist für innovative autarke Solarprodukte und Lösungen: <span class="nw">der verlässliche,</span> erfahrene Partner für Unternehmen, die <span class="nw">ihre Produkte</span> <em><span class="nw">mit der Sonne</span> <span class="nw">versorgen wollen.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">200 W</span><p class="k">Standard- und kundenspezifische Solarmodule, von 40 mW bis 200 W</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20+</span><p class="k">Jahre Erfahrung mit solaren Kleinsystemen im Industrie- und Consumerbereich</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">A5.332</span><p class="k">unser Stand auf der electronica 2026, der Weltleitmesse der Elektronik in München</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Produktentwicklung</span><h2 class="d3"><span class="nw">Vom Prototyp</span> <em><span class="nw">bis zur Serie.</span></em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Entwickeln</span><span>Prüfen</span><span>Integrieren</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Nach Ihren Vorgaben.</h2><p>Wir fertigen Solarmodule nach Ihren technischen Vorgaben, Formen, Farben und Abmessungen, kristallin oder Dünnschicht, für Indoor oder Outdoor, mit neuesten Solarzellentechniken.</p></article>'+
     '<article class="step"><h2>Geprüft, bevor es zählt.</h2><p>Elektrolumineszenz und Fotolumineszenz zeigen versteckte Defekte wie Microcracks, inaktive Bereiche und Hotspots; der Klimaschrank simuliert Wärme, Feuchte und Alterung.</p></article>'+
     '<article class="step"><h2>Autark im Produkt.</h2><p>Mit Laderegler, DC/DC-Wandler und Speicher wird das Modul zur kompletten Stromversorgung, integriert in Ihr Produkt: vom GPS-Ortungssystem bis zur Motor- und Lichtsteuerung.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split"><span class="nw">Unsere Produkte</span> <em><span class="nw">auf einen Blick.</span></em></h2></div><p data-r>Das Spektrum reicht von einfachen Stromversorgungssystemen bis hin zu kompletten Industrieprodukten: technisch hochwertige Photovoltaikprodukte und -systeme im unteren bis mittleren Leistungsbereich.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="leistungen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Leistungen</span><h2 class="d2 split"><span class="nw">Prüfen und</span> <em><span class="nw">beraten.</span></em></h2></div><p data-r>Neben eigenen Produkten bieten wir in unseren Räumen Prüf- und Beratungsdienstleistungen an. So erhalten unsere Kunden bereits vor der Markteinführung wichtige Informationen zu ihrem Produkt.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="referenzen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Referenzen</span><h2 class="d2 split"><span class="nw">Sonderentwicklungen</span> <em><span class="nw">für namhafte Kunden.</span></em></h2></div><p data-r>Im Laufe unserer Tätigkeit haben wir für viele deutsche und ausländische Kunden Sonderentwicklungen getätigt und Partnerschaften gebildet, in Industrie und Forschung.</p></div>'+
   refs()+
   '<p class="sorefs-n" data-r>u. v. m.</p>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Aus Berlin,</span> <em><span class="nw">für autarke Produkte.</span></em></h2></div><p data-r>In der Entwicklung und Lieferung kundenspezifischer Lösungen liegt die besondere Stärke von SOLARC. Erfahrene Mitarbeiter entwickeln maßgeschneiderte Lösungen, unter Einbeziehung zukunftsweisender Produktdesigns.</p></div>'+
   tl()+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Besuchen Sie</span> <em><span class="nw">unseren Stand.</span></em></h2></div><p data-r>Wir sind auf internationalen Messen vertreten und suchen Verstärkung für unser Team; jeder Eintrag führt zur Quelle.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Sprechen Sie</span> <em><span class="nw">uns gerne an.</span></em></h2>'+
   '<p class="sub" data-r>Wenn Sie an einer individuellen Solarlösung interessiert sind, beraten wir Sie gerne: von Solarmodulen über Laderegler und Speichersysteme bis zur Integration in Ihre Applikation.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>SOLARC Innovative Solarprodukte GmbH<br>Glogauer Straße 21<br>10999 Berlin</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Service</span><p data-r><a class="ul" href="'+SO+'deutsch/downloads/" target="_blank" rel="noopener">Katalog und Datenblätter</a><br><a class="ul" href="'+SO+'deutsch/kontakt/" target="_blank" rel="noopener">Kontaktformular</a><br><a class="ul" href="'+SO+'deutsch/stellenangebote/" target="_blank" rel="noopener">Stellenangebote</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>SOLARC Innovative Solarprodukte GmbH<br>Glogauer Straße 21, 10999 Berlin</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/leistungen">Leistungen</a><br><a class="ul" href="#/referenzen">Referenzen</a><br><a class="ul" href="#/aktuelles">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Produkte</span>Solarmodule<br>Laderegler und DC/DC-Wandler<br>GPS-Ortungssysteme<br>Messtechnik für Windkraft und PV</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Michroma\',Arial,sans-serif;font-weight:400;font-size:54px;letter-spacing:.3em">SOLARC</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 SOLARC<span class="nomob"> Innovative Solarprodukte</span> GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",entwicklung:"story",produkte:"produkte",leistungen:"leistungen",referenzen:"referenzen",unternehmen:"unternehmen",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"SOLARC Innovative Solarprodukte GmbH — Solarmodule und solare Stromversorgung im Kleinformat",x:"Start"};
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
