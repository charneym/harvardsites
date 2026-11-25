/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+''+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(C){return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
var TECH=[
  ["Epitaxial growth","Single-crystalline thin-film stacks of GaAs, AlAs, InAs and their alloys, grown on GaAs wafers with long expertise in molecular beam epitaxy and sputter coating.",'<path d="M6 44h44"/><path d="M6 37h44M6 30h44"/><path class="a" d="M6 23h44"/><path d="M14 14l4-6M28 14l4-6M42 14l4-6"/>'],
  ["Low-temperature growth","LT-GaAs and LT-InGaAs films for devices that need a fast time response, about a picosecond: saturable absorbers, photoconductive antennas and optical detectors.",'<path d="M6 40h8c4 0 5-28 9-28s4 28 8 28h19"/><path class="a" d="M23 12v32"/><circle class="f" cx="23" cy="12" r="2.6"/>'],
  ["Processing to systems","Wafer processing, metal structures, device packaging and testing in-house, and on that base complete systems such as terahertz spectrometers and picosecond microchip lasers.",'<rect x="8" y="16" width="40" height="26"/><path class="a" d="M16 29h10l4-6 4 12 4-6h4"/><path d="M14 42v6M42 42v6"/>']];
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Semiconductor optoelectronics<span class="nomob"> · Jena, Germany</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Ultrafast devices,</span><span class="l"><em>grown layer</em></span><span class="l"><em>by layer.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>BATOP grows GaAs, AlAs and InAs thin-film stacks on GaAs wafers and turns them into saturable absorbers for pulsed lasers, photoconductive antennas for terahertz and complete systems, with processing, packaging and test in-house.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How a SAM works '+ARR+'</a><a class="btn" href="#/products">Our products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About BATOP</span>'+
   '<h2 class="txt" id="mani">We grow semiconductor nonlinear optical devices, from the first epitaxial layer to the tested, packaged part. <em>Much of our work is research and development, done with our customers to fit their needs.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2003</span><p class="k">Founded in Jena as a privately held company; in its own building since March 2017</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~1 ps</span><p class="k">Response time of devices from our low-temperature epitaxial growth</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.8–3 µm</span><p class="k">The laser wavelengths our saturable absorber mirrors cover</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a SAM works</span><h2 class="d3">A mirror that <em>switches with light.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Grow</span><span>Saturate</span><span>Pulse</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Grown on a GaAs wafer.</h2><p>A saturable absorber mirror is a Bragg mirror of AlAs/GaAs quarter-wave layers with a thin low-temperature GaAs absorber in front of it. Every one of its single-crystalline layers is grown on a GaAs wafer.</p></article>'+
     '<article class="step"><h2>An intense pulse bleaches the absorber.</h2><p>Weak light lifts electrons into the conduction band and is absorbed. Under a strong pulse the absorber saturates and turns transparent, so the mirror’s reflectance rises with pulse energy. The electrons relax again within picoseconds.</p></article>'+
     '<article class="step"><h2>The laser locks into short pulses.</h2><p>Inside a diode-pumped solid-state or fibre laser, the SAM makes it self-starting and passively mode-locked, with a very stable pulse repetition rate. It can also Q-switch a microchip laser.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">From thin film <em>to finished device.</em></h2></div><p data-r>We grow thin-film stacks of GaAs, AlAs and InAs on GaAs wafers for optoelectronic devices, then process the wafers, package the devices and test them, all under one roof in Jena.</p></div>'+
   caps(TECH)+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Devices for pulsed lasers <em>and terahertz.</em></h2></div><p data-r>Every product starts as a thin-film stack we grow ourselves. Many come mounted, packaged or fibre-coupled, ready to build into your setup.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people <em>in Jena.</em></h2></div><p data-r>BATOP grew up under the roof of the Technology and Innovation Park Jena. Since March 2017 it has worked in its own building, with more space for production and development.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Sales</span><p class="cr" data-r>Direct to customers in every country, and through distributors in China, India, Japan, Korea, Singapore, Taiwan and the USA.</p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Let’s fit a device <em>to your laser.</em></h2>'+
   '<p class="sub" data-r>Ask for a quotation, a custom thin-film design or advice on the right absorber. We work with our customers to best fit their needs.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:info@batop.de?subject=Request%20for%20Quotation">Request a quotation '+ARR+'</a><a class="btn" href="#/products">See our products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>BATOP GmbH<br>Stockholmer Str. 14<br>07747 Jena, Germany</p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+4936416340090">+49 (0)3641 634009 0</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@batop.de</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Visit</span>Stockholmer Str. 14<br>07747 Jena, Germany</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@batop.de</a><br><a class="ul" href="tel:+4936416340090">+49 (0)3641 634009 0</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/contact">Contact</a></div>'+
   '<div class="c"><span class="lab">Since</span>2003, in Jena<br>BATOP GmbH</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="62" text-anchor="middle" style="font-family:\'Cabin\',sans-serif;font-weight:500;font-size:80px">BATOP</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 BATOP GmbH</span><span class="lab">Site concept</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",products:"products",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"BATOP GmbH — saturable absorbers, terahertz antennas and picosecond lasers, Jena",x:"Home"};
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
