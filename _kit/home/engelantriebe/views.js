/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">'+"Details"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Geschäftsführung</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* realised special solutions (engelantriebe.de > Antriebslösungen) */
function caps(){var C=[
  ["Hygienic Drive","Edelstahl, IP69K","Integriertes Antriebssystem im Edelstahlgehäuse nach Hygienic Design, Schutzarten IP69 und IP69K, für die Lebensmittelindustrie: 24 V oder 48 V, Dauerleistungen bis ca. 500 W, bis 3 Nm Abtriebsdrehmoment.",'<rect x="12" y="18" width="30" height="22"/><path class="a" d="M16 18V40M38 18V40"/><path d="M42 29H50"/><circle class="f" cx="27" cy="29" r="2.2"/>'],
  ["Antrieb für AGVs","HFI3260 mit Planetengetriebe","Der integrierte Antrieb HFI3260 mit dem Planetengetriebe NGV der Neugart GmbH: kompakt und zuverlässig für Intralogistik, internen Materialtransport, Shuttles und andere Transportsysteme.",'<circle cx="28" cy="30" r="15"/><circle class="a" cx="28" cy="30" r="7"/><path d="M28 9V15M28 45V51M7 30H13M43 30H49"/><circle class="f" cx="28" cy="30" r="2.2"/>'],
  ["Schraubantrieb","HLM 28120","Die schlanke, runde Bauform der HLM erlaubt eine hohe Packungsdichte und hochdynamische Schraubsysteme unter extremen Platzverhältnissen, mit genau der geforderten Drehzahl- und Drehmomentcharakteristik.",'<path d="M20 8H36V22H20Z"/><path class="a" d="M24 22V44L28 50L32 44V22"/><path d="M24 30H32M24 37H32"/><circle class="f" cx="28" cy="15" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Elektrische Antriebstechnik<span class="nomob"> · Walluf</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Antriebe, dynamisch</span> <span class="l">und drehmomentstark,</span> <span class="l"><em class="nw">ganz nach Maß.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ENGEL Elektroantriebe ist der Partner für dynamische und drehmomentstarke Drehstrom-Synchronmotoren, integrierte Antriebe und kundenspezifische Antriebslösungen, mit Regelelektronik und Software aus einer Hand.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Unsere Produkte '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Seit über 100 Jahren</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Wir verstehen uns auch</span> <span class="nw">als Produktionsbetrieb:</span> <span class="nw">mit modernsten</span> <span class="nw">Produktionsmitteln und</span> <span class="nw">großer Fertigungstiefe</span> <em><span class="nw">realisieren wir besondere</span> <span class="nw">Anforderungen kurzfristig.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">100+</span><p class="k">Jahre steht der Name Engel für hochwertige und zeitgemäße Antriebstechnik</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">35.000</span><p class="k">min⁻¹ Maximaldrehzahl eines vollständig kundenspezifischen Motorsystems</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">300 Nm</span><p class="k">Abtriebsdrehmoment des HBI3260 mit dreistufigem Getriebe GP102</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Kundenspezifische Antriebe</span><h2 class="d3">Vom Motordesign <em>zum Antrieb.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Motor</span><span>Regler</span><span>System</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Der Motor,</span> <span class="nw">eigens ausgelegt.</span></h2><p>Vom einfachen mechanischen Umbau eines Standardprodukts bis zum individuellen elektromagnetischen Motordesign: ENGEL legt den Synchronmotor auf die geforderte Drehzahl- und Drehmomentcharakteristik aus.</p></article>'+
     '<article class="step"><h2><span class="nw">Regler und</span> <span class="nw">Software dazu.</span></h2><p>Zum Motor gehören die Regler-Hardware, die Software und die Regeltechnik. ENGEL realisiert sie individuell, bis zur Rotorlageerfassung über Hallsensoren.</p></article>'+
     '<article class="step"><h2><span class="nw">Integriert, und mit</span> <span class="nw">der Anlage im Gespräch.</span></h2><p>Motor und Elektronik werden zum integrierten Antrieb, der über Feldbus wie CANopen, EtherCAT oder PROFINET mit dem übergeordneten System kommuniziert.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split">Motoren, Antriebe <em>und Regelgeräte.</em></h2></div><p data-r>Ein umfangreiches Standardportfolio mit dynamischen Synchron-Servomotoren, integrierten Antrieben und digitalen Servo-Verstärkern, entwickelt und gefertigt in Walluf.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="loesungen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Antriebslösungen</span><h2 class="d2 split">Gebaut für <em class="nw">Ihre Anwendung.</em></h2></div><p data-r>Kundenspezifische Antriebslösungen stehen bei ENGEL besonders im Fokus. Einige Beispiele realisierter Sonderlösungen:</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="anwendungen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Anwendungen</span><h2 class="d2 split">Wo ENGEL-Antriebe <em>im Einsatz sind.</em></h2></div><p data-r>Hochdynamische Motoren laufen vor allem in der industriellen Schraub- und Fügetechnik; integrierte Antriebe bewegen Wägetechnik, Spannsysteme und Fahrzeuge.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Anwendungsberichte</span><dl>'+
    '<div data-r><dt class="lab">Ex-Zonen</dt><dd>HBI-Antriebe in ATEX-Ausführung, entwickelt im Auftrag der Mettler-Toledo Garvens GmbH</dd></div>'+
    '<div data-r><dt class="lab">Schwerlast</dt><dd>Sieben Tonnen auf Präzisionskurs: integrierte HBI-Antriebe bewegen ein Spannsystem</dd></div>'+
    '<div data-r><dt class="lab">Schraubtechnik</dt><dd>Spezialmotoren für kürzere Zykluszeiten in automatisierten Schraubanwendungen</dd></div>'+
    '<div data-r><dt class="lab">Intralogistik</dt><dd>Integrierte Fahrantriebe für AGVs, Shuttles und internen Materialtransport</dd></div>'+
   '</dl></div>'+
   '<div class="bk"><span class="lab kick" data-r>Qualität</span><p class="cr" data-r><span>ISO 9001 und ISO 14001</span><span>TÜV-zertifiziert, 09/2026</span><span>Große Fertigungstiefe</span><span>Gefertigt in Walluf</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split">Qualität beginnt <em>bei jedem Einzelnen.</em></h2></div><p data-r>Die Qualität unserer Produkte beginnt mit der inneren Überzeugung jedes einzelnen Mitarbeiters. Sie ist unser Erfolg und die Basis für eine kontinuierliche und vertrauensvolle Zusammenarbeit mit unseren Kunden.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>Unternehmenspolitik</span><ul>'+
     '<li data-r><b>Kunden</b>Termingerecht hochwertige, zuverlässige und wettbewerbsfähige Produkte und Leistungen.</li>'+
     '<li data-r><b>Mitarbeiter</b>Respektvoller Umgang, Gesundheit und Arbeitssicherheit mit oberster Priorität.</li>'+
     '<li data-r><b>Umwelt</b>Beeinträchtigungen minimieren und die Energieeffizienz der Produkte steigern.</li>'+
     '<li data-r><b>Engagement</b>Wir fördern unter anderem die Deutsche Krebshilfe.</li>'+
    '</ul></div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Branchen</span><p class="cr" data-r><span>Schraub- und Fügetechnik</span><span>Lebensmittelindustrie</span><span>Wägetechnik</span><span>Intralogistik</span><span>Spanntechnik</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="messen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Messen und Aktuelles</span><h2 class="d2 split">Besuchen Sie uns <em>in Nürnberg.</em></h2></div><p data-r>Für die SPS 2026 erhalten Sie bei uns einen Einladungscode für die kostenlose Eintrittskarte. Jeder Eintrag verweist auf seine Quelle.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split">Ihr Antrieb, <em>nach Maß.</em></h2>'+
   '<p class="sub" data-r>Gerne leisten wir technische Beratung und Unterstützung bei der Auswahl des für Sie geeigneten Antriebssystems und stellen Ihnen weiterführende technische Dokumentation zur Verfügung.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Adresse</span><p data-r>ENGEL Elektroantriebe GmbH<br>Am Klingenweg 10<br>65396 Walluf</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Anfahrt</span><p data-r>Ca. 30 Minuten vom Flughafen Frankfurt, je ca. 15 Minuten von den Fernbahnhöfen Mainz und Wiesbaden</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresse</span>ENGEL Elektroantriebe GmbH<br>Am Klingenweg 10, 65396 Walluf</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/loesungen">Antriebslösungen</a><br><a class="ul" href="#/anwendungen">Anwendungen</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Baureihen</span>Synchron-Servomotoren HLM · HBR<br>Integrierte Antriebe HFI · HBI<br>Servo-Verstärker DSV</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Barlow\',system-ui,sans-serif;font-weight:500;font-size:60px;letter-spacing:.34em">ENGEL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ENGEL Elektroantriebe GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",produkte:"produkte",loesungen:"loesungen",anwendungen:"anwendungen",unternehmen:"unternehmen",messen:"messen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ENGEL Elektroantriebe — Synchronmotoren, integrierte Antriebe und kundenspezifische Antriebslösungen, Walluf",x:"Start"};
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
