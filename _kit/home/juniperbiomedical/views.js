/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function condRows(list){return '<ul class="pfr cond">'+list.map(function(c){
  return '<li'+(c[4]?' class="first"':'')+'><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab lk">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Minimally invasive","Battery-powered and smaller than a US dime, the micro-implant is placed under local anaesthesia with a minimally invasive technique into the pelvic floor.",'<rect x="14" y="22" width="28" height="20" rx="5"/><rect x="22" y="14" width="12" height="9" rx="2"/><path class="a" d="M4 18h48"/><path d="M14 31h28"/>'],
  ["Low skill to implant","It connects quickly, easily and atraumatically to distal nerves, so the procedure does not depend on a highly specialised implanter.",'<path class="a" d="M6 30c10 0 14-8 22-8s12 8 22 8"/><rect x="21" y="30" width="14" height="12" rx="3"/><path d="M28 22v8"/>'],
  ["Precise, selective, low power","Coupled directly to the target nerve, it stimulates only that nerve, with far greater control and extremely low energy into tissue, so the battery can be very small.",'<path d="M28 50V30M28 34l-10-10M28 32l11-11M18 24l-5-7M18 24l2-9M39 21l-2-8"/><path class="a" d="M39 21l7-5"/><circle class="f" cx="46" cy="16" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Precision neuromodulation<span class="nomob"> · Pelvic health</span> · Worcester, Massachusetts</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Restoring</span><span class="l">human <em>nature.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Juniper Biomedical is developing a battery-powered micro-implant that couples directly to distal pelvic nerves, for less invasive, safer and more effective therapy. Our first product is a long-term precision therapy for mixed urinary incontinence.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/solutions">Solutions</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Tens of millions of women and men are suffering silently with incontinence, pelvic pain and other pelvic health conditions. Treatment leaves care gaps, and patients manage with products off the shelf. We are building <em>dramatically better therapy.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.9M</span><p class="k">NIH SPARC Neuromod Prize funding across all three phases, Phase 3 won in January 2026</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 in 4</span><p class="k">Women affected by mixed urinary incontinence, our first indication</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20+</span><p class="k">Preclinical studies behind the micro-implant, with hundreds of prototypes</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Precision neuromodulation</span><h2 class="d3">Imagine the nerves <em>as a tree.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Today</span><span>Selective</span><span>Daily</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Energy through tissue, toward the trunk.</h2><p>Most implantable systems push energy through surrounding tissue toward a large nerve trunk. They need high power and a big battery, and they stimulate branches that have nothing to do with the target.</p></article>'+
     '<article class="step"><h2>Coupled to the distal branch.</h2><p>Juniper’s micro-implant connects directly to a distal target nerve and stimulates only that nerve, with far greater control and extremely low energy into tissue.</p></article>'+
     '<article class="step"><h2>Automatic therapy, every day.</h2><p>Because so little energy is needed, a very small battery is enough. The long-term implant delivers automatic daily therapy, aimed at lasting restoration of continence.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Smaller than a dime, <em>and getting smaller.</em></h2></div><p data-r>Our core implantable neuromodulation technology is designed to be minimally invasive, to require little skill to implant, and to deliver a precise, selective, low-power therapy directly to the nerve that matters.</p></div>'+
   caps()+
   '<p class="note-s" data-r>Caution: investigational device. Limited by federal law. Preclinical use only.</p>'+
  '</div></section>'+

  '<section class="sec dark2" id="solutions" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Solutions</span><h2 class="d2 split">One platform, <em>many pelvic conditions.</em></h2></div><p data-r>Pelvic health has received less attention than other clinical domains. For each condition and sub-population, Juniper has a specific, targeted approach: a minimally invasive, easy-to-implant solution that delivers automatic therapy.</p></div>'+
   condRows(COND)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Clinic and lab, <em>side by side.</em></h2></div><p data-r>Our leadership and operating team bring deep domain experience in the clinical and technical elements of our innovation, guided by a medical advisory board of urogynecologists, urologists and a colorectal surgeon.</p></div>'+
   team()+
   '<div class="bk light-bk"><span class="lab kick" data-r>Advisors include</span><p class="cr" data-r><span>Philip Sabes, PhD, co-founder of Neuralink</span><span>Hooks Johnston, MBA, former COO at Smith &amp; Nephew</span><span>Jeffrey Petruska, PhD, neuroplasticity</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Prizes, data <em>and milestones.</em></h2></div><p data-r>From the NIH SPARC Neuromod Prize to preclinical results at the AUA, recent news on our precision neuromodulation platform.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, clinicians and partners</span>'+
   '<h2 class="big split">Talk to <em>Juniper.</em></h2>'+
   '<p class="sub" data-r>Whether you are an investor, a clinician, a potential partner or interested in joining our team, we would like to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="https://www.linkedin.com/company/juniper-biomedical/" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Juniper Biomedical<br>UMass Medical School<br>55 Lake Avenue North<br>Worcester, MA 01655</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Online</span><p data-r><a class="ul" href="https://www.linkedin.com/company/juniper-biomedical/" target="_blank" rel="noopener">LinkedIn</a><br><a class="ul" href="'+NB+'" target="_blank" rel="noopener">Company news</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>UMass Medical School<br>55 Lake Avenue North<br>Worcester, MA 01655</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/solutions">Solutions</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">First product</span>Precision therapy for mixed urinary incontinence · investigational device</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="74" text-anchor="middle" style="font-family:\'EB Garamond\',Georgia,serif;font-weight:400;font-size:84px;letter-spacing:.06em">JUNIPER</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Juniper Biomedical</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story",solutions:"solutions",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Juniper Biomedical — precision neuromodulation for pelvic health",x:"Home"};
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
