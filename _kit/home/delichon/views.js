/* ================= VIEWS (home only: Products / Foam-Karve / Service / News open build-out pages via _kit/lib/buildout.js;
   Contact and in-page CTAs scroll). Dark and bone grounds alternate: hero (dark, Delichon's own studio photograph of the Delta
   All-Terrain Buggy, matted), about (bone, statement + figures), the Foam-Karve story (dark), products (bone: the range in
   tiles, the Delta sizes, who the seating is for), the seating service (dark), news (bone), contact (dark). Content is never
   hidden at rest: reveals only enhance (failsafe in site.js). ================= */
function range(){return '<ul class="vrg">'+RANGE.map(function(r,i){return '<li><span class="vr-n">'+String(i+1).padStart(2,"0")+'</span><h3>'+esc(r[0])+'</h3><p>'+esc(r[1])+'</p></li>'}).join("")+'</ul>'}
function mkts(){return '<div class="vmk"><span class="lab kick" data-r>Markets</span><ul>'+MKT.map(function(m){return '<li data-r>'+esc(m)+'</li>'}).join("")+'</ul></div>'}
function acspec(){return '<dl class="vac-d">'+AC.map(function(a){return '<div><dt>'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'}
function oem(){return '<ol class="voem">'+OEM.map(function(m,i){return '<li><span class="vo-n">'+String(i+1).padStart(2,"0")+'</span><div><h3>'+esc(m[0])+'</h3><p>'+esc(m[1])+'</p></div></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
var ICO={seat:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M11 6c4 0 5 3 5 7v12h12c3 0 5 2 5 5v3H11c-3 0-4-2-4-5V12c0-4 1-6 4-6Z"/><path d="M16 21c3 1 8 1 12 0"/></svg>',
 buggy:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M8 6l4 4M12 10l6 14h10l4-10M18 24l-4 6M28 24l3 6"/><circle cx="12" cy="31" r="4"/><circle cx="33" cy="31" r="4"/><circle cx="22" cy="33" r="2.5"/></svg>',
 wave:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4 26c4-3 8-3 12 0s8 3 12 0 8-3 8-3M4 32c4-3 8-3 12 0s8 3 12 0 8-3 8-3"/><circle cx="28" cy="11" r="5"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>Custom seating and all-terrain mobility<span class="nomob"> · Since 1996</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="nw">Shaped to sit in.</span> <em class="nw">Built to get out.</em></h1>'+
    '<p class="s" data-r>Delichon makes Foam-Karve custom wheelchair seating, invented by our Managing Director in 1991, and the <span class="nw">Delta All-Terrain</span> Buggy, designed and made in the UK for children and adults. A family business in Hampshire since 1996.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div>'+
   '</div>'+
   '<ul class="pil" aria-label="What we make">'+
    '<li class="p1" data-r><span class="pic">'+ICO.seat+'</span><div><span class="lab">Foam-Karve seating</span><p>Custom cushions carved from a cast of your shape, for wheelchairs, buggies and home chairs.</p></div></li>'+
    '<li class="p2" data-r><span class="pic">'+ICO.buggy+'</span><div><span class="lab">Delta All-Terrain Buggy</span><p>Three wheels, six sizes, for occupants up to 195 cm tall. Converts to a cycle trailer.</p></div></li>'+
    '<li class="p3" data-r><span class="pic">'+ICO.wave+'</span><div><span class="lab">Hippocampe</span><p>The amphibious beach wheelchair, for sand, sea and even snow. UK distributor.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="about" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>About Delichon</span>'+
   '<h2 class="txt" id="mani">Set up as a family business by Martin and P-J Davy, Delichon makes custom seating for wheelchair users and the outdoor mobility that takes them further: <em>woodland walks, beaches and <span class="nw">country paths.</span></em></h2></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1991</span><p class="k">Martin Davy invents the Foam-Karve machine</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1996</span><p class="k">Delichon is founded in the village of Martin, Hampshire</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">195<small>cm</small></span><p class="k">The tallest occupant the Delta XL is made for</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Foam-Karve</span><h2 class="d3"><span class="nw">How a seat</span> <em class="nw">is carved.</em></h2>'+
    '<p class="st-in">What happens at a Foam-Karve appointment, step by step.</p>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Cast</span><span>Carve</span><span>Try</span><span>Finish</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A cast of your shape.</h2><p>We pre-shape a beanbag, then gently mould it around you: the base first, then the back while you sit in the base cast, until everyone is happy with the shape and the support.</p></article>'+
     '<article class="step"><h2>Carved while you wait.</h2><p>The beanbag becomes the template. The Foam-Karve machine in our mobile workshop copies it into a block of foam, there and then.</p></article>'+
     '<article class="step"><h2>Tried before it’s made.</h2><p>You sit on the rough cushions straight away, for comfort and shape: the trial fit many seating makers leave out.</p></article>'+
     '<article class="step"><h2>Finished and fitted.</h2><p>In the workshop we add supporting foams, plastic shells, brackets and the covers you chose, then fit the seat to your wheelbase at the second appointment.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">From the seat</span> <em class="nw">to the beach.</em></h2></div><p data-r>Custom seating and outdoor mobility, with product specialists who will help you choose the right size and specification.</p></div>'+
   range()+
   '<div class="vac"><div class="vac-l"><span class="lab kick" data-r>Delta All-Terrain Buggy · Sizes</span><h3 data-r><span class="nw">Six sizes,</span> <span class="nw">children to adults</span></h3><p data-r>A short-wheelbase alloy frame with a low centre of gravity, mountain-bike brake levers, dual rear drum brakes and a five-point harness, and it folds quickly for the car.</p></div>'+acspec()+'</div>'+
   mkts()+
  '</div></section>'+

  '<section class="sec dark" id="service" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Seating service</span><h2 class="d2 split"><span class="nw">Two appointments,</span> <em class="nw">or one day.</em></h2></div><p data-r>Skilled seating engineers, with a friendly technical team behind them, for NHS and private clients alike.</p></div>'+
   '<div class="voem-g">'+oem()+
   '<div class="vsvc"><span class="lab kick" data-r>Visiting us</span><ul>'+SVC.map(function(s){return '<li data-r>'+esc(s)+'</li>'}).join("")+'</ul><p data-r>Open Monday to Thursday, 9am to 5pm, and Friday, 9am to 4pm. Ring ahead to visit, so the staff, the equipment and the kettle are ready.</p></div></div>'+
  '</div></section>'+

  '<section class="sec light" id="news" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">From Fordingbridge</span> <em class="nw">to Düsseldorf.</em></h2></div><p data-r>Shows, events and company news.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Families, therapists and wheelchair services</span>'+
   '<h2 class="big split"><span class="nw">Let’s find</span> <em class="nw">the right fit.</em></h2>'+
   '<p class="sub" data-r>Ask about Foam-Karve seating, the right size of Delta or Hippocampe, or a visit to the workshop. Real people will help you choose.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to Delichon '+ARR+'</a><a class="btn" href="'+WEB+'" target="_blank" rel="noopener">Visit the shop</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>1 The Clayfields, Sandleheath Industrial Estate<br>Old Brickyard Road, Fordingbridge<br>Hampshire SP6 1PA</p></div>'+
    '<div><span class="lab" data-r>Email and phone</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+441725519405">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Registered</span><p data-r>Delichon Ltd, England<br>No. 03184535</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Delichon Ltd<br>Sandleheath Industrial Estate<br>Fordingbridge SP6 1PA</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/foam-karve">Foam-Karve</a><br><a class="ul" href="#/service">Service</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+441725519405">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Custom seating and<br>all-terrain mobility</div>'+
  '</div><div class="fwm"><img src="logo.png" alt="Delichon Ltd" width="2000" height="566" loading="lazy"></div>'+
  '<div class="legal"><span class="lab">© 2026 Delichon Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route. #/contact and #/about scroll to their section; a typed or linked #/products, #/foam-karve, #/service or #/news (the nav items) opens that item's build-out page, as a nav click does (buildout.js) ================= */
var BOK={};/* typed or linked hashes scroll to their section; nav clicks open the build-out pages (buildout.js) */
function boOpen(k){try{if(window.BuildOut&&BuildOut.open){BuildOut.open(k);return true}}catch(x){}return false}
var SECS={about:"about",products:"products","foam-karve":"story",service:"service",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Delichon — Foam-Karve custom seating and the Delta All-Terrain Buggy",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home")return;e.stopImmediatePropagation();
  if(r.sec&&BOK[r.sec]){try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/";boOpen(r.sec);return}
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){try{history.replaceState(null,"","#/")}catch(x){}if(BOK[r.sec]&&boOpen(r.sec))return;secGo(r.sec,true)},300)})()})();
