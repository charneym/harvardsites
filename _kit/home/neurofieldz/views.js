/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function appRows(list){return '<ul class="pfr apps">'+list.map(function(c){var dim=!c[5];
  var inner='<span class="lab tg"><b'+(dim?' class="pz"':'')+'>'+esc(c[4])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[2])+'</span></div>'+
   '<p>'+esc(c[3])+'</p>'+(dim?'<span class="lab lk"></span>':'<a class="lab lk" href="'+c[5]+'" target="_blank" rel="noopener">Source '+ARR+'</a>');
  return '<li'+(dim?' class="dim"':'')+'>'+inner+'</li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Stimulus and sensor in one","A portable headset carries an onboard smartphone that shows custom visual stimulus patterns, and can present separate stimuli to each eye, while the wireless sensor records the brain’s response.",'<rect x="6" y="16" width="44" height="24"/><path d="M6 28h44"/><path class="a" d="M14 22h6v6h-6zM20 28h6v6h-6zM30 22h6v6h-6zM36 28h6v6h-6z"/>'],
  ["Dry nanostructured electrodes","The NeuroDot sensor’s dry nanostructured bioelectrodes need no gels or scalp preparation, for setup in under a minute and high-quality data streaming in EEG and EFEG modes.",'<circle cx="28" cy="28" r="17"/><circle class="f" cx="28" cy="28" r="2.4"/><circle class="f" cx="20" cy="24" r="2"/><circle class="f" cx="36" cy="24" r="2"/><circle class="f" cx="22" cy="34" r="2"/><circle class="f" cx="34" cy="34" r="2"/><circle class="f" cx="28" cy="18" r="2"/>'],
  ["AI-powered signal analysis","Software built on machine learning analyses the evoked brain signals, for objective tests that do not depend on the patient pressing a button. The patient simply listens to a podcast.",'<path d="M4 30h10l4-12 6 24 5-18 4 8h19"/><path class="a" d="M4 46h48"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function backers(){return '<div class="bk light-bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r><span>National Eye Institute</span><i>·</i><span>National Institute on Aging</span><i>·</i><span>National Science Foundation</span><i>·</i><span>Northeastern University</span></p></div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>From the<br>clinic</span><div><dl>'+
  [["Patient","“The NeuroVEP was so easy. All I had to do was listen to a podcast. No buttons to press.”"],
   ["Clinician","“NeuroVEP outperformed the current standard of care cart based system in my clinic.”"],
   ["Clinician","“The NeuroVEP worked flawlessly in testing 150+ patients with macular degeneration. Easy to use in the clinic.”"],
   ["Publication","Versek et al., Portable Diagnostic System for Age-Related Macular Degeneration Screening Using Visual Evoked Potentials, Eye and Brain, 2021."]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Patient and clinician reviews of the prototype, as published by NeuroFieldz. NeuroVEP is a medical device in the development phase and has not yet received regulatory approval for marketing or commercial use.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>NeuroVEP<span class="nomob"> · Portable eye–brain diagnostics</span> · Newton, MA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Read the eye</span><span class="l">through the brain,</span><span class="l"><em>anywhere.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>NeuroVEP is a wireless headset under two pounds that measures the brain’s visual evoked potentials, for objective tests of glaucoma, macular degeneration, optic neuropathies and amblyopia, in the clinic, the ER or the field.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/applications">Applications</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Visual evoked potentials show how the eye and brain work together, yet no portable VEP system is on the market. NeuroVEP <em>brings the test to the patient.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;1 min</span><p class="k">Setup with dry nanostructured bioelectrodes, no gels</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;2 lb</span><p class="k">A headset portable to the ER, the field and the clinic</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">150+</span><p class="k">Patients with macular degeneration tested with the prototype in clinic</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How NeuroVEP works</span><h2 class="d3">From a pattern on a screen <em>to an objective answer.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Stimulus</span><span>Response</span><span>Analysis</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A pattern for each eye.</h2><p>The smartphone in the headset shows a visual stimulus, such as a reversing checkerboard, and can present a separate pattern to each eye. The patient needs only to look; no buttons to press.</p></article>'+
     '<article class="step"><h2>The visual cortex answers.</h2><p>The signal travels from the retina along the optic nerve to the visual cortex at the back of the head, where the NeuroDot’s dry electrodes record the evoked potential in EEG and EFEG modes.</p></article>'+
     '<article class="step"><h2>AI reads the response.</h2><p>Software built on machine learning measures the evoked waveform, its timing and its strength, eye by eye, giving clinicians an objective view of the visual pathway in minutes.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The power of VEP, <em>in a headset.</em></h2></div><p data-r>NeuroFieldz’s wireless sensor system measures brain activity with visual evoked potentials and fields (VEPF), an integrated and highly sensitive neuromonitoring technique, combined with a portable display for custom stimuli.</p></div>'+
   caps()+
   backers()+
  '</div></section>'+

  '<section class="sec dark2" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">Objective tests for <em>neuro-visual disorders.</em></h2></div><p data-r>From the retina to the visual cortex, NeuroVEP is designed to test many ophthalmic and neurological disorders. Three programs are funded by the National Institutes of Health.</p></div>'+
   appRows(APPS)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Neurotechnology builders, <em>clinical advisors.</em></h2></div><p data-r>Founded on research at Northeastern University, NeuroFieldz is advised by leading ophthalmologists and neurologists in the Boston area and by experienced business advisors.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Patent</span><p data-r>US Patent No. 11,701,046 B2, Portable Brain and Vision Diagnostic and Therapeutic System, issued July 2023.</p></div>'+
    '<div><span class="lab kick" data-r>Publications</span><p data-r>Eye and Brain (2021), Military Medicine (2019) and the Journal of Neural Engineering, where the team introduced electric field encephalography.</p></div>'+
    '<div><span class="lab kick" data-r>Origins</span><p data-r>An NSF I-Corps grant in 2014 led to the company; an NSF SBIR award followed in 2015 to develop the NeuroDot sensor.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, patents <em>and papers.</em></h2></div><p data-r>The latest from NeuroFieldz, from new NIH funding to clinical results.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>NeuroFieldz.</em></h2>'+
   '<p class="sub" data-r>For clinical collaboration, partnering, licensing or investment, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email NeuroFieldz '+ARR+'</a><a class="btn" href="#/applications">Applications</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>NeuroFieldz Inc.<br>Newton, Massachusetts</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Status</span><p data-r>NeuroVEP is in development and not yet approved for marketing.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>NeuroFieldz Inc.<br>Newton, Massachusetts</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Product</span>NeuroVEP · AI-powered mobile eye and brain diagnostics</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="60" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:700;font-style:italic;font-size:62px">NeuroFieldz</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 NeuroFieldz Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story",applications:"applications",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"NeuroFieldz — NeuroVEP portable eye and brain diagnostics",x:"Home"};
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
