/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Small magnetic implants","Pairs of small magnetic beads are implanted in the muscles of the residual limb. In MIT&#8217;s research the beads were 3 millimetres across, set at least 3 centimetres apart.",'<circle cx="18" cy="34" r="7"/><circle cx="40" cy="20" r="7"/><path class="a" d="M24 30l10-6"/><circle class="f" cx="18" cy="34" r="2.2"/><circle class="f" cx="40" cy="20" r="2.2"/>'],
  ["An external sensing array","Magnetic field sensors outside the body read the position of each bead wirelessly, through the skin.",'<rect x="8" y="14" width="40" height="28"/><path d="M8 24h40M8 32h40M18 14v28M28 14v28M38 14v28"/>'],
  ["Advanced tracking algorithms","Software turns the bead positions into muscle length and speed in real time, a direct signal of what the person intends the prosthesis to do.",'<path d="M6 40c8 0 10-22 18-22s8 14 14 14 8-10 12-10"/><path class="a" d="M6 46h44"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The study</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From the ClinicalTrials.gov record NCT07195461, sponsored by MuscleMetrix, LLC. Investigational device.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Magnetomicrometry<span class="nomob"> · Prosthetic control</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The science</span><span class="l">of <em>volition.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>MuscleMetrix seeks to advance the science of volition, allowing persons with limb loss to directly control their prosthesis through thought.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/clinical">The clinical study</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why muscle</span>'+
   '<h2 class="txt" id="mani">A muscle&#8217;s length and speed say what a person means to do. <em>Magnetomicrometry reads them directly, inside the amputated limb,</em> to drive the prosthesis.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">37&#8202;&#181;m</span><p class="k">Precision of bead tracking reported by MIT researchers in 2021</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3&#8202;ms</span><p class="k">Time to obtain each measurement in that research</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6 years</span><p class="k">Of MIT research behind MuscleMetrix</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">From muscle <em>to motion.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Implant</span><span>Sense</span><span>Control</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Two beads in the muscle.</h2><p>Small magnetic beads are implanted in a muscle of the residual limb, where, MIT researchers found, they could remain for a lifetime without needing to be replaced.</p></article>'+
     '<article class="step"><h2>Read through the skin.</h2><p>An external magnetic sensing array tracks each bead; the distance between them gives the muscle&#8217;s length as it contracts and relaxes.</p></article>'+
     '<article class="step"><h2>The prosthesis follows.</h2><p>Tracking algorithms turn muscle length and speed into commands for a bionic prosthesis, so the ankle moves as the person intends.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Magneto&shy;micrometry, <em>our first product.</em></h2></div><p data-r>The company&#8217;s first product is magnetomicrometry, a technology that enables the precise sensing of muscle dynamics within the amputated limb using small magnetic implants, external magnetic sensing arrays, and advanced tracking algorithms.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical</span><h2 class="d2 split">Now in a first <em>clinical study.</em></h2></div><p data-r>An early feasibility study at Brigham and Women&#8217;s Hospital is evaluating the Magnetic Bead Tracking system with a bionic external prosthesis for people with transtibial amputation.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded by <em>Hugh Herr.</em></h2></div><p data-r>MuscleMetrix is an advanced technology company in Bedford, Massachusetts, founded by MIT Professor Hugh Herr and grounded in six years of MIT research.</p></div>'+
   team()+
  '</div></section>'+
  '<section class="sec dark" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">Built on <em>MIT research.</em></h2></div><p data-r>Magnetomicrometry was developed in Professor Hugh Herr&#8217;s group at MIT and first reported in Science Robotics in 2021, then validated in running animals in 2022.</p></div>'+
   news()+
  '</div></section>'+

  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact us</span>'+
   '<h2 class="big split">Talk to <em>MuscleMetrix.</em></h2>'+
   '<p class="sub" data-r>For partnerships, research collaboration and investor enquiries, write to us or call the Bedford office.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to MuscleMetrix '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>MuscleMetrix LLC<br>209 Burlington Road, Suite 217<br>Bedford, MA 01730</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">admin@musclemetrix.com</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+16179327698">617-932-7698</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>209 Burlington Road, Suite 217<br>Bedford, MA 01730</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">admin@musclemetrix.com</a><br><a class="ul" href="tel:+16179327698">617-932-7698</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/research">Research</a></div>'+
   '<div class="c"><span class="lab">Study</span><a class="ul" href="'+CT+'" target="_blank" rel="noopener">NCT07195461</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Quicksand\',sans-serif;font-weight:400;font-size:84px">MuscleMetrix</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 MuscleMetrix LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",clinical:"clinical",research:"research",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"MuscleMetrix — the science of volition",x:"Home"};
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
