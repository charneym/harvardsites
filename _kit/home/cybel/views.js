/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* the three bands (cybel-llc.com > Fiber Lasers and Fiber Amplifiers: 1µm, 1.5µm and 2µm Applications) */
var BANDS=[
 ["1 µm","1030 – 1090 nm","MAKO pulsed lasers to 2.5 kW peak, VULCAN-1064 up to 20 W, the BEACON-1064 quasi-CW laser with up to 250 mJ, and the MAKO-S amplifier designed to operate reliably in a space environment.",CW+"/fiber-lasers/"],
 ["1.5 µm","1540 – 1600 nm","MAKO-1550+ with more than 10 kW peak and 30 µJ pulses, VULCAN-1550 with up to 15 W CW, SKYLIGHT-1550 on the SKYLINE platform, and the JET-1600 at 1 or 2 W.",CW+"/fiber-lasers/"],
 ["2 µm","1750 – 2100 nm","Thulium-doped VULCAN-2000 and MAGNI-NL-2000 above 10 W, the PHOENIX-2040+ dual-mode laser, tunable SOPRANO and TENOR, and the ORION-2000 DFB fiber Bragg grating laser at 10 kHz linewidth.",CW+"/fiber-lasers/"]];
function bands(){return '<div class="caps nwc tst">'+BANDS.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p><a class="lab lk ul" data-r href="'+c[3]+'" target="_blank" rel="noopener"><span>See the lasers</span> '+ARR+'</a></div>'}).join("")+'</div>'}
var MODES=["Continuous wave","Nanosecond pulsed","Quasi-CW","Single frequency","Narrow linewidth","Tunable","Polarization-maintaining","ASE sources","Space-environment designs"];
function modes(){return '<div class="bk cnd"><span class="lab kick" data-r>Across the range</span><p class="cr" data-r>'+MODES.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* publications (cybel-llc.com > News: Publications and press releases) */
var PUBS=[
 ["Photonics West 2024","Design and Performance of 1762 nm Tm-doped Fiber Amplifiers for Manipulation and Control of Optical Qubits in 133Ba+ Ions"],
 ["Publication","Novel Single Clad Ho-doped Fiber Amplifier with High Slope Efficiency and Low Ion Pairing"],
 ["Publication","ASE sources as pumps for 2-µm fiber amplifiers, lasers, and ultra-broad ASE sources"],
 ["Publication","Radiation Hardness Studies of Butterfly Single Mode DFB Lasers at 1064 nm"],
 ["Publication","Nanosecond Pulsed MOPA Optical Transmitter at 2070 nm with > 250 W Peak Output Power"]];
function pubs(){return '<ul class="nws">'+PUBS.map(function(n){return '<li><a href="'+CW+'/news/" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">Cybel '+ARR+'</span></a></li>'}).join("")+'</ul>'}
var NEWS=[
 ["Jan 2026","Booth 5214 at SPIE Photonics West 2026, Moscone Center, San Francisco","Cybel news",CW+"/news/"],
 ["Jun 2025","Exhibitor at LASER World of Photonics 2025, Messe München, stand A2.539","LASER 2025","https://exhibitors.world-of-photonics.com/exhibitor-portal/2025/list-of-exhibitors/"],
 ["Apr 2025","Booth 1208 at SPIE Defense + Commercial Sensing 2025, Orlando","Cybel news",CW+"/news/"],
 ["Jan 2025","Booth 4619 at SPIE Photonics West 2025, San Francisco","Cybel news",CW+"/news/"],
 ["Feb 2024","Three papers delivered at SPIE Photonics West 2024","Cybel news",CW+"/news/"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1635" height="636" alt="Cybel turnkey BENCHTOP fiber amplifier with its fiber patch cords" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Fiber lasers and amplifiers<span class="nomob"> · Bethlehem, Pennsylvania</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Fiber lasers and</span><span class="l">amplifiers, 1 to 2 µm.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Compact OEM modules and turnkey benchtops at 1 µm, 1.5 µm and 2 µm: standard or polarization-maintaining, continuous wave or pulsed, designed and built by Cybel.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/lasers">Our lasers '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Cybel</span>'+
   '<h2 class="txt" id="mani"><span class="nw">An independently</span> <span class="nw">owned American</span> <span class="nw">photonics company.</span> <span class="nw">We design, fabricate</span> <span class="nw">and produce fiber</span> <span class="nw">lasers and amplifiers.</span> <em><span class="nw">Headquartered in</span> <span class="nw">Bethlehem, with R&amp;D</span> <span class="nw">in Fairfax, Virginia.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3 bands</span><p class="k">1 µm, 1.5 µm and 2 µm, as OEM modules or benchtop units</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt;15 kW</span><p class="k">peak power from a SKYLINE OEM fiber laser, with pulses up to 40 µJ</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10 kHz</span><p class="k">linewidth of the ORION-2000 single-frequency DFB fiber Bragg grating laser</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside a Cybel fiber amplifier</span><h2 class="d3"><span class="nw">From a quiet seed</span> <span class="nw">to watts of light.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Seed</span><span>Pump</span><span>Gain</span><span>Output</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">It starts with</span> <span class="nw">a quiet seed.</span></h2><p>It starts with a low-noise signal: a single-frequency DFB fiber Bragg grating laser such as the ORION-2000 at 10 kHz, or the customer’s own narrow-linewidth source.</p></article>'+
     '<article class="step"><h2><span class="nw">Pump light,</span> <span class="nw">combined in.</span></h2><p>Pump light is coupled into the same fiber as the signal. Cybel’s research covers the pumps themselves, from ASE sources for 2 µm amplifiers to 1860 nm pumping of holmium.</p></article>'+
     '<article class="step"><h2><span class="nw">Gain along</span> <span class="nw">the doped fiber.</span></h2><p>In the coiled, doped gain fiber the signal grows with low noise and high gain, in standard or polarization-maintaining fiber, with thulium and holmium for the 2 µm band.</p></article>'+
     '<article class="step"><h2><span class="nw">Clean power</span> <span class="nw">at the output.</span></h2><p>Out comes continuous or pulsed light: up to 2 W from a MERCURY module, more than 15 W average and 15 kW peak from SKYLINE, controlled over RS-232 or USB.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="lasers" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Lasers and amplifiers</span><h2 class="d2 split"><span class="nw">Three platforms,</span> <span class="nw">one turnkey line.</span></h2></div><p data-r>The same fiber designs come as subcompact MAKO and MERCURY modules, the powerful SKYLINE, or a benchtop instrument with an LCD front panel and USB control.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="wavelengths" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Wavelengths</span><h2 class="d2 split"><span class="nw">From 1 µm</span> <span class="nw">to the 2 µm band.</span></h2></div><p data-r>Ytterbium-band, telecom-band and thulium-band lasers and amplifiers, each available as an OEM module, and many as benchtop units too.</p></div>'+
   bands()+modes()+
  '</div></section>'+

  '<section class="sec dark" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split"><span class="nw">Research you</span> <span class="nw">can cite.</span></h2></div><p data-r>Cybel engineers publish at SPIE Photonics West, CLEO and ECOC and in the Journal of Lightwave Technology. Four new US patents were granted to Cybel in December 2022.</p></div>'+
   pubs()+
  '</div></section>'+

  '<section class="sec light" id="about" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About us</span><h2 class="d2 split"><span class="nw">Founded by</span> <span class="nw">fiber-laser engineers.</span></h2></div><p data-r>Cybel was founded by Dr. Jean-Marc Delavaux and Dr. Glen Williams. Our staff and management have been in this industry for decades, and build every unit around what the customer needs.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Headquarters</span><h3 data-r>Bethlehem, Pennsylvania</h3><p data-r>Design, fabrication and production of our fiber laser and amplifier products, at 62 Highland Ave.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>R&amp;D center</span><h3 data-r>Fairfax, Virginia</h3><p data-r>Development of the fiber laser and amplifier line and our special projects.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Partners</span><h3 data-r>Complementary photonics</h3><p data-r>We also distribute Exail Photonics, QD Laser, Eblana Photonics, Alnair Labs and Perfos: fibers, modulators, semiconductor lasers and test equipment.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Where to</span> <span class="nw">meet us.</span></h2></div><p data-r>Trade shows and conferences on both sides of the Atlantic, where we show the newest lasers and present our papers.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us about</span> <span class="nw">your application.</span></h2>'+
   '<p class="sub" data-r>For a quote, a data sheet or a custom wavelength, power or pulse format, email or call us. Our sales engineers cover the East and West Coasts.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Cybel, LLC<br>62 Highland Ave.<br>Bethlehem, PA 18017<br>United States</p></div>'+
    '<div><span class="lab" data-r>General enquiries</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Support</span><p data-r><a class="ul" href="mailto:'+SUP+'">'+SUP+'</a><br>Distributors in Europe, India and Japan</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>62 Highland Ave.<br>Bethlehem, PA 18017</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/lasers">Lasers</a><br><a class="ul" href="#/wavelengths">Wavelengths</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/about">About</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platforms</span>MAKO and MERCURY OEM<br>SKYLINE OEM<br>BENCHTOP and METEOR</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">Cybel</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Cybel, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",lasers:"lasers",wavelengths:"wavelengths",research:"research",about:"about",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Cybel — Fiber lasers and fiber amplifiers at 1, 1.5 and 2 µm, Bethlehem, Pennsylvania",x:"Home"};
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
