/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Un laboratoire en propre","Gelscom a créé son laboratoire de recherche, équipé d’une salle blanche, pour mettre au point de nouveaux produits du secteur médical et vétérinaire. Plus de 50 % de ses ressources vont à la recherche.",'<rect x="10" y="14" width="36" height="30"/><path class="a" d="M10 24h36"/><circle class="f" cx="28" cy="34" r="3"/>'],
  ["Des gels injectables brevetés","Gelscom s’appuie sur des droits d’exploitation exclusifs de brevets issus de la recherche académique française, et a mené ses recherches avec Gelnesis, qui en détient les brevets.",'<path d="M22 6h12M24 6v16L12 46h32L32 22V6"/><path class="a" d="M16 38h24"/>'],
  ["Un réseau de recherche","Gelscom travaille avec l’INRA, l’INSERM, le CERMAV, des hôpitaux universitaires, des facultés de pharmacie et l’ESPCI, aussi souvent que nécessaire.",'<circle cx="28" cy="12" r="6"/><circle cx="12" cy="42" r="6"/><circle cx="44" cy="42" r="6"/><path class="a" d="M25 17l-10 20M31 17l10 20M18 42h20"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Études cliniques</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'</dd><a class="lab ul evl" href="'+e[2]+'" target="_blank" rel="noopener" data-r>'+e[3]+' '+ARR+'</a></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Deux études post-commercialisation de DiscoGel® recrutent des patients ; les médecins participants sont listés sur ClinicalTrials.gov. Gelscom recherche des partenaires distributeurs exclusifs dans le monde entier pour ses dispositifs médicaux de classe III.</p></div></div>'}
function hist(){return '<ol class="hst">'+HIST.map(function(h){return '<li><span class="lab dt" data-r>'+esc(h[0])+'</span><p data-r>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Gels injectables<span class="nomob"> · dispositifs médicaux de classe III</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">De nouvelles</span><span class="l">solutions pour</span><span class="l">la <em>santé.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Gelscom conçoit, fabrique et met sur le marché des gels injectables innovants. DiscoGel®, son premier dispositif médical de classe III, traite la hernie discale par une injection percutanée, mini-invasive.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">Comment ça marche '+ARR+'</a><a class="btn" href="#/produits">Nos produits</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>La société</span>'+
   '<h2 class="txt" id="mani">Une société française, innovante, indépendante et privée, qui développe, produit et met sur le marché des produits pharmaceutiques injectables. <em>Ses gels sont issus de la recherche académique française.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2005</span><p class="k">Création de Gelscom en France, en juillet ; la société est aujourd’hui installée en Normandie</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">91,4 %</span><p class="k">De résultats très bons ou bons après DiscoGel® (202 patients sur 221, Journal of Spinal Disorders & Techniques, 2007)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50 %</span><p class="k">Plus de la moitié des ressources de Gelscom sont investies dans la recherche</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Comment ça marche</span><h2 class="d3">Un gel qui traite <em>la hernie discale.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Hernie</span><span>Injection</span><span>Décompression</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>La hernie comprime le nerf.</h2><p>Une partie du disque intervertébral est expulsée vers le canal rachidien, dans 87 % des cas au niveau des dernières vertèbres lombaires. Elle peut comprimer les racines nerveuses : lombalgie, sciatique ou cruralgie.</p></article>'+
     '<article class="step"><h2>DiscoGel® est injecté dans le disque.</h2><p>Sous contrôle radioscopique, le praticien injecte à l’aiguille 0,2 à 0,8 ml de gel radio-opaque au cœur du disque. Le gel trouve son chemin dans les fissures jusqu’à la hernie, même à distance du point d’injection.</p></article>'+
     '<article class="step"><h2>La hernie s’assèche, le nerf est libéré.</h2><p>L’eau migre de la périphérie du disque vers son centre et la pression de la hernie chute. Le gel se dépose dans les micro-anfractuosités du disque, comme une « prothèse souple », et le disque redevient étanche.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produits" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produits</span><h2 class="d2 split">Des gels injectables, <em>mini-invasifs.</em></h2></div><p data-r>Réservés à l’usage hospitalier, les dispositifs médicaux de Gelscom s’administrent par voie percutanée sous amplificateur de brillance, par des radiologues interventionnels, des neuroradiologues, des chirurgiens et des dermatologues.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="recherche" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Recherche</span><h2 class="d2 split">La recherche <em>au cœur de Gelscom.</em></h2></div><p data-r>Gelscom s’est spécialisée dans la recherche de gels injectables innovants et originaux, valorisés par des brevets et par la mise sur le marché de dispositifs médicaux en France et à l’international.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="equipe" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Équipe</span><h2 class="d2 split">Une équipe fondatrice <em>d’experts.</em></h2></div><p data-r>Les fondateurs détiennent la majorité du capital de Gelscom SAS. Ils couvrent la stratégie et le marketing, le développement des affaires et la propriété intellectuelle, les affaires pharmaceutiques et réglementaires, et la finance.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec light" id="historique" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Historique</span><h2 class="d2 split">Plus de vingt ans <em>d’innovation.</em></h2></div><p data-r>De la création de Gelscom en 2005 à la certification MDR de DiscoGel® en 2023 : les étapes qui ont construit la société.</p></div>'+
   hist()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Parlons-<em>en.</em></h2>'+
   '<p class="sub" data-r>Professionnels de santé, distributeurs ou partenaires : pour toute question sur DiscoGel®, ScleroGel kit® ou nos travaux de recherche, contactez Gelscom.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Écrire à Gelscom '+ARR+'</a><a class="btn" href="#/produits">Voir les produits</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Adresse</span><p data-r>Gelscom SAS<br>8, avenue Dubna, ZAC Citis<br>14200 Hérouville-Saint-Clair</p></div>'+
    '<div><span class="lab" data-r>Téléphone</span><p data-r><a class="ul" href="tel:+33231949029">+33 2 31 94 90 29</a></p></div>'+
    '<div><span class="lab" data-r>E-mail</span><p data-r><a class="ul" href="'+MAIL+'">contact@gelscom.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresse</span>8, avenue Dubna<br>14200 Hérouville-Saint-Clair</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">contact@gelscom.com</a><br><a class="ul" href="tel:+33231949029">+33 2 31 94 90 29</a></div>'+
   '<div class="c"><span class="lab">Explorer</span><a class="ul" href="#/produits">Produits</a><br><a class="ul" href="#/recherche">Recherche</a><br><a class="ul" href="#/equipe">Équipe</a><br><a class="ul" href="#/historique">Historique</a></div>'+
   '<div class="c"><span class="lab">Produits</span><a class="ul" href="https://www.discogel.com" target="_blank" rel="noopener">DiscoGel®</a><br><a class="ul" href="https://www.sclerogel.com" target="_blank" rel="noopener">ScleroGel kit®</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="62" text-anchor="middle" style="font-family:\'Cormorant Garamond\',serif;font-weight:600;font-size:78px">Gelscom</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Gelscom SAS</span><span class="lab">Site concept</span><a class="lab ul" href="#main" id="toTop">Haut de page ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",produits:"produits",recherche:"recherche",equipe:"equipe",historique:"historique",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Gelscom — de nouvelles solutions pour la santé",x:"Accueil"};
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
