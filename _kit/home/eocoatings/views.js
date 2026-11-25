/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function tests(){return '<dl class="eo-t">'+TESTS.map(function(t){return '<div data-r><dt>'+esc(t[0])+'</dt><dd class="lab">'+esc(t[1])+'</dd></div>'}).join("")+'</dl>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Evaporated optical coatings<span class="nomob"> · Market Harborough, UK</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Optical coatings,</span> <span class="l"><em>UV to infrared.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>EO Coatings is an ISO 9001 registered manufacturer of optical coatings for windows, lenses, prisms and free-issue optics, supplied direct from our factory in Leicestershire.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/coatings">Our coatings '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Independent, and made in the UK</span>'+
   '<h2 class="txt" id="mani">A custom-engineered coating, whether it is for a <em>rugged environment</em> or <span class="nw">a <em>high-quality</em></span> <span class="nw"><em>cosmetic</em> application.</span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">35+</span><p class="k">Years of experience in coatings for precise optical components, in the infrared and the visible</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">ISO&nbsp;9001</span><p class="k">Registered manufacturer and supplier of optical coatings</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.25–15&nbsp;µm</span><p class="k">The span of our coating ranges, from the ultraviolet to the long-wave infrared</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a coating is made</span><h2 class="d3"><span class="nw">Layer by layer,</span> <em class="nw">in vacuum.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Load</span><span>Evaporate</span><span>Test</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Your optics, in the chamber.</h2><p>Windows, lenses, prisms and free-issue optics in germanium, silicon, zinc selenide, zinc sulphide, fluorides, chalcogenides, glass or sapphire are mounted in the vacuum chamber.</p></article>'+
     '<article class="step"><h2>Evaporated, layer on layer.</h2><p>Under vacuum the coating materials are evaporated and condense on the optics, building an anti-reflection, mirror or beamsplitter coating one thin layer at a time.</p></article>'+
     '<article class="step"><h2>Proven on a witness piece.</h2><p>A representative witness piece, coated in the same batch, goes through the MIL-C-48497A tests for adhesion, humidity and abrasion, and for HDAR coatings severe abrasion and salt solution as well.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="coatings" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Coatings</span><h2 class="d2 split"><span class="nw">Four families,</span> <em class="nw">UV to far infrared.</em></h2></div><p data-r>We coat for the UV, visible, near and far infrared, as standard designs or as a custom-engineered solution, for safety, security, thermography and defence applications and more.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Materials we coat</span><p class="cr" data-r><span>Germanium</span><span>Silicon</span><span>Zinc selenide</span><span>Zinc sulphide</span><span>Cleartran</span><span>Calcium fluoride</span><span>Barium fluoride</span><span>IG6 and AMTIR</span><span>Glass</span><span>Sapphire</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="quality" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality</span><h2 class="d2 split"><span class="nw">Tested in</span> <em class="nw">every batch.</em></h2></div><p data-r>We are ISO 9001 registered. Each batch is proven on a representative witness piece coated with it, against the environmental tests of MIL-C-48497A.</p></div>'+
   '<div class="eo-q">'+
    '<div class="eo-ql">'+tests()+'<p class="eo-qn" data-r>High-durability (HDAR) infrared coatings pass severe abrasion and salt solution as well as adhesion, humidity and abrasion.</p></div>'+
    '<figure class="eo-f" data-r><img src="optics.webp" alt="Coated optical windows of several sizes catching a beam of light on a white bench" width="447" height="442" loading="lazy"><figcaption class="lab">Coated optics, EO Coatings</figcaption></figure>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">In the heart</span> <em class="nw">of the UK.</em></h2></div><p data-r>EO Coatings is an independent UK optical coating company in Leicestershire. Our products and services are supplied direct from our factory to customers in the UK and worldwide.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>At a glance</span><dl>'+
    '<div data-r><dt class="lab">Company</dt><dd>E O Coatings Ltd, registered in England, company number 11887057</dd></div>'+
    '<div data-r><dt class="lab">Director</dt><dd>Steven Joniec</dd></div>'+
    '<div data-r><dt class="lab">Quality</dt><dd>ISO 9001 registered manufacturer and supplier of optical coatings</dd></div>'+
    '<div data-r><dt class="lab">Applications</dt><dd>Safety, security, thermography and defence, rugged environments and cosmetic finishes</dd></div>'+
    '<div data-r><dt class="lab">Shows</dt><dd><a class="ul" href="https://exhibitors.world-of-photonics.com/ausstellerportal/2025/aussteller/ausstellerdetails/eo-coatings-ltd/?elb=178.1100.6067.1.111" target="_blank" rel="noopener">LASER World of Photonics 2025, Munich, stand B2.137</a></dd></div>'+
    '<div data-r><dt class="lab">Supply</dt><dd>Direct from our factory in Market Harborough, to the UK and worldwide</dd></div>'+
   '</dl></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Send us</span> <em class="nw">your optics.</em></h2>'+
   '<p class="sub" data-r>Contact our sales team for a quotation and a rapid response to your enquiry, from a standard anti-reflection coating to a custom-engineered design.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Factory</span><p data-r>EO Coatings<br>Unit J7 Harrison Road<br>Airfield Business Park<br>Market Harborough<br>Leicestershire LE16 7UL</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telephone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Coverage</span><p data-r>UV, visible, near and far infrared<br>Supplied in the UK and worldwide</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Factory</span>EO Coatings<br>Unit J7 Harrison Road, Airfield Business Park<br>Market Harborough, Leicestershire LE16 7UL</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/coatings">Coatings</a><br><a class="ul" href="#/process">Process</a><br><a class="ul" href="#/quality">Quality</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Coatings</span>Infrared AR · Visible AR<br>Metal reflective · Custom<br>ISO 9001 registered</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Barlow Semi Condensed\',Arial,sans-serif;font-weight:500;font-size:56px;letter-spacing:.18em">EO COATINGS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 E O Coatings Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",process:"story",coatings:"coatings",quality:"quality",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"EO Coatings — Evaporated optical coatings, UV to infrared, made in Leicestershire",x:"Home"};
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
