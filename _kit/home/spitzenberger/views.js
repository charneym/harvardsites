/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">'+"Details"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Bevollmächtigte</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* standards-compliant test systems by sector (spitzenberger.de > Lösungen > Normen) */
function caps(){var C=[
  ["Solarindustrie","Wechselrichter und Speicher","Prüfsysteme für die Prüfung von Solarinvertern, für die Prüfung der Inselnetzerkennung und für die Simulation von Batteriespeichersystemen.",'<circle cx="28" cy="28" r="9"/><path class="a" d="M28 8V13M28 43V48M8 28H13M43 28H48M14 14L17.5 17.5M38.5 38.5L42 42M14 42L17.5 38.5M38.5 17.5L42 14"/><circle class="f" cx="28" cy="28" r="2.2"/>'],
  ["Kfz-Industrie","Bordnetze und ihre Störungen","Prüfsysteme zur Simulation von Bordnetzen und deren Störungen, zur Überprüfung der Immunität gemäß ISO und herstellerspezifischen Prüfnormen.",'<path d="M8 36V28L14 18H40L48 28V36H8Z"/><circle class="a" cx="17" cy="38" r="5"/><circle class="a" cx="39" cy="38" r="5"/><circle class="f" cx="28" cy="27" r="2.2"/>'],
  ["Avionik-Industrie","AC- und DC-Flugzeugbordnetze","Prüfsysteme zur Simulation von AC- und DC-Flugzeugbordnetzen und deren Störungen, gemäß allgemeiner und herstellerspezifischer Prüfnormen.",'<path d="M28 8V48M10 30L28 22L46 30M20 46L28 41L36 46"/><path class="a" d="M8 30H48"/><circle class="f" cx="28" cy="22" r="2.2"/>'],
  ["CE-Kennzeichnung","Emission und Immunität","Für alle Hersteller und Prüflabors, die nach der CE-Kennzeichnungspflicht prüfen: normgerechte Prüfung der Störemission und der Immunität gegenüber leitungsgebundenen Störgrößen.",'<path d="M8 28H14L18 18L24 38L30 14L36 42L40 28H48"/><path class="a" d="M8 46H48"/><circle class="f" cx="30" cy="14" r="2.2"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Normgerechte Prüfsysteme<span class="nomob"> · Viechtach</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Wir bringen</span> <span class="l">Spannung</span> <span class="l"><em class="nw">in Form.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Seit über 50 Jahren entwickelt und fertigt Spitzenberger & Spies analoge lineare Transistorverstärker, AC/DC Strom- und Spannungsquellen und komplette Prüfsysteme für Entwicklungs- und Testlabors in aller Welt.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Unsere Produkte '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Seit 1963 in Viechtach</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Basierend auf unseren</span> <span class="nw">4-Quadranten-Verstärkern</span> <span class="nw">simulieren wir alle</span> <span class="nw">Versorgungsspannungen</span> <em><span class="nw">von DC bis zu mehreren</span> <span class="nw">hundert kHz, bis in den</span> <span class="nw">Megawattbereich.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 MW</span><p class="k">Leistung, von 50 W bis in den Megawattbereich</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">300 kHz</span><p class="k">Frequenzbereich von DC bis 300 kHz</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30 kA</span><p class="k">Strom, bei Spannungen bis 1500 V und bis zu 6 Phasen</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">4-Quadranten-Verstärker</span><h2 class="d3">Die Referenzquelle <em>für den Prüfling.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sinus</span><span>Störung</span><span>Senke</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Eine Sinusspannung,</span> <span class="nw">sauber und stabil.</span></h2><p>Der APS liefert Spannungen bis 300 V rms von DC bis 10 kHz, mit extrem niedrigem Klirrfaktor auch bei besonders nichtlinearen Lasten und besonders niedrigem Innenwiderstand.</p></article>'+
     '<article class="step"><h2><span class="nw">Die Störung,</span> <span class="nw">genau nach Norm.</span></h2><p>Spannungseinbrüche, Schwankungen und Unterbrechungen, mit einer Anstiegszeit von über 52 V/µs bei 230 V, wie sie die <span class="nw">IEC/EN 61000-4-11</span> fordert.</p></article>'+
     '<article class="step"><h2><span class="nw">Quelle und Senke</span> <span class="nw">in einem Gerät.</span></h2><p>Der Verstärker arbeitet in allen vier Quadranten: Er speist den Prüfling und nimmt Energie auf, die der Prüfling zurückliefert, mit einstellbarer Strom- und Spannungsbegrenzung.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split">Quellen, Verstärker <em>und Prüfsysteme.</em></h2></div><p data-r>Als Einzelgeräte erfüllen unsere Produkte vielseitige Aufgaben in allen Bereichen der Elektrotechnik; als Bausteine unserer Systemlösungen sind sie die idealen Teamplayer für größere Aufgaben.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="normen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Normen</span><h2 class="d2 split">Normkonforme Prüfsysteme <em class="nw">für viele Bereiche.</em></h2></div><p data-r>Als Lösung verstehen wir die Summe aus technischen Einzelkomponenten, Know-how, Integration, anwenderfreundlicher Software und kundenorientiertem Service.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="branchen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Branchen</span><h2 class="d2 split">Von der Medizin <em>bis zur Raumfahrt.</em></h2></div><p data-r>Unsere Produkte kommen hauptsächlich in Entwicklungs- und Testlabors und in der Qualitätssicherung zum Einsatz. Viele zertifizierte Einrichtungen in der ganzen Welt verlassen sich auf Spitzenberger & Spies.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Hauptsächlich bedient</span><dl>'+
    '<div data-r><dt class="lab">Haushalt</dt><dd>Haushaltsgerätehersteller</dd></div>'+
    '<div data-r><dt class="lab">Automotive</dt><dd>Automobilindustrie, Bordnetze von 12 bis 48 V</dd></div>'+
    '<div data-r><dt class="lab">Luftfahrt</dt><dd>Avionik-Industrie, AC- und DC-Bordnetze</dd></div>'+
    '<div data-r><dt class="lab">Energie</dt><dd>Solarindustrie, Wechselrichter und Speicher</dd></div>'+
    '<div data-r><dt class="lab">Komponenten</dt><dd>Industrielle Komponentenhersteller</dd></div>'+
    '<div data-r><dt class="lab">EMV-Labors</dt><dd>Alle bekannten europäischen EMV-Testlabors, für Referenzmessungen</dd></div>'+
   '</dl></div>'+
   '<div class="bk"><span class="lab kick" data-r>Kunden, unter anderem</span><p class="cr" data-r><span>Bosch</span><span>Miele</span><span>Siemens</span><span>und viele weitere</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="firma" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Firma</span><h2 class="d2 split">Innovation, Perfektion <em class="nw">und Normkonformität.</em></h2></div><p data-r>Seit 1963 entwickelt Spitzenberger & Spies im ostbayerischen Viechtach High-Tech-Geräte für verschiedenste Industriezweige, mit einer reichen Geschichte der Forschung und Innovation im elektrotechnischen Bereich.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>Unser Anspruch</span><ul>'+
     '<li data-r><b>Bauteile</b>Hochwertige Bauteile, verarbeitet von ausgebildeten Spezialisten.</li>'+
     '<li data-r><b>Prüfung</b>Unsere Qualitätssicherung prüft die Geräte während des gesamten Produktionsprozesses.</li>'+
     '<li data-r><b>Dauerbetrieb</b>Robust und zuverlässig, oft im 24-Stunden-Betrieb unter Beweis gestellt.</li>'+
     '<li data-r><b>Ausbildung</b>IHK Niederbayern: Wir bilden aus, 2026 mit einem Einser-Azubi.</li>'+
    '</ul></div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Lieferumfang</span><p class="cr" data-r><span>Einzelkomponenten</span><span>Gesamtsysteme</span><span>Sonderprüfstände</span><span>Software</span><span>Made in Germany</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="messen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Messen und Aktuelles</span><h2 class="d2 split">Zuletzt <em class="nw">auf der electronica.</em></h2></div><p data-r>Auf der electronica 2026 in München stellte Spitzenberger & Spies in Halle A4, Stand 106, aus. Jeder Eintrag verweist auf seine Quelle.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split">Ihr Prüfsystem, <em>nach Norm.</em></h2>'+
   '<p class="sub" data-r>Wir sind nicht nur Hersteller, wir sind ein erfahrener Lösungspartner. Gerne beraten wir Sie persönlich, vom Einzelgerät bis zum maßgeschneiderten System.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+SALES+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Adresse</span><p data-r>Spitzenberger & Spies GmbH & Co. KG<br>Schmidstraße 32-34<br>94234 Viechtach</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+SALES+'">'+SALES+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Prüfen</span><p data-r>Fax '+FAXT+'<br>EMV-Testlabor in Straubing<br>Downloadportal auf spitzenberger.de</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresse</span>Spitzenberger & Spies GmbH & Co. KG<br>Schmidstraße 32-34, 94234 Viechtach</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/normen">Normen</a><br><a class="ul" href="#/branchen">Branchen</a><br><a class="ul" href="#/firma">Firma</a></div>'+
   '<div class="c"><span class="lab">Bereiche</span>EMV · Industrie<br>Automotive · Avionik<br>Photovoltaik · Sonderbau</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Jost\',system-ui,sans-serif;font-weight:400;font-size:40px;letter-spacing:.2em">SPITZENBERGER &amp; SPIES</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Spitzenberger & Spies GmbH & Co. KG</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",produkte:"produkte",normen:"normen",branchen:"branchen",firma:"firma",messen:"messen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Spitzenberger & Spies — Normgerechte Prüfsysteme, 4-Quadranten-Verstärker und AC/DC-Quellen, Viechtach",x:"Start"};
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
