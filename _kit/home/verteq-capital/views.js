/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Visita il sito</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Private equity<span class="nomob"> · via Larga 13, Milano</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Capitale di rischio</span><span class="l">per imprese</span><span class="l"><em>eccellenti.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>VERTEQ Capital è una holding di investimenti milanese: forniamo capitale di rischio alle aziende più performanti e investiamo in modo selettivo in situazioni speciali, real assets ed energie rinnovabili.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteri">Cosa cerchiamo '+ARR+'</a><a class="btn" href="#/contatti">Contattaci</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Strategia di investimento</span>'+
   '<h2 class="txt" id="mani">Manteniamo un approccio di investimento aperto, <em>senza preclusioni di settore,</em> al fianco di aziende ben guidate che cercano un partner per crescere.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">800 ha</span><span class="k">Estensione complessiva del progetto ArteOlio nella Maremma Toscana, febbraio 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">€45 mln</span><span class="k">Risorse finanziarie complessive di ArteOlio, partecipata controllata da VERTEQ</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100%</span><span class="k">Valyrian Enterprise Solutions, ceduta al Gruppo Lutech (Apax) nell’aprile 2026</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Private equity</span><p data-r>Siamo una società di investimenti di private equity con sede a Milano, in via Larga.</p></div>'+
    '<div><span class="lab kick" data-r>Capitale di rischio</span><p data-r>Forniamo capitale di rischio alle aziende più performanti, per sostenerne lo sviluppo.</p></div>'+
    '<div><span class="lab kick" data-r>Situazioni speciali</span><p data-r>Investiamo inoltre in modo selettivo in situazioni speciali, real assets, energie rinnovabili e altri settori.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Il nostro approccio distintivo</span><h2 class="d3">Competenze nelle <em>aree chiave.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Valore</span><span>Focus</span><span>Persone</span><span>Crescita</span><span>Capitale</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Dove nasce il valore.</h2><p>Identifichiamo le opportunità di sviluppo del business in grado di generare il maggior valore.</p></article>'+
     '<article class="step"><h2>Un focus condiviso.</h2><p>Creiamo focus organizzativo intorno a pochi obiettivi strategici primari.</p></article>'+
     '<article class="step"><h2>Le persone chiave.</h2><p>Selezioniamo le persone chiave per le posizioni apicali dell’azienda.</p></article>'+
     '<article class="step"><h2>Crescere per acquisizioni.</h2><p>Individuiamo strategie di consolidamento e società target, e affianchiamo l’azienda nell’execution delle operazioni.</p></article>'+
     '<article class="step"><h2>Capitale e raccolto.</h2><p>Apportiamo ulteriori capitali ove necessario e accompagniamo la monetizzazione totale o parziale dell’investimento.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Criteri</span><h2 class="d2 split">Le imprese che <em>cerchiamo.</em></h2></div><p data-r>Siamo organizzati per fornire competenze specifiche nelle aree chiave per il successo delle aziende in cui investiamo. Questi sono i nostri target tipici.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portafoglio</span><h2 class="d2 split">Imprese italiane, <em>di nicchia.</em></h2></div><p data-r>Dalla componentistica industriale all’olio extra-vergine della Maremma: le aziende in cui investiamo oggi, e le operazioni concluse.</p></div>'+
   '<span class="lab sub-l" data-r>In portafoglio</span>'+pfRows(PF)+
   '<span class="lab sub-l pr" data-r>Operazioni concluse</span>'+pfRows(EXIT)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Investitori e <em>imprenditori.</em></h2></div><p data-r>Un team di investimento guidato dal fondatore e affiancato da un consiglio con lunga esperienza alla guida di grandi aziende italiane.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Dal team e dal <em>portafoglio.</em></h2></div><p data-r>Investimenti, cessioni e nomine, dal sito di VERTEQ Capital.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Imprenditori, famiglie e advisor</span>'+
   '<h2 class="big split">Un partner per <em>crescere.</em></h2>'+
   '<p class="sub" data-r>Se guidate o assistete un’azienda ben gestita che cerca capitale per crescere, o una famiglia che affronta un passaggio generazionale, saremo lieti di conoscervi.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Scrivici '+ARR+'</a><a class="btn" href="'+TELH+'">Chiama '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Sede</span><p data-r>VERTEQ Capital S.p.A.<br>via Larga 13<br>20122 Milano (MI)</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Mappa</a></div>'+
    '<div><span class="lab" data-r>Contatti</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Società</span><p data-r>C.F./P.I. 08401890960<br>R.E.A. MI-2023374</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Sede</span>via Larga 13<br>20122 Milano (MI)</div>'+
   '<div class="c"><span class="lab">Contatti</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email</a></div>'+
   '<div class="c"><span class="lab">Esplora</span><a class="ul" href="#/more/approccio">Approccio</a><br><a class="ul" href="#/more/criteri">Criteri</a><br><a class="ul" href="#/more/portafoglio">Portafoglio</a><br><a class="ul" href="#/more/team">Team</a><br><a class="ul" href="#/more/news">News</a></div>'+
   '<div class="c"><span class="lab">Società</span>VERTEQ Capital S.p.A.<br>C.F./P.I. 08401890960</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 60" aria-hidden="true"><text x="280" y="50" text-anchor="middle" style="font-family:\'Krona One\',Arial,sans-serif;font-weight:400;font-size:62px;letter-spacing:.04em">VERTEQ</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 VERTEQ Capital S.p.A.</span><span class="lab">Sito concept</span><a class="lab ul" href="#main" id="toTop">Torna su ↑</a></div></footer>';
}

