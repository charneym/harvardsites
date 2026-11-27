/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* coatings (pgo.com > Thin Film Coatings) */
var COAT=[
 ["Anti-reflection","BBAR, in-house","Multilayer broadband AR coatings that raise transmission and contrast, coated on our own crown glass and on customer parts."],
 ["Hot and cold mirrors","All-dielectric","Vacuum-deposited hot mirrors that reflect heat and pass visible light, and cold mirrors, including an ultraviolet cold mirror."],
 ["Beamsplitters, ITO, metals","Any wavelength, any angle","Beamsplitters, indium tin oxide, maximum reflectors, bandpass, LWP, SWP, neutral density and metal coatings, redesigned to your wavelength and angle."]];
function coat(){return '<div class="caps nwc tst">'+COAT.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
var GLASS=["BK7","Fused silica","Borofloat","B-270","AF 37 and AF-45","D-263","Eagle 2000","Starphire","Sapphire","Infrared, 0.75–15 µm"];
function glass(){return '<div class="bk cnd"><span class="lab kick" data-r>In stock, coated or plain</span><p class="cr" data-r>'+GLASS.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
var FAB=[
 ["Polishing","Up to 36 inches","Flatness to λ/20, parallelism to 1 arc second and tolerances to ±.0005 in, with double-sided grinding and polishing."],
 ["Cutting and scribing","Up to 24 × 24 in","Precision cutting, assembly and scribing on thin flat substrates, plain or coated, with waterjet, laser engraving and diamond bandsawing."],
 ["Strengthening","Annealing and tempering","Annealing to relieve internal stress, and chemical or thermal tempering for the most stringent strength requirements."]];
function fab(){return '<div class="caps nwc tst">'+FAB.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["Aug 2026","SPIE Optics + Photonics 2026, San Diego: booth 730","Events",PW+"/news-and-events"],
 ["Apr 2026","SPIE Defense + Security 2026, National Harbor: booth 941","Events",PW+"/news-and-events"],
 ["Mar 2026","PG&O celebrates 41 years in the precision optics industry","Articles",PW+"/news-and-events"],
 ["Jan 2026","SPIE Photonics West 2026, Moscone Center: booth 4843","Events",PW+"/news-and-events"],
 ["Oct 2025","Designing optics for manufacturability: bridging engineering and production","Articles",PW+"/news-and-events"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1462" height="955" alt="Precision optics of the kinds PG&amp;O makes: a coated window, a cube beamsplitter and a right-angle prism" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Optics and thin film coatings<span class="nomob"> · Santa Ana, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Precision optics,</span> <span class="l">coated in-house.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Windows, mirrors, beamsplitters and prisms, thin film coatings from 250 nm to 2.5 µm, and glass fabrication up to 36 inches: complete turnkey optics from our Santa Ana plant since 1985.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/optics">Our optics '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Precision Glass &amp; Optics</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Glass in stock,</span> <span class="nw">a full optics shop</span> <span class="nw">and three large</span> <span class="nw">coating chambers,</span> <span class="nw">under one roof.</span> <em><span class="nw">Prototype to</span> <span class="nw">high-volume production.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1985</span><p class="k">the year we started; privately held ever since</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">72 in</span><p class="k">coating chambers, coating up to 600 mm diameter from 250 nm to 2.5 µm</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">48 h</span><p class="k">turnaround on windows, mirrors, beamsplitters and coated substrates from stock</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a cube beamsplitter is made</span><h2 class="d3"><span class="nw">Two prisms,</span> <span class="nw">one coating.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Glass</span><span>Polish</span><span>Coat</span><span>Split</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">From our own</span> <span class="nw">glass stock.</span></h2><p>It starts with optical glass from our extensive in-house inventory, such as BK7 or fused silica, so work begins the day the order arrives.</p></article>'+
     '<article class="step"><h2><span class="nw">Two precision</span> <span class="nw">right-angle prisms.</span></h2><p>Our fabrication shop grinds and polishes a matched pair of right-angle prisms: flat faces, exact angles and clean bevels.</p></article>'+
     '<article class="step"><h2><span class="nw">An interference</span> <span class="nw">coating.</span></h2><p>The hypotenuse is coated in-house, layer by layer, with our advanced monitoring system watching each layer as it grows; absorption loss is minimal.</p></article>'+
     '<article class="step"><h2><span class="nw">Cemented,</span> <span class="nw">then split.</span></h2><p>The two prisms are cemented into a cube. A beam entering it divides, on average nearly 50% transmitted and 50% reflected, or by polarization at up to 1000:1.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="optics" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Precision optics</span><h2 class="d2 split"><span class="nw">Flats, prisms</span> <span class="nw">and beamsplitters.</span></h2></div><p data-r>Sophisticated optics and plano components, standard or to your specification, with our engineers working closely with yours.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="coatings" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Thin film coatings</span><h2 class="d2 split"><span class="nw">From 250 nm</span> <span class="nw">to 2.5 µm.</span></h2></div><p data-r>Dichroic, dielectric and metal coatings in our large 72-inch chambers, up to 24 inches in diameter, with a vast inventory of coated substrates ready to ship.</p></div>'+
   coat()+glass()+
  '</div></section>'+

  '<section class="sec dark" id="fabrication" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Glass fabrication</span><h2 class="d2 split"><span class="nw">From blank</span> <span class="nw">to assembly.</span></h2></div><p data-r>Waterjet, CNC machining, drilling, grinding and polishing: custom fabrication from the component level to opto-mechanical design and assembly.</p></div>'+
   fab()+
  '</div></section>'+

  '<section class="sec light" id="about" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About us</span><h2 class="d2 split"><span class="nw">Privately held,</span> <span class="nw">since 1985.</span></h2></div><p data-r>From our 18,000 sq. ft. plant in Santa Ana, we have supplied optics for LIGO, mirrors for the VIRUS dark-energy instrument, and parts for defense, biophotonics, cinema and solar.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Where to</span> <span class="nw">meet us.</span></h2></div><p data-r>Trade shows across the year, and articles from our president on making optics that are easier to manufacture.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Send us your</span> <span class="nw">drawing or spec.</span></h2>'+
   '<p class="sub" data-r>Our engineers will answer your questions on thin film coatings, glass fabrication and custom or commercial optics, and quote to your deadline.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Precision Glass &amp; Optics</span><br><span>3600 West Moore Avenue</span><br><span>Santa Ana, CA 92704</span><br><span>United States</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Quotes and inquiries</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><span>ISO 9002 compliant</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>3600 West Moore Avenue<br>Santa Ana, CA 92704</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/optics">Optics</a><br><a class="ul" href="#/coatings">Coatings</a><br><a class="ul" href="#/fabrication">Fabrication</a><br><a class="ul" href="#/about">About</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>Prisms and beamsplitters<br>Thin film coatings<br>Glass substrates</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">PG&amp;O</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Precision Glass &amp; Optics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",optics:"optics",coatings:"coatings",fabrication:"fabrication",about:"about",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"PG&O — Precision optics, thin film coatings and glass fabrication, Santa Ana, California",x:"Home"};
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
