/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function newRows(){return '<ul class="pfr pipe np">'+NEWP.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Datasheet '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row oz-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Machined and lasered in-house","A CNC machine shop and a femtosecond laser laboratory, with laser conditioning and cleaving technologies for fiber preparation.",'<circle cx="28" cy="28" r="19"/><path d="M9 28H47"/><circle class="a" cx="28" cy="28" r="7"/><path d="M28 9V16M28 40V47"/><circle class="f" cx="28" cy="28" r="2.4"/>'],
  ["Coated and assembled clean","Anti-reflective (AR) coating capabilities and clean room manufacturing facilities, in Ottawa, Izmir and Jiaxing.",'<path d="M8 40H48"/><path class="a" d="M8 34H48"/><path d="M14 40V48M42 40V48"/><path d="M20 16L28 26L36 16"/><circle class="f" cx="28" cy="28" r="2.4"/>'],
  ["Test equipment, designed in-house","OZ Optics also designs fiber optic test equipment, from handheld power meters to polarization extinction ratio meters, with teams in optical, mechanical, electronics and software engineering.",'<rect x="8" y="14" width="40" height="28"/><path class="a" d="M14 34L22 26L30 30L42 20"/><path d="M8 48H48"/><circle class="f" cx="42" cy="20" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function sites(){var S=[
  ["Canada · global headquarters","Ottawa, Ontario","60,000 sq. ft. for manufacturing and R&D, 15,000 sq. ft. for administration, sales and marketing, and 15,000 sq. ft. for training and fitness."],
  ["Türkiye · since 2000","Izmir, Aegean Free Zone","A 33,000 sq. ft. subcomponent manufacturing facility in a free trade zone, with on-site clean room and advanced AR coating equipment."],
  ["China · since June 2010","Jiaxing, Zhejiang","More than 4,000 m², with 3,500 m² of manufacturing space including a 500 m² Class 10,000 clean room, supporting NPI and full production lines."]];
  return '<div class="ozs">'+S.map(function(s){return '<div class="oz-site"><span class="lab" data-r>'+esc(s[0])+'</span><h3 data-r>'+esc(s[1])+'</h3><p data-r>'+esc(s[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Fiber optics and photonics<span class="nomob"> · Ottawa, since 1985</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Fiber optic</span><span class="l">innovation,</span><span class="l"><em>since 1985.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>OZ Optics delivers advanced optical components, test equipment and sensing solutions worldwide, designed by its own engineers and made in its own plants in Canada, Türkiye and China.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Explore the products '+ARR+'</a><a class="btn" href="#/contact">Talk to sales</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Advancing fiber optic innovation</span>'+
   '<h2 class="txt" id="mani">OZ Optics combines engineering expertise, vertically integrated manufacturing and decades of innovation to deliver reliable, <em>high-performance optical solutions.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">13</span><p class="k">Specialized product groups, from laser-to-fiber delivery to quantum and AI optical connectivity</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10,000+</span><p class="k">Customers, served directly and through sales representatives and distributors</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">60+</span><p class="k">Countries where OZ Optics products are marketed and sold</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside a PM patchcord</span><h2 class="d3">Polarization, <em>kept in line.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fiber</span><span>Align</span><span>Lock</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A PANDA fiber.</h2><p>OZ Optics builds its polarization maintaining components and patchcords on PANDA-type fiber: two stress rods beside the core set a slow axis that holds the light’s polarization.</p></article>'+
     '<article class="step"><h2>Turned to the key.</h2><p>The fiber, or the connector frame, is rotated until the slow axis lines up with the keyway of the connector. Specially designed PM ferrules and housings keep backlash and rotational error to a minimum.</p></article>'+
     '<article class="step"><h2>Locked, and measured.</h2><p>Once aligned, the fiber is fixed in place. Pre-aligned patchcords hold polarization to better than 20 dB, with extinction ratios from 20 dB up to 40 dB available.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="manufacturing" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Manufacturing</span><h2 class="d2 split">Made in our own <em>three plants.</em></h2></div><p data-r>OZ Optics manufactures in Ottawa, Izmir and Jiaxing, all ISO 9001:2015 certified, with teams specializing in optical, mechanical, electronics and software engineering.</p></div>'+
   caps()+
   sites()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">The world’s largest <em>fiber optic catalog.</em></h2></div><p data-r>Thirteen product groups, sold to over 10,000 customers in more than 60 countries. New this year, each with its datasheet:</p></div>'+
   newRows()+
   '<div class="bk"><span class="lab kick" data-r>Product groups</span><p class="cr" data-r>'+GROUPS.map(function(g){return '<span>'+esc(g)+'</span>'}).join("")+'</p></div>'+
   '<div class="bk"><span class="lab kick" data-r>Markets</span><p class="cr" data-r><span>Telecommunications</span><span>Aerospace</span><span>Defense</span><span>Medical</span><span>Energy</span><span>Industrial</span><span>Quantum</span><span>AI optical connectivity</span><span>Oil &amp; gas</span><span>Construction</span><span>Research</span></p></div>'+
   '<div class="act shop" data-r><a class="btn solid" href="https://shop.ozoptics.com/" target="_blank" rel="noopener">Shop the online catalog '+ARR+'</a></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Led from Ottawa, <em>made worldwide.</em></h2></div><p data-r>The leadership team behind OZ Optics, with general managers at its manufacturing sites in Türkiye and China. Core values: leadership, teamwork, boldness, commitment, innovation and rewards.</p></div>'+
   team()+
   '<div class="qual"><span class="lab kick" data-r>Quality and compliance</span><p class="cr" data-r><span>ISO 9001:2015 in Canada, China and Türkiye</span><span>Critical supplier for the F-35 and F-18 programs</span><span>Controlled Goods Directorate registered</span><span>Telcordia</span><span>RoHS · REACH · CE</span><span>IEC 61010</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="events" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Events</span><h2 class="d2 split">Meet OZ Optics <em>in 2027.</em></h2></div><p data-r>The 2027 trade show schedule, with booth numbers. Each show links to its own site.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Sales and support</span>'+
   '<h2 class="big split">Our goal <em>is your goal.</em></h2>'+
   '<p class="sub" data-r>For quotes, custom-engineered solutions or support, the sales team in Ottawa and the offices in Türkiye and China would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email sales '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Global headquarters</span><p data-r>OZ Optics Limited<br>219 Westbrook Rd<br>Ottawa, Ontario K0A 1L0, Canada</p></div>'+
    '<div><span class="lab" data-r>Sales</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Toll free <a class="ul" href="tel:'+TOLL+'">'+TOLLT+'</a></p></div>'+
    '<div><span class="lab" data-r>Online catalog</span><p data-r><a class="ul" href="https://shop.ozoptics.com/" target="_blank" rel="noopener">shop.ozoptics.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Global headquarters</span>219 Westbrook Rd<br>Ottawa, Ontario K0A 1L0, Canada</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/manufacturing">Manufacturing</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/events">Events</a></div>'+
   '<div class="c"><span class="lab">Manufacturing</span>Ottawa, Canada<br>Izmir, Türkiye<br>Jiaxing, China</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:300;font-size:58px;letter-spacing:.12em">OZ OPTICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 OZ Optics Ltd.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",manufacturing:"manufacturing",products:"products",team:"team",events:"events",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"OZ Optics — fiber optic components, test equipment and sensing, Ottawa, since 1985",x:"Home"};
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
