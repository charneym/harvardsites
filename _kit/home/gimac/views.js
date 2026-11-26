/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">'+"Scheda"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Le persone</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* materials (gimac.com home page: "I materiali che possono essere lavorati sono ...") */
function caps(){var C=[
  ["Convenzionali","Tutti i termoplastici","PVC, PU, PE, PP, PC, PA, PMMA, PSU, PBT e altri, in granuli delle forme e dimensioni normalmente in commercio; per polveri e microsfere, viti e cilindri studiati apposta.",'<rect x="12" y="12" width="9" height="9"/><rect x="24" y="12" width="9" height="9"/><rect x="36" y="12" width="9" height="9"/><path class="a" d="M12 38H45"/><path d="M12 44H45"/>'],
  ["Fluoropolimeri e alta temperatura","FEP, ETFE, PVDF, LCP, PSU, PI e PEEK","Polimeri ad alta temperatura di fusione; a richiesta gruppi di plastificazione in materiali resistenti alla corrosione intergranulare, all’usura e alle alte temperature.",'<path d="M28 10C33 18 38 22 38 31A10 10 0 0 1 18 31C18 24 23 21 24 15C26 19 27 21 28 22Z"/><path class="a" d="M14 46H42"/>'],
  ["Bioassorbibili","PLLA HMW, PLG","Le macchine GIMAC processano granuli o polveri senza alterare proprietà determinanti come il peso molecolare o la resistenza meccanica, anche nei materiali bioassorbibili.",'<circle cx="28" cy="28" r="17"/><circle class="a" cx="28" cy="28" r="10"/><circle class="f" cx="28" cy="28" r="2.4"/>'],
  ["Oltre il polimero","Principi attivi, ceramici, metalli","Polimeri bioattivi o biocompatibili, matrici con principi attivi farmaceutici, materiali ceramici e persino metallici.",'<path d="M28 9L45 19V37L28 47L11 37V19Z"/><path class="a" d="M11 19L28 29L45 19M28 29V47"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Estrusione e micro-estrusione<span class="nomob"> · Castronno</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Tubi e cateteri,</span> <span class="l nw">estrusi in continuo,</span> <span class="l"><em class="nw">anche a 3 strati.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>GIMAC progetta e costruisce micro-estrusori, coestrusori, teste di estrusione e impianti completi per tubi e cateteri medicali, per la ricerca farmaceutica e per l’industria.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/prodotti">I nostri prodotti '+ARR+'</a><a class="btn" href="#/contatti">Richiedi informazioni</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Impianti per micro-estrusione</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Sempre più spesso</span> <span class="nw">sono i nostri impianti</span> <span class="nw">a trasformare</span> <span class="nw">prodotti concorrenziali</span> <span class="nw">in prodotti <em>vincenti.</em></span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">Ø 12</span><p class="k">mm: il diametro vite del micro-estrusore più piccolo, per produzioni da pochi grammi all’ora</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">500 bar</span><p class="k">in servizio continuo, 24 ore su 24, per i micro-estrusori; fino a 1000 bar per i coestrusori</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3 strati</span><p class="k">in un solo micro-impianto: tubi da 1 a 4 mm di diametro esterno, calibrati e non</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Micro-impianto a 3 strati</span><h2 class="d3"><span class="nw">Dal granulo</span> <em class="nw">al catetere.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Granuli</span><span>Fusione</span><span>Testa</span><span>Calibro</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Granuli o polveri</span> <span class="nw">in tramoggia.</span></h2><p>I micro-estrusori GIMAC lavorano granuli o polveri di polimero; per polveri e microsfere ci sono viti e cilindri studiati apposta. La vite è protetta da un giunto di sicurezza a rottura calibrata.</p></article>'+
     '<article class="step"><h2><span class="nw">Tre zone</span> <span class="nw">di riscaldamento.</span></h2><p>Lungo il cilindro il polimero fonde senza perdere proprietà determinanti come il peso molecolare o la resistenza meccanica, anche nel PLLA HMW e negli altri bioassorbibili.</p></article>'+
     '<article class="step"><h2><span class="nw">Tre fusi,</span> <span class="nw">una sola testa.</span></h2><p>Nel micro-impianto tre micro-estrusori Ø12 alimentano una testa di coestrusione: tubi fino a 3 strati, rigidi e morbidi, oppure monostrato con una o più righe radiopache.</p></article>'+
     '<article class="step"><h2><span class="nw">Calibrato,</span> <span class="nw">poi trainato.</span></h2><p>Un’unità di calibrazione a vuoto con raffreddamento e un traino portano il tubo a misura: da 1 a 4 mm di diametro esterno, da 200 g/ora fino a circa 10 kg/ora.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="prodotti" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Prodotti</span><h2 class="d2 split"><span class="nw">Dal micro-estrusore</span> <em class="nw">alla linea completa.</em></h2></div><p data-r>Macchine progettate per un servizio continuo di 24 ore su 24, ad alta precisione: in orizzontale, in verticale o inclinate, per l’industria plastica, chimica, farmaceutica e medicale, i centri di ricerca e le università.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="materiali" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Materiali</span><h2 class="d2 split"><span class="nw">Dal PVC al PEEK,</span> <em class="nw">fino al PLLA.</em></h2></div><p data-r>Grazie alla sinergia fra parte meccanica, elettronica di comando e software, gli impianti GIMAC garantiscono tolleranze eccellenti con un’ampia gamma di materiali.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="impianti" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Impianti</span><h2 class="d2 split"><span class="nw">Linee su misura,</span> <em class="nw">anche in continuo.</em></h2></div><p data-r>Tubi e cateteri con diametri, spessori, rigidità e rivestimenti variabili, prodotti in continuo: con estremità conica e flessibilità variabile si possono eliminare lavorazioni successive come l’incollaggio di segmenti flessibili o di connettori.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Alcune installazioni</span><dl>'+
    '<div data-r><dt class="lab">Monostrato</dt><dd>Impianto automatizzato per linea monostrato</dd></div>'+
    '<div data-r><dt class="lab">Fino a 3 strati</dt><dd>Impianto per tubi fino a 3 strati</dd></div>'+
    '<div data-r><dt class="lab">Micro, 3 strati</dt><dd>Micro-impianto di 4,5 m: tre micro-estrusori Ø12, testa, calibrazione a vuoto e traino</dd></div>'+
    '<div data-r><dt class="lab">Automatizzato</dt><dd>Micro-impianto automatizzato per tubi fino a 3 strati</dd></div>'+
    '<div data-r><dt class="lab">Silicone</dt><dd>Cateteri in silicone con riga radiopaca, gestiti da un sistema di controllo e supervisione con misura laser a 2 assi</dd></div>'+
    '<div data-r><dt class="lab">Fino a 2 strati</dt><dd>Micro-impianto per tubi fino a 2 strati</dd></div>'+
   '</dl></div>'+
  '</div></section>'+

  '<section class="sec light" id="azienda" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>L’azienda</span><h2 class="d2 split"><span class="nw">Da Castronno,</span> <em class="nw">per il mondo medicale.</em></h2></div><p data-r>GIMAC produce un’ampia gamma di impianti specializzati sulle richieste dei clienti: prodotti di prova per la ricerca farmaceutica o chimica, produzioni automatizzate con controllo qualità, piccoli coestrusi per uso medicale.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>Vendite regionali</span><ul>'+
     '<li data-r><b>Europa</b>Simone Maccagnan, dalla sede di Castronno.</li>'+
     '<li data-r><b>Giappone</b>Agente: Yamaguchi Sangyo Co., Ltd.</li>'+
     '<li data-r><b>Nord America</b>Un contatto dedicato per le vendite nordamericane.</li>'+
     '<li data-r><b>Resto del mondo</b>Simone Maccagnan, dalla sede di Castronno.</li>'+
    '</ul></div></div>'+
  '</div></section>'+

  '<section class="sec dark" id="fiere" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Fiere</span><h2 class="d2 split"><span class="nw">Dove incontrarci</span> <em class="nw">nel 2026.</em></h2></div><p data-r>Dal 2008 GIMAC espone alle fiere della plastica e della tecnologia medicale in Europa, in Giappone e nelle Americhe.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec dark2 cta" id="contatti" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Contatti</span>'+
   '<h2 class="big split"><span class="nw">Il suo tubo,</span> <em class="nw">la nostra linea.</em></h2>'+
   '<p class="sub" data-r>Oltre alle soluzioni pubblicate ne abbiamo molte altre, riservate per rispetto dei nostri clienti. Ci scriva il prodotto che vuole estrudere: materiale, strati e misure.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Scrivi a GIMAC '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Chiama '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Indirizzo</span><p data-r><span>Gimac di Maccagnan Giorgio</span><br><span>Via Roma 12</span><br><span>21040 Castronno (VA)</span></p></div>'+
    '<div><span class="lab" data-r>Contatti</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Come raggiungerci</span><p data-r><span>Da Milano, Varese o Sesto Calende</span><br><span>Aeroporti di Malpensa e Linate</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Indirizzo</span>Gimac di Maccagnan Giorgio, Via Roma 12, 21040 Castronno (VA), Italia</div>'+
   '<div class="c"><span class="lab">Contatti</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Esplora</span><a class="ul" href="#/prodotti">Prodotti</a><br><a class="ul" href="#/impianti">Impianti</a><br><a class="ul" href="#/materiali">Materiali</a><br><a class="ul" href="#/azienda">Azienda</a></div>'+
   '<div class="c"><span class="lab">Gamma</span>Micro-estrusori, coestrusori, teste, calibrazione, traini e impianti completi</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Barlow\',system-ui,sans-serif;font-style:italic;font-weight:700;font-size:48px;letter-spacing:.32em">GIMAC</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Gimac di Maccagnan Giorgio · P.IVA 01357250123</span><span class="lab">Sito concept</span><a class="lab ul" href="#main" id="toTop">Torna su ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",prodotti:"prodotti",materiali:"materiali",impianti:"impianti",azienda:"azienda",fiere:"fiere",contatti:"contatti"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"GIMAC — Impianti, macchine e teste per estrusione e micro-estrusione, Castronno",x:"Home"};
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
