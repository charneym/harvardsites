/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function caps(list){return '<div class="caps nwc tst">'+list.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function chips(kick,list){return '<div class="bk cnd"><span class="lab kick" data-r>'+esc(kick)+'</span><p class="cr" data-r>'+list.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* test modules (inframet.com > Test modules > Collimators, Blackbodies) */
var MODS=[
 ["Collimators","CDT · off-axis reflective","Our CDT off-axis reflective collimators project reference targets at optical infinity, with an unobstructed aperture across a wide spectral range."],
 ["Blackbodies","TCB · 1 mK","Differential area blackbodies from 0 to +100°C, with 1 mK temperature resolution, emissivity of typically 0.98 and emitters up to 300x300 mm."],
 ["Two-point NUC","BNUC blackbody sets","Blackbody sets for professional non-uniformity correction, built to work inside temperature chambers."]];
var CATS=["Collimators","Blackbodies","Color blackbodies","Light sources","Rotary wheels","Targets","Computer systems","Meters","Manual stages","Motorized platforms","Optical tables"];
/* services (inframet.com > Services) */
var SRV=[
 ["Test services","On our stations","Your imagers and laser systems tested on our own equipment."],
 ["Rental","Systems to rent","Test systems available on a rental basis."],
 ["Aftersales","For delivered systems","Service and support for the test systems we have delivered."]];
/* education (inframet.com > Education, News) */
var EDU=[
 ["Review of thermal imaging technology","Open access · 2024","A free book on the whole field of thermal imaging, from design and manufacture of thermal imagers to the international market."],
 ["Papers on image intensifiers","2024","Two scientific papers on testing image intensifier tubes."],
 ["Training","Thermal imaging","Expanded educational training in the field of thermal imaging technology."]];
/* news (inframet.com > News) */
var NEWS=[
 ["Oct 2026","LWAS station for testing laser warning systems in the laboratory","New system",PW+"/info/news.html"],
 ["Apr 2026","VED system for testing multi-sensor EO systems at field or depot","New system",PW+"/info/news.html"],
 ["Feb 2026","VEMS system for testing vehicle-mounted imaging and laser systems","New system",PW+"/info/news.html"],
 ["Jan 2026","ASIR system for testing active laser imagers","Launch",PW+"/info/news.html"],
 ["Oct 2025","JAVI system for boresight of multi-sensor surveillance systems","Launch",PW+"/info/news.html"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="2254" height="1213" alt="An Inframet DT15150 test system for thermal imagers: an off-axis reflective collimator with its blackbody and target housing on top, on levelling feet, with the control computer and monitor" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Electro-optical test equipment<span class="nomob"> · Warsaw, Poland</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Test equipment</span> <span class="l">for electro-optics.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Test systems for thermal imagers, night vision devices, <span style="white-space:nowrap">VIS-NIR</span> and SWIR cameras, laser systems and multi-sensor systems, and for the sensors and optics inside them.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/systems">Our test systems '+ARR+'</a><a class="btn" href="#/contact">Contact sales</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Inframet</span>'+
   '<h2 class="txt" id="mani"><span class="nw">The only company</span> <span class="nw">that can deliver equipment</span> <span class="nw">for testing all types</span> <span class="nw">of electro-optical</span> <span class="nw">surveillance systems.</span> <em><span class="nw">Built near Warsaw.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2002</span><p class="k">founded, near Warsaw, Poland</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">60+</span><p class="k">countries our test equipment is exported to</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">7</span><p class="k">types of laser system our stations test</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a thermal imager is tested</span><h2 class="d3"><span class="nw">A target</span> <span class="nw">at infinity.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Source</span><span>Target</span><span>Collimate</span><span>Measure</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">A blackbody</span> <span class="nw">sets the temperature.</span></h2><p>A differential blackbody holds a precise temperature difference, resolved to 1 mK on our TCB models.</p></article>'+
     '<article class="step"><h2><span class="nw">A target</span> <span class="nw">shapes the scene.</span></h2><p>A standard 4-bar target in front of the blackbody, one of a set on a rotary wheel, gives the imager a pattern to resolve.</p></article>'+
     '<article class="step"><h2><span class="nw">A collimator</span> <span class="nw">sends it to infinity.</span></h2><p>An off-axis reflective collimator, a large parabolic mirror, projects the target as if from a very long distance.</p></article>'+
     '<article class="step"><h2><span class="nw">The imager</span> <span class="nw">is measured.</span></h2><p>The imager under test views the target, and the software measures MRTD, NETD, MTF and field of view.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="systems" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Test systems</span><h2 class="d2 split"><span class="nw">A system for</span> <span class="nw">every imager.</span></h2></div><p data-r>Thermal imagers, VIS-NIR and SWIR cameras, night vision, laser and multi-sensor systems, UV, THz and space imagers, image intensifier tubes, FPAs, detectors and optical objectives.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="modules" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Test modules</span><h2 class="d2 split"><span class="nw">The blocks</span> <span class="nw">our systems are built from.</span></h2></div><p data-r>The modules inside our test systems, also sold on their own: collimators, blackbodies, targets and the rest.</p></div>'+
   caps(MODS)+chips("Modules",CATS)+
  '</div></section>'+

  '<section class="sec dark" id="services" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split"><span class="nw">Our mission is</span> <span class="nw">to serve our customers.</span></h2></div><p data-r>Beyond the test systems we sell, four kinds of service: aftersales, test, rental and educational.</p></div>'+
   caps(SRV)+
  '</div></section>'+

  '<section class="sec light" id="education" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Education</span><h2 class="d2 split"><span class="nw">Sharing what</span> <span class="nw">we know.</span></h2></div><p data-r>Books, scientific papers and training on electro-optical metrology, because customers who know it use our test systems better.</p></div>'+
   caps(EDU)+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">New this</span> <span class="nw">year.</span></h2></div><p data-r>New test systems, simulators and stations, as we launch them.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us what</span> <span class="nw">you need to test.</span></h2>'+
   '<p class="sub" data-r>We prefer email, so every detail is precise and on record. Write to our sales team, directly or through our representatives.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email sales '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Inframet</span><br><span>Bugaj 29A, Koczargi Nowe</span><br><span>05-082 Stare Babice</span><br><span>Poland</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Sales and quotes</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><span>Representatives worldwide</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Bugaj 29A, Koczargi Nowe<br>05-082 Stare Babice, Poland</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/systems">Systems</a><br><a class="ul" href="#/modules">Modules</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/education">Education</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">We test</span>Thermal imagers<br>Night vision and SWIR<br>Laser systems</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">INFRAMET</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Inframet</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",systems:"systems",modules:"modules",services:"services",education:"education",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Inframet — Equipment for testing electro-optical systems, Warsaw, Poland",x:"Home"};
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
