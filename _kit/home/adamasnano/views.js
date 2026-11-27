/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
/* four application areas (adamasnano.com > Quantum Sensing Use Cases, About, Products) */
function caps(){var C=[
  ["Temperature","<span class=\"nw\">Millikelvin,</span> <span class=\"nw\">sub-micron</span>","The NV centre's resonance shifts with temperature: nanodiamond reads it inside cells and devices, with a typical ODMR-Base limit of 50 mK.",'<path d="M24 8H32V34A9 9 0 1 1 24 34Z"/><circle class="a" cx="28" cy="41" r="4"/>'],
  ["Magnetic field","<span class=\"nw\">Vector fields</span> <span class=\"nw\">from one spectrum</span>","The magnetic field vector is extracted from the splitting of the ODMR spectrum, over a wide field of view with NV diamond plates.",'<path d="M14 10V30A14 14 0 0 0 42 30V10"/><path class="a" d="M14 10H22M34 10H42"/>'],
  ["Free radicals","<span class=\"nw\">Oxidative stress</span> <span class=\"nw\">in real time</span>","T1 relaxometry reveals free radicals at nano- to micromolar levels, targeted to the mitochondrial membrane or the nucleus.",'<circle cx="28" cy="28" r="18"/><circle class="a" cx="28" cy="28" r="5"/><circle cx="40" cy="14" r="3"/>'],
  ["Materials","<span class=\"nw\">CVD seeding</span> <span class=\"nw\">and polishing</span>","Detonation nanodiamond seeds defect-free CVD diamond films and strengthens coatings, polishes and lubricants.",'<path d="M28 6L48 22L28 50L8 22Z"/><path class="a" d="M8 22H48M20 22L28 50L36 22"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* how NV quantum sensing works (adamasnano.com > Quantum Sensing, Knowledge Base, ODMR Instrumentation) */
function svc(){var S=[
  ["A defect that senses","The nitrogen-vacancy centre's electron spin states respond to magnetic and electric fields, microwaves and temperature, and its fluorescence reports them."],
  ["Made, not mined","HPHT nanodiamond with about 100 ppm of nitrogen is irradiated with 2–3 MeV electrons and annealed to form NV centres."],
  ["Never bleaches","Colour centres in diamond do not photobleach or photoblink, unlike quantum dots and organic dyes, and the carbon is biocompatible."],
  ["Plates and particles","Diamond plates give a wide field of view; nanodiamond particles give nanoscale resolution, down to single NV centres."],
  ["Read out on one bench","The Adámas ODMR system runs every essential NV spin experiment with minimal setup, from software, and can be scripted for new protocols."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["2010","Dr. Olga Shenderova and Dr. Gary McGuire found Adámas Nanotechnologies, to make nanodiamond materials and the instruments that support them."],
  ["Today","25+ patents, 200+ scientific publications and customers in over 50 countries, in biomedical and industrial applications."],
  ["2026","An NIH SBIR award for mitochondrial thermometry, and a paper on sensing gaseous oxygen with NV nanodiamond."]];
  return '<ol class="hst">'+H.map(function(h){return '<li data-r><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="2505" height="1015" alt="The Adámas ODMR system: instrument cabinet, microscope and ODMR software" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Nanodiamond quantum sensing<span class="nomob"> · Raleigh, North Carolina</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Quantum sensors,</span> <span class="l nw">made of diamond.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Adámas makes fluorescent nanodiamond, NV diamond plates and the ODMR instruments that read them, so researchers can measure temperature, magnetic fields and free radicals at the nanoscale.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Brilliant diamond solutions</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Our vision is</span> <span class="nw">to empower</span> <span class="nw">the innovation</span> <span class="nw">of ultra-small</span> <span class="nw">quantum sensor technologies.</span> <em><span class="nw">From the particle</span> <span class="nw">to the instrument</span> <span class="nw">that reads it.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2010</span><p class="k">the year Adámas was founded; today it makes nanodiamond materials and supporting instrument systems</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">200+</span><p class="k">scientific publications, with more than 25 patents</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50+</span><p class="k">countries where customers use Adámas diamond, in biomedical and industrial work</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">An ODMR measurement</span><h2 class="d3"><span class="nw">Light in,</span> <em class="nw">a reading out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Excite</span><span>Sweep</span><span>Resonance</span><span>Read</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Green light,</span> <span class="nw">red fluorescence.</span></h2><p>A green laser excites the nitrogen-vacancy centres in the diamond, which glow red to near-infrared, steadily, without photobleaching.</p></article>'+
     '<article class="step"><h2><span class="nw">Sweep</span> <span class="nw">the microwaves.</span></h2><p>The ODMR system steps a microwave field through the NV spin resonance, near 2.87 GHz, while it records the fluorescence.</p></article>'+
     '<article class="step"><h2><span class="nw">The glow</span> <span class="nw">dips at resonance.</span></h2><p>At resonance the NV spin flips into a darker state and the fluorescence drops. The software extracts the splitting D, E, the linewidth and the contrast.</p></article>'+
     '<article class="step"><h2><span class="nw">Read the field,</span> <span class="nw">or the temperature.</span></h2><p>A magnetic field splits the dip in two; temperature shifts it. ODMR-Base reports the magnetic field vector, and temperature with a typical limit of 50 mK.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Particles, plates</span> <em class="nw">and instruments.</em></h2></div><p data-r>Fluorescent nanodiamond with NV and NVN centres, single-crystal NV plates, ODMR instrumentation and detonation nanodiamond, in stock and to order.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split"><span class="nw">What a diamond</span> <em class="nw">can measure.</em></h2></div><p data-r>NV centres respond to their surroundings, so a particle or a plate becomes a thermometer, a magnetometer or a free-radical sensor, while detonation nanodiamond strengthens materials.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Also used for</span><p class="cr" data-r><span>Bio-imaging</span><span>Diagnostics</span><span>Gaseous oxygen</span><span>Anticounterfeiting</span><span>CVD diamond seeding</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="sensing" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quantum sensing</span><h2 class="d2 split"><span class="nw">A spin in a lattice,</span> <em class="nw">read with light.</em></h2></div><p data-r>The nitrogen-vacancy centre in diamond is a powerful platform for quantum sensing and imaging, from wide-field plates to single centres in a nanoparticle.</p></div>'+
   svc()+
   '<div class="trn" data-r><span class="lab kick">New in 2026</span><p>T1 relaxometry together with changes in ODMR contrast measures molecular oxygen in the gas phase, published by the Adámas team in Advanced Functional Materials.</p><a class="ul" href="https://doi.org/10.1002/adfm.76946" target="_blank" rel="noopener">Read the paper</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Scientists who</span> <em class="nw">make diamond.</em></h2></div><p data-r>Adámas collaborates with academic and industrial partners and brings deep knowledge of processing nanodiamond particles and of their applications.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Executive team</span><ul>'+
     '<li data-r><span class="nm">Dr. Olga Shenderova</span><span class="lab rl">Founder, President and CTO</span></li>'+
     '<li data-r><span class="nm">Dr. Gary McGuire</span><span class="lab rl">Founder, Business Development</span></li>'+
     '<li data-r><span class="nm">Dr. Kevin Smith</span><span class="lab rl">Director of Marketing</span></li>'+
     '<li data-r><span class="nm">Mary Eberle</span><span class="lab rl">Chief Financial Officer</span></li>'+
    '</ul></div>'+
    '<div class="engpol"><span class="lab kick" data-r>Milestones</span>'+hist()+'</div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Research support</span><p class="cr" data-r><span>NIH NIGMS</span><span>NIH NCATS</span><span>SBIR Phase I and II</span><span>LattiSpec premier seller</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">New papers,</span> <em class="nw">new grants.</em></h2></div><p data-r>Gaseous oxygen sensing, mitochondrial thermometry and free-radical detection. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us what</span> <em class="nw">you want to sense.</em></h2>'+
   '<p class="sub" data-r>A quote, a custom particle or plate, or an ODMR system for your lab: write to us and our scientists will come back to you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Adámas '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call 919-881-0500</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span>Adámas Nanotechnologies, Inc.</span><br><span>8100 Brownleigh Drive, Suite 120</span><br><span>Raleigh, NC 27617, USA</span></p></div>'+
    '<div><span class="lab" data-r>Quotes and enquiries</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Telephone '+TELT+'</span></p></div>'+
    '<div><span class="lab" data-r>Distributors</span><p data-r><span>China, India, Europe,</span><br><span>Japan and South Korea</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Adámas Nanotechnologies, Inc., 8100 Brownleigh Drive, Suite 120, Raleigh, NC 27617</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">919-881-0500</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/sensing">Quantum sensing</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Since 2010</span>Fluorescent nanodiamond, NV diamond plates and ODMR instrumentation, made in Raleigh, North Carolina.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:400;font-size:40px;letter-spacing:.2em">ADÁMAS NANO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Adámas Nanotechnologies, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",products:"products",applications:"applications",sensing:"sensing",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Adámas Nanotechnologies — Nanodiamond for quantum sensing",x:"Home"};
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
