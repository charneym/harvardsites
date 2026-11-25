/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[3])+'</b><i>'+esc(c[4])+'</i></span><h3>'+esc(c[2])+'<span class="loc">'+esc(c[0])+' · gene bersaglio '+esc(c[1])+'</span></h3><p>'+esc(c[5])+'</p><a class="lab ul lk" href="'+c[6]+'" target="_blank" rel="noopener">'+esc(c[7])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){var two=by[g].every(function(p){return !p.sum});return '<div class="mh-group'+(two?' mh-two':'')+'"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span>'+(two?'':'<span class="mh-sum">'+esc(p.sum)+'</span>')+'<span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Precisione","Mira specificamente al gene causale della patologia, massimizzando l’efficacia terapeutica ed evitando effetti tossici off-target.",'<path d="M8 28h40M28 8v40"/><circle cx="28" cy="28" r="14"/><circle class="f" cx="28" cy="28" r="3.5"/>'],
  ["Efficienza","Agendo alla fonte, sul gene, permette un dosaggio ridotto e una frequenza di somministrazione inferiore rispetto alle terapie tradizionali, a vantaggio della compliance del paziente.",'<path d="M10 40c8-20 28-20 36 0"/><path class="a" d="M28 40V18"/><circle class="f" cx="28" cy="40" r="3.5"/>'],
  ["Versatilità","Si adatta a qualsiasi malattia in cui il silenziamento selettivo di un gene bersaglio possa avere un effetto terapeutico: oncologia, dermatologia, malattie metaboliche.",'<path d="M14 10c0 12 28 12 28 24s-28 12-28 24"/><path d="M42 10c0 12-28 12-28 24"/><path class="a" d="M18 22h20M18 46h20"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>BGA002 · anti-MYCN</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>MYCN è un marcatore di prognosi sfavorevole nei tumori dei bambini e in quelli aggressivi dell’adulto, ed è silenziato nei tessuti normali dopo la nascita. Fonti: biogenera.com, notizie del 23/12/2025, 29/10/2026 e 16/11/2026.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Oligonucleotidi anti-gene<span class="nomob"> · PNA</span> · Bologna</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Farmaci a DNA</span><span class="l">per la medicina</span><span class="l"><em>di precisione.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Biogenera sviluppa una nuova generazione di farmaci anti-gene a base di PNA (Ag-PNA), che agiscono direttamente sul singolo gene alterato all’origine della malattia, per curare tumori aggressivi e altre patologie gravi oggi incurabili.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/come">Come funziona '+ARR+'</a><a class="btn" href="#/programmi">La pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>La nostra missione</span>'+
   '<h2 class="txt" id="mani">Rivoluzionare la cura di patologie gravi e oggi incurabili. I farmaci di Biogenera si legano al DNA del gene responsabile e ne bloccano la trascrizione: <em>la malattia viene fermata alla fonte.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">48</span><p class="k">Brevetti concessi in 46 Paesi, a tutela di MyGenera™, BGA002, BGA003 e degli altri candidati</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">18</span><p class="k">Anni di ricerca, dalla fondazione nel 2008 alla sottomissione del dossier clinico di BGA002</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2027</span><p class="k">Avvio atteso dello studio di Fase I di BGA002 all’Università di Padova, nel primo trimestre</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Il meccanismo anti-gene</span><h2 class="d3">Fermare il gene <em>prima che parli.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Gene attivo</span><span>Legame</span><span>Silenziato</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Un gene alterato, migliaia di copie.</h2><p>Il gene bersaglio è presente in due sole copie per cellula, ma la sua trascrizione produce migliaia di copie di mRNA, e da queste migliaia di copie della proteina che alimenta la malattia.</p></article>'+
     '<article class="step"><h2>L’Ag-PNA si lega al gene.</h2><p>L’oligonucleotide anti-gene, una breve sequenza di DNA chimicamente modificato, si lega in modo selettivo e potente a un filamento della struttura aperta del DNA del gene bersaglio attivo.</p></article>'+
     '<article class="step"><h2>Niente mRNA, niente proteina.</h2><p>La trascrizione del gene è bloccata alla fonte, e con essa la produzione dell’mRNA e della proteina. Gli antisenso agiscono invece più a valle, sull’RNA già prodotto.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="tecnologia" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Tecnologia</span><h2 class="d2 split">La piattaforma <em>MyGenera™.</em></h2></div><p data-r>Un processo bioinformatico proprietario identifica rapidamente i pochi oligonucleotidi anti-gene a base di PNA capaci di bloccare in modo specifico il gene bersaglio; solo i candidati con il massimo potenziale, specificità e sicurezza proseguono lo sviluppo.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Una pipeline <em>gene-specifica.</em></h2></div><p data-r>Tumori, malattie metaboliche e dermatologiche: aree ad elevata necessità medica, dove Biogenera sviluppa molteplici candidati anti-gene. Il primo, BGA002, è diretto contro MYCN nei tumori dei bambini.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Una squadra <em>tra Bologna, Padova e Chicago.</em></h2></div><p data-r>Fondata nel 2008 con sede a Bologna, Biogenera è una PMI innovativa con un team multidisciplinare di ricercatori e numerose partnership con università, in particolare con l’Università di Bologna, e con società del settore farmaceutico.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Verso la prima <em>sperimentazione nell’uomo.</em></h2></div><p data-r>Gli ultimi aggiornamenti societari e le notizie da Biogenera.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnership e contatti</span>'+
   '<h2 class="big split">Parliamo con <em>Biogenera.</em></h2>'+
   '<p class="sub" data-r>Biogenera è aperta a collaborazioni con partner scientifici, industriali e finanziari per accelerare lo sviluppo e la diffusione delle proprie terapie.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Scrivi a Biogenera '+ARR+'</a><a class="btn" href="#/programmi">La pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Sede</span><p data-r>Biogenera SpA<br>Via dell’Artigianato 2<br>40064 Ozzano dell’Emilia (BO)</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Telefono</span><p data-r><a class="ul" href="tel:+390510218311">+39 051 0218311</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Sede</span>Via dell’Artigianato 2<br>Ozzano dell’Emilia (BO)</div>'+
   '<div class="c"><span class="lab">Contatti</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+390510218311">+39 051 0218311</a></div>'+
   '<div class="c"><span class="lab">Esplora</span><a class="ul" href="#/tecnologia">Tecnologia</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Candidato principale</span>BGA002<br>Anti-gene anti-MYCN a base di PNA</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Source Sans 3\',Arial,sans-serif;font-weight:700;font-size:66px;letter-spacing:.04em">BIOGENERA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Biogenera SpA</span><span class="lab">Concept del sito</span><a class="lab ul" href="#main" id="toTop">Torna su ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={missione:"about",come:"story",tecnologia:"tecnologia",programmi:"pipeline",pipeline:"pipeline",team:"team",news:"news",contatti:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Biogenera — Farmaci anti-gene a base di PNA per la medicina di precisione, Bologna",x:"Home"};
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
