/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* quality (bensonviscometers.com > About us > Quality Assurance), each with a small line icon */
var ICO={
 i:'<svg viewBox="0 0 56 56"><path d="M12 6H38L46 14V50H12Z"/><path d="M38 6V14H46"/><path class="a" d="M20 30L26 36L38 22"/><path d="M20 44H38"/></svg>',
 q:'<svg viewBox="0 0 56 56"><path d="M28 6L46 13V27C46 39 38 46 28 50C18 46 10 39 10 27V13Z"/><path class="a" d="M20 28L26 34L37 22"/></svg>',
 f:'<svg viewBox="0 0 56 56"><path d="M8 10H48V46H8Z"/><path d="M8 20H48"/><path class="a" d="M16 29H30M16 37H40"/><path d="M38 29H40"/></svg>',
 u:'<svg viewBox="0 0 56 56"><path d="M22 6V22L10 46H46L34 22V6"/><path d="M18 6H38"/><path class="a" d="M15 36H41"/></svg>'};
var QUAL=[
 ["i","ISO 13485:2016","Medical device quality","Certified since September 2022: safety, reliability and compliance held through design, development, delivery and support."],
 ["q","ISO 9001:2015","Quality management","Certified since May 2019, with a quality management system that keeps improving."],
 ["f","FDA registered","UK, Europe and USA","Authorised and registered to market and distribute clinical products in the UK, Europe and the USA."],
 ["u","UKAS verified","Calibration you can trust","Calibration, quality control and reagent products verified to UKAS, for confident results."]];
