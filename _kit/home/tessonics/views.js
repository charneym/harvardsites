/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function fieldRows(){return '<div class="plat">'+FIELDS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function prodRows(){return '<ul class="pfr path">'+PRODUCTS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' on tessonics.com">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function group(){var gs=[],by={};GROUP.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function cust(){return '<p class="inv" data-r>'+CUST.map(function(n,i){return (i?'<b aria-hidden="true">·</b>':'')+'<span>'+esc(n)+'</span>'}).join("")+'</p>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Ultrasonic imaging<span class="nomob"> · Windsor, Ontario</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Quality control</span><span class="l">through ultrasonic</span><span class="l"><em>imaging.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Tessonics designs and builds ultrasonic technologies for industrial and medical applications: matrix-array instruments that image the inside of every spot weld, and 3D ultrasound imaging of the brain.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/technology">How it works</a></div></div>'+
   '<span class="lab cap">Robotic car-body line</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Since 2003</span>'+
   '<h2 class="txt" id="mani">A spot weld keeps its quality hidden inside the metal, where no camera can look. <b class="w0">Tessonics images the weld from the inside with ultrasound, on the shop floor and in real time,</b> <em>without destroying a single part.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2003</span><span class="k">Founded with the support of DaimlerChrysler and the University of Windsor</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+</span><span class="k">Canadian, US and European patents received by the Tessonics R&amp;D team</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$560K</span><span class="k">NRC IRAP contribution in September 2026 for hospital-grade 3D-TRUBI</span></div>'+
   '</div>'+
   fieldRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Inside the weld, <em>in real time.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Weld</span><span>Probe</span><span>Echoes</span><span>Image</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The weld.</h2><p>A spot weld joins two or three sheets of steel or aluminium, 0.6 to 2.4 mm thick, by fusing a nugget of metal between them. From the outside, a good weld and a weak one look alike.</p></article>'+
     '<article class="step"><h2>The probe.</h2><p>The operator sets a multi-channel ultrasonic matrix transducer on the weld. Its elements send ultrasound into the metal, through bare, galvanised or painted surfaces.</p></article>'+
     '<article class="step"><h2>The echoes.</h2><p>The probe collects echoes from the surface and from inside the nugget. Where the sheets are fused, sound travels on to the far side; where they are not, it returns from the gap.</p></article>'+
     '<article class="step"><h2>The image.</h2><p>Tessonics algorithms rebuild an image of the weld, estimate the nugget diameter in real time and compare it with the specified minimum: pass or fail, on the spot.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">From the inspection bench <em>to the welding gun.</em></h2></div><p data-r>Every Tessonics product is designed, developed and assembled in Windsor, for automotive OEMs, their suppliers, and the agricultural and aerospace industries.</p></div>'+
   '<figure class="prodfig" data-r><img src="f2.webp" alt="Three Tessonics F2 inspection units" width="2146" height="848" loading="lazy" onerror="this.closest(\'figure\').style.display=\'none\'"><figcaption class="lab">F2 Platform · ultrasonic quality inspection</figcaption></figure>'+
   prodRows()+
  '</div></section>'+

  '<section class="sec dark" id="medical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Medical</span><h2 class="d2 split">Brain imaging, <em>at the point of injury.</em></h2></div><p data-r>3D Transcranial Ultrasound Brain Imaging (3D-TRUBI) images intracranial hemorrhages in three dimensions and tells their types apart, for the rapid diagnosis of traumatic brain injury.</p></div>'+
   '<div class="medx">'+
    '<div class="medl"><p data-r>Developed by Tessonics over the past decade and commercialised through its spin-off Tessonics Medical Systems, 3D-TRUBI is built to be portable, lightweight, ruggedised and easy to use, by medical personnel with all levels of training.</p>'+
    '<p data-r>The current project develops a hospital-grade 3D-TRUBI for military Role III medical facilities and civilian Level I trauma centres, combining advanced hardware, AI-supported imaging and more efficient clinical workflows.</p></div>'+
    '<dl class="mfacts">'+
     '<div data-r><dt class="lab">Imaging</dt><dd>Epidural, subdural and intracerebral hematomas, in 3D</dd></div>'+
     '<div data-r><dt class="lab">Funding</dt><dd><a class="ul" href="'+IRAP+'" target="_blank" rel="noopener">NRC IRAP, $560,000</a>, September 2026 to September 2027</dd></div>'+
     '<div data-r><dt class="lab">Earlier support</dt><dd>Combat Readiness – Medical Research Program award, Office of the Assistant Secretary of Defense for Health Affairs</dd></div>'+
     '<div data-r><dt class="lab">Next</dt><dd>Preparation for Phase II clinical evaluation</dd></div>'+
    '</dl></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="group" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Group</span><h2 class="d2 split">Built in Windsor, <em>at work worldwide.</em></h2></div><p data-r>Tessonics Group has five wholly owned subsidiaries and a select dealer network in key international markets, from Brazil and Mexico to Japan and South Korea.</p></div>'+
   '<div class="fdr"><span class="lab fl" data-r>Founder</span><div class="fdr-b"><p class="fn" data-r>Dr. Roman Gr. Maev</p><p class="fr" data-r>Founding President and CEO</p><p class="fs" data-r>University Professor Emeritus of Physics at the University of Windsor and founding Director General of its Institute for Diagnostic Imaging Research; in 2024 the International Committee for Non-Destructive Testing conferred on him its Sokolov Award.</p></div></div>'+
   group()+
   '<span class="lab sub-l pr" data-r>Customers include</span>'+cust()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Manufacturers, clinicians and partners</span>'+
   '<h2 class="big split">See inside <em>every weld.</em></h2>'+
   '<p class="sub" data-r>For business and technical inquiries, sales and support, reach the Tessonics team in Windsor or at any of the group’s offices.</p>'+
   '<div class="act" data-r><a class="btn solid" href="tel:'+TEL+'">+1 (519) 250-4455 '+ARR+'</a><a class="btn" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span class="bl">787 Ouellette Ave.</span><span class="bl">Windsor, Ontario N9A 4J4</span></p></div>'+
    '<div><span class="lab" data-r>United States</span><p data-r><span class="bl">2019 Hazel Street</span><span class="bl">Birmingham, Michigan 48009</span></p></div>'+
    '<div><span class="lab" data-r>Phone and email</span><p data-r><a class="ul" href="tel:'+TEL+'">+1 (519) 250-4455</a></p><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Windsor</span>787 Ouellette Ave.<br>Windsor, Ontario N9A 4J4</div>'+
   '<div class="c"><span class="lab">Birmingham</span>2019 Hazel Street<br>Birmingham, Michigan 48009</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/medical">Medical</a><br><a class="ul" href="#/group">Group</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="tel:'+TEL+'">+1 (519) 250-4455</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Jost\',system-ui,sans-serif;font-weight:300;font-size:64px;letter-spacing:.06em">TESSONICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Tessonics Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",products:"products",medical:"medical",group:"group",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Tessonics — ultrasonic imaging for spot weld quality control and medical diagnostics",x:"Home"};
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
