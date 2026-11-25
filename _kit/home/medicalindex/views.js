/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prod(){return '<ul class="pfr mip">'+PROD.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function blog(){return '<ul class="nws">'+BLOG.map(function(n){return '<li><a href="'+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">Blog '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Exakt verarbeitet","Schon bei der Entwicklung arbeiten wir mit moderner Designersoftware, in der Fertigung mit CNC-Maschinen für eine exakte Verarbeitung.",'<path d="M8 44L28 12L48 44Z"/><path class="a" d="M18 44L28 28L38 44"/><circle class="f" cx="28" cy="12" r="2.4"/>'],
  ["Im Alltag geprüft","Klettverschlüsse aus Polyamid mit hoher Reiß- und Scheuerfestigkeit, Nähgarn aus der Schuh- und Möbelindustrie, mit unseren Kunden auf Alltagstauglichkeit geprüft.",'<path d="M10 20H46M10 28H46M10 36H46"/><path class="a" d="M14 14L42 42"/><circle class="f" cx="42" cy="42" r="2.4"/>'],
  ["Pflegeleicht beschichtet","Eine speziell für die Strahlenschutzkleidung entwickelte Beschichtung schützt die Kleidung vor den üblichen Verschmutzungen im OP.",'<path d="M28 8C20 20 14 28 14 36A14 14 0 0 0 42 36C42 28 36 20 28 8Z"/><path class="a" d="M21 37A7 7 0 0 0 28 44"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Röntgenschutzkleidung<span class="nomob"> aus Bad Rappenau</span> · seit 1997</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Strahlenschutz,</span><span class="l"><em>der passt.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Seit 1997 entwickelt und fertigt Medical Index Röntgenschutzkleidung, die bequem sitzt, zuverlässig schützt und lange hält: 30 Modelle in vielen Größen, über 40 Farben, dazu Strahlenschutzbrillen und Patientenschutz.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Zu den Produkten '+ARR+'</a><a class="btn" href="#/kontakt">Beratung anfragen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Farbenfrohe Röntgenschutzkleidung</span>'+
   '<h2 class="txt" id="mani">Röntgenschutzkleidung muss nicht immer blau, grün, grau oder rot sein. Bequemlichkeit, ausreichender Schutz, Langlebigkeit und Pflege sind die Maßstäbe, nach denen wir <em>entwickeln und fertigen.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">30</span><p class="k">Modelle in vielen Größen, so viele wie kein anderer in der Branche</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40+</span><p class="k">Farben und Designs, vom klassischen Blau bis zum Sternenhimmel</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">verschiedene Bleisorten zur Auswahl</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Vom Gewicht der Schürze</span><h2 class="d3">Schutz, der <em>nicht drückt.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Front</span><span>Doppel</span><span>Kostüm</span><span>Schwebend</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Die Frontschürze.</h2><p>Sie schützt vorne gegen Streustrahlung. Weiche Schulterpolster tragen das Gewicht, ein elastischer Gürtel entlastet auf Wunsch den Rücken. Sieben Verschlussarten stehen zur Wahl.</p></article>'+
     '<article class="step"><h2>Doppelt, wo es zählt.</h2><p>Bei der Doppelschürze überlappen sich zwei Frontteile. Aus zweimal 0,25 mmPb wird so eine Abdeckung von 0,50 mmPb, über den ganzen Oberkörper bis zum Knie.</p></article>'+
     '<article class="step"><h2>Die Last auf den Hüften.</h2><p>Rock und Weste: doppelter Schutz, halbe Last. Mehr als die Hälfte des Gewichts liegt auf den Hüften, und der Schnitt der Weste nimmt den Schultern zusätzlich Last ab.</p></article>'+
     '<article class="step"><h2>Die schwebende Schürze.</h2><p>Die neueste Entwicklung: eine patentierte Vorrichtung, die das Gewicht der Röntgenschürze zu 100 % von Schultern und Rücken nimmt. Vorgestellt im MEDICA-Magazin, Oktober 2025.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split">Für jede Tätigkeit <em>die passende Schürze.</em></h2></div><p data-r>Unser Standardsortiment, entstanden aus den Wünschen unserer Kunden: Schutzkleidung für Personal, Dentalpraxis, Kinder und Patienten, dazu Brillen, Zubehör und Aufbewahrung.</p></div>'+
   prod()+
  '</div></section>'+

  '<section class="sec light" id="qualitaet" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Qualität</span><h2 class="d2 split">Qualität <em>aus Deutschland.</em></h2></div><p data-r>Um unseren hohen Ansprüchen an Qualität gerecht zu werden, überlassen wir bei der Auswahl der Materialien nichts dem Zufall. Gefertigt wird in unserer Produktionsstätte in Bad Rappenau.</p></div>'+
   caps()+
   '<div class="bk lbk"><span class="lab kick" data-r>Zertifiziert nach</span><p class="cr" data-r>'+CERT.map(function(c){return '<span>'+esc(c)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split">Gefertigt in <em>Bad Rappenau.</em></h2></div><p data-r>1997 hat Medical Index die Entwicklung und Herstellung hochwertiger Röntgenschutzkleidung in den Fokus gestellt. Verwaltung und Produktion liegen beide in Bad Rappenau.</p></div>'+
   '<div class="uf">'+
    '<div class="uf-p"><span class="lab" data-r>Geschäftsführung</span><p class="uf-n" data-r>Kay Schüßler</p><p class="uf-r" data-r>Geschäftsführer, Medical Index GmbH</p>'+
     '<p class="uf-q" data-r>Zertifiziert nach ISO 9001 und ISO 13485. Gemeinsam mit unseren Kunden prüfen wir die Alltagstauglichkeit unserer Materialien und Produkte.</p></div>'+
    '<div class="uf-s">'+
     '<div class="site"><span class="lab" data-r>Verwaltung</span><p data-r>Mayerhof 5<br>74906 Bad Rappenau</p></div>'+
     '<div class="site"><span class="lab" data-r>Produktion</span><p data-r>An der Zeil 1<br>74906 Bad Rappenau</p></div>'+
     '<div class="site"><span class="lab" data-r>Register</span><p data-r>Amtsgericht Heilbronn<br>HRB 108261</p></div>'+
    '</div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split">Neu: die <em>schwebende Schürze.</em></h2></div><p data-r>Belastungen an Schultern, Nacken und Wirbelsäule gehören zu den größten Problemen beim Tragen von Röntgenschutzkleidung. Unsere jüngste Entwicklung nimmt sie ab.</p></div>'+
   '<div class="ev">'+
    '<span class="lab kick" data-r>Im Überblick</span>'+
    '<dl>'+
     '<div><dt class="lab" data-r>Die Entwicklung</dt><dd data-r>Eine patentierte Vorrichtung nimmt 100 % des Gewichts der Röntgenschürze von Schultern und Rücken.</dd></div>'+
     '<div><dt class="lab" data-r>Das Problem</dt><dd data-r>80 % der Anwender klagen über Belastungsschmerzen an Schultern, Nacken und Rücken.</dd></div>'+
     '<div><dt class="lab" data-r>Veröffentlicht</dt><dd data-r>MEDICA-Magazin, 1. Oktober 2025: „Erfolgreiche Entwicklungsarbeit, die schwebende Röntgenschürze“</dd></div>'+
     '<div><dt class="lab" data-r>Messe</dt><dd data-r>MEDICA 2025, Düsseldorf, 17. bis 20. November 2025</dd></div>'+
    '</dl>'+
   '</div>'+
   '<span class="lab kick sub-l pr" data-r>Aus unserem Blog</span>'+
   blog()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Wir beraten Sie gerne und unverbindlich</span>'+
   '<h2 class="big split">Wir können mehr, <em>als wir hier zeigen.</em></h2>'+
   '<p class="sub" data-r>Wenn Sie in unserem Standardsortiment nicht finden, was Sie suchen, nehmen Sie mit uns Kontakt auf. Wir freuen uns über neue Herausforderungen.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Verwaltung</span><p data-r>Medical Index GmbH<br>Mayerhof 5<br>74906 Bad Rappenau</p></div>'+
    '<div><span class="lab" data-r>Produktion</span><p data-r>Medical Index GmbH<br>An der Zeil 1<br>74906 Bad Rappenau</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Verwaltung</span>Mayerhof 5<br>74906 Bad Rappenau</div>'+
   '<div class="c"><span class="lab">Produktion</span>An der Zeil 1<br>74906 Bad Rappenau</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/qualitaet">Qualität</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/aktuelles">Aktuelles</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 70" aria-hidden="true"><text x="450" y="56" text-anchor="middle" style="font-family:\'Comfortaa\',Arial,sans-serif;font-weight:700;font-size:64px;letter-spacing:-.01em">medical index</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Medical Index GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technik:"story",produkte:"produkte",qualitaet:"qualitaet",unternehmen:"unternehmen",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Medical Index — Röntgenschutzkleidung aus Bad Rappenau, seit 1997",x:"Start"};
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
