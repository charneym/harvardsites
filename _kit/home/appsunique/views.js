/* ================= VIEWS (home only: Products / Technology / Services / News open build-out pages via _kit/lib/buildout.js; Contact
   and in-page CTAs scroll). Hero: a studio render of their own product, a PID sensor (render.py), right of a type-led headline
   (their own line, "The New Gold Standard"), with three facts as the bottom band; then bone and dark grounds alternate: about
   (bone), the Heatwave story (dark), products (bone), core technologies as four lists (dark), services as rows with the
   founder's line (bone), news (dark), contact with their three offices (bone). Content is never hidden at rest: reveals only
   enhance (see the failsafe in site.js). ================= */
function prods(){return '<div class="svg6">'+PROD.map(function(c,i){
  return '<article class="svc" data-r><span class="lab sv-n">'+String(i+1).padStart(2,"0")+'</span><h3>'+esc(c[0])+'</h3><span class="sv-k">'+esc(c[1])+'</span><p>'+esc(c[2])+'</p><a class="lab ul lk2" href="'+c[3]+'" target="_blank" rel="noopener">'+esc(c[4])+' '+ARR+'</a></article>'}).join("")+'</div>'}
function techs(){return '<div class="aucol">'+TECH.map(function(c,i){
  return '<div class="auc" data-r><span class="lab">'+String(i+1).padStart(2,"0")+'</span><h3>'+esc(c[0])+'</h3><ul>'+c[1].map(function(x){return '<li>'+esc(x)+'</li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function svcs(){return '<section class="mh"><div class="mh-group"><p class="mh-label" data-r>What we do for clients</p><ul class="mh-list">'+SVC.map(function(p){
  return '<li data-r><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span><span></span></div></li>'}).join("")+'</ul></div></section>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
var ICO={drop:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 6C25 13 29 18 29 24a9 9 0 0 1-18 0c0-6 4-11 9-18z"/><path d="M8 34 32 10"/></svg>',
 sensor:'<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="9" y="8" width="22" height="20"/><path d="M9 13h22M14 28v6M20 28v6M26 28v6"/><path d="M9 18h22M9 23h22" opacity=".5"/></svg>',
 globe:'<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="13"/><path d="M7 20h26M20 7c-5 4-5 22 0 26M20 7c5 4 5 22 0 26"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>Sensors &amp; analytical instruments<span class="nomob"> · Johnstown, Colorado</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The new gold standard</span> <span class="l"><em>in instrumentation.</em></span></h1>'+
    '<i class="hrule" aria-hidden="true" data-r></i>'+
    '<div class="hx-foot"><p class="s" data-r>Analytical instruments and custom components for OEMs: PID and FID sensors, analytical modules and the Truculence™ instrument platform, designed in Colorado and built in our own factories.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Talk to us</a></div></div>'+
   '</div>'+
   '<ul class="pil" aria-label="Applications Uniques at a glance">'+
    '<li class="p1" data-r><span class="pic">'+ICO.drop+'</span><div><span class="lab">Patented Heatwave™</span><p>PID sensors that keep working where moisture condenses.</p></div></li>'+
    '<li class="p2" data-r><span class="pic">'+ICO.sensor+'</span><div><span class="lab">PID and FID</span><p>Sensors, OEM modules and complete instruments.</p></div></li>'+
    '<li class="p3" data-r><span class="pic">'+ICO.globe+'</span><div><span class="lab">Colorado, Changsha, Taipei</span><p>R&amp;D, manufacturing and sales on two continents.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="about" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>About Applications Uniques</span>'+
   '<h2 class="txt" id="mani">An analytical science company that develops and perfects sensing technologies and instruments, <em>for environmental, industrial, workplace-safety and <span class="nw">agricultural monitoring.</span></em></h2></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2019</span><p class="k">Founded in Colorado to produce new technologies and superior products</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40</span><p class="k">Years of our founder’s experience in analytical instrumentation</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Offices with manufacturing: Johnstown, Changsha and Taipei</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Why Heatwave™ matters</span><h2 class="d3"><span class="nw">A PID sensor</span> <span class="nw"><em>that survives the dew.</em></span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Ionise</span><span>Condense</span><span>Heatwave</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Light makes the signal.</h2><p>Inside a PID sensor, a vacuum-ultraviolet lamp ionises the volatile organic compounds that diffuse in through the filter. The ions are collected on an electrode, and the current is the reading.</p></article>'+
     '<article class="step"><h2>Moisture is the enemy.</h2><p>Overnight, ambient moisture condenses inside an ordinary PID sensor. The pure water dissolves contaminants and moves them around, so the response drifts; with chlorinated or fluorinated compounds present, a sensor can be destroyed in as little as two weeks.</p></article>'+
     '<article class="step"><h2>Heatwave™ stops it.</h2><p>Our patented Heatwave™ technology prevents ambient moisture from condensing in the sensor’s critical components, so it stays stable in humid, condensing environments. It is in our Rainbow, Heatwave, Arc-Light and Rainbow 2 sensors.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Sensors, modules</span> <span class="nw"><em>and instruments.</em></span></h2></div><p data-r>We make PID sensors in our factories in China and Taiwan and FIDs in the USA and Taiwan, and combine them into modules and instruments. If we don’t have exactly what you need, we will design, manufacture and deliver it for you.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec dark" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">Every way to</span> <span class="nw"><em>measure a gas.</em></span></h2></div><p data-r>Our designs are highly modular and scalable, and most can be reconfigured in the field. Behind them is hands-on expertise across detectors, analytical methods, selectivity and sample types.</p></div>'+
   techs()+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split"><span class="nw">Your success</span> <span class="nw"><em>is our goal.</em></span></h2></div><p data-r>We support our customers’ R&amp;D groups with custom designs, consultation on monitoring approaches and support for regulatory compliance, balancing performance and cost.</p></div>'+
   svcs()+
   '<figure class="aufq" data-r><blockquote>“With our understanding of the best available technologies and decades of applications experience, we enable our clients to overcome the challenges they face.”</blockquote><figcaption><span class="lab">Doug Bailey</span>Founder, Director &amp; General Manager</figcaption></figure>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">New sensors,</span> <span class="nw"><em>a new platform.</em></span></h2></div><p data-r>Product releases, patents and trade fairs.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>OEMs, integrators and monitoring teams</span>'+
   '<h2 class="big split"><span class="nw">Tell us what</span> <span class="nw"><em>you need to measure.</em></span></h2>'+
   '<p class="sub" data-r>We are always happy to hear about your application, your analysis needs and the challenges you face.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/products">See our products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Americas &amp; Europe</span><p data-r>Applications Uniques Ltd<br>413 Hickory Lane<br>Johnstown, CO 80534</p><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Mainland China</span><p data-r>Hunan Senqi Technology Co. Ltd<br>Changsha, China</p></div>'+
    '<div><span class="lab" data-r>Asia, Pacific &amp; Africa</span><p data-r>Applications Uniques Taiwan Co. Ltd<br>Taipei, Taiwan</p><p data-r><a class="ul" href="mailto:sales@aut.com.tw">sales@aut.com.tw</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Applications Uniques Ltd<br>413 Hickory Lane<br>Johnstown, CO 80534</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19706851628">+1 970 685 1628</a></div>'+
   '<div class="c"><span class="lab">Offices</span>Johnstown, Colorado<br>Changsha, China<br>Taipei, Taiwan</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 96" aria-hidden="true"><text x="320" y="64" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-size:40px;letter-spacing:.01em"><tspan fill="#f3f6f5" font-weight="700">APPLICATIONS</tspan><tspan fill="#f3f6f5" font-weight="300"> UNIQUES</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Applications Uniques Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route. A typed or linked #/section hash scrolls to that section; nav clicks on #/products,
   #/technology, #/services or #/news (the nav items) opens that item's build-out page, as a nav click does (buildout.js) ================= */
var BOK={products:1,technology:1,services:1,news:1};
function boOpen(k){try{if(window.BuildOut&&BuildOut.open){BuildOut.open(k);return true}}catch(x){}return false}
var SECS={about:"about",products:"products",technology:"technology",services:"services",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Applications Uniques — the new gold standard in instrumentation",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){try{history.replaceState(null,"","#/")}catch(x){}secGo(r.sec,true)},300)})()})();
