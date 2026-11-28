/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
/* four application areas (tomco.com.au > About, Our Clients) */
function caps(){var C=[
  ["Magnetic resonance","<span class=\"nw\">NMR, MRI</span> <span class=\"nw\">and EPR</span>","From Harvard's Martinos Center to Oxford Instruments Magnetic Resonance, Tomco amplifiers drive the RF coils.",'<circle cx="28" cy="28" r="16"/><path class="a" d="M14 28C20 16 24 40 28 28S36 16 42 28"/>'],
  ["Accelerators","<span class=\"nw\">Particle</span> <span class=\"nw\">accelerators</span>","Fermilab, Jefferson Lab, Los Alamos and the Australian Synchrotron, among others.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M28 10A18 18 0 0 1 46 28"/>'],
  ["Radar","<span class=\"nw\">Atmospheric</span> <span class=\"nw\">radar</span>","Radar for NOAA, NASA, the Australian Bureau of Meteorology and the Australian Antarctic Division.",'<path d="M8 46L28 10L48 46"/><path class="a" d="M18 34Q28 26 38 34"/>'],
  ["Industry","<span class=\"nw\">Plasma, heating</span> <span class=\"nw\">and ultrasonics</span>","Plasma applications, ultrasonics, industrial heating and materials processing.",'<path d="M14 44V18M28 44V10M42 44V24"/><path class="a" d="M8 44H48"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* how Tomco amplifiers are built (tomco.com.au > About, Our Products, General Q&A) */
function svc(){var S=[
  ["Solid state, modular","Systems built on current solid-state devices: modular, rugged and easy to use, with minimal ongoing maintenance."],
  ["Fast pulses","Very fast pulse rise and fall times, and ultra fast systems for EPR."],
  ["Protected","Up to +10 dBm overdrive without damage, and robust VSWR protection against load mismatch."],
  ["Built to order","Custom duty cycles, bandwidths and pulse rise and fall times for the most demanding applications."],
  ["Engineers on the phone","As an SME, Tomco's RF engineers work closely with customers, with a response to support requests within one working day."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["10 kHz","to 3 GHz: the frequency span of Tomco's high power RF amplifiers."],
  ["500 kW","the highest power levels Tomco builds, with standard systems from 50 W."],
  ["3 years","warranty on the magnetic resonance range: rugged, high reliability systems."]];
  return '<ol class="hst">'+H.map(function(h){return '<li data-r><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="933" height="732" alt="Tomco BT00250-AlphaSA RF amplifier module" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>RF power amplifiers<span class="nomob"> · Adelaide, South Australia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Clean RF power,</span> <span class="l nw">from kHz to GHz.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Tomco designs and builds solid-state RF amplifiers for MRI and NMR, particle accelerators, radar, plasma and industry, from 50 W to hundreds of kilowatts.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/instruments">Our amplifiers '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>What we do</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Behind the scanner,</span> <span class="nw">the accelerator</span> <span class="nw">and the radar</span> <span class="nw">there is an RF</span> <span class="nw">amplifier.</span> <em><span class="nw">We design</span> <span class="nw">and build them.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3 GHz</span><p class="k">the top of Tomco\'s frequency range, which starts at 10 kHz</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">500 kW</span><p class="k">the highest power levels Tomco amplifiers reach</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">+10 dBm</span><p class="k">of input overdrive a magnetic resonance amplifier handles without damage</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside a pulsed amplifier</span><h2 class="d3"><span class="nw">A milliwatt in,</span> <em class="nw">a kilowatt out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Input</span><span>Gate</span><span>Pulse</span><span>Protect</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">A low-level</span> <span class="nw">RF pulse arrives.</span></h2><p>The spectrometer or exciter sends a low-level RF signal, here in the 100 kHz to 30 MHz band of an AlphaS amplifier.</p></article>'+
     '<article class="step"><h2><span class="nw">The gate</span> <span class="nw">opens the amplifier.</span></h2><p>A gate signal enables the amplifier for the pulse; low power CW operation is also available automatically in the 20% duty models.</p></article>'+
     '<article class="step"><h2><span class="nw">The pulse comes out</span> <span class="nw">at full power.</span></h2><p>The same waveform leaves at up to 1 kW peak, with very fast rise and fall, at up to 20% duty cycle.</p></article>'+
     '<article class="step"><h2><span class="nw">The load</span> <span class="nw">is watched.</span></h2><p>Forward and reflected power are monitored; if the mismatch exceeds the threshold, VSWR protection steps in.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="instruments" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Amplifiers</span><h2 class="d2 split"><span class="nw">Pulsed, CW</span> <em class="nw">and made to order.</em></h2></div><p data-r>High-performance modular systems from 10 kHz to 3 GHz, and custom solutions for the most demanding applications.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split"><span class="nw">Trusted by</span> <em class="nw">the big laboratories.</em></h2></div><p data-r>Tomco supplies RF amplifier systems to scientific and industrial customers worldwide.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Customers include</span><p class="cr" data-r><span>Fermilab</span><span>Brookhaven</span><span>CSIRO</span><span>NIH</span><span>NOAA</span><span>NASA</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">Rugged, fast</span> <em class="nw">and protected.</em></h2></div><p data-r>An active R&amp;D program keeps Tomco products on the most current solid-state technology.</p></div>'+
   svc()+
   '<div class="trn" data-r><span class="lab kick">New</span><p>The BT02000-DualChannel puts two 1 kW channels in one amplifier for NMR.</p><a class="ul" href="https://tomco.com.au/our-products/amplifiers-for-magnetic-resonance/" target="_blank" rel="noopener">See the range</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">RF engineers</span> <em class="nw">in Adelaide.</em></h2></div><p data-r>A technical team headed by specialist RF engineers, always accessible to customers.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Leadership</span><ul>'+
     '<li data-r><span class="nm">Tom Dillon</span><span class="lab rl">CEO, Director</span></li>'+
     '<li data-r><span class="nm">Nik Dukic</span><span class="lab rl">Production Manager</span></li>'+
     '<li data-r><span class="nm">Brenton Vandepeer</span><span class="lab rl">Project Scientist</span></li>'+
    '</ul></div>'+
    '<div class="engpol"><span class="lab kick" data-r>In numbers</span>'+hist()+'</div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Clients include</span><p class="cr" data-r><span>Australian Synchrotron</span><span>Jefferson Lab</span><span>Oxford Instruments</span><span>Magritek</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Orders</span> <em class="nw">and new amplifiers.</em></h2></div><p data-r>Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us about</span> <em class="nw">your load.</em></h2>'+
   '<p class="sub" data-r>Frequency, power, duty cycle and pulse width: send us your requirements and our RF engineers will propose the amplifier.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Request a quote '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span>Tomco Technologies</span><br><span>38 Payneham Road, Stepney</span><br><span>South Australia 5069</span></p></div>'+
    '<div><span class="lab" data-r>Sales</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Telephone '+TELT+'</span></p></div>'+
    '<div><span class="lab" data-r>Support</span><p data-r><a class="ul" href="mailto:'+SUP+'">'+SUP+'</a><br><span>Response within one working day</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Tomco Technologies, 38 Payneham Road, Stepney, South Australia 5069</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/instruments">Amplifiers</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">RF power</span>Solid-state RF amplifiers for science and industry, designed and built in South Australia.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:400;font-size:40px;letter-spacing:.3em">TOMCO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Tomco Technologies</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",instruments:"instruments",applications:"applications",technology:"technology",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Tomco Technologies — RF power amplifiers for science and industry",x:"Home"};
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
