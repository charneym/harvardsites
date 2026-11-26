/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np bra">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span>'+(p.sum?'<span class="mh-sum">'+esc(p.sum)+'</span>':'')+'</div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Analyte content","Your analyte mix","Many different analyte compositions are possible, across tumor markers, allergy IgEs, plasma proteins, spinal fluid and cardiac markers, hormones and therapeutic drugs.",'<path d="M20 8H36"/><path d="M23 8V18L12 44H44L33 18V8"/><path class="a" d="M16 34H40"/><circle class="f" cx="24" cy="39" r="2.2"/><circle class="f" cx="32" cy="38" r="1.6"/>'],
  ["Concentrations","Normal to high, and low","Normal and pathologically high concentrations for all analytes; for a lot of analytes, particularly low concentrations too. As many levels as you prefer.",'<path d="M10 46H46"/><path d="M14 46V34"/><path d="M28 46V22"/><path class="a" d="M42 46V10"/><circle class="f" cx="42" cy="10" r="2.2"/>'],
  ["Filling and label","Bottles, vials, your label","Filled into bottles or small vials, and labelled with your label, ready to go straight into your kit or your quality assessment scheme.",'<rect x="20" y="8" width="16" height="8"/><path d="M18 16H38V46H18Z"/><path class="a" d="M18 26H38V36H18"/><circle class="f" cx="28" cy="31" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Immunoassay quality controls<span class="nomob"> · Alzenau, Germany</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Liquid controls,</span> <span class="l">ready to use,</span> <span class="l"><em>stable for years.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>BIOREF develops, produces and distributes quality controls for immunoassays: liquid, in a human serum matrix comparable to a patient’s serum, and custom-designed to your analytes, concentrations, filling and label.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Explore the controls '+ARR+'</a><a class="btn" href="#/contact">Request a custom control</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Manufacturer of custom-designed controls</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Tailor-made controls</span> <span class="nw">for immunoassays,</span> <span class="nw">serving the specific needs</span> <span class="nw"><em>of each customer.</em></span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1983</span><p class="k">founded in Homburg / Saar, and privately owned ever since</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5 yrs</span><p class="k">shelf life at −20 °C, batch-constant, with no freeze-drying needed</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2022</span><p class="k">move into a 1,300 m² facility in Alzenau, 40 km east of Frankfurt am Main</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a control is made</span><h2 class="d3">From serum matrix <em><span class="nw">to ready-to-use</span> vial.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Matrix</span><span>Levels</span><span>Filling</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A human serum matrix.</h2><p>Every BIOREF control is liquid, in a human serum matrix comparable to a patient’s serum. There is nothing to reconstitute: the control is used directly and economically.</p></article>'+
     '<article class="step"><h2>Set to your levels.</h2><p>Analytes go in at the concentrations you specify: normal and pathologically high, and for many analytes particularly low, in as many levels as you want.</p></article>'+
     '<article class="step"><h2>Filled, labelled, stable.</h2><p>Filled into bottles or small vials under your own label, the controls keep for up to five years at −20 °C and for long periods in the refrigerator at 4 °C.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Eight groups,</span> <em><span class="nw">one liquid format.</span></em></h2></div><p data-r>Controls for tumor markers, allergy IgEs, plasma proteins, spinal fluid and cardiac markers, thyroid and fertility hormones and therapeutic drugs. Refrigerated stability depends on the analytes, from a few weeks to several years.</p></div>'+
   prods()+
   '<p class="disc" data-r>The full list of analytes for customised controls is on <a class="ul" href="'+BR+'products" target="_blank" rel="noopener">bioref.com/products</a>.</p>'+
  '</div></section>'+

  '<section class="sec light" id="custom" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Custom controls</span><h2 class="d2 split">Made to <em><span class="nw">your specification.</span></em></h2></div><p data-r>As a manufacturer of customised controls, BIOREF produces controls according to your needs, in analyte content, concentration, number of levels, filling and labelling.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Characteristics</span><p class="cr" data-r><span>Liquid</span><span>Ready to use</span><span>Easy to handle</span><span>Human serum matrix</span><span>Comparable to patient serum</span><span>Lyophilisation possible</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="quality" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality management</span><h2 class="d2 split">Certified to <em>ISO 13485.</em></h2></div><p data-r>BIOREF has run a quality management system for many years. It is continuously adjusted to business and regulatory requirements and regularly improved for the benefit of our customers.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>In practice</span><dl>'+
    '<div data-r><dt class="lab">Standard</dt><dd>Quality management system certified according to ISO 13485</dd></div>'+
    '<div data-r><dt class="lab">Certification body</dt><dd>Medical Device Certification (MDC) GmbH, Germany</dd></div>'+
    '<div data-r><dt class="lab">Frozen at −20 °C</dt><dd>Shelf life of up to five years, batch-constant</dd></div>'+
    '<div data-r><dt class="lab">Refrigerated at 4 °C</dt><dd>From about a month to several years, depending on the analytes</dd></div>'+
   '</dl></div>'+
   '<div class="bk"><span class="lab kick" data-r>Used by</span><p class="cr" data-r><span>Kit manufacturers</span><span>External quality assessment schemes</span><span>Distributed internationally since 1996</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Science-driven</span> <em><span class="nw">since 1983.</span></em></h2></div><p data-r>BIOREF was founded in Homburg / Saar in 1983 and moved to Mömbris two years later. After steady growth it moved into a 1,300 m² facility in Alzenau in 2022, where scientists and lab technicians make every control and the R&amp;D section develops new stabilisation techniques and production methods.</p></div>'+
   team()+
   '<div class="qual"><span class="lab kick" data-r>Milestones</span><p class="cr" data-r><span>1983 Founded in Homburg</span><span>1985 Mömbris</span><span>1996 International distribution</span><span>2022 Alzenau facility</span></p></div>'+
   '<div class="qual"><span class="lab kick" data-r>Trade fairs</span><p class="cr" data-r><a class="ul" href="https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3069842" target="_blank" rel="noopener">MEDICA 2026, Düsseldorf ↗</a></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Your control, <em><span class="nw">your way.</span></em></h2>'+
   '<p class="sub" data-r>Tell us the analytes, concentrations, levels and filling you need. Profound communication matters to us, so we will be glad to send you any further information.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>BIOREF GmbH<br>Freigerichter Str. 1<br>63755 Alzenau, Germany</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Location</span><p data-r>40 km east of Frankfurt am Main, in the middle of Germany</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>BIOREF GmbH<br>Freigerichter Str. 1, 63755 Alzenau</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/custom">Custom controls</a><br><a class="ul" href="#/quality">Quality</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Controls</span>Tumor markers · Allergy IgEs<br>Plasma proteins · Hormones<br>Cardiac markers · Drugs</div>'+
  '</div><svg class="bigsvg fwm" viewBox="20 -770 4200 840" aria-hidden="true">'+document.querySelector("#brand .bwm").innerHTML+'</svg>'+
  '<div class="legal"><span class="lab">© 2026 BIOREF GmbH</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",process:"story",products:"products",custom:"custom",quality:"quality",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"BIOREF — Ready-to-use quality controls for immunoassays",x:"Home"};
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
