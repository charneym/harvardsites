/* ================= VIEWS (home only: Approche / Services / Plateforme / Équipe / Actualités open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(L){return '<ul class="pfr">'+L.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p>'+(c[4]?'<a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a>':'<span></span>')+'</li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>CRO · résolution de l’inflammation<span class="nomob"> · Toulouse</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">L’inflammation</span><span class="l">qui sait</span><span class="l"><em>se résoudre.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Ambiotis, première CRO mondiale spécialiste des mécanismes de résolution de la réponse inflammatoire, évalue vos molécules sur modèles cellulaires et animaux et en mesure les médiateurs lipidiques par LC-MS/MS.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approche">Notre approche '+ARR+'</a><a class="btn" href="#/contact">Nous contacter</a></div></div>'+
   '<p class="lab hcap" data-r>Résolvine D1 (C<sub>22</sub>H<sub>32</sub>O<sub>5</sub>), médiateur pro-résolvant dérivé du DHA. Structure 3D : PubChem CID 44251266.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>La nouvelle approche de l’inflammation</span>'+
   '<h2 class="txt" id="mani">La chronicité n’est pas qu’une inflammation aiguë qui se répète. Elle résulte d’une incapacité <em>à résoudre le désordre inflammatoire.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2007</span><p class="k">Création d’Ambiotis, Jeune Entreprise Innovante, à Toulouse</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50 %+</span><p class="k">De l’activité investie en recherche, pour une expertise toujours en pointe</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><p class="k">Secteurs servis, de la pharmacie à la santé animale</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Modèles</span><p data-r>Des modèles cellulaires sur cellules humaines primaires et des modèles animaux, développés et validés en interne.</p></div>'+
    '<div><span class="lab kick" data-r>Lipidomique</span><p data-r>La quantification par LC-MS/MS des eicosanoïdes et des médiateurs pro-résolvants (SPMs) dans vos échantillons.</p></div>'+
    '<div><span class="lab kick" data-r>Du préclinique au clinique</span><p data-r>Preuve de concept et mécanismes d’action, des premiers modèles jusqu’aux échantillons humains des essais cliniques.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Notre approche</span><h2 class="d3">La résolution, <em>un processus actif.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Initiation</span><span>Amplification</span><span>Résolution</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Une lésion, une alerte.</h2><p>Blessure, irritation ou infection : l’inflammation est la réponse naturelle de l’hôte. Les neutrophiles quittent la circulation sanguine et gagnent le tissu touché.</p></article>'+
     '<article class="step"><h2>La réponse s’amplifie.</h2><p>Prostaglandines et leucotriènes entretiennent le recrutement. Les anti-inflammatoires non stéroïdiens bloquent cette étape, mais éteindre ces signaux ne suffit pas à rendre au tissu son état initial.</p></article>'+
     '<article class="step"><h2>Le tissu se répare.</h2><p>Lipoxines, résolvines, protectines et marésines, issues des oméga-3 et oméga-6, arrêtent le recrutement. Les macrophages éliminent les cellules usées par phagocytose et le tissu cicatrise. Ambiotis mesure chacune de ces étapes.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="services" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split">Cinq industries, <em>une expertise.</em></h2></div><p data-r>Ambiotis évalue des molécules au stade préclinique ou clinique pour les industries pharmaceutiques, dermo-cosmétiques, nutraceutiques et vétérinaires, et les aide à mettre plus vite sur le marché des produits plus efficaces.</p></div>'+
   rows(SERV)+
  '</div></section>'+

  '<section class="sec dark" id="platform" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Plateforme de technologies</span><h2 class="d2 split">Des briques <em>robustes.</em></h2></div><p data-r>Des protocoles entièrement validés, ou une stratégie personnalisée assemblée à partir de briques technologiques éprouvées, pour transformer vos questions de recherche en solutions expérimentales.</p></div>'+
   rows(TECH)+
   '<div class="bk"><span class="lab kick" data-r>Ils nous font confiance</span><p class="cr" data-r><span>Laboratoires Clarins</span><i>·</i><span>Gattefossé</span><i>·</i><span>Heel</span><i>·</i><span>Roquette</span><i>·</i><span>genOway</span><i>·</i><span>Nuvamid</span><i>·</i><span>PK MED</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Recherche</span><h2 class="d2 split">Au cœur <em>du champ.</em></h2></div><p data-r>Depuis sa création, Ambiotis porte le champ de la résolution de l’inflammation, découvert par l’équipe du Pr Charles Serhan à Harvard Medical School, au sein de projets de recherche européens.</p></div>'+
   rows(RES)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Équipe</span><h2 class="d2 split">Des chercheurs, <em>en mode projet.</em></h2></div><p data-r>Une équipe scientifique de docteurs, d’ingénieurs et de techniciens supérieurs, entourée d’un conseil stratégique de référence dans le domaine.</p></div>'+
   team()+
   '<div class="adv"><span class="lab kick" data-r>Conseil stratégique</span><p data-r><span>Pr Charles N. Serhan, Harvard Medical School</span><i>·</i><span>Dr Nathalie Vergnolle, INSERM</span><i>·</i><span>Pr Jean-Paul Latgé, Institut Pasteur</span><i>·</i><span>Pr Laurent Alric, Hôpitaux de Toulouse</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Actualités</span><h2 class="d2 split">Les dernières nouvelles <em>d’Ambiotis.</em></h2></div><p data-r>Projets européens, publications et rencontres autour de la résolution de l’inflammation.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Pharma, dermo-cosmétique, nutraceutique</span>'+
   '<h2 class="big split">Parlons de <em>votre molécule.</em></h2>'+
   '<p class="sub" data-r>Une preuve de concept à réaliser, un actif à valider, des médiateurs à doser dans un essai clinique ? Décrivez-nous votre projet : l’équipe vous répond.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/approche">Notre approche</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Adresse</span><p data-r><span>Canal Biotech 2</span><br><span>3 rue des Satellites</span><br><span>31400 Toulouse, France</span></p></div>'+
    '<div><span class="lab" data-r>E-mail</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span class="cj">Candidatures : <a class="ul" href="mailto:job@ambiotis.com">job@ambiotis.com</a></span></p></div>'+
    '<div><span class="lab" data-r>Téléphone</span><p data-r><a class="ul" href="tel:+33562244157">+33 (0)5 62 24 41 57</a><br><a class="ul" href="tel:+33561256402">+33 (0)5 61 25 64 02</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Siège</span>Canal Biotech 2<br>Toulouse, France</div>'+
   '<div class="c"><span class="lab">Explorer</span><a class="ul" href="#/approche">Approche</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/plateforme">Plateforme</a><br><a class="ul" href="#/equipe">Équipe</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+33562244157">+33 (0)5 62 24 41 57</a></div>'+
   '<div class="c"><span class="lab">Expertise</span>Résolution de l’inflammation<br>Lipidomique LC-MS/MS<br>Modèles précliniques</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 96" aria-hidden="true"><text x="320" y="74" text-anchor="middle" style="font-family:\'Jost\',system-ui,sans-serif;font-weight:300;font-size:104px;letter-spacing:.02em"><tspan fill="#f2f4f0">ambi</tspan><tspan fill="#85bba1">o</tspan><tspan fill="#f2f4f0">tis</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Ambiotis SAS</span><span class="lab">Site concept</span><a class="lab ul" href="#main" id="toTop">Haut de page ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approche:"story",services:"services",plateforme:"platform",recherche:"research",equipe:"team",actualites:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Ambiotis — CRO spécialiste de la résolution de l’inflammation, Toulouse",x:"Accueil"};
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
