/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function cmp(){return '<div class="cmpw"><div class="cmph"><span></span><span class="lab">Multi4</span><span class="lab">Resectoscope</span></div><ul class="cmp">'+CMP.map(function(c){
  return '<li><h3>'+esc(c[0])+'</h3><span class="m4">'+esc(c[1])+'</span><span class="rs">'+esc(c[2])+'</span></li>'}).join("")+'</ul></div>'}
function mil(){return '<ul class="pfr mil">'+MIL.map(function(a){return '<li><span class="lab tg">'+a[0]+'</span><h3>'+esc(a[1])+'</h3><p>'+esc(a[2])+'</p><span></span></li>'}).join("")+'</ul>'}
function fns(){var F=[
  ["Anaesthetise","Applies local anaesthesia to the bladder wall, so the patient stays awake, with no spinal or general anaesthesia.",'<path d="M10 44L36 18"/><path d="M32 14l10 10"/><path class="a" d="M40 12l6-6"/><circle class="f" cx="16" cy="46" r="2.2"/><circle class="f" cx="10" cy="40" r="1.6"/>'],
  ["Resect","Resects tissue samples from the tumour with its two jaws, under the cystoscope’s view.",'<path d="M8 36L30 28"/><path class="a" d="M30 28L48 14M30 28L48 42"/><path d="M8 20L30 28"/>'],
  ["Transport","Automatically transports every sample out through the instrument itself, into a container ready for the pathologist.",'<path d="M6 28H50"/><path d="M6 22H50M6 34H50"/><circle class="f" cx="20" cy="28" r="2.6"/><path class="a" d="M34 24l6 4-6 4"/>'],
  ["Treat","Destroys remaining cancer tissue or stops bleeding, with one single instrument and one single visit.",'<path d="M10 40C18 34 26 34 34 40"/><path class="a" d="M38 10L30 24H40L32 38"/>']];
  return '<div class="caps fns">'+F.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab" data-r>Function '+(i+1)+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Multi4 System<span class="nomob"> · Bladder cancer</span> · Gothenburg, Sweden</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">See it. Treat it.</span><span class="l"><em>Same day.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Multi4 is one single-use instrument with four built-in functions. Through the working channel of an endoscope, it removes urinary bladder cancer in outpatient care, at the same visit as the control cystoscopy.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/instrument">How Multi4 works '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Removing suffering from the equation</span>'+
   '<h2 class="txt" id="mani">Bladder cancer returns in 61% of patients within a year, and its standard treatment needs an operating room and anaesthesia. Multi4 is designed to <em>treat it in minutes, on an awake patient who goes home the same day.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">510(k)</span><p class="k">FDA clearance in June 2025, for commercial sale in the United States</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5–30<small>min</small></span><p class="k">Complete treatment time for the physician, against 20–60 with a resectoscope</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">€2.5M</span><p class="k">EIC Accelerator grant from the European Innovation Council, 2024</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The instrument · Multi4</span><h2 class="d3">Four functions, <em>one instrument.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Numb</span><span>Resect</span><span>Retrieve</span><span>Treat</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Local anaesthesia.</h2><p>Through the cystoscope’s working channel, Multi4’s needle numbs the bladder wall around the tumour. No fasting, no spinal or general anaesthesia, no operating room.</p></article>'+
     '<article class="step"><h2>Resect the tumour.</h2><p>The two jaws close on the tumour and resect tissue samples, in a handheld instrument designed for any gender and either hand.</p></article>'+
     '<article class="step"><h2>Samples travel out.</h2><p>Each sample is transported automatically back through the instrument itself, out of the body and into a container, ready to send to the pathologist.</p></article>'+
     '<article class="step"><h2>Destroy what remains.</h2><p>Multi4 destroys the remaining cancer tissue and stops bleeding with the same instrument. The patient goes home, with no catheter.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="functions" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Worldwide patented, <em>in the palm of your hand.</em></h2></div><p data-r>The Multi4 technology makes it possible to use the instrument in the small working channel of an endoscope. It is generic, and can later be used for cancer of the oesophagus, stomach, lungs and intestines; several patent families protect it on the world market.</p></div>'+
   fns()+
  '</div></section>'+

  '<section class="sec light" id="comparison" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Comparison</span><h2 class="d2 split">From inpatient care <em>to outpatient care.</em></h2></div><p data-r>How a Multi4 treatment compares with resection by resectoscope in the operating room, as published by Multi4 Medical.</p></div>'+
   cmp()+
  '</div></section>'+

  '<section class="sec dark" id="milestones" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Milestones</span><h2 class="d2 split">From Sahlgrenska <em>to the U.S. market.</em></h2></div><p data-r>Developed with Swedish research and clinical partners, cleared by the FDA in 2025, and launching in the United States in 2026.</p></div>'+
   mil()+
   '<div class="bk"><span class="lab kick" data-r>Selected awards</span><p class="cr" data-r>'+AWD.map(function(a){return '<span>'+esc(a)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A broad and <em>committed team.</em></h2></div><p data-r>A driven management team works with engineers, two patent offices specialising in medtech, and the doctors, nurses and endoscopists who have helped Multi4 move forward from the start.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Partners</span><p class="cr" data-r><span>RISE Research Institutes of Sweden</span><i aria-hidden="true">·</i><span>Sahlgrenska University Hospital</span><i aria-hidden="true">·</i><span>University of Gothenburg</span><i aria-hidden="true">·</i><span>Karolinska University Hospital</span><i aria-hidden="true">·</i><span>European Innovation Council</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Cleared, published <em>and launching.</em></h2></div><p data-r>FDA clearance, the first-in-human study and the European Innovation Council project.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Join the fight against cancer</span>'+
   '<h2 class="big split">Hey cancer. <em>You picked the wrong fight.</em></h2>'+
   '<p class="sub" data-r>Urologists, hospitals, partners and investors: get in touch if you want to join the journey to reduce suffering for cancer patients around the world.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+EMAIL+'">Email Multi4 '+ARR+'</a><a class="btn" href="#/instrument">See how it works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Multi4 Medical AB<br>Gothenburg, Sweden</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+EMAIL+'">'+EMAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+46736929000">'+PHONE+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Multi4 Medical AB<br>Gothenburg, Sweden</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+EMAIL+'">'+EMAIL+'</a><br><a class="ul" href="tel:+46736929000">'+PHONE+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/instrument">The instrument</a><br><a class="ul" href="#/comparison">Comparison</a><br><a class="ul" href="#/milestones">Milestones</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Funding</span>Proudly funded by contributions from Sweden and the European Union</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="74" text-anchor="middle" style="font-family:\'Inter Tight\',Arial,sans-serif;font-weight:500;font-size:86px;letter-spacing:-.01em">Multi4 Medical</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Multi4 Medical AB</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",instrument:"story",functions:"functions",comparison:"comparison",milestones:"milestones",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Multi4 Medical — See it. Treat it. Same day.",x:"Home"};
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
