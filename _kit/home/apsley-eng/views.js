/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><h3>'+esc(c[2])+'</h3><p>'+esc(c[3])+'</p><a class="lab lk ul" href="'+c[4]+'" target="_blank" rel="noopener">'+"Details"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>A family company since 1984</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul>'+
    '<p class="offs">Graham Aymes BSc CEng MIMechE set the company up after a career as a lead design engineer for the British government, and secured defence customers who remain with Apsley today.</p></div>'}
/* sectors (apsleyeng.co.uk > Sectors: Defence, Medical, Oil & Gas) */
function caps(){var C=[
  ["Defence","Mission-critical parts","Precision housings, mounts and fixtures, aluminium and titanium UAV and aerospace assemblies, machined enclosures and connector bodies, with full traceability from prototype to production.",'<rect x="8" y="14" width="40" height="28"/><circle class="a" cx="20" cy="28" r="5"/><circle class="a" cx="36" cy="28" r="5"/><circle class="f" cx="28" cy="20" r="1.8"/>'],
  ["Medical","Medical-grade parts","Components for diagnostic systems and precision assemblies in stainless steel, aluminium, titanium and advanced polymers, verified on CNC CMMs down to micron accuracy.",'<path d="M22 8H34V14H22Z"/><path d="M24 14V48L28 52L32 48V14"/><path class="a" d="M24 20L32 23M24 26L32 29M24 32L32 35M24 38L32 41"/>'],
  ["Oil and gas","Harsh environments","Subsea connectors and housings, offshore equipment and valve components in Inconel 718 and 625, stainless, duplex and super duplex alloys, for onshore, offshore and subsea use.",'<circle cx="28" cy="28" r="20"/><circle cx="28" cy="28" r="8"/><circle class="f" cx="28" cy="13" r="2.2"/><circle class="f" cx="28" cy="43" r="2.2"/><circle class="f" cx="13" cy="28" r="2.2"/><circle class="f" cx="43" cy="28" r="2.2"/><circle class="a" cx="28" cy="28" r="13"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Apsley Precision Engineering<span class="nomob"> · Salisbury, since 1984</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Precision parts,</span></span> <span class="l"><em class="nw">right first time.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>CNC milled and turned components and assemblies for defence, aerospace, medical, nuclear, pharma, oil and gas and scientific customers, typically to ±0.005 mm, from one-off prototypes to production batches.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/capabilities">Our capabilities '+ARR+'</a><a class="btn" href="#/contact">Send us a drawing</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our philosophy</span>'+
   '<h2 class="txt" id="mani"><span class="nw">There is no margin for error</span> <span class="nw">with high-value, time-dependent</span> <span class="nw">and critical precision</span> <span class="nw">engineering projects.</span> <em><span class="nw">They have to be right,</span> <span class="nw">first time.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1984</span><p class="k">Graham Aymes founds Apsley Engineering, now Apsley Precision Engineering Ltd</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">±0.005</span><p class="k">mm, the tolerance Apsley typically machine components to</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">94 %</span><p class="k">customer satisfaction, with excellent on-time deliveries</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">One set-up, step by step</span><h2 class="d3"><span class="nw">From bar</span> <em class="nw">to measured part.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Turn</span><span>Mill</span><span>Measure</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Turned</span> <span class="nw">from bar.</span></h2><p>On twin-spindle DMG MORI mill-turn centres, bar up to 75 mm or billets up to 250 mm are turned to profile, with robot and gantry loading for production around the clock.</p></article>'+
     '<article class="step"><h2><span class="nw">Milled in</span> <span class="nw">the same set-up.</span></h2><p>Driven tools, Y and C axis machining and the sub-spindle add cross holes, flats and the back face, so there is no second operation: shorter machining times, lower cost and better accuracy.</p></article>'+
     '<article class="step"><h2><span class="nw">Measured</span> <span class="nw">on the CMM.</span></h2><p>Parts are inspected at every stage and verified on CNC CMMs directly against the electronic model of the design, typically to ±0.005 mm, with full traceability.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="capabilities" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Capabilities</span><h2 class="d2 split"><span class="nw">Milled, turned</span> <em><span class="nw">and inspected in-house.</span></em></h2></div><p data-r>A comprehensive range of multi-axis CNC milling and turning machinery and a full tool-room, for low, medium or high volumes of close-tolerance parts and assemblies, from prototype to production.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="sectors" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Sectors</span><h2 class="d2 split"><span class="nw">Where accuracy</span> <em class="nw">is non-negotiable.</em></h2></div><p data-r>Apsley have supplied manufacturing companies across the UK for over 40 years, with precision machined components and assemblies for the defence, medical, oil and gas, aerospace and scientific industries.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Also for</span><p class="cr" data-r><span>Aerospace</span><span>Nuclear</span><span>Pharma</span><span>Scientific instruments</span><span>Rail</span><span>Marine</span><span>Automotive</span><span>Robotics</span><span>Electronics</span><span>Telecoms</span><span>Power generation</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="quality" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality</span><h2 class="d2 split"><span class="nw">Quality is</span> <em class="nw">the cornerstone.</em></h2></div><p data-r>Every job is controlled and monitored, with full inspection at every stage, CAD/CAM and CNC CMM verification, and an emphasis on continual improvement.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Approvals</span><dl>'+
    '<div data-r><dt class="lab">AS9100 Rev D</dt><dd>Aerospace quality management, for complete traceability</dd></div>'+
    '<div data-r><dt class="lab">ISO 9001:2015</dt><dd>Quality management, first certified in 2010</dd></div>'+
    '<div data-r><dt class="lab">JOSCAR</dt><dd>Certified for the aerospace, defence and security supply chain</dd></div>'+
    '<div data-r><dt class="lab">Cyber Essentials</dt><dd>Accredited, for the security of customer drawings and data</dd></div>'+
   '</dl></div>'+
   '<div class="bk"><span class="lab kick" data-r>Materials</span><p class="cr" data-r><span>Aluminium</span><span>Stainless steel</span><span>Titanium</span><span>Inconel 718 and 625</span><span>Duplex and super duplex</span><span>Advanced polymers</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Built on</span> <em class="nw">steady reinvestment.</em></h2></div><p data-r>A dedication to quality and customer service has been the key to steady growth. A policy of reinvestment keeps the company flexible enough to machine a full range of materials in a variety of sizes.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>History</span><ul>'+
     '<li data-r><b class="yr">1984</b>Apsley Engineering is established by Graham Aymes, and secures defence contracts with customers who remain with Apsley today.</li>'+
     '<li data-r><b class="yr">Growth</b>With CNC machining and on-time delivery the business prospers, and moves to 12,000 sq ft premises at High Post, near Salisbury.</li>'+
     '<li data-r><b class="yr">2010</b>The company becomes Apsley Precision Engineering Ltd and gains ISO 9001 certification.</li>'+
     '<li data-r><b class="yr">2021</b>A DMG MORI NTX1000 mill-turn with robot loader, part-funded by the European Agricultural Fund for Rural Development.</li>'+
     '<li data-r><b class="yr">2023</b>A DMG MORI NLX2500 mill-turn with gantry loader, for 24-hour production.</li>'+
     '<li data-r><b class="yr">2027</b><a class="ul" href="https://www.southern-manufacturing-electronics.com/exhibitors/apsley-precision-engineering-ltd-261741/" target="_blank" rel="noopener">Exhibiting at Southern Manufacturing & Electronics</a>, Farnborough, 2–4 February, stand J340.</li>'+
    '</ul></div></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Every relationship starts</span> <em class="nw">with a conversation.</em></h2>'+
   '<p class="sub" data-r>Call us to discuss your machining requirements, or email your enquiry. We can read PDF, DXF and DWG drawings and a variety of solid models.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email your enquiry '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call 01722 782488</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Apsley Precision Engineering Ltd</span><br><span>High Post, Salisbury</span><br><span>Wiltshire SP4 6AT, UK</span></p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></span></p></div>'+
    '<div><span class="lab" data-r>Approvals</span><p data-r><span>AS9100 Rev D · ISO 9001:2015</span><br><span>JOSCAR · Cyber Essentials</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Apsley Precision Engineering Ltd<br>High Post, Salisbury, Wiltshire SP4 6AT, UK</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/capabilities">Capabilities</a><br><a class="ul" href="#/sectors">Sectors</a><br><a class="ul" href="#/quality">Quality</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Services</span>CNC milling and turning, prototypes, production machining, CMM inspection, project management, stock management and Kanban.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Jost\',system-ui,sans-serif;font-weight:400;font-size:60px;letter-spacing:.3em">APSLEY</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Apsley Precision Engineering Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",capabilities:"capabilities",sectors:"sectors",quality:"quality",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Apsley Precision Engineering — CNC machined precision components, Salisbury, since 1984",x:"Home"};
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
