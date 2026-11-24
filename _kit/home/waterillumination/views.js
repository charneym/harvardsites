/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){return '<ul class="wtm">'+TEAM.map(function(p){
  return '<li><div class="wtm-ph"><img src="'+p.img+'" alt="'+esc(p.name)+'" width="480" height="480" loading="lazy"></div><h3>'+esc(p.name)+'</h3><span class="lab">'+esc(p.title)+'</span><p>'+esc(p.sum)+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["No chemicals","Our UV-based process uses water itself as the catalyst. No chemical additives, no incineration and no post-treatment waste.",'<path d="M28 6c9 12 14 20 14 27a14 14 0 0 1-28 0c0-7 5-15 14-27z"/><path class="a" d="M21 34a7 7 0 0 0 7 7"/>'],
  ["Ambient conditions","No extreme heat, pressure or exotic catalysts: the process runs at ambient temperature and pressure, saving energy and infrastructure costs.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M28 16v12l8 5"/>'],
  ["No toxic waste","PFAS is mineralised into harmless byproducts, destroyed at the source rather than separated and concentrated for disposal.",'<path d="M14 28l9 9 19-19"/><path class="a" d="M8 48h40"/>'],
  ["Plugs into existing trains","Standalone or after concentration steps such as membranes or foam fractionation, in existing treatment trains.",'<path d="M6 28h14M36 28h14"/><rect x="20" y="18" width="16" height="20"/><path class="a" d="M28 10v8M28 38v8"/>'],
  ["Built to scale","A flow-through reaction process rather than batch treatment, for small and large systems across water matrices.",'<rect x="8" y="34" width="10" height="12"/><rect x="23" y="24" width="10" height="22"/><rect x="38" y="12" width="10" height="34"/><path class="a" d="M8 10h12"/>'],
  ["Fully automated","Compact, modular design with fully automated operation and low operating cost, from trace drinking-water PFAS to wastewater.",'<rect x="10" y="12" width="36" height="26"/><path d="M20 46h16M28 38v8"/><path class="a" d="M17 26h6l3-6 4 12 3-6h6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Markets</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From industrial wastewater (PFAS at ~mg/L) to drinking water (~ng/L). Costs and capacities as published by Water Illumination.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>UV-based PFAS destruction<span class="nomob"> · Lake Forest, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">PFAS destruction,</span><span class="l">made <em>simple.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Water Illumination destroys long- and short-chain PFAS, the “forever chemicals”, with a safe, efficient UV-based process at ambient temperature and pressure. No chemicals. No heat. No pressure.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/products">Our systems</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why destruction</span>'+
   '<h2 class="txt" id="mani">Conventional treatment only separates and concentrates PFAS, leaving toxic waste that still needs disposal. <em>We destroy it at the source, permanently.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">99.9%</span><p class="k">PFAS destruction, validated by studies, with no toxic waste or residuals</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><p class="k">Weeks of municipal groundwater pilot with the Orange County Water District, to non-detectable PFAS</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.24M</span><p class="k">NSF SBIR Phase II award in 2026 for a next-generation deep-ultraviolet reactor</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Just add your water. <em>Light does the rest.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Flow</span><span>Illuminate</span><span>Destroy</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>PFAS flows in.</h2><p>Contaminated water runs straight through the reactor, a flow-through process rather than batch treatment, with no pre-concentration required.</p></article>'+
     '<article class="step"><h2>UV light meets water.</h2><p>Under tuned ultraviolet light, the water molecules themselves act as the catalyst, generating reactive radicals. No chemical additives, at ambient temperature and pressure.</p></article>'+
     '<article class="step"><h2>Broken down for good.</h2><p>The radicals break the PFAS chains apart and mineralise them into harmless byproducts such as fluoride, with no secondary waste left to dispose of.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Destroy all PFAS, <em>permanently.</em></h2></div><p data-r>At the heart of Water Illumination is a proprietary UV-based platform that goes beyond traditional treatment, permanently destroying PFAS by mineralising them into harmless byproducts, with no toxic waste and no added chemicals.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products & services</span><h2 class="d2 split">PFAS destruction <em>systems.</em></h2></div><p data-r>From a field-proven first generation to a 40,000-gallon-a-day inline system, with lab validation and pilot deployments for utilities, engineering firms and industrial partners.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Water treatment <em>and UV experience.</em></h2></div><p data-r>Founded by Dr. Xuejun Yu with Dr. Haizhou Liu of UC Riverside, and advised by the former CTO of the world’s largest UV water treatment company.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the lab <em>to the field.</em></h2></div><p data-r>Federal awards from NSF, EPA and USDA, a new facility, and a municipal pilot that reached non-detectable PFAS.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Join us in building a <em>PFAS-free future.</em></h2>'+
   '<p class="sub" data-r>Request a treatability test on your own water, discuss a pilot at your site, or partner with us on real-world case studies.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/products">See our systems</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Facility</span><p data-r><span>Water Illumination Inc.</span><br><span>20988 Bake Pkwy, Ste 106</span><br><span>Lake Forest, CA 92630</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">waterceo@<wbr>waterillumination.com</a></p></div>'+
    '<div><span class="lab" data-r>Partners</span><p data-r>NSF · U.S. EPA · USDA · UC Riverside</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Facility</span>Lake Forest, California</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">waterceo@<wbr>waterillumination.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Technology</span>UV-based PFAS destruction · ambient temperature and pressure</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Outfit\',sans-serif;font-weight:500;font-size:58px">WATER ILLUMINATION</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Water Illumination Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Water Illumination — PFAS destruction with UV light",x:"Home"};
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
