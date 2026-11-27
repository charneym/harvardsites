/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function specRows(){return '<ul class="pfr pipe np">'+SPECS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row mf-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Sensors at scale","Reco has fabricated its quartz sensors in a scalable setting, supported by Innovate UK.",'<rect x="12" y="14" width="32" height="28"/><path class="a" d="M18 28H38"/><circle class="f" cx="38" cy="28" r="2.2"/>'],
  ["ISO 13485 certified","A quality management system built and certified to ISO 13485 for medical devices.",'<circle cx="28" cy="24" r="12"/><path d="M20 34L16 48L28 42L40 48L36 34"/><path class="a" d="M23 24L27 28L34 20"/>'],
  ["Animal study complete","An acute animal study is complete; Reco is now completing pre-clinical tests ahead of launch, pending regulatory approval.",'<path d="M8 40H48"/><path class="a" d="M10 34L20 26L28 30L40 16"/><circle class="f" cx="40" cy="16" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function certs(){var S=[
  ["Today’s gold standard","Wired invasive","Accurate, but with risks of serious transcutaneous infection, limited mobility, longer hospital stays and shorter monitoring."],
  ["Today’s alternative","Non-invasive","Current systems have not produced readings accurate and reliable enough to guide clinical judgement."],
  ["Today’s wireless","Drift and bulk","Built on low Q-factor MEMS sensors and inductive coupling, they suffer sensor drift over time and bulky implants."]];
  return '<div class="mfs">'+S.map(function(s){return '<div class="mf-site"><span class="lab" data-r>'+esc(s[0])+'</span><h3 data-r>'+esc(s[1])+'</h3><p data-r>'+esc(s[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Wireless intracranial pressure monitoring<span class="nomob"> · an Imperial College spin-out</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Pressure in the skull,</span><span class="l"><em>read without a wire.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ICP-SENSE pairs a small quartz pressure sensor, implanted through a small incision, with a smartphone-sized wearable reader that streams intracranial pressure to clinicians in real time, in hospital and beyond.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Contact Reco</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why intracranial pressure matters</span>'+
   '<h2 class="txt" id="mani">Traumatic brain injury, subarachnoid haemorrhage, hydrocephalus and intracerebral haematoma all disturb the pressure inside the skull. Monitoring it lets neurosurgeons make informed decisions, and is <em>an essential, life-saving tool.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 mmHg</span><p class="k">Pressure resolution of the quartz sensor</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">£5M</span><p class="k">Research grant from the Department of Health and Social Care and the Wellcome Trust behind the core technology</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">13485</span><p class="k">ISO-certified quality management system for medical devices</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology · ICP-SENSE</span><h2 class="d3">From a wire <em>to a wearable.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Today</span><span>Implant</span><span>Wear</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A wire through the skin.</h2><p>Wired invasive monitoring is today’s gold standard, but its lead crosses the skin: a risk of serious infection, limited mobility, longer hospital stays and shorter monitoring.</p></article>'+
     '<article class="step"><h2>A small quartz sensor.</h2><p>ICP-SENSE places a small, stable quartz pressure sensor through a small incision. Its structure ignores non-pressure changes, so it does not drift over time.</p></article>'+
     '<article class="step"><h2>Read by a wearable.</h2><p>A smartphone-sized, ultra-low-power reader worn by the patient reads the sensor without a wire through the skin, and streams intracranial pressure to clinicians in real time.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="icp-sense" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>ICP-SENSE®</span><h2 class="d2 split">New-generation <em>wireless ICP monitoring.</em></h2></div><p data-r>A truly wearable system: a small implanted sensor and a smartphone-sized reader, inherently stable, accurate, and built for longer monitoring in hospital and beyond.</p></div>'+
   specRows()+
  '</div></section>'+

  '<section class="sec light" id="programme" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programme</span><h2 class="d2 split">Built to clear <em>today’s limits.</em></h2></div><p data-r>Each of the three ways to monitor ICP today has its own limitations. Reco is completing pre-clinical tests to launch ICP-SENSE, pending regulatory approval.</p></div>'+
   caps()+
   certs()+
  '</div></section>'+

  '<section class="sec light alt" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">From Imperial <em>to Harefield.</em></h2></div><p data-r>Reco Medical is an ISO 13485-certified spin-out from Imperial College London, based at the Heart Science Centre at Harefield Hospital.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants <em>and milestones.</em></h2></div><p data-r>The funding and milestones behind ICP-SENSE. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Neurosurgeons, partners and investors</span>'+
   '<h2 class="big split">We’d love <em>to hear from you.</em></h2>'+
   '<p class="sub" data-r>For clinical collaboration, partnership or investment in ICP-SENSE, email the team at the Heart Science Centre.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Reco Medical '+ARR+'</a><a class="btn" href="#/icp-sense">About ICP-SENSE</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Reco Medical Ltd, Heart Science Centre<br>Harefield Hospital, Hill End Road<br>Harefield, Middlesex UB9 6JH</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>Reco Medical Ltd<br>Registered in England, 12169122</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Heart Science Centre, Harefield Hospital<br>Harefield, Middlesex UB9 6JH</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/icp-sense">ICP-SENSE</a><br><a class="ul" href="#/programme">Programme</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Quality</span>ISO 13485 certified<br>ICP-SENSE® pending regulatory approval</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Roboto Slab\',Georgia,serif;font-weight:300;font-size:56px;letter-spacing:.12em">RECO MEDICAL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Reco Medical Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story","icp-sense":"icp-sense",programme:"programme",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Reco Medical — wireless intracranial pressure monitoring",x:"Home"};
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