/* ================= BUILD-OUT PAGES (HOME_BRIEF update 2026-11-20): every nav item but Contatti opens #/more/<item> ================= */
var MORE={approccio:["Approccio","sviluppato","approccio"],criteri:["Criteri","sviluppati","criteri"],portafoglio:["Portafoglio","sviluppato","portafoglio"],team:["Team","sviluppato","team"],news:["News","sviluppate","news"]};
function vMore(id){var m=MORE[id];
  return '<section class="ph-head more" data-field data-theme="dark"><span class="lab eyebrow">Anteprima del concept</span>'+
   '<h1 class="d1" id="pageTitle" tabindex="-1">'+esc(m[0])+', <em>'+m[1]+'.</em></h1>'+
   '<p class="lede intro" data-r>Questo è un concept della home page. Se la direzione vi piace, svilupperei questa pagina e il resto del sito nello stesso stile, con il vostro team, il portafoglio e le news, e mi occuperei del passaggio dal sito attuale. Rispondete all’email con cui avete ricevuto questo link e partiamo da lì.</p>'+
   '<div class="act more-act" data-r><a class="btn solid" href="#/">Torna alla home page '+ARR+'</a></div>'+
   '<a class="ul more-lk" data-r href="#/'+m[2]+'">Oppure continua a scorrere il concept</a></section>';
}

/* ================= ROUTER: #/ is the home page; #/<section> scrolls to that section; #/more/<item> is a build-out page ================= */
var SECS={about:"about",approccio:"story",criteri:"criteria",portafoglio:"portfolio",team:"team",news:"news",contatti:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  if(p[0]==="more"&&MORE[p[1]])return {k:"more-"+p[1],v:function(){return vMore(p[1])},t:MORE[p[1]][0]+" — VERTEQ Capital",x:MORE[p[1]][0]};
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"VERTEQ Capital — Capitale di rischio per imprese eccellenti, Milano",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
/* on the home page, section links scroll in place */
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a||curKey!=="home")return;var r=route(a.getAttribute("href"));if(r.k!=="home"||!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home"||r.k!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
/* arriving at a section from a build-out page (or a cold link): wait for the home view, then jump to the section */
function secAfter(sec){var n=0;(function wait(){if(++n>80)return;var lk=document.documentElement.style.overflow==="hidden"||curKey!=="home"||busy||!document.getElementById(sec);if(lk){setTimeout(wait,120);return}
  setTimeout(function(){secGo(sec,true);try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"},250)})()}
addEventListener("hashchange",function(){var r=route(location.hash);if(curKey!=="home"&&r.k==="home"&&r.sec)secAfter(r.sec)});
(function(){var r=route(location.hash);if(r.k==="home"&&r.sec)secAfter(r.sec)})();
