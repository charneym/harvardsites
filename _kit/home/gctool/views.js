/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">'+(c[0]=="Dienstleistung"?"Mehr erfahren":"Datenblätter")+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Leiterplatte","Laminate, gefüllt und halogenfrei","Bohren und Fräsen von gefüllten, keramisch gefüllten, halogenfreien und Hoch-Tg-Laminaten, Ritzen und Nutzentrennen, auch mit Kupfer auf den Außenlagen.",'<rect x="8" y="14" width="40" height="28"/><path class="a" d="M8 28H48"/><circle cx="18" cy="21" r="2.4"/><circle cx="38" cy="35" r="2.4"/><circle class="f" cx="28" cy="28" r="2.2"/>'],
  ["IMS und NE-Metalle","Aluminium, Kupfer, IMS","Bohrer, Fräser und Gewindefrässtifte für IMS auf Aluminium- oder Kupferbasis, mit und ohne keramischem Dielektrikum, und für Nichteisenmetalle.",'<path d="M8 40H48V46H8Z"/><path class="a" d="M8 36H48"/><path d="M8 32H48"/><path d="M28 10V30"/><circle class="f" cx="28" cy="10" r="2.2"/>'],
  ["Faserverbund und Keramik","CFK, GFK, Glas, Quarz, Keramik","Werkzeuge für CFK, GFK und Lötmasken sowie für Glas, Quarz, technische Keramiken und Silizium, wo unbeschichtetes Hartmetall schnell verschleißt.",'<path d="M10 44L22 12H34L46 44Z"/><path class="a" d="M16 28H40"/><path d="M22 12L28 28L34 12"/><circle class="f" cx="28" cy="28" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Diamantbeschichtung<span class="nomob"> · Weingarten</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Diamant beschichtete</span><span class="l">Werkzeuge:</span><span class="l"><em>die bessere Lösung.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>GCT beschichtet in Weingarten Bohrer und Fräser aus Vollhartmetall mit der MicroSpeed Diamantschicht, für Leiterplatte, IMS, NE-Metalle, CFK, Glas und technische Keramik.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/werkzeuge">Zu den Werkzeugen '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Wissen und Kompetenz in Kundennutzen transferieren</span>'+
   '<h2 class="txt" id="mani">Unser Wissen über Hartmetalle, Werkzeuggeometrien, Schleifverfahren und Diamantbeschichtung bringt <em>sofort umsetzbaren Kundennutzen.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">10.000</span><p class="k">HV0.05 Härte der GCT MicroSpeed Diamantschicht, extrem abrasionsbeständig</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6–20×</span><p class="k">Standwegerhöhung, von Leiterplattenwerkstoffen und IMS bis Glas, Keramik und Silizium</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0,05 mm</span><p class="k">Durchmesser des kleinsten Bohrers, den GCT mit der Multilayer-Diamantschicht beschichtet hat</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Produktionsablauf</span><h2 class="d3">Vom Hartmetall <em>zum Diamant.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Prüfen</span><span>Beschichten</span><span>Kontrollieren</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Geprüft und vorbehandelt.</h2><p>Jedes unbeschichtete Hartmetallwerkzeug durchläuft eine Eingangskontrolle und verschiedene nasschemische Vorbehandlungsprozesse, bevor es in die Beschichtungsanlage geht.</p></article>'+
     '<article class="step"><h2>Schicht für Schicht Diamant.</h2><p>Im CVD-Verfahren wächst Diamant aus einer Kohlenwasserstoff-Gasphase auf; atomarer Wasserstoff trägt Graphit und amorphen Kohlenstoff ab. So entsteht die MicroSpeed Schicht aus mehreren kristallinen und nanokristallinen Lagen.</p></article>'+
     '<article class="step"><h2>Zu hundert Prozent kontrolliert.</h2><p>Prozessbegleitende Prüfungen, ein Belastungstest und eine aufwendige optische Endkontrolle an allen Werkzeugen sichern eine gleichmäßige, prozesssichere Beschichtungsqualität in der Serie.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="werkzeuge" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Werkzeuge</span><h2 class="d2 split">Bohrer und Fräser, <em>Diamant beschichtet.</em></h2></div><p data-r>Vollhartmetallwerkzeuge mit MicroSpeed Diamantschicht, in der Dicke und Lagenzahl auf Anwendung, Durchmesser und Geometrie abgestimmt. Ausgewählte Durchmesser sind ab Lager erhältlich.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="anwendungen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Anwendungen</span><h2 class="d2 split">Für schwer zerspanbare <em>Werkstoffe.</em></h2></div><p data-r>Diamant beschichtete Werkzeuge machen neue und schwer zerspanbare Werkstoffe wirtschaftlich bearbeitbar, mit hoher Maßgenauigkeit und minimalem Werkzeugverschleiß. Die Parameterempfehlungen liefern wir zu jeder Anwendung.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="diamantschicht" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>MicroSpeed Diamantschicht</span><h2 class="d2 split">Diamant, Lage <em>für Lage.</em></h2></div><p data-r>Die GCT MicroSpeed Schicht besteht aus mehreren kristallinen und nanokristallinen Lagen, im CVD-Verfahren auf dafür geeigneten Hartmetallsorten abgeschieden. Die Schichtdicke wird prozessintern dokumentiert.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Merkmale</span><dl>'+
    '<div data-r><dt class="lab">Härte</dt><dd>10.000 HV0.05, extrem abrasionsbeständig</dd></div>'+
    '<div data-r><dt class="lab">Wärme und Reibung</dt><dd>Hohe Wärmeleitfähigkeit und gute Gleiteigenschaften</dd></div>'+
    '<div data-r><dt class="lab">Präzision</dt><dd>Hohe Maßgenauigkeit und Prozessfähigkeit durch minimalen Verschleiß</dd></div>'+
    '<div data-r><dt class="lab">Wirtschaftlichkeit</dt><dd>Deutliche Kosteneinsparungen durch längere Werkzeugstandzeiten</dd></div>'+
   '</dl></div>'+
   '<div class="bk"><span class="lab kick" data-r>Nachhaltig gefertigt</span><p class="cr" data-r><span>Energie aus Wasserkraft</span><span>Rohstoffe aus Nichtkonfliktregionen (Dodd-Frank Act)</span><span>ISO 9001:2015, TÜV SÜD</span><span>RoHS und REACh</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split">Ihr direkter Weg <em>nach Weingarten.</em></h2></div><p data-r>2018 feierte GCT sein 15-jähriges Firmenjubiläum, seit 2020 arbeiten in Weingarten sieben Beschichtungsanlagen. Flache Hierarchien und Teamarbeit sind unser Erfolgsrezept; unsere Vertriebspartner betreuen Kunden in Asien, Europa und den USA.</p></div>'+
   team()+
   '<div class="qual"><span class="lab kick" data-r>Vertretungen</span><p class="cr" data-r><span>China</span><span>Hongkong</span><span>Taiwan</span><span>Südkorea</span><span>Frankreich / Spanien</span><span>USA</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Neue Produkte <em>und Messen.</em></h2></div><p data-r>Neuheiten aus Weingarten, Pressemitteilungen und Messeauftritte; jeder Eintrag führt zur Quelle.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split">We are <em>diamond.</em></h2>'+
   '<p class="sub" data-r>Für Anfragen, Parameterempfehlungen, Muster und den Beschichtungsservice erreichen Sie uns direkt in Weingarten.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>GCT GmbH<br>Josef-Bayer-Straße 3<br>88250 Weingarten</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Parameter</span><p data-r><a class="ul" href="'+GC+'anwendungen/anwendungen.html" target="_blank" rel="noopener">Parameterempfehlungen ansehen</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>GCT GmbH<br>Josef-Bayer-Straße 3, 88250 Weingarten</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/werkzeuge">Werkzeuge</a><br><a class="ul" href="#/diamantschicht">Diamantschicht</a><br><a class="ul" href="#/anwendungen">Anwendungen</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Werkzeuge</span>Bohrer · Fräser<br>Gewindefrässtifte · Senker<br>Beschichtungsservice</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Marcellus\',Optima,serif;font-weight:400;font-size:60px;letter-spacing:.3em">GCT</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 GCT GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",prozess:"story",werkzeuge:"werkzeuge",diamantschicht:"diamantschicht",anwendungen:"anwendungen",unternehmen:"unternehmen",news:"news",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"GCT GmbH — Diamant beschichtete Bohrer und Fräser, Weingarten",x:"Start"};
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
