/* ================= VIEWS (home only: Technology / Product / Team open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'"'+(c[4].indexOf("http")===0?' target="_blank" rel="noopener"':'')+'>'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function people(){return '<ul class="ppl">'+TEAM.map(function(p){
  return '<li><figure class="pfig"><img src="data:image/webp;base64,'+p.img+'" alt="Portrait of '+esc(p.name)+'" width="300" height="375" loading="lazy" decoding="async"></figure>'+
   '<div class="ptx"><h3>'+esc(p.name)+'</h3><span class="lab rl">'+esc(p.title)+'</span><p>'+esc(p.sum)+'</p></div></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Label-free digital histopathology<span class="nomob"> · Champaign, Illinois</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Tissue, read</span><span class="l">by <em>light alone.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Eleuthra Photonics builds nonlinear microscopes that image fresh, unstained tissue, giving pathologists structural and metabolic detail from a single laser. Technology developed at the University of Illinois Urbana-Champaign.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Freshly excised mouse pericardial fat, unstained, imaged on Tetraquant™ in four channels, merged.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Conventional histopathology depends on laborious staining and processing, which costs time and accuracy. Eleuthra’s microscopes skip the stain: the tissue’s own molecules make the image. <em>Faster, more accurate, more personal diagnosis.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">Imaging channels from one excitation laser</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2023</span><p class="k">Founded, and admitted to the I-Start program at EnterpriseWorks</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$399K</span><p class="k">NCI SBIR Phase I award for prostate cancer, 2026</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>One laser</span><p data-r>A single excitation laser yields structural and metabolic information about a tissue sample, channel by channel.</p></div>'+
    '<div><span class="lab kick" data-r>Sectioned automatically</span><p data-r>The sample is sectioned and imaged automatically, cutting the time between receiving a tissue sample and analysing it.</p></div>'+
    '<div><span class="lab kick" data-r>For every stakeholder</span><p data-r>Fast, accurate digital histopathology that makes histopathologists, surgeons and patients more productive.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Nonlinear optics, <em>no stain.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Focus</span><span>Signal</span><span>Image</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>One laser, one focal point.</h2><p>A single excitation laser, delivered through a photonic crystal fiber, is focused into fresh tissue. Nothing is fixed or stained first, so the sample keeps its molecular integrity.</p></article>'+
     '<article class="step"><h2>The tissue answers in four colours.</h2><p>Only at the focus, photons combine: FAD glows at 615 nm and NADH at 440 nm, giving metabolism; collagen doubles the light to 510 nm, and boundaries triple it to 340 nm.</p></article>'+
     '<article class="step"><h2>Scanned into one image.</h2><p>The focus scans the sample line by line, and the four channels merge into one label-free image of structure and metabolism, ready for pathologists and for AI-based analysis.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="product" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Product</span><h2 class="d2 split">Tetraquant™, <em>and what it makes possible.</em></h2></div><p data-r>A label-free microscope built for any lab, a prostate cancer workflow funded by the National Cancer Institute, and custom imaging work for research teams.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Origins</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Biophotonics, <em>brought to the clinic.</em></h2></div><p data-r>A two-person leadership team in biophotonics, optics and instrumentation, based at EnterpriseWorks, the University of Illinois Urbana-Champaign incubator.</p></div>'+
   people()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Pathologists, researchers and partners</span>'+
   '<h2 class="big split">See tissue <em>as it is.</em></h2>'+
   '<p class="sub" data-r>To order Tetraquant™, discuss contract research or talk about a partnership, write to the team in Champaign.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+SALES+'">sales@eleuthra.co '+ARR+'</a><a class="btn" href="'+MAP+'" target="_blank" rel="noopener">Find us in Champaign</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Eleuthra Photonics<br>60 Hazelwood Dr.<br>Champaign, IL 61820</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Sales</span><p data-r><a class="ul" href="'+SALES+'">sales@eleuthra.co</a><br>+1 (812) 648-3536</p></div>'+
    '<div><span class="lab" data-r>Legal</span><p data-r>Eleuthra Photonics<br>A Delaware corporation</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>60 Hazelwood Dr.<br>Champaign, Illinois 61820</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/product">Product</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Origins</span>University of Illinois<br>Urbana-Champaign</div>'+
   '<div class="c"><span class="lab">Focus</span>Label-free nonlinear imaging<br>for digital histopathology</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Jost\',system-ui,sans-serif;font-weight:300;font-size:84px;letter-spacing:-.005em">eleuthra</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Eleuthra Photonics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",product:"product",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Eleuthra Photonics — label-free digital histopathology, Champaign, Illinois",x:"Home"};
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
