/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Peak Production · Letchworth","Custom test systems and fixtures","Founded in 1984 as a maker of in-circuit test fixtures, now mostly automated test solutions and high-end functional fixtures, designed, manufactured and assembled in house.",'<rect x="14" y="6" width="28" height="44"/><path class="a" d="M19 14H37M19 22H37M19 30H37"/><path d="M10 50H46"/><circle class="f" cx="28" cy="40" r="2.4"/>'],
  ["Peak Test · Chester-le-Street","Probes and test accessories","The UK leader in the distribution of spring contact test probes and receptacles, carrying the most comprehensive range, with many probes ex-stock for next-day delivery.",'<path d="M28 4V30"/><path class="a" d="M24 30H32V44H24Z"/><path d="M28 44V52"/><circle class="f" cx="28" cy="4" r="2.4"/>'],
  ["Peak Software","Bespoke test software","Software for a complete test solution or one part of a system, in NI LabVIEW and TestStand and Visual Studio, with analysis tools such as WRAP and boundary scan.",'<rect x="6" y="10" width="44" height="32"/><path class="a" d="M20 20L14 26L20 32M36 20L42 26L36 32"/><path d="M18 48H38"/><circle class="f" cx="28" cy="26" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Automated test<span class="nomob"> · Letchworth · since 1984</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">From the probe</span><span class="l">to the test rack,</span><span class="l"><em>no compromise.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>The Peak Group designs and builds automated test and measurement systems, supplies spring contact test probes and writes bespoke test software, for every stage from component test to complex functional test.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/solutions">See what we make '+ARR+'</a><a class="btn" href="#/contact">Talk to Peak</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The whole process</span>'+
   '<h2 class="txt" id="mani">When you buy from Peak, you buy the whole process. <em>We design, manufacture and assemble every fixture and system in house, in the UK.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1984</span><p class="k">The year Richard Bushell founded the Peak Group, beginning in his garage</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40+</span><p class="k">Years of automated test and measurement, test probes and bespoke software</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">60+</span><p class="k">People in design, wiring, machining and test, grown from that garage</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">A custom test system</span><h2 class="d3">From first drawing <em>to final pass.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Design</span><span>Build</span><span>Commission</span><span>Support</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Design.</h2><p>A project team of mechanical, electrical and software engineers takes the customer’s requirements, at whatever level of detail, and designs the system around them.</p></article>'+
     '<article class="step"><h2>Build.</h2><p>Everything is made in house: CNC machining and 3D printing for the mechanics, PCB assembly, harnesses and custom rack wiring, with the commercial instruments integrated alongside.</p></article>'+
     '<article class="step"><h2>Commission.</h2><p>Peak installs and commissions the system in the customer’s process, then follows up with hands-on training and detailed documentation.</p></article>'+
     '<article class="step"><h2>Support.</h2><p>Dedicated service, warranty and post-warranty support means a rapid response and minimal downtime, from prototype through to service and repair.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="companies" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The Peak Group of companies</span><h2 class="d2 split">Three companies, <em>one test partner.</em></h2></div><p data-r>A holistic approach, so that every part of the product lifecycle is supported, from prototype through to service and repair, across defence, aerospace, medical, rail, automotive, power generation and industrial electronics.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Markets</span><p class="cr" data-r><span>Aerospace and defence</span><span>Automotive</span><span>Medical</span><span>Rail</span><span>Power generation</span><span>Industrial electronics</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="solutions" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Solutions</span><h2 class="d2 split">Systems, probes <em>and software.</em></h2></div><p data-r>Intelligent integration of commercial off-the-shelf equipment with custom-designed mechanical, electronic and system software, plus the probes and interconnect that every fixture depends on.</p></div>'+
   prods()+
   '<div class="act shop" data-r><a class="btn solid" href="mailto:'+MAIL+'">Discuss a test project '+ARR+'</a><a class="btn" href="mailto:'+MAIL2+'">Ask about probes</a></div>'+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About Peak</span><h2 class="d2 split">Grown with UK <em>electronics.</em></h2></div><p data-r>Peak began by building in-circuit test fixtures. As the UK electronics market evolved, Peak evolved with it, and most of the business is now automated test solutions and high-end functional fixtures.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Quality and partners</span><dl>'+
    '<div data-r><dt class="lab">1984</dt><dd>Richard Bushell founds the Peak Group, building ATE in-circuit test fixtures</dd></div>'+
    '<div data-r><dt class="lab">ISO 9001:2015</dt><dd>Certified quality management at Peak Production, with a certificate running from 2024 to 2027</dd></div>'+
    '<div data-r><dt class="lab">IPC</dt><dd>An IPC member, with technicians certified to IPC-A-610 and A-620</dd></div>'+
    '<div data-r><dt class="lab">2026</dt><dd>JOSCAR registered, and certified to Cyber Essentials Plus for 2026 to 2027</dd></div>'+
    '<div data-r><dt class="lab">Partners</dt><dd>Gold Alliance partner with National Instruments, Solutions Partner with Keysight, System Integrator with Pickering, GATE partner with Goepel</dd></div>'+
    '<div data-r><dt class="lab">VPC</dt><dd>UK distributor for Virginia Panel Corporation mass interconnect, used within Peak’s own designs</dd></div>'+
   '</dl></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Grown from the <em>workshop floor.</em></h2></div><p data-r>The founder began his career as an electronics apprentice. The managing director joined Peak as an apprentice in the wiring department, and the design director started out assembling test fixtures.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News and events</span><h2 class="d2 split">On the show floor <em>and in the lab.</em></h2></div><p data-r>Peak at the shows, and technical notes from Peak Test. Every entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Talk to us about <em>your next test.</em></h2>'+
   '<p class="sub" data-r>For test systems, fixtures and software, reach Peak Production in Letchworth. For probes and test accessories, reach Peak Test in Chester-le-Street.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Peak Production '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Peak Production · Peak Software</span><p data-r>Peak House, Works Road<br>Letchworth Garden City<br>SG6 1GB, United Kingdom</p></div>'+
    '<div><span class="lab" data-r>Systems and software</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Peak Test</span><p data-r>152a Front Street, Chester-le-Street, DH3 3AY<br><a class="ul" href="mailto:'+MAIL2+'">'+MAIL2+'</a><br>Phone <a class="ul" href="tel:'+TEL2+'">'+TEL2T+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Letchworth</span>Peak House, Works Road<br>Letchworth Garden City SG6 1GB</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/companies">Companies</a><br><a class="ul" href="#/solutions">Solutions</a><br><a class="ul" href="#/about">About</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">The group</span>Peak Production<br>Peak Test · Peak Software</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 72" aria-hidden="true"><text x="450" y="58" text-anchor="middle" style="font-family:\'Plus Jakarta Sans\',Arial,sans-serif;font-weight:600;font-size:62px;letter-spacing:.16em">PEAK GROUP</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 The Peak Group</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",process:"story",companies:"companies",solutions:"solutions",about:"company",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Peak Group — Automated test and measurement solutions, test probes and test software, UK",x:"Home"};
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
