/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function kits(){return '<ul class="pfr kit">'+KITS.map(function(k){
  return '<li><span class="lab tg"><b>'+esc(k[2])+'</b><i>'+esc(k[3])+'</i></span><div class="pgm"><h3>'+esc(k[0])+'</h3><span class="loc">'+esc(k[1])+' · competitive ELISA</span></div>'+
   '<dl class="spec"><div><dt class="lab">Range</dt><dd>'+esc(k[4])+'</dd></div><div><dt class="lab">Sensitivity</dt><dd>'+esc(k[5])+'</dd></div></dl>'+
   '<a class="lab lk" href="'+k[6]+'" target="_blank" rel="noopener">View kit '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["The master regulator of iron","Hepcidin decides how much iron reaches the blood. Plasma iron is normally held at 10–30 µM: chronically above that, iron deposits in tissues and damages organs; below it, cells falter and anemia follows.",'<circle cx="28" cy="28" r="18"/><circle class="a" cx="28" cy="28" r="7"/><path d="M28 4v6M28 46v6M4 28h6M46 28h6"/>'],
  ["Erythroferrone, its counterweight","In anemia, EPO drives erythroblasts in the marrow to make erythroferrone (ERFE), which acts on the liver to suppress hepcidin, freeing stored iron and raising absorption for new red cells. Intrinsic measures both.",'<path d="M10 40c8-18 28-18 36 0"/><path class="a" d="M10 16c8 18 28 18 36 0"/>'],
  ["Answers for the clinic","Hepcidin can distinguish iron deficiency anemia from anemia of chronic disease, diagnose iron deficiency before anemia, flag IRIDA, and predict which patients will not respond to oral iron.",'<path d="M14 44h28"/><path d="M20 44V28M28 44V18M36 44V32"/><path class="a" d="M14 22l8 6 8-12 10 8"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function dis(){return '<div class="ev light-ev"><span class="lab kick" data-r>Serum hepcidin<br>in disease</span><div><dl>'+DIS.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Adapted from T. Ganz and E. Nemeth, Hepcidin and Disorders of Iron Metabolism, Annual Review of Medicine 2011.</p></div></div>'}
function menu(){return '<div class="bk amenu"><span class="lab kick" data-r>Assay menu<br>Research use only</span><ul class="am">'+MENU.map(function(m){return '<li data-r>'+esc(m)+'</li>'}).join("")+'</ul></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>The BioIron Company™<span class="nomob"> · Hepcidin and erythroferrone</span> · La Jolla, CA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">First in hepcidin</span><span class="l"><em>and erythroferrone.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Intrinsic LifeSciences developed the world’s first validated assay for hepcidin, the hormone that regulates iron in the blood. Today it makes the ELISA kits, runs the assays and builds the diagnostics for disorders of iron.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Research kits '+ARR+'</a><a class="btn" href="#/science">The science</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why hepcidin</span>'+
   '<h2 class="txt" id="mani">Hepcidin is the master regulator of iron metabolism. Too little, and iron overloads the liver and other organs; too much, and iron is locked away and anemia follows. Intrinsic offers the only CLIA-certified immunoassay for it, <em>for research and for patients.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2006</span><p class="k">Founded in La Jolla, with UCLA’s Tomas Ganz and Elizabeta Nemeth</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><p class="k">ELISA kits for hepcidin and erythroferrone, in human, mouse, rat and primate</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">I–III</span><p class="k">Clinical trial phases supported, with thousands of hepcidin assays performed</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the assay works</span><h2 class="d3">A competition, <em>read in blue.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Compete</span><span>Wash</span><span>Read</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Sample and tracer, together.</h2><p>Each well is coated with hepcidin antibodies. The sample goes in alongside Intrinsic’s patented biotinylated hepcidin tracer, and the two compete for the same binding sites.</p></article>'+
     '<article class="step"><h2>More hepcidin, less tracer.</h2><p>The more hepcidin a sample holds, the fewer tracer molecules stay bound once the well is washed. A sample low in hepcidin leaves the antibodies covered in tracer.</p></article>'+
     '<article class="step"><h2>Colour, inversely.</h2><p>A detection reagent and TMB substrate turn the bound tracer into colour, read against a standard curve. Deep blue means little hepcidin; a pale well means a lot.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research products</span><h2 class="d2 split">Kits for <em>every model.</em></h2></div><p data-r>Research-use-only ELISA kits to measure hepcidin and erythroferrone in human and pre-clinical models, with antibodies, peptide standards, tracers and common reagents in the catalogue.</p></div>'+
   kits()+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The science</span><h2 class="d2 split">One hormone, <em>the whole iron economy.</em></h2></div><p data-r>Most of the body’s iron sits in the hemoglobin of red cells. Hepcidin and erythroferrone decide how much is absorbed, stored and released to make them.</p></div>'+
   caps()+
   dis()+
  '</div></section>'+

  '<section class="sec dark" id="services" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services and diagnostics</span><h2 class="d2 split">From clinical trials <em>to the clinic.</em></h2></div><p data-r>Intrinsic runs assays for academic, clinical, government and pharmaceutical investigators worldwide, and its own clinical laboratory tests patient samples.</p></div>'+
   '<div class="plat svc">'+
    '<div><span class="lab kick" data-r>Pharma and clinical research</span><p data-r>Thousands of hepcidin assays performed for Phase I, II and III clinical trials, for small, medium and large clinical and pharma customers.</p></div>'+
    '<div><span class="lab kick" data-r>IntrinsicDx</span><p data-r>The CLIA-certified, CAP-accredited clinical laboratory of Intrinsic, and the exclusive provider of the Intrinsic Hepcidin IDx™ test for patients. <a class="ul" href="https://intrinsicdx.com/" target="_blank" rel="noopener">intrinsicdx.com</a></p></div>'+
    '<div><span class="lab kick" data-r>In development</span><p data-r>A non-invasive, point-of-care urinary hepcidin device to detect iron deficiency in children, funded by an NIH SBIR award.</p></div>'+
   '</div>'+
   menu()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people behind <em>hepcidin testing.</em></h2></div><p data-r>A La Jolla team with the UCLA scientists who discovered hepcidin’s role in iron as co-founders.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Founder</span><p data-r>Mark Westerman, Ph.D., founded Intrinsic in 2006 with Tomas Ganz and Elizabeta Nemeth and led it as President and CEO until his death in 2017. His vision still sets the course.</p></div>'+
    '<div><span class="lab kick" data-r>Origins</span><p data-r>Before Intrinsic, Mark Westerman and his colleagues discovered and characterized bass hepcidin, soon after Tomas Ganz found it in humans.</p></div>'+
    '<div><span class="lab kick" data-r>Support</span><p data-r>NIH SBIR awards from NIDDK have backed the serum hepcidin immunoassay, the erythroferrone ELISA and the urinary hepcidin device.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News and publications</span><h2 class="d2 split">Iron science, <em>published.</em></h2></div><p data-r>Recent work from Intrinsic’s laboratory and its collaborators, and the grants behind it.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers, sponsors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>Intrinsic.</em></h2>'+
   '<p class="sub" data-r>For kits, quotes, assay services for your study, or hepcidin testing for patients, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Intrinsic '+ARR+'</a><a class="btn" href="#/products">Research kits</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Intrinsic LifeSciences<br>505 Coast Boulevard South, Suite 408<br>La Jolla, CA 92037</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18584597788">+1 858-459-7788</a></p></div>'+
    '<div><span class="lab" data-r>Patient testing</span><p data-r>IntrinsicDx<br><a class="ul" href="mailto:clientservices@intrinsicdx.com">clientservices@intrinsicdx.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>505 Coast Boulevard South, Suite 408<br>La Jolla, CA 92037</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18584597788">+1 858-459-7788</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">The BioIron Company™</span>Hepcidin and erythroferrone ELISA kits, assay services and diagnostics</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Cinzel\',Georgia,serif;font-weight:400;font-size:62px">Intrinsic</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Intrinsic LifeSciences</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",products:"products",assay:"story",science:"science",services:"services",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Intrinsic LifeSciences — the BioIron Company: hepcidin and erythroferrone diagnostics",x:"Home"};
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
