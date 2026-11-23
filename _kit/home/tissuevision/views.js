/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function assayRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+c[0]+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+c[2]+'</h3></div>'+
   '<p>'+c[3]+'</p><span class="lab lk">'+esc(c[4])+'</span></li>'}).join("")+'</ul>'}
function pubs(){return '<ul class="nws">'+PUBS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["High resolution 3D imaging","Our imaging technology provides histological detail over whole organs, and has proven itself in large-scale research projects such as the Allen Mouse Brain Connectivity Atlas.",'<path d="M10 20l18-10 18 10v18L28 48 10 38z"/><path d="M10 20l18 10 18-10M28 30v18"/><circle class="f" cx="28" cy="30" r="3"/>'],
  ["Scalable","We specialise in studies of tens to hundreds of samples, giving clients the statistical power and reliability needed to move a research program forward.",'<rect x="8" y="30" width="10" height="16"/><rect x="23" y="20" width="10" height="26"/><rect class="a" x="38" y="10" width="10" height="36"/>'],
  ["Automated data pipelines","3D histology can generate terabytes of data for a single study. Our cloud-based analysis services process large volumes of data and quickly provide quantitative results.",'<path d="M6 28h12l5-12 10 24 5-12h12"/><circle class="f" cx="50" cy="28" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function hw(){return '<div class="hw">'+
  '<figure class="hw-fig" data-r><img src="tissuecyte.webp" alt="The TissueCyte imaging platform: objective, optics and microtome stage on an optical table" width="1400" height="1045" loading="lazy" decoding="async"><figcaption class="lab">TissueCyte&#174; imaging platform</figcaption></figure>'+
  '<div class="hw-t"><span class="lab kick" data-r>TissueCyte&#174; 1600FC</span>'+
   '<p class="hw-l" data-r>Greater speed, higher sensitivity, and a first-in-class, fully automated tissue section processing system that integrates with the latest spatial biology offerings.</p>'+
   '<p data-r>The TissueCyte employs Serial Two-Photon Tomography Plus (STP+): high speed multi-foci two-photon imaging combined with state-of-the-art tissue sectioning, so ex vivo organs and tissues are imaged in a matter of hours. The SlicePlacer module mounts imaged slices onto glass slides for downstream analysis such as IHC, and the slices can be re-imaged and aligned back onto the original 3D dataset.</p>'+
   '<ul class="feat">'+FEAT.map(function(f){return '<li data-r>'+esc(f)+'</li>'}).join("")+'</ul>'+
  '</div></div>'}
function nih(){return '<div class="ev"><span class="lab kick" data-r>NIH support</span><div><dl>'+
  '<div><dt class="lab" data-r>2026 · NIMH</dt><dd data-r>The Development of Tabletop Brain-Mapping Platform, SBIR R44MH129132, to bring an affordable, table-top system for whole-brain spatial biology to market.</dd></div>'+
  '<div><dt class="lab" data-r>2024 · NIA</dt><dd data-r>A high throughput multiplexed pipeline for models of Alzheimer&#8217;s disease, SBIR R44AG084491.</dd></div>'+
  '</dl><p class="note-s" data-r>From NIH RePORTER (TissueVision, Inc., Newton, MA). Awards to TissueVision since 2015 include programs from NIMH, NIA, NINDS and NIBIB.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Whole tissue imaging<span class="nomob"> and analysis</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Whole organs</span><span class="l">in 3D, at <em>cellular</em></span><span class="l"><em>resolution.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>TissueVision images and analyses whole fixed organs on its TissueCyte&#174; Serial Two-Photon Tomography platform, helping researchers develop life-saving therapies.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/services">Our services</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About TissueVision</span>'+
   '<h2 class="txt" id="mani">A Boston based imaging solutions provider for pharmaceutical, biotech and academic research. <em>We handle entire studies, from tissue labeling through image analysis and final report.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2005</span><p class="k">Founded by biomedical imaging experts from MIT&#8217;s Biological and Mechanical Engineering departments</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">25+ yrs</span><p class="k">Our experts have worked in tissue imaging and analysis for more than 25 years</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1.2 &#181;m</span><p class="k">In-plane sampling of a whole brain in our full resolution example dataset</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Serial Two-Photon <em>Tomography.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Image</span><span>Section</span><span>Rebuild</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Image the block face.</h2><p>The fixed organ sits in a simple agar block, with no optical clearing. Two-photon microscopy images the face at sub-micron resolution, in several colour channels.</p></article>'+
     '<article class="step"><h2>Cut, save, repeat.</h2><p>The integrated FlexureSlice microtome removes the imaged section and the next face is imaged. Every section is saved for secondary analysis, such as IHC.</p></article>'+
     '<article class="step"><h2>Rebuild the whole organ.</h2><p>The images form one fully aligned 3D dataset of the intact organ, registered to a standard reference atlas such as the Allen Mouse Brain Atlas for regional analysis.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="approach" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our approach</span><h2 class="d2 split">Study design, imaging, <em>analysis.</em></h2></div><p data-r>Developing a new assay can create its own unique set of challenges; we are here to help. Customers can prepare samples on their own and send us fixed tissues, or we can handle the entire study, from tissue labeling through image analysis and final report.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="services" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>What we offer</span><h2 class="d2 split">Standard and <em>custom assays.</em></h2></div><p data-r>Automated whole tissue pipelines for neuroscience, gene therapy, oncology and fibrosis, with full volume datasets and side-by-side imaging and analysis across treatment and control cohorts.</p></div>'+
   assayRows(ASSAY)+
  '</div></section>'+

  '<section class="sec light white" id="hardware" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Hardware</span><h2 class="d2 split">The TissueCyte&#174; <em>platform.</em></h2></div><p data-r>A whole tissue imaging platform based on high speed two-photon microscopy and integrated tissue sectioning, so samples of arbitrary size, up to entire organs in mammalian models, can be imaged.</p></div>'+
   hw()+
  '</div></section>'+

  '<section class="sec dark" id="publications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Publications</span><h2 class="d2 split">Behind major <em>brain atlases.</em></h2></div><p data-r>The Allen Mouse Connectivity Project and the Brain/MINDS project are built on our TissueCyte imaging platform, and work relying on it has appeared in Nature, Neuron, PNAS and Nature Methods.</p></div>'+
   pubs()+
   nih()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>TissueVision consultation</span>'+
   '<h2 class="big split">Plan your <em>next study.</em></h2>'+
   '<p class="sub" data-r>We work closely with all of our clients to help them make new discoveries, and we are here to help you navigate the critical decisions that will make your experiment a success.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to TissueVision '+ARR+'</a><a class="btn" href="#/services">See our assays</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>TissueVision, Inc.<br>Newton, Massachusetts</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@tissuevision.com</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+16177180799">617-718-0799</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Newton, Massachusetts</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@tissuevision.com</a><br><a class="ul" href="tel:+16177180799">617-718-0799</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/hardware">Hardware</a><br><a class="ul" href="#/publications">Publications</a></div>'+
   '<div class="c"><span class="lab">Platform</span>TissueCyte&#174; · STP Tomography&#174;</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Poppins\',sans-serif;font-weight:300;font-size:76px">TISSUEVISION</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 TissueVision, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",approach:"approach",services:"services",hardware:"hardware",publications:"publications",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"TissueVision — whole tissue imaging and analysis",x:"Home"};
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
