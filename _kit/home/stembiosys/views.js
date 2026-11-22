/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prodRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[2])+'</i></span><h3>'+c[1]+'</h3><p>'+c[3]+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["The whole niche, left intact","Cell-derived matrices recapitulate the biochemical, structural and mechanical cues of the native niche, because the extracellular matrix the cells built is left intact rather than reduced to a single coating protein.",'<path d="M6 16c12-6 22 8 44 0M6 28c14 6 28-8 44 2M6 40c12-4 26 6 44-2"/><path d="M14 8c4 14-2 26 4 40M38 8c-6 14 4 24-2 40"/><circle class="f" cx="28" cy="28" r="3"/>'],
  ["Cells that have never seen plastic","Cells change their gene expression in response to their surroundings, and some changes are hard to reverse. CELLvo™ cells are isolated and expanded on the matrix, so they keep a more natural phenotype.",'<ellipse cx="28" cy="24" rx="18" ry="8"/><ellipse class="a" cx="30" cy="23" rx="6" ry="3.4"/><path d="M6 40h44M6 46h44"/>'],
  ["Young, healthy donors","You get out what you put in. StemBioSys sources its cells from young, healthy tissue, isolated and cryopreserved in xeno-free conditions wherever possible.",'<circle cx="28" cy="20" r="10"/><path class="a" d="M23 20l4 4 7-8"/><path d="M12 48c2-10 8-14 16-14s14 4 16 14"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>CELLvo™ matrices and cells<span class="nomob"> · Research tools</span> · San Antonio, TX</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Give your cells</span><span class="l">the niche they</span><span class="l"><em>expect.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>StemBioSys makes CELLvo™ extracellular matrices, built by human cells and left intact, and the cells to grow on them. Instead of responding to foreign culture conditions, your cells respond to your experimental variables, for predictive cell-based assays.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How it works '+ARR+'</a><a class="btn" href="#/products">Our products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why a native matrix</span>'+
   '<h2 class="txt" id="mani">Stem cells lose their stem-like properties on ordinary tissue culture plastic, because the niche they live in is missing. CELLvo™ puts it back, so cells grow, mature and behave <em>as they do in the body.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">176</span><p class="k">Scientific citations of CELLvo™ technology</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">17</span><p class="k">Countries where scientists use StemBioSys products</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">795</span><p class="k">Scientists around the world who trust CELLvo™</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Built by cells, <em>for cells.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Build</span><span>Extract</span><span>Culture</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Young human cells build the matrix.</h2><p>Donor cells grown directly on the surface of standard culture vessels secrete and assemble their own extracellular matrix. ChondroMatrix, for one, holds more than 150 proteins made by human chondrocytes.</p></article>'+
     '<article class="step"><h2>The cells are gently extracted.</h2><p>The cells are removed and the matrix they made is left intact: a native, young, three-dimensional microenvironment on a standard plate, ready to use after a brief rehydration step.</p></article>'+
     '<article class="step"><h2>Your cells find a native niche.</h2><p>Seeded onto it, cells get the cues they expect in vivo. iPSC-derived cardiomyocytes mature within seven days on Matrix Plus; aging MSCs expanded about a million-fold more than on plastic.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The next evolution <em>in cell culture.</em></h2></div><p data-r>The patented CELLvo™ Matrix was developed by Dr. Xiao-Dong Chen at UT Health San Antonio to stop mesenchymal stem cells losing their properties in culture, then studied in Robert Langer’s lab at MIT and grown into a platform for stem cells, heart, brain and cartilage.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Matrices and cells, <em>made to work together.</em></h2></div><p data-r>Ready-to-use matrices on standard plates and imaging plates, and primary and iPSC-derived cells isolated on them. For research use only, not for diagnostic or therapeutic use.</p></div>'+
   prodRows(PROD)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">From a San Antonio lab <em>to 17 countries.</em></h2></div><p data-r>Dr. Chen and Dr. Steven Davis licensed the technology from UT Health San Antonio, recruited a local board and built StemBioSys, with manufacturing on the BioBridge Global campus a few miles from its R&amp;D facility.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Board</span><p data-r>Also on the board: '+BOARD+'.</p></div>'+
    '<div><span class="lab kick" data-r>Scientific advisors</span><p data-r>'+SAB+'.</p></div>'+
    '<div><span class="lab kick" data-r>Partners</span><p data-r>BioBridge Global and its subsidiary GenCure; REPROCELL for hiPSCs; Cartox and the University of Michigan on cardiac safety.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Papers, launches <em>and grants.</em></h2></div><p data-r>The latest from StemBioSys and the scientists using CELLvo™.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Matrix Plus, published</span><div><dl>'+
  [["7 days","For hiPSC cardiomyocytes to mature on Matrix Plus, versus partial maturation in 30 to 100 days with current approaches"],["Arrhythmia","Re-entrant arrhythmia made visible in a dish, enabling high-throughput cardiotoxicity screening"],["35 h","Doubling time of aging MSCs on Matrix Plus, versus about 92 hours on tissue culture plastic"],["Telomeres","Preserved through extended expansion, with fewer markers of senescence"]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>“Human perinatal stem cell derived extracellular matrix enables rapid maturation of hiPSC-CM structural and functional phenotypes”, Nature Scientific Reports, November 2020, StemBioSys with Cartox and the University of Michigan; UT Health San Antonio study of aging adipose-derived MSCs, Aging Cell, as reported by StemBioSys in October 2026.</p></div></div>'}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Quotes, questions and projects</span>'+
   '<h2 class="big split">Talk to <em>StemBioSys.</em></h2>'+
   '<p class="sub" data-r>Email the team for quotes, questions or to discuss an upcoming project, including custom matrices and cells. StemBioSys replies within two business days.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email StemBioSys '+ARR+'</a><a class="btn" href="#/products">See the products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>StemBioSys, Inc.<br>3463 Magic Drive, Suite 110<br>San Antonio, TX 78229</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+12108779323">+1 210 877 9323</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a><br><a class="ul" href="https://twitter.com/StemBioSys" target="_blank" rel="noopener">X / Twitter</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>3463 Magic Drive, Suite 110<br>San Antonio, TX 78229</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platform</span>CELLvo™ native matrices<br>and cells · research use only</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Asap\',Arial,sans-serif;font-weight:500;font-size:60px;letter-spacing:-.01em">StemBioSys</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 StemBioSys, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",how:"story",technology:"technology",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"StemBioSys — CELLvo™ native extracellular matrices and cells for stem cell research, San Antonio, TX",x:"Home"};
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
