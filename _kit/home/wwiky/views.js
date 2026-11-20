/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[3])+'</b><i>'+esc(c[0])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Image","A hypoxia-sensitive radiopharmaceutical shows where a tumour is starved of oxygen, by planar, SPECT or PET imaging, and so selects the patients whose tumours will respond.",'<circle cx="28" cy="28" r="18"/><circle class="a" cx="34" cy="24" r="6"/><path d="M6 28h6M44 28h6M28 6v6M28 44v6"/>'],
  ["Treat","Therapeutic doses of the same radiopharmaceutical then go to the same hypoxic cells: one drug for diagnosis and therapy, with matched pharmacokinetics and hypoxia-targeting precision.",'<path d="M28 8l16 9v18l-16 9-16-9V17z"/><circle class="f" cx="28" cy="26" r="4"/><path class="a" d="M28 30v14M20 34l8-4 8 4"/>'],
  ["Personalise","Each patient’s dose is set from their own image-based pharmacokinetic and radiation dosimetry profile, to cut treatment failure and minimise toxicity.",'<path d="M8 46V10M8 46h40"/><path class="a" d="M10 40c6-22 10-26 14-26s8 6 22 8"/><path d="M12 42c4-10 8-14 12-14s10 8 22 12"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function beyond(){var B=[["Cancer","Stage II/III lung, head and neck and cervical cancers, and glioblastomas, where focal hypoxia imaging and hypoxia-targeted radiotherapy matter most"],["Beyond cancer","Other diseases with a hypoxic microenvironment, among them stroke, myocardial disease, diabetes, arthritis and organ rejection"]];
  return '<div class="ev"><span class="lab kick" data-r>Where hypoxia matters</span><div><dl>'+B.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Unlike [18F]FDG, the ‘gold standard’ for detecting tumours by PET, Hypoxycin pharmaceuticals are designed to detect the hypoxic regions inside tumours, which FDG scans do not.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Hypoxia theranostics<span class="nomob"> · Solid tumours</span> · Edmonton, AB</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Find the hypoxia.</span><span class="l">Treat it with</span><span class="l"><em>the same drug.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>WWiKY BioSciences develops theranostics for the oxygen-starved, therapy-resistant cells found in solid tumours: radiopharmaceuticals that image hypoxia by PET or SPECT, then treat it, for a personalised approach to cancer care.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why hypoxia</span>'+
   '<h2 class="txt" id="mani">Solid hypoxic tumours resist radiation and chemotherapy, spread, and still have no effective treatment. WWiKY turns that weakness into a target: <em>image it, then treat it.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">40%</span><span class="k">Of solid tumours are thought to harbour hypoxic, oxygen-deprived regions or cells</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20M</span><span class="k">New cancer cases reported worldwide in 2023 alone; hypoxia is a hallmark of every type of solid cancer</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><span class="k">Hypoxia imaging agents developed by WWiKY members and validated in clinical trials: Hypoxycin-1 and FAZA</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">One drug to see it, <em>one drug to treat it.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Hypoxia</span><span>Image</span><span>Dose</span><span>Treat</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Oxygen runs out inside the tumour.</h2><p>Far from their blood supply, tumour cells go short of oxygen. These hypoxic cells are the ones that resist radiation, chemotherapy and immunotherapy, and drive metastasis.</p></article>'+
     '<article class="step"><h2>Light up the hypoxic cells.</h2><p>Compounds such as nitroimidazoles are selectively activated in hypoxic cells and bind there. Radiolabelled Hypoxycin-1 localises in hypoxic tumours and clears quickly from healthy tissue, so a PET or SPECT scan shows the hypoxia.</p></article>'+
     '<article class="step"><h2>Set a dose for one patient.</h2><p>The scan selects the patients who will respond. Their own image-based pharmacokinetic and radiation dosimetry profile then sets a precise, individual therapeutic dose.</p></article>'+
     '<article class="step"><h2>Treat with the same drug.</h2><p>Therapeutic doses of the same radiopharmaceutical go to the same hypoxic cells. Only responsive patients are treated, reducing the risk of treatment failure and minimising toxicity.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">A true theranostic, <em>one molecule.</em></h2></div><p data-r>WWiKY’s work rests on radiopharmaceuticals, pharmacokinetics, radiation dosimetry and nuclear medicine, with cancer therapies built on cellular and molecular biology and health care economics.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From the clinic <em>to the lab bench.</em></h2></div><p data-r>A clinical theranostic, a research reagent, a radiolabeling platform and a next generation of ligand-based and nano-theranostics, backed by national and international patents.</p></div>'+
   pipeRows(PIPE)+
   beyond()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">From the bench <em>to the bedside.</em></h2></div><p data-r>WWiKY grew out of an academic setting closely tied to active cancer care, where oncologists and discovery scientists work side by side, with experience in clinical trials, regulatory affairs and drug manufacturing.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Clinical</span><p data-r>A Phase I/II theranostic trial with Health Canada’s ‘no objection’, led at the Cross Cancer Institute, Edmonton.</p></div>'+
    '<div><span class="lab kick" data-r>Collaborators</span><p data-r>Prof. Ravin Narain, University of Alberta; Prof. Yvonne Mowery, University of Pittsburgh; Prof. Tim Smith, Bangor University; Proholistic Discovery.</p></div>'+
    '<div><span class="lab kick" data-r>Support</span><p data-r>NRC IRAP, an Alberta Innovates AICE Validate award and Edmonton Unlimited; one of Scale U Canada’s 50 most scalable companies in Edmonton.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants and <em>publications.</em></h2></div><p data-r>The latest support for WWiKY’s work, and recent papers behind its technologies.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Business inquiries</span>'+
   '<h2 class="big split">Talk to <em>WWiKY.</em></h2>'+
   '<p class="sub" data-r>Clinicians, researchers, partners and investors: WWiKY would be glad to hear from you about its hypoxia theranostics and imaging reagents.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email WWiKY '+ARR+'</a><a class="btn" href="#/pipeline">See the products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>#103, 6030 – 88th Street<br>Edmonton, Alberta T6E 6G4</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>WWiKY BioSciences Inc.<br>Edmonton, Canada</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Edmonton, Alberta</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>Hypoxycin-1™ · Hypoxycin-M™<br>Hypoxycin-P™</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:700;font-size:62px;letter-spacing:.01em">WWiKY</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 WWiKY BioSciences Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",platform:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"WWiKY BioSciences — Hypoxia theranostics for solid tumours, Edmonton, AB",x:"Home"};
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
