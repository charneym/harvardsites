/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="rg-tm">'+gs.map(function(g){return '<div class="rg-tg"><span class="lab kick" data-r>'+esc(g)+'</span><ul>'+by[g].map(function(p){
    return '<li data-r><span class="rg-nm">'+esc(p.name)+'</span><span class="rg-rl">'+esc(p.title)+'</span>'+(p.sum?'<p class="kl-sum">'+esc(p.sum)+'</p>':'')+'</li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function credit(lab,list,cls){return '<div class="kl-pa'+(cls?' '+cls:'')+'"><span class="lab kick" data-r>'+lab+'</span><ul data-r>'+list.map(function(p){return '<li>'+esc(p)+'</li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li data-r><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Virtuose 6D","The flagship","High force feedback on all six degrees of freedom in a large workspace, for teleoperation and scale-one simulation. The High Force version triples the continuous force in the same form factor.",'<path d="M10 48h36M16 48v-6c0-3 24-3 24 0v6"/><path d="M28 39V30"/><path class="a" d="M28 30L18 16L36 10"/><circle class="f" cx="18" cy="16" r="2.4"/><path d="M36 10l2 9"/>'],
  ["Desktop 6D","Compact, fully active","Six active degrees of freedom at desktop size, with an analog finger gripper as a seventh and one programmable button, on the same software API as the Virtuose.",'<rect x="12" y="38" width="32" height="10"/><path class="a" d="M28 38V28l10-8"/><circle class="f" cx="38" cy="20" r="2.4"/><path d="M38 20l4 8"/>'],
  ["Scale1","The largest workspace","A motorised carrier that extends a Virtuose 6D to the size of a room, a screen or a CAVE: the haptic interface with the biggest workspace in the world.",'<path d="M6 12h44M10 12v36M46 12v36"/><path class="a" d="M22 12v10h12V12"/><path d="M28 22v10l8 6"/><circle class="f" cx="36" cy="38" r="2.4"/>'],
  ["TREX","No-code teleoperation","TeleRobotics EXtender, Haption’s generic teleoperation controller, links a Virtuose to robots from Universal Robots, KUKA, Fanuc, ABB, Stäubli, Franka, Kinova and more.",'<rect x="6" y="20" width="18" height="16"/><rect x="32" y="20" width="18" height="16"/><path class="a" d="M24 25h8M24 31h8"/><circle class="f" cx="41" cy="28" r="2.4"/>']];
  return '<div class="caps hp-caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+c[0]+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Haption<span class="nomob"> · Laval, France · since 2001</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The sense of touch,</span><span class="l"><em>at a distance.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Haption designs, manufactures and sells force-feedback devices and custom force-feedback solutions for engineering simulation, industrial robotics, medical and research applications.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/products">The Virtuose range</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why force feedback</span>'+
   '<h2 class="txt" id="mani">To control a robot remotely, an operator needs as much feedback as possible: vision, sound and, above all, a force-feedback manipulator to feel both the robot’s movements and its environment. <em>The robot becomes an extension of the operator’s hand.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">25 years</span><p class="k">Designing and building force-feedback devices, since 2001</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6 DOF</span><p class="k">With active force feedback on translations and rotations, on the Virtuose 6D</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1,000 Hz</span><p class="k">Update rate over Ethernet or EtherCAT, for a crisp sense of contact</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Feel what <em>the robot feels.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Hold</span><span>Follow</span><span>Contact</span><span>Feel</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A hand on the Virtuose.</h2><p>The operator holds the ergonomic handle of a Virtuose 6D: four buttons, an analog finger gripper acting as a seventh degree of freedom, and hand-presence detection.</p></article>'+
     '<article class="step"><h2>The robot follows.</h2><p>TREX, Haption’s teleoperation controller, links the device to the robot. The robot faithfully replicates the movements of the manipulator, with adjustable force and movement ratios. No code.</p></article>'+
     '<article class="step"><h2>The tool meets the part.</h2><p>The robot’s tool touches its environment: a surface, a part, an object in the gripper. Its force sensor measures the effort at the contact.</p></article>'+
     '<article class="step"><h2>The force comes back to the hand.</h2><p>The Virtuose renders that effort in the operator’s hand: the robot’s dynamics, the weight of grasped objects, any collision. The human stays in charge of every decision.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">The Virtuose <em>range.</em></h2></div><p data-r>Industrial-grade force-feedback devices, from the desktop to the scale of a room, and the controller that connects them to industrial and collaborative robots.</p></div>'+
   caps()+credit("Software API",["C++","C","ROS2","ROS","Python","Matlab/Simulink","LabVIEW","Windows","Linux"])+
  '</div></section>'+

  '<section class="sec dark2" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">Where touch <em>matters.</em></h2></div><p data-r>Since 2001, Haption has worked with leading companies such as Dassault Systèmes, Airbus and Orano, in industries where safety comes first, and in hospitals and laboratories.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">Designed and built <em>in Laval.</em></h2></div><p data-r>Haption’s factory and headquarters are in Laval, France, with sales offices in Germany, the United Kingdom and the United States, and partners and resellers around the world.</p></div>'+
   team()+credit("Offices",OFFICES)+credit("Memberships",MEMBER)+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Twenty-five years, <em>and new projects.</em></h2></div><p data-r>An anniversary, and the European research projects Haption is part of, recognised by the European Commission’s Innovation Radar.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Put force feedback <em>in your project.</em></h2>'+
   '<p class="sub" data-r>For devices, teleoperation, simulation or a custom force-feedback solution, the Haption team in Laval would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Haption '+ARR+'</a><a class="btn" href="#/products">The Virtuose range</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Haption<br>8 ZA Route de Laval<br>53210 Soulgé-sur-Ouette, France</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">contact@haption.com</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+33243645120">+33 2 43 64 51 20</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Laval, France<br>Aachen · Preston · Hope, RI</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">contact@haption.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Quality</span>ISO 9001:2015 certified design, manufacturing and sales of force-feedback robotic systems.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Libre Caslon Text\',serif;font-weight:400;font-size:62px">haption</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Haption</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",products:"products",applications:"applications",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Haption — force-feedback devices and teleoperation",x:"Home"};
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
