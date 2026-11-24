/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(C){return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
var TECH=[
  ["Ultra-low loss","TriPleX® waveguides have the lowest propagation losses reported in silicon nitride, from 0.1 dB/cm down to 0.1 dB/m.",'<path d="M4 36h48"/><path class="a" d="M4 22h48"/><circle class="f" cx="28" cy="22" r="2.6"/>'],
  ["405 to 2350 nm","Broad spectral transparency: one silicon nitride platform from the visible to the infrared, in cross-sections from single and double stripes to buried thick-nitride waveguides.",'<path d="M6 34c5-16 9-16 13 0s8 16 13 0 8-16 13 0"/><path class="a" d="M6 46h44"/>'],
  ["Engineered for integration","A patented spot size converter tapers a low-contrast mode for optimal fibre coupling into a high-contrast mode for small bending radii, so TriPleX® couples to fibres, gratings, mirrors and other PICs.",'<path d="M4 28h14"/><path class="a" d="M18 21l18 5v4l-18 5z"/><path d="M36 28h16"/>']];
var APPS=[
  ["Tunable lasers","Hybrid integration of indium phosphide gain sections with a tunable TriPleX® external cavity. In the European LOLIPOP project the team added external cavity lasers at four new wavelengths.",'<rect x="6" y="22" width="14" height="12"/><path class="a" d="M20 28h30"/><circle cx="36" cy="16" r="7"/>'],
  ["Biosensors, on Earth and beyond","The Life Marker Chip, first developed for ESA to detect signs of life on Mars, is used today for biomedical diagnostics by partner SurfiX. A TriPleX® chip is now headed for an in-orbit demonstration on a TU Delft satellite.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M10 28c6-8 30-8 36 0"/><circle class="f" cx="28" cy="28" r="3"/>'],
  ["Beamforming and phased arrays","Integrated optical beamforming and filtering modules and optical phased arrays, with on-chip actuators for solid-state tuning in reconfigurable circuits.",'<path d="M8 46V22M18 46V16M28 46V12M38 46V16M48 46V22"/><path class="a" d="M8 22L28 6l20 16"/>']];
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>TriPleX® photonics<span class="nomob"> · custom MEMS · Enschede</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Customized</span><span class="l">microsystems,</span><span class="l"><em>vertically integrated.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>LioniX International designs, fabricates and assembles photonic integrated circuits and MEMS, from the first design to a finished module, and scales production as your volumes grow.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How TriPleX® works '+ARR+'</a><a class="btn" href="#/services">Our services</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About LioniX</span>'+
   '<h2 class="txt" id="mani">We have pioneered silicon nitride in integrated photonics since 2001. <em>We work across every stage, from design to the delivery of a finished module.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.1 dB/m</span><p class="k">The lowest propagation loss reported in silicon nitride, in TriPleX® waveguides</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2001</span><p class="k">Driving photonic integrated circuits and MEMS since 2001, as LioniX International since 2016</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~60</span><p class="k">Engineers, project leads and professionals in Enschede, the Netherlands</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How TriPleX® works</span><h2 class="d3">Light, guided <em>on a chip.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Couple</span><span>Guide</span><span>Tune</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Light enters from the fibre.</h2><p>A patented spot size converter tapers the wide, low-contrast mode that suits the fibre into the tight, high-contrast mode of the waveguide, so the light couples in cleanly.</p></article>'+
     '<article class="step"><h2>Silicon nitride carries it, with almost no loss.</h2><p>TriPleX® waveguides route the light through splitters, interferometers and ring resonators, with losses from 0.1 dB/cm down to 0.1 dB/m, at wavelengths from 405 to 2350 nm.</p></article>'+
     '<article class="step"><h2>Actuators on the chip tune it.</h2><p>Careful control of light confinement lets on-chip actuators tune the rings and the interferometer arms, for solid-state tuning, filtering and modulation in reconfigurable circuits.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">TriPleX®, our silicon nitride <em>waveguide platform.</em></h2></div><p data-r>Our photonic integrated circuits are built on TriPleX®, our proprietary waveguide technology. Its performance also strengthens our other core capabilities in micro- and optofluidics and MEMS.</p></div>'+
   caps(TECH)+
  '</div></section>'+

  '<section class="sec dark2" id="services" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split">Design to delivery, <em>at any volume.</em></h2></div><p data-r>We build a project team with you at the centre and support the full life-cycle of your product: concept, architecture, production, assembly, test, supply and service.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">Chips that drive <em>your business.</em></h2></div><p data-r>We serve defence, artificial intelligence, space, telecom and datacom, life science, metrology and instrumentation, with applications from AR/VR and quantum photonics to optical coherence tomography and microwave photonics.</p></div>'+
   caps(APPS)+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people you <em>will meet.</em></h2></div><p data-r>Around 60 engineers, project leads and professionals make up the LioniX International team. These are the people you are most likely to meet at events and presentations.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>LioniX.</em></h2></div><p data-r>Projects, milestones and people, from European research consortia to a TriPleX® chip for an in-orbit demonstration.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Let’s talk about <em>your project.</em></h2>'+
   '<p class="sub" data-r>Whether you have specific questions or want to discuss the options more generally, get in touch with LioniX International.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to LioniX '+ARR+'</a><a class="btn" href="#/services">See our services</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Visiting address</span><p data-r>LioniX International BV<br>Hengelosestraat 527<br>7521 AG Enschede, the Netherlands</p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+31532030053">+31 53 20 30 053</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@lionix-int.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Visit</span>Hengelosestraat 527<br>7521 AG Enschede, NL</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@lionix-int.com</a><br><a class="ul" href="tel:+31532030053">+31 53 20 30 053</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Since</span>2001, in Enschede<br>LioniX International BV</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="62" text-anchor="middle" style="font-family:\'Barlow Semi Condensed\',sans-serif;font-weight:600;font-size:78px">LioniX International</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 LioniX International BV</span><span class="lab">Site concept</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",services:"services",applications:"applications",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"LioniX International — TriPleX® photonic integrated circuits and custom MEMS",x:"Home"};
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
