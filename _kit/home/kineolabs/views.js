/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p></li>'}).join("")+'</ul>'}
function team(){return '<div class="fdr">'+TEAM.map(function(p){
  return '<div class="fdc"><div class="fdp"><img class="g" src="'+p.img+'" alt="'+esc(p.name)+', '+esc(p.title)+'" loading="lazy" width="640" height="800"><img class="cl" src="'+p.img+'" alt="" aria-hidden="true" loading="lazy" width="640" height="800"></div>'+
   '<div class="fdt"><h3 data-r>'+esc(p.name)+'</h3><span class="lab" data-r>'+esc(p.title)+'</span><p data-r>'+esc(p.sum)+'</p></div></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Designed from the laser outward","Rather than adapting an off-the-shelf source, every system starts from KineoLabs' own wavelength-sweeping laser engine, with the optics, electronics and control software built around it as one platform.",'<path d="M6 28h18"/><path class="a" d="M24 28h26"/><circle cx="24" cy="28" r="6"/><path d="M40 16v24"/>'],
  ["Free-space, no fibres","Laser, collimation, scanning and detection sit on a single optical bench: no fragile fibre coupling, no alignment drift, and full thermal and mechanical control.",'<path d="M8 40h40"/><path d="M14 40V26h10v14M32 40V20h10v20"/><path class="a" d="M8 30h6M24 30h8M42 30h8"/>'],
  ["Intrinsic phase stability","The cavity needs no external k-clock or etalon triggering, carries internal wavelength and power calibration, and is insensitive to vibration and environmental drift.",'<path d="M6 28c6-10 10-10 16 0s10 10 16 0 10-10 16 0"/><path class="a" d="M6 44h44"/><circle class="f" cx="28" cy="44" r="3"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function figs(){return '<div class="kfig">'+
  '<figure><div class="kfi"><img src="engine-hand.webp" alt="KineoLabs compact OCT optical engine held in one hand" loading="lazy" width="1200" height="800"></div><figcaption data-r><span class="lab">Optical engine</span>The compact KineoLabs retinal-imaging OCT engine: laser, line optics and detection on one hand-sized bench.</figcaption></figure>'+
  '<figure><div class="kfi"><img src="handheld.webp" alt="Product concept of a hand-held KineoLabs OCT system for ophthalmology" loading="lazy" width="1408" height="768"></div><figcaption data-r><span class="lab">Product concept</span>A hand-held ophthalmic OCT system, the form factor the engine makes possible. A concept, not a product for sale.</figcaption></figure>'+
 '</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>By the numbers</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Figures as stated by KineoLabs on kineolabs.com (OEM Solutions, OCT Systems and Spectroscopy Systems). Medical devices developed by KineoLabs are not available for sale and have not been reviewed or authorised by the FDA or any regulatory authority.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Swept-source OCT and spectroscopy<span class="nomob"> · Billerica, Massachusetts</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">One laser,</span><span class="l">from retina</span><span class="l"><em>to refinery.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>KineoLabs designs, builds and manufactures complete optical sensing systems around its own wavelength-sweeping laser engine: compact, rugged OCT imaging and laser spectroscopy for ophthalmic, industrial and process applications.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/systems">The systems</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why line-scan</span>'+
   '<h2 class="txt" id="mani">Conventional OCT builds its picture one point at a time. KineoLabs acquires a <em>whole line at once</em>, from a free-space laser built for it: lower cost, a smaller footprint and fewer parts to fail.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2,000+</span><p class="k">Points captured in a single line, in parallel, by the line-scan architecture</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">250 kHz</span><p class="k">Effective A-line rate or higher, from modest swept-source and data-acquisition requirements</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~5 µm</span><p class="k">Axial resolution in tissue, resolving every clinically relevant retinal layer</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How line-scan OCT works</span><h2 class="d3">Sweep, spread, <em>see.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sweep</span><span>Line</span><span>Image</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>One laser sweeps the band.</h2><p>At the core is KineoLabs\' proprietary free-space, cat\'s-eye swept-source laser. It tunes its wavelength across the band, again and again, with intrinsic phase stability and no fibres or external light sources.</p></article>'+
     '<article class="step"><h2>A line, not a point.</h2><p>Line optics spread the beam across the retina, so 2,000 or more points are illuminated and captured at once. Light returning from each depth interferes with the reference arm and lands on a line camera.</p></article>'+
     '<article class="step"><h2>Every layer, in under a second.</h2><p>Across each sweep the interference fringes resolve into depth, giving a full cross-section. This unstitched, 64-frame-averaged retinal scan came from KineoLabs\' internal prototype in under half a second.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A laser-first, <em>integrated platform.</em></h2></div><p data-r>By designing the laser, optics, electronics and control software as a single platform, KineoLabs removes the size, complexity and cost penalties of conventional architectures, and makes its systems in the United States, from prototype to production.</p></div>'+
   caps()+
   figs()+
  '</div></section>'+

  '<section class="sec dark2" id="systems" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Systems</span><h2 class="d2 split">Imaging and sensing, <em>one architecture.</em></h2></div><p data-r>Four product lines share the same swept-source engine: ophthalmic and industrial OCT, laser spectroscopy, and the laser engines themselves for OEM partners, each customisable in wavelength, tuning range and line width.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded by the people <em>who invented it.</em></h2></div><p data-r>KineoLabs was founded in 2021 to bring to market the low-cost, free-space swept-source cat\'s-eye laser its founders invented. The team has long experience in the swept-laser business and its applications.</p></div>'+
   team()+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Founded</span><p data-r>2021, in Billerica, Massachusetts, where KineoLabs develops and manufactures its products.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>Retinal imaging development is supported by the National Eye Institute under NIH SBIR grant 1R43EY036763-01A1.</p></div>'+
    '<div><span class="lab kick" data-r>Partnering</span><p data-r>From feasibility studies to volume manufacturing, with rapid customisation, prototyping and testing for OEM partners.</p></div>'+
   '</div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>OEM partners, clinicians and process engineers</span>'+
   '<h2 class="big split">Talk to <em>KineoLabs.</em></h2>'+
   '<p class="sub" data-r>Tell us about your application, from wavelength and tuning range to form factor, and we will discuss how KineoLabs\' laser engines and systems could fit it.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email KineoLabs '+ARR+'</a><a class="btn" href="#/systems">See the systems</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>KineoLabs, Inc.<br>5 Federal Street, 2nd Floor<br>Billerica, MA 01821, USA</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Made in the USA</span><p data-r>Developed and manufactured in Massachusetts, from prototype to volume production.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>5 Federal Street, 2nd Floor<br>Billerica, MA 01821, USA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/systems">Systems</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Systems</span>Ophthalmic OCT · Industrial OCT · Spectroscopy · Swept-source laser engines</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 72" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:400;font-size:66px;letter-spacing:-.01em">Kineo<tspan style="font-weight:600">Labs</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 KineoLabs, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",platform:"story",systems:"systems",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"KineoLabs — line-scan swept-source OCT and laser spectroscopy",x:"Home"};
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
/* founders: colour opens from the pointer */
addEventListener("pointerover",function(e){var c=e.target.closest&&e.target.closest(".fdc");if(!c||c.contains(e.relatedTarget))return;var p=c.querySelector(".fdp"),r=p.getBoundingClientRect();
  p.style.setProperty("--mx",((e.clientX-r.left)/r.width*100).toFixed(1)+"%");p.style.setProperty("--my",((e.clientY-r.top)/r.height*100).toFixed(1)+"%")});
