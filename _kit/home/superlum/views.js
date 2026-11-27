/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
/* light sources (superlumdiodes.com > Broadband Light Sources, MOPA SLD Systems, Broadsweepers, Drivers) */
var SRC=[
 ["BroadLighters","Up to three SLDs inside","Ready-to-use broadband light sources, OEM and benchtop, with optical isolators, variable attenuators and other optics built in."],
 ["MOPA SLD systems","Very high power","SLD-based sources with far more power than a single SLD, much less sensitive to optical feedback and longer-lived: OEM models at 795 and 1075 nm, up to 50 mW."],
 ["Broadsweepers","Swept tunable lasers","Wavelength-swept semiconductor lasers from 750 to 1000 nm, tuning over 55 to 110 nm with an akinetic wavelength-selective element."]];
function srcs(){return '<div class="caps nwc tst">'+SRC.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
var DRV=["PILOT4-AC","SLD-uCS, 24 × 60 × 79 mm","BLL, 21.5 × 45 × 60 mm","SLD-mCS","OEM drivers","SLD and driver assemblies"];
function drv(){return '<div class="bk cnd"><span class="lab kick" data-r>Drivers and controllers</span><p class="cr" data-r>'+DRV.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* applications (superlumdiodes.com > Applications, About Company) */
var APP=[
 ["Medical OCT","780-1060 nm","SLD modules and light sources for ophthalmic OCT; our 840 nm SLDs were used in pioneering demonstrations of spectral-domain OCT in the human eye."],
 ["Sensing","Gyros and gratings","Fibre-optic gyros and other fibre-optic sensors, Bragg grating sensors, and industrial OCT and spectroscopy."],
 ["Metrology","Test and illumination","Optical and fibre-optic metrology, WDM and DWDM component testing, illumination and microscopy."]];
function apps(){return '<div class="caps nwc tst">'+APP.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* company (superlumdiodes.com > About Company, Applications) */
var CO=[
 ["SLDs first","Our core business","Superlum was the first company to make SLDs its core business, with the longest history of supplying them to research and industry."],
 ["Specialist R&D","20+ years","Research and development by a group of leading specialists in SLDs and SLD-based products, with more than 20 years in the field."],
 ["Every stage","Choice to warranty","Advice from choosing the right components through integration and installation to after-sales maintenance and warranty."]];
function co(){return '<div class="caps nwc tst">'+CO.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* news (superlumdiodes.com > News, Events) */
var NEWS=[
 ["Feb 2027","SPIE Photonics West 2027, Moscone Center, San Francisco: booth 4719","Exhibition",PW+"/events.htm"],
 ["Oct 2026","New wide-spectrum SLD at 1050 nm: S1050.75.15, 15 mW over 75 nm","Product",PW+"/news.htm"],
 ["Sep 2026","Two new high-power 650 nm SLDs, S655.7.5 and S655.7.10","Product",PW+"/news.htm"],
 ["Mar 2026","S840.50.10 SLD modules now available ex-stock","Product",PW+"/news.htm"],
 ["Jun 2025","LASER World of Photonics 2025, Munich","Exhibition",PW+"/events.htm"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1716" height="917" alt="A Superlum fibre-coupled semiconductor optical amplifier in a gold butterfly package, with red and yellow fibre boots" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Superluminescent diodes<span class="nomob"> · Cork, Ireland</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Broadband light</span> <span class="l">for OCT and sensing.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Superluminescent diodes from 650 to 1620 nm, optical amplifiers, drivers and ready-to-use light sources, from the first company to make SLDs its core business.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/slds">Our SLDs '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Superlum</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Low-coherence light,</span> <span class="nw">from a single SLD</span> <span class="nw">to complete</span> <span class="nw">broadband sources.</span> <em><span class="nw">Developed and made</span> <span class="nw">in Ireland.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">650-1620</span><p class="k">nanometres covered by our SLD modules, free-space and fibre-pigtailed</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100 mW</span><p class="k">from our most powerful superluminescent diodes</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1-2 days</span><p class="k">to ship our best-selling S840.50.10, now ex-stock</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How an SLD module works</span><h2 class="d3"><span class="nw">Bright as a laser,</span> <span class="nw">broad as an LED.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Drive</span><span>Emit</span><span>Spectrum</span><span>Deliver</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">A protected</span> <span class="nw">drive current.</span></h2><p>SLDs are extremely sensitive to surges and spikes of drive current, so each module runs on a Superlum current driver and temperature controller.</p></article>'+
     '<article class="step"><h2><span class="nw">Amplified in</span> <span class="nw">a single pass.</span></h2><p>In the chip, spontaneous emission is amplified along the waveguide in a single pass, with no laser cavity: high power in a single transverse mode.</p></article>'+
     '<article class="step"><h2><span class="nw">A broad,</span> <span class="nw">smooth spectrum.</span></h2><p>The result is low-coherence light with a wide spectrum, the property that OCT, interferometry and fibre sensing depend on.</p></article>'+
     '<article class="step"><h2><span class="nw">Into</span> <span class="nw">the fibre.</span></h2><p>Light leaves through single-mode, PM or multimode fibre in butterfly, DIL or miniBUT packages, with an optical isolator where high power makes feedback a risk.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="slds" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>SLDs and SOAs</span><h2 class="d2 split"><span class="nw">From 650</span> <span class="nw">to 1620 nm.</span></h2></div><p data-r>Free-space and SM, PM or MM fibre-pigtailed SLD modules, and fibre-coupled optical amplifiers, with custom versions on request.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="sources" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Light sources</span><h2 class="d2 split"><span class="nw">Ready to use,</span> <span class="nw">in one box.</span></h2></div><p data-r>An SLD of your choice with a high-precision current driver and temperature controller, benchtop or OEM, with optional modulation.</p></div>'+
   srcs()+drv()+
  '</div></section>'+

  '<section class="sec dark" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split"><span class="nw">Where low</span> <span class="nw">coherence counts.</span></h2></div><p data-r>Tell us the wavelength, power and output you need, and we will recommend a light source for your application.</p></div>'+
   apps()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News and events</span><h2 class="d2 split"><span class="nw">New SLDs,</span> <span class="nw">and where to meet us.</span></h2></div><p data-r>At Photonics West 2027 our CTO, Dr Vladimir Shidlovski, will be at booth 4719 to talk through your application.</p></div>'+
   news()+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Every project,</span> <span class="nw">big or small.</span></h2></div><p data-r>A leading supplier of superluminescent diodes and modules in the Republic of Ireland, with personal attention to every project, commercial or academic.</p></div>'+
   co()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us what</span> <span class="nw">you need.</span></h2>'+
   '<p class="sub" data-r>We will help you to a proper solution, and can design and build a complete customised opto-electronic system for your application.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email sales '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Superlum Diodes Ltd</span><br><span>Unit B3, Fota Point Enterprise Park</span><br><span>Carrigtwohill, Co. Cork</span><br><span>T45 FC93, Ireland</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Sales, quotes and meetings</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><span>Reply within one business day</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Fota Point Enterprise Park<br>Carrigtwohill, Co. Cork, Ireland</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/slds">SLDs</a><br><a class="ul" href="#/sources">Light sources</a><br><a class="ul" href="#/applications">Markets</a><br><a class="ul" href="#/news">News</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Products</span>Superluminescent diodes<br>Optical amplifiers<br>Broadband light sources</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">SUPERLUM</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Superlum Diodes Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",slds:"slds",sources:"sources",applications:"applications",news:"news",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Superlum — Superluminescent diodes, optical amplifiers and broadband light sources, Cork, Ireland",x:"Home"};
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
