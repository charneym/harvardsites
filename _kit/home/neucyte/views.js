/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function prodRows(){return '<ul class="pfr path">'+PRODUCTS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' on neucyte.com">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Translatable neuroscience<span class="nomob"> · Mountain View, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Human neurons,</span><span class="l">built for</span><span class="l"><em>CNS drug discovery.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>NeuCyte turns induced pluripotent stem cells into SynFire® human neurons, astrocytes and microglia, so treatments for epilepsy, ALS/FTD, Alzheimer’s disease, autism and rare disorders can be found in human neural biology.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/services">Our services '+ARR+'</a><a class="btn" href="#/technology">How SynFire works</a></div></div>'+
   '<span class="lab cap">SynFire neurons and astrocytes in a 3D brain assembloid · NeuCyte</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About NeuCyte</span>'+
   '<h2 class="txt" id="mani">Many neural phenotypes are specific to humans and cannot be seen in traditional models. <b class="w0">NeuCyte builds human neural systems from iPS cells of any background, and measures them.</b> <em>Improving lives by optimizing CNS drug discovery.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">100%</span><span class="k">Success rate in custom iPSC-derived cell production, across all cell types</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><span class="k">Neural cell types from one platform: neurons, astrocytes and microglia</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.5M</span><span class="k">NIH funding in 2023–24 for NeuCyte’s Alzheimer’s microphysiological screening platforms</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">From one patient to a <em>human screen.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Patient</span><span>iPSC</span><span>Neurons</span><span>Screen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The patient.</h2><p>It starts with a sample: a patient’s fibroblasts or blood cells (PBMCs), carrying the genetics of the disease.</p></article>'+
     '<article class="step"><h2>The stem cells.</h2><p>The cells are reprogrammed into induced pluripotent stem cells, which can become any cell type, from any background.</p></article>'+
     '<article class="step"><h2>The neurons.</h2><p>NeuCyte’s proprietary SynFire® methods differentiate them into pure populations of human neurons, co-cultured with astrocytes.</p></article>'+
     '<article class="step"><h2>The screen.</h2><p>On microelectrode arrays and high-content imaging the network’s activity is read out, for phenotypic screening and neural safety.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split">Custom human cells, <em>and the assays to match.</em></h2></div><p data-r>Custom iPSC-derived cell production is the heart of NeuCyte’s work, with a patient-to-screening pipeline of services around it.</p></div>'+
   prodRows()+
   '<p class="ack" data-r>SynFire® iNs are suited to a variety of functional assays: neuronal survival, axonal outgrowth and dendritic arborization, and, with glia, synapse formation, transcriptional programs and electrophysiology.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Scientists who study <em>human disease phenotypes.</em></h2></div><p data-r>A world-class team dedicated to understanding human disease phenotypes for target identification, with a Scientific Advisory Board from leading universities.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Partners in <em>rare disease.</em></h2></div><p data-r>The latest from NeuCyte: partnerships, grants and advisors.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, researchers and drug developers</span>'+
   '<h2 class="big split">Test it in <em>human neurons first.</em></h2>'+
   '<p class="sub" data-r>For SynFire® cells, custom production, assay development or a partnership, write to the NeuCyte team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Mountain View, California</span><p data-r><span class="bl">319 N. Bernardo Avenue</span><span class="bl">Mountain View, CA 94043</span></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+16502748199">650-274-8199</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p><p data-r><a class="ul" href="mailto:careers@neucyte.com">careers@neucyte.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Mountain View</span>319 N. Bernardo Avenue<br>Mountain View, CA 94043</div>'+
   '<div class="c"><span class="lab">Telephone</span><a class="ul" href="tel:+16502748199">650-274-8199</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Roboto\',system-ui,sans-serif;font-weight:400;font-size:62px;letter-spacing:.02em">NeuCyte</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 NeuCyte, Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",services:"services",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"NeuCyte — human iPSC-derived neural cells for CNS drug discovery",x:"Home"};
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
