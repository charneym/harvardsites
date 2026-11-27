/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
/* four application areas (sequoiasci.com > Home application areas, Product Overview) */
function caps(){var C=[
  ["Marine","<span class=\"nw\">Oceans, coasts</span> <span class=\"nw\">and ports</span>","Particle size, concentration and optical properties in situ, on CTDs, floats, gliders, AUVs and moorings down to 3000 m.",'<path d="M6 30C12 24 18 24 24 30S36 36 42 30S50 24 52 26"/><path class="a" d="M6 40C12 34 18 34 24 40S36 46 42 40"/>'],
  ["Freshwater","<span class=\"nw\">Rivers, lakes</span> <span class=\"nw\">and reservoirs</span>","Suspended sediment transport, profiled through the river column, from the Grand Canyon to the Danube.",'<path d="M10 8C18 20 14 30 24 38S40 46 46 50"/><path class="a" d="M18 8C26 20 22 30 32 38"/>'],
  ["Energy","<span class=\"nw\">Hydro, oil</span> <span class=\"nw\">and gas</span>","Acoustic backscatter for turbine protection in hydropower, and particle sizing of drill mud and brine on site.",'<path d="M30 6L16 32H28L24 50L40 22H28Z"/>'],
  ["Environmental","<span class=\"nw\">Oil spills</span> <span class=\"nw\">and algal blooms</span>","Oil spill response, harmful algal bloom monitoring and stormwater studies, from Deepwater Horizon to Fukushima.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M20 28C24 22 32 22 36 28"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* how LISST works (sequoiasci.com > About, Product Overview, LISST-200X) */
function svc(){var S=[
  ["Laser diffraction, in situ","LISST stands for Laser In-situ Scattering and Transmissometry: the instrument measures particles where they are, without taking a sample."],
  ["Calibration for life","LISST systems are self-contained, compact, programmable and battery powered, and they hold their calibration for life."],
  ["Beyond lasers","Holography for particle images, acoustic backscatter for concentration, and LEDs where they fit: sometimes two methods work together."],
  ["Made in Bellevue","All design and production takes place in Bellevue, Washington; more than 40 types of sensors have been developed since 1995."],
  ["Thousands in use","Thousands of Sequoia instruments help ocean and freshwater scientists and managers understand the aquatic environment."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["1995","Dr. Yogi Agrawal and engineer Chuck Pottsmith found Sequoia, with the LISST-100 as its first product: the first submersible commercial laser-diffraction instruments."],
  ["2019","Dr. Ole Mikkelsen returns from Denmark to lead Sequoia as President, as the founder retires."],
  ["2026","NASA funds a new in-situ hyperspectral VSF sensor, and Hyper-a joins the line."]];
  return '<ol class="hst">'+H.map(function(h){return '<li data-r><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1229" height="664" alt="Sequoia LISST-200X submersible particle size analyzer" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>LISST instruments<span class="nomob"> · Bellevue, Washington, since 1995</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Every particle,</span> <span class="l nw">measured where it is.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Sequoia builds submersible and field instruments that measure the size, concentration, images and optical properties of particles in oceans, rivers and industry.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/instruments">Our instruments '+ARR+'</a><a class="btn" href="#/contact">Book a meeting</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>We do particle intelligence</span>'+
   '<h2 class="txt" id="mani"><span class="nw">In 1995 Sequoia</span> <span class="nw">introduced</span> <span class="nw">the world\'s first</span> <span class="nw">submersible</span> <span class="nw">commercial instruments</span> <span class="nw">for particle</span> <span class="nw">intelligence.</span> <em><span class="nw">Sediment grains,</span> <span class="nw">algae, flocs,</span> <span class="nw">oil droplets,</span> <span class="nw">air bubbles.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1995</span><p class="k">the LISST-100, the first submersible laser-diffraction particle sizer on the market</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40+</span><p class="k">types of sensors developed, prototyped or manufactured by Sequoia since then</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">36</span><p class="k">size classes from 1 to 500 µm, measured in situ by the LISST-200X</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside a LISST-200X</span><h2 class="d3"><span class="nw">Light in the water,</span> <em class="nw">sizes on the screen.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Laser</span><span>Scatter</span><span>Rings</span><span>Sizes</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">A laser beam</span> <span class="nw">crosses the water.</span></h2><p>The instrument sits in the water itself, in the ocean, a river or a lake, and sends a collimated laser beam through the open sample path.</p></article>'+
     '<article class="step"><h2><span class="nw">Particles scatter</span> <span class="nw">the light.</span></h2><p>Each suspended particle scatters light forward at small angles. Large particles scatter at smaller angles, small ones wider.</p></article>'+
     '<article class="step"><h2><span class="nw">Rings catch</span> <span class="nw">every angle.</span></h2><p>A ring detector records the scattered light at 36 angles, from 0.039° to 13.8°, while the transmitted beam gives the attenuation.</p></article>'+
     '<article class="step"><h2><span class="nw">Out comes</span> <span class="nw">the size distribution.</span></h2><p>The angular pattern is inverted into a particle size distribution, 1 to 500 µm in 36 classes, with volume concentration at 0.1 µL/L resolution.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="instruments" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Instruments</span><h2 class="d2 split"><span class="nw">The LISST family,</span> <em class="nw">and beyond.</em></h2></div><p data-r>Self-contained, programmable and battery powered, from the workhorse LISST-200X to holographic cameras and hyperspectral optics.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split"><span class="nw">Wherever water</span> <em class="nw">carries particles.</em></h2></div><p data-r>From the Three Gorges Dam to the Venice lagoon, LISST instruments measure what the water carries.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Also used in</span><p class="cr" data-r><span>Ceramics</span><span>Powders</span><span>Mining</span><span>Ocean optics</span><span>Remote sensing</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">Light scattered,</span> <em class="nw">measured in situ.</em></h2></div><p data-r>Most Sequoia instruments use lasers in one way or another; a few use LEDs or acoustics, and sometimes two methods work together.</p></div>'+
   svc()+
   '<div class="trn" data-r><span class="lab kick">New in 2026</span><p>NASA has awarded Sequoia a Phase I SBIR grant to develop a new in-situ hyperspectral volume scattering function sensor.</p><a class="ul" href="https://www.sequoiasci.com/about/news/" target="_blank" rel="noopener">Read the news</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Scientists building</span> <em class="nw">for scientists.</em></h2></div><p data-r>Design and production happen in Bellevue, Washington, with sales staff in Bellevue and Mobile, Alabama, and distributors worldwide.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Leadership</span><ul>'+
     '<li data-r><span class="nm">Dr. Ole Aarup Mikkelsen</span><span class="lab rl">President and CEO</span></li>'+
     '<li data-r><span class="nm">Chuck Pottsmith</span><span class="lab rl">VP, Operations</span></li>'+
     '<li data-r><span class="nm">Ravi Chandrasiri</span><span class="lab rl">VP Engineering</span></li>'+
    '</ul></div>'+
    '<div class="engpol"><span class="lab kick" data-r>Milestones</span>'+hist()+'</div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Community</span><p class="cr" data-r><span>Particles in Europe</span><span>Particles in the Americas</span><span>AGU</span><span>Ocean Business</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">A NASA grant,</span> <em class="nw">and where to meet us.</em></h2></div><p data-r>New funding, upgrades and the next shows. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us what</span> <em class="nw">you need to measure.</em></h2>'+
   '<p class="sub" data-r>Unsure which LISST is right for you? Tell us about your water and your particles, and we will help you choose.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Sequoia '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span>Sequoia Scientific, Inc.</span><br><span>2700 Richards Road, Suite 107</span><br><span>Bellevue, WA 98005, USA</span></p></div>'+
    '<div><span class="lab" data-r>Enquiries</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Telephone '+TELT+' (toll-free in the US)</span></p></div>'+
    '<div><span class="lab" data-r>Distributors</span><p data-r><span>Represented worldwide</span><br><span>through regional distributors</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Sequoia Scientific, Inc., 2700 Richards Road, Suite 107, Bellevue, WA 98005</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/instruments">Instruments</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Since 1995</span>LISST instruments for particle size, concentration, imaging and optics, designed and built in Bellevue, Washington.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:400;font-size:40px;letter-spacing:.3em">SEQUOIA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Sequoia Scientific, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",instruments:"instruments",applications:"applications",technology:"technology",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Sequoia Scientific — LISST instruments for particle intelligence",x:"Home"};
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
