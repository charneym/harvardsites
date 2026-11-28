/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function caps(list){return '<div class="caps nwc tst">'+list.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function chips(kick,list){return '<div class="bk cnd"><span class="lab kick" data-r>'+esc(kick)+'</span><p class="cr" data-r>'+list.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* equipment (apex-manufacturing.com > About) */
var EQ=[
 ["15 CNC machines","Haas and Doosan","Vertical machining centres and turning centres, with assorted support equipment."],
 ["50 x 20 x 25 in","Machining centres","Capacity up to approximately X 50, Y 20 and Z 25 inches, including 4th and 5th axis machining."],
 ["25 in x 51 in","Turning centres","Up to 25 inches cutting diameter and 51 inches between centres, with 4-inch through-spindle bar capacity."]];
var MCH=["Vertical machining centres","CNC turning centres","4th and 5th axis","CAD/CAM programming","MIG welding","Saws","Support equipment"];
/* industries (apex-manufacturing.com > Home) */
var IN=[
 ["Oil and gas","Extraction and production","Specialty parts and components for extraction and production equipment."],
 ["Mining","Mining equipment","Parts for the machines that keep Montana's mines running."],
 ["Semiconductor","Equipment manufacturing","Precision components for semiconductor manufacturing equipment, and for road and agricultural equipment."]];
var INL=["Oil and gas","Mining","Semiconductor equipment","Road and highway","Agricultural equipment","Bureau of Reclamation"];
/* government (apex-manufacturing.com > Government Facts) */
var GV=[
 ["Small business","SAM registered","Registration active, CAGE 1P1Z3, credit cards accepted."],
 ["Past performance","Bureau of Reclamation","US Department of the Interior, Bureau of Reclamation, Yellowtail Dam, Fort Smith, Montana."],
 ["ISO 9001","Compliant","ISO 9001 compliant, with certification coming at the end of 2026."]];
/* company (apex-manufacturing.com > About) */
var CO=[
 ["1997","A band saw and two CNCs","Bill Blaquiere started BC Production Machining in a 1,000 square-foot building, with a dream."],
 ["A year later","APEX Manufacturing","Bill merged with Dave Lewis's CNC programming and technology business, and the name became APEX."],
 ["Today","22,000 square feet","The largest dedicated CNC job shop in the area, with 15 CNCs and various support equipment."]];
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="684" height="943" alt="Three parts machined by APEX: a long threaded stainless housing with milled flats and ports, a slotted cylinder with two helical blades, and a small anodised flange with a side boss" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>CNC machining · welding<span class="nomob"> · Billings, Montana</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Precision is the product.</span> <span class="l">Quality is the deliverable.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Simple or complex, delicate or rugged: 15 CNC machines in a 22,000 square-foot shop make the parts companies need to get the job done.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/capabilities">Our capabilities '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>APEX Manufacturing</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Quality parts,</span> <span class="nw">delivered on time,</span> <span class="nw">competitively priced.</span> <em><span class="nw">Efficiency, execution</span> <span class="nw">and innovation.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">15</span><p class="k">CNC machines on our floor</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">22,000</span><p class="k">square-foot shop in Billings</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40+</span><p class="k">years of experience in CNC machining and welding</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a part is made here</span><h2 class="d3"><span class="nw">Programmed, machined,</span> <span class="nw">welded, delivered.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Program</span><span>Machine</span><span>Weld</span><span>Deliver</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">CAD/CAM</span> <span class="nw">programs it.</span></h2><p>Computer-aided manufacturing software turns your drawing into the CNC program.</p></article>'+
     '<article class="step"><h2><span class="nw">The CNC</span> <span class="nw">cuts it.</span></h2><p>Haas and Doosan machining and turning centres remove material with high-speed, precise tooling.</p></article>'+
     '<article class="step"><h2><span class="nw">The welder</span> <span class="nw">joins it.</span></h2><p>MIG welding and support equipment finish the assembly when the part calls for it.</p></article>'+
     '<article class="step"><h2><span class="nw">Delivered</span> <span class="nw">on time.</span></h2><p>One part or ten thousand, shipped when you need them to keep your project moving.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="capabilities" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Capabilities</span><h2 class="d2 split"><span class="nw">Simple or complex,</span> <span class="nw">delicate or rugged.</span></h2></div><p data-r>The people, equipment, technology and know-how to make a myriad of specialty parts and components.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="equipment" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Equipment</span><h2 class="d2 split"><span class="nw">Fifteen CNCs</span> <span class="nw">under one roof.</span></h2></div><p data-r>Haas and Doosan vertical machining and turning centres, and the support equipment to match.</p></div>'+
   caps(EQ)+chips("On our floor",MCH)+
  '</div></section>'+

  '<section class="sec dark" id="industries" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Industries</span><h2 class="d2 split"><span class="nw">Parts for the work</span> <span class="nw">that keeps moving.</span></h2></div><p data-r>Our highly trained staff and central location serve customers across the region and beyond.</p></div>'+
   caps(IN)+chips("Who we make parts for",INL)+
  '</div></section>'+

  '<section class="sec light" id="government" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Government</span><h2 class="d2 split"><span class="nw">A registered</span> <span class="nw">small business.</span></h2></div><p data-r>Machine shop, fabricated metal and machinery NAICS codes, from 332710 machine shops to 336413 aircraft parts.</p></div>'+
   caps(GV)+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">From two machines</span> <span class="nw">to fifteen.</span></h2></div><p data-r>The go-to CNC facility in the area, built on quality parts, delivered on time, competitively priced.</p></div>'+
   caps(CO)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Send us</span> <span class="nw">your drawing.</span></h2>'+
   '<p class="sub" data-r>When quality, pricing and timing are crucial, we deliver the parts you need to keep your projects moving forward.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Bill '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>APEX Manufacturing</span><br><span>520 Charles Street</span><br><span>Billings, MT 59101</span></p></div>'+
    '<div><span class="lab" data-r>Sales and support</span><p data-r><span>Bill Blaquiere, President</span><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>(406) 294-3016</span></p></div>'+
    '<div><span class="lab" data-r>Shop</span><p data-r><span>James Leibrand, Shop Supervisor</span><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><span>Fax (406) 248-7909</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>520 Charles Street<br>Billings, MT 59101</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/capabilities">Capabilities</a><br><a class="ul" href="#/equipment">Equipment</a><br><a class="ul" href="#/industries">Industries</a><br><a class="ul" href="#/government">Government</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Registration</span>CAGE 1P1Z3<br>Small business<br>ISO 9001 compliant</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">APEX</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 APEX Manufacturing Services, Ltd.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",capabilities:"capabilities",equipment:"equipment",industries:"industries",government:"government",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"APEX Manufacturing Services — CNC machining and welding, Billings, Montana",x:"Home"};
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
