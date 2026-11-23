/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["From human stem cells","Interactome&#8217;s medicines ride on small extracellular vesicles, or exosomes, derived from human stem cells: a nanotechnology the body already uses to move molecules between cells.",'<circle cx="28" cy="28" r="19"/><circle cx="25" cy="25" r="6.5"/><circle class="f" cx="46" cy="12" r="3.2"/><circle class="f" cx="50" cy="22" r="2.4"/>'],
  ["Loaded on the surface","A proprietary G58 modification supports high-efficiency loading of specific cargoes on the exosome surface, within the Nanovate sEV Engineering Platform.",'<circle cx="28" cy="28" r="14"/><path class="a" d="M28 6v8M28 42v8M6 28h8M42 28h8M12.4 12.4l5.7 5.7M37.9 37.9l5.7 5.7M12.4 43.6l5.7-5.7M37.9 18.1l5.7-5.7"/>'],
  ["Many kinds of cargo","The platform is advancing for the delivery of nucleic acids (siRNA, miRNA, mRNA, gRNA), proteins and peptides, small molecules and aptamers.",'<path d="M10 20c6-8 12 8 18 0s12 8 18 0"/><path d="M10 28c6-8 12 8 18 0s12 8 18 0"/><path class="a" d="M10 36c6-8 12 8 18 0s12 8 18 0"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From Interactome&#8217;s releases and its BIO, MassBio and SCbio listings. Stages are as the company states them.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Engineered exosomes<span class="nomob"> · Neurology</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Medicines carried</span><span class="l">by <em>exosomes.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Interactome Biotherapeutics uses human stem cell-derived nanotechnology, small extracellular vesicles, to deliver medicines more efficiently. Our lead program, IB001, is for neuropathic pain.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why exosomes</span>'+
   '<h2 class="txt" id="mani">Lipid nanoparticles and viral vectors carry today&#8217;s genetic medicines. Our manufacturing process is designed to address their delivery issues, and could reduce costs. <em>We engineer the messengers cells already use.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">8</span><p class="k">Rodent and non-human primate studies behind the platform</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">Classes of cargo: nucleic acids, proteins and peptides, small molecules and aptamers</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2026</span><p class="k">The year IB001, for neuropathic pain, is slated to enter clinical trials</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">From stem cell <em>to target.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Source</span><span>Load</span><span>Deliver</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Cells make the carrier.</h2><p>Human stem cells release small extracellular vesicles, or exosomes: nanoscale lipid particles that cells use to move molecules to one another.</p></article>'+
     '<article class="step"><h2>We load the medicine.</h2><p>The Nanovate sEV Engineering Platform loads cargo such as siRNA, with a proprietary G58 modification for high-efficiency loading on the exosome surface.</p></article>'+
     '<article class="step"><h2>The vesicle delivers it.</h2><p>Engineered exosomes carry the medicine to their target, with an initial focus on diseases of the nervous system, from neuropathic pain to ALS.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The Nanovate <em>sEV platform.</em></h2></div><p data-r>Engineered small extracellular vesicle biotherapeutics, built from the science of Henry Ford Health and the University of Oxford, for diseases where today&#8217;s standards of care only manage the symptoms.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Pain first, <em>then the brain.</em></h2></div><p data-r>IB001 for neuropathic pain leads the pipeline, followed by EV-delivered siRNA for ALS and enriched sEVs in-licensed from Henry Ford Health for stroke, neural injury and cancer.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founders and <em>scientific roots.</em></h2></div><p data-r>Co-founded by Adam Koster and Frederick Naftolin, MD, PhD, with technologies linked to the laboratories of Michael Chopp at Henry Ford Health and Matthew Wood at Oxford.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Interactome.</em></h2></div><p data-r>Licensing, accelerator and expansion news from Interactome Biotherapeutics.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Interactome.</em></h2>'+
   '<p class="sub" data-r>For partnerships, licensing and investment in engineered exosome medicines, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Interactome '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Interactome Biotherapeutics, Inc.<br>Grand Rapids, Michigan</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">support@interactomebio.com</a></p></div>'+
    '<div><span class="lab" data-r>Network</span><p data-r>A graduate of the MassBio Drive spring 2025 cohort; presented at S.C. Demo Day, May 2025.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Grand Rapids, Michigan</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">support@interactomebio.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Programs</span>IB001 · ALS siRNA · Enriched sEVs</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Saira Semi Condensed\',sans-serif;font-weight:400;font-size:84px">INTERACTOME</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Interactome Biotherapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Interactome Biotherapeutics — engineered exosome medicines",x:"Home"};
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
