/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">More '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){
  return '<div class="mh vxmh"><ul class="mh-list">'+TEAM.map(function(p){
    return '<li><div class="mh-row vx-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="plnw">'+NEWS.map(function(n){
  return '<li data-r><a href="'+n[2]+'" target="_blank" rel="noopener"><span class="lab">'+esc(n[0])+'</span><span class="h">'+esc(n[1])+'</span><span class="ar" aria-hidden="true">'+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>PCB signal integrity<span class="nomob"> · since 1976</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Controlled impedance,</span><span class="l"><em>from stackup to test.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Polar designs and manufactures the tools that simplify the design, fabrication and testing of printed circuit boards, from Speedstack and the Si field solvers to the industry-standard CITS test system.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our tools '+ARR+'</a><a class="btn" href="#/contact">Talk to Polar</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Adapt and thrive</span>'+
   '<h2 class="txt" id="mani">Since the 1990s Polar has followed the market to ever faster communications, and its CITS test systems have become synonymous with <em><span class="nw">testing high-speed</span> <span class="nw">circuit boards.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1976</span><p class="k">Founded by Doug Campbell, with operations and channel partners in the US, UK, Europe and Asia Pacific</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">9th</span><p class="k">Generation of the Polar impedance test system: the CITS880s</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">43.5&nbsp;GHz</span><p class="k">Delta-L 4.0 differential insertion loss test with Atlas Si for VNA</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3"><span class="nw">One board,</span> <em class="nw">three tools.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Stack</span><span>Solve</span><span>Test</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Stack it up.</h2><p>Speedstack builds the layer stackup from laminate vendors’ own material libraries, then documents it, drill plan and materials included, so the board that gets built is the board that was designed.</p></article>'+
     '<article class="step"><h2>Solve the fields.</h2><p>The Si8000m and Si9000e boundary element field solvers calculate the impedance and insertion loss of each transmission line in the stack, with copper roughness modelled.</p></article>'+
     '<article class="step"><h2>Test the coupon.</h2><p>CGen draws the test coupon. On the production floor the CITS880s measures its impedance by time domain reflectometry, and Atlas measures its insertion loss.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Tools for every stage</span> <em class="nw">of the board.</em></h2></div><p data-r>For OEMs and fabricators alike: impedance-controlled boards in the popular 100&nbsp;MHz to 3&nbsp;GHz region, and insertion loss work in the 3 to 50&nbsp;GHz arena.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Where they are used</span><p class="cr" data-r><span>Communications</span><span>Computing</span><span>High-end video and audio</span><span>Defence and aerospace</span><span>PCB fabrication</span><span>Automotive</span><span>Life sciences</span><span>Biomedical electronics</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="news" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Fifty years,</span> <em class="nw">still shipping.</em></h2></div><p data-r>Material libraries, software releases and shows, from the Polar news page. Polar marked fifty years of products in 2026.</p></div>'+
   '<div class="plnx">'+
    '<div class="plyr" data-r><span class="lab">1976 – 2026</span><p class="big">50</p><p class="cap2">Years of Polar products, from the Toneohm 400A short locator to the CITS880s.</p><a class="lab ul" href="'+PI+'timeline/timeline.html" target="_blank" rel="noopener">The timeline '+ARR+'</a></div>'+
    news()+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Built in a garage,</span> <em class="nw">used worldwide.</em></h2></div><p data-r>Doug Campbell started out hand building and etching circuit boards in his garage, with a small team of electronics people, most of them formerly of Tektronix. Polar tools are now licensed to OEMs and fabricators around the world.</p></div>'+
   team()+
   '<div class="ev"><span class="lab kick" data-r>Offices, shows and reading</span><dl>'+
    '<div data-r><dt class="lab">Head office</dt><dd>Polar Instruments Ltd, Garenne Park, St. Sampson, Guernsey</dd></div>'+
    '<div data-r><dt class="lab">Offices</dt><dd>Polar Instruments Europe Ltd, Waterlooville, Hampshire · Polar Instruments, Inc., Beaverton, Oregon</dd></div>'+
    '<div data-r><dt class="lab">Shows</dt><dd><a class="ul" href="'+PI+'exhibit/exhibit.html" target="_blank" rel="noopener">EIPC Winter Conference, Bremen, and DesignCon, Santa Clara, February 2027</a></dd></div>'+
    '<div data-r><dt class="lab">Reading</dt><dd><a class="ul" href="'+PI+'support/publications.html" target="_blank" rel="noopener">Secrets of High-Speed PCBs</a>, free from I-Connect007, and the Polar YouTube channel</dd></div>'+
    '<div data-r><dt class="lab">Material partners</dt><dd>Laminate and foil makers whose materials load straight into Speedstack, from Isola and Panasonic to Rogers and Ventec</dd></div>'+
    '<div data-r><dt class="lab">Support</dt><dd>Polarcare: application notes, downloads, licensing and updates for every Polar tool</dd></div>'+
   '</dl></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Talk to us</span> <em class="nw">about your boards.</em></h2>'+
   '<p class="sub" data-r>Ask Polarcare for an evaluation, a quote or an update, or ask your regional office to call you to discuss your requirements.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Polarcare '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Head office</span><p data-r>Polar Instruments Ltd<br>Garenne Park, Rue de la Cache<br>St. Sampson, Guernsey GY2 4AF</p></div>'+
    '<div><span class="lab" data-r>Europe</span><p data-r>Polar Instruments Europe Ltd<br>23 The Parkwood Centre, Aston Road<br>Waterlooville, Hampshire PO7 7HT<br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>USA, Canada, Mexico</span><p data-r>Polar Instruments, Inc.<br>Suite 510, Cascade Plaza West<br>12655 SW Center Street, Beaverton, OR 97005<br><a class="ul" href="tel:'+TELUS+'">'+TELUST+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Head office</span>Polar Instruments Ltd<br>Garenne Park, Rue de la Cache<br>St. Sampson, Guernsey GY2 4AF</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/process">How it works</a><br><a class="ul" href="#/news">News</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Tools</span>Speedstack · CGen<br>Si8000m · Si9000e<br>CITS880s · Atlas · Toneohm</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="54" text-anchor="middle" style="font-family:\'Archivo Black\',Arial,sans-serif;font-weight:400;font-size:60px;letter-spacing:.04em">POLAR INSTRUMENTS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Polar Instruments</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",process:"story",products:"products",news:"news",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Polar Instruments — PCB signal integrity, stackup design and controlled impedance test, since 1976",x:"Home"};
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
