/* ================= VIEWS (home only: REDIFIX / Products / Applications / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(A,cls){return '<ul class="pfr'+(cls?' '+cls:'')+'">'+A.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p>'+(c[3]?'<a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Details</a>':'')+'</li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
var ICO={usa:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 33h28"/><path d="M9 33V17l7 4v-4l7 4v-4l7 4v12"/><path d="M27 12v-5h3v8"/></svg>',
 iso:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 5l12 5v9c0 8-5.5 13-12 16C13.5 32 8 27 8 19v-9Z"/><path d="M14.5 19.5l4 4 7-8"/></svg>',
 kit:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 12h28v20H6Z"/><path d="M15 12V8h10v4"/><path d="M11 18v9M16 18v9M21 18v9M26 18v9M30 18v9"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Orthopaedic implants<span class="nomob"> · Stoughton, Massachusetts</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Compression and</span><span class="l">fixation for the</span><span class="l"><em>extremities.</em></span></h1>'+
   '<i class="hrule" aria-hidden="true" data-r></i>'+
   '<div class="hero-foot"><p class="s" data-r>Bone compression screws, nitinol staples and the new REDIFIX™ suture anchor system, for osteotomy, fixation, fusion and fracture repair in the upper and lower extremities.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Find a distributor</a></div></div>'+
   '<p class="lab hcap" data-r>A headless compression screw: double-lead tip, finer trailing thread, cannulated. Rendered.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About Trax Surgical</span>'+
   '<h2 class="txt" id="mani">Implants and instruments for surgery of the upper and lower extremities, <em>engineered with patient comfort and durability in mind.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">7</span><p class="k">Diameters of headless compression screw, in a large range of lengths</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Instrument kits, small, medium and large, colour-coded to their screws</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><p class="k">Regions for REDIFIX: foot and ankle, hand and wrist, elbow, shoulder and knee</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div class="p1"><span class="pic">'+ICO.usa+'</span><span class="lab kick" data-r>Made in the USA</span><p data-r>Manufactured in an FDA-registered facility in the United States, with Primo Medical Group, a medical device maker with over forty years of experience.</p></div>'+
    '<div class="p2"><span class="pic">'+ICO.iso+'</span><span class="lab kick" data-r>ISO 13485:2016</span><p data-r>A quality system compliant with ISO 13485:2016, and FDA clearance for every system before it is offered to surgeons.</p></div>'+
    '<div class="p3"><span class="pic">'+ICO.kit+'</span><span class="lab kick" data-r>Distributor network</span><p data-r>Sold in the United States through experienced orthopaedic distributors with established surgeon relationships.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The REDIFIX™ technique</span><h2 class="d3">Drill, drive, push <em>and cinch.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Drill</span><span>Drive</span><span>Push</span><span>Cinch</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Place the pin, drill.</h2><p>A single incision. A guidewire is placed and a pilot hole is drilled over it.</p></article>'+
     '<article class="step"><h2>Drive the screw-in anchor.</h2><p>The cannulated, threaded titanium anchor is advanced over the wire and screwed into the bone, its suture preloaded.</p></article>'+
     '<article class="step"><h2>Push in the second.</h2><p>The push-in anchor, linked to the first by a loop of high-strength suture, is pressed into the bone with a press-fit.</p></article>'+
     '<article class="step"><h2>Cinch.</h2><p>Traction on the trailing suture reduces the tissue to bone. The knotless, tension-responsive suture cinches for stable, dependable fixation.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">A focused, high-quality <em>extremity portfolio.</em></h2></div><p data-r>Suture anchors, compression screws, kits and staples for osteotomy, fixation, fusion and fracture procedures. Titanium screws, self-tapping, colour-coded to their instruments.</p></div>'+
   rows(PRODS)+
  '</div></section>'+

  '<section class="sec dark" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">From the foot <em>to the shoulder.</em></h2></div><p data-r>REDIFIX is intended for suture or tissue fixation across the upper and lower extremities; Trax compression screws and staples serve osteotomies, fusions and fracture repair in the hand and foot.</p></div>'+
   rows(APPS,'pgr')+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Cleared, launched, <em>in the operating room.</em></h2></div><p data-r>Three FDA 510(k) clearances since 2023, and the first REDIFIX case in May 2026.</p></div>'+
   news()+
   '<div class="bk"><span class="lab kick" data-r>Leadership</span><p class="cr" data-r><span>Shane Shankle · Chief Executive Officer</span></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec dark2 cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons and distributors</span>'+
   '<h2 class="big split">Partner with <em>Trax Surgical.</em></h2>'+
   '<p class="sub" data-r>Ask about our products or a demonstration, find a distributor near you, or join our network if you are an orthopaedic distributor with established surgeon relationships.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to Trax '+ARR+'</a><a class="btn" href="'+WEB+'find-distributor" target="_blank" rel="noopener">Find a distributor</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Trax Surgical Inc.<br>75 Mill Street<br>Stoughton, MA 02072</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r>781-436-4350<br>800-308-0360</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>75 Mill Street<br>Stoughton, MA 02072</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/redifix">REDIFIX</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>781-436-4350</div>'+
   '<div class="c"><span class="lab">Focus</span>Compression and fixation<br>for the extremities</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 82" aria-hidden="true"><text x="320" y="62" text-anchor="middle" style="font-family:\'Lato\',system-ui,sans-serif;font-style:italic;font-weight:900;font-size:66px;letter-spacing:0"><tspan fill="#f4f5f7">TRAX SURGICAL</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Trax Surgical Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",redifix:"story",products:"products",applications:"applications",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Trax Surgical — implants and instruments for the extremities",x:"Home"};
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
