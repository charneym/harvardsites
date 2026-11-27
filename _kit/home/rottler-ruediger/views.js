/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function dq(A,cls){
  return '<dl class="drq'+(cls?' '+cls:'')+'">'+A.map(function(q){return '<div data-r><dt class="lab">'+esc(q[0])+'</dt><dd>'+(q.length>2?'<b>'+esc(q[1])+'</b>':'')+'<span>'+esc(q[q.length-1])+'</span></dd></div>'}).join("")+'</dl>'}
function mach(){return '<ul class="pfr pipe np">'+MACH.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab cpy">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["1982","Gründung als Molekularsiebhandel durch Hermann und Siglinde Rottler mit Günter und Waltraud Rüdiger."],
  ["1987","Gründung der R&R Sondermaschinen GmbH."],
  ["1997","Gründung der MPK – Modelle-Profile-Konfektion GmbH."],
  ["2008","Ultraschallschweißtechnik für Swisspacer."]];
  return '<ol class="sg-tl">'+H.map(function(h){return '<li data-r><span class="y">'+esc(h[0])+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1512" height="1100" alt="Fächer aus folierten und pulverbeschichteten Sprossenprofilen in Holzdekoren und Farben" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Upgrading your glass<span class="nomob"> · seit 1982 in Langenzenn</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Anlagen und Sprossen</span></span> <span class="l"><span class="nw">für Isolierglas.</span></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Der kompetente Partner für die Isolierglasindustrie: wir bieten Produktionsanlagen zur Abstandhalter- und Sprossenverarbeitung, sind Systempartner für Fenstersprossen und zuverlässiger Lieferant für hochwertige Verbrauchsgüter rund um die Flachglasverarbeitung.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/kontakt">Anfrage senden '+ARR+'</a><a class="btn" href="#/maschinen">Unsere Maschinen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Familienunternehmen aus Langenzenn</span>'+
   '<h2 class="txt" id="mani"><span class="nwp">Nahezu alle Anlagen</span> <span class="nwp">lassen sich skalieren</span> <span class="nwp">und auch später</span> <span class="nwp">noch upgraden.</span> <span class="nwp">Entwickelt und gefertigt</span> <span class="nwp">in Langenzenn.</span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1982</span><p class="k">gegründet als Molekularsiebhandel; heute führen Roland und Stefan Rottler das Familienunternehmen</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~100</span><p class="k">Mitarbeitende an vier Standorten in Deutschland</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~500</span><p class="k">Sprossenpositionen ab Zentrallager Langenzenn</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Vollautomatisierung</span><h2 class="d3"><span class="nw">Vom Profil</span> <span class="nw">zum fertigen Rahmen.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Romillo</span><span>Rotosort</span><span>Roweldo</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Zuschnitt und</span> <span class="nw">Eckwinkel.</span></h2><p>Die Romillo schneidet die Einzelstangen vollautomatisch zu und steckt die Eckwinkel, für alle gängigen geschweißten und gesteckten Profile.</p></article>'+
     '<article class="step"><h2><span class="nw">Ins</span> <span class="nw">Rotosort-Karussell.</span></h2><p>Der Spacerbot legt die Einzelprofile präzise in das bewegliche Karussell, das bequem zur Roweldo geschoben wird.</p></article>'+
     '<article class="step"><h2><span class="nw">Montiert und</span> <span class="nw">verschweißt.</span></h2><p>Die Roweldo montiert die Abstandhalterrahmen vollautomatisch, mit Ultraschallschweißtechnologie für Low-Psi-Profile. Fertige Rahmen fahren auf den Galgen.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="maschinen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Maschinentechnik</span><h2 class="d2 split"><span class="nw">Ausgefeilte Technik</span> <em class="nw">mit Liebe zum Detail.</em></h2></div><p data-r>Entwicklung und Fertigung der Maschinentechnik sitzen in der Firmenzentrale in Langenzenn.</p></div>'+
   mach()+
  '</div></section>'+

  '<section class="sec light" id="sprossen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Sprossensysteme</span><h2 class="d2 split"><span class="nw">Sprossen, Profile</span> <em class="nw">und Zubehör.</em></h2></div><p data-r>R&amp;R ist Ihr Systemlieferant: von Profilen über Verbindungstechnik bis zum Klapperschutz liefern wir alles, was die Sprossenproduktion braucht.</p></div>'+
   dq(SPROS,"dq4")+
  '</div></section>'+

  '<section class="sec dark" id="outsourcing" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Outsourcing</span><h2 class="d2 split"><span class="nw">Sie bestellen,</span> <em class="nw">wir fertigen.</em></h2></div><p data-r>Auftragsspitzen, Sonderanfertigungen, Sprossen in Spezialfarben oder komplexe Modelle: Wir produzieren Abstandhalterrahmen, Sprossengitter und -modelle nach Ihren Wünschen, in Bamberg und Schwalmtal.</p></div>'+
   dq(OUT,"dq4")+
  '</div></section>'+

  '<section class="sec light" id="verbrauch" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Verbrauchsgüter</span><h2 class="d2 split"><span class="nw">Von Molekularsieb</span> <em class="nw">bis Klapperschutz.</em></h2></div><p data-r>Mit Molekularsieb fing 1982 alles an. Heute liefern wir Verbrauchsgüter für die gesamte Isolierglasproduktion, dazu Sonderlösungen, Nischenprodukte und scheinbar vergessene Einzelteile.</p></div>'+
   dq(CONS,"dq3")+
  '</div></section>'+

  '<section class="sec dark2" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Zuverlässigkeit seit</span> <em class="nw">über 40 Jahren.</em></h2></div><p data-r>Durch den engen Kontakt zu den Kunden im jungen Isolierglasmarkt kamen bald Sprossen für den Scheibenzwischenraum hinzu. 1997 entstand mit der MPK eine weitere Säule: produktionsnahe Dienstleistungen von Sprossenmodellen bis zu Abstandhalterrahmen.</p></div>'+
   hist()+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt und Support</span>'+
   '<h2 class="big split"><span class="nw">Sprechen Sie mit uns</span> <em class="nw">über Ihre Anlage.</em></h2>'+
   '<p class="sub" data-r>Sie suchen ein Produkt oder eine Lösung für Ihren Produktionsablauf, haben Fragen zu Ihrer Maschine oder brauchen Service oder ein Ersatzteil?</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Firmenzentrale Langenzenn</span><p data-r>Rottler und Rüdiger und Partner GmbH<br>Mühlsteig 57<br><span>90579 Langenzenn</span></p></div>'+
    '<div><span class="lab" data-r>Werk Bamberg</span><p data-r>MPK Bamberg, Am Börstig 5<br>96052 Bamberg<br><span>Sprossenmodelle, Gitter- und Rahmenfertigung</span></p></div>'+
    '<div><span class="lab" data-r>Werk Schwalmtal</span><p data-r>MPK Schwalmtal, Stöckener Feld 10<br>41366 Schwalmtal<br><span>Sprossengitter und Abstandhalterrahmen</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresse</span>Mühlsteig 57, 90579 Langenzenn</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+SMAIL+'">'+SMAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Seiten</span><a class="ul" href="#/maschinen">Maschinentechnik</a><br><a class="ul" href="#/sprossen">Sprossensysteme</a><br><a class="ul" href="#/outsourcing">Outsourcing</a><br><a class="ul" href="#/verbrauch">Verbrauchsgüter</a></div>'+
   '<div class="c"><span class="lab">Geschäftsführung</span>Roland Rottler, Stefan Rottler<br>Amtsgericht Fürth, HB-Nr. 2362</div>'+
  '</div><svg class="bigsvg flogo" viewBox="0 0 1000 70" aria-hidden="true"><text x="500" y="56" text-anchor="middle" style="letter-spacing:.16em">R&amp;R GROUP · LANGENZENN</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Rottler und Rüdiger und Partner GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",maschinen:"maschinen",sprossen:"sprossen",outsourcing:"outsourcing",verbrauch:"verbrauch",unternehmen:"unternehmen",kontakt:"kontakt",contact:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"R&R Group — Maschinen, Sprossensysteme und Verbrauchsgüter für die Isolierglasindustrie",x:"Home"};
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
