/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">See the range '+ARR+'</a></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function hist(){return '<ol class="catl">'+HIST.map(function(h){
  return '<li><span class="yr">'+esc(h[0])+'</span><h3>'+esc(h[1])+'</h3><p>'+esc(h[2])+'</p></li>'}).join("")+'</ol>'}
/* the six pumping principles (charlesausten.com > Technologies), each drawn as a small section */
function caps(){var C=[
  ["Patented","Rotary diaphragm","An eccentric bearing on the drive shaft revolves inside a flexible diaphragm, squeezing liquid through the pump. No valves, non-clogging.",'<circle cx="28" cy="28" r="18"/><circle class="a" cx="32" cy="28" r="9"/><circle class="f" cx="32" cy="28" r="2.2"/>'],
  ["Diaphragm","Diaphragm","The pumping chamber is totally sealed, with no sliding seal between moving parts; vacuum and pressure come from the flexing diaphragm.",'<path d="M10 22H46V36H10Z"/><path class="a" d="M10 36Q28 46 46 36"/><path d="M28 41V52"/><circle class="f" cx="28" cy="41" r="2.2"/>'],
  ["Linear","Linear diaphragm","A magnetically operated diaphragm flexes at one or both ends of the connecting rod, keeping wear and power consumption to a minimum.",'<path d="M8 20V36M48 20V36"/><path class="a" d="M8 28H48"/><path d="M20 22H36V34H20Z"/><circle class="f" cx="28" cy="28" r="2.2"/>'],
  ["Rocking piston","Rocking piston","The higher performance of a piston pump with the simplicity of a diaphragm pump, in a small, economic unit built for pressure.",'<path d="M16 12H40V24H16Z"/><path class="a" d="M28 24L22 44"/><circle cx="28" cy="44" r="8"/><circle class="f" cx="22" cy="44" r="2.2"/>'],
  ["Patented","GyRok™","A conical elastomer diaphragm displaced by legs around a nutating drive: whisper quiet, self-priming, tolerant of dry running, any orientation.",'<path d="M10 40L28 14L46 40Z"/><path class="a" d="M16 40Q28 30 40 40"/><circle class="f" cx="28" cy="14" r="2.2"/>'],
  ["Armature","Vibrating armature","A minimum-component design that is exceptionally economical and quiet, made for household fish tanks and other everyday duty.",'<path d="M12 18H44V38H12Z"/><path class="a" d="M18 28L22 22L26 34L30 22L34 34L38 28"/><circle class="f" cx="18" cy="28" r="2.2"/>']];
  return '<div class="caps six">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>OEM pump manufacturer<span class="nomob"> · Byfleet, Surrey</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Diaphragm and</span> <span class="l">vacuum pumps,</span> <span class="l"><em>built in Britain.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Charles Austen Pumps designs and builds OEM pumps for air, gas and liquids, for IVD analysers, autoclaves and medical suction, drink dispense and environmental equipment, with everything from tool making to assembly in house.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Explore the technology '+ARR+'</a><a class="btn" href="#/contact">Make an enquiry</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Family owned since 1954</span>'+
   '<h2 class="txt" id="mani">Our founder is widely believed to have built the first compact diaphragm pump, from left-over army boot leather. <em>We have refined the principle ever since.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1919</span><p class="k">the year Charles Austen built his first compact diaphragm pump</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50+</span><p class="k">years supplying pumps to the medical industry</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">24 h</span><p class="k">dispatch for stock items, from five warehouse buildings on site</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a diaphragm pump works</span><h2 class="d3"><span class="nw">One sealed</span> <span class="nw">chamber, <em>flexing.</em></span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Intake</span><span>Exhaust</span><span>Sealed</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Drawn in.</h2><p>An eccentric on the motor shaft pulls the connecting rod down. The diaphragm flexes away from the head, the inlet valve opens and air or gas is drawn into the chamber.</p></article>'+
     '<article class="step"><h2>Pushed out.</h2><p>On the up-stroke the diaphragm flexes back, the inlet closes and the outlet valve opens: vacuum on one port, pressure on the other, from the same unit.</p></article>'+
     '<article class="step"><h2>Sealed throughout.</h2><p>The chamber is totally sealed, with no sliding seal between moving parts, so pumping stays contamination free, on continuous duty with long life and low maintenance.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">Six principles,</span> <em><span class="nw">invented in house.</span></em></h2></div><p data-r>Charles Austen Pumps invents all of its own pump technology and invests in R&amp;D to design, develop and prove each new product, so our engineers know every element of the pumps we make.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pumps" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pumps</span><h2 class="d2 split"><span class="nw">Off the shelf,</span> <em><span class="nw">or built for you.</span></em></h2></div><p data-r>Our ranges cover vacuum, pressure and liquid duty for five divisions. When no standard unit fits, we design and manufacture a bespoke pump one to one with your team.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec dark" id="capabilities" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Capabilities</span><h2 class="d2 split"><span class="nw">From the first tool</span> <em><span class="nw">to the serial number.</span></em></h2></div><p data-r>A vertically integrated designer and manufacturer of specialist pumps, with every process covered by ISO 9001:2015, so we control the quality and reliability of each pump from start to finish.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>In house</span><dl>'+
    '<div data-r><dt class="lab">Product development</dt><dd>Client-focused design projects with our own engineers and R&amp;D</dd></div>'+
    '<div data-r><dt class="lab">Tooling and machining</dt><dd>CNC machining and EDM for fast, viable tooling</dd></div>'+
    '<div data-r><dt class="lab">Moulding</dt><dd>Injection moulding with twin-shot and special materials</dd></div>'+
    '<div data-r><dt class="lab">Assembly and test</dt><dd>Every pump physically tested, logged and serial numbered</dd></div>'+
   '</dl></div>'+
   '<div class="bk"><span class="lab kick" data-r>On site</span><p class="cr" data-r><span>2 UK manufacturing plants</span><span>3 assembly facilities</span><span>5 warehouse buildings</span><span>ISO 9001:2015</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="heritage" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Heritage</span><h2 class="d2 split"><span class="nw">A century of pumps</span> <em><span class="nw">where it mattered.</span></em></h2></div><p data-r>From the laboratory to Everest, the Apollo programme and the first IVF birth, Charles Austen pumps have been specified for work that could not fail. A few moments from our history.</p></div>'+
   hist()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Products, projects</span> <em><span class="nw">and shows.</span></em></h2></div><p data-r>New products, completed projects and where to meet us; each entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us what</span> <em><span class="nw">it needs to pump.</span></em></h2>'+
   '<p class="sub" data-r>Speak to our engineers about an OEM pump, a bespoke design or a range enquiry, and we will be in touch as soon as possible.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email an enquiry '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>UK and Europe</span><p data-r>Charles Austen Pumps Ltd<br>100 Royston Road<br>Byfleet, Surrey KT14 7NY</p></div>'+
    '<div><span class="lab" data-r>Enquiries</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>United States</span><p data-r>Blue Diamond Pumps Inc<br>5047 B U Bowman Drive<br>Buford, Georgia 30518</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Charles Austen Pumps Ltd<br>100 Royston Road, Byfleet, Surrey KT14 7NY</div>'+
   '<div class="c"><span class="lab">Enquiries</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pumps">Pumps</a><br><a class="ul" href="#/capabilities">Capabilities</a><br><a class="ul" href="#/heritage">Heritage</a></div>'+
   '<div class="c"><span class="lab">Divisions</span>Original equipment · Medical<br>Environmental · Aquatic and hydroponic<br>HVACR (BLUEDIAMOND®)</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Jost\',Futura,sans-serif;font-weight:500;font-size:60px;letter-spacing:.12em">CHARLES AUSTEN</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Charles Austen Pumps Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",pumps:"pumps",capabilities:"capabilities",heritage:"heritage",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Charles Austen Pumps — Diaphragm and vacuum pumps, designed and built in Britain",x:"Home"};
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
