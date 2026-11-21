/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Prone infrared imaging","The patient lies face down on an open imaging table. Each breast hangs freely and thermally isolated, so the camera sees the whole surface, including the inframammary fold, with no contact artifacts. No compression, no radiation, no expert operator.",'<path d="M6 14h44"/><path class="a" d="M17 14c0 18 5 26 11 26s11-8 11-26"/><path d="M22 50l6-8 6 8"/><circle class="f" cx="28" cy="50" r="2"/>'],
  ["A patient-specific model","Multi-view infrared and optical images become a 3D digital model of the breast with a measured temperature at every point of its surface, built for that one patient.",'<path d="M10 16c0 20 8 30 18 30s18-10 18-30"/><path class="a" d="M14 24h28M17 32h22M21 40h14"/><circle class="f" cx="33" cy="30" r="2.6"/>'],
  ["Physics-based AI","An algorithm that solves the bioheat equations works backward from the surface temperatures to the heat source beneath them, and reports whether a tumor is present, its size and its location.",'<circle cx="28" cy="28" r="18"/><circle class="a" cx="28" cy="28" r="10"/><circle class="f" cx="28" cy="28" r="3"/><path d="M28 4v8M28 44v8M4 28h8M44 28h8"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>NSF SBIR Phase I, 2025</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From BiRed’s project outcomes report for NSF award 2451205, “Efficient thermal-spatial point-cloud extraction and rapid assessment of physics-based AI algorithm from infrared images to increase early detection of breast cancer”. Results from early studies; larger studies are needed to validate efficacy.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Breast cancer detection<span class="nomob"> · Infrared imaging</span> · Rochester, NY</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Tumors run warm.</span><span class="l"><em>We read the heat.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>BiRed Imaging combines infrared imaging, numerical simulation and physics-based AI to detect the presence, size and location of breast tumors. Contactless, with no compression and no radiation: a complement to mammography that works regardless of breast density.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/evidence">Clinical evidence</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">About 30% of cancers are missed in today’s screening because dense breast tissue is hard to image, and the tests added to catch them bring more false positives and unnecessary biopsies. BiRed reads a different signal: <em>the heat a tumor makes.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">15</span><p class="k">Patients imaged before biopsy in BiRed’s 2025 study, with no cancers missed and no false positives</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10 min</span><p class="k">AI compute time per breast, down from over 90 hours</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$561K</span><p class="k">In two NSF SBIR Phase I awards, 2022 and 2025</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">From surface heat <em>to the tumor.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Image</span><span>Model</span><span>Locate</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Image the heat, without touching.</h2><p>A malignant tumor makes more metabolic heat than healthy tissue and draws a network of blood vessels. That warmth reaches the skin. With the patient lying prone, infrared cameras capture it from several views, with no contact and no radiation.</p></article>'+
     '<article class="step"><h2>Build her own 3D model.</h2><p>An extraction algorithm turns the infrared and optical images into a 3D surface with a temperature at every point: a digital model of this patient’s breast, not a generic one.</p></article>'+
     '<article class="step"><h2>Solve back to the source.</h2><p>A physics-based AI algorithm solves the bioheat equations in reverse, from the surface temperatures to the heat source inside, and reports whether a tumor is present, how large it is and where. About ten minutes per breast.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">Infrared imaging, <em>solved by physics.</em></h2></div><p data-r>Infrared imaging was approved by the FDA in 1982 but fell out of favor for poor sensitivity. BiRed pairs today’s infrared cameras with a patient-specific model and the physics of heat transfer, and reads the image as a measurement, not a picture.</p></div>'+
   caps()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>For patients</span><p data-r>Touchless, with no breast compression and no ionizing radiation. The patient simply lies on an open imaging table.</p></div>'+
    '<div><span class="lab kick" data-r>For clinics</span><p data-r>No skilled technologist is needed to screen patients, and results can come within minutes of imaging.</p></div>'+
    '<div><span class="lab kick" data-r>For screening</span><p data-r>An adjunct to mammography, built to raise detection in dense breasts and cut false positives, recalls and biopsies.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="evidence" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical evidence</span><h2 class="d2 split">Tested before <em>the biopsy.</em></h2></div><p data-r>BiRed’s algorithm has been tested on biopsy-proven cases in IRB-approved studies run by researchers at Rochester Institute of Technology and clinicians at Rochester General Hospital, using the same default settings for every patient and none of the tumor data.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Heat transfer, AI <em>and the clinic.</em></h2></div><p data-r>BiRed Imaging was co-founded in 2020 by Satish Kandlikar, Gleason Professor of Mechanical Engineering at RIT, and grew out of years of bioheat research there with clinicians at Rochester General Hospital.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>Two NSF SBIR Phase I awards, a $100,000 grant from New York State’s innovation grant program, and an investment from RIT’s Venture Fund.</p></div>'+
    '<div><span class="lab kick" data-r>Clinical partners</span><p data-r>Rochester General Hospital, part of Rochester Regional Health, where BiRed’s clinical studies take place.</p></div>'+
    '<div><span class="lab kick" data-r>Patent</span><p data-r>“Detection and Characterization of Cancerous Tumors”, US 2019/0385308 A1, Kandlikar et al.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research and news</span><h2 class="d2 split">Published, peer reviewed, <em>funded.</em></h2></div><p data-r>The science behind BiRed is in the journals of heat transfer and medical diagnostics, and its progress in the record of the National Science Foundation.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>BiRed.</em></h2>'+
   '<p class="sub" data-r>BiRed Imaging is moving from research toward a product for breast clinics and hospitals, and would be glad to hear from clinicians, partners and investors.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email BiRed '+ARR+'</a><a class="btn" href="#/evidence">See the evidence</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>BiRed Imaging, Inc.<br>Venture Creations, RIT<br>40 Franklin Street<br>Rochester, NY 14604</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r>Satish Kandlikar<br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Incubator</span><p data-r><a class="ul" href="https://www.rit.edu/incubator/" target="_blank" rel="noopener">RIT Venture Creations</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>40 Franklin Street<br>Rochester, NY 14604</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/evidence">Evidence</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/research">Research</a></div>'+
   '<div class="c"><span class="lab">Technology</span>Infrared imaging<br>Physics-based AI</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:800;font-size:60px;letter-spacing:.01em">BIRED</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 BiRed Imaging, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",platform:"platform",evidence:"evidence",team:"team",research:"research",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"BiRed Imaging — Infrared imaging and physics-based AI for breast cancer detection, Rochester, NY",x:"Home"};
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
