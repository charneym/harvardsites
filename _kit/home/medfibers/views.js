/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prodRows(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+MF+c[3]+'" target="_blank" rel="noopener">Specifications '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row mf-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Tested with a laser, in production","Every surgical fiber delivery system is tested with a laser during production to validate the assembly, and 100% quality inspected before it leaves.",'<path d="M8 28H30"/><path class="a" d="M30 28H48"/><circle cx="30" cy="28" r="5"/><path d="M40 20L48 28L40 36"/><circle class="f" cx="30" cy="28" r="2.2"/>'],
  ["Made to order, just in time","Just-in-time manufacturing: orders are made to your exact specifications rather than sitting on a shelf, where sterilization mandates shorten their usable life.",'<rect x="10" y="12" width="36" height="34"/><path d="M10 22H46"/><path class="a" d="M18 34L25 40L38 28"/><circle class="f" cx="38" cy="28" r="2.2"/>'],
  ["Custom made, custom labeled","Customer-optimized designs on request, laser engraving and coloured extension sleeves, and custom labeled fibers, with a response in under 24 hours.",'<path d="M12 44L44 12"/><path class="a" d="M12 12C24 20 32 36 44 44"/><circle cx="12" cy="44" r="3"/><circle class="f" cx="44" cy="12" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function certs(){var S=[
  ["United States","FDA 510(k) cleared","All MED-Fibers surgical fiber devices are FDA cleared, under 510(k) No. K124003, and meet FDA GMP requirements."],
  ["Quality system","ISO 13485:2016","Certified to NF EN ISO 13485:2016 for the design and manufacture of medical devices."],
  ["Europe","CE marking","CE certificate with GMED as notified body. European representation by Total-Laser Solution GmbH, Vienna."]];
  return '<div class="mfs">'+S.map(function(s){return '<div class="mf-site"><span class="lab" data-r>'+esc(s[0])+'</span><h3 data-r>'+esc(s[1])+'</h3><p data-r>'+esc(s[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Surgical laser fibers<span class="nomob"> · Chandler, Arizona</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Precision surgical</span><span class="l">laser fibers,</span><span class="l"><em>made in the U.S.A.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>MED-Fibers designs and manufactures surgical laser fibers for holmium, thulium and other surgical lasers: FDA 510(k) cleared, ISO 13485 certified and CE marked, and distributed globally.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Explore the fibers '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Quality enforcement is our motto</span>'+
   '<h2 class="txt" id="mani">Our fibers are designed for strong laser energy transmission across a wide wavelength range, and built to prevent the energy leakage that <em>damages lasers, scopes and fibers.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">100–1000</span><p class="k">Core diameters in micrometres, from thin-core thulium fibers to large-core fibers</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">532–2200</span><p class="k">Wavelengths in nanometres: for use with all approved lasers in that range</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50+</span><p class="k">Years of combined optical fiber knowledge in the MED-Fibers team</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology · inside a laser fiber</span><h2 class="d3">From laser to stone, <em>without losses.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Carry</span><span>Polish</span><span>Deliver</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Light, carried.</h2><p>A low-OH silica core inside a hard clad and a blue Tefzel jacket guides the laser energy by total internal reflection, with low losses across 532 to 2200 nm.</p></article>'+
     '<article class="step"><h2>A tip, fire polished.</h2><p>On the Dome Tip Fiber™ the edges of the tip are melted smooth. Fire polishing removes micro cracks and makes the tip 200 times stronger, while keeping the collimated beam of a flat tip.</p></article>'+
     '<article class="step"><h2>Energy, delivered.</h2><p>The energy reaches the stone with almost no losses. With thulium fiber lasers at 100 and 120 Hz, MED-Fibers’ thin-core fibers dust stones at extreme speed and can cut procedure time by up to 25%.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">A fiber for <em>every procedure.</em></h2></div><p data-r>Single-use and reusable surgical laser fibers, guaranteed compatible with all FDA approved laser systems on the market (excluding those with RFID connectors). Each line links to its specifications:</p></div>'+
   prodRows()+
   '<div class="bk"><span class="lab kick" data-r>Lasers</span><p class="cr" data-r>'+LASERS.map(function(g){return '<span>'+esc(g)+'</span>'}).join("")+'<span>1 to 300 W, peak and continuous</span></p></div>'+
   '<div class="bk"><span class="lab kick" data-r>Applications</span><p class="cr" data-r>'+APPS.map(function(g){return '<span>'+esc(g)+'</span>'}).join("")+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="quality" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality</span><h2 class="d2 split">Made in Chandler, <em>cleared worldwide.</em></h2></div><p data-r>MED-Fibers surgical laser fibers are made in its own facility in Chandler, Arizona, and 100% German designed and engineered, with core, cladding and jacket materials selected for their biocompatible properties.</p></div>'+
   caps()+
   certs()+
  '</div></section>'+

  '<section class="sec light alt" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Optical fiber people, <em>on standby.</em></h2></div><p data-r>MED-Fibers is owned by Dr. Armin Kaus and Klaus Sivec and managed by Dr. Kaus with his core leadership team. Its technicians are selected and trained on an ongoing basis.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Meet MED-Fibers <em>at the shows.</em></h2></div><p data-r>Recent trade shows and news, from AUA to MEDICA in Düsseldorf. Each item links to the full story on med-fibers.com.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Quotes, samples and orders</span>'+
   '<h2 class="big split">Tell us your laser <em>and your procedure.</em></h2>'+
   '<p class="sub" data-r>Let MED-Fibers know what type of laser you have and what procedure you are performing, and the team will send you a quote. Custom made and custom labeled fibers are available.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email MED-Fibers '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters and manufacturing</span><p data-r>MED-Fibers, Inc.<br>7404 W. Detroit Street, Suite 140<br>Chandler, Arizona 85226, USA</p></div>'+
    '<div><span class="lab" data-r>Sales</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>European representation</span><p data-r>Total-Laser Solution GmbH<br>Wienerbergstraße 11/12A, 1100 Vienna, Austria<br><a class="ul" href="tel:+431994606995">+43 1 99460-6995</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>7404 W. Detroit Street, Suite 140<br>Chandler, Arizona 85226, USA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/quality">Quality</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Certifications</span>FDA 510(k) K124003<br>ISO 13485:2016<br>CE marking</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Sora\',Arial,sans-serif;font-weight:300;font-size:58px;letter-spacing:.12em">MED-FIBERS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 MED-Fibers, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",products:"products",quality:"quality",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"MED-Fibers — surgical laser fibers, made in the U.S.A.",x:"Home"};
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
