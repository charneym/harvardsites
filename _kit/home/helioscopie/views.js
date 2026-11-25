/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[4])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news_unused(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["De l’idée au marché","L’étude et la mise au point des produits et des procédés, jusqu’à leur mise sur le marché, dans le circuit le plus court possible.",'<circle cx="28" cy="22" r="11"/><path d="M23 38h10M24 43h8"/><path class="a" d="M28 15v7l5 3"/><circle class="f" cx="28" cy="22" r="2.2"/>'],
  ["Fabriqué à Vienne","Une fabrication maîtrisée de la livraison de la matière première jusqu’à l’expédition, en zone à atmosphère contrôlée, qualifiée chaque année.",'<path d="M8 46V24l12 8V24l12 8V16h16v30Z"/><path class="a" d="M8 46H48"/><circle class="f" cx="40" cy="24" r="2.4"/>'],
  ["Qualité et réglementaire","L’ingénierie qualité et réglementaire pour l’homologation en France et à l’international, et la conduite d’études cliniques.",'<path d="M28 8l16 6v12c0 10-7 17-16 22C19 43 12 36 12 26V14Z"/><path class="a" d="M21 27l5 5 10-11"/><circle class="f" cx="28" cy="8" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick">Certifications</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab">'+esc(e[0])+'</dt><dd>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s">Sources : helioscopie.fr. DynaMesh® est certifié selon le RDM 2017/745 par TÜV SÜD (0123). Helioscopie bénéficie du soutien de la Région Auvergne-Rhône-Alpes.</p></div></div>'}
function newsGrid(){return '<ul class="evg">'+NEWS.slice(0,4).map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Fabricant français · Vienne, Isère<span class="nomob"> · depuis 2000</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Des dispositifs</span><span class="l">médicaux pour</span><span class="l"><em>mieux vivre.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Helioscopie conçoit, fabrique et commercialise des dispositifs médicaux implantables, mini-invasifs et réversibles, pour l’obésité, le renfort de paroi et l’incontinence urinaire. Ici, <span class="nw">Heliosphere</span>, son ballon intragastrique gonflé à l’air.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/heliosphere">Comment agit Heliosphere '+ARR+'</a><a class="btn" href="#/produits">Nos produits</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="apropos" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick">Notre philosophie : Primum non nocere</span>'+
   '<h2 class="txt" id="mani">Premièrement, ne pas nuire. Un dispositif implantable ne peut être performant <em>sans être sûr :</em> des solutions simples à réaliser et à utiliser, au service du praticien et de son patient.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">25 ans</span><p class="k">D’expérience dans les dispositifs médicaux implantables, de la classe I à la classe III</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 500+</span><p class="k">Praticiens utilisateurs de nos dispositifs</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">35+</span><p class="k">Pays ont accès à nos dispositifs</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Comment agit Heliosphere</span><h2 class="d3">Un ballon gonflé <em>à l’air.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Pose</span><span>Gonflage</span><span>6 + 6 mois</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Introduit plié, par la bouche.</h2><p>Un gastroentérologue spécialisé introduit le ballon plié dans l’estomac par les voies naturelles, sous anesthésie et contrôle endoscopique. L’intervention se pratique en ambulatoire.</p></article>'+
     '<article class="step"><h2>Gonflé à l’air, il occupe le volume.</h2><p>Le praticien le gonfle à l’air. Moins de 15 g pour environ 600 cm³ : le ballon se place librement dans l’estomac, sans pression sur les muqueuses, et aide à atteindre plus vite la satiété.</p></article>'+
     '<article class="step"><h2>Six mois, puis un second.</h2><p>Le ballon est retiré à 6 mois avec le kit d’extraction Heliosphere. Pour prolonger la perte de poids, un second ballon, Newtech 720, peut être posé pour 6 mois de plus.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="savoirfaire" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Savoir-faire</span><h2 class="d2 split">Concevoir, fabriquer, <em>homologuer.</em></h2></div><p>Nous concevons, fabriquons et commercialisons des dispositifs médicaux mini-invasifs et réversibles. Nous privilégions les fournisseurs et la fabrication Made in France chaque fois que c’est possible.</p></div>'+
   caps()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick">Silicones et polymères</span><p>Le moulage des silicones, et l’assemblage métal, silicone et polymère, notamment par collage et soudure.</p></div>'+
    '<div><span class="lab kick">Conditionnement</span><p>L’emballage propre sous blister ; la stérilisation à la vapeur en interne, et à l’oxyde d’éthylène en sous-traitance.</p></div>'+
    '<div><span class="lab kick">Sur le terrain</span><p>Un réseau commercial national, en contact direct avec les chirurgiens digestifs, bariatriques et uro-gynécologiques.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produits" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Produits</span><h2 class="d2 split">Obésité, paroi, <em>incontinence.</em></h2></div><p>Nos propres dispositifs pour le traitement de l’obésité, et deux gammes dont Helioscopie est le distributeur exclusif pour la France, DynaMesh® et Bulkamid®.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec dark" id="actualites" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Actualités</span><h2 class="d2 split">Retrouvez-nous <em>en congrès.</em></h2></div><p>Helioscopie, Bulkamid et DynaMesh présents dans les congrès et salons, en France et à l’international.</p></div>'+
   newsGrid()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick">Praticiens, établissements et distributeurs</span>'+
   '<h2 class="big split">Parlons de <em>vos patients.</em></h2>'+
   '<p class="sub">Une question sur nos dispositifs, une démonstration ou un partenariat de distribution : notre équipe vous répond.</p>'+
   '<div class="act"><a class="btn solid" href="mailto:'+MAIL+'">Écrire à Helioscopie '+ARR+'</a><a class="btn" href="#/produits">Voir les produits</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab">Siège et fabrication</span><p><span>Helioscopie</span><br><span>Z.A. Château de Malissol</span><br><span>Rue des Frères Lumière</span><br><span>38200 Vienne, France</span></p></div>'+
    '<div><span class="lab">Téléphone</span><p><a class="ul" href="tel:+33474161818">04 74 16 18 18</a></p></div>'+
    '<div><span class="lab">E-mail</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Siège</span>Z.A. Château de Malissol<br>38200 Vienne, France</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+33474161818">04 74 16 18 18</a></div>'+
   '<div class="c"><span class="lab">Explorer</span><a class="ul" href="#/a-propos">À propos</a><br><a class="ul" href="#/savoir-faire">Savoir-faire</a><br><a class="ul" href="#/produits">Produits</a><br><a class="ul" href="#/actualites">Actualités</a></div>'+
   '<div class="c"><span class="lab">Notre ADN</span>Medical Device<br>for Better Life</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="52" text-anchor="middle" style="font-family:\'Barlow Semi Condensed\',Arial,sans-serif;font-weight:400;font-size:62px;letter-spacing:.02em">helioscopie</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Helioscopie</span><span class="lab">Site concept</span><a class="lab ul" href="#main" id="toTop">Haut de page ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={"a-propos":"apropos",heliosphere:"story","savoir-faire":"savoirfaire",produits:"produits",actualites:"actualites",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Helioscopie — Dispositifs médicaux implantables pour l’obésité, la paroi et l’incontinence",x:"Accueil"};
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
