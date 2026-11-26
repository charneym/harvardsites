/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function meds(){return '<ul class="pfr pipe np">'+MED.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function mats(){return '<div class="ev ind"><span class="lab kick" data-r>Every device</span><dl>'+MAT.map(function(c){return '<div data-r><dt class="lab">'+esc(c[0])+'</dt><dd>'+esc(c[1])+'</dd></div>'}).join("")+'</dl></div>'}
/* company values (medasil.com > About us > Medasil company values); text-only rows */
var VAL=[
 ["Trust","Compliant, reliable products","We are committed to supplying compliant, reliable, quality products and services."],
 ["Continuous improvement","Big ideas or small changes","We take pride in our work and are open-minded to big ideas or small changes that make improvements."],
 ["Environment","Protecting what we serve","In the same way that our business is about health care and improving lives, we endeavour to protect and improve the environment."],
 ["People","Integrity, honesty, transparency","We treat everyone with integrity, honesty and transparency, respecting and valuing each other and celebrating our diversity, skills and expertise."]];
function vals(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Our values</p><ul class="mh-list">'+VAL.map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div></div>'}
/* quality (medasil.com > Home, Quality), each with a small line icon */
var ICO={
 c:'<svg viewBox="0 0 56 56"><path d="M28 6L46 13V27C46 38 38 46 28 50C18 46 10 38 10 27V13Z"/><path class="a" d="M20 28L26 34L37 22"/></svg>',
 r:'<svg viewBox="0 0 56 56"><path d="M8 10H48V46H8Z"/><path class="a" d="M16 18V30M24 18V34M32 18V30M40 18V34"/><path d="M8 40H48"/></svg>',
 f:'<svg viewBox="0 0 56 56"><circle cx="28" cy="28" r="19"/><path class="a" d="M15 41L41 15"/></svg>',
 l:'<svg viewBox="0 0 56 56"><path d="M28 48V24"/><path class="a" d="M28 30C28 20 34 12 46 10C46 22 40 30 28 30Z"/><path d="M28 36C28 28 23 22 12 21C12 31 18 36 28 36Z"/></svg>'};
var SERV=[
 ["c","ISO 13485:2016","Regulated by SGS","Our products go through strict quality controls and measures, under a quality management system certified to ISO 13485:2016."],
 ["r","Class 8 cleanroom","Made in Leeds","We manufacture our own range of single-use devices at our premises in Leeds, within a Class 8 cleanroom environment."],
 ["f","Free from","Biocompatible","Free from latex, phthalate, animal and human blood derivatives, TSE/BSE and medicinal substances, and biocompatible."],
 ["l","Net Zero by 2045","NHS Evergreen Level 2","A Carbon Reduction Plan sets out the roadmap; the NHS Evergreen Sustainable Supplier Assessment rates us at Level 2."]];
function serv(){return '<div class="caps svc">'+SERV.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["16–19 Nov 2026","Meet Medasil at MEDICA 2026: Hall 16, Stand G13-4, UK Pavilion","Medasil",PW+"/medica-2026/"],
 ["Nov 2026","Listed in the official MEDICA 2026 exhibitor directory, Düsseldorf","MEDICA","https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3083609"],
 ["Sustainability","NHS Evergreen Sustainable Supplier Assessment completed at Level 2","Medasil",PW+"/quality/"],
 ["Sustainability","Committed to Net Zero emissions by 2045, with a published Carbon Reduction Plan","Medasil",PW+"/quality/"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<span class="lab eyebrow" data-r>Single-use medical devices<span class="nomob"> · Leeds, UK</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Single-use devices,</span> <span class="l">made in Leeds</span> <span class="l"><em>since 1974.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>An independent UK manufacturer of ENT and general surgical devices, wound drains, tubing and the LASERGUARD laser protection range, for the NHS, private hospitals and healthcare worldwide.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Order enquiries</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Independent since 1974</span>'+
   '<h2 class="txt" id="mani">A family-owned company in the city of Leeds, supplying medical devices to the healthcare sector for over 50 years, with the patient at the core of our business. <em><span class="nw">Improving quality of life</span> <span class="nw">for healthcare professionals</span> <span class="nw">and their patients.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1974</span><p class="k">established, and delivering to the NHS ever since</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Class 8</span><p class="k">cleanroom in which our own range is manufactured</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2045</span><p class="k">our committed year for Net Zero emissions</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Made in Leeds</span><h2 class="d3"><span class="nw">From the mould</span> <em class="nw">to the ward.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Moulded</span><span>Cleanroom</span><span>Checked</span><span>Delivered</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">One piece,</span> <span class="nw">seamless.</span></h2><p>Take a Guedel airway: a one-piece moulding, uniform and seamless, with curved anatomical contours and a hollow lumen for efficient airflow.</p></article>'+
     '<article class="step"><h2><span class="nw">Made in</span> <span class="nw">a cleanroom.</span></h2><p>We manufacture our own range of single-use devices at our premises in Leeds, within a Class 8 cleanroom environment.</p></article>'+
     '<article class="step"><h2><span class="nw">Checked</span> <span class="nw">and coded.</span></h2><p>Strict quality controls under ISO 13485:2016. The integral bite block is colour-coded by convention, so the size is clear at a glance.</p></article>'+
     '<article class="step"><h2><span class="nw">Sealed</span> <span class="nw">and sent.</span></h2><p>Supplied sterile in individual single wrap pouches, with next-day UK delivery on in-stock items and export worldwide.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">From ENT</span> <em class="nw">to laser protection.</em></h2></div><p data-r>A manufacturer, importer and distributor of single-use medical devices: ENT, general surgical devices, wound drains, tubing and our LASERGUARD range of laser protection devices.</p></div>'+
   meds()+
   mats()+
  '</div></section>'+

  '<section class="sec light" id="quality" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality</span><h2 class="d2 split"><span class="nw">Quality is</span> <em class="nw">a core value.</em></h2></div><p data-r>The quality of our products is extremely important to us. We continuously focus on improvement throughout the quality process, from the cleanroom to the delivery.</p></div>'+
   serv()+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">The patient</span> <em class="nw">at the core.</em></h2></div><p data-r>Our focus is on improving patient outcomes and helping healthcare professionals deliver excellence in service. Our friendly sales staff are on hand to help with any enquiry.</p></div>'+
   vals()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Customers</span><h3 data-r>The NHS and beyond</h3><p data-r>The NHS since 1974, private hospitals and other healthcare facilities in the UK, and export worldwide.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Partners</span><h3 data-r>Distributors abroad</h3><p data-r>Trusted partners in Australia, Ireland, New Zealand, Sweden and India. Ask us about becoming a distributor.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Headquarters</span><h3 data-r>Medasil House, Leeds</h3><p data-r>Hunslet Road, Leeds, West Yorkshire: where our own range is designed and manufactured.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">On the show floor</span> <em class="nw">in Düsseldorf.</em></h2></div><p data-r>Come and see our single-use silicone surgical range in person and talk to the people who design and manufacture it in Leeds.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Order, ask,</span> <em class="nw">or visit us.</em></h2>'+
   '<p class="sub" data-r>Email orders@medasil.com for any purchase order enquiries or orders. For anything else, we will be pleased to help.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+ORD+'">Email an order '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Medasil Surgical Limited<br>Medasil House, Hunslet Road<br>Leeds LS10 1AU</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r>Orders <a class="ul" href="mailto:'+ORD+'">'+ORD+'</a><br>Enquiries <a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telephone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Also on</span><p data-r>NHS Supply Chain, Peppol,<br>GHXNexus and Edge4Health</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Registered office</span>Medasil Surgical Limited<br>Medasil House, Hunslet Road, Leeds LS10 1AU</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/quality">Quality</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Certified</span>ISO 13485:2016 (SGS)<br>Company no. 01173261</div>'+
  '</div>'+'<svg class="bigsvg mdw" viewBox="338 1066 978 222" aria-hidden="true"><path d="@@WORD@@"/></svg>'+
  '<div class="legal"><span class="lab">© 2026 Medasil Surgical Limited</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",products:"products",quality:"quality",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Medasil Surgical Limited — single-use medical devices made in Leeds",x:"Home"};
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
