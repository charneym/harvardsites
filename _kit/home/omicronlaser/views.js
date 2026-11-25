/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prodRows(){return '<ul class="pfr pipe np">'+PROD.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Product page '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row om-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
/* application fields: the company's Customers page */
function caps(){var C=[
  ["Medicine and biotechnology","Laser systems for flow cytometry, laser-scanning microscopy and endoscopy. Modern medicine is no longer conceivable without laser technology.",'<circle cx="28" cy="22" r="12"/><path d="M28 34V48M18 48H38"/><circle class="a" cx="28" cy="22" r="5"/><circle class="f" cx="28" cy="22" r="2.2"/>'],
  ["Digital imaging and data storage","Computer to plate, DVD mastering, holographic data storage, micro-lithography and reprography.",'<circle cx="28" cy="28" r="19"/><circle class="a" cx="28" cy="28" r="7"/><path d="M28 9V4M47 28H52"/><circle class="f" cx="28" cy="28" r="2.2"/>'],
  ["Quality assurance and measurement","Complete solutions for Raman spectroscopy, wafer inspection and surface and materials analysis.",'<path d="M8 44H48"/><path class="a" d="M10 40L20 22L28 34L36 14L46 40"/><circle class="f" cx="36" cy="14" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Laser and LED light sources<span class="nomob"> · Rodgau, Germany</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Laser and LED light,</span><span class="l">built for your</span><span class="l"><em>application.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>For 35 years Omicron has developed, produced and sold laser and LED light sources. From Rodgau near Frankfurt it builds everything from single diode lasers to multi-wavelength light engines, for microscopy, biotechnology, medicine and industry.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Explore the products '+ARR+'</a><a class="btn" href="#/contact">Talk to us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Application-specific light sources</span>'+
   '<h2 class="txt" id="mani">In close cooperation with its customers, Omicron builds tailored solutions, from single- to multi-wavelength systems, <em>under ISO 9001 and ISO 13485.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">35</span><p class="k">Years developing, producing and selling laser and LED light sources</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">36</span><p class="k">Months of warranty on Omicron light sources</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+</span><p class="k">Wavelengths available in a LightHUB Ultra®, from 375 to 1550 nm</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside a LightHUB Ultra®</span><h2 class="d3">Many lasers, <em>one fibre.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Lasers</span><span>Combine</span><span>Couple</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>One laser per wavelength.</h2><p>Each colour comes from its own diode laser: up to seven in one engine, chosen from over 30 wavelengths between 375 and 1550 nm, and upgradable by the user. Every laser keeps direct analogue and digital modulation.</p></article>'+
     '<article class="step"><h2>Combined on one axis.</h2><p>The beams are brought onto one common axis, so every selected wavelength leaves the engine as a single beam, ready for the microscope or instrument.</p></article>'+
     '<article class="step"><h2>Coupled into the fibre.</h2><p>The combined light is efficiently coupled into one or two single-mode, polarization-maintaining or multimode fibres, with an optional fast fibre switch and a fail-safe laser safety shutter (SIL-2).</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">Light for work <em>that has to be right.</em></h2></div><p data-r>Omicron develops and produces laser diode systems and laser applications for companies around the globe, and supports customers in integrating them, on site if needed.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Built in Rodgau</span><p class="cr" data-r><span>Developed and produced in-house</span><span>On average two new developments a year</span><span>Modular electronics with programmable logic and microcontrollers</span><span>ISO 9001 · ISO 13485</span><span>European and American standards</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">From one diode laser <em>to seven wavelengths.</em></h2></div><p data-r>CW and fast-modulated sources in the nano- and picosecond range, from UV to NIR, from a few milliwatts to several watts. The LightHUB® series has set standards in microscopy for 20 years.</p></div>'+
   prodRows()+
   '<div class="act shop" data-r><a class="btn solid" href="https://www.omicron-laser.de/english/downloads.html" target="_blank" rel="noopener">Datasheets and downloads '+ARR+'</a><a class="btn" href="https://omicron-medical.de/" target="_blank" rel="noopener">Omicron medical department</a></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people <em>behind the light.</em></h2></div><p data-r>Omicron’s highly qualified team develops individual solutions for its customers, and quality is ensured with modern measurement technology. Management, as listed in the company’s imprint, and the press contact:</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Rodgau.</em></h2></div><p data-r>Trade fairs and product launches. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Tell us about <em>your application.</em></h2>'+
   '<p class="sub" data-r>For quotes, custom configurations or support, the team in Rodgau would be glad to hear from you. Distributors serve customers worldwide.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Omicron '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Omicron-Laserage Laserprodukte GmbH<br>Raiffeisenstrasse 5e<br>63110 Rodgau-Dudenhofen, Germany</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Press</span><p data-r><a class="ul" href="mailto:'+PMAIL+'">'+PMAIL+'</a><br><a class="ul" href="https://www.omicron-laser.de/english/distributors.html" target="_blank" rel="noopener">Distributors worldwide</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Raiffeisenstrasse 5e<br>63110 Rodgau-Dudenhofen, Germany</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Certified</span>ISO 9001<br>ISO 13485</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Jost\',Arial,sans-serif;font-weight:300;font-size:58px;letter-spacing:.12em">OMICRON</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Omicron-Laserage Laserprodukte GmbH</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",applications:"applications",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Omicron-Laserage — laser and LED light sources, Rodgau, Germany",x:"Home"};
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
