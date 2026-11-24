/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh vht">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Peptide vectors","Natural linear peptides break down fast, so Vect-Horus optimises them by medicinal chemistry: cyclisation, non-natural amino acids, Ala- and D-scans. The result: affinities from micromolar to low nanomolar, and blood stability up to 10 hours for a 1 kDa peptide.",'<circle cx="28" cy="28" r="15"/><circle class="f" cx="28" cy="13" r="3"/><circle class="f" cx="41" cy="20.5" r="3"/><circle class="f" cx="41" cy="35.5" r="3"/><circle class="f" cx="28" cy="43" r="3"/><circle class="f" cx="15" cy="35.5" r="3"/><circle class="f" cx="15" cy="20.5" r="3"/>'],
  ["Single-domain antibodies","sdAbs are the smallest functional antigen-binding fragments (under 15 kDa), derived from heavy-chain-only camelid antibodies (VHH). Families of VHH target different receptors and are diversified into variants tailored to each application.",'<path d="M28 50V30"/><path d="M28 30L16 12"/><path d="M28 30L40 12"/><path class="a" d="M12 16l6-6"/><path class="a" d="M44 16l-6-6"/>'],
  ["Vector–payload engineering","Vectors are conjugated to small molecules, proteins, antibodies or oligonucleotides, by genetic fusion or chemical coupling, in monovalent or multivalent formats, and can decorate supramolecular delivery vehicles.",'<path d="M10 28h18"/><circle class="f" cx="38" cy="28" r="8"/><path d="M14 20l-6 8 6 8"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Business model</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Some collaboration agreements are still undisclosed. From vect-horus.com and the company’s 2026 releases.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>VECTrans® platform<span class="nomob"> · Marseille</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Breaking barriers</span><span class="l"><em>to the brain.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Vect-Horus designs molecular vectors, peptides and single-domain antibodies, that carry therapeutic and imaging agents across the blood–brain barrier and other biological barriers, to the cells where they are needed.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/partnering">Partnering</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The challenge</span>'+
   '<h2 class="txt" id="mani">The blood–brain barrier keeps the vast majority of therapeutics out of the nervous tissue, one of the great industrial challenges of the century. <em>VECTrans® was built to make the undruggable druggable.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2005</span><p class="k">Founded in Marseille as a spin-off of CNRS and Aix-Marseille University</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">12+</span><p class="k">Research collaborations, including licences with Novo Nordisk, Ionis and RadioMedix</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">€42M</span><p class="k">Raised in equity and subsidies to date, for a team of 45, mostly in R&amp;D</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Carried across, <em>not kept out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Barrier</span><span>Bind</span><span>Cross</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The barrier.</h2><p>The endothelial cells of brain capillaries form a highly selective wall. On its own, most of a drug never reaches the nervous tissue.</p></article>'+
     '<article class="step"><h2>The vector locks on.</h2><p>Coupled to its payload, a VECTrans® vector binds a receptor naturally involved in receptor-mediated transport, and the complex is rapidly internalised.</p></article>'+
     '<article class="step"><h2>Across, into the brain.</h2><p>By transcytosis the complex crosses the endothelial cell and is delivered into the brain, the most physiological route for large molecules.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Vectors that use the body’s <em>own transport.</em></h2></div><p data-r>VECTrans® vectors target endogenous cell-surface receptors with high uptake and constitutive recycling. Every vector binds both the human and non-human forms of its receptor, for efficient translation to the clinic, without competing with the receptor’s natural ligands. The vectors are protected by several patent families.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="partnering" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Partnering</span><h2 class="d2 split">One platform, <em>shared with pharma.</em></h2></div><p data-r>Vect-Horus makes VECTrans® available to pharmaceutical and biotechnology partners through research collaborations and licences, while building its own pipeline of vector–payload candidates for neurodegenerative diseases, muscular disorders and cancers.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">Founded in a <em>neuroscience lab.</em></h2></div><p data-r>Vect-Horus was founded in 2005 by Alexandre Tokay and Dr. Michel Khrestchatisky as a spin-off of the NICN (CNRS and Aix-Marseille University), now the Institute for NeuroPhysiopathology. It works closely with AMU, CEA, CERIMED, CNRS, INP and INSERM.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Vect-Horus.</em></h2></div><p data-r>Partnerships, publications and people.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Vect-Horus.</em></h2>'+
   '<p class="sub" data-r>For research collaborations, licensing or the internal pipeline, get in touch with the team in Marseille.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Vect-Horus '+ARR+'</a><a class="btn" href="#/partnering">See our partnerships</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Faculté de la Timone<br>27 boulevard Jean Moulin<br>13005 Marseille, France</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">contact@vect-horus.com</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="'+TEL+'">+33 4 91 69 87 81</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Faculté de la Timone<br>27 bd Jean Moulin, 13005 Marseille</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">contact@vect-horus.com</a><br><a class="ul" href="'+TEL+'">+33 4 91 69 87 81</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/partnering">Partnering</a><br><a class="ul" href="#/team">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Follow</span><a class="ul" href="https://fr.linkedin.com/company/vect-horus-s-a-s-" target="_blank" rel="noopener">LinkedIn</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="80" text-anchor="middle" style="font-family:\'Oswald\',sans-serif;font-weight:500;font-size:96px">VECT-HORUS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Vect-Horus</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",partnering:"partnering",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Vect-Horus — VECTrans®, delivery across the blood–brain barrier",x:"Home"};
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
