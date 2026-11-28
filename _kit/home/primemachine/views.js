/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function caps(list){return '<div class="caps nwc tst">'+list.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function chips(kick,list){return '<div class="bk cnd"><span class="lab kick" data-r>'+esc(kick)+'</span><p class="cr" data-r>'+list.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* engines (primemachine.com > Industrial Engine Machining; Engine Block Repair) */
var EN=[
 ["Crankshafts","Repair and machining","Main bearing fits and throws machined on our five-axis mill/turn lathe, on an expedited schedule when it counts."],
 ["Blocks and heads","Block and head repair","Block and head repairs in the shop, and sleeve bores machined in the field at gas plants."],
 ["Rods and pistons","Measured and balanced","Measuring, balancing, metal spray, connecting rod and piston repairs."]];
var ENL=["Heavy diesel engines","Natural gas engines","Large reciprocating engines","Crankshafts","Engine blocks","Cylinder heads","Connecting rods","Pistons"];
/* fabrication (primemachine.com > Welding & Fabrication; HVOF Metal Spraying; Certificates) */
var FB=[
 ["Code welding","ASME and AWS","Certified welders to AWS D1.1 and D1.2 and ASME, with ASME U, S and R certificates."],
 ["12 tons","Large fabrication","A rotary positioner to 12 tons and 15 feet in diameter, manipulators 14 feet high, stress relief to 23 feet."],
 ["HVOF","Metal spraying","HVOF, twin-arc and thermal spray restore bearing and seal fits to size with dense, hard coatings."]];
var FBL=["Mild steel","Stainless steel","Cast iron","Bronze","Aluminum","Titanium","Monel","Inconel","Stellite"];
/* field service (primemachine.com > Field Machining; Millwrights; Laser Tracker Measurements; James Webb Telescope) */
var FS=[
 ["22 ft x 60 ft","Field machining","A portable lathe we designed and built turned screening drums 22 feet across, 60 feet long and 386,000 pounds."],
 ["Millwrights","On site","Laser alignments, dynamic balancing, grouting and foundations, by crews trained to MSHA, OSHA and UITC."],
 ["Laser tracker","Metrology","Tooling alignments for the A350, and the precision assembly of the James Webb telescope structure."]];
/* company (primemachine.com > About Us; Machine Shop Services; Certificates) */
var CO=[
 ["1979","A Utah corporation","Organized in 1979 with one mission: to keep the industrial world productive."],
 ["90,000 sq ft","575 West 800 South","Blocks from I-15, with a rail hub directly into our property for large equipment."],
 ["AS9100","Certified","AS9100 certified, ITAR registered, with ASME U, S and R stamps."]];
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1781" height="896" alt="A large four-throw engine crankshaft with polished main journals and crank pins, resting on two V-blocks" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Machine shop · fabrication<span class="nomob"> · Salt Lake City, Utah</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Bridge-sized work,</span> <span class="l">watchmaker tolerances.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Large multi-axis machining, engine rebuilding, code welding, HVOF metal spray and on-site field machining, from a 90,000 square foot shop in Salt Lake City.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/machining">Our machining '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Prime Machine</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Our mission:</span> <span class="nw">keep the industrial</span> <span class="nw">world productive.</span> <span class="nw">Crushers rebuilt,</span> <span class="nw">turbines repaired,</span> <span class="nw">engines machined.</span> <em><span class="nw">Manufacture,</span> <span class="nw">installation</span> <span class="nw">and maintenance.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">90,000</span><p class="k">square foot shop, with its own rail hub</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">23 ft</span><p class="k">of swing on our vertical boring mill</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1979</span><p class="k">in Salt Lake City since</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a worn shaft comes back</span><h2 class="d3"><span class="nw">Measured, machined,</span> <span class="nw">sprayed, aligned.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Measure</span><span>Machine</span><span>Spray</span><span>Align</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">The tracker</span> <span class="nw">measures it.</span></h2><p>A laser tracker captures the part in billions of points; PolyWorks and SolidWorks turn them into a model.</p></article>'+
     '<article class="step"><h2><span class="nw">The mill/turn</span> <span class="nw">machines it.</span></h2><p>Bearing fits and throws are machined on a five-axis mill/turn lathe, programmed in Mastercam, Unigraphics or ESPRIT.</p></article>'+
     '<article class="step"><h2><span class="nw">HVOF</span> <span class="nw">restores the fits.</span></h2><p>High-velocity oxygen fuel spray builds bearing and seal fits back to size with a dense, hard coating.</p></article>'+
     '<article class="step"><h2><span class="nw">Millwrights</span> <span class="nw">set it true.</span></h2><p>Our crews install it on site and align it with lasers, then balance what turns.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="machining" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Machining</span><h2 class="d2 split"><span class="nw">Large, complex,</span> <span class="nw">five-axis work.</span></h2></div><p data-r>Turning and milling of large components, from hydro turbine parts and blowout preventers to crankshafts.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="engines" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Engines</span><h2 class="d2 split"><span class="nw">Industrial engines,</span> <span class="nw">block to piston.</span></h2></div><p data-r>A specialised engine shop for large reciprocating engines, from the block to the pistons.</p></div>'+
   caps(EN)+chips("In our engine shop",ENL)+
  '</div></section>'+

  '<section class="sec dark" id="fabrication" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Fabrication</span><h2 class="d2 split"><span class="nw">Welded, sprayed</span> <span class="nw">and machined.</span></h2></div><p data-r>Large fabrication and large machining under one roof, from pressure vessels to the James Webb telescope test stand.</p></div>'+
   caps(FB)+chips("Metals we weld",FBL)+
  '</div></section>'+

  '<section class="sec light" id="onsite" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Field service</span><h2 class="d2 split"><span class="nw">Machined right</span> <span class="nw">where it stands.</span></h2></div><p data-r>Field machinists and millwrights who work at the plant, the mine and the end of the ice road.</p></div>'+
   caps(FS)+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Real solutions</span> <span class="nw">to real problems.</span></h2></div><p data-r>Skilled craftsmen and the right tools, combining high tech with large and heavy capability.</p></div>'+
   caps(CO)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us</span> <span class="nw">what needs fixing.</span></h2>'+
   '<p class="sub" data-r>Customer service is our number one goal. We want to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Prime Machine Inc.</span><br><span>575 West 800 South</span><br><span>Salt Lake City, UT 84101</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Quotes and service calls</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><span>Fax (801) 533-8606</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>575 West 800 South<br>Salt Lake City, UT 84101</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/machining">Machining</a><br><a class="ul" href="#/engines">Engines</a><br><a class="ul" href="#/fabrication">Fabrication</a><br><a class="ul" href="#/onsite">Field service</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Certificates</span>AS9100<br>ITAR registered<br>ASME U, S and R</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">PRIME</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Prime Machine Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",machining:"machining",engines:"engines",fabrication:"fabrication",onsite:"onsite",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Prime Machine Inc. — Large machining, engine rebuilding, fabrication and field service, Salt Lake City, Utah",x:"Home"};
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
