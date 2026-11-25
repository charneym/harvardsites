/* ================= VIEWS (home only: Technology / Products / Team / News open build-out pages via _kit/lib/buildout.js;
   Contact and in-page CTAs scroll). Hero: SRI's own photograph of their anodized Bezier transition rods right of a type-led
   headline, three advantages as its bottom band; then: the construct problem (bone), the stiffness story (dark), the
   advantages (bone), products with SRI's product photography (dark), leadership and surgeon voices (bone), news (dark),
   contact (bone). Content is never hidden at rest (DW): reveals only enhance (see the failsafe in site.js). ================= */
function tiles(){return '<div class="ptile-g">'+PROPS.map(function(c){
  return '<div class="ptile"><span class="pm word">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function prods(){return '<div class="spp-g">'+PROD.map(function(p){
  return '<a class="spp" href="'+p[3]+'" target="_blank" rel="noopener"><div class="spp-ph"><img src="'+p[2]+'" alt="'+esc(p[0])+'" width="640" height="480" loading="lazy" decoding="async"></div><div class="spp-t"><h3>'+esc(p[0])+'</h3><p>'+esc(p[1])+'</p><span class="lab spp-l">Product page '+ARR+'</span></div></a>'}).join("")+'</div>'}
function quotes(){return '<div class="spq-g">'+QUOTES.map(function(q){
  return '<figure class="spq"><blockquote>“'+esc(q[0])+'”</blockquote><figcaption><span class="spq-n">'+esc(q[1])+'</span><span class="lab">'+esc(q[2])+'</span></figcaption></figure>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function lst(a){return a.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')}
var ICO={jn:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4 16H14C20 16 22 18.5 26 18.5H36"/><path d="M4 24H14C20 24 22 21.5 26 21.5H36"/></svg>',
 un:'<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="13"/><path d="M13.5 20.5L18 25L27 15"/></svg>',
 pt:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M8 32C14 30 13 20 20 18S30 10 32 6"/><circle cx="8" cy="32" r="2.2"/><circle cx="32" cy="6" r="2.2"/></svg>'};
function vHome(){
  var PR=MOBILE()?'':' data-r';setTimeout(pilReveal,60);
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>Spinal fixation<span class="nomob"> · Fort Lauderdale, Florida</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Bring the rod</span><span class="l"><em class="gt">to the patient.</em></span></h1>'+
    '<i class="hrule" aria-hidden="true" data-r></i>'+
    '<div class="hx-foot"><p class="s" data-r>The Bezier Parametric Curve Rod: FDA-cleared, patented spinal rods whose diameter changes smoothly along their length, stiff where the correction happens and gentler at the top of the construct.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '</div>'+
   '<ul class="pil" aria-label="Bezier rod advantages">'+
    '<li class="p1" data-r><span class="pic">'+ICO.jn+'</span><div><span class="lab">No transition junctions</span><p>A parametric curve between sections minimizes stress risers.</p></div></li>'+
    '<li class="p2"'+PR+'><span class="pic">'+ICO.un+'</span><div><span class="lab">Universal clearance</span><p>Cleared for use with any cleared pedicle screw set in the US.</p></div></li>'+
    '<li class="p3"'+PR+'><span class="pic">'+ICO.pt+'</span><div><span class="lab">Patient-matched</span><p>Rods shaped and tapered to a specific patient’s anatomy.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="about" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>Why the rod matters</span>'+
   '<h2 class="txt" id="mani">Rod stress and demand is not the same throughout a construct. It doesn’t make sense to prescribe one universal rod and have it abruptly transition to normal anatomy. <em>So we made the rod change with the spine.</em></h2></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">34%</span><p class="k">Lower peak flexion stress at the transitions than a stepped rod, in finite element analysis</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">45%</span><p class="k">More offloading of pedicle screws than a stiffer constant rod, published in Spine Deformity, 2025</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">16%</span><p class="k">Less stress on the upper adjacent vertebra with the Bezier 5.5–5–4.75 mm rod</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the Bezier rod works</span><h2 class="d3">Stiff where it corrects, <em>soft where it lands.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Constant</span><span>Junction</span><span>Stepped</span><span>Bezier</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>One rod, one stiffness.</h2><p>Conventional fixation rods carry a single constant diameter along their full length: the same stiffness where the correction happens as at the top of the construct.</p></article>'+
     '<article class="step"><h2>Load gathers at the junction.</h2><p>The stiff construct ends abruptly against normal anatomy. Stress concentrates at the proximal junction, a risk factor for kyphosis and failure that the surgeon controls through the choice of rod.</p></article>'+
     '<article class="step"><h2>A step is a stress riser.</h2><p>Earlier stepped rods change diameter abruptly. In finite element analysis, flexion stresses were particularly high at the step itself, and the steps restrict where screws can go.</p></article>'+
     '<article class="step"><h2>The Bezier rod tapers.</h2><p>Smooth, continuous Bézier transitions from 6.0 to 4.75 mm give a gradual, predictable stiffness profile: strong across the correction, a soft landing at the junction, with peak transition stresses 34% lower.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A patient-centric era of <em>spinal surgery.</em></h2></div><p data-r>The Bezier Parametric Curve Transition Rod is part of SRI’s Swedge™ system: a four-rod platform housed in a single-screw tulip with a one-step locking cap, designed for deformity and degenerative spine surgery.</p></div>'+
   tiles()+
  '</div></section>'+

  '<section class="sec dark" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">One complete system, <em>open, MIS and reduction.</em></h2></div><p data-r>Implants and instrumentation built around the Swedge™ pedicle screw, for intra-operative versatility and less fiddle factor in the operating room.</p></div>'+
   prods()+
   '<div class="cred">'+
    '<div class="bk"><span class="lab kick" data-r>Intellectual property</span><p class="cr" data-r>'+lst(IP)+'</p></div>'+
    '<div class="bk"><span class="lab kick" data-r>Regulatory</span><p class="cr" data-r>'+lst(REG)+'</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded in 2018, <em>built with surgeons.</em></h2></div><p data-r>Spinal Resources, Inc. is based in Fort Lauderdale, Florida. Our mission: cost-effective patient care with state-of-the-art mechanical and biomechanical products that alleviate pain, expedite recovery and enhance quality of life.</p></div>'+
   '<div class="spl">'+
    '<div class="spl-who"><span class="lab">Founder, President and CEO</span><h3>Bernard M. Bedor</h3><p>More than 16 years in the spinal implant industry. A Bachelor of Science in Embryology, Biology and Sports Medicine from Westfield State University; Yale School of Management; an MBA from the Kellogg School of Management at Northwestern University.</p></div>'+
    quotes()+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>milestones.</em></h2></div><p data-r>Two issued U.S. patents, a universal 510(k) clearance and peer-reviewed biomechanics for the Bezier rod platform.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
/* phones: the pillar band sits below the fold, so it reveals on scroll (enhancement only: the site failsafe shows anything in view) */
function pilReveal(){if(!MOBILE()||RM||!window.ScrollTrigger)return;$$(".pil li:not([data-r])").forEach(function(li){if(li.getBoundingClientRect().top<innerHeight)return;
  gsap.set(li,{opacity:0,y:24});ScrollTrigger.create({trigger:li,start:"top 96%",once:true,onEnter:function(){gsap.to(li,{opacity:1,y:0,duration:.8,ease:"power2.out",clearProps:"transform,opacity"})}})})}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, hospitals and investors</span>'+
   '<h2 class="big split">Match the rod <em>to the patient.</em></h2>'+
   '<p class="sub" data-r>To discover how the Bezier rod and the Swedge™ system can optimize efficiency in your operating room, or to talk about investing in SRI, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to SRI '+ARR+'</a><a class="btn" href="#/technology">See the technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p class="al" data-r>5975 N Federal Highway, Suite 250</p><p class="al" data-r>Fort Lauderdale, FL 33308</p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+19045409049">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>5975 N Federal Highway, Suite 250<br>Fort Lauderdale, FL 33308</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19045409049">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Bezier Parametric Curve rods<br>and the Swedge™ pedicle screw system</div>'+
  '</div><div class="fwm"><img src="logo.png" alt="Spinal Resources Inc" width="492" height="273" loading="lazy" decoding="async"></div>'+
  '<div class="legal"><span class="lab">© 2026 Spinal Resources, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route. #/contact and #/about scroll to their section; a typed or linked #/technology,
   #/products, #/team or #/news scrolls to that section too; nav clicks open the build-out pages (buildout.js) ================= */
var SECS={about:"about",technology:"technology",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Spinal Resources, Inc. — Bezier Parametric Curve spinal rods",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){try{history.replaceState(null,"","#/")}catch(x){}secGo(r.sec,true)},300)})()})();
