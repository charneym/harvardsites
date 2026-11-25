/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np vxp">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">More '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){
  return '<div class="mh vxmh"><ul class="mh-list">'+TEAM.map(function(p){
    return '<li><div class="mh-row vx-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Custom filters and coatings<span class="nomob"> · Hinckley, UK</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Optical filters,</span><span class="l"><em>300 to 6000&nbsp;nm.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Vortex design and manufacture custom optical filters and coatings in the UK, from the visible to the mid infrared, with short lead times and flexible call-off schedules.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our coatings '+ARR+'</a><a class="btn" href="#/contact">Send an enquiry</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Designed and made in the UK</span>'+
   '<h2 class="txt" id="mani">Our coatings are used daily in a wide range of applications all over the world, and some are even <em>out of this world.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2008</span><p class="k">Founded in Hinckley, Leicestershire, and independently owned ever since</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10</span><p class="k">Fully automated high-energy sputter deposition coating machines</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.3–6&nbsp;µm</span><p class="k">Design and manufacturing range, from the visible to the mid infrared</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a filter is made</span><h2 class="d3"><span class="nw">From a spectrum</span> <em class="nw">to a part.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Design</span><span>Coat</span><span>Dice</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Designed to your spectrum.</h2><p>You give us the centre wavelength, bandwidth, peak transmission and blocking range. We design the coating to meet it, anywhere from 300 to 6000&nbsp;nm.</p></article>'+
     '<article class="step"><h2>Sputtered, layer on layer.</h2><p>Our fully automated high-energy sputter deposition machines were built for excellent repeatability and round-the-clock production, and lay down coatings with excellent durability. Every coating run is traceable.</p></article>'+
     '<article class="step"><h2>Diced to size, on site.</h2><p>Coated wafers up to 150&nbsp;mm are diced in-house into finished parts as small as 1.0&nbsp;×&nbsp;1.0&nbsp;mm, to ±0.1&nbsp;mm as standard.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products and services</span><h2 class="d2 split"><span class="nw">Filters for every</span> <em class="nw">part of the spectrum.</em></h2></div><p data-r>Every filter is designed and manufactured to your specification, between 300 and 6000&nbsp;nm, for prototype and development projects as well as large production batches at competitive prices.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Where they are used</span><p class="cr" data-r><span>Gas sensing</span><span>Industrial processing</span><span>Food industry</span><span>Plastic sorting</span><span>Smart agriculture</span><span>Medical applications</span><span>Outer space</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="dicing" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Dicing</span><h2 class="d2 split"><span class="nw">Dicing, as a service</span> <em class="nw">of its own.</em></h2></div><p data-r>In 2021 a new state-of-the-art Disco dicing saw joined our existing saw, so we now dice optical components and coated wafers for other companies as well as our own filters.</p></div>'+
   '<div class="dx">'+
    '<figure class="dx-f" data-r><img src="dicing.webp" alt="Coated filters diced into square parts, held in a tray" width="600" height="600" loading="lazy"><figcaption class="lab">Diced coated filters in a tray, Vortex, Hinckley</figcaption></figure>'+
    '<dl class="dx-l">'+
     '<div data-r><dt class="lab">Wafer size</dt><dd>Up to 150&nbsp;mm in diameter or length, 0.1 to 4&nbsp;mm thick</dd></div>'+
     '<div data-r><dt class="lab">Smallest part</dt><dd>1.0&nbsp;×&nbsp;1.0&nbsp;mm, to ±0.1&nbsp;mm as standard</dd></div>'+
     '<div data-r><dt class="lab">Materials</dt><dd>Sapphire, glass, silicon, quartz, calcium fluoride and germanium</dd></div>'+
     '<div data-r><dt class="lab">Sapphire</dt><dd>Edge chips held under 0.1&nbsp;mm, the same level as glass and silicon</dd></div>'+
     '<div data-r><dt class="lab">Blades</dt><dd>New, thinner diamond blades for less kerf loss and more parts per wafer</dd></div>'+
     '<div data-r><dt class="lab">Step dicing</dt><dd>Quoted individually: send us your requirements</dd></div>'+
    '</dl>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Independent, and</span> <em class="nw">growing every year.</em></h2></div><p data-r>Since 2008 we have coated for medical devices, gas and hydrocarbon detection, integrated systems and OEMs, Formula 1 teams, a global leader in designer goods and leading tech companies, on short lead times in an industry where late deliveries are far too common.</p></div>'+
   team()+
   '<div class="ev"><span class="lab kick" data-r>Quality, memberships and shows</span><dl>'+
    '<div data-r><dt class="lab">Quality</dt><dd><a class="ul" href="'+VX+'iso-9001-2015/" target="_blank" rel="noopener">ISO 9001:2015</a>, audited annually, with full traceability of spectral and environmental performance for every coating run</dd></div>'+
    '<div data-r><dt class="lab">Memberships</dt><dd>EPIC, the European Photonics Industry Consortium · SpectroNet · GasG</dd></div>'+
    '<div data-r><dt class="lab">Shows</dt><dd><a class="ul" href="https://www.sensor-test.de/en/visitors/search/exhibitor/1831" target="_blank" rel="noopener">SENSOR+TEST 2026, Nuremberg, stand 1-518</a></dd></div>'+
    '<div data-r><dt class="lab">Talks</dt><dd>SpectroNet Conference 2025, Fraunhofer IOSB, Karlsruhe: infrared linear variable filters developed for a Mars rover</dd></div>'+
    '<div data-r><dt class="lab">Community</dt><dd>Hinckley RFC, Barwell Cricket Club, Hinckley Area Foodbank, Alternativity and Career Ready mentoring</dd></div>'+
   '</dl></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us your</span> <em class="nw">wavelength.</em></h2>'+
   '<p class="sub" data-r>Our aim is simple: we will always support our customers, especially when you really need us. Send your specification for a quote, from a prototype run to a long-term production contract.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Head office</span><p data-r>Vortex Optical Coatings Ltd<br>Unit 10 Jacknell Road<br>Dodwells Bridge Industrial Estate<br>Hinckley, Leicestershire LE10 3BS</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telephone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Open</span><p data-r>Monday to Thursday, 08:00 to 17:00<br>Friday, 08:00 to 15:00</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Head office</span>Vortex Optical Coatings Ltd<br>Unit 10 Jacknell Road, Dodwells Bridge Industrial Estate<br>Hinckley, Leicestershire LE10 3BS</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/process">Process</a><br><a class="ul" href="#/dicing">Dicing</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Coatings</span>Bandpass · Long and short pass<br>Dichroics · Anti-reflection<br>Linear variable · Neutral density</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Michroma\',Arial,sans-serif;font-weight:400;font-size:52px;letter-spacing:.16em">VORTEX</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Vortex Optical Coatings Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",process:"story",products:"products",dicing:"dicing",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Vortex Optical Coatings — Custom optical filters and coatings, 300–6000 nm, made in the UK",x:"Home"};
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
