/* ================= VIEWS (home only: Research / Products / Capabilities / Publications open build-out pages; Contact scrolls) ================= */
function progs(){return '<ul class="pfr">'+PROGS.map(function(c){return '<li><span class="lab tg">'+esc(c[1])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[2])+'</p>'+(c[3]?'<a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">'+esc(c[4])+'</a>':'<span></span>')+'</li>'}).join("")+'</ul>'}
function caps(){return '<ol class="frs">'+CAPS.map(function(a,i){return '<li><span class="y">0'+(i+1)+'</span><div><h3>'+esc(a[0])+'</h3><p>'+esc(a[1])+'</p></div></li>'}).join("")+'</ol>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Scintillators · Semiconductors · Detectors<span class="nomob"> · Natick, Massachusetts</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Crystals that</span><span class="l">make radiation</span><span class="l"><em>visible.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>CapeSym grows scintillator and semiconductor detector materials and builds the modules around them, for medical imaging, homeland security and science. Founded in 1992; all commercial production in the USA.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/research">Our research '+ARR+'</a><a class="btn" href="#/contact">Talk to our team</a></div></div>'+
   '<p class="lab hcap" data-r>Pictured: a large-area detector film in the CapeSym lab</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Who we are</span>'+
   '<h2 class="txt" id="mani">Founded as Cape Simulations, now a team of <b class="w0">more than ten PhDs</b> in crystal growth, solid-state physics and engineering, <em>taking new detector materials from the furnace to the field.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2.9%</span><span class="k">Energy resolution at 662 keV from our ScintiClear strontium-iodide detectors</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">70+</span><span class="k">Companies supported by our consulting in crystal growth, thermal management and design</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20,000</span><span class="k">Square feet of facilities in Natick, Massachusetts, certified to ISO 9001:2015</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Scintillators</span><p data-r>SrI₂(Eu), CLYC(Ce), LaBr₃(Ce,Sr) and perovskite crystals that turn gamma rays and neutrons into flashes of light.</p></div>'+
    '<div><span class="lab kick" data-r>Semiconductors</span><p data-r>CsPbBr₃, TlBr, CdZnTe and perovskite detectors that turn radiation directly into an electrical signal.</p></div>'+
    '<div><span class="lab kick" data-r>Software and consulting</span><p data-r>SYMMIC thermal analysis software, materials characterisation and engineering consulting for industry.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Direct-conversion X-ray imaging</span><h2 class="d3">An X-ray, read <em>where it lands.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Arrive</span><span>Absorb</span><span>Drift</span><span>Image</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>X-rays pass through.</h2><p>In a flat-panel X-ray imager, the X-rays that make it through the patient reach a sensor layer laid over a grid of pixel electrodes.</p></article>'+
     '<article class="step"><h2>A perovskite film absorbs them.</h2><p>Our NIH-funded imagers use a perovskite sensor film: each absorbed X-ray frees a cloud of electric charge inside the film itself, with no light-emitting step in between.</p></article>'+
     '<article class="step"><h2>Charge drifts straight down.</h2><p>A voltage across the film pulls the charge along the field lines to the pixel directly below, so the signal does not spread sideways and fine detail stays sharp.</p></article>'+
     '<article class="step"><h2>Sharper images, lower dose.</h2><p>High sensitivity and high resolution together mean a clearer image from less radiation, for mammography, general radiography and tomosynthesis.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research portfolio</span><h2 class="d2 split">New materials, <em>into users’ hands.</em></h2></div><p data-r>Our R&amp;D has two equal aims: discover detector materials that clearly outperform today’s, and build them into modules and instruments quickly, at low production and ownership cost.</p></div>'+
   progs()+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">ScintiClear, <em>made in Natick.</em></h2></div><p data-r>Strontium-iodide gamma detectors, first developed in government laboratories and productised by CapeSym with industrial processes that drive cost down and performance up.</p></div>'+
   '<div class="prod">'+
    '<figure class="pimg" data-r><img src="data:image/webp;base64,__DET__" alt="ScintiClear detectors: encapsulated crystals and a packaged detector core with its photomultiplier" width="900" height="900"></figure>'+
    '<div class="pspec">'+
     '<dl class="spx">'+
      '<div data-r><dt class="lab">Light output</dt><dd>~90,000 <small>ph/MeV</small></dd></div>'+
      '<div data-r><dt class="lab">Energy resolution</dt><dd>2.9% <small>at 662 keV</small></dd></div>'+
      '<div data-r><dt class="lab">Warrantied</dt><dd>3.3% <small>even at 2 in</small></dd></div>'+
      '<div data-r><dt class="lab">Diameters</dt><dd>1, 1.5 and 2 <small>in</small></dd></div>'+
     '</dl>'+
     '<p class="pnote" data-r>Essentially free of internal radioactivity. Offered as an encapsulated crystal, as a packaged detector core with a photomultiplier in rugged ANSI-compatible packaging, or as a plug-and-play Developer’s Kit.</p>'+
     '<ul class="plist" data-r>'+PRODS.map(function(p){return '<li>'+esc(p)+'</li>'}).join("")+'</ul>'+
     '<a class="lab ul lk plk" href="https://www.capescint.com" target="_blank" rel="noopener" data-r>Current products and availability at capescint.com '+ARR+'</a>'+
    '</div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="capabilities" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Capabilities</span><h2 class="d2 split">From powder <em>to detector.</em></h2></div><p data-r>Everything in one 20,000 sq ft facility: design and performance simulation, materials processing and crystal growth, module fabrication, and test and characterisation.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Scientists <em>who build.</em></h2></div><p data-r>A culturally diverse team, working together on crystal growth, detector optimisation and product launches, for industry and for NIH, DoE, NASA, DHS and other US agencies.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News and publications</span><h2 class="d2 split">Published, <em>and funded.</em></h2></div><p data-r>Federal funding for low-dose X-ray imaging, and recent papers from our scintillator and semiconductor programmes.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, customers and collaborators</span>'+
   '<h2 class="big split">Tell us what you <em>need to detect.</em></h2>'+
   '<p class="sub" data-r>Crystals, detector modules, consulting or a research collaboration: write to the CapeSym team in Natick.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>CapeSym, Inc.<br>6 Huron Drive, Suite 1B<br>Natick, MA 01760</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>6 Huron Drive, Suite 1B<br>Natick, Massachusetts 01760</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/capabilities">Capabilities</a><br><a class="ul" href="#/publications">Publications</a></div>'+
   '<div class="c"><span class="lab">Elsewhere</span><a class="ul" href="https://www.capescint.com" target="_blank" rel="noopener">CapeScint products</a><br><a class="ul" href="https://www.capesym.com/research-publications" target="_blank" rel="noopener">Full publication list</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 80" aria-hidden="true"><text x="260" y="70" text-anchor="middle" style="font-family:\'Big Shoulders Display\',\'Arial Narrow\',sans-serif;font-weight:700;font-size:86px;letter-spacing:.02em">CapeSym</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 CapeSym, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",research:"research",products:"products",capabilities:"capabilities",team:"team",publications:"news",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"CapeSym — scintillator and semiconductor detector materials, Natick, Massachusetts",x:"Home"};
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
