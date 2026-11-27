/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function plant(){return '<ul class="pfr pipe np">'+PLANT.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab cpy">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["1982","Don Newport registers the company in October. Gary Oakley joins from day one as Works Manager."],
  ["1985","Paul Newport joins and builds up the customer base through annual exhibitions, from Subcon to Southern Manufacturing."],
  ["1997","The move to a new factory, a modern 7,000 sq ft industrial unit with the floor area for more CNC lathes and machining centres."],
  ["2025","A Star SP23 turn and mill machine, then a Citizen Miyano BNE 65 MYY nine-axis lathe, join the plant."]];
  return '<ol class="sg-tl">'+H.map(function(h){return '<li data-r><span class="y">'+esc(h[0])+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function team(){
  return '<div class="mh"><div class="mh-group"><p class="mh-label">Directors</p><ul class="mh-list">'+TEAM.map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* the four kinds of work (drn.co.uk home, History, Services; the Southern Manufacturing exhibitor profile) */
function caps(){var C=[
  ["Sliding head","<span class=\"nw\">Small diameters,</span> <span class=\"nw\">long and slender</span>","Star sliding head lathes with sub-spindle and driven tooling, fed from the magazine, for precision parts from 3 mm diameter up to 25.4 mm.",'<rect x="6" y="20" width="14" height="16"/><path d="M20 24H34V32H20"/><path class="a" d="M34 28H50"/><path d="M40 10V22M36 22H44"/>'],
  ["Fixed head","<span class=\"nw\">Up to 65 mm</span> <span class=\"nw\">from the bar</span>","Citizen Miyano and Miyano lathes with up to nine axes and a sub-spindle turn, mill, drill and tap a part in one operation.",'<circle cx="28" cy="28" r="18"/><circle cx="28" cy="28" r="7"/><path class="a" d="M28 4V14M28 42V52"/>'],
  ["Chucking","<span class=\"nw\">From 65 mm</span> <span class=\"nw\">to 178 mm</span>","Larger turned parts are held in the 7 inch chuck of the Doosan Puma GT2100 turning centre.",'<circle cx="28" cy="28" r="20"/><path d="M28 8V18M45 38L36 33M11 38L20 33"/><circle class="f" cx="28" cy="28" r="3"/>'],
  ["Second operations","<span class=\"nw\">Hexagons, slots</span> <span class=\"nw\">and flats</span>","When it is more cost-effective, milling is done as a second operation on four Haas vertical machining centres. Plating and heat treatment are subcontracted.",'<path d="M28 6L47 17V39L28 50L9 39V17Z"/><path class="a" d="M28 18V38"/><circle cx="28" cy="28" r="6"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* how DRN works (drn.co.uk > FAQs, ISO 9001 Quality & ISO 14001 Environmental) */
function faq(){var Q=[
  ["Batch sizes","100 to 5,000","A typical small batch is 100, often the product of one 3 metre bar; a typical production run is 5,000. From 10 off on an annual call-off."],
  ["Lead time","3 to 4 weeks","We normally quote three to four weeks. Call when you place the order and we will advise our best delivery."],
  ["Approvals","ISO 9001 and ISO 14001","Every part is made to the same documented procedures, audited regularly by BSI Assurance UK."],
  ["Inspection","First off to final","First off, in-process and final inspection by qualified staff, full traceability, and SPC on critical dimensions on request."]];
  return '<dl class="drq">'+Q.map(function(q){return '<div data-r><dt class="lab">'+esc(q[0])+'</dt><dd><b>'+esc(q[1])+'</b><span>'+esc(q[2])+'</span></dd></div>'}).join("")+'</dl>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="487" height="569" alt="A turned and threaded steel body made by DRN Engineering" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Precision CNC turned parts<span class="nomob"> · Luton, Bedfordshire · since 1982</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Quality turned parts,</span></span> <span class="l"><span class="nw">made in Luton.</span></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Since 1982, a family company making precision CNC turned parts and machined components, from 3 mm to 65 mm diameter from the bar, on sliding head and fixed head lathes with sub-spindle and driven tooling.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/turning">Our turning '+ARR+'</a><a class="btn" href="#/contact">Send an enquiry</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why choose DRN</span>'+
   '<h2 class="txt" id="mani"><span class="nwp">Able to manage</span> <span class="nwp">large annual contracts,</span> <span class="nwp">and small enough</span> <em><span class="nwp">that every part carries</span> <span class="nwp">the team’s own pride.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">40+</span><p class="k">years of manufacturing, with customers who have been with DRN since the start</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">18</span><p class="k">CNC machine tools: fourteen lathes and four vertical machining centres</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">24 h</span><p class="k">unmanned running, fed by magazine bar loaders</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">On a sliding head lathe</span><h2 class="d3"><span class="nw">From a 3 metre bar</span> <em class="nw">to a finished part.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Bar</span><span>Turn</span><span>Drill</span><span>Part off</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Fed from</span> <span class="nw">the magazine.</span></h2><p>The magazine bar loader feeds the bar through the main spindle and out through the guide bush. A small batch of 100 is often the product of a single 3 metre bar.</p></article>'+
     '<article class="step"><h2><span class="nw">Turned beside</span> <span class="nw">the guide bush.</span></h2><p>The headstock slides the bar forward while the tool moves in and out, so every cut is taken right next to its support. That is how slender parts stay accurate.</p></article>'+
     '<article class="step"><h2><span class="nw">Drilled by</span> <span class="nw">a driven tool.</span></h2><p>Driven tooling cross drills, mills and taps while the bar is still held, so most parts need no second set-up.</p></article>'+
     '<article class="step"><h2><span class="nw">Parted off</span> <span class="nw">into the sub-spindle.</span></h2><p>The sub-spindle grips the part, the parting tool cuts it free and the back is machined, all in one operation. More jobs in one operation is a cost saving for the customer.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="turning" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Turning and milling</span><h2 class="d2 split"><span class="nw">Turn, mill, drill and tap</span> <em class="nw">in one operation.</em></h2></div><p data-r>DRN offers the subcontract machining of precision components in a wide range of batch sizes, and specialises in the CNC machining of stainless steels 303, 304, 316 and 416.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Materials</span><p class="cr" data-r>'+MATS.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="plant" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Plant list</span><h2 class="d2 split"><span class="nw">Eighteen machine tools,</span> <em class="nw">re-invested in regularly.</em></h2></div><p data-r>Fourteen CNC lathes, many with driven tooling and sub-spindle, each ideal for a different type of component, and four vertical machining centres. Issue 8, January 2026.</p></div>'+
   plant()+
  '</div></section>'+

  '<section class="sec light" id="quality" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality and delivery</span><h2 class="d2 split"><span class="nw">Only achievable dates,</span> <em class="nw">met on time.</em></h2></div><p data-r>It is company policy to quote only delivery dates we can achieve, so customers come back to us time and time again. You are welcome to visit the factory and see the system for yourself.</p></div>'+
   faq()+
  '</div></section>'+

  '<section class="sec dark" id="history" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>History</span><h2 class="d2 split"><span class="nw">A Luton family firm</span> <em class="nw">since 1982.</em></h2></div><p data-r>DRN now employs 21 people, many of whom have been with us for more than ten years, and makes parts for medical equipment, air tools, breathing apparatus, food processing, optical equipment and fire suppression and detection.</p></div>'+
   hist()+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Next stop,</span> <em class="nw">Farnborough 2027.</em></h2></div><p data-r>From 2 to 4 February 2027, DRN Engineering exhibits at Southern Manufacturing & Electronics, Stand A220. Each entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Send us your drawing,</span> <em class="nw">we will quote.</em></h2>'+
   '<p class="sub" data-r>Our engineers are ready to discuss your project, from a batch of 50 to an annual contract on Kanban or just-in-time deliveries.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email DRN '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Factory</span><p data-r>D.R.N. Engineering Ltd<br>Trojan Court, Laporte Way<br>Luton, Bedfordshire LU4 8RN<br>England</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>Registered in England, No. 01672231<br>ISO 9001:2015 and ISO 14001:2015<br><a class="ul" href="'+DP+'gallery/" target="_blank" rel="noopener">Our parts, in photos</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Factory</span>D.R.N. Engineering Ltd<br>Trojan Court, Laporte Way, Luton LU4 8RN</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/turning">Turning</a><br><a class="ul" href="#/plant">Plant list</a><br><a class="ul" href="#/quality">Quality</a><br><a class="ul" href="#/history">History</a></div>'+
   '<div class="c"><span class="lab">Approvals</span>ISO 9001:2015 and ISO 14001:2015<br>Audited by BSI Assurance UK</div>'+
  '</div><svg class="bigsvg flogo" viewBox="0 0 1000 70" aria-hidden="true"><text x="500" y="56" text-anchor="middle" style="letter-spacing:.16em">DRN ENGINEERING · LUTON</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 D.R.N. Engineering Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",turning:"turning",plant:"plant",quality:"quality",history:"history",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"DRN Engineering — Precision CNC turned parts, Luton",x:"Home"};
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
