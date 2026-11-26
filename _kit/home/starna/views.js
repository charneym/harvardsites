/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function cells(){return '<ul class="pfr pipe np">'+CELLS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">View range '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* reference materials by technique (starna.com > Certified Reference Materials), each with a small line icon */
var ICO={
 u:'<svg viewBox="0 0 56 56"><path d="M6 46H50"/><path class="a" d="M8 44C16 44 18 14 24 14S30 40 34 40S40 26 44 26S48 44 50 44"/><path d="M6 10V46"/></svg>',
 f:'<svg viewBox="0 0 56 56"><path d="M20 8H36V48H20Z"/><path class="a" d="M4 28H20M36 28L50 14M36 28L50 42M36 28H52"/></svg>',
 p:'<svg viewBox="0 0 56 56"><path d="M6 14H50V42H6Z"/><path class="a" d="M14 22m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M24 22m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M34 22m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M44 22m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M14 33m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M24 33m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M34 33m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M44 33m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0"/></svg>',
 l:'<svg viewBox="0 0 56 56"><path d="M18 6V36A10 10 0 0 0 38 36V6"/><path class="a" d="M18 26H38"/><path d="M14 6H42M24 50H32"/></svg>'};
var REFS=[
 ["u","UV, Visible and NIR","<span class=\"nw\">Absorbance and</span> <span class=\"nw\">wavelength accuracy</span>","Qualify wavelength, photometric accuracy, stray light and resolution, to USP Chapter <857>, EP 2.2.25 and most other pharmacopoeias."],
 ["f","Fluorescence and Raman","Spectrofluorometer qualification","Wavelength, spectral correction, sensitivity and quantum yield, including the references cited in USP Chapter <853>."],
 ["p","Microplates and HPLC","Plate readers and detectors","Reference plates for absorbance and fluorescence plate readers, and references for HPLC instrumentation."],
 ["l","Life sciences and CD","DNA, RNA and proteins","Materials for nucleic acid and protein assays, microvolume measurement and circular dichroism."]];
function refs(){return '<div class="caps svc">'+REFS.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+c[2]+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["Nov 2026","Exhibitor at MEDICA 2026, Düsseldorf","MEDICA","https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3080541"],
 ["Apr 2027","Pittcon 2027, Pennsylvania, 24–28 April: over 500 products on show","Starna",SW+"/"],
 ["Jun 2027","ACHEMA 2027, Frankfurt, 14–18 June","Starna",SW+"/"],
 ["New","Fully-fused tablet dissolution flow cells, in all-quartz construction","Starna",SW+"/spectrophotometer/flow/full-quartz-construction-high-purity-threaded-flow-cells"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>The spectroscopy specialists<span class="nomob"> · Hainault, Essex</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Setting</span><span class="l"><em>the standard.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Starna makes quartz and glass cuvettes, optical components and Certified Reference Materials for spectroscopy, calibrated with full traceability to NIST.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/references">Our references '+ARR+'</a><a class="btn" href="#/contact">Contact sales</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About Starna</span>'+
   '<h2 class="txt" id="mani">Starna cells, optics and reference materials are backed by over eighty years’ experience in optical manufacture, and by long relationships with instrument makers and standards bodies. <em>Every product leaves <span class="nw">the factory pristine.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">80+</span><p class="k">years’ experience in optical manufacture and its associated technologies</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2001</span><p class="k">the calibration laboratory is accredited to ISO/IEC 17025, one of the first</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5 days</span><p class="k">to re-certify and dispatch a reference after it reaches the laboratory</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a Starna reference is made</span><h2 class="d3"><span class="nw">From quartz</span> <em class="nw">to certificate.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Polish</span><span>Seal</span><span>Calibrate</span><span>Qualify</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Cut, ground</span> <span class="nw">and polished.</span></h2><p>Every cell starts as quartz or glass, cut, sliced, ground and polished in Starna’s own ISO 9001 production facility, then cleaned and inspected so it leaves contamination-free.</p></article>'+
     '<article class="step"><h2><span class="nw">Sealed by</span> <span class="nw">heat fusion alone.</span></h2><p>Liquid references are sealed permanently into their cells by heat fusion, a Starna development. Nothing evaporates, so the certified values stay stable for the long term.</p></article>'+
     '<article class="step"><h2><span class="nw">Calibrated and</span> <span class="nw">traceable to NIST.</span></h2><p>Each reference is measured on Starna’s qualified reference spectrophotometers under UKAS-accredited ISO/IEC 17025 and ISO 17034, traceable to NIST or other national metrology institutes.</p></article>'+
     '<article class="step"><h2><span class="nw">Your instrument,</span> <span class="nw">fully qualified.</span></h2><p>In your laboratory, the certified peaks and absorbance values check wavelength and photometric accuracy against the requirements of the pharmacopoeias.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="references" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Certified Reference Materials</span><h2 class="d2 split"><span class="nw">The world’s widest</span> <em class="nw">range of references.</em></h2></div><p data-r>Pioneers in Certified Reference Materials for spectroscopy, Starna supplies materials for instrument qualification from the deep UV to the mid-infrared, in sets that meet the pharmacopoeias, with a lifetime guarantee.</p></div>'+
   refs()+
  '</div></section>'+

  '<section class="sec dark2" id="cuvettes" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Cuvettes and optics</span><h2 class="d2 split"><span class="nw">A cell for</span> <em class="nw">every instrument.</em></h2></div><p data-r>Spectrophotometer, fluorimeter and flow cells in quartz and glass, with pathlengths from 0.01 mm to 100 mm, and custom and OEM products on request.</p></div>'+
   cells()+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">A partner to</span> <em class="nw">instrument makers.</em></h2></div><p data-r>Starna Scientific Limited in Hainault, Essex, heads the Starna group, with companies in the USA, Germany and China and distributors around the world.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>UKAS 0659</span><h3 data-r>ISO/IEC 17025</h3><p data-r>Calibration laboratory accredited since 2001, with the widest scope in the industry.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>UKAS 4001</span><h3 data-r>ISO 17034</h3><p data-r>Accredited as a Reference Material Producer since 2006 (formerly ISO Guide 34).</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>BSI FM 39003</span><h3 data-r>ISO 9001:2015</h3><p data-r>The quality management system, audited and certified by the British Standards Institution.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Meet us</span> <em class="nw">at the show.</em></h2></div><p data-r>Exhibitions and new products: where to see the Starna range in person, and what has just joined it.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Talk to</span> <em class="nw">the specialists.</em></h2>'+
   '<p class="sub" data-r>For product enquiries, custom and OEM cells, or the re-certification of your references, the Hainault team will help.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email sales '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Starna Scientific Ltd<br>52–54 Fowler Road<br>Hainault, Essex IG6 3UT</p></div>'+
    '<div><span class="lab" data-r>Sales and support</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Sales <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Technical <a class="ul" href="tel:'+TECH+'">'+TECHT+'</a></p></div>'+
    '<div><span class="lab" data-r>Starna group</span><p data-r>Starna Cells, Inc., USA<br>Starna GmbH, Germany<br>Starna China Ltd.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Starna Scientific Ltd<br>52–54 Fowler Road, Hainault, Essex IG6 3UT</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/references">References</a><br><a class="ul" href="#/cuvettes">Cuvettes</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Accreditation</span>ISO/IEC 17025 · UKAS 0659<br>ISO 17034 · UKAS 4001<br>ISO 9001:2015 · BSI</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle">Starna</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Starna Scientific Limited</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",references:"references",cuvettes:"cuvettes",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Starna Scientific — Cuvettes, optics and Certified Reference Materials for spectroscopy",x:"Home"};
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
