/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[4])+'</p></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Beratung und Planung","Wir empfehlen die passende Anlage für Ihre Anwendung und geben zeit- und geldsparende Hinweise für das Einrichten Ihres Arbeitsplatzes, besonders wichtig für Neueinsteiger.",'<path d="M10 12h36v24H26l-9 8v-8h-7Z"/><path class="a" d="M18 22h20M18 28h12"/><circle class="f" cx="40" cy="28" r="2.2"/>'],
  ["Inbetriebnahme","Neben einer ausführlichen Maschineneinweisung erhalten Sie Tipps zur Formherstellung und zu verwendbaren Materialien, und die Erklärung oft gemachter Fehler.",'<circle cx="28" cy="28" r="17"/><path class="a" d="M28 13v13"/><path d="M19 18a13 13 0 1 0 18 0"/><circle class="f" cx="28" cy="28" r="2.4"/>'],
  ["After-Sales-Service","Auf Wunsch warten wir Ihre Anlage nach Vereinbarung. Bei Problemen helfen wir gerne am Telefon oder per E-Mail; oft hilft schon ein kleiner Tipp weiter.",'<path d="M36 10a10 10 0 0 0-9 14L11 40l5 5 16-16a10 10 0 0 0 14-9l-6 6-6-2-2-6Z"/><path class="a" d="M14 42l4-4"/><circle class="f" cx="38" cy="18" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick">Außerdem im Programm</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab">'+esc(e[0])+'</dt><dd>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s">Prospekte und Preislisten zu allen Anlagen auf schuechl.de. Für alle Schüchl-Vakuumgießanlagen gibt es Nachrüstsätze für das Druckdifferenzgießen und Heizbecher, zur einfachen Selbstmontage.</p></div></div>'}
function newsGrid(){return '<ul class="evg">'+NEWS.slice(0,4).map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Maschinenbau aus Brunnen, Bayern<span class="nomob"> · Vakuumtechnik</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Blasenfrei</span><span class="l">gießen, unter</span><span class="l"><em>Vakuum.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Schüchl baut Vakuum-Gieß- und Rühranlagen, Anlagen für den Serien- und Elektroverguss und Sondermaschinen, von der Konstruktion bis zur Inbetriebnahme aus eigener Hand. Hier: eine vollautomatische Vakuumgießanlage der Baureihe UGM.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/verfahren">So funktioniert Vakuumgießen '+ARR+'</a><a class="btn" href="#/produkte">Unsere Anlagen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="firma" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick">Firmenporträt</span>'+
   '<h2 class="txt" id="mani">Gemeinsam entwickelt von Modellbauern, Prototypenbauern und Maschinenbautechnikern: Schüchl-Anlagen enthalten nur sinnvolle Funktionen, <em>die sich weltweit bewährt haben.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 300+</span><p class="k">Vakuumgießanlagen an zufriedene Kunden weltweit geliefert</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">80er</span><p class="k">Aus dem eigenen Modell- und Prototypenbau entstanden; Serienfertigung seit Anfang der Neunziger</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt; 1 mbar</span><p class="k">Hohes Vakuum: unsere Aggregate sind für den Dauerbetrieb ausgelegt</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">So funktioniert Vakuumgießen</span><h2 class="d3">Entgasen, mischen, <em>gießen.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Entgasen</span><span>Mischen</span><span>Gießen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Unter Vakuum entgasen.</h2><p>Die beiden Komponenten stehen in Becher A und Becher B in der Kammer. Die Anlage baut schnell Vakuum auf, und die eingeschlossene Luft steigt aus. Eine Stoppuhr zeigt die Entgasungszeit.</p></article>'+
     '<article class="step"><h2>Becher B kippt in Becher A.</h2><p>Das Rührwerk mischt mit stufenlos einstellbarer Drehzahl, weiter unter Vakuum. Bei der UGM übernimmt die Mischautomatik, bei der UHG Easy kippen Sie von Hand über die nach außen geführten Hebel.</p></article>'+
     '<article class="step"><h2>Gießen, dann belüften.</h2><p>Die Mischung läuft über den Trichter in die Silikonform, danach wird die Kammer belüftet. Die Misch- und Luftstoßautomatik der UGM sorgt für blasenfreie Abgüsse in gleichbleibender Qualität.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Produkte</span><h2 class="d2 split">Gießen, rühren, <em>vergießen.</em></h2></div><p>Manuelle und vollautomatische Vakuumgießanlagen, Rühranlagen und Anlagen für den Serien- und Elektroverguss. Preisgünstige Ersatzteile, da alles aus eigener Fertigung.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="service" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Service</span><h2 class="d2 split">Von der Beratung bis <em>zur Wartung.</em></h2></div><p>Von der Konstruktion am Reißbrett oder im CAD bis zur Inbetriebnahme beim Kunden führen wir alle Tätigkeiten selbst durch. So können wir schnell auf besondere Kundenwünsche reagieren.</p></div>'+
   caps()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick">Reparatur</span><p>Wir reparieren auch ältere Vakuumgießanlagen von HEK, MCP und MTT, soweit Ersatzteile vorhanden sind.</p></div>'+
    '<div><span class="lab kick">Umbau</span><p>Gibt es keine Ersatzteile mehr, bauen wir die Anlage auf den heutigen Stand der Technik um.</p></div>'+
    '<div><span class="lab kick">Nachrüstung</span><p>Damit auch Ihre ältere Anlage die Vorteile des Druckdifferenzgießens nutzen kann, rüsten wir sie um.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="messen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Messen</span><h2 class="d2 split">Besuchen Sie uns <em>auf der Messe.</em></h2></div><p>Schüchl Maschinenbau stellt regelmäßig auf der productronica in München aus, der Fachmesse für Elektronikfertigung, und auf den Fachmessen für Kunststoff und Formenbau.</p></div>'+
   newsGrid()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick">Anfragen</span>'+
   '<h2 class="big split">Sprechen wir über <em>Ihre Anwendung.</em></h2>'+
   '<p class="sub">Ihre Anfrage, egal ob Maschine, Zubehör oder Umbau, beantworten wir gerne.</p>'+
   '<div class="act"><a class="btn solid" href="mailto:'+MAIL+'">Anfrage an Schüchl '+ARR+'</a><a class="btn" href="#/produkte">Zu den Anlagen</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab">Firmensitz und Fertigung</span><p><span>J. Schüchl, Maschinenbau</span><br><span>Am Grasfeld 2</span><br><span>86564 Brunnen, Deutschland</span></p></div>'+
    '<div><span class="lab">Telefon</span><p><a class="ul" href="tel:+4984543170">+49 8454 3170</a><br><span>oder 3180 · Fax 3880</span></p></div>'+
    '<div><span class="lab">E-Mail</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Firmensitz</span>Am Grasfeld 2<br>86564 Brunnen, Deutschland</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+4984543170">+49 8454 3170</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/firma">Firma</a><br><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/service">Service</a><br><a class="ul" href="#/messen">Messen</a></div>'+
   '<div class="c"><span class="lab">Programm</span>Vakuum-Gieß- und Rühranlagen<br>Sondermaschinen</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="52" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:400;font-style:italic;font-size:62px;letter-spacing:.04em">SCHÜCHL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 J. Schüchl, Maschinenbau</span><span class="lab">Website-Konzept</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={firma:"firma",verfahren:"story",produkte:"produkte",service:"service",messen:"messen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Schüchl Maschinenbau — Vakuum-Gieß- und Rühranlagen, Sondermaschinen",x:"Start"};
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
