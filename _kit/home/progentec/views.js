/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk'+(c[3].indexOf("Mayo")===0||c[3].indexOf("Available")===0?' av':'')+'">'+(c[3].indexOf("Available")===0?'Available now':c[5]?'Next':'In the pipeline')+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["aiSLE® DX laboratory tests","Assay-based blood tests, designed and validated to give clinicians and patients objective measures of lupus disease activity and risk.",'<path d="M22 6h12M24 6v34a4 4 0 0 0 8 0V6"/><path class="a" d="M24 26h8"/><circle class="f" cx="28" cy="33" r="2"/>'],
  ["[AutoimmuneCorner]™","Remote monitoring and sensor-driven data meet health coaching. The Sidekick Report keeps providers and patients on the same page between visits.",'<rect x="17" y="6" width="22" height="40"/><path d="M25 41h6"/><path class="a" d="M21 27h4l3-7 4 13 3-6h4"/>'],
  ["LupusCorner® Research","A 21 CFR Part 11-compliant app for fully remote clinical studies, with eConsent, validated patient-reported outcomes and on-phone tasks.",'<path d="M8 44V12h40v32z"/><path d="M8 20h40"/><path class="a" d="M16 32l6 6 12-12"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Our laboratory</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From progentec.com (About our Laboratory) and Progentec’s January 2025 announcement of the CMS payment determination for PLA codes 0446U and 0447U.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Lupus and autoimmune diagnostics<span class="nomob"> · Oklahoma City</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">See a lupus flare</span><span class="l"><em>before it arrives.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Progentec Diagnostics measures immune mediators in a single blood sample, so clinicians can see the risk of a lupus flare up to 12 weeks ahead and manage lupus, multiple sclerosis and other autoimmune diseases proactively.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Lupus flares drive hospital stays and irreversible organ damage, and today’s activity scales can’t see them coming. Progentec builds the data for <em>proactive care.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">86%</span><p class="k">Of people with lupus rank the unpredictability of flares as their top challenge</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">12 wk</span><p class="k">The window in which the aiSLE DX Flare Risk Index informs a patient’s risk of a flare</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">120K+</span><p class="k">Lupus Warriors and caregivers who turn to LupusCorner every quarter</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How aiSLE DX works</span><h2 class="d3">One blood draw, <em>a look ahead.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sample</span><span>Measure</span><span>Act</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A routine blood draw.</h2><p>The rheumatologist orders the test through Mayo Clinic Laboratories. One tube of blood carries the soluble immune mediators whose levels shift ahead of a lupus flare.</p></article>'+
     '<article class="step"><h2>Read the immune mediators.</h2><p>In Progentec’s CLIA-certified, CAP-accredited lab, the sample runs on multi-analyte microfluidic cartridges that measure a panel of immune mediators at once, reproducibly and without cross-reactivity.</p></article>'+
     '<article class="step"><h2>Act before the flare.</h2><p>The Flare Risk Index informs the risk of a flare within the next 12 weeks, and the Disease Activity Index measures activity today. With actionable data, care can change course early.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">Biologic and digital biomarkers, <em>together.</em></h2></div><p data-r>Autoimmune diseases wax and wane, and lack objective measures of activity. Progentec’s platform combines blood biomarkers with continuous remote monitoring, to give clinicians unparalleled insight into a patient’s health trajectory.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From lupus <em>to MS and beyond.</em></h2></div><p data-r>Two lupus tests are in clinical use through Mayo Clinic Laboratories. Behind them: lupus risk classification, digital biomarkers, and a multiple sclerosis panel licensed from Stanford and OMRF.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people behind <em>aiSLE DX.</em></h2></div><p data-r>Rheumatology, immunology, clinical laboratory and diagnostics leaders in Oklahoma City, with a board drawn from Pfizer, Mayo Clinic and venture investors.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NIH SBIR awards from NIAID since 2019, an OCAST Industry Innovation Grant, and venture investment.</p></div>'+
    '<div><span class="lab kick" data-r>Partners</span><p data-r>Mayo Clinic Laboratories offers both aiSLE DX tests; research collaborations with GSK and the Oklahoma Medical Research Foundation.</p></div>'+
    '<div><span class="lab kick" data-r>Patients first</span><p data-r>LupusCorner and its Patient Innovation Council make sure the patient community’s insights shape what Progentec builds.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards, partners <em>and research.</em></h2></div><p data-r>The latest from Progentec, Mayo Clinic Laboratories and the NIH.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, researchers and partners</span>'+
   '<h2 class="big split">Talk to <em>Progentec.</em></h2>'+
   '<p class="sub" data-r>Whether you want to order aiSLE DX for your practice, run a decentralized study or partner on autoimmune diagnostics, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Progentec '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Progentec Diagnostics, Inc.<br>655 Research Parkway, Suite 538<br>Oklahoma City, OK 73104</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>833-587-8739</p></div>'+
    '<div><span class="lab" data-r>Ordering the tests</span><p data-r>aiSLE DX Flare Risk Index and Disease Activity Index are available to ordering physicians through Mayo Clinic Laboratories.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>655 Research Parkway, Suite 538<br>Oklahoma City, OK 73104</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Tests</span>aiSLE® DX Flare Risk Index · aiSLE® DX Disease Activity Index</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:300;font-size:58px;letter-spacing:.1em">progentec</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Progentec Diagnostics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Progentec Diagnostics — blood tests that help clinicians stay ahead of lupus",x:"Home"};
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
