/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function caps(list){return '<div class="caps nwc tst">'+list.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function chips(kick,list){return '<div class="bk cnd"><span class="lab kick" data-r>'+esc(kick)+'</span><p class="cr" data-r>'+list.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* equipment (paramountmachine.com > Our Equipment) */
var EQ=[
 ["Turning","11 CNC turning centres","Okuma lathes, 2- and 4-axis, with milling capability, up to 21 inches in diameter and 50 inches long."],
 ["Machining","11 CNC machining centres","Okuma horizontal and vertical machining centres with 4th-axis contouring, up to 40 x 24 x 24 inches."],
 ["Inspection","Mitutoyo CMM","A Mitutoyo coordinate measuring machine, an optical comparator and a full set of gauges, in a 70°F ±2° room."]];
var MCH=["(4) Okuma LSN-10 lathes","(3) Okuma LC20 4-axis lathes","(2) Okuma MC400H horizontals","(3) Okuma Cadet V4020 verticals","(3) Okuma MC4VAE verticals","(2) Brother 215 drill-tap centres","Mitutoyo B706 CMM","Scherr Tumico comparator"];
/* materials (paramountmachine.com > Our Equipment > Materials) */
var MAT=[
 ["Aluminium alloys","2024 · 6061 · 7075","From 2011 to 7075 and beyond, for aircraft structures, housings and manifolds."],
 ["Steels","Aircraft and stainless","4130 to 9310 aircraft alloys, 13-8MO, 15-5PH and 17-4PH stainless, and carbon steels."],
 ["Super alloys","Inconel · Hastelloy","A-286, Inconel, Incoloy, Hastelloy, Haynes, Monel, Waspaloy and maraging steels."]];
var MLIST=["Titanium","Brass and bronze","Copper","Invar and Kovar","PEEK","Delrin","Vespel","Teflon"];
/* quality (paramountmachine.com > Our Approvals) */
var QA=[
 ["AS9100D","Aerospace quality","A proactive quality system compliant with AS9100D, with zero defects as the goal."],
 ["ISO 9001:2015","Quality management","Our quality system complies with ISO 9001:2015."],
 ["D1-9000 Rev A","Customer approvals","Statistical process control to Boeing's D1-9000 Rev A; our facility is approved by major aerospace manufacturers."]];
/* company */
var CO=[
 ["1964","A lathe in a garage","Douglas Harsen started machining parts on a Logan lathe in his garage in Southern California."],
 ["Paramount Street","Irwindale","A few months later he moved into a small industrial building on Paramount Street in Irwindale, and the company took its name."],
 ["Today","Rancho Cucamonga","A 12,000 square-foot modern manufacturing environment with 22 advanced CNC machines."]];
function chipsx(kick,list){return chips(kick,list)}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1130" height="712" alt="Four parts machined by Paramount: a gold-anodised hydraulic housing block with threaded ports, a gold-anodised manifold, a threaded brass yoke and a turned brass fitting" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Precision machining<span class="nomob"> · Rancho Cucamonga, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Close-tolerance parts,</span> <span class="l">machined since 1964.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>CNC milling, turning and assembly from castings, forgings, solid stock, plates and weldments, for aerospace, defense, electronics, medical and commercial customers.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/capabilities">Our capabilities '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Paramount Machine</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Our quality goal</span> <span class="nw">is zero defects,</span> <span class="nw">from aluminium</span> <span class="nw">to titanium,</span> <span class="nw">aircraft alloys and Inconel.</span> <em><span class="nw">Short run or production.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">22</span><p class="k">modern CNC machine tools</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">±.0002&Prime;</span><p class="k">tolerances we hold</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1964</span><p class="k">machining since, in Southern California</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a part is made here</span><h2 class="d3"><span class="nw">From the stock</span> <span class="nw">to the CMM.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Stock</span><span>Turn</span><span>Mill</span><span>Inspect</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">It starts</span> <span class="nw">as stock.</span></h2><p>A casting, a forging, solid bar, plate or a weldment, in aluminium, steel, super alloy or plastic.</p></article>'+
     '<article class="step"><h2><span class="nw">The lathe</span> <span class="nw">turns it.</span></h2><p>Okuma turning centres, up to 21 inches in diameter and 50 inches long, several with milling capability.</p></article>'+
     '<article class="step"><h2><span class="nw">The mill</span> <span class="nw">shapes it.</span></h2><p>Horizontal and vertical machining centres with 4th-axis contouring cut the ports, faces and pockets.</p></article>'+
     '<article class="step"><h2><span class="nw">The CMM</span> <span class="nw">proves it.</span></h2><p>A Mitutoyo coordinate measuring machine in a room held at 70°F ±2° checks it to ±.0002 inch.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="capabilities" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Capabilities</span><h2 class="d2 split"><span class="nw">Your total solution</span> <span class="nw">for precision machining.</span></h2></div><p data-r>Parts for commercial and military aircraft, critical life-support equipment and space exploration.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="equipment" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Equipment</span><h2 class="d2 split"><span class="nw">Twenty-two</span> <span class="nw">CNC machines.</span></h2></div><p data-r>Okuma turning and machining centres, drilling and tapping centres, and the inspection to match.</p></div>'+
   caps(EQ)+chips("On our floor",MCH)+
  '</div></section>'+

  '<section class="sec dark" id="materials" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Materials</span><h2 class="d2 split"><span class="nw">From aluminium</span> <span class="nw">to Inconel.</span></h2></div><p data-r>Metals and plastics, from free-machining brass to high-temperature super alloys.</p></div>'+
   caps(MAT)+chips("We also machine",MLIST)+
  '</div></section>'+

  '<section class="sec light" id="quality" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality</span><h2 class="d2 split"><span class="nw">Zero defects</span> <span class="nw">is the goal.</span></h2></div><p data-r>A proactive quality system, approved by major aerospace manufacturers.</p></div>'+
   caps(QA)+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">It started</span> <span class="nw">in a garage.</span></h2></div><p data-r>More than 50 years of precision machining knowledge and expertise.</p></div>'+
   caps(CO)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Send us</span> <span class="nw">your drawing.</span></h2>'+
   '<p class="sub" data-r>Contact our sales team to find out what more than 50 years of precision machining expertise can do for you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Paramount Machine Company</span><br><span>10824 Edison Court</span><br><span>Rancho Cucamonga, CA 91730</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Quotes and drawings</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><span>Fax (909) 484-3664</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>10824 Edison Court<br>Rancho Cucamonga, CA 91730</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/capabilities">Capabilities</a><br><a class="ul" href="#/equipment">Equipment</a><br><a class="ul" href="#/materials">Materials</a><br><a class="ul" href="#/quality">Quality</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Approvals</span>AS9100D<br>ISO 9001:2015<br>D1-9000 Rev A</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">PARAMOUNT</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Paramount Machine Company, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",capabilities:"capabilities",equipment:"equipment",materials:"materials",quality:"quality",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Paramount Machine Company — Precision CNC machining and assembly, Rancho Cucamonga, California",x:"Home"};
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
