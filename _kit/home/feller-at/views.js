/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* quality (feller-at.com > Quality, News), each with a small line icon */
var ICO={
 i:'<svg viewBox="0 0 56 56"><path d="M12 6H38L46 14V50H12Z"/><path d="M38 6V14H46"/><path class="a" d="M20 30L26 36L38 22"/><path d="M20 44H38"/></svg>',
 t:'<svg viewBox="0 0 56 56"><path d="M8 46H48"/><path class="a" d="M10 40L22 16L30 30L36 22L46 40"/><path d="M28 6V10M28 46V50"/></svg>',
 h:'<svg viewBox="0 0 56 56"><path d="M16 8H40V24C40 36 28 46 28 46C28 46 16 36 16 24Z"/><path class="a" d="M22 24L27 29L35 19"/></svg>',
 g:'<svg viewBox="0 0 56 56"><path d="M28 28m-20 0a20 20 0 1 0 40 0a20 20 0 1 0-40 0"/><path class="a" d="M28 8C20 16 20 40 28 48M28 8C36 16 36 40 28 48"/><path d="M8 28H48"/></svg>'};
var QUAL=[
 ["i","ISO 9001:2015","Every plant, one system","Quality management since 1986, when Feller received BS 5750 as an Austrian first. Today all manufacturing locations work to ISO 9001:2015."],
 ["t","TÜV Austria · Intertek · TÜV Rheinland","Audited, and inspected","The integrated management system is audited at regular intervals; UL, CSA, VDE and ÖVE carry out factory inspections."],
 ["h","SMETA 4-Pillar · RoHS · REACH","Responsible by design","An environmental policy since 1993, social accountability in the system since 2017, RoHS, REACH, WEEE and UKCA conformity."],
 ["g","Approvals worldwide","Ready for every market","Product approvals from Argentina to Japan, from South Africa to Canada, China, India and across Europe."]];
