/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Communiqué '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Capital-investissement<span class="nomob"> · Paris, quai de la Rapée</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Aux côtés</span><span class="l">des entrepreneurs</span><span class="l"><em>qui font la France.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Filiale de la BRED Banque Populaire, Adaxtra Capital investit en direct dans les PME françaises et ouvre à ses clients les meilleurs fonds de private equity européens.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/strategies">Nos stratégies '+ARR+'</a><a class="btn" href="#/contact">Nous contacter</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Notre conviction</span>'+
   '<h2 class="txt" id="mani">Accompagner des <b class="w0">dirigeants talentueux</b>, et construire avec eux des partenariats dans la durée, <em>fondés sur la confiance et le respect.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">600 M€</span><span class="k">Plus de 600 millions d’euros d’actifs gérés (mai 2026)</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 300</span><span class="k">Plus de 1 300 clients privés et institutionnels</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2016</span><span class="k">Une société de gestion en croissance depuis 2016</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Investissement direct</span><p data-r>Les fonds Adaxtra PME prennent des participations dans des PME françaises en croissance et accompagnent leurs dirigeants.</p></div>'+
    '<div><span class="lab kick" data-r>Fonds de fonds</span><p data-r>La gamme Adaxtra Sélection donne accès à des gérants européens de premier plan : fonds primaires, secondaires et co-investissements.</p></div>'+
    '<div><span class="lab kick" data-r>Groupe BRED · BPCE</span><p data-r>Filiale à 100 % de la BRED Banque Populaire, groupe BPCE, et membre de France Invest.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Approche</span><h2 class="d3">Le cycle d’un investissement, <em>de l’atelier au comité.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Analyse</span><span>Pacte</span><span>Suivi</span><span>Cession</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Comprendre l’entreprise.</h2><p>Échanges avec les dirigeants et visites de sites : chaque due diligence, ESG comprise, est présentée au comité d’investissement.</p></article>'+
     '<article class="step"><h2>S’engager par écrit.</h2><p>Au moment de l’investissement, les engagements sont négociés et inscrits dans le pacte d’actionnaires.</p></article>'+
     '<article class="step"><h2>Suivre de près.</h2><p>Un dialogue régulier avec la direction et, lorsque Adaxtra siège au comité stratégique, un suivi au plus près des décisions.</p></article>'+
     '<article class="step"><h2>Transmettre.</h2><p>Accompagner l’entreprise dans ses phases de transformation et de recentrage, jusqu’à sa prochaine étape, comme pour Besnard, cédée en 2026 à un industriel.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Stratégies</span><h2 class="d2 split">Deux métiers, <em>une même exigence.</em></h2></div><p data-r>Adaxtra Capital gère huit véhicules autour de deux stratégies complémentaires : l’investissement direct dans les PME et la sélection de fonds de private equity.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Participations</span><h2 class="d2 split">Des PME <em>bien ancrées.</em></h2></div><p data-r>Une sélection de participations en direct, de la fonderie aéronautique aux micro-crèches, telles que présentées dans leurs communiqués.</p></div>'+
   pfRows(PF)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Équipe</span><h2 class="d2 split">Une équipe <em>expérimentée.</em></h2></div><p data-r>Une équipe d’investissement qui cumule plus de cinquante années d’expérience, d’Ardian à Bpifrance, au service de ses investisseurs et de ses participations.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Actualités</span><h2 class="d2 split">Opérations <em>et levées.</em></h2></div><p data-r>Communiqués de presse d’Adaxtra Capital et de ses partenaires.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Dirigeants, actionnaires et conseils</span>'+
   '<h2 class="big split">Écrivons la prochaine <em>étape ensemble.</em></h2>'+
   '<p class="sub" data-r>Vous dirigez ou conseillez une PME française de 5 à 80 M€ de chiffre d’affaires ? L’équipe d’Adaxtra Capital sera heureuse d’échanger avec vous.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Écrire à Adaxtra '+ARR+'</a><a class="btn" href="'+MAP+'" target="_blank" rel="noopener">Plan d’accès</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Bureaux</span><p data-r>Adaxtra Capital<br>18, quai de la Rapée<br>75012 Paris</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Carte</a></div>'+
    '<div><span class="lab" data-r>Presse</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Société de gestion</span><p data-r>Agréée par l’AMF<br>n° GP-16000021</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Bureaux</span>18, quai de la Rapée<br>75012 Paris</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explorer</span><a class="ul" href="#/approche">Approche</a><br><a class="ul" href="#/strategies">Stratégies</a><br><a class="ul" href="#/participations">Participations</a><br><a class="ul" href="#/equipe">Équipe</a><br><a class="ul" href="#/actualites">Actualités</a></div>'+
   '<div class="c"><span class="lab">Groupe</span>Filiale de la BRED Banque Populaire, groupe BPCE</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:700;font-size:64px;letter-spacing:.01em">ADAXTRA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Adaxtra Capital</span><span class="lab">Site conceptuel</span><a class="lab ul" href="#main" id="toTop">Haut de page ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approche:"story",strategies:"criteria",participations:"portfolio",equipe:"team",actualites:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Adaxtra Capital — Capital-investissement, Paris",x:"Accueil"};
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
