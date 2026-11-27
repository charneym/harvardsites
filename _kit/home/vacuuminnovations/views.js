/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function caps(list){return '<div class="caps nwc tst">'+list.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function chips(kick,list){return '<div class="bk cnd"><span class="lab kick" data-r>'+esc(kick)+'</span><p class="cr" data-r>'+list.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* systems (vacuuminnovations.com > Systems: Custom Deposition Systems) */
var SYS=[
 ["Future-ready","Configuration","Fully customisable tooling and fixturing, thickness and uniformity control through multi-source monitoring, and seamless upgrades as your needs change."],
 ["Several techniques","Capability","More than one deposition technique in a single system, broad wavelength coverage, and repeatable performance to MIL-SPEC, aerospace, medical and laser standards."],
 ["Recipe-driven","Control","Real-time process monitoring, stored recipes, independent power and rate control for every source, and semi-automated operation."]];
/* coatings (vacuuminnovations.com > Coating Services) */
var COAT=[
 ["Specialty coatings","Laser damage, GLAD, gradient","Twenty years of coating laser-damage optics, patterned, GLAD and structured, and birefringent thin films, plus gradient, stepped and composite coatings."],
 ["AR coatings","Better than ±0.25%","Broadband, V-coat, U-coat and single-wavelength AR, routinely deposited to better than ±0.25% nonuniformity, depending on substrate geometry."],
 ["Reflectors","Metal and dielectric","Bare, protected and enhanced metal reflectors, including for high-intensity lasers, on optics up to 20 inches, and dielectric reflective coatings."]];
var SPEC=["Large-aperture optics","High-intensity laser coatings","Controlled uniformity","Fusion coatings","Beamsplitters","3 to 600 mm"];
/* workshops (vacuuminnovations.com > Workshops) */
var WS=[
 ["Coating uniformity","Thickness and distribution","How substrate size and shape, the deposition source and any motion change film thickness, and with it the spatial performance of the optic."],
 ["Laser damage","Fluence and design","What limits the energy a coating can handle, and how material choice and standing-wave fields inform designs for laser optics."],
 ["Coating design","Stress and testing","Optical coating design, characterisation and testing of thin films, and thin-film stress and its mitigation."]];
/* news (vacuuminnovations.com > News / Events) */
var NEWS=[
 ["Jun 2026","Extreme Optics Workshop, Măgurele, Romania: sponsor and speaker","Conference",PW+"/news"],
 ["Apr 2026","Optical Coating Design and Technology Workshop, Vilnius, with FTMC, OTF Studio and Essent Optics","Workshop",PW+"/news"],
 ["Apr 2026","SPIE Photonics Europe, Strasbourg: first time exhibiting, with an oral and a poster presentation","Exhibition",PW+"/news"],
 ["Jan 2026","SPIE Photonics West, San Francisco, in the NY Photonics pavilion","Exhibition",PW+"/news"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1600" height="1000" alt="A Vacuum Innovations four-position rotary crystal head: a machined body with a carousel of gold quartz crystals and two cooling tubes" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Optical coating systems<span class="nomob"> · Dansville, New York</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Coating chambers,</span> <span class="l">built by coaters.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Custom e-beam deposition systems, components for your chamber, and precision optical coatings made in-house, backed by over 30 years in optical coating technology.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/systems">Our systems '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Vacuum Innovations</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Large-aperture optics</span> <span class="nw">and laser coatings,</span> <span class="nw">with uniformity</span> <span class="nw">by design.</span> <em><span class="nw">Systems, parts and</span> <span class="nw">coatings, in one place.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2007</span><p class="k">founded by Dr. James Oliver, our president</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">600 mm</span><p class="k">largest optic we coat in-house, from 3 mm up</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">±0.25%</span><p class="k">AR coating nonuniformity we routinely beat, depending on geometry</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside an e-beam coater</span><h2 class="d3"><span class="nw">Every layer,</span> <span class="nw">even.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Source</span><span>Rotate</span><span>Mask</span><span>Monitor</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">An electron beam</span> <span class="nw">melts the material.</span></h2><p>In the evacuated chamber, the e-beam source evaporates the coating material, which rises toward the optics in a broad plume.</p></article>'+
     '<article class="step"><h2><span class="nw">The optics</span> <span class="nw">move in a pattern.</span></h2><p>A planetary rotation carries the substrates in a precise pattern, so every part of every optic sees the same plume; we design the gear ratios for each job.</p></article>'+
     '<article class="step"><h2><span class="nw">A mask shapes</span> <span class="nw">the distribution.</span></h2><p>A stationary uniformity mask trims the flux where it would be thickest, which is how large optics are coated evenly from edge to edge.</p></article>'+
     '<article class="step"><h2><span class="nw">A crystal</span> <span class="nw">measures it.</span></h2><p>A four-position rotary crystal head monitors the film as it grows, mounted at the centre of the chamber or under the mask.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="systems" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Custom deposition systems</span><h2 class="d2 split"><span class="nw">Your coating goals,</span> <span class="nw">one system.</span></h2></div><p data-r>Precision e-beam coating systems laid out for defence, aerospace and scientific work, from small-scale R&amp;D to mid-volume production.</p></div>'+
   caps(SYS)+
  '</div></section>'+

  '<section class="sec light" id="coatings" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Coating services</span><h2 class="d2 split"><span class="nw">From 3 mm</span> <span class="nw">to 600 mm.</span></h2></div><p data-r>Custom precision optical coatings by electron-beam deposition, drawing on Dr. Oliver’s 30 years of coating process and design work, much of it at the University of Rochester.</p></div>'+
   caps(COAT)+chips("Specialising in",SPEC)+
  '</div></section>'+

  '<section class="sec dark" id="components" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Components</span><h2 class="d2 split"><span class="nw">Parts for</span> <span class="nw">your chamber.</span></h2></div><p data-r>Engineered from our own coating and system-building experience for durability, reliability and straightforward maintenance.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="workshops" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Workshops</span><h2 class="d2 split"><span class="nw">Learn coating</span> <span class="nw">from a coater.</span></h2></div><p data-r>Courses by Dr. James Oliver, who has taught optical coating design for over 20 years, including at the University of Rochester’s Institute of Optics. We can bring one in-house.</p></div>'+
   caps(WS)+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News and events</span><h2 class="d2 split"><span class="nw">Where to</span> <span class="nw">meet us.</span></h2></div><p data-r>Exhibitions, conferences and our own coating workshops, in the US and in Europe.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us your</span> <span class="nw">coating goals.</span></h2>'+
   '<p class="sub" data-r>For a full custom coating system, a component for your chamber, a coating run or an in-house workshop, get in touch.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Vacuum Innovations</span><br><span>90 Ossian St.</span><br><span>Dansville, NY 14437</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Systems, parts and coatings</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><span>Monday to Friday, 9 to 5</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>90 Ossian St.<br>Dansville, NY 14437</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/systems">Systems</a><br><a class="ul" href="#/coatings">Coatings</a><br><a class="ul" href="#/components">Parts</a><br><a class="ul" href="#/workshops">Workshops</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">We make</span>E-beam coating systems<br>Chamber components<br>Precision optical coatings</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">INNOVATIONS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Vacuum Innovations</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",systems:"systems",coatings:"coatings",components:"components",workshops:"workshops",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Vacuum Innovations — Optical coating systems, components and coatings, Dansville, New York",x:"Home"};
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
