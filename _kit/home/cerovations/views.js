/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function modeRows(){return '<ul class="pfr mode">'+MODES.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span></span></li>'}).join("")+'</ul>'}
function progRows(){return '<ul class="pfr path">'+PROGRAMS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' on NIH RePORTER">'+c[4]+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Neurocritical care<span class="nomob"> · Minnesota</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Expanding the</span><span class="l">toolkit for</span><span class="l"><em>TBI care.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>The OsmoFlo™ Bimodal EVD System is designed to remove water from cerebrospinal fluid as vapour, to reduce brain swelling and intracranial pressure in even the worst cases of traumatic brain injury.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How OsmoFlo works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<span class="lab cap">Sagittal section of the human brain · anatomical model</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The need</span>'+
   '<h2 class="txt" id="mani">Cerebral edema, brain swelling from excess fluid, commonly triggers dangerous intracranial pressure after severe TBI. <b class="w0">Evidence is unclear whether draining CSF alone can reduce it.</b> <em>OsmoFlo adds a new approach.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">200,000+</span><p class="k">Hospitalisations from traumatic brain injury in the U.S. each year, with over 60,000 deaths (CDC)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10%</span><p class="k">Of severe cases with treatment-resistant intracranial pressure that result in good outcomes (NEJM, 2016)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$8M</span><p class="k">NIH Small Business Innovation Research grant funding the OsmoFlo clinical programme</p></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Draw the water out, <em>through the ventricles.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Edema</span><span>Catheter</span><span>Vapour</span><span>Gradient</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The swelling.</h2><p>After a severe brain injury, excess fluid builds up in the brain tissue. The swelling raises the pressure inside the skull, and in many patients it resists every treatment available today.</p></article>'+
     '<article class="step"><h2>The catheter.</h2><p>The OsmoFlo catheter is placed in a brain ventricle just like a standard external ventricular drain, so the clinical workflow stays the same. Inside it run permeable membrane fibres.</p></article>'+
     '<article class="step"><h2>The vapour.</h2><p>Dry air sweeps through the hollow fibres and carries water out of the cerebrospinal fluid as vapour, a process called pervaporation.</p></article>'+
     '<article class="step"><h2>The gradient.</h2><p>With water removed, the fluid’s osmolarity rises, so water moves out of the swollen tissue into the ventricles, where the catheter removes it by vapour or by drainage.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">One catheter, <em>two modes.</em></h2></div><p data-r>A bimodal EVD system: OsmoFlo can remove water vapour from the cerebrospinal fluid, or drain it, through one catheter placed the way clinicians already work.</p></div>'+
   modeRows()+
   '<p class="ack" data-r>The approach builds on Dr. Odland’s published research: an ex vivo study of CSF osmolarity and brain tissue water content (J Neurotrauma, 2011) and reductive ventricular osmotherapy in a swine model of traumatic brain injury (Neurosurgery, 2012). OsmoFlo is under development and not for sale.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="programs" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">From the bench <em>to the bedside.</em></h2></div><p data-r>Cerovations licenses promising medical device inventions, including from the University of Minnesota, and advances them with NIH small business funding.</p></div>'+
   progRows()+
   '<div class="trial"><span class="lab kick" data-r>Pilot clinical study · NIH SBIR Fast Track</span>'+
    '<div class="trial-g"><div><span class="v" data-r>10</span><p data-r>Severe TBI patients in a Phase 1 first-in-human safety study</p></div>'+
    '<div><span class="v" data-r>40</span><p data-r>Patients in a Phase 2a randomised pilot, 3:1 against a standard-of-care EVD</p></div>'+
    '<div><span class="v" data-r>Phase III</span><p data-r>The overall objective: enabling a pivotal study toward market authorisation</p></div></div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Experience. Diligence. <em>Expertise.</em></h2></div><p data-r>Founded by three medical device executives, Cerovations pairs device-launch experience with the surgeon-inventor of OsmoFlo.</p></div>'+
   team()+
   '<p class="memb" data-r><span class="lab">Member of</span> Medical Alley Association · University Enterprise Labs · University of Minnesota Office for Technology Commercialization’s Business Advisory Group · AUTM</p>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Funded to reach <em>the clinic.</em></h2></div><p data-r>Awards and milestones from Cerovations.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Questions for <em>Cerovations?</em></h2>'+
   '<p class="sub" data-r>For the OsmoFlo system, clinical collaboration or partnership, write to the Cerovations team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r><span class="bl">Woodbury, Minnesota</span><span class="bl">MN 55129</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>OsmoFlo™</span><p data-r>Under development. Not for sale.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Cerovations, LLC</span>Woodbury, Minnesota<br>MN 55129</div>'+
   '<div class="c"><span class="lab">OsmoFlo™</span>Bimodal EVD System<br>Under development. Not for sale.</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Jost\',system-ui,sans-serif;font-weight:400;font-size:60px;letter-spacing:.06em">CEROVATIONS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Cerovations, LLC</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"technology",programs:"programs",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Cerovations — the OsmoFlo™ Bimodal EVD System for severe traumatic brain injury",x:"Home"};
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
