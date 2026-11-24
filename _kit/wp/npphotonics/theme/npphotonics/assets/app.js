/* NP Photonics theme: restore animation hooks that WordPress blocks don't store */
(function(){function q(s){return Array.prototype.slice.call(document.querySelectorAll(s))}
q("#hero,.ftr").forEach(function(e){e.setAttribute("data-field","")});
q("#view section.hero,#view section.mani,#view section.story,#view section.dark2,#view section.dark,#view .ftr").forEach(function(e){e.setAttribute("data-theme","dark")});
q("#view section.light").forEach(function(e){e.setAttribute("data-theme","light")});
q("#hero .eyebrow,#hero .hero-foot>.s,#hero .hero-foot>.act").forEach(function(e){e.setAttribute("data-r","")});
var t=document.getElementById("pageTitle");if(t)t.setAttribute("tabindex","-1");
var m=document.getElementById("main");if(m)m.setAttribute("tabindex","-1");
q("#view .wp-block-group").forEach(function(e){e.classList.remove("is-layout-flow","wp-block-group-is-layout-flow")});})();

gsap.set(".xc",{y:0,yPercent:101});

(function(){
"use strict";
function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
var MO=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function fd(iso){var d=iso.split("-");return d[2]?MO[+d[1]-1]+" "+(+d[2])+", "+d[0]:MO[+d[1]-1]+" "+d[0]}
var ARR='<svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';
var ARRX='<svg class="arr" viewBox="0 0 18 12" aria-hidden="true"><path d="M0 6h16M11 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';


/*<R:site>*/var SITE="NP Photonics";
var PK="npp";/*</R:site>*/

/* ================= CONTENT (from the dossier; nothing invented) ================= */
/*<R:content>*/var FONTS=['300 1em "Sora"','400 1em "Sora"','500 1em "Sora"','400 1em "Inter"','500 1em "Inter"'];
var MAIL="mailto:info@npphotonics.com";
var PW26="https://www.npphotonics.com/_files/ugd/210cd7_d510872e59a748aaa36d16c877326b02.pdf";
/* Products, from npphotonics.com (home page product panels). [family, band, name, line, detail, dim, tag, link, linklabel] */
var PROD=[
 ["ROCK","1 µm · 1.5 µm","Single-frequency fiber lasers","25 mW to 30 W output","λc 1030–1075 nm and 1530–1565 nm. Narrow-linewidth, low phase-noise lasers in OEM and bench-top formats, designed for operation in industrial environments.",0,"OEM &amp; bench-top","",""],
 ["Amplifiers","1 µm · 1.5 µm","Short-length fiber amplifiers","20 dB gain in 10 cm","Up to 100 W average output power and ≥500 kW peak power, from centimetres of NP’s high-gain phosphate fiber.",0,"Gain blocks","",""],
 ["METEOR","1 µm · 1.5 µm","High-energy fiber lasers","100 µJ to 1.3 mJ per pulse","λc 1018–1080 nm and 1528–1575 nm. Up to 25 W output power, M² ≤ 1.5 (≤ 1.3 typical).",0,"Pulsed","",""],
 ["Multi-laser","1 µm · 1.5 µm","Multi-laser systems","Up to five line-cards","λc 1030–1075 nm and 1530–1565 nm, 25 mW to 125 mW output powers, with linewidths of 1 kHz and &lt;5 kHz.",0,"Systems","",""],
 ["Mid-IR","Visible to mid-IR","MIR transport fiber","Tellurite glass, 2 to 5 µm","Low-loss (&lt;0.2 dB/m) tellurite fibers and cables with AR coating options and a high damage threshold, unaffected by atmospheric water.",0,"Fibers","",""]];
/* Capabilities, as npphotonics.com and the January 2026 releases state them. */
var EVID=[
 ["ISO 9001:2015 and ITAR","An ISO 9001:2015 certified, ITAR-compliant manufacturer, able to develop and build customized laser and amplifier solutions"],
 ["Glass made in-house","Proprietary phosphate, germanate and tellurite glasses, drawn into our own fibers in Tucson, Arizona"],
 ["Space-qualified","Our fiber lasers have passed rigorous space-qualification tests with NASA, and one has flown on a mission to the International Space Station"],
 ["Patents filed December 2025","Two new U.S. applications: MWIR fiber couplers and combiners, and low-OH holmium-doped germanate glasses for 2 µm lasers"]];
/* npphotonics.com (Leadership). Text-only masthead; summaries state only published facts. */
var TEAM=[
 {g:"Leadership",name:"Naser Partovi",title:"Chief Executive Officer",sum:"Leads NP Photonics, the Tucson-based maker of specialty fiber lasers, fiber amplifiers and transport fibers."},
 {g:"Leadership",name:"Arturo Chavez-Pirson",title:"Chief Technology Officer",sum:"Company contact for the December 2025 patent filings and the Photonics West 2026 technical papers."},
 {g:"Leadership",name:"Jie Zong",title:"VP of Engineering",sum:"Heads engineering for the company’s fiber laser and amplifier products."},
 {g:"Board of Directors",name:"Nasser Peyghambarian",title:"Chairman of the Board",sum:"Led NP Photonics as chief executive from its founding in 1998; now Chairman of the Board."}];
var NEWS=[
 ["12 January 2026","NP Photonics showcases OEM‑proven fiber lasers and amplifiers at SPIE Photonics West 2026","Press release",PW26],
 ["12 January 2026","NP Photonics showcases advances in high-power fiber lasers and amplifiers, with three technical papers at Photonics West 2026","Press release","https://www.npphotonics.com/_files/ugd/210cd7_080a352d2d6447cea2d1f0b756ffc920.pdf"],
 ["12 January 2026","NP Photonics files U.S. patents on advanced glass and fiber materials for next-generation fiber lasers and amplifiers","Press release","https://www.npphotonics.com/_files/ugd/210cd7_1d0427f1cb514b639f367941b86e0b10.pdf"],
 ["24 September 2024","NP Photonics and the University of Arizona demonstrate a compact and portable optical clock","Optica","https://www.optica.org/about/newsroom/news_releases/2024/september/researchers_simplify_design_of_optical_atomic_clocks_without_compromising_performance/"],
 ["24 January 2024","NP Photonics highlights its OEM‑winning fiber lasers and amplifiers at SPIE Photonics West 2024","Business Wire","https://www.businesswire.com/news/home/20240124606461/en/NP-Photonics-Highlights-its-OEM-Winning-Fiber-Lasers-and-Amplifiers-at-SPIE-PHOTONICS-WEST-2024"]];
var SHEETS=[];/*</R:content>*/

/* ================= VIEW HELPERS ================= */
function head(o){
  return '<section class="ph-head" data-field data-theme="dark"><span class="lab eyebrow">'+o.k+'</span>'+
  '<h1 class="d1" id="pageTitle" tabindex="-1">'+o.h+'</h1>'+
  (o.p?'<p class="lede intro" data-r>'+o.p+'</p>':'')+'</section>';
}
function newsRows(list){return '<ul class="rows">'+list.map(function(n){return '<li><a class="row-a" href="'+n.u+'" target="_blank" rel="noopener"><span class="nm"><time class="lab" datetime="'+n.d+'">'+fd(n.d)+'</time><span class="lab">'+esc(n.s)+'</span></span><h3>'+esc(n.t)+'</h3><span class="c4">'+ARRX+'</span></a></li>'}).join("")+'</ul>'}
function pBy(s){for(var i=0;i<SHEETS.length;i++)if(SHEETS[i].slug===s)return i;return -1}
function mhRow(p){var i='<span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum||"")+'</span>';return '<li><a class="mh-row" href="#/team/'+p.slug+'" data-person aria-label="'+esc(p.name)+', '+esc(p.title)+'. Open profile">'+i+'<span class="mh-arrow" aria-hidden="true">→</span></a></li>'}
function mhList(ps){return '<div class="mh"><div class="mh-group"><ul class="mh-list">'+ps.map(mhRow).join("")+'</ul></div></div>'}

/*<R:views>*//* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prodRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+c[0]+'</b><i>'+c[1]+'</i></span><div class="pgm"><h3>'+c[2]+'</h3><span class="loc">'+c[3]+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk av">'+c[6]+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+p.sum+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
/* applications: the OEM programs named in the January 2026 release, and the mid-IR work */
function caps(){var C=[
  ["Fiber-optic sensing","The ROCK fiber laser is core technology for fiber-optic sensing systems, enabling 24/7 distributed monitoring of oil and gas pipelines.",'<path d="M4 34c8 0 8-10 16-10s8 10 16 10 8-10 16-10"/><circle class="f" cx="20" cy="24" r="2.6"/><path class="a" d="M4 44h48"/>'],
  ["Quantum computing","A preferred source for qubit excitation, with ultra-stable, frequency-locked operation across a range of wavelengths.",'<circle cx="28" cy="28" r="6"/><ellipse cx="28" cy="28" rx="22" ry="9"/><ellipse class="a" cx="28" cy="28" rx="22" ry="9" transform="rotate(60 28 28)"/>'],
  ["Precision metrology","The POWER ROCK high-power single-frequency laser serves precision metrology, nanometer-scale positioning and advanced semiconductor manufacturing.",'<path d="M6 40h44M10 40v-6M18 40v-4M26 40v-6M34 40v-4M42 40v-6"/><path class="a" d="M6 22h44"/><path d="M44 17l6 5-6 5"/>'],
  ["Injection seeding","The ROCK injection seeder is an industry-standard source for high-power Nd:YAG lasers, used in holography, narrow-linewidth pumping and Doppler lidar.",'<rect x="6" y="20" width="14" height="16"/><rect x="28" y="16" width="22" height="24"/><path class="a" d="M20 28h8"/>'],
  ["Doppler wind lidar","The METEOR pulsed laser enables coherent Doppler sensing, deployed at commercial airports worldwide for wind shear detection.",'<path d="M8 44l12-30"/><path class="a" d="M20 14l30-6"/><path d="M28 28c6 0 6 4 12 4s6-4 12-4M24 36c6 0 6 4 12 4s6-4 12-4"/>'],
  ["Mid-infrared","Tellurite fiber technology for broadband supercontinuum fiber lasers and next-generation IR components for science, defense and industry.",'<path d="M6 40c6-20 12-20 18 0s12 20 18 0"/><path class="a" d="M6 16h44"/><circle class="f" cx="48" cy="16" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Capabilities</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From npphotonics.com (Core Technologies) and NP Photonics’ January 2026 releases. U.S. Patent Application Nos. 19/411,816 and 19/412,441.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Fiber lasers · amplifiers · fibers<span class="nomob"> · since 1998</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Single-frequency</span><span class="l">light, <em>from our</em></span><span class="l"><em>own glass.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>NP Photonics designs and manufactures specialty fiber lasers, fiber amplifiers and transport fibers for the near- and mid-infrared, built on proprietary phosphate, germanate and tellurite glass in Tucson, Arizona.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/products">Our products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>American owned and operated</span>'+
   '<h2 class="txt" id="mani">For over 25 years we have made our own glass, drawn our own fiber and built lasers on it. <em>Let us be your OEM, R&amp;D or custom laser partner.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1,400+</span><p class="k">NP Photonics lasers installed worldwide</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100×</span><p class="k">The rare-earth dopant concentration of silica, in our phosphate glass, with no loss of optical gain</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1998</span><p class="k">Founded in Tucson, Arizona</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Gain in centimetres, <em>not metres.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Silica</span><span>Phosphate</span><span>Cavity</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Silica runs out of room.</h2><p>Most active fibers use silica glass, but its rare-earth dopants (erbium, ytterbium, thulium, holmium) cluster at high concentrations, which degrades gain.</p></article>'+
     '<article class="step"><h2>Our phosphate glass doesn’t.</h2><p>Our phosphate fibers hold dopant concentrations up to 100 times those of silica with no loss of optical gain, typically 5 dB of gain per centimetre.</p></article>'+
     '<article class="step"><h2>A laser under 2 cm long.</h2><p>A fiber cavity shorter than 2 cm gives single-frequency lasers with linewidths below 500 Hz and low phase noise, in a compact, robust package.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Innovation in <em>specialty glass.</em></h2></div><p data-r>Proprietary phosphate, germanate and tellurite glasses are the key enabler of our fiber lasers, amplifiers and ASE sources, and they open parts of the spectrum where silica is opaque: our tellurite fibers carry mid-infrared light from 2 to 5 µm.</p></div>'+
   '<div class="tri">'+
    '<div class="cap"><span class="lab" data-r>Phosphate</span><h3 data-r>High gain per unit length</h3><p data-r>Highly doped phosphate fibers give large gain in a short length, enabling high-power single-frequency lasers and short, low-latency amplifiers.</p></div>'+
    '<div class="cap"><span class="lab" data-r>Germanate</span><h3 data-r>Efficient 2 µm lasers</h3><p data-r>Low-OH holmium-doped germanate fiber gave 15.6 W at 2050 nm from a 10 cm fiber laser, at a record 80% optical-to-optical efficiency.</p></div>'+
    '<div class="cap"><span class="lab" data-r>Tellurite</span><h3 data-r>Mid-IR transport</h3><p data-r>Low-loss (&lt;0.2 dB/m) fibers with substantially no hydroxyl, to carry and distribute high-power mid-IR light from parametric, quantum cascade and supercontinuum sources.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Lasers, amplifiers <em>and fiber.</em></h2></div><p data-r>OEM-ready modules and bench-top systems across the 1 µm and 1.5 µm bands, from milliwatt single-frequency sources to millijoule pulses, and transport fiber into the mid-infrared.</p></div>'+
   prodRows(PROD)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">Proven in the lab, <em>deployed in the field.</em></h2></div><p data-r>NP Photonics’ lasers power high-volume OEM programs in sensing, defense, metrology and research, in mission-critical industrial and scientific systems around the world.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Glass scientists and <em>laser engineers.</em></h2></div><p data-r>Our management team brings many decades of leadership and industry experience, and shares one goal: supplying customers with advanced, high-performance optical products and subsystems.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>NP Photonics.</em></h2></div><p data-r>Releases on our products, patents and research, including the three technical papers we presented at SPIE Photonics West 2026.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>OEM, R&amp;D and custom</span>'+
   '<h2 class="big split">Talk to <em>NP Photonics.</em></h2>'+
   '<p class="sub" data-r>Tell us about your application: wavelength, power, linewidth and package. We develop and build customized laser and amplifier solutions, and we are open to patent licensing discussions.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/products">See the products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Tucson, Arizona</span><p data-r>9030 S Rita Ranch Rd #120<br>Tucson, AZ 85747</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@npphotonics.com</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+15207997400">520-799-7400</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>9030 S Rita Ranch Rd #120<br>Tucson, AZ 85747</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@npphotonics.com</a><br><a class="ul" href="tel:+15207997400">520-799-7400</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Quality</span>ISO 9001:2015 · ITAR compliant</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Sora\',sans-serif;font-weight:400;font-size:74px">NP PHOTONICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 NP Photonics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",products:"products",applications:"applications",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"NP Photonics — specialty fiber lasers, amplifiers and fibers",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){secGo(r.sec,true);try{history.replaceState(null,"","#/")}catch(x){}},300)})()})();/*</R:views>*/

/* ================= ENV ================= */
var RM=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
gsap.registerPlugin(ScrollTrigger,SplitText,CustomEase);
CustomEase.create("flow","0.65,0.05,0.2,1");
CustomEase.create("silk","0.22,1,0.36,1");
var lenis=null;
if(!RM&&window.Lenis){lenis=new Lenis({lerp:0.09,smoothWheel:true,wheelMultiplier:1});lenis.on("scroll",ScrollTrigger.update);gsap.ticker.add(function(t){lenis.raf(t*1000)});gsap.ticker.lagSmoothing(120,33)}
var MOBILE=function(){return innerWidth<861};
function unmask(s){if(!s)return;(s.masks||[]).forEach(function(m){m.style.overflow="visible";m.style.clipPath="none"})}


/*<R:field>*//* ================= HERO FIELD: a crafted render of NP Photonics' own product (HOME_BRIEF update 2c): a coil of their
   specialty glass fiber, wound as a loose bundle ring, one turn leaving the coil to a cleaved tip that emits the laser as a
   calm four-point star in the logo's yellow (the logo itself is a fiber streak ending in a star). Rendered offline by
   render.py (additive light, real alpha) to hero.webp; here it breathes in a very slow drift and the star pulses softly.
   It moves on its own, so no pointer response (CZ). On phones it sits in the top band and fades into the ink above the
   text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0c1430",AR=1;
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;G=geo();if(!running)frame(true)};img.src=(window.NPP_ASSETS||"")+"hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.08):h;
    /* the coil fills its render: whole, in the open area right of the text (DO/DP) */
    var iw=mob?Math.min(w*.92,(U-110)*.95*AR):Math.min(cw*.54,h*.7*AR,980),ih=iw/AR;
    var kx=mob?w*.5:side+cw*.71,ky=mob?96+ih*.5:Math.max(h*.53,120+ih*.5);
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow breath: grow ~3% and drift up a touch over ~40s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      /* a low blue glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the baked
         render can read as a pasted box (DJ) */
      var ggx=G.mob?w*.5:G.side+G.cw*.71,ggy=G.mob?G.bh*.42:h*.46,ggr=Math.max(w,h)*.78;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(34,58,140,"+(.5*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(20,34,84,"+(.28*e).toFixed(3)+")");ag.addColorStop(1,"rgba(12,20,48,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a faint pale sheen breathing across the enzyme */
      var pu=.5+.5*Math.sin(t*Math.PI*2/7),px=x+dw*.832,py=y+dh*.299,pr=dw*.07;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(255,246,200,"+(.04+.08*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(255,246,200,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.66,0);lv.addColorStop(0,"rgba(8,14,38,.95)");lv.addColorStop(.62,"rgba(8,14,38,.6)");lv.addColorStop(1,"rgba(8,14,38,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.5);[[0,.55],[.2,.36],[.4,.2],[.6,.09],[.8,.025],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(8,14,38,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.5);
        var bv=c.createLinearGradient(0,h*.5,0,h);[[0,0],[.2,.025],[.4,.1],[.6,.24],[.8,.48],[1,.85]].forEach(function(q){bv.addColorStop(q[0],"rgba(12,20,48,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.4);[[0,.5],[.25,.22],[.5,.06],[.75,.035],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(8,14,38,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.4);
        var mv=c.createLinearGradient(0,G.bh*.74,0,G.bh);[[0,0],[.25,.06],[.5,.25],[.75,.6],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(12,20,48,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh*.74,w,G.bh*.26+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();/*</R:field>*/

var fieldIO=new IntersectionObserver(function(){chkField()},{threshold:[0,.01]});
function chkField(){var any=$$("[data-field]").some(function(el){var r=el.getBoundingClientRect();return r.bottom>0&&r.top<innerHeight});any?field.start():field.stop()}
function observeField(){fieldIO.disconnect();$$("[data-field]").forEach(function(el){fieldIO.observe(el)})}
document.addEventListener("visibilitychange",function(){if(document.hidden)field.stop();else chkField()});
function fieldScroll(){var y=window.scrollY,H=innerHeight;var p=Math.max(0,Math.min(1,y/H));field.setDim((curKey==="home"?1:.78)*(1-p*.5));field.setScroll(p);var fs=(curKey!=="home"&&!MOBILE())?"translateY(-17vh)":"";if(FCV.style.transform!==fs)FCV.style.transform=fs}
var FCV=$("#field");

/* ================= HOME SCROLL ================= */
function lerp(a,b,t){return a+(b-a)*t}
function seg(p,a,b){var x=(p-a)/(b-a);x=x<0?0:x>1?1:x;return x*x*(3-2*x)}

/* ================= HOME SCROLL ================= */
function lerp(a,b,t){return a+(b-a)*t}
function seg(p,a,b){var x=(p-a)/(b-a);x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
/*<R:story>*//* The story scene (DB): NP Photonics' own core technology (npphotonics.com, Core Technologies: silica dopants cluster at
   high concentration; phosphate glass takes up to 100x the dopant with no loss of gain, typically 5 dB/cm; a <2 cm fiber
   cavity gives single-frequency lasers with linewidths below 500 Hz), drawn as ONE continuous fine-line scene: a length
   of optical fiber in side section (cladding and core) across the frame. Frame 0 is already complete.
   Step 1 (silica): sparse rare-earth ions in the core, some clustered (ringed).
   Step 2 (phosphate): the long silica fiber gives way to a 2 cm phosphate segment, densely doped, its core brightening
   along its length (gain), with a centimetre ruler beneath.
   Step 3 (cavity): reflectors at both ends form the cavity; pump light enters, a single-frequency beam leaves (logo
   yellow), and its spectrum below shows one narrow line. Everything is driven by the scrubbed progress. */
var SCW=660,SCH=540;
var FY=250,CL=34,CO=10,XA=30,XB=230,XC=430,XD=630;
function fpiece(a,b){return ['M'+a+' '+(FY-CL)+'H'+b,'M'+a+' '+(FY+CL)+'H'+b,'M'+a+' '+(FY-CO)+'H'+b,'M'+a+' '+(FY+CO)+'H'+b]}
var SIL=[[60,0],[104,1],[109,0],[160,-2],[205,2],[252,-3],[258,1],[263,-2],[318,2],[372,-1],[420,2],[468,-2],[473,2],[530,0],[585,-2],[590,2]];
var CLU=[[106,250,11],[258,249,13],[471,250,11],[588,250,11]];
var DEN=[];(function(){var r=7;function rnd(){r=(r*9301+49297)%233280;return r/233280}for(var i=0;i<78;i++)DEN.push([234+192*(i/77)+(rnd()-.5)*3,FY+(rnd()-.5)*15])})();
function storyScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'180 176 460 370':'0 176 660 370')+'" aria-hidden="true">';
  g+='<defs><linearGradient id="gGain" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#3fb2e8" stop-opacity="0"/><stop offset=".6" stop-color="#3fb2e8" stop-opacity=".35"/><stop offset="1" stop-color="#bfe9ff" stop-opacity=".85"/></linearGradient>'+
     '<filter id="fGlow" x="-20%" y="-300%" width="140%" height="700%"><feGaussianBlur stdDeviation="3"/></filter></defs>';
  g+='<g id="scL">';fpiece(XA,XB).forEach(function(d,k){g+='<path class="'+(k<2?'wl':'wo')+' sD" d="'+d+'"/>'});g+='</g>';
  g+='<g id="scR">';fpiece(XC,XD).forEach(function(d,k){g+='<path class="'+(k<2?'wl':'wo')+' sD" d="'+d+'"/>'});g+='</g>';
  g+='<g id="scM">';fpiece(XB,XC).forEach(function(d,k){g+='<path class="'+(k<2?'wl':'wo')+' sD" d="'+d+'"/>'});g+='</g>';
  /* gain: the core brightens along the phosphate segment */
  g+='<rect id="gain" x="'+XB+'" y="'+(FY-CO)+'" width="'+(XC-XB)+'" height="'+(2*CO)+'" fill="url(#gGain)"/>';
  /* silica ions, and the clusters ringed */
  g+='<g id="scSil">';SIL.forEach(function(s){g+='<circle class="io" r="3" cx="'+s[0]+'" cy="'+(FY+s[1])+'"/>'});g+='</g>';
  g+='<g id="scClu">';CLU.forEach(function(c){g+='<circle class="cl" r="'+c[2]+'" cx="'+c[0]+'" cy="'+c[1]+'"/>'});g+='</g>';
  /* dense phosphate ions */
  g+='<g id="scDen">';DEN.forEach(function(d){g+='<circle class="dn" r="2" cx="'+d[0].toFixed(1)+'" cy="'+d[1].toFixed(1)+'"/>'});g+='</g>';
  /* the cavity reflectors at both ends of the segment */
  g+='<g id="scGr">';for(i=0;i<6;i++){g+='<path class="gr" d="M'+(236+i*4)+' '+(FY-CO+1)+'V'+(FY+CO-1)+'"/><path class="gr" d="M'+(404+i*4)+' '+(FY-CO+1)+'V'+(FY+CO-1)+'"/>'}g+='</g>';
  /* the centimetre ruler */
  g+='<g id="scRul"><path class="ru" d="M'+XB+' 300H'+XC+'M'+XB+' 294V306M330 296V304M'+XC+' 294V306"/>'+
     '<text class="t" x="'+XB+'" y="'+(mob?334:326)+'" text-anchor="middle">0</text><text class="t" x="330" y="'+(mob?334:326)+'" text-anchor="middle">1</text><text class="t" x="'+XC+'" y="'+(mob?334:326)+'" text-anchor="middle">2 CM</text></g>';
  /* pump in, beam out */
  g+='<path id="pump" class="pm" d="M70 '+FY+'H226"/>';
  g+='<g id="beam"><path class="bmG" d="M434 '+FY+'H636" filter="url(#fGlow)"/><path class="bm" d="M434 '+FY+'H636"/></g>';
  /* the output spectrum: one narrow line */
  var pk='M470 460';for(var x=472;x<=630;x+=2){var dx=(x-550)/3.2;pk+='L'+x+' '+(460-96/(1+dx*dx)).toFixed(1)}
  g+='<g id="spec"><path class="ax" d="M470 460H630"/><path class="pk" d="'+pk+'"/></g>';
  /* labels, each clear of every stroke (DR) */
  g+='<g id="lSil"><text class="t" x="'+(mob?190:XA)+'" y="202">SILICA FIBER</text></g>';
  g+='<g id="lClu"><text class="t q" x="'+(mob?190:XA)+'" y="'+(mob?316:306)+'">'+(mob?'CLUSTERED':'CLUSTERED IONS')+'</text></g>';
  g+='<g id="lPho"><text class="t" x="330" y="202" text-anchor="middle">'+(mob?'PHOSPHATE':'PHOSPHATE FIBER · 5 dB/CM')+'</text></g>';
  g+='<g id="lDbr"><text class="t" x="330" y="202" text-anchor="middle">'+(mob?'CAVITY &lt; 2 CM':'FIBER CAVITY &lt; 2 CM')+'</text></g>';
  g+='<g id="lPump">'+(mob?'':'<text class="t" x="70" y="232">PUMP</text>')+'</g>';
  g+='<g id="lOut"><text class="t" x="630" y="'+(mob?226:232)+'" text-anchor="end">OUTPUT</text></g>';
  g+='<g id="lHz"><text class="t a2" x="'+(mob?532:536)+'" y="384" text-anchor="end">&lt; 500 Hz</text><text class="t q" x="'+(mob?532:536)+'" y="'+(mob?410:402)+'" text-anchor="end">LINEWIDTH</text></g>';
  var ly=SCH-6,lx=mob?190:XA;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SILICA: IONS CLUSTER':'IN SILICA, RARE-EARTH DOPANTS CLUSTER')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PHOSPHATE: 100× DOPANT':'PHOSPHATE GLASS: UP TO 100× THE DOPANT')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ONE NARROW LINE OUT':'A SINGLE-FREQUENCY LASER UNDER 2 CM')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),gr:dl("#scGr .gr"),pump:dl("#pump"),beam:dl("#beam path"),spec:dl("#spec path"),
    L:$("#scL",svg),R:$("#scR",svg),gain:$("#gain",svg),sil:$("#scSil",svg),clu:$("#scClu",svg),den:$$("#scDen .dn",svg),rul:$("#scRul",svg),
    lSil:$("#lSil",svg),lClu:$("#lClu",svg),lPho:$("#lPho",svg),lDbr:$("#lDbr",svg),lPump:$("#lPump",svg),lOut:$("#lOut",svg),lHz:$("#lHz",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(2)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s2=seg(p,.4,.6),out=seg(p,.36,.48);
    /* 1. silica: sparse ions, the clusters ringed */
    op(E.L,1-out);op(E.R,1-out);
    op(E.sil,b*(1-seg(p,.34,.44)));op(E.clu,b*seg(p,.06,.16)*(1-seg(p,.34,.42)));
    op(E.lSil,b*(1-seg(p,.32,.4)));op(E.lClu,b*seg(p,.08,.18)*(1-seg(p,.32,.4)));
    /* 2. phosphate: dense ions fill the 2 cm segment, gain brightens along it */
    E.den.forEach(function(el,i){op(el,b*seg(p,.4+i*.0018,.48+i*.0018))});
    op(E.gain,b*s2);op(E.rul,b*seg(p,.46,.56));
    op(E.lPho,b*seg(p,.44,.52)*(1-seg(p,.64,.7)));
    /* 3. cavity: reflectors, pump in, single-frequency beam out, one narrow spectral line */
    var gv=seg(p,.68,.76);E.gr.forEach(function(a){a[0].style.opacity=gv.toFixed(3)});draw(E.gr,gv);
    draw(E.pump,seg(p,.72,.8));draw(E.beam,seg(p,.78,.88));draw(E.spec,seg(p,.82,.94));
    op(E.lDbr,b*seg(p,.72,.8));op(E.lPump,b*seg(p,.74,.8));op(E.lOut,b*seg(p,.84,.9));op(E.lHz,b*seg(p,.9,.96));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}/*</R:story>*/

function homeScroll(view){
  var m=$("#mani",view);
  if(m&&!RM){var s=SplitText.create(m,{type:"lines,words",mask:"lines",linesClass:"ln",wordsClass:"w"});gsap.from(m,{opacity:0,duration:.7,ease:"power1.out",scrollTrigger:{trigger:m,start:"top 90%"}});gsap.from(s.lines,{yPercent:100,opacity:0,duration:1.15,ease:"silk",stagger:.09,scrollTrigger:{trigger:m,start:"top 90%"},onComplete:function(){unmask(s)}});gsap.to(s.words,{opacity:1,stagger:.1,ease:"none",scrollTrigger:{trigger:m,start:"top 85%",end:"center 64%",scrub:true}})}
  if(!RM)$$(".stat .v",view).forEach(function(el,i){var st=SplitText.create(el,{type:"lines",mask:"lines",linesClass:"ln"});gsap.from(st.lines,{yPercent:100,opacity:0,duration:1.15,ease:"silk",delay:i*.08,scrollTrigger:{trigger:el.closest(".stats"),start:"top 85%"},onComplete:function(){unmask(st)}})});
  var hk=$(".hero-key",view);if(hk)ScrollTrigger.create({trigger:hk.closest(".hero"),start:"top -25%",end:"max",toggleClass:{targets:hk,className:"gone"}});
  if(!RM)$$(".stat .ln2",view).forEach(function(l,i){gsap.to(l,{scaleX:1,duration:1.2,ease:"flow",delay:i*.04,scrollTrigger:{trigger:".stats",start:"top 85%"}})});
  var sec=$("#story",view);if(!sec)return;
  var steps=$$(".step",view),rail=$$(".rail span",view),prog=$("#rprog",view),cur=0,N=steps.length,svg=$("#scene svg",view);
  function setStep(n){if(n===cur)return;cur=n;steps.forEach(function(s,j){s.classList.toggle("on",j===n)});rail.forEach(function(r,j){r.classList.toggle("on",j===n);r.classList.toggle("done",j<n)})}
  var draw=storyDraw(svg),pre={v:RM?1:0},lastP=0;
  if(!RM)ScrollTrigger.create({trigger:sec,start:"top 75%",end:"top top",onUpdate:function(s){pre.v=s.progress;draw(lastP,pre.v)},onLeave:function(){pre.v=1;draw(lastP,1)},onLeaveBack:function(){pre.v=0;draw(lastP,0)}});
  if(sec.getBoundingClientRect().top<=0)pre.v=1;
  draw(0,pre.v);
  if(RM){draw(.98,1);return}
  var tl=gsap.timeline();tl.to({},{duration:1});
  var fx=StoryFX({section:sec,figs:[],steps:steps});
  tl.eventCallback("onUpdate",function(){if(!prog.isConnected)return;var p=tl.progress();lastP=p;prog.style.transform="scaleX("+p+")";setStep(Math.min(N-1,Math.floor(p*N*.9999)));fx(p);draw(p,pre.v)});
  ScrollTrigger.create({trigger:sec,start:"top top",end:function(){return "+="+Math.round(innerHeight*2.8)},pin:true,animation:tl,onRefresh:function(st){/*story keeps its scrubbed state after ScrollTrigger.refresh (it redrew at step 1)*/tl.progress(st.progress);var c=tl.eventCallback("onUpdate");if(c)c.call(tl)},scrub:.6,anticipatePin:1,invalidateOnRefresh:true});
}

/* ================= HEADER ================= */
var hdr=$("#hdr"),lastSY=0;
function hdrTheme(){
  var y=window.scrollY;hdr.classList.toggle("solid",y>24);
  if(document.body.classList.contains("menu-open")||hdr.contains(document.activeElement)){hdr.classList.remove("hide");lastSY=y}else{if(y<80||y<lastSY-6){hdr.classList.remove("hide");lastSY=y}else if(y>lastSY+6){hdr.classList.add("hide");lastSY=y}}
}
/* BT: the hero's living visual, quieter, behind the footer wordmark */
function footCopy(){var f=$(".ftr .fcv");if(!f)return;var r=f.getBoundingClientRect();if(r.bottom<=0||r.top>=innerHeight)return;
  var src=$("#field"),d=Math.min(devicePixelRatio||1,2),W=Math.round(r.width*d),H=Math.round(r.height*d);if(!src.width)return;if(f.width!==W||f.height!==H){f.width=W;f.height=H}
  var c=f.getContext("2d"),sw=src.width,sh=src.height,sd=sw/(document.documentElement.clientWidth||innerWidth),fc=field.focus(),k=Math.max(W/sw,H/sh)*1.02;c.clearRect(0,0,W,H);
  var ox=Math.min(0,Math.max(W-sw*k,W*.9-fc[0]*sd*k)),oy=Math.min(0,Math.max(H-sh*k,H*.8-fc[1]*sd*k));c.drawImage(src,ox,oy,sw*k,sh*k)}
var _hf=0;gsap.ticker.add(function(){fieldScroll();if((++_hf&1)===0)footCopy();if((_hf&7)===0)hdrTheme()});
addEventListener("scroll",hdrTheme,{passive:true});
hdr.addEventListener("focusin",function(){hdr.classList.remove("hide");lastSY=window.scrollY});

/* ================= VIEW ANIMATIONS ================= */
var ctx=null,HERO_TL=[];
function splitReveal(el,E){
  if(RM)return;
  var st=SplitText.create(el,{type:"lines,words",mask:"lines",linesClass:"ln"});
  var fs=el.getBoundingClientRect().top+scrollY<innerHeight;
  gsap.from(el,{opacity:0,duration:.7,ease:"power1.out",delay:fs?(E||0)+.45:0,scrollTrigger:{trigger:el,start:fs?"top bottom":"top 90%"}});
  gsap.from(st.lines,{yPercent:100,opacity:0,duration:1.15,ease:"silk",stagger:.09,delay:fs?(E||0)+.45:0,scrollTrigger:{trigger:el,start:fs?"top bottom":"top 90%"},onComplete:function(){unmask(st)}});
}
var ENTRY=0;
function initView(k,first){var E=ENTRY;ENTRY=0;HERO_TL=[];
  var view=$("#view");
  ctx=gsap.context(function(){
    var t=$("#pageTitle",view);
    if(k==="home"&&!RM){
      var mob=MOBILE();
      /* CR: the headline rises as whole lines; eyebrow, copy and buttons start while it is still settling */
      var s=SplitText.create(t,{type:"lines",mask:"lines",linesClass:"ln"});
      var hr=$$(".hero [data-r]",view);
      var paused=!!(first&&window._preShown);
      var htl=gsap.timeline({paused:paused,delay:paused?0:E+.1,onComplete:function(){unmask(s)}});
      htl.from(s.lines,{yPercent:100,opacity:0,duration:mob?.8:1.1,ease:"silk",stagger:mob?.06:.08},0)
         .from(hr,{y:22,opacity:0,duration:mob?.6:.9,ease:"silk",stagger:.04},mob?.12:.22);
      if(paused){window._heroIn=htl;htl.progress(.001).progress(0)}
      HERO_TL.push(htl);
      if(!mob)gsap.to(t,{yPercent:-14,opacity:.25,ease:"none",scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom top",scrub:true}});
    }else if(t&&!RM){var s2=SplitText.create(t,{type:"lines",mask:"lines",linesClass:"ln"});HERO_TL.push(gsap.from(s2.lines,{yPercent:100,opacity:0,duration:1.05,ease:"silk",stagger:.08,delay:E+.05,onComplete:function(){unmask(s2)}}))}
    if(!RM&&$(".ph-head",view)){HERO_TL.push(gsap.from($$(".ph-head [data-r], .ph-head .eyebrow",view),{y:20,opacity:0,duration:.9,ease:"silk",stagger:.06,delay:E+.2}))}
    $$(".split",view).forEach(function(el){if(el.id!=="pageTitle")splitReveal(el,E)});
    if(k==="home")homeScroll(view);
    if(k==="contact")contactInit(view);
    rvView(view,E);
  },view);
  var rt;$$("img",view).forEach(function(im){if(!im.complete)im.addEventListener("load",function(){clearTimeout(rt);rt=setTimeout(function(){ScrollTrigger.refresh()},200)},{once:true})});
  ScrollTrigger.refresh();
}
/* ================= AZ: GLOBAL REVEAL ================= */
var RV_SEL="h1,h2,h3,h4,h5,h6,p,li,b,strong,small,span,blockquote,figcaption,dt,dd,tr,label,button,a[class],img,svg,figure,canvas,picture,video,.fld,[class*=card],[class*=stat],[class*=tile],[class*=eyebrow],[class*=kicker],[class*=label],[class*=lab],[class*=tag],[class*=btn],[class*=pill]";
var RV_UNIT="li,tr,button,a,p,h1,h2,h3,h4,h5,h6,figure,blockquote,label,dt,dd,img,svg,canvas,picture,video,.fld";
var RV_SKIP=".hero,.ph-head,#pageTitle,[aria-hidden=true],.sr-only,script,style,template,[data-norv]";
var RV_LIVE=[];
function rvMarks(root){var A=new Set(),K=new Set();
  $$("*",root).forEach(function(el){var t=gsap.getTweensOf(el);for(var i=0;i<t.length;i++){if(t[i].vars.repeat<0)continue;A.add(el);
      for(var p=el.parentElement;p&&p!==root&&!K.has(p);p=p.parentElement)K.add(p);break}});
  return {A:A,K:K}}
function rvWalk(n,out,M){for(var c=n.firstElementChild;c;c=c.nextElementSibling){
  if(M.A.has(c)||c.matches(RV_SKIP))continue;
  var cs=getComputedStyle(c);if(cs.display==="none"||cs.visibility==="hidden"||+cs.opacity<.05||cs.position==="fixed")continue;
  if(M.K.has(c)&&!c.matches("figure")){rvWalk(c,out,M);continue}
  if(c.matches(RV_SEL)&&(c.matches(RV_UNIT)||c.querySelectorAll(RV_SEL).length<2)){var r=c.getBoundingClientRect();
    if(r.height>innerHeight*.35&&!c.matches("figure,picture")&&c.querySelectorAll(RV_SEL).length>1){rvWalk(c,out,M);continue}
    if(r.width>1&&r.height>1)out.push(c);continue}
  rvWalk(c,out,M)}}
function rvHide(el){
  if(/^H[1-6]$/.test(el.tagName)&&!el.querySelector("img,svg,canvas")){
    el._rvS=SplitText.create(el,{type:"lines",mask:"lines",linesClass:"ln"});gsap.set(el._rvS.lines,{yPercent:100,opacity:0});gsap.set(el,{opacity:0});return}
  var med=/^(IMG|CANVAS|VIDEO|PICTURE)$/.test(el.tagName),clip=med&&el.parentElement&&/hidden|clip/.test(getComputedStyle(el.parentElement).overflow);
  el.style.transition="none";
  gsap.set(el,clip?{opacity:0,scale:1.06,transformOrigin:"50% 50%"}:{opacity:0,y:med?36:24})}
function rvGo(b,d,gap){var g=gap==null?.07:gap;b.forEach(function(el,i){if(el._rvDone)return;el._rvDone=1;var dl=d+i*g;
  if(el._rvS){var s=el._rvS;gsap.to(el,{opacity:1,duration:.7,ease:"power1.out",delay:dl,clearProps:"opacity"});gsap.to(s.lines,{yPercent:0,opacity:1,duration:1.1,ease:"silk",stagger:.08,delay:dl,overwrite:true,onComplete:function(){if(el._rvS===s){s.revert();el._rvS=null}}})}
  else gsap.to(el,{y:0,scale:1,opacity:1,duration:1,ease:"silk",delay:dl,overwrite:true,clearProps:"transform,opacity,transition,transformOrigin"})})}
function rvCollect(root){var M=rvMarks(root),out=[];rvWalk(root,out,M);return out}
function rvView(view,E){if(RM)return;var t0=performance.now(),E0=(E||0)+.3;
  function base(){return Math.max(0,E0-(performance.now()-t0)/1000)}
  var items=rvCollect(view);items.forEach(rvHide);RV_LIVE=items;
  var fh=items.filter(function(el){return el._rvS&&el.getBoundingClientRect().top+scrollY<innerHeight}),rest=items.filter(function(el){return fh.indexOf(el)<0});
  if(fh.length)ScrollTrigger.batch(fh,{start:"top bottom",end:"max",once:true,interval:.1,batchMax:10,onEnter:function(b){rvGo(b,base())}});
  if(rest.length)ScrollTrigger.batch(rest,{start:"top 90%",end:"max",once:true,interval:.1,batchMax:10,onEnter:function(b){rvGo(b,base(),.05)}});
  setTimeout(function(){if(view.isConnected)ScrollTrigger.refresh()},700)}
function rvFail(){RV_LIVE.forEach(function(el){if(!el.isConnected)return;var r=el.getBoundingClientRect();if(r.top>=innerHeight)return;
  if(!el._rvDone){rvGo([el],0);return}
  var t=el._rvS?el._rvS.lines:[el];if(!gsap.getTweensOf(t[0]).some(function(w){return !w.paused()&&w.progress()<1})&&+getComputedStyle(t[0]).opacity<.99){gsap.set(t,{opacity:1,y:0,yPercent:0,scale:1})}})}
function failsafe(){setTimeout(function(){rvFail();HERO_TL.forEach(function(t){if(t&&t.progress()<1&&!(t.isActive&&t.isActive())&&t.paused&&t.paused())t.play()});if((window._fsN=(window._fsN||0)+1)<6&&HERO_TL.some(function(t){return t&&t.progress()<1})){failsafe();return}
  $$("#view .hero [data-r], #view .ph-head [data-r], #view .ph-head .eyebrow, #pageTitle, #pageTitle *").forEach(function(el){var cs=getComputedStyle(el);if(+cs.opacity<.99&&!gsap.getTweensOf(el).some(function(w){return !w.paused()&&w.progress()<1})&&!(el.parentElement&&gsap.getTweensOf(el.parentElement).some(function(w){return !w.paused()&&w.progress()<1}))){gsap.killTweensOf(el);gsap.set(el,{opacity:1,y:0,yPercent:0})}});
  $$("#pageTitle .ln-mask").forEach(function(m){m.style.overflow="visible";m.style.clipPath="none"})},2500)}

function contactInit(view){
  var f=$("#cform",view);if(!f)return;
  $$(".fld input,.fld textarea",view).forEach(function(i){i.addEventListener("input",function(){i.parentNode.classList.toggle("f",!!i.value);i.parentNode.classList.remove("bad")})});
  f.addEventListener("submit",function(e){e.preventDefault();var bad=false;
    $$("[required]",f).forEach(function(i){var v=i.value.trim();var okv=v&&(i.type!=="email"||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v));i.parentNode.classList.toggle("bad",!okv);if(!okv)bad=true});
    if(bad){var fb=$(".fld.bad input, .fld.bad textarea",f);if(fb)fb.focus();return}
    var fw=$("#fw",view);gsap.to(f,{opacity:0,y:-16,duration:.45,ease:"power2.in",onComplete:function(){fw.classList.add("done");var th=$("#thanks",view);th.focus({preventScroll:true});
      if(!RM){gsap.from($$("#thanks svg *",view),{scale:.6,transformOrigin:"50% 50%",opacity:0,duration:1.4,ease:"silk",stagger:.12});gsap.from($$("#thanks h3, #thanks p",view),{y:24,opacity:0,duration:1,ease:"silk",stagger:.1,delay:.3})}
      ScrollTrigger.refresh()}})});
}

/* ================= PERSON SHEET (BI) ================= */
var ps=$("#ps"),psSheet=$("#psSheet"),psBody=$("#psBody"),psMedia=$("#psMedia"),bioOpen=false,bioIdx=-1,lastFocus=null;
function fillBio(i){var p=SHEETS[i];bioIdx=i;var big=p.img&&!p.small;ps.classList.toggle("noimg",!big);
  psMedia.innerHTML=big?'<img src="'+p.img+'" alt="Portrait of '+esc(p.name)+'" onerror="this.closest(\'.ps\').classList.add(\'noimg\')">':'';
  psBody.innerHTML='<span class="lab">'+esc(SITE)+'</span><h2 id="psName">'+esc(p.name)+'</h2><p class="role">'+esc(p.title)+'</p>'+(p.rows?'<div class="psrows">'+p.rows.map(function(r){return '<p><b>'+esc(r[0])+'</b>'+(r[2]?'<q>'+esc(r[1])+'</q>':esc(r[1]))+'</p>'}).join("")+'</div>'+(p.mail?'<div class="ctc"><a class="ul" href="mailto:'+p.mail+'">Email</a></div>':''):p.bio.map(function(b){return '<p>'+esc(b)+'</p>'}).join(""));
  psBody.scrollTop=0;document.title=p.name+" — "+SITE;
}
function openBio(slug,instant){var i=pBy(slug);if(i<0)return;fillBio(i);
  if(bioOpen){if(!RM)gsap.fromTo([psMedia,psBody],{opacity:0},{opacity:1,duration:.35,ease:"power1.out"});return}
  bioOpen=true;lastFocus=document.activeElement;ps.classList.add("open");ps.setAttribute("aria-hidden","false");if(lenis)lenis.stop();
  var d0=instant?(window._preShown?1.5:.4):0;
  gsap.killTweensOf([psSheet,".ps-scrim"]);
  gsap.fromTo(".ps-scrim",{opacity:0},{opacity:1,duration:RM?.01:.45,ease:"power2.out",delay:d0});
  gsap.fromTo(psSheet,{opacity:0,y:26,scale:.985},{opacity:1,y:0,scale:1,duration:RM?.01:.6,ease:"power3.out",delay:d0});
  if(!RM)gsap.fromTo(psBody.children,{opacity:0,y:14},{opacity:1,y:0,duration:.55,stagger:.04,delay:d0+.12,ease:"power2.out"});
  setTimeout(function(){psBody.focus({preventScroll:true})},60);
}
function hideBio(){if(!bioOpen)return;bioOpen=false;bioIdx=-1;
  gsap.to(psSheet,{opacity:0,y:18,duration:RM?.01:.35,ease:"power2.in"});
  gsap.to(".ps-scrim",{opacity:0,duration:RM?.01:.4,onComplete:function(){ps.classList.remove("open");ps.setAttribute("aria-hidden","true")}});
  if(lenis)lenis.start();if(lastFocus&&lastFocus.focus)lastFocus.focus({preventScroll:true});var r=route(location.hash);document.title=r.t}
function closeBio(){if(!bioOpen)return;if(bioFromClick){bioFromClick=false;history.back()}else{history.replaceState(null,"",bioBase||"#/team");prevHash=location.hash||"#/";hideBio()}}
function stepBio(d){if(bioIdx<0)return;var n=SHEETS.length,i=(bioIdx+d+n)%n;var h="#/team/"+SHEETS[i].slug;history.replaceState(null,"",h);prevHash=h;openBio(SHEETS[i].slug)}
$$("[data-ps-close]",ps).forEach(function(b){b.addEventListener("click",closeBio)});
$("#psPrev").addEventListener("click",function(){stepBio(-1)});
$("#psNext").addEventListener("click",function(){stepBio(1)});
ps.addEventListener("keydown",function(e){if(e.key!=="Tab"||!bioOpen)return;var f=$$("button,a[href],[tabindex='0']",ps);if(!f.length)return;var a=f[0],z=f[f.length-1];
  if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}});
var bioFromClick=false,bioBase=null;

/* ================= NAV / ROUTING ================= */
var busy=false,queued=false,curKey=null,navByClick=false,scrollMem={},prevHash=location.hash||"#/";
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#']");if(!a)return;var h=a.getAttribute("href");
  if(/^#\/team\/[^/]+$/.test(h)&&(curKey==="team"||curKey==="home")){e.preventDefault();bioBase=location.hash||"#/";bioFromClick=true;history.pushState(null,"",h);prevHash=h;openBio(h.split("/")[2]);return}
  navByClick=true;
  if(h==="#main"){e.preventDefault();lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo(0,0);return}
  if(document.body.classList.contains("menu-open"))closeMenu();
  if(h===location.hash||(h==="#/"&&(location.hash===""||location.hash==="#/"))){e.preventDefault();lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo(0,0)}},true);
function fitSvgType(root){$$("svg.bigsvg, svg.logo",root||document).forEach(function(svg){if(svg._fit)return;$$("text[textLength]",svg).forEach(function(t){t.setAttribute("textLength","");t.setAttribute("lengthAdjust","spacing")});try{var bb=svg.getBBox();if(bb.width>1){svg.setAttribute("viewBox",(bb.x-1).toFixed(1)+" "+(bb.y-1).toFixed(1)+" "+(bb.width+2).toFixed(1)+" "+(bb.height+2).toFixed(1));svg._fit=1}}catch(e){}})}
function paint(r){
  var view=$("#view");if(ctx){ctx.revert();ctx=null}ScrollTrigger.getAll().forEach(function(s){s.kill()});
  if(!view.firstElementChild)view.innerHTML=r.v()+footer();document.title=r.t;curKey=r.k;fitSvgType(view);
  $$(".nav .nl").forEach(function(a){var h=a.getAttribute("href").slice(2);if(r.k===h)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
  if(lenis)lenis.scrollTo(0,{immediate:true,force:true});window.scrollTo(0,0);
  field.snapDim(r.k==="home"?1:.78);observeField();
  $("#live").textContent=r.x+" page";lastSY=0;hdrTheme();
}
function restoreY(y,cb){if(!(y>0)){if(cb)cb();return}requestAnimationFrame(function(){requestAnimationFrame(function(){ScrollTrigger.refresh();var m=Math.max(0,document.documentElement.scrollHeight-innerHeight);y=Math.min(y,m);if(lenis)lenis.scrollTo(y,{immediate:true,force:true});window.scrollTo(0,y);ScrollTrigger.update();hdrTheme();if(cb)requestAnimationFrame(function(){requestAnimationFrame(cb)})})})}
function go(first,ready){
  var r=route(location.hash);
  if(first){paint(r);initView(r.k,true);var sy=0;try{sy=+sessionStorage.getItem(PK+"-y:"+(location.hash||"#/"))||0}catch(e){}if(r.bio)sy=0;
    restoreY(sy,function(){if(r.bio){bioBase="#/team";openBio(r.bio,true)}if(ready)ready()});prevHash=location.hash||"#/";return}
  if(r.bio&&curKey&&(curKey==="team"||curKey==="home")){openBio(r.bio);prevHash=location.hash;return}
  if(!r.bio&&r.k===curKey&&(bioOpen||route(prevHash).bio)){bioFromClick=false;hideBio();prevHash=location.hash||"#/";return}
  if(bioOpen){bioOpen=false;bioIdx=-1;ps.classList.remove("open");ps.setAttribute("aria-hidden","true");gsap.set(psSheet,{opacity:0});gsap.set(".ps-scrim",{opacity:0})}
  if(busy){queued=true;return}busy=true;
  scrollMem[prevHash]=window.scrollY;var back=!navByClick&&scrollMem[location.hash||"#/"]>0?scrollMem[location.hash||"#/"]:0;navByClick=false;prevHash=location.hash||"#/";
  var xc=$("#xc"),xt=$("#xt"),tt=$("#xtt");tt.innerHTML="<span>"+esc(r.x)+"</span>";
  if(lenis)lenis.stop();
  var sp=RM?null:SplitText.create(tt.firstChild,{type:"chars"});
  var D=RM?.01:1;
  var tl=gsap.timeline({onComplete:function(){xt.style.visibility="hidden";gsap.set(xc,{yPercent:101});if(sp)sp.revert();busy=false;var h=$("#pageTitle");if(h)h.focus({preventScroll:true});failsafe();if(queued){queued=false;go(false)}}});
  tl.fromTo(xc,{yPercent:101},{yPercent:0,duration:.7*D,ease:"power3.inOut"},0);
  if(sp){tl.set(xt,{visibility:"visible",opacity:1},.45*D).fromTo(sp.chars,{yPercent:140,opacity:0},{yPercent:0,opacity:1,duration:.45,ease:"power3.out",stagger:.02},.48*D).fromTo("#xlab",{opacity:0,y:8},{opacity:1,y:0,duration:.35},.55*D)}
  tl.call(function(){paint(r);if(r.bio)bioBase="#/team"},null,.74*D)
    .call(function(){if(lenis)lenis.start();ENTRY=RM?0:.55;initView(r.k,false);if(back)restoreY(back);if(r.bio)openBio(r.bio)},null,.8*D);
  if(sp){tl.to("#xlab",{opacity:0,duration:.25},1.12*D)}
  tl.to(xt,{opacity:0,duration:.3,ease:"power2.in"},"<");tl.to(xc,{yPercent:-101,duration:.7*D,ease:"power3.inOut"},1.18*D);
}
addEventListener("pagehide",function(){try{sessionStorage.setItem(PK+"-y:"+(location.hash||"#/"),String(Math.round(window.scrollY)))}catch(e){}});
try{history.scrollRestoration="manual"}catch(e){}
addEventListener("hashchange",function(){go(false)});

/* menu */
var mm=$("#mm"),burger=$("#burger");
function openMenu(){document.body.classList.add("menu-open");burger.setAttribute("aria-expanded","true");$("#burgerLab").textContent="Close";mm.setAttribute("aria-hidden","false");mm.style.visibility="visible";if(lenis)lenis.stop();hdr.classList.remove("hide");
  gsap.to(mm,{clipPath:"circle(150% at calc(100% - 40px) 40px)",duration:RM?.01:.9,ease:"flow"});
  gsap.fromTo($$("#mm li a"),{yPercent:110},{yPercent:0,duration:.9,ease:"silk",stagger:.05,delay:.2});gsap.fromTo(".mmf",{opacity:0},{opacity:1,duration:.7,delay:.5})}
function closeMenu(){document.body.classList.remove("menu-open");burger.setAttribute("aria-expanded","false");$("#burgerLab").textContent="Menu";mm.setAttribute("aria-hidden","true");if(lenis)lenis.start();
  gsap.to(mm,{clipPath:"circle(0px at calc(100% - 40px) 40px)",duration:RM?.01:.7,ease:"flow",onComplete:function(){mm.style.visibility="hidden"}});hdrTheme()}
burger.addEventListener("click",function(){document.body.classList.contains("menu-open")?closeMenu():openMenu()});
addEventListener("keydown",function(e){if(e.key!=="Escape")return;if(document.body.classList.contains("menu-open")){closeMenu();return}if(bioOpen)closeBio()});

/* ================= PRELOADER / RELOAD VEIL ================= */
var SEEN=false;try{SEEN=sessionStorage.getItem(PK+"-pre")==="1"}catch(e){}
var LOCKKEYS={32:1,33:1,34:1,35:1,36:1,37:1,38:1,39:1,40:1};
function blockEv(e){e.preventDefault()}
function blockKey(e){if(LOCKKEYS[e.keyCode])e.preventDefault()}
function lockScroll(){document.documentElement.style.overflow="hidden";document.body.style.overflow="hidden";if(lenis)lenis.stop();addEventListener("wheel",blockEv,{passive:false});addEventListener("touchmove",blockEv,{passive:false});addEventListener("keydown",blockKey,{passive:false})}
function unlockScroll(){document.documentElement.style.overflow="";document.body.style.overflow="";removeEventListener("wheel",blockEv,{passive:false});removeEventListener("touchmove",blockEv,{passive:false});removeEventListener("keydown",blockKey,{passive:false});if(lenis&&!bioOpen)lenis.start()}
function preload(){
  fitSvgType(document);
  var pre=$("#pre"),cnt=$("#preCnt"),bar=$("#preBar");
  if(RM){go(true,function(){pre.remove();failsafe()});field.once();hdrTheme();return}
  if(SEEN){field.intro(1.4);field.start();ENTRY=.35;
    go(true,function(){gsap.to(pre,{opacity:0,duration:.5,ease:"power2.out",onComplete:function(){pre.remove()}});hdrTheme();failsafe()});return}
  try{sessionStorage.setItem(PK+"-pre","1")}catch(e){}
  lockScroll();
  var wm=SplitText.create("#pre .wm span",{type:"chars",charsClass:"c"});gsap.set(wm.chars,{yPercent:190,opacity:0});$("#pre .pc").style.visibility="visible";
  var mk=$("#pre .mk path"),L=330;gsap.set(mk,{strokeDasharray:L,strokeDashoffset:L});
  window._preShown=true;ENTRY=1.4;go(true);field.intro(.01);
  gsap.set("#hdr",{yPercent:-120});
  var wf=0;(function warm(){if(++wf<4){field.once();requestAnimationFrame(warm)}else runPre()})();
  function runPre(){
    var t0=performance.now(),ready=false,tasks=[];
    $$("img").forEach(function(im){if(im.decode)tasks.push(im.decode().catch(function(){}))});
    Promise.all(tasks).then(function(){ready=true});setTimeout(function(){ready=true},1000);
    var o={n:0};function upd(){cnt.textContent=("00"+Math.round(o.n)).slice(-3);bar.style.transform="scaleX("+o.n/100+")"}
    gsap.timeline().to(mk,{strokeDashoffset:0,duration:1,ease:"flow"},0)
      .to(wm.chars,{yPercent:0,opacity:1,duration:.75,ease:"silk",stagger:.03},.15)
      .to(o,{n:88,duration:1,ease:"power2.out",onUpdate:upd},0);
    (function check(){var el=(performance.now()-t0)/1000;if((ready&&el>=.95)||el>=1.15)exit();else requestAnimationFrame(check)})();
    function exit(){
      var mob=MOBILE();
      var tl=gsap.timeline({onComplete:function(){pre.remove();unlockScroll();gsap.set("#hdr",{clearProps:"transform"});hdrTheme();failsafe()}});
      tl.to(o,{n:100,duration:.25,ease:"power1.out",onUpdate:upd},0)
        .to(wm.chars,{yPercent:-120,opacity:0,duration:.38,ease:"power3.in",stagger:.012},.08)
        .to(["#pre .mk","#pre .cnt","#pre .bar","#pre .pl"],{opacity:0,duration:.3,ease:"power2.in"},.12)
        .add(function(){field.intro(2);field.start()},mob?1.0:.95).fromTo("#field",{filter:"opacity(0)"},{filter:"opacity(1)",duration:1.8,ease:"power2.out",clearProps:"filter"},mob?1.0:.95)
        .add(function(){if(window._heroIn)window._heroIn.play()},mob?1.0:.95)
        .to(pre,{yPercent:-100,duration:.85,ease:"flow"},mob?.62:.42)
        .to("#hdr",{yPercent:0,duration:.7,ease:"silk"},.95);
    }
  }
}
(function(){var done=false;function go2(){if(done)return;done=true;preload()}
  if(document.fonts&&document.fonts.load){Promise.all(FONTS.map(function(f){return document.fonts.load(f)})).then(function(){return document.fonts.ready}).then(go2,go2);setTimeout(go2,2500)}else go2()})();
var lw=innerWidth;addEventListener("resize",function(){clearTimeout(window._rz);window._rz=setTimeout(function(){if(Math.abs(innerWidth-lw)<2&&MOBILE())return;lw=innerWidth;ScrollTrigger.refresh()},250)});
})();

/*R:nssfix*//* Safari dashes vector-effect:non-scaling-stroke paths in screen units, so a draw-in dash of getTotalLength() stops short of its end point (PRINCIPLES DR4). For every such path that is being dash-drawn, drop non-scaling-stroke and keep its on-screen width by dividing by the CTM scale. Static patterned dashes are left alone. */
(function(){var done=new WeakSet();
function sc(el){var m=el.getScreenCTM&&el.getScreenCTM();if(!m)return 1;var s=Math.sqrt(Math.abs(m.a*m.d-m.b*m.c));return s>0?s:1}
function isDraw(el){var da=el.style.strokeDasharray||el.getAttribute("stroke-dasharray");if(!da||da==="none")return false;var v=String(da).split(/[ ,]+/).map(parseFloat).filter(function(x){return!isNaN(x)});if(!v.length)return false;var L=0;try{L=el.getTotalLength()}catch(e){return false}if(!(L>0))return false;return v[0]>=L*0.9}
function fix(el){if(done.has(el))return;if(!(el instanceof SVGGeometryElement))return;var cs=getComputedStyle(el);if(cs.vectorEffect!=="non-scaling-stroke")return;if(!isDraw(el))return;done.add(el);var w=parseFloat(cs.strokeWidth)||1;el.__nsw=w;el.style.vectorEffect="none";el.style.strokeWidth=(w/sc(el)).toFixed(4)+"px"}
function scan(r){(r||document).querySelectorAll("svg path,svg line,svg polyline,svg circle,svg ellipse,svg rect,svg polygon").forEach(fix)}
function resize(){document.querySelectorAll("svg *").forEach(function(el){if(done.has(el)&&el.__nsw)el.style.strokeWidth=(el.__nsw/sc(el)).toFixed(4)+"px"})}
new MutationObserver(function(ms){ms.forEach(function(m){if(m.type==="attributes"&&m.target instanceof SVGElement)fix(m.target);else if(m.addedNodes)m.addedNodes.forEach(function(n){if(n.nodeType===1&&n.querySelectorAll)scan(n)})})}).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:["style","stroke-dasharray"]});
addEventListener("load",function(){scan();setTimeout(scan,1500)});addEventListener("resize",function(){clearTimeout(resize.t);resize.t=setTimeout(resize,120)});})();