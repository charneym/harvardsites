/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Accuracy","Aligned and clamped in one place","Alignment and layer clamping happen in the same location, so no critical parts wear. After set-up the cameras are locked in position, and fixed-focus lenses with over 8 mm range never move to focus.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M28 4V18M28 38V52M4 28H18M38 28H52"/><circle class="f" cx="28" cy="28" r="2.4"/>'],
  ["Mistake-proof","Every core checked","The Unique Target Layers software rejects a core loaded out of sequence. The vision system checks position before and after clamping each core, and oversized or undersized inner layers are rejected.",'<rect x="10" y="12" width="36" height="8"/><rect x="10" y="24" width="36" height="8"/><rect x="10" y="36" width="36" height="8"/><path class="a" d="M36 26L40 30L48 20"/><circle class="f" cx="16" cy="16" r="2.4"/>'],
  ["Production","Made for the press floor","All slides and moving parts are designed to work in a dusty prepreg environment. No templates or tools for any panel size, no pre-stacking, and programmable weld profiles much like a press profile.",'<path d="M8 44H48"/><path class="a" d="M10 40L20 18H34L44 40"/><path d="M20 18V12M34 18V12"/><circle class="f" cx="27" cy="30" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Optical registration<span class="nomob"> · New York · since 1999</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Every layer,</span><span class="l">exactly where</span><span class="l"><em>it belongs.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>DIS builds optical registration equipment for multilayer PC boards: cameras align every core, inductive weld heads bond the stack, and no pins go into the press.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">See the machines '+ARR+'</a><a class="btn" href="#/contact">Talk to DIS</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Deep roots in the PCB industry</span>'+
   '<h2 class="txt" id="mani">Registration equipment is not just the focus of our business. <em>It is our only business.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1999</span><p class="k">Producing industry-leading optical registration equipment in New York since 1999</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">300+</span><p class="k">PCB manufacturers around the world trust DIS, with equipment in 23 countries</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">52</span><p class="k">Layers processed in one board so far, and DIS has still not reached its limit</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Pinless registration</span><h2 class="d3">From loose cores <em>to one panel.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Load</span><span>Align</span><span>Clamp</span><span>Weld</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Load.</h2><p>The operator loads core and prepreg at the same time on the pre-load station. No pre-stacking, which saves handling and possible damage to the cores, and no templates for any panel size.</p></article>'+
     '<article class="step"><h2>Align.</h2><p>Cameras, locked in position after set-up, capture the targets on each core, even when the targets are not perfect. Unique Target Layers software rejects a core placed out of sequence.</p></article>'+
     '<article class="step"><h2>Clamp.</h2><p>Alignment and clamping are made in the same location, so there are no critical parts to wear. The vision system checks position before and after clamping each core.</p></article>'+
     '<article class="step"><h2>Weld.</h2><p>Two independent inductive weld heads, a patented DIS design, bond the layers with a programmable profile: ramp up, hold, cool down. The panel goes to the press without pins.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="why" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Why DIS?</span><h2 class="d2 split">Expertise <em>you can trust.</em></h2></div><p data-r>DIS business has always been alignment. Its key people have always worked with vision and positioning systems and understand multilayer registration in the printed circuit board industry.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Difficult builds</span><p class="cr" data-r><span>Thin cores down to 25 µm (1 mil)</span><span>Up to 52 layers</span><span>Rogers and Taconic materials</span><span>Flex and polyimide bond ply</span><span>Copper from 1/3 to 3 oz</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our products</span><h2 class="d2 split">The DataLign <em>series of equipment.</em></h2></div><p data-r>A family of machines for high-volume producers, for quick turns and prototypes, and for every board shop in between. Every PRS machine can be upgraded to work with the DataLign Registration System.</p></div>'+
   prods()+
   '<div class="act shop" data-r><a class="btn solid" href="mailto:'+MAIL+'">Ask for information and pricing '+ARR+'</a></div>'+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About DIS</span><h2 class="d2 split">Founded to build boards <em>without pins.</em></h2></div><p data-r>DIS was founded because its people saw where the PC board industry was going and recognized the limits of building multilayer boards on pins. The goal: a system that would be more accurate.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>How it grew</span><dl>'+
    '<div data-r><dt class="lab">PRS-77</dt><dd>The first machine, the Pinless Registration System: cameras and heat bonding in place of pin lamination</dd></div>'+
    '<div data-r><dt class="lab">Second generation</dt><dd>Advanced vision software and lighting that capture targets accurately even when they are not perfect</dd></div>'+
    '<div data-r><dt class="lab">Patented</dt><dd>A weld head design with two independent inductive heads, for precise weld profiles and the power to weld thick panels</dd></div>'+
    '<div data-r><dt class="lab">Pin bonding</dt><dd>A pin bonding machine that is easy to use and has industry-leading productivity</dd></div>'+
    '<div data-r><dt class="lab">2024</dt><dd>A new facility that doubled the space, with assembly bays set up for the best possible workflow</dd></div>'+
    '<div data-r><dt class="lab">DataLign</dt><dd>The DataLign series: layer data collection, networking and matching best-fitting layers to each other</dd></div>'+
   '</dl></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Registration people, <em>first and last.</em></h2></div><p data-r>DIS agents are carefully selected and know DIS equipment, the multilayer registration process and its applications. If they cannot answer a question at once, they will find the right answer.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News and events</span><h2 class="d2 split">Shows, interviews <em>and the new shop.</em></h2></div><p data-r>DIS at the trade shows and in the trade press. Every entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Talk to us about <em>your next build.</em></h2>'+
   '<p class="sub" data-r>For worldwide sales, information and pricing, or support on a DIS machine in the field, reach the team in New York directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email sales '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>DIS Technology Inc.<br>120 Wilbur Place<br>Bohemia, NY 11716, USA</p></div>'+
    '<div><span class="lab" data-r>Sales</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Support</span><p data-r><a class="ul" href="mailto:'+SUP+'">'+SUP+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>DIS Technology Inc.<br>120 Wilbur Place, Bohemia, NY 11716</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/why-dis">Why DIS</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/about">About</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Equipment</span>Optical registration<br>Pin bonding · Flex bonding<br>Automation</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 72" aria-hidden="true"><text x="450" y="58" text-anchor="middle" style="font-family:\'Inter\',Arial,sans-serif;font-style:italic;font-weight:600;font-size:66px;letter-spacing:.12em">DIS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 DIS Technology Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",registration:"story","why-dis":"why",products:"products",about:"company",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"DIS — Optical registration equipment for multilayer PCBs, New York",x:"Home"};
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
