/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">'+"Details"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Management</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* quality approvals (trans-tronic.co.uk > Quality Accreditations; Network Rail work per the Southern Manufacturing exhibitor profile) */
function caps(){var C=[
  ["ISO 9001:2015","<span class=\"nw\">Approved by</span> <span class=\"nw\">LRQA</span>","Quality system approved by LRQA, formerly Lloyd’s Register, certificate 10421237. Planned for “right first time” in every area of the operation.",'<rect x="12" y="8" width="32" height="40"/><path d="M18 18H38M18 25H38M18 32H30"/><path class="a" d="M30 40L34 44L42 34"/>'],
  ["UL","<span class=\"nw\">A listed range</span> <span class=\"nw\">of toroids</span>","UL product approval of a range of toroidal transformers, licences XPTQ2 and XPTQ8 under file E179800.",'<circle cx="28" cy="28" r="18"/><circle cx="28" cy="28" r="8"/><path class="a" d="M28 10V20M28 36V46"/>'],
  ["KEMA-KEUR","<span class=\"nw\">Approved</span> <span class=\"nw\">by DEKRA</span>","KEMA-KEUR approval of a range of toroidal transformers, certificates 2149503.03 and 2149503.04.",'<path d="M28 6L46 14V28C46 39 38 46 28 50C18 46 10 39 10 28V14Z"/><path class="a" d="M20 28L26 34L37 22"/>'],
  ["Network Rail","<span class=\"nw\">PADS approved</span> <span class=\"nw\">for the railway</span>","Network Rail product approvals, and a new range of Class II signalling transformers developed in collaboration with Network Rail.",'<path d="M8 44H48M8 36H48"/><path d="M14 36V44M24 36V44M34 36V44M44 36V44"/><path class="a" d="M22 30V10H34V30"/><circle class="f" cx="28" cy="16" r="2.6"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Transformers and windings<span class="nomob"> · Chesterfield, England</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Wound to</span> <span class="l"><em class="nw">your specification.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>An ISO 9001 family run manufacturer of laminated, toroidal and ferrite transformers, chokes and custom coil windings, from prototype and development to volume production.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Family run, made in England</span>'+
   '<h2 class="txt" id="mani"><span class="nwp">From a standard transformer</span> <span class="nwp">to a custom specification,</span> <span class="nwp">we help with the design</span> <em><span class="nwp">and wind it in Chesterfield,</span> <span class="nwp">one-off or in volume.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3.5m</span><p class="k">components a year, and more, from our Chesterfield factory</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">11,000</span><p class="k">square feet of purpose built factory in Old Whittington</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40+</span><p class="k">years of experience supplying a myriad of sectors</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">On the winding floor</span><h2 class="d3"><span class="nw">Anatomy of</span> <em class="nw">a toroid.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Core</span><span>Primary</span><span>Secondary</span><span>Fixing</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">It starts</span> <span class="nw">as a ring.</span></h2><p>Toroidal transformers have been designed and made here for nearly 40 years: up to 5 kVA to order, with a standard approved range from 15 VA to 1 kVA.</p></article>'+
     '<article class="step"><h2><span class="nw">The primary,</span> <span class="nw">turn by turn.</span></h2><p>Copper wire is wound through the ring and around the core. For audio toroids the design runs at a low flux density, for low noise.</p></article>'+
     '<article class="step"><h2><span class="nw">As many windings</span> <span class="nw">as you need.</span></h2><p>Multiple primary and secondary windings can be made where required, and a goss band can be added over the windings for screening.</p></article>'+
     '<article class="step"><h2><span class="nw">Pads, a plate</span> <span class="nw">and one bolt.</span></h2><p>The standard fixing is two rubber pads, a metal clamp plate and an appropriate nut and bolt. Or the centre is filled with resin and drilled for fixing.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Transformers, chokes</span> <em class="nw">and coil windings.</em></h2></div><p data-r>These are a representation of what we make at our Chesterfield site. Most of our work is to customer specifications, or to new designs developed with our technical team.</p></div>'+
   prods()+
   '<div class="qual mk"><span class="lab kick" data-r>Sectors</span><p class="cr" data-r><span>Aviation</span><span>Audio</span><span>Lighting</span><span>Automotive</span><span>Defence</span><span>Railways</span><span>Medical</span><span>Telecommunications</span><span>Instrumentation</span><span>Renewable energy</span><span>Oil and gas</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="quality" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality</span><h2 class="d2 split"><span class="nw">Planned to be</span> <em class="nw">right first time.</em></h2></div><p data-r>Our goal is to maintain and continually improve performance in every area, especially quality, cost and delivery, through an effective quality system and approvals our customers can check.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">A family firm,</span> <em class="nw">grown by acquisition.</em></h2></div><p data-r>Trans-Tronic is family run, with a multi-skilled and flexible workforce, and supplies customers across the UK and around the world from Chesterfield.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>Along the way</span><ul>'+
     '<li data-r><b>Antrim</b>Antrim Transformers of Northern Ireland, acquired in 2008, brought a UL and KEMA-KEUR approved standard toroid range.</li>'+
     '<li data-r><b>Buckingham</b>PACE Components, a well respected maker of laminated and toroidal transformers and windings.</li>'+
     '<li data-r><b>Manchester</b>Tesla Transformers, adding to the range of products available at Trans-Tronic.</li>'+
     '<li data-r><b>Rail</b>A new range of Class II signalling transformers, developed in collaboration with Network Rail.</li>'+
     '<li data-r><b>2021</b>Daniel Tarrant is appointed Technical Director and Louise Goater Operations Director.</li>'+
     '<li data-r><b>2021</b>A 3D printer makes mandrels and jigs in-house, and a Solus skeining machine keeps wound joints to standard.</li>'+
    '</ul></div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Next seen</span> <em class="nw">in Farnborough.</em></h2></div><p data-r>Trans-Tronic is listed as an exhibitor at Southern Manufacturing & Electronics, 2 to 4 February 2027. Each entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Send us</span> <em class="nw">your specification.</em></h2>'+
   '<p class="sub" data-r>From one prototype to thousands of parts, tell us the voltages, the power and the fixing, and our technical team will come back with a design and a quote.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Request a quote '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Factory</span><p data-r><span>Trans-Tronic Limited</span><br><span>Whitting Valley Road, Old Whittington</span><br><span>Chesterfield, Derbyshire S41 9EY</span></p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Phone '+TELT+'</span><br><span>Order progress: Natasha, Stephanie or Louise</span></p></div>'+
    '<div><span class="lab" data-r>Opening hours</span><p data-r><span>Monday to Thursday, 06:30 to 16:00</span><br><span>Friday closed</span><br><span>Registered in England, 04486313</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Factory</span>Trans-Tronic Limited<br>Whitting Valley Road, Old Whittington<br>Chesterfield S41 9EY</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/quality">Quality</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>Laminated, toroidal and ferrite transformers, chokes, audio transformers and custom coils</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Barlow\',system-ui,sans-serif;font-weight:400;font-size:40px;letter-spacing:.2em">TRANS-TRONIC · CHESTERFIELD</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Trans-Tronic Limited</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",products:"products",quality:"quality",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Trans-Tronic — Transformers and windings, Chesterfield",x:"Home"};
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
