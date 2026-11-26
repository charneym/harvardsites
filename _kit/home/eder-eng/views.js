/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><h3>'+esc(c[2])+'</h3><p>'+esc(c[3])+'</p><a class="lab lk ul" href="'+c[4]+'" target="_blank" rel="noopener">'+"Details"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Family company since 1947</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul>'+
    '<p class="offs">Dr. Kurt G. Eder is also President of the Austrian Wire and Cable Machinery Manufacturers’ Association (AWCMA/VÖDKM), Vice-President of the IWCEA and a member of the Wire Exhibitors’ Council board.</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* EDER conceptions (eder-eng.com > Die working machines in general, Technical assistance) */
function caps(){var C=[
  ["For production","Turnkey die lines","Complete turnkey production lines in the latest technology, or the updating and modernisation of an existing production line.",'<rect x="8" y="20" width="40" height="16"/><path class="a" d="M8 28H48"/><circle class="f" cx="28" cy="28" r="2.6"/>'],
  ["For reconditioning","Die workshops","Complete die-tool reconditioning workshop lines, or single machines to update and upgrade the equipment of an existing die workshop.",'<circle cx="28" cy="28" r="17"/><circle cx="28" cy="28" r="7"/><path class="a" d="M28 4V52"/><circle class="f" cx="28" cy="28" r="2.4"/>'],
  ["Technical assistance","Know-how and training","Installation, taking into operation, operational education, training and re-training, die-tool processing know-how and the updating of existing know-how.",'<path d="M10 44H46"/><path d="M16 44V22L28 12L40 22V44"/><path class="a" d="M24 44V32H32V44"/><circle class="f" cx="28" cy="24" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>EDER Engineering<span class="nomob"> · Vienna, since 1947</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Die working</span> <span class="l">machines for wire</span> <span class="l"><em class="nw">and cable makers.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Machines and conceptions for the production and reconditioning of ultrahard drawing die-tools made from tungsten carbide, natural diamond and synthetic PCD, supplied to the wire and cable industry in over 80 countries.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/machines">Our machines '+ARR+'</a><a class="btn" href="#/contact">Ask the specialist</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our slogan</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Only good die-tools</span> <span class="nw">draw good wire,</span> <em><span class="nw">and ensure an optimal economy</span> <span class="nw">in every wire drawing mill</span> <span class="nw">and cable plant.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1947</span><p class="k">Siegfried Eder founds the company in Vienna, making tungsten carbide drawing dies</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">80+</span><p class="k">countries where EDER customers draw wire, with about 98 % of production exported</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">45+</span><p class="k">years: EDER machines are often found in permanent use for this long</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Die reconditioning, step by step</span><h2 class="d3"><span class="nw">A worn die,</span> <em class="nw">brought back.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Wear</span><span>Cone</span><span>Bearing</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">All drawing dies</span> <span class="nw">wear out.</span></h2><p>Repolish as soon as the polish at the wire contact point in the drawing cone becomes cloudy, and a die keeps its original diameter for longer.</p></article>'+
     '<article class="step"><h2><span class="nw">The cone is re-profiled</span> <span class="nw">by ultrasound.</span></h2><p>On a USP machine an ultrasonically vibrating work needle with abrasive grinds and polishes the conical parts of the die geometry, re-profiling and enlarging the reduction cone.</p></article>'+
     '<article class="step"><h2><span class="nw">A work wire</span> <span class="nw">sizes the bearing.</span></h2><p>On an HGM, CGM or UFW machine a work wire with abrasive strokes through the rotating die and calibrates and polishes the drawing cylinder, from 0.05 mm to 10 mm Ø.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="machines" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Die working machines</span><h2 class="d2 split"><span class="nw">Carbide, diamond</span> <em><span class="nw">and PCD dies.</span></em></h2></div><p data-r>Easy to understand and to operate, with a high degree of automation even on standard units, largely maintenance-free, and suitable for both the reconditioning and the production of precision die-tools.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="solutions" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Conceptions</span><h2 class="d2 split"><span class="nw">From one machine</span> <em class="nw">to a whole line.</em></h2></div><p data-r>EDER supplies single machines to upgrade existing lines, complete die-tool reconditioning workshops and efficient die production lines, with the software, know-how and technical assistance each one needs.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Technologies</span><p class="cr" data-r><span>Mechanical</span><span>Laser</span><span>Ultrasonic</span><span>Special EDM</span><span>Electro-galvano</span></p></div>'+
   '<div class="qual q2"><span class="lab kick" data-r>Executions</span><p class="cr" data-r><span>Standard</span><span>Semi-automatic</span><span>Fully automatic</span><span>Single machines</span><span>Complete equipment lines</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="dietools" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Drawing die-tools</span><h2 class="d2 split"><span class="nw">Where EDER began,</span> <em class="nw">and still delivers.</em></h2></div><p data-r>EDER started with drawing dies, first in tungsten carbide, then natural diamond. The machines were designed for its own die production before customers could buy them for reconditioning their dies.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Die-tools</span><dl>'+
    '<div data-r><dt class="lab">Tungsten carbide · since 1947</dt><dd>Precision drawing dies, the first EDER products</dd></div>'+
    '<div data-r><dt class="lab">Natural diamond</dt><dd>Dies whose workability depends on each individual stone</dd></div>'+
    '<div data-r><dt class="lab">Synthetic PCD · late 1960s</dt><dd>Dr. Kurt G. Eder made the first Compax/PCD drawing die</dd></div>'+
    '<div data-r><dt class="lab">Special tools</dt><dd>Special drawing die-tools, about 10 % of production today</dd></div>'+
   '</dl></div>'+
   '<div class="bk"><span class="lab kick" data-r>PCD pioneers</span><p class="cr" data-r><span class="one">Close research with the PCD laboratories of General Electric (Compax) and De Beers (Syndie)</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">A family firm</span> <em class="nw">since 1947.</em></h2></div><p data-r>Founded in January 1947 by Siegfried Eder, then a key technical manager of a large wire and cable plant in Vienna. Today EDER exports about 98 % of its production, with over 50 representations worldwide.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>History</span><ul>'+
     '<li data-r><b class="yr">1947</b>Founded in Vienna, making tungsten carbide drawing dies, later natural diamond dies, and the machines to work them.</li>'+
     '<li data-r><b class="yr">1960</b>Kurt G. Eder joins the company his father founded; he has led it as President and CEO since 1992.</li>'+
     '<li data-r><b class="yr">Late 1960s</b>The first Compax/PCD drawing die, made with new technologies and equipment developed for it.</li>'+
     '<li data-r><b class="yr">Today</b>About 80 % machines, 10 % special die-tools and 10 % software and technical assistance.</li>'+
    '</ul></div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Exhibitions</span><p class="cr" data-r><span>wire Düsseldorf</span><span>Wire Russia</span><span>Wire Asia Shanghai</span><span>Interwire Atlanta</span><span>Wire Singapore</span><span>Wire India</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">At wire 2026,</span> <em class="nw">and in the wire press.</em></h2></div><p data-r>EDER takes part in the important international wire and cable exhibitions and symposia, and Dr. Eder often presents technical papers. Every entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Don’t take risks,</span> <em class="nw">consult the specialist.</em></h2>'+
   '<p class="sub" data-r>If you have a question about your dies, your die workshop or a new production line, we have the answer, in your language.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>EDER Engineering GmbH</span><br><span>Peter-Jordan-Strasse 12/3</span><br><span>1190 Vienna, Austria</span></p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></span><br><span>Fax '+FAXT+'</span></p></div>'+
    '<div><span class="lab" data-r>Worldwide</span><p data-r><span>Over 50 representations</span><br><span>Customers in 80+ countries</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>EDER Engineering GmbH<br>Peter-Jordan-Strasse 12/3, 1190 Vienna, Austria</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/machines">Machines</a><br><a class="ul" href="#/solutions">Solutions</a><br><a class="ul" href="#/dietools">Die-tools</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Products</span>Die working machines, drawing die-tools, die workshop equipment, consumables and technical assistance.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Saira\',system-ui,sans-serif;font-weight:800;font-size:60px;letter-spacing:.3em">EDER</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 EDER Engineering GmbH</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",machines:"machines",solutions:"solutions",dietools:"dietools",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"EDER Engineering — die working machines and drawing die-tools, Vienna, since 1947",x:"Home"};
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
