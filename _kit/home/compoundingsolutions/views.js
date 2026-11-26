/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prod(){return '<ul class="pfr mip">'+PROD.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function blog(){return '<ul class="nws">'+BLOG.map(function(n){return '<li><a href="'+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">Read '+ARR+'</span></a></li>'}).join("")+'</ul>'}
/* services (compoundingsolutions.net > Services, Custom Compounding, Color Matching), each with a small line icon */
function caps(){var C=[
  ["Custom compounding","Formulated to your part","We partner with your engineers from the start to choose the resin, additives, modifiers, fillers and colors, then compound them on our twin-screw lines.",'<path d="M6 22H50M6 34H50"/><path class="a" d="M10 28C14 22 18 22 22 28S30 34 34 28 42 22 46 28"/><path d="M6 22V34M50 22V34"/>'],
  ["Toll compounding","Your materials, our lines","Supply your own raw materials and we compound them to your specification: for R&D scale-up, bridge production or overflow capacity.",'<rect x="8" y="14" width="18" height="28"/><rect x="30" y="14" width="18" height="28"/><path class="a" d="M14 28H42M36 22L42 28L36 34"/>'],
  ["R&D and color matching","Color for medical devices","Matches from an existing part or the Pantone Matching System, with colorants chosen for FDA approval, and our EZ Med Color Selector.",'<circle cx="22" cy="24" r="12"/><circle cx="34" cy="24" r="12"/><circle class="a" cx="28" cy="34" r="12"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
var POLY=["Polyolefins","Styrenics","Polyamides","Polyesters","Polycarbonates","Polyurethanes","Fluoropolymers","PEEK, PEI, PSU, PES","TPEs and PEBA","PLA and PLLA"];
var DIST=["Pebax MED","Rilsan MED","Rilsamid MED","Kynar MED"];
var QUAL=["ISO 13485:2016","Certificates of conformance","Material certifications","SDS and test data","USP, ISO 10993 and FDA experience"];
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Medical-grade compounds<span class="nomob"> · Lewiston, Maine</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The material</span><span class="l"><em>behind the device.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Compounding Solutions makes custom and off-the-shelf thermoplastic compounds for medical device designers and manufacturers: color, radiopacity, lubricity and bonding, built into the resin.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">See the products '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick">Since 1999</span>'+
   '<h2 class="txt" id="mani">Scott Neal opened Compounding Solutions with one purpose: <span class="nw">to become</span> <span class="nw">the leading</span> <span class="nw">medical compounder.</span> <em class="nw">He still runs it that way.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">120,000</span><p class="k">square feet in Lewiston, Maine, with 17 lines across four manufacturing areas</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">90+</span><p class="k">employees, up from three when the doors opened in 1999</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6,400</span><p class="k">square feet of controlled-environment white room for medical-grade compounds</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside a catheter</span><h2 class="d3"><span class="nw">Built into</span> <em class="nw">every layer.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Resin</span><span>Tie layer</span><span>Radiopaque</span><span>Surface</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Start from the right resin.</h2><p>Each base material can be compounded to change its properties: hard or soft, compliant or rigid, clear or colored, lubricious or tacky. Medical grades are made in our white room.</p></article>'+
     '<article class="step"><h2>Bond the layers.</h2><p>Multi-layer tubing needs layers that hold together. ReZilok Rx is our tie-layer resin: it sits between the inner and the outer layer and bonds the two.</p></article>'+
     '<article class="step"><h2>Visible under X-ray.</h2><p>Radiopaque fillers such as barium sulfate, bismuth or tungsten make a device show up under imaging. PEBA RO, PU RO and COPE RO come off the shelf.</p></article>'+
     '<article class="step"><h2>Color, mark and glide.</h2><p>PurTone Rx concentrates color the jacket with colorants chosen for FDA approval, MasterMark Rx takes a laser mark and Mobilize Rx reduces surface friction.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Products</span><h2 class="d2 split"><span class="nw">Made for</span> <em class="nw">medical devices.</em></h2></div><p>Our own Rx product lines, each one ready to customize to your exact performance requirements, from catheter tips and tubing to overmolded grips.</p></div>'+
   prod()+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Services</span><h2 class="d2 split"><span class="nw">From formula</span> <em class="nw">to full production.</em></h2></div><p>Engineering support from material selection through the FDA review and market launch, with the documentation your submission needs.</p></div>'+
   caps()+
   '<div class="bk lbk"><span class="lab kick">We compound</span><p class="cr">'+POLY.map(function(c){return '<span>'+esc(c)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
   '<div class="bk lbk bk2"><span class="lab kick">Arkema distributor</span><p class="cr">'+DIST.map(function(c){return '<span>'+esc(c)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
   '<div class="bk lbk bk2"><span class="lab kick">Quality</span><p class="cr">'+QUAL.map(function(c){return '<span>'+esc(c)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Company</span><h2 class="d2 split"><span class="nw">Made in Maine,</span> <em class="nw">serving the world.</em></h2></div><p>From a 10,000 square foot plant with two extrusion lines and three people in 1999 to a 120,000 square foot site in Lewiston and an office in Ireland.</p></div>'+
   '<div class="uf">'+
    '<div class="uf-p"><span class="lab">Leadership</span>'+
     '<ul class="dirs"><li><span class="dn">Scott Neal</span><span class="dr">Founder</span></li></ul>'+
     '<blockquote class="uf-q">“Our mission is to be the global leader in supplying quality material solutions for medical device designers and manufacturers.”<cite>Compounding Solutions mission statement</cite></blockquote></div>'+
    '<div class="uf-s">'+
     '<div class="site"><span class="lab">Headquarters</span><p>258 Goddard Rd<br>Lewiston, Maine 04240</p></div>'+
     '<div class="site"><span class="lab">Europe</span><p>Compounding Solutions Europe, Athlone, Ireland, since 2021</p></div>'+
     '<div class="site"><span class="lab">R&amp;D</span><p>Pete Goguen R&amp;D Innovation Center and a controlled-environment QC lab</p></div>'+
     '<div class="site"><span class="lab">Partners</span><p>Arkema, Evonik, DSM and BioCote</p></div>'+
    '</div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="events" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Events</span><h2 class="d2 split"><span class="nw">Meet us</span> <em class="nw">at the show.</em></h2></div><p>In 2026 we exhibited at Medtec China, Medical Technology Ireland, MD&amp;M Midwest and, most recently, COMPAMED in Düsseldorf.</p></div>'+
   '<div class="ev">'+
    '<span class="lab kick">Most recent</span>'+
    '<dl>'+
     '<div><dt class="lab">Show</dt><dd>COMPAMED 2026, Düsseldorf</dd></div>'+
     '<div><dt class="lab">Dates</dt><dd>16 to 19 November 2026</dd></div>'+
     '<div><dt class="lab">Venue</dt><dd>Messe Düsseldorf Trade Fair Centre</dd></div>'+
     '<div><dt class="lab">Exhibitor</dt><dd>Compounding Solutions LLC, Lewiston, Maine</dd></div>'+
    '</dl>'+
   '</div>'+
   '<span class="lab kick sub-l pr">Read more</span>'+
   blog()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick">Contact</span>'+
   '<h2 class="big split"><span class="nw">Let’s talk about</span> <em class="nw">your materials.</em></h2>'+
   '<p class="sub">Tell us about your device and the properties it needs. We will help you choose the right components for your custom compound, or quote an off-the-shelf grade.</p>'+
   '<div class="act"><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab">Address</span><p>Compounding Solutions LLC<br>258 Goddard Rd<br>Lewiston, Maine 04240, USA</p></div>'+
    '<div><span class="lab">Contact</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab">Visiting</span><p>Fly into Portland Jetport (PWM), then 30 miles north on I-95 to exit 80. We are right off the exit.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Compounding Solutions LLC<br>258 Goddard Rd, Lewiston, Maine 04240</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Certified</span>Quality management to ISO 13485:2016, certified by National Quality Assurance, U.S.A.</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/events">Events</a></div>'+
  '</div><div class="fwm" aria-hidden="true">'+FLOGO+'</div>'+
  '<div class="legal"><span class="lab">© 2026 Compounding Solutions LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",products:"products",services:"services",company:"company",events:"events",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Compounding Solutions — Medical-grade thermoplastic compounds, Lewiston, Maine",x:"Home"};
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
