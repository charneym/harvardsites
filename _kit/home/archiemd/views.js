/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prodRows(list){return '<ul class="pfr prod">'+list.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p>'+
   (c[4]?'<a class="lab lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[3])+' '+ARR+'</a>':'<span class="lab lk nl0">ArchieMD</span>')+'</li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["See it in 3D","Physician-authored 3D animation makes anatomy, physiology and disease visible. It is the foundation of every ArchieMD product, from patient education to procedure training.",'<path d="M4 28C11 17 19 12 28 12s17 5 24 16c-7 11-15 16-24 16S11 39 4 28Z"/><circle cx="28" cy="28" r="8"/><circle class="f" cx="28" cy="28" r="3"/>'],
  ["Feel it with haptics","Force-feedback and mixed-reality trainers give the feel of tissue without the cost, set-up and consumables of high-fidelity manikins and physical task trainers.",'<path d="M10 46l22-22"/><path d="M30 18l8 8"/><path d="M34 14l8 8-4 4-8-8z"/><path class="a" d="M8 34c4 2 6 6 6 10M4 40c3 1 4 3 4 6"/>'],
  ["Prove it in studies","Products are built with nationally recognised subject-matter experts and evaluated with leading medical centres, and the results are published in peer-reviewed journals.",'<path d="M8 48h42M8 48V8"/><path class="a" d="M14 40l10-10 8 6 14-18"/><circle class="f" cx="46" cy="18" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Publications</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+(e[2]?'<a class="ul" href="'+e[2]+'" target="_blank" rel="noopener">'+esc(e[1])+'</a>':esc(e[1]))+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Development supported by National Institutes of Health SBIR and STTR awards, among them an advanced haptics simulation platform for nurse skills (R43EB032750), and by National Science Foundation SBIR and STTR awards.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Medical simulation<span class="nomob"> · Health science education</span> · Boca Raton</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">See the anatomy.</span><span class="l">Feel the</span><span class="l"><em>procedure.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ArchieMD is a physician-led company building 3D health science animation, haptic and mixed-reality simulation and interactive training for EMS, nursing and emergency medicine.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/simulation">How haptics work</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Visualisation adds a dynamic and often critical dimension to education, and interactivity is what engages the learner. We pair scientific credibility with new technology to <em>help clinicians train better.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">20.9%</span><p class="k">Mean knowledge gain for lateral canthotomy after haptic simulation training (Cureus, 2026)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">16</span><p class="k">NIH small-business research projects led by ArchieMD, alongside NSF awards</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50+</span><p class="k">Hours of anatomy, physiology and pathophysiology in Nurse-Skills</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a haptic trainer works</span><h2 class="d3">Feel every layer <em>before the real one.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">See</span><span>Feel</span><span>Assess</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The anatomy comes first.</h2><p>For needle chest decompression, the learner finds the landmarks in 3D: the second intercostal space on the midclavicular line, above the rib, clear of the vessels below it.</p></article>'+
     '<article class="step"><h2>Then the hand learns the feel.</h2><p>A force-feedback stylus pushes back as the needle meets skin, muscle and pleura, then gives as it enters the pleural space, the cue a screen alone cannot teach.</p></article>'+
     '<article class="step"><h2>And the result is measured.</h2><p>Knowledge tests before and after, and surveys on realism and usability. In a 2026 crossover study, haptic training raised lateral canthotomy scores by 20.9%.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="approach" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Approach</span><h2 class="d2 split">Visual, interactive, <em>evidence-based.</em></h2></div><p data-r>Every product is built with content guidance from nationally recognised subject-matter experts and evaluated with leading healthcare institutions for its educational impact, so it engages the learner and stands up to scrutiny.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">From the classroom <em>to the procedure.</em></h2></div><p data-r>Mobile, web, haptic and mixed-reality training for EMS providers, nurses, physicians and students, plus custom development for institutions that want a simulation built for them.</p></div>'+
   prodRows(PROD)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Physician-led, <em>built in-house.</em></h2></div><p data-r>An emergency physician leads product development, with an in-house team of 3D developers, animators, interactive designers and quality assurance specialists working alongside clinicians.</p></div>'+
   team()+
   '<div class="bk light-bk"><span class="lab kick" data-r>Worked with</span><p class="cr" data-r><span>University of Michigan</span><span>University of Miami</span><span>Florida Atlantic University</span><span>University of Virginia</span><span>US Department of Defense</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">Tested in studies, <em>published in journals.</em></h2></div><p data-r>ArchieMD partners with leading medical centres to evaluate the educational impact of its products, from informed-consent programs to haptic procedure trainers, and publishes the results in peer-reviewed journals.</p></div>'+
   evid()+
   '<span class="lab kick sub-l pr" data-r>News</span>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Licensing, partnerships and custom projects</span>'+
   '<h2 class="big split">Build training <em>with ArchieMD.</em></h2>'+
   '<p class="sub" data-r>If you would like to build a partnership, license our products or have us create a simulation for a specific project, we would like to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:+15619880550">Call +1 561 988 0550</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>ArchieMD, Inc.<br>Boca Raton, Florida</p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+15619880550">+1 561 988 0550</a><br>Fax +1 561 892 5888</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@archiemd.com</a><br><a class="ul" href="https://www.linkedin.com/company/2112681" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Boca Raton, Florida</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="tel:+15619880550">+1 561 988 0550</a><br><a class="ul" href="'+MAIL+'">info@archiemd.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/simulation">Simulation</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Products</span>Medrills 2.0 · Nurse-Skills · Haptic procedure trainers</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 100" aria-hidden="true"><text x="380" y="80" text-anchor="middle" style="font-family:\'Outfit\',Arial,sans-serif;font-weight:400;font-size:96px;letter-spacing:.01em">ArchieMD</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ArchieMD, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",approach:"approach",simulation:"story",products:"products",research:"research",team:"team",news:"research",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ArchieMD — haptic and mixed-reality medical simulation",x:"Home"};
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
