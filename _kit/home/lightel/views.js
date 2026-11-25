/* ================= VIEWS (home only: Products / Technology / Company / News open build-out pages via _kit/lib/buildout.js;
   Contact and in-page CTAs scroll). Dark and bone grounds alternate: hero (dark, the coupler render), about (bone, statement +
   figures), the fused-taper story (dark), products (bone: components and inspection in two columns, four equipment figures,
   three services), company (dark: two sites and recognition), news (bone), contact (dark). Content is never hidden at
   rest: reveals only enhance (failsafe in site.js). ================= */
function prods(g){return '<ul class="dcat">'+PROD.filter(function(p){return g.indexOf(p[0])>=0}).map(function(c){return '<li><span class="dc-b">'+esc(c[1])+'</span><span class="dc-m">'+esc(c[2])+'</span></li>'}).join("")+'</ul>'}
function caps(){return '<div class="dmesh">'+CAPS.map(function(m){
  return '<div class="dm"><span class="dm-v">'+esc(m[0])+'<small>'+esc(m[1])+'</small></span><h3>'+m[2]+'</h3><p class="dm-use">'+esc(m[3])+'</p></div>'}).join("")+'</div>'}
function apps(){return '<div class="dapps">'+APPS.map(function(a){return '<div class="da"><span class="lab kick">'+esc(a[0])+'</span><p>'+esc(a[1])+'</p></div>'}).join("")+'</div>'}
function sites(){return '<ol class="dmfg">'+SITES.map(function(m,i){return '<li><span class="dmf-n">'+String(i+1).padStart(2,"0")+'</span><div><span class="lab dmf-k">'+esc(m[1])+'</span><h3>'+esc(m[0])+'</h3><p>'+esc(m[2])+'</p></div></li>'}).join("")+'</ol>'}
function certs(){return '<ul class="dcert">'+CERTS.map(function(c){return '<li><span class="dce-n">'+esc(c[0])+'</span><span class="lab">'+esc(c[1])+'</span></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
var ICO={comp:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M2 14c8 0 10 6 18 6M2 26c8 0 10-6 18-6"/><path d="M20 20c8 0 10-6 18-6M20 20c8 0 10 6 18 6"/></svg>',
 insp:'<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="17" cy="17" r="10"/><circle cx="17" cy="17" r="3"/><path d="M24.5 24.5 36 36"/></svg>',
 eqp:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4 30h32M8 30V24h6v6M26 30V24h6v6M14 26h12"/><path d="M20 20c-3-3-1-6 0-9 1 3 3 6 0 9Z"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>Fiber optic components and equipment · <span class="nw">Renton, Washington</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="nw">Flexible, custom</span> <span class="nw">fiber optics,</span> <em class="nw">since 1999.</em></h1>'+
    '<p class="s" data-r>Lightel designs, manufactures and supplies fused couplers, WDMs and micro-optic components, connector inspection microscopes and the workstations that fuse fiber, for communications, fiber lasers, aerospace and sensors.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div>'+
   '</div>'+
   '<ul class="pil" aria-label="What we make">'+
    '<li class="p1" data-r><span class="pic">'+ICO.comp+'</span><div><span class="lab">Components</span><p>Couplers, splitters, WDMs and high-power devices, all tested before shipment.</p></div></li>'+
    '<li class="p2" data-r><span class="pic">'+ICO.insp+'</span><div><span class="lab">Inspection</span><p>Video microscopes that keep connector endfaces, and networks, clean.</p></div></li>'+
    '<li class="p3" data-r><span class="pic">'+ICO.eqp+'</span><div><span class="lab">Equipment</span><p>Coupler and combiner workstations, FiberForge and plasma stripping.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="about" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>About Lightel</span>'+
   '<h2 class="txt" id="mani">We started with coupler workstations for fused biconic taper products. Today we make the components, the inspection microscopes and the machines, <em>designed and built in house, <span class="nw">small run or volume.</span></em></h2></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1999</span><p class="k">Incorporated in Washington State, serving the fiber optic industry worldwide</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">150<small>W</small></span><p class="k">High-power tap couplers, each tested at the customer’s specified optical power</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">37×1</span><p class="k">End-pump combiners made on our CW-7000 combiner workstation</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3"><span class="nw">Two fibers,</span> <em class="nw">one taper.</em></h2>'+
    '<p class="st-in">How a fused biconic taper coupler is made, on the workstations we build.</p>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Heat</span><span>Pull</span><span>Split</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The flame.</h2><p>Two stripped fibers are clamped side by side over a micro-nozzle torch, and a pure hydrogen flame heats them until the glass softens.</p></article>'+
     '<article class="step"><h2>The pull.</h2><p>Motorized stages draw the softened pair apart, fusing it into a single biconic taper. At the narrow waist, light can cross from one core to the other.</p></article>'+
     '<article class="step"><h2>The split.</h2><p>A built-in power meter watches both outputs as the taper forms, so the pull stops at the ratio the design calls for. Every coupler is tested before it ships.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Components, probes</span> <em class="nw">and the machines</em> <em class="nw">that make them.</em></h2></div><p data-r>Reliable passive components, qualified for indoor or outdoor use, and analog and digital video microscopes that keep network downtime to a minimum.</p></div>'+
   '<div class="dcols"><div class="dcol"><div class="dcol-h"><span class="lab kick" data-r>Passive components</span><span class="lab dn" data-r>04</span></div>'+prods(["Comp"])+'</div>'+
   '<div class="dcol"><div class="dcol-h"><span class="lab kick" data-r>Inspection, cleaning, test</span><span class="lab dn" data-r>04</span></div>'+prods(["Insp"])+'</div></div>'+
   '<div class="dmesh-h"><div><span class="lab kick" data-r>Equipment</span><h3 data-r><span class="nw">Machines that</span> <span class="nw">fuse fiber</span></h3></div><p data-r>Workstations that use pure hydrogen to fabricate fused biconic tapers, power combiners, WDMs and thermal core expansion devices, for production and R&amp;D.</p></div>'+
   caps()+
   apps()+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Seattle engineering,</span> <em class="nw">global production.</em></h2></div><p data-r>Design for small or volume manufacturing is possible in house, and a strong distributor network covers territories worldwide.</p></div>'+
   '<div class="dmf-g"><div class="dmf-r">'+sites()+'</div>'+
   '<div class="dce-w"><span class="lab kick" data-r>Quality and recognition</span>'+certs()+
   '<p class="dmask" data-r>Our customer service has received numerous recognition awards from our manufacturing partners.</p></div></div>'+
  '</div></section>'+

  '<section class="sec light" id="news" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">From Málaga</span> <em class="nw">to Los Angeles.</em></h2></div><p data-r>Where to find us on the show floor, and what is new in inspection.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Communications, fiber laser, aerospace and sensor teams</span>'+
   '<h2 class="big split"><span class="nw">Standard or custom,</span> <em class="nw">let’s talk fiber.</em></h2>'+
   '<p class="sub" data-r>Tell us what you need, from a single coupler to an OEM program, and Lightel is at your service.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to Lightel sales '+ARR+'</a><a class="btn" href="tel:+14252778000">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>2210 Lind Ave SW, Suite 100<br>Renton, WA 98057</p></div>'+
    '<div><span class="lab" data-r>Sales</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+14252778000">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>General inquiries</span><p data-r><a class="ul" href="mailto:'+MAIL2+'">'+MAIL2+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Lightel Technologies, Inc.<br>2210 Lind Ave SW, Suite 100<br>Renton, WA 98057</div>'+
   '<div class="c"><span class="lab">Products</span>Passive components<br>Inspection, cleaning, test<br>Equipment and services</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+MAIL2+'">'+MAIL2+'</a><br><a class="ul" href="tel:+14252778000">'+TEL+'</a></div>'+
  '</div>__LMARK3__'+
  '<div class="legal"><span class="lab">© 2026 Lightel Technologies</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route. #/contact and #/about scroll to their section; a typed or linked #/products, #/technology, #/company or #/news (the nav items) opens that item's build-out page, as a nav click does (buildout.js) ================= */
var BOK={};/* typed or linked hashes scroll to their section; nav clicks open the build-out pages (buildout.js) */
function boOpen(k){try{if(window.BuildOut&&BuildOut.open){BuildOut.open(k);return true}}catch(x){}return false}
var SECS={about:"about",products:"products",technology:"story",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Lightel — fiber optic components, inspection and equipment",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home")return;e.stopImmediatePropagation();
  if(r.sec&&BOK[r.sec]){try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/";boOpen(r.sec);return}
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){try{history.replaceState(null,"","#/")}catch(x){}if(BOK[r.sec]&&boOpen(r.sec))return;secGo(r.sec,true)},300)})()})();
