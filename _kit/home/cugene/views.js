/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(C){
  return '<div class="caps'+(C.length===4?' c4':'')+'">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
var AREAS=[
  ["Innovation","A broad technology platform, built on our expertise in biology and precision protein engineering.",'<circle cx="28" cy="28" r="18"/><circle class="f" cx="28" cy="28" r="4"/><path class="a" d="M28 4v8M28 44v8M4 28h8M44 28h8"/>'],
  ["Immunology","Biologics for autoimmune diseases that target regulatory T cells and eliminate effector cells.",'<circle cx="22" cy="30" r="14"/><path class="a" d="M36 30h8M44 30l5-5M44 30l5 5"/><circle class="f" cx="22" cy="30" r="3.4"/>'],
  ["Oncology","Biologics for cancer that target T cells, antigen-presenting cells and macrophages.",'<path d="M10 44c4-16 12-30 18-30s14 14 18 30"/><path class="a" d="M28 14V4"/><circle class="f" cx="28" cy="26" r="3.4"/>']];
var PILL=[
  '<path d="M8 44h40"/><path d="M14 44V22M28 44V12M42 44V28"/><circle class="f" cx="28" cy="12" r="3"/>',
  '<path d="M16 10v36M40 10v36"/><path class="a" d="M16 18h24M16 28h24M16 38h24"/>',
  '<circle cx="28" cy="28" r="16"/><path class="a" d="M28 12v32M12 28h32"/><circle class="f" cx="28" cy="28" r="3.4"/>',
  '<circle cx="18" cy="20" r="6"/><circle cx="38" cy="20" r="6"/><path d="M8 44c2-8 6-12 10-12s8 4 10 12M28 44c2-8 6-12 10-12s8 4 10 12"/>'];
function onc(){var O=[
  ["Dual or tri-mechanism","Cytokine immunotherapy, immune checkpoint inhibition and pro-drug conditional activation, in one molecule."],
  ["Precision immuno-engineering","Tuned cytokine receptor selectivity, longer half-life, less target sink and longer tumor residence."],
  ["Complete tumor regressions","Observed in multiple cold and hot mouse models, with efficacy superior to checkpoint inhibitors."],
  ["First-line monotherapy","The aim for solid tumors."]];
  return '<div class="plat light-plat c4">'+O.map(function(o){return '<div><span class="lab kick" data-r>'+o[0]+'</span><p data-r>'+o[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From cugene.com, the AbbVie and Cugene release (PR Newswire, 16 May 2022) and ClinicalTrials.gov NCT07946302. Pipeline stages from Cugene’s 2026 pipeline chart.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage biotechnology<span class="nomob"> · Waltham, Massachusetts</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Harnessing the</span><span class="l">human <em>immune</em></span><span class="l"><em>system.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Cugene engineers precision cytokine immunotherapies: to restore immune homeostasis in autoimmune disease, and to reinvigorate the immune system against cancer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How CUG252 works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">To restore immune homeostasis or reinvigorate the immune system, <em>delivering transformative treatments for grievous diseases.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">8</span><p class="k">Programmes in our pipeline, across autoimmune disease and solid tumors</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Engineered IL-2 molecules in clinical studies: CUG252 and CUG279</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$48.5M</span><p class="k">Upfront from AbbVie for an exclusive worldwide license option to CUG252 (2022)</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How CUG252 works</span><h2 class="d3">Restore the Treg, <em>restore tolerance.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Imbalance</span><span>Select</span><span>Restore</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Tolerance breaks down.</h2><p>When regulatory T cells (Tregs) are deficient or impaired, autoreactive effector T cells and B cell autoantibodies overpopulate, and self-tolerance is lost.</p></article>'+
     '<article class="step"><h2>CUG252 finds the Treg.</h2><p>IL-2 is a critical survival factor for Tregs. CUG252 is a precision-engineered, long-acting IL-2 that abolishes binding to effector cells and keeps full agonist activity on IL-2Rα.</p></article>'+
     '<article class="step"><h2>Balance returns.</h2><p>CUG252 restores full Treg function and suppresses autoantibody production, restoring immune homeostasis across autoimmune and inflammatory diseases.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">Engineered cytokines, <em>precisely tuned.</em></h2></div><p data-r>Cugene develops biologics in two areas, autoimmunity and oncology. In cancer, our TIL-targeting bispecifics TILKine™ and VitoKine™ engage tumor-reactive lymphocytes in the tumor, blocking a checkpoint and activating effector T cells at once.</p></div>'+
   caps(AREAS)+
   onc()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Eight programmes, <em>two in the clinic.</em></h2></div><p data-r>An armamentarium of precision immunotherapies with compelling target biology, for unmet medical needs in autoimmune disease and oncology.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Platform</span><h2 class="d2 split">The Cugene <em>pillars.</em></h2></div><p data-r>We believe science-driven drug discovery forms the foundation for successful therapeutics, ultimately benefitting patients.</p></div>'+
   caps(PILLARS.map(function(p,i){return [p[0],p[1],PILL[i]]}))+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Cugene.</em></h2></div><p data-r>Clinical milestones, partnerships and scientific presentations.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">One passion, <em>many cures.</em></h2>'+
   '<p class="sub" data-r>For partnering, investor relations or general enquiries, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Cugene '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>130 Turner Street, Suite 702<br>Waltham, MA 02453</p></div>'+
    '<div><span class="lab" data-r>General enquiries</span><p data-r><a class="ul" href="'+MAIL+'">info@cugene.com</a></p></div>'+
    '<div><span class="lab" data-r>Investors</span><p data-r><a class="ul" href="mailto:ir@cugene.com">ir@cugene.com</a><br><a class="ul" href="tel:+17818935800">(781) 893-5800</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>130 Turner Street, Suite 702<br>Waltham, MA 02453</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@cugene.com</a><br><a class="ul" href="mailto:ir@cugene.com">ir@cugene.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/platform">Platform</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead programme</span>CUG252 · Treg-selective long-acting IL-2</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 120" aria-hidden="true"><text x="380" y="104" text-anchor="middle" style="font-family:\'Prata\',serif;font-weight:400;font-size:124px">CUGENE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Cugene, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",science:"science",pipeline:"pipeline",platform:"platform",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Cugene — precision immunotherapies that restore immune balance",x:"Home"};
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
