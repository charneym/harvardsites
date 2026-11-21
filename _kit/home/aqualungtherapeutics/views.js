/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Injured tissue releases eNAMPT","Lung injury, infection, mechanical ventilation and other stresses push NAMPT out of cells. Outside the cell it acts as a danger signal: extracellular NAMPT, or eNAMPT, raised in human and mouse pulmonary fibrosis and higher still as prostate cancer spreads.",'<circle cx="22" cy="30" r="14"/><path class="a" d="M33 22l5-3M35 30h6M33 38l5 3"/><circle class="f" cx="44" cy="17" r="2.6"/><circle class="f" cx="47" cy="30" r="2.6"/><circle class="f" cx="44" cy="43" r="2.6"/>'],
  ["eNAMPT switches on TLR4","eNAMPT binds the TLR4 receptor and turns on NF-κB signaling, which drives inflammation, vascular leak and fibrosis. It sits upstream of both the inflammatory and the fibrotic arms, which is why one target reaches so many diseases.",'<path d="M6 36h44"/><path d="M6 40h44"/><path d="M22 36V22c0-4-3-6-3-10M34 36V22c0-4 3-6 3-10"/><path class="a" d="M28 44v8M24 49l4 4 4-4"/><circle class="f" cx="28" cy="10" r="3.4"/>'],
  ["ALT-100 neutralizes eNAMPT","ALT-100 binds eNAMPT outside the cell, before it reaches the receptor. It does not block TLR4 itself. Two companion biomarkers, a plasma eNAMPT assay and a NAMPT genotype test, are planned to select patients in PAISANO and ALTAR-100.",'<path d="M28 52V30M28 30L14 10M28 30L42 10"/><path class="a" d="M14 10l-5-6M14 10l6-4M42 10l5-6M42 10l-6-4"/><circle class="f" cx="28" cy="30" r="3"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
var MOL=[
 ["Format","Humanized IgG4 monoclonal antibody"],
 ["Half-life","About three weeks, which may allow monthly dosing"],
 ["Supply","GMP-manufactured drug supply in hand"],
 ["Patent","Composition of matter, US 11,142,586, to 2041"]];
function evid(){return '<div class="ev"><span class="lab kick" data-r>The molecule</span><div><dl>'+MOL.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>In the Phase 1a study, healthy volunteers received a single intravenous dose of ALT-100 (0.1 to 4 mg/kg) or placebo, with no deaths, serious adverse events, dose-limiting toxicities or infusion reactions (Miele et al., 2024). ALT-100 is an investigational drug and has not been approved by the FDA or any other regulatory authority.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage immunotherapeutics<span class="nomob"> · Tucson, AZ</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Stop runaway</span><span class="l">inflammation</span><span class="l"><em>at its source.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Aqualung Therapeutics is developing ALT-100, a humanized antibody that neutralizes eNAMPT, the danger signal that drives inflammation, vascular leak and fibrosis. The lead program is in progressive pulmonary fibrosis.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">Our science '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Uncontrolled inflammation and vascular leak sit at the core of life-threatening disease, from ARDS in the ICU to fibrosis, prematurity and metastatic cancer. Aqualung is built on one discovery: a single upstream signal, eNAMPT, drives them, and <em>one antibody can block it.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">50%</span><span class="k">Fall in the organ-injury score by Day 3 after one dose in the randomized PUERTA ARDS trial, against a 20% rise on placebo</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Three</span><span class="k">FDA-cleared INDs for ALT-100: ARDS in 2022, progressive pulmonary fibrosis in 2025, bone-metastatic prostate cancer in 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Six</span><span class="k">Programs from one molecule, one GMP process and one human safety database</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How ALT-100 works</span><h2 class="d3">Catch the signal <em>before the receptor.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Release</span><span>Signal</span><span>Neutralize</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Injured tissue releases eNAMPT.</h2><p>Lung injury, infection or mechanical ventilation push NAMPT out of stressed cells. Outside the cell it becomes a danger signal, eNAMPT, and drifts toward the tissue around it.</p></article>'+
     '<article class="step"><h2>eNAMPT switches on TLR4.</h2><p>It binds the TLR4 receptor and turns on NF-κB signaling inside the cell. That one switch drives inflammation, vascular leak and, over time, fibrosis.</p></article>'+
     '<article class="step"><h2>ALT-100 neutralizes it.</h2><p>The antibody binds eNAMPT outside the cell, upstream of both the inflammatory and the fibrotic arms, so the receptor is never switched on. TLR4 itself is left alone.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">One upstream target, <em>one antibody.</em></h2></div><p data-r>The discovery behind Aqualung was made in Dr. Garcia’s laboratory at Johns Hopkins, where a functional genomics program identified NAMPT as a candidate gene in ARDS, pulmonary fibrosis and pulmonary hypertension. ALT-100 targets that upstream danger signal rather than a single downstream cytokine.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Six programs, <em>one molecule.</em></h2></div><p data-r>From the lung outward: the lead program in progressive pulmonary fibrosis, clinical proof of concept in ARDS, and programs in prostate cancer, prematurity, pulmonary hypertension and autoimmune disease. Timelines are planned and may change.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Physician-scientists <em>and builders.</em></h2></div><p data-r>Founded by a pulmonologist and critical care physician who has worked on NAMPT since 2005, and run with executives who have taken drugs through licensing and launch.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Where</span><p data-r>Main office in Tucson, Arizona, with a satellite office in Juno Beach, Florida, and research with the University of Florida.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>STTR awards from the National Institutes of Health, most recently from the NHLBI for ALT-100 in pulmonary fibrosis (2025).</p></div>'+
    '<div><span class="lab kick" data-r>Partners</span><p data-r>A license agreement with LeaderMed for ALT-100 in China and the Asia-Pacific region (2022).</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Trials, clearances <em>and papers.</em></h2></div><p data-r>The latest milestones for ALT-100, from FDA clearances to peer-reviewed results.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and investment</span>'+
   '<h2 class="big split">Talk to <em>Aqualung.</em></h2>'+
   '<p class="sub" data-r>Interested in partnering, learning more or an investor presentation? Aqualung is glad to hear from clinicians, partners and investors as ALT-100 enters three new trials.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Aqualung '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Main office</span><p data-r>Aqualung Therapeutics, Corp.<br>6080 N Pinchot Rd<br>Tucson, AZ 85750</p></div>'+
    '<div><span class="lab" data-r>Satellite office</span><p data-r>450 Ocean Dr, 1205<br>Juno Beach, FL 33408</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+13126187337">312-618-7337</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Main office</span>Tucson, AZ<br>Satellite office: Juno Beach, FL</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">ALT-100</span>Humanized IgG4 anti-eNAMPT antibody<br>Investigational; not FDA approved</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="50" text-anchor="middle" style="font-family:\'Marcellus\',Georgia,serif;font-weight:400;font-size:58px;letter-spacing:.12em">AQUALUNG</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Aqualung Therapeutics, Corp.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"platform",technology:"platform",platform:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Aqualung Therapeutics — ALT-100, an antibody against runaway inflammation, Tucson, AZ",x:"Home"};
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
