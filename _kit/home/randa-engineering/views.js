/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function hist(){var H=[
  ["1985","R & A Engineering is established as a family partnership, making precision machined components."],
  ["2005","After twenty years as a partnership, R & A Engineering becomes a limited company."],
  ["2014","The move to Farmbrough Close, Aylesbury: a 10,000 square foot facility with room to grow."],
  ["2025","Demand brings a second Citizen Miyano ABX, and NQA reissues the ISO 9001:2015 certificate to 2028."]];
  return '<ol class="sg-tl">'+H.map(function(h){return '<li data-r><span class="y">'+esc(h[0])+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function team(){
  return '<div class="mh"><div class="mh-group"><p class="mh-label">Directors</p><ul class="mh-list">'+TEAM.map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* the four kinds of work (randaeng.co.uk > Services) */
function caps(){var C=[
  ["CNC milling","<span class=\"nw\">3, 4 and 5 axis,</span> <span class=\"nw\">up to one metre</span>","Milled components in plastics, aluminium, mild and stainless steels and Inconel, from prototypes and small batches to production runs.",'<rect x="10" y="30" width="36" height="14"/><path d="M28 6V24"/><path class="a" d="M22 24H34V30H22Z"/>'],
  ["CNC turning","<span class=\"nw\">Up to 3 inch bar,</span> <span class=\"nw\">10 inch billet</span>","Every lathe is fitted with an automatic bar feed. Driven tooling up to 12k rpm and lights-out machining make long runs efficient.",'<circle cx="28" cy="28" r="18"/><circle cx="28" cy="28" r="7"/><path class="a" d="M28 4V14M28 42V52"/>'],
  ["Multi-axis","<span class=\"nw\">Robot fed 4th</span> <span class=\"nw\">and 5th axis</span>","Complex components machined with great precision in fewer operations, for a more efficient and competitive service.",'<path d="M28 6L47 17V39L28 50L9 39V17Z"/><path class="a" d="M28 18V38"/><circle cx="28" cy="28" r="6"/>'],
  ["Sliding head","<span class=\"nw\">Intricate parts,</span> <span class=\"nw\">2 to 36 mm</span>","High batch production runs on a fast turnaround, machining simultaneously to cut cycle times.",'<rect x="6" y="20" width="14" height="16"/><path d="M20 24H34V32H20"/><path class="a" d="M34 28H50"/><path d="M40 10V22M36 22H44"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* quality and inspection (randaeng.co.uk > Quality) */
function faq(){var Q=[
  ["Approval","BS EN ISO 9001:2015","Accredited, audited to NQA / UKAS standards, with a quality policy built on a process approach and risk-based thinking."],
  ["CMM","Aberlink Axiom Too","CNC co-ordinate measurement, with an Aberlink Extol 370 on the shop floor since 2022."],
  ["Optical","Keyence IM-7500","Image dimension measurement, alongside a Mitutoyo PJ-A3010F-100 shadow graph and surface tester."],
  ["Traceability","Real-time tracking","Each stage of the process is tracked and shared with the customer, for on-time delivery with full traceability."]];
  return '<dl class="drq">'+Q.map(function(q){return '<div data-r><dt class="lab">'+esc(q[0])+'</dt><dd><b>'+esc(q[1])+'</b><span>'+esc(q[2])+'</span></dd></div>'}).join("")+'</dl>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="716" height="648" alt="A precision machined waveguide part with a round flange and a rectangular mounting plate, yellow passivated, made by R &amp; A Engineering" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Subcontract CNC machining<span class="nomob"> · Aylesbury, Buckinghamshire · since 1985</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Precision machined</span></span> <span class="l"><span class="nw">in Aylesbury.</span></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>A family-run subcontract machining company since 1985, making high-quality precision components by CNC milling and CNC turning in a 10,000 square foot facility in Buckinghamshire.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/services">Our services '+ARR+'</a><a class="btn" href="#/contact">Send an enquiry</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Family run since 1985</span>'+
   '<h2 class="txt" id="mani"><span class="nwp">A motivated workforce</span> <span class="nwp">supports every stage</span> <span class="nwp">of component manufacture,</span> <span class="nwp">and trains the next generation</span> <span class="nwp">of engineers.</span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">40</span><p class="k">years of precision machining, as a partnership from 1985 and a limited company since 2005</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10,000</span><p class="k">square feet of manufacturing at Farmbrough Close, Aylesbury, since 2014</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">24 h</span><p class="k">production on the robot-loaded Doosan DNM 5700 S machining centre</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">On the sliding head lathe</span><h2 class="d3"><span class="nw">From the bar</span> <span class="nw">to a finished part.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Bar</span><span>Turn</span><span>Drill</span><span>Part off</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Fed from</span> <span class="nw">the bar.</span></h2><p>The automatic bar feed pushes the bar through the main spindle to the guide bush. The Citizen L32 takes bar up to 38 mm in diameter.</p></article>'+
     '<article class="step"><h2><span class="nw">Turned beside</span> <span class="nw">the guide bush.</span></h2><p>The headstock slides the bar forward while the tool moves in and out, so every cut is taken next to its support: intricate parts from 2 to 36 mm diameter.</p></article>'+
     '<article class="step"><h2><span class="nw">Drilled by</span> <span class="nw">a driven tool.</span></h2><p>Driven tooling cross drills and mills while the bar is still held, machining simultaneously to reduce cycle times.</p></article>'+
     '<article class="step"><h2><span class="nw">Parted off,</span> <span class="nw">ready to inspect.</span></h2><p>The sub-spindle takes the part as it is cut free, for high batch production runs on a fast turnaround, then on to inspection.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split"><span class="nw">Milling and turning,</span> <span class="nw">prototype to production.</span></h2></div><p data-r>We specialise in high-quality precision machined components through CNC milling and CNC turning, with Esprit and Edgecam CAD/CAM programming and most CAD formats imported.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Materials</span><p class="cr" data-r>'+MATS.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="plant" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Plant</span><h2 class="d2 split"><span class="nw">New CNC machines,</span> <span class="nw">year on year.</span></h2></div><p data-r>Continued investment in the latest machine tools has brought considerable growth: a DN Solutions DNM 4500 in 2024 and a second Citizen Miyano ABX in 2025.</p></div>'+
   plant()+
  '</div></section>'+

  '<section class="sec light" id="quality" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality and inspection</span><h2 class="d2 split"><span class="nw">Every component,</span> <span class="nw">stringently examined.</span></h2></div><p data-r>A dedicated, well equipped inspection department, with all equipment calibrated and certificated to UKAS traceable national standards.</p></div>'+
   faq()+
  '</div></section>'+

  '<section class="sec dark" id="history" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">A family company</span> <span class="nw">in Buckinghamshire.</span></h2></div><p data-r>R & A serves water purification, electrical, motorsport, medical, food, automation and oil and gas customers with the fast, efficient supply of small to medium batches.</p></div>'+
   hist()+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">New machines</span> <span class="nw">and new engineers.</span></h2></div><p data-r>Each entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Send us your drawing,</span> <span class="nw">we will quote.</span></h2>'+
   '<p class="sub" data-r>From prototypes and small batches to production runs, in plastics, aluminium, steels and Inconel.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email R &amp; A '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Factory</span><p data-r>R &amp; A Engineering Ltd<br>7 Farmbrough Close, Stocklake Park<br><span>Aylesbury, Buckinghamshire HP20 1DQ</span></p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></span></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>Registered in England, No. 05439244<br><span>BS EN ISO 9001:2015</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Factory</span>7 Farmbrough Close, Stocklake Park, Aylesbury HP20 1DQ</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/plant">Plant</a><br><a class="ul" href="#/quality">Quality</a><br><a class="ul" href="#/history">Company</a></div>'+
   '<div class="c"><span class="lab">Approvals</span>BS EN ISO 9001:2015, audited to NQA / UKAS standards</div>'+
  '</div><svg class="bigsvg flogo" viewBox="0 0 1000 70" aria-hidden="true"><text x="500" y="56" text-anchor="middle" style="letter-spacing:.16em">R &amp; A ENGINEERING · AYLESBURY</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 R &amp; A Engineering Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function plant(){return '<ul class="pfr pipe np">'+PLANT.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab cpy">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",services:"services",plant:"plant",quality:"quality",history:"history",company:"history",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"R & A Engineering — Subcontract CNC machining, Aylesbury",x:"Home"};
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
