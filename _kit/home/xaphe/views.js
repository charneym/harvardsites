/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function specRows(){return '<ul class="pfr pipe np">'+SPECS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row mf-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Wound repair","Heal-X: three microRNAs complexed with HAWC, lyophilised and formulated in a topical nanogel, each aimed at a different phase of healing. In vivo results exceed commercial products to date.",'<path d="M10 34C10 20 22 12 28 20C34 12 46 20 46 34L28 48Z"/><path class="a" d="M18 30H26L30 24L34 36L38 30H44"/>'],
  ["mRNA vaccines","At Queen’s University Belfast, HAWC carries a multi-epitope mRNA vaccine for osteosarcoma, designed with a bespoke machine-learning algorithm.",'<circle cx="28" cy="28" r="16"/><path class="a" d="M20 28H36"/><path class="a" d="M28 20V36"/><circle class="f" cx="28" cy="28" r="2.6"/>'],
  ["Ocular delivery","Collaborators in Birmingham deliver a new mRNA to the front and the back of the eye in a drop formulation, with HAWC nanoparticles reaching the target site.",'<path d="M6 28C14 16 42 16 50 28C42 40 14 40 6 28Z"/><circle cx="28" cy="28" r="7"/><circle class="f" cx="28" cy="28" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function certs(){var S=[
  ["Transfection kits","Off the shelf","A kit for any nucleic acid, DNA or RNA, with dosing by base-pair length and strandedness, for repeat transfection of immortalised and primary cells."],
  ["Bespoke nanoparticles","Your cargo, formulated","Send the cargo and XapHe returns a stable, lyophilised product: micrograms to grams, one vial to a thousand."],
  ["RNA design","AI-assisted, codon-optimised","Sequence design and manufacture with the modifications needed for maximal translation, backed by more than 20 years of experience."]];
  return '<div class="mfs">'+S.map(function(s){return '<div class="mf-site"><span class="lab" data-r>'+esc(s[0])+'</span><h3 data-r>'+esc(s[1])+'</h3><p data-r>'+esc(s[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Nucleic acid delivery<span class="nomob"> · Belfast, Northern Ireland</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">RNA delivered</span><span class="l"><em>by a human sequence.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>XapHe’s HAWC peptide condenses any nucleic acid into a nanoparticle of about 100 nm that cells take in by two routes at once, do not treat as foreign, and that needs no cold chain.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/contact">Contact the team</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The delivery problem</span>'+
   '<h2 class="txt" id="mani">RNA only works where it lands: inside the cell, in the cytoplasm. Lipid nanoparticles get it there, but cells read them as foreign, they need a cold chain, and they limit the cargo. <em>HAWC is built from a sequence the cell already knows.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">~100 nm</span><p class="k">Particle size, with a polydispersity index under 0.06</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt;80%</span><p class="k">Transfection across every cell type tested</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">24</span><p class="k">Amino acids in the HAWC peptide</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology · HAWC</span><h2 class="d3">Two doors, <em>one peptide.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Condense</span><span>Enter</span><span>Release</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Condensed into a particle.</h2><p>The HAWC peptide complexes the nucleic acid — DNA, mRNA, microRNA, oligos, saRNA, any size or number — into a nanoparticle of about 100 nm, without microfluidics.</p></article>'+
     '<article class="step"><h2>Taken in by two routes.</h2><p>The sequence keeps both clathrin-mediated and clathrin-independent entry, so uptake holds up even in primary cells, and the cell does not read the particle as foreign.</p></article>'+
     '<article class="step"><h2>Released to the cytoplasm.</h2><p>Full escape from the endosome puts the cargo where it works, so the same cells can be transfected again and again without toxicity.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>HAWC</span><h2 class="d2 split">Found by AI, <em>finished by hand.</em></h2></div><p data-r>XapHe applied AI algorithms to find the sequence inside human proteins that enters cells seamlessly, then modified it until it would carry a cargo.</p></div>'+
   specRows()+
  '</div></section>'+

  '<section class="sec light" id="research" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">In wounds, vaccines <em>and the eye.</em></h2></div><p data-r>HAWC is in use with partners across three programmes, alongside a bio-services business that supplies kits, bespoke nanoparticles and RNA design to other laboratories.</p></div>'+
   caps()+
   certs()+
  '</div></section>'+

  '<section class="sec light alt" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Nanomedicine <em>and biomedical engineering.</em></h2></div><p data-r>XapHe was founded in Belfast in 2024 by two professors: one named on more than 40 granted patents for nucleic acid delivery, the other with two decades translating academic research into marketed devices.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">Funding <em>and partners.</em></h2></div><p data-r>The Innovate UK project behind Heal-X, and the research groups applying HAWC to their own targets.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, pharma and research groups</span>'+
   '<h2 class="big split">Tell us <em>what you need delivered.</em></h2>'+
   '<p class="sub" data-r>Transfection kits, bespoke nanoparticles, RNA design or targeted delivery for your own programme. XapHe replies within 24 hours.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email XapHe '+ARR+'</a><a class="btn" href="#/research">Research</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Belfast</span><p data-r>XapHe Ltd<br>97 Lisburn Road<br>Belfast BT9 7BL, Northern Ireland</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Registered office</span><p data-r>4th Floor Glendinning House<br>6 Murray Street<br>Belfast BT1 6DN</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Belfast</span>97 Lisburn Road<br>Belfast BT9 7BL, Northern Ireland</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">Programmes</a></div>'+
   '<div class="c"><span class="lab">Company</span>XapHe Ltd<br>Registered in Northern Ireland, NI723771</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Poppins\',Arial,sans-serif;font-weight:300;font-size:50px;letter-spacing:.2em">XAPHE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 XapHe Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"story",technology:"technology",research:"research",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"XapHe — nucleic acid delivery with the HAWC peptide",x:"Home"};
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
