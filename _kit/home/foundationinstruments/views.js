/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Custom instrumentation","Tired of a painful, labour-intensive, finicky analytical method? We help automate or improve it, so a hard measurement becomes an easy one.",'<rect x="10" y="12" width="36" height="32"/><path d="M10 22h36"/><path class="a" d="M17 36l7-7 6 5 9-10"/>'],
  ["Engineering and 3D printing","From conceptual design to prototype printing and scale-up. In-house prototyping, 3D printing and testing support a rapid build-and-deploy model.",'<path d="M10 46h36M14 46V20h28v26"/><path d="M22 20v-8h12v8"/><path class="a" d="M21 40h14M24 34h8M26 28h4"/>'],
  ["Testing and consulting","Quick-turnaround THM and HAA testing when you need more data, and our experience with water treatment processes and chemistries to optimise your system.",'<path d="M22 8h12M24 8v14L12 44h32L32 22V8"/><path class="a" d="M17 35h22"/><circle class="f" cx="25" cy="39" r="2.2"/><circle class="f" cx="32" cy="38" r="1.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>At a glance</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Specifications as published on the Foundation Instruments product pages. Download each datasheet from the product page for the full detail.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Disinfection by-product analysis<span class="nomob"> · Collierville, Tennessee</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Disinfection</span><span class="l">by-products, measured</span><span class="l"><em>at the plant.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Foundation Instruments builds affordable, fully automated analysers for trihalomethanes and haloacetic acids, so drinking water utilities can monitor in real time, optimise treatment, save money and stay in compliance.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/products">The analysers</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="why" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Most treatment plants still adjust their processes without on-site by-product data, because standard methods suit quarterly compliance, not daily control. <em>We put the measurement where the decisions are made.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;1 h</span><p class="k">From a filled vial to a total THM result on the THM-Meter, with no specialised skills required</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;$1</span><p class="k">Approximate cost per test on the THM-RR, which runs online 24 hours a day, 365 days a year</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20+</span><p class="k">Years of academic research in disinfection by-product testing behind the analysers</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">From chlorine <em>to a number.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Disinfect</span><span>Wait</span><span>Measure</span><span>Adjust</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Chlorine keeps water safe, and leaves something behind.</h2><p>Chlorination disinfects drinking water, but chlorine also reacts with organic matter in the water to form halogenated by-products. Trihalomethanes are the most common class, and haloacetic acids the second.</p></article>'+
     '<article class="step"><h2>Regulated for decades, measured a few times a year.</h2><p>Standard EPA methods suit quarterly compliance monitoring but are too expensive and complex for real-time use. Without current data, operators adjust treatment blind.</p></article>'+
     '<article class="step"><h2>Fill a vial, touch start.</h2><p>Our analysers bring the measurement on site. On the THM-Meter the operator inserts a sample, touches start and has a total THM result in under an hour; the THM-RR and HAA-RR run online around the clock.</p></article>'+
     '<article class="step"><h2>Adjust the plant with real numbers.</h2><p>Real-time data lets a plant optimise treatment, use less chemical and energy, and lower by-product levels at the plant and across the distribution system.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Analysers for <em>the water you treat.</em></h2></div><p data-r>Fully automated chemical analysers for trihalomethanes and haloacetic acids, for on-site, online and real-time monitoring at treatment plants and in distribution systems, with the reagents, consumables and parts to keep them running.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split">Your technology <em>partner.</em></h2></div><p data-r>A diverse team of chemists and engineers spanning chemistry, engineering and software and hardware development, with a track record of bringing new products to market. Let us take on your next R&amp;D project.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About</span><h2 class="d2 split">A University of Memphis <em>spin-off.</em></h2></div><p data-r>Founded in 2009, Foundation Instruments brings analytical chemists together with mechanical, electrical, software and computer engineers. Today we are expanding into automated methods for biomedical applications, while staying true to our strengths.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">On the <em>record.</em></h2></div><p data-r>Our analysers have been developed with support from the National Institute of Environmental Health Sciences. Every item below links to the public record.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Let’s talk about <em>your water.</em></h2>'+
   '<p class="sub" data-r>Need help assessing your system to control disinfection by-products, or ready to bring a new product to market? Send us a note, or call or text.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="tel:+19013000426">Call 901 300 0426</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>91 Peyton Pkwy, Ste 103<br>Collierville, TN 38017</p></div>'+
    '<div><span class="lab" data-r>Sales</span><p data-r><a class="ul" href="'+MAIL+'">sales@fih2o.com</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+19013000426">1 901 300 0426</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>91 Peyton Pkwy, Ste 103<br>Collierville, TN 38017</div>'+
   '<div class="c"><span class="lab">Sales</span><a class="ul" href="'+MAIL+'">sales@fih2o.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/about">About</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Focus</span>THM and HAA analysers · drinking water</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1500 66" aria-hidden="true"><text x="750" y="58" text-anchor="middle" style="font-family:\'Red Hat Display\',sans-serif;font-weight:600;font-size:64px">FOUNDATION INSTRUMENTS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Foundation Instruments, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={why:"why",story:"story",products:"products",services:"services",about:"about",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Foundation Instruments — on-site THM and HAA analysers for drinking water",x:"Home"};
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
