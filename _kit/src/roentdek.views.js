/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function dets(){return '<div class="rdk-dets">'+DETS.map(function(d){
  return '<article class="rdk-det"><div class="rdk-ph" data-r><img src="'+d.img+'" alt="RoentDek '+esc(d.name.toLowerCase())+' ('+esc(d.tag)+')" width="'+d.w+'" height="'+d.h+'" loading="lazy" decoding="async"></div>'+
   '<span class="lab rdk-tg">'+esc(d.tag)+'</span><h3>'+esc(d.name)+'</h3><p class="rdk-sub">'+esc(d.sub)+'</p><ul>'+d.li.map(function(l){return '<li>'+esc(l)+'</li>'}).join("")+'</ul></article>'}).join("")+'</div>'}
function moreRows(){return '<ul class="pfr rdk-more">'+MORE.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><div class="pgm"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[2])+'</span></div><p>'+esc(c[3])+'</p></li>'}).join("")+'</ul>'}
function spec(){return '<div class="rdk-spec">'+SPEC.map(function(c){return '<div class="rdk-sp"><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function caps(){return '<div class="caps rdk-caps">'+ELEC.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[4]+'</svg><span class="lab">'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function team(){
  return '<div class="mh"><div class="mh-group"><p class="mh-label">Managing directors</p><ul class="mh-list">'+TEAM.map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum"></span><span></span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>The detector factory<span class="nomob"> · Kelkheim, since 1990</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The time and place</span><span class="l">of every single</span><span class="l"><em>particle.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>RoentDek builds delay-line detectors that record both the time of flight and the position of impact of individual particles and photons, with the electronics and software to read them out.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/detectors">The detectors</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap rdk-mani">'+
   '<div class="mani-in"><span class="lab kick" data-r>Since 1990</span>'+
   '<h2 class="txt" id="mani">Founded by a team of scientists from Goethe University Frankfurt, RoentDek develops time- and position-sensitive delay-line detectors <em>for the leading edge of research, at institutions all over the world.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">17 µm</span><p class="k">Best spatial resolution achieved, RMS</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">21 ps</span><p class="k">Best temporal resolution achieved, RMS</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">150 mm</span><p class="k">Largest active diameter</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">One particle, <em>time and place.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Impact</span><span>Signals</span><span>Readout</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A particle strikes the plates.</h2><p>An ion, electron or photon hits the microchannel plates (MCPs). The impact is amplified into a cloud of electrons, which lands on the delay-line anode behind them.</p></article>'+
     '<article class="step"><h2>Two signals per layer.</h2><p>The charge couples into the anode’s wound wires and runs as a pulse to both ends of each layer: one layer for x, one for y.</p></article>'+
     '<article class="step"><h2>Time and position, at once.</h2><p>Fast electronics time all four ends. The difference within a layer gives the position of impact, the sum gives the time of flight. The three-layer HEX anode adds multi-hit capability with virtually zero dead time.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="detectors" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Detectors</span><h2 class="d2 split">Imaging and timing, <em>particle by particle.</em></h2></div><p data-r>Delay-line detectors combine microchannel plates with delay-line anodes to measure the time of flight and position of impact of each particle with high precision. MCP and phosphor screen detectors cover pure timing and imaging.</p></div>'+
   dets()+
   '<span class="lab sub-l rdk-also" data-r>Also available</span>'+
   moreRows()+
  '</div></section>'+

  '<section class="sec dark2" id="spectroscopy" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Momentum spectroscopy</span><h2 class="d2 split">Complete COLTRIMS <em>reaction microscopes.</em></h2></div><p data-r>Cold Target Recoil Ion Momentum Spectroscopy reconstructs the three-dimensional momenta of particles to show the correlated dynamics of ionisation. RoentDek builds turnkey systems, with training and support, as well as VMI solutions.</p></div>'+
   '<div class="rdk-sys"><figure class="rdk-fig" data-r><img src="p-coltrims.webp" alt="A complete COLTRIMS system built by RoentDek" width="640" height="480" loading="lazy" decoding="async"></figure>'+spec()+'</div>'+
   '<div class="bk"><span class="lab kick" data-r>Complete systems for</span><p class="cr" data-r>'+SYSTEMS.map(function(n){return '<span>'+esc(n)+'</span>'}).join("")+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="electronics" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Electronics and software</span><h2 class="d2 split">The full readout, <em>built in-house.</em></h2></div><p data-r>Data acquisition based on TDCs or digitizers, amplifiers and CFDs, logic modules and high-voltage sources. Every device is built by RoentDek, which keeps service fast and repairs low in cost.</p></div>'+
   caps()+
   '<div class="rdk-sw"><span class="lab kick" data-r>Software</span><p data-r><b>CoboldPC</b> for data acquisition and analysis, with individual support for a quick start and a fast way to scientific results. Examples for LabView, Matlab and Python read the TDCs and ADCs directly.</p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">Physicists, <em>building detectors since 1990.</em></h2></div><p data-r>RoentDek was founded in 1990 by scientists from Goethe University Frankfurt. RoentDek Handels GmbH is based in Kelkheim (Taunus), near Frankfurt.</p></div>'+
   '<div class="rdk-co">'+team()+
   '<div class="rdk-news"><span class="lab kick" data-r>Latest</span>'+news()+'</div></div>'+
   '<div class="bk"><span class="lab kick" data-r>Trusted by</span><p class="cr" data-r>'+CLIENTS.map(function(n){return '<span>'+esc(n)+'</span>'}).join("")+'</p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Let’s <em>talk.</em></h2>'+
   '<p class="sub" data-r>Tell us about your experiment, and we’ll help you find the detector, electronics and software that fit it. Technical questions by email, please: there is no technical support by phone.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to RoentDek '+ARR+'</a><a class="btn" href="#/detectors">See the detectors</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>RoentDek Handels GmbH<br>Im Vogelshaag 8<br>65779 Kelkheim (Taunus), Germany</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@roentdek.com</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+4961749356095">+49 6174 9356095</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Im Vogelshaag 8<br>65779 Kelkheim (Taunus), Germany</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@roentdek.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/detectors">Detectors</a><br><a class="ul" href="#/spectroscopy">Spectroscopy</a><br><a class="ul" href="#/electronics">Electronics</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Register</span>Amtsgericht Königstein, HRB 3300</div>'+
  '</div><div class="bigsvg rdk-bw" aria-hidden="true"><img src="wordmark.png" alt="" width="1600" height="195"></div>'+
  '<div class="legal"><span class="lab">© 2026 RoentDek Handels GmbH</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",detectors:"detectors",spectroscopy:"spectroscopy",electronics:"electronics",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"RoentDek — delay-line, MCP and TOF detectors",x:"Home"};
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
