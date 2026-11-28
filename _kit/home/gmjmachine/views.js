/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function caps(list){return '<div class="caps nwc tst">'+list.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function chips(kick,list){return '<div class="bk cnd"><span class="lab kick" data-r>'+esc(kick)+'</span><p class="cr" data-r>'+list.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* industries (gmjmachine.com > Machine List; Who We Are) */
var IN=[
 ["Aerospace and defense","Weapons systems and ground support","Hundreds of part numbers and assemblies for aerospace weapons systems and ground support."],
 ["General aviation","Engine components","Parts such as the Continental Motors IO240 crankcase, for general aviation."],
 ["Archery, oil and gas","Beyond aviation","Archery components machined, hydro-graphic finished and painted, and parts for oil and gas."]];
var INL=["Department of Defense","Lockheed Martin","Airbus","VT Aerospace","Continental Motors","Thermo Fisher Scientific","Hartzell Engine Technologies","Herndon Aerospace"];
/* quality (gmjmachine.com > Quality) */
var QA=[
 ["AS9100","Compliant","An AS9100 quality management system, and a quality control system certified to MIL-I-45208 and MIL-STD-45662."],
 ["100%","Quality rating","A 100% quality rating with the Department of Defense and Lockheed Martin."],
 ["Bar codes","Tracked and fixtured","CNC machines and CAD/CAM with modular fixturing and bar-code tracking on the shop floor."]];
/* services (gmjmachine.com > Home, Our Services) */
var SV=[
 ["Part marking","Identified","Parts marked to drawing before they leave the shop."],
 ["Mil-spec packaging","Packed to spec","Military packaging for DoD deliveries, and on-time shipping for commercial customers."],
 ["Outside processes","Heat treat, plating, paint","Corrosion-resistant, long-wear finishes through OEM-approved suppliers."]];
var SVL=["CNC milling","CNC turning","Assemblies","Turn-key parts","CMM inspection","Mil-spec packaging","Part marking","Engineering assistance"];
/* company (gmjmachine.com > Who We Are) */
var CO=[
 ["1981","One machine","GMJ started with one machine and a goal: the highest quality parts and assemblies."],
 ["4,000+","Government contracts","Fulfilled, for hundreds of different part numbers and assemblies."],
 ["8T119","Our CAGE code","ITAR and JCP registered, DFARS compliant, with engineering assistance and design consultation."]];
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1500" height="1115" alt="Airframe parts machined by GMJ: a yellow-primed bracket with two oval lightening windows, a primed lug plate with a bushed eye, a small link and an aluminium fitting with bronze bushings" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Aerospace machining<span class="nomob"> · Wilmer, Alabama</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Precision manufacturing</span> <span class="l">since 1981.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Close-tolerance machined components and assemblies for aerospace, defense, technology and energy, from airframe parts to engine crankcases.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/capabilities">Our capabilities '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>GMJ Machine Company</span>'+
   '<h2 class="txt" id="mani"><span class="nw">More than 4,000</span> <span class="nw">government contracts,</span> <span class="nw">hundreds of part numbers,</span> <span class="nw">one standard.</span> <em><span class="nw">Exceeding expectations.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">4,000+</span><p class="k">government contracts fulfilled</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100%</span><p class="k">quality rating with the DoD and Lockheed Martin</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1981</span><p class="k">the year we started, with one machine</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a part is made here</span><h2 class="d3"><span class="nw">Programmed, machined,</span> <span class="nw">inspected, packed.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Program</span><span>Machine</span><span>Inspect</span><span>Pack</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">CAD/CAM</span> <span class="nw">programs it.</span></h2><p>Mastercam and SolidWorks turn the drawing into the program and the fixture.</p></article>'+
     '<article class="step"><h2><span class="nw">The CNC</span> <span class="nw">cuts it.</span></h2><p>Milling and turning centres, with modular fixturing and bar-code tracking.</p></article>'+
     '<article class="step"><h2><span class="nw">The CMM</span> <span class="nw">checks it.</span></h2><p>Our inspection department measures it against the drawing under an AS9100 system.</p></article>'+
     '<article class="step"><h2><span class="nw">Marked</span> <span class="nw">and packed.</span></h2><p>Part marking and mil-spec packaging, delivered on time.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="capabilities" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Capabilities</span><h2 class="d2 split"><span class="nw">Machined parts</span> <span class="nw">and assemblies.</span></h2></div><p data-r>The equipment and experience to produce high-quality machined components and assemblies.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="industries" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Industries</span><h2 class="d2 split"><span class="nw">Military and</span> <span class="nw">civil customers.</span></h2></div><p data-r>They rely on GMJ for quality parts and on-time deliveries.</p></div>'+
   caps(IN)+chips("We make parts for",INL)+
  '</div></section>'+

  '<section class="sec dark" id="quality" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality</span><h2 class="d2 split"><span class="nw">Quality you</span> <span class="nw">can measure.</span></h2></div><p data-r>Total quality and customer satisfaction make long-term relationships.</p></div>'+
   caps(QA)+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split"><span class="nw">Finished, marked</span> <span class="nw">and packed.</span></h2></div><p data-r>From the first cut to the box it ships in, including outside heat treat, plating and painting.</p></div>'+
   caps(SV)+chips("Our services",SVL)+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">It started with</span> <span class="nw">one machine.</span></h2></div><p data-r>One of the premier manufacturing shops in the southeast.</p></div>'+
   caps(CO)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Send us</span> <span class="nw">the drawing.</span></h2>'+
   '<p class="sub" data-r>From aerospace and general aviation to custom manufacturing and machining.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Joel '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>GMJ Machine Company</span><br><span>251 State Line Road</span><br><span>Wilmer, AL 36587</span></p></div>'+
    '<div><span class="lab" data-r>President</span><p data-r><span>Joel Parden</span><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><span>Fax (251) 649-8289</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>251 State Line Road<br>Wilmer, AL 36587</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/capabilities">Capabilities</a><br><a class="ul" href="#/industries">Industries</a><br><a class="ul" href="#/quality">Quality</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Registered</span>CAGE 8T119<br>ITAR · JCP<br>AS9100 compliant</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">GMJ</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 GMJ Machine Company, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",capabilities:"capabilities",industries:"industries",quality:"quality",services:"services",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"GMJ Machine Company — Precision aerospace machining since 1981, Wilmer, Alabama",x:"Home"};
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
