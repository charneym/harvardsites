/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'<span class="loc">'+esc(c[3])+'</span></h3><p>'+esc(c[1])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">L’opération</a></li>'}).join("")+'</ul>'}
function prior(){return '<ul class="pri">'+PRIOR.map(function(n){return '<li><span>'+esc(n)+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Capital transmission<span class="nomob"> · Capital développement</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">L’associé minoritaire</span><span class="l">des PME</span><span class="l"><em>bretonnes.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Depuis 2003, nous accompagnons la reprise et la croissance des PME du territoire breton, en fonds propres et quasi-fonds propres, toujours aux côtés du chef d’entreprise.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteres">Nos critères '+ARR+'</a><a class="btn" href="#/contact">Présenter un projet</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Notre mission</span>'+
   '<h2 class="txt" id="mani">Investir auprès des entreprises du territoire breton pour y <b class="w0">maintenir les centres de décision</b> et favoriser <em>la création d’emplois.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">91</span><span class="k">Sociétés accompagnées depuis 2003, pour plus de 15 M€ investis en Bretagne</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30</span><span class="k">Lignes de participation actuellement en portefeuille</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 200</span><span class="k">Emplois en équivalent temps plein dans nos participations, sur les quatre départements</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Forte dimension régionale</span><p data-r>Pérenniser les PME bretonnes, maintenir les centres de décision sur notre territoire et favoriser la création d’emploi.</p></div>'+
    '<div><span class="lab kick" data-r>Minoritaire, non dilutif</span><p data-r>Nos prises de participation sont exclusivement minoritaires : nous accompagnons le projet sans prendre le contrôle.</p></div>'+
    '<div><span class="lab kick" data-r>Un associé impliqué</span><p data-r>Un éclairage complémentaire et des solutions, dans la croissance comme dans les moments difficiles, sans interférer dans la gestion quotidienne.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Notre approche</span><h2 class="d3">Un projet breton, <em>un associé breton.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Projet</span><span>Comité</span><span>Ticket</span><span>Durée</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Un projet du territoire.</h2><p>Reprise ou croissance, dans les Côtes-d’Armor, le Finistère, l’Ille-et-Vilaine ou le Morbihan : 80 dossiers éligibles ont été étudiés en 2025.</p></article>'+
     '<article class="step"><h2>Un comité d’entrepreneurs.</h2><p>Le porteur de projet présente ses ambitions en personne devant notre comité d’investissement : nos actionnaires et un collège d’entrepreneurs bretons.</p></article>'+
     '<article class="step"><h2>Un ticket minoritaire.</h2><p>De 100 K€ à 500 K€, en capital et en obligations convertibles, seul ou en co-investissement, aux côtés du dirigeant.</p></article>'+
     '<article class="step"><h2>Dans la durée.</h2><p>Sept ans d’accompagnement en moyenne, et plus de 1 200 emplois dans les entreprises que nous accompagnons.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteres" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Critères</span><h2 class="d2 split">Des fonds propres <em>à la mesure des PME.</em></h2></div><p data-r>Nous appuyons les opérations de transmission et les levées de fonds de croissance, pour consolider les fonds propres en complément des financements et subventions sollicités.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="participations" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Participations</span><h2 class="d2 split">Des PME qui restent <em>bretonnes.</em></h2></div><p data-r>Industrie, services, artisanat, distribution : nos dernières prises de participation, en transmission comme en développement.</p></div>'+
   '<span class="lab sub-l" data-r>Dernières opérations</span>'+pfRows(PF)+
   '<span class="lab sub-l pr" data-r>Elles nous ont aussi fait confiance</span>'+prior()+
  '</div></section>'+

  '<section class="sec light" id="equipe" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Équipe</span><h2 class="d2 split">Une équipe tournée vers <em>l’accompagnement.</em></h2></div><p data-r>Une connaissance fine de l’écosystème breton, des opérations de transmission-reprise et de l’accompagnement de la croissance des PME. Notre capital est détenu à 55,2 % par quatre banques régionales et à 44,8 % par la Région Bretagne et Bpifrance.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="actualites" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Actualités</span><h2 class="d2 split">Dernières <em>opérations.</em></h2></div><p data-r>Nos prises de participation récentes, et ce que la presse dit de nos entreprises.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Repreneurs, dirigeants et conseils</span>'+
   '<h2 class="big split">Parlons de votre <em>projet.</em></h2>'+
   '<p class="sub" data-r>Transmission, reprise ou développement : écrivez-nous pour recevoir notre présentation institutionnelle, puis prévoir un rendez-vous dans nos bureaux.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+FORM+'" target="_blank" rel="noopener">Nous écrire '+ARR+'</a><a class="btn" href="'+TELH+'">Appeler le '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Siège</span><p data-r>Immeuble Origami<br>3 avenue Germaine Tillion<br>35136 Saint-Jacques-de-la-Lande</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Plan</a></div>'+
    '<div><span class="lab" data-r>Accès</span><p data-r>Quartier de La Courrouze, métro Gaîté (ligne b), bus C6 arrêt Dominos</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Formulaire de contact</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Siège</span>3 avenue Germaine Tillion<br>35136 Saint-Jacques-de-la-Lande</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Nous écrire</a></div>'+
   '<div class="c"><span class="lab">Explorer</span><a class="ul" href="#/more/approche">Approche</a><br><a class="ul" href="#/more/criteres">Critères</a><br><a class="ul" href="#/more/participations">Participations</a><br><a class="ul" href="#/more/equipe">Équipe</a><br><a class="ul" href="#/more/actualites">Actualités</a></div>'+
   '<div class="c"><span class="lab">Territoire</span>Côtes-d’Armor · Finistère<br>Ille-et-Vilaine · Morbihan</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Hanken Grotesk\',Arial,sans-serif;font-weight:700;font-size:64px;letter-spacing:-.02em">BREIZH INVEST</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Breizh Invest PME</span><span class="lab">Site conceptuel</span><a class="lab ul" href="#main" id="toTop">Haut de page ↑</a></div></footer>';
}

/* ================= BUILD-OUT PAGES (HOME_BRIEF update 2026-11-20): every nav item but Contact opens #/more/<item> ================= */
var MORE={approche:["Approche","approche"],criteres:["Critères","criteres"],participations:["Participations","participations"],equipe:["Équipe","equipe"],actualites:["Actualités","actualites"]};
function vMore(id){var m=MORE[id];
  return '<section class="ph-head more" data-field data-theme="dark"><span class="lab eyebrow">Aperçu du concept</span>'+
   '<h1 class="d1" id="pageTitle" tabindex="-1">'+esc(m[0])+' : <em>la page complète.</em></h1>'+
   '<p class="lede intro" data-r>Ceci est un concept de page d’accueil. Si la direction vous plaît, je développerais cette page et le reste du site dans le même style, avec votre équipe, vos participations et vos actualités, et je m’occuperais de la migration depuis votre site actuel. Répondez simplement à l’e-mail qui vous a transmis ce lien, et nous verrons la suite ensemble.</p>'+
   '<div class="act more-act" data-r><a class="btn solid" href="#/">Retour à la page d’accueil '+ARR+'</a></div>'+
   '<a class="ul more-lk" data-r href="#/'+m[1]+'">Ou continuer à parcourir le concept</a></section>';
}

/* ================= ROUTER: #/ is the home page; #/<section> scrolls to that section; #/more/<item> is a build-out page ================= */
var SECS={about:"about",approche:"story",criteres:"criteres",participations:"participations",equipe:"equipe",actualites:"actualites",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  if(p[0]==="more"&&MORE[p[1]])return {k:"more-"+p[1],v:function(){return vMore(p[1])},t:MORE[p[1]][0]+" — Breizh Invest PME",x:MORE[p[1]][0]};
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Breizh Invest PME — Investisseur minoritaire des PME bretonnes, Rennes",x:"Accueil"};
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
