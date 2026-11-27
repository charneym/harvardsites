/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
/* four application areas (rbdinstruments.com > Products, About, product pages) */
function caps(){var C=[
  ["Surface analysis","<span class=\"nw\">Thin films</span> <span class=\"nw\">and clean surfaces</span>","Elemental composition of thin films, sample cleanliness, thermal oxides and surface contamination, by Auger spectroscopy.",'<rect x="8" y="34" width="40" height="10"/><path class="a" d="M8 30H48M8 26H48"/>'],
  ["Vacuum","<span class=\"nw\">Pump down</span> <span class=\"nw\">faster</span>","Desorbing water vapor with UVC or shortwave infrared, from load locks and ALD reactors to 100-litre chambers.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M28 16V28L36 34"/>'],
  ["Beams and devices","<span class=\"nw\">Electron and</span> <span class=\"nw\">ion currents</span>","Electron and ion beam currents, and diode and IC I/V curves, logged and graphed even in noisy environments.",'<path d="M6 40C14 40 16 16 24 16S34 40 42 40H50"/><path class="a" d="M6 46H50"/>'],
  ["Legacy systems","<span class=\"nw\">PHI systems,</span> <span class=\"nw\">kept running</span>","Service, parts, refurbished systems and software upgrades for legacy PHI Auger, XPS and SIMS instruments.",'<path d="M14 42L28 14L42 42Z"/><path class="a" d="M22 34H34"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* how the instruments work (rbdinstruments.com product pages) */
function svc(){var S=[
  ["Auger, on your own chamber","The microCMA brings Auger electron spectroscopy to an existing vacuum chamber, with the sensitivity and resolution of much larger spectrometers."],
  ["A cylindrical mirror analyzer","Electrons are accepted at 42.3°, the second-order focusing angle, from a sample 4 mm from the end of the optics."],
  ["Water off the walls","UVC and shortwave infrared drive water vapor off chamber walls, the slowest gas to pump, so vacuum comes sooner and goes lower."],
  ["Current, floating at 5 kV","The 9103 measures picoamps while floating at high voltage, with an ASCII interface for Windows, Linux, macOS, Matlab and LabVIEW."],
  ["Legacy, supported","RBD's AugerScan and AugerMap software and PHI parts keep older surface analysis systems productive."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["1990","RBD Instruments is founded to serve the surface analysis and materials science markets."],
  ["35 years","Products and support for universities, industry and government research facilities worldwide, from Bend, Oregon."],
  ["2026","A new partnership with Dylan James Scientific and rbdinstruments.eu bring local support to the UK and Europe."]];
  return '<ol class="hst">'+H.map(function(h){return '<li data-r><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1700" height="879" alt="RBD 9103 autoranging USB picoammeter" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Surface science instruments<span class="nomob"> · Bend, Oregon, since 1990</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Clean surfaces,</span> <span class="l nw">better vacuum.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>RBD Instruments builds compact Auger analyzers, picoammeters, water vapor desorption systems and ion sources for surface and materials science.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/instruments">Our products '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>What we do</span>'+
   '<h2 class="txt" id="mani"><span class="nw">We design products</span> <span class="nw">that solve problems</span> <span class="nw">other companies</span> <span class="nw">do not always</span> <span class="nw">address.</span> <em><span class="nw">And we support</span> <span class="nw">them long after</span> <span class="nw">the sale.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1990</span><p class="k">the year RBD began serving the surface analysis and materials science markets</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5 kV</span><p class="k">the 9103 picoammeter floats up to 5 kV DC while it measures picoamps</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">127</span><p class="k">9103 picoammeters can be synchronized for multi-channel measurements</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside a microCMA</span><h2 class="d3"><span class="nw">Which atoms are</span> <em class="nw">on the surface?</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Beam</span><span>Emit</span><span>Filter</span><span>Spectrum</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">An electron beam</span> <span class="nw">hits the sample.</span></h2><p>The integrated electron gun, up to 3 kV, sits on the axis of the analyzer and points at the sample 4 mm from the end of the optics.</p></article>'+
     '<article class="step"><h2><span class="nw">Atoms answer</span> <span class="nw">with Auger electrons.</span></h2><p>Excited atoms near the surface relax and emit Auger electrons, whose energies are characteristic of each element.</p></article>'+
     '<article class="step"><h2><span class="nw">The mirror sorts</span> <span class="nw">them by energy.</span></h2><p>The cylindrical mirror analyzer accepts electrons at 42.3° and passes one energy at a time as the voltage is swept.</p></article>'+
     '<article class="step"><h2><span class="nw">Peaks name</span> <span class="nw">the elements.</span></h2><p>The spectrum shows the composition of the surface, lithium and heavier: films, oxides and contamination.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="instruments" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Built for the</span> <em class="nw">vacuum chamber.</em></h2></div><p data-r>Surface analysis, low-current measurement, water vapor desorption and ion sources, plus parts and service for PHI systems.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split"><span class="nw">From the surface</span> <em class="nw">to the pump.</em></h2></div><p data-r>RBD serves leading research centers, universities and manufacturers worldwide.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Works with</span><p class="cr" data-r><span>Windows</span><span>Linux</span><span>macOS</span><span>Matlab</span><span>LabVIEW</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">Big-lab results,</span> <em class="nw">compact instruments.</em></h2></div><p data-r>Proven surface science methods, made to fit the chamber, the bench and the budget you already have.</p></div>'+
   svc()+
   '<div class="trn" data-r><span class="lab kick">New in 2026</span><p>Monochromator X-ray source anodes are now re-tipped with copper and a diamond disc, which carries heat away about five times better than copper.</p><a class="ul" href="https://www.rbdinstruments.com/blog/10-610-monochromator-x-ray-source-re-tipping-service/" target="_blank" rel="noopener">Read about re-tipping</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Thirty-five years</span> <em class="nw">of surface science.</em></h2></div><p data-r>Designed, built and supported in Bend, Oregon, with distributors in Europe and Asia.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Leadership</span><ul>'+
     '<li data-r><span class="nm">Randy Dellwo</span><span class="lab rl">President and CEO</span></li>'+
    '</ul></div>'+
    '<div class="engpol"><span class="lab kick" data-r>Milestones</span>'+hist()+'</div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Distribution</span><p class="cr" data-r><span>Dylan James Scientific, UK and Europe</span><span>PCS Gerstl, Germany</span><span>Crosstech, China</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Closer to Europe,</span> <em class="nw">and a new service.</em></h2></div><p data-r>Where to meet us and what is new. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us about</span> <em class="nw">your chamber.</em></h2>'+
   '<p class="sub" data-r>A quote gives you the most accurate pricing, good for 30 days. Tell us what you need to measure or pump down, and we will answer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Request a quote '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span>RBD Instruments, Inc.</span><br><span>2437 NE Twin Knolls Drive, Suite 2</span><br><span>Bend, OR 97701, USA</span></p></div>'+
    '<div><span class="lab" data-r>Sales</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Telephone '+TELT+'</span></p></div>'+
    '<div><span class="lab" data-r>Europe</span><p data-r><a class="ul" href="mailto:'+MAILEU+'">'+MAILEU+'</a><br><span>Dylan James Scientific</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>RBD Instruments, Inc., 2437 NE Twin Knolls Drive, Suite 2, Bend, OR 97701</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/instruments">Products</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Since 1990</span>Surface analysis, current measurement and vacuum products, designed and supported in Bend, Oregon.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:400;font-size:40px;letter-spacing:.3em">RBD INSTRUMENTS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 RBD Instruments, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",instruments:"instruments",applications:"applications",technology:"technology",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"RBD Instruments — surface analysis, current measurement and vacuum instruments",x:"Home"};
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
