/* ================= VIEWS (home only: Products / Technology / OEM / News open build-out pages via _kit/lib/buildout.js;
   Contact and in-page CTAs scroll). Dark and bone grounds alternate: hero (dark, Viamed's own VM-2160 product photograph,
   matted), about (bone, statement + figures), the pulse-oximetry story (dark), products (bone: the range in tiles, the 400-AC
   feature, markets), OEM (dark: three OEM products beside services), news (bone), contact (dark). Content is never hidden at
   rest: reveals only enhance (failsafe in site.js). ================= */
function range(){return '<ul class="vrg">'+RANGE.map(function(r,i){return '<li><span class="vr-n">'+String(i+1).padStart(2,"0")+'</span><h3>'+esc(r[0])+'</h3><p>'+esc(r[1])+'</p></li>'}).join("")+'</ul>'}
function mkts(){return '<div class="vmk"><span class="lab kick" data-r>Markets</span><ul>'+MKT.map(function(m){return '<li data-r>'+esc(m)+'</li>'}).join("")+'</ul></div>'}
function acspec(){return '<dl class="vac-d">'+AC.map(function(a){return '<div><dt>'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'}
function oem(){return '<ol class="voem">'+OEM.map(function(m,i){return '<li><span class="vo-n">'+String(i+1).padStart(2,"0")+'</span><div><h3>'+esc(m[0])+'</h3><p>'+esc(m[1])+'</p></div></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
var ICO={pulse:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4 22h8l3-8 5 16 4-12 3 4h9"/></svg>',
 o2:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M12 12h16v20a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3Z"/><path d="M15 12V7h10v5M17 7V4h6v3M16 20h8M16 25h8"/></svg>',
 temp:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M17 24V8a3 3 0 0 1 6 0v16a6 6 0 1 1-6 0Z"/><path d="M20 15v13M26 10h4M26 15h4M26 20h4"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>Medical products since 1977<span class="nomob"> · Cross Hills, West Yorkshire</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="nw">The sensors behind</span> <em class="nw">the monitor.</em></h1>'+
    '<p class="s" data-r>Viamed develops, makes and distributes medical products for critical care, paramedic and emergency services: pulse oximetry, oxygen sensors, temperature probes and the accessories that connect patients to their monitors.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div>'+
   '</div>'+
   '<span class="lab hcap">VM-2160 SMARTsat handheld pulse oximeter</span>'+
   '<ul class="pil" aria-label="What we make">'+
    '<li class="p1" data-r><span class="pic">'+ICO.pulse+'</span><div><span class="lab">Pulse oximetry</span><p>SMARTsat oximeters, reusable and disposable SpO2 sensors, and OEM boards.</p></div></li>'+
    '<li class="p2" data-r><span class="pic">'+ICO.o2+'</span><div><span class="lab">Oxygen sensors</span><p>Where Viamed began: medical, then automotive and industrial gas sensors.</p></div></li>'+
    '<li class="p3" data-r><span class="pic">'+ICO.temp+'</span><div><span class="lab">Monitoring accessories</span><p>Temperature probes, capnography, ECG, blood pressure and EEG.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="about" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>About Viamed</span>'+
   '<h2 class="txt" id="mani">A privately owned company that develops, produces and distributes innovative medical products, for patient care, paramedics and emergency services, GPs, dental and veterinary surgeries. <em>Every product is <span class="nw">CE certified.</span></em></h2></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1977</span><p class="k">The year Viamed was established</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><p class="k">Markets: medical, emergency, veterinary, automotive, industrial, OEM</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Companies in the Viamed group, with Vandagraph and Vandagraph Sensor Technologies</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3"><span class="nw">How SMARTsat</span> <em class="nw">reads a pulse.</em></h2>'+
    '<p class="st-in">Light, a pulse and a ratio: what happens inside a Viamed finger sensor.</p>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Light</span><span>Pulse</span><span>Saturation</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Light through the finger.</h2><p>The sensor shines red and infrared light through the fingertip. Oxygenated and deoxygenated haemoglobin absorb the two wavelengths differently, and a detector on the other side measures what comes through.</p></article>'+
     '<article class="step"><h2>The pulse in the signal.</h2><p>With every heartbeat, arterial blood swells the tissue and the light dips. SMARTsat’s signal processing finds that pulsing wave, even under very difficult physiological conditions.</p></article>'+
     '<article class="step"><h2>A saturation you can trust.</h2><p>The ratio of the red and infrared pulses gives SpO2. SMARTsat sensors are calibrated across 60–100% SpO2 against CO-oximeter reference measurements, as the ISO standards require.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Everything between</span> <em class="nw">patient and monitor.</em></h2></div><p data-r>Sensors, probes, cables and accessories for the monitors hospitals and ambulance services already use, with an online cross reference to find the right part for your equipment.</p></div>'+
   range()+
   '<div class="vac"><div class="vac-l"><span class="lab kick" data-r>New range · 400-AC Series</span><h3 data-r><span class="nw">Temperature probes</span> <span class="nw">for the autoclave</span></h3><p data-r>Accurate body-surface and core temperature for every patient group, robust yet flexible for secure placement, and sterilised in the steam autoclave to minimise the risk of cross-infection.</p></div>'+acspec()+'</div>'+
   mkts()+
  '</div></section>'+

  '<section class="sec dark" id="oem" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>OEM</span><h2 class="d2 split"><span class="nw">Our technology,</span> <em class="nw">inside your device.</em></h2></div><p data-r>SMARTsat pulse oximetry, flow and temperature boards and a fast oxygen sensor, for manufacturers who need high-end measurement in their own equipment.</p></div>'+
   '<div class="voem-g">'+oem()+
   '<div class="vsvc"><span class="lab kick" data-r>Services</span><ul>'+SVC.map(function(s){return '<li data-r>'+esc(s)+'</li>'}).join("")+'</ul><p data-r>Spare parts and technical support for the equipment we supply, from Ceratherm radiant warmers to Teledyne analysers.</p></div></div>'+
  '</div></section>'+

  '<section class="sec light" id="news" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">From Cross Hills</span> <em class="nw">to Düsseldorf.</em></h2></div><p data-r>Trade fairs and new product ranges.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Hospitals, distributors and OEM partners</span>'+
   '<h2 class="big split"><span class="nw">Let’s find</span> <em class="nw">the right sensor.</em></h2>'+
   '<p class="sub" data-r>Write to us about our products, about distribution, or about building SMARTsat into your own equipment.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to Viamed '+ARR+'</a><a class="btn" href="'+WEB+'" target="_blank" rel="noopener">Visit the shop</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>15 Station Road, Cross Hills<br>Keighley, West Yorkshire BD20 7DT</p></div>'+
    '<div><span class="lab" data-r>Email and phone</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+441535634542">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Registered</span><p data-r>Viamed Ltd, England<br>No. 01291765</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Viamed Ltd<br>15 Station Road, Cross Hills<br>Keighley BD20 7DT</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/oem">OEM</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+441535634542">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Patient-monitoring products<br>since 1977</div>'+
  '</div><div class="fwm"><img src="wm-w.png" alt="Viamed" width="1708" height="342" loading="lazy"></div>'+
  '<div class="legal"><span class="lab">© 2026 Viamed Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route. #/contact and #/about scroll to their section; a typed or linked #/products, #/technology, #/manufacturing or #/news (the nav items) opens that item's build-out page, as a nav click does (buildout.js) ================= */
var BOK={};/* typed or linked hashes scroll to their section; nav clicks open the build-out pages (buildout.js) */
function boOpen(k){try{if(window.BuildOut&&BuildOut.open){BuildOut.open(k);return true}}catch(x){}return false}
var SECS={about:"about",products:"products",technology:"story",oem:"oem",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Viamed — patient-monitoring sensors and medical products since 1977",x:"Home"};
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
