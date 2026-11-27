/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* systems (clydehsi.com > Hyperspectral Imaging Systems) */
var SYS=[
 ["SC-C80 conveyor","Benchtop, 220 mm belt","Auto-focus and auto-exposure, real-time belt speed for square pixels, two cameras at once, integrated illumination and a feed-in/out option.",CH+"/scanning-solutions/conveyor-hyperspectral-scanning-solution"],
 ["Translation and pan-and-tilt","Lab bench to field","A translation stage for samples in the lab, and a pan-and-tilt head that takes the camera to walls, frescoes and landscapes.",CH+"/scanning-solutions/translationstage-hyperspectral-scanning-solution"],
 ["Microscope and SC-XYZ","Microns to metres","Hyperspectral microscopy, and the SC-XYZ large-area series for paintings and panels up to the SC-XY-1500 scanner.",CH+"/scanning-solutions/sc-xy-1500-large-area-scanner-full-specifications"]];
function sys(){return '<div class="caps nwc tst">'+SYS.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p><a class="lab lk ul" data-r href="'+c[3]+'" target="_blank" rel="noopener"><span>Read more</span> '+ARR+'</a></div>'}).join("")+'</div>'}
var KIT=["Spectral camera(s)","Scanning stage","Lighting system","Focus target","Reflectance standard","spectraSENS software","Lifetime technical support"];
function kit(){return '<div class="bk cnd"><span class="lab kick" data-r>In every turn-key system</span><p class="cr" data-r>'+KIT.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* software (clydehsi.com > spectraSENS) */
var SW=[
 ["Control","Wavelength and spatial selection, frame rate and integration time, uni- or bi-directional scanning, auto white and dark field, and automatic calculation from raw data to %R."],
 ["Display","Waterfall acquisition, hyperspectral cube and false-colour RGB views, spectral slicing, live spectra by pixel or by area, and a high-resolution RGB camera."],
 ["Analysis","Principal component analysis, partial least squares, spectral angle mapping, support vector machines, end-member classification and image fusion."]];
function sw(){return '<div class="caps nwc tst">'+SW.map(function(c){return '<div class="cap"><span class="lab" data-r>spectraSENS</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
/* distributors (clydehsi.com > Distributors) and news */
var DIST=[["Australasia","Quark Photonics"],["Baltics","Doma SIA"],["Benelux","Photon Mission"],["Canada","Gamble Technologies"],["France","Trioptics"],["Germany, Austria and Switzerland","Mountain Photonics"],["India","Instruments India"],["Italy","ClydeHSI Italia"],["Japan","IR System Co."],["Poland","Amecam"],["Republic of Korea","BK Instruments"],["Romania","Histeresis"],["Singapore","Airboard Technology"],["Spain and Portugal","Antares Instrumentación"],["Thailand","SP Vision Technology"]];
function dist(){return '<div class="bk cnd"><span class="lab kick" data-r>Our distributors</span><p class="cr" data-r>'+DIST.map(function(c){return '<span><i>'+esc(c[0])+'</i> <b>'+esc(c[1])+'</b></span>'}).join("")+'</p></div>'}
var NEWS=[
 ["Jun 2025","Exhibitor at LASER World of Photonics 2025, Messe München","LASER 2025","https://exhibitors.world-of-photonics.com/exhibitor-portal/2025/list-of-exhibitors/"],
 ["Nov 2022","BK Instruments appointed our exclusive distributor in the Republic of Korea","News",CH+"/news"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1046" height="483" alt="ClydeHSI NIR-HR+ hyperspectral camera, red body and black lens cap" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Hyperspectral imaging<span class="nomob"> · Clydebank, Scotland</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">We make and</span> <span class="l">measure rainbows.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Push-broom hyperspectral cameras from 400 to 2500 nm, turn-key scanning systems and spectraSENS software: complete, end-to-end hyperspectral imaging for research and industry.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/cameras">Our cameras '+ARR+'</a><a class="btn" href="#/contact">Talk to us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>ClydeHSI</span>'+
   '<h2 class="txt" id="mani"><span class="nw">We take care of</span> <span class="nw">the technology,</span> <span class="nw">so you can focus</span> <span class="nw">on what matters</span> <span class="nw">to you.</span> <em><span class="nw">Every system designed</span> <span class="nw">and rigorously tested.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">400–2500</span><p class="k">nanometres covered by our six push-broom hyperspectral cameras</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.3 nm</span><p class="k">spectral resolution of the RAMAN-532, with an electron-multiplying CCD</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">15</span><p class="k">distributors, from Canada to Australasia, Japan and Thailand</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a push-broom camera sees</span><h2 class="d3"><span class="nw">One line at a time,</span> <span class="nw">every wavelength.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Line</span><span>Spectrum</span><span>Scan</span><span>Cube</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">A single line</span> <span class="nw">of the sample.</span></h2><p>The camera images one line of the scene at a time: a push-broom, or line-scan, design with high spatial and spectral purity.</p></article>'+
     '<article class="step"><h2><span class="nw">Spread into</span> <span class="nw">its spectrum.</span></h2><p>Each line frame records spatial and spectral data at every pixel together: up to 384 spatial pixels and 288 spectral bands on the SWIR-384.</p></article>'+
     '<article class="step"><h2><span class="nw">The sample</span> <span class="nw">moves past.</span></h2><p>A conveyor, translation stage or pan-and-tilt head moves the scene under the camera; on the SC-C80 the belt speed adjusts in real time for square pixels.</p></article>'+
     '<article class="step"><h2><span class="nw">A full</span> <span class="nw">hyperspectral cube.</span></h2><p>Line by line, spectraSENS builds the cube, converts raw data to reflectance and maps what the eye cannot see, from food quality to art conservation.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="cameras" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Hyperspectral cameras</span><h2 class="d2 split"><span class="nw">Six cameras,</span> <span class="nw">400 to 2500 nm.</span></h2></div><p data-r>The right camera depends on spectral range, spatial resolution, frame rate, light budget and cost. Every one works with all our scanning systems and objective lenses.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="systems" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Imaging systems</span><h2 class="d2 split"><span class="nw">Take the pain out</span> <span class="nw">of hyperspectral.</span></h2></div><p data-r>Every ClydeHSI scanner is a complete, turn-key solution, with unlimited technical support for the lifetime of the system as standard. Custom systems on request.</p></div>'+
   sys()+kit()+
  '</div></section>'+

  '<section class="sec dark" id="software" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Software</span><h2 class="d2 split"><span class="nw">From the first line</span> <span class="nw">to the answer.</span></h2></div><p data-r>spectraSENS controls the camera and stage, displays the data as it arrives and analyses it, with a user-populated spectral database for each application.</p></div>'+
   sw()+
  '</div></section>'+

  '<section class="sec light" id="about" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About us</span><h2 class="d2 split"><span class="nw">Specialists in</span> <span class="nw">spectral imaging.</span></h2></div><p data-r>Clyde Hyperspectral Imaging and Technology Ltd is based in Clydebank, Scotland, and specialises in hyperspectral imaging and optical spectroscopy, with hyperspectral and conventional spectroscopy instruments and full systems.</p></div>'+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Leadership</span><h3 data-r>Dr John Gilchrist</h3><p data-r>Director of the company since it was incorporated in March 2020 (Companies House SC657493).</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Photonics Research Facility</span><h3 data-r>Clydebank, Scotland</h3><p data-r>Where we rapidly develop new products and systems, and partner with customers on new developments.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Applications</span><h3 data-r>Food, art and science</h3><p data-r>Food quality and security, art and art conservation, phenotyping, forensics and crop health, in research and industry.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="worldwide" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Worldwide</span><h2 class="d2 split"><span class="nw">Made in Scotland,</span> <span class="nw">used worldwide.</span></h2></div><p data-r>Meet us at trade fairs, or through our distributors on five continents, who support customers locally.</p></div>'+
   news()+dist()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">What would you</span> <span class="nw">like to measure?</span></h2>'+
   '<p class="sub" data-r>Tell us your spectral range and application, commercial or academic, and we will recommend a camera or a complete system.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Clyde Hyperspectral Imaging</span><br><span>and Technology Ltd</span><br><span>1 Aurora Avenue, Clydebank</span><br><span>G81 1BF, Scotland</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Cameras, systems and support</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><span>Company no. SC657493</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>1 Aurora Avenue<br>Clydebank G81 1BF</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/cameras">Cameras</a><br><a class="ul" href="#/systems">Systems</a><br><a class="ul" href="#/software">Software</a><br><a class="ul" href="#/about">About</a><br><a class="ul" href="#/worldwide">Worldwide</a></div>'+
   '<div class="c"><span class="lab">Cameras</span>VNIR-S and VNIR-HR<br>NIR-HR and NIR-HR+<br>SWIR-384 and RAMAN-532</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">ClydeHSI</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ClydeHSI Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",cameras:"cameras",systems:"systems",software:"software",about:"about",worldwide:"worldwide",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ClydeHSI — Hyperspectral cameras and imaging systems, Clydebank, Scotland",x:"Home"};
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
