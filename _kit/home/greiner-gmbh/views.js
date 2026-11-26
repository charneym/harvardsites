/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function hist(){return '<ol class="sg-tl">'+HIST.map(function(h){return '<li data-r><span class="y">'+esc(h[0])+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function team(){
  return '<div class="mh"><div class="mh-group"><p class="mh-label">Ansprechpartner</p><ul class="mh-list">'+TEAM.map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<span class="lab eyebrow" data-r>MEDBEST<span class="nomob"> · Medizinische Liegen und Stühle</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Liegen für die Medizin,</span></span> <span class="l"><em><span class="nw">aus Pleidelsheim.</span></em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Seit 1972 entwickelt und fertigt das Familienunternehmen GREINER medizinische Liegen und Stühle, für Dialyse, Infusion, ambulantes Operieren, Untersuchung und Pflege.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/medbest">Zu den Liegen '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>We design quality.</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Funktionale Produkte</span> <span class="nw">in ansprechendem Design</span> <span class="nw">in höchster Qualität,</span> <em><span class="nw">nach den Werten</span> <span class="nw">unseres Gründers</span> <span class="nw">Walter Greiner.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1922</span><p class="k">Gegründet als kleine mechanische Werkstatt, heute in dritter und vierter Generation geführt</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">220<sup>kg</sup></span><p class="k">Maximales Patientengewicht der Multiline Next DC und AC+</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">350<sup>m²</sup></span><p class="k">Ausstellungsfläche im Firmengebäude in Pleidelsheim</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Multiline Next DC</span><h2 class="d3"><span class="nw">Eine Liege,</span> <em class="nw">jede Position.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sitzen</span><span>Relax</span><span>Liegen</span><span>Notfall</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Leicht einsteigen,</span> <span class="nw">ab 54 cm.</span></h2><p>Die niedrige Einstiegshöhe von 54 cm, die breite Liegefläche und die 5-Punkt-Armauflagen machen den Platz an der Dialyse ergonomisch, für Patienten und Pflegeteam.</p></article>'+
     '<article class="step"><h2><span class="nw">Die Relax-Position,</span> <span class="nw">mit Zero-Gravity.</span></h2><p>Rücken-, Sitz- und Beinteil verstellen sich elektromotorisch, schnell, leise und stufenlos, über die Wahl- und Steuertasten des GREINER Bedienelements.</p></article>'+
     '<article class="step"><h2><span class="nw">Ganz flach</span> <span class="nw">in die Bettlage.</span></h2><p>Eine Liegefläche von 220 × 60 cm, 9 cm stark gepolstert, und ein Höhenhub von 54 auf 75 cm für die Arbeit am Patienten.</p></article>'+
     '<article class="step"><h2><span class="nw">Trendelenburg in</span> <span class="nw">11 Sekunden.</span></h2><p>Im Notfall bringen die Motoren den Patienten aus der Sitzposition in 11 Sekunden in die Trendelenburglage, auf Wunsch über den Fuß- und Notschalter.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="medbest" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>MEDBEST</span><h2 class="d2 split"><span class="nw">Liegen und Stühle</span> <em class="nw">für die Medizin.</em></h2></div><p data-r>Für Klinik und Praxis: Liegen und Stühle für Dialyse, Infusion und Onkologie, ambulantes Operieren, Untersuchung, Transport und Pflege, über den Fachhandel in Deutschland und weltweit.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec dark" id="bereiche" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Bereiche</span><h2 class="d2 split"><span class="nw">Drei Bereiche,</span> <em class="nw">ein Anspruch.</em></h2></div><p data-r>Hochwertige Sitze für Medizin, Friseursalon und Automobilinterieur, entwickelt und gefertigt in Pleidelsheim.</p></div>'+
   '<div class="svc">'+
    '<div class="svc-c" data-r><span class="lab">Medbest</span><h3><span class="nw">Medizinische Liegen</span> <span class="nw">und Stühle</span></h3><p>Seit 1972. Die Liegengeneration Multiline Next setzt seit 2016 Maßstäbe in Infusionstherapie, ambulanter Chirurgie und Dialyse.</p></div>'+
    '<div class="svc-c" data-r><span class="lab">Hairline</span><h3><span class="nw">Friseurstühle und</span> <span class="nw">Waschsessel</span></h3><p>Wo 1922 alles begann. Der Herrenfriseurstuhl Modell 903 ist seit 1972 ein gefragter Klassiker, die Waschanlagen sind jetzt höhenverstellbar.</p></div>'+
    '<div class="svc-c" data-r><span class="lab">Traffic</span><h3><span class="nw">Sitze für Auto</span> <span class="nw">und Nutzfahrzeug</span></h3><p>Vom Engineering bis zum fertigen Sitz: Erstausrüstung aus einer Hand und ergonomische Nachrüstsitze der Marke scheel-mann.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">In Familienhand</span> <em class="nw">seit 1922.</em></h2></div><p data-r>Mit Kopfstützen für Friseurstühle beginnt 1922 die Geschichte von GREINER. Heute zertifiziert nach DIN EN ISO 9001 und DIN EN ISO 13485, mit dem Null-Fehler-Prinzip in jedem Schritt.</p></div>'+
   hist()+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Auf den Messen</span> <em class="nw">der Branche.</em></h2></div><p data-r>Von der MEDICA bis zur TOP HAIR. Jeder Eintrag verweist auf seine Quelle.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihre Patienten,</span> <em class="nw">unsere Liegen.</em></h2>'+
   '<p class="sub" data-r>Fragen zu unseren Produkten oder zum Unternehmen? Schreiben Sie uns, wir melden uns schnellstmöglich. Oder vereinbaren Sie einen Termin im Showroom in Pleidelsheim.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail an GREINER '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Firmensitz</span><p data-r>GREINER GmbH<br>Wettestraße 1<br>74385 Pleidelsheim<br>Deutschland</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Anfahrt</span><p data-r>Verkehrsgünstig an der A81, umgeben von Weinbergen. Rund 30 Minuten bis Stuttgart, kostenfreie Parkplätze auf dem Firmengelände.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Firmensitz</span>GREINER GmbH<br>Wettestraße 1, 74385 Pleidelsheim</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/medbest">Medbest</a><br><a class="ul" href="#/positionen">Positionen</a><br><a class="ul" href="#/bereiche">Bereiche</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Bereiche</span>Medbest · Medizinische Liegen<br>Hairline · Friseurstühle<br>Traffic · Fahrzeugsitze</div>'+
  '</div><svg class="bigsvg flogo" viewBox="130 27 413 58" aria-hidden="true"><path d="'+GRD+'"/></svg>'+
  '<div class="legal"><span class="lab">© 2026 GREINER GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",positionen:"story",medbest:"medbest",bereiche:"bereiche",unternehmen:"unternehmen",news:"news",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"GREINER GmbH — Medizinische Liegen und Stühle aus Pleidelsheim",x:"Start"};
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
