/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function hist(){var H=[
  ["1946","Colpa Precision Engineering is established, with the goal it still keeps: high quality precision machined components."],
  ["1997","Steven Low joins the board. The current management has upgraded the machine tools and management systems ever since."],
  ["2020","A Citizen M32-VIII with robot pick-off, a non-guide-bush Citizen A20 and a Keyence optical measuring machine arrive."],
  ["Today","Fifteen CNC lathes, all with magazine bar feeds, from 12 mm sliding heads to 65 mm twin spindle turning centres."]];
  return '<ol class="sg-tl">'+H.map(function(h){return '<li data-r><span class="y">'+esc(h[0])+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function team(){
  return '<div class="mh"><div class="mh-group"><p class="mh-label">Directors</p><ul class="mh-list">'+TEAM.map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div></div>'}
function caps(){var C=[
  ["Sliding head","<span class=\"nw\">From 12 mm</span> <span class=\"nw\">to 42 mm bar</span>","Citizen and Star sliding head lathes with sub-spindle, C axis and driven tooling turn, drill, tap and mill a part complete.",'<rect x="6" y="20" width="14" height="16"/><path d="M20 24H34V32H20"/><path class="a" d="M34 28H50"/><path d="M40 10V22M36 22H44"/>'],
  ["Fixed head","<span class=\"nw\">Up to 65 mm,</span> <span class=\"nw\">twin spindle</span>","Lynx 220 LSYC and XYZ turning centres with C and Y axes for complete machining and profiling of larger parts.",'<circle cx="28" cy="28" r="18"/><circle cx="28" cy="28" r="7"/><path class="a" d="M28 4V14M28 42V52"/>'],
  ["Milling","<span class=\"nw\">Machining centres</span> <span class=\"nw\">and second ops</span>","XYZ and Hurco vertical machining centres, capstans and high speed tapping machines for small batch and second operation work.",'<rect x="10" y="30" width="36" height="14"/><path d="M28 6V24"/><path class="a" d="M22 24H34V30H22Z"/>'],
  ["Assembly","<span class=\"nw\">Inspected and</span> <span class=\"nw\">assembled in-house</span>","A fully equipped inspection department for in-process and final inspection, and an assembly area for complete units if required.",'<path d="M28 6L47 17V39L28 50L9 39V17Z"/><path class="a" d="M28 18V38"/><circle cx="28" cy="28" r="6"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function faq(){var Q=[
  ["Batches","Tens to tens of thousands","The broad range of machines makes precision machined parts economic at every batch size."],
  ["Deliveries","Kanban and Faxban","Fast turnaround and on-time deliveries, on call-off schedules that suit the customer."],
  ["Quality","ISO 9001","Full ISO 9001 certification, with in-process and final inspection on every job."],
  ["Measurement","Keyence optical","A Keyence optical measuring machine alongside the inspection department’s gauges."]];
  return '<dl class="drq">'+Q.map(function(q){return '<div data-r><dt class="lab">'+esc(q[0])+'</dt><dd><b>'+esc(q[1])+'</b><span>'+esc(q[2])+'</span></dd></div>'}).join("")+'</dl>'}
function plant(){return '<ul class="pfr pipe np">'+PLANT.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab cpy">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="791" height="1267" alt="A precision machined steel sliding assembly on its shaft, with pins, clips and a turned collar, made by Colpa Precision Engineering" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Precision turned parts<span class="nomob"> · Watford, Hertfordshire · since 1946</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Precision components,</span></span> <span class="l"><span class="nw">turned since 1946.</span></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>A long established engineering company with a reputation for keen prices and on-time deliveries, turning and milling high quality precision components in batches from tens to tens of thousands.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/plant">Our plant '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our reputation</span>'+
   '<h2 class="txt" id="mani"><span class="nwp">Keen prices,</span> <span class="nwp">on-time deliveries</span> <span class="nwp">and two-way communication</span> <span class="nwp">with every customer.</span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1946</span><p class="k">established, with the same goal of high quality precision machined components</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">15</span><p class="k">CNC lathes, every one with a magazine bar feed</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">11</span><p class="k">axes on the Citizen M32-VIII, with a B axis and robot pick-off</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">On a sliding head lathe</span><h2 class="d3"><span class="nw">From the bar</span> <span class="nw">to a finished part.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Bar</span><span>Turn</span><span>Drill</span><span>Part off</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Fed from</span> <span class="nw">the magazine.</span></h2><p>Every Colpa lathe has a magazine bar feed. The bar runs through the main spindle and out through the guide bush.</p></article>'+
     '<article class="step"><h2><span class="nw">Turned beside</span> <span class="nw">the guide bush.</span></h2><p>The headstock slides the bar forward while the tool moves in and out, so every cut is taken right next to its support.</p></article>'+
     '<article class="step"><h2><span class="nw">Drilled by</span> <span class="nw">a driven tool.</span></h2><p>Full C axis driven tooling cross drills, taps and mills while the bar is still held, with no second set-up.</p></article>'+
     '<article class="step"><h2><span class="nw">Parted off,</span> <span class="nw">picked off clean.</span></h2><p>The sub-spindle takes the part as it is cut free; on the Citizen M32 and L32 a robot pick-off lifts it out with no damage to the finish.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split"><span class="nw">Turned, milled,</span> <span class="nw">inspected, assembled.</span></h2></div><p data-r>We keep upgrading machine tools and management systems to stay true to our original goal: high quality precision machined components, made to the customer’s specification.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Industries</span><p class="cr" data-r>'+INDS.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="plant" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Plant list</span><h2 class="d2 split"><span class="nw">Sliding heads</span> <span class="nw">from 12 to 42 mm.</span></h2></div><p data-r>Citizen and Star sliding head lathes, twin spindle turning centres and machining centres, all with magazine bar feeds on the lathes.</p></div>'+
   plant()+
  '</div></section>'+

  '<section class="sec light" id="quality" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>How we work</span><h2 class="d2 split"><span class="nw">Fast turnaround,</span> <span class="nw">on-time delivery.</span></h2></div><p data-r>Competitive, cost-effective pricing, two-way communication with our customers, and a constant look for advances in technology.</p></div>'+
   faq()+
  '</div></section>'+

  '<section class="sec dark" id="history" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Eighty years</span> <span class="nw">of precision.</span></h2></div><p data-r>Our components go into medical, optical, aerospace, air-conditioning, food, electronics and telecommunications products, plus many more.</p></div>'+
   hist()+
   team()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Send us your drawing,</span> <span class="nw">we will quote.</span></h2>'+
   '<p class="sub" data-r>From tens to tens of thousands of parts, on Kanban or Faxban deliveries.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Colpa '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Factory</span><p data-r>Colpa Precision Engineering Ltd<br>Unit 7 Paramount Industrial Estate<br><span>Sandown Road, Watford WD24 7XG</span></p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></span></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>Registered in England, No. 00410428<br><span>ISO 9001 certified</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Factory</span>Unit 7 Paramount Industrial Estate, Sandown Road, Watford WD24 7XG</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/plant">Plant list</a><br><a class="ul" href="#/quality">How we work</a><br><a class="ul" href="#/history">Company</a></div>'+
   '<div class="c"><span class="lab">Approvals</span>ISO 9001 certified, Kanban and Faxban deliveries</div>'+
  '</div><svg class="bigsvg flogo" viewBox="0 0 1000 70" aria-hidden="true"><text x="500" y="56" text-anchor="middle" style="letter-spacing:.16em">COLPA PRECISION · WATFORD</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Colpa Precision Engineering Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",services:"services",plant:"plant",quality:"quality",history:"history",company:"history",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Colpa Precision Engineering — Precision machined components, Watford",x:"Home"};
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