function qual(){return '<div class="caps svc">'+QUAL.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
/* locations (feller-at.com > Locations) */
var LOCS=[
 ["Austria","Feller GmbH","Günselsdorf · head office"],
 ["Great Britain","Feller (UK) Ltd.","South Shields, Tyne & Wear"],
 ["USA","Feller LLC","Leland, North Carolina"],
 ["Hungary","Feller Kft.","Szombathely"],
 ["Hong Kong","Feller-Neumayer Ltd.","Kwun Tong, Kowloon"],
 ["Serbia","Feller d.o.o.","Subotica"]];
function locs(){return '<div class="ozs fl-locs">'+LOCS.map(function(l){return '<div class="oz-site"><span class="lab" data-r>'+esc(l[0])+'</span><h3 data-r>'+esc(l[1])+'</h3><p data-r>'+esc(l[2])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["Nov. 2026","COMPAMED 2026, Düsseldorf: medical-grade power cords, Hall 8A / P35","COMPAMED","https://www.medica-tradefair.com/vis/v1/en/exhibitors/compamed2026.3073537"],
 ["Nov. 2026","electronica 2026, Munich: the full range, Hall B2 / 224","Flyer",FW+"/English/news/images/Web_Flyer_electronica_COMPAMED_2026.jpg"],
 ["Catalogue","The Feller catalogue: every cord, plug and connector","PDF",FW+"/English/news/feller_catalog.pdf"],
 ["Certificates","ISO 9001 certificate, RoHS, REACH and UKCA + CE declarations","Feller",FW+"/English/news/images/iso_certificate.pdf"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Power cords from Austria<span class="nomob"> · worldwide approvals</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">One cord,</span> <span class="l"><em>every socket</em></span> <span class="l"><em>on earth.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Feller extrudes the cable, builds the moulds, moulds the plugs and connectors and tests every cord set in its own plants: power cords for equipment makers in every market.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">See the products '+ARR+'</a><a class="btn" href="#/contact">Talk to sales</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Feller power cords</span>'+
   '<h2 class="txt" id="mani">Feller makes both halves <span class="nw">of a power cord:</span> the flexible cable <span class="nw">and the moulded ends.</span> <span class="nw">So every colour matches,</span> <span class="nw">every crimp is its own,</span> <em><span class="nw">and every cord set</span> <span class="nw">is tested before it ships.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1986</span><p class="k">BS 5750 quality approval, an Austrian first</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">manufacturing plants with their own cable cutting and crimping lines</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">300+</span><p class="k">mould tools for plugs, connectors and specials, built and kept in house</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a Feller cord is made</span><h2 class="d3"><span class="nw">From copper</span> <em class="nw">to cord set.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Extrude</span><span>Cable</span><span>Mould</span><span>Test</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Insulation extruded</span> <span class="nw">in house.</span></h2><p>Two primary insulation lines with four extruders put PVC or PVC-free insulation on the copper conductors, watched by online diameter control.</p></article>'+
     '<article class="step"><h2><span class="nw">Cores laid up,</span> <span class="nw">jacket co-extruded.</span></h2><p>Three cabling machines lay up multi-core flexible cords from 28 to 10 AWG (0.09 to 4.00 mm²); two jacket lines co-extrude the outer sheath.</p></article>'+
     '<article class="step"><h2><span class="nw">Moulded on,</span> <span class="nw">in Feller’s own tools.</span></h2><p>Plugs and connectors are moulded straight on to the cord in tools from Feller’s own tool-and-die shop, designed in 3D CAD and cut on CNC spark-erosion machines.</p></article>'+
     '<article class="step"><h2><span class="nw">Every cord,</span> <span class="nw">tested in full.</span></h2><p>Each cord set is tested for short and open circuits, then at high voltage for flashover between all conductors and the outside of plug and connector. Defective cables are cut and discarded.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="quality" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality</span><h2 class="d2 split"><span class="nw">Certified for</span> <em class="nw">four decades.</em></h2></div><p data-r>Quality management has been in place at Feller for more than three decades, and its customers include some of the most demanding names in electronics and appliances.</p></div>'+
   qual()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Worldwide approvals,</span> <em class="nw">one supplier.</em></h2></div><p data-r>A one-stop shop for power cords with worldwide approvals, with many country versions in stock in Feller’s warehouses in Europe, the USA and Hong Kong.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="locations" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Locations</span><h2 class="d2 split"><span class="nw">Close to</span> <em class="nw">every market.</em></h2></div><p data-r>From the head office in Günselsdorf, south of Vienna, the Feller group serves customers through companies in Europe, North America and Asia.</p></div>'+
   locs()+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Meet us</span> <em class="nw">this autumn.</em></h2></div><p data-r>Trade fairs, the catalogue and the certificates: what is new at Feller, and where to meet the team in person.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us what</span> <span class="nw">you need</span> <em class="nw">to power.</em></h2>'+
   '<p class="sub" data-r>Whatever your application or industry, the Feller team is ready to discuss your power cord requirements.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email sales '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Feller GmbH<br>Wärndorferstr. 3<br>2525 Günselsdorf, Austria</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Downloads</span><p data-r><a class="ul" href="'+FW+'/English/news/feller_catalog.pdf" target="_blank" rel="noopener">Catalogue (PDF)</a><br><a class="ul" href="'+FW+'/English/news/images/iso_certificate.pdf" target="_blank" rel="noopener">ISO certificate (PDF)</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Feller GmbH<br>Wärndorferstr. 3, 2525 Günselsdorf</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/quality">Quality</a><br><a class="ul" href="#/locations">Locations</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>Power supply cords · Cord sets<br>Flexible cords · Plugs<br>IEC connectors · Specials</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 600 100" aria-hidden="true"><text class="bmx" x="300" y="84" text-anchor="middle">FELLER</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Feller GmbH</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",products:"products",quality:"quality",locations:"locations",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Feller GmbH — Power cords, plugs and connectors, Günselsdorf, Austria",x:"Home"};
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
