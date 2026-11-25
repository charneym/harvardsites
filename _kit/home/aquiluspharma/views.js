/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[3])+'</b><i>'+esc(c[2])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p>'+(c[5]?'<a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a>':'<span></span>')+'</li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* milestones as a year grid (a different form from the team list above it, DW) */
function news(){var ys=[],by={};NEWS.forEach(function(n){if(!by[n[0]]){by[n[0]]=[];ys.push(n[0])}by[n[0]].push(n)});
  return '<div class="aq-yrs">'+ys.map(function(y){return '<div class="aq-yr"><span class="aq-y">'+esc(y)+'</span><ul>'+by[y].map(function(n){
    return '<li>'+(n[2]?'<a href="'+n[2]+'" target="_blank" rel="noopener"><span class="aq-h">'+esc(n[1])+'</span><span class="lab aq-go">Read '+ARR+'</span></a>':'<span class="aq-h">'+esc(n[1])+'</span>')+'</li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Orally bioavailable","AQU-118 is a safe, orally bioavailable small molecule, designed to be taken by mouth rather than infused or injected.",'<path d="M14 36L36 14a8.5 8.5 0 0 1 12 12L26 48a8.5 8.5 0 0 1-12-12Z"/><path class="a" d="M25 25l12 12"/><circle class="f" cx="20" cy="42" r="2.6"/>'],
  ["Two enzymes, one molecule","A semi-selective inhibitor of MMP-9 and MMP-2, the two matrix metalloproteinases a growing body of evidence links with the severity and rate of progression of ALS.",'<circle cx="20" cy="28" r="13"/><circle cx="36" cy="28" r="13"/><path class="a" d="M28 17.5v21"/><circle class="f" cx="28" cy="28" r="3"/>'],
  ["Active in disease models","It significantly reduced nerve damage in rodent models of neuropathic pain and nerve injury, and mitigated weight loss and reduced grip strength in the TDP-43 mouse model of ALS.",'<path d="M8 44C16 44 20 22 30 20S44 30 48 12"/><path class="a" d="M8 48h40"/><circle class="f" cx="30" cy="20" r="3.2"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick">The clinical path</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab">'+esc(e[0])+'</dt><dd>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s">Development has been funded by the ALS Association, the National Institutes of Health and the Department of Defense. Timelines as published on aquiluspharma.com.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>ALS · Phase 1 · Winchester, Massachusetts</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A first-in-class</span><span class="l">oral medicine</span><span class="l"><em>for ALS.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Aquilus Pharmaceuticals is developing AQU-118, an orally bioavailable inhibitor of MMP-9 and MMP-2, two enzymes linked with the severity and rate of progression of ALS. The FDA cleared its IND for a Phase 1 trial in 2025.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How AQU-118 works '+ARR+'</a><a class="btn" href="#/pipeline">The programme</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">ALS takes away the ability to speak, eat, move and eventually breathe. A growing body of evidence ties MMP-9 and MMP-2 to how fast it progresses, yet no MMP inhibitor has ever been approved. <em>Aquilus is developing one for ALS.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2–5</span><p class="k">Years of life expectancy after an ALS diagnosis</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.9M</span><p class="k">In ALS awards from the NIH, the Department of Defense, the ALS Association and the Hoffman programme, 2019–2023</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~24</span><p class="k">Zinc-dependent enzymes in the MMP family; AQU-118 targets the two linked with ALS</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How AQU-118 works</span><h2 class="d3">Block the enzymes, <em>spare the nerve.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Matrix</span><span>MMPs</span><span>AQU-118</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A motor neuron in its matrix.</h2><p>Motor neurons sit in a mesh of extracellular matrix that supports them and carries signals between cells. In ALS, upper and lower motor neurons are lost, causing paralysis and muscular atrophy.</p></article>'+
     '<article class="step"><h2>MMP-9 and MMP-2 cut it apart.</h2><p>Matrix metalloproteinases are zinc-dependent enzymes that can cleave virtually any part of the matrix, and also process growth factors, cytokines and their receptors. Higher MMP-9 and MMP-2 are linked with faster, more severe ALS.</p></article>'+
     '<article class="step"><h2>AQU-118 blocks them.</h2><p>Taken by mouth, AQU-118 inhibits MMP-9 and MMP-2. In the TDP-43 mouse model of ALS it mitigated weight loss and reduced grip strength, and in rodent nerve-injury models it significantly reduced nerve damage.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">A new target class <em>in ALS.</em></h2></div><p data-r>MMPs are a family of around 24 zinc-dependent endopeptidases. They facilitate cell migration and affect the signalling that regulates cell proliferation, differentiation and cell death. AQU-118 is built to inhibit the two most closely linked with ALS.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programme</span><h2 class="d2 split">One molecule, <em>into the clinic.</em></h2></div><p data-r>AQU-118 is Aquilus’ lead and only disclosed candidate. Its development path runs from published animal data, through biomarker work in ALS patients, to a Phase 1 trial.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug developers, <em>with ALS clinicians beside them.</em></h2></div><p data-r>A core team driven by a shared passion for making a difference in the lives of patients facing neurodegenerative diseases, working with leading ALS researchers at Harvard, Barrow and Arizona.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick">Funding</span><p>A pre-Series A biotech, funded through grants from the ALS Association, the National Institutes of Health and the Department of Defense.</p></div>'+
    '<div><span class="lab kick">Community</span><p>Aquilus partners with people directly affected by neurodegenerative disease, for guidance from the patient and caregiver perspective.</p></div>'+
    '<div><span class="lab kick">Ecosystem</span><p>Selected in 2025 by MassBio and SCbio as one of ten innovative companies for the Fall Drive accelerator programme.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Six years of steps, <em>toward patients.</em></h2></div><p data-r>From the first NIH grant in 2019 to an FDA-cleared IND in 2025, the milestones behind AQU-118.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering, investors and the ALS community</span>'+
   '<h2 class="big split">Talk to <em>Aquilus.</em></h2>'+
   '<p class="sub" data-r>For partnering, investment, clinical collaboration or general information about AQU-118, the team would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Aquilus '+ARR+'</a><a class="btn" href="#/pipeline">See the programme</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Aquilus Pharmaceuticals, Inc.<br>Winchester, Massachusetts</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Lead candidate</span><p data-r>AQU-118 · MMP-9 / MMP-2<br>Phase 1, IND cleared 2025</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Aquilus Pharmaceuticals, Inc.<br>Winchester, Massachusetts</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead candidate</span>AQU-118<br>MMP-9 / MMP-2 inhibitor</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Tinos\',\'Times New Roman\',serif;font-weight:400;font-size:64px;letter-spacing:.04em">Aquilus</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Aquilus Pharmaceuticals, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",approach:"story",science:"science",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Aquilus Pharmaceuticals — AQU-118, an oral MMP-9 and MMP-2 inhibitor for ALS, Winchester, Massachusetts",x:"Home"};
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
