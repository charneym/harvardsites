/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["SyntrFuge System","Fat cells are injected into the AdipoChambers™ and passed back and forth through the AdipoSets™, creating microfat with high cell viability. Single-use and disposable, at the point of care.",'<rect x="6" y="22" width="12" height="12"/><rect x="38" y="22" width="12" height="12"/><path class="a" d="M18 28h20"/><path d="M24 24v8M28 24v8M32 24v8"/>'],
  ["SyntrFPU 360","The accessory device that spins the AdipoSets, so microsizing is repeatable and reproducible: a high-quality output, ready to be injected back into the body with ease.",'<path d="M10 20h36v26H10z"/><ellipse class="a" cx="28" cy="20" rx="18" ry="6"/><circle class="f" cx="28" cy="20" r="2.4"/><path d="M16 32h10"/>'],
  ["One platform, many tissues","The same CD-microfluidic platform can dissociate tumour tissue into single cells for diagnostics, and microsize the patient’s own fat for wounds, joints and reconstruction.",'<circle cx="28" cy="28" r="19"/><circle class="f" cx="28" cy="28" r="3"/><path class="a" d="M28 9v8M47 28h-8M28 47v-8M9 28h8"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Wound care, so far</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From Syntr’s NIH SBIR project summaries (R44TR004975, 2026; 1R43DK147508, 2026). Preliminary data, as reported there.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>FDA-cleared<span class="nomob"> · Automated microfat</span> · Irvine, CA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The body’s own fat,</span><span class="l">processed</span><span class="l"><em>automatically.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>The SyntrFuge™ System is the first and only FDA-cleared device that automates the processing of a patient’s own fat into microfat for healing and rejuvenation: in office, with no operating room, in as little as 45 minutes.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">See how it works '+ARR+'</a><a class="btn" href="#/applications">Applications</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">How microfat is processed is incredibly important to its viability, and manual methods are cumbersome and user-dependent. Founded by biomedical engineers and experienced surgeons, Syntr automated it, for results that are <em>dependable every time.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;10 min</span><span class="k">Tissue processing time in the SyntrFuge System, the only FDA-cleared automated microfat processing system on the market</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">45 min</span><span class="k">For the whole microfat procedure, in office: syringe liposuction needs no general anaesthesia, so no OR suite</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.05M</span><span class="k">NIH SBIR Phase II award, 2025, to automate the FDA-cleared platform for rapid tissue microsizing</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Three steps, <em>one visit.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Harvest</span><span>Process</span><span>Reinject</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Harvest in the office.</h2><p>Syringe vacuum liposuction collects the patient’s own fat quickly, in the convenience of an office setting. No general anaesthesia, so no expensive OR suite.</p></article>'+
     '<article class="step"><h2>Let the system microsize it.</h2><p>The fat goes into the AdipoChambers™ and passes back and forth through the AdipoSets™, spun by the SyntrFPU 360. Automation gives consistent microfat with high cell viability, every time.</p></article>'+
     '<article class="step"><h2>Reinject, precisely.</h2><p>The patient’s own processed tissue goes back through a blunt-tip cannula. Microfat allows smaller cannulas, for safer and more precise injection.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="system" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The SyntrFuge System</span><h2 class="d2 split">Built for consistency, <em>and for ease.</em></h2></div><p data-r>A simple, easy-to-use device and its spinning accessory: automation means easier operation, faster procedures and less variability in output, at a cost that suits patients and practices.</p></div>'+
   caps()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Cleared</span><p data-r>FDA 510(k) clearance in 2021 for surgical specialties when the transfer of harvested fat tissue is desired.</p></div>'+
    '<div><span class="lab kick" data-r>Protected</span><p data-r>US and international patents granted and pending on the SyntrFuge System.</p></div>'+
    '<div><span class="lab kick" data-r>Natural</span><p data-r>The body’s own adipose tissue, without chemicals or enzymes: an autologous alternative to synthetic fillers.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">From the aesthetic clinic <em>to the wound clinic.</em></h2></div><p data-r>Syntr works with plastic surgeons, orthopaedic surgeons, wound care specialists and veterinary surgeons, among others, to bring the device into more specialties, with research funded by the National Institutes of Health.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineers and surgeons, <em>from UC Irvine.</em></h2></div><p data-r>Three biomedical engineers from the University of California, Irvine founded Syntr and built the SyntrFuge System, with a multidisciplinary advisory committee of surgeons from leading universities.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Clearance, grants <em>and studies.</em></h2></div><p data-r>The latest from Syntr Health Technologies.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Work with <em>Syntr.</em></h2>'+
   '<p class="sub" data-r>Aesthetics, wound care or a specialty of your own: Syntr is building a network of clinician partners, and would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+PMAIL+'">Become a partner '+ARR+'</a><a class="btn" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Syntr Health Technologies, Inc.<br>5270 California Ave #300<br>Irvine, CA 92617</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19499925728">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Partners</span><p data-r><a class="ul" href="mailto:'+PMAIL+'">'+PMAIL+'</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>5270 California Ave #300<br>Irvine, CA 92617</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19499925728">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/system">System</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">SyntrFuge™ System</span>FDA-cleared<br>Automated microfat processing</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Work Sans\',Arial,sans-serif;font-weight:700;font-size:64px;letter-spacing:-.03em">Syntr Health</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Syntr Health Technologies, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",how:"story",system:"system",applications:"applications",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Syntr Health Technologies — The SyntrFuge System, automated microfat processing, Irvine, CA",x:"Home"};
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
