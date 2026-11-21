/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Magnetic nanoparticles","Nanoparticle synthesis and administration, including nanomagnetic substrates for ischemic stroke, neuroprotection, chemotherapy, immunotherapy and tumor embolization.",'<circle cx="28" cy="28" r="6"/><circle class="f" cx="28" cy="28" r="2.4"/><path class="a" d="M8 28c0-11 9-20 20-20M48 28c0 11-9 20-20 20"/><path d="M14 28c0-8 6-14 14-14M42 28c0 8-6 14-14 14"/>'],
  ["Magnetic control systems","Compact magnet systems that work inside existing digital angiography suites, plus miniature magnet fabrication for medical devices.",'<rect x="12" y="22" width="32" height="12"/><path class="a" d="M12 28H4M44 28h8"/><path d="M18 22c0-10 20-10 20 0M18 34c0 10 20 10 20 0"/>'],
  ["Interventional robotics","Robotic arm integration in the operating room and 3D-printed physiological phantoms, to take catheter-based procedures in the brain, heart and lungs from concept to clinic.",'<path d="M10 46h16M18 46V34l10-14 14 6"/><circle class="f" cx="28" cy="20" r="2.4"/><path class="a" d="M42 26c4 2 6 6 4 10"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Magnetic therapeutics<span class="nomob"> · Interventional robotics</span> · St. Louis</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Magnetic control</span><span class="l">for the patients</span><span class="l"><em>care leaves behind.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>UN&amp;UP builds investible businesses around breakthrough magnetic therapeutic and robotic solutions for stroke, heart rhythm and cancer, and de-risks each one with NIH awards before it goes to the clinic.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How TheraLode works '+ARR+'</a><a class="btn" href="#/programs">Our programs</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Unmet needs &amp; underserved populations</span>'+
   '<h2 class="txt" id="mani">Founded in 2018 by life-science entrepreneurs, UN&amp;UP develops therapies to equalize care disparities: technologies that could <em>redefine the standard of care</em> for stroke, arrhythmia and cancer.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$12M</span><span class="k">In NIH SBIR and STTR awards to UN&amp;UP since 2019, according to NIH RePORTER</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><span class="k">NIH institutes backing its work: NINDS, NHLBI, NCI and NIMHD</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">250×</span><span class="k">Lower alteplase dose with TheraLode™ than currently approved for stroke thrombolysis</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How TheraLode works</span><h2 class="d3">Bring the drug <em>to the clot.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Barrier</span><span>Field</span><span>Lysis</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Blood stalls at the clot.</h2><p>In acute ischemic stroke, flow stops in front of the occlusion. Alteplase reaches the clot only by slow diffusion, so lysis takes hours, and the dose needed carries a risk of hemorrhage.</p></article>'+
     '<article class="step"><h2>A magnet sets the particles moving.</h2><p>A portable magnet system outside the head drives alteplase-conjugated magnetic nanoparticles, conveying them to the clot’s surface more than 350× faster than diffusion. It does not need the clot’s exact location.</p></article>'+
     '<article class="step"><h2>Lysis in minutes, at a fraction of the dose.</h2><p>The particles mix alteplase at the clot’s surface, so lysis starts within minutes rather than hours, with a dose nearly 250× lower than currently approved. The goal: thrombolysis for 10× more stroke patients.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">Mastering the tools <em>that reach the clinic.</em></h2></div><p data-r>UN&amp;UP has offices in the Cambridge Innovation Center in St. Louis, an advanced robotics lab of about 2,500 sq ft in the city’s historic Midtown, and wet lab space at the St. Louis BioGenerator.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="programs" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">Brain, heart <em>and liver.</em></h2></div><p data-r>Each platform is de-risked with NIH SBIR funding. When a technology is de-risked, UN&amp;UP creates a new company focused on its rapid commercialization.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineers, scientists <em>and clinicians.</em></h2></div><p data-r>Experience in neurology, nanoparticles, cardiology, robotics, magnetics, regulatory affairs, clinical study design, animal models and device design, with clinical investigators at leading universities.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>SBIR and STTR awards from the National Institutes of Health: NINDS, NHLBI, NCI and NIMHD.</p></div>'+
    '<div><span class="lab kick" data-r>Laboratories</span><p data-r>Robotics lab in St. Louis Midtown; wet lab at the St. Louis BioGenerator.</p></div>'+
    '<div><span class="lab kick" data-r>Community</span><p data-r>Partners with STL CAPS and WashU biomedical engineering students, and hosts interns each year.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards, pitches <em>and partners.</em></h2></div><p data-r>The latest from UN&amp;UP and its NIH programs.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners and investors</span>'+
   '<h2 class="big split">Talk to <em>UN&amp;UP.</em></h2>'+
   '<p class="sub" data-r>For more information on TheraLode™, ThromBot™, CorBot™ or our other programs, contact the team in St. Louis.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email UN&amp;UP '+ARR+'</a><a class="btn" href="#/programs">See the programs</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>UN&amp;UP, LLC<br>Cambridge Innovation Center<br>St. Louis, Missouri</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r>Francis Creighton, CEO<br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a><br><a class="ul" href="https://x.com/UNandUP" target="_blank" rel="noopener">X (Twitter)</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>St. Louis, Missouri</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platforms</span>TheraLode™ · ThromBot™<br>CorBot™</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Red Hat Display\',Arial,sans-serif;font-weight:500;font-size:62px;letter-spacing:.04em">UN&amp;UP</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Un&amp;Up LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",platform:"platform",programs:"programs",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"UN&UP — Magnetic and robotic medical technologies, St. Louis, MO",x:"Home"};
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
