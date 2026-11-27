/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
/* four application areas (microharmonics.com > Home, About) */
function caps(){var C=[
  ["Test and measurement","<span class=\"nw\">Clean signals</span> <span class=\"nw\">on the bench</span>","Isolators suppress standing waves in sensitive millimeter-wave instrumentation, from vector network analysis to THz sources.",'<rect x="8" y="14" width="40" height="28"/><path class="a" d="M14 32L22 22L30 30L42 20"/>'],
  ["Telecommunications","<span class=\"nw\">Two signals,</span> <span class=\"nw\">one link</span>","Orthomode transducers combine orthogonal polarizations, doubling the data a 142 GHz link can carry in demonstrations with VDI and Keysight.",'<path d="M10 40L28 14L46 40"/><path class="a" d="M18 40H38"/>'],
  ["Radar and security","<span class=\"nw\">Radar, scanners,</span> <span class=\"nw\">portal security</span>","Compact range radar, imaging, portal security scanners and chemical and bio-agent detection all run through waveguide components.",'<path d="M8 44A26 26 0 0 1 48 44"/><path class="a" d="M28 44L42 22"/>'],
  ["Science and space","<span class=\"nw\">Earth, planets</span> <span class=\"nw\">and plasmas</span>","NASA uses them in earth and planetary atmospheric observation; they also serve plasma diagnostics at ITER, spectroscopy and radio astronomy.",'<circle cx="28" cy="28" r="16"/><path class="a" d="M8 34Q28 18 48 26"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* what makes the products different (microharmonics.com > Home, Isolators, About) */
function svc(){var S=[
  ["Faraday rotation","Ferrite rotates the wave's polarization in one direction only, so the forward signal passes and the reflected one is absorbed."],
  ["Diamond heat spreaders","A unique diamond heat spreader keeps the ferrite cooler, for more power handling and reliability."],
  ["Test data for every unit","No two components have exactly the same response, so every one is measured across its full band on a vector network analyzer, and the data ships free."],
  ["Stepped-twist design","Isolators are engineered with a canted waveguide alignment in a stepped twist, yet mate with standard waveguide flanges."],
  ["Made in the USA","Products are 100% made in the USA and can be sole-sourced in US government acquisitions."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["2015–18","NASA research contracts develop the low-insertion-loss isolators, from WR-28 (26–40 GHz) to WR-2.8 (260–400 GHz)."],
  ["2019–21","NASA contracts add cryogenic isolators, and voltage-variable attenuators from WR-15 through WR-10."],
  ["2025–26","The WR-8 attenuator launches and Micro Harmonics OMTs enable 6G demonstrations with VDI and Keysight."]];
  return '<ol class="hst">'+H.map(function(h){return '<li data-r><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1639" height="813" alt="A lineup of Micro Harmonics gold-plated millimeter-wave isolators" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Millimeter-wave components<span class="nomob"> · Fincastle, Virginia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">The lowest loss</span> <span class="l nw">at millimeter waves.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Micro Harmonics makes ferrite isolators, circulators, attenuators and orthomode transducers from 25 to over 400 GHz, and tests every unit across its full waveguide band.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Talk to an engineer</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our guarantee</span>'+
   '<h2 class="txt" id="mani"><span class="nw">No two components</span> <span class="nw">have the same</span> <span class="nw">frequency response.</span> <em><span class="nw">So we measure</span> <span class="nw">every one</span> <span class="nw">and send you</span> <span class="nw">the data.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;2 dB</span><p class="k">typical insertion loss of the WR-3.4 isolators, across 220 to 330 GHz</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">400 GHz</span><p class="k">the top of the range: ferrite components from 25 GHz upward</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10x</span><p class="k">the bandwidth of a traditional Y-junction, in the patented hybrid circulator</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside a Faraday rotation isolator</span><h2 class="d3"><span class="nw">One way in,</span> <em class="nw">no way back.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Enter</span><span>Rotate</span><span>Absorb</span><span>Test</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">The signal</span> <span class="nw">enters the guide.</span></h2><p>A millimeter-wave signal travels down the rectangular waveguide toward a magnetized ferrite element.</p></article>'+
     '<article class="step"><h2><span class="nw">Ferrite turns</span> <span class="nw">the polarization.</span></h2><p>The ferrite rotates the wave\'s polarization, and the stepped twist hands it to the output port with the lowest insertion loss in the industry.</p></article>'+
     '<article class="step"><h2><span class="nw">Reflected waves</span> <span class="nw">are absorbed.</span></h2><p>A wave coming back is rotated the same way again, arrives in the wrong orientation and is absorbed, so standing waves never reach the source.</p></article>'+
     '<article class="step"><h2><span class="nw">Every unit,</span> <span class="nw">full band, tested.</span></h2><p>Each isolator is measured across its whole waveguide band on a vector network analyzer, and the customer gets that data at no extra cost.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Ferrite components,</span> <em class="nw">25 to 400 GHz.</em></h2></div><p data-r>The most technologically advanced millimeter-wave ferrite products on the market, optimized for extended bandwidth and the lowest insertion loss.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split"><span class="nw">Wherever waves</span> <em class="nw">are short.</em></h2></div><p data-r>Our waveguide components serve commercial and government systems, from the lab bench to the next generation of wireless links.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Also used in</span><p class="cr" data-r><span>Imaging</span><span>Biomaterial analysis</span><span>Biomedical systems</span><span>High-frequency data links</span><span>Covert communication</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">What makes</span> <em class="nw">them different.</em></h2></div><p data-r>Performance, reliability and collaboration: the lowest insertion loss, full-bandwidth RF test data for every unit, and direct engineering support.</p></div>'+
   svc()+
   '<div class="trn" data-r><span class="lab kick">Building the future with NASA</span><p>Micro Harmonics partners with NASA to develop its millimeter-wave products, from low-loss and cryogenic isolators to voltage-variable attenuators and hybrid circulators.</p><a class="ul" href="https://microharmonics.com/about/" target="_blank" rel="noopener">About Micro Harmonics</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Engineers talking</span> <em class="nw">to engineers.</em></h2></div><p data-r>Direct engineering support is part of every order. The team behind the products has decades of millimeter- and submillimeter-wave design between them.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Leadership</span><ul>'+
     '<li data-r><span class="nm">Diane Kees</span><span class="lab rl">Chief Executive and Operations Officer</span></li>'+
     '<li data-r><span class="nm">David Porterfield</span><span class="lab rl">Founder and President</span></li>'+
     '<li data-r><span class="nm">Joel Kees</span><span class="lab rl">Director of Product Development</span></li>'+
    '</ul></div>'+
    '<div class="engpol"><span class="lab kick" data-r>Milestones</span>'+hist()+'</div></div>'+
   '<div class="qual"><span class="lab kick" data-r>For government buyers</span><p class="cr" data-r><span>Made in the USA</span><span>Sole-source eligible</span><span>CAGE 6T4C6</span><span>NAICS 334220</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">THz sources,</span> <em class="nw">6G links.</em></h2></div><p data-r>New articles, a 142 GHz demonstration and the WR-8 attenuator. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us about</span> <em class="nw">your system.</em></h2>'+
   '<p class="sub" data-r>A quote, a datasheet or a design question: talk directly to the engineers who build the components.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Micro Harmonics '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span>Micro Harmonics Corporation</span><br><span>20 S Roanoke St, Ste 202</span><br><span>Fincastle, VA 24090, USA</span></p></div>'+
    '<div><span class="lab" data-r>Sales</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Telephone '+TELT+'</span></p></div>'+
    '<div><span class="lab" data-r>Distributors</span><p data-r><span>International distributors</span><br><span>listed on the Micro Harmonics site</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Micro Harmonics Corporation, 20 S Roanoke St, Ste 202, Fincastle, VA 24090</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Made in the USA</span>Millimeter-wave isolators, circulators, attenuators and orthomode transducers, built in Fincastle, Virginia.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:400;font-size:40px;letter-spacing:.16em">MICRO HARMONICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Micro Harmonics Corporation</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",products:"products",applications:"applications",technology:"technology",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Micro Harmonics — Millimeter-wave isolators, circulators and OMTs",x:"Home"};
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
