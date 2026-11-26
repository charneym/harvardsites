/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["1951","Yorkshire Precision Gauges is founded in Hatfield, near Doncaster. It is still family owned."],
  ["1973","The calibration laboratory is first accredited, as UKAS laboratory number 0068."],
  ["2012","Anthony Edwards joins the board. Today he leads the company as Managing Director."],
  ["2026","More than 75 years on, the broadest range of gauges from a single UK source."]];
  return '<ol class="sg-tl">'+H.map(function(h){return '<li data-r><span class="y">'+esc(h[0])+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function team(){
  return '<div class="mh"><div class="mh-group"><p class="mh-label">Directors</p><ul class="mh-list">'+TEAM.map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* calibration and service (ypg-ltd.com > UKAS Calibration, Certification, Express Service) */
function caps(){var C=[
  ["UKAS laboratory 0068","<span class=\"nw\">Accredited</span> <span class=\"nw\">since 1973</span>","A suite of custom-built laboratories with individual temperature controls, approved by UKAS to ISO/IEC 17025:2017 for the scope in its Schedule of Accreditation.",'<circle cx="28" cy="28" r="20"/><circle cx="28" cy="28" r="12"/><path class="a" d="M28 4V12M28 44V52M4 28H12M44 28H52"/><circle class="f" cx="28" cy="28" r="2.4"/>'],
  ["Quality management","<span class=\"nw\">ISO 9001:2015,</span> <span class=\"nw\">with BSI</span>","The quality management system is registered with BSI under certificate Q10496. Conformity statements follow the simple acceptance rule of ILAC-G8:09/2019.",'<path d="M28 6L48 14V28C48 40 38 48 28 51C18 48 8 40 8 28V14Z"/><path class="a" d="M19 28L26 35L38 22"/>'],
  ["Express service","<span class=\"nw\">Plug gauges</span> <span class=\"nw\">in three days</span>","For the gauge that is needed now: reversible wire type plug gauges in 3 days and reversible Tri-Lock plug gauges in 5 to 7 days on Express.",'<circle cx="28" cy="30" r="20"/><path d="M28 30V18"/><path class="a" d="M28 30L38 36"/><path d="M22 6H34"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<span class="lab eyebrow" data-r>Precision gauges<span class="nomob"> · Hatfield, Doncaster</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Gauges to trust</span></span> <span class="l"><span class="nw">at the bench,</span></span> <span class="l"><em><span class="nw">since 1951.</span></em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>A family-owned Yorkshire company that designs and makes pin and plug, ring, thread, snap, depth and slot gauges, and calibrates them in its own UKAS-accredited laboratory.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/gauges">See the gauges '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Go, No Go</span>'+
   '<h2 class="txt" id="mani"><span class="nwp">Consistent manufacturing accuracy</span> <span class="nwp">starts with a gauge</span> <span class="nwp">that gives one answer,</span> <em><span class="nwp">fool-proof</span> <span class="nw">and cost-effective.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1951</span><p class="k">founded in Hatfield, Doncaster, and family owned ever since</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0068</span><p class="k">the UKAS laboratory number, first accredited in 1973</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3<sup>days</sup></span><p class="k">for reversible wire type plug gauges on the Express service</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The reversible plug gauge</span><h2 class="d3"><span class="nw">One gauge,</span> <em class="nw">one clear answer.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Bore</span><span>Go</span><span>No Go</span><span>Certified</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">A bore</span> <span class="nw">with two limits.</span></h2><p>Every drawing gives a hole its tolerance: a smallest and a largest size it may be. The gauge carries both, one on each end, green for Go and red for No Go.</p></article>'+
     '<article class="step"><h2><span class="nw">The Go end</span> <span class="nw">slides right in.</span></h2><p>Ground to the lower limit, the Go member must pass fully into the bore. If it does, the hole is not too small.</p></article>'+
     '<article class="step"><h2><span class="nw">The No Go end</span> <span class="nw">must not enter.</span></h2><p>Ground to the upper limit, the No Go member stops at the mouth. If it does, the hole is not too large, and the part is good.</p></article>'+
     '<article class="step"><h2><span class="nw">Checked in our</span> <span class="nw">UKAS laboratory.</span></h2><p>Gauges are calibrated in temperature-controlled laboratories accredited to ISO/IEC 17025:2017, and each conformity statement follows the simple acceptance rule.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="gauges" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Gauges</span><h2 class="d2 split"><span class="nw">The broadest range</span> <em class="nw">from one UK source.</em></h2></div><p data-r>Standard and bespoke gauging, made in Hatfield to some of the most demanding specifications, with the measuring instruments of our partners alongside.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="calibration" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Calibration and service</span><h2 class="d2 split"><span class="nw">UKAS accredited,</span> <em class="nw">and on time.</em></h2></div><p data-r>A missed gauge delivery can stop a customer’s production. That is why calibration, certification and delivery get the same care as the gauges themselves.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Trusted by</span><p class="cr" data-r>'+CUST.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Family owned,</span> <em class="nw">in Hatfield since 1951.</em></h2></div><p data-r>A proud history and a great team of people. An ongoing commitment to product and process improvement has kept YPG at the forefront of the gauging industry.</p></div>'+
   hist()+
   '<div class="svc">'+
    '<div class="svc-c" data-r><span class="lab">Oskar Schwenk GmbH</span><h3><span class="nw">Bore measuring</span> <span class="nw">instruments</span></h3><p>One of the most comprehensive ranges of bore measuring instruments in the world, including SUBITO and OSIMESS gauges and measuring tapes. YPG is the exclusive distributor.</p></div>'+
    '<div class="svc-c" data-r><span class="lab">B² Measuring Instruments</span><h3><span class="nw">Gap and step</span> <span class="nw">gauges</span></h3><p>A unique gap and step measuring instrument, with B² digital gauges, check fixtures and rivet gauges.</p></div>'+
    '<div class="svc-c" data-r><span class="lab">Johnson Gage</span><h3><span class="nw">Thread inspection</span> <span class="nw">systems</span></h3><p>For internal and external threads, inspecting both functional diameter size and pitch diameter size of the work piece.</p></div>'+
   '</div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Next stop,</span> <em class="nw">Farnborough 2027.</em></h2></div><p data-r>From 2 to 4 February 2027, YPG exhibits at Southern Manufacturing & Electronics, Stand G120. Each entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Your tolerance,</span> <em class="nw">our gauge.</em></h2>'+
   '<p class="sub" data-r>From a single reversible plug gauge to a bespoke gauging solution or a UKAS calibration, send us your drawing or your requirement and we will come back to you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email YPG '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Yorkshire Precision Gauges Ltd<br>Cuckoo Lane, Hatfield<br>Doncaster DN7 6QF<br>England</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>Registered in England, No. 00498827<br>UKAS calibration laboratory 0068<br><a class="ul" href="'+YP+'drawings-2-0/" target="_blank" rel="noopener">Order template drawings</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Yorkshire Precision Gauges Ltd<br>Cuckoo Lane, Hatfield, Doncaster DN7 6QF</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/gauges">Gauges</a><br><a class="ul" href="#/gauging">Go, No Go</a><br><a class="ul" href="#/calibration">Calibration</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Accreditation</span>UKAS laboratory 0068, ISO/IEC 17025:2017<br>ISO 9001:2015, BSI Q10496</div>'+
  '</div><svg class="bigsvg flogo" viewBox="0 0 1000 70" aria-hidden="true"><text x="500" y="56" text-anchor="middle" textLength="980" lengthAdjust="spacing">YORKSHIRE PRECISION GAUGES</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Yorkshire Precision Gauges Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",gauging:"story",gauges:"gauges",calibration:"calibration",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Yorkshire Precision Gauges — Precision gauges and UKAS calibration, Hatfield, Doncaster",x:"Home"};
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
