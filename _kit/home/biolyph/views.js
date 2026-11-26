/* ================= VIEWS (home only: Services / Process / LyoSpheres / Company open build-out pages via _kit/lib/buildout.js;
   Contact and in-page CTAs scroll). Dark and bone grounds alternate: hero (dark, the LyoSphere tube render), about (bone,
   statement + figures), the drop-to-LyoSphere story (dark), services (bone: two service columns and the materials line),
   LyoSpheres (dark: the two product lines, devices and figures), company (bone: founder and client voices), contact (dark).
   Content is never hidden at rest: reveals only enhance (failsafe in site.js). All copy from biolyph.com. ================= */
function prods(g){return '<ul class="dcat">'+PROD.filter(function(p){return g.indexOf(p[0])>=0}).map(function(c){return '<li><span class="dc-b">'+esc(c[1])+'</span><span class="dc-m">'+esc(c[2])+'</span></li>'}).join("")+'</ul>'}
function mats(){return '<ul class="bmat" data-r>'+MATS.map(function(m){return '<li>'+esc(m)+'</li>'}).join("")+'</ul>'}
function sites(){return '<ol class="dmfg">'+SITES.map(function(m,i){return '<li><span class="dmf-n">'+String(i+1).padStart(2,"0")+'</span><div><span class="lab dmf-k">'+esc(m[1])+'</span><h3>'+esc(m[0])+'</h3><p>'+esc(m[2])+'</p></div></li>'}).join("")+'</ol>'}
function certs(){return '<ul class="dcert">'+CERTS.map(function(c){return '<li><span class="dce-n">'+esc(c[0])+'</span><span class="lab">'+esc(c[1])+'</span></li>'}).join("")+'</ul>'}
function quotes(){return '<div class="bq">'+QUOTES.map(function(q){return '<figure data-r><blockquote>“'+esc(q[0])+'”</blockquote><figcaption class="lab">'+esc(q[1])+'</figcaption></figure>'}).join("")+'</div>'}
var ICO={stab:'<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="11"/><path d="M20 4v4M20 32v4M4 20h4M32 20h4M8.7 8.7l2.8 2.8M28.5 28.5l2.8 2.8M8.7 31.3l2.8-2.8M28.5 11.5l2.8-2.8"/></svg>',
 drop:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 5C14 13 10 18 10 24a10 10 0 0 0 20 0c0-6-4-11-10-19Z"/><path d="M15 25a5 5 0 0 0 5 5"/></svg>',
 cold:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M8 14h20v18H8Z"/><path d="M28 19h5l3 5v8h-8"/><circle cx="13" cy="33" r="3"/><circle cx="31" cy="33" r="3"/><path d="M14 20l8 8M22 20l-8 8"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>Lyophilization services<span class="eb-x"> · Chaska, Minnesota</span> · <span class="nw">since 1993</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="nw">Unstable reagents,</span> <span class="nw">made stable</span> <em><span class="nw">as LyoSpheres.</span></em></h1>'+
    '<p class="s" data-r>BIOLYPH converts proteins, antibodies, enzymes and other reagents for Life Science, IVD and RUO manufacturers into LyoSpheres: precise, durable lyophilized microliter spheres, packaged inside your devices.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/about">What we do '+ARR+'</a><a class="btn" href="#/contact">Contact</a></div>'+
   '</div>'+
   '<ul class="pil" aria-label="Benefits">'+
    '<li class="p1" data-r><span class="pic">'+ICO.stab+'</span><div><span class="lab">Room temperature</span><p>Reagent stability without refrigeration, and incompatible reagents side by side.</p></div></li>'+
    '<li class="p2" data-r><span class="pic">'+ICO.drop+'</span><div><span class="lab">Instant rehydration</span><p>LyoSpheres rehydrate and reactivate the moment liquid reaches them.</p></div></li>'+
    '<li class="p3" data-r><span class="pic">'+ICO.cold+'</span><div><span class="lab">No cold chain</span><p>Faster time to market, reduced costs and capacity without overhead.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="about" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>About BIOLYPH</span>'+
   '<h2 class="txt" id="mani"><span class="nw">A dedicated lyophilization</span> <span class="nw">service provider.</span> <em><span class="nw">We dispense, lyophilize</span> <span class="nw">and package</span> <span class="nw">our Clients’ reagents</span> <span class="nw">to optimize their use</span> <span class="nw">and performance.</span></em></h2></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">500<small>nL</small></span><p class="k">Smallest aliquot we dispense, up to 300 µL per LyoSphere</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1M+</span><p class="k">LyoSpheres in a single batch, from batches as small as one</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;3<small>% RH</small></span><p class="k">Relative humidity in our specialized packaging suites</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Process</span><h2 class="d3"><span class="nw">From a drop</span> <em class="nw">to a device.</em></h2>'+
    '<p class="st-in">How a liquid reagent becomes a shelf-stable LyoSphere.</p>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Dispense</span><span>Lyophilize</span><span>Package</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Dispense.</h2><p>Your reagent, in an excipient formulation that protects it through processing, is dispensed in precise aliquots from 500 nL to 300 µL.</p></article>'+
     '<article class="step"><h2>Lyophilize.</h2><p>Each aliquot is frozen and freeze-dried in a cycle of temperature, pressure and time developed for your reagent and volume, leaving a precise, durable sphere.</p></article>'+
     '<article class="step"><h2>Package.</h2><p>In suites held below 3% relative humidity, LyoSpheres go straight into your tubes, strips, plates or proprietary device, ready for instant rehydration.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split"><span class="nw">From formulation</span> <em class="nw">to the finished device.</em></h2></div><p data-r>Formulation, optimization, dispensing, lyophilization, packaging and documentation services for your IVD, RUO and Life Science products.</p></div>'+
   '<div class="dcols"><div class="dcol"><div class="dcol-h"><span class="lab kick" data-r>Formulation and process</span><span class="lab dn" data-r>04</span></div>'+prods(["Form"])+'</div>'+
   '<div class="dcol"><div class="dcol-h"><span class="lab kick" data-r>Production and quality</span><span class="lab dn" data-r>04</span></div>'+prods(["Prod"])+'</div></div>'+
   '<div class="bmat-w"><span class="lab kick" data-r>Materials stabilized as LyoSpheres</span>'+mats()+'</div>'+
  '</div></section>'+

  '<section class="sec dark" id="lyospheres" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>LyoSpheres</span><h2 class="d2 split"><span class="nw">A new shape for</span> <em class="nw">lyophilized reagents.</em></h2></div><p data-r>BIOLYPH redefined the lyophilization paradigm with LyoSpheres, expanding what reagents, cocktails and devices can do.</p></div>'+
   '<div class="dmf-g"><div class="dmf-r">'+sites()+'</div>'+
   '<div class="dce-w"><span class="lab kick" data-r>Proven at scale</span>'+certs()+
   '<p class="dmask" data-r>LyoSpheres are packaged inside '+esc(DEVS)+'.</p></div></div>'+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Three decades</span> <em class="nw">of lyophilization.</em></h2></div><p data-r>We listen, ask questions and learn about your needs to determine how BIOLYPH can best meet them.</p></div>'+
   '<div class="bfd">'+
    '<div class="bfd-p"><span class="lab kick" data-r>Founder</span><h3 data-r>Timothy Pearcy</h3>'+
     '<p data-r>A seasoned entrepreneur, Timothy has developed advanced lyophilization technology for more than 30 years. In 1984 he founded Resource Processing Systems, building microwave-energy continuous batch lyophilizers for complex pharmaceutical compounds. In 1993 he founded BIOLYPH and created LyoSpheres for IVD and RUO manufacturers.</p>'+
     '<p data-r>Today he leads the development of new production, processing and packaging technology, including the ReActivator unit-of-use device.</p></div>'+
    '<div class="bfd-q"><span class="lab kick" data-r>What our Clients say</span>'+quotes()+'</div>'+
   '</div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Life Science, IVD and RUO reagent manufacturers</span>'+
   '<h2 class="big split"><span class="nw">Evaluate BIOLYPH</span> <em><span class="nw">for yourself.</span></em></h2>'+
   '<p class="sub" data-r>Tell us about your reagent and device. We start with a Processing Requirements Profile and can arrange a proof-of-principle sample.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="'+TELH+'">Call</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>BIOLYPH LLC, 4275 Norex Drive,</span><br><span>Chaska, MN 55318, USA</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="'+TOLLH+'">'+TOLL+'</a> <span class="cfree">toll free</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>BIOLYPH LLC<br>4275 Norex Drive<br>Chaska, MN 55318</div>'+
   '<div class="c"><span class="lab">What we make</span>LyoSpheres<br>ReActivator delivery system</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/process">Process</a><br><a class="ul" href="#/lyospheres">LyoSpheres</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+TELH+'">'+TEL+'</a></div>'+
  '</div>__LMARK3__'+
  '<div class="legal"><span class="lab">© 2026 BIOLYPH LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route. #/contact and #/about scroll to their section; a typed or linked #/services, #/process, #/lyospheres or #/company (the nav items) opens that item's build-out page, as a nav click does (buildout.js) ================= */
var BOK={};/* typed or linked hashes scroll to their section; nav clicks open the build-out pages (buildout.js) */
function boOpen(k){try{if(window.BuildOut&&BuildOut.open){BuildOut.open(k);return true}}catch(x){}return false}
var SECS={about:"about",services:"services",process:"story",lyospheres:"lyospheres",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"BIOLYPH — Innovative Lyophilization Services, LyoSpheres for IVD and RUO reagents",x:"Home"};
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
