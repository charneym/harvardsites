/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function caps(list){return '<div class="caps nwc tst">'+list.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function chips(kick,list){return '<div class="bk cnd"><span class="lab kick" data-r>'+esc(kick)+'</span><p class="cr" data-r>'+list.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* grinders (raloidtool.com > Equipment > Grinders) */
var GRD=[
 ["Contour grinders","Raloid 20\" CGIM · 30\" O.D.","Our own contour grinders for the outside diameter of brake segments and linings."],
 ["Segment and lining grinders","I.D. and side","Grinding the inside diameter and the sides of segment and drum linings."],
 ["Block sander","I.D. sanding and grinding","A block I.D. sander and grinding machine for block brakes."]];
/* ovens and systems (raloidtool.com > Equipment) */
var OVN=[
 ["Batch ovens","Curing","Batch ovens for curing moulded friction parts."],
 ["Conveyor ovens","Continuous","Conveyor ovens for continuous curing on the line."],
 ["Conveyorized wash system","Cleaning","A conveyorized wash system for parts on the move."]];
var CATS=["Clamping fixtures","Gaging systems","Smart cart systems","AER powered bench and downdraft tables","Production tooling","Drill machines","Chamfer grinders","New and used equipment"];
/* machining (raloidtool.com > Machine Shop; USAspending: U.S. Department of Defense awards, 2026) */
var MCH=[
 ["Machine shop","To your drawing","Turning, milling, grinding and drilling, for our own machines and for customers' parts."],
 ["Defense work","U.S. Department of Defense","Machined parts to drawing for the Department of Defense: spring packs, pins, caps and linkages."],
 ["Tooling","For production","Production tooling, fixtures and gauges for friction-material lines."]];
/* company */
var CO=[
 ["Family-owned","Since 1945","Raloid Tool Company has been family-owned and operated since 1945."],
 ["New and used","Equipment and tooling","An extensive list of new and used tooling and equipment, for segment, drum, disc and block brakes."],
 ["Where we work","Albany · Charlotte · Nashville","Based in Mechanicville, near Albany, New York, and serving Charlotte, North Carolina and Nashville, Tennessee."]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1790" height="1195" alt="A precision-machined steel compression mould for brake linings: a lower die block with three lining pockets, four chrome guide pillars, the upper punch plate raised on them, cap screws, lifting eyebolts and braided heater leads" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Friction-material equipment<span class="nomob"> · Mechanicville, New York</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The machines that</span> <span class="l">make brake linings.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Presses, batch and conveyor ovens, contour grinders, gauging and clamping systems and production tooling for friction-material makers, and a full machine shop. Family-owned and operated since 1945.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/presses">Our equipment '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Raloid Tool Company</span>'+
   '<h2 class="txt" id="mani"><span class="nw">From the press</span> <span class="nw">to the final gauge,</span> <span class="nw">the equipment</span> <span class="nw">a friction line runs on,</span> <span class="nw">built in New York.</span> <em><span class="nw">New and used.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1945</span><p class="k">family-owned and operated since</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">650 t</span><p class="k">our largest hydraulic press system</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30&Prime;</span><p class="k">Raloid contour O.D. grinder</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a brake lining is made</span><h2 class="d3"><span class="nw">Four machines,</span> <span class="nw">one line.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Press</span><span>Cure</span><span>Grind</span><span>Gauge</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">The press</span> <span class="nw">moulds it.</span></h2><p>A positive mould press compacts the friction mix in heated moulds, segment by segment.</p></article>'+
     '<article class="step"><h2><span class="nw">The oven</span> <span class="nw">cures it.</span></h2><p>Batch or conveyor ovens cure the moulded linings.</p></article>'+
     '<article class="step"><h2><span class="nw">The grinder</span> <span class="nw">shapes it.</span></h2><p>Contour grinders bring the outside diameter, the inside diameter and the sides to size.</p></article>'+
     '<article class="step"><h2><span class="nw">The gauge</span> <span class="nw">checks it.</span></h2><p>Gaging systems and inspection gauges confirm every lining before it ships.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="presses" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Presses</span><h2 class="d2 split"><span class="nw">Presses for moulding</span> <span class="nw">and bonding.</span></h2></div><p data-r>Positive mould presses, hydraulic press systems and bonding presses for segment, drum, disc and block brakes.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="grinders" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Grinders</span><h2 class="d2 split"><span class="nw">Every surface</span> <span class="nw">to size.</span></h2></div><p data-r>Contour, segment and block grinders for the outside, the inside and the sides of every lining.</p></div>'+
   caps(GRD)+
  '</div></section>'+

  '<section class="sec dark" id="ovens" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Ovens and systems</span><h2 class="d2 split"><span class="nw">Cure, clean</span> <span class="nw">and move.</span></h2></div><p data-r>Ovens, wash and handling systems, and the fixtures and gauges that keep a friction line running.</p></div>'+
   caps(OVN)+chips("We also build",CATS)+
  '</div></section>'+

  '<section class="sec light" id="machining" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Machine shop</span><h2 class="d2 split"><span class="nw">Parts machined</span> <span class="nw">to drawing.</span></h2></div><p data-r>The same shop that builds our machines makes parts to drawing, from one-offs to production runs.</p></div>'+
   caps(MCH)+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">A family business</span> <span class="nw">since 1945.</span></h2></div><p data-r>Three generations of building equipment and tooling in Mechanicville, New York.</p></div>'+
   caps(CO)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us about</span> <span class="nw">your line.</span></h2>'+
   '<p class="sub" data-r>A new press, a rebuilt grinder, tooling or parts to drawing: call or write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Raloid Tool Company</span><br><span>1 Farm to Market Road</span><br><span>Mechanicville, NY 12118</span><br><span>P.O. Box 551</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Equipment and quotes</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><span>Mechanicville, New York</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>1 Farm to Market Road<br>Mechanicville, NY 12118</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/presses">Presses</a><br><a class="ul" href="#/grinders">Grinders</a><br><a class="ul" href="#/ovens">Ovens</a><br><a class="ul" href="#/machining">Machining</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">We build</span>Presses and ovens<br>Contour grinders<br>Tooling and gauges</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">RALOID</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Raloid Tool Company</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",presses:"presses",grinders:"grinders",ovens:"ovens",machining:"machining",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Raloid Tool Company — Presses, ovens, grinders and tooling for friction materials, Mechanicville, New York",x:"Home"};
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
