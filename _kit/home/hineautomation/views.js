/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function sysRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><div class="pgm"><h3><a class="sx" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[1])+'</a></h3><span class="loc">'+esc(c[2])+'</span></div><p>'+esc(c[3])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function comps(){return '<div class="caps four">'+COMP.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[1])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function servs(){return '<ol class="cns">'+SERV.map(function(c,i){return '<li><span class="lab n">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></li>'}).join("")+'</ol>'}
function team(){return '<section class="mh"><div class="mh-group"><p class="mh-label" data-r>Executive team</p><ul class="mh-list">'+TEAM.map(function(p){
  return '<li data-r><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span><span></span></div></li>'}).join("")+'</ul></div></section>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Vacuum &amp; atmospheric automation<span class="nomob"> · St. Petersburg, Florida</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">From a dream</span> <span class="l"><em>to a design.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Hine Automation designs and manufactures vacuum and atmospheric automation systems and robotic components: load locks, cluster systems, EFEMs, robots, aligners and elevators for semiconductor, solar and flat panel display OEMs worldwide.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How a load lock works '+ARR+'</a><a class="btn" href="#/systems">Systems</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Who we are</span>'+
   '<h2 class="txt" id="mani">Hine Automation builds and automates with precision and passion, combining unsurpassed quality and reliability with <em>modular, versatile designs.</em></h2>'+
   '<p class="mlead" data-r>Hine serves original equipment manufacturers, from flexible research and development environments to stringent production lines, with semiconductor automation for silicon and compound III-V or II-VI materials, tape frames, photomasks and reticles, and solar and flat panel displays.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+</span><p class="k">years of experience designing products in the semiconductor space</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2009</span><p class="k">the year Hine Automation began serving its customers</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10M+</span><p class="k">mean cycles between failures for Hine’s atmospheric robots</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Star System load lock</span><h2 class="d3"><span class="nw">Into the vacuum,</span> <em><span class="nw">without venting</span> <span class="nw">the chamber.</span></em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Load</span><span>Pump down</span><span>Transfer</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Load at atmosphere.</h2><p>The access door opens and the wafer goes onto the end effector inside the load lock, at room pressure. The process chamber beyond the slit valve stays sealed and under vacuum.</p></article>'+
     '<article class="step"><h2>Pump the lock down.</h2><p>The door closes and the pump evacuates only the small load lock: to 1 × 10⁻³ Torr or below with a mechanical pump, 1 × 10⁻⁶ Torr or below with a high-vacuum pump.</p></article>'+
     '<article class="step"><h2>Transfer through the slit valve.</h2><p>The slit valve opens and the linear drive carries the wafer into the process chamber, reaching up to 610 mm beyond the valve, so the OEM’s chamber never vents between cycles.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="systems" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Systems</span><h2 class="d2 split"><span class="nw">Integrated wafer</span> <em><span class="nw">handling systems.</span></em></h2></div><p data-r>Standard and customised automation systems, from single-substrate load locks to cassette-to-cassette cluster systems and front end modules, for atomic layer, physical and chemical vapour deposition, metal and oxide etch, MR head deposition, MEMS and compound semiconductor processes.</p></div>'+
   sysRows(SYS)+
  '</div></section>'+

  '<section class="sec dark2" id="components" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Components</span><h2 class="d2 split"><span class="nw">Robots, aligners</span> <em><span class="nw">and elevators.</span></em></h2></div><p data-r>Standard robotic components with RS-232 and Ethernet control and CE/S2 compliance, in vacuum and atmospheric versions, that can be integrated into any vacuum transfer system or tool.</p></div>'+
   comps()+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split"><span class="nw">Custom design</span> <em><span class="nw">to legacy repair.</span></em></h2></div><p data-r>The most cost-effective automation solutions, with collaborative customisation in design and dependable support for the whole install base: Hine Automation products and legacy Hine Design and Asyst robots and elevators.</p></div>'+
   servs()+
   '<div class="bk"><span class="lab kick" data-r>Markets</span><p class="cr" data-r><span>Silicon</span><i>·</i><span>Compound III-V and II-VI</span><i>·</i><span>Tape frames</span><i>·</i><span>Photomasks and reticles</span><i>·</i><span>Solar</span><i>·</i><span>Flat panel displays</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split"><span class="nw">The people</span> <em><span class="nw">behind Hine.</span></em></h2></div><p data-r>The executive team brings decades of semiconductor equipment experience to every project, with sales and service partners across North America, Europe, China, Singapore, Malaysia and Israel.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Case studies</span> <em><span class="nw">and events.</span></em></h2></div><p data-r>Thirty years of designing and manufacturing in the semiconductor space, shared as case studies on reliable, economical custom solutions, and in person at the industry’s shows.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Do you have</span> <span class="nw">an idea</span> <em><span class="nw">we can</span> <span class="nw">help with?</span></em></h2>'+
   '<p class="sub" data-r>Call or write to discuss a detailed solution to your automation needs. Hine Automation has sales and service experts around the globe, and offers repair, refurbishment and replacement for its install base.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Email Hine Automation '+ARR+'</a><a class="btn" href="#/systems">Systems</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Corporate office</span><p data-r>Hine Automation LLC<br>12495 34th St. North, Suite B<br>St. Petersburg, FL 33716, USA</p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+18137497519">+1 (813) 749-7519</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">sales@hineautomation.com</a><br><a class="ul" href="mailto:service@hineautomation.com">service@hineautomation.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>12495 34th St. North, Suite B<br>St. Petersburg, FL 33716</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">sales@hineautomation.com</a><br><a class="ul" href="tel:+18137497519">+1 (813) 749-7519</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/systems">Systems</a><br><a class="ul" href="#/components">Components</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Europe</span>Hine Automation Europe<br>38190 Bernin, France</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="62" text-anchor="middle" style="font-family:\'Archivo\',sans-serif;font-weight:700;font-size:78px">HINE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Hine Automation LLC</span><span class="lab">Website concept</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",systems:"systems",components:"components",services:"services",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Hine Automation — Vacuum and Atmospheric Wafer Handling Automation",x:"Home"};
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
