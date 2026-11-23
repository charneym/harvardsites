/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Automated, instantaneous","An automated closure solution for catheter-based therapies that closes the access site the moment the large-bore sheath comes out, with no manual compression.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M28 16v12l8 5"/><circle class="f" cx="28" cy="28" r="2.6"/>'],
  ["The surgical purse-string, automated","A patented dynamic cinching mechanism replicates the surgical gold standard: suture-based closure with an extravascular implant around the access site.",'<circle cx="28" cy="28" r="16" stroke-dasharray="3 3.6"/><path class="a" d="M17 17l22 22M39 17L17 39"/><circle class="f" cx="28" cy="28" r="4"/>'],
  ["Guidewire access kept","Guidewire access is maintained during the procedure, and the system is designed to lower failure rates, especially in calcified vessels.",'<path d="M6 40C18 40 22 16 34 16S50 28 50 28"/><path class="a" d="M6 44C18 44 24 20 36 20"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From xDot&#8217;s February 2024 release, ClinicalTrials.gov, MassDevice and TCTMD. The xDot Access Management System is an investigational device and is not available for sale.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Large-bore vascular closure<span class="nomob"> · Pivotal IDE study</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Close the access</span><span class="l">site, <em>instantly.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>xDot Medical is an early-stage medical device company developing an automated vascular closure solution for catheter-based therapies that provides instantaneous closure of the access site.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/clinical">The pivotal study</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why closure</span>'+
   '<h2 class="txt" id="mani">Catheter-based therapies are revolutionizing treatment for millions of patients needing cardiovascular care. Yet current closure solutions for large-bore access are inadequate. <em>xDot closes the access site at once.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3M+</span><p class="k">Patients a year expected to be served by large-bore catheter therapies by 2030, by xDot&#8217;s estimate</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">8 of 8</span><p class="k">First-in-human closures with immediate hemostasis, five arterial and three venous</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">266</span><p class="k">Subjects planned in the pivotal IDE study, in femoral arterial and venous cohorts</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">A surgical purse-string, <em>automated.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Access</span><span>Implant</span><span>Close</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Large-bore access.</h2><p>Transcatheter procedures such as TAVR and EVAR reach the heart and aorta through a large-bore sheath in the common femoral artery, or the femoral vein.</p></article>'+
     '<article class="step"><h2>Implant around the site.</h2><p>The xDot Access Management System delivers the xDot Implant Unit around the access site on the vessel, while guidewire access is maintained.</p></article>'+
     '<article class="step"><h2>Cinched closed, at once.</h2><p>As the sheath comes out, a dynamic cinching mechanism draws the suture closed like a surgical purse-string, for instantaneous closure without manual compression.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The xDot Access <em>Management System.</em></h2></div><p data-r>Built on proven suture-based closure with an extravascular implant, the xDot AMS is engineered for femoral arterial and venous closure after large-bore procedures, where current closure solutions have unacceptably high failure rates.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical</span><h2 class="d2 split">From first in human <em>to a pivotal study.</em></h2></div><p data-r>After a first-in-human study in 2024 and a US early feasibility study that opened in June 2026, FDA approved xDot&#8217;s IDE in July 2026 for a pivotal study of closure of large-bore femoral arterial and venous access sites.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Device builders and <em>structural heart leaders.</em></h2></div><p data-r>A Minnesota medical device team, with a board and medical advisors from cardiac surgery and interventional cardiology at Abbott Northwestern, the University of Michigan, New York Presbyterian and the Karolinska Institute.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>xDot.</em></h2></div><p data-r>Clinical results, regulatory milestones and company announcements.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, investors and partners</span>'+
   '<h2 class="big split">Talk to <em>xDot Medical.</em></h2>'+
   '<p class="sub" data-r>If you have a query or interest in learning more about our company, please email us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to xDot '+ARR+'</a><a class="btn" href="#/clinical">See the clinical program</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>xDot Medical Inc<br>7538 Urbandale Lane N<br>Maple Grove, MN 55311</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@xdotmedical.com</a></p></div>'+
    '<div><span class="lab" data-r>Clinical trials</span><p data-r>Study details and sites are listed on <a class="ul" href="'+CT_P+'" target="_blank" rel="noopener">ClinicalTrials.gov</a>.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>7538 Urbandale Lane N<br>Maple Grove, MN 55311</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@xdotmedical.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Caution</span>Investigational device. Not available for sale.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Montserrat\',sans-serif;font-weight:600;font-size:76px">xDot MEDICAL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 xDot Medical Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",clinical:"clinical",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"xDot Medical — instant closure for large-bore vascular access",x:"Home"};
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
