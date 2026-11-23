/* ================= VIEWS (home only: Products / Skylife / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function prods(){return '<ul class="pfr">'+PRODUCTS.map(function(p){
  return '<li data-r><span class="lab tg">'+esc(p[0])+'</span><div class="pn"><h3>'+esc(p[1])+'</h3>'+(p[3]?'<span class="loc">'+esc(p[3])+'</span>':'')+'</div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function mh(label,list){return '<div class="mhg"><p class="mh-label" data-r>'+label+'</p><ul class="mh-list">'+list.map(function(p){
  return '<li data-r><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li data-r><a href="'+WEB+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+n[0]+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">theneolight.com '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Newborn care devices<span class="nomob"> · Scottsdale, Arizona</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Technology for</span><span class="l">the <em>smallest</em></span><span class="l"><em>patients.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>NeoLight, an Arizona State University spinoff, brings empathy-driven technology to newborn care: Skylife phototherapy for jaundice, retinal imaging, brain monitoring, feeding development and neonatal transport.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Skylife™ Neonatal Phototherapy System, the light the baby lies on (NeoLight product photograph).</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Empathy-driven</span>'+
   '<h2 class="txt" id="mani">Innovation inspired by empathy, integrating the technology of tomorrow today <em>for superior neonatal care.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">200k+</span><span class="k">Babies treated with NeoLight equipment, as of August 2024</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">99</span><span class="k">Countries where its devices have reached newborns</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">9 of 10</span><span class="k">Top US hospitals for neonatology use NeoLight technology (U.S. News 2023–24)</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Skylife phototherapy</span><h2 class="d3">Light from below, <em>close to the skin.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Jaundice</span><span>Below</span><span>Spectrum</span><span>Coverage</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Bilirubin in the skin.</h2><p>In newborn jaundice, hyperbilirubinemia, bilirubin builds up faster than the baby can clear it. Phototherapy treats it with light the bilirubin absorbs.</p></article>'+
     '<article class="step"><h2>A light the baby lies on.</h2><p>Skylife sits under the baby. Its GelMat brings the light close for higher irradiance and cushions pressure points, with no bulky blankets or tangled wires.</p></article>'+
     '<article class="step"><h2>The colour bilirubin absorbs.</h2><p>Spectral Power Treatment™ gives a narrow band of light between 430 and 475 nm, to most closely match the bilirubin absorption spectrum.</p></article>'+
     '<article class="step"><h2>More skin, in the light.</h2><p>The 3D Light Array covers 40% of the body surface over 769 cm², at three irradiance levels. In a randomized trial against blanket phototherapy, bilirubin tended to fall faster.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">One partner for <em>the NICU.</em></h2></div><p data-r>NeoLight develops its own devices and brings partners’ technologies to US hospitals, so neonatal and paediatric units can work with one cohesive set of tools.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people behind <em>NeoLight.</em></h2></div><p data-r>Founded by Vivek Kopparthi and Deepak Krishnaraju as an Arizona State University spinoff, NeoLight is led by a commercial, clinical and engineering team and guided by its board.</p></div>'+
   '<div class="mh">'+mh("Management",LEAD)+mh("Board of directors",BOARD)+'</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>NeoLight.</em></h2></div><p data-r>Partnerships, contracts and milestones, from the press releases on theneolight.com.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Hospitals, clinicians and partners</span>'+
   '<h2 class="big split">Better care for <em>every newborn.</em></h2>'+
   '<p class="sub" data-r>For a demo, product support or a partnership, write to the NeoLight team or call 1-866-934-8945, Monday to Friday, 8am to 5pm Pacific.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/products">Our products</a></div>'+
   '<div class="cinfo cgrid">'+
    '<div><span class="lab" data-r>Office</span><p data-r>1475 N. Scottsdale Rd., Suite 110<br>Scottsdale, AZ 85257</p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+18669348945">1-866-934-8945</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>1475 N. Scottsdale Rd., Suite 110<br>Scottsdale, AZ 85257</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/skylife">Skylife</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18669348945">1-866-934-8945</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Devices for newborn<br>and neonatal care</div>'+
  '</div><div class="bigsvg flogo" aria-hidden="true">'+LOGO+'</div>'+
  '<div class="legal"><span class="lab">© 2026 NeoLight</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",products:"products",skylife:"story",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"NeoLight — devices for newborn care, Scottsdale, Arizona",x:"Home"};
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
