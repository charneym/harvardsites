/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
/* technology (axenic.co.uk > Technology: GaAs Mach Zehnder Modulator Technology) */
var TECH=[
 ["Stable in orbit","Radiation-hard","Gallium arsenide is environmentally stable and radiation-hard, and lacks the undesired pyroelectric effects of other modulator materials."],
 ["Linear, zero-chirp","Over a wide wavelength range","GaAs devices are linear and well suited to zero-chirp applications, so the optical output follows the RF drive faithfully."],
 ["No temperature control","Field-operated, low-current","Essentially field-operated, low-current devices: stable, robust and long-lived, with negligible long-term bias-point drift."]];
function tech(){return '<div class="caps nwc tst">'+TECH.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
var APPS=["Satellite communications","High throughput satellites","Free space optical links","RF over fibre","Phased-array antenna remoting","Aerospace and defence","Test and measurement","QPSK, QAM and PAM4"];
function apps(){return '<div class="bk cnd"><span class="lab kick" data-r>Applications</span><p class="cr" data-r>'+APPS.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* space (axenic.co.uk > News: Modulators in Space Application, ICSO 2026, Contract Announcement, Flexible-HTS, Photonic-VHTS) */
var SPACE=[
 ["In orbit","Space heritage","Our modulators are operating in a low Earth orbit constellation, and ESA's Aidan Next programme is supporting the step to GEO."],
 ["200+ IQ modulators","One satellite project","A major contract to supply more than 200 IQ modulators for a satellite communication project."],
 ["EU research","PhLEXSAT and SIPhoDiAS","Partner in two EC-funded projects developing photonic technology for high-throughput and very-high-throughput satellites."]];
function space(){return '<div class="caps nwc tst">'+SPACE.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* careers (axenic.co.uk > Careers: current opportunities) */
var JOBS=[
 ["Production Technician","Assembly","Assembling high-speed optoelectronic devices to precise specifications, and improving the processes and inspection equipment behind them."],
 ["Development Engineer","Optical development","Experimental builds, demonstrators and your own characterisation methods, guided by experts in the field."],
 ["Test Engineer","Test","Testing and characterising high-speed devices from bare GaAs die to finished packages, and building the measurement hardware and software."]];
function jobs(){return '<div class="caps nwc tst">'+JOBS.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* news (axenic.co.uk > News; FinSMEs, Oct 2025) */
var NEWS=[
 ["Oct 2026","ICSO 2026, Sorrento: reliability data for modulators with space heritage","Conference",PW+"/axenic-presenting-at-international-conference-on-space-optics-2026/"],
 ["Jun 2026","On the road: ESA's ScyLight conference and Space North East England","Events",PW+"/axenic-on-the-road/"],
 ["Mar 2026","Space-Comm Expo Europe, London ExCeL, with Space North East England","Exhibition",PW+"/axenic-exhibit-at-space-comm-europe/"],
 ["Jan 2026","A decade of innovation: ten years at NETPark","Company",PW+"/axenic-celebrate-10-year-anniversary/"],
 ["Oct 2025","£500,000 from Maven Capital Partners to scale up and recruit","Investment",PW+"/axenic-announce-maven-investment/"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1604" height="606" alt="An aXenic aXMD2150 gallium arsenide broadband optical modulator: a gold package with fibre boots, DC pins and an SMPM connector" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Gallium arsenide modulators<span class="nomob"> · NETPark, Durham</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Optical modulators,</span> <span class="l">built for space.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Gallium arsenide Mach-Zehnder and IQ modulators for satellite communications: small, light and fast, flat to 50 GHz, radiation-hard and stable without temperature control.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/modulators">Our modulators '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>aXenic</span>'+
   '<h2 class="txt" id="mani"><span class="nw">We turn signals</span> <span class="nw">into light,</span> <span class="nw">inside the next</span> <span class="nw">generation of</span> <span class="nw">satellites.</span> <em><span class="nw">Designed and built</span> <span class="nw">in County Durham.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2015</span><p class="k">spun out to NETPark; employee owned and controlled</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">60 GHz</span><p class="k">bandwidth from DC on the aXMD2150 broadband modulator</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">220 GBd</span><p class="k">world-record transmission demonstrated with our aXSD2050</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How our modulators work</span><h2 class="d3"><span class="nw">Light in,</span> <span class="nw">data out.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Split</span><span>Drive</span><span>Combine</span><span>Monitor</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Two paths</span> <span class="nw">for the light.</span></h2><p>Light from the input fibre enters a gallium arsenide waveguide and divides equally between the two arms of a Mach-Zehnder interferometer.</p></article>'+
     '<article class="step"><h2><span class="nw">The RF signal</span> <span class="nw">drives the arms.</span></h2><p>The RF signal runs along electrodes beside the arms. Through the linear electro-optic effect of GaAs it shifts the phase of the light, with under 5 V of drive.</p></article>'+
     '<article class="step"><h2><span class="nw">The arms</span> <span class="nw">combine.</span></h2><p>Back together, light in phase passes and light out of phase cancels, so the optical output follows the RF signal, flat to 50 GHz.</p></article>'+
     '<article class="step"><h2><span class="nw">An eye on</span> <span class="nw">the bias point.</span></h2><p>An output photodiode monitors the bias point, and the folded optics keep fibres and RF at opposite ends, which protects the integrity of the RF feed.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="modulators" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Modulators</span><h2 class="d2 split"><span class="nw">Mach-Zehnder and</span> <span class="nw">IQ modulators.</span></h2></div><p data-r>Compact folded-optics packages built on GaAs chips from industry-standard, high-volume foundry processes, with low size, weight and power.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">The case for</span> <span class="nw">gallium arsenide.</span></h2></div><p data-r>Originally developed for aerospace and defence, GaAs modulator technology brings the same robustness to every high-speed optical link.</p></div>'+
   tech()+apps()+
  '</div></section>'+

  '<section class="sec dark" id="space" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Space</span><h2 class="d2 split"><span class="nw">Already</span> <span class="nw">in orbit.</span></h2></div><p data-r>Our customers include major European satellite and aerospace manufacturers, international space agencies and new players in satellite communications.</p></div>'+
   space()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Where to</span> <span class="nw">meet us.</span></h2></div><p data-r>Conferences, exhibitions and company news from NETPark.</p></div>'+
   news()+
  '</div></section>'+

  '<section class="sec light" id="careers" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Careers</span><h2 class="d2 split"><span class="nw">Employee</span> <span class="nw">owned.</span></h2></div><p data-r>An agile start-up with decades of telecoms experience behind it. Options to take ownership of the company are part of the reward package.</p></div>'+
   jobs()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us about</span> <span class="nw">your link.</span></h2>'+
   '<p class="sub" data-r>From a custom device design to prototypes and qualified production runs, or a comparison of GaAs with lithium niobate: we love to meet our customers, so arrange a visit.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>aXenic Ltd</span><br><span>NETPark, Thomas Wright Way</span><br><span>Sedgefield, Co Durham</span><br><span>TS21 3FD</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Enquiries and quotes</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><span>ISO 9001 · ISO 14001</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>NETPark, Thomas Wright Way<br>Sedgefield, Co Durham TS21 3FD</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/modulators">Modulators</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/space">Space</a><br><a class="ul" href="#/news">News</a><br><a class="ul" href="#/careers">Careers</a></div>'+
   '<div class="c"><span class="lab">Certified</span>ISO 9001<br>ISO 14001<br>Cyber Essentials</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">a<tspan class="bx">X</tspan>enic</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 aXenic Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",modulators:"modulators",technology:"technology",space:"space",news:"news",careers:"careers",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"aXenic — GaAs optical modulators for satellite communications, NETPark, Durham",x:"Home"};
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
