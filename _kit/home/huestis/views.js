/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function dq(A,cls){
  return '<dl class="drq'+(cls?' '+cls:'')+'">'+A.map(function(q){return '<div data-r><dt class="lab">'+esc(q[0])+'</dt><dd>'+(q.length>2?'<b>'+esc(q[1])+'</b>':'')+'<span>'+esc(q[q.length-1])+'</span></dd></div>'}).join("")+'</dl>'}
function plant(){return '<ul class="pfr pipe np pl2">'+PLANT.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><p>'+esc(c[1])+'</p></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["1920","J. Floyd Huestis founds Huestis Machine Corporation in Bristol as a specialty machinery supplier to local manufacturers."],
  ["Early years","Custom work for Sam Colt’s National India Rubber Co. and for Nat Herreshoff’s America’s Cup defenders Weetamoe and Enterprise."],
  ["1970s","Asked to build radiation-therapy equipment: the start of Huestis Medical."],
  ["2006","The Huestis companies join TeamBest®, acquired by Krishnan Suthanthiran."]];
  return '<ol class="sg-tl">'+H.map(function(h){return '<li data-r><span class="y">'+esc(h[0])+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="880" height="1364" alt="Huestis CJS free-standing cable jacket stripper on its blue stand" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Wire and cable machinery<span class="nomob"> · Bristol, Rhode Island</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Wire and cable machines,</span></span> <span class="l"><span class="nw">built since 1920.</span></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>For more than 100 years Huestis Industrial has built low-cost, rugged and long-lasting machines for manufacturers around the world: air wipers, cable jacket strippers, pay-off and take-up stands, accumulators and custom machines.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/contact">Request information '+ARR+'</a><a class="btn" href="#/products">Our products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Designed, machined and assembled in Bristol</span>'+
   '<h2 class="txt" id="mani"><span class="nwp">From the reel</span> <span class="nwp">that feeds the line</span> <span class="nwp">to the reel</span> <span class="nwp">that collects it,</span> <span class="nwp">plus the tools that dry,</span> <span class="nwp">strip and join</span> <span class="nwp">the wire in between.</span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1920</span><p class="k">founded in Bristol, Rhode Island, by J. Floyd Huestis</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">ISO 9001</span><p class="k">registered, with in-house CNC machining and assembly</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">7 in</span><p class="k">custom air wipe openings, up to 177.8 mm</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How an air wipe works</span><h2 class="d3"><span class="nw">Dry wire,</span> <span class="nw">less compressed air.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Manifold</span><span>Jets</span><span>Turbulence</span><span>Venturi</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Air enters</span> <span class="nw">the body.</span></h2><p>Compressed air is channelled through a manifold in the body and distributed to a ring of jets around the wire. The body opens on a hinge, so the wipe goes on and off without threading the line.</p></article>'+
     '<article class="step"><h2><span class="nw">The jets</span> <span class="nw">meter the air.</span></h2><p>Jet orifices restrict the flow, giving efficient drying at the lowest possible air consumption.</p></article>'+
     '<article class="step"><h2><span class="nw">Turbulence lifts</span> <span class="nw">the water.</span></h2><p>Controlling the air’s flow and direction creates turbulence that removes water from the surface of the material.</p></article>'+
     '<article class="step"><h2><span class="nw">The Venturi effect</span> <span class="nw">adds flow.</span></h2><p>A Venturi effect inside the wipe draws in more air. Standard sizes are a starting point; custom openings go up to 7 in.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our products</span><h2 class="d2 split"><span class="nw">Machines for every</span> <em class="nw">stage of a wire line.</em></h2></div><p data-r>Every machine is designed, machined and assembled in Bristol, and the air wipes are also sold direct online.</p></div>'+
   dq(PROD,"dq3")+
  '</div></section>'+

  '<section class="sec dark2" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About us</span><h2 class="d2 split"><span class="nw">A Bristol machine shop</span> <em class="nw">for more than a century.</em></h2></div><p data-r>Huestis Industrial is a specialist in wire, cable and fiber optic machinery. Its reputation for dependability and rugged design comes from practical engineering and extensive in-house machining and assembly.</p></div>'+
   hist()+
   '<span class="lab kick sub-l" data-r>Manufacturing capabilities</span>'+
   plant()+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split"><span class="nw">Parts, service</span> <em class="nw">and real people to talk to.</em></h2></div><p data-r>The mission is plain: develop, manufacture and market reliable, cost-effective industrial and medical equipment, at a price that meets the customer’s full expectation.</p></div>'+
   dq(SERV,"dq4")+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Trade fairs</span> <em class="nw">and articles.</em></h2></div><p data-r>Most recently at wire 2026 in Düsseldorf. Each entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact us</span>'+
   '<h2 class="big split"><span class="nw">Tell us</span> <em class="nw">about your line.</em></h2>'+
   '<p class="sub" data-r>Call to discuss a custom machine and receive a free quote, or ask for parts lists and technical help.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email sales '+ARR+'</a><a class="btn" href="tel:'+TOLL+'">Call toll-free '+TOLLT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Main office</span><p data-r>Huestis Industrial<br>68 Buttonwood Street<br>Bristol, Rhode Island 02809<br><span>USA</span></p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><span>Toll-free <a class="ul" href="tel:'+TOLL+'">'+TOLLT+'</a></span></p></div>'+
    '<div><span class="lab" data-r>Paying</span><p data-r>MasterCard, Visa, American Express and Discover<br><span>Irrevocable and confirmed letters of credit</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Main office</span>68 Buttonwood Street<br>Bristol, Rhode Island 02809</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/about">About us</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Huestis</span>Industrial and Medical<br>A TeamBest® company</div>'+
  '</div><svg class="bigsvg flogo" viewBox="0 0 1000 70" aria-hidden="true"><text x="500" y="56" text-anchor="middle" style="letter-spacing:.16em">HUESTIS · BRISTOL, RI</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Huestis Industrial</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",products:"products",about:"about",services:"services",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Huestis Industrial — wire and cable machinery, Bristol, Rhode Island",x:"Home"};
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
