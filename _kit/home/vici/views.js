/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+c[1].split('|').map(function(x){return '<span class="nw">'+esc(x)+'</span>'}).join(' ')+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["PET","Isotope synthesis","Much of the equipment built to synthesise F18, N13, O15 and C11 for positron emission tomography uses off-the-shelf components from our product lines.",'<circle cx="28" cy="28" r="18"/><circle class="a" cx="28" cy="28" r="7"/><path d="M28 4V12M28 44V52M4 28H12M44 28H52"/><circle class="f" cx="28" cy="28" r="2.2"/>'],
  ["Cytometry","Bead flow cytometry","Many of our standard liquid handling products are ideal off-the-shelf parts for automated sample preparation, handling, mixing and delivery.",'<path d="M10 28H46"/><circle class="a" cx="20" cy="28" r="4"/><circle class="a" cx="34" cy="28" r="4"/><path d="M10 20H46M10 36H46"/><circle class="f" cx="20" cy="28" r="1.6"/>'],
  ["Proteomics","Proteomics research","VICI valves, tubing and fittings can radically reduce the time needed for the very complex separations of proteomics research.",'<path d="M8 44H48"/><path class="a" d="M8 44C14 44 15 22 18 22S22 44 26 44 30 14 33 14 37 44 40 44 44 32 48 32"/><circle class="f" cx="33" cy="14" r="2.2"/>'],
  ["Oncology","Liquid brachytherapy","With The Gabriel Institute and IsoTherapeutics Group, Valco works on the direct administration of therapeutic isotopes into tumours.",'<path d="M12 44L36 20"/><path class="a" d="M36 20L44 12M32 16L40 24"/><circle cx="14" cy="42" r="5"/><circle class="f" cx="44" cy="12" r="2.2"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3><span class="nw">'+esc(c[1])+'</span></h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Tools for science and medicine<span class="nomob"> · Houston, Texas</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Valves and fittings</span> <span class="l nw acc">for analytical science.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>For over 50 years, VICI Valco Instruments has designed and built standard and custom valves and fittings for precision analytical, biomedical and biocompatible instrumentation.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Contact sales</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Since 1968 · Privately owned</span>'+
   '<h2 class="txt" id="mani">Of the chromatography companies founded in 1968, few never joined a conglomerate. Valco is still a <em>privately owned main street business</em>, quick to answer the ideas of <span class="nw">the analytical community.</span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1968</span><p class="k">founded by Stan Stearns, who still leads VICI and its associated companies</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10,000+</span><p class="k">different parts and products, a record unrivalled in selection and reach</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~500</span><p class="k">people worldwide, over 325 of them at our headquarters in Houston</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside an injection valve</span><h2 class="d3"><span class="nw">Load, inject,</span> <em class="nw">and separate.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Load</span><span>Inject</span><span>Separate</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The sample fills the loop.</h2><p>In the load position, grooves in the rotor send the carrier straight from the pump to the column, while the sample flows through the external loop and out to vent.</p></article>'+
     '<article class="step"><h2>The rotor turns one step.</h2><p>On a six port valve the rotor turns 60°. Its grooves now join the pump to the loop, and the carrier sweeps the sample out of the loop and onto the column.</p></article>'+
     '<article class="step"><h2>The peaks come out apart.</h2><p>On the column the components of the sample separate, and the detector records each one as a peak. Our pulsed discharge detectors do it without a radioactive source.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Valves, fittings <em>and the parts between.</em></h2></div><p data-r>Injectors, selectors and fittings, with pneumatic and electric actuators, tubing and sample loops, detectors, gas purifiers and generators, calibration standards and syringes.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">From the lab <em>to the clinic.</em></h2></div><p data-r>Components made for chromatography now deliver, sample and detect trace amounts in emerging fields of science and medicine.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">One family <em>of companies.</em></h2></div><p data-r>VICI stands for Valco Instruments Company Inc., and we say it “vee-chee”. Today the name covers companies in Texas, Louisiana, Washington, Switzerland and Italy.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Companies</span><p class="cr" data-r><span>VICI Valco Instruments, Houston</span><span>VICI AG International, Schenkon</span><span>VICI DBS, Padova</span><span>VICI Metronics, Poulsbo</span><span>VICI Precision Sampling, Baton Rouge</span><span>VICI Jour</span><span>VICI Gig Harbor Group</span><span>Hayes Separations</span><span>Stearns Corporation</span></p></div>'+
   '<div class="bk"><span class="lab kick" data-r>Brands</span><p class="cr" data-r><span>Valco®</span><span>Cheminert®</span><span>Nanovolume®</span><span>Dynacal®</span><span>Dynacalibrator®</span><span>HayeSep®</span><span>ValcoBond</span><span>ValcoPLOT</span><span>Pressure-Lok®</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Shows, stores <em>and awards.</em></h2></div><p data-r>Meet VICI AG International at the European laboratory fairs, and order from our web stores around the clock.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us about</span> <em class="nw">your flow path.</em></h2>'+
   '<p class="sub" data-r>For quotes, catalogues, custom valves and repairs, write to our sales team or call us in Houston. Customers in Europe, the Middle East, Africa and Asia are served by VICI AG International.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to sales '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Houston</span><p data-r>VICI Valco Instruments Co. Inc.<br>8300 Waterbury<br>Houston, TX 77055, USA</p></div>'+
    '<div><span class="lab" data-r>Sales and service</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Tel. <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Toll free '+TFT+' (US and Canada)</p></div>'+
    '<div><span class="lab" data-r>International</span><p data-r>VICI AG International<br>Parkstrasse 2, CH-6214 Schenkon<br>Tel. <a class="ul" href="tel:+41419256200">+41 41 925 6200</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>VICI Valco Instruments Co. Inc.<br>8300 Waterbury, Houston, TX 77055</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>Injectors · Selectors · Diaphragm valves<br>Fittings · Detectors · UHPLC<br>Calibration standards · Syringes</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="54" text-anchor="middle" style="font-family:\'Saira Semi Condensed\',Arial,sans-serif;font-weight:500;font-size:64px;letter-spacing:.3em">VICI VALCO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Valco Instruments Co. Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",valve:"story",products:"products",applications:"applications",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"VICI Valco Instruments — Valves, fittings and detectors for chromatography, Houston",x:"Home"};
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
