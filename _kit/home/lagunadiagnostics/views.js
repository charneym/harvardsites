/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+esc(c[6])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function newsUnused(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Stable trait biomarkers","Laguna identified blood-based RNA gene biomarkers that are stable traits of lifelong psychiatric disorders, so they can be read in patients who are still undiagnosed or misdiagnosed.",'<path d="M8 20c8-10 16 10 24 0s16 10 20 4"/><path class="a" d="M8 36c8-10 16 10 24 0s16 10 20 4"/>'],
  ["Measured in blood","A panel of mRNA gene expression signatures from a routine venous blood sample, quantified to give the clinician an objective probability score.",'<path d="M22 6h12M24 6v38a4 4 0 0 0 8 0V6"/><path class="a" d="M24 26h8"/><path class="f" d="M24.6 27h6.8v17a3.4 3.4 0 0 1-6.8 0z"/>'],
  ["Results in days","Test results are returned to the ordering physician within days, where the clinical route to a diagnosis typically takes one to three years.",'<path d="M8 14h40v34H8zM8 22h40M18 8v10M38 8v10"/><path class="a" d="M18 34l6 6 12-12"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Pivotal clinical trial</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Pioneering work at the University of California, Irvine and the University of Iowa, supported by two NIMH SBIR grants; study published in Molecular Neuropsychiatry (2018), as reported on lagunadiagnostics.com.</p></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Blood-based psychiatric diagnostics<span class="nomob"> · FDA Breakthrough Device</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A diagnosis in days,</span><span class="l"><em>not years.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Laguna Diagnostics develops mRNA gene biomarker blood tests that diagnose and differentiate schizophrenia and bipolar disorder, with results returned to the ordering physician within days.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">The science '+ARR+'</a><a class="btn" href="#/pipeline">Our tests</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>A critical unmet need</span>'+
   '<h2 class="txt" id="mani">Schizophrenia and bipolar disorder share symptoms, and a diagnosis can take one to three years. <em>An objective blood test can return one in days.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">~50%</span><p class="k">Of schizophrenia cases initially misdiagnosed</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~70%</span><p class="k">Of bipolar disorder cases initially misdiagnosed</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2.2M</span><p class="k">Potential U.S. schizophrenia and bipolar patients each year</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the test works</span><h2 class="d3">From one blood draw <em>to an answer.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Draw</span><span>Read</span><span>Score</span><span>Report</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A routine blood draw.</h2><p>The test starts with a single venous blood sample, taken like any other lab test, with no imaging and no months of observation.</p></article>'+
     '<article class="step"><h2>The cells&#8217; own messages.</h2><p>White blood cells carry messenger RNA. Laguna reads the expression of a panel of genes it found to differ, as stable traits, in schizophrenia and bipolar disorder.</p></article>'+
     '<article class="step"><h2>One gene panel, one score.</h2><p>The expression levels of the panel are quantified and combined into an objective probability score that separates schizophrenia, bipolar disorder and no psychiatric disorder.</p></article>'+
     '<article class="step"><h2>Days, not years.</h2><p>Results go back to the ordering physician within days, to be used together with clinical assessment, where today the diagnostic odyssey runs one to three years.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Psychiatry, read <em>in the blood.</em></h2></div><p data-r>Current diagnosis relies on patient-reported symptoms and clinical observation by psychiatrists. Laguna&#8217;s quantitative blood RNA gene tests give clinicians an objective measure, built on two decades of psychiatric genomics at UC Irvine.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One panel, <em>three uses.</em></h2></div><p data-r>The first products, protected by two U.S. patents, diagnose and differentiate schizophrenia and bipolar disorder. Laguna plans to commercialise through a licensed CLIA-certified laboratory partner and is raising seed funding for its FDA clinical validation trial.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Genomics and <em>diagnostics, together.</em></h2></div><p data-r>Founded by a UC Irvine psychiatric genomics pioneer and a diagnostics executive with nearly four decades in life sciences, with a team from Sigma-Aldrich, Dionex and growth-stage finance.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Laguna.</em></h2></div><p data-r>Company releases and coverage, from the FDA Breakthrough Device Designation to the patents and the peer-reviewed study behind the test.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, pharma and laboratory partners</span>'+
   '<h2 class="big split">Talk to <em>Laguna.</em></h2>'+
   '<p class="sub" data-r>We explore partnerships with venture investors, pharmaceutical companies, CLIA-certified labs, CROs and joint ventures. Dr. Terry Osborn would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r>Irvine, California<br>USA</p></div>'+
    '<div><span class="lab" data-r>Partnerships</span><p data-r>Seed funding round<br>Companion diagnostics</p></div>'+
    '<div><span class="lab" data-r>General inquiries</span><p data-r><a class="ul" href="'+MAIL+'">info@lagunadiagnostics.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Irvine, California<br>USA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@lagunadiagnostics.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Tagline</span>Days, NOT Years&#8482;</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Archivo\',sans-serif;font-weight:600;font-size:64px">LAGUNA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Laguna Diagnostics, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",story:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Laguna Diagnostics — psychiatric diagnosis in days, not years",x:"Home"};
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
