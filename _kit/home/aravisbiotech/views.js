/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function progRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p>'+(c[5]?'<a class="lab lk" href="'+c[5]+'" target="_blank" rel="noopener">Paper '+ARR+'</a>':'<span class="lab lk dimk">In development</span>')+'</li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["For physicians","A faster, more conclusive check on how a fracture is healing. The sensor makes the radiographs already taken at follow-up more useful, because the image now carries a measurement.",'<rect x="12" y="8" width="32" height="40"/><path d="M20 40l6-16 4 8 6-14"/><path class="a" d="M18 18h20"/>'],
  ["For patients","Better tracking of healing, quicker rehabilitation, and a clearer answer to the question every patient asks: when can I safely put weight on it?",'<path d="M28 8v40"/><path d="M18 18c0 6 4 10 10 10s10-4 10-10"/><path class="a" d="M14 48h28"/>'],
  ["For risk and cost","Fewer complications, revisions and deaths. Fracture reductions can be done faster, with less liability, and with the possibility of cost savings across the episode of care.",'<path d="M10 44h36"/><path d="M14 18l10 10 8-6 12 14"/><path class="a" d="M40 36h4v-4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function backing(){return '<div class="bk light-bk"><span class="lab kick" data-r>Support and IP</span><p class="cr" data-r><span>NIH NIAMS SBIR</span><i>·</i><span>NIH NIGMS</span><i>·</i><span>NSF I-Corps</span><i>·</i><span>SCRA acceleration grant</span><i>·</i><span>US 10,667,745 B2 and US 11,013,410 B2, licensed to Aravis</span></p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Smart orthopaedic implants<span class="nomob"> · Greenville, SC</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Fracture healing,</span><span class="l">measured on the</span><span class="l"><em>X-ray you already take.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Aravis BioTech puts passive sensors on implanted orthopaedic devices, so a routine follow-up radiograph shows how much load the hardware still carries: an objective read on whether a fracture has healed.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/programs">Our programs</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Reading fracture healing from a radiograph is subjective and imprecise. When healing is slow, hardware and bone fatigue and fail, and frail patients pay for it with revision surgery. Aravis gives clinicians a number, <em>so they can measure healing with confidence.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">300k+</span><p class="k">Hip fractures each year in the United States that need surgical stabilisation</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20%+</span><p class="k">Hip fixation failure rate in elderly patients with comorbidities, against about 5% on average</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">56%</span><p class="k">One-year mortality for patients readmitted within 30 days of surgery, against 19% for those who are not</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the sensor works</span><h2 class="d3">A straight pin, <em>a bending screw.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fix</span><span>Load</span><span>Heal</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A pin inside the screw.</h2><p>A hip fracture is fixed with a sliding hip screw. Aravis adds a passive, radiopaque tungsten pin that threads into the screw’s existing threads and runs straight down its cannula to the tip. No battery, no electronics.</p></article>'+
     '<article class="step"><h2>Standing bends the screw.</h2><p>When the patient bears weight on an unhealed fracture, the screw flexes. The pin stays straight, so the screw tip moves relative to the pin end, and the gap is plain to see on a loaded radiograph.</p></article>'+
     '<article class="step"><h2>Healing takes the load.</h2><p>As the callus strengthens, it carries the load and the bending fades. In Aravis’s ovine study the sensor showed implant loading from week 3 until week 8, then none; the extracted femur showed no measurable loading up to 400 N.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Sensors on the implant, <em>read by radiography.</em></h2></div><p data-r>Our goal is to non-invasively detect and monitor disease to inform clinical decisions, using radiographs already acquired as standard of care. The sensors are passive metal devices that attach to existing implants through threaded holes they already have.</p></div>'+
   caps()+
   backing()+
  '</div></section>'+

  '<section class="sec dark2" id="programs" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">One platform, <em>four orthopaedic uses.</em></h2></div><p data-r>Solutions for hip and long bone fractures, trauma plates, spinal fusion and detecting infection, each built on years of NIH and DoD funded research at Clemson University.</p></div>'+
   progRows(PROG)+
   '<p class="note-s disc" data-r>Devices shown are under research and development. They have no approved indications for use, no pending or approved PMA or 510(k), and are not approved for clinical use by the FDA or any other regulatory body.</p>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Implants, surgery <em>and sensing.</em></h2></div><p data-r>Experts in orthopaedic implants, orthopaedic surgery, sensing and imaging, mechanical testing and business development, who have worked together across three multiyear NIH grants and a DoD grant.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="publications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Publications</span><h2 class="d2 split">Peer-reviewed, <em>from bench to in vivo.</em></h2></div><p data-r>Selected papers and awards behind the platform, from the first cadaver test of a radiographic strain sensor to the 2025 ovine hip fracture study.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Aravis.</em></h2>'+
   '<p class="sub" data-r>Have a question, or want to learn more about measuring fracture healing with implanted sensors? We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Aravis '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Aravis BioTech LLC<br>Greenville, South Carolina</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Research home</span><p data-r>The founders’ research is based at Clemson University, with partners including CURF and Prisma Health.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Aravis BioTech LLC<br>Greenville, South Carolina</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/publications">Publications</a></div>'+
   '<div class="c"><span class="lab">Note</span>Devices are under research and development and not approved for clinical use.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Hanken Grotesk\',Arial,sans-serif;font-weight:500;font-size:58px;letter-spacing:.12em">ARAVIS BIOTECH</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Aravis BioTech LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story",programs:"programs",team:"team",publications:"publications",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Aravis BioTech — implanted sensors that measure fracture healing on a plain X-ray",x:"Home"};
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
