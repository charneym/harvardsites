/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">'+esc(c[4])+'</a></li>'}).join("")+'</ul>'}
function prior(){return '<ul class="pri">'+PRIOR.map(function(n){return '<li><span>'+esc(n[0])+'</span><em class="lab">'+esc(n[1])+'</em></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Private equity indipendente<span class="nomob"> · Milano</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Dove l’industria</span><span class="l">incontra</span><span class="l"><em>la finanza.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>F&amp;P Equity Partners investe, secondo la formula del club deal, in aziende industriali e di servizi con un fatturato fino a 100 milioni di euro, per accelerarne la crescita.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">Cosa cerchiamo '+ARR+'</a><a class="btn" href="#/contact">Contatti</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Chi siamo</span>'+
   '<h2 class="txt" id="mani">Una boutique indipendente, nata nel 2023 dall’esperienza di F&amp;P4BIZ, per favorire l’incontro tra <em>aziende pronte a crescere</em> e capitali in cerca di opportunità.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">70+</span><span class="k">Operazioni di private equity e M&amp;A realizzate dai promotori, in Italia e all’estero</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20+</span><span class="k">Add-on completati sulle società del portafoglio tra il 2019 e il 2022</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><span class="k">Investimenti realizzati, con Nachmann nel novembre 2025</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Competenze industriali</span><p data-r>Un team di investimento con esperienza trentennale nell’industria e nel private equity, che ha gestito oltre 70 aziende con più di 90 stabilimenti.</p></div>'+
    '<div><span class="lab kick" data-r>Club deal</span><p data-r>Co-investimento e co-involgimento dei Partner Investitori, deal by deal: i partner investono capitali propri assieme ai coinvestitori.</p></div>'+
    '<div><span class="lab kick" data-r>Partnership di lungo periodo</span><p data-r>Affiancamento a tutto tondo dell’imprenditore e del management, dalla strategia al miglioramento delle performance, fino alle acquisizioni.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Modello Club Deal</span><h2 class="d3">Come nasce <em>un’operazione.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Impresa</span><span>Club</span><span>Newco</span><span>Crescita</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>L’impresa.</h2><p>Un’azienda industriale o di servizi, scelta per il potenziale di crescita, la qualità del capitale umano e le prospettive di valorizzazione.</p></article>'+
     '<article class="step"><h2>Il club.</h2><p>Un veicolo promosso e gestito da F&amp;P Equity Partners, capitalizzato da investitori prevalentemente di estrazione industriale, a fianco dei partner.</p></article>'+
     '<article class="step"><h2>La Newco.</h2><p>Una Newco rileva l’azienda con capitale proprio e di debito. In Nachmann il club detiene il 60%, la famiglia reinveste per il 40%.</p></article>'+
     '<article class="step"><h2>La crescita.</h2><p>Supporto industriale e manageriale, add-on e internazionalizzazione: Righi ha acquisito Viganelli e SEI Sistemi, Panzeri l’americana Luxxbox.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Criteri di investimento</span><h2 class="d2 split">Un private equity <em>moderno.</em></h2></div><p data-r>Investimenti nel capitale di rischio di imprese non quotate, con rigorose analisi dei profili di rischio operativi, finanziari e di liquidità.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portafoglio</span><h2 class="d2 split">Aziende scelte <em>con cura.</em></h2></div><p data-r>Tutte le aziende sono seguite da vicino dal team e supportate nelle strategie di crescita e di internazionalizzazione.</p></div>'+
   '<span class="lab sub-l" data-r>Partecipazioni</span>'+pfRows(PF)+
   '<span class="lab sub-l pr" data-r>Exit realizzate</span>'+prior()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Il team</span><h2 class="d2 split">Industria, private equity <em>e consulenza.</em></h2></div><p data-r>Esperienze e network fortemente complementari, frutto di decenni a contatto con imprese di ogni dimensione e settore, in Italia e all’estero.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Media</span><h2 class="d2 split">Comunicati <em>stampa.</em></h2></div><p data-r>Investimenti, add-on ed exit delle società in portafoglio.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Imprenditori e investitori</span>'+
   '<h2 class="big split">Il segreto per andare veloci è <em>andare insieme.</em></h2>'+
   '<p class="sub" data-r>Se guidate un’azienda pronta a crescere, o desiderate investire nell’attività d’impresa a fianco di chi la conosce, parliamone.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Scrivici '+ARR+'</a><a class="btn" href="'+TELH+'">Chiama '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Sede</span><p data-r>F&amp;P Equity Partners<br>Via Alberto da Giussano 15<br>20145 Milano</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Vai alla mappa</a></div>'+
    '<div><span class="lab" data-r>Guglielmo Fiocchi</span><p data-r><a class="ul" href="tel:+393356513525">+39 335 65 13 525</a><br><a class="ul" href="mailto:guglielmo.fiocchi@fp4biz.com">guglielmo.fiocchi@fp4biz.com</a></p></div>'+
    '<div><span class="lab" data-r>Maurizio Perroni</span><p data-r><a class="ul" href="tel:+393386857723">+39 338 68 57 723</a><br><a class="ul" href="mailto:maurizio.perroni@fp4biz.com">maurizio.perroni@fp4biz.com</a></p></div>'+
    '<div><span class="lab" data-r>Andrea Lovato</span><p data-r><a class="ul" href="tel:+393355638620">+39 335 563 8620</a><br><a class="ul" href="mailto:andrea.lovato@fp4biz.com">andrea.lovato@fp4biz.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Sede</span>Via Alberto da Giussano 15<br>20145 Milano</div>'+
   '<div class="c"><span class="lab">Contatti</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email</a></div>'+
   '<div class="c"><span class="lab">Esplora</span><a class="ul" href="#/approach">Il modello</a><br><a class="ul" href="#/criteria">Criteri</a><br><a class="ul" href="#/portfolio">Portafoglio</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">Media</a></div>'+
   '<div class="c"><span class="lab">Network</span>Partner di RTZ,<br>associazione professionale</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Spectral\',Georgia,serif;font-weight:400;font-size:58px;letter-spacing:.01em">F&amp;P EQUITY PARTNERS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 F&amp;P Equity Partners</span><span class="lab">Sito concept</span><a class="lab ul" href="#main" id="toTop">Torna su ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approach:"story",criteria:"criteria",portfolio:"portfolio",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"F&P Equity Partners — Private equity e club deal, Milano",x:"Home"};
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
