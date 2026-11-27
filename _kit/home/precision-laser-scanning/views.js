/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* components (precisionlaserscanning.com > Polygon Mirrors, Start-Of-Scan, Sync Laser to Polygon, Laser Cleaning, Model A, IR viewer) */
var COMP=[
 ["Polygon mirrors","Any size up to 300 mm","Any number of facets, perpendicular or angled including irregular angles, flat or curved, coated for any laser wavelength, in aluminum, copper or other materials.",PW+"/polygon-mirrors/"],
 ["Start-Of-Scan detection","Accurate, facet after facet","The SOS kit tells the system exactly when each scan starts, so a clock knows where the beam is across the whole line, with no encoder.",PW+"/start-of-scan-sos-detection-for-polygon-scan-heads/"],
 ["Controllers","Laser On/Off and raster scan","Fire the laser exactly at the start and end of the work line, or sync a polygon, a galvo and a laser for raster scans at hundreds of meters per second.",PW+"/laser-cleaning/"]];
function comps(){return '<div class="caps nwc tst">'+COMP.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p><a class="lab lk ul" data-r href="'+c[3]+'" target="_blank" rel="noopener"><span>Read more</span> '+ARR+'</a></div>'}).join("")+'</div>'}
var ALSO=["Model A Polygon Scan Head","Compact beam expanders","Top hat and donut beam shaping","High accuracy F-Theta lenses","HI POWER IR viewing glass","Polygon scanner calculator"];
function also(){return '<div class="bk cnd"><span class="lab kick" data-r>Also for your scan head</span><p class="cr" data-r>'+ALSO.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* applications (precisionlaserscanning.com > About) */
var APPS=[
 ["Material processing","Cleaning, marking and surface treatment of moving or static targets, and the full speed of high-power ultrafast and ultra-short-pulse lasers: a polygon has a much higher damage threshold than a galvo."],
 ["Inspection and biomedical","Large-aperture, high-speed scanners for inspection, and fast, small-aperture Gecko scanners for ophthalmology and microscopy."],
 ["LIDAR","Large-aperture polygons with any facet angle for long-range X or X-Y LIDAR, and compact Gecko scanners for collision avoidance on small UAVs and autonomous vehicles."]];
function apps(){return '<div class="caps nwc tst">'+APPS.map(function(c){return '<div class="cap"><span class="lab" data-r>Application</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["Jun 2025","Gecko Micro™, the world’s smallest polygon scanner: the MEMS alternative","Laser Scanning News",PW+"/laser-scanning-news/"],
 ["Jun 2025","LASER World of Photonics, Munich: Hall B3, Stand 515","Trade shows",PW+"/trade-shows/"],
 ["Apr 2025","OPIE Laser Expo, Yokohama, with SCANSOL at booth E-01","Trade shows",PW+"/trade-shows/"],
 ["Jan 2025","SPIE Photonics West, San Francisco: South Hall, Booth 2000","Trade shows",PW+"/trade-shows/"],
 ["Jan 2022","Model A: a fast, compact, light, low-cost Polygon Scan Head","Laser Scanning News",PW+"/new-fast-compact-light-weight-low-cost-polygon-scan-head-2/"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1167" height="1221" alt="Wood Pecker polygon laser scanner: a gold-coated polygon mirror on its motor and mounting plate" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Polygon laser scanners<span class="nomob"> · Scottsdale, Arizona</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Laser scanning</span><span class="l">at polygon speed.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Polygon scanners, polygon mirrors and scan-head components that move a beam ten to a hundred times faster than a galvo. Standard models on short lead times, custom ones with any number of facets.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/scanners">Our scanners '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Precision Laser Scanning</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Some people call us</span> <span class="nw">because their galvo</span> <span class="nw">scanners are not</span> <span class="nw">fast enough.</span> <em><span class="nw">We help them</span> <span class="nw">scan at polygon speed.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">100+ yrs</span><p class="k">of combined experience in our technical staff, designing polygon scanners</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10–100×</span><p class="k">faster than a galvo scan head, with a much higher laser damage threshold</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">300 mm</span><p class="k">polygon mirrors up to 300 × 300 mm, with any number of facets</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside a polygon scan head</span><h2 class="d3"><span class="nw">One spinning mirror,</span> <span class="nw">one uniform line.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Beam</span><span>Polygon</span><span>SOS</span><span>Line</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">The beam,</span> <span class="nw">sized to fit.</span></h2><p>A compact high-power beam expander sets the beam size before the scanner; beam shaping can give it a top hat or donut energy profile.</p></article>'+
     '<article class="step"><h2><span class="nw">A mirror that</span> <span class="nw">never stops.</span></h2><p>Each facet of the spinning polygon sweeps the beam across the field. Galvos start, stop and reverse; a polygon runs at a constant, user-selectable speed.</p></article>'+
     '<article class="step"><h2><span class="nw">Start of scan,</span> <span class="nw">every facet.</span></h2><p>Just before the work area, the beam crosses the Start-Of-Scan detector. Its pulse starts a clock, so the system knows where the beam is for the whole line, whatever the facet-to-facet error.</p></article>'+
     '<article class="step"><h2><span class="nw">Uniform,</span> <span class="nw">edge to edge.</span></h2><p>High accuracy F-Theta lenses and the constant speed make the line uniform across the whole width, and the Laser On/Off controller fires only where the work is.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="scanners" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Polygon scanners</span><h2 class="d2 split"><span class="nw">From 4.5 mm</span> <span class="nw">to 25 mm apertures.</span></h2></div><p data-r>Standard models of large and small polygon scanners on short lead times and low prices, and custom models with any number of facets.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="mirrors" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Mirrors and components</span><h2 class="d2 split"><span class="nw">Everything around</span> <span class="nw">the polygon.</span></h2></div><p data-r>The parts that turn a polygon scanner into a working scan head: the mirror itself, start-of-scan detection, and the controllers that sync the laser to every facet.</p></div>'+
   comps()+also()+
  '</div></section>'+

  '<section class="sec dark" id="markets" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Markets</span><h2 class="d2 split"><span class="nw">Where speed</span> <span class="nw">decides it.</span></h2></div><p data-r>We advise on many applications for high-speed polygon scanning, and the Laser Scanning News explains the topics in depth.</p></div>'+
   apps()+
  '</div></section>'+

  '<section class="sec light" id="about" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About us</span><h2 class="d2 split"><span class="nw">Specialists in</span> <span class="nw">polygon scanners.</span></h2></div><p data-r>Precision Laser Scanning, LLC was founded in 2015 by George Helser and specializes in high-speed polygon scanners. We provide assistance to implement them, from a single mirror to a complete scan head.</p></div>'+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Founder and President</span><h3 data-r>George Helser</h3><p data-r>Focused on applications for high-speed laser scanning since 2007, and the author of our Laser Scanning News.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Headquarters</span><h3 data-r>Scottsdale, Arizona</h3><p data-r>Precision Laser Scanning, LLC, 25750 N 82nd Street, Scottsdale, AZ 85255.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Worldwide</span><h3 data-r>Munich to Yokohama</h3><p data-r>We show our scanners at Photonics West and LASER World of Photonics, and in Japan with SCANSOL.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">New scanners,</span> <span class="nw">new shows.</span></h2></div><p data-r>Product launches from the Laser Scanning News, and the trade shows where you can see our scanners running.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us what</span> <span class="nw">you need to scan.</span></h2>'+
   '<p class="sub" data-r>Facets, aperture, speed, wavelength: tell us what your scan head needs and we will quote a standard or custom polygon scanner.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Precision Laser Scanning, LLC</span><br><span>25750 N 82nd Street</span><br><span>Scottsdale, AZ 85255</span><br><span>United States</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Polygon mirror specifications welcome</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">Office '+TELT+'</a><br><a class="ul" href="tel:'+TEL2+'">'+TEL2T+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>25750 N 82nd Street<br>Scottsdale, AZ 85255</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">Email us</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/scanners">Scanners</a><br><a class="ul" href="#/mirrors">Mirrors</a><br><a class="ul" href="#/markets">Markets</a><br><a class="ul" href="#/about">About</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Scanners</span>Eagle Eye and Wood Pecker<br>Dove and Gecko<br>MIM for LIDAR</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">Precision</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Precision Laser Scanning, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",scanners:"scanners",mirrors:"mirrors",markets:"markets",about:"about",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Precision Laser Scanning — High-speed polygon laser scanners and polygon mirrors, Scottsdale, Arizona",x:"Home"};
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
