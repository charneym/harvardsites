/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* software (zeeko.co.uk > Products > Zeeko Software) */
var SW=[
 ["Zeeko TPG","Tool paths","Generates simple and complex tool paths for the IRP series, with an integrated surface designer, on-machine geometry compensation and form correction, in 2D, 2.5D and 3D editions."],
 ["Precessions","Optimisation","Optimises tool paths to reduce surface form deviation in few iterations, with a metrology interface, an influence-function database and parallel processing."],
 ["Metrology Toolkit and Stitching","Measurement","Reads data from a wide range of metrology instruments, stitches sub-aperture interferometry of plane, spherical and aspheric parts, and exports corrected tool paths."]];
function sw(){return '<div class="caps nwc tst">'+SW.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
var MODES=["Grolishing","Pre-polishing","Corrective polishing","Finish polishing","Jet polishing","Pitch laced polishing","Smoothing","Spiral, raster and random tool paths"];
function modes(){return '<div class="bk cnd"><span class="lab kick" data-r>Every IRP can perform</span><p class="cr" data-r>'+MODES.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
var APPS=[
 ["Telescope mirrors","Where Zeeko began: ultra-precision surfaces for telescope mirrors, and the complex segments specified for the new generation of segmented telescopes."],
 ["Precision optics","Convex, concave, aspheric and free-form optics, with finishes as good as 2–3 Å and form accuracy as good as λ/20 P-V."],
 ["Joints, wafers and moulds","Orthopaedic joints, semiconductor applications and precision moulds in many materials, and robotic polishing cells with ZEPHYR CAM."]];
function apps(){return '<div class="caps nwc tst">'+APPS.map(function(c){return '<div class="cap"><span class="lab" data-r>Application</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["May 2026","See us at the 17th Optatec in Frankfurt, 5–7 May 2026","Events",ZW+"/events"],
 ["Jun 2025","Exhibitor at LASER World of Photonics 2025, Messe München","LASER 2025","https://exhibitors.world-of-photonics.com/exhibitor-portal/2025/list-of-exhibitors/"],
 ["Apr 2024","Two King’s Awards for Enterprise 2024: Innovation and International Trade","Machinery","https://www.machinery.co.uk/content/news/industrial-polishing-machine-manufacturer-is-double-kings-award-winner-in-2024"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="758" height="1554" alt="Zeeko IRP50 Intelligent Robotic Polisher, blue and grey cabinet with control panel" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Ultra-precision polishing<span class="nomob"> · Coalville, England</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Polishing optics</span> <span class="l">to a few angstroms.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>The IRP series of Intelligent Robotic Polishers and the software that drives them: convex, concave and free-form surfaces from 50 mm to 1.6 m, for telescope mirrors, precision optics and more.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/machines">Our machines '+ARR+'</a><a class="btn" href="#/contact">Talk to us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Zeeko</span>'+
   '<h2 class="txt" id="mani"><span class="nw">From a start-up</span> <span class="nw">polishing telescope</span> <span class="nw">mirrors to machines</span> <span class="nw">installed throughout</span> <span class="nw">the world.</span> <em><span class="nw">Built in Coalville,</span> <span class="nw">exported worldwide.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">52+</span><p class="k">patents worldwide protecting our polishing and measurement technology</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">λ/20</span><p class="k">P-V form accuracy, with finishes as good as 2–3 Å</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">King’s Awards for Enterprise in 2024, for Innovation and International Trade</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Corrective polishing</span><h2 class="d3"><span class="nw">Measure, plan,</span> <span class="nw">polish, repeat.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Measure</span><span>Plan</span><span>Polish</span><span>Converge</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Measure</span> <span class="nw">the surface.</span></h2><p>The Metrology Toolkit reads the part’s surface map from the measuring instrument, and stitching software joins sub-aperture interferometry into one map.</p></article>'+
     '<article class="step"><h2><span class="nw">Plan</span> <span class="nw">the tool path.</span></h2><p>Zeeko TPG and Precessions turn the error map into an optimised spiral, raster or random tool path, and write the CNC code for the IRP.</p></article>'+
     '<article class="step"><h2><span class="nw">Polish where</span> <span class="nw">it is needed.</span></h2><p>The IRP works across the surface, removing more where the surface is high and less where it is low: corrective polishing on a universal platform.</p></article>'+
     '<article class="step"><h2><span class="nw">Closing in</span> <span class="nw">on the form.</span></h2><p>Measure and correct again until the form is as good as λ/20 P-V, with a finish as good as 2–3 Å, dependent on the material and metrology.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="machines" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>IRP polishers</span><h2 class="d2 split"><span class="nw">From 50 mm</span> <span class="nw">to 1.6 metres.</span></h2></div><p data-r>Developed over more than ten years of continuous improvement, every IRP is built on a universal platform that polishes convex, concave, free-form and other complex geometries.</p></div>'+
   devs()+modes()+
  '</div></section>'+

  '<section class="sec light" id="software" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Software</span><h2 class="d2 split"><span class="nw">The intelligence</span> <span class="nw">in the polisher.</span></h2></div><p data-r>Our own software links measurement, tool-path planning and the machine, and ZEPHYR CAM extends it to 3- to 7-axis machines and industrial robots.</p></div>'+
   sw()+
  '</div></section>'+

  '<section class="sec dark" id="markets" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Markets</span><h2 class="d2 split"><span class="nw">Telescopes, optics</span> <span class="nw">and beyond.</span></h2></div><p data-r>Corrective polishing for high-precision optics, orthopaedic joints, semiconductor applications and precision moulds, in a number of different materials.</p></div>'+
   apps()+
  '</div></section>'+

  '<section class="sec light" id="about" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About us</span><h2 class="d2 split"><span class="nw">British innovation</span> <span class="nw">since 2000.</span></h2></div><p data-r>Established in 2000, Zeeko remains an innovative, young and dynamic technology business, with Sag-Tek alongside us in Coalville and Zeeko Industrial building robotic polishing cells.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Awards, shows</span> <span class="nw">and new machines.</span></h2></div><p data-r>Where to see our polishers and software, and the recognition our team has earned.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">What do you</span> <span class="nw">need to polish?</span></h2>'+
   '<p class="sub" data-r>Tell us the part, the material and the form you need, and we will recommend an IRP, the software and a process.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Zeeko Ltd</span><br><span>4 Vulcan Court, Vulcan Way</span><br><span>Coalville, Leicestershire</span><br><span>LE67 3FW, United Kingdom</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Machines, software and support</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><span>Company no. 03990080</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>4 Vulcan Court, Vulcan Way<br>Coalville LE67 3FW</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/machines">Machines</a><br><a class="ul" href="#/software">Software</a><br><a class="ul" href="#/markets">Markets</a><br><a class="ul" href="#/about">About</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">IRP series</span>IRP 50 to IRP 1600<br>TPG and Precessions<br>Metrology Toolkit</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">Zeeko</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Zeeko Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",machines:"machines",software:"software",markets:"markets",about:"about",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Zeeko — Ultra-precision polishing machines for optics, Coalville, Leicestershire",x:"Home"};
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
