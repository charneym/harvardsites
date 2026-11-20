/* ================= VIEWS (home only: Science / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><div class="pn"><h3>'+esc(c[1])+'</h3></div><p>'+esc(c[2])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">'+esc(c[4])+'</a></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Nanomedicine for rare diseases<span class="nomob"> · Barcelona</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The missing enzyme,</span><span class="l"><em>carried further.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Delbios Pharmaceuticals, a spin-off of Spain’s National Research Council (CSIC), develops advanced nanomedicines. Its lead, nanoGLA, packs the enzyme people with Fabry disease lack into targeted nanoliposomes, and is heading toward first-in-human studies.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Illustrative render, not to scale: a nanoliposome cut open, carrying the enzyme alpha-galactosidase A (atoms from its crystal structure, PDB 1R46).</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">In Fabry disease, one missing enzyme lets a fatty substance build up in cells across the body. Today’s enzyme therapies reach the tissues poorly and cannot reach the brain. <em>nanoGLA is built to do both.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">€2.5M</span><span class="k">European Innovation Council project, Nano4Rare, to complete nanoGLA’s preclinical package</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">€335K</span><span class="k">CDTI NEOTEC grant for the Delbios business plan, awarded December 2025</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2021</span><span class="k">EU orphan drug designation for nanoGLA, granted by the European Commission on the EMA’s opinion</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>A CSIC spin-off</span><p data-r>Created to take nanoGLA into the clinic and to commercialise the patented nanoencapsulation platform behind it.</p></div>'+
    '<div><span class="lab kick" data-r>Made with compressed CO₂</span><p data-r>The nanoliposomes are produced by DELOS-SUSP, a process based on depressurising a CO₂-expanded organic solution, developed at ICMAB-CSIC.</p></div>'+
    '<div><span class="lab kick" data-r>Beyond Fabry</span><p data-r>The same approach could apply to other lysosomal storage disorders and other biomolecule-based rare disease therapies.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The science</span><h2 class="d3">An old enzyme, <em>a new way in.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Deficiency</span><span>Carrier</span><span>Delivery</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Gb3 builds up in the cell.</h2><p>Fabry disease is a rare genetic disorder: cells lack α-galactosidase A (GLA), so its substrate, globotriaosylceramide (Gb3), accumulates in their lysosomes.</p></article>'+
     '<article class="step"><h2>GLA, inside a nanoliposome.</h2><p>nanoGLA carries recombinant human GLA inside peptide-targeted nanoliposomes, made by DELOS-SUSP, so more of the enzyme reaches the cells that need it.</p></article>'+
     '<article class="step"><h2>Deposits clear, the brain included.</h2><p>In a Fabry mouse model, nanoGLA reduced Gb3 deposits more than the same enzyme given without the nanocarrier, including in the brain.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">nanoGLA, <em>for Fabry disease.</em></h2></div><p data-r>A preclinical programme with orphan drug designation in the EU. Delbios publishes each subcontracted step, as the EU asks of the projects it funds.</p></div>'+
   '<div class="pl-grid">'+progs()+
   '<div class="bk"><span class="lab kick" data-r>Funded by</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">From the lab <em>that made it.</em></h2></div><p data-r>nanoGLA was developed in European projects led by ICMAB-CSIC, the Institute of Materials Science of Barcelona. Delbios carries it forward.</p></div>'+
   '<ul class="tm"><li><div class="tn"><h3>Nora Ventosa</h3><span class="lab rl">Co-founder, CEO and CSO</span></div><p>Leads the NANOMOL group at ICMAB-CSIC, where nanoGLA was developed, and co-founded Nanomol Technologies.</p></li></ul>'+
   '<div class="adv"><span class="lab kick" data-r>Research partners</span><p data-r><span>ICMAB-CSIC</span><i aria-hidden="true">·</i><span>CIBER-BBN</span><i aria-hidden="true">·</i><span>Vall d’Hebron Research Institute</span><i aria-hidden="true">·</i><span>NANBIOSIS</span><i aria-hidden="true">·</i><span>Nanomol Technologies</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the paper <em>to the clinic.</em></h2></div><p data-r>The science, the funding and the work now under way to prepare a Clinical Trial Application.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and suppliers</span>'+
   '<h2 class="big split">Help bring nanoGLA <em>to patients.</em></h2>'+
   '<p class="sub" data-r>Delbios works from the Universitat Autònoma de Barcelona campus. To talk about nanoGLA, a partnership or one of our open tenders, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+TENDERS+'" target="_blank" rel="noopener">Open tenders</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Delbios Pharmaceuticals S.L.<br>Edifici Eureka, Campus UAB<br>08290 Cerdanyola del Vallès</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Edifici Eureka, Campus UAB<br>08290 Cerdanyola del Vallès, Barcelona</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Funding</span>Funded by CDTI (NEOTEC)<br>and the European Innovation Council</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="64" text-anchor="middle" style="font-family:\'Lato\',system-ui,sans-serif;font-weight:700;font-size:82px;letter-spacing:.02em" fill="#4cc2a0">DELBIOS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Delbios Pharmaceuticals S.L.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Delbios Pharmaceuticals — nanomedicines for rare diseases, Barcelona",x:"Home"};
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
