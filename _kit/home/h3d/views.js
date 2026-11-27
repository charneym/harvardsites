/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
/* four application areas (h3dgamma.com > Applications) */
function caps(){var C=[
  ["Nuclear power","<span class=\"nw\">Find, characterize</span> <span class=\"nw\">and clean up</span>","Instruments in use at over 75% of US nuclear power plants, to find, characterize and clean up contamination, from outages to waste.",'<circle cx="28" cy="28" r="20"/><circle class="a" cx="28" cy="28" r="5"/><path d="M28 8V18M28 38V48M8 28H18M38 28H48"/>'],
  ["CBRNE response","<span class=\"nw\">Identify on</span> <span class=\"nw\">the move</span>","The A400 handheld: energy resolution near HPGe, five pounds, and startup in minutes. Instruments developed with DOD DTRA are also available.",'<rect x="18" y="6" width="20" height="44"/><rect class="a" x="22" y="12" width="12" height="10"/><path d="M22 30H34M22 36H34"/>'],
  ["Defense","<span class=\"nw\">Mounted on</span> <span class=\"nw\">any vehicle</span>","Systems mount on any vehicle for remote surface monitoring, identifying sources in real time to supplement portal monitors and detect threats early.",'<path d="M6 38H50V44H6Z"/><circle cx="16" cy="46" r="4"/><circle cx="40" cy="46" r="4"/><rect class="a" x="22" y="24" width="14" height="12"/>'],
  ["Medical","<span class=\"nw\">Proton therapy</span> <span class=\"nw\">and protection</span>","The J6400 proton-therapy imaging system, built in support of an NIH effort; tiled M Series rigs for medical imaging; the H420 for radiation protection.",'<path d="M22 6H34V22H50V34H34V50H22V34H6V22H22Z"/><circle class="a" cx="28" cy="28" r="4"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* why H3D CZT is different (h3dgamma.com > Our Technology, "Why H3D CZT is Different") */
function svc(){var S=[
  ["Thick crystals","Every H3D product uses 15 mm or 10 mm thick CZT crystals. CZT has 50% more stopping power than NaI(Tl) per unit volume, so one thickness catches about half of 662 keV gamma rays."],
  ["Voxel-by-voxel calibration","The 3D readout records where in the crystal each gamma ray interacts, so trapping and non-uniformity are calibrated out voxel by voxel."],
  ["Resolution, guaranteed","Better than 1.1% FWHM at 662 keV, a lot better than the best scintillators. Detectors built for the government reach 0.86% FWHM across an 18-detector array."],
  ["Room temperature","No cryogenic cooling: instruments start up in under a minute and a half, run on battery for six hours or more, and are rated from −4 to 122 °F."],
  ["Position in millimetres","Beyond energy resolution, CZT gives millimetre-scale position sensitivity, which standard scintillators do not."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["Origin","Prof. Zhong He invents the 3D-readout technique for semiconductor detectors at the University of Michigan. H3D's instruments are built under licence of its patents."],
  ["ISO 9001","H3D designs, builds and supports its instruments in Ann Arbor under an ISO 9001 certified quality system, available to customers 24/7."],
  ["2025–26","3D CZT completes a year on the International Space Station, and armasuisse orders ten H420 imagers."]];
  return '<ol class="hst">'+H.map(function(h){return '<li data-r><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="967" height="960" alt="H3D H Series gamma-ray imaging spectrometer" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>3D CZT gamma-ray imaging<span class="nomob"> · Ann Arbor, Michigan</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">See radiation,</span> <span class="l nw">in one measurement.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>H3D builds the world\'s highest-performance imaging spectrometers. Our 3D CZT detectors identify, quantify and localize gamma-ray sources at room temperature, for nuclear power plants and emergency responders around the world.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/instruments">Our instruments '+ARR+'</a><a class="btn" href="#/contact">Request a demo</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Changing the paradigm of radiation detection</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Quickly identifying</span> <span class="nw">and localizing</span> <span class="nw">gamma-ray sources</span> <span class="nw">with a single measurement.</span> <em><span class="nw">Built by a team</span> <span class="nw">of eleven PhDs</span> <span class="nw">who stand by</span> <span class="nw">their instruments, 24/7.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;1.1%</span><p class="k">energy resolution, FWHM at 662 keV, guaranteed on every instrument; 0.8% on the plus models</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">75%</span><p class="k">of US nuclear power plants use H Series imaging spectrometers</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;1.5 min</span><p class="k">from switch-on to measuring, with no cryogenic cooling</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside a 3D CZT detector</span><h2 class="d3"><span class="nw">One crystal,</span> <em class="nw">three answers.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Detect</span><span>Locate</span><span>Identify</span><span>Image</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">A gamma ray</span> <span class="nw">enters the crystal.</span></h2><p>Every H3D instrument is built around CdZnTe crystals 10 or 15 mm thick. CZT stops gamma rays 50% better than NaI(Tl) per unit volume, and works at room temperature.</p></article>'+
     '<article class="step"><h2><span class="nw">Read out</span> <span class="nw">in three dimensions.</span></h2><p>The 3D-readout technique, invented by Prof. Zhong He at the University of Michigan, records where in the crystal each interaction happens, so every voxel is calibrated on its own.</p></article>'+
     '<article class="step"><h2><span class="nw">Name</span> <span class="nw">the isotope.</span></h2><p>Better than 1.1% FWHM at 662 keV, guaranteed: sharp peaks, a lot better than the best scintillators, that tell one isotope from the next.</p></article>'+
     '<article class="step"><h2><span class="nw">Show where</span> <span class="nw">it is.</span></h2><p>Compton imaging from 250 keV to 3 MeV, and coded-aperture imaging down to 50 keV on the H420, overlaid on the camera view: identified, quantified and localized in one measurement.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="instruments" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Instruments</span><h2 class="d2 split"><span class="nw">Imagers, RIIDs</span> <em class="nw">and modules.</em></h2></div><p data-r>Imaging spectrometers, handheld directional RIIDs, spectrometers and integrable modules, all on the same 3D CZT, with something for almost any application.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split"><span class="nw">From the plant floor</span> <em class="nw">to the front line.</em></h2></div><p data-r>Nuclear power and waste, CBRNE and emergency response, defense, safeguards and medicine. H3D also builds custom systems and modules for integration into other products.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Also in use for</span><p class="cr" data-r><span>Safeguards</span><span>Waste characterization</span><span>Environmental</span><span>Space science</span><span>Wildlife protection</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">Why H3D CZT</span> <em class="nw">is different.</em></h2></div><p data-r>Two decades ago CZT was thin, noisy and expensive. Crystals have grown thicker and cleaner since, and H3D\'s readout overcomes most of the material problems that remain.</p></div>'+
   svc()+
   '<div class="trn" data-r><span class="lab kick">From the lab to orbit</span><p>H3D\'s 3D CZT has been deployed on the International Space Station, testing radiation detectors for future space missions; it passed one year in orbit in April 2026.</p><a class="ul" href="https://www.ans.org/news/article-7865/a-year-in-orbit-iss-deployment-tests-radiation-detectors-for-future-space-missions/" target="_blank" rel="noopener">Read the ANS article</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Physicists who</span> <em class="nw">build instruments.</em></h2></div><p data-r>H3D exists to serve customer needs. With extensive experience in detector applications, we make understanding customers and building solutions our highest priority.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Leadership</span><ul>'+
     '<li data-r><span class="nm">Dr. Willy Kaye</span><span class="lab rl">Chief Executive Officer</span></li>'+
     '<li data-r><span class="nm">Dr. Michael Streicher</span><span class="lab rl">COO and President</span></li>'+
     '<li data-r><span class="nm">Prof. Zhong He</span><span class="lab rl">Chairman</span></li>'+
    '</ul></div>'+
    '<div class="engpol"><span class="lab kick" data-r>Milestones</span>'+hist()+'</div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Credentials</span><p class="cr" data-r><span>ISO 9001</span><span>Great Place to Work Certified</span><span>University of Michigan licence</span><span>Made in Ann Arbor</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">From orbit</span> <em class="nw">to the savanna.</em></h2></div><p data-r>A year on the space station, a Swiss defence order and a rhino-horn anti-poaching project. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us what</span> <em class="nw">you need to find.</em></h2>'+
   '<p class="sub" data-r>A price quotation, an on-site demonstration or a custom system: tell us about your application and our team will come back to you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email H3D '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span>H3D, Inc.</span><br><span>812 Avis Drive</span><br><span>Ann Arbor, MI 48108, USA</span></p></div>'+
    '<div><span class="lab" data-r>Sales and enquiries</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Telephone '+TELT+'</span></p></div>'+
    '<div><span class="lab" data-r>Support</span><p data-r><span>Customer portal and support</span><br><span>for H3D instruments, 24/7</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>H3D, Inc., 812 Avis Drive, Ann Arbor, MI 48108, USA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/instruments">Instruments</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">3D CZT</span>Gamma-ray imaging spectrometers, RIIDs and detector modules, designed and built in Ann Arbor, Michigan.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:400;font-size:40px;letter-spacing:.2em">H3D · ANN ARBOR</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 H3D, Inc. · H3D is a registered trademark of H3D, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",instruments:"instruments",applications:"applications",technology:"technology",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"H3D — Gamma-ray imaging spectrometers, made in Ann Arbor",x:"Home"};
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
