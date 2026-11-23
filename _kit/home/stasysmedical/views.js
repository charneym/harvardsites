/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function useRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3></div>'+
   '<p>'+esc(c[3])+'</p><span class="lab lk">'+esc(c[4])+'</span></li>'}).join("")+'</ul>'}
function pubs(){return '<ul class="nws">'+PUBS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["The machine","Built for use at point of care: intuitive card loading and a screen that clearly displays the result of each sample, run by an internal computer.",'<rect x="8" y="14" width="40" height="30"/><rect x="13" y="19" width="22" height="17"/><path class="a" d="M41 19v20"/><path d="M14 44l-2 6M42 44l2 6"/>'],
  ["The card","A single-use microcard holds the sensor and takes a controlled, high-precision injection of the whole blood sample, so there is no offsite lab.",'<rect x="16" y="8" width="24" height="40"/><path class="a" d="M22 16h12v10H22z"/><path d="M28 26v14"/><circle class="f" cx="28" cy="40" r="2.6"/>'],
  ["The sensor","Micron-scale sensors create shear gradients in the passing blood; microclots form on them and the force of each bond is measured.",'<path d="M4 18c12-6 22-6 34 0s14 4 14 4M4 38c12 6 22 6 34 0s14-4 14-4"/><rect x="20" y="22" width="8" height="12"/><path class="a" d="M36 34V24"/><circle class="f" cx="36" cy="22" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function outp(){return '<div class="outp"><span class="lab kick" data-r>What the system reports</span><div><p class="hw-l" data-r>High precision microfluidics, machine vision and machine learning deliver easy-to-interpret platelet and hemostasis data.</p>'+
  '<ul class="feat">'+FEAT.map(function(f){return '<li data-r>'+esc(f)+'</li>'}).join("")+'</ul></div></div>'}
function quote(){return '<figure class="qt"><blockquote data-r>Having the ability to measure the critical characteristics of a clot in 5 minutes or less could make the difference between life and death in major trauma patients.</blockquote>'+
  '<figcaption data-r><b>Dr. John Holcomb</b><span>Trauma surgeon and former trauma consultant for the U.S. Army</span></figcaption></figure>'}
function nih(){return '<div class="ev"><span class="lab kick" data-r>NIH support</span><div><dl>'+
  '<div><dt class="lab" data-r>2026 · NHLBI SBIR</dt><dd data-r>Expanding test cartridge manufacturing under ISO 13485 regulatory controls for FDA trial submission.</dd></div>'+
  '<div><dt class="lab" data-r>2021–2023 · NIH CATALYZE</dt><dd data-r>Rapid platelet dysfunction detection in whole blood using machine learning powered micro-clot imaging.</dd></div>'+
  '</dl><p class="note-s" data-r>From NIH RePORTER (Stasys Medical Corporation, Seattle, WA) and stasysmedical.com. The CATALYZE R33 funds a 1000-patient study at Vanderbilt University Medical Center.</p></div></div>'}
function team(){return '<div class="mh">'+TEAM.map(function(g){return '<div class="mh-group"><p class="mh-label" data-r>'+esc(g[0])+'</p><ul class="mh-list">'+
  g[1].map(function(p){return '<li data-r><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>The Stasys Platelet Strength Test</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Platelet function,</span><span class="l">measured in</span><span class="l"><em>three minutes.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>The Stasys Atlas is a global assay of primary hemostasis: it measures the sum of platelet adhesion, activation, aggregation and contraction from whole blood, without reagents.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">See how it works '+ARR+'</a><a class="btn" href="#/research">Read our research</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why platelet strength</span>'+
   '<h2 class="txt" id="mani">Existing platelet tests measure a single step in aggregation, but aggregation alone does not mean platelets function for the patient. <em>Stasys measures their strength.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3 min</span><p class="k">From blood draw to result, where laboratory platelet testing takes 30 to 60 minutes</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2013</span><p class="k">Founded on platelet force research at the University of Washington, Seattle</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">482</span><p class="k">Critically injured patients in the Vanderbilt trial published in Scientific Reports, 2026</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Shear, microclots, <em>force.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Load</span><span>Shear</span><span>Measure</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Attach the sample, load the card.</h2><p>A whole blood syringe attaches to the single-use sensor card, and the card goes into the benchtop machine. No pipettes, no mixing.</p></article>'+
     '<article class="step"><h2>Shear activates the platelets.</h2><p>Blood streams past micron-scale sensors. Their shear gradients reproduce in vivo activation within seconds, and microclots form on each sensor.</p></article>'+
     '<article class="step"><h2>Measure the force they pull.</h2><p>Machine vision tracks how far each microclot pulls its sensor post. The rates of clot formation and aggregation, and the platelet forces, give platelet strength in under three minutes.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The Atlas system, <em>in three parts.</em></h2></div><p data-r>Designed to form microclots from whole blood samples to measure platelet forces, aggregation and function. No agonists or reagents and no offsite labs: faster, more accurate results for faster, better-informed decisions.</p></div>'+
   caps()+outp()+
  '</div></section>'+

  '<section class="sec dark2" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">Helping trauma doctors <em>decide faster.</em></h2></div><p data-r>By measuring the end product, platelet strength, the Atlas gives clinicians better information to provide personalised patient care, from the trauma bay to antiplatelet therapy.</p></div>'+
   useRows(USES)+quote()+
  '</div></section>'+

  '<section class="sec dark" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News &amp; research</span><h2 class="d2 split">Proven in published <em>clinical research.</em></h2></div><p data-r>Laboratories at Vanderbilt, UC Davis and beyond have used the Stasys Atlas to study transfusion prediction, platelet storage, ECMO coagulopathy and platelet metabolism.</p></div>'+
   pubs()+nih()+
  '</div></section>'+

  '<section class="sec light white" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Who we are</span><h2 class="d2 split">Engineers and <em>trauma physicians.</em></h2></div><p data-r>The team working to measure platelet forces and better predict blood coagulability, founded in 2013 on platelet force research at the University of Washington.</p></div>'+
   team()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Support Stasys</span>'+
   '<h2 class="big split">Let’s <em>connect.</em></h2>'+
   '<p class="sub" data-r>Stasys is moving to the next step, with cartridge manufacturing scaling for an FDA trial submission, and would love your support. Reach the team through the form on our website.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+FORM+'" target="_blank" rel="noopener">Get in touch '+ARR+'</a><a class="btn" href="#/research">Read our research</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Stasys Medical Corporation<br>Seattle, Washington</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">stasysmedical.com</a></p></div>'+
    '<div><span class="lab" data-r>Status</span><p data-r>Investigational device; not for commercial use</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Seattle, Washington</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">stasysmedical.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Note</span>Investigational device only; not for commercial use. Not evaluated by the FDA.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="72" text-anchor="middle" style="font-family:\'DM Serif Display\',serif;font-weight:400;font-size:96px">Stasys Medical</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Stasys Medical Corporation</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",applications:"applications",research:"research",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Stasys Medical — the Platelet Strength Test",x:"Home"};
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
