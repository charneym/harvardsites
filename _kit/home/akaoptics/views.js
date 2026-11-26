/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+c[1].split('|').map(function(x){return '<span class="nw">'+esc(x)+'</span>'}).join(' ')+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Power","Water cooled","Our bimorph mirrors can be water cooled with very high power lasers, removing the risk of thermal damage up to 50 kW/cm².",'<circle cx="28" cy="28" r="18"/><path class="a" d="M14 24C19 20 23 28 28 24S37 20 42 24M14 33C19 29 23 37 28 33S37 29 42 33"/><circle class="f" cx="28" cy="28" r="2.2"/>'],
  ["Spectrum","Far UV to far IR","Any substrate, any coating: mirrors and sensors cover 122 nm in the far UV to 10.6 µm in the far infrared.",'<path d="M6 40H50"/><path class="a" d="M6 40C14 40 16 14 22 14S30 40 36 30S44 22 50 22"/><circle class="f" cx="22" cy="14" r="2.2"/>'],
  ["Robust","Fault tolerant","A bimorph mirror keeps correcting the aberrations even if up to 10% of its electrodes are lost.",'<circle cx="28" cy="28" r="18"/><path d="M28 10V46M10 28H46"/><circle class="a" cx="28" cy="28" r="9"/><circle class="f" cx="28" cy="28" r="2.2"/>'],
  ["Coatings","Laser damage threshold","Metallic or dielectric coatings with laser damage thresholds up to 20 J/cm² for nanosecond pulses.",'<path d="M8 40H48"/><path d="M8 34H48"/><path class="a" d="M16 8L28 30L40 8"/><circle class="f" cx="28" cy="30" r="2.2"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3><span class="nw">'+esc(c[1])+'</span></h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Adaptive optics<span class="nomob"> · Marseille, France</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Adaptive optics for</span> <span class="l nw acc">high power lasers.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>AKA Optics designs, manufactures and sells adaptive optics closed loop systems, deformable mirrors and wavefront sensors, with more than 200 systems operating worldwide.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Adaptive optics · Deformable mirrors · Wavefront sensors</span>'+
   '<h2 class="txt" id="mani">Founded in Marseille by Prof. Alexis Kudryashov, AKA Optics builds the mirrors that <em>straighten the light</em> of the world’s top laser facilities.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2012</span><p class="k">founded in Marseille, in the heart of French Provence</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">200+</span><p class="k">adaptive optics systems operating in Europe, Asia and America</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">600 mm</span><p class="k">largest active diameter of our bimorph deformable mirrors</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The closed loop</span><h2 class="d3"><span class="nw">Measure, correct,</span> <em class="nw">and focus.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Measure</span><span>Correct</span><span>Focus</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The sensor sees the error.</h2><p>A Shack-Hartmann wavefront sensor puts a lenslet array in front of a digital camera. Each lenslet forms a spot; where the spots stray, the wavefront is aberrated.</p></article>'+
     '<article class="step"><h2>The mirror bends to cancel it.</h2><p>Piezoceramic disks with patterned electrodes are glued to a thin sheet of glass. Polarise an electrode and the mirror bends, its direction set by the voltage polarity.</p></article>'+
     '<article class="step"><h2>The beam comes to focus.</h2><p>Mirror, sensor and CL10 software close the loop. On the ALLS Ti:sapphire laser at INRS in Quebec, the focal spot after correction is close to the diffraction limit.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Mirrors, sensors <em>and whole systems.</em></h2></div><p data-r>We manufacture our adaptive optics ourselves, and our engineers design each system to meet your needs, both in specification and in budget.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="expertise" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Expertise</span><h2 class="d2 split">Built for <em>high power.</em></h2></div><p data-r>Bimorph deformable mirrors are the bestsellers for high power lasers and for low order aberration correction in laser and imaging work.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">A French company, <em>founded in 2012.</em></h2></div><p data-r>AKA Optics SAS is established in Marseille, in a region with a strong optics and photonics tradition, using technology transferred from Active Optics NightN.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Systems at</span><p class="cr" data-r><span>INRS, Quebec</span><span>Ecole Polytechnique, Palaiseau</span><span>JAEA, Nara</span><span>Max-Planck-Institut für Quantenoptik, Garching</span><span>FIREX, Japan</span><span>APRI GIST, Korea</span></p></div>'+
   '<div class="bk"><span class="lab kick" data-r>Network</span><p class="cr" data-r><span>OPTITEC cluster</span><span>Marseille Innovation</span><span>Hôtel Technoptic</span><span>Provence Promotion</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="events" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Events</span><h2 class="d2 split">Meet us <em>at the shows.</em></h2></div><p data-r>We exhibit at the leading photonics fairs and take part in the scientific conferences of the adaptive optics community.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us about</span> <em class="nw">your beam.</em></h2>'+
   '<p class="sub" data-r>For quotes, specifications and custom systems, write to us or call our office in Marseille.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>AKA Optics SAS<br>2 rue Marc Donadille<br>13013 Marseille, France</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Tel. <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Legal</span><p data-r>SAS, capital €100,000<br>SIREN 790 049 985<br>RCS Marseille</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>AKA Optics SAS<br>2 rue Marc Donadille, 13013 Marseille</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/expertise">Expertise</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/events">Events</a></div>'+
   '<div class="c"><span class="lab">Products</span>Bimorph mirrors · Stack actuator mirrors<br>Wavefront sensors · Hartmannometers<br>Closed loop systems</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="54" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:800;font-size:66px;letter-spacing:.3em">AKA OPTICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 AKA Optics SAS</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",loop:"story",products:"products",expertise:"expertise",company:"company",events:"events",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"AKA Optics — Adaptive optics, deformable mirrors and wavefront sensors, Marseille",x:"Home"};
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
