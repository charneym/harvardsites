/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function types(){return '<div class="swtw"><ol class="swtl">'+TYPES.map(function(t,i){
  return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(t[0])+'</h3><p>'+esc(t[1])+'</p></li>'}).join("")+'</ol>'+
  '<aside class="swsp" data-r><span class="lab kick">Wirmec AM310 Quattro · cut, strip and terminate</span><dl>'+
   '<div><dt class="lab">Wire range</dt><dd>11–26 AWG, 0.13 to 4.0 mm²</dd></div>'+
   '<div><dt class="lab">Stations</dt><dd>Up to four, set per assembly</dd></div>'+
   '<div><dt class="lab">Terminations</dt><dd>Single and double-ended crimps, ferrules, tinned ends, seals</dd></div>'+
   '<div><dt class="lab">Series</dt><dd>Molex Mini-Fit Jr., Micro-Fit 3.0, PicoBlade, KK, VH; JST PH and XH</dd></div>'+
  '</dl><p>Alongside Schleuniger strippers, Mecal semi-automatic presses and JST crimp machines on the Nottingham floor.</p></aside></div>'}
/* four capabilities (sherwoodelectronics.co.uk > Cable Assembly Solutions, Technical Expertise, Tooling, Encapsulation and Potting) */
function caps(){var C=[
  ["Design","<span class=\"nw\">Drawings made</span> <span class=\"nw\">in-house</span>","Our engineers analyse your application and advise during the design phase. We produce manufacturing drawings as a one-off or under contract, released only on your authority.",'<rect x="6" y="8" width="44" height="40"/><path d="M12 30H44M12 26V34M44 26V34"/><path class="a" d="M14 18H30M14 40H24"/>'],
  ["Prototyping","<span class=\"nw\">First-off samples</span> <span class=\"nw\">for approval</span>","A rapid prototyping service before production, then pre-production quantities on short lead times, so the assembly is right before the volume run.",'<path d="M6 28H22M34 28H50"/><rect x="22" y="20" width="12" height="16"/><path class="a" d="M18 44L24 50L38 36"/>'],
  ["Production","<span class=\"nw\">Automated cut,</span> <span class=\"nw\">strip and crimp</span>","The Wirmec AM310 Quattro, Schleuniger stripping and Mecal presses terminate crimps from Molex, JAE, JST, Tyco, Harwin, EDAC, FCI, Hirose and more.",'<path d="M4 28H52"/><path d="M18 12V22M38 12V22"/><path class="a" d="M14 22H22M34 22H42M18 34V44M38 34V44"/>'],
  ["Potting","<span class=\"nw\">Sealed and potted</span> <span class=\"nw\">against the elements</span>","Potting and encapsulation protect joints and assemblies from vibration, humidity, chemical attack, dust, water immersion and wide thermal cycles.",'<path d="M10 14V46H46V14"/><path class="a" d="M10 30H46"/><path d="M28 6V38"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* test and inspection (sherwoodelectronics.co.uk > Cable Assembly Testing) */
function tests(){var S=[
  ["Continuity and shorts","Every connection tested for continuity and short circuits on Cirris test equipment."],
  ["Hipot","Dielectric withstand testing, DC or AC, for insulation."],
  ["Crimp quality","Crimp termination checks and crimp pull tests, with solder joints, housings, sleeving and stripping inspected."],
  ["Guided assembly","The Cirris CR system tests while you build: on-screen cavity positions, LEDs on the board and instant feedback."],
  ["Length and drawing","Length tolerance and every critical feature checked against the customer drawing before despatch."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Cable assemblies<span class="nomob"> · Nottingham</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Cable assemblies,</span> <span class="l"><em class="nw">built to your drawing.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Since 1993, Sherwood Electronics has designed and made standard and bespoke cable assemblies, wiring looms and harnesses in Long Eaton, Nottingham, with full UL release for the US and Canada.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/assemblies">Our cable assemblies '+ARR+'</a><a class="btn" href="#/contact">Request a quotation</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Since 1993 in Nottingham</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Cable assemblies that</span> <span class="nw">stand up to the most</span> <span class="nw">rigorous electrical,</span> <span class="nw">mechanical and</span> <span class="nw">environmental applications.</span> <em><span class="nw">Designed with you,</span> <span class="nw">made in Nottingham.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1993</span><p class="k">founded in Nottingham, with a sister factory in Taiwan since 1996</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100%</span><p class="k">of the assemblies we build in-house are inspected before despatch</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30%</span><p class="k">expansion of our UK cable assembly service, to meet growing demand</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">One assembly, start to finish</span><h2 class="d3"><span class="nw">From drawing</span> <em class="nw">to despatch.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Drawing</span><span>Strip</span><span>Crimp</span><span>Test</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">It starts</span> <span class="nw">with the drawing.</span></h2><p>Lengths, tolerances, connectors and pinout, set with your engineers. We draw it in-house if you need us to, and make a first-off sample for approval.</p></article>'+
     '<article class="step"><h2><span class="nw">Each wire is cut</span> <span class="nw">and stripped.</span></h2><p>The Wirmec AM310 Quattro and our Schleuniger strippers cut every wire to length and strip both ends cleanly, from 26 AWG up to 11 AWG.</p></article>'+
     '<article class="step"><h2><span class="nw">Terminals crimped,</span> <span class="nw">housings fitted.</span></h2><p>Crimps go on by machine and are pull-tested; the wires go into the connector housings, cavity by cavity, guided on screen by the Cirris CR system.</p></article>'+
     '<article class="step"><h2><span class="nw">Every assembly</span> <span class="nw">is tested.</span></h2><p>Continuity and short circuits at every connection, hipot for the insulation, and a check against the drawing, before it is packed and despatched.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="assemblies" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Cable assemblies</span><h2 class="d2 split"><span class="nw">Standard or bespoke,</span> <em class="nw">one cable at a time.</em></h2></div><p data-r>From solder-type and IDC assemblies to ruggedised, waterproof and moulded cables, with custom shielding, jacketing, colours and logos. Small, medium and large production runs.</p></div>'+
   types()+
  '</div></section>'+

  '<section class="sec light" id="capability" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Capability</span><h2 class="d2 split"><span class="nw">From concept</span> <em class="nw">to completion.</em></h2></div><p data-r>Our engineers work closely with yours to turn a project into a finished assembly, with engineers on site at our Taiwan factory as well as here in the UK.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Tooling in Nottingham</span><p class="cr" data-r><span>Schleuniger PowerStrip 9500</span><span>Schleuniger OmniStrip 9400</span><span>Schleuniger CCM 1200</span><span>Wirmec AM310 Quattro</span><span>JST AP F6</span><span>GLW EC65</span><span>Uniflex HM 160</span><span>BOFA FumeCAB 1000 iQ</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="quality" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality</span><h2 class="d2 split"><span class="nw">Inspected in full,</span> <em class="nw">before it ships.</em></h2></div><p data-r>Statistical process control, inspection, electrical tests and quality checks at each stage of manufacture, to our ISO 9001:2015, IPC-WHMA-A-620C and UL procedures.</p></div>'+
   tests()+
   '<div class="qual"><span class="lab kick" data-r>Approvals</span><p class="cr" data-r><span>UL approved and listed E474869</span><span>ISO 9001:2015</span><span>IPC-A-610</span><span>IPC-WHMA-A-620C</span><span>RoHS 3 (EU 2015/863)</span><span>REACH (EC 1907/2006)</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Built in Nottingham,</span> <em class="nw">since 1993.</em></h2></div><p data-r>A friendly, skilled team in Long Eaton, and Sherwood Connector Co Ltd in Taiwan, established in 1996, for connectors and Far East manufacturing.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Directors</span><ul>'+
     '<li data-r><span class="nm">Kenneth Brennan</span><span class="lab rl">Director · since 1993</span></li>'+
     '<li data-r><span class="nm">Giles Sutcliffe</span><span class="lab rl">Director</span></li>'+
    '</ul></div>'+
    '<div class="engpol"><span class="lab kick" data-r>Where our cables work</span><ul class="sct">'+
     ['Automotive and EV','EV charging points','Military and defence','Aerospace','Rail','Medical','Telecommunications','Industrial control','Oil and gas','Subsea AUV and ROV','Offshore wind','Broadcast and AV'].map(function(s){return '<li data-r>'+s+'</li>'}).join("")+
    '</ul></div></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">See us</span> <em class="nw">at Farnborough.</em></h2></div><p data-r>Our next show, our approvals and our latest investments. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Your drawing,</span> <em class="nw">our cable assembly.</em></h2>'+
   '<p class="sub" data-r>Send us your drawing or your requirements for pricing, lead times, data sheets or samples for approval.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email the sales team '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>UK head office</span><p data-r><span>Sherwood Electronics Ltd</span><br><span>Units 1–2, Paragon Works</span><br><span>Wilsthorpe Road, Long Eaton</span><br><span>Nottingham NG10 3JW</span></p></div>'+
    '<div><span class="lab" data-r>Sales</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Telephone '+TELT+'</span></p></div>'+
    '<div><span class="lab" data-r>Far East</span><p data-r><span>Sherwood Connector Co Ltd</span><br><span>Taiwan (R.O.C.)</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Sherwood Electronics Ltd, Units 1–2, Paragon Works, Wilsthorpe Road, Long Eaton, Nottingham NG10 3JW</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/assemblies">Cable assemblies</a><br><a class="ul" href="#/capability">Capability</a><br><a class="ul" href="#/quality">Quality</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Approvals</span>UL E474869 · ISO 9001:2015 · IPC-A-610 · IPC-WHMA-A-620C</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Cabin\',Arial,sans-serif;font-weight:700;font-size:46px;letter-spacing:.16em">SHERWOOD ELECTRONICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Sherwood Electronics Ltd · Registered in England No. 02878570</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",assemblies:"assemblies",capability:"capability",quality:"quality",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Sherwood Electronics Ltd — Bespoke Cable Assemblies and Wiring Harnesses, Nottingham",x:"Home"};
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
