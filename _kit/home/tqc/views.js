/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><div class="pgm"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[2])+'</span></div><p>'+esc(c[3])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Air decay, overpressure","Above 0 bar","The lowest-cost method, with simple, direct results and direct calibration. Best for stable parts with volumes up to about 3 litres.",'<path d="M8 44h40"/><path d="M8 44V10"/><path class="a" d="M10 18C20 18 26 18 32 21S42 26 48 27"/><circle class="f" cx="10" cy="18" r="2.4"/>'],
  ["Vacuum decay","Below 0 bar","More robust data and less sensitive to temperature, with shorter stabilisation and often faster throughput. Parts up to about 5 litres.",'<path d="M8 44h40"/><path d="M8 44V10"/><path class="a" d="M10 40C20 40 26 40 32 37S42 32 48 31"/><circle class="f" cx="10" cy="40" r="2.4"/>'],
  ["Flow testing","Larger leaks, larger volumes","The instrument holds an accurate test pressure and records the gas flow with a flowmeter: a technique for checking larger leaks.",'<path d="M6 28h44"/><path class="a" d="M14 22l6 6-6 6M30 22l6 6-6 6"/><circle cx="44" cy="28" r="5"/>'],
  ["Helium","Most sensitive, to 1 × 10⁻⁶ atm·mm³/s","For specifications too stringent for pressure decay, or parts that are large or not stable in shape or temperature. Sniffing can locate the leak.",'<circle cx="28" cy="28" r="18"/><circle class="f" cx="28" cy="28" r="3"/><path class="a" d="M28 10v6M28 40v6M10 28h6M40 28h6"/>']];
  return '<div class="caps four">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+c[1]+'</span><h3>'+c[0]+'</h3><p>'+c[2]+'</p></div>'}).join("")+'</div>'}
function robots(){var C=[
  ["Pick and place","Robots move parts between sequential operations, or between technology modules for higher throughput: parts feeders, markers, vision inspection, laser welding, adhesive and sealant dispensing."],
  ["Multi-axis integration","Six- and seven-axis robots, SCARA, delta and picker robots, Cartesian gantries: mounted in a guarded frame with the end effector, gripper or application head and its parts feeding."],
  ["Special applications","Multi-robot lines and single-robot workstations: automotive parts, green-state ceramic components, medical device production and test, collaborative robots and lights-out cells."]];
  return '<ol class="cns">'+C.map(function(c,i){return '<li><span class="lab n">0'+(i+1)+'</span><h3>'+c[0]+'</h3><p>'+c[1]+'</p></li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Automation &amp; Test Solutions<span class="nomob"> · Nottingham, since 1985</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Leak test,</span><span class="l">automation and</span><span class="l">robotic systems,</span><span class="l"><em>built in-house.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>TQC designs and builds special purpose machines for manufacturers with technically demanding requirements: leak test machines, automated assembly and robotic handling, for automotive, medical, aerospace and precision engineering.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How a leak test works '+ARR+'</a><a class="btn" href="#/leak-testing">Leak testing</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About TQC</span>'+
   '<h2 class="txt" id="mani">Customers come to TQC with a hard problem and need an engineering business that can solve it properly. Mechanical, electrical and software design, and the build, <em>all happen on one site in Nottingham.</em></h2>'+
   '<p class="mlead" data-r>So TQC takes full responsibility for every project, and with low staff turnover, after-sales service usually comes from the team that built the machine, even twenty years on. Privately owned, ISO 9001:2015 certified.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">40</span><p class="k">years in business: 2026 is TQC’s 40th full year as an independent Nottingham manufacturer</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">80+</span><p class="k">MALT leak test modules deployed, in desktop fixtures and high-speed automated lines</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">120+</span><p class="k">parts a minute handled by recent TQC assembly systems, with tray packing and bagging</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Pressure decay</span><h2 class="d3">How a part proves <em>it doesn’t leak.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fill</span><span>Settle</span><span>Measure</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Pressurise the part.</h2><p>The part is sealed on its fixture and filled with air to the test pressure: anywhere from vacuum to typically 16 bar on a TQC air decay system.</p></article>'+
     '<article class="step"><h2>Let it settle.</h2><p>The supply valve closes and the trapped air is left to stabilise. Air decay is temperature-dependent, so nothing is measured until the reading is steady.</p></article>'+
     '<article class="step"><h2>Watch for the decay.</h2><p>A leak shows as a fall in pressure over time. TQC’s MALT module resolves better than 0.1 Pa and 1 millisecond; every result is a pass or fail, logged for SPC analysis.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="leak-testing" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Leak testing</span><h2 class="d2 split">The right test, <em>for the right part.</em></h2></div><p data-r>TQC specialises in leak testing machines, from vacuum to typically 16 bar, with all parameters programmed into the instruments. Its own MALT module, now a stand-alone Mk3 instrument realised with the aid of an Innovate UK Smart Award, tests small internal volumes such as in-tyre pressure sensors.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="automation" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Automation</span><h2 class="d2 split">Assembly machines, <em>one part a minute to 120.</em></h2></div><p data-r>TQC designs and builds bespoke production and automated assembly line equipment: an automatic assembly machine can combine automatic testing, robot automation and mechanical handling. Machines for small medical and pharmaceutical components through to systems that handle automotive castings.</p></div>'+
   devRows(DEV)+
  '</div></section>'+

  '<section class="sec light" id="robotics" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Robotics</span><h2 class="d2 split">Robot systems for <em>demanding applications.</em></h2></div><p data-r>From proprietary robot units to large, complex bespoke systems: flexible, reconfigurable, multi-variant cells for automated assembly, automated testing, machine tending, press tending and parts transfer.</p></div>'+
   robots()+
   '<div class="bk"><span class="lab kick" data-r>Sectors</span><p class="cr" data-r><span>Automotive</span><i>·</i><span>Pharmaceutical &amp; medical</span><i>·</i><span>Automotive plastics</span><i>·</i><span>Casting</span><i>·</i><span>Aerospace &amp; defence</span><i>·</i><span>General engineering</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Forty years in. <em>The fundamentals haven’t changed.</em></h2></div><p data-r>Systems delivered into aerospace, automotive, medical and precision engineering in 2026, continued development of the MALT leak tester, and Cyber Essentials certification in progress.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Bring us <em>the hard problem.</em></h2>'+
   '<p class="sub" data-r>A leak test, automation or special purpose machine requirement, at any stage from early specification to full turnkey delivery. TQC’s engineering sales team provides concept designs, technical proposals and evidence of similar projects with every enquiry, and will visit your site.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Email TQC '+ARR+'</a><a class="btn" href="#/leak-testing">Leak testing</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Factory</span><p data-r>TQC Ltd<br>Hooton Street, Carlton Road<br>Nottingham NG3 2NJ, UK</p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+441159503561">+44 (0)115 950 3561</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">sales@tqc.co.uk</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Hooton Street, Carlton Road<br>Nottingham NG3 2NJ</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">sales@tqc.co.uk</a><br><a class="ul" href="tel:+441159503561">+44 (0)115 950 3561</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/leak-testing">Leak testing</a><br><a class="ul" href="#/automation">Automation</a><br><a class="ul" href="#/robotics">Robotics</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Quality</span>ISO 9001:2015<br>Privately owned since 1985</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="62" text-anchor="middle" style="font-family:\'Archivo\',sans-serif;font-weight:700;font-size:78px">TQC</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 TQC Ltd</span><span class="lab">Website concept</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story","leak-testing":"leak-testing",automation:"automation",robotics:"robotics",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"TQC — Leak Testing, Automation & Robotics, Nottingham",x:"Home"};
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
