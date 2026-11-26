/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function rows(L){return '<ul class="pfr pipe np">'+L.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+c[1].split('|').map(function(x){return '<span class="nw">'+esc(x)+'</span>'}).join(' ')+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};GROUP.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* the four product qualities (dlb-ovi.de > Produkte; image brochure) */
function caps(){var C=[
  ["Toleranzen","Enge Toleranzfelder","Bei Widerständen, Drahtdurchmessern sowie Dehnungen.",'<circle cx="28" cy="28" r="18"/><circle cx="28" cy="28" r="11"/><path class="a" d="M10 28H17M39 28H46"/><circle class="f" cx="28" cy="28" r="2.4"/>'],
  ["Oberflächen","Sauber und rückstandsfrei","Saubere und nahezu rückstandsfreie Oberflächen auf jedem Draht.",'<path d="M6 34C16 34 18 22 28 22S40 34 50 34"/><path class="a" d="M6 40H50"/><circle class="f" cx="28" cy="22" r="2.4"/>'],
  ["Verlegung","Konstante Lauflängen","Gleichmäßige Verlegung auf der Spule und konstante Lauflängen.",'<path d="M12 10V46M44 10V46"/><path d="M12 18H44M12 24H44M12 30H44M12 36H44"/><path class="a" d="M12 42H44"/>'],
  ["Verzinnung","Gleichmäßige Schichtdicken","Hohe Verzinnungsgüten aus der eigenen galvanischen Verzinnung.",'<circle cx="28" cy="28" r="16"/><circle class="a" cx="28" cy="28" r="12.5"/><circle class="f" cx="28" cy="28" r="2.4"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3><span class="nw">'+esc(c[1])+'</span></h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* packaging and containers (image brochure, Aufmachungen und Gebinde) */
function mats(){var M=[["Stahlspule","630 mm","nach DIN 46391 bzw. 46397"],["Kunststoffspule","630 mm","nach DIN 46391 bzw. 46397"],["Stahlspule","800 mm","nach DIN 46391 bzw. 46397"],["Stahlspule","1000 mm","nach DIN 46391 bzw. 46397"],["Stahlspule","1250 mm","nach DIN 46391 bzw. 46397"],["Gebinde","Octabin","achteckiger Großbehälter"],["Verlitzen","Typ 630–1250","energieeffiziente Einbügel-, Verlitz- und Verseilmaschinen"],["Verseilen","drallfrei","Rohrverseilanlage mit zugkraftgeregelten, angetriebenen Abläufen"]];
  return '<ul class="kmat">'+M.map(function(m){return '<li><span class="lab">'+esc(m[0])+'</span><b>'+esc(m[1])+'</b><span class="kz">'+esc(m[2])+'</span></li>'}).join("")+'</ul>'}
function qual(){var Q=[
  ["Kundenorientierung","Die Zufriedenheit der Kunden steht im Mittelpunkt des täglichen Handelns. Die Strukturen sind so aufgebaut, dass DLB regional wie international schnell agieren kann."],
  ["Unabhängigkeit","Als konzernunabhängige mittelständische Gruppe mit kurzen Entscheidungswegen, die Investitionen bankenunabhängig realisiert."],
  ["Umwelt und Energie","Sorgsamer Umgang mit allen Ressourcen. Ökologische und ökonomische Ziele sind für DLB keine Gegensätze."]];
  return '<ol class="exps">'+Q.map(function(x,i){return '<li><span class="lab">'+('0'+(i+1)).slice(-2)+'</span><h3>'+esc(x[0])+'</h3><p>'+esc(x[1])+'</p></li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Drähte, Litzen und Seile<span class="nomob"> · Oberviechtach</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Power in wire</span> <span class="l acc">and cables.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>DLB Oberviechtach fertigt hochwertige Mehrfachdrähte, Litzen und Seile aus Kupfer, Kupferlegierungen und Aluminium, für die führenden Hersteller von Elektroleitungen.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Zu den Produkten '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>DLB Oberviechtach GmbH &amp; Co. KG</span>'+
   '<h2 class="txt" id="mani"><em>Engste Toleranzen</em> <span class="nw">für Automobil,</span> <span class="nw">Solar, Maschinenbau</span> <span class="nw">und Spezialkabel.</span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">16949</span><p class="k">IATF 16949: alle Standorte der Gruppe zertifiziert, validiert durch Audits des TÜV Rheinland</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Werkstoffe: Kupfer, Kupferlegierungen und Aluminium</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1250</span><p class="k">mm: Stahlspulen bis 1250 mm nach DIN 46391 bzw. 46397</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">In der Fertigung</span><h2 class="d3"><span class="nw">Vom Draht</span> <em class="nw">zur Litze.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Ziehen</span><span>Verzinnen</span><span>Verlitzen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Gezogen</span> <span class="nw">auf Maß.</span></h2><p>Die Grobzuganlage und modernste Mehrfachdrahtziehanlagen ziehen den Kupferdraht durch immer engere Ziehsteine, auf enge Toleranzen bei Durchmesser, Widerstand und Dehnung.</p></article>'+
     '<article class="step"><h2><span class="nw">Galvanisch</span> <span class="nw">verzinnt.</span></h2><p>Die eigene galvanische Oberflächenbeschichtungsanlage verzinnt den Draht, mit hoher Verzinnungsgüte und gleichmäßiger Schichtdicke.</p></article>'+
     '<article class="step"><h2><span class="nw">Verlitzt</span> <span class="nw">und gespult.</span></h2><p>Einbügel-, Verlitz- und Verseilmaschinen verdrehen die Einzeldrähte zur Litze. Gleichmäßig verlegt, in konstanten Lauflängen, auf Spulen bis 1250 mm.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split"><span class="nw">Vom Einzeldraht</span> <em class="nw">bis zum Seil.</em></h2></div><p data-r>Zur Fertigung stehen qualifizierten Mitarbeitern modernste Fertigungsmittel zur Verfügung: Methoden, Verfahren und Maschinen nach dem neuesten Stand der Technik.</p></div>'+
   rows(PRODS)+
   '<div class="bk"><span class="lab kick" data-r>Im Einsatz</span><p class="cr" data-r><span>Automobilindustrie</span><span>Photovoltaik</span><span>Hausgerätetechnik</span><span>Kommunikationstechnik</span><span>Energieerzeugung und -übertragung</span><span>Maschinenbau</span><span>See-, Offshore- und Luftkabel</span><span>Robotik</span><span>Marinetechnik</span><span>Bahntechnik</span><span>Tiefseetechnik</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="qualitaet" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Qualität</span><h2 class="d2 split"><span class="nw">Qualität ist Teil</span> <em class="nw">der Firmenpolitik.</em></h2></div><p data-r>Jeder Mitarbeiter strebt nach der Null-Fehler-Fertigung. Das spiegelt sich im gleichmäßig hohen Qualitätsniveau jeder Litze wider.</p></div>'+
   caps()+
   '<div class="bk"><span class="lab kick" data-r>Zertifiziert</span><p class="cr" data-r><span>IATF 16949 an allen Standorten</span><span>Externe Audits durch den TÜV Rheinland</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="technik" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aufmachungen und Gebinde</span><h2 class="d2 split"><span class="nw">Auf der Spule,</span> <em class="nw">die Sie brauchen.</em></h2></div><p data-r>Geliefert auf Spulen nach DIN 46391 bzw. 46397 oder im Octabin, gefertigt auf einem Maschinenpark nach dem neuesten Stand der Technik.</p></div>'+
   mats()+
  '</div></section>'+

  '<section class="sec light" id="philosophie" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Philosophie</span><h2 class="d2 split"><span class="nw">Kurze Wege,</span> <em class="nw">klare Werte.</em></h2></div><p data-r>Durch die Fokussierung auf das Kerngeschäft hat DLB über die Jahre ein umfangreiches Fachwissen zu Produkten und Fertigungsverfahren erarbeitet und entwickelt es kontinuierlich weiter.</p></div>'+
   qual()+
  '</div></section>'+

  '<section class="sec dark2" id="gruppe" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Die Gruppe</span><h2 class="d2 split"><span class="nw">Eine Gruppe</span> <em class="nw">aus fünf Firmen.</em></h2></div><p data-r>Zusammen mit der BEHG Holding AG, DLB Draht und Litzen und KBE Elektrotechnik in Berlin und KBE in Sousse bildet DLB Oberviechtach eine mittelständisch strukturierte Unternehmensgruppe.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Aktuelles</span><div class="bkl"><p class="cr" data-r><span>wire 2026, Düsseldorf</span><span>Aussteller im April 2026</span><a class="ul" href="https://www.wire-tradefair.com/vis/v1/en/exhibitors/wire2026.3068235" target="_blank" rel="noopener">Im Ausstellerverzeichnis</a></p>'+
   '<p class="cr" data-r><span>Karriere bei DLB</span><span>Stellen, Praktika, Ausbildung und Duales Studium</span><a class="ul" href="'+DG+'unternehmen/karriere" target="_blank" rel="noopener">Zu den Stellen</a></p></div></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Sprechen wir</span> <em class="nw">über Ihre Litze.</em></h2>'+
   '<p class="sub" data-r>Für Fragen, Wünsche und Anfragen zu Drähten, Litzen und Seilen erreichen Sie das Team in Oberviechtach direkt. Das Angebot richtet sich ausschließlich an Geschäftskunden.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>DLB Oberviechtach GmbH &amp; Co. KG<br>Am Sandradl 28–30<br>92526 Oberviechtach</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Downloads</span><p data-r><a class="ul" href="'+DG+'fileadmin/DLB/Downloads/DLB_Imagebroschu__re-web.pdf" target="_blank" rel="noopener">Imagebroschüre (PDF)</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>DLB Oberviechtach GmbH &amp; Co. KG<br>Am Sandradl 28–30, 92526 Oberviechtach</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/fertigung">Fertigung</a><br><a class="ul" href="#/qualitaet">Qualität</a><br><a class="ul" href="#/gruppe">Gruppe</a></div>'+
   '<div class="c"><span class="lab">Register</span>Amtsgericht Amberg, HRB 3716<br>Geschäftsführer: Dipl.-Ing. Albin Dickert, Dipl.-Ing. Klaus Eichelmann</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="54" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:500;font-size:64px;letter-spacing:.3em">DLB</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 DLB Oberviechtach</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",fertigung:"story",produkte:"produkte",qualitaet:"qualitaet",technik:"technik",philosophie:"philosophie",gruppe:"gruppe",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"DLB Oberviechtach — Drähte, Litzen und Seile",x:"Start"};
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
