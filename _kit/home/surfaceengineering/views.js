/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function caps(list){return '<div class="caps nwc tst">'+list.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function chips(kick,list){return '<div class="bk cnd"><span class="lab kick" data-r>'+esc(kick)+'</span><p class="cr" data-r>'+list.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* product forms (surfaceengineering.com > Product Forms; Thermal Spray Consumables) */
var PF=[
 ["Rods","Bare rods","Cast, sintered or tube rods from .045 to 1/2 inch, for oxy-acetylene or TIG welding."],
 ["Electrodes","Coated electrodes","Welding electrodes from 3/32 to 1/2 inch, tube-cored or extruded over alloy rod."],
 ["Wires","Solid and cored wires","From .035 to 1/8 inch for MIG, TIG, submerged arc and open-arc welding, and for thermal spray."]];
var PFL=["Gas atomized powders","Water atomized powders","Clad powders","Spray dried","Crushed and sintered","HVOF carbides","Cermet blends","Hardfaced wear plate and pipe"];
/* processes (surfaceengineering.com > Processes; Wear Modes) */
var PR=[
 ["Welded overlay","Hardfacing","MIG and submerged arc, TIG and oxy-acetylene, laser and plasma transfer arc hardfacing."],
 ["Spray overlay","Thermal spray","HVOF, plasma, twin-wire arc and flame spray, and manual torch powder welding."],
 ["Furnace overlay","Infiltration","Furnace overlay processes, including infiltration."]];
var PRL=["Abrasion","Erosion","Adhesion","Surface fatigue","Corrosion","Galling","Cavitation","Impact"];
/* equipment (surfaceengineering.com > Equipment) */
var EQ=[
 ["SE PTA 350","PTA system","Stores 50 weld programs of voltage, amperage and powder feed, adjustable on the fly, and works with any maker's PTA torch."],
 ["SE-JET 5000","HP-HVOF spray","High-pressure oxy-kerosene HVOF: dense coatings over 72 HRC, up to 12 mm thick, at four times typical spray rates."],
 ["SE-TW 400","Twin-wire arc spray","High-velocity arc spray for solid and cored wires at lower voltage, for near porosity-free coatings."]];
/* company (surfaceengineering.com > About Us) */
var CO=[
 ["1996","Founded in July","To supply products and services for the wear problems industry faces worldwide."],
 ["Made in America","Manufacturer and distributor","Of nickel, cobalt, tungsten and iron based products for wear resistance."],
 ["Industries","Power to agriculture","Power generation, oil and natural gas, mining and exploration, agriculture and more."]];
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1104" height="1084" alt="A spool of layer-wound hardfacing wire on a black plastic spool, with a fan of cast cobalt and carbide tube TIG rods in front" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Wear resistance specialists<span class="nomob"> · St. Petersburg, Florida</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">An intelligent approach</span> <span class="l">to wear solutions.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Hardfacing wires and rods, plasma, laser-cladding and HVOF powders, and the spray and PTA systems to apply them, made in St. Petersburg, Florida since 1996.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/consumables">Our consumables '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Surface Engineering</span>'+
   '<h2 class="txt" id="mani"><span class="nw">For a partnership</span> <span class="nw">to be successful,</span> <span class="nw">it must be personal.</span> <em><span class="nw">We solve the wear</span> <span class="nw">that costs you production.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1996</span><p class="k">founded in St. Petersburg, Florida</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50+</span><p class="k">years of experience in wear resistance</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">65%</span><p class="k">fused tungsten carbide in Carboride deposits</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">What we do</span><h2 class="d3"><span class="nw">Identify, select,</span> <span class="nw">apply, validate.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Identify</span><span>Select</span><span>Apply</span><span>Validate</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Identify</span> <span class="nw">the wear.</span></h2><p>Abrasion, erosion, adhesion or surface fatigue: one wear mode usually does most of the damage.</p></article>'+
     '<article class="step"><h2><span class="nw">Select</span> <span class="nw">the material.</span></h2><p>The best alloy for the application and the process, customized where it needs to perform better.</p></article>'+
     '<article class="step"><h2><span class="nw">Apply</span> <span class="nw">the overlay.</span></h2><p>By thermal spray or hardfacing, with measurement and testing along the way.</p></article>'+
     '<article class="step"><h2><span class="nw">Validate</span> <span class="nw">the result.</span></h2><p>Customer satisfaction, monitoring and re-evaluation, so the next part lasts longer.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="consumables" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Consumables</span><h2 class="d2 split"><span class="nw">Nickel, cobalt</span> <span class="nw">and tungsten carbide.</span></h2></div><p data-r>A full spectrum of consumables designed to reduce or eliminate the production losses caused by wear.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="forms" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Product forms</span><h2 class="d2 split"><span class="nw">Rod, wire,</span> <span class="nw">electrode or powder.</span></h2></div><p data-r>Most of our alloys are available in wire form, and powders come in virtually every size range.</p></div>'+
   caps(PF)+chips("Powders and more",PFL)+
  '</div></section>'+

  '<section class="sec dark" id="processes" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Processes</span><h2 class="d2 split"><span class="nw">Welded, sprayed</span> <span class="nw">or furnaced on.</span></h2></div><p data-r>We match the material to the process, and the process to the wear.</p></div>'+
   caps(PR)+chips("Wear we solve",PRL)+
  '</div></section>'+

  '<section class="sec light" id="equipment" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Equipment</span><h2 class="d2 split"><span class="nw">Systems to</span> <span class="nw">put it down.</span></h2></div><p data-r>PTA, HVOF and arc spray systems, with the consulting to tune them.</p></div>'+
   caps(EQ)+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">New answers</span> <span class="nw">to old wear.</span></h2></div><p data-r>Our strong suit is developing cutting-edge technologies that solve wear problems.</p></div>'+
   caps(CO)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us</span> <span class="nw">how it wears.</span></h2>'+
   '<p class="sub" data-r>Understanding the wear mode leads to the right product. We tailor solutions to your application.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Surface Engineering Alloy Co.</span><br><span>2895 46th Avenue N.</span><br><span>St. Petersburg, FL 33714</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Quotes and wear questions</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><span>Fax (727) 528-7995</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>2895 46th Avenue N.<br>St. Petersburg, FL 33714</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/consumables">Consumables</a><br><a class="ul" href="#/forms">Product forms</a><br><a class="ul" href="#/processes">Processes</a><br><a class="ul" href="#/equipment">Equipment</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Alloys</span>KRYPTONITE<br>SPECIALLOY<br>PRIME · CARBORIDE<br>VELOCITY</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">SURFACE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Surface Engineering Alloy Co.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",consumables:"consumables",forms:"forms",processes:"processes",equipment:"equipment",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Surface Engineering — Hardfacing alloys, thermal spray powders and spray systems, St. Petersburg, Florida",x:"Home"};
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
