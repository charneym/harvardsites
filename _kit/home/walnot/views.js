/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><a class="lab lk" href="'+c[6]+'"'+(c[6].charAt(0)==="#"?'':' target="_blank" rel="noopener"')+'>'+esc(c[5])+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Wearable fNIRS headband","A low-cost, wireless, multi-sensor headband covers key areas of the prefrontal cortex and uses safe, low-intensity near-infrared light to track changes in blood oxygen as a proxy for brain activity.",'<path d="M6 30c0-9 10-15 22-15s22 6 22 15"/><path d="M6 30c0 4 10 8 22 8s22-4 22-8"/><rect class="a" x="22" y="27" width="12" height="9"/><path class="a" d="M14 42c3 5 9 5 12 0M30 42c3 5 9 5 12 0"/>'],
  ["Tablet app with AR guidance","Augmented-reality guidance helps participants place the headband without supervision, then the app delivers standard, neuroimaging-ready cognitive tasks for memory, attention and self-control.",'<rect x="10" y="8" width="36" height="42"/><path d="M10 42h36"/><path class="a" d="M18 16v-0M18 16h6M18 16v6M38 16h-6M38 16v6M18 34v-6M18 34h6M38 34h-6M38 34v-6"/><path d="M24 25l3 3 6-6"/>'],
  ["HIPAA-compliant cloud portal","Researchers and clinicians manage studies, watch data quality and follow brain responses remotely across sessions spanning days or weeks, with automated analysis and flexible export.",'<path d="M16 38h26a9 9 0 0 0 0-18 13 13 0 0 0-25-3A10 10 0 0 0 16 38z"/><path class="a" d="M20 32l6-6 5 4 7-8"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function backers(){return '<div class="bk light-bk"><span class="lab kick" data-r>Recognition</span><p class="cr" data-r><span>NIH STTR Phase I, 2025</span><span>LaunchTN SBIR/STTR Matching Fund, FY26</span><span>Finalist, Stanford Founders Demo Day 2025</span><span>Finalist, Wearable Technologies Innovation World Cup 2024</span><span>Finalist, Stanford High Impact Technology Fund 2024</span></p></div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Focus<br>areas</span><div><dl>'+
  [["Cognition and emotion","Cognitive and emotional functioning, measured in the settings where people actually live"],
   ["Attention and executive processes","Attention and self-control tasks, the ground for the NIH-funded ADHD work"],
   ["Development and the lifespan","Brain health from childhood to later life, with self-setup a parent or caregiver can run"],
   ["Stress, affect and behaviour","Real-world variability that lab settings miss, captured across many sessions"]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Sources: walnot.health; NIH STTR R41MH139347 (National Institute of Mental Health); Rahimpour Jounghani et al., npj Digital Medicine 8, 271 (2025). NeuroEvidence is offered for research use.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Wearable brain imaging<span class="nomob"> · fNIRS</span> · Newark, Delaware</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Making brain health</span><span class="l">measurable,</span><span class="l"><em>at home.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Walnot builds a wearable fNIRS headband and a self-guided app so people can record research-grade brain data where they live, session after session, for precision mental health.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How it works '+ARR+'</a><a class="btn" href="#/research">For researchers</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Brain imaging has stayed in the lab: a few short visits, averaged across groups. Walnot takes it home, like a blood-pressure cuff, <em>so one person’s brain can be measured often enough to matter.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.92</span><p class="k">Peak reliability across repeated sessions at home, published in npj Digital Medicine</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50+</span><p class="k">Sessions per participant, against the 3–4 lab visits of a typical study</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;2 min</span><p class="k">AR-guided self-setup, against 1.5–2 hours of staff time per 30 minutes of conventional fNIRS data</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">From the living room <em>to the cortex.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Set up</span><span>Record</span><span>Repeat</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Set up: the app guides the band.</h2><p>On the tablet camera, augmented reality guides the participant to seat the headband over the forehead, and checks signal quality before every recording. No technician, no hours of setup.</p></article>'+
     '<article class="step"><h2>Record: light reads the cortex.</h2><p>Safe, low-intensity near-infrared light passes through scalp and skull into the prefrontal cortex and back to detectors. Changes in blood oxygen track brain activity while the app runs memory and attention tasks.</p></article>'+
     '<article class="step"><h2>Repeat: reliability builds.</h2><p>Each session goes to a HIPAA-compliant cloud portal. Over ten sessions at home, reliability climbed to 0.92, enough to see an individual brain rather than a group average.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">NeuroEvidence, <em>one platform in three parts.</em></h2></div><p data-r>A portable precision-psychiatry platform built on research-grade, non-invasive functional near-infrared spectroscopy, designed for at-home use by patients, parents and caregivers rather than by lab staff.</p></div>'+
   caps()+
   backers()+
  '</div></section>'+

  '<section class="sec dark2" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">More brain data, <em>fewer participants.</em></h2></div><p data-r>Collect more high-quality, publishable brain data with fewer participants while spending less: higher data frequency per participant, 10–50 times the data points and 90% less staff time per session.</p></div>'+
   devRows(PROG)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built by neuroimaging researchers, <em>for the people they studied.</em></h2></div><p data-r>An interinstitutional team across engineering, neuroscience, psychiatry, UX and software design, whose journey began in 2011 in Stanford University’s Department of Psychiatry and Behavioral Sciences.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Our story</span><p data-r>Years of imaging studies with children, families and older adults affected by neurodevelopmental and psychiatric conditions showed the team what mental health care still lacks.</p></div>'+
    '<div><span class="lab kick" data-r>Our vision</span><p data-r>A world where everyone, regardless of age, setting or diagnosis, has access to precise, real-time brain insights that improve care, accelerate research and empower lives.</p></div>'+
    '<div><span class="lab kick" data-r>Our values</span><p data-r>Empathy, integrity, accessibility, collaboration and purpose: scientific rigour and data privacy are non-negotiable.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Funding <em>and publications.</em></h2></div><p data-r>The latest from Walnot, from the NIH STTR award to the peer-reviewed study behind the platform.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers, clinicians and partners</span>'+
   '<h2 class="big split">Ready to run your first <em>dense-sampling study?</em></h2>'+
   '<p class="sub" data-r>Tell us about your study, your participants or your clinic, and we will show you how NeuroEvidence fits.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Walnot '+ARR+'</a><a class="btn" href="#/technology">The platform</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>4 Peddlers Row #1008<br>Newark, DE 19702</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+16503824130">+1 (650) 382-4130</a></p></div>'+
    '<div><span class="lab" data-r>Read the science</span><p data-r><a class="ul" href="'+PAPER+'" target="_blank" rel="noopener">npj Digital Medicine, 2025</a><br><a class="ul" href="'+NIH+'" target="_blank" rel="noopener">NIH STTR project</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>4 Peddlers Row #1008<br>Newark, DE 19702</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+16503824130">+1 (650) 382-4130</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platform</span>NeuroEvidence · Wearable fNIRS for precision mental health</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="62" text-anchor="middle" style="font-family:\'Hanken Grotesk\',Arial,sans-serif;font-weight:400;font-size:76px">WALNOT</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Walnot, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",how:"story",technology:"technology",research:"research",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Walnot — wearable fNIRS for precision brain imaging at home",x:"Home"};
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
