/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function meds(){return '<ul class="pfr pipe np">'+MED.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function mats(){return '<div class="ev ind"><span class="lab kick" data-r>Titanium nitride, measured</span><dl>'+MAT.map(function(c){return '<div data-r><dt class="lab">'+esc(c[0])+'</dt><dd>'+esc(c[1])+'</dd></div>'}).join("")+'</dl></div>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* the four coating families (brycoat.com > Coating Services), each with a small line icon */
var ICO={
 p:'<svg viewBox="0 0 56 56"><path d="M8 10H48V46H8Z"/><path d="M14 18L20 26M42 18L36 26"/><path class="a" d="M22 38H34M24 32H32V38H24Z"/></svg>',
 t:'<svg viewBox="0 0 56 56"><path d="M4 22H20V34H4Z"/><path d="M20 25H26V31H20"/><path class="a" d="M28 28L42 20M28 28L44 28M28 28L42 36"/><path d="M48 12V44"/></svg>',
 w:'<svg viewBox="0 0 56 56"><path d="M8 40H48"/><path class="a" d="M8 36H48"/><path d="M18 30H40V36H18Z"/><path d="M12 24H22M26 24H36"/></svg>',
 c:'<svg viewBox="0 0 56 56"><circle cx="28" cy="28" r="16"/><circle class="a" cx="28" cy="28" r="19"/><path d="M20 22C22 19 25 18 28 18"/></svg>'};
var SERV=[
 ["p","PVD coatings","Gold-hard thin films","Titanium nitride and chromium nitride, plus TiCN, TiAlN and custom coatings, deposited by cathodic arc in vacuum: a few microns, dense, fine-grained and bonded into the surface."],
 ["t","Thermal spray","Robotically applied","HVOF, plasma and flame spray of carbides, ceramics, abradables, metals and alloys: thicker coatings, robotically controlled for consistency, that can also rebuild worn parts."],
 ["w","Dry film lubricant","WS2 at half a micron","Tungsten disulfide with a dynamic friction coefficient of 0.03, carrying loads over 300,000 psi, applied at ambient temperature with no binders and nothing to chip or peel."],
 ["c","CVD coatings","TiC bearing balls","Titanium carbide on steel bearing balls for precision instrument bearings in space mechanisms and other hard duty, on a process developed by CSEM in Switzerland."]];
function serv(){return '<div class="caps svc">'+SERV.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["Feb 2026","Exhibitor at MD&M West 2026 in Anaheim","MD&M West","https://mdmwest26.mapyourshow.com/8_0/exhibitor/exhibitor-details.cfm?exhid=2174"],
 ["Nadcap","Nadcap Merit status for PVD, thermal spray, WS2, coating removal and the metallurgical laboratory","BryCoat Quality",PW+"/about-us/brycoat-quality/"],
 ["MIT","Titanium nitride for MEMS optical switching, kinematic couplings and nano-manufacturing fixtures","BryCoat in the News",PW+"/about-us/brycoat-in-the-news/"],
 ["Since 1989","From a research project at Brysen Optical to a high-bay plant in Oldsmar","Company History",PW+"/about-us/brycoat-company-history/"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>PVD · Thermal spray · Dry film<span class="nomob"> · Oldsmar, Florida</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Performance coatings</span></span><span class="l"><em class="nw">for precision parts.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Titanium nitride and chromium nitride PVD, robotically applied thermal spray, WS2 dry-film lubricant and CVD titanium carbide, engineered for medical, aerospace and tooling components since 1990.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/coatings">Our coatings '+ARR+'</a><a class="btn" href="#/contact">Ask an engineer</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Family-founded in 1990</span>'+
   '<h2 class="txt" id="mani">Spun off from an optical-coating house to develop a titanium nitride process, BryCoat now engineers the surfaces of parts for customers across North America and around the world. <em><span class="nw">Large enough</span> <span class="nw">to meet your needs,</span> <span class="nw">small enough</span> <span class="nw">to offer superior service.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1990</span><p class="k">incorporated, after a research project begun in 1989 at Brysen Optical in Safety Harbor</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3×</span><p class="k">harder than hard chrome: titanium nitride above 2,000 kg/mm² microhardness</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.03</span><p class="k">dynamic friction coefficient of WS2, lower than Teflon, graphite or MoS2</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The PVD process</span><h2 class="d3"><span class="nw">Inside the</span> <em class="nw">vacuum chamber.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Clean</span><span>Vacuum</span><span>Arc</span><span>Coat</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Clean to</span> <span class="nw">the bare metal.</span></h2><p>Parts are inspected on arrival, put through a proprietary multi-stage cleaning process to an oxide-free surface, and mounted on fixtures.</p></article>'+
     '<article class="step"><h2><span class="nw">Pumped down,</span> <span class="nw">heated, ion-cleaned.</span></h2><p>The air is pumped out to a high vacuum, the parts are pre-heated to process temperature, and ion cleaning removes the last atomic contaminants.</p></article>'+
     '<article class="step"><h2><span class="nw">An arc frees</span> <span class="nw">the titanium.</span></h2><p>With nitrogen and argon flowing, a vacuum arc flash-evaporates and ionises titanium. A voltage on the parts accelerates the ions of the plasma to their surface.</p></article>'+
     '<article class="step"><h2><span class="nw">A gold coat,</span> <span class="nw">tested every batch.</span></h2><p>Titanium and nitrogen combine into dense, hard TiN that bonds into the surface. Each batch is tested for quality, thickness and uniformity, and every part is inspected.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="coatings" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Coating services</span><h2 class="d2 split"><span class="nw">Four ways</span> <em class="nw">to engineer a surface.</em></h2></div><p data-r>Wear, galling, friction, corrosion, erosion, heat and sticking: we match the coating to the problem, and our engineers help design the solution for your part.</p></div>'+
   serv()+
  '</div></section>'+

  '<section class="sec dark2" id="medical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Medical, surgical and dental</span><h2 class="d2 split"><span class="nw">Inert, hard</span> <em class="nw">and biocompatible.</em></h2></div><p data-r>Coatings for surgical instruments, implants and medical devices: titanium nitride approved for use in numerous medical devices, bone adhesion coatings and dry-film lubricant for precision mechanisms.</p></div>'+
   meds()+
   mats()+
  '</div></section>'+

  '<section class="sec light" id="quality" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality and company</span><h2 class="d2 split"><span class="nw">Every batch</span> <em class="nw">under control.</em></h2></div><p data-r>Our computer system controls every customer part by drawing and specification revision, and a traveler tracks it through each process step. Witness samples accompany and are kept from every coating batch.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Nadcap Merit</span><h3 data-r>Accredited special processes</h3><p data-r>PVD coating, thermal spray coating, dry-film lubricant (WS2), coating removal and the metallurgical laboratory, with Merit status.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Registered</span><h3 data-r>ISO 9001 and AS9100</h3><p data-r>Registered to the current versions by Perry Johnson Registrars, and an approved vendor for many major OEMs.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Oldsmar, Florida</span><h3 data-r>A high-bay plant</h3><p data-r>The Vollmer Avenue facility is more than double the size of the former Safety Harbor site, with high-bay production areas and room to grow.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">On the floor</span> <em class="nw">and in the lab.</em></h2></div><p data-r>Trade shows, accreditations and research that has used BryCoat coatings.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Your part,</span> <em class="nw">a better surface.</em></h2>'+
   '<p class="sub" data-r>Send a drawing or describe the problem: galling, wear, sticking, corrosion or heat. Our engineers will recommend a coating and quote it.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email sales '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>BryCoat Inc.<br>207 Vollmer Avenue<br>Oldsmar, Florida 34677</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Resources</span><p data-r><a class="ul" href="'+PW+'/brycoat-resources/requirements-for-substrate-preparation-for-brycoat-thin-film-coatings/" target="_blank" rel="noopener">Substrate preparation guide</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>BryCoat Inc.<br>207 Vollmer Avenue, Oldsmar, Florida 34677</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/coatings">Coatings</a><br><a class="ul" href="#/medical">Medical</a><br><a class="ul" href="#/quality">Quality</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Accredited</span>Nadcap<br>AS9100<br>ISO 9001</div>'+
  '</div><div class="bigsvg bcw bcf" aria-hidden="true">BryCoat<sup>®</sup></div>'+
  '<div class="legal"><span class="lab">© 2026 BryCoat Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",process:"story",coatings:"coatings",medical:"medical",quality:"quality",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"BryCoat Inc. — PVD, thermal spray and dry-film lubricant coatings for precision parts",x:"Home"};
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
