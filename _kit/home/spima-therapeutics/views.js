/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+esc(c[6])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function newsUnused_(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Stapled peptides","Short chains of amino acids locked into their bioactive &#945;-helical conformation by a site-specific chemical brace, which gives them drug-like properties: enhanced membrane permeability and stability.",'<path d="M8 40c4-10 8-10 12 0s8 10 12 0 8-10 12 0"/><path d="M8 40c4 10 8 10 12 0" opacity=".35"/><path class="a" d="M20 30C22 14 34 14 36 30"/><circle class="f" cx="20" cy="30" r="2.4"/><circle class="f" cx="36" cy="30" r="2.4"/>'],
  ["Peptide PROTACs","A novel modality: a peptide warhead that binds the protein of interest, joined by a linker to an E3-recruiting element, so that the target is tagged for degradation.",'<rect x="6" y="20" width="16" height="16"/><path class="a" d="M22 28h12"/><circle cx="42" cy="28" r="8"/><circle class="f" cx="28" cy="28" r="2.2"/>'],
  ["Protein&#8211;protein interactions","Both modalities are built on foundational research into complex protein&#8211;protein interactions: intracellular contacts that small molecules struggle to block specifically and large biologics struggle to reach.",'<path d="M6 44C6 26 14 14 26 14c4 0 6 6 6 14S28 44 6 44z"/><path d="M50 12C50 30 42 42 30 42c-4 0-6-6-6-14s4-16 26-16z"/><path class="a" d="M24 22l8 12"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function eco(){return '<div class="bk"><span class="lab kick" data-r>Ecosystem</span><p class="cr" data-r><span>IRMB</span><i>·</i><span>IBMM</span><i>·</i><span>Universit&#233; de Montpellier</span><i>·</i><span>SATT AxLR</span><i>·</i><span>IHU Immun4Cure</span><i>·</i><span>Landmark BioVentures</span></p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Stapled-peptide immunotherapies<span class="nomob"> · Montpellier, France</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Unlocking undruggable</span><span class="l">targets with</span><span class="l"><em>smart peptides.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>SPIMA Therapeutics develops peptide-based immunotherapies against targets that are out of reach today, for patients with aggressive inflammatory and neoplastic disorders and few treatment options.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The problem</span>'+
   '<h2 class="txt" id="mani">Most disease targets are still considered undruggable. <em>SPIMA is advancing stapled peptides as first-in-class therapeutics to reach them.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">80&#8211;85%</span><p class="k">Of targets estimated to remain undruggable with current approaches (adapted from Neklesa et al., 2017)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&#8364;1M</span><p class="k">Nearly &#8364;1 million invested in the project by SATT AxLR before its worldwide exclusive licence to SPIMA</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">i-Lab</span><p class="k">National winner of the 2025 i-Lab innovation competition, part of France 2030</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">A helix, <em>held in shape.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Blocked</span><span>Unfolded</span><span>Stapled</span><span>Engaged</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Out of reach.</h2><p>Many disease drivers act through protein&#8211;protein interactions inside the cell. The membrane keeps large biologics out, and small molecules lack the specificity to block such broad contacts.</p></article>'+
     '<article class="step"><h2>A helix, unfolded.</h2><p>These contacts are often made by an &#945;-helix. Cut out as a short peptide, the same chain of amino acids loses the folded shape it needs to bind.</p></article>'+
     '<article class="step"><h2>Locked by a staple.</h2><p>A site-specific chemical brace locks the peptide into its bioactive &#945;-helical conformation, giving it drug-like properties: membrane permeability and stability.</p></article>'+
     '<article class="step"><h2>Onto the target.</h2><p>The stapled peptide crosses into the cell and engages the interaction itself. SPM001 is designed to inhibit the assembly of the myddosome, the MyD88 signalling complex.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Smart peptides for <em>undruggable targets.</em></h2></div><p data-r>Peptides blend the best qualities of small and large molecules. SPIMA&#8217;s platform of rationally designed peptides targets protein&#8211;protein interactions, drawing on decades of peptide chemistry at IBMM and immunology at IRMB.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Two programmes, <em>two modalities.</em></h2></div><p data-r>A preclinical-stage pipeline built on complex protein&#8211;protein interactions research. The lead, SPM001, targets a key untapped actor in the dysregulated innate inflammatory process.</p></div>'+
   pipeRows(PIPE)+
   eco()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Peptide chemists and <em>immunologists.</em></h2></div><p data-r>Founded in April 2024 by leading researchers from IRMB and IBMM at the Universit&#233; de Montpellier, together with Landmark BioVentures, whose drug development engine supports SPIMA as part of the LBV Nexus.</p></div>'+
   team()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and researchers</span>'+
   '<h2 class="big split">Talk to <em>SPIMA.</em></h2>'+
   '<p class="sub" data-r>SPIMA is based at the IHU Immun4Cure, Montpellier University Hospital&#8217;s centre of excellence for systemic autoimmune diseases. We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/technology">Our technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>80, avenue Augustin Fliche<br>34295 Montpellier, France</p></div>'+
    '<div><span class="lab" data-r>Corporate contact</span><p data-r><a class="ul" href="'+MAIL+'">'+MAILA.replace("@","@<wbr>")+'</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>80, avenue Augustin Fliche<br>34295 Montpellier, France</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">Write to us</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Part of</span>The Landmark BioVentures Nexus</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Public Sans\',sans-serif;font-weight:600;font-size:64px">SPIMA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 SPIMA Therapeutics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",story:"story",pipeline:"pipeline",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"SPIMA Therapeutics — stapled peptides for undruggable targets",x:"Home"};
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
