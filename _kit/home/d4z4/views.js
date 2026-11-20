/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Long-read assay","Standardised and validated for FSHD, with its capacity increased by adding target regions, and validated using clinical samples. Structural variation and DNA methylation come from one assay.",'<path d="M6 28c6-10 10-10 16 0s10 10 16 0 10-10 12-4"/><path class="a" d="M6 40H50"/><circle class="f" cx="18" cy="40" r="2.6"/><circle class="f" cx="34" cy="40" r="2.6"/>'],
  ["Analysis pipeline","A bioinformatics pipeline optimised for long-read data that contains D4Z4 repeat sequences, with a user-friendly, scalable interface for fast and accurate diagnostic reports.",'<path d="M10 10h36v36H10z"/><path class="a" d="M16 36l8-9 7 5 10-14"/><path d="M16 20h10"/>'],
  ["Beyond FSHD","The assay and the analysis tool will be expanded to cover additional genes and diseases with complex genetic and epigenetic alterations.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M28 10v36M10 28h36"/><circle class="f" cx="28" cy="28" r="3"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Genetic diagnostics<span class="nomob"> · Long-read sequencing</span> · Maryland</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Structure and</span><span class="l">methylation,</span><span class="l"><em>in one assay.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>D4Z4 Medicine develops long-read sequencing assays that determine structural variation and DNA methylation together, starting with a molecular diagnostic for facioscapulohumeral muscular dystrophy (FSHD).</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How the assay works '+ARR+'</a><a class="btn" href="#/diagnostics">Our diagnostics</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Structural changes in the genome and alterations of DNA methylation contribute to many diseases, and both are hard to assess with current technologies. D4Z4 Medicine reads them <em>together.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 assay</span><span class="k">For structural variation and DNA methylation, built on long-read sequencing</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3.3 kb</span><span class="k">The length of one D4Z4 repeat unit; contraction of the D4Z4 repeat causes FSHD</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$313K</span><span class="k">NIH NCATS STTR Phase I award, 2025, for long-read sequencing-based diagnosis</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the assay works</span><h2 class="d3">One long read, <em>two answers.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Structure</span><span>Methylation</span><span>Report</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Read the repeat end to end.</h2><p>Long-read sequencing reads through complex genomic regions such as the D4Z4 repeat array, so the structure of the region can be determined directly.</p></article>'+
     '<article class="step"><h2>Read methylation on the same molecule.</h2><p>The same long reads carry the DNA methylation of the region, so structural variation and methylation are determined in one assay.</p></article>'+
     '<article class="step"><h2>Turn the data into a report.</h2><p>A bioinformatics pipeline built for long-read data containing D4Z4 repeat sequences, with a user-friendly interface, generates the diagnostic report quickly and accurately.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">Long reads, built <em>for diagnosis.</em></h2></div><p data-r>One focus of D4Z4 Medicine is long-read sequencing-based assays that determine structural variations and DNA methylation in one assay, paired with data analysis that turns them into a report.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="diagnostics" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Diagnostics</span><h2 class="d2 split">First, a diagnosis <em>for FSHD.</em></h2></div><p data-r>Facioscapulohumeral muscular dystrophy does not have an effective diagnostic tool. D4Z4 Medicine’s first assay and analysis pipeline are designed to provide one, and then to cover more genes and diseases.</p></div>'+
   pipeRows(PIPE)+
   '<div class="bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r><span>National Center for Advancing Translational Sciences</span><i>·</i><span>National Institutes of Health</span><i>·</i><span>STTR Phase I, 2025–2027</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">Better diagnosis of <em>genetic disease.</em></h2></div><p data-r>D4Z4 Medicine Inc. is dedicated to its mission to improve global health through the development of cutting-edge technologies in diagnosis and treatments of genetic diseases.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Headquarters</span><p data-r>Germantown, Maryland, in Montgomery County.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NIH NCATS STTR Phase I award 1R41TR005388-01, $313,372, from August 2025.</p></div>'+
    '<div><span class="lab kick" data-r>Focus</span><p data-r>Diseases with complex genomic and DNA methylation changes, starting with FSHD.</p></div>'+
   '</div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Work with us</span>'+
   '<h2 class="big split">Talk to <em>D4Z4 Medicine.</em></h2>'+
   '<p class="sub" data-r>Interested in our work or in working with us? We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+FORM+'" target="_blank" rel="noopener">Contact us '+ARR+'</a><a class="btn" href="#/diagnostics">See the diagnostics</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>D4Z4 Medicine Inc.<br>Germantown, Maryland</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a></p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r><a class="ul" href="'+AWARD+'" target="_blank" rel="noopener">NIH RePORTER</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Germantown, Maryland</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/diagnostics">Diagnostics</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">First programme</span>FSHD molecular diagnostic<br>NIH NCATS STTR</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Roboto\',Arial,sans-serif;font-weight:700;font-size:60px;letter-spacing:.02em">D4Z4 Medicine</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 D4Z4 Medicine Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",platform:"platform",diagnostics:"diagnostics",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"D4Z4 Medicine — Long-read sequencing diagnostics for genetic disease, Germantown, Maryland",x:"Home"};
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
