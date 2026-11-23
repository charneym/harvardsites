/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["A target on tumour cells","CD71, the transferrin receptor, regulates cellular activation and proliferation. Tumour cells, with high proliferative capacity, strongly express it, so an antibody against CD71 preferentially targets cancer cells.",'<circle cx="28" cy="30" r="15"/><path d="M28 15V8M28 45v6M13 30H6M43 30h7M17.4 19.4l-5-5M38.6 19.4l5-5"/><circle class="f" cx="28" cy="6" r="2.6"/><circle class="f" cx="50" cy="30" r="2.6"/><circle class="f" cx="6" cy="30" r="2.6"/>'],
  ["A humanised IgG4 antibody","INA03 is built on INA01, a humanised IgG4 (kappa) antibody against CD71 (TfR1), produced from the founders&#8217; academic research at INSERM and the Imagine Institute.",'<path d="M18 8l10 14 10-14"/><path d="M28 22v26"/><path class="a" d="M14 12l4-4M42 12l-4-4"/>'],
  ["A payload delivered inside","MMAE, an agent that disrupts the microtubules, is attached to the antibody through the SDV1 linker to form the antibody-drug conjugate INA03, carrying the cytotoxic drug to the cancer cell.",'<circle cx="28" cy="28" r="18"/><path d="M14 22c8 4 20 4 28 0M14 34c8-4 20-4 28 0"/><circle class="f" cx="28" cy="28" r="4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From inatherys.com, ClinicalTrials.gov (NCT03957915), the ANSM compassionate-access documents and the Paris-Saclay Cancer Cluster.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Anti-CD71 antibody-drug conjugate<span class="nomob"> · INA03</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">New treatments</span><span class="l">for advanced <em>cancers.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Inatherys develops monoclonal antibodies for patients in advanced stages of their disease, when traditional treatments are no longer effective. Our lead, INA03, targets the transferrin receptor CD71, strongly expressed by tumour cells.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">Cancers and severe inflammatory diseases are a public health issue. <em>We design and develop innovative molecules for patients without a therapeutic alternative.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">12M</span><p class="k">People affected by cancers in the world every year</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">33</span><p class="k">Patients in the first-in-human Phase 1 study of INA03 in relapsed or refractory acute leukaemia</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2009</span><p class="k">Founded as a spin-off from INSERM, by researchers and onco/hematology physicians</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Find the tumour cell, <em>deliver the payload.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Target</span><span>Bind</span><span>Deliver</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Tumour cells carry CD71.</h2><p>CD71, the transferrin receptor, regulates cellular activation and proliferation. Preclinical studies have shown that tumour cells, with high proliferative capacity, strongly express it.</p></article>'+
     '<article class="step"><h2>INA03 binds the receptor.</h2><p>INA03&#8217;s humanised IgG4 antibody recognises CD71, so it preferentially targets cancer cells over healthy tissue.</p></article>'+
     '<article class="step"><h2>The payload is delivered.</h2><p>Each antibody carries MMAE, a microtubule-disrupting agent, attached through the SDV1 linker, delivering the cytotoxic drug directly to the cancer cell.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">An antibody that <em>finds cancer.</em></h2></div><p data-r>INA03 and new generations of antibodies target the transferrin receptor, CD71. Its level correlates with cancer progression and prognosis in many cancer indications, which makes it a direct target for delivering cytotoxic drugs to cancer cells.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From leukaemia to <em>solid tumours.</em></h2></div><p data-r>INA03 has completed a first-in-human Phase 1 study in relapsed or refractory acute leukaemia and is available under compassionate access in France for advanced triple-negative breast cancer. INA02, an anti-CD89 antibody, addresses severe inflammatory diseases.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Researchers, physicians and <em>drug developers.</em></h2></div><p data-r>A highly complementary team of researchers, onco/hematology physicians, entrepreneurs and pharmaceutical development specialists, with more than 20 years of expertise in monoclonal antibodies.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Inatherys.</em></h2></div><p data-r>Clinical, regulatory and partnership milestones for INA03.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Inatherys.</em></h2>'+
   '<p class="sub" data-r>For partnerships, investment or our programmes, write to us at Génopole.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Inatherys '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Pépinière Génopole Entreprises<br>4 rue Pierre Fontaine<br>91058 Evry Cedex, France</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@inatherys.com</a></p></div>'+
    '<div><span class="lab" data-r>Origins</span><p data-r>Spin-off of INSERM U1149 (Bichat hospital) and the Imagine Institute (Necker hospital), Paris.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Pépinière Génopole Entreprises<br>91058 Evry Cedex, France</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@inatherys.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Programmes</span>INA03 · INA02</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Inter Tight\',sans-serif;font-weight:400;font-size:84px">INATHERYS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Inatherys</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Inatherys — smart treatments for complex diseases",x:"Home"};
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
