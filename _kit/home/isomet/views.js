/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+PLAT.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function devRows(){return '<ul class="pfr path">'+DEVICES.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' datasheet on isomet.com">'+(/\.pdf$/.test(c[3])?"Datasheet":"Details")+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function elecGrid(){return '<div class="egrid">'+ELEC.map(function(e){return '<div class="ecard" data-r><span class="eln" aria-hidden="true"></span><h3>'+esc(e[0])+'</h3><p>'+esc(e[1])+'</p></div>'}).join("")+'</div>'}
function appTable(){return '<div class="atab" role="table" aria-label="Applications"><div class="arow ahead" role="row"><span class="lab" role="columnheader">Application</span><span class="lab" role="columnheader">Wavelength</span><span class="lab" role="columnheader">Example devices</span></div>'+
  APPS.map(function(a){return '<div class="arow" role="row"><span class="an" role="cell">'+esc(a[0])+'</span><span class="aw" role="cell"><i class="lab">Wavelength</i>'+esc(a[1])+'</span><span class="ad" role="cell"><i class="lab">Devices</i>'+esc(a[2])+'</span></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Acousto-optics since 1956<span class="nomob"> · Manassas, Virginia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Light, steered</span> <span class="l">by <em>sound.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Isomet designs, develops and produces acousto-optic devices, RF electronics and optical sub-systems, for basic research establishments and global OEM system manufacturers.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/acousto-optics">Our devices '+ARR+'</a><a class="btn" href="#/technology">How AO works</a></div></div>'+
   '<span class="lab cap">Acousto-optic modulator · render</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Isomet Corporation</span>'+
   '<h2 class="txt" id="mani">Isomet was one of the first to offer commercial AO modulators into the laser market. <b class="w0">Its devices run inside OEM systems worldwide, and in the research of 2001 Nobel laureate Wolfgang Ketterle.</b></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1956</span><span class="k">The year Isomet began, growing and processing exotic crystal materials</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">µW–kW</span><span class="k">Optical powers in systems built on Isomet devices, from a few microwatts to several kilowatts peak</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">UV–IR</span><span class="k">From the near ultraviolet to the far infrared, across engraving, inspection, spectroscopy and quantum</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Sound in a crystal, <em>steering light.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Transducer</span><span>Grating</span><span>Bragg</span><span>Control</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The transducer.</h2><p>A piezo-electric transducer is bonded to one face of the crystal. An RF drive signal applied to it launches a travelling acoustic wave through the crystal.</p></article>'+
     '<article class="step"><h2>The grating.</h2><p>By the photo-elastic effect, the acoustic column makes a periodic change in the refractive index, much like the slits of a diffraction grating.</p></article>'+
     '<article class="step"><h2>The Bragg angle.</h2><p>Laser light enters at a specific angle over a defined interaction length, so a high proportion of it is diffracted into a single output order.</p></article>'+
     '<article class="step"><h2>The control.</h2><p>The RF frequency sets the angle of the diffracted beam and the RF power sets its intensity: the basic controls of every AO modulator and deflector.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="devices" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Acousto-optics</span><h2 class="d2 split">Novel devices, <em>several patents.</em></h2></div><p data-r>Isomet’s engineers bring broad experience in acousto-optics, electronics, opto-mechanical design and applied laser technology. Contemporary designs include these.</p></div>'+
   devRows()+
  '</div></section>'+

  '<section class="sec dark" id="electronics" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Electronics</span><h2 class="d2 split">The drive behind <em>every device.</em></h2></div><p data-r>A comprehensive range of frequency sources, RF drivers, power amplifiers and control electronics, from simple fixed-frequency AOM drivers to complex microcontroller-based high-speed digital synthesizers.</p></div>'+
   elecGrid()+
  '</div></section>'+

  '<section class="sec dark2" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">From engraving <em>to quantum.</em></h2></div><p data-r>Systems incorporating Isomet AO devices span the near UV to the far IR, at optical powers from a few microwatts to several kilowatts peak.</p></div>'+
   appTable()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Engineers, OEMs and laboratories</span>'+
   '<h2 class="big split"><span class="nw">Custom designs,</span> <em class="nw">on request.</em></h2>'+
   '<p class="sub" data-r>Write to Isomet about a standard device, a driver, or a design of your own. Main facilities in Manassas, Virginia and Cwmbran, Wales, with representatives worldwide.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Americas · Manassas</span><p data-r><span class="bl">10342 Battleview Parkway</span><span class="bl">Manassas, VA 20109</span></p><p data-r><a class="ul" href="tel:+17033218301">+1 703 321 8301</a></p></div>'+
    '<div><span class="lab" data-r>Europe · Cwmbran</span><p data-r><span class="bl">18 John Baker Close, Llantarnam Park</span><span class="bl">Cwmbran NP44 3AX, Wales</span></p><p data-r><a class="ul" href="mailto:'+MAILUK+'">'+MAILUK+'</a></p></div>'+
    '<div><span class="lab" data-r>Meet us</span><p data-r><span class="bl">Photonics West 2027</span><span class="bl">Booth 1852, San Francisco</span><span class="bl">February 2–4</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Manassas</span>10342 Battleview Parkway<br>Manassas, VA 20109</div>'+
   '<div class="c"><span class="lab">Cwmbran</span>18 John Baker Close<br>Cwmbran NP44 3AX</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/acousto-optics">Acousto-optics</a><br><a class="ul" href="#/electronics">Electronics</a><br><a class="ul" href="#/applications">Applications</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+MAILUK+'">'+MAILUK+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:500;font-size:58px;letter-spacing:.02em">Isomet</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Isomet Corporation</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story","acousto-optics":"devices",electronics:"electronics",applications:"applications",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Isomet — acousto-optic modulators, deflectors and RF drivers since 1956",x:"Home"};
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
