/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
/* four application areas (handixscientific.com > Applications, product pages) */
function caps(){var C=[
  ["Balloon and drone","<span class=\"nw\">From the ground</span> <span class=\"nw\">to the stratosphere</span>","POPS is small, light and runs on 5 W: built for unmanned aircraft, balloonsondes and ground sensor networks.",'<path d="M28 6C38 6 44 14 44 22C44 32 34 38 28 42C22 38 12 32 12 22C12 14 18 6 28 6Z"/><path class="a" d="M28 42V52"/>'],
  ["Clouds and ice","<span class=\"nw\">Ice nucleation</span> <span class=\"nw\">and clouds</span>","The CFDC-IAS measures ice-nucleating particles in real time, for climate and cloud research.",'<path d="M28 8V48M11 18L45 38M11 38L45 18"/><path class="a" d="M22 8L28 14L34 8"/>'],
  ["Bioaerosols","<span class=\"nw\">Viable bioaerosol</span> <span class=\"nw\">capture</span>","Condensation growth tubes collect airborne virus and bacteria gently, where filters, impingers and impactors fall short.",'<circle cx="28" cy="28" r="12"/><path class="a" d="M28 10V16M28 40V46M10 28H16M40 28H46"/>'],
  ["Industry","<span class=\"nw\">Workplace air</span> <span class=\"nw\">and processes</span>","Occupational exposure, welding fume and silica monitoring, and nano-contaminants in semiconductor process fluids.",'<path d="M8 48V26L20 32V24L32 30V14H44V48Z"/><path class="a" d="M8 48H48"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* the measurement principles (handixscientific.com product pages; NOAA Technology Partnerships Office, 2021) */
function svc(){var S=[
  ["Optical particle sizing","POPS sends a 405 nm laser across the sample stream and collects the light each particle scatters between 38° and 142°."],
  ["Condensation growth","Water-based laminar-flow growth tubes, the Aerosol Devices technology, enlarge ultrafine particles so they can be collected or counted."],
  ["Ice activation","A continuous flow diffusion chamber holds particles at set temperature and supersaturation and counts the ones that turn to ice."],
  ["Raman plus spark emission","PACS collects particles onto a rotating electrode and reads molecules by Raman and elements by spark emission, in about a minute."],
  ["Licensed from federal labs","POPS was invented at NOAA's Chemical Sciences Laboratory; the PACS technology is licensed from NIOSH and the CDC."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["2015","Dr. Ping Chen meets NOAA physicist Dr. Ru-Shan Gao on a trail in Boulder, hears about POPS, and sets out to license it."],
  ["2021","More than 200 POPS sold worldwide, and the company has grown from one to twelve full-time employees."],
  ["2026","Aerosol Devices is a division of Handix, and new composition and bioaerosol instruments join the line."]];
  return '<ol class="hst">'+H.map(function(h){return '<li data-r><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1580" height="1381" alt="Handix POPS portable optical particle spectrometer" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Atmospheric aerosol instruments<span class="nomob"> · Loveland, Colorado</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">From the lab</span> <span class="l nw">to the sky.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Handix builds light, field-ready instruments that size, count, collect and identify the particles in our air, on balloons, drones and the ground.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/instruments">Our instruments '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why aerosols</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Dust, mist, smoke:</span> <span class="nw">tiny particles</span> <span class="nw">that cool</span> <span class="nw">or warm the planet,</span> <span class="nw">seed clouds</span> <span class="nw">and carry disease.</span> <em><span class="nw">We build the tools</span> <span class="nw">that measure them</span> <span class="nw">where they are.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">200+</span><p class="k">POPS sold by 2021, to customers from the US and the UK to Germany, Japan and Korea</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">130</span><p class="k">nanometres: the smallest particle POPS detects, sizing up to 3 µm one particle at a time</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5 W</span><p class="k">average power for a POPS, light enough to fly on a balloon or a small drone</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside a POPS</span><h2 class="d3"><span class="nw">One particle,</span> <em class="nw">one flash of light.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sample</span><span>Laser</span><span>Pulse</span><span>Size</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Air is drawn</span> <span class="nw">through the inlet.</span></h2><p>A small pump pulls sample air through a 1/8 inch inlet at 0.05 to 0.35 litres a minute, so particles pass one at a time.</p></article>'+
     '<article class="step"><h2><span class="nw">A laser crosses</span> <span class="nw">the stream.</span></h2><p>A 405 nm laser beam, about 70 mW, crosses the particle stream inside the optical chamber.</p></article>'+
     '<article class="step"><h2><span class="nw">Each particle</span> <span class="nw">flashes.</span></h2><p>Light scattered between 38° and 142° is collected onto a detector: one pulse per particle, taller for larger particles.</p></article>'+
     '<article class="step"><h2><span class="nw">Pulses become</span> <span class="nw">a size distribution.</span></h2><p>Pulse heights are sorted into user-set size channels from 130 nm to 3 µm, logged once a second to the on-board card.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="instruments" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Instruments</span><h2 class="d2 split"><span class="nw">Size, count,</span> <em class="nw">collect, identify.</em></h2></div><p data-r>Optical spectrometers, ice-nucleation chambers and condensation growth samplers, built in Colorado for field and lab.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split"><span class="nw">Wherever the air</span> <em class="nw">carries particles.</em></h2></div><p data-r>Climate and cloud research, public health and industrial hygiene: the same questions about what floats in the air.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Customers include</span><p class="cr" data-r><span>NOAA</span><span>NASA</span><span>CDC</span><span>EPA</span><span>US Navy</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">Federal-lab science,</span> <em class="nw">built to fly.</em></h2></div><p data-r>Proven methods made small, light and robust enough for science on airplanes, balloons and drones.</p></div>'+
   svc()+
   '<div class="trn" data-r><span class="lab kick">New in 2026</span><p>The PACS1110 aerosol composition spectrometer pairs Raman and spark emission spectroscopy for near-real-time chemistry of airborne particles.</p><a class="ul" href="https://handixscientific.com/pacs-treas2/" target="_blank" rel="noopener">See PACS1110</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Started on a trail</span> <em class="nw">in Boulder.</em></h2></div><p data-r>Handix develops aerosol instruments and performs atmospheric research, with Aerosol Devices as a division, in Loveland, Colorado.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Leadership</span><ul>'+
     '<li data-r><span class="nm">Dr. Ping Chen</span><span class="lab rl">Founder and CEO</span></li>'+
    '</ul></div>'+
    '<div class="engpol"><span class="lab kick" data-r>Milestones</span>'+hist()+'</div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Partners</span><p class="cr" data-r><span>NOAA Chemical Sciences Laboratory</span><span>NIOSH</span><span>Aerosol Devices</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">New orders,</span> <em class="nw">new instruments.</em></h2></div><p data-r>Recent federal orders and additions to the line. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us what</span> <em class="nw">you need to measure.</em></h2>'+
   '<p class="sub" data-r>Questions about POPS, the CFDC or our collectors, or a quote for your campaign: write to us and our team will answer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+SALES+'">Request a quote '+ARR+'</a><a class="btn" href="mailto:'+MAIL+'">Email '+MAIL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span>Handix Scientific Inc.</span><br><span>6748 N Franklin Avenue</span><br><span>Loveland, CO 80538, USA</span></p></div>'+
    '<div><span class="lab" data-r>Sales</span><p data-r><a class="ul" href="mailto:'+SALES+'">'+SALES+'</a><br><span>Quotes and product questions</span></p></div>'+
    '<div><span class="lab" data-r>Distributors</span><p data-r><span>Represented internationally</span><br><span>through regional distributors</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Handix Scientific Inc., 6748 N Franklin Avenue, Loveland, CO 80538</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+SALES+'">'+SALES+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/instruments">Instruments</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">From the lab to the sky</span>Atmospheric aerosol instruments for field and lab, designed and built in Colorado.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:400;font-size:40px;letter-spacing:.3em">HANDIX</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Handix Scientific Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",instruments:"instruments",applications:"applications",technology:"technology",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Handix Scientific — atmospheric aerosol instruments, from the lab to the sky",x:"Home"};
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
