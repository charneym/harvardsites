/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row nx-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function refs(){return '<ul class="nxrf">'+REFS.map(function(n){return '<li data-r>'+esc(n)+'</li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["OLED","Every layer of the stack","Inline systems and offline equipment for production control and development of OLED layers and stacks: ITO and organic layers from about 3 to 500 nm, measured for thickness and n&k.",'<path d="M8 40H48"/><path class="a" d="M8 34H48"/><path d="M8 28H48"/><path class="a" d="M8 22H48"/><path d="M8 16H48"/><circle class="f" cx="28" cy="10" r="2.2"/>'],
  ["Photovoltaics","From ingot to cell","Offline and inline reflectance and thin-film properties of textured and coated solar wafers and organic solar cells, and camera-based process control for ingot growing.",'<path d="M10 44L18 14H46L38 44Z"/><path class="a" d="M14 29H42"/><path class="a" d="M28 14L24 44"/><circle class="f" cx="46" cy="10" r="2.2"/>'],
  ["Thin-film coatings","Foils, glass and curved surfaces","Spectral offline and inline systems across a wide thickness range: coatings on foils and web, on large glass, on curved surfaces, and microscopic measurements.",'<path d="M8 38C18 30 38 30 48 38"/><path class="a" d="M8 32C18 24 38 24 48 32"/><path d="M28 8V20"/><circle class="f" cx="28" cy="22" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Spectrometric measurement systems<span class="nomob"> · Heinsberg</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Films a few</span><span class="l">nanometres thin,</span><span class="l"><em>measured exactly.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>NXT develops and manufactures spectrometric measurement systems for industry and the laboratory: contactless, non-destructive thickness and n&amp;k measurement for OLED, photovoltaics and thin-film coatings.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our systems '+ARR+'</a><a class="btn" href="#/contact">Talk to us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About NXT</span>'+
   '<h2 class="txt" id="mani">For more than 30 years, our instruments have helped customers around the world meet <em>exacting quality standards.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+</span><p class="k">Years of spectrometric measurement systems, developed and built in Heinsberg</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2008</span><p class="k">Our first OLED measurement equipment came to market</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3–500 nm</span><p class="k">OLED layer thickness range of Xelas, with n&amp;k for every layer</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Principle of measurement</span><h2 class="d3">Light in, <em>thickness out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Interference</span><span>Spectrum</span><span>Model</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Light meets a thin film.</h2><p>Light reflects from the front and the rear of each thin layer. The phase difference between the two makes them interfere, and absorption inside the layer changes the wave’s amplitude.</p></article>'+
     '<article class="step"><h2>The spectrum is recorded.</h2><p>Reflectance and transmittance spectra are taken within milliseconds, by spectrometers each calibrated against traceable standard lamps and reference standards such as silicon and precision glass.</p></article>'+
     '<article class="step"><h2>The model is fitted.</h2><p>A calculation varies the layer thicknesses and the optical constants n&amp;k until model and measurement match. Contactless and non-destructive, offline in the lab or inline in production.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="industries" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">Where thin films <em>decide quality.</em></h2></div><p data-r>Variations in coating thickness or uniformity mean failed products and wasted raw material. Our systems serve flat-panel displays, solar wafers, precision glass, semiconductors, lithium batteries, and packaging and coating for consumer products.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Instruments for <em>lab and line.</em></h2></div><p data-r>From a tailored solution built to your specification to fast, competent sales and service through our worldwide network: a selection of our offline and inline systems.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="references" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>References</span><h2 class="d2 split">Long-term <em>partnerships.</em></h2></div><p data-r>We work with global companies and research institutions over many years, and those close relationships let us supply innovative products and tailor-made solutions.</p></div>'+
   refs()+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">NXT AG, <em>Heinsberg.</em></h2></div><p data-r>NXT AG follows the German two-tier governance structure: the Management Board runs the company, and the Supervisory Board supervises and advises it. Offices in Hong Kong, Shenzhen and Taiwan serve customers in Asia.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>On the show floor</span><p class="cr" data-r><a class="ul" href="https://exhibitors.lopec.com/branchenverzeichnis/2026/aussteller/ausstellerdetails/nxt-gmbh/?elb=869.1100.1940.1.111" target="_blank" rel="noopener">LOPEC 2026, Munich</a></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">We do what <em>others can’t.</em></h2>'+
   '<p class="sub" data-r>Tell us about your layers, your line or your samples. We also offer personal testing of your products, and service teams in Europe and Asia.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email sales '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>NXT AG<br>Borsigstraße 78<br>52525 Heinsberg, Germany</p></div>'+
    '<div><span class="lab" data-r>Sales and administration</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+INFO+'">'+INFO+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Service</span><p data-r><a class="ul" href="mailto:'+HELP+'">'+HELP+'</a><br>Outside Europe: <a class="ul" href="'+NX+'contact/" target="_blank" rel="noopener">offices worldwide</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>NXT AG<br>Borsigstraße 78, 52525 Heinsberg</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/references">References</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Fields</span>OLED<br>Photovoltaics<br>Thin-film coatings</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 600 164" aria-hidden="true"><path fill="#00a6cf" d="M0 0H51L152 96V56H200V164H157L50 63H48V164H0Z"/><path fill="#ff9e19" d="M153 0H280L333 56H383L358 80L444 164H376L325 111L271 164H211L295 82L257 43H153Z"/><path fill="#c42a33" d="M338 43L382 0H600L569 43H509V164H458V43Z"/></svg>'+
  '<div class="legal"><span class="lab">© 2026 NXT AG</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",industries:"industries",products:"products",references:"references",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"NXT AG — Spectrometric measurement systems for thin films, Heinsberg",x:"Home"};
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
