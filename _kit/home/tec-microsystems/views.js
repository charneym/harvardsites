/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">'+"Details"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Management</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* four engineering services (tec-microsystems.com > Services: Mathematical Modelling, TE Modules Analysis, Customized Au Patterns, Header-free TECs Development) */
function caps(){var C=[
  ["Mathematical modelling","<span class=\"nw\">The right TEC,</span> <span class=\"nw\">found fast</span>","Our mathematical core model, refined over more than 15 years, searches millions of available TEC types for the optimal cooling solution, as close to real application conditions as possible.",'<path d="M6 46H50M6 46V8"/><path class="a" d="M8 40C18 38 24 16 32 14S44 24 50 30"/><circle class="f" cx="32" cy="14" r="2.4"/>'],
  ["TE modules analysis","<span class=\"nw\">Measured,</span> <span class=\"nw\">not estimated</span>","Direct testing of TEC performance, quality level and power consumption in operating conditions, with our DX8020 TEC Expert system for single-stage and multistage modules.",'<rect x="8" y="14" width="40" height="28"/><path d="M8 34H48"/><path class="a" d="M14 28L20 22L26 26L34 18L42 22"/>'],
  ["Customized Au patterns","<span class=\"nw\">Mount straight</span> <span class=\"nw\">on the ceramic</span>","Gold patterns on the TEC cold-side ceramic let a laser diode chip or APD array mount directly on the cooler, skipping one mounting step and its thermal resistance.",'<path d="M6 36L28 46L50 36L28 26Z"/><path class="a" d="M18 36L28 31L38 36L28 41Z"/><path d="M6 36V40L28 50L50 40V36"/>'],
  ["Header-free TECs","<span class=\"nw\">TECs as</span> <span class=\"nw\">surface-mount parts</span>","Since 2012 we move TEC terminal contacts to the outer face of the bottom ceramic through vias, turning a cooler into an SMD that is placed directly on the printed circuit board.",'<path d="M4 44H52"/><rect x="14" y="22" width="28" height="16"/><path d="M14 30H42"/><path class="a" d="M20 38V44M36 38V44"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Miniature TECs<span class="nomob"> · Berlin-Adlershof</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Thermoelectric coolers,</span> <span class="l"><em class="nw">made to measure.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Since 2007, TEC Microsystems has developed and manufactured thermoelectric cooling for lasers, optoelectronics, telecom, quantum computing and IR and X‑ray detectors.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Send a TEC request</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Thermoelectric expertise since 2007</span>'+
   '<h2 class="txt" id="mani"><span class="nwp">Engineered in Berlin,</span> <span class="nwp">made in Georgia,</span> <em><span class="nwp">every cooler checked.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2007</span><p class="k">founded in the Technology Park Berlin Adlershof</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5,000+</span><p class="k">standard thermoelectric coolers, plus custom designs</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100%</span><p class="k">quality control, in an ISO 9001:2015 certified facility</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside a multistage TEC</span><h2 class="d3"><span class="nw">How a cooler</span> <em class="nw">pumps heat.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Current</span><span>Pellets</span><span>Stages</span><span>Cold side</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">A current</span> <span class="nw">runs through.</span></h2><p>A TEC is two ceramic plates with Bi-Te posts, the pellets, between them. Conductors link the pellets in series, and two terminal wires feed in a DC current.</p></article>'+
     '<article class="step"><h2><span class="nw">Heat moves</span> <span class="nw">with it.</span></h2><p>Each P-N couple carries heat from the top ceramic to the bottom one. The top becomes the cold side; the hot side passes the heat on to the heat sink.</p></article>'+
     '<article class="step"><h2><span class="nw">Each stage cools</span> <span class="nw">the next.</span></h2><p>In a multistage TEC every stage cools down the one above it, so the temperature difference between the hot and cold sides is higher than a single stage can reach.</p></article>'+
     '<article class="step"><h2><span class="nw">Cold enough</span> <span class="nw">for a detector.</span></h2><p>The top ceramic carries the part to be cooled: a laser diode, a photodiode, an IR or X-ray detector. Our multistage MC06 coolers reach 180 to 200 K.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">From single TECs</span> <em class="nw">to test systems.</em></h2></div><p data-r>Our portfolio covers thermoelectric coolers, miniature multistage TECs, aluminium-plate TECs and thermoelectric sub-assemblies, with the controllers and test equipment to run and check them.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split"><span class="nw">Integrated into</span> <em class="nw">your design.</em></h2></div><p data-r>We work directly with our customers’ engineering teams, develop customized TECs and support their integration, from the first estimate to the cooler on your board.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Berlin engineering,</span> <em class="nw">Tbilisi production.</em></h2></div><p data-r>Engineering, product development and quality management sit in Berlin-Adlershof; manufacturing runs at TEC Microsystems Georgia in the Tbilisi Technology Park. We are members of OptecBB and the German Thermoelectric Society.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>How we build</span><ul>'+
     '<li data-r><b>HD assembly technology</b>High-density pellet placement: the same size with 60% more Qmax, or the same Qmax 25% smaller.</li>'+
     '<li data-r><b>Sn-Sb solder</b>Internal assembly with Sn-Sb solder, melting at 230 °C, by default.</li>'+
     '<li data-r><b>Tested to Telcordia GR‑468</b>Regular reliability qualification, every two to three years, and RoHS compliant by default.</li>'+
    '</ul></div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Where our TECs work</span><p class="cr" data-r><span>Laser and superluminescent diodes</span><span>Avalanche photodiodes</span><span>Focal plane arrays</span><span>CCDs</span><span>IR and X-ray sensing</span><span>Telecom</span><span>Quantum computing</span><span>Aerospace</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Bigger ranges,</span> <em class="nw">new instruments.</em></h2></div><p data-r>The latest from the lab and the trade floor, most recently the expanded MC06 series in January 2026. Each entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Your application,</span> <em class="nw">the optimal TEC.</em></h2>'+
   '<p class="sub" data-r>Send us your key application requirements and get a quick reply with the most suitable thermoelectric cooler, from our standard range or designed for you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Head office</span><p data-r><span>TEC Microsystems GmbH</span><br><span>Schwarzschildstraße 8</span><br><span>12489 Berlin, Germany</span></p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Phone '+TELT+'</span><br><span>Fax '+FAXT+'</span></p></div>'+
    '<div><span class="lab" data-r>Manufacturing</span><p data-r><span>TEC Microsystems Georgia LLC</span><br><span>Tbilisi Technology Park</span><br><span>264 Omar Khizanishvili Street, Tbilisi</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>TEC Microsystems GmbH<br>Schwarzschildstraße 8, 12489 Berlin</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>Thermoelectric coolers, sub-assemblies, generators, heat flux sensors, TEC controllers and Z-Meters</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:400;font-size:40px;letter-spacing:.2em">TEC MICROSYSTEMS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 TEC Microsystems GmbH</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",products:"products",services:"services",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"TEC Microsystems — Miniature thermoelectric coolers, Berlin-Adlershof",x:"Home"};
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
