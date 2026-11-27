/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">'+"Details"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Ansprechpartner</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* four quality commitments (hpf-elektronik.de > Home "GMP", Unternehmen, Blisterkontrollsystem EOK FA) */
function caps(){var C=[
  ["GMP","<span class=\"nw\">Dokumentiert</span> <span class=\"nw\">nach GMP-Vorgaben</span>","Zu jedem System gehören Bedienungs- und Wartungshandbücher sowie Design-, Installations-, Funktions- und Leistungsqualifizierung (DQ, IQ, OQ, PQ). Jedes Produkt durchläuft eine interne Abnahme (FAT); auf Wunsch begleiten wir die Werksabnahme beim Kunden (SAT).",'<rect x="12" y="8" width="32" height="40"/><path d="M18 18H38M18 25H38M18 32H30"/><path class="a" d="M30 40L34 44L42 34"/>'],
  ["21 CFR Part 11","<span class=\"nw\">Bereit für die</span> <span class=\"nw\">elektronische Dokumentation</span>","Auf die Anforderung der FDA hat HPF mit der Entwicklung von 21 CFR Part 11 für alle HPF-Kontrollsysteme reagiert. So ist die Vernetzung in die elektronische Prozessdokumentation garantiert.",'<rect x="8" y="12" width="40" height="28"/><path d="M20 46H36M28 40V46"/><path class="a" d="M16 26H24L28 20L32 32L36 26H40"/>'],
  ["Hygienic Design","<span class=\"nw\">Lüfterlos und</span> <span class=\"nw\">leicht zu reinigen</span>","Die EOK FA kommt dank effizienter Komponenten und ausgeklügeltem Temperaturmanagement in Kamera, Beleuchtung und CPU/Display-Einheit ohne Lüfter aus, ist ohne sichtbare Kabel voll in die Anlage integriert und schraubenlos zum Produkt hin.",'<circle cx="28" cy="28" r="18"/><path d="M28 10V46M10 28H46"/><path class="a" d="M15 15L41 41"/>'],
  ["Nachrüstbar","<span class=\"nw\">Auch für</span> <span class=\"nw\">bestehende Linien</span>","Alle Systeme lassen sich den individuellen Anforderungen anpassen und können auch nachträglich in Ihre Verpackungslinie integriert werden. Vorabtests Ihrer Produkte und fachmännische Unterstützung bei der Validierung gehören dazu.",'<path d="M6 36H50"/><rect x="18" y="16" width="20" height="14"/><path class="a" d="M28 4V14M24 10L28 14L32 10"/><circle class="f" cx="28" cy="36" r="2.2"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="900" height="1084" alt="HPF Blisterkontrollsystem EOK FA mit Monitor und Edelstahl-Prüfkopf" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Optoelektronische Kontrollsysteme<span class="nomob"> · Urbach</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Qualität im Blister,</span> <span class="l"><em class="nw">sichtbar gemacht.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Seit 1980 entwickelt HPF Elektronik in Urbach Kamera-, Riss- und Codelesesysteme für Verpackungslinien. Pharma-, Food- und Kosmetikunternehmen weltweit setzen sie ein.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/systeme">Unsere Systeme '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Seit 1980 in Urbach</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Die zuverlässige Kontrolle</span> <span class="nw">von Füllgut und Packmittel</span> <em><span class="nw">macht die Qualität</span> <span class="nw">der Inhalte</span> <span class="nw">und der Verpackung sichtbar.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">5 µm</span><p class="k">Risse in Aluminium-Laminatfolie, die das EOK CR bei empfindlicher Einstellung sicher erkennt</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">12 MP</span><p class="k">Auflösung der Farbkamera im Blisterkontrollsystem EOK FA</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40+</span><p class="k">zufriedene Kunden weltweit, in Pharma, Food und Kosmetik</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Blisterkontrollsystem EOK FA</span><h2 class="d3"><span class="nw">Vier Schritte,</span> <em class="nw">jeder Napf geprüft.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Ausleuchten</span><span>Erfassen</span><span>Auswerten</span><span>Ablegen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Weißes Licht,</span> <span class="nw">ohne Glanzlichter.</span></h2><p>Im Auflichtverfahren wird das Füllgut mit weißem Licht angestrahlt. Die temperaturkompensierte LED-Beleuchtung leuchtet es gleichmäßig und ohne störende Glanzlichter aus.</p></article>'+
     '<article class="step"><h2><span class="nw">Die Farbkamera</span> <span class="nw">im Maschinentakt.</span></h2><p>Ein Signal der Maschine synchronisiert die Farbkamera, die das Bild des Blisters erfasst. Das Objektiv wird je nach maximaler Folienbreite und Aufnahmeabstand gewählt.</p></article>'+
     '<article class="step"><h2><span class="nw">Farbe, Kontur,</span> <span class="nw">Bruchstück, Spot.</span></h2><p>Der Industrie-PC wertet das Bild gegen die eingelernten Farbklassen aus: Befüllung, Bruchstücke, Kontur und Spots, mit getrennt einstellbaren Toleranzen für Größe und Farbe.</p></article>'+
     '<article class="step"><h2><span class="nw">Jedes Ergebnis</span> <span class="nw">wird festgehalten.</span></h2><p>Das integrierte Schieberegister übernimmt das Ergebnis, die Bilddatenbank legt Ergebnisbilder ab, und die Auswertestatistik zeigt Details zu jedem einzelnen Napf.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="systeme" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Systeme</span><h2 class="d2 split"><span class="nw">Kamera, Durchlicht</span> <em class="nw">und Code.</em></h2></div><p data-r>HPF entwickelt optoelektronische Kontrollsysteme für Blisterverpackungen, Codierungen, Druckbilder, Risse in Alufolien, Ampullen, Nachverfolgbarkeit und Sonderlösungen.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="qualitaet" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Qualität</span><h2 class="d2 split"><span class="nw">Gebaut für</span> <em class="nw">die Pharmaindustrie.</em></h2></div><p data-r>Die hohen Anforderungen der Pharmaindustrie wie GMP und EMV-Richtlinien erfüllen HPF-Systeme ebenso wie die Vorgaben der FDA und den Anspruch auf lückenlose Validierung.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Innovativ und</span> <em class="nw">weltweit verbunden.</em></h2></div><p data-r>Die Kontrollsysteme von HPF Elektronik haben sich seit 1980 bei Pharma-, Food- und Kosmetikunternehmen weltweit erfolgreich positioniert, sicher und praxisbewährt im Einsatz.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>Entwicklungen</span><ul>'+
     '<li data-r><b>Risskontrolle</b>Die Risskontrolle von Alu-Formpackungen, vor der Befüllung, im Durchlicht.</li>'+
     '<li data-r><b>Weißes LED-Licht</b>Die erste Beleuchtung für Kamerasysteme mit weißen Leuchtdioden.</li>'+
     '<li data-r><b>Kamerasysteme</b>Hochpräzise Kamerasysteme für die Kontrolle von Füllgut und Packmittel.</li>'+
     '<li data-r><b>Track & Trace</b>Softwarelösungen für die Rückverfolgbarkeit von Arzneimitteln.</li>'+
    '</ul></div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Unsere Ingenieure</span><p class="cr" data-r><span>Beratung und Projektierung</span><span>Maßgeschneiderte Komplettlösungen</span><span>Vorabtests Ihrer Produkte</span><span>Unterstützung bei der Validierung</span><span>Technischer Support</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News und Messen</span><h2 class="d2 split"><span class="nw">Zuletzt in Düsseldorf,</span> <em class="nw">auf der interpack.</em></h2></div><p data-r>Auf vielen Messen rund um den Globus lernen Sie HPF persönlich kennen, zuletzt auf der interpack 2026 in Halle 16. Jeder Eintrag verweist auf seine Quelle.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihre Linie,</span> <em class="nw">sicher kontrolliert.</em></h2>'+
   '<p class="sub" data-r>Wir freuen uns über Ihr Interesse und stehen Ihnen gerne für alle Anliegen und Fragen zur Verfügung. Unsere Spezialisten entwickeln auf Wunsch ein bedarfsgerechtes Servicekonzept.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+SALES+'">E-Mail an den Vertrieb '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Adresse</span><p data-r><span>HPF Hans P. Friedrich Elektronik GmbH</span><br><span>Neumühleweg 34</span><br><span>73660 Urbach</span></p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+SALES+'">'+SALES+'</a><br><span>Fax '+FAXT+'</span></p></div>'+
    '<div><span class="lab" data-r>Support</span><p data-r><a class="ul" href="mailto:'+SUPPORT+'">'+SUPPORT+'</a><br><span>Montag bis Freitag, 8 bis 17 Uhr</span><br><span>Telefon '+TELT+'</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresse</span>HPF Hans P. Friedrich Elektronik GmbH<br>Neumühleweg 34, 73660 Urbach</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/systeme">Systeme</a><br><a class="ul" href="#/qualitaet">Qualität</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Kontrollsysteme</span>Blisterkontrolle, Druckbildkontrolle, Risskontrolle, Codelesen und Track & Trace</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:400;font-size:44px;letter-spacing:.2em">HPF ELEKTRONIK</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 HPF Hans P. Friedrich Elektronik GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",systeme:"systeme",qualitaet:"qualitaet",unternehmen:"unternehmen",news:"news",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"HPF Elektronik — Kamera-, Riss- und Codelesesysteme für Verpackungslinien, Urbach",x:"Start"};
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
