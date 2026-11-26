/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+c[1].split('|').map(function(x){return '<span class="nw">'+esc(x)+'</span>'}).join(' ')+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Mehr '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Kinder & Jugend","Tische, die mitwachsen","Schul- und Kindertische, höhen- und neigungsverstellbar, mit abgerundeten Kanten und den Sitz- und Tischhöhen nach DIN ISO 5970.",'<path d="M10 22H40L46 16"/><path class="a" d="M25 22V44M17 44H33"/><circle class="f" cx="46" cy="16" r="2.2"/>'],
  ["Therapie","Therapietische und Bänke","Therapietische mit neigbarer, teils geteilter Platte, platzsparende Wandtische, Bänke mit Rastverstellung und Stehhilfen.",'<path d="M12 40L40 14"/><path class="a" d="M28 30V46M20 46H36"/><circle class="f" cx="40" cy="14" r="2.2"/>'],
  ["Schulung","Lernen am Bildschirm","Multifunktionstische für IT-Schulungsräume und Lehr-Lern-Umgebungen, mit Monitor unter Glas oder versenkbar im Tisch.",'<path d="M8 26H48"/><path class="a" d="M20 26L24 18H34L38 26"/><path d="M14 26V44M42 26V44"/><circle class="f" cx="29" cy="22" r="2"/>'],
  ["Büro & Arbeit","Sitzen und Stehen","Sitz-Steh-Arbeitstische fürs Büro, Logistiktische und Tische für Stabs- und Koordinationsräume von Verwaltung, Polizei und Feuerwehr.",'<path d="M8 20H48"/><path class="a" d="M22 20V44M34 20V44"/><path d="M16 44H40"/><circle class="f" cx="28" cy="12" r="2.2"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3><span class="nw">'+esc(c[1])+'</span></h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Feinmechanik seit 1948<span class="nomob"> · Buseck-Oppenrod</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Tische, die sich</span> <span class="l nw acc">jedem Körper anpassen.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Möckel konstruiert, fertigt und vertreibt höhen- und neigungsverstellbare ergo-Tische, Therapietische und Sitz-Steh-Arbeitsplätze für Schulen, Therapieräume und Büros.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Unsere Produkte '+ARR+'</a><a class="btn" href="#/kontakt">Beratung anfragen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Qualität zu Ihrem Nutzen</span>'+
   '<h2 class="txt" id="mani">In der Rehabili­tation gelten die höhen­verstell­baren Tische von Möckel als Maßstab. Sie stehen überall dort, wo verant­wortungs­voll mit der Gesundheit ihrer Benutzer umgegangen wird, <em>gleich <span class="nw">welcher Körpergröße.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1948</span><p class="k">Seit diesem Jahr fertigen wir ergonomische Schultische in eigener Manufaktur</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 Hebel</span><p class="k">stellt bei den Reihen N, S und F Höhe und Neigung stufenlos ein</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">18 Mon.</span><p class="k">Herstellergarantie auf alle Produkte, dazu lebenslanger Service</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Der Scherenhub</span><h2 class="d3"><span class="nw">Ein Hebel,</span> <em class="nw">Höhe und Neigung.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Lösen</span><span>Heben</span><span>Neigen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Der Hebel löst die Bremse.</h2><p>Bei den Tischen der Reihen N, S und F hält eine Lamellenbremse die Platte in Höhe und Neigung. Ein Zug am Handhebel löst sie.</p></article>'+
     '<article class="step"><h2>Die Schwingarme heben.</h2><p>Zwei parallel geführte Schwingarme tragen die Platte und heben sie schnell und sicher an, stufenlos vom Sitzen bis zum Stehen.</p></article>'+
     '<article class="step"><h2>Neigen und loslassen.</h2><p>Mit demselben Hebel neigt sich die Platte stufenlos. Lässt man ihn los, arretiert die Bremse Höhe und Neigung zugleich.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split"><span class="nw">Für jede Aufgabe</span> <em class="nw">der passende Tisch.</em></h2></div><p data-r>Scherenhub- und Säulenhubtische, variable Tische mit Rastung, basic-Tische, Bänke, Stehhilfen und Zeichentechnik. Die Zahlen im Namen verraten die Platte: 1 flach, 2 neigbar.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="einsatz" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Einsatzbereiche</span><h2 class="d2 split"><span class="nw">Vom Klassenzimmer</span> <em class="nw">bis ins Büro.</em></h2></div><p data-r>Die Zuordnung der Modelle ist nur eine mögliche Ordnung: Viele ergo-Tische arbeiten als Kindertisch, Therapiegerät und Arbeitstisch zugleich.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Eigene Manufaktur</span> <em class="nw">in Buseck.</em></h2></div><p data-r>Möckel konstruiert, fertigt und vertreibt Spezialmöbel für Büro, EDV, Schulung und Therapie sowie für Kommunikations- und Konferenzräume, in der eigenen Manufaktur in Buseck-Oppenrod.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Versprechen</span><p class="cr" data-r><span>Made in Germany</span><span>18 Monate Herstellergarantie</span><span>Lebenslanger Service</span><span>Spezialtische nach Kundenvorgabe</span></p></div>'+
   '<div class="bk"><span class="lab kick" data-r>Baureihen</span><p class="cr" data-r><span>ergo S</span><span>ergo N</span><span>ergo F</span><span>ergo P</span><span>ergo M</span><span>ergo MC</span><span>variable VP</span><span>basic P</span><span>Zeichenmaschinen LX</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Messe, Katalog</span> <em class="nw">und Tabellen.</em></h2></div><p data-r>Treffen Sie uns auf den Fachmessen für Rehabilitation, oder laden Sie Katalog und Höhentabelle direkt herunter.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Wir beraten Sie</span> <em class="nw">gern persönlich.</em></h2>'+
   '<p class="sub" data-r>Für Angebote, Preise, Bedienungsanleitungen und Sonderanfertigungen schreiben Sie uns oder rufen Sie uns in Buseck an.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Manufaktur</span><p data-r>Möckel Feinmechanik<br>Bornweg 13–15<br>35418 Buseck-Oppenrod</p></div>'+
    '<div><span class="lab" data-r>Beratung</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Tel. <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Inhaber</span><p data-r>Holger Möckel e.K.<br>Amtsgericht Gießen<br>HRA 1206</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Manufaktur</span>Möckel Feinmechanik<br>Bornweg 13–15, 35418 Buseck-Oppenrod</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/einsatz">Einsatzbereiche</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/aktuelles">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Bereiche</span>Kinder & Jugend · Therapie<br>Schulung · Büro & Arbeit<br>Zeichentechnik</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="54" text-anchor="middle" style="font-family:\'Barlow Semi Condensed\',Arial,sans-serif;font-weight:500;font-size:64px;letter-spacing:.3em">MÖCKEL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Möckel Feinmechanik</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",scherenhub:"story",produkte:"produkte",einsatz:"einsatz",unternehmen:"unternehmen",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Möckel Feinmechanik — Höhen- und neigungsverstellbare Tische und Therapiemöbel aus Buseck",x:"Startseite"};
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
