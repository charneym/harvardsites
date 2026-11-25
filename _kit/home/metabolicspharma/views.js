/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Weight loss that lasts","In obese mice, the weight loss and the lower glucose and insulin seen with ENT-03 were sustained for two more months after treatment stopped. With semaglutide they were not.",'<path d="M8 14C16 14 18 34 28 38H48"/><path class="a" d="M28 38H48"/><circle class="f" cx="28" cy="38" r="3.2"/><path d="M8 46h40"/>'],
  ["Lean mass preserved","ENT-03 showed substantially greater preservation of lean mass than the other treatments in the same study, which could suit older adults with sarcopenia.",'<circle cx="28" cy="28" r="19"/><circle cx="28" cy="28" r="10"/><circle class="f" cx="28" cy="28" r="3.4"/><path class="a" d="M28 9v6M28 41v6M9 28h6M41 28h6"/>'],
  ["Alone or with a GLP-1","ENT-03 works as a monotherapy, and added to semaglutide it gave additive weight loss and insulin normalisation in animal models. It needs no gradual dose escalation.",'<circle cx="21" cy="28" r="13"/><circle cx="35" cy="28" r="13"/><path class="a" d="M28 17.5v21"/><circle class="f" cx="28" cy="28" r="3"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Phase 1a · June 2025</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>ENT-03 was given subcutaneously at six doses. Secondary endpoints included fasting glucose, fasting insulin, lipids and change in body weight at seven days. Release of 25 June 2025; details on clinicaltrials.gov.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Obesity and type 2 diabetes<span class="nomob"> · Clinical stage</span> · Doylestown, Pa.</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Restoring the</span><span class="l">body’s response</span><span class="l"><em>to insulin.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Metabolics Pharma develops ENT-03, a centrally acting aminosterol that inhibits PTP1B, an established target in obesity and type 2 diabetes. It acts on the brain circuits that regulate energy and metabolism, and was safe and well tolerated in a Phase 1a trial.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How ENT-03 works '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">GLP-1 drugs have changed the treatment of obesity and diabetes, but no approved therapy directly improves insulin sensitivity. Metabolics Pharma is developing one that does, <em>by acting at the level of the brain.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">36M+</span><p class="k">Americans now live with diabetes, and the numbers continue to increase</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~50%</span><p class="k">Of people with diabetes do not reach their target goals, despite new, highly efficacious drugs</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">7</span><p class="k">Dose cohorts in the Phase 1a trial of ENT-03, safe and well tolerated at every dose</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How ENT-03 works</span><h2 class="d3">Release the brake <em>on insulin.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Signal</span><span>Brake</span><span>ENT-03</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Insulin speaks to the brain.</h2><p>In the hypothalamus, the brain’s energy centre, insulin binds its receptor on nerve cells. The receptor switches on and passes the signal inward, helping regulate appetite, body weight and glucose.</p></article>'+
     '<article class="step"><h2>PTP1B applies the brake.</h2><p>The enzyme PTP1B switches the insulin receptor back off. When it is overactive, the signal fades even though insulin is there: the central insulin resistance found in obesity and type 2 diabetes.</p></article>'+
     '<article class="step"><h2>ENT-03 releases it.</h2><p>ENT-03, a centrally acting aminosterol, inhibits PTP1B in the hypothalamic nuclei. The receptor stays on, insulin is heard again, and the body’s energy balance and glucose control can recover.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">A new mechanism, <em>beyond GLP-1.</em></h2></div><p data-r>ENT-03 is an endogenous spermine-bile acid that regulates whole-body responsiveness to insulin, energy homeostasis and body weight. It is given as a weekly subcutaneous injection and rapidly induces weight loss.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Three programmes, <em>one target.</em></h2></div><p data-r>Every Metabolics Pharma candidate inhibits PTP1B: an injectable and an oral therapy for obesity and type 2 diabetes, and a programme in Alzheimer’s disease.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Clinicians and investors, <em>focused on ENT-03.</em></h2></div><p data-r>A board led by a physician-scientist whose centre runs 60 to 250 clinical trials a year, advised by a former Novo Nordisk CMO and a former FDA medical officer.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Origins</span><p data-r>Metabolics Pharma spun off from its parent company, Enterin, in late 2024 to focus on its lead asset, ENT-03, for obesity and certain comorbidities.</p></div>'+
    '<div><span class="lab kick" data-r>Lineage</span><p data-r>ENT-03 is the predicted mammalian ortholog of trodusquemine (MSI-1436), an aminosterol from the dogfish shark. Its asymmetric synthesis was published in 2024.</p></div>'+
    '<div><span class="lab kick" data-r>Beyond weight</span><p data-r>ENT-03 and ENT-21 have reversed MASH, fatty liver disease, in preclinical studies, and ENT-AD takes PTP1B inhibition into Alzheimer’s disease.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the lab <em>to the clinic.</em></h2></div><p data-r>The latest releases from Metabolics Pharma and, before the 2024 spin-off, its parent company Enterin.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering, investors and enquiries</span>'+
   '<h2 class="big split">Talk to <em>Metabolics.</em></h2>'+
   '<p class="sub" data-r>For partnering and collaboration, investment, or general information about ENT-03 and the pipeline, the team would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Metabolics Pharma '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Metabolics Pharma, Inc.<br>Doylestown, Pennsylvania</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Lead candidate</span><p data-r>ENT-03 · PTP1B<br>Phase 1b starting 2026</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Metabolics Pharma, Inc.<br>Doylestown, Pennsylvania</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead candidate</span>ENT-03<br>PTP1B inhibitor</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="48" text-anchor="middle" style="font-family:\'Saira\',Arial,sans-serif;font-weight:500;font-size:54px;letter-spacing:.06em">METABOLICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Metabolics Pharma, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",approach:"story",science:"science",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Metabolics Pharma — ENT-03, a PTP1B inhibitor for obesity and type 2 diabetes, Doylestown, Pennsylvania",x:"Home"};
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
