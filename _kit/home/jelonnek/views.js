/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Mehr '+ARR+'</a></li>'}).join("")+'</ul>'}
function hist(){return '<ol class="sg-tl">'+HIST.map(function(h){return '<li data-r><span class="y">'+esc(h[0])+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function team(){
  return '<div class="mh"><div class="mh-group"><p class="mh-label">Ihre Ansprechpartner</p><ul class="mh-list">'+TEAM.map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<span class="lab eyebrow" data-r>Transformatoren und Wickelgüter<span class="nomob"> · Oberkochen</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Trafos und Spulen,</span></span> <span class="l"><em><span class="nw">genau nach</span> <span class="nw">Ihren Angaben.</span></em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Drehstrom- und Einphasentransformatoren, Drosseln, Spulen und Übertrager, von der 1,3 mm HF-Spule bis zum 20 kVA Drehstromtrafo. Berechnet mit eigenem Programm und gefertigt in Oberkochen, seit 1966.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Unsere Produkte '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Familienunternehmen seit 1966</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Ob Standardprodukt</span> <span class="nw">oder Sonderanfertigung:</span> <span class="nw">wir berechnen</span> <span class="nw">jedes Bauteil</span> <span class="nw">nach Ihren Angaben</span> <span class="nw">und fertigen es</span> <em><span class="nw">von der Einzelanfertigung</span> <span class="nw">bis zur Großserie.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">20<sup>kVA</sup></span><p class="k">Drehstrom- und Einphasentransformatoren bis ca. 20 kVA, in allen Schaltarten</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1,3<sup>mm</sup></span><p class="k">Die kleinsten HF-Spulen unseres Programms</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1966</span><p class="k">Gegründet von Gunter und Lotte Jelonnek, heute in dritter Generation</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Fertigung</span><h2 class="d3"><span class="nw">Vom Datenblatt</span> <em class="nw">zum fertigen Trafo.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Berechnen</span><span>Wickeln</span><span>Kern</span><span>Tränken</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Berechnet mit</span> <span class="nw">eigenem Programm.</span></h2><p>Ein eigens entwickeltes Programm berechnet die Daten für Ihren Transformator genau, schnell und flexibel, passend für Ihre Schaltung. So muss eine Sonderanfertigung nicht teuer sein.</p></article>'+
     '<article class="step"><h2><span class="nw">Kupferlackdraht auf</span> <span class="nw">den Spulenkörper.</span></h2><p>Primär- und Sekundärwicklung werden auf Spulenkörper aus glasfaserverstärktem Polyamid gewickelt, alle Materialien UL-gelistet. Kupfer verbindet die besten Leiteigenschaften mit hoher Lebensdauer.</p></article>'+
     '<article class="step"><h2><span class="nw">Lage für Lage</span> <span class="nw">zum Blechkern.</span></h2><p>Die Bleche werden in den Spulenkörper geschichtet, in allen gängigen Schnitten und Eisenqualitäten, für Einphasen- wie für Drehstromtransformatoren.</p></article>'+
     '<article class="step"><h2><span class="nw">Getränkt unter Vakuum,</span> <span class="nw">dann angeschlossen.</span></h2><p>Die Vakuum-Tränkung schützt die Wicklung vor Umwelteinflüssen und verbessert Wärmeableitung und Isolation. Angeschlossen wird nach Wunsch, an Trafoklemmen, Reihenklemmen oder offenen Enden.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split"><span class="nw">Fünf Bauteile,</span> <em class="nw">jedes nach Maß.</em></h2></div><p data-r>Drehstromtrafo, Einphasentrafo, Übertrager, Spule oder Drossel: ob Standardprodukt oder Sonderanfertigung, wir haben das Richtige für Sie.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec dark" id="technik" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technik</span><h2 class="d2 split"><span class="nw">Draht, Spulenkörper</span> <em class="nw">und Verguss.</em></h2></div><p data-r>Was in unseren Transformatoren und Wickelgütern steckt, und was wir rund um das Bauteil für Sie übernehmen.</p></div>'+
   '<div class="svc">'+
    '<div class="svc-c" data-r><span class="lab">Draht</span><h3>Kupferlack- und Backlackdraht</h3><p>Lötbare und nicht lötbare Lackdrähte mit Temperaturindex von 155 bis 240, Drähte mit quadratischem Querschnitt und Litzen in unterschiedlichster Ausführung. Ein großer Teil ist am Lager.</p></div>'+
    '<div class="svc-c" data-r><span class="lab">Spulenkörper</span><h3>M, EI, UI, RM, EFD, ETD</h3><p>Für Blech- und Ferritkerne, aus PA6-30H oder PA6.6-30H, für besondere Anwendungen aus Thermoplasten mit höherer Temperaturbeständigkeit, mit offenen Enden, Pins oder SMD.</p></div>'+
    '<div class="svc-c" data-r><span class="lab">Verguss und Montage</span><h3><span class="nw">Verguss, Gehäuse</span> <span class="nw">und Lötarbeiten</span></h3><p>Vakuumverguss verhindert Lufteinschlüsse und verbessert Hochspannungsfestigkeit und Wärmeleitung. Auf Wunsch der Einbau in Gehäuse mit Steckern, Kabeln und Sicherungsautomaten.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Präzision und Erfahrung</span> <em class="nw">seit 1966.</em></h2></div><p data-r>Ein Familienunternehmen in Oberkochen, in den Tälern des Kochers zwischen Albuch und Härtsfeld. Zwölf qualifizierte Mitarbeiterinnen und Mitarbeiter fertigen hier Speziallösungen nach Kundenwunsch.</p></div>'+
   hist()+
   team()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Sie nennen die Aufgabe,</span> <em class="nw">wir die Lösung.</em></h2>'+
   '<p class="sub" data-r>Nennen Sie uns Spannungen, Leistung, Bauform und Stückzahl, ob Einzelstück oder Großserie. Zuletzt waren wir auf der electronica 2026 in München, Halle A5, Stand 301.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail an Jelonnek '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Werk</span><p data-r>Jelonnek Transformatoren und Wickelgut GmbH<br>Röchlingstraße 7<br>73447 Oberkochen<br>Postfach 1207, 73443 Oberkochen</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Anfahrt</span><p data-r>Mit dem PKW schnell über die A7, Ausfahrt Oberkochen, oder über die Bundesstraße B19.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Werk</span>Jelonnek Transformatoren und Wickelgut GmbH<br>Röchlingstraße 7, 73447 Oberkochen</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/fertigung">Fertigung</a><br><a class="ul" href="#/technik">Technik</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Programm</span>Drehstrom- und Einphasentrafos<br>Drosseln · Spulen · Übertrager<br>Registergericht Ulm, HRB 500 519</div>'+
  '</div><svg class="bigsvg flogo" viewBox="0 0 1000 104" aria-hidden="true"><text x="500" y="92" text-anchor="middle">JELONNEK</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Jelonnek Transformatoren und Wickelgut GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",fertigung:"story",produkte:"produkte",technik:"technik",unternehmen:"unternehmen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Jelonnek — Transformatoren und Wickelgüter aus Oberkochen",x:"Start"};
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
