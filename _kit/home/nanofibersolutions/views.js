/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["NanoAligned™ scaffolds","Aligned fibers that mimic the oriented parts of the body: white matter in the brain, the central nervous system, cardiac tissue and skeletal muscle. An ideal 3D substrate for real-time imaging, and for chemotaxis, migration and invasion assays.",'<path d="M6 16H50M6 24H50M6 32H50M6 40H50"/><path class="a" d="M6 28H50"/>'],
  ["NanoECM™ scaffolds","Randomly oriented fibers that mimic the nanofibrous extracellular matrix found throughout the body. Higher stem cell expansion rates while maintaining pluripotency, fully synthetic, with no animal-derived by-products.",'<path d="M6 14C20 18 34 34 50 40M6 38C18 30 30 14 46 8M10 50C16 34 30 26 50 22M20 6C24 22 30 36 34 50"/><path class="a" d="M6 26C20 24 34 32 50 30"/>'],
  ["Custom tissue engineering","Custom-designed 3D scaffolds for regenerative medicine: tracheal, intestinal and vascular grafts, skin and wound healing, and bioreactor scale-up for stem cell therapies. Synthetic or natural polymers, blends and surface chemistry to order.",'<ellipse cx="14" cy="28" rx="6" ry="13"/><path d="M14 15H44M14 41H44"/><path d="M44 15a6 13 0 0 1 0 26"/><path class="a" d="M22 15q4 13 0 26M30 15q4 13 0 26M38 15q4 13 0 26"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Vascular grafts, October 2026</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Aslan, Chen, Mese-Jones et al., with Nanofiber Solutions authors, “Assessing hemodynamic impact of tissue-engineered vascular graft displacement: combining postoperative in vivo results and computational modeling to improve surgical planning”, Annals of Biomedical Engineering, 31 October 2026 (doi 10.1007/s10439-026-04424-y). Preclinical study in porcine models.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r><span class="nomob">Electrospun </span>nanofiber scaffolds<span class="nomob"> · since 2009</span> · Dublin, OH</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Truly from bench</span><span class="l"><em>to bedside.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Nanofiber Solutions designs and manufactures 3D nanofiber scaffolds that mimic the extracellular matrix: tissue-engineered grafts for surgeons, and cell culture products for the lab bench.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/products">Products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Donor tissue is scarce, rejection is a lifelong risk, and most synthetics never become part of the body. Nanofiber Solutions builds off-the-shelf scaffolds that cells move into and <em>rebuild as living tissue.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2009</span><p class="k">Founded by Dr. John Lannutti and Dr. Jed Johnson; operating since July 2010 under CEO Ross Kayuha</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">FDA clearances for Nanofiber Solutions products, the first in 2018 and the second in 2019</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">12,000</span><p class="k">Square feet of space at the Dublin, Ohio facility the company moved into in 2021</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a graft is made</span><h2 class="d3">Spin it, rib it, <em>let it grow in.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Spin</span><span>Corrugate</span><span>Remodel</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Spin the wall from fibers.</h2><p>A charged polymer jet, a blend of polycaprolactone and poly(L-lactide-co-caprolactone), whips down onto a rotating mandrel and lays a nonwoven of fine fibers that mimics the body’s own extracellular matrix.</p></article>'+
     '<article class="step"><h2>Rib the wall so it never kinks.</h2><p>Most tissue-engineered grafts are rigid and kink in tight spaces. A corrugated wall lets the graft bend into a U between an artery and a vein, the way arteriovenous shunts for dialysis are placed.</p></article>'+
     '<article class="step"><h2>Let the body take it over.</h2><p>Host cells infiltrate and line the graft while the scaffold resorbs. In an ovine study, 7 of 8 corrugated grafts stayed open at one month, with no significant kinking and endothelial cells across the graft.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">Structure cells <em>recognize.</em></h2></div><p data-r>One electrospinning platform, three structures: aligned, random and custom-built. Cells on a 3D nanofiber surface behave as they do in the body, on a lab bench or in a patient.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products and programs</span><h2 class="d2 split">From the culture plate <em>to the operating room.</em></h2></div><p data-r>Nanofiber Solutions sells research products today, and its regenerative medicine programs move through large-animal studies with surgical teams at Johns Hopkins, the University of Chicago and Nationwide Children’s Hospital.</p></div>'+
   pipeRows(PROD)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded by engineers, <em>built with surgeons.</em></h2></div><p data-r>The technical founders spent years working with cancer researchers and surgeons on polymer scaffolds that mimic structures in the human body, before joining with Ross Kayuha to begin formal operations in 2010.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Origin</span><p data-r>Founded as an LLC in 2009; first sale of 3D cell culture plates in 2011, and a nanofiber scaffold regenerated new tendon in a horse in 2012.</p></div>'+
    '<div><span class="lab kick" data-r>Family of companies</span><p data-r>Subsidiaries formed from 2016, among them RenovoDerm, Atreon Orthopedics, Vascular Genesis, Paragen Technologies and Tarian Medical; Nanos formed in 2026.</p></div>'+
    '<div><span class="lab kick" data-r>Facility</span><p data-r>Design and manufacturing at 5164 Blazer Parkway in Dublin, Ohio, after earlier sites in Columbus and Hilliard.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Papers <em>and milestones.</em></h2></div><p data-r>Recent peer-reviewed work by Nanofiber Solutions and its clinical collaborators.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Collaborations are welcome</span>'+
   '<h2 class="big split">Talk to <em>Nanofiber Solutions.</em></h2>'+
   '<p class="sub" data-r>Custom scaffolds, research products, distribution and regenerative medicine collaborations. Sales, technical support and general inquiries all start here.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#/products">See the products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Nanofiber Solutions<br>5164 Blazer Pkwy<br>Dublin, OH 43017</p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+16143193075">614-319-3075</a></p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>5164 Blazer Pkwy<br>Dublin, OH 43017</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+16143193075">614-319-3075</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Markets</span>Regenerative medicine<br>Veterinary medicine<br>3D cell culture</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="50" text-anchor="middle" style="font-family:\'Spectral\',Georgia,serif;font-weight:400;font-size:60px;letter-spacing:-.01em">Nanofiber Solutions</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Nanofiber Solutions</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"platform",platform:"platform",story:"story",products:"products",pipeline:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Nanofiber Solutions — Electrospun nanofiber scaffolds and tissue-engineered grafts, Dublin, OH",x:"Home"};
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
