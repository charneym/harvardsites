/* ================= VIEWS (home only: Technology / Products / Team / News open build-out pages; Contact scrolls) ================= */
function lines(){return '<ul class="pfr">'+LINES.map(function(c){return '<li><span class="lab tg">'+esc(c[1])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[2])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">'+(c[4]||'NIH RePORTER')+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Radiotherapy and radiography imaging<span class="nomob"> · St. Louis, Missouri</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Imaging that reads</span><span class="l">every proton spot,</span><span class="l"><em>and fits the clinic.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Tetraimaging develops tetrahedron beam CT for point-of-care imaging and ultra-fast detectors for FLASH proton therapy, with Washington University School of Medicine.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How TBCT works '+ARR+'</a><a class="btn" href="#/contact">Contact</a></div></div>'+
   '<p class="lab hcap" data-r>Rendered: the multilayer strip ion chamber reading a scanned proton pencil beam, layer by layer</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About Tetraimaging</span>'+
   '<h2 class="txt" id="mani">Founded in St. Louis in 2016, we develop <b class="w0">next-generation imaging systems</b> for radiotherapy and radiography, <em>with strong academic collaborations behind every one.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">66</span><p class="k">Layers of strip ion chambers in the MLSIC, along 19.2 cm water-equivalent depth</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6,250</span><p class="k">Frames per second: fast enough to measure a FLASH beam spot by spot</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2M</span><p class="k">NCI SBIR Phase II contract for the FLASH-QA device, 2024 to 2026</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Point-of-care CT</span><p data-r>Tetrahedron beam CT: diagnostic-quality volumetric images from a system compact enough for the ENT or dental clinic.</p></div>'+
    '<div><span class="lab kick" data-r>FLASH radiotherapy QA</span><p data-r>Detectors fast enough to verify ultra-high-dose-rate proton therapy, where the whole dose is delivered in under a second.</p></div>'+
    '<div><span class="lab kick" data-r>Proton imaging</span><p data-r>Proton imagers for quality assurance, proton radiography and proton CT, for more precise proton therapy.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology · Tetrahedron beam CT</span><h2 class="d3">A stack of fan beams <em>that forms a volume.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Source</span><span>Fan beams</span><span>Detector</span><span>Volume</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A line of x-ray sources.</h2><p>Instead of one tube, TBCT uses a linear array of discrete sources: the multi-pixel thermionic emission x-ray (MPTEX) source, developed in-house.</p></article>'+
     '<article class="step"><h2>Collimated into fans.</h2><p>Each source fires a thin fan beam. Because the patient is scanned with a stack of fans, not one wide cone, scatter stays low and image artefacts fall away.</p></article>'+
     '<article class="step"><h2>Caught by a crossed detector.</h2><p>A linear detector array runs across the source line. Sources and detector together span a tetrahedron, which gives the system its name.</p></article>'+
     '<article class="step"><h2>Turned into a volume.</h2><p>As the gantry rotates, the tetrahedron sweeps the anatomy and a diagnostic-quality volumetric image is reconstructed, from a system smaller than cone-beam CT.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="programmes" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">Four programmes, <em>one imaging lab.</em></h2></div><p data-r>From compact CT for the clinic to the detectors that will let FLASH proton therapy reach patients safely, each programme is supported by NIH and NCI awards.</p></div>'+
   lines()+
  '</div></section>'+

  '<section class="sec light light2" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Physicists and engineers, <em>at the bench.</em></h2></div><p data-r>A team in medical physics, mechanical and electrical engineering, founded by a professor of radiation oncology at Washington University School of Medicine.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Published, funded, <em>in development.</em></h2></div><p data-r>The latest results from the FLASH-QA programme, and the federal awards behind tetrahedron beam CT.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinics, proton centres and research partners</span>'+
   '<h2 class="big split">Let’s talk about <em>your beam.</em></h2>'+
   '<p class="sub" data-r>Questions about tetrahedron beam CT, FLASH QA or a research collaboration: visit us at our innovation headquarters in St. Louis.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAP+'" target="_blank" rel="noopener">Get directions '+ARR+'</a><a class="btn" href="'+PAPER+'" target="_blank" rel="noopener">Read the FLASH paper</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Innovation headquarters</span><p data-r>Tetraimaging LLC<br>4320 Forest Park Avenue, Suite 304<br>St. Louis, Missouri</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Research partner</span><p data-r>Department of Radiation Oncology<br>Washington University School of Medicine</p></div>'+
    '<div><span class="lab" data-r>Online</span><p data-r><a class="ul" href="'+WEB+'" target="_blank" rel="noopener">tetraimaging.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>4320 Forest Park Avenue, Suite 304<br>St. Louis, Missouri</div>'+
   '<div class="c"><span class="lab">Focus</span>Tetrahedron beam CT<br>FLASH radiotherapy QA<br>Proton imaging</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Elsewhere</span><a class="ul" href="'+PAPER+'" target="_blank" rel="noopener">Medical Physics, 2025</a><br><a class="ul" href="https://reporter.nih.gov/project-details/11211392" target="_blank" rel="noopener">NIH RePORTER</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 720 70" aria-hidden="true"><text x="360" y="58" text-anchor="middle" style="font-family:\'Sora\',Arial,sans-serif;font-weight:300;font-size:74px;letter-spacing:-.01em">Tetraimaging</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Tetraimaging LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",programmes:"programmes",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Tetraimaging — Tetrahedron beam CT and FLASH proton therapy QA, St. Louis",x:"Home"};
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
