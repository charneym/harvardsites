/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">'+"Range"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>A family firm</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* four design-service points (harrisonsilverdale.com > Home and About Us) */
function caps(){var C=[
  ["Special parts","<span class=\"nw\">Designed</span> <span class=\"nw\">in house</span>","Special parts can be developed with the help of the in-house design service, which is covered by the ISO 9001:2015 quality approval.",'<path d="M10 46L46 10"/><path d="M10 46H24M10 46V32"/><circle class="a" cx="38" cy="38" r="9"/><path class="a" d="M38 29V47M29 38H47"/>'],
  ["Technical support","<span class=\"nw\">From concept</span> <span class=\"nw\">to bulk supply</span>","Technical support runs from the design concept through R&amp;D to bulk supply, with stock management options once the part is in production.",'<path d="M6 44H50"/><path d="M10 44V34M22 44V26M34 44V18"/><path class="a" d="M46 44V10"/><circle class="f" cx="46" cy="10" r="2.6"/>'],
  ["Traceability","<span class=\"nw\">Batch traceable,</span> <span class=\"nw\">PPAP on request</span>","All products are fully batch traceable. ISIR reports and PPAP Level 1 to 4 are available on request.",'<rect x="12" y="8" width="32" height="40"/><path d="M18 18H38M18 26H38M18 34H30"/><path class="a" d="M30 40L35 45L46 32"/>'],
  ["Sourcing","<span class=\"nw\">Made locally</span> <span class=\"nw\">and worldwide</span>","Parts are manufactured both locally and across the globe, which gives flexible lead times and competitive pricing.",'<circle cx="28" cy="28" r="19"/><path d="M9 28H47M28 9C20 16 20 40 28 47M28 9C36 16 36 40 28 47"/><circle class="f" cx="28" cy="28" r="3"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Innovative fasteners<span class="nomob"> · Dronfield, since 1982</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Making the right</span> <span class="l"><em class="nw">connection.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Since 1982 Harrison Silverdale has supplied specialised industrial fasteners to OEMs and distributors: threaded inserts for plastics and composites, spring steel and sheet metal fasteners, and special parts designed in house.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Discuss a fastener</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Dronfield, Sheffield, since 1982</span>'+
   '<h2 class="txt" id="mani"><span class="nwp">Fasteners for plastics,</span> <span class="nwp">composites and sheet metal,</span> <em><span class="nwp">with the engineering</span> <span class="nwp">expertise behind them.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1982</span><p class="k">the year John Harrison formed the company to serve manufacturing in every market sector</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">M1.4–M8</span><p class="k">the thread sizes the HS1000 heat staking machine sets into thermoplastics and 3D prints</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1–4</span><p class="k">PPAP levels available on request, with ISIR reports; every product fully batch traceable</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Heat staking a threaded insert</span><h2 class="d3"><span class="nw">A brass thread</span> <em class="nw">in plastic.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Hole</span><span>Heat</span><span>Press</span><span>Fasten</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Every insert</span> <span class="nw">has its hole.</span></h2><p>Each size comes with its hole and minimum wall. An M4 FL insert, 6.1 mm across and 7.9 mm long, wants a 5.6 mm hole and at least 2.8 mm of wall around it.</p></article>'+
     '<article class="step"><h2><span class="nw">The tip brings</span> <span class="nw">the heat.</span></h2><p>The HS1000 heat staking machine carries the insert on its tip. A digital controller sets the temperature anywhere from 0 to 400 °C.</p></article>'+
     '<article class="step"><h2><span class="nw">Pressed home,</span> <span class="nw">the plastic flows.</span></h2><p>On its 55 mm stroke the HS1000 presses the insert into the boss. The softened plastic flows into the knurls and ribs, which give high torque and pull-out performance.</p></article>'+
     '<article class="step"><h2><span class="nw">A metal thread,</span> <span class="nw">ready to fasten.</span></h2><p>Once the plastic has set around it, the part has a brass metric thread, and the screw goes in. The HS1000 sets inserts from M1.4 to M8.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Inserts, clips</span> <em class="nw">and screws.</em></h2></div><p data-r>The core range is fasteners for plastic and sheet metal, from threaded inserts and compression limiters to cage nuts, self clinching nuts, studs and standoffs. The range is wide enough that the applications are endless.</p></div>'+
   prods()+
   '<div class="act shop" data-r><a class="btn solid" href="'+CP+'downloads/product-guide-23.pdf" target="_blank" rel="noopener">Product guide (PDF) '+ARR+'</a><a class="btn" href="'+CP+'downloads/fasteners-for-plastics-cat-23.pdf" target="_blank" rel="noopener">Fasteners for plastic catalogue</a></div>'+
  '</div></section>'+

  '<section class="sec light" id="design" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Design service</span><h2 class="d2 split"><span class="nw">From the concept</span> <em class="nw">to the bulk supply.</em></h2></div><p data-r>When the standard range does not fit, the part can be designed. Engineering expertise and product knowledge cover the whole way, from the first drawing to stock on your shelf.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">A family firm</span> <em class="nw">in Dronfield.</em></h2></div><p data-r>Harrison Silverdale was formed by John Harrison in 1982 and has gained a reputation for quality and reliability with leading OEMs and distributors across Europe, the USA and Australasia.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>What we stand for</span><ul>'+
     '<li data-r><b>Customer service</b>The ethos has stayed the same as the company has grown: customer service first.</li>'+
     '<li data-r><b>Technical support</b>Engineering expertise and knowledge of the fastener industry behind every enquiry.</li>'+
     '<li data-r><b>Competitive pricing</b>A cost-effective supply solution for all your fastener requirements.</li>'+
     '<li data-r><b>Quality</b>Every procedure is covered by the ISO 9001:2015 approval.</li>'+
    '</ul></div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Credentials</span><p class="cr" data-r><span>ISO 9001:2015</span><span>UKAS</span><span>Cyber Essentials</span><span>EcoVadis</span><span>BIAFD</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News and trade fairs</span><h2 class="d2 split"><span class="nw">Next stop,</span> <em class="nw">Farnborough 2027.</em></h2></div><p data-r>Harrison Silverdale exhibits at Southern Manufacturing &amp; Electronics, 2 to 4 February 2027, Stand J245. Each entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Your part,</span> <em class="nw">the right fastener.</em></h2>'+
   '<p class="sub" data-r>For a no-obligation discussion of your fastener requirements, call or email the sales team. Standard range or special part, we are well placed to find a cost-effective supply solution.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email the sales team '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Harrison Silverdale Ltd</span><br><span>Traso Business Park, Callywhite Lane</span><br><span>Dronfield, Sheffield S18 2XR</span></p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Phone '+TELT+'</span><br><span>Fax '+FAXT+'</span></p></div>'+
    '<div><span class="lab" data-r>Managing Director</span><p data-r><span>Mark Harrison</span><br><span>ISO 9001:2015 approved</span><br><a class="ul" href="'+CP+'downloads/Fastener-For-Sheet-Metals-Cat-2019.pdf" target="_blank" rel="noopener">Sheet metal catalogue</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Harrison Silverdale Ltd<br>Traso Business Park, Callywhite Lane<br>Dronfield, Sheffield S18 2XR, UK</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/design">Design service</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Range</span>Threaded inserts, spring steel and sheet metal fasteners, threadforming screws, turned parts and tooling</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-weight:500;font-size:38px;letter-spacing:.2em">HARRISON SILVERDALE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Harrison Silverdale Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",products:"products",design:"design",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Harrison Silverdale — Innovative fasteners for plastics and sheet metal, Dronfield",x:"Home"};
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
