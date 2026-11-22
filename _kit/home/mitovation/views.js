/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Two inhibitory wavelengths","Most light therapies try to stimulate mitochondria. Mitovation’s patent-protected wavelengths, 750 and 950 nm, do the opposite: they gently slow cytochrome c oxidase during the critical minutes of reperfusion, so fewer free radicals form.",'<path d="M4 28c4-10 8-10 12 0s8 10 12 0 8-10 12 0 8 10 12 0"/><path class="a" d="M4 40c5-8 9-8 14 0s9 8 14 0 9-8 14 0"/><circle class="f" cx="46" cy="14" r="3"/>'],
  ["Light delivered deep","Soft, skin-conforming silicone waveguides (patent pending) spread the light across the head with no hot spots, delivering a therapeutic dose deep into the brain without substantial tissue heating.",'<path d="M8 20c6-10 34-10 40 0"/><path d="M8 20v6c6 10 34 10 40 0v-6"/><path class="a" d="M18 30v14M28 32v16M38 30v14"/><circle class="f" cx="28" cy="50" r="2"/>'],
  ["Non-invasive by design","Nothing to inject and nothing implanted: the device rests on the head. Mitovation’s infrared light technology has a robust safety profile, and the device qualifies as a Class II medical device with the FDA.",'<circle cx="28" cy="28" r="20"/><path class="a" d="M18 29l7 7 13-15"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The discovery, 2018</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From “Inhibitory modulation of cytochrome c oxidase activity with specific near-infrared light wavelengths attenuates brain ischemia/reperfusion injury”, Scientific Reports, 2018, by Drs. Sanderson, Hüttemann and colleagues. Animal and laboratory results; Mitovation’s device is investigational and not approved for clinical use.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Medical device<span class="nomob"> · Near-infrared light</span> · Ann Arbor, MI</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Protect the brain</span><span class="l"><em>when blood returns.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Mitovation uses inhibitory wavelengths of near-infrared light to prevent ischemia-reperfusion injury of the brain, such as occurs after cardiac arrest, stroke or traumatic brain injury. Non-invasive, and backed by more than a decade of research.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/evidence">The evidence</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Restarting the heart saves a life, but the blood that rushes back can injure the brain it was meant to save. Today there is no FDA-approved treatment for that reperfusion injury. Mitovation’s answer is <em>light that calms the cell.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">~$21M</span><p class="k">In grant and award funds from the NIH, DoD and others, to Mitovation and its founders</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Near-infrared wavelengths, 750 and 950 nm, that slow the mitochondrial enzyme behind the injury</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$6.5M</span><p class="k">NIH cooperative agreement supporting the LUCID device and Mitovation’s first-in-human trial</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Calm the mitochondria, <em>spare the brain.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Ischemia</span><span>Reperfusion</span><span>Light</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Blood flow stops.</h2><p>In cardiac arrest, stroke or a severe brain injury, blood and oxygen stop reaching brain cells. Their mitochondria, the power plants of the cell, run out of oxygen and stall, leaving the cell unstable and vulnerable.</p></article>'+
     '<article class="step"><h2>Blood returns, and so does the damage.</h2><p>When circulation is restored, oxygen floods back and the mitochondria overshoot. Hyperactive, they release a burst of free radicals that drives programmed cell death, inflammation and further injury to the brain.</p></article>'+
     '<article class="step"><h2>Light calms the surge.</h2><p>Applied through the skin at the moment of reperfusion, Mitovation’s two wavelengths moderately slow cytochrome c oxidase, without shutting it down. Fewer free radicals form, and more brain cells survive.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">A platform built <em>on light.</em></h2></div><p data-r>Mitovation’s non-invasive mitochondrial modulation therapy pairs patent-protected inhibitory wavelengths with a waveguide that carries them safely deep into the brain: one platform technology for several kinds of brain injury.</p></div>'+
   caps()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Infants and children</span><p data-r>Cardiac arrest in infants, and neonatal hypoxic-ischemic encephalopathy, which can lead to cerebral palsy. The first clinical device, LUCID, is built for infants.</p></div>'+
    '<div><span class="lab kick" data-r>Adults</span><p data-r>Cardiac arrest and ischemic stroke, where survivors face cognitive and functional impairments that can take months or years of therapy.</p></div>'+
    '<div><span class="lab kick" data-r>Brain injury</span><p data-r>Traumatic brain injury, studied by Mitovation’s founders in animal models alongside cardiac arrest, stroke and neonatal hypoxia-ischemia.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="evidence" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>From lab to clinic</span><h2 class="d2 split">Proven in animals, <em>headed for infants.</em></h2></div><p data-r>The technology was discovered in the lab of Dr. Maik Hüttemann at Wayne State University and proven in multiple animal models in the lab of Dr. Thomas Sanderson at the University of Michigan, from rodents to large animals, before the move to a clinical device.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Scientists and device <em>builders.</em></h2></div><p data-r>Drs. Hüttemann and Sanderson founded Mitovation in November 2016 to bring their discovery to patients, joined by leaders with decades of experience taking medical devices from bench to bedside.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>Grants and awards from the National Institutes of Health and the U.S. Department of Defense, including an NIH cooperative agreement for LUCID running to 2029.</p></div>'+
    '<div><span class="lab kick" data-r>Licence</span><p data-r>An exclusive license to the infrared technology through Wayne State University’s Office of Technology Commercialization and the University of Michigan.</p></div>'+
    '<div><span class="lab kick" data-r>Manufacturing</span><p data-r>Partnered with ISO 13485 certified, FDA compliant medical device firms for the design, engineering and manufacture of its devices for human use.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research and news</span><h2 class="d2 split">Peer reviewed, <em>NIH funded.</em></h2></div><p data-r>The science behind Mitovation is published in the journals of critical care, neuroscience and bioengineering, and its progress is in the public record of the National Institutes of Health.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Mitovation.</em></h2>'+
   '<p class="sub" data-r>Whether your interest is post-cardiac arrest care, neonatal hypoxic injury, stroke or traumatic brain injury, Mitovation would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Mitovation '+ARR+'</a><a class="btn" href="#/evidence">See the evidence</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Mitovation, Inc.<br>NCRC, Building 200<br>1600 Huron Parkway<br>Ann Arbor, MI 48109</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Home of the science</span><p data-r>University of Michigan<br>Wayne State University</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>1600 Huron Parkway<br>Ann Arbor, MI 48109</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/evidence">Evidence</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/research">Research</a></div>'+
   '<div class="c"><span class="lab">Therapy</span>Near-infrared light<br>Non-invasive device</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Barlow Semi Condensed\',Arial,sans-serif;font-weight:600;font-size:62px;letter-spacing:.01em">MITOvation</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Mitovation, Inc.</span><span class="lab">Concept website · Investigational device</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",platform:"platform",evidence:"evidence",team:"team",research:"research",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Mitovation — Near-infrared light to protect the brain after cardiac arrest, stroke and brain injury, Ann Arbor, MI",x:"Home"};
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
