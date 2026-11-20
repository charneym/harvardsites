/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function progRows(){return '<ul class="pfr path">'+PROG.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab stg">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function team(){return '<div class="mh">'+TEAM.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g[0])+'</p><ul class="mh-list">'+g[1].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Steroid-sparing therapies<span class="nomob"> · Veterinary first</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The power of</span><span class="l">corticosteroids,</span><span class="l"><em>without the burden.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Lupvindol Biosciences pairs a low-dose corticosteroid with cannabidiol in patented fixed-dose combinations for inflammation, pain and autoimmune disease, starting with dogs and horses.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our approach '+ARR+'</a><a class="btn" href="#/contact">Contact</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Corticosteroids are among the most powerful tools against inflammation and autoimmune disease, <b class="w0">but long-term or high-dose use brings serious side effects.</b> <em>Lupvindol keeps the benefit and lowers the dose.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">20+</span><span class="k">Patents secured behind the fixed-dose combination</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><span class="k">INAD files opened by FDA/CVM in October 2025, for dogs and horses</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~80%</span><span class="k">Lower corticosteroid dose the combination is designed to allow</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Two approved compounds, <em>one formulation.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Steroid</span><span>Partner</span><span>Combination</span><span>Patients</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The corticosteroid.</h2><p>Steroids calm inflammation powerfully, but long or high-dose courses bring osteoporosis, muscle atrophy, diabetes and other dose-limiting side effects.</p></article>'+
     '<article class="step"><h2>The steroid-sparing partner.</h2><p>Cannabidiol (CBD), already approved as a medicine, has established potential as a steroid-sparing agent.</p></article>'+
     '<article class="step"><h2>One fixed dose.</h2><p>Lupvindol’s patents cover the two combined in optimised ratios, aiming for super-additive efficacy at a much lower steroid dose. In vitro data shown at ICRS 2025 found reduced cytotoxicity and lower pro-inflammatory cytokines than steroid alone.</p></article>'+
     '<article class="step"><h2>Animals first, then people.</h2><p>Two FDA/CVM INAD files are open, for canine IBD and equine osteoarthritis. Veterinary data are planned to inform human applications.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="programmes" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">Veterinary first, <em>by design.</em></h2></div><p data-r>Animal-health pathways let Lupvindol de-risk its combination on real patients sooner. Two investigational programmes are under way with the FDA’s Center for Veterinary Medicine.</p></div>'+
   progRows()+
   '<p class="ack" data-r>Investigational products in development. Not approved by the FDA or any other regulator.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Cannabinoid science, <em>regulatory depth.</em></h2></div><p data-r>Experience across cannabinoid drug development, FDA veterinary drug approval and public markets.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Two INADs <em>in two weeks.</em></h2></div><p data-r>The latest from Lupvindol Biosciences.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Veterinarians, partners and investors</span>'+
   '<h2 class="big split">Safer, smarter healing, <em>for animals and people.</em></h2>'+
   '<p class="sub" data-r>For partnership, clinical collaboration or investment, write to the Lupvindol Biosciences team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Lupvindol '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters, United Kingdom</span><p data-r><span class="bl">Bretton House, Bell Meadow Business Park</span><span class="bl">Chester CH4 9EP</span></p></div>'+
    '<div><span class="lab" data-r>United States</span><p data-r><span class="bl">2389 Yorktown Street</span><span class="bl">Oceanside, NY 11572</span></p></div>'+
    '<div><span class="lab" data-r>Email and phone</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><span class="bl"><a class="ul" href="tel:+18333805324">1-833-380-5324</a></span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Offices</span>Chester, United Kingdom<br>Oceanside, New York</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18333805324">1-833-380-5324</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Notice</span>Lupvindol’s combination therapies are investigational and not approved by the FDA.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="48" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:800;font-size:52px;letter-spacing:.14em">LUPVINDOL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Lupvindol Biosciences Ltd.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",programmes:"programmes",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Lupvindol Biosciences — Steroid-sparing combination therapies for inflammation and pain",x:"Home"};
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
