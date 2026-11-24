/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function servRows(){return '<div class="plat">'+SERV.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function solRows(){return '<ul class="pfr path">'+SOL.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' on spear-scientific.com">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function projRows(){return '<ul class="pfr proj">'+PROJ.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p>'+(c[3]?'<a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' on CORDIS">'+c[4]+' '+ARR+'</a>':'<span></span>')+'</li>'}).join("")+'</ul>'}
function apps(){return '<ul class="nws">'+APPS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Optoacoustic sensing and imaging<span class="nomob"> · Munich</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">See deeper,</span><span class="l"><em>measure better.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Spear develops optoacoustic (photoacoustic) and fluorescence technology that measures what conventional optics cannot: functional, chemical and morphological parameters in tissue, food, fluids and other materials, without touching what lies beneath.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/solutions">Our solutions '+ARR+'</a><a class="btn" href="#/technology">How it works</a></div></div>'+
   '<span class="lab cap">Rendered: a section of skin under a light pulse</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Visualizing the invisible</span>'+
   '<h2 class="txt" id="mani">Where conventional optical measurement stops working, Spear sends in light and listens to the sound it makes. <b class="w0">Precise, non-invasive readings of tissue, food and fluids,</b> <em>for faster, more confident decisions.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">10–30 µm</span><span class="k">Resolution of the Prodigy optoacoustic mesoscope, at up to several millimetres in depth</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30×</span><span class="k">More energy per pulse from L-Prodigy laser diodes, at MHz rates and nanosecond widths</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">€896k</span><span class="k">Spear’s share of EU EIC funding for MOSAIC (2025) and Q-MSOT (2026), per CORDIS</span></div>'+
   '</div>'+
   servRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Light in, <em>sound out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Skin</span><span>Pulse</span><span>Sound</span><span>Image</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The window.</h2><p>The skin is a window to the dermal microvasculature: the capillary loops and vessel networks whose changes can signal diabetes and cardiovascular disease early.</p></article>'+
     '<article class="step"><h2>The pulse.</h2><p>Nanosecond pulses of light enter the skin. Spear’s L-Prodigy diodes deliver them at MHz rates, with up to 30 times the energy per pulse.</p></article>'+
     '<article class="step"><h2>The sound.</h2><p>Where blood absorbs the light, it produces ultrasound. A detector on the surface picks up the sound, from millimetres below.</p></article>'+
     '<article class="step"><h2>The image.</h2><p>The signals are reconstructed into a 3D map of the vessels at 10–30 µm resolution, and analysed into quantified biomarkers, with explainable AI in MOSAIC.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="solutions" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Solutions</span><h2 class="d2 split">Addressing your <em>optical measurement needs.</em></h2></div><p data-r>Instruments, light sources and standards for optoacoustic and fluorescence work, offered alone or together.</p></div>'+
   solRows()+
   '<p class="ack" data-r>In 2025 Spear acquired the assets of iThera Medical GmbH, strengthening its IP portfolio and product offering.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">Published in <em>the clinic and the lab.</em></h2></div><p data-r>The technology has been featured across medicine and research. Each line links to the paper.</p></div>'+
   apps()+
  '</div></section>'+

  '<section class="sec dark2" id="projects" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Projects</span><h2 class="d2 split">Funded to go <em>further.</em></h2></div><p data-r>Spear is funded by the European Union, the European Space Agency, NASA and the German Federal Ministry of Research, Technology and Space (BMFTR), with tens of partners.</p></div>'+
   projRows()+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">From Munich’s labs <em>to products.</em></h2></div><p data-r>Spear advances and commercialises optical and optoacoustic technology developed and validated at Helmholtz Munich and the Technical University of Munich.</p></div>'+
   '<div class="fdr"><span class="lab fl" data-r>Leadership</span><div class="fdr-b"><p class="fn" data-r>Vasilis Ntziachristos</p><p class="fr" data-r>Managing Director</p><p class="fs" data-r>Coordinator of RSENSE at the Technical University of Munich, the EU project whose portable optoacoustic medical sensor Spear is taking to market.</p></div></div>'+
   '<div class="fdr job"><span class="lab fl" data-r>Careers</span><div class="fdr-b"><p class="fn sm" data-r>Lead Engineer — Product Development &amp; Regulatory Affairs</p><p class="fr" data-r>Munich · Full-time · Open now</p><p class="fs" data-r>Own the path from prototype to certified product: research-use products first, then the foundation for EU MDR and ISO 13485.</p><div class="act" data-r><a class="btn" href="https://www.spear-scientific.com/_files/ugd/713930_de1dc78bbff8493bada5cabc1253988a.pdf" target="_blank" rel="noopener">The role '+ARR+'</a><a class="btn" href="mailto:careers@spear-scientific.com">careers@spear-scientific.com</a></div></div></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers, clinicians and partners</span>'+
   '<h2 class="big split">See what light <em>can hear.</em></h2>'+
   '<p class="sub" data-r>Get in touch to learn how Spear can support your application, from a single measurement to a full system.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Munich</span><p data-r><span class="bl">Spear UG (haftungsbeschränkt)</span><span class="bl">c/o Munich Urban Colab</span><span class="bl">Freddie-Mercury-Str. 5, 80797 München</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p><p data-r><a class="ul" href="mailto:careers@spear-scientific.com">careers@spear-scientific.com</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="https://www.linkedin.com/company/spear-ug/" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Munich</span>c/o Munich Urban Colab<br>Freddie-Mercury-Str. 5<br>80797 München</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/solutions">Solutions</a><br><a class="ul" href="#/projects">Projects</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Funded by</span>EU · EIC<br>ESA · NASA<br>BMFTR</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Raleway\',system-ui,sans-serif;font-weight:300;font-size:58px;letter-spacing:.2em">SPEAR</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Spear UG (haftungsbeschränkt)</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",solutions:"solutions",applications:"applications",projects:"projects",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Spear — optoacoustic and fluorescence sensing and imaging, Munich",x:"Home"};
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
