/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+esc(c[6])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function newsUnused(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["01","In-license","AdAlta in-licenses clinic-ready T cell therapies from Asian originators, many with clinical data already in hand, chosen for clear differentiation in solid cancers.",'<circle cx="16" cy="28" r="9"/><path class="a" d="M27 28h18M39 22l6 6-6 6"/>'],
  ["02","Manufacture and trial in Australia","It establishes a manufacturing base acceptable to the US FDA and runs the first clinical studies under an FDA IND, largely in Australia.",'<path d="M10 46V18l12 8V18l12 8V18l12 8v20z"/><path class="a" d="M16 38h6M28 38h6"/>'],
  ["03","On-license","Each de-risked product can then be on-licensed to larger biopharmaceutical companies for potentially registrational studies and commercialisation.",'<path class="a" d="M11 28h18M23 22l6 6-6 6"/><circle cx="40" cy="28" r="9"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+c[0]+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>EW-001 in advanced mesothelioma</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+e[0]+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Investigator-initiated trials in China, as reported in AdAlta&#8217;s ASX announcements of 1 April and 5 August 2026. These trials involve small numbers of patients and are not a substitute for controlled clinical studies.</p></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+NR+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">Release (PDF) '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage biotechnology<span class="nomob"> · ASX: 1AD</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Cell therapies</span><span class="l">for <em>solid cancers.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>AdAlta connects Asia&#8217;s innovation in T cell therapy with Western regulated markets and patients, through Australia&#8217;s clinical and manufacturing ecosystem.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/strategy">East to West '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Next-generation cell and protein therapeutics</span>'+
   '<h2 class="txt" id="mani">Solid tumours account for 90% of cancers, yet current cellular immunotherapies barely reach them. <em>AdAlta is building the pathway from Eastern innovation to Western patients.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">20%</span><p class="k">Complete tumour clearance in the ten mesothelioma patients treated at higher EW-001 doses</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2 yrs</span><p class="k">The first complete responder, free of cancer recurrence after a single infusion</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">61%</span><p class="k">Share of cellular immunotherapy clinical trials led in Asia, AdAlta&#8217;s innovation pool</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How CAR-T works</span><h2 class="d3">A living drug, <em>made from the patient.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Collect</span><span>Engineer</span><span>Expand</span><span>Engage</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>T cells, collected.</h2><p>T cells are the immune cells that defend the body against disease, but cancer cells can evade and suppress them. CAR-T therapy starts with a patient&#8217;s own T cells.</p></article>'+
     '<article class="step"><h2>A receptor, added.</h2><p>In the laboratory the T cells are engineered to carry a chimeric antigen receptor. EW-001&#8217;s receptor binds mesothelin, a protein common on mesothelioma and other aggressive cancers.</p></article>'+
     '<article class="step"><h2>Expanded, reinfused.</h2><p>The engineered cells are expanded and infused back into the patient. EW-001&#8217;s second-generation process takes less than two days.</p></article>'+
     '<article class="step"><h2>Cancer, found and cleared.</h2><p>When the receptor engages mesothelin on a cancer cell, it switches on the T cell&#8217;s killing machinery. A single dose has the potential for a durable effect.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="strategy" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Strategy</span><h2 class="d2 split">East to West, <em>in three steps.</em></h2></div><p data-r>A rich Eastern pipeline of cellular immunotherapies is not reaching Western markets. AdAlta selects the best of it, takes each product through US FDA-regulated manufacturing and first clinical studies, and creates value for patients, partners and shareholders.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">CAR-T for solid tumours, <em>and a fibrosis asset.</em></h2></div><p data-r>The lead CAR-T therapy, EW-001, is moving to Australian manufacturing and US FDA engagement. AD-214, built on AdAlta&#8217;s own i-body platform, is available for partnering.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built to partner <em>across Asia and the West.</em></h2></div><p data-r>A management team and board with experience in cell therapy, clinical development, regulatory affairs and international licensing, based in Melbourne with a representative office in Shanghai.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>AdAlta.</em></h2></div><p data-r>Recent ASX announcements. Reports, presentations and the full archive are on the investor centre.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and patients</span>'+
   '<h2 class="big split">Talk to <em>AdAlta.</em></h2>'+
   '<p class="sub" data-r>AdAlta is based in Melbourne, with a representative office in Shanghai. We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Registered office</span><p data-r>Suite 1.01, 117 Camberwell Road<br>Hawthorn East VIC 3123, Australia</p></div>'+
    '<div><span class="lab" data-r>China representative office</span><p data-r>Raffles City Changning, Tower 3<br>Changning District, Shanghai</p></div>'+
    '<div><span class="lab" data-r>Enquiries</span><p data-r><a class="ul" href="'+MAIL+'">enquiries@adalta.com.au</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Melbourne</span>Suite 1.01, 117 Camberwell Road<br>Hawthorn East VIC 3123</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">enquiries@adalta.com.au</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/strategy">Strategy</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Listed</span>ASX: 1AD<br>ABN 92 120 332 925</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Jost\',sans-serif;font-weight:500;font-size:64px">ADALTA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 AdAlta Limited</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",strategy:"strategy",story:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"AdAlta — cell therapies for solid cancers",x:"Home"};
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
