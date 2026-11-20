/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function aimRows(list){return '<ul class="pfr pipe">'+list.map(function(c,i){
  return '<li><span class="lab tg"><b>0'+(i+1)+'</b><i>'+esc(c[0])+'</i></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab lk">Aim*</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Endovascular access","The device follows the endovascular approach already used every day in cardiovascular procedures and in stroke treatment with stents.",'<path d="M8 48c10-2 14-10 16-20s8-18 24-20"/><path class="a" d="M8 48c10-2 14-10 16-20"/><circle class="f" cx="24" cy="28" r="3"/>'],
  ["No skull opening","It travels through the cerebral vessels, without perforating the skull: a minimally invasive route to the brain.",'<path d="M10 34a18 18 0 0 1 36 0"/><path d="M14 34a14 14 0 0 1 28 0"/><path class="a" d="M28 50V30"/><circle class="f" cx="28" cy="30" r="3"/>'],
  ["EEG from deep inside","The electroencephalogram is measured deep in the brain, as close as possible to the areas responsible for epilepsy.",'<path d="M4 30h10l4-8 5 16 4-24 4 16h21"/><path class="a" d="M23 38l4-24"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Endovascular EEG<span class="nomob"> · Epilepsy</span> · Montpellier</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Diving into</span><span class="l"><em>the brain.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>DeepPulseNeuro is developing a device that reaches the brain through its own blood vessels, without perforating the skull, to measure electrical activity deep inside, as close as possible to where epilepsy begins.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How it works '+ARR+'</a><a class="btn" href="#/why">Why epilepsy</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Epilepsy is an invisible threat. For the third of patients whose seizures drugs cannot fully stop, DeepPulseNeuro will provide the standard technique for <em>measuring electrical brain activity.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">50M+</span><span class="k">People affected by epilepsy, one of the world’s main neurological disorders</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 in 3</span><span class="k">Patients are drug-resistant: pharmaceutical treatments only partially stop their seizures</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2025</span><span class="k">Laureate of i-Lab, France’s national innovation competition, run with Bpifrance</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Through the vessels, <em>not the skull.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Access</span><span>Navigate</span><span>Record</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Enter the way a stent does.</h2><p>The device uses the endovascular approach that is already routine in cardiovascular procedures and in stroke treatment with stents. The skull is never opened.</p></article>'+
     '<article class="step"><h2>Travel through the cerebral vessels.</h2><p>From inside the vessels it is guided deep into the brain, toward the areas responsible for epilepsy, without perforating the skull.</p></article>'+
     '<article class="step"><h2>Record the EEG at the source.</h2><p>There the electroencephalogram is measured as close as possible to where seizures arise: a safe, accessible and clinically relevant channel to transform epilepsy care.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Minimally invasive, <em>intracranial.</em></h2></div><p data-r>DeepPulseNeuro’s minimally invasive intracranial endovascular monitoring technology combines a proven clinical route with sensing built for the brain.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="epilepsy" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Epilepsy</span><h2 class="d2 split">A new approach to <em>epilepsy treatment.</em></h2></div><p data-r>Epilepsy affects over 50 million people, and one in three cannot rely on medication alone. DeepPulseNeuro aims to transform their care.</p></div>'+
   aimRows(AIMS)+
   '<p class="note-s" data-r>*What the technology will enable, pending clinical evidence.</p>'+
   '<div class="bk"><span class="lab kick" data-r>Partners</span><p class="cr" data-r>'+PARTNERS.map(function(n,i){return (i?'<i>·</i>':'')+'<span>'+esc(n)+'</span>'}).join("")+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Complementary skills <em>and experience.</em></h2></div><p data-r>A medical device executive, an interventional neuroradiologist and two research scientists, equipped to bring the technology to epilepsy patients and their caregivers in Europe and the United States.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Our purpose</span><p data-r>Breakthrough medical technologies and access platforms that improve the understanding, diagnosis and treatment of neurological disorders.</p></div>'+
    '<div><span class="lab kick" data-r>Our goal</span><p data-r>To transform epilepsy management and restore hope to the millions of people who currently have no treatment options.</p></div>'+
    '<div><span class="lab kick" data-r>Our approach</span><p data-r>Ethical, responsible and robust, for the benefit of patients, caregivers and healthcare professionals.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recognised <em>by i-Lab 2025.</em></h2></div><p data-r>The latest on DeepPulseNeuro.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>DeepPulseNeuro.</em></h2>'+
   '<p class="sub" data-r>We would be glad to hear from neurologists, hospitals, industrial partners and investors who share our ambition for epilepsy care.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#/how">How it works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Halle de l’Innovation<br>10 place Françoise Héritier, ZAC Cambacérès<br>34000 Montpellier, France</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Halle de l’Innovation<br>34000 Montpellier, France</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/epilepsy">Epilepsy</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Recognition</span>i-Lab 2025 laureate<br>Bpifrance</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 72" aria-hidden="true"><text x="450" y="58" text-anchor="middle" style="font-family:\'DM Sans\',Arial,sans-serif;font-weight:700;font-style:italic;font-size:76px;letter-spacing:-.03em">DeepPulseNeuro</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 DeepPulseNeuro</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",how:"story",technology:"story",platform:"platform",why:"epilepsy",epilepsy:"epilepsy",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"DeepPulseNeuro — Endovascular EEG for epilepsy, Montpellier",x:"Home"};
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
