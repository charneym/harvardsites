/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function prodRows(){return '<ul class="pfr path">'+PRODUCTS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[3])+'</p><a class="lab lk" href="'+c[4]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' on interpower.com">Range '+ARR+'</a></li>'}).join("")+'</ul>'}
function regionList(){return '<ul class="ind ipr">'+REGIONS.map(function(a){return '<li>'+esc(a)+'</li>'}).join("")+'</ul>'}
function histGrid(){return '<ol class="iph">'+HISTORY.map(function(p){return '<li><span class="y">'+esc(p[0])+'</span><p>'+esc(p[1])+'</p></li>'}).join("")+'</ol>'}
function newsRows(){return '<ul class="rows">'+NEWS.map(function(n){return '<li><a class="row-a" href="'+n[2]+'" target="_blank" rel="noopener"><span class="nm"><span class="lab">'+esc(n[0])+'</span></span><h3>'+esc(n[1])+'</h3><span class="c4">'+ARRX+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Power cords and components<span class="nomob"> · Oskaloosa, Iowa</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Power cords</span> <span class="l">made in Iowa,</span> <span class="l"><em>ready for the world.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Interpower makes North American and international power cords, cord sets, cable and IEC 60320 components, with no minimum order or dollar requirements and same day shipments on stock items.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/manufacturing">How a cord set is made</a></div></div>'+
   '<span class="lab cap">IEC 60320 C13 cord set with NEMA 5-15P plug · render</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap"><div class="mrow">'+
   '<div class="mani-in"><span class="lab kick" data-r>Interpower</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Founded by Bob Wersen</span> <span class="nw">in Berkeley in 1975,</span> <span class="nw">Interpower moved</span> <span class="nw">1,800 miles to</span> <span class="nw">Oskaloosa, Iowa,</span> <span class="nw">in 1993.</span> <b class="w0"><span class="nw">Its mission:</span> <span class="nw">make it easy to design,</span> <span class="nw">build and maintain</span> <span class="nw">products for</span> <span class="nw">worldwide markets.</span></b></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1975</span><p class="k">The year Interpower, then Panel Components Corporation, was founded</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 week</span><p class="k">U.S. manufacturing lead time, achieved in 2008</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100%</span><p class="k">Of Interpower-manufactured power cords and cord sets are tested</p></div>'+
   '</div></div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Ordering</span><h3 data-r>No minimum orders</h3><p data-r>No minimum order or dollar requirements, and blanket or scheduled orders on all products.</p></div>'+
    '<div><span class="lab kick" data-r>Shipping</span><h3 data-r>Same day shipments</h3><p data-r>Same day shipping on in-stock products, with specialized labeling and packaging available as a value-added service.</p></div>'+
    '<div><span class="lab kick" data-r>Quality</span><h3 data-r>ISO 9001:2015</h3><p data-r>A certified quality system, with an internal audit and a corrective and preventive action system.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Manufacturing</span><h2 class="d3"><span class="nw">From cable</span> <em class="nw">to cord set.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Cable</span><span>Molding</span><span>Testing</span><span>Shipping</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The cable.</h2><p>Since 2013 Interpower has extruded its own cable, on the production line in its building in Lamoni, Iowa, for the North American cord sets, power cords and jumper cords it makes there.</p></article>'+
     '<article class="step"><h2>The molding.</h2><p>Plugs and connectors are molded onto the cable, with strain reliefs that keep it from an acute bend radius. Interpower makes its own IEC 60320 C13 and C19 connectors, approved in 2000.</p></article>'+
     '<article class="step"><h2>The testing.</h2><p>Every Interpower-manufactured power cord and cord set is tested. The quality topics on its site cover the tests behind it: cord anchorage pull, insertion-withdrawal, temperature rise and vertical flame.</p></article>'+
     '<article class="step"><h2>The shipping.</h2><p>A one-week U.S. manufacturing lead time, same day shipments on stock items, no minimum order or dollar requirements, and cable cut to length, whether it is five or 500 feet.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Everything between</span> <em class="nw">the mains and the device.</em></h2></div><p data-r>Power cords, cord sets, cable and components for North American and international markets, with free technical support and value-added services.</p></div>'+
   prodRows()+
  '</div></section>'+

  '<section class="sec dark" id="hospital" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Hospital-grade</span><h2 class="d2 split"><span class="nw">Design. Quality.</span> <em class="nw">Safety.</em></h2></div><p data-r>Hospital-grade plugs and sockets, power cords and cord sets, and power entry modules. Hospital-grade cords, plugs and sockets are subject to specific requirements or recommendations in four markets.</p></div>'+
   regionList()+
   '<div class="act ipa" data-r><a class="btn" href="'+WEB+'hospitalgrade.html" target="_blank" rel="noopener">Hospital-grade products '+ARR+'</a></div>'+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Fifty years,</span> <em class="nw">one mission.</em></h2></div><p data-r>From a Berkeley start-up to Oskaloosa, Lamoni and Ames, Iowa, and Interpower Components Ltd. in Milton Keynes, United Kingdom.</p></div>'+
   histGrid()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">New connectors,</span> <em class="nw">new markets.</em></h2></div><p data-r>Launches, shows and notes from Interpower’s press releases and its InfoPower blog.</p></div>'+
   newsRows()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Customer Service in Iowa and the UK</span>'+
   '<h2 class="big split"><span class="nw">Tell us where</span> <em class="nw">it ships.</em></h2>'+
   '<p class="sub" data-r>Ask Interpower about a cord set, a component or a plug pattern for a new market, with free technical support for every design.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Oskaloosa · Iowa</span><p data-r><span class="bl">100 Interpower Avenue</span><span class="bl">Oskaloosa, IA 52577</span></p><p data-r><a class="ul" href="tel:+18006622290">(800) 662-2290</a></p></div>'+
    '<div><span class="lab" data-r>Lamoni and Ames · Iowa</span><p data-r><span class="bl">221 South Spruce Drive, Lamoni</span><span class="bl">2900 SE 5th Street, Ames</span></p><p data-r><a class="ul" href="tel:+16416735000">(641) 673-5000</a></p></div>'+
    '<div><span class="lab" data-r>Milton Keynes · UK</span><p data-r><span class="bl">10 Kelvin Drive, Knowlhill</span><span class="bl">Milton Keynes MK5 8NH</span></p><p data-r><a class="ul" href="mailto:uk@interpower.com">uk@interpower.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>100 Interpower Avenue<br>Oskaloosa, IA 52577</div>'+
   '<div class="c"><span class="lab">Locations</span>Lamoni and Ames, Iowa<br>Milton Keynes, United Kingdom</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/hospital-grade">Hospital-grade</a><br><a class="ul" href="#/manufacturing">Manufacturing</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18006622290">(800) 662-2290</a></div>'+
  '</div>'+FOOTMARK+
  '<div class="legal"><span class="lab">© 2026 Interpower</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",manufacturing:"story",products:"products","hospital-grade":"hospital",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Interpower — power cords, cord sets and components made in Iowa",x:"Home"};
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
