/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prod(){return '<ul class="pfr mip">'+PROD.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function blog(){return '<ul class="nws">'+BLOG.map(function(n){return '<li><a href="'+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">Read '+ARR+'</span></a></li>'}).join("")+'</ul>'}
/* capabilities (stellartec.com > Capabilities, one page each), each with a small line icon */
function caps(){var C=[
  ["Research & development","From concept to clinic","Bench-top feasibility models, in vitro and in vivo testing, and simulation of energy-mediated thermal effects on tissue. It often leads to invention and patents.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M10 28H46M28 10C20 18 20 38 28 46C36 38 36 18 28 10"/>'],
  ["Electrical engineering","Energy, measured and controlled","Embedded, microprocessor-controlled instruments on real-time operating systems that measure, control and deliver RF, ultrasound and microwave energy.",'<path d="M8 40H18L23 16L33 46L38 28H48"/><path class="a" d="M8 48H48"/>'],
  ["Software engineering","Pre-verified modules","Embedded real-time software, graphical user interfaces in multiple languages and feedback-control algorithms, under QSR design controls.",'<path d="M8 12H48V40H8Z"/><path class="a" d="M18 22L13 26L18 30M38 22L43 26L38 30M30 20L26 32"/><path d="M22 48H34"/>'],
  ["Patient-contact devices","Catheters and surgical tools","Balloon and steerable catheter platforms, surgical tools, feedback sensors, cooling systems and fluid control for minimally invasive and surgical use.",'<path d="M6 40C18 40 18 28 26 28"/><path d="M26 22H44A6 6 0 0 1 44 34H26Z"/><path class="a" d="M31 22V34M36 22V34M41 22V34"/>'],
  ["Industrial & graphic design","Built for clinical adoption","Enclosures large and small, flat-panel displays, ergonomic handles, user interfaces, packaging, labels and instructions for use.",'<path d="M10 16H46V38H10Z"/><path class="a" d="M16 22H30M16 28H26M36 22A3 3 0 1 1 36 28A3 3 0 1 1 36 22"/><path d="M20 38L16 46M36 38L40 46"/>'],
  ["Quality & regulatory","QSR and ISO 13485:2016","510(k), IDE, PMA and CE submissions, IEC 60601 certification, UL, ETL and CSA licences, and validation of sterilization cycles.",'<path d="M28 6L46 13V27C46 38 38 45 28 50C18 45 10 38 10 27V13Z"/><path class="a" d="M19 28L25 34L37 21"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
var PHASE=["Concept and feasibility","Prototype development","Pilot manufacturing","Manufacturing"];
var MKT=["Interventional cardiology","Interventional radiology","Cardiac electrophysiology","Pulmonology","Ophthalmology","Gastroenterology","Gynecology","Urology","Oncology","Cosmetic surgery","General surgery"];
var MGMT=[["Roger A. Stern, Ph.D.","President, CEO and Founder"],["Vincent Sullivan","Vice President, Product Development"],["Jerome Jackson","Vice President, Research & Development"],["Derek Purdy","Vice President, Quality Assurance and Regulatory Affairs"],["Elizabeth Lawson","Vice President, Finance"],["Mario Lopez","Director of Manufacturing & Services Operations"],["Sebastian Osei","Director, Materials Management"],["Kendra Newby","Director, Human Resources"]];
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Medical device design and manufacture<span class="nomob"> · Milpitas, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Energy-based therapy,</span><span class="l"><em>concept to market.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Stellartech designs, develops and manufactures medical systems that deliver radiofrequency, ultrasound and other energy to tissue: the microprocessor-controlled instrument and the disposable device that touches the patient.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/capabilities">Our capabilities '+ARR+'</a><a class="btn" href="#/contact">Start a project</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Stellartech Research Corporation</span>'+
   '<h2 class="txt" id="mani">A pioneer in energy-based therapies, responsible for many firsts in the medical device industry, including the first temperature-controlled RF generator for cardiac ablation in the U.S. <em class="nw">ISO 13485 registered.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1988</span><p class="k">founded by Roger A. Stern, Ph.D., to develop electronic devices for medical start-ups</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">68,000</span><p class="k">sq. ft. facility for Class II and Class III devices, under QSR and ISO 13485:2016</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">110+</span><p class="k">people in the heart of Silicon Valley</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Case study · Esophageal ablation</span><h2 class="d3"><span class="nw">A clinical need,</span> <em class="nw">engineered.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Need</span><span>Balloon</span><span>Energy</span><span>Market</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Less than 700 microns.</h2><p>In 2000, two physicians brought Stellartech a clinical need: remove the pre-cancerous lining of Barrett’s esophagus. The lining is very thin, and harming the deeper layers can narrow the esophagus.</p></article>'+
     '<article class="step"><h2>An electrode band on a balloon.</h2><p>Stellartech’s engineers mounted a bipolar electrode band on a balloon catheter. Inflated, it meets the esophageal wall evenly all the way around.</p></article>'+
     '<article class="step"><h2>A rapid burst of RF energy.</h2><p>A high-power generator sends a rapid burst of radiofrequency energy to the band, treating several centimetres of the superficial lining in just a few seconds while the tissue beneath is preserved.</p></article>'+
     '<article class="step"><h2>A new outpatient procedure.</h2><p>A new company was formed to develop the system and run the clinical work to commercialise it. In 2007 the design won a Medical Design Excellence Gold Award.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="capabilities" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Capabilities</span><h2 class="d2 split"><span class="nw">One team,</span> <em class="nw">every discipline.</em></h2></div><p data-r>We take a product idea from concept through proof of principle, clinical evaluation, regulatory approval and manufacturing, with all the engineering under one roof.</p></div>'+
   caps()+
   '<div class="bk lbk"><span class="lab kick" data-r>Our process</span><p class="cr" data-r>'+PHASE.map(function(c){return '<span>'+esc(c)+'</span>'}).join('<i aria-hidden="true">→</i>')+'</p></div>'+
   '<div class="bk lbk bk2"><span class="lab kick" data-r>Markets</span><p class="cr" data-r>'+MKT.map(function(c){return '<span>'+esc(c)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portfolio</span><h2 class="d2 split"><span class="nw">A generator</span> <em class="nw">and the device it drives.</em></h2></div><p data-r>Typically a disposable patient-contact device and a microprocessor-controlled instrument, with complex electronics for sensor feedback and controlled delivery of therapeutic energy.</p></div>'+
   prod()+
   '<div class="bk"><span class="lab kick" data-r>Contract manufacturing</span><p class="cr" data-r><span>FDA registered</span><i aria-hidden="true">·</i><span>California licensed</span><i aria-hidden="true">·</i><span>ISO 13485:2016 certified</span><i aria-hidden="true">·</i><span>Sterile devices and electronic instruments</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Your business partner,</span> <em class="nw">every stage.</em></h2></div><p data-r>We work with companies of all sizes, and directly with entrepreneurs, physicians and investment groups, adding value from initial concept to market introduction.</p></div>'+
   '<div class="uf">'+
    '<div class="uf-p"><span class="lab" data-r>Management</span>'+
     '<ul class="dirs">'+MGMT.map(function(m){return '<li data-r><span class="dn">'+esc(m[0])+'</span><span class="dr">'+esc(m[1])+'</span></li>'}).join("")+'</ul></div>'+
    '<div class="uf-s">'+
     '<div class="site"><span class="lab" data-r>First</span><p data-r>Temperature-controlled RF generator for cardiac ablation (U.S.)</p></div>'+
     '<div class="site"><span class="lab" data-r>First</span><p data-r>Monopolar capacitive RF tissue remodeling system for cosmetic use</p></div>'+
     '<div class="site"><span class="lab" data-r>First</span><p data-r>Balloon-based system for esophageal ablation</p></div>'+
     '<div class="site"><span class="lab" data-r>Virtual company</span><p data-r>New device ventures incubated on Stellartech’s facilities, people, quality system and regulatory status</p></div>'+
     '<div class="site"><span class="lab" data-r>Energy</span><p data-r>Radiofrequency, ultrasound, microwave, high voltage and cryogen</p></div>'+
    '</div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News &amp; events</span><h2 class="d2 split"><span class="nw">Meet us</span> <em class="nw">on the show floor.</em></h2></div><p data-r>Stellartech exhibits at the main medical device design and manufacturing shows, most recently MD&amp;M West in Anaheim.</p></div>'+
   '<div class="ev">'+
    '<span class="lab kick" data-r>Latest</span>'+
    '<dl>'+
     '<div><dt class="lab" data-r>Show</dt><dd data-r>MD&amp;M West 2026</dd></div>'+
     '<div><dt class="lab" data-r>Dates</dt><dd data-r>February 3–5, 2026</dd></div>'+
     '<div><dt class="lab" data-r>Venue</dt><dd data-r>Anaheim Convention Center, California</dd></div>'+
     '<div><dt class="lab" data-r>Exhibitor</dt><dd data-r>Stellartech Research Corporation</dd></div>'+
    '</dl>'+
   '</div>'+
   '<span class="lab kick sub-l pr" data-r>Read more</span>'+
   blog()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Bring us</span> <em class="nw">your idea.</em></h2>'+
   '<p class="sub" data-r>From a concept on paper to proof of principle, clinical evaluation, regulatory approval and manufacturing: tell us what your application needs.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Stellartech Research Corp.<br>560 Cottonwood Drive<br>Milpitas, CA 95035</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Quality</span><p data-r>FDA registered<br>ISO 13485:2016 certified<br>California licensed</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Stellartech Research Corp.<br>560 Cottonwood Drive, Milpitas, CA 95035</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Registered</span>QSR and ISO 13485:2016 quality system for Class II and Class III medical devices</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/capabilities">Capabilities</a><br><a class="ul" href="#/portfolio">Portfolio</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
  '</div><div class="fwm" aria-hidden="true">'+FLOGO+'</div>'+
  '<div class="legal"><span class="lab">© 2026 Stellartech Research Corporation</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",capabilities:"capabilities",portfolio:"portfolio",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Stellartech Research Corporation — energy-based medical systems, concept to manufacture",x:"Home"};
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
