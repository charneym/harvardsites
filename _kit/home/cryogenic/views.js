/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
/* four application areas (cryogenic.co.uk > About, Product Range, News) */
function caps(){var C=[
  ["Materials","<span class=\"nw\">Magnetic and</span> <span class=\"nw\">electronic materials</span>","VSM, AC susceptibility, resistivity, Hall effect, heat capacity, thermal conductivity and Seebeck, in high field and from 300 mK.",'<rect x="12" y="12" width="32" height="32"/><path class="a" d="M12 28H44M28 12V44"/>'],
  ["Quantum","<span class=\"nw\">Millikelvin</span> <span class=\"nw\">and quantum</span>","Dilution refrigerators to 10 mK and STM and AFM platforms to 30 mK, for quantum materials and devices.",'<circle cx="28" cy="28" r="16"/><path class="a" d="M28 12V44"/>'],
  ["Physics","<span class=\"nw\">Particle and</span> <span class=\"nw\">beam-line physics</span>","Large-bore magnets for muon decay and neutron experiments, and UHV magnets for beam lines and X-ray scattering.",'<path d="M6 28H50"/><path class="a" d="M14 18C22 28 34 28 42 18M14 38C22 28 34 28 42 38"/>'],
  ["Metrology","<span class=\"nw\">Resistance standards,</span> <span class=\"nw\">NMR and EPR</span>","Quantum Hall resistance standards, and NMR, MRI and EPR magnets with gradient coils, RF probes and consoles.",'<path d="M10 40L22 16L34 40L46 16"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* how the systems work (cryogenic.co.uk product pages) */
function svc(){var S=[
  ["No liquid helium","Cryocoolers cool both the magnet and the sample space, so there is no helium to buy, transport, handle or lose."],
  ["One cryocooler, one platform","Magnet and variable temperature sample space run from a single cryocooler, with every probe top-loading into the same space."],
  ["Magnets made in-house","Coils are wound from copper-stabilised filamentary superconductor and vacuum impregnated with epoxy in Cryogenic's own facility."],
  ["Familiar electronics","Measurements use instruments from Lake Shore, Keithley and Stanford Research Systems, for confident results and easy upgrades."],
  ["Support over the internet","Diagnostics, software upgrades and operating advice are often given remotely, wherever the system is installed."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["30+ years","In-depth experience in high field superconducting magnets and low temperature systems, from London."],
  ["18 T","The world's first 18 tesla cryogen-free VSM system with a rotating helium-3 insert, delivered by Cryogenic."],
  ["Recently","A major expansion doubles the main building and the in-house electronics, with a new machine shop."]];
  return '<ol class="hst">'+H.map(function(h){return '<li data-r><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="943" height="1620" alt="Cryogenic 18 tesla cryogen-free magnet system" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Superconducting magnets<span class="nomob"> · London, UK</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">High fields,</span> <span class="l nw">no liquid helium.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Cryogenic builds superconducting magnets and low temperature measurement systems that run on cryocoolers, from compact 3 tesla systems to 18 tesla and beyond.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/instruments">Our systems '+ARR+'</a><a class="btn" href="#/contact">Discuss a system</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why cryogen-free</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Liquid helium</span> <span class="nw">is an expensive</span> <span class="nw">consumable</span> <span class="nw">that limits</span> <span class="nw">low temperature</span> <span class="nw">research.</span> <em><span class="nw">Our systems</span> <span class="nw">do not need it.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">18 T</span><p class="k">the highest field in the standard cryogen-free measurement system range</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10 mK</span><p class="k">the base temperature of Cryogenic\'s ultra-low temperature systems</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;8 h</span><p class="k">to cool a mini system\'s magnet and sample space from room temperature</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside a CFMS</span><h2 class="d3"><span class="nw">Sweep the field,</span> <em class="nw">read the moment.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Cool</span><span>Field</span><span>Vibrate</span><span>Loop</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">A cryocooler</span> <span class="nw">does the cooling.</span></h2><p>A pulse tube cryocooler cools the superconducting magnet and the variable temperature sample space, from 1.6 K to 400 K.</p></article>'+
     '<article class="step"><h2><span class="nw">The magnet</span> <span class="nw">sweeps the field.</span></h2><p>The superconducting magnet ramps the field up, down and through zero, up to ±18 tesla in the high field systems.</p></article>'+
     '<article class="step"><h2><span class="nw">The sample</span> <span class="nw">vibrates.</span></h2><p>In the vibrating sample magnetometer, the sample oscillates between pick-up coils, and the induced signal follows its magnetic moment.</p></article>'+
     '<article class="step"><h2><span class="nw">Out comes</span> <span class="nw">the hysteresis loop.</span></h2><p>Moment against field traces the loop: coercivity, remanence and saturation, at the temperature you set.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="instruments" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Systems</span><h2 class="d2 split"><span class="nw">Standard systems,</span> <em class="nw">bespoke magnets.</em></h2></div><p data-r>Standard systems ship on relatively short delivery; for special requirements our physicists and engineers design and build the magnet.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split"><span class="nw">From materials</span> <em class="nw">to muon decay.</em></h2></div><p data-r>Physics, materials science, quantum research and metrology, in universities and national laboratories worldwide.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Measurements</span><p class="cr" data-r><span>VSM</span><span>AC susceptibility</span><span>Resistivity</span><span>Hall effect</span><span>Heat capacity</span><span>Thermal transport</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">Dry, modular</span> <em class="nw">and built in London.</em></h2></div><p data-r>Low operating costs, low maintenance and easy access to the field centre, because there are no cryogens to work around.</p></div>'+
   svc()+
   '<div class="trn" data-r><span class="lab kick">Record field</span><p>Cryogenic delivered the world\'s first 18 tesla cryogen-free VSM measurement system with a rotating helium-3 insert, down to 300 mK.</p><a class="ul" href="https://cryogenic.co.uk/news-and-events/news/cryogenic-has-delivered-worlds-first-18-tesla-cryogen-free-vsm-measurement" target="_blank" rel="noopener">Read the news</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Built by physicists,</span> <em class="nw">in West London.</em></h2></div><p data-r>Growth has come from customer referrals, and from support that continues long after installation.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Leadership</span><ul>'+
     '<li data-r><span class="nm">Dr Jeremy Good</span><span class="lab rl">Director</span></li>'+
    '</ul></div>'+
    '<div class="engpol"><span class="lab kick" data-r>Milestones</span>'+hist()+'</div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Where to meet us</span><p class="cr" data-r><span>APS</span><span>MRS</span><span>DPG</span><span>EUROMAR</span><span>LT</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Big magnets,</span> <em class="nw">and where to meet us.</em></h2></div><p data-r>Recent shows and installations. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us about</span> <em class="nw">your experiment.</em></h2>'+
   '<p class="sub" data-r>Our sales team and design staff are always happy to discuss your field, temperature and measurement requirements.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Cryogenic '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Head office</span><p data-r><span>Cryogenic Limited</span><br><span>Unit 6, Acton Park Industrial Estate</span><br><span>The Vale, London W3 7QE, UK</span></p></div>'+
    '<div><span class="lab" data-r>Sales</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Telephone '+TELT+'</span></p></div>'+
    '<div><span class="lab" data-r>Worldwide</span><p data-r><span>Represented by agents</span><br><span>and partners worldwide</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Head office</span>Cryogenic Limited, Unit 6, Acton Park Industrial Estate, The Vale, London W3 7QE</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/instruments">Systems</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Cryogen-free</span>Superconducting magnets and low temperature measurement systems, designed and built in London.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:400;font-size:40px;letter-spacing:.3em">CRYOGENIC</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Cryogenic Limited</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",instruments:"instruments",applications:"applications",technology:"technology",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Cryogenic Ltd — cryogen-free superconducting magnets and measurement systems",x:"Home"};
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