function qual(){return '<div class="caps svc">'+QUAL.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
/* the three tests and the conditions they help with (bensonviscometers.com home, Plasma / Serum / Whole Blood Viscosity pages) */
var TESTS=[
 ["Plasma viscosity","A measure of the acute phase response: the rise in plasma proteins and fibrinogen caused by infection, neoplasm or inflammatory disease.",BW+"/what-is-plasma-viscosity/"],
 ["Serum viscosity","Effective in aiding diagnosis and treatment monitoring for Waldenström’s macroglobulinaemia, multiple myeloma and hyperviscosity syndrome.",BW+"/serum-viscosity/"],
 ["Whole blood viscosity","How easily blood flows through the arteries, capillaries and veins: a quick, simple test with insights for vascular disease.",BW+"/whole-blood-viscosity/"]];
function tests(){return '<div class="caps nwc tst">'+TESTS.map(function(c){return '<div class="cap"><span class="lab" data-r>Test</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p><a class="lab lk ul" data-r href="'+c[2]+'" target="_blank" rel="noopener"><span>Read more</span> '+ARR+'</a></div>'}).join("")+'</div>'}
var COND=["Multiple myeloma","Polymyalgia rheumatica","Rheumatoid arthritis","Temporal arteritis","Cardiovascular disease","Hyperviscosity syndrome","Waldenström’s macroglobulinaemia","Vascular dementia and Alzheimer’s disease","Diabetes"];
function cond(){return '<div class="bk cnd"><span class="lab kick" data-r>Aid to diagnosis and monitoring</span><p class="cr" data-r>'+COND.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
var NEWS=[
 ["Nov 2026","Exhibitor at MEDICA 2026 in Düsseldorf","MEDICA","https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3080513"],
 ["Sep 2026","Presenting our development projects at the MediWales Members Showcase","News",BW+"/news/"],
 ["Aug 2026","Two talks for the haematology team at St George’s Hospital, London","News",BW+"/news/"],
 ["Jul 2026","We have moved to Catalina House, Pembroke Dock","News",BW+"/news/"],
 ["Jan 2026","New partnerships with MedBridge North America and Sanollo","News",BW+"/news/"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical viscometers<span class="nomob"> · Pembroke Dock, Wales</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Clinical viscometers,</span><span class="l"><em>crafted in the UK.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Trusted by laboratories, hospitals, research facilities, clinics and universities worldwide: the BV1 and BV200 measure plasma, serum and whole blood viscosity, accurately and fast.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our viscometers '+ARR+'</a><a class="btn" href="#/contact">Request a call</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Benson Viscometers</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Since 1999, we have</span> <span class="nw">focused on one thing:</span> <span class="nw">the most reliable</span> <span class="nw">clinical viscosity testing</span> <span class="nw">in the world.</span> <em><span class="nw">Designed, developed</span> <span class="nw">and made in Britain.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1999</span><p class="k">the year we started, building on work with NHS scientists and haematologists</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">400+</span><p class="k">patient samples a day on one BV200 automated clinical viscometer</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">37 °C</span><p class="k">every sample runs through a temperature-controlled, calibrated capillary</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a Benson viscometer works</span><h2 class="d3"><span class="nw">From the tube</span> <em class="nw">to the result.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sample</span><span>Capillary</span><span>Timing</span><span>Result</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Straight from</span> <span class="nw">the primary tube.</span></h2><p>The analyser samples directly from the blood collection tube, with optional through-cap sampling. After a full blood count, the residue in the same tube can be used, so no extra sample is needed.</p></article>'+
     '<article class="step"><h2><span class="nw">50 µl through</span> <span class="nw">a capillary.</span></h2><p>A regulated vacuum, a controlled force, draws just 50 µl of sample through a calibrated capillary tube held at 37 °C.</p></article>'+
     '<article class="step"><h2><span class="nw">Timed by</span> <span class="nw">infra-red optics.</span></h2><p>Infra-red timing optics measure the exact time the fluid takes to pass between two set points on the capillary. That time gives its dynamic viscosity.</p></article>'+
     '<article class="step"><h2><span class="nw">A result to</span> <span class="nw">two decimals.</span></h2><p>The result reads to two decimal places, such as 1.60 mPa·s reported at 25 °C, and goes to the laboratory system. UKAS-verified fluids check the calibration as the run goes on.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products and services</span><h2 class="d2 split"><span class="nw">Two analysers,</span> <em class="nw">one standard.</em></h2></div><p data-r>Designed and manufactured in the UK, each unit delivers consistent, high-precision results for critical diagnostics and ongoing clinical research, with the fluids and service to keep it that way.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="clinical" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical information</span><h2 class="d2 split"><span class="nw">Viscosity as</span> <em class="nw">a biomarker.</em></h2></div><p data-r>Clinical viscosity testing is increasingly recognised as a vital biomarker, especially for identifying high-risk patients. Our analysers run all three tests.</p></div>'+
   tests()+cond()+
  '</div></section>'+

  '<section class="sec dark" id="quality" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality assurance</span><h2 class="d2 split"><span class="nw">Certified to</span> <em class="nw">support you.</em></h2></div><p data-r>Quality and customer satisfaction are at the core of everything we do, held to internationally recognised standards and a quality management system that keeps improving.</p></div>'+
   qual()+
  '</div></section>'+

  '<section class="sec light" id="about" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About us</span><h2 class="d2 split"><span class="nw">A British company</span> <em class="nw">since 1999.</em></h2></div><p data-r>In the late 1990s Bernie Benson worked with scientists and haematologists from the NHS to develop the Blood Plasma Viscometer. Today it is the Automated Clinical Viscometer, used by leading institutions across the UK, Europe and the USA.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Catalina House</span><h3 data-r>A new home in Pembroke Dock</h3><p data-r>Since July 2026, the space and facilities to keep developing our analysers and services.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Partners</span><h3 data-r>Global trust, local care</h3><p data-r>MedBridge North America supports sales in the USA and Canada; Sanollo supports our wider international sales.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Sustainability</span><h3 data-r>Three trees per viscometer</h3><p data-r>We pledge three trees for every viscometer we make, and plant with local schools such as Gelliswick VC Primary.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Out with</span> <em class="nw">the clinicians.</em></h2></div><p data-r>Trade fairs, hospital talks and partnerships: where to meet us, and how clinical viscosity testing is reaching more laboratories.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Have any questions?</span> <em><span class="nw">We’d be happy</span> <span class="nw">to help.</span></em></h2>'+
   '<p class="sub" data-r>For pricing, a demonstration, a presentation for your team or a supply contract, call us or send us an email.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Benson Viscometers Ltd<br>Catalina House, Western Hangar<br>Admiralty Way, Pembroke Dock<br>Pembrokeshire SA72 6WT</p></div>'+
    '<div><span class="lab" data-r>General enquiries</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Sales</span><p data-r><a class="ul" href="mailto:'+SALES+'">'+SALES+'</a><br>Company no. 03848442</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Catalina House, Western Hangar<br>Admiralty Way, Pembroke Dock SA72 6WT</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/quality">Quality</a><br><a class="ul" href="#/about">About</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Analysers</span>BV1 semi-automated<br>BV200 automated<br>Calibration and QC fluids</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">Benson</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Benson Viscometers Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",products:"products",clinical:"clinical",quality:"quality",about:"about",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Benson Clinical Viscometers — Plasma, serum and whole blood viscometers, Pembroke Dock",x:"Home"};
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
