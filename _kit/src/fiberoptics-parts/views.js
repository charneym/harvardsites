/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function platRows(){return '<div class="plat">'+PLAT.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function prodRows(){return '<ul class="pfr path">'+PRODUCTS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[3])+'</p><a class="lab lk" href="'+c[4]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' on fiber-optics.com">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function appList(){return '<ul class="ind">'+APPS.map(function(a){return '<li>'+esc(a)+'</li>'}).join("")+'</ul>'}
function planList(){return '<ol class="ftplan">'+PLAN.map(function(a,i){return '<li><span class="lab">0'+(i+1)+'</span><p>'+esc(a)+'</p></li>'}).join("")+'</ol>'}
function teamGrid(){return '<ul class="ex ftt">'+TEAM.map(function(p){return '<li><h3>'+esc(p[0])+'</h3><p>'+esc(p[1])+'</p></li>'}).join("")+'</ul>'}
function newsRows(){return '<ul class="rows">'+NEWS.map(function(n){return '<li><a class="row-a" href="'+n[2]+'" target="_blank" rel="noopener"><span class="nm"><span class="lab">'+esc(n[0])+'</span></span><h3>'+esc(n[1])+'</h3><span class="c4">'+ARRX+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Fiber optics since 1977<span class="nomob"> · Pomfret, Connecticut</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Light guides,</span> <span class="l">from the glass <em>up.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Fiberoptics Technology draws its own glass fiber and builds standard and custom OEM fiber optics around it: medical light guides, LED illuminators, machine vision lighting, fiberscopes and assemblies, from two plants in Connecticut and Florida.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/capabilities">How a light guide is made</a></div></div>'+
   '<span class="lab cap">Fiber optic light guide termination · render</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap"><div class="mrow">'+
   '<div class="mani-in"><span class="lab kick" data-r>Fiberoptics Technology</span>'+
   '<h2 class="txt" id="mani"><span class="nw">FTI opened its doors</span> <span class="nw">in an unheated barn</span> <span class="nw">with three employees</span> <span class="nw">in 1977, and has</span> <span class="nw">doubled in size more</span> <span class="nw">than six times since.</span> <b class="w0"><span class="nw">Today it runs</span> <span class="nw">three shifts and</span> <span class="nw">the largest fiber</span> <span class="nw">production capacity</span> <span class="nw">in North America.</span></b></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1977</span><p class="k">The year FTI began designing and making glass fiber optic lighting</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">500+</span><p class="k">Single and bifurcated medical light guide designs</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1.2 km</span><p class="k">Continuous bundle length drawn on FTI’s own equipment</p></div>'+
   '</div></div>'+
   platRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Capabilities</span><h2 class="d3"><span class="nw">Drawn glass,</span> <em class="nw">delivered light.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fiber</span><span>Ends</span><span>Sheath</span><span>Light</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The fiber.</h2><p>FTI draws borosilicate glass fiber on drawing equipment it designs and builds in-house: continuous bundles up to 1.2 km, sized to a diameter accuracy of .00004″.</p></article>'+
     '<article class="step"><h2>The ends.</h2><p>Each end of the bundle is set in a ferrule with epoxy, then ground and polished. A properly polished face makes a high-quality, low-loss termination and keeps out liquid, dust and debris.</p></article>'+
     '<article class="step"><h2>The sheath.</h2><p>Medical guides get leak-tight construction, with molded silicone boots that leave bio-burden nowhere to hide, colour-coded sheathing, and compatibility with flash and cold sterilization.</p></article>'+
     '<article class="step"><h2>The light.</h2><p>At the source end, an LO-35 LED illuminator’s optical coupler transfers more than three times the visible light of a 150 W quartz halogen lamp into the guide, out to the scope or the line.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Standard designs,</span> <em class="nw">custom builds.</em></h2></div><p data-r>Hundreds of OEM designs and an extensive library of standard fiber optic cables, in glass, plastic and quartz. If a standard product needs modifying, FTI modifies it; if it needs inventing, the consulting service is free.</p></div>'+
   prodRows()+
  '</div></section>'+

  '<section class="sec dark" id="markets" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Markets</span><h2 class="d2 split"><span class="nw">Wherever light</span> <em class="nw">has to travel.</em></h2></div><p data-r>Application knowledge across medical, machine vision, industrial, military and commercial markets, with a rapid prototyping service and contract manufacturing for designs that are ready to scale.</p></div>'+
   appList()+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">A five-point plan,</span> <em class="nw">still followed.</em></h2></div><p data-r>The founders worked in fiber optics for ten years before starting FTI. Their plan for the company is still followed today; three presidents have led FTI since 1977.</p></div>'+
   '<div class="ftco">'+planList()+teamGrid()+'</div>'+
   '<p class="ftcert lab" data-r>ISO 9001:2015 · ISO 13485:2016 · AS9100 · FDA registered · ITAR · RoHS · REACH</p>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">From the floor</span> <em class="nw">and the blog.</em></h2></div><p data-r>Most recently at MEDICA 2026 in Düsseldorf, and notes from FTI’s engineers on fiber optic lighting, bundles and imaging.</p></div>'+
   newsRows()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Pomfret, Connecticut · Naples, Florida</span>'+
   '<h2 class="big split"><span class="nw">Bring us</span> <em class="nw">the problem.</em></h2>'+
   '<p class="sub" data-r>Write about a standard light guide, a modified one or something new; FTI’s no-charge consulting service works with your team on custom designs.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span class="bl">1 Quassett Road</span><span class="bl">Pomfret, CT 06258</span></p><p data-r><a class="ul" href="tel:+18004335248">+1 800 433 5248</a></p></div>'+
    '<div><span class="lab" data-r>Naples division</span><p data-r><span class="bl">4000 Domestic Avenue</span><span class="bl">Naples, FL 34101</span></p><p data-r><a class="ul" href="tel:+18609280443">+1 860 928 0443</a></p></div>'+
    '<div><span class="lab" data-r>Medical and microscopy</span><p data-r><span class="bl">Tim Beeman</span></p><p data-r><a class="ul" href="mailto:TBeeman@fiberoptix.com">TBeeman@fiberoptix.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>1 Quassett Road<br>Pomfret, CT 06258</div>'+
   '<div class="c"><span class="lab">Naples division</span>4000 Domestic Avenue<br>Naples, FL 34101</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/capabilities">Capabilities</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/markets">Markets</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18004335248">+1 800 433 5248</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 80" aria-hidden="true"><text x="450" y="62" text-anchor="middle" style="font-family:\'Fraunces\',Georgia,serif;font-style:italic;font-weight:700;font-size:72px">fiberoptics <tspan fill="#ff5a5f">technology</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Fiberoptics Technology, Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",capabilities:"story",products:"products",markets:"markets",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Fiberoptics Technology — fiber optic light guides, illumination and fiber drawing since 1977",x:"Home"};
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