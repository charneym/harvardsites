/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function dq(A,cls){
  return '<dl class="drq'+(cls?' '+cls:'')+'">'+A.map(function(q){return '<div data-r><dt class="lab">'+esc(q[0])+'</dt><dd>'+(q.length>2?'<b>'+esc(q[1])+'</b>':'')+'<span>'+esc(q[q.length-1])+'</span></dd></div>'}).join("")+'</dl>'}
function sys(){return '<ul class="pfr pipe np">'+SYS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab cpy">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function sheet(){return '<div class="stats sst">'+SHEET.map(function(s){return '<div class="stat"><span class="ln2"></span><span class="v">'+esc(s[0])+'</span><p class="k">'+esc(s[1])+'</p></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0]||"Next")+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1582" height="1612" alt="Corona Supplies narrow-web corona treater with its control panel, carrying the Corona Supplies Ltd plate" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Corona treatment equipment<span class="nomob"> · Thame, Oxfordshire</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Corona treaters,</span></span> <span class="l"><span class="nw">made in the UK.</span></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>The UK’s only manufacturer of corona treaters. Corona Supplies offer complete solutions for plastic film extrusion, conversion, and narrow web and digital printing. We are also the official supplier of Sherman Treaters products and spares.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/contact">Send an enquiry '+ARR+'</a><a class="btn" href="#/treatment">Surface treatment</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>For all your corona needs</span>'+
   '<h2 class="txt" id="mani"><span class="nwp">To print, laminate</span> <span class="nwp">or coat a film,</span> <span class="nwp">its surface energy</span> <span class="nwp">has to be raised.</span> <span class="nwp">Our design team</span> <span class="nwp">builds a treater</span> <span class="nwp">to suit each line.</span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.3–20 kW</span><p class="k">variable-frequency IGBT power supplies, the true power on the display</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5000 mm</span><p class="k">wide cast film systems, treating one side, both sides or either side</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1500 m/min</span><p class="k">converter line speeds, at widths to 3500 mm</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How corona treatment works</span><h2 class="d3"><span class="nw">A film that</span> <span class="nw">takes the ink.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">The roll</span><span>Corona</span><span>Dyne test</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Over the</span> <span class="nw">dielectric roll.</span></h2><p>The web runs over the treater’s base roll, covered in silicone sleeve, ceramic or a vulcanised coating. The correct dielectric gives years of trouble-free treating.</p></article>'+
     '<article class="step"><h2><span class="nw">Raised by</span> <span class="nw">the corona.</span></h2><p>The power supply drives the electrode, and the discharge in the air gap raises the surface energy of the film: a cost-effective, known and trusted way to get optimum adhesion.</p></article>'+
     '<article class="step"><h2><span class="nw">Checked with</span> <span class="nw">a dyne pen.</span></h2><p>A test pen drawn across the web beads up on untreated film and wets out where it has been treated. Pens and test inks run from 32 to 71 dyne/cm.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="treatment" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Surface treatment</span><h2 class="d2 split"><span class="nw">Corona treaters</span> <em class="nw">for every web.</em></h2></div><p data-r>To obtain optimum adhesion when printing, laminating or coating, the surface energy of the substrate has to be raised. Corona treatment is a cost-effective, known and trusted way to do it.</p></div>'+
   dq(MKT)+
  '</div></section>'+

  '<section class="sec dark2" id="system" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The system</span><h2 class="d2 split"><span class="nw">Everything a</span> <em class="nw">treatment line needs.</em></h2></div><p data-r>Station, power supply, ozone and dielectric rolls, designed and built in Thame, and matched to the line they join.</p></div>'+
   sys()+
  '</div></section>'+

  '<section class="sec light" id="sheet" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>New</span><h2 class="d2 split"><span class="nw">The standalone</span> <em class="nw">sheet treater.</em></h2></div><p data-r>The complete solution for corona treating individual sheets before printing, coating, varnishing or laminating. Everything, including the ozone destruct unit, is enclosed in one movable cabinet, and a single-phase supply is all it needs.</p></div>'+
   sheet()+
  '</div></section>'+

  '<section class="sec dark" id="spares" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Spares & consumables</span><h2 class="d2 split"><span class="nw">Parts and test inks,</span> <em><span class="nw">from people who</span> <span class="nw">know the machines.</span></em></h2></div><p data-r>Spare parts for our own treater stations and generators, genuine Sherman Treaters parts for GX and GXR power supplies, and parts for other manufacturers’ systems. Don’t know the part number? A description or a photo is often enough.</p></div>'+
   dq(SPARE,"dq3")+
  '</div></section>'+

  '<section class="sec light" id="support" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Support</span><h2 class="d2 split"><span class="nw">Wherever you are,</span> <em class="nw">we’ll be there.</em></h2></div><p data-r>Our technical team has over 50 years’ combined experience with Corona Supplies and Sherman Treaters products, and keeps a large stock of spares, not just for our own systems.</p></div>'+
   dq(SUP,"dq4")+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Exhibitions</span><h2 class="d2 split"><span class="nw">Last seen at</span> <em class="nw">K 2025, Düsseldorf.</em></h2></div><p data-r>Each entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact us</span>'+
   '<h2 class="big split"><span class="nw">Tell us</span> <em class="nw">about your line.</em></h2>'+
   '<p class="sub" data-r>Sales questions, quotations and spare parts go to sales; breakdowns and technical help go to service.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email sales '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Corona Supplies Ltd<br>Unit G, Howland Road Business Park<br>Howland Road, Thame OX9 3GQ<br>United Kingdom</p></div>'+
    '<div><span class="lab" data-r>Phone & email</span><p data-r>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Sales <a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Technical <a class="ul" href="mailto:'+SMAIL+'">'+SMAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Opening hours</span><p data-r>Monday to Thursday 08:00 to 17:00<br>Friday 08:00 to 13:00<br>Saturday and Sunday closed</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Unit G, Howland Road Business Park<br>Howland Road, Thame OX9 3GQ</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+SMAIL+'">'+SMAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/treatment">Surface treatment</a><br><a class="ul" href="#/system">The system</a><br><a class="ul" href="#/spares">Spares</a><br><a class="ul" href="#/support">Support</a></div>'+
   '<div class="c"><span class="lab">Products</span>Corona treaters<br>Power supplies<br>Ozone generators and destruct units<br>Dyne pens and inks</div>'+
  '</div><svg class="bigsvg flogo" viewBox="0 0 1000 70" aria-hidden="true"><text x="500" y="56" text-anchor="middle" style="letter-spacing:.16em">CORONA SUPPLIES · THAME</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Corona Supplies Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",treatment:"treatment",system:"system",sheet:"sheet",spares:"spares",support:"support",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Corona Supplies Ltd — corona treatment equipment, made in Thame, UK",x:"Home"};
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
