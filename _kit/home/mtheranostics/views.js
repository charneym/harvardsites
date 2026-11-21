/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Target the tumour’s surroundings","Instead of biomarkers on cancer cells, MT targets an oncoprotein in the tumour microenvironment, extradomain-B fibronectin: high in high-risk tumours, low in low-grade tumours and absent from normal tissue. Aggressive solid tumours share it, so one agent can image many cancers.",'<rect x="6" y="14" width="44" height="30"/><path class="a" d="M10 36c6-8 10 4 16-4s10 4 16-4 6 2 8 0"/><circle class="f" cx="26" cy="31" r="3"/>'],
  ["Use the scanners hospitals have","MT218 works with existing clinical MRI systems and protocols, with no new hardware or software settings. [Ga-68]MTP220 fits existing PET, PET/CT and PET/MRI imaging protocols.",'<circle cx="28" cy="28" r="20"/><circle cx="28" cy="28" r="11"/><path class="a" d="M28 8v6M28 42v6M8 28h6M42 28h6"/>'],
  ["Built from a proven chelate","A seven-amino-acid peptide joined to a clinical macrocyclic agent, Gd(HP-DO3A), so its stability and clearance match ProHance®. Far lower doses minimise potential dose-dependent side effects.",'<path d="M28 8l17 10v20L28 48 11 38V18z"/><circle class="f" cx="28" cy="28" r="4.5"/><path class="a" d="M45 18l7-4"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>MT218 in numbers</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From mtheranostics.com/mt218 and NCI SBIR award 1R44CA265626. Signal, dose and risk figures are from animal models.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Targeted cancer imaging<span class="nomob"> · MRI and PET</span> · Cleveland, OH</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Contrast that</span><span class="l">finds aggressive</span><span class="l"><em>cancer.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Molecular Theranostics develops targeted imaging agents that bind an oncoprotein in the tumour microenvironment, so aggressive solid tumours light up on the MRI and PET scanners hospitals already use: for earlier detection, risk-stratification and fewer unnecessary biopsies.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How MT218 works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Every MRI contrast agent in clinical use today is untargeted: not one is specific to cancer. Molecular Theranostics is developing the first-in-class targeted agent, MT218, to show <em>which tumours are dangerous.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3–6×</span><span class="k">More MRI signal in aggressive tumours than the clinical agent at 3T, in animal models</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40%</span><span class="k">Of the dose of approved gadolinium agents is enough for robust tumour images</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$528K</span><span class="k">NCI R01 award, August 2026, for next-generation targeted MRI contrast agents</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How MT218 works</span><h2 class="d3">Find the matrix, <em>light the tumour.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Target</span><span>Bind</span><span>Image</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A marker only aggressive tumours carry.</h2><p>Aggressive tumours build a matrix rich in extradomain-B fibronectin, an oncoprotein linked to metastasis and angiogenesis. It is high in high-risk tumours, low in low-grade ones and absent from normal tissue.</p></article>'+
     '<article class="step"><h2>A small peptide carries the contrast.</h2><p>MT218 joins a seven-amino-acid peptide to a clinical macrocyclic gadolinium agent. Injected like any contrast agent, it binds the tumour matrix and clears quickly from everywhere else, through the kidneys.</p></article>'+
     '<article class="step"><h2>The dangerous tumour lights up.</h2><p>On a standard MRI, aggressive tumours give 3–6 times the signal of the clinical agent at a fraction of the dose, so doctors can localise high-risk cancer, guide biopsy and spare low-risk patients invasive procedures.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">One target, <em>many cancers.</em></h2></div><p data-r>Because aggressive solid tumours share the same microenvironment, MT’s agents can detect and characterise breast, liver, pancreatic, prostate and other cancers, and assess non-invasively whether a therapy is working.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From the scanner <em>to the operating room.</em></h2></div><p data-r>A targeted MRI contrast agent in clinical development, a PET probe, and new programmes that use the same tumour-matrix peptide for safer contrast, precision surgery and targeted therapy.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Chemists and imaging <em>scientists.</em></h2></div><p data-r>A Cleveland team that has taken a targeted contrast agent from the bench through an FDA-cleared IND and into patients, funded by the National Cancer Institute since 2015.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>History</span><p data-r>Founded in Cleveland in January 2014; at the MAGNET incubator from 2017 and in the Baker Electric Building since 2022.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>SBIR awards from the National Cancer Institute and NIDCR, and a 2026 NCI R01 research award.</p></div>'+
    '<div><span class="lab kick" data-r>Publications</span><p data-r>The science behind MT218 appears in Nature Communications, Bioconjugate Chemistry and Molecular Pharmaceutics.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards, trials <em>and milestones.</em></h2></div><p data-r>The latest from Molecular Theranostics.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>MT.</em></h2>'+
   '<p class="sub" data-r>Whether you are developing cancer imaging, running clinical studies or investing in diagnostics, Molecular Theranostics would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Molecular Theranostics, LLC<br>7100 Euclid Avenue, Suite 152<br>Cleveland, OH 44103</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Clinical trial</span><p data-r><a class="ul" href="https://clinicaltrials.gov/study/NCT06262139" target="_blank" rel="noopener">NCT06262139</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>7100 Euclid Avenue, Suite 152<br>Cleveland, OH 44103</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Agents</span>MT218 · targeted MRI<br>[Ga-68]MTP220 · PET</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 860 62" aria-hidden="true"><text x="430" y="52" text-anchor="middle" style="font-family:\'Fira Sans\',Arial,sans-serif;font-weight:600;font-size:64px;letter-spacing:-.02em">Molecular Theranostics</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Molecular Theranostics, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",platform:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Molecular Theranostics — Targeted MRI and PET imaging agents for aggressive cancers, Cleveland, OH",x:"Home"};
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
