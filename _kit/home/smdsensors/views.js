/* ================= VIEWS (home only: Products / Technology / Facilities / News open build-out pages via _kit/lib/buildout.js;
   Contact and in-page CTAs scroll). Dark and bone grounds alternate: hero (dark, the load-cell render), about (bone, statement +
   figures), the force-to-signal story (dark), products (bone: nine product families in two columns, four figures, three
   markets), facilities (dark: the two sites and the certifications), news (bone), contact (dark). Content is never hidden at
   rest: reveals only enhance (failsafe in site.js). ================= */
function prods(g){return '<ul class="dcat">'+PROD.filter(function(p){return g.indexOf(p[0])>=0}).map(function(c){return '<li><span class="dc-b">'+esc(c[1])+'</span><span class="dc-m">'+esc(c[2])+'</span></li>'}).join("")+'</ul>'}
function caps(){return '<div class="dmesh">'+CAPS.map(function(m){
  return '<div class="dm"><span class="dm-v">'+esc(m[0])+'<small>'+esc(m[1])+'</small></span><h3>'+esc(m[2])+'</h3><p class="dm-use">'+esc(m[3])+'</p></div>'}).join("")+'</div>'}
function apps(){return '<div class="dapps">'+APPS.map(function(a){return '<div class="da"><span class="lab kick">'+esc(a[0])+'</span><p>'+esc(a[1])+'</p></div>'}).join("")+'</div>'}
function sites(){return '<ol class="dmfg">'+SITES.map(function(m,i){return '<li><span class="dmf-n">'+String(i+1).padStart(2,"0")+'</span><div><span class="lab dmf-k">'+esc(m[1])+'</span><h3>'+esc(m[0])+'</h3><p>'+esc(m[2])+'</p></div></li>'}).join("")+'</ol>'}
function certs(){return '<ul class="dcert">'+CERTS.map(function(c){return '<li><span class="dce-n">'+esc(c[0])+'</span><span class="lab">'+esc(c[1])+'</span></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
var ICO={force:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4 22h32v8H4Z"/><path d="M14 26a3 3 0 1 0 0 .01M26 26a3 3 0 1 0 0 .01"/><path d="M30 6v11M26 13l4 4 4-4"/></svg>',
 drop:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4 14h32M4 26h32"/><circle cx="15" cy="20" r="3"/><circle cx="25" cy="20" r="2"/><path d="M20 6v4M20 30v4"/></svg>',
 level:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M8 6v28h24V6"/><path d="M8 20c4-2 8 2 12 0s8-2 12 0"/><path d="M18 14h4v10h-4Z"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>Thin-film sensors · <span class="nw">Connecticut and Suffolk</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="nw">Sensors you can trust,</span> <em class="nw">at the heart</em> <em class="nw">of the device.</em></h1>'+
    '<p class="s" data-r>Strain Measurement Devices designs and makes miniature load cells, pressure sensors, ultrasonic bubble sensors and liquid level sensors for medical, industrial and aerospace manufacturers.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div>'+
   '</div>'+
   '<ul class="pil" aria-label="What we make">'+
    '<li class="p1" data-r><span class="pic">'+ICO.force+'</span><div><span class="lab">Force and pressure</span><p>Thin-film load cells and pressure sensors, from milligrams to 5000 kg.</p></div></li>'+
    '<li class="p2" data-r><span class="pic">'+ICO.drop+'</span><div><span class="lab">Medical fluids</span><p>Ultrasonic air-in-line, occlusion and noninvasive flow sensing.</p></div></li>'+
    '<li class="p3" data-r><span class="pic">'+ICO.level+'</span><div><span class="lab">Liquid level</span><p>Float switches, optical and capacitive level sensors.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="about" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>About SMD Sensors</span>'+
   '<h2 class="txt" id="mani">A noninvasive flow sensor for a medical device, a rugged pressure sensor for oil and gas, a miniature load cell for aerospace: our customers need the utmost confidence in the sensors <em>they embed in the heart <span class="nw">of their devices.</span></em></h2></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1979</span><p class="k">SMD Ltd founded in England to develop sputtered thin-film force sensors</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">90%</span><p class="k">Of our products, approximately, are custom designed for OEMs</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Facilities, in Wallingford, Connecticut and Chedburgh, England</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3"><span class="nw">From force</span> <em class="nw">to signal.</em></h2>'+
    '<p class="st-in">How a thin-film load cell turns a load into a reading.</p>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Load</span><span>Film</span><span>Bridge</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The load.</h2><p>A force bends the machined steel body by a tiny amount. Strain gauges on its surface measure that change, in tension on one side and compression on the other.</p></article>'+
     '<article class="step"><h2>The film.</h2><p>Our gauges are sputtered onto the element as a thin film, not glued on as foil: exceptional long-term stability, temperature coefficients under 5 ppm and full bridges up to 10,000 ohms for low power.</p></article>'+
     '<article class="step"><h2>The bridge.</h2><p>Four gauges in a Wheatstone bridge turn strain into a signal. Our signal conditioners deliver it as 4–20 mA, 0–5 VDC or I²C, with USB and Bluetooth options.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Force, pressure</span> <em class="nw">and fluid, measured.</em></h2></div><p data-r>Standard ranges and fully custom designs, built on thin-film and ultrasonic technology. Approximately 90% of what we make is designed to an OEM’s own needs and cost targets.</p></div>'+
   '<div class="dcols"><div class="dcol"><div class="dcol-h"><span class="lab kick" data-r>Force and pressure</span><span class="lab dn" data-r>04</span></div>'+prods(["Force"])+'</div>'+
   '<div class="dcol"><div class="dcol-h"><span class="lab kick" data-r>Fluid and custom</span><span class="lab dn" data-r>05</span></div>'+prods(["Fluid","Custom"])+'</div></div>'+
   '<div class="dmesh-h"><div><span class="lab kick" data-r>Miniature, precise</span><h3 data-r><span class="nw">Small packages,</span> <span class="nw">exacting numbers</span></h3></div><p data-r>High-precision devices that withstand extended service, high temperatures and harsh environments, and hybrid sensors that combine bubble, pressure, occlusion, flow, temperature, density and position sensing in one sub-assembly.</p></div>'+
   caps()+
   apps()+
  '</div></section>'+

  '<section class="sec dark" id="facilities" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Facilities</span><h2 class="d2 split"><span class="nw">Two sites,</span> <em class="nw">one standard.</em></h2></div><p data-r>Engineering, thin-film processing, manufacturing and technical sales in Connecticut and Suffolk, with calibration, testing and rapid prototyping in house.</p></div>'+
   '<div class="dmf-g"><div class="dmf-r">'+sites()+'</div>'+
   '<div class="dce-w"><span class="lab kick" data-r>Approvals and certifications</span>'+certs()+
   '<p class="dmask" data-r>Quality systems supported by top management and followed at every level of the company, in the US and the UK.</p></div></div>'+
  '</div></section>'+

  '<section class="sec light" id="news" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">From Chedburgh</span> <em class="nw">to Düsseldorf.</em></h2></div><p data-r>At MEDICA 2026, and from our engineers’ notes on measuring force.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Medical, laboratory and industrial OEMs</span>'+
   '<h2 class="big split"><span class="nw">Let’s discuss your</span> <em class="nw">next challenge.</em></h2>'+
   '<p class="sub" data-r>Tell us about your application, standard or custom, and SMD will go to work for you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to SMD Sensors '+ARR+'</a><a class="btn" href="tel:+12032945800">Call the US office</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>USA</span><p data-r>55 Barnes Industrial Park N<br>Wallingford, CT 06492<br><a class="ul" href="tel:+12032945800">'+TEL_US+'</a></p></div>'+
    '<div><span class="lab" data-r>Europe</span><p data-r>Bury Road, Chedburgh<br>Bury St Edmunds IP29 4UQ, England<br><a class="ul" href="tel:+441284852000">'+TEL_UK+'</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">USA</span>Strain Measurement Devices, Inc.<br>55 Barnes Industrial Park N<br>Wallingford, CT 06492</div>'+
   '<div class="c"><span class="lab">Europe</span>Strain Measurement Devices Ltd<br>Bury Road, Chedburgh<br>Bury St Edmunds IP29 4UQ</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/facilities">Facilities</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+12032945800">'+TEL_US+'</a><br><a class="ul" href="tel:+441284852000">'+TEL_UK+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 96" aria-hidden="true"><text x="320" y="78" text-anchor="middle" style="font-family:\'Roboto Condensed\',system-ui,sans-serif;font-weight:700;font-size:112px;letter-spacing:.01em"><tspan fill="#f3f5f9">SMD SENSORS</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Strain Measurement Devices</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route. #/contact and #/about scroll to their section; a typed or linked #/products, #/technology, #/facilities or #/news (the nav items) opens that item's build-out page, as a nav click does (buildout.js) ================= */
var BOK={};/* typed or linked hashes scroll to their section; nav clicks open the build-out pages (buildout.js) */
function boOpen(k){try{if(window.BuildOut&&BuildOut.open){BuildOut.open(k);return true}}catch(x){}return false}
var SECS={about:"about",products:"products",technology:"story",facilities:"facilities",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Strain Measurement Devices — thin-film force, pressure and fluid sensors",x:"Home"};
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
