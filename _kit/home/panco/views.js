/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><div class="pgm"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[2])+'</span></div><p>'+esc(c[3])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["INPHAZE HR EIS","Hochauflösendes Impedanzspektrometer","Analyse von Schichten und Strukturen auf molekularer Ebene, mit einer Phasenauflösung bis 0,001°. PANCO übernimmt Service, technischen Support, Installation, Schulung und Testmessungen.",'<path d="M6 40h44"/><path class="a" d="M8 38C14 38 16 14 22 14S30 34 36 30 44 22 50 22"/><circle class="f" cx="22" cy="14" r="2.4"/>'],
  ["TEGeta","Messgerät für thermoelektrische Generatoren","Misst die thermischen und elektrischen Eigenschaften von Materialien und insbesondere die Effektivität thermoelektrischer Generatoren.",'<rect x="10" y="12" width="36" height="6"/><rect x="10" y="38" width="36" height="6"/><path d="M16 18v20M24 18v20M32 18v20M40 18v20"/><path class="a" d="M10 44h36"/>'],
  ["DTA / TG","Thermoanalyse mit Thermowaage","Schmelzpunkte und Schmelzenthalpien, Gewichtsänderungen unter verschiedenen Atmosphären oder im Vakuum: Rückschlüsse auf chemische Prozesse und Langzeitstabilität.",'<path d="M8 44h40M8 44V10"/><path class="a" d="M10 40C20 40 22 40 26 30S30 16 34 16 40 26 48 26"/>'],
  ["Peltierelemente","Ab Lager, bis 200 °C","Standardmodule 40 × 40 und 50 × 50 mm; die T200-Typen sind durch ein spezielles Lötverfahren bis 200 °C einsetzbar, mit teflonisolierten Anschlüssen. Alle Elemente sind versiegelt.",'<rect x="8" y="16" width="40" height="24"/><path d="M8 22h40M8 34h40"/><path class="a" d="M14 40v8M22 40v8"/>']];
  return '<div class="caps four">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+c[1]+'</span><h3 data-r>'+c[0]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function consult(){var C=[
  ["Kühlen ohne Kompressor","Sie wollen etwas kühlen, haben für einen Kompressor aber keinen Platz. Wir finden eine Lösung, die Platz sparend mit Peltierkühlung auskommt."],
  ["Temperatur, genau geregelt","Sie benötigen eine besonders genaue Temperatursteuerung. Mit elektronisch sehr genau regelbarer Peltiertechnik erfüllen wir Ihre Spezifikation."],
  ["Messanlagen geprüft","Sie messen eine physikalische Größe und wissen nicht, ob alle Möglichkeiten zur Genauigkeit ausgeschöpft sind. Wir überprüfen Ihre Anlage, ergänzen sie und stellen ein Gutachten aus."]];
  return '<ol class="cns">'+C.map(function(c,i){return '<li><span class="lab n" data-r>0'+(i+1)+'</span><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Physikalische Technik<span class="nomob"> · Kernkompetenz Thermoelektrik</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Messtechnik</span><span class="l">und Anlagen</span><span class="l">für Forschung</span><span class="l"><em>und Industrie.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>PANCO entwickelt komplexe Messgeräte für physikalische Größen, Steuerungen und Anlagen. Im Zentrum steht die Thermoelektrik: Peltierelemente und thermoelektrische Generatoren zum Kühlen, Heizen und zur Stromerzeugung.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">So funktioniert Thermoelektrik '+ARR+'</a><a class="btn" href="#/messtechnik">Messtechnik</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Das Unternehmen</span>'+
   '<h2 class="txt" id="mani">Beratung. Entwicklung. Vermarktung. PANCO entwickelt Anlagen, die sich physikalische Effekte zunutze machen, <em>mit Schwerpunkt Thermoelektrik.</em></h2>'+
   '<p class="mlead" data-r>Geführt von Dr. Dieter Platzek, Geschäftsführer, mit langjähriger Erfahrung in Anlagenentwicklung und der Anwendung thermoelektrischer Wandler, und einem Team für Elektronik, Datenerfassung und Programmierung.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">0,001°</span><p class="k">Phasenauflösung des Impedanzspektrometers INPHAZE HR EIS, für das PANCO europaweit Service leistet</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40</span><p class="k">Kanäle misst die mobile Messeinrichtung quasisimultan: Temperatur, Spannung, Strom, Widerstand, Frequenz</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">85 %</span><p class="k">Energieersparnis, wenn Peltiertechnik einen Netzwerkverteiler kühlt statt den ganzen Raum</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Thermoelektrik</span><h2 class="d3">Wärme und Strom, <em>direkt gewandelt.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Seebeck</span><span>Peltier</span><span>Modul</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Aus Wärme wird Strom.</h2><p>Werden die Kontaktstellen zweier Materialien auf unterschiedlicher Temperatur gehalten, fließt im geschlossenen Kreis ein elektrischer Strom: der Seebeck-Effekt (1822). So nutzen thermoelektrische Generatoren Abwärme, ohne mechanische Verluste.</p></article>'+
     '<article class="step"><h2>Aus Strom wird Kälte.</h2><p>Umgekehrt transportiert ein Strom durch das Halbleitermaterial Wärme: Eine Seite kühlt ab, die andere erwärmt sich. Über den Strom lässt sich die Temperatur einfach und hochgenau regeln, der Peltier-Effekt.</p></article>'+
     '<article class="step"><h2>Viele Paare, ein Element.</h2><p>Ein Peltierelement reiht viele solcher Halbleiterpaare zwischen zwei Keramikplatten aneinander. Die Wandler arbeiten völlig verschleißfrei, als direkte, umkehrbare Wärmepumpe.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="entwicklung" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Anlagenentwicklung</span><h2 class="d2 split">Messanlagen und Anlagen, <em>auf Ihre Anforderung.</em></h2></div><p data-r>Die Entwicklung von Messanlagen und neuartigen Produkten, die sich die Vorteile der Thermoelektrik zunutze machen, ist das Hauptarbeitsgebiet von PANCO: in Projekten und Aufträgen mit unterschiedlichen Laufzeiten. Einige Beispiele.</p></div>'+
   devRows(DEV)+
  '</div></section>'+

  '<section class="sec light" id="messtechnik" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Messtechnik und Produkte</span><h2 class="d2 split">Messen, was Materialien <em>wirklich leisten.</em></h2></div><p data-r>Bei PANCO sind verschiedene Mess-Systeme in Betrieb, vom Metallmikroskop für feine Strukturen und Kontakte bis zur Thermoanalyse. Dazu vertreibt PANCO Peltierelemente, Kühlkörper, PID-Regler und fertig konfektionierte Kühlaggregate.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="consulting" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Consulting</span><h2 class="d2 split">Ein Problem mit einer Anlage? <em>Rufen Sie an.</em></h2></div><p data-r>PANCO berät Unternehmen in der Thermoelektrik und bei Messanlagen, von Detaillösungen bis zu kompletten Anlagenentwicklungen. Selbstverständlich vertraulich: eine entsprechende Vereinbarung kann abgeschlossen werden. Drei einfache Beispiele.</p></div>'+
   consult()+
  '</div></section>'+

  '<section class="sec dark2" id="projekte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Projekte und Partner</span><h2 class="d2 split">In europäischen <em>Forschungsprojekten.</em></h2></div><p data-r>PANCO arbeitet eng mit dem Deutschen Zentrum für Luft- und Raumfahrt und vielen europäischen Forschungseinrichtungen und Universitäten zusammen, etwa in den EU-geförderten Projekten NanoThermel, EDEN und NEXTEC.</p></div>'+
   news()+
   '<div class="bk"><span class="lab kick" data-r>Partner</span><p class="cr" data-r><span>CIDETE</span><i>·</i><span>Termo-Gen AB</span><i>·</i><span>LOT-Oriel</span><i>·</i><span>PSI Technics</span><i>·</i><span>Fachhochschule Trier</span><i>·</i><span>DLR</span></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split">Sprechen wir <em>darüber.</em></h2>'+
   '<p class="sub" data-r>Eine Messaufgabe, eine Kühlanwendung oder eine Anlage, die Thermoelektrik nutzen könnte: Schreiben Sie uns oder rufen Sie an. Ansprechpartner ist Dr. Dieter Platzek, Geschäftsführer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">E-Mail an PANCO '+ARR+'</a><a class="btn" href="#/entwicklung">Anlagenentwicklung</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Hauptsitz</span><p data-r>PANCO GmbH<br>Kärlicher Straße 7<br>56218 Mülheim-Kärlich</p></div>'+
    '<div><span class="lab" data-r>Telefon</span><p data-r><a class="ul" href="tel:+492630964696">+49 2630 96 46 96</a><br>Verkauf: <a class="ul" href="tel:+492630964697">+49 2630 96 46 97</a></p></div>'+
    '<div><span class="lab" data-r>E-Mail</span><p data-r><a class="ul" href="'+MAIL+'">info@panco.de</a><br>Verkauf: <a class="ul" href="mailto:sales@panco.de">sales@panco.de</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresse</span>Kärlicher Straße 7<br>56218 Mülheim-Kärlich</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="'+MAIL+'">info@panco.de</a><br><a class="ul" href="tel:+492630964696">+49 2630 96 46 96</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/entwicklung">Entwicklung</a><br><a class="ul" href="#/messtechnik">Messtechnik</a><br><a class="ul" href="#/consulting">Consulting</a><br><a class="ul" href="#/projekte">Projekte</a></div>'+
   '<div class="c"><span class="lab">Register</span>Amtsgericht Koblenz<br>HRB 20237</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="62" text-anchor="middle" style="font-family:\'Archivo\',sans-serif;font-weight:700;font-size:78px">PANCO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 PANCO GmbH</span><span class="lab">Website-Konzept</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",entwicklung:"entwicklung",messtechnik:"messtechnik",consulting:"consulting",projekte:"projekte",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"PANCO GmbH — Physikalische Technik, Anlagenentwicklung & Consulting",x:"Start"};
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
