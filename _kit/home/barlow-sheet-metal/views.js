/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><h3>'+esc(c[2])+'</h3><p>'+esc(c[3])+'</p></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Company officers</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul>'+
    '<p class="offs" data-r>A family firm: Barlow Sheet Metal Ltd was incorporated on 29 August 1974, and Steven Barlow has been a director since before 1992.</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* quality (barlowsheetmetal.com > Quality Policy, ISO Certificate, Company Profile, Plant List) */
function caps(){var C=[
  ["ISO 9001:2015","Approved by BSI","Barlow works to the full approval of BS EN ISO 9001:2015, BSI certificate Q06166, and pursues non-conformance prevention rather than detection.",'<path d="M28 8L46 16V30C46 40 38 46 28 50C18 46 10 40 10 30V16Z"/><path class="a" d="M20 29L26 35L37 23"/>'],
  ["Production control","Every job on Mietrak","A multi-user computerised production control system with barcode work-flow management follows each job through the factory.",'<path d="M10 14V42M15 14V42M22 14V42M26 14V42M33 14V42M40 14V42M46 14V42"/><path class="a" d="M6 28H50"/>'],
  ["Inspection","Measured on a CMM","A Mitutoyo B706 three-coordinate measuring machine sits in the quality department, and customer returns from 2020 to 2025 are charted on the site.",'<path d="M10 46H46M16 46V12H40V46"/><path d="M28 12V26"/><circle class="f" cx="28" cy="30" r="3"/><path class="a" d="M20 38H36"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function quotes(){var Q=[
  "Your quality is excellent, delivery is on time and you are a pleasure to do business with.",
  "You remain our first choice supplier for all of our metalwork requirements.",
  "Always happy to help even when lead times are tight. They go the extra mile."];
  return '<div class="apr"><span class="lab kick" data-r>Customer appraisals · October 2025</span><ul>'+Q.map(function(q){return '<li data-r><p>“'+esc(q)+'”</p></li>'}).join("")+'</ul></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Barlow Sheet Metal Ltd<span class="nomob"> · Waterlooville, Hampshire</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Sheet metal,</span> <span class="l">precisely made</span> <span class="l"><em class="nw">since 1974.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Precision sheet metal fabrications for the electronics and electro-mechanical industries: CAD, CNC punching and folding, welding, insertion and full mechanical assembly, from prototype to full production.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/capabilities">Our capabilities '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Consistent quality since 1974</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Technology never takes</span> <span class="nw">the place of personal</span> <span class="nw">service.</span> <em><span class="nw">We work with you from</span> <span class="nw">idea and design to</span> <span class="nw">the finished product.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">20,000</span><p class="k">Square feet of modern factory unit in Horndean, Hampshire, housing high-technology plant</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5,500</span><p class="k">Square feet of dedicated storage warehouse for Kanban, call-off and just-in-time supply</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">£750k</span><p class="k">Invested in new LVD punching and folding plant, installed in February 2020</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">From drawing to enclosure</span><h2 class="d3"><span class="nw">One case,</span> <em class="nw">four stages.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Data</span><span>Punch</span><span>Fold</span><span>Assemble</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Your design,</span> <span class="nw">as data.</span></h2><p>From your ideas, sketches, samples or CAD files, the CAD team models the part in SolidWorks Premium, simplifies it where it can and emails a virtual model for approval, then programs the machines straight from the data.</p></article>'+
     '<article class="step"><h2><span class="nw">Punched on</span> <span class="nw">the turret.</span></h2><p>Two LVD Strippit P Series 29-station CNC punch presses, with three auto-index stations, punch the vent fields, slots and connector cut-outs from the flat blank.</p></article>'+
     '<article class="step"><h2><span class="nw">Folded on</span> <span class="nw">the press brake.</span></h2><p>LVD PPEB 80-tonne and Dyna-Press 24-tonne CNC press brakes fold each flange to its angle, bend after bend.</p></article>'+
     '<article class="step"><h2><span class="nw">Inserted, welded,</span> <span class="nw">assembled.</span></h2><p>Haeger machines press in the fasteners, TIG, spot and stud welding join what must be joined, and the case is assembled, finished and held in stock for call-off.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="capabilities" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Capabilities</span><h2 class="d2 split"><span class="nw">Prototype</span> <em><span class="nw">to full production.</span></em></h2></div><p data-r>Barlow specialises in precision sheet metal fabrications for the electronics and electro-mechanical sectors, and takes a part from design through every process to a finished, assembled product.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="quality" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality</span><h2 class="d2 split"><span class="nw">Prevention,</span> <em class="nw">not detection.</em></h2></div><p data-r>Quality runs through a documented management system that every member of staff understands and shares responsibility for, reviewed against key performance indicators for continual improvement.</p></div>'+
   caps()+
   quotes()+
  '</div></section>'+

  '<section class="sec dark" id="plant" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Plant</span><h2 class="d2 split"><span class="nw">High-technology plant,</span> <em class="nw">under one roof.</em></h2></div><p data-r>The plant list behind every quote: CNC punching and folding from LVD, welding, insertion, finishing and an internal machining facility to support production.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Plant list</span><dl>'+
    '<div data-r><dt class="lab">Punching</dt><dd>2 × LVD Strippit P Series 29-station and 1 × LVD 1000 18-station CNC punch presses</dd></div>'+
    '<div data-r><dt class="lab">Bending · forming</dt><dd>2 × LVD PPEB 80 t, 2.5 m and 2 × LVD Dyna-Press 24 t, 1.2 m CNC press brakes</dd></div>'+
    '<div data-r><dt class="lab">Cutting</dt><dd>K&amp;B 4 × 2000 guillotine with readout</dd></div>'+
    '<div data-r><dt class="lab">Welding</dt><dd>4 × Fronius Magic Wave 3000 TIG sets, a Sciaky spot welder and 3 × Cutlass stud welders</dd></div>'+
    '<div data-r><dt class="lab">Insert assembly</dt><dd>4 × Haeger insert assembly machines</dd></div>'+
    '<div data-r><dt class="lab">De-burring · finishing</dt><dd>Grindingmaster 3000 and 2000 linishers, a rumble drum and an Erba drier</dd></div>'+
    '<div data-r><dt class="lab">Machining</dt><dd>XYZ CNC mill, Colchester lathe, 4 × Meddings drills and an Elliott surface grinder</dd></div>'+
    '<div data-r><dt class="lab">Quality</dt><dd>Mitutoyo B706 three-coordinate measuring machine</dd></div>'+
   '</dl></div>'+
   '<div class="bk"><span class="lab kick" data-r>Data exchange</span><p class="cr" data-r><span>DXF</span><span>DWG</span><span>STEP</span><span>IGES</span><span>Parasolid</span><span>SAT</span><span>Inventor</span><span>Solid Edge</span><span>Pro/ENGINEER</span><span>Unigraphics</span><span>Rhino</span><span>PDF</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">A Hampshire family firm</span> <em class="nw">since 1974.</em></h2></div><p data-r>Our success has been built on high levels of involvement with our customers, and a Customer Service department that is always available to discuss individual requirements in detail before an estimate.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>Milestones</span><ul>'+
     '<li data-r><b class="yr">1974</b>Barlow Sheet Metal Ltd is incorporated on 29 August.</li>'+
     '<li data-r><b class="yr">Today</b>A 20,000 sq ft factory on the Wessex Gate Industrial Estate in Horndean, with a 5,500 sq ft storage warehouse.</li>'+
     '<li data-r><b class="yr">2020</b>£750,000 of new LVD plant installed: two Strippit P Series punch presses, two PPEB and two Dyna-Press brakes.</li>'+
     '<li data-r><b class="yr">2020</b>LVD publishes a case study on Barlow Sheet Metal.</li>'+
     '<li data-r><b class="yr">2026</b>Stand P110 at Southern Manufacturing &amp; Electronics, Farnborough.</li>'+
     '<li data-r><b class="yr">2027</b>Exhibiting again at Southern Manufacturing &amp; Electronics, 2–4 February.</li>'+
    '</ul></div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">At Farnborough</span> <em class="nw">in February.</em></h2></div><p data-r>Meet the team at Southern Manufacturing &amp; Electronics, and read what customers and LVD say about our work. Each entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Send us your drawings.</span> <em class="nw">We will quote.</em></h2>'+
   '<p class="sub" data-r>From a single prototype to full production quantities: send your CAD data to the programming department, or call Customer Service to talk through your requirements.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email sales '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Barlow Sheet Metal Ltd</span><br><span>Wessex Gate Industrial Estate</span><br><span>Portsmouth Road, Horndean</span><br><span>Waterlooville, Hants PO8 9LP</span></p></div>'+
    '<div><span class="lab" data-r>General · sales</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Telephone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></span><br><span>Fax '+FAXT+'</span></p></div>'+
    '<div><span class="lab" data-r>Programming · drawings</span><p data-r><a class="ul" href="mailto:'+CAD+'">'+CAD+'</a><br><span>Drawings and CAD data for quotes and manufacture</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Barlow Sheet Metal Ltd<br>Wessex Gate Industrial Estate, Portsmouth Road, Horndean, Waterlooville PO8 9LP</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/capabilities">Capabilities</a><br><a class="ul" href="#/plant">Plant</a><br><a class="ul" href="#/quality">Quality</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">What we make</span>Precision sheet metal fabrications for the electronics and electro-mechanical industries, from prototype to full production.</div>'+
  '</div><svg class="bigsvg" viewBox="'+FOOTVB+'" aria-hidden="true"><path fill="currentColor" d="'+FOOTD+'"/></svg>'+
  '<div class="legal"><span class="lab">© 2026 Barlow Sheet Metal Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",capabilities:"capabilities",quality:"quality",plant:"plant",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Barlow Sheet Metal — precision sheet metal fabrication, Waterlooville, since 1974",x:"Home"};
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
