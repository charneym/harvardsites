/* ================= VIEWS (home only: Products / Technology / Company open build-out pages via _kit/lib/buildout.js; Contact
   and in-page CTAs scroll). Dark and bone grounds alternate: hero (dark, their own Vibra 3.0 photograph), about (bone,
   statement + figures), the focal-vibration story (dark), products (bone: two product families, two photographs of the
   devices in use, four fields of application), company (dark: the process and the certifications), contact (dark band).
   Content is never hidden at rest: reveals only enhance (failsafe in site.js). ================= */
function prods(g){return '<ul class="dcat">'+PROD.filter(function(p){return p[0]===g}).map(function(c){return '<li><a class="dc-a" href="'+c[3]+'" target="_blank" rel="noopener"><span class="dc-b">'+esc(c[1])+'</span><span class="dc-m">'+esc(c[2])+'</span></a></li>'}).join("")+'</ul>'}
function apps(){return '<div class="dapps">'+APPS.map(function(a){return '<div class="da"><span class="lab kick">'+esc(a[0])+'</span><p>'+esc(a[1])+'</p></div>'}).join("")+'</div>'}
function steps(){return '<ol class="dmfg">'+STEPS.map(function(m,i){return '<li><span class="dmf-n">'+String(i+1).padStart(2,"0")+'</span><div><h3>'+esc(m[0])+'</h3><p>'+esc(m[1])+'</p></div></li>'}).join("")+'</ol>'}
function certs(){return '<ul class="dcert">'+CERTS.map(function(c){return '<li><span class="dce-n">'+esc(c[0])+'</span><span class="lab">'+esc(c[1])+'</span></li>'}).join("")+'</ul>'}
var ICO={vib:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M17 6h6v14h-6z"/><path d="M20 20v6"/><path d="M11 30c3 3 15 3 18 0M7 34c5 4 21 4 26 0"/></svg>',
 neu:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M2 22h8l3-9 5 18 5-22 4 13h11"/></svg>',
 cert:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 4 33 9v10c0 8-6 14-13 17C13 33 7 27 7 19V9Z"/><path d="M14 20l4 4 8-9"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>Non-invasive rehabilitation devices<span class="eyd"> · </span><span class="nw eyp">Gravesano, Switzerland</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="nw">Science first,</span> <em class="nw">Swiss made.</em></h1>'+
    '<p class="s" data-r>AD Swiss MedTech develops, designs and manufactures medical devices for rehabilitation: Vibra 3.0 focal vibration and the Ponos and Monos neuromodulation systems, for physiotherapists, sports physicians and aesthetic doctors.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div>'+
   '</div>'+
   '<ul class="pil" aria-label="What we make">'+
    '<li class="p1" data-r><span class="pic">'+ICO.vib+'</span><div><span class="lab">Focal vibration</span><p>Vibra 3.0 for physiotherapy, sport and aesthetic medicine, and the portable Vibra GO.</p></div></li>'+
    '<li class="p2" data-r><span class="pic">'+ICO.neu+'</span><div><span class="lab">Neuromodulation</span><p>Ponos and Monos, for pain management and neuro-rehabilitation.</p></div></li>'+
    '<li class="p3" data-r><span class="pic">'+ICO.cert+'</span><div><span class="lab">Certified</span><p>Medical devices under the EU MDR, from an ISO 13485 quality system.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="about" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>About us</span>'+
   '<h2 class="txt" id="mani">We are engineers, technicians and managers from the medical, orthopaedic and aesthetic sectors, who joined forces to build patented rehabilitation devices with real therapeutic value, <em><span class="nw">and an eye</span> <span class="nw">for every detail.</span></em></h2></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">ISO 13485</span><p class="k">Certified quality management system for every device we develop and build</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">CE 0476</span><p class="k">Medical devices certified under the EU MDR and the MDD</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6<small>channels</small></span><p class="k">Independent outputs on Ponos, our pain neuromodulation system</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3"><span class="nw">A vibration,</span> <em class="nw">a reflex.</em></h2>'+
    '<p class="st-in">How Vibra 3.0 focal vibration works on a muscle, in three steps.</p>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Vibrate</span><span>Sense</span><span>Respond</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The vibration.</h2><p>A small applicator rests on the skin over the target muscle and delivers a focal, selective vibration, non-invasively, through the skin.</p></article>'+
     '<article class="step"><h2>The spindle.</h2><p>Inside the muscle, the vibration excites the Ia fibres of the neuromuscular spindles, the sensors that report muscle length to the spinal cord.</p></article>'+
     '<article class="step"><h2>The reflex.</h2><p>The spinal cord answers through the motor nerve: muscle tone rises locally, the tonic vibratory reflex. In neurological patients the same pathway helps reduce spasticity.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Effective tools</span> <em class="nw">for specialists.</em></h2></div><p data-r>Each instrument comes with its own protocols, developed for its field of application and therapeutic goals, and our doctors and therapists train every customer to use them.</p></div>'+
   '<div class="dcols"><div class="dcol"><div class="dcol-h"><span class="lab kick" data-r>Focal vibration</span></div>'+prods("Vib")+'</div>'+
   '<div class="dcol"><div class="dcol-h"><span class="lab kick" data-r>Neuromodulation and beauty</span></div>'+prods("Neu")+'</div></div>'+
   '<div class="dph">'+
    '<figure class="dpf"><img src="ponos.webp" alt="A therapist sets a programme on the Ponos touch screen" width="1400" height="933" loading="lazy" decoding="async"><figcaption class="lab">Ponos: therapies set on a multi-level touch screen</figcaption></figure>'+
    '<figure class="dpf"><img src="monos.webp" alt="A therapist treats a patient’s knee with Monos" width="1400" height="933" loading="lazy" decoding="async"><figcaption class="lab">Monos: neuro-oriented therapy, even in small spaces</figcaption></figure>'+
   '</div>'+
   '<div class="dmesh-h"><div><span class="lab kick" data-r>Fields of application</span><h3 data-r><span class="nw">Where our devices</span> <span class="nw">are used</span></h3></div><p data-r>Our products are cutting-edge technologies for the medical and aesthetic markets, used by specialists across rehabilitation.</p></div>'+
   apps()+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">From concept</span> <em class="nw">to the clinic.</em></h2></div><p data-r>Leading universities and research institutes have validated our work, and continue to develop new therapies and technologies with us. We take care of every step, including scientific research, training and marketing.</p></div>'+
   '<div class="dmf-g"><div class="dmf-r">'+steps()+'</div>'+
   '<div class="dce-w"><span class="lab kick" data-r>Quality and certification</span>'+certs()+
   '<p class="dmask" data-r>We produce under our own brand or for third parties. In November 2026 we exhibited at <a class="ul" href="https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3072196" target="_blank" rel="noopener">MEDICA 2026 in Düsseldorf</a>.</p></div></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Physiotherapists, sports and aesthetic physicians, distributors</span>'+
   '<h2 class="big split"><span class="nw">Bring Vibra 3.0</span> <em class="nw">to your practice.</em></h2>'+
   '<p class="sub" data-r>Ask us about a device, a training course or a distribution partnership, and our team in Gravesano will reply.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span>AD Swiss MedTech SA</span><br><span>Via Grumo 10</span><br><span>6929 Gravesano, Switzerland</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>AD Swiss MedTech SA<br>Via Grumo 10<br>6929 Gravesano, Switzerland</div>'+
   '<div class="c"><span class="lab">Products</span>Vibra 3.0 and Vibra GO<br>Ponos and Monos<br>Vibra B and Vibra TH</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+TELH+'">'+TEL+'</a></div>'+
  '</div>__ALOCK3__'+
  '<div class="legal"><span class="lab">© 2026 AD Swiss MedTech SA</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route. #/contact and #/about scroll to their section; a typed or linked #/products, #/technology or #/company (the nav items) opens that item's build-out page, as a nav click does (buildout.js) ================= */
var BOK={};/* typed or linked hashes scroll to their section; nav clicks open the build-out pages (buildout.js) */
function boOpen(k){try{if(window.BuildOut&&BuildOut.open){BuildOut.open(k);return true}}catch(x){}return false}
var SECS={about:"about",products:"products",technology:"story",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"AD Swiss MedTech — non-invasive rehabilitation devices, Swiss made",x:"Home"};
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
