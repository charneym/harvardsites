/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) =================
   Sources: auditmicro.com (home, Mission, History, News & Events, product pages, the March 2020 letter in their news feed signed
   "Jeff Mauro, President, AUDIT MicroControls, Inc."), ADLM 2025 exhibitor list. Nothing else is claimed. */
function caps(){var C=[
  ["Calibration verification","<span class=\"nw\">Linearity</span> <span class=\"nw\">materials</span>","Liquid (LQ) and freeze-dried (FD) sets that simulate patient samples across the reportable range, for calibration verification and linearity.",'<path d="M8 46L48 10"/><circle class="a" cx="12" cy="42" r="3"/><circle class="a" cx="21" cy="34" r="3"/><circle class="a" cx="29" cy="27" r="3"/><circle class="a" cx="37" cy="20" r="3"/><circle class="a" cx="45" cy="13" r="3"/>'],
  ["Daily quality control","<span class=\"nw\">Assayed</span> <span class=\"nw\">controls</span>","Stable, assayed reference controls that monitor the precision of laboratory testing procedures, such as Control LQ Cystatin C.",'<rect x="18" y="16" width="20" height="34" rx="3"/><rect class="a" x="20" y="6" width="16" height="10"/>'],
  ["Analyzer-specific","<span class=\"nw\">Made for</span> <span class=\"nw\">your analyzer</span>","Universal and analyzer-specific products, including Linearity FD Immunoassay and Thyroid sets for Ortho Vitros.",'<rect x="8" y="12" width="40" height="30" rx="2"/><path class="a" d="M14 36L22 26L30 31L42 18"/>'],
  ["Free software","<span class=\"nw\">Auditor QC</span> <span class=\"nw\">instant reports</span>","Free, real-time data reduction: Levey-Jennings charts, linearity graphs and peer group analysis, in an inspector-friendly format.",'<path d="M8 44H48"/><path class="a" d="M10 30H46M10 22H46M10 38H46" stroke-dasharray="2 3"/><path d="M12 34L20 24L28 30L36 20L44 26"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+c[0]+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function svc(){var S=[
  ["Auditor QC","Free online data reduction in real time: Levey-Jennings charts and peer group analysis for daily QC, linearity graphs for calibration verification."],
  ["AUDIT FaxBack","Data reduction for laboratories that prefer to send results by fax."],
  ["AUDIT Ship standing orders","Receive your products according to your schedule, with personalized standing-order autoship and same-day shipping."],
  ["Support and education","Accessible, responsive technical support, package inserts online, and resources on the regulations that shape QC."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["2002","AUDIT MicroControls is founded in Eatonton, Georgia, by Aalto Scientific, a manufacturer and supplier for more than forty years."],
  ["Today","Daily quality controls and calibration verification materials for clinical laboratories, sold direct and through regional and national distributors."],
  ["2026","New Ortho Vitros linearity sets and Control LQ Cystatin C."]];
  return '<ol class="hst">'+H.map(function(h){return '<li data-r><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1230" height="573" alt="AUDIT Linearity LQ Osmolality, five levels A to E, in amber vials" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>QC for clinical laboratories<span class="nomob"> · Eatonton, Georgia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Quality control,</span> <span class="l"><em class="nw">made easy.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>AUDIT MicroControls makes daily quality controls and calibration verification materials for clinical laboratories, with free Auditor QC reports and same-day shipping.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The only total solution</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Controls, linearity</span> <span class="nw">and the data tools</span> <span class="nw">to read them,</span> <em><span class="nw">from one supplier,</span> <span class="nw">so life in the lab</span> <span class="nw">gets a little easier.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2002</span><p class="k">founded in Eatonton, Georgia, by Aalto Scientific</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">A–E</span><p class="k">five levels across the reportable range in a linearity set such as Linearity LQ Osmolality</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30 days</span><p class="k">open-vial stability of Control LQ Cystatin C at 2–8 °C</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Calibration verification</span><h2 class="d3"><span class="nw">Five levels,</span> <em class="nw">one clear line.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Run</span><span>Enter</span><span>Compare</span><span>Report</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Run the levels</span> <span class="nw">like patient samples.</span></h2><p>AUDIT linearity materials simulate human patient samples at levels across the reportable range of the assay.</p></article>'+
     '<article class="step"><h2><span class="nw">Enter results</span> <span class="nw">in Auditor QC.</span></h2><p>The free, online data reduction program takes your results in real time. Prefer paper? AUDIT FaxBack does the same by fax.</p></article>'+
     '<article class="step"><h2><span class="nw">See the line,</span> <span class="nw">and your peers.</span></h2><p>A linearity graph and peer group analysis show at once how your analyzer performs across the range.</p></article>'+
     '<article class="step"><h2><span class="nw">An inspector-friendly</span> <span class="nw">report.</span></h2><p>Report results are given immediately in an inspector-friendly format and stored on the Auditor QC website for future reference.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Controls and linearity,</span> <em class="nw">ready to run.</em></h2></div><p data-r>A broad line of superior-quality universal and analyzer-specific products for clinical chemistry, immunoassay and more, at a fair price.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Available</span><p class="cr" data-r><span>Direct from AUDIT</span><span>Regional and national distributors</span><span>Same-day shipping</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="services" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Tools and services</span><h2 class="d2 split"><span class="nw">Data reduction,</span> <em class="nw">on the house.</em></h2></div><p data-r>The products come with the tools to use them: free reporting, standing orders on your schedule and accessible, responsive support.</p></div>'+
   svc()+
   '<div class="trn" data-r><span class="lab kick">Talk to us</span><p>Sales, customer service and technical support share one number: 866.25.AUDIT (28348).</p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About AUDIT</span><h2 class="d2 split"><span class="nw">Making life in the lab</span> <em class="nw">a little easier.</em></h2></div><p data-r>Our partnership with Aalto Scientific means our customers benefit from a broad line of solutions and significant cost savings.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Leadership</span><ul>'+
     '<li data-r><span class="nm">Jeff Mauro</span><span class="lab rl">President</span></li>'+
    '</ul></div>'+
    '<div class="engpol"><span class="lab kick" data-r>History</span>'+hist()+'</div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Part of</span><p class="cr" data-r><span>Aalto Scientific</span><span>ADLM 2025 exhibitor</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">New for 2026:</span> <em class="nw">Cystatin C.</em></h2></div><p data-r>New products and shows. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Planning your</span> <em class="nw">next order?</em></h2>'+
   '<p class="sub" data-r>Call or email us to find the right control or linearity set for your analyzer, or to set up a standing order.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email AUDIT '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r><span>AUDIT MicroControls, Inc.</span><br><span>Eatonton, Georgia</span></p></div>'+
    '<div><span class="lab" data-r>Sales and support</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>'+TELT+'</span></p></div>'+
    '<div><span class="lab" data-r>Software</span><p data-r><span>Auditor QC</span><br><span>Free instant reports</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>AUDIT MicroControls, Inc., Eatonton, Georgia</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/about">About</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Quality control made easy</span>Daily controls and calibration verification materials for clinical laboratories.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Inter Tight\',Arial,sans-serif;font-style:italic;font-weight:700;font-size:58px;letter-spacing:.02em">AUDIT MicroControls</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 AUDIT MicroControls, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",products:"products",services:"services",about:"about",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"AUDIT MicroControls — Quality control made easy",x:"Home"};
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
