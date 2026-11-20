/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Lire l’annonce</a></li>'}).join("")+'</ul>'}
function prior(){return '<ul class="pri">'+PRIOR.map(function(n){return '<li><span>'+esc(n)+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Capital investissement<span class="nomob"> · Hauts-de-France depuis plus de 40 ans</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Actionnaire</span><span class="l">de votre <em>histoire.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Ancré et identifié sur son territoire, Finorpa intervient en fonds propres et quasi-fonds propres auprès des PME et des entreprises à potentiel des Hauts-de-France.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteres">Nos interventions '+ARR+'</a><a class="btn" href="#/contact">Nous contacter</a></div></div>'+
   '<span class="lab cap" aria-hidden="true">La Grand’Place de Lille, la Vieille Bourse et le beffroi de la Chambre de commerce</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Qui sommes-nous</span>'+
   '<h2 class="txt" id="mani">Création, développement, transmission\u00a0: Finorpa est présent à <b class="w0">toutes les étapes majeures</b> de la vie d’une entreprise, avec une vocation, <em>investir durablement pour l’avenir du territoire.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2 000</span><span class="k">Entreprises financées en plus de 40 ans d’investissement</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100</span><span class="k">Entreprises en portefeuille</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">150 k€–1 M€</span><span class="k">Montant d’investissement, en fonds propres et quasi-fonds propres</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Finorpa SCR</span><p data-r>Le véhicule historique, qui intervient en fonds propres et quasi-fonds propres auprès des PME et entreprises à potentiel de la région.</p></div>'+
    '<div><span class="lab kick" data-r>Captech Santé</span><p data-r>Fonds de capital risque dédié aux technologies de la santé, du seed à la série A\u00a0: biotech, medtech, e-santé et nutrition.</p></div>'+
    '<div><span class="lab kick" data-r>Hauts-de-France Avenir TPE PME</span><p data-r>Fonds régional de co-investissement dédié au financement du développement et de la reprise des TPE et PME.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Notre approche</span><h2 class="d3">Un associé à chaque étape <em>de l’entreprise.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Création</span><span>Croissance</span><span>Reprise</span><span>Durée</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Créer.</h2><p>Capital risque\u00a0: nous participons au développement des jeunes entreprises à potentiel, en création ou en démarrage, avec des tickets de 150 k€ à 500 k€.</p></article>'+
     '<article class="step"><h2>Grandir.</h2><p>Capital développement\u00a0: nous finançons la croissance organique ou externe des entreprises qui ont déjà une histoire, de 300 k€ à 1 M€.</p></article>'+
     '<article class="step"><h2>Transmettre.</h2><p>Capital transmission\u00a0: nous facilitons la reprise d’une PME et la transmission pérenne des entreprises, avec plus de 50 opérations ces dernières années.</p></article>'+
     '<article class="step"><h2>Durer.</h2><p>Une capacité à réinvestir dans la durée, et une équipe de proximité à Lille, Saint-Omer et Amiens, aux côtés des dirigeants.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Critères</span><h2 class="d2 split">Des outils financiers <em>adaptés.</em></h2></div><p data-r>Finorpa est un fonds généraliste, partenaire financier des entreprises et des entrepreneurs des Hauts-de-France. Nous visons un seul objectif\u00a0: la réussite de votre projet.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Participations</span><h2 class="d2 split">Des entreprises <em>de la région.</em></h2></div><p data-r>Quelques-unes des opérations récentes de Finorpa SCR et des fonds gérés par Finorpa Gestion, de l’industrie à l’agroalimentaire et au numérique.</p></div>'+
   '<span class="lab sub-l" data-r>Opérations récentes</span>'+pfRows(PF)+
   '<span class="lab sub-l pr" data-r>Ils nous ont fait confiance</span>'+prior()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Équipe</span><h2 class="d2 split">Associé de tous <em>les instants.</em></h2></div><p data-r>Des femmes et des hommes aux profils pluridisciplinaires et complémentaires, venus notamment de l’industrie, du commerce et du numérique.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Actualités</span><h2 class="d2 split">Un écosystème <em>actif.</em></h2></div><p data-r>Les dernières opérations annoncées par Finorpa et ses fonds.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Dirigeants, repreneurs et créateurs</span>'+
   '<h2 class="big split">Faisons de votre vision <em>une réalité.</em></h2>'+
   '<p class="sub" data-r>Vous créez, développez ou reprenez une entreprise dans les Hauts-de-France\u00a0? Parlons de votre projet.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Écrire à Finorpa '+ARR+'</a><a class="btn" href="'+TELH+'">Appeler le '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Lille</span><p data-r>4 square Dutilleul<br>59800 Lille<br><a class="ul" href="'+TELH+'">'+TEL+'</a></p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Plan</a></div>'+
    '<div><span class="lab" data-r>Saint-Omer et Amiens</span><p data-r>Maison du Développement, 16 place Victor Hugo, 62500 Saint-Omer<br>6 boulevard de Belfort, 80000 Amiens</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Presse\u00a0: <a class="ul" href="mailto:dcaron@finorpa.fr">dcaron@finorpa.fr</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Siège</span>4 square Dutilleul<br>59800 Lille</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">E-mail</a></div>'+
   '<div class="c"><span class="lab">Explorer</span><a class="ul" href="#/more/approche">Approche</a><br><a class="ul" href="#/more/criteres">Critères</a><br><a class="ul" href="#/more/participations">Participations</a><br><a class="ul" href="#/more/equipe">Équipe</a><br><a class="ul" href="#/more/actualites">Actualités</a></div>'+
   '<div class="c"><span class="lab">Réglementaire</span>Finorpa Gestion, société de gestion agréée AMF GP1600020</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Newsreader\',Georgia,serif;font-weight:300;font-style:italic;font-size:68px;letter-spacing:-.01em">finorpa</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Finorpa</span><span class="lab">Site conceptuel</span><a class="lab ul" href="#main" id="toTop">Haut de page ↑</a></div></footer>';
}

/* ================= BUILD-OUT PAGES (HOME_BRIEF update 2026-11-20): every nav item but Contact opens #/more/<item> ================= */
var MORE={approche:["Approche","approche"],criteres:["Critères","criteres"],participations:["Participations","participations"],equipe:["Équipe","equipe"],actualites:["Actualités","actualites"]};
function vMore(id){var m=MORE[id];
  return '<section class="ph-head more" data-field data-theme="dark"><span class="lab eyebrow">Aperçu du concept</span>'+
   '<h1 class="d1" id="pageTitle" tabindex="-1">'+esc(m[0])+', <em>en version complète.</em></h1>'+
   '<p class="lede intro" data-r>Ceci est un concept pour la page d’accueil. Si la direction vous plaît, je développerais cette page et le reste du site dans le même style, avec votre équipe, vos participations et vos actualités, et je m’occuperais de la transition depuis votre site actuel. Répondez simplement à l’e-mail qui contenait ce lien, et nous pourrons en parler.</p>'+
   '<div class="act more-act" data-r><a class="btn solid" href="#/">Retour à la page d’accueil '+ARR+'</a></div>'+
   '<a class="ul more-lk" data-r href="#/'+m[1]+'">Ou continuer à parcourir le concept</a></section>';
}

/* ================= ROUTER: #/ is the home page; #/<section> scrolls to that section; #/more/<item> is a build-out page ================= */
var SECS={about:"about",approche:"story",criteres:"criteria",participations:"portfolio",equipe:"team",actualites:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  if(p[0]==="more"&&MORE[p[1]])return {k:"more-"+p[1],v:function(){return vMore(p[1])},t:MORE[p[1]][0]+" — Finorpa",x:MORE[p[1]][0]};
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Finorpa — Capital investissement en Hauts-de-France, Lille",x:"Accueil"};
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
