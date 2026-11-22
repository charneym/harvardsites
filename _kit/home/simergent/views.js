/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Easy to learn","A full-colour touch screen with graphics and animations guides patients through every setup and alarm step, instead of the monochrome text of leading cyclers. Experienced users connect and start therapy in under five minutes.",'<rect x="8" y="12" width="40" height="28"/><path d="M8 46h40"/><path class="a" d="M17 27l6 6 13-13"/>'],
  ["Quiet, with a gentle drain","No pump: fluid moves by gravity through software-controlled valves, so Archimedes is nearly silent for most of the night. Suction pressures while draining are 74% to 84% below the maximums specified for other leading cyclers.",'<path d="M28 6v30"/><path d="M18 26l10 10 10-10"/><path class="a" d="M10 46c6-4 12-4 18 0s12 4 18 0"/>'],
  ["Shrouded connections","Patented solution line connectors keep the fluid path recessed inside a shroud, designed to make aseptic tubing and bag connections easier. They work with existing Baxter/Vantive APD bags.",'<path d="M10 28h14"/><path d="M24 18h10v20H24z"/><path class="a" d="M34 22h8M34 34h8M42 22v12"/><path d="M42 28h6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Evidence</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r><a class="ul" href="'+e[2]+'" target="_blank" rel="noopener">'+esc(e[1])+'</a></dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>In vitro findings reflect laboratory testing and do not demonstrate clinical outcomes; Simergent makes no claims about peritonitis rates. In the U.S. Archimedes is Rx only.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Home peritoneal dialysis<span class="nomob"> · FDA 510(k) cleared</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Home dialysis.</span><span class="l">Comfort. Freedom.</span><span class="l"><em>Life.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Archimedes™ is an automated peritoneal dialysis cycler designed to be mobile, simple and quiet, so patients can dialyse at home, move from room to room, and live a normal life.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/archimedes">Meet Archimedes '+ARR+'</a><a class="btn" href="#/mechanism">How it works</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="shead bo-head" aria-hidden="true"><div><span class="lab kick">About Simergent</span><h2 class="d2">Dialysis at home, <em>on patients\u2019 terms.</em></h2></div><p>A medical technology company in Oklahoma City and Chicago, developing devices that let people with kidney failure dialyse safely at home and live fuller lives.</p></div>'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Home dialysis systems are often hard to use, noisy, and leave patients feeling trapped in their bedrooms. Simergent puts patients’ needs first, with a cycler that lets them <em>live a normal life, not spend it in a clinic.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">97%</span><p class="k">Success rate in a 15-patient, 15-nurse human factors study after two hours of training</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5 min</span><p class="k">From power-up to therapy for experienced users</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4 h</span><p class="k">Battery life, with an integrated mobile cart for moving around the home</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How Archimedes works</span><h2 class="d3">Gravity does the work, <em>quietly.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Connect</span><span>Fill</span><span>Drain</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Connect, with the screen as a guide.</h2><p>Solution bags warm on the heater tray at the top of the cart. Shrouded connectors join the tubing set to the bags, and the touch screen walks the patient through each step.</p></article>'+
     '<article class="step"><h2>Fill by gravity.</h2><p>Valves open and warmed dialysate runs down to the patient’s peritoneal cavity. There is no pump, so fill pressures stay low and the room stays quiet through the night.</p></article>'+
     '<article class="step"><h2>Drain gently, measure precisely.</h2><p>Spent fluid drains down to the containers in the base at suction pressures far below other leading cyclers, while scales measure every litre in and out.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="archimedes" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Archimedes™</span><h2 class="d2 split">Built around <em>the patient.</em></h2></div><p data-r>An automated peritoneal dialysis system for adults, FDA-cleared for home and clinic use, with no care partner required. The Archimedes Standard™ and Archimedes Pro™ cyclers launch in the U.S. in 2026.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="evidence" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical and bench data</span><h2 class="d2 split">Tested with patients <em>and nurses.</em></h2></div><p data-r>A summative human factors study with Indiana University and Northwestern University supported the FDA clearance. Bench studies compare connectors, pressures and volumetric accuracy with pump-based cyclers.</p></div>'+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">People who built <em>PD systems before.</em></h2></div><p data-r>Engineers and a nephrologist with decades in peritoneal dialysis, supported by advisors and investors who include practising nephrologists.</p></div>'+
   team()+
   '<div class="bk light-bk"><span class="lab kick" data-r>Board and incubators</span><p class="cr" data-r><span>Plains Ventures / i2E</span><span>MATTER, Chicago</span><span>mHUB, Chicago</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Clearance, studies <em>and posters.</em></h2></div><p data-r>The latest from Simergent: regulatory milestones, peer-reviewed publications and data presented at ASN Kidney Week.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Simergent.</em></h2>'+
   '<p class="sub" data-r>Interested in Archimedes for your patients or your clinic, or in what we are building next? We would love to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="'+CONTACT+'" target="_blank" rel="noopener">Contact form</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Oklahoma City</span><p data-r>Simergent, LLC<br>11 NE 11th Street, Suite 229<br>Oklahoma City, OK 73104</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Online</span><p data-r><a class="ul" href="https://www.linkedin.com/company/simergent/" target="_blank" rel="noopener">LinkedIn</a><br><a class="ul" href="'+CONTACT+'" target="_blank" rel="noopener">Contact form</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>11 NE 11th Street, Suite 229<br>Oklahoma City, OK 73104</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/about">About</a><br><a class="ul" href="#/archimedes">Archimedes</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Archimedes™</span>Automated peritoneal dialysis · FDA 510(k) cleared · Rx only</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="74" text-anchor="middle" style="font-family:\'Jost\',Arial,sans-serif;font-weight:300;font-size:74px;letter-spacing:.14em">SIMERGENT</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Simergent, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",archimedes:"archimedes",mechanism:"story",evidence:"evidence",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Simergent — Archimedes™ home peritoneal dialysis",x:"Home"};
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
