/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function caps(list){return '<div class="caps nwc tst">'+list.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function chips(kick,list){return '<div class="bk cnd"><span class="lab kick" data-r>'+esc(kick)+'</span><p class="cr" data-r>'+list.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* wavefront imaging (silios.com > Wavefront Imaging, MAKATEA) */
var WAV=[
 ["QLSI","Quadriwave lateral shearing","Cross-grating microscopy maps the refractive index inside transparent samples, with sensitivity below 1 nm."],
 ["MAKATEA","400-900 nm · 680x680","A compact wavefront camera, 60x40x26 mm, that fits the standard camera port of any optical microscope."],
 ["Beyond microscopy","Metrology and lasers","QLSI also serves optical metrology, laser measurement, material inspection and ophthalmology."]];
/* laser beam shaping (silios.com > Laser Beam Shaping) */
var LAS=[
 ["SHG homogenisers","Ti:Sa pumping","Second harmonic diffractive homogenisers that improve the pump beam and protect the crystal in femtosecond laser chains."],
 ["Beam samplers","Real-time monitoring","Diffractive laser beam samplers measure the beam parameters while the laser is processing."],
 ["Phase mirrors","Inside the cavity","Diffractive phase mirrors shape the beam from inside the laser cavity, supplied to the Laser Megajoule facility."]];
var CATS=["Homogenisers (top hat)","Beam splitters","Pattern generators","Diffractive lenses","Amplitude and phase gratings"];
/* astronomy and space (silios.com > Astronomy & Space, News) */
var SPC=[
 ["EUCLID grisms","ESA · 2023","Five large curved gratings on prism, 150 mm across and 20 mm thick, in the grism wheel of EUCLID's NISP instrument."],
 ["Turbulence phase screens","ESO VLT · 2004","The world's first fused silica phase screens, with 32 and 64 phase levels, for the VLT instruments."],
 ["Gravitational waves","VIRGO","Diffractive beam shapers for the VIRGO gravitational wave detector."]];
/* trade shows (silios.com > Meet us) */
var NEWS=[
 ["Nov 2026","ICUIL 2026, Saint Andrews, UK","Conference",PW+"/meet-us"],
 ["Oct 2026","VISION 2026, Stuttgart, Germany","Exhibition",PW+"/meet-us"],
 ["May 2026","CHII 2026, hyperspectral imaging in industry, Graz","Conference",PW+"/meet-us"],
 ["Apr 2026","SPIE Defense + Commercial Sensing, National Harbor","Exhibition",PW+"/meet-us"],
 ["Feb 2026","OPTRO 2026, Marseille, France","Conference",PW+"/meet-us"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1582" height="1544" alt="A SILIOS CMS4 snapshot multispectral camera: a black machined housing with orange and blue stripes on top, four corner screws and a C-mount ring around the sensor" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Micro-optics<span class="nomob"> · Peynier, France</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Every colour,</span> <span class="l">in a single shot.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Multispectral filters and snapshot cameras, wavefront cameras, diffractive optics for lasers, and gratings and phase plates for astronomy and space.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/multispectral">Our cameras '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>SILIOS Technologies</span>'+
   '<h2 class="txt" id="mani"><span class="nw">The micro-optics supplier,</span> <span class="nw">from a pixelated filter</span> <span class="nw">on a camera sensor</span> <span class="nw">to large gratings</span> <span class="nw">in space.</span> <em><span class="nw">Made in Provence.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2001</span><p class="k">founded in Peynier, near Aix-en-Provence</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><p class="k">large grisms of ours aboard ESA\'s EUCLID</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10</span><p class="k">spectral bands in one shot on TOUCAN</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a snapshot multispectral camera works</span><h2 class="d3"><span class="nw">A spectrum</span> <span class="nw">at every point.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Light</span><span>Filter</span><span>Sensor</span><span>Spectrum</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Light arrives</span> <span class="nw">from the scene.</span></h2><p>Every point of the scene sends light across the whole range, from the visible to the near infrared.</p></article>'+
     '<article class="step"><h2><span class="nw">A mosaic</span> <span class="nw">of filters.</span></h2><p>Our COLOR SHADES filter is made of cells, each filtering its own band. The number, size and centring of the bands are configurable.</p></article>'+
     '<article class="step"><h2><span class="nw">Bonded</span> <span class="nw">to the sensor.</span></h2><p>The filter is hybridised onto a commercial CMOS or InGaAs sensor, like a Bayer filter with more colours.</p></article>'+
     '<article class="step"><h2><span class="nw">A spectrum</span> <span class="nw">in one shot.</span></h2><p>From a single snapshot, the spectrum at each point of the image: 8 colours and one black and white on the CMS cameras.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="multispectral" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Multispectral imaging</span><h2 class="d2 split"><span class="nw">Snapshot cameras,</span> <span class="nw">off the shelf.</span></h2></div><p data-r>VIS, NIR and SWIR cameras from stock, or your own band centring, resolution and sensor, designed and made for you.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="wavefront" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Wavefront imaging</span><h2 class="d2 split"><span class="nw">Intensity and phase,</span> <span class="nw">in one camera.</span></h2></div><p data-r>Wavefront cameras for microscopy, built on commercial CMOS and InGaAs sensors: MAKATEA, TIKEI and TAKUME.</p></div>'+
   caps(WAV)+
  '</div></section>'+

  '<section class="sec dark" id="lasers" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Laser beam shaping</span><h2 class="d2 split"><span class="nw">Diffractive optics</span> <span class="nw">for high power lasers.</span></h2></div><p data-r>Diffractive optical elements designed and made in our own facility, from homogenisers to phase mirrors.</p></div>'+
   caps(LAS)+chips("We also make",CATS)+
  '</div></section>'+

  '<section class="sec light" id="space" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Astronomy and space</span><h2 class="d2 split"><span class="nw">Phase plates</span> <span class="nw">and gratings.</span></h2></div><p data-r>Resin-free blazed and curved gratings, etched into fused silica, and phase plates for the largest instruments.</p></div>'+
   caps(SPC)+
  '</div></section>'+

  '<section class="sec dark2" id="shows" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Meet us</span><h2 class="d2 split"><span class="nw">Where to</span> <span class="nw">find us.</span></h2></div><p data-r>Shows and conferences where our team presents its cameras and optics this year.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us which</span> <span class="nw">bands you need.</span></h2>'+
   '<p class="sub" data-r>A camera from stock, a custom pixelated filter, or a diffractive element for your laser: write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>SILIOS Technologies</span><br><span>Rue Gaston Imbert prolongée</span><br><span>ZI de Peynier-Rousset</span><br><span>13790 Peynier, France</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>General inquiries</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><span>Cameras, filters and optics</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>ZI de Peynier-Rousset<br>13790 Peynier, France</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/multispectral">Multispectral</a><br><a class="ul" href="#/wavefront">Wavefront</a><br><a class="ul" href="#/lasers">Lasers</a><br><a class="ul" href="#/space">Space</a><br><a class="ul" href="#/shows">Shows</a></div>'+
   '<div class="c"><span class="lab">We make</span>Multispectral cameras<br>Diffractive optics<br>Gratings and phase plates</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">SILIOS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 SILIOS Technologies</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",multispectral:"multispectral",wavefront:"wavefront",lasers:"lasers",space:"space",shows:"shows",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"SILIOS Technologies — Micro-optics and multispectral cameras, Peynier, France",x:"Home"};
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
