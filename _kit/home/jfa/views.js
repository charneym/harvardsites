/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">'+"Mehr erfahren"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span>'+(p.sum?'<span class="mh-sum">'+esc(p.sum)+'</span>':'')+'</div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Präzisionsmaschinenbau","Werkzeugmaschinen und Laser","Maschinenbasen, Portale und Achsaufbauten aus Granit für Werkzeugmaschinenbau, Mikrozerspanung und Laser-Materialbearbeitung, bis zur Ultrapräzision.",'<path d="M8 44H48"/><path d="M12 44V22H44V44"/><path class="a" d="M12 22H44"/><path d="M24 22V12H32V22"/><circle class="f" cx="28" cy="30" r="2.2"/>'],
  ["Messtechnik und Halbleiter","Messtechnik, Elektronik, Flatpanel","Mess- und Kontrollplatten, Prüfaufbauten und großvolumige Bauteile für dimensionelle Messtechnik, Automation, Elektronik, Halbleiter, Photovoltaik und Flatpanel.",'<rect x="8" y="34" width="40" height="10"/><path class="a" d="M8 30H48"/><path d="M28 10V26"/><path d="M22 10H34"/><circle class="f" cx="28" cy="30" r="2.2"/>'],
  ["Medizintechnik und Forschung","Medizintechnik und Institute","JFA-Produkte arbeiten in Medizintechnik und Automotive und in der Forschung, etwa am Fraunhofer-Institut für Produktionstechnologie IPT in Aachen.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M10 28H46"/><path d="M28 10V46"/><circle class="f" cx="28" cy="28" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Präzisionswerk Aschaffenburg<span class="nomob"> · seit 1929</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Wir messen</span> <span class="l">in µ-Präzision.</span> <span class="l"><em>Ganz genau.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Messmittel, Maschinenaufbauten und Sondermesstechnik aus natürlichem Hartgestein: Beratung, Konstruktion, Fertigung, Montage und Inbetriebnahme. Alles aus einem Werk.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Zu den Produkten '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Qualität mit Tradition, Tradition mit Zukunft</span>'+
   '<h2 class="txt" id="mani">Durch die große Fertigungstiefe bieten wir Komplettlösungen <span class="nw">aus einer Hand,</span> <span class="nw"><em>in JFA-Qualität.</em></span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1929</span><p class="k">von Johann Fischer gegründet, seit jeher familiengeführt, an der Ruhlandstraße in Aschaffenburg</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20 t</span><p class="k">Werkstückgewicht, bearbeitet an bis zu fünf Seiten in einer Aufspannung</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100</span><p class="k">Mitarbeiterinnen und Mitarbeiter, global tätig und regional verwurzelt</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Ein Winkelnormal entsteht</span><h2 class="d3">Vom Hartgestein <em>zum Messnormal.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Bearbeiten</span><span>Läppen</span><span>Kalibrieren</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Maschinell bearbeitet.</h2><p>Auf modernen Bohr-, Fräs- und Schleifzentren entsteht aus natürlichem Hartgestein der Grundkörper, mit eigenentwickelter Werkzeugtechnik und an bis zu fünf Seiten in einer Aufspannung.</p></article>'+
     '<article class="step"><h2>Von Hand optimiert.</h2><p>Die letzten Mikrometer werden manuell gearbeitet: Ebenheit, Geradheit und Rechtwinkligkeit optimieren wir in klimakonstanter Umgebung, im vollklimatisierten Läpp- und Montagezentrum.</p></article>'+
     '<article class="step"><h2>Rückführbar kalibriert.</h2><p>Im DAkkS-akkreditierten Kalibrierlabor wird die Winkelabweichung am 90°-Winkel gemessen und im Kalibrierschein dokumentiert, rückführbar auf nationale und internationale Normale.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split">Alles aus <em>einem Werk.</em></h2></div><p data-r>Vom einfachen Messplatz bis zur kundenspezifischen Messeinrichtung, vom präzisen Basisgranit bis zum steckerfertigen Maschinensystem: vom Einzelstück über Prototypen bis zur Serie.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="branchen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Branchen</span><h2 class="d2 split">Qualität <em>setzt sich durch.</em></h2></div><p data-r>Mess- und Kontrollplatten, Winkelnormale 90° und Rundlaufprüfeinrichtungen werden in vielen Branchen geschätzt und untrennbar mit dem Namen JFA verbunden.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="kalibrierdienst" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Kalibrierdienst</span><h2 class="d2 split"><span class="nw">Akkreditiert seit</span> <span class="nw"><em>über 30 Jahren.</em></span></h2></div><p data-r>Herstellerunabhängig und europaweit kalibrieren wir Mess- und Kontrollplatten, Messbalken und Winkelnormale 90°, auf Wunsch vor Ort. Abweichungen arbeiten wir direkt nach, so sind Ihre Messnormale schnell wieder einsatzbereit.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Kalibrierlabor</span><dl>'+
    '<div data-r><dt class="lab">Akkreditierung</dt><dd>DAkkS D-K-18423-01-00 nach DIN EN ISO/IEC 17025:2018</dd></div>'+
    '<div data-r><dt class="lab">Messgrößen</dt><dd>Geradheit, Ebenheit und Winkelabweichung an 90°-Winkeln</dd></div>'+
    '<div data-r><dt class="lab">Service vor Ort</dt><dd>Kalibrierung und neuwertige Instandsetzung am Einsatzort, mit Wartungsverträgen</dd></div>'+
    '<div data-r><dt class="lab">Qualitätsmanagement</dt><dd>Zertifiziert nach DIN ISO 9001:2015</dd></div>'+
   '</dl></div>'+
   '<div class="bk"><span class="lab kick" data-r>Werkstoffe</span><p class="cr" data-r><span>Natürliches Hartgestein</span><span>Grauguss</span><span>Invar und Titan</span><span>Glaskeramik</span><span>Al₂O₃, SiC, SiSiC</span><span>Mineralguss</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split">Präzision und Qualität <em>seit 1929.</em></h2></div><p data-r>Johann Fischer gründete 1929 einen Einmannbetrieb für Tuschier-, Mess- und Kontrollplatten aus Gusseisen. Heute ist JFA das Fertigungsunternehmen und der Dienstleister für Messtechnik und Präzisionsmaschinenbau, seit jeher familiengeführt.</p></div>'+
   team()+
   '<div class="qual"><span class="lab kick" data-r>Meilensteine</span><p class="cr" data-r><span>1929 Gründung</span><span>1988 Kalibrierlabor</span><span>2017 Läpp- und Montagezentrum</span><span>2026 Standorterweiterung</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Messen <em>und Termine.</em></h2></div><p data-r>Messeauftritte und Termine aus Aschaffenburg; jeder Eintrag führt zur Quelle.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split">Ganz <em>genau.</em></h2>'+
   '<p class="sub" data-r>Schildern Sie uns Ihre Aufgabe, vom Messmittel bis zur Sondermaschine. Wir entwickeln die passende Lösung, in Aschaffenburg.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>Johann Fischer Aschaffenburg<br>Präzisionswerk GmbH &amp; Co. KG<br>Ruhlandstraße 72–78<br>63741 Aschaffenburg</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Kalibrierdienst</span><p data-r><a class="ul" href="'+JF+'hcpg/p/10/kalibrierdienst/" target="_blank" rel="noopener">Leistungen ansehen</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>Johann Fischer Aschaffenburg<br>Ruhlandstraße 72–78, 63741 Aschaffenburg</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/kalibrierdienst">Kalibrierdienst</a><br><a class="ul" href="#/branchen">Branchen</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Produkte</span>Messmittel · Komponenten<br>Sondermesstechnik · Lohnfertigung<br>Kalibrierdienst</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="54" text-anchor="middle" style="font-family:\'Barlow Semi Condensed\',system-ui,sans-serif;font-weight:500;font-size:64px;letter-spacing:.3em">JFA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Johann Fischer Aschaffenburg</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",prozess:"story",produkte:"produkte",kalibrierdienst:"kalibrierdienst",branchen:"branchen",unternehmen:"unternehmen",news:"news",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Johann Fischer Aschaffenburg — Präzisionswerk für Messtechnik und Präzisionsmaschinenbau",x:"Start"};
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
