/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["The target: EphA2","A receptor abundant on the surface of metastatic pancreatic cancers and other solid tumours. Bound by its natural ephrin ligands it acts as a tumour suppressor; overexpressed without enough ligand it turns pro-oncogenic, helping cancer cells leave the primary tumour and settle in other tissues.",'<path d="M6 34h44M6 40h44"/><path class="a" d="M28 34V22"/><ellipse cx="28" cy="16" rx="9" ry="6"/><rect x="22" y="40" width="12" height="9"/>'],
  ["The agent: Targefrin-dimer","A synthetic dimeric peptide mimetic that imitates the ephrins. Refined through iterative design for affinity and specificity, it induces EphA2 to dimerise and is removed from the cancer cell surface; the dimeric configuration is essential.",'<circle class="f" cx="18" cy="28" r="5"/><circle class="f" cx="38" cy="28" r="5"/><path class="a" d="M23 28h10"/><path d="M10 44c6-6 30-6 36 0M10 12c6 6 30 6 36 0"/>'],
  ["The aim: stop the spread","By degrading a major driver of cell migration, Targefrin-dimer could make tumours significantly less aggressive, used alongside standard of care, starting with pancreatic cancer, a largely unmet medical need.",'<circle cx="20" cy="30" r="10"/><path class="a" d="M32 30h16M42 24l6 6-6 6"/><path d="M38 18l8-8M38 42l8 8"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>SBIR Phase I results</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>As reported in the abstract of NCI SBIR Phase II award R44CA277917 (NIH RePORTER). Preclinical results; Targefrin-dimer has not yet been tested in patients.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Pancreatic cancer<span class="nomob"> · EphA2</span> · San Diego, CA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Take away</span><span class="l">the receptor</span><span class="l">that <em>spreads it.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Armida Labs is developing Targefrin-dimer, an agent that mimics the natural ephrins to target and degrade EphA2, the receptor that drives the aggressive spread of pancreatic cancer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How Targefrin works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
   '<p class="hero-cap lab" aria-hidden="true">EphA2 ligand-binding domain with an agonist peptide from the Armida founders’ lab · PDB 6B9L</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">EphA2 helps cancer cells leave the primary tumour, enter the circulation and take hold in other tissues, and pancreatic cancer patients with high EphA2 levels tend to have a poor prognosis. Armida is building a medicine that <em>removes it.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.25M</span><span class="k">National Cancer Institute SBIR Phase II award, 2025, for the studies needed to file an IND</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><span class="k">Solid tumour types in which EphA2 is frequently overexpressed: pancreatic, prostate, lung, breast, ovarian and colorectal</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2021</span><span class="k">Founded as a University of California, Riverside spinout, around a Targefrin patent held by UCR</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How Targefrin works</span><h2 class="d3">Mimic the ligand, <em>remove the receptor.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Target</span><span>Bridge</span><span>Remove</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>EphA2, overexpressed.</h2><p>Metastatic pancreatic cancer cells carry EphA2 in abundance. With too little ephrin to bind it, the receptor turns pro-oncogenic and drives cell migration and invasion.</p></article>'+
     '<article class="step"><h2>Targefrin bridges two receptors.</h2><p>Targefrin-dimer imitates the ephrins, EphA2’s natural partners. Each half binds a receptor, and the dimer draws EphA2 together into pairs.</p></article>'+
     '<article class="step"><h2>The receptor is taken away.</h2><p>Dimerised EphA2 is removed from the cell surface and degraded. In Phase I studies this suppressed pancreatic cancer cell migration.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">An agonist built <em>to degrade.</em></h2></div><p data-r>Several years of work by the founders on agents that suppress cell migration, invasion and metastasis through EphA2 led to Targefrin-dimer, the most effective agonistic agent of the receptor reported to date.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From the bench <em>toward an IND.</em></h2></div><p data-r>The NCI SBIR Phase II award funds manufacturing and the IND-enabling toxicology studies that must precede trials in patients. Pancreatic cancer comes first.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The chemists who <em>found it.</em></h2></div><p data-r>Armida Labs was founded by the scientists behind Targefrin, who now lead it from discovery toward the clinic.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Origin</span><p data-r>Discovered at the UC Riverside School of Medicine; the first UCR faculty biopharmaceutical company, incubated at UCR’s EPIC Life Sciences Incubator.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NCI SBIR Phase I (2023) and Phase II (2025) awards, with continued fundraising to reach clinical testing.</p></div>'+
    '<div><span class="lab kick" data-r>Intellectual property</span><p data-r>Targefrin is patented by the University of California, Riverside.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards and <em>publications.</em></h2></div><p data-r>The latest on Armida Labs and Targefrin.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors and partners</span>'+
   '<h2 class="big split">Talk to <em>Armida.</em></h2>'+
   '<p class="sub" data-r>Armida Labs is raising to complement its NCI funding and take Targefrin-dimer into clinical testing, and would be glad to hear from investors and partners.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Armida Labs '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Armida Labs, Inc.<br>San Diego, CA</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Founded at</span><p data-r>University of California, Riverside</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>San Diego, CA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead programme</span>Targefrin-dimer · EphA2<br>Metastatic pancreatic cancer</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Spectral\',Georgia,serif;font-weight:400;font-size:60px;letter-spacing:-.02em">Armida Labs</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Armida Labs, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"platform",story:"story",platform:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Armida Labs — Targefrin, an EphA2-degrading agent against pancreatic cancer metastases, San Diego, CA",x:"Home"};
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
