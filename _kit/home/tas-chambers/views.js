/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
/* four special systems (tasltd.co.uk > Home: Space TVAC, Altitude & Thermal Vacuum, Thermal Shock ESS, Thermal Fluid) */
function caps(){var C=[
  ["Space TVAC","<span class=\"nw\">Thermal vacuum</span> <span class=\"nw\">for satellites</span>","1×10⁻⁷ mbar, +220 °C to −196 °C, with platen and shrouds, mechanical cooling to −128 °C and bespoke sizes. Made in the UK.",'<circle cx="28" cy="28" r="20"/><circle cx="28" cy="28" r="13"/><path class="a" d="M18 28H38M28 18V38"/>'],
  ["Altitude","<span class=\"nw\">Altitude and</span> <span class=\"nw\">low pressure</span>","1400 to 10 mbar, −75 °C or −120 °C to +180 °C, with a humidity option for ice simulation. Cylindrical or cubic.",'<path d="M6 46L22 22L30 32L38 18L50 46Z"/><path class="a" d="M38 6V14M34 10H42"/>'],
  ["ESS and thermal shock","<span class=\"nw\">Thermal shock</span> <span class=\"nw\">and stress screening</span>","Moving basket or static chamber, −90 °C to +220 °C, up to 20 °C per minute linear. Air or water cooled, bespoke sizes available.",'<rect x="6" y="8" width="44" height="18"/><rect x="6" y="30" width="44" height="18"/><path class="a" d="M28 14V42M23 37L28 42L33 37"/>'],
  ["Thermal fluid","<span class=\"nw\">Fluid conditioning</span> <span class=\"nw\">and chillers</span>","Process heating to +350 °C and process cooling to −120 °C by mechanical refrigeration, combined heating and cooling, high accuracy for calibration baths.",'<path d="M10 14H46V44H10Z"/><path class="a" d="M14 32C20 26 24 38 30 32S40 26 42 32"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function svc(){var S=[
  ["Hire chambers","Urgent requirement or short-term need: a large range of hire chambers, −75 °C to +180 °C, 10 to 98 %rh, 11 to 1000 litres. Try before you buy."],
  ["Service contracts","Service contracts for test chambers, test rooms and conditioning units. All makes covered."],
  ["Calibration","Test chamber calibration with UKAS instruments."],
  ["Breakdown, upgrades and refurbishment","Breakdown repairs, upgrades and refurbishment, for TAS chambers and other makes."],
  ["Relocation and pre-owned","Test room relocation, and pre-owned second-user chambers."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["1969","The company is established. Its name, Temperature Applied Sciences, reflects a forward-thinking nature and a willingness to embrace new technologies."],
  ["1987","Temperature Applied Sciences Ltd is incorporated, company number 02175985."],
  ["Today","Design, manufacture, service, calibration and hire from Unit 15, Martlets Trading Estate, Worthing, with apprentices and engineers in voluntary and mandatory training."]];
  return '<ol class="hst">'+H.map(function(h){return '<li data-r><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Environmental test chambers<span class="nomob"> · since 1969</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Test chambers,</span> <span class="l"><em class="nw">made in Worthing.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Temperature Applied Sciences designs and builds environmental test chambers and simulation equipment: thermal and climatic chambers, test rooms, thermal shock, altitude and thermal vacuum systems, with hire, service and calibration.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/chambers">Our chambers '+ARR+'</a><a class="btn" href="#/contact">Make an enquiry</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Creating your perfect environment</span>'+
   '<h2 class="txt" id="mani"><span class="nw">We know a thing or two</span> <span class="nw">about temperature</span> <span class="nw">and humidity</span> <span class="nw">generation and control.</span> <em><span class="nw">We design</span> <span class="nw">and manufacture</span> <span class="nw">for most temperature</span> <span class="nw">control applications.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1969</span><p class="k">established; today the UK manufacturer of environmental test chambers and simulation equipment, in Worthing</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">−128 °C</span><p class="k">reached by TAS mechanical refrigeration, without the assistance of liquid nitrogen</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1728 L</span><p class="k">the largest Series 3 chamber, from a 64 litre bench top, with bespoke sizes beyond</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">A climatic test in a Series 3</span><h2 class="d3"><span class="nw">One chamber,</span> <em class="nw">every condition.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Programme</span><span>Cold</span><span>Humidity</span><span>Heat</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Programme</span> <span class="nw">the profile.</span></h2><p>The TAS touch-screen HMI, built in-house, sets every ramp, dwell and cycle. With VNC, the chamber is run and its data downloaded from any remote location.</p></article>'+
     '<article class="step"><h2><span class="nw">Pull down</span> <span class="nw">to −40 °C.</span></h2><p>Mechanical refrigeration takes the workspace down to −40 °C, or −75 °C, with a −120 °C option, for thermal cycling of products in factory and production testing.</p></article>'+
     '<article class="step"><h2><span class="nw">Hold the humidity,</span> <span class="nw">10 to 98 %rh.</span></h2><p>Climatic versions control humidity from 10 to 98 %rh, with an Ultra Dry option, for temperature and humidity cycling and long-term stability studies.</p></article>'+
     '<article class="step"><h2><span class="nw">Heat to</span> <span class="nw">+180 °C.</span></h2><p>The same chamber climbs to +180 °C, with a +350 °C option, and logs every point of the run for the test report.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="chambers" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Chambers</span><h2 class="d2 split"><span class="nw">Thermal and climatic,</span> <em class="nw">to suit every budget.</em></h2></div><p data-r>Environmental test chambers, temperature chambers and climatic temperature and humidity chambers, from a 11 litre desktop unit to drive-in rooms for whole vehicles.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="special" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Space and special</span><h2 class="d2 split"><span class="nw">Vacuum, altitude,</span> <em class="nw">shock and fluid.</em></h2></div><p data-r>Satellite and space testing, altitude and thermal vacuum chambers, thermal shock and environmental stress screening, and thermal fluid conditioning, designed and built by TAS in bespoke sizes.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Chamber options</span><p class="cr" data-r><span>Plant growth</span><span>Photo-stability</span><span>Shaker interface</span><span>Ultra Dry</span><span>Ice simulation</span><span>Shake and bake</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="service" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Service and hire</span><h2 class="d2 split"><span class="nw">Hire, service</span> <em class="nw">and calibration.</em></h2></div><p data-r>Short-term hire, service contracts, UKAS calibration, upgrades and refurbishment, for TAS chambers and for every other make.</p></div>'+
   svc()+
   '<div class="trn" data-r><span class="lab kick">Chamber control system</span><p>The TAS touch-screen HMI is developed in-house. Our software engineers can add multi-channel thermocouple recording, voltage and current outputs, and VNC remote control and data download.</p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About TAS</span><h2 class="d2 split"><span class="nw">Over 50 years</span> <em class="nw">in the industry.</em></h2></div><p data-r>Innovation is always a priority: we are constantly developing and testing our products to improve performance, reliability and ease of use. We take pride in our products and want you to be proud to own them.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Directors</span><ul>'+
     '<li data-r><span class="nm">Martin Stevens</span><span class="lab rl">Director and company secretary</span></li>'+
     '<li data-r><span class="nm">Timothy Stevens</span><span class="lab rl">Director</span></li>'+
    '</ul></div>'+
    '<div class="engpol"><span class="lab kick" data-r>History</span>'+hist()+'</div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Credentials</span><p class="cr" data-r><span>Made in Britain</span><span>REFCOM</span><span>SafeContractor</span><span>UKAS calibration instruments</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Next at Farnborough,</span> <em class="nw">on stand B90.</em></h2></div><p data-r>New chambers, colder refrigeration, remote control and our next show. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Your product,</span> <em class="nw">our environment.</em></h2>'+
   '<p class="sub" data-r>Looking for something special? Tell us what you need to test, from a desktop chamber to a bespoke test room, and we will come back to you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email TAS '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Works</span><p data-r><span>Temperature Applied Sciences Ltd</span><br><span>Unit 15, Martlets Trading Estate</span><br><span>Martlets Way, Goring-by-Sea</span><br><span>Worthing, West Sussex BN12 4HF</span></p></div>'+
    '<div><span class="lab" data-r>Sales and enquiries</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Telephone '+TELI+'</span></p></div>'+
    '<div><span class="lab" data-r>Next show</span><p data-r><span>Southern Manufacturing &amp; Electronics</span><br><span>Farnborough, 2–4 February 2027</span><br><span>Stand B90</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Works</span>Temperature Applied Sciences Ltd, Unit 15, Martlets Trading Estate, Martlets Way, Worthing BN12 4HF</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/chambers">Chambers</a><br><a class="ul" href="#/special">Space and special</a><br><a class="ul" href="#/service">Service and hire</a><br><a class="ul" href="#/about">About</a></div>'+
   '<div class="c"><span class="lab">Made in the UK</span>Environmental test chambers and simulation equipment, designed and manufactured in Worthing, West Sussex.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:400;font-size:38px;letter-spacing:.16em">TEMPERATURE APPLIED SCIENCES</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Temperature Applied Sciences Ltd · Reg. No. 02175985</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",chambers:"chambers",special:"special",service:"service",about:"about",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Temperature Applied Sciences — Environmental test chambers, made in Worthing",x:"Home"};
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
