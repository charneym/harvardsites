/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prodRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+c[0]+'</b><i>'+c[1]+'</i></span><div class="pgm"><h3>'+c[2]+'</h3><span class="loc">'+c[3]+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk av">'+c[6]+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+p.sum+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
/* applications: the OEM programs named in the January 2026 release, and the mid-IR work */
function caps(){var C=[
  ["Fiber-optic sensing","The ROCK fiber laser is core technology for fiber-optic sensing systems, enabling 24/7 distributed monitoring of oil and gas pipelines.",'<path d="M4 34c8 0 8-10 16-10s8 10 16 10 8-10 16-10"/><circle class="f" cx="20" cy="24" r="2.6"/><path class="a" d="M4 44h48"/>'],
  ["Quantum computing","A preferred source for qubit excitation, with ultra-stable, frequency-locked operation across a range of wavelengths.",'<circle cx="28" cy="28" r="6"/><ellipse cx="28" cy="28" rx="22" ry="9"/><ellipse class="a" cx="28" cy="28" rx="22" ry="9" transform="rotate(60 28 28)"/>'],
  ["Precision metrology","The POWER ROCK high-power single-frequency laser serves precision metrology, nanometer-scale positioning and advanced semiconductor manufacturing.",'<path d="M6 40h44M10 40v-6M18 40v-4M26 40v-6M34 40v-4M42 40v-6"/><path class="a" d="M6 22h44"/><path d="M44 17l6 5-6 5"/>'],
  ["Injection seeding","The ROCK injection seeder is an industry-standard source for high-power Nd:YAG lasers, used in holography, narrow-linewidth pumping and Doppler lidar.",'<rect x="6" y="20" width="14" height="16"/><rect x="28" y="16" width="22" height="24"/><path class="a" d="M20 28h8"/>'],
  ["Doppler wind lidar","The METEOR pulsed laser enables coherent Doppler sensing, deployed at commercial airports worldwide for wind shear detection.",'<path d="M8 44l12-30"/><path class="a" d="M20 14l30-6"/><path d="M28 28c6 0 6 4 12 4s6-4 12-4M24 36c6 0 6 4 12 4s6-4 12-4"/>'],
  ["Mid-infrared","Tellurite fiber technology for broadband supercontinuum fiber lasers and next-generation IR components for science, defense and industry.",'<path d="M6 40c6-20 12-20 18 0s12 20 18 0"/><path class="a" d="M6 16h44"/><circle class="f" cx="48" cy="16" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Capabilities</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From npphotonics.com (Core Technologies) and NP Photonics’ January 2026 releases. U.S. Patent Application Nos. 19/411,816 and 19/412,441.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Fiber lasers · amplifiers · fibers<span class="nomob"> · since 1998</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Single-frequency</span><span class="l">light, <em>from our</em></span><span class="l"><em>own glass.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>NP Photonics designs and manufactures specialty fiber lasers, fiber amplifiers and transport fibers for the near- and mid-infrared, built on proprietary phosphate, germanate and tellurite glass in Tucson, Arizona.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/products">Our products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>American owned and operated</span>'+
   '<h2 class="txt" id="mani">For over 25 years we have made our own glass, drawn our own fiber and built lasers on it. <em>Let us be your OEM, R&amp;D or custom laser partner.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1,400+</span><p class="k">NP Photonics lasers installed worldwide</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100×</span><p class="k">The rare-earth dopant concentration of silica, in our phosphate glass, with no loss of optical gain</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1998</span><p class="k">Founded in Tucson, Arizona</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Gain in centimetres, <em>not metres.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Silica</span><span>Phosphate</span><span>Cavity</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Silica runs out of room.</h2><p>Most active fibers use silica glass, but its rare-earth dopants (erbium, ytterbium, thulium, holmium) cluster at high concentrations, which degrades gain.</p></article>'+
     '<article class="step"><h2>Our phosphate glass doesn’t.</h2><p>Our phosphate fibers hold dopant concentrations up to 100 times those of silica with no loss of optical gain, typically 5 dB of gain per centimetre.</p></article>'+
     '<article class="step"><h2>A laser under 2 cm long.</h2><p>A fiber cavity shorter than 2 cm gives single-frequency lasers with linewidths below 500 Hz and low phase noise, in a compact, robust package.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Innovation in <em>specialty glass.</em></h2></div><p data-r>Proprietary phosphate, germanate and tellurite glasses are the key enabler of our fiber lasers, amplifiers and ASE sources, and they open parts of the spectrum where silica is opaque: our tellurite fibers carry mid-infrared light from 2 to 5 µm.</p></div>'+
   '<div class="tri">'+
    '<div class="cap"><span class="lab" data-r>Phosphate</span><h3 data-r>High gain per unit length</h3><p data-r>Highly doped phosphate fibers give large gain in a short length, enabling high-power single-frequency lasers and short, low-latency amplifiers.</p></div>'+
    '<div class="cap"><span class="lab" data-r>Germanate</span><h3 data-r>Efficient 2 µm lasers</h3><p data-r>Low-OH holmium-doped germanate fiber gave 15.6 W at 2050 nm from a 10 cm fiber laser, at a record 80% optical-to-optical efficiency.</p></div>'+
    '<div class="cap"><span class="lab" data-r>Tellurite</span><h3 data-r>Mid-IR transport</h3><p data-r>Low-loss (&lt;0.2 dB/m) fibers with substantially no hydroxyl, to carry and distribute high-power mid-IR light from parametric, quantum cascade and supercontinuum sources.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Lasers, amplifiers <em>and fiber.</em></h2></div><p data-r>OEM-ready modules and bench-top systems across the 1 µm and 1.5 µm bands, from milliwatt single-frequency sources to millijoule pulses, and transport fiber into the mid-infrared.</p></div>'+
   prodRows(PROD)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">Proven in the lab, <em>deployed in the field.</em></h2></div><p data-r>NP Photonics’ lasers power high-volume OEM programs in sensing, defense, metrology and research, in mission-critical industrial and scientific systems around the world.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Glass scientists and <em>laser engineers.</em></h2></div><p data-r>Our management team brings many decades of leadership and industry experience, and shares one goal: supplying customers with advanced, high-performance optical products and subsystems.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>NP Photonics.</em></h2></div><p data-r>Releases on our products, patents and research, including the three technical papers we presented at SPIE Photonics West 2026.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>OEM, R&amp;D and custom</span>'+
   '<h2 class="big split">Talk to <em>NP Photonics.</em></h2>'+
   '<p class="sub" data-r>Tell us about your application: wavelength, power, linewidth and package. We develop and build customized laser and amplifier solutions, and we are open to patent licensing discussions.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/products">See the products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Tucson, Arizona</span><p data-r>9030 S Rita Ranch Rd #120<br>Tucson, AZ 85747</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@npphotonics.com</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+15207997400">520-799-7400</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>9030 S Rita Ranch Rd #120<br>Tucson, AZ 85747</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@npphotonics.com</a><br><a class="ul" href="tel:+15207997400">520-799-7400</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Quality</span>ISO 9001:2015 · ITAR compliant</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Sora\',sans-serif;font-weight:400;font-size:74px">NP PHOTONICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 NP Photonics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",products:"products",applications:"applications",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"NP Photonics — specialty fiber lasers, amplifiers and fibers",x:"Home"};
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
