/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">'+"Details"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Geschäftsführung</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* the four measuring principles (cetatest.com > Produkte, Informationen > Dichtheitsprüfung, Durchflussprüfung, Massendurchflussprüfung) */
function caps(){var C=[
  ["Differenzdruck","Gegen ein dichtes Referenzvolumen","Der Druck im Prüfteil wird mit einem leckdichten Referenzvolumen verglichen. So lassen sich kleine Druckverluste und geringe Leckageraten zuverlässig erfassen.",'<rect x="8" y="18" width="16" height="20"/><rect class="a" x="32" y="18" width="16" height="20"/><path d="M24 28H32"/><circle class="f" cx="28" cy="28" r="2.2"/>'],
  ["Überdruck","Druckverlust direkt gemessen","Der Überdrucksensor misst den Druckverlust im Prüfteil direkt: ideal für Prüfteile mit großen Leckagen und für Aufgaben, die einen großen Messbereich brauchen.",'<path d="M10 40A18 18 0 0 1 46 40"/><path class="a" d="M28 40L38 26"/><path d="M10 46H46"/><circle class="f" cx="28" cy="40" r="2.2"/>'],
  ["Massendurchfluss","Kalorimetrisch gemessen","Der thermische Massendurchflusssensor erfasst kleinste Leckagen in großvolumigen Prüfteilen oder größere Massendurchflüsse, mit parametrierbaren Bezugsbedingungen.",'<path d="M8 22H48M8 34H48"/><path class="a" d="M22 28H34"/><circle class="f" cx="28" cy="28" r="2.2"/>'],
  ["Volumenstrom","Über eine laminare Messstrecke","Der Durchfluss ergibt sich aus dem Druckabfall an einer laminaren Messstrecke. Je nach Messstrecke von 3 ml/min bis 200 l/min, kalibrierbar bei verschiedenen Prüfdrücken.",'<path d="M8 20H48M8 36H48"/><path class="a" d="M12 25H44M12 28H44M12 31H44"/><circle class="f" cx="28" cy="28" r="2.2"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Dichtheits- und Durchflussprüfung<span class="nomob"> · Hilden</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Dichtheit, geprüft</span> <span class="l"><em class="nw">im Takt der Linie.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Seit mehr als 35 Jahren stellt CETA in Hilden physikalische Messgeräte für die industrielle Dichtheits- und Durchflussprüfung her. Weltweit sind mehrere tausend CETA Prüfgeräte im Einsatz.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Unsere Prüfgeräte '+ARR+'</a><a class="btn" href="#/kontakt">Prüfaufgabe besprechen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Seit 1988 in Hilden</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Unsere Prüfgeräte sind</span> <span class="nw">Eigenentwicklungen:</span> <span class="nw">Elektronik, Mechanik,</span> <span class="nw">Pneumatik, Firmware</span> <span class="nw">und Software</span> <em><span class="nw">entstehen im</span> <span class="nw">eigenen Haus.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">0,001</span><p class="k">mbar·l/s, die Größenordnung der kleinsten nachweisbaren Leckagen im Differenzdruckverfahren</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30 bar</span><p class="k">Prüfdrücke je nach Anforderung von −1 bar bis +30 bar</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2004</span><p class="k">seit dem Jahr akkreditiertes Kalibrierlabor, heute DAkkS D-K-19566-01-00</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Differenzdruckverfahren</span><h2 class="d3"><span class="nw">Vier Phasen</span> <em class="nw">bis zum Gutteil.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Füllen</span><span>Beruhigen</span><span>Messen</span><span>Entlüften</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Das Prüfteil wird</span> <span class="nw">auf Zieldruck gefüllt.</span></h2><p>Das Dichtheitsprüfgerät steuert den gesamten Prüfprozess. In der Füllphase wird das Prüfteil mit Druckluft auf den Zieldruck gebracht, je nach Prüfaufgabe zwischen −1 bar und +30 bar.</p></article>'+
     '<article class="step"><h2><span class="nw">Der Druck</span> <span class="nw">kommt zur Ruhe.</span></h2><p>Bei abgetrenntem Füllventil beruhigen sich in der Stabilisierphase die Druckschwankungen, die durch die Befüllung auftreten.</p></article>'+
     '<article class="step"><h2><span class="nw">Gemessen wird</span> <span class="nw">der Druckverlust.</span></h2><p>Die Differenzdruckmesszelle wird in den Messkreis geschaltet und misst den Druckabfall gegen ein dichtes Referenzvolumen. Nachweisbar sind Druckverluste in der Größenordnung von 1 Pa/s.</p></article>'+
     '<article class="step"><h2><span class="nw">Entlüftet,</span> <span class="nw">bewertet, im Takt.</span></h2><p>Der Druck im Prüfteil wird wieder abgelassen. Liegt der Druckverlust innerhalb der parametrierten Grenzwerte, wird das Prüfteil als Gutteil bewertet.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split"><span class="nw">Das passende Prüfgerät</span> <em class="nw">für nahezu jede Aufgabe.</em></h2></div><p data-r>Dichtheits-, Massendurchfluss- und Durchflussprüfgeräte, dazu Prüfstände und Zubehör: für die Leckage-Messung und Durchflussprüfung in der Produktionslinie, mit integrierter Überwachung der korrekten Gerätefunktion.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="verfahren" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Verfahren</span><h2 class="d2 split"><span class="nw">Vier Messprinzipien,</span> <em class="nw">ein Prüfmedium.</em></h2></div><p data-r>Bei den CETA Prüfgeräten ist Druckluft das Prüfmedium. Da Luft eine geringere Viskosität als Flüssigkeiten hat, lässt sich damit etwa die Wasser- oder Öldichtheit eines Prüfteils prüfen.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="branchen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Branchen</span><h2 class="d2 split"><span class="nw">Vom Katheter</span> <em class="nw">bis zur E-Mobilität.</em></h2></div><p data-r>CETA Prüfgeräte sichern in einer Vielzahl von Applikationen die Qualität in Produktionsanlagen: zur Qualitätssicherung, Qualitätskontrolle und Produktionssicherung.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Im Einsatz in</span><dl>'+
    '<div data-r><dt class="lab">Automotive</dt><dd>Automobilindustrie und Elektromobilität</dd></div>'+
    '<div data-r><dt class="lab">Medizintechnik</dt><dd>100 %-Stückprüfung von Medizinprodukten, validierbar entlang DQ, IQ, OQ und PQ</dd></div>'+
    '<div data-r><dt class="lab">Verpackung</dt><dd>Verpackungsindustrie und pharmazeutische Verpackungen (CCIT)</dd></div>'+
    '<div data-r><dt class="lab">Armaturen</dt><dd>Armaturen-, Klima- und Haushaltsgeräteindustrie</dd></div>'+
    '<div data-r><dt class="lab">Elektronik</dt><dd>Elektronikindustrie</dd></div>'+
    '<div data-r><dt class="lab">Kunststoff</dt><dd>Mitglied der Trägergesellschaft Kunststoff-Institut Lüdenscheid</dd></div>'+
   '</dl></div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Hersteller</span> <em class="nw">und Lösungspartner.</em></h2></div><p data-r>1988 als Handelsunternehmen für Dichtheits- und Durchflussprüfgeräte gegründet, entwickelt und fertigt CETA seit der Umfirmierung 1996 eigene Prüfgeräte, heute in Hilden bei Düsseldorf.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>Qualität</span><ul>'+
     '<li data-r><b>Eigene Komponenten</b>Multifunktionsventil, Micro-Controller und Kalibriernormale stellt CETA selbst her.</li>'+
     '<li data-r><b>DAkkS-Kalibrierung</b>Prüfgeräte gehen bei Erstauslieferung standardmäßig mit DAkkS-Kalibrierschein nach DIN EN ISO/IEC 17025 hinaus.</li>'+
     '<li data-r><b>DIN ISO 9001:2015</b>Transparente, nachverfolgbare Prozesse und Abläufe, zertifiziert.</li>'+
     '<li data-r><b>Qualitätspreis NRW</b>2002 gewonnen, im selben Jahr das Patent für die automatische Funktionskontrolle.</li>'+
    '</ul></div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Dienstleistungen</span><p class="cr" data-r><span>Beratung</span><span>Machbarkeitsuntersuchungen</span><span>Engineering</span><span>Inbetriebnahmen</span><span>Kalibrierungen</span><span>Wartung und Reparatur</span><span>Schulungen</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News und Messen</span><h2 class="d2 split"><span class="nw">Zuletzt in Düsseldorf,</span> <em class="nw">auf der MEDICA.</em></h2></div><p data-r>Auf der MEDICA 2026 zeigte CETA die Dichtheitsprüfung eines Katheters live, auf dem Landesgemeinschaftsstand Nordrhein-Westfalen. Jeder Eintrag verweist auf seine Quelle.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihre Prüfaufgabe,</span> <em class="nw">unsere Lösung.</em></h2>'+
   '<p class="sub" data-r>Haben Sie Fragen zu unseren Produkten oder möchten Sie eine Prüfaufgabe mit uns diskutieren? Mit dem CETA User Experience Package stellen wir Ihnen auch ein Vorführgerät kostenfrei bereit.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+SALES+'">E-Mail an den Vertrieb '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Adresse</span><p data-r>CETA Testsysteme GmbH<br>Marie-Curie-Straße 35-37<br>40721 Hilden</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+SALES+'">'+SALES+'</a><br>Vertrieb <a class="ul" href="tel:'+STEL+'">'+STELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Service</span><p data-r><a class="ul" href="mailto:'+SERVICE+'">'+SERVICE+'</a><br>Montag bis Freitag, 8 bis 17 Uhr<br>Fax '+FAXT+'</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresse</span>CETA Testsysteme GmbH<br>Marie-Curie-Straße 35-37, 40721 Hilden</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/verfahren">Verfahren</a><br><a class="ul" href="#/branchen">Branchen</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Prüfgeräte</span>Dichtheits-, Massendurchfluss- und Durchflussprüfung, Prüfstände und Zubehör</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Barlow\',system-ui,sans-serif;font-weight:400;font-size:44px;letter-spacing:.2em">CETA TESTSYSTEME</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 CETA Testsysteme GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",produkte:"produkte",verfahren:"verfahren",branchen:"branchen",unternehmen:"unternehmen",news:"news",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"CETA Testsysteme — Dichtheitsprüfgeräte und Durchflussprüfung, Hilden",x:"Start"};
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
