/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prodRows(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Failure analysis","Root-cause identification for parts and components that fail, corrode, stain or wear out early, from fracture and fatigue to chemical attack and contamination, with clear, concise reports.",'<circle cx="24" cy="24" r="15"/><path class="a" d="M35 35L48 48"/><path d="M16 26L21 20L26 27L32 18"/><circle class="f" cx="32" cy="18" r="2.4"/>'],
  ["Quality compliance","RoHS and REACH compliance, ASTM and MIL-STD testing, materials, chemical and mechanical analysis, and counterfeit product verification, for semiconductor, electronics, aerospace and medical customers.",'<rect x="10" y="8" width="36" height="42"/><path d="M18 20H38M18 28H38"/><path class="a" d="M19 38L25 44L37 32"/><circle class="f" cx="25" cy="44" r="2.4"/>'],
  ["Plating services","Customised plating services, including Ni-less ENIG-Premium for HDI, high-frequency, RF and microwave PCBs and semiconductors, with quick turnaround.",'<path d="M8 42H48"/><path class="a" d="M8 36H48"/><path d="M14 42V48M42 42V48"/><path d="M20 14V26M28 10V26M36 14V26"/><circle class="f" cx="28" cy="30" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function issues(){var I=[
  ["Black pad","Corrosion at the nickel surface, and solder that will not wet it."],
  ["Brittle joints","Brittle failures at solder joints, and broken components."],
  ["Uneven gold","Non-uniform gold thickness: more expensive, and less reliable."],
  ["Plating defects","Over-plating or skip-plating across the board."]];
  return '<dl class="lt-iss">'+I.map(function(x){return '<div><dt class="lab" data-r>'+esc(x[0])+'</dt><dd data-r>'+esc(x[1])+'</dd></div>'}).join("")+'</dl>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Surface finishes for PCBs and ICs<span class="nomob"> · Redmond, Washington</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Surface finishes</span><span class="l">for better</span><span class="l"><em>reliability.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>LiloTree develops and manufactures patented, cyanide-free surface finishes for printed circuit boards and IC packaging, from ENIG-Premium to the nickel-free Ni-less ENIG-Premium, in Redmond, Washington and Sanand, India.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Explore the finishes '+ARR+'</a><a class="btn" href="#/contact">Talk to us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Chemistry and materials innovation</span>'+
   '<h2 class="txt" id="mani">A team of scientists and industry specialists, making eco-friendly plating solutions that give electronic assemblies <em>optimum performance and better reliability, at lower cost.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">10×</span><p class="k">Better corrosion resistance with ENIG-Premium’s proprietary barrier layer, and no black pads</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40%</span><p class="k">Up to this much less gold than ENIG and ENEPIG</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50 nm</span><p class="k">Of gold in Ni-less ENIG-Premium, against 200 nm for EPIG, EPAG and DIG</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside the finish</span><h2 class="d3">One pad, <em>three finishes.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">ENIG</span><span>Premium</span><span>Ni-less</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Conventional ENIG.</h2><p>Electroless nickel under immersion gold is the standard finish, and its known failures start at the nickel: corrosion, the “black pad” defect, and brittle failures at solder joints.</p></article>'+
     '<article class="step"><h2>A barrier layer.</h2><p>ENIG-Premium adds LiloTree’s proprietary barrier layer, improving corrosion resistance by a factor of 10 with no black pads. It is IPC-4552A compliant, cyanide-free, and fits existing assembly processes.</p></article>'+
     '<article class="step"><h2>No nickel at all.</h2><p>For HDI, 5G and high-frequency RF boards, Ni-less ENIG-Premium removes the nickel: low insertion loss, no brittle solder joints, and 50 nm of gold rather than 200 nm.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Leave black pads <em>behind.</em></h2></div><p data-r>Conventional ENIG and ENEPIG assemblies suffer from well-known issues. LiloTree’s patented finishes were developed to resolve them, with support from National Science Foundation SBIR Phase I and II grants.</p></div>'+
   issues()+
   '<div class="lt-inv"><span class="lab kick" data-r>Inventor</span><p data-r>Kunal Shah, PhD, President of LiloTree, is the inventor of ENIG-Premium and Ni-less ENIG-Premium, and a recipient of IPC’s Distinguished Committee Service Award.</p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Finishes and <em>plating chemistries.</em></h2></div><p data-r>Eco-friendly, RoHS-compliant chemistries designed for high-reliability applications, made in the United States and India.</p></div>'+
   prodRows()+
   '<div class="bk"><span class="lab kick" data-r>Applications</span><p class="cr" data-r><span>HDI</span><span>5G and mmWave</span><span>RF and microwave</span><span>High-frequency PCBs</span><span>Wafer-level packaging</span><span>Wire bonding</span><span>Contact and wear surfaces</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split">A full laboratory, <em>near Seattle.</em></h2></div><p data-r>LiloTree’s scientists bring nanoscale analysis to customers’ failures, compliance work and plating, with quick turnaround.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Techniques</span><p class="cr" data-r><span>2D and 3D X-ray CT</span><span>AFM and STM</span><span>Acoustic microscopy (C-SAM)</span><span>FTIR</span><span>GC-MS</span><span>XRF</span><span>SEM with EDX</span><span>FIB</span><span>SIMS</span><span>XPS</span><span>DMA, TMA, TGA, DSC</span><span>Cross-sectioning</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recognised across <em>the industry.</em></h2></div><p data-r>Shows, partnerships and awards. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Qualify ENIG-Premium <em>for your assemblies.</em></h2>'+
   '<p class="sub" data-r>For samples, technical support, plating services or failure analysis, the team in Redmond would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email LiloTree '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>USA · manufacturing and sales</span><p data-r>LiloTree<br>2904 266th Ave NE, Building B<br>Redmond, WA 98053</p></div>'+
    '<div><span class="lab" data-r>India · manufacturing and sales</span><p data-r>WP142, GIDC 2<br>Sanand, Gujarat 382110<br>India</p></div>'+
    '<div><span class="lab" data-r>Email and phone</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><a class="ul" href="tel:'+TEL2+'">'+TEL2T+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Redmond, USA</span>2904 266th Ave NE, Building B<br>Redmond, WA 98053</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Manufacturing</span>Redmond, Washington<br>Sanand, Gujarat, India</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 72" aria-hidden="true"><text x="450" y="56" text-anchor="middle" style="font-family:\'Comfortaa\',Arial,sans-serif;font-weight:400;font-size:64px;letter-spacing:.04em">liloTree</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 LiloTree</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",products:"products",services:"services",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"LiloTree — surface finishes for PCB and IC manufacturing, Redmond, Washington",x:"Home"};
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
