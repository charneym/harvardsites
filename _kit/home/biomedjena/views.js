/* ================= VIEWS (home only: Products / Technology / Company / News open build-out pages via _kit/lib/buildout.js;
   Contact and in-page CTAs scroll). Dark and bone grounds alternate: hero (dark, the goggle-mask render), about (bone,
   statement + figures), the head impulse story (dark), products (bone: balance and auditory systems in two columns, four
   datasheet figures, three principles), company (dark: three fields of work, quality and history), news (bone), contact
   (dark). Content is never hidden at rest: reveals only enhance (failsafe in site.js). ================= */
function prods(g){return '<ul class="dcat">'+PROD.filter(function(p){return g.indexOf(p[0])>=0}).map(function(c){return '<li><span class="dc-b">'+esc(c[1])+'</span><span class="dc-m">'+esc(c[2])+'</span></li>'}).join("")+'</ul>'}
function caps(){return '<div class="dmesh">'+CAPS.map(function(m){
  return '<div class="dm"><span class="dm-v">'+esc(m[0])+'<small>'+esc(m[1])+'</small></span><h3>'+m[2]+'</h3><p class="dm-use">'+esc(m[3])+'</p></div>'}).join("")+'</div>'}
function apps(){return '<div class="dapps">'+APPS.map(function(a){return '<div class="da"><span class="lab kick">'+esc(a[0])+'</span><p>'+esc(a[1])+'</p></div>'}).join("")+'</div>'}
function sites(){return '<ol class="dmfg">'+SITES.map(function(m,i){return '<li><span class="dmf-n">'+String(i+1).padStart(2,"0")+'</span><div><span class="lab dmf-k">'+esc(m[1])+'</span><h3>'+esc(m[0])+'</h3><p>'+esc(m[2])+'</p></div></li>'}).join("")+'</ol>'}
function certs(){return '<ul class="dcert">'+CERTS.map(function(c){return '<li><span class="dce-n">'+esc(c[0])+'</span><span class="lab">'+esc(c[1])+'</span></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
var ICO={bal:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M3 16h34v9a3 3 0 0 1-3 3H24l-4-5-4 5H6a3 3 0 0 1-3-3Z"/><circle cx="12" cy="21" r="2.5"/><circle cx="28" cy="21" r="2.5"/></svg>',
 aud:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4 20h5l3-8 4 16 4-22 4 26 4-18 3 6h5"/></svg>',
 mag:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M9 6v16a11 11 0 0 0 22 0V6h-7v16a4 4 0 0 1-8 0V6Z"/><path d="M9 12h7M24 12h7"/></svg>'};
function nn(g){var n=PROD.filter(function(p){return p[0]===g}).length;return (n<10?"0":"")+n}
function vHome(){
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>ENT diagnostics · <span class="nw">Made in Jena, Germany</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="nw">Balance and hearing,</span> <em class="nw">measured in Jena.</em></h1>'+
    '<p class="s" data-r>BioMed Jena develops and builds systems for ear, nose and throat diagnostics: video head impulse testing, videonystagmography, VEMP and posturography for balance, and audiometry, ABR, OAE and tympanometry for hearing.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div>'+
   '</div>'+
   '<ul class="pil" aria-label="What we make">'+
    '<li class="p1" data-r><span class="pic">'+ICO.bal+'</span><div><span class="lab">Balance systems</span><p>vHIT, VNG, Frenzel, DVA, VEMP, posturography and air calorics.</p></div></li>'+
    '<li class="p2" data-r><span class="pic">'+ICO.aud+'</span><div><span class="lab">Auditory systems</span><p>Audiometry, ABR, OAE and tympanometry: one software, one database.</p></div></li>'+
    '<li class="p3" data-r><span class="pic">'+ICO.mag+'</span><div><span class="lab">Magnetic and custom</span><p>Sensors down to the picotesla range, and devices built for our customers.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="about" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>Innovations for life</span>'+
   '<h2 class="txt" id="mani">BioMed Jena was founded in March 1997 to realise new product ideas in biomedical engineering. With many research institutions, we develop new medical measurement methods and systems, <em>and every update is free, <span class="nw">for life.</span></em></h2></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1997</span><p class="k">Founded in Jena, active in ENT diagnostics from the first year</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><p class="k">Semicircular canals examined objectively with one eHIT USB mask</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">pT</span><p class="k">Magnetic sensor systems that measure down to the picotesla range</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3"><span class="nw">One impulse,</span> <em class="nw">one reflex.</em></h2>'+
    '<p class="st-in">How the eHIT USB makes the vestibulo-ocular reflex visible, impulse by impulse.</p>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Impulse</span><span>Reflex</span><span>Gain</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The impulse.</h2><p>The examiner turns the patient’s head in a short, fast impulse. The motion sensor in the mask records the head’s movement 800 times a second.</p></article>'+
     '<article class="step"><h2>The reflex.</h2><p>To hold the gaze on a target, the vestibulo-ocular reflex turns the eyes the opposite way. The mask’s infrared camera follows the pupil through every impulse.</p></article>'+
     '<article class="step"><h2>The gain.</h2><p>The software sets the eye’s velocity against the head’s, for each impulse, with a slow-motion view, until all six semicircular canals are tested, left and right.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Every test</span> <em class="nw">for balance</em> <em class="nw">and hearing.</em></h2></div><p data-r>All of these devices come from one source. We developed every one of them, and we build them in Jena. Our products carry a small “e” at the start of the name.</p></div>'+
   '<div class="dcols"><div class="dcol"><div class="dcol-h"><span class="lab kick" data-r>Balance systems</span><span class="lab dn" data-r>'+nn("Bal")+'</span></div>'+prods(["Bal"])+'</div>'+
   '<div class="dcol"><div class="dcol-h"><span class="lab kick" data-r>Auditory systems</span><span class="lab dn" data-r>'+nn("Aud")+'</span></div>'+prods(["Aud"])+'</div></div>'+
   '<div class="dmesh-h"><div><span class="lab kick" data-r>Inside the systems</span><h3 data-r><span class="nw">Figures from</span> <span class="nw">our datasheets</span></h3></div><p data-r>From the motion sensor in the mask to the cooling in the air irrigator, the systems are built for exact, repeatable measurement in a busy clinic.</p></div>'+
   caps()+
   apps()+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Biomedical engineering</span> <em class="nw">from Jena.</em></h2></div><p data-r>We work as a developer, as an OEM supplier and under our own BioMed label, in three fields.</p></div>'+
   '<div class="dmf-g"><div class="dmf-r">'+sites()+'</div>'+
   '<div class="dce-w"><span class="lab kick" data-r>Quality and history</span>'+certs()+
   '<p class="dmask" data-r>From the first analogue VNG system in 2000 to the eHIT USB and a combined vHIT and VNG system in 2011, we keep improving our products and help our customers keep up through free software updates.</p></div></div>'+
  '</div></section>'+

  '<section class="sec light" id="news" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">From Düsseldorf</span> <em class="nw">to Dubai.</em></h2></div><p data-r>Where to meet us at the trade fairs, and what is new for our software users.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>ENT practices, hospitals, researchers and OEM partners</span>'+
   '<h2 class="big split"><span class="nw">Balance or hearing,</span> <em class="nw">let’s talk diagnostics.</em></h2>'+
   '<p class="sub" data-r>Ask about a system, a demonstration or a development of your own, and our team in Jena will get back to you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to BioMed Jena '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>BioMed Jena GmbH<br>Am Egelsee 1, 07743 Jena, Germany</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+TELH+'">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="https://www.youtube.com/channel/UCTcYAy0D_GTNnVSOstxrHLg" target="_blank" rel="noopener">BioMed Jena TV</a><br><a class="ul" href="https://www.instagram.com/biomedjena" target="_blank" rel="noopener">Instagram</a> · <a class="ul" href="https://www.facebook.com/biomedjena" target="_blank" rel="noopener">Facebook</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>BioMed Jena GmbH<br>Am Egelsee 1<br>07743 Jena, Germany</div>'+
   '<div class="c"><span class="lab">Products</span>Balance systems<br>Auditory systems<br>Magnetic systems</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+TELH+'">'+TEL+'</a><br>EN 13485 certified</div>'+
  '</div>__LMARK3__'+
  '<div class="legal"><span class="lab">© 2026 BioMed Jena GmbH</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route. #/contact and #/about scroll to their section; a typed or linked #/products, #/technology, #/company or #/news (the nav items) opens that item's build-out page, as a nav click does (buildout.js) ================= */
var BOK={};/* typed or linked hashes scroll to their section; nav clicks open the build-out pages (buildout.js) */
function boOpen(k){try{if(window.BuildOut&&BuildOut.open){BuildOut.open(k);return true}}catch(x){}return false}
var SECS={about:"about",products:"products",technology:"story",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"BioMed Jena — balance and hearing diagnostics, made in Jena",x:"Home"};
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
