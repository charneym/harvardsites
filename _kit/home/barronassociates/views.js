/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Aerospace and defense","Flight controls that adapt","Control system design for manned and unmanned aircraft: adaptive and fault-tolerant control, assurance of guidance, navigation and control algorithms, run-time assurance for autonomy, and intelligent UAS swarms that sample the atmosphere.",'<path d="M6 30h44"/><path class="a" d="M28 30L18 10M28 30L18 50"/><path d="M44 30l6-6M44 30l6 6"/><circle class="f" cx="28" cy="30" r="3.2"/>'],
  ["Diagnostics and prognostics","Faults found before failure","Detection, classification and prognostication of faults in mechanical and electrical systems, from helicopter gearboxes, aircraft structures, sensors and actuators to shipboard power, built on more than four decades of neural-network modelling.",'<path d="M4 34h10l5-14 6 26 6-34 5 22h16"/><path class="a" d="M44 12v8M44 26v2"/><circle class="f" cx="44" cy="34" r="2.6"/>'],
  ["Health care","Sensing built around people","Wearable sensors for physiologic monitoring, prototype medical devices and video game therapy for rehabilitation: fall detection, balance, pain, blood pressure, diabetic foot health and, now, heart failure.",'<path d="M28 48C14 38 7 30 7 21a10 10 0 0 1 21-4 10 10 0 0 1 21 4c0 9-7 17-21 27z"/><path class="a" d="M12 28h9l3-6 5 12 3-6h12"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function credits(){return '<div class="bk lt"><span class="lab kick" data-r>Technical services</span><p class="cr" data-r>'+SERV.map(function(x){return '<span>'+esc(x)+'</span>'}).join('')+'</p></div>'+
  '<div class="bk lt"><span class="lab kick" data-r>Products</span><p class="cr" data-r>'+PROD.map(function(x){return '<span>'+esc(x)+'</span>'}).join('')+'</p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Applied R&amp;D since 1983<span class="nomob"> · Charlottesville, VA</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Machines that</span><span class="l">learn, adapt</span><span class="l"><em>and stay safe.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Barron Associates builds intelligent and adaptive technologies that measure, model, predict and control complex systems, from flight controls and autonomy to wearable sensors for patient care.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/expertise">Our expertise '+ARR+'</a><a class="btn" href="#/programmes">Current programmes</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Trauma, equipment failure, severe weather: in extreme conditions even an expert answers partly by instinct. Barron Associates replaces the subjective part with <em>measurements, learned models, accurate predictions and automated control.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1983</span><p class="k">Founded by Roger L. Barron, a pioneer of polynomial neural networks; now in its second generation of ownership</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Five</span><p class="k">NASA centres among its government clients, with the Air Force, Army and Navy laboratories</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Seven</span><p class="k">NIH institutes listed as clients, from the National Institute on Aging to the National Cancer Institute</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the work is done</span><h2 class="d3">Measure, model, <em>predict and control.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Measure</span><span>Predict</span><span>Control</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Instrument the system.</h2><p>Every adaptive system starts with measurement: sensors and actuators on an airframe, or a wearable on a patient. Signal and data processing turns their streams into quantities a model can learn from.</p></article>'+
     '<article class="step"><h2>Learn it, then look ahead.</h2><p>Learned models, from the polynomial neural networks Roger Barron pioneered to probabilistic computation in Matlab and Simulink, predict how the system will behave next and how uncertain that prediction is.</p></article>'+
     '<article class="step"><h2>Keep it inside the envelope.</h2><p>When a sensor or actuator fails, adaptive and fault-tolerant control compensates, and run-time assurance holds an autonomous system to safe behaviour while its capabilities change.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="expertise" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Expertise</span><h2 class="d2 split">Three sectors, <em>one discipline.</em></h2></div><p data-r>More than three decades of research and development for government and commercial clients, in aerospace, defense and biomedical engineering. The methods carry from one to the other.</p></div>'+
   caps()+credits()+
  '</div></section>'+

  '<section class="sec dark2" id="programmes" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">In the air <em>and at the bedside.</em></h2></div><p data-r>Current and recently completed work, funded by the National Institutes of Health, the Air Force and other federal sponsors: a new heart-failure monitor, run-time assurance for autonomy, and four health technologies through clinical study.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A small group <em>of experienced researchers.</em></h2></div><p data-r>Roger Barron founded the company so that every client would get the individual attention of a small team. Most of today’s team hold advanced degrees in engineering or mathematics.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Where</span><p data-r>1410 Sachem Place in Charlottesville, Virginia, with a fixed-base flight simulator facility that clients can rent.</p></div>'+
    '<div><span class="lab kick" data-r>Clients</span><p data-r>NASA, the Air Force, Army and Navy laboratories, NIH and NSF, and companies including Boeing, Lockheed Martin, Northrop Grumman and Sikorsky.</p></div>'+
    '<div><span class="lab kick" data-r>Research partners</span><p data-r>Including Washington University School of Medicine, MIT Aeronautics and Astronautics and the Penn State Applied Research Laboratory.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards, studies <em>and patents.</em></h2></div><p data-r>The latest from Barron Associates’ research programmes.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Services, products and partnering</span>'+
   '<h2 class="big split">Talk to <em>Barron Associates.</em></h2>'+
   '<p class="sub" data-r>Technical services for government and commercial clients, products tailored to your application, or a research partnership: the right person will answer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email the team '+ARR+'</a><a class="btn" href="#/expertise">Our expertise</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>1410 Sachem Place, Suite 202<br>Charlottesville, VA 22901</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+14349731215">434.973.1215</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>1410 Sachem Place, Suite 202<br>Charlottesville, VA 22901</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+14349731215">434.973.1215</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/expertise">Expertise</a><br><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Sectors</span>Aerospace<br>Defense<br>Health care</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="50" text-anchor="middle" style="font-family:\'Source Serif 4\',Georgia,serif;font-weight:400;font-size:52px;letter-spacing:-.01em">Barron Associates</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Barron Associates, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",expertise:"expertise",services:"expertise",programmes:"programmes",programs:"programmes",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Barron Associates — intelligent and adaptive systems for aerospace, defense and health care, Charlottesville, VA",x:"Home"};
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
