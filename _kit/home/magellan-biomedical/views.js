/* ================= VIEWS (home only: Technology / Applications / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><div class="pn"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[2])+'</span></div><p>'+esc(c[3])+'</p></li>'}).join("")+'</ul>'}
function evid(){return '<ul class="evd">'+EVID.map(function(e){return '<li data-r><span class="lab">'+esc(e[0])+'</span><span class="ev">'+esc(e[1])+'</span><p>'+esc(e[2])+'</p></li>'}).join("")+'</ul>'}
function mhList(lab,L){return '<div class="mh-group"><p class="mh-label">'+esc(lab)+'</p><ul class="mh-list">'+L.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span><span aria-hidden="true"></span></div></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws newslist">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Cardiovascular interventions<span class="nomob"> · Richmond Hill, Ontario</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Steer the catheter.</span><span class="l"><em>Cross the lesion.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Magellan Biomedical is developing the CathPilot, a catheter steering, tracking and navigation system that gives interventionalists precise control of the device tip and shows it in 3D against the patient’s anatomy. First use: peripheral angioplasty.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How it works '+ARR+'</a><a class="btn" href="#/contact">Partner with us</a></div></div>'+
   '<p class="lab hcap" data-r>CathPilot’s distal assembly, rendered: nitinol frame, steering tendons and inner catheter.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">More than ten million catheter procedures are performed each year, steered by a flat X-ray picture, and up to 30 per cent fail or have to be repeated. CathPilot puts control <em>where the procedure is decided: at the tip.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">10M+</span><span class="k">Catheter-based procedures performed every year to diagnose and treat cardiovascular disease</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100%</span><span class="k">Of targets reached in a tortuous vessel model, against 69% and 31% for conventional catheters</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4×</span><span class="k">Up to four times the guidewire force delivery and pushability, in preclinical testing</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Born in the clinic</span><p data-r>Founded by engineers, scientists and vascular surgeons from Sunnybrook, the University of Toronto and Toronto Metropolitan University.</p></div>'+
    '<div><span class="lab kick" data-r>Peer-reviewed</span><p data-r>Performance, safety and feasibility published in IEEE Transactions on Biomedical Engineering in 2023.</p></div>'+
    '<div><span class="lab kick" data-r>Built for manufacture</span><p data-r>Supported by NRC IRAP in 2025 to redesign CathPilot’s components for molding and lower-cost assembly.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">A pilot for the tip <em>of the catheter.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Occlusion</span><span>Deploy</span><span>Steer</span><span>Cross</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A blocked artery, seen in 2D.</h2><p>Plaque narrows or closes the vessel. Today’s catheters and guidewires are steered from a 2D X-ray projection, which makes the tip hard to control reliably, and a wire that cannot cross the plaque ends the procedure.</p></article>'+
     '<article class="step"><h2>The frame opens.</h2><p>CathPilot’s self-expandable frame contracts to pass through narrow vessels and deploys from the sheath where it is needed, giving the inner catheter a platform inside the artery.</p></article>'+
     '<article class="step"><h2>The tip is steered, and tracked.</h2><p>Tendons strung across the frame aim the catheter tip, and the tracking system shows the device in 3D relative to the patient’s anatomy rather than as a shadow on a flat image.</p></article>'+
     '<article class="step"><h2>The lesion is crossed.</h2><p>With up to four times the force delivery and pushability, the guidewire crosses the occlusion. Ex vivo, CathPilot crossed 83% of fresh and 100% of fixed chronic total occlusion samples.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">One navigation tool, <em>many vessels.</em></h2></div><p data-r>CathPilot controls the tip of any flexible device, a guidewire or a catheter, so the same platform reaches across cardiovascular interventions.</p></div>'+
   progs()+
  '</div></section>'+

  '<section class="sec light" id="evidence" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Preclinical evidence</span><h2 class="d2 split">Better on <em>every metric tested.</em></h2></div><p data-r>CathPilot was compared with conventional steerable and non-steerable catheters in a phantom, ex vivo and in vivo. The authors conclude it is safe and feasible, and could reduce failure and complication rates in peripheral interventions.</p></div>'+
   evid()+
   '<p class="crq" data-r><a class="lk" href="'+TBME+'" target="_blank" rel="noopener">Zhou et al., IEEE Transactions on Biomedical Engineering, 2023 '+ARR+'</a></p>'+
  '</div></section>'+

  '<section class="sec light tmx" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Surgeons, scientists <em>and engineers.</em></h2></div><p data-r>A team experienced in biomedical engineering, cardiovascular imaging and image-guided therapy, working with leading research institutions and hospitals.</p></div>'+
   '<section class="mh" data-r>'+mhList("Leadership",LEAD)+mhList("Directors and advisors",ADV)+'</section>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From prototype <em>to production.</em></h2></div><p data-r>A full working prototype, peer-reviewed results, a CIHR Project Grant with Toronto Metropolitan University, and NRC IRAP support for manufacturing.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Talk to the team <em>behind CathPilot.</em></h2>'+
   '<p class="sub" data-r>Magellan Biomedical works with research institutions, hospitals and industry to bring CathPilot to patients. Write or call the team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+TELH+'">'+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Magellan Biomedical Inc.<br>Richmond Hill, Ontario<br>Canada</p></div>'+
    '<div><span class="lab" data-r>Email and telephone</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+TELH+'">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Research partner</span><p data-r>Toronto Metropolitan University<br>CIHR Project Grant</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Magellan Biomedical Inc.<br>Richmond Hill, Ontario, Canada</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+TELH+'">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Catheter navigation for minimally<br>invasive cardiovascular therapy</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 80" aria-hidden="true"><text x="320" y="64" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-weight:600;font-size:76px;letter-spacing:4px">MAGELLAN</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Magellan Biomedical Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",how:"story",technology:"story",applications:"applications",evidence:"evidence",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Magellan Biomedical — the CathPilot catheter navigation system, Richmond Hill, Ontario",x:"Home"};
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
