/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function platRows(){return '<div class="plat">'+PLAT.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function progRows(){return '<ul class="pfr path">'+PROG.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+', details">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function coRows(){return '<ul class="pfr cos">'+COS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function fac(){
  return '<div class="fac">'+
   '<div><span class="lab kick" data-r>Key focus areas</span><ul class="fl">'+CRS.map(function(x){return '<li data-r>'+esc(x)+'</li>'}).join("")+'</ul></div>'+
   '<div><span class="lab kick" data-r>Resources</span><ul class="fl">'+["Two sterile surgical suites with wide-screen displays","Post-surgical recovery rooms","Two flat-panel C-arms, DICOM archive","IVUS","Trans-thoracic and trans-esophageal echocardiography","Peripheral vascular Doppler ultrasound","Anesthesia monitoring systems"].map(function(x){return '<li data-r>'+esc(x)+'</li>'}).join("")+'</ul></div>'+
   '<div class="fcore"><span class="lab kick" data-r>In house</span>'+
    '<h3 data-r>Pathology core</h3><p data-r>The Experimental Pathology and Immunopathology Laboratory runs histopathology and single, double and triple-antibody immunopathology on frozen or paraffin-embedded human and animal tissue.</p>'+
    '<h3 data-r>Computational lab</h3><p data-r>Fluid dynamics, finite element and fluid-structure models, mass and heat transport, electrical and electromagnetic simulation, from molecule to organ.</p>'+
   '</div></div>';
}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Drugs and devices for diagnostics and therapeutics<span class="nomob"> · San Diego</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Medical devices,</span><span class="l">designed, built</span><span class="l"><em>and tested here.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>3DT Holdings is a San Diego incubator and accelerator for device start-ups in cardiovascular and obesity-related disease, with engineers, clinicians and researchers, an accredited preclinical facility and over 200 patents.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/programmes">Our programmes '+ARR+'</a><a class="btn" href="#/facilities">Contract research</a></div></div>'+
   '<span class="lab cap">Conductance sizing balloon catheter · render</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-row"><div class="mani-in"><span class="lab kick" data-r>Why 3DT</span>'+
   '<h2 class="txt" id="mani">3DT was created to help technology start-ups take root in cardiovascular and obesity-related disease. <b class="w0">Space, engineering, mentoring and networking to capital, in one place.</b> <em>Partnering with industry, clinicians and entrepreneurs.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">200+</span><span class="k">Issued and pending patents in 3DT’s portfolio</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><span class="k">Start-up companies built on 3DT technology</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.05M</span><span class="k">NIH SBIR funding in 2026 for MitraClip planning software</span></div>'+
   '</div></div>'+
   platRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The conductance balloon</span><h2 class="d3">A balloon that <em>measures itself.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Stent</span><span>Balloon</span><span>Current</span><span>Readout</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The stent.</h2><p>Up to 85% of coronary stents are under-deployed, which leads to more repeat procedures, in-stent restenosis and thrombosis.</p></article>'+
     '<article class="step"><h2>The balloon.</h2><p>A stiffer post-dilatation balloon expands the stent, but its size in the vessel is read off an ex vivo compliance chart, not measured.</p></article>'+
     '<article class="step"><h2>The current.</h2><p>3DT’s balloon carries electrodes inside. During inflation, voltages measured in the balloon give its cross-sectional area, by Ohm’s law.</p></article>'+
     '<article class="step"><h2>The readout.</h2><p>Balloon size is shown in real time on a bedside console, the way pressure is shown today, so the stent is expanded to the size it needs.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="programmes" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">Devices and software <em>for the heart.</em></h2></div><p data-r>3DT’s active programmes, each backed by NIH SBIR awards from the National Heart, Lung, and Blood Institute.</p></div>'+
   progRows()+
  '</div></section>'+

  '<section class="sec dark" id="companies" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Companies</span><h2 class="d2 split">Start-ups grown <em>from 3DT.</em></h2></div><p data-r>Companies built on 3DT’s inventions, from conductance-enabled guidewires to a reversible device for weight loss.</p></div>'+
   coRows()+
  '</div></section>'+

  '<section class="sec light" id="facilities" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Facilities and contract research</span><h2 class="d2 split">Bench to in vivo, <em>under one roof.</em></h2></div><p data-r>Custom preclinical studies in USDA-approved, AAALAC-accredited facilities: protocols, model development, feasibility, safety and efficacy, and physician training.</p></div>'+
   fac()+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineers, surgeons <em>and scientists.</em></h2></div><p data-r>Decades of device development at Medtronic, Abbott, CoreValve and start-ups, with clinicians and researchers alongside.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent awards <em>and research.</em></h2></div><p data-r>NIH support for 3DT’s programmes, from structural heart software to pacing.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Founders, partners and sponsors</span>'+
   '<h2 class="big split">Bring your device <em>to 3DT.</em></h2>'+
   '<p class="sub" data-r>For contract research, preclinical studies, licensing or a place to start your company, write to 3DT’s founder, Dr. Ghassan Kassab.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span class="bl">11107 Roselle St.</span><span class="bl">San Diego, CA 92121</span></p></div>'+
    '<div><span class="lab" data-r>Founder</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Partner institute</span><p data-r><a class="ul" href="https://calmi2.org/" target="_blank" rel="noopener">California Medical Innovations Institute</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">San Diego</span>11107 Roselle St.<br>San Diego, CA 92121</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/companies">Companies</a><br><a class="ul" href="#/facilities">Facilities</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">More</span><a class="ul" href="#/news">News</a><br><a class="ul" href="#/contact">Contact</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Figtree\',system-ui,sans-serif;font-weight:400;font-size:62px;letter-spacing:.02em">3DT Holdings</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 3DT Holdings, LLC</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",programmes:"programmes",companies:"companies",facilities:"facilities",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"3DT Holdings — drugs and devices for diagnostics and therapeutics, San Diego",x:"Home"};
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
