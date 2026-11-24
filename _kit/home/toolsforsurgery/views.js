/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prodRows(){return '<ul class="pfr prd">'+PROD.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><div class="pgm"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[2])+'</span></div>'+
   '<p>'+esc(c[3])+'</p><span class="lab lk"><a class="ul" href="'+TFS+c[4]+'" target="_blank" rel="noopener">Details '+ARR+'</a></span></li>'}).join("")+'</ul>'}
function regRows(){return '<ul class="nws reg">'+REG.map(function(n){return '<li><a href="'+FDA+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">FDA 510(k) '+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Invented by surgeons","All surgeons are inventors. Each device starts from a problem met at the operating table in general, bariatric and colorectal surgery.",'<circle cx="28" cy="20" r="9"/><path d="M12 48c2-10 8-15 16-15s14 5 16 15"/><path class="a" d="M38 10l6-6M42 16h7M18 10l-6-6"/>'],
  ["Simple, by design","We make it simple, by design: instruments with one clear job, like a gauge that reads in mmHg or a sizer that never traps air.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M28 28l9-9"/><circle class="f" cx="28" cy="28" r="2.6"/><path d="M14 36h4M38 36h4M28 13v4"/>'],
  ["Precision manufacturing","Innovative engineering with precision manufacturing, for the reliability and performance surgeons can trust, case after case.",'<path d="M10 40h36M14 40V24h28v16"/><path class="a" d="M20 24v-8h16v8"/><circle class="f" cx="28" cy="32" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev q"><span class="lab kick" data-r>In the literature</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Quoted and cited on the Tools for Surgery product pages, with full references there.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>General, bariatric and colorectal surgery</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">All surgeons</span><span class="l">are <em>inventors.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Tools for Surgery designs and manufactures high-quality surgical devices for general and colorectal surgery, combining innovative engineering with precision manufacturing.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">See the devices '+ARR+'</a><a class="btn" href="#/story">How leak testing works</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Simple, by design</span>'+
   '<h2 class="txt" id="mani">We design and manufacture surgical devices that empower surgeons and enhance patient outcomes. From orogastric tubes to titanium occluder pins, <em>we make it simple, by design.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">12</span><p class="k">Devices in the catalogue, for bariatric, colorectal, anorectal and wound care</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">FDA 510(k) clearances, from 2004 to the ZZIREN® tubes in January 2025</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">U.S. patents named on the product pages</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Leak testing</span><h2 class="d3">The Bariatric Air Syringe™, <em>step by step.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Squeeze</span><span>Read</span><span>Hold</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Squeeze the bulb.</h2><p>After a gastric staple line or anastomosis is made, the compact, disposable syringe insufflates air to test it for leaks during the operation.</p></article>'+
     '<article class="step"><h2>Read the pressure.</h2><p>An integral gauge on the valve shows the pressure delivered, in mmHg, as the bulb is squeezed.</p></article>'+
     '<article class="step"><h2>Hold it in range.</h2><p>Controlled pressure delivery between 20 and 60 mmHg, so every staple line is tested the same way.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Devices for general and <em>colorectal surgery.</em></h2></div><p data-r>Twelve devices across bariatric, colorectal, anorectal and wound care, each with its own catalogue number, instructions for use and product sheet. The newest is the Bariatric Air Syringe™.</p></div>'+
   prodRows()+
  '</div></section>'+

  '<section class="sec dark2" id="evidence" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Evidence</span><h2 class="d2 split">Cleared, patented <em>and referenced.</em></h2></div><p data-r>Four FDA 510(k) clearances, U.S. patents on the ZZIREN® tubes, the air syringes and the WIKI DRAINS®, and the clinical literature each device rests on.</p></div>'+
   regRows()+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">A surgeon’s <em>workshop.</em></h2></div><p data-r>Tools for Surgery, LLC is based in East Setauket, New York, and is led by a colon and rectal surgeon. Its trademarks, Sohn’s Dilators®, ZZIREN®, NEOBALM® and WIKI DRAINS® among them, are its own.</p></div>'+
   caps()+
   '<div class="tm">'+team()+'</div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, hospitals and distributors</span>'+
   '<h2 class="big split">Order or ask about <em>a device.</em></h2>'+
   '<p class="sub" data-r>Write, call or fax Tools for Surgery for orders, product sheets and instructions for use.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/products">See the devices</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Tools for Surgery, LLC<br>8 Technology Drive, #100<br>East Setauket, NY 11733</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@toolsforsurgery.com</a></p></div>'+
    '<div><span class="lab" data-r>Phone and fax</span><p data-r><a class="ul" href="tel:+16314444448">(631) 444-4448</a><br>Fax (631) 689-2943</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>8 Technology Drive, #100<br>East Setauket, NY 11733</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@toolsforsurgery.com</a><br>(631) 444-4448</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/evidence">Evidence</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Trademarks</span>Tools for Surgery™ and designated product names are trademarks of Tools for Surgery, LLC.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 66" aria-hidden="true"><text x="500" y="58" text-anchor="middle" style="font-family:\'Poppins\',sans-serif;font-weight:600;font-style:italic;font-size:76px">TOOLS FOR SURGERY</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Tools for Surgery, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",products:"products",evidence:"evidence",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Tools for Surgery — devices for general and colorectal surgery",x:"Home"};
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
