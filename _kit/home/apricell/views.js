/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function prodRows(){return '<ul class="pfr path">'+PRODUCTS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' on apricell.com">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Next-gen in vitro tissue organoid models<span class="nomob"> · Victoria, British Columbia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Where simplicity</span><span class="l">meets biological</span><span class="l"><em>complexity.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Apricell builds 3D tissue-culture plates that grow uniform, human-relevant spheroid and organoid models of cancer, then let you test drugs and analyse them without ever leaving the plate.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our platforms '+ARR+'</a><a class="btn" href="#/technology">How it works</a></div></div>'+
   '<span class="lab cap">TruSphere™ microwell array in a culture well · Apricell</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">95% of new cancer drugs fail in clinical trials, in part because the tools used to test them, 2D cell cultures and mouse models, do not accurately depict human biology. <b class="w0">Apricell’s plates make human-relevant 3D tumour models simple to grow, treat and read.</b></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">95%</span><span class="k">Of new cancer drugs fail during clinical trials, the attrition Apricell is working to reduce</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">600</span><span class="k">Uniform spheroids from a single pipetting step on the TruSphere™ platform</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1,152</span><span class="k">Spheroids per 96-well HTSphere™ plate, ready for automated screening</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">From cells to slides, <em>in one plate.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Microwell</span><span>Seed</span><span>Matrix</span><span>Analyse</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The microwell.</h2><p>A hydrogel insert sits in each well of a standard plate. Its floor is an array of rounded microwells, each sized to hold one spheroid.</p></article>'+
     '<article class="step"><h2>One seeding step.</h2><p>Cells are pipetted in once. They settle into the microwells and gather into uniform spheroids, one per microwell, with no crosstalk between models.</p></article>'+
     '<article class="step"><h2>A real microenvironment.</h2><p>An extracellular matrix is applied over the spheroids on the plate, for co-cultures, tri-cultures and invasion studies. Media changes never aspirate a model.</p></article>'+
     '<article class="step"><h2>Treat, then slice in place.</h2><p>Drugs are tested in the same well. The spheroids are then fixed, paraffin-embedded and sectioned inside the hydrogel for IHC and H&amp;E, their morphology preserved.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Three plates, <em>one easy workflow.</em></h2></div><p data-r>Each platform fits standard lab plates and imaging equipment, from complex microenvironments to high-throughput drug screening.</p></div>'+
   prodRows()+
   '<blockquote class="pq" data-r><p>“We mimic the cancerous tissues on our microchips to predict the effect of different treatments.”</p><cite class="lab">Amir Seyfoori, Founder and CEO · Douglas Magazine, 2023</cite></blockquote>'+
   '<p class="ack" data-r>Compatible with breast, lung, pancreatic, ovarian and colorectal cancer and glioblastoma models; cell lines, patient-derived xenografts, ex-vivo primary tissue and human-derived stem cells. Trusted by leading clients including Massachusetts General Hospital, Brown University, the University of Toronto and the University of Calgary.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Scientists and clinicians, <em>one mission.</em></h2></div><p data-r>Developed in collaboration with the University of Victoria, Apricell is dedicated to reducing the attrition rate of new cancer drugs in clinical trials.</p></div>'+
   team()+
   '<p class="lab sub-l pr" data-r>Supported by</p>'+
   '<p class="inv" data-r>NRC IRAP <b>·</b> Mitacs <b>·</b> New Ventures BC <b>·</b> Life Sciences BC <b>·</b> Coast Capital Innovation Centre <b>·</b> University of Victoria</p>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From Victoria <em>to labs abroad.</em></h2></div><p data-r>The latest from Apricell Biotechnology.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers, distributors and partners</span>'+
   '<h2 class="big split">Better tumour models, <em>in a single step.</em></h2>'+
   '<p class="sub" data-r>For product questions, protocols, quotes or partnerships, write to the Apricell team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Victoria, British Columbia</span><p data-r><span class="bl">1758 Tiffin Place</span><span class="bl">Victoria, BC, Canada</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Platforms</span><p data-r><span class="bl">3-in-1™ · TruSphere™</span><span class="bl">HTSphere™</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Victoria</span>1758 Tiffin Place<br>Victoria, BC, Canada</div>'+
   '<div class="c"><span class="lab">Platforms</span>3-in-1™ Platform<br>TruSphere™ Platform<br>HTSphere™ Platform</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Sora\',system-ui,sans-serif;font-weight:400;font-size:50px;letter-spacing:.02em">Apricell Biotechnology</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Apricell Biotechnology Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Apricell Biotechnology — next-gen in vitro tissue organoid models for cancer drug testing",x:"Home"};
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
