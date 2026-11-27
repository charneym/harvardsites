/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function caps(list){return '<div class="caps nwc tst">'+list.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function chips(kick,list){return '<div class="bk cnd"><span class="lab kick" data-r>'+esc(kick)+'</span><p class="cr" data-r>'+list.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* packages (mintres.com > Products > (Opto)-electronics optical beds/packages) */
var PKG=[
 ["Optical beds","With heatsink","Optical beds with a heatsink for opto-electronic laser systems, assembled in our cleanroom."],
 ["Diamond on AlN","Spreading at affordable cost","AlN substrates with diamond heat spreaders, for extremely high thermal spreading at an affordable cost."],
 ["Sub-assembly","Die and package bonding","Die bonders, package bonders and vacuum soldering ovens, for component sub-assembly in cleanroom conditions."]];
/* processes (mintres.com > Products > Processing and deposition services, About us) */
var PRC=[
 ["Thin films","Ti, Pt, Au, AuSn","RF magnetron sputtered coatings, gold for wire bonding and conduction, gold-tin for soldering, patterned on any face."],
 ["Shaping","Lasers and dicing","Precision YAG lasering, 248 nm excimer UV laser ablation and ceramic wafer dicing up to 4 inches."],
 ["Structuring","Lithography and etching","Photolithography on wafers up to 3 inches with 10 µm lines, ion beam and reactive ion etching."]];
var CATS=["Oxygen plasma cleaning","Metal plating","Ceramic brazing and soldering","SEM/EDX","Automated dimensional metrology","Layer thickness 10 nm to 100 µm","Class 100 compatible cleanrooms"];
/* company (mintres.com > About us, Products > Recent activities) */
var CO=[
 ["Who we supply","Industry and science","Electronics and opto-electronics, research institutes, high energy physics, flat panel screens and surgical instruments."],
 ["Co-development","Into volume","We develop a product with you and take it to high volume production, or make it to your drawing."],
 ["Recent work","Pushing the limits","Diamond polished down to 18 µm, holes of Ø4 µm in diamond, and diamond with thick Cu and AuSn for high power laser diodes."]];
/* news (mintres.com > News) */
var NEWS=[
 ["Q3 2026","First Mintres newsletter: Photonics Action Day with PhotonicsNL, first associate partner of Polaris NGF","Newsletter",PW+"/news-mintres/"],
 ["Sep 2025","Mintres in the 15th issue of InnovatieNU","Press",PW+"/news-mintres/"],
 ["Feb 2024","Hasselt Diamond Workshop","Conference",PW+"/news-mintres/"],
 ["Jun 2023","A special heatsink for the EPIC 20 years logo contest","EPIC",PW+"/news-mintres/"],
 ["Oct 2022","The Mintres story on Novus Light Technologies Today","Press",PW+"/news-mintres/"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1289" height="1005" alt="A gold-plated opto-electronic package with a Mintres optical bed and sub-mount inside, two rows of gold pins and a flange with two mounting holes" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Diamond and ceramics<span class="nomob"> · Cuijk, the Netherlands</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Heat spreading,</span> <span class="l">in diamond and ceramic.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>CVD diamond, aluminium nitride and aluminium oxide heat spreaders, and optical beds and packages for opto-electronics: shaped, coated and assembled in our own cleanrooms.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our materials '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Mintres</span>'+
   '<h2 class="txt" id="mani"><span class="nw">No matter how fast</span> <span class="nw">you move, you need</span> <span class="nw">a reliable partner</span> <span class="nw">for all your</span> <span class="nw">heat spreading needs.</span> <em><span class="nw">Diamond to alumina.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1800</span><p class="k">W/mK, the top grade of our CVD diamond</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100+</span><p class="k">years of accumulated experience in ceramic processing</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2008</span><p class="k">founded in Cuijk, the Netherlands</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a heat spreader works</span><h2 class="d3"><span class="nw">From a hot spot</span> <span class="nw">to a cool package.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Source</span><span>Spread</span><span>Bond</span><span>Package</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">A laser diode</span> <span class="nw">makes heat.</span></h2><p>Small heat sources with high power densities, like laser diodes and laser diode arrays, run hot in a very small spot.</p></article>'+
     '<article class="step"><h2><span class="nw">Diamond</span> <span class="nw">spreads it out.</span></h2><p>A heat spreader takes the energy from the concentrated source and spreads it out, lowering the thermal impedance and the temperature.</p></article>'+
     '<article class="step"><h2><span class="nw">Gold-tin</span> <span class="nw">bonds it.</span></h2><p>Patterned gold and gold-tin films give solder pads, bond areas and circuitry on the spreader itself, top, bottom or sides.</p></article>'+
     '<article class="step"><h2><span class="nw">The bed</span> <span class="nw">goes in the package.</span></h2><p>On an AlN optical bed with its heatsink, die-bonded and vacuum-soldered in our cleanroom, ready for the laser system.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Materials</span><h2 class="d2 split"><span class="nw">Four materials,</span> <span class="nw">any shape.</span></h2></div><p data-r>Heat spreaders diced from wafers of diamond, aluminium nitride or aluminium oxide, square, oblong or round, coated and structured to your drawing.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="packages" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Optical beds and packages</span><h2 class="d2 split"><span class="nw">Assembled in</span> <span class="nw">our cleanroom.</span></h2></div><p data-r>Beyond the part itself: optical beds, substrates and sub-assemblies for opto-electronic laser systems.</p></div>'+
   caps(PKG)+
  '</div></section>'+

  '<section class="sec dark" id="processes" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Processes</span><h2 class="d2 split"><span class="nw">All our processes,</span> <span class="nw">done in-house.</span></h2></div><p data-r>Our processing and metrology are also open to third parties as a service.</p></div>'+
   caps(PRC)+chips("Also in-house",CATS)+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Shaping, coating</span> <span class="nw">and assembling.</span></h2></div><p data-r>A specialist in diamond and high performance ceramics, with many advanced processing techniques and patents behind it.</p></div>'+
   caps(CO)+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Latest</span> <span class="nw">from Cuijk.</span></h2></div><p data-r>From our quarterly newsletter and the photonics community.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us about</span> <span class="nw">your heat source.</span></h2>'+
   '<p class="sub" data-r>From a single heat spreader to an optical bed in volume, or one of our processes as a service: tell us what you need.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Mintres BV</span><br><span>De Nieuwe Erven 8</span><br><span>5431 NT Cuijk</span><br><span>The Netherlands</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Mon to Fri, 08.00 to 17.00</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><span>Quotes and services</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>De Nieuwe Erven 8<br>5431 NT Cuijk, the Netherlands</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/packages">Packages</a><br><a class="ul" href="#/processes">Processes</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">We work in</span>CVD diamond<br>Aluminium nitride<br>Aluminium oxide</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">MinTres</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Mintres BV</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",products:"products",packages:"packages",processes:"processes",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Mintres — Diamond and ceramic heat spreaders and optical beds, Cuijk, the Netherlands",x:"Home"};
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
