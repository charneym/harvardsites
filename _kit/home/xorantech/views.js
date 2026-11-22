/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[0])+'<span class="loc">'+esc(c[1])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["For the patient","Low-dose cone beam CT brings 3D imaging to the patient’s point of care, so patients get access to it in the practice they already visit instead of a referral to a hospital scanner.",'<circle cx="28" cy="17" r="8"/><path d="M12 50c0-10 7-17 16-17s16 7 16 17"/><path class="a" d="M6 28a22 22 0 0 1 44 0"/>'],
  ["For the clinician","Providers control the timing and quality of their own scans, and can diagnose disease or injury during the visit and begin treatment right away.",'<rect x="8" y="10" width="40" height="28"/><path d="M20 48h16M28 38v10"/><circle class="a" cx="28" cy="24" r="8"/><path class="a" d="M28 16v16M20 24h16"/>'],
  ["For the practice","Compact, mobile systems that roll into place, fit standard doorways and run from a standard outlet, so a facility can improve throughput and workflow without giving up clinical space.",'<circle cx="28" cy="22" r="14"/><circle cx="28" cy="22" r="8"/><path d="M18 40h20M22 40l-4 8M34 40l4 8"/><circle class="f" cx="16" cy="49" r="2.4"/><circle class="f" cx="40" cy="49" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Cone beam CT<span class="nomob"> · Veterinary &amp; ENT</span> · Ann Arbor, MI</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">CT imaging,</span><span class="l">where the patient</span><span class="l"><em>already is.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Xoran Technologies pioneered low-dose cone beam CT built for the point of care: the Next Generation vTRON and VetCAT for veterinary clinics, MiniCAT IQ+ and xCAT IQ for ENT and critical care. Since 2001, from Ann Arbor, Michigan.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How it works '+ARR+'</a><a class="btn" href="#/products">Our scanners</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The innovator</span>'+
   '<h2 class="txt" id="mani">Two University of Michigan research scientists founded Xoran in 2001 to build common-sense technology that lets physicians treat patients more efficiently. Today its scanners put 3D imaging in the exam room, the clinic and the operating room, <em>where the diagnosis happens.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1,000+</span><p class="k">CT scanners installed in the U.S. and around the world over the last two decades</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">24</span><p class="k">Patents to Xoran’s name, from a company built on University of Michigan imaging research</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+</span><p class="k">Industry awards, for a privately owned company funded by product and service sales, licences and NIH grants</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">One rotation, <em>a 3D volume.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Rotate</span><span>Project</span><span>Reconstruct</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A cone-shaped beam turns once.</h2><p>The x-ray source and a flat-panel detector turn around the patient on the gantry ring. Instead of a thin fan, the beam opens into a cone that covers the whole region of interest at once, with a low radiation dose.</p></article>'+
     '<article class="step"><h2>A projection at every angle.</h2><p>As the gantry turns, the detector records an x-ray projection from every angle. On the Next Generation vTRON a 43 × 43 cm detector gives a field of view of up to 23 × 23 cm; a VetCAT scan takes less than a minute.</p></article>'+
     '<article class="step"><h2>Reconstructed in 3D, in the room.</h2><p>The projections are reconstructed into a 3D volume of bone and soft tissue, with voxels down to 0.2 mm, ready to read in slices or 3D while the patient is still in the practice.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Low-dose CT, <em>at the point of care.</em></h2></div><p data-r>Xoran is the pioneer and U.S. market leader in point-of-care CT. Its scanners are designed to eliminate waste and inefficiency in healthcare, with specialisation in ENT and allergy, veterinary medicine, neurology, neurosurgery and beyond.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">A suite of <em>imaging solutions.</em></h2></div><p data-r>Mobile and in-office cone beam CT systems for veterinary clinics, ENT practices and critical care, with web-based viewing and archiving to match. Providers around the world rely on them to diagnose and treat patients.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Imaging scientists and <em>med-tech operators.</em></h2></div><p data-r>A co-founder who has held nearly every role at Xoran, a CEO with twenty years leading ENT and neurosurgery teams at Medtronic, and the University of Michigan researcher who helped found the company and now leads its veterinary business.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Founded</span><p data-r>In 2001 by two research scientists from the University of Michigan, building on an NIDCR research grant.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>Privately owned and self-funded through product sales, service sales, technology licences and NIH grants.</p></div>'+
    '<div><span class="lab kick" data-r>Reach</span><p data-r>Nationwide U.S. sales and service teams, international distributors, and clinical training that continues after installation.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Launches and <em>research.</em></h2></div><p data-r>The latest from Xoran and Xoran Veterinary: a new generation of the vTRON, peer-reviewed cone beam CT research, partnerships and leadership.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Next Generation vTRON</span><div><dl>'+
  [["Open bore","A 31.5-inch open bore on a compact, mobile base"],["Detector","A 43 × 43 cm detector, for a field of view up to 23 × 23 cm"],["Resolution","High-resolution protocols with 0.2–0.4 mm voxels in 3D"],["In the practice","Rolls through standard doorways and runs from a standard 20A outlet"]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Xoran Veterinary, “Xoran Veterinary Launches Next Generation vTRON with Expanded Field of View and Enhanced Imaging Capabilities”, Ann Arbor, 30 September 2026. Designed for dentistry, orthopedics, dermatology, surgery and urgent care.</p></div></div>'}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Sales, service and enquiries</span>'+
   '<h2 class="big split">Talk to <em>Xoran.</em></h2>'+
   '<p class="sub" data-r>Whether you are weighing CT for your clinic or practice, or need support for a system you already run, Xoran’s team prides itself on world-class customer service, with a direct line to a knowledgeable person.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Xoran '+ARR+'</a><a class="btn" href="#/products">See the scanners</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Xoran Technologies, LLC<br>5210 South State Road<br>Ann Arbor, MI 48108</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18007096726">(800) 709-6726</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="https://xorantech.com/veterinary/veterinary-ct-calculator/" target="_blank" rel="noopener">Veterinary ROI calculator</a><br><a class="ul" href="https://xorantech.com/white-papers/" target="_blank" rel="noopener">White papers</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>5210 South State Road<br>Ann Arbor, MI 48108</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18007096726">(800) 709-6726</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Scanners</span>vTRON · VetCAT<br>MiniCAT IQ+ · xCAT IQ</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Newsreader\',Georgia,serif;font-weight:400;font-size:64px;letter-spacing:.12em">XORAN</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Xoran Technologies, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",how:"story",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Xoran Technologies — Low-dose, point-of-care cone beam CT, Ann Arbor, MI",x:"Home"};
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
