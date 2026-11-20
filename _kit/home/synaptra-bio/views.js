/* ================= VIEWS (home only: Science / Approach / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function focus(){return '<ul class="pfr">'+FOCUS.map(function(c,i){
  return '<li><span class="lab tg">0'+(i+1)+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function refs(){return '<ul class="nws refs">'+REFS.map(function(r){return '<li><a href="'+r[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(r[0])+'</span><h3>'+esc(r[1])+'</h3><span class="lab src">'+esc(r[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function mh(label,list){return '<div class="mh-group"><p class="mh-label" data-r>'+esc(label)+'</p><ul class="mh-list">'+list.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span><span class="mh-arrow" aria-hidden="true"></span></div></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Small-molecule therapies for dementia<span class="nomob"> · Sydney, Australia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Keep the synapse.</span><span class="l"><em>Keep the memory.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>SynaptraBIO, a spinout of Macquarie University’s Dementia Research Centre, is turning two decades of research into how neurodegeneration starts into first-in-class small-molecule medicines for Alzheimer’s disease and frontotemporal dementia.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>A mouse hippocampal neuron, rendered from its published 3D reconstruction (NeuroMorpho.Org).</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">SynaptraBIO was formed to turn two decades of discovery into patient-centric therapies, and devastating neurodegenerative brain diseases into <em>curable conditions.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.3M</span><span class="k">CUREator+ funding from the Medical Research Future Fund, September 2025</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20 years</span><span class="k">Of focused discovery research into the mechanisms that start and drive neurodegeneration</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><span class="k">Lead indications: Alzheimer’s disease and frontotemporal dementia</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>From the Dementia Research Centre</span><p data-r>Founded by three scientists of Macquarie University’s Dementia Research Centre, in Sydney.</p></div>'+
    '<div><span class="lab kick" data-r>New targets, real data</span><p data-r>Their research identified new targets for disease-modifying treatment, with strong proof-of-concept data.</p></div>'+
    '<div><span class="lab kick" data-r>Patient-friendly</span><p data-r>Small molecules, designed with an AI-powered discovery platform, toward patient-friendly dementia treatments.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The science</span><h2 class="d3">Where tau does <em>its damage.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Mislocated</span><span>Toxic signal</span><span>Inhibit</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Tau moves into the synapse.</h2><p>Tau normally stabilises the microtubules of the axon. In Alzheimer’s disease, a pool of tau reaches the dendrites and their spines, where neurons receive their signals.</p></article>'+
     '<article class="step"><h2>There, it carries the damage.</h2><p>Prof. Ittner and colleagues showed in 2010 that dendritic tau brings the kinase Fyn to the synapse, where it couples amyloid-β to a toxic signal through the NMDA receptor. Without dendritic tau, mice were protected.</p></article>'+
     '<article class="step"><h2>Block the signal, spare the synapse.</h2><p>Two decades of this research have identified new targets for disease-modifying treatment. SynaptraBIO is developing first-in-class small-molecule inhibitors, found with its AI-powered drug discovery platform.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="approach" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Approach</span><h2 class="d2 split">One portfolio, <em>small molecules.</em></h2></div><p data-r>SynaptraBIO will develop a portfolio of first-in-class small-molecule inhibitors for Alzheimer’s disease, frontotemporal dementia and related neurological conditions.</p></div>'+
   focus()+
   '<span class="lab sub-l pr" data-r>The research it builds on</span>'+
   refs()+
   '<div class="bk"><span class="lab kick" data-r>Funded by</span><p class="cr" data-r><span>CUREator+</span><i aria-hidden="true">·</i><span>Medical Research Future Fund</span><i aria-hidden="true">·</i><span>Brandon BioCatalyst</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded in the lab <em>that found it.</em></h2></div><p data-r>Three scientists of the Dementia Research Centre, with a board that brings drug development, finance and investment experience.</p></div>'+
   '<div class="mh">'+mh("Founders",FOUNDERS)+mh("Board of Directors",BOARD)+'</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Backed to take it <em>toward patients.</em></h2></div><p data-r>In September 2025 SynaptraBIO was one of seven Australian startups funded by the CUREator+ Dementia and Cognitive Decline BioMedTech Incubator.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">A world <em>without dementia.</em></h2>'+
   '<p class="sub" data-r>SynaptraBIO works from Macquarie University in Sydney. To talk about the science, a partnership or an investment, write to the team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based at</span><p data-r>Dementia Research Centre<br>Macquarie University<br>Sydney, New South Wales</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>Synaptra Bio Pty Ltd<br>ACN 685 109 684</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based at</span>Macquarie University<br>Sydney, New South Wales</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Small-molecule therapies for<br>Alzheimer’s disease and FTD</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Hanken Grotesk\',system-ui,sans-serif;font-weight:600;font-size:80px;letter-spacing:-.03em"><tspan fill="#d24bc4">Synaptra</tspan><tspan fill="#bababa" font-weight="500">BIO</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Synaptra Bio Pty Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",approach:"approach",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"SynaptraBIO — small-molecule therapies for Alzheimer’s disease and frontotemporal dementia",x:"Home"};
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
