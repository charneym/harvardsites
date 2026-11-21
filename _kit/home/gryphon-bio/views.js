/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Thousands of brain molecules","Over more than 20 years of -omic research, Gryphon’s co-founders found unexpected waves of thousands of brain-specific molecules in the blood: proteins released by injured astrocytes, neurons and axons.",'<path d="M10 34c4-14 14-22 24-20 9 2 13 10 12 17-1 8-9 12-17 11"/><path class="a" d="M14 44c6-3 10-3 15 0s10 3 15 0"/><circle class="f" cx="22" cy="30" r="2.4"/><circle class="f" cx="32" cy="24" r="2.4"/><circle class="f" cx="38" cy="34" r="2.4"/>'],
  ["Waves, not a snapshot","The levels of brain molecules in the blood change over time, like waves in the ocean. Read across hours, days and months, a panel can follow recovery instead of capturing a single moment.",'<path d="M6 40h44"/><path class="a" d="M6 38c5 0 6-24 11-24s7 24 12 24 6-12 10-12 6 12 11 12"/><circle class="f" cx="17" cy="14" r="2.6"/>'],
  ["A sample anywhere","Gryphon is testing capillary dried plasma spots from a fingerstick against venous plasma. In a 2026 pilot, paired GFAP and NfL measurements were well correlated, supporting analytical feasibility.",'<rect x="20" y="8" width="16" height="40"/><path d="M20 16h16"/><path class="a" d="M23 30h10v14H23z"/><circle class="f" cx="28" cy="37" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>What the tests are for</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From Gryphon’s mission and pipeline. The blood tests are in observational clinical studies and are not yet cleared by the FDA.</p></div></div>'}
function backers(){return '<div class="bk"><span class="lab kick" data-r>Studied with</span><p class="cr" data-r><span>VA Puget Sound</span><i>·</i><span>University of Pittsburgh Medical Center</span><i>·</i><span>Sheba Medical Center</span><i>·</i><span>North Florida/South Georgia VA</span><i>·</i><span>Virginia Commonwealth University</span><i>·</i><span>UCSF</span><i>·</i><span>Morehouse School of Medicine</span></p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Blood tests for brain health<span class="nomob"> · Clinical stage</span> · South San Francisco</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Brain health,</span><span class="l"><em>read in the blood.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Gryphon Bio develops clinical blood tests for brain biomarkers, to monitor patients with traumatic brain injury, Alzheimer’s disease and adjacent conditions through the whole course of their care.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">The science '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Traumatic brain injury remains one of the leading causes of death and disability in children and adults worldwide. Gryphon’s tests are built to follow a brain’s recovery from <em>a blood sample.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$13M+</span><span class="k">Non-dilutive government grant awards and contracts</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">22 yrs</span><span class="k">Of proteomic research by the co-founders behind the biomarkers</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1000s</span><span class="k">Of brain molecules found travelling in the blood, in waves</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the test works</span><h2 class="d3">From an injury <em>to a reading.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Injury</span><span>Blood</span><span>Reading</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>An injury releases brain proteins.</h2><p>When the brain is injured, its cells shed proteins: GFAP from astrocytes, UCH-L1 from neurons, neurofilaments and Tau from damaged axons. They are specific to the brain.</p></article>'+
     '<article class="step"><h2>They reach the blood in waves.</h2><p>These brain-specific molecules cross into the circulation, and their levels rise and fall over hours, days and months, like waves in the ocean. Each wave is a biomarker of what the brain is going through.</p></article>'+
     '<article class="step"><h2>A blood test reads the waves.</h2><p>Gryphon’s panel measures them from a blood sample, and a fingerstick may one day be enough. Read over time, the results can help care providers judge recovery and return to work, play or duty.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Molecular evidence <em>of brain health.</em></h2></div><p data-r>Gryphon designs, develops, validates and manufactures clinical blood tests for brain biomarkers, so that care providers can follow a patient’s brain from injury to recovery, and into healthy ageing.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Tests in the clinic, <em>therapies in the lab.</em></h2></div><p data-r>Gryphon’s blood tests are in observational clinical studies for traumatic brain injury and Alzheimer’s disease, and the same biomarker science guides its NIH-funded therapeutic research.</p></div>'+
   pipeRows(PIPE)+
   evid()+
   backers()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Biomarker scientists, <em>diagnostics builders.</em></h2></div><p data-r>An interdisciplinary team with deep experience in blood test development, from proteomics and bioanalytical chemistry to commercialising laboratory and point-of-care diagnostics.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Patients</span><p data-r>Children and adults, civilian, military and Veteran patients, starting with traumatic brain injury, Alzheimer’s disease and mild cognitive impairment.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>More than $13M in non-dilutive grant awards and contracts, including NIH NINDS SBIR awards and the Department of Defense’s CDMRP.</p></div>'+
    '<div><span class="lab kick" data-r>Where</span><p data-r>South San Francisco, California, with clinical study partners at multiple U.S. and international sites.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Studies, awards <em>and announcements.</em></h2></div><p data-r>Gryphon’s latest research, grant record and releases.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering, studies and media</span>'+
   '<h2 class="big split">Work with <em>Gryphon.</em></h2>'+
   '<p class="sub" data-r>Gryphon works with clinical testing laboratories, clinical study sites and drug developers. Write to the team about partnering, studies or media.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Gryphon '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Gryphon Bio, Inc.<br>611 Gateway Blvd, Suite 120 #253<br>South San Francisco, CA 94080</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="https://www.linkedin.com/company/gryphon-bio" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>611 Gateway Blvd, Suite 120 #253<br>South San Francisco, CA 94080</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Traumatic brain injury<br>Alzheimer’s disease<br>Mild cognitive impairment</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Cormorant Garamond\',Georgia,serif;font-weight:600;font-size:74px;letter-spacing:.16em">GRYPHON</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Gryphon Bio, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"platform",technology:"platform",platform:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Gryphon Bio — blood tests for brain health, South San Francisco, CA",x:"Home"};
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
