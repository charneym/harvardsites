/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+c[1].split('|').map(function(x){return '<span class="nw">'+esc(x)+'</span>'}).join(' ')+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Mehr '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Optik","Optik und Messprinzip","Autokollimatoren, Kollimatoren und Fernrohre für spezielle Anwendungen, MTF-Messsysteme und Optik-Teststationen.",'<path d="M10 28C18 18 38 18 46 28C38 38 18 38 10 28Z"/><path class="a" d="M2 28H54"/><circle class="f" cx="28" cy="28" r="2.2"/>'],
  ["Mechanik","Konstruktion und Fertigung","Mechanische Konstruktion und zerspanende Bearbeitung: die hochpräzisen Fräs- und Drehteile der Messgeräte entstehen im eigenen Haus.",'<circle cx="28" cy="28" r="15"/><circle class="a" cx="28" cy="28" r="6"/><path d="M28 6V13M28 43V50M6 28H13M43 28H50"/><circle class="f" cx="28" cy="28" r="2.2"/>'],
  ["Software","Software für Messabläufe","Software für die Bildverarbeitung und die Automatisierung von Messabläufen, von SURFTENS über COMEF bis CROSSDETECT.",'<path d="M8 12H48V40H8Z"/><path class="a" d="M14 32L22 24L30 29L42 18"/><path d="M20 46H36"/><circle class="f" cx="42" cy="18" r="2.2"/>'],
  ["Montage","Justierung und Kalibrierung","Montage, Justierung und Kalibrierung im Haus. Installation und Service vor Ort übernimmt das Team weltweit, mit Vertretungen in vielen Ländern.",'<path d="M28 8V48"/><path d="M8 28H48"/><circle class="a" cx="28" cy="28" r="12"/><circle class="f" cx="28" cy="28" r="2.2"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3><span class="nw">'+esc(c[1])+'</span></h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Optische Messgeräte<span class="nomob"> · Frankfurt (Oder)</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Optische Messtechnik,</span> <span class="l acc">seit 1991.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>OEG entwickelt und baut automatische, hochpräzise und PC-gesteuerte Messmaschinen für optische, geometrische und physikalische Parameter. Installiert auf allen Kontinenten.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/branchen">Zu den Branchen '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Optik · Elektronik · Gerätetechnik</span>'+
   '<h2 class="txt" id="mani">Vom Messprinzip bis zur Kalibrierung entsteht jedes OEG-Messgerät <em>unter einem Dach.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1991</span><p class="k">gegründet in Frankfurt (Oder) von Dr.-Ing. Stephan Rothe und Dr.-Ing. Ulrich Glaubitz</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100.</span><p class="k">RINGMASTER ausgeliefert, 2021 an die Wallram Group</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2012</span><p class="k">seit diesem Jahr nach DIN EN ISO 9001 zertifiziert</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Kontaktwinkelmessung</span><h2 class="d3">Ein Tropfen, <em>ein Messwert.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Dosieren</span><span>Erfassen</span><span>Auswerten</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Der Tropfen wird gesetzt.</h2><p>Das Dosiersystem setzt einen Tropfen der Testflüssigkeit auf die Probe, ab 0,2 µl Volumen und mit einer Wiederholbarkeit von 0,1 µl, manuell oder motorisch.</p></article>'+
     '<article class="step"><h2>Die Kamera sieht sein Profil.</h2><p>Eine Kamera nimmt den liegenden Tropfen im Gegenlicht auf, nach der Sessile-Drop-Methode. Die Bildverarbeitung findet seine Kontur.</p></article>'+
     '<article class="step"><h2>Basislinie, Tangente, Winkel.</h2><p>SURFTENS misst den Kontaktwinkel nach DIN 55660-2 und berechnet aus bis zu fünf Testflüssigkeiten die freie Oberflächenenergie des Festkörpers.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="branchen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Industrie und Anwendungen</span><h2 class="d2 split">Messgeräte für <em>sieben Branchen.</em></h2></div><p data-r>Optische Mess- und Prüftechnik, Bildverarbeitung und automatisierte Komplettlösungen, für Kunden aus Industrie, Forschung und Bildung.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="kompetenzen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Kernkompetenzen</span><h2 class="d2 split">Alles im <em>eigenen Haus.</em></h2></div><p data-r>Das Know-how unserer Ingenieure und Techniker ist das wichtigste Kapital der Firma. Diese Prozesse finden komplett innerhalb der OEG GmbH statt.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split">Gegründet 1991, <em>neu geführt seit 2025.</em></h2></div><p data-r>Die bewährten Werte, Strukturen und Qualitätsstandards bleiben erhalten: Kunden und Partner behalten ihre vertrauten Ansprechpartner und das eingespielte Team.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Stellenangebote</span><p class="cr" data-r><span>Konstrukteur</span><span>Applikationsingenieure</span><span>Mechatroniker</span><span>Softwareentwickler</span><a class="ul" href="'+OG+'?p=22" target="_blank" rel="noopener">Am Standort Frankfurt (Oder)</a></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="messen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Messen und Neuigkeiten</span><h2 class="d2 split">Treffen Sie <em>uns in München.</em></h2></div><p data-r>OEG stellt regelmäßig auf der SEMICON Europa und der productronica aus, den Leitmessen der Elektronik- und Halbleiterfertigung.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Sprechen Sie</span> <em class="nw">mit uns.</em></h2>'+
   '<p class="sub" data-r>Für Anfragen, Angebote, Lohnmessungen und Service erreichen Sie uns direkt in Frankfurt (Oder).</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>OEG GmbH<br>Wildbahn 8i<br>15236 Frankfurt (Oder)</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Produkte</span><p data-r><a class="ul" href="'+OG+'public/media/pdf/6701963.pdf" target="_blank" rel="noopener">Produktübersicht als PDF</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>OEG GmbH<br>Wildbahn 8i, 15236 Frankfurt (Oder)</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/branchen">Branchen</a><br><a class="ul" href="#/kompetenzen">Kompetenzen</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/messen">Messen</a></div>'+
   '<div class="c"><span class="lab">Messgeräte</span>SURFTENS · FLATSCAN<br>RINGMASTER · PUNCHMASTER<br>Autokollimatoren · MTF</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="54" text-anchor="middle" style="font-family:\'Barlow Semi Condensed\',Arial,sans-serif;font-weight:600;font-size:66px;letter-spacing:.3em">OEG GMBH</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 OEG GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",prozess:"story",branchen:"branchen",kompetenzen:"kompetenzen",unternehmen:"unternehmen",messen:"messen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"OEG GmbH — Optische Messgeräte, Bildverarbeitung und Softwareentwicklung, Frankfurt (Oder)",x:"Start"};
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
