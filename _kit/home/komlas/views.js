/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function rows(L){return '<ul class="pfr pipe np">'+L.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+c[1].split('|').map(function(x){return '<span class="nw">'+esc(x)+'</span>'}).join(' ')+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Mehr '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["UV-Konversion","UV wird zu Pumplicht","Cer-dotiertes Quarzglas absorbiert einen wesentlichen Teil der UV-Strahlung der Bogenlampe bis 400 nm und konvertiert sie zu einem großen Anteil in den sichtbaren Pumpbereich des Laserkristalls.",'<path d="M6 40C14 24 22 24 28 40C34 56 42 56 50 40"/><path class="a" d="M6 22H50"/><circle class="f" cx="28" cy="22" r="2.4"/>'],
  ["Wirkungsgrad","Ca. 25 % mehr Wirkungsgrad","Im direkten Vergleich mit Kavitäten aus undotiertem Quarzglas erhöht sich der Wirkungsgrad um ca. 25 % (Nd:YAG bei 1064 nm).",'<path d="M8 46H48"/><path class="a" d="M12 40L24 30L32 34L46 14"/><circle class="f" cx="46" cy="14" r="2.4"/>'],
  ["Thermische Linse","Ca. 20 % weniger Linse","Weil die UV-Strahlung absorbiert wird, statt den Kristall zu erwärmen, sinkt die thermische Linse um ca. 20 %.",'<path d="M28 8C38 18 38 38 28 48C18 38 18 18 28 8Z"/><path class="a" d="M4 28H52"/><circle class="f" cx="28" cy="28" r="2.4"/>'],
  ["Pumpkammern","Komplett, cw und Puls","Komplette Pumpkammern aus hartbeschichtetem Aluminium, leicht zu montieren und mit schnellem Lampenwechsel. Die Silberschicht ist für deionisiertes Wasser als Kühlmittel geschützt.",'<path d="M8 16H48V40H8Z"/><path class="a" d="M8 28H48"/><circle class="f" cx="28" cy="28" r="2.4"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3><span class="nw">'+esc(c[1])+'</span></h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function exps(){var X=[
  ["Wellenlänge der Laserdiode","Über die Temperatur verschiebt sich die Emissionswellenlänge der Diode um 0,27 nm/K. So lässt sich das Absorptionsspektrum von Nd:YAG um 808 nm vermessen."],
  ["Lasermoden sichtbar machen","Durch Justieren der Laserspiegel werden verschiedene Gauß-Hermite- und Gauß-Laguerre-Moden des Resonators auswählbar."],
  ["Auskopplung über Polarisation","Mit einem Auskoppelspiegel mit polarisationsabhängigem Reflexionsgrad, einer λ/4-Platte und einem Polarisator wird der Auskoppelgrad variiert."],
  ["Passive Güteschaltung","Ein Cr:YAG-Kristall im Resonator schaltet die Güte. Der Laser erzeugt sehr kurze Impulse."],
  ["Resonance Spiking","Der Strom der Laserdiode wird über ein externes TTL-Signal moduliert, um das Spiking zu beobachten."],
  ["Frequenzverdopplung","Ein KTP-Kristall im Resonator verdoppelt die Frequenz. Gemessen wird die Konversionseffizienz über Temperatur und Drehwinkel."]];
  return '<ol class="exps">'+X.map(function(x,i){return '<li><span class="lab">'+('0'+(i+1)).slice(-2)+'</span><h3>'+esc(x[0])+'</h3><p>'+esc(x[1])+'</p></li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Optische Komponenten<span class="nomob"> und Lasersysteme · Berlin</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Optik für den Laser,</span> <span class="l acc">auch in kleinen Losen.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Seit 25 Jahren ein zuverlässiger Partner für Laserhersteller weltweit: Laserspiegel, Linsen, Fenster, Laserkristalle, ATR-Prismen und Laserkavitäten, dazu Güteschalter, HF-Treiber und ein Laser-Trainingssystem.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/komponenten">Zu den Komponenten '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>KOMLAS GmbH, Berlin</span>'+
   '<h2 class="txt" id="mani">Vom Laserspiegel bis <span class="nw">zur Pumpkammer:</span> kundenspezifische Optik für das Innere des Lasers, <em>auch in kleinen Losgrößen.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">25</span><p class="k">Jahre zuverlässiger Partner für Laserhersteller weltweit</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">22 mm</span><p class="k">lang: KTP-Kristalle für die Frequenzverdopplung, bis 12 mm × 12 mm × 22 mm</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0,01°</span><p class="k">Regelgenauigkeit der Peltier-Treiber für Laserdioden</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Im Resonator</span><h2 class="d3">Vom Diodenlicht <em>zum grünen Puls.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Pumpen</span><span>Schalten</span><span>Verdoppeln</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Die Diode pumpt den Kristall.</h2><p>Eine 1-W-Laserdiode pumpt den Nd:YAG-Kristall von der Stirnseite, im Absorptionsband um 808\u00a0nm. Zwischen den Laserspiegeln entsteht Laserlicht bei 1064\u00a0nm.</p></article>'+
     '<article class="step"><h2><span class="nw">Cr4+:YAG schaltet</span> die Güte.</h2><p>Ein Cr4+:YAG-Kristall im Resonator wirkt als passiver Güteschalter: Der Laser gibt seine Energie in sehr kurzen Impulsen ab.</p></article>'+
     '<article class="step"><h2>KTP verdoppelt die Frequenz.</h2><p>Ein KTP-Kristall im Resonator verdoppelt die Frequenz. Aus dem unsichtbaren Infrarot wird grünes Licht bei 532\u00a0nm.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="komponenten" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Optische Komponenten</span><h2 class="d2 split">Spiegel, Linsen <em>und Kristalle.</em></h2></div><p data-r>Kundenspezifische optische Komponenten für die Lasertechnik und die Spektroskopie, auch in kleinen Losgrößen.</p></div>'+
   rows(PRODS)+
  '</div></section>'+

  '<section class="sec light" id="kavitaeten" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Laserkavitäten</span><h2 class="d2 split"><span class="nw">Mehr Effizienz,</span> <em class="nw">weniger Linse.</em></h2></div><p data-r>Kavitäten aus Cer-dotiertem Quarzglas für lampengepumpte Lasersysteme: Reflektor, flow tubes und Filter in einem geschlossenen Bauteil, sodass sich keine Partikel in die Oberfläche des Reflektors einbrennen können.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="elektronik" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>HF-Treiber und Netzteile</span><h2 class="d2 split">Treiber für <em>Diode und Schalter.</em></h2></div><p data-r>Treiber für AO-Güteschalter, Laserdioden und Peltierelemente, auch als rauschoptimierte cw-Varianten oder pulsoptimiert mit extrem kurzen Schaltzeiten.</p></div>'+
   rows(ELEC)+
  '</div></section>'+

  '<section class="sec light" id="schulung" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Festkörperlaser-Schulungssystem</span><h2 class="d2 split">Ein Laser <em>für das Praktikum.</em></h2></div><p data-r>Diodengepumpt und aus stabilen mechanischen Komponenten, entwickelt für Ausbildung und Demonstration an Fachhochschulen und Universitäten. Verschiedene Aufbauten sind schnell und leicht realisierbar.</p></div>'+
   exps()+
  '</div></section>'+

  '<section class="sec dark2" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Für Laserhersteller</span> <em class="nw">in aller Welt.</em></h2></div><p data-r>KOMLAS ist auf kundenspezifische optische Komponenten spezialisiert, auch in kleinen Losgrößen, und entwickelt und fertigt dazu die passende Elektronik.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Messe</span><p class="cr" data-r><span>LASER World of PHOTONICS 2025</span><span>München, 24. bis 27. Juni 2025</span><span>Halle A2, Stand 117</span><a class="ul" href="https://exhibitors.world-of-photonics.com/ausstellerportal/2025/aussteller/ausstellerdetails/komlas-optische-komponenten-und-lasersysteme-gmbh/?elb=178.1100.1720.1.111" target="_blank" rel="noopener">Im Ausstellerverzeichnis</a></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Sprechen Sie</span> <em class="nw">mit uns.</em></h2>'+
   '<p class="sub" data-r>Für Anfragen, Angebote und Sonderanfertigungen nach Ihrer Zeichnung erreichen Sie uns direkt in Berlin.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>KOMLAS GmbH<br>Schwarzschildstr. 12<br>12489 Berlin</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Datenblatt</span><p data-r><a class="ul" href="'+KG+'RF-Driver.pdf" target="_blank" rel="noopener">HF-Treiber als PDF</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>KOMLAS Optische Komponenten und Lasersysteme GmbH<br>Schwarzschildstr. 12, 12489 Berlin</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/komponenten">Komponenten</a><br><a class="ul" href="#/kavitaeten">Kavitäten</a><br><a class="ul" href="#/elektronik">Elektronik</a><br><a class="ul" href="#/schulung">Schulung</a></div>'+
   '<div class="c"><span class="lab">Register</span>Amtsgericht Berlin-Charlottenburg<br>HRB 66915 B<br>Geschäftsführer: Dr. Wolfgang Titel</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="54" text-anchor="middle" style="font-family:\'Source Serif 4\',Georgia,serif;font-weight:600;font-size:66px;letter-spacing:.3em">KOMLAS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 KOMLAS GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",resonator:"story",komponenten:"komponenten",kavitaeten:"kavitaeten",elektronik:"elektronik",schulung:"schulung",unternehmen:"unternehmen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"KOMLAS — Optische Komponenten und Lasersysteme, Berlin",x:"Start"};
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
