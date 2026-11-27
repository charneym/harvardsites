/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function flag(){
  return '<dl class="drq">'+FLAG.map(function(q){return '<div data-r><dt class="lab">'+esc(q[0])+'</dt><dd><b>'+esc(q[1])+'</b><span>'+esc(q[2])+'</span></dd></div>'}).join("")+'</dl>'}
function line(){return '<ul class="pfr pipe np">'+LINE.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab cpy">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function soft(){
  return '<dl class="drq dq4">'+SOFT.map(function(q){return '<div data-r><dt class="lab">'+esc(q[0])+'</dt><dd><span>'+esc(q[1])+'</span></dd></div>'}).join("")+'</dl>'}
function hist(){var H=[
  ["1992","Founded by Constantine Grapsas, now AIM’s President. AIM is short for Automated Industrial Machinery."],
  ["60+","variations of wire benders, sized by wire capacity, from 2 mm up to 16 mm on the AFM 16."],
  ["1,300+","installations in the Americas, Europe, Asia and Australia, for more than 1,000 customers."],
  ["2","manufacturing facilities, in North America and Europe; every machine made in the U.S.A. is built in Florida."]];
  return '<ol class="sg-tl">'+H.map(function(h){return '<li data-r><span class="y">'+esc(h[0])+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function quotes(){
  return '<ul class="aq">'+QUOTES.map(function(q){return '<li data-r><blockquote>“'+esc(q[0].replace(/^“|”$/g,""))+'”</blockquote><p><b>'+esc(q[1])+'</b><span>'+esc(q[2])+'</span></p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1841" height="1456" alt="AIM AFES 3DxT CNC wire bender with touchscreen console, turret head and bending arm" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>CNC wire bending machines<span class="nomob"> · Tampa, Florida</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">The leader in</span></span> <span class="l"><span class="nw">CNC wire bending.</span></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>From one to 24 servo axes, AIM builds the most complete line of wire bending machines on the market, for more than 1,000 customers worldwide. Made in the U.S.A., manufactured in Florida.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">See the machines '+ARR+'</a><a class="btn" href="#/contact">Contact sales</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Forming our future with yours</span>'+
   '<h2 class="txt" id="mani"><span class="nwp">Change the modules</span> <span class="nwp">and a 2D machine</span> <span class="nwp">makes frames;</span> <span class="nwp">add modules</span> <span class="nwp">and it chamfers, welds,</span> <span class="nwp">threads and presses</span> <span class="nwp">in line.</span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1,300+</span><p class="k">AIM machines installed in the Americas, Europe, Asia and Australia</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">24</span><p class="k">servo axes on the Gemini twin-headed bender; from one on a feed-and-cut line</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">16 mm</span><p class="k">largest wire capacity, on the AFM 16 (from 2 mm on the smallest)</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">On an AccuForm machine</span><h2 class="d3"><span class="nw">From the coil</span> <span class="nw">to a finished part.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Straighten</span><span>Feed</span><span>Bend</span><span>Cut</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Straight</span> <span class="nw">off the coil.</span></h2><p>AccuForm machines take wire straight from the coil. A payoff and a 2-plane straightener take the curl out before the wire reaches the feed.</p></article>'+
     '<article class="step"><h2><span class="nw">Fed through</span> <span class="nw">the head.</span></h2><p>Servo feed rollers and an encoder push the wire through the bending head, every module synchronised from the same computer.</p></article>'+
     '<article class="step"><h2><span class="nw">Bent in 2D</span> <span class="nw">or 3D.</span></h2><p>Feed, bend, feed, bend: the program comes from SmartEditor, AIM’s own software, which imports DXF, XYZ, STEP and IGES files and simulates every bend first.</p></article>'+
     '<article class="step"><h2><span class="nw">Cut,</span> <span class="nw">in one cell.</span></h2><p>The cutter shears the finished part. Add modules and the same cell chamfers, butt welds, end forms, drills, marks, threads and presses in line.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Machines that take wire</span> <em class="nw">straight from the coil.</em></h2></div><p data-r>AccuForm machines straighten, feed, bend and cut wire in one cell, every module synchronised from the same computer and programmed in AIM’s own SmartEditor®.</p></div>'+
   flag()+
  '</div></section>'+

  '<section class="sec dark2" id="line" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The full line</span><h2 class="d2 split"><span class="nw">From a 1D feeder</span> <em class="nw">to a robot cell.</em></h2></div><p data-r>Wire capacity sets the size: 4, 6, 8, 10, 12, 13, 14 or 16 mm. AIM’s wire capacity and tensile charts pick the right machine.</p></div>'+
   line()+
  '</div></section>'+

  '<section class="sec light" id="software" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Software</span><h2 class="d2 split"><span class="nw">SmartEditor®, designed</span> <em class="nw">and developed by AIM.</em></h2></div><p data-r>The same software runs every AIM model, from the compact benders to the Gemini. The online AIM Academy trains operators around the clock.</p></div>'+
   soft()+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Automated Industrial</span> <em class="nw">Machinery, since 1992.</em></h2></div><p data-r>AIM builds 2D and 3D CNC bending machinery and exports it from two manufacturing facilities, for contract fabricators and OEMs in construction, automotive, medical, point-of-purchase display, refrigeration, food service, HVAC, storage and material handling.</p></div>'+
   hist()+
   quotes()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News and trade shows</span><h2 class="d2 split"><span class="nw">Next show,</span> <em class="nw">Interwire 2027.</em></h2></div><p data-r>May 4–6, 2027, Georgia World Congress Center, Atlanta: see the machines running on Booth 905. Each entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact AIM</span>'+
   '<h2 class="big split"><span class="nw">Send us</span> <em class="nw">your part drawing.</em></h2>'+
   '<p class="sub" data-r>Sales, support and human resources all start from one form. STEP, IGES, DXF and DWG files are welcome with your enquiry.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email sales '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>US headquarters</span><p data-r>Automated Industrial Machinery, Inc.<br>14103 McCormick Drive<br>Tampa, FL 33626, USA</p></div>'+
    '<div><span class="lab" data-r>Sales</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Worldwide</span><p data-r>Technical sales agents across North America and Europe<br><a class="ul" href="'+DP+'" target="_blank" rel="noopener">aimmachines.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">US headquarters</span>14103 McCormick Drive<br>Tampa, FL 33626</div>'+
   '<div class="c"><span class="lab">Sales</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/software">Software</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">AIM Inc.</span>Automated Industrial Machinery, Inc.<br>CNC wire bending since 1992</div>'+
  '</div><svg class="bigsvg flogo" viewBox="0 0 1000 70" aria-hidden="true"><text x="500" y="56" text-anchor="middle" style="letter-spacing:.16em">AIM · MADE IN THE U.S.A.</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 AIM Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",products:"products",line:"line",software:"software",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"AIM Inc. — CNC wire bending machines, made in Tampa, Florida",x:"Home"};
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
