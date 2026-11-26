/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><div class="pn"><h3>'+esc(c[1])+'</h3><span class="loc">Modelli '+esc(c[3])+'</span></div><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[4]+'" target="_blank" rel="noopener">Scheda '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Amministrazione</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul>'+
    '<p class="engn" data-r>Figlio del fondatore Andrea Appiani, guida il gruppo dal 2001.</p></div>'}
function news(){return ''}
/* special equipment (appianigroup.com/it > Prodotti > Attrezzature speciali) */
function caps(){var C=[
  ["BAS","Cesti metallici","Cesti metallici di varie tipologie, per la movimentazione e lo stoccaggio delle bobine.",'<path d="M10 18H46V44H10Z"/><path class="a" d="M10 27H46M10 36H46M22 18V44M34 18V44"/>'],
  ["ATSOL","Sollevatori","Sollevatori di vario genere, progettati per la movimentazione delle bobine.",'<path d="M28 6V14M12 14H44M12 14V34M44 14V34"/><path class="a" d="M12 34H18M44 34H38"/><circle class="f" cx="28" cy="6" r="2.2"/><path d="M18 22V46M38 22V46"/>'],
  ["ATRIB","Ribaltatori","Ribaltatori per la movimentazione delle bobine, sviluppati secondo le esigenze del cliente.",'<path d="M14 46H42"/><path d="M18 20V40M38 20V40"/><path class="a" d="M44 18A18 18 0 0 0 26 6M26 6L31 3M26 6L30 11"/>'],
  ["PLTBO · PLTPL","Pallet e selle","Pallet e selle per lo stoccaggio delle bobine.",'<path d="M8 40H48M8 46H48M12 40V46M28 40V46M44 40V46"/><path class="a" d="M14 40A14 14 0 0 1 42 40"/>'],
  ["MRIFL","Riflangiatrici","Ricondizionano le bobine B-type danneggiate, ripristinandone le dimensioni originali.",'<path d="M16 10V46M40 10V46M16 28H40"/><path class="a" d="M8 18L14 22L8 26M48 18L42 22L48 26"/>'],
  ["Su misura","Progetti speciali","Attrezzature progettate e sviluppate secondo le richieste specifiche di ogni cliente.",'<circle cx="28" cy="28" r="17"/><path class="a" d="M20 28.5L26 34L37 22"/>']];
  return '<div class="caps c3">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Appiani Reels · Appiani Inoxfer<span class="nomob"> · Manerbio</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Bobine in acciaio</span> <span class="l"><em class="nw">per il cavo e il filo.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Dal 1962 Appiani progetta e costruisce a Manerbio bobine metalliche e attrezzature speciali per l’industria del cavo e del filo, e carpenteria in acciaio inox e al carbonio.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/prodotti">Le bobine '+ARR+'</a><a class="btn" href="#/contatti">Richiedi un’offerta</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Dal 1962, Manerbio</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Una famiglia,</span> <span class="nw">due aziende:</span> <span class="nw">le bobine di Appiani Reels</span> <span class="nw">e la carpenteria</span> <span class="nw">di Appiani Inoxfer.</span> <em><span class="nw">Progettate su richiesta.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1962</span><p class="k">Andrea Appiani avvia a Manerbio la produzione di bobine metalliche</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><p class="k">famiglie di bobine, dalle B-type per steel cord alle scomponibili, più le attrezzature</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">G16</span><p class="k">bilanciatura dinamica secondo ISO 1940 per le bobine tornite ad alta velocità</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">La vita di una bobina</span><h2 class="d3"><span class="nw">Avvolta, spedita,</span> <em class="nw">rimessa a nuovo.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Avvolgere</span><span>Bilanciare</span><span>Sollevare</span><span>Riflangiare</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Ogni materiale</span> <span class="nw">la sua bobina.</span></h2><p>Steel cord, hose wire, saw wire, cavo isolato, fibre ottiche, tubi o funi: la bobina accoglie il materiale strato dopo strato, per la spedizione o per il processo interno.</p></article>'+
     '<article class="step"><h2><span class="nw">Alta velocità,</span> <span class="nw">nessuna vibrazione.</span></h2><p>Le bobine tornite possono essere bilanciate dinamicamente secondo G16 ISO 1940 per alte velocità di processo, con lamiere di forte spessore per portate elevate.</p></article>'+
     '<article class="step"><h2><span class="nw">Sollevata</span> <span class="nw">e movimentata.</span></h2><p>Sollevatori, ribaltatori, pallet e selle: Appiani costruisce anche le attrezzature per movimentare e stoccare le bobine.</p></article>'+
     '<article class="step"><h2><span class="nw">Di nuovo</span> <span class="nw">a misura.</span></h2><p>Le macchine riflangiatrici ricondizionano le bobine B-type danneggiate e ne ripristinano le dimensioni originali.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="prodotti" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Appiani Reels</span><h2 class="d2 split"><span class="nw">Sei famiglie</span> <em class="nw">di bobine.</em></h2></div><p data-r>Bobine per steel cord e saw wire, stampate, strutturali, tornite, composite e scomponibili, per tutti i principali protagonisti dell’industria del cavo e del filo. Ogni modello è personalizzabile secondo le richieste del cliente.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="attrezzature" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Attrezzature speciali</span><h2 class="d2 split"><span class="nw">Intorno alla bobina,</span> <em class="nw">tutto il resto.</em></h2></div><p data-r>Sistemi per la movimentazione e lo stoccaggio delle bobine e macchine per il loro ricondizionamento, progettati e sviluppati secondo le richieste specifiche dei clienti.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="inoxfer" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Appiani Inoxfer</span><h2 class="d2 split"><span class="nw">Carpenteria in inox</span> <em class="nw">e acciaio al carbonio.</em></h2></div><p data-r>Dal 1983 la seconda azienda del gruppo costruisce serbatoi, cisterne e strutture in acciaio. Nei serbatoi per veicoli antincendio vanta partnership consolidate con i maggiori produttori europei.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Produzione</span><dl>'+
    '<div data-r><dt class="lab">Antincendio</dt><dd>Serbatoi per veicoli antincendio, completi della relativa serie di piping</dd></div>'+
    '<div data-r><dt class="lab">Siderurgia, ecologia</dt><dd>Vasche e cisterne di varia tipologia per il settore siderurgico ed ecologico</dd></div>'+
    '<div data-r><dt class="lab">Automazione</dt><dd>Strutture e telai per macchine automatiche</dd></div>'+
    '<div data-r><dt class="lab">Superfici</dt><dd>Trattamenti superficiali sui serbatoi in acciaio al carbonio, frutto della R&amp;D 2002–2011</dd></div>'+
   '</dl></div>'+
  '</div></section>'+

  '<section class="sec light" id="azienda" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Il gruppo</span><h2 class="d2 split"><span class="nw">Dal 1962,</span> <em class="nw">di padre in figlio.</em></h2></div><p data-r>Il Gruppo Appiani investe ogni anno in ricerca e sviluppo, in tecnologie produttive avanzate, nella formazione continua del personale e in collaborazioni durature con i clienti.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>Cronistoria</span><ul>'+
     '<li data-r><b>1962</b>Andrea Appiani, dopo anni alla Mol-Bre, prima società italiana a realizzare bobine stampate industrialmente, fonda la sua officina.</li>'+
     '<li data-r><b>1969–1980</b>Il boom dello pneumatico: la bobina B-type per cordicella, brevettata e prodotta in esclusiva per diversi anni, anche per l’estero.</li>'+
     '<li data-r><b>1983</b>Nascono A. Appiani Srl (Appiani Reels) e Appiani Inoxfer Srl, con un nuovo capannone per serbatoi e cisterne.</li>'+
     '<li data-r><b>1988</b>La gamma si allarga a tutti gli operatori dell’industria del cavo e del filo.</li>'+
     '<li data-r><b>1994</b>Secondo ampliamento: un nuovo capannone e nuovi uffici.</li>'+
     '<li data-r><b>2001</b>Marco Appiani diventa amministratore; certificazione ISO per entrambe le aziende.</li>'+
     '<li data-r><b>2002–2011</b>Nuovi modelli di bobine per la spedizione di saw wire, il filo per il taglio dei semiconduttori.</li>'+
     '<li data-r><b>2012</b>Cinquant’anni di attività e la nascita del marchio Appiani Group.</li>'+
    '</ul></div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Qualità</span><p class="cr" data-r><span>A. Appiani Srl: UNI EN ISO 9001</span><span>Appiani Inoxfer Srl: UNI EN ISO 9001</span></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec dark2 cta" id="contatti" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Contatti</span>'+
   '<h2 class="big split"><span class="nw">Il vostro filo,</span> <em class="nw">la nostra bobina.</em></h2>'+
   '<p class="sub" data-r>Per informazioni, offerte o caratteristiche tecniche dei prodotti, scriveteci o chiamateci. Nel 2026 Appiani ha esposto a wire Düsseldorf, la fiera internazionale del filo e del cavo.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Scrivi ad Appiani '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Chiama '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Sede</span><p data-r><span>Appiani Group</span><br><span>Via Porzano 34</span><br><span>25025 Manerbio (BS)</span></p></div>'+
    '<div><span class="lab" data-r>Contatti</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Società</span><p data-r><span>A. Appiani Srl</span><br><span>Appiani Inoxfer Srl</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Sede</span>Appiani Group, Via Porzano 34, 25025 Manerbio (BS), Italia</div>'+
   '<div class="c"><span class="lab">Contatti</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Esplora</span><a class="ul" href="#/prodotti">Prodotti</a><br><a class="ul" href="#/attrezzature">Attrezzature</a><br><a class="ul" href="#/inoxfer">Inoxfer</a><br><a class="ul" href="#/azienda">Azienda</a></div>'+
   '<div class="c"><span class="lab">Società</span>A. Appiani Srl, P. IVA IT 00544580988<br>Appiani Inoxfer Srl, P. IVA IT 01742810987</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Tenor Sans\',system-ui,sans-serif;font-weight:400;font-size:46px;letter-spacing:.24em">APPIANI GROUP</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Appiani Group</span><span class="lab">Sito concept</span><a class="lab ul" href="#main" id="toTop">Torna su ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",prodotti:"prodotti",attrezzature:"attrezzature",inoxfer:"inoxfer",azienda:"azienda",contatti:"contatti"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Appiani Group — Bobine metalliche per l’industria del cavo e del filo, Manerbio",x:"Home"};
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
