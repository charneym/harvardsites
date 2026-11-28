/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function hist(){var H=[
  ["1996","Set up by Finbarr and Victor Twohig, serving the plastics and electronics industries."],
  ["2005","International manufacturing contracts to supply the aerospace industry."],
  ["2014","A 2 acre site with two 16,000 sq ft factories, then 5 axis machining, driven tool turning and an applications centre."],
  ["2026","Two EXCETEK wire EDM machines join the wire and spark erosion department."]];
  return '<ol class="sg-tl">'+H.map(function(h){return '<li data-r><span class="y">'+esc(h[0])+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function team(){
  return '<div class="mh"><div class="mh-group"><p class="mh-label">Directors</p><ul class="mh-list">'+TEAM.map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div></div>'}
function caps(){var C=[
  ["Design","<span class=\"nw\">From concept</span> <span class=\"nw\">to completion</span>","New product introduction, design for manufacture and reverse engineering by a design team that considers process, tolerance and problems before metal is cut.",'<path d="M10 46L40 16L46 22L16 52H10Z"/><path class="a" d="M34 22L40 28"/><path d="M8 8H24M8 8V24"/>'],
  ["Machining","<span class=\"nw\">Hardest steels</span> <span class=\"nw\">to softest plastics</span>","Precision components on 5 axis machining centres and CNC lathes with driven tools, from one-off prototypes to batch production.",'<rect x="10" y="30" width="36" height="14"/><path d="M28 6V24"/><path class="a" d="M22 24H34V30H22Z"/>'],
  ["Erosion","<span class=\"nw\">Wire and</span> <span class=\"nw\">spark erosion</span>","Wire EDM and spark erosion for hardened tool steels, fine profiles and sharp internal corners in punches, dies and inserts.",'<path d="M28 4V52"/><path class="a" d="M20 22L28 28L36 22M20 34L28 28L36 34"/><rect x="10" y="20" width="36" height="16" fill="none"/>'],
  ["Quality","<span class=\"nw\">Measured in-house,</span> <span class=\"nw\">before it ships</span>","Dedicated quality control personnel and an in-house metrology department, with CMM fixturing made on site.",'<circle cx="28" cy="28" r="18"/><circle cx="28" cy="28" r="7"/><path class="a" d="M28 4V14M28 42V52"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function faq(){var Q=[
  ["Design for manufacture","Before the drawing is final","Work holding and machining strategy considered as part of the product design."],
  ["Machine selection","The right machine tool","Machine tool selection analysis and reports before the project starts."],
  ["Turnkey","Drawing to finished process","Complete solutions, from the product drawing to a proven machining process."],
  ["Programming","Siemens NX and AlphaCAM","CAM support for 2.5, 3 and 5 axis milling and turning, plus post processors."]];
  return '<dl class="drq">'+Q.map(function(q){return '<div data-r><dt class="lab">'+esc(q[0])+'</dt><dd><b>'+esc(q[1])+'</b><span>'+esc(q[2])+'</span></dd></div>'}).join("")+'</dl>'}
function plant(){return '<ul class="pfr pipe np">'+PLANT.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab cpy">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1500" height="868" alt="Four precision machined aerospace parts made by T&amp;T Precision: a curved frame with bracket pads, a pocketed plate with a through window, a long rail with studs, and a stepped bar" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Design and precision engineering<span class="nomob"> · Cork, Ireland · since 1996</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Precision parts,</span></span> <span class="l"><span class="nw">designed and made.</span></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Precision machined components to customer specification, from one-off prototypes to batch production, for aerospace, medical device, food and drug and plastics manufacturers.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/plant">Capabilities '+ARR+'</a><a class="btn" href="#/contact">Talk to us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>One stop shop</span>'+
   '<h2 class="txt" id="mani"><span class="nwp">Design engineers,</span> <span class="nwp">toolmakers and CNC machinists</span> <span class="nwp">under one roof,</span> <span class="nwp">from concept to completion.</span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1996</span><p class="k">founded in Cork by Finbarr and Victor Twohig</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">factories of 16,000 sq ft each on a 2 acre site</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20+</span><p class="k">design engineers, toolmakers, machinists and quality staff</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">On a wire EDM machine</span><h2 class="d3"><span class="nw">A die opening,</span> <span class="nw">cut by sparks.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Hole</span><span>Thread</span><span>Cut</span><span>Slug out</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Drilled for</span> <span class="nw">a start hole.</span></h2><p>The wire needs a way in. A small start hole is spark drilled through the hardened plate, inside the shape to be cut.</p></article>'+
     '<article class="step"><h2><span class="nw">Threaded through</span> <span class="nw">the plate.</span></h2><p>The brass wire is threaded through the hole between the upper and lower guides, then leads in to the profile.</p></article>'+
     '<article class="step"><h2><span class="nw">Cut by sparks,</span> <span class="nw">not by force.</span></h2><p>The wire never touches the steel. Sparks jump the gap under deionised water and erode the profile, so hardened steel cuts as cleanly as soft.</p></article>'+
     '<article class="step"><h2><span class="nw">Slug out,</span> <span class="nw">skimmed to size.</span></h2><p>The slug drops free and a skim pass runs the profile again, taking the opening to its final size and finish.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split"><span class="nw">Designed, machined,</span> <span class="nw">eroded, measured.</span></h2></div><p data-r>A design team and a precision engineering team working on the same job, so the part is designed around how it will be made.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Sectors</span><p class="cr" data-r>'+INDS.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="plant" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Capabilities</span><h2 class="d2 split"><span class="nw">Tooling, fixtures</span> <span class="nw">and parts.</span></h2></div><p data-r>Tooling, jigs, fixtures, gauges, moulds, work holding and robot clamping, alongside machined, eroded and fabricated parts.</p></div>'+
   plant()+
  '</div></section>'+

  '<section class="sec light" id="quality" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications centre</span><h2 class="d2 split"><span class="nw">Machine validation,</span> <span class="nw">off your site.</span></h2></div><p data-r>A fully managed, offsite machine validation service that cuts the risk of cross contamination, reduces downtime and saves floor space for the client.</p></div>'+
   faq()+
  '</div></section>'+

  '<section class="sec dark" id="history" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Thirty years</span> <span class="nw">of precision.</span></h2></div><p data-r>“T&amp;T Precision have been supplying high-end customised work-holding solutions, precision gauging, machining strategies and applications to Stryker for the past 16 years.” Richard Roche, Stryker Ireland</p></div>'+
   hist()+
   team()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Questions about</span> <span class="nw">your next project?</span></h2>'+
   '<p class="sub" data-r>Talk to a member of the design consultancy or precision engineering team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email T&amp;T '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Factory</span><p data-r>T&amp;T Precision Ltd<br>B1 National Engineering Campus<br><span>Waterfall Road, Curraheen, Cork T12 PW52</span></p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></span></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>Founded 1996 by Finbarr and Victor Twohig<br><span>Cork, Ireland</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Factory</span>B1 National Engineering Campus, Waterfall Road, Curraheen, Cork T12 PW52</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/plant">Capabilities</a><br><a class="ul" href="#/quality">Validation</a><br><a class="ul" href="#/history">Company</a></div>'+
   '<div class="c"><span class="lab">Sectors</span>Aerospace, medical devices, food and drug, plastics and moulding</div>'+
  '</div><svg class="bigsvg flogo" viewBox="0 0 1000 70" aria-hidden="true"><text x="500" y="56" text-anchor="middle" style="letter-spacing:.16em">T&amp;T PRECISION · CORK</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 T&amp;T Precision Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",services:"services",plant:"plant",quality:"quality",history:"history",company:"history",capabilities:"plant",applications:"quality",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"T&T Precision — Precision engineering and design, Cork",x:"Home"};
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
