/* ================= VIEWS (home only: Products / Technology / Applications open build-out pages via _kit/lib/buildout.js;
   Contact and in-page CTAs scroll). Grounds alternate: hero (ink, PriTel's own photograph of its femtosecond fiber laser), about
   (bone, statement + figures), the inside-a-fiber-laser story (ink), products (white, their own product-family photograph and the
   eight product lines), applications (ink), contact (bone). Every fact from pritel.com or the World of QUANTUM 2025 exhibitor
   profile. Content is never hidden at rest: reveals only enhance (failsafe in site.js). ================= */
function lines(){return '<ul class="prl">'+LINES.map(function(l){return '<li><span class="prl-c">'+esc(l[0])+'</span><div class="prl-n"><h3>'+esc(l[1])+'</h3><p>'+esc(l[2])+'</p></div><span class="prl-f">'+esc(l[3])+'</span><a class="prl-k lab" href="'+WEB+l[4]+'" target="_blank" rel="noopener">Specifications '+ARR+'</a></li>'}).join("")+'</ul>'}
function apps(){return '<ul class="pap">'+APPS.map(function(a,i){return '<li><span class="pap-n">'+String(i+1).padStart(2,"0")+'</span><h3>'+esc(a[0])+'</h3><p>'+esc(a[1])+'</p></li>'}).join("")+'</ul>'}
var ICO={laser:'<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="15" cy="20" r="9"/><path d="M24 20h12M30 16l4 4-4 4"/></svg>',
 amp:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M8 10v20l22-10Z"/><path d="M2 20h6M30 20h8"/></svg>',
 pulse:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M2 32h8c3 0 4-24 6-24s3 24 6 24h16"/><path d="M26 32c1 0 1.5-10 2.5-10s1.5 10 2.5 10"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>Fiber lasers and amplifiers<span class="nomob"> · Naperville, Illinois</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="nw">Femtosecond pulses,</span> <em class="nw">at the turn of a key.</em></h1>'+
    '<p class="s" data-r>PriTel designs and builds fiber lasers, optical fiber amplifiers and pulse compressors at 1550, 1060 and 775 nm, custom-designed for laboratories worldwide since 1995.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div>'+
   '</div>'+
   '<ul class="pil" aria-label="What we make">'+
    '<li class="p1" data-r><span class="pic">'+ICO.laser+'</span><div><span class="lab">Fiber lasers</span><p>Passively and actively mode-locked, from 10 ps down to 150 fs, up to 40 GHz.</p></div></li>'+
    '<li class="p2" data-r><span class="pic">'+ICO.amp+'</span><div><span class="lab">Optical fiber amplifiers</span><p>Low-noise, high-power, polarization-maintaining and sub-picosecond.</p></div></li>'+
    '<li class="p3" data-r><span class="pic">'+ICO.pulse+'</span><div><span class="lab">Pulse shaping</span><p>Compressors, clock multipliers, pulse pickers and harmonic generators.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="about" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>About PriTel</span>'+
   '<h2 class="txt" id="mani">Specializing in RF and optical technologies, scientists at PriTel design and build actively and passively mode-locked fiberoptic lasers that <em>meet the most demanding <span class="nw">technical specifications.</span></em></h2>'+
   '<p class="vis-f" data-r>Founded in 1995 by Dr. K.V. Reddy, an expert in fiberoptic lasers and amplifiers, in Naperville, 35 miles west of Chicago on the East-West Technology Corridor.</p></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">150 fs</span><p class="k">Shortest pulse width of the FFL fiber lasers</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40 GHz</span><p class="k">Top repetition rate of the Ultrafast Optical Clock</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1995</span><p class="k">Founded in Naperville, Illinois</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3"><span class="nw">Inside a</span> <em class="nw">fiber laser.</em></h2>'+
    '<p class="st-in">How a PriTel FFL makes its pulses, with no external clock and no alignment.</p>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Gain</span><span>Pulse</span><span>Width</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A loop of glowing fiber.</h2><p>A 980 nm diode laser pumps a loop of erbium-doped fiber, which amplifies light around 1550 nm. All the optics are fiber-based, sealed in the box: nothing to align.</p></article>'+
     '<article class="step"><h2>One pulse, circling.</h2><p>An InGaAs saturable absorber mode-locks the loop into a single soliton pulse. Each round trip lets a fraction out, so the repetition rate is set simply by the pulse’s transit time through the cavity.</p></article>'+
     '<article class="step"><h2>Width, by cartridge.</h2><p>In a soliton laser the pulse width follows the spectral bandwidth. Swap PriTel’s self-aligning Quick-Change filter cartridge and the same laser runs at 10 ps, 5 ps, 2 ps, 600 fs or 150 fs.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light pwhite" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Eight product lines,</span> <em class="nw">built to order.</em></h2></div><p data-r>Each product is engineered for stability and reliability, and can be customized to your specification: pulse width, repetition rate, wavelength, power and connectors.</p></div>'+
   '<figure class="psuite" data-r><img src="suite.webp" alt="PriTel instruments: an optical clock multiplier, a femtosecond fiber laser, an ultrafast optical clock, an optical fiber amplifier and a FEMTOPULSE pulse compressor" width="2000" height="656" loading="lazy" decoding="async"><figcaption class="lab">Clock multiplier, fiber laser, optical clock, amplifier and pulse compressor</figcaption></figure>'+
   lines()+
  '</div></section>'+

  '<section class="sec dark" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split"><span class="nw">Telecom, imaging</span> <em class="nw">and quantum.</em></h2></div><p data-r>Laboratories use PriTel sources wherever short, stable pulses at telecom wavelengths matter.</p></div>'+
   apps()+
   '<a class="pq" href="'+QUANT+'" target="_blank" rel="noopener" data-r><span class="lab">June 2025 · Munich</span><span class="pq-t">PriTel exhibited its femtosecond lasers for entangled photon pairs at World of QUANTUM 2025, alongside LASER World of PHOTONICS</span><span class="lab pq-s">Exhibitor profile '+ARR+'</span></a>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Research labs, OEMs and integrators</span>'+
   '<h2 class="big split"><span class="nw">Tell us the pulse</span> <em class="nw">you need.</em></h2>'+
   '<p class="sub" data-r>Write to us for specifications and pricing, or to custom-design a laser, amplifier or pulse compressor for your experiment.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to PriTel '+ARR+'</a><a class="btn" href="tel:+16309832200">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>PriTel, Inc., P.O. Box 4025<br>Naperville, IL 60567, USA</p></div>'+
    '<div><span class="lab" data-r>Email, phone and fax</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+16309832200">'+TEL+'</a><br>Fax +1 630 983 2260</p></div>'+
    '<div><span class="lab" data-r>Representatives</span><p data-r>'+REPS.map(function(r){return esc(r[0])+': '+esc(r[1])}).join("<br>")+'</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>PriTel, Inc., P.O. Box 4025<br>Naperville, IL 60567, USA</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/contact">Contact</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+16309832200">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Fiber lasers and amplifiers<br>at 1550, 1060 and 775 nm</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 96" aria-hidden="true"><text x="320" y="80" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:700;font-size:112px;letter-spacing:-.01em"><tspan fill="#f4f5fb">PriTel</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 PriTel, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route. #/contact and #/about scroll to their section; a typed or linked #/products, #/technology or #/applications (the nav items) opens that item's build-out page, as a nav click does (buildout.js) ================= */
var BOK={};/* typed or linked hashes scroll to their section; nav clicks open the build-out pages (buildout.js) */
function boOpen(k){try{if(window.BuildOut&&BuildOut.open){BuildOut.open(k);return true}}catch(x){}return false}
var SECS={about:"about",products:"products",technology:"story",applications:"applications",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"PriTel — femtosecond fiber lasers and optical fiber amplifiers, Naperville, Illinois",x:"Home"};
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
