/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function rows(L,cls,site){return '<ul class="pfr '+(cls||"")+'">'+L.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' on '+site+'">'+(site==="NIH RePORTER"?"Award":"Details")+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function hist(){return '<ol class="tml">'+HIST.map(function(h){return '<li><span class="yr">'+esc(h[0])+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>cGMP peptide CDMO<span class="nomob"> · Louisville, Kentucky</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Peptides,</span><span class="l">from sequence</span><span class="l"><em>to needle.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>CreoSalus is a contract development and manufacturing organization for the peptide, pharma, device and biotech industries: custom peptide synthesis and process development, through cGMP manufacturing of peptide APIs and sterile injectables.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/services">Our services '+ARR+'</a><a class="btn" href="#/process">Sequence to needle</a></div></div>'+
   '<span class="lab cap">A peptide chain, space-filling model</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>CreoSalus · “to create good health”</span>'+
   '<h2 class="txt" id="mani">Improving the quality of life for people and animals <b class="w0">through technological innovations in peptides, pharmaceuticals</b> <em>and medical devices.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">100%</span><span class="k">Patient order success rate across thousands of personalized peptide vaccines</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100</span><span class="k">Peptides synthesized at once on in-house synthesizers, milligram to gram scale</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">15,000</span><span class="k">Units per aseptic fill batch, from engineering batches to small commercial lots</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Sequence to needle</span><h2 class="d3">One sequence, <em>one patient’s vial.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sequence</span><span>Synthesis</span><span>Purification</span><span>Fill</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The sequence.</h2><p>Since 2016, CreoSalus has manufactured thousands of personalized peptide cancer vaccines for multiple clinical trials. Each order starts as a sequence.</p></article>'+
     '<article class="step"><h2>The synthesis.</h2><p>Fully automated, custom-designed synthesizers build the chain, milligram to gram scale, up to 100 peptides at a time.</p></article>'+
     '<article class="step"><h2>The purification.</h2><p>Eight prep-LC/MS systems purify the peptides with mass-precision auto-collection, backed by UPLC/MS and HPLC in the quality control lab.</p></article>'+
     '<article class="step"><h2>The fill.</h2><p>Lyophilized powder, or formulated peptide filled aseptically into cryovials in an ISO 5 chamber, ready for the patient’s needle.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split">Development <em>to market.</em></h2></div><p data-r>An experienced team of manufacturing, engineering, chemistry, microbiology, quality and regulatory staff, for small and large companies, human or animal, Rx, OTC or personalized medicine. We welcome small-scale projects below the minimum vial requirements of larger fill companies.</p></div>'+
   rows(SERVICES,"",'creosalus.com')+
  '</div></section>'+

  '<section class="sec dark" id="divisions" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Divisions</span><h2 class="d2 split">Peptides, pharmaceuticals <em>and devices.</em></h2></div><p data-r>A multi-division life-sciences company: peptide CDMO, a veterinary drug developer, and an ISO certified medical device engineering house, under one roof in Louisville.</p></div>'+
   rows(DIVS,"",'creosalus.com')+
  '</div></section>'+

  '<section class="sec dark2" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">Funded by the NIH, <em>built in Louisville.</em></h2></div><p data-r>Federal research awards for new diagnostic and drug-delivery devices, developed with clinical and academic partners.</p></div>'+
   rows(RESEARCH,"rsr",'NIH RePORTER')+
  '</div></section>'+

  '<section class="sec light" id="history" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>History</span><h2 class="d2 split">Four decades <em>of peptides.</em></h2></div><p data-r>From a custom peptide synthesis company and a veterinary drug developer to a multi-division CDMO.</p></div>'+
   hist()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Request a quote</span>'+
   '<h2 class="big split">Tell us about <em>your peptide.</em></h2>'+
   '<p class="sub" data-r>Process development, cGMP peptide API or aseptic fill: reach out for a complimentary quote for your development-to-market product.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Louisville, Kentucky</span><p data-r><span class="bl">1044 East Chestnut Street</span><span class="bl">Louisville, KY 40204</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+15025151100">502-515-1100</a></p><p data-r><a class="ul" href="tel:+18004561403">800-456-1403</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Louisville</span>1044 East Chestnut Street<br>Louisville, KY 40204</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/divisions">Divisions</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/history">History</a></div>'+
   '<div class="c"><span class="lab">Phone</span><a class="ul" href="tel:+15025151100">502-515-1100</a><br><a class="ul" href="tel:+18004561403">800-456-1403</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 100" aria-hidden="true"><text x="320" y="84" text-anchor="middle" style="font-family:\'Spectral\',Georgia,serif;font-weight:300;font-size:112px;letter-spacing:-.01em">CreoSalus</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 CreoSalus, Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",process:"story",services:"services",divisions:"divisions",research:"research",history:"history",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"CreoSalus — cGMP peptide development and manufacturing, Louisville",x:"Home"};
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
