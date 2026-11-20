/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Direct on the endometrium","OXO-001 is designed to interact directly with the endometrium, the lining of the uterus, and improve its receptivity to the embryo: the step where most rounds of IVF and ICSI still fail.",'<path d="M6 40c8-6 14-6 22 0s14 6 22 0"/><path class="a" d="M6 48c8-6 14-6 22 0s14 6 22 0"/><circle cx="28" cy="18" r="10"/><circle class="f" cx="25" cy="15" r="3"/>'],
  ["Non-hormonal","A first-in-class compound that works without hormones. It has passed the preclinical safety studies required to EMA and FDA quality standards.",'<path d="M28 6v44"/><path class="a" d="M10 28h36"/><circle cx="28" cy="28" r="18"/>'],
  ["An oral tablet","Easy to take: in OXOART2, patients took OXO-001 twice daily, from one menstrual cycle before embryo transfer until five weeks after it.",'<ellipse cx="28" cy="28" rx="20" ry="13"/><path class="a" d="M14 28h28"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>OXOART2 · Phase II</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Exploratory analysis of 96 women up to 40 years old receiving a single embryo transfer with donor eggs, presented at ESHRE’s 40th Annual Meeting, Amsterdam, July 2024. The trial was not designed to confirm the statistical significance of these outcomes (NCT05076032).</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Female fertility<span class="nomob"> · OXO-001</span> · Barcelona</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Helping the</span><span class="l">embryo <em>stay.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Most rounds of IVF and ICSI still end in failure because a viable embryo does not implant. Oxolife is developing OXO-001, a first-in-class, non-hormonal oral tablet that acts directly on the endometrium to raise implantation, pregnancy and live birth rates.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">More than three million assisted reproduction cycles are performed worldwide each year, and more than half of them do not end in a birth. Oxolife works on the step where most of them fail: <em>implantation.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">+6.9</span><p class="k">Percentage points in live birth rate with OXO-001 over placebo in the OXOART2 Phase II trial: 42.6% against 35.7%</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">28</span><p class="k">European fertility centres in the OXOART2 study, presented as a highlight of ESHRE’s 40th Annual Meeting</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2013</span><p class="k">Founded in Barcelona by Dr. Agnès Arbat and Dr. Ignasi Canals, entirely focused on female fertility</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Ready the lining, <em>help it hold.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Embryo</span><span>Endometrium</span><span>Birth</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A viable embryo is not enough.</h2><p>In IVF and ICSI a good embryo is transferred to the uterus, yet most rounds still fail, mostly because the embryo does not implant in the uterine lining.</p></article>'+
     '<article class="step"><h2>Act on the endometrium.</h2><p>OXO-001, taken as a tablet, interacts directly with the endometrium to make it more receptive to the embryo. It is non-hormonal and first in its class.</p></article>'+
     '<article class="step"><h2>More pregnancies, more births.</h2><p>In the OXOART2 Phase II trial, women given OXO-001 had higher implantation, pregnancy and live birth rates than with placebo: 42.6% of them took home a baby, against 35.7%.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">One small tablet, <em>a new target.</em></h2></div><p data-r>Implantation needs a good embryo and a receptive lining. OXO-001, the first and only compound of its kind, works on the lining: the endometrium that has to receive the embryo.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One compound, <em>two indications.</em></h2></div><p data-r>OXO-001 has completed Phase II in embryo implantation and is on track for Phase II in infertility associated with polycystic ovary syndrome. Oxolife is raising funds to move it through the clinic and is open to partnerships.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Two decades in <em>women’s health.</em></h2></div><p data-r>Oxolife was founded by a clinical pharmacologist who helped launch more than ten women’s health products and indications, and a scientist who has directed its research since 2013.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Investors</span><p data-r>A €5 million round in 2020 led by Inveready, with CDTI and Sabadell BStartup.</p></div>'+
    '<div><span class="lab kick" data-r>Grants</span><p data-r>European Innovation Council (EIC Accelerator, 2026), EIT Health and the Spanish Ministry of Science and Innovation.</p></div>'+
    '<div><span class="lab kick" data-r>Collaborators</span><p data-r>IBEC in Barcelona, the University of Córdoba–IMIBIC and Rutgers Robert Wood Johnson Medical School.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Trials, awards <em>and backing.</em></h2></div><p data-r>The latest on Oxolife and OXO-001.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Oxolife.</em></h2>'+
   '<p class="sub" data-r>Oxolife is raising funds to advance OXO-001 through the clinic and exploring partnerships. We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Oxolife '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Oxolife S.L.<br>C/ Riu de l’Or 12<br>08034 Barcelona, Spain</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Clinical trial</span><p data-r><a class="ul" href="https://clinicaltrials.gov/study/NCT05076032" target="_blank" rel="noopener">OXOART2 on ClinicalTrials.gov</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Barcelona, Spain</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">OXO-001</span>Oral · Non-hormonal<br>Phase II completed</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle"><tspan style="font-family:\'Source Sans 3\',Arial,sans-serif;font-weight:600;font-size:66px;letter-spacing:0">oxo</tspan><tspan fill="#c89ad6" style="font-family:\'Spectral\',Georgia,serif;font-style:italic;font-weight:400;font-size:70px">life</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Oxolife S.L.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"story",platform:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Oxolife — OXO-001, a first-in-class oral fertility treatment, Barcelona",x:"Home"};
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
