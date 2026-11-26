/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function hist(){return '<ol class="sg-tl">'+HIST.map(function(h){return '<li data-r><span class="y">'+esc(h[0])+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function team(){
  return '<div class="mh"><div class="mh-group"><p class="mh-label">Ansprechpartner</p><ul class="mh-list">'+TEAM.map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Beutel","<span class=\"nw\">Entstapelt oder</span> <span class=\"nw\">von der Rolle</span>","Vorgefertigte Beutel aller Hüllstoffarten und Beutelformen, oder Flach-, Seitenfalt- und Bodenbeutel, die die Maschine selbst von der Folienrolle fertigt.",'<path d="M14 48V18L22 10H34L42 18V48Z"/><path class="a" d="M22 10V18H34V10"/><path d="M14 18H42"/><circle class="f" cx="28" cy="34" r="2.2"/>'],
  ["Verschluss","<span class=\"nw\">Clip, Twist, Reiter,</span> <span class=\"nw\">Siegel oder Rolle</span>","Integrierte Verschließeinrichtungen für Clip, Twist und Reiter, oder die Übergabe an eine Thürlings 85 B mit Heißsiegelstation oder Rollverschluss. Zwei Verschlusssysteme lassen sich integrieren.",'<path d="M16 44V22Q16 14 28 14Q40 14 40 22V44"/><path class="a" d="M10 28H46"/><path d="M22 28V36M34 28V36"/><circle class="f" cx="28" cy="28" r="2.2"/>'],
  ["Bauweise","<span class=\"nw\">Robust, geschlossen,</span> <span class=\"nw\">schnell umgestellt</span>","Robuste, geschlossene Bauweise, einfache und schnelle Formatumstellungen und Handräder mit Skalen, die Einstellungen leicht reproduzierbar machen.",'<circle cx="28" cy="28" r="17"/><circle cx="28" cy="28" r="5"/><path class="a" d="M28 11V18M28 38V45M11 28H18M38 28H45"/><circle class="f" cx="28" cy="28" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<span class="lab eyebrow" data-r>Beutel-Verpackungsmaschinen<span class="nomob"> · Viersen</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Effizienz nach Maß,</span> <span class="l"><em class="nw">made in Germany.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Thürlings baut in Viersen Maschinen, die Beutel entstapeln oder von der Folienrolle fertigen, zur Befüllung präsentieren und verschließen, dazu Zählmaschinen und Förderer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/maschinen">Unsere Maschinen '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt aufnehmen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Unsere Philosophie</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Die Leidenschaft</span> <span class="nw">für Technik</span> <span class="nw">und Entwicklung</span> <span class="nw">ist die Basis</span> <em><span class="nw">für die Effizienz</span> <span class="nw">unserer Maschinen.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1959</span><p class="k">Fritz Thürlings gründet in Viersen eine Maschinenfabrik für Zählmaschinen</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><p class="k">Verschlussarten: Clip, Twist, Reiter, Heißsiegel und Rollverschluss</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20</span><p class="k">Rinnen in der Zählmaschine 4 H, in vier Sektionen zu je fünf, jede mit eigenem Zählbunker</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Linearpac 85 M</span><h2 class="d3"><span class="nw">Vom Stapel</span> <em class="nw">bis zum Siegel.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Entstapeln</span><span>Aufspannen</span><span>Befüllen</span><span>Verschließen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Aus dem Magazin</span> <span class="nw">in die Kette.</span></h2><p>Die Linearpac 85 M entstapelt vorgefertigte Blockbodenbeutel aus einem Magazin und platziert sie in der intermittierend linear laufenden Vorschiebekette.</p></article>'+
     '<article class="step"><h2><span class="nw">Zwei Halbschalen</span> <span class="nw">öffnen den Kopf.</span></h2><p>Auf der Füllstation tauchen zwei Halbschalen in den Beutelkopf ein und bilden eine ideale Präsentation des Beutels zur Befüllung.</p></article>'+
     '<article class="step"><h2><span class="nw">Der Beutel</span> <span class="nw">wird befüllt.</span></h2><p>Von den Halbschalen offen gehalten, nimmt der Beutel das Produkt auf. Die drei Ebenen des Beutels werden über Handräder mit Skalen eingestellt.</p></article>'+
     '<article class="step"><h2><span class="nw">Sechs Finger,</span> <span class="nw">ein Siegel.</span></h2><p>Auf der nächsten Station legen sechs Finger die Seitenfalte wieder ein. Die Versiegelung oder alternativ der Rollverschluss schließt den Beutel ab.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="maschinen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Maschinen</span><h2 class="d2 split"><span class="nw">Wenn Sie in Beutel</span> <em class="nw">verpacken möchten.</em></h2></div><p data-r>Beutelöffne-, Beutelherstell- und Verschließmaschinen, ein Beutelverschließgerät, eine Zählmaschine und Förderer: Der Name Thürlings steht für jahrzehntelange Erfahrung in Entwicklung und Herstellung von Verpackungs- und Zählmaschinen.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="technik" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technik</span><h2 class="d2 split"><span class="nw">Für schwierige</span> <em class="nw">Produkte gebaut.</em></h2></div><p data-r>Die geringe Fallhöhe und spezielle, von Thürlings entwickelte kundenspezifische Sondereinrichtungen bieten günstige Bedingungen auch für bruchempfindliche oder schwierige Produkte.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="service" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Ersatzteile und Montage</span><h2 class="d2 split"><span class="nw">Ersatzteile schnell,</span> <em class="nw">Montage mit Sorgfalt.</em></h2></div><p data-r>Ein wichtiger Punkt unserer Philosophie ist unser Service. Schnell, mit großer Sorgfalt und einem Anspruch an Qualität stehen wir Ihnen mit unserem Montage-Team als leistungsstarker Partner zur Seite.</p></div>'+
   '<div class="svc">'+
    '<div class="svc-c" data-r><span class="lab">Ersatzteile</span><p class="nms"><span class="nm">Peter Thürlings</span><span class="nm">Tobias Muschke</span></p><p><a class="ul" href="mailto:'+SALES+'">'+SALES+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div class="svc-c" data-r><span class="lab">Montagen</span><p class="nms"><span class="nm">Felix Thürlings</span><span class="nm">Michael Lückertz</span></p><p><a class="ul" href="mailto:'+MONT+'">'+MONT+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div class="svc-c" data-r><span class="lab">Vertretungen</span><h3>Vor Ort in sechs Regionen</h3><p class="cr"><span>Deutschland</span><span>Schweiz</span><span>Österreich</span><span>Dänemark</span><span>Frankreich</span><span>Australien und Neuseeland</span></p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Seit 1959</span> <em class="nw">in Viersen.</em></h2></div><p data-r>Innovationsfreude, Teamgeist und Kundenorientierung sind die drei Säulen, die in der Vergangenheit zum Erfolg unseres Unternehmens führten und mit denen wir auch die Zukunft gestalten werden.</p></div>'+
   hist()+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="messen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Messen</span><h2 class="d2 split"><span class="nw">Zuletzt in Düsseldorf,</span> <em class="nw">auf der interpack.</em></h2></div><p data-r>Möchten Sie einen Messe-Termin vereinbaren, schreiben Sie eine kurze Info an Felix Thürlings. Jeder Eintrag verweist auf seine Quelle.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihr Produkt,</span> <em class="nw">Ihr Beutel.</em></h2>'+
   '<p class="sub" data-r>Wenn Sie Ihre Produkte in Beutel verpacken möchten, sind Sie bei uns genau richtig. Lassen Sie sich überzeugen vom technischen Know-how und der Qualität unserer Maschinen.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail an Thürlings '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Adresse</span><p data-r>Thürlings Verpackungsmaschinen GmbH<br>Vockelsteinstraße 19<br>41749 Viersen</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Service</span><p data-r>Ersatzteile <a class="ul" href="mailto:'+SALES+'">'+SALES+'</a><br>Montagen <a class="ul" href="mailto:'+MONT+'">'+MONT+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresse</span>Thürlings Verpackungsmaschinen GmbH<br>Vockelsteinstraße 19, 41749 Viersen</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/maschinen">Maschinen</a><br><a class="ul" href="#/ablauf">Ablauf</a><br><a class="ul" href="#/service">Service</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Programm</span>Clippac 30 D · Clipper 70 B<br>Thürlings 80 B · 85 B<br>Linearpac 85 M · Zählmaschine 4 H</div>'+
  '</div><svg class="bigsvg flogo" viewBox="2 2 302 36.4" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="'+LOGOD+'"/></svg>'+
  '<div class="legal"><span class="lab">© 2026 Thürlings Verpackungsmaschinen GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",ablauf:"story",maschinen:"maschinen",technik:"technik",service:"service",unternehmen:"unternehmen",messen:"messen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Thürlings Verpackungsmaschinen — Beutel-Verpackungsmaschinen und Zählmaschinen aus Viersen",x:"Start"};
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
