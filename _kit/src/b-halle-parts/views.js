/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+c[1].split('|').map(function(x){return '<span class="nw">'+esc(x)+'</span>'}).join(' ')+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row bh-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Step 1","Informal estimation","We take a first look at the feasibility and the anticipated costs of the system you need, with no obligation on your part.",'<circle cx="24" cy="24" r="13"/><path d="M33.5 33.5L46 46"/><path class="a" d="M17 24H31"/><circle class="f" cx="24" cy="24" r="2.2"/>'],
  ["Step 2","Design study","A detailed technical study determines whether the objective can actually be produced, and with what effort.",'<path d="M6 28H50"/><path class="a" d="M6 20L22 20L40 28M6 36L22 36L40 28"/><path d="M22 14C26 20 26 36 22 42C18 36 18 20 22 14Z"/><circle class="f" cx="40" cy="28" r="2.2"/>'],
  ["Step 3","Quotation","Based on the study, we quote for the realisation with the obtainable optical properties of the system and its final price.",'<path d="M14 8H36L44 16V48H14Z"/><path d="M36 8V16H44"/><path class="a" d="M20 26H38M20 33H38M20 40H31"/>'],
  ["Step 4","Manufacture","Custom objectives and optical systems are made in our own workshop, in small and in larger quantities.",'<path d="M28 8C35 16 35 40 28 48C21 40 21 16 28 8Z"/><path d="M10 28H46"/><path class="a" d="M10 22H22M34 22H46M10 34H22M34 34H46"/><circle class="f" cx="28" cy="28" r="2.2"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3><span class="nw">'+esc(c[1])+'</span></h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Optical workshop<span class="nomob"> · Berlin</span> · since 1873</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Precision optics,</span> <span class="l nw acc">made in Berlin.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Bernhard Halle Nachfl. makes polarizers, retarders, mirrors, prisms, lenses and objectives with proven in-house technology, and designs custom optical systems for science and industry.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Polarizers · Retarders · Prisms · Lenses</span>'+
   '<h2 class="txt" id="mani">Bernhard Halle founded his optical workshop in 1873, the year Ernst Abbe published his theory of the microscope. Its first products were <em>crystal optics for polarization microscopes.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1873</span><p class="k">the year Bernhard Halle founded his optical workshop</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><p class="k">product lines, from polarizers and retarders to opto-mechanics</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">190 nm</span><p class="k">to 10 µm: the range our custom optical systems are developed for</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a polarizer works</span><h2 class="d3"><span class="nw">One beam in,</span> <em class="nw">one polarization out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Enter</span><span>Separate</span><span>Transmit</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Light enters the crystal.</h2><p>A polarizer turns light of random polarization into one defined linear state. The beam enters a prism cut from a birefringent crystal.</p></article>'+
     '<article class="step"><h2>The boundary separates the states.</h2><p>In a Glan-type prism, the orthogonal polarization meets the boundary surface and is turned out of the beam by total internal reflection.</p></article>'+
     '<article class="step"><h2>One polarization passes.</h2><p>Only the desired state is transmitted. What counts is the transmission T<sub>max</sub> and the extinction ratio T<sub>min</sub>/T<sub>max</sub>, which these prisms keep extremely low over a very broad spectral range.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Six product lines,</span> <em class="nw">one workshop.</em></h2></div><p data-r>From crystal polarizers to objectives for the deep UV: catalogue items, modified versions and components made entirely to your requirements.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="custom" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Custom optics</span><h2 class="d2 split"><span class="nw">Custom systems,</span> <em class="nw">step by step.</em></h2></div><p data-r>Beyond the catalogue we design and manufacture custom objectives and optical systems for imaging, collimation and focusing at wavelengths from 190 nm to 10 µm.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Made before</span><p class="cr" data-r><span>Beam expanders, with or without spatial filters</span><span>Objectives for high vacuum with very low outgassing</span><span>Imaging objectives for the UV and the IR</span><span>Imaging optics with prisms, plates, filters or polarizers for spectroscopy</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">An optical workshop,</span> <em class="nw">since 1873.</em></h2></div><p data-r>The subtitle “Optical Workshop” is our concept: long experience with in-house optics manufacturing, paired with the competence to develop new solutions for our customers’ ideas.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Our history</span><p class="cr" data-r><span>1873: Bernhard Halle founds the workshop</span><span>First products: crystal optics for polarization microscopes</span><span>Then mirrors, prisms and lens systems</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="events" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Events</span><h2 class="d2 split"><span class="nw">Meet us</span> <em class="nw">at the fairs.</em></h2></div><p data-r>We show our optics at photonics fairs and at the exhibitions of the physics conferences.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us what</span> <em class="nw">your setup needs.</em></h2>'+
   '<p class="sub" data-r>For current prices, specifications and custom optics, please request a quote or call the workshop in Berlin.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Request a quote '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Bernhard Halle Nachfl. GmbH<br>Hubertusstraße 10<br>12163 Berlin, Germany</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Tel. <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Legal</span><p data-r>HRB 51228, Amtsgericht Berlin-Charlottenburg<br>VAT ID DE 811638637</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Workshop</span>Bernhard Halle Nachfl. GmbH<br>Hubertusstraße 10, 12163 Berlin</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/custom">Custom optics</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/events">Events</a></div>'+
   '<div class="c"><span class="lab">Products</span>Polarizers · Retarders<br>Mirrors and plates · Prisms<br>Lenses and objectives · Mechanics</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 120" aria-hidden="true"><text x="450" y="84" text-anchor="middle" style="font-family:\'Pinyon Script\',cursive;font-weight:400;font-size:92px">Bernhard Halle Nachfl.</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Bernhard Halle Nachfl. GmbH</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",principle:"story",products:"products",custom:"custom",company:"company",events:"events",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Bernhard Halle Nachfl. — Optical workshop in Berlin since 1873: polarizers, retarders, prisms, lenses",x:"Home"};
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
