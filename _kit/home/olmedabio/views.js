/* ================= VIEWS (home only: Science / Programs / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'<span class="loc">'+esc(c[1])+'</span></h3><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function lead(){var p=TEAM[0];
  return '<div class="lead"><div class="lead-n"><span class="lab kick" data-r>'+esc(p.g)+'</span><h3 class="split">'+esc(p.name)+'</h3><p class="lab rl" data-r>'+esc(p.title)+'</p></div>'+
   '<div class="lead-b"><p data-r>'+esc(p.sum)+'</p><p class="aff" data-r>Ph.D. in Neuroscience, University of Southern California</p></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Aqueous humor diagnostics<span class="nomob"> · San Diego, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The eye’s own fluid,</span><span class="l">read like <em>a biopsy.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Olmeda BioSciences, a spinoff of Children’s Hospital Los Angeles and USC, develops tests that use aqueous humor as a liquid biopsy for the diagnosis and prognosis of eye diseases, starting with eye cancers.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How the test works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>A section of the human eye. The aqueous humor fills the lit chamber behind the cornea.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Tumors inside the eye are often too risky to biopsy. The aqueous humor in front of them can be sampled in the clinic, and it carries the tumor’s own proteins and DNA. <em>Olmeda turns that fluid into a test.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">~50%</span><span class="k">Of patients with uveal melanoma go on to develop metastatic disease</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">21</span><span class="k">Proteins in Olmeda’s aqueous humor panel for metastatic risk</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.88M</span><span class="k">In National Cancer Institute STTR awards since 2024</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>A CHLA and USC spinoff</span><p data-r>Built on aqueous humor liquid biopsy research at Children’s Hospital Los Angeles and the University of Southern California.</p></div>'+
    '<div><span class="lab kick" data-r>Made for the clinic</span><p data-r>Tests built as CLIA laboratory-developed tests, with validated protocols for collecting, handling and shipping aqueous humor.</p></div>'+
    '<div><span class="lab kick" data-r>Beyond cancer</span><p data-r>The aim is a more accurate and efficient way to diagnose and monitor ophthalmic diseases, starting with intraocular cancers.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The science</span><h2 class="d3">A biopsy, without <em>touching the tumor.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Tumor</span><span>Tap</span><span>Test</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A tumor at the back of the eye.</h2><p>Uveal melanoma and retinoblastoma grow inside the eye. Predicting uveal melanoma’s risk today needs an invasive intraocular biopsy, and retinoblastoma often cannot be biopsied safely at all.</p></article>'+
     '<article class="step"><h2>A drop from the front.</h2><p>A fine needle draws a small sample of aqueous humor, the clear fluid of the eye’s anterior chamber, well away from the tumor. Tapping it is feasible in the clinic.</p></article>'+
     '<article class="step"><h2>What the drop carries.</h2><p>The fluid holds tumor-derived proteins and cell-free DNA. Olmeda’s tests read a 21-protein panel to classify metastatic risk, and the cfDNA genome to confirm a diagnosis.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="programs" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">Two tests, <em>one fluid.</em></h2></div><p data-r>Both programs are funded by the National Cancer Institute through the STTR program and are being built as CLIA laboratory-developed tests.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Working with</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Ocular oncology, <em>translated.</em></h2></div><p data-r>Olmeda grew out of aqueous humor liquid biopsy research in ocular oncology at Children’s Hospital Los Angeles and the Keck School of Medicine of USC.</p></div>'+
   lead()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From proof of concept <em>to the clinic.</em></h2></div><p data-r>Four National Cancer Institute awards since 2024, each on the public NIH RePORTER record.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Bring the biopsy <em>to the clinic.</em></h2>'+
   '<p class="sub" data-r>Olmeda BioSciences is based in San Diego, working with ocular oncologists at Children’s Hospital Los Angeles and USC. To talk about the tests or a partnership, find us here.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAP+'" target="_blank" rel="noopener">Find us in San Diego '+ARR+'</a><a class="btn" href="'+RP_UM+'" target="_blank" rel="noopener">See the NCI award</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Olmeda BioSciences LLC<br>3210 Merryfield Row<br>San Diego, CA 92121</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Origins</span><p data-r>Children’s Hospital Los Angeles<br>University of Southern California</p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r>National Cancer Institute<br>STTR Phase I and Phase II</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>3210 Merryfield Row<br>San Diego, California 92121</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Origins</span>Children’s Hospital Los Angeles<br>University of Southern California</div>'+
   '<div class="c"><span class="lab">Focus</span>Aqueous humor liquid biopsy<br>for ophthalmic diseases</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 62" aria-hidden="true"><text x="320" y="52" text-anchor="middle" style="font-family:\'Cinzel\',Georgia,serif;font-weight:500;font-size:64px;letter-spacing:.08em">OLMEDA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Olmeda BioSciences LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",programs:"programs",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Olmeda BioSciences — aqueous humor liquid biopsy for eye cancers, San Diego",x:"Home"};
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
