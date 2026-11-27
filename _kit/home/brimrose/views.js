/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
/* four NIR application areas (brimrose.com > AOTF-NIR Process Applications) */
function caps(){var C=[
  ["Pharmaceuticals","<span class=\"nw\">Blending, drying,</span> <span class=\"nw\">tablets</span>","Blending uniformity, fluidized-bed drying, tablet analysis and coating inspection, measured in-line as process analytical technology.",'<rect x="12" y="10" width="32" height="36"/><path class="a" d="M12 28H44"/><circle cx="28" cy="19" r="3"/>'],
  ["Chemicals","<span class=\"nw\">Reactions</span> <span class=\"nw\">as they run</span>","Reaction monitoring and lab-accuracy measurements directly on the line, without pulling samples to the laboratory.",'<path d="M22 8H34M24 8V22L12 44H44L32 22V8"/><path class="a" d="M17 36H39"/>'],
  ["Fuels","<span class=\"nw\">Feedstock</span> <span class=\"nw\">to fuel</span>","Fuel and petrochemical analysis, from biodiesel feedstock to the finished fuel.",'<path d="M28 6C20 20 14 28 14 36A14 14 0 0 0 42 36C42 28 36 20 28 6Z"/><path class="a" d="M22 38A6 6 0 0 0 28 44"/>'],
  ["Agriculture and films","<span class=\"nw\">Seeds, food</span> <span class=\"nw\">and thin films</span>","Seed sorting with the SeedMeister, peanut and olive measurement, and thin-film measurement with the integrated Luminar 4020.",'<ellipse cx="28" cy="28" rx="11" ry="18"/><path class="a" d="M28 12V44"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* AOTF technology (brimrose.com > AO Devices, Standard AOTF-NIR Spectrometers, AOTF-HSI) */
function svc(){var S=[
  ["Sound selects the light","An RF acoustic wave inside a crystal separates a single wavelength from a broadband source; the RF frequency alone sets which one."],
  ["No moving parts","The tuning is solid-state and geometry-independent, so it scans fast, covers a wide band and shrugs off vibration on the plant floor."],
  ["Snapshot imaging","The AOTF imager takes a complete snapshot at each wavelength and outputs a whole data cube, with no push-broom scan and no pixel stitching."],
  ["GHz acousto-optics","Since the early 1980s Brimrose has built high-frequency acousto-optic devices in custom small-form packages, one of the few companies that do."],
  ["Built in Maryland","Every product is made in the United States, including advanced materials such as crystal growth, with machining for prototypes in-house."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["1980","Dr. Ronald Rosemeier founds Brimrose Corporation of America, on SBIR grants and as a defense contractor."],
  ["Moon","Brimrose AOTF-NIR spectrometers are space-qualified for lunar missions, and an AOTF device is slated to go to Mars."],
  ["2025–26","HySPI reaches the market, Brimrose joins the ICE MAN project, and new low-cost OEM RF drivers launch."]];
  return '<ol class="hst">'+H.map(function(h){return '<li data-r><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="690" height="552" alt="Brimrose Luminar 4010 fiber-optic AOTF-NIR spectrometer" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Acousto-optic tunable filters<span class="nomob"> · Sparks, Maryland, since 1980</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Light, tuned</span> <span class="l nw">by sound.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Brimrose designs and builds AOTF-NIR spectrometers, hyperspectral imagers and custom acousto-optic devices, for process lines on Earth and instruments bound for the Moon.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/spectrometers">Our spectrometers '+ARR+'</a><a class="btn" href="#/contact">Talk to an expert</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>…we invent your tomorrows</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Brimrose makes things</span> <span class="nw">that nobody else does.</span> <em><span class="nw">Research and development</span> <span class="nw">is the backbone</span> <span class="nw">of the company,</span> <span class="nw">and has been since 1980.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1980</span><p class="k">founded by Dr. Ronald Rosemeier, who has led Brimrose as CEO ever since</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40 yrs</span><p class="k">building AOTF-NIR spectrometers for process analytical technology</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 GHz</span><p class="k">acousto-optic devices, built in custom small-form packages</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside an AOTF-NIR spectrometer</span><h2 class="d3"><span class="nw">One crystal,</span> <em class="nw">every wavelength.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Light</span><span>Tune</span><span>Scan</span><span>Read</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Broadband light</span> <span class="nw">from the sample.</span></h2><p>Light from the process, carried by fiber optics from a probe or flow cell, enters the acousto-optic tunable filter.</p></article>'+
     '<article class="step"><h2><span class="nw">Sound picks</span> <span class="nw">one wavelength.</span></h2><p>An RF acoustic wave inside the crystal separates a single wavelength from the broadband light. The RF frequency alone decides which, with no moving parts.</p></article>'+
     '<article class="step"><h2><span class="nw">Sweep the RF,</span> <span class="nw">build the spectrum.</span></h2><p>Stepping the RF frequency scans the near infrared fast and repeatably, wavelength by wavelength, into a full NIR spectrum.</p></article>'+
     '<article class="step"><h2><span class="nw">Read</span> <span class="nw">the process.</span></h2><p>The spectrum becomes a number on the line, such as moisture while drying or uniformity while blending, measured in-line instead of in the lab.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="spectrometers" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Spectrometers and imagers</span><h2 class="d2 split"><span class="nw">Built around</span> <em class="nw">one technology.</em></h2></div><p data-r>Standard and custom AOTF-NIR spectrometers for in-line, at-line and portable use, AOTF hyperspectral imagers and the acousto-optic devices inside them.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Process applications</span><h2 class="d2 split"><span class="nw">Measured</span> <em class="nw">on the line.</em></h2></div><p data-r>Brimrose integrates AOTF-NIR spectrometers into pharmaceutical, food, chemical, polymer and petrochemical production to improve quality control.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Hyperspectral imaging for</span><p class="cr" data-r><span>Semiconductors</span><span>Defense and security</span><span>Biomedical research</span><span>Agriculture</span><span>Environment</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">Acousto-optics,</span> <em class="nw">all solid state.</em></h2></div><p data-r>An AOTF uses radio-frequency acoustic waves in a crystal to pick out one wavelength of light. The same core runs through every Brimrose spectrometer, imager and device.</p></div>'+
   svc()+
   '<div class="trn" data-r><span class="lab kick">New in 2025</span><p>The AOTF Hyperspectral Polarimetric Imager switches from hyperspectral imager to spectropolarimeter and back, for ground-based, airborne or space-flight instruments without a push-broom scan.</p><a class="ul" href="https://www.brimrose.com/press-center/2025/09/26/dual-purpose-brimrose-phsi-commercially" target="_blank" rel="noopener">Read the announcement</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">A culture of freedom</span> <em class="nw">to explore.</em></h2></div><p data-r>Brimrose has created a culture of freedom to explore and develop new ideas. Many of its people hold advanced degrees and have been pioneers in their fields.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Executive team</span><ul>'+
     '<li data-r><span class="nm">Dr. Ronald G. Rosemeier</span><span class="lab rl">Founder, President and CEO</span></li>'+
     '<li data-r><span class="nm">Dr. Jolanta Soos</span><span class="lab rl">Chief Technology Officer</span></li>'+
     '<li data-r><span class="nm">Dr. Sudhir B. Trivedi</span><span class="lab rl">Director of R&amp;D</span></li>'+
    '</ul></div>'+
    '<div class="engpol"><span class="lab kick" data-r>Milestones</span>'+hist()+'</div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Divisions</span><p class="cr" data-r><span>AO Components</span><span>Spectrometers</span><span>Hyperspectral Imagers</span><span>R&amp;D Group</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">New instruments,</span> <em class="nw">new programs.</em></h2></div><p data-r>OEM RF drivers, a dual-purpose hyperspectral polarimeter and a role on ICE MAN. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us what</span> <em class="nw">you need to see.</em></h2>'+
   '<p class="sub" data-r>A quote, guidance on an application, or a custom-built instrument: share your requirements and we will connect you with the right expert.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Brimrose '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span>Brimrose Corporation of America</span><br><span>19 Loveton Circle, Hunt Valley Loveton Center</span><br><span>Sparks, MD 21152, USA</span></p></div>'+
    '<div><span class="lab" data-r>Enquiries</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Telephone '+TELT+'</span></p></div>'+
    '<div><span class="lab" data-r>Business hours</span><p data-r><span>Monday to Friday</span><br><span>9:00 am to 5:00 pm EST</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Brimrose Corporation of America, 19 Loveton Circle, Sparks, MD 21152</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/spectrometers">Spectrometers</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Made in the USA</span>AOTF-NIR spectrometers, hyperspectral imagers and acousto-optic devices, designed and built in Maryland.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:400;font-size:40px;letter-spacing:.24em">BRIMROSE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Brimrose Corporation of America</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",spectrometers:"spectrometers",applications:"applications",technology:"technology",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Brimrose — AOTF spectrometers, imagers and acousto-optics",x:"Home"};
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
