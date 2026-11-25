/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(C){return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
var APPS=[
  ["Gas analysis","A standard range of infrared bandpass filters for measuring gases such as CO, CO₂, SO₂, CH₄ and N₂O, from 3 to 11 µm on sapphire, silicon or germanium, now available from stock.",'<rect x="8" y="12" width="40" height="32"/><path class="a" d="M14 36c4-14 8-20 14-20s10 6 14 20"/><path d="M28 44v6"/>'],
  ["Ultrafast lasers","Pulse compression gratings with up to 90 % efficiency, gold coated, in standard sizes from 25 × 25 mm up to 120 × 140 mm, and laser tuning gratings for tunable lasers.",'<path d="M4 28h14"/><path class="a" d="M18 28l12-12M18 28l12 12"/><path d="M30 14l20 2M30 42l20-2"/>'],
  ["Space and Earth observation","Detectors carrying anti-reflection coatings that Spectrogon designed and produced flew on MetOp-SG A1 in the IASI-NG instrument, after ESD-protected processing and extensive testing.",'<circle cx="28" cy="28" r="9"/><path class="a" d="M6 34c10-14 34-20 44-12"/><path d="M28 6v8M28 42v8"/>']];
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Optical filters · holographic gratings<span class="nomob"> · thin film coatings</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Controlling light,</span><span class="l">by interference</span><span class="l"><em>and diffraction.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Spectrogon develops and manufactures optical filters, thin film coatings and holographic gratings for measurement instruments, with its headquarters and production in Täby, outside Stockholm.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How light is sorted '+ARR+'</a><a class="btn" href="#/products">Our products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About Spectrogon</span>'+
   '<h2 class="txt" id="mani">Born of research at the Royal Institute of Technology and at AGA, we have made optical components based on interference and diffraction since 1984. <em>More than 80 % of our sales go to instrument makers.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1984</span><p class="k">AGA Optical becomes Spectrogon; an independent company since 1991</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3,600 m²</span><p class="k">Of thin film and grating manufacturing on two sites in Täby, Sweden</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~1000</span><p class="k">Filter types listed from stock, with spectral data for every batch</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How light is sorted</span><h2 class="d3">One beam, <em>every colour.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Strike</span><span>Diffract</span><span>Select</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>White light meets the grating.</h2><p>A holographic grating carries hundreds of fine, even grooves per millimetre, recorded by laser interference in a photosensitive layer and, for the near infrared, coated in gold.</p></article>'+
     '<article class="step"><h2>Each wavelength leaves at its own angle.</h2><p>Diffraction fans the light into a spectrum. Spectrogon optimises each grating for its wavelength, polarisation and geometry, so the energy goes where the instrument needs it.</p></article>'+
     '<article class="step"><h2>A thin film filter keeps one band.</h2><p>Interference in a stack of thin layers passes a chosen band with high transmission and blocks the rest, so the detector sees only the light it measures.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Filters, gratings and coatings, <em>from 193 nm to 20 µm.</em></h2></div><p data-r>We develop and manufacture optical filters, other thin film coatings and holographic gratings in Täby, with coating chambers for small prototype runs and for high volume production.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">Built into the instruments <em>that measure.</em></h2></div><p data-r>Our components go into medical diagnostics, industrial process control, robotics, environmental measurement, optical communications and analytical instruments, in Western Europe, North America and beyond.</p></div>'+
   caps(APPS)+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people <em>you will talk to.</em></h2></div><p data-r>Spectrogon AB employs 88 people in Täby for R&D, production, sales and marketing, with sales subsidiaries in Scotland and New Jersey. These are our sales teams.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Spectrogon.</em></h2></div><p data-r>Shows, products and milestones, from stock gas analysis filters to coatings now in orbit.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Tell us what <em>you need to measure.</em></h2>'+
   '<p class="sub" data-r>Send us your specification for a filter, grating or coating, or ask about stock. Our sales teams in Sweden, the UK and the US will help.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Spectrogon '+ARR+'</a><a class="btn" href="#/products">See our products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Sweden (HQ)</span><p data-r>Spectrogon AB<br>Tillverkarvägen 1<br>SE-187 66 Täby</p><p data-r><a class="ul" href="mailto:sales.se@spectrogon.com">sales.se@spectrogon.com</a><br><a class="ul" href="tel:+4686382800">+46 8 638 28 00</a></p></div>'+
    '<div><span class="lab" data-r>United Kingdom</span><p data-r>Spectrogon UK<br>Whitworth Rd, Glenrothes<br>Fife, KY6 2TF</p><p data-r><a class="ul" href="mailto:sales.uk@spectrogon.com">sales.uk@spectrogon.com</a><br><a class="ul" href="tel:+441592770000">+44 1592 770 000</a></p></div>'+
    '<div><span class="lab" data-r>United States</span><p data-r>Spectrogon US<br>115 Route 46 West, Suite A2<br>Mountain Lakes, NJ 07046</p><p data-r><a class="ul" href="mailto:sales.us@spectrogon.com">sales.us@spectrogon.com</a><br><a class="ul" href="tel:+19738340104">+1 973 834 0104</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Visit</span>Tillverkarvägen 1<br>SE-187 66 Täby, Sweden</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">sales.se@spectrogon.com</a><br><a class="ul" href="tel:+4686382800">+46 8 638 28 00</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Certified</span>ISO 9001:2015<br>ISO 14001:2015</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="62" text-anchor="middle" style="font-family:\'Archivo\',sans-serif;font-weight:700;font-size:82px">SPECTROGON</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Spectrogon AB</span><span class="lab">Site concept</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={company:"company",story:"story",products:"products",applications:"applications",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Spectrogon — optical filters, holographic gratings and thin film coatings",x:"Home"};
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
