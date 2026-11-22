/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
var PHS=["Discovery","Preclinical","Phase 1","Phase 2"];
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[7]?' class="dim"':'')+'><span class="lab tg"><b'+(c[7]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span>'+
   '<span class="stg" aria-hidden="true"><span class="tr"><i class="p" style="width:'+(c[5]/4*100)+'%"></i><i style="width:'+(c[4]/4*100)+'%"></i></span><span class="ph">'+PHS.map(function(p){return '<span>'+p+'</span>'}).join("")+'</span></span></div>'+
   '<p>'+esc(c[6])+'</p><span class="lab lk">'+esc(c[8])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["First in the cascade","Oligomerix screens compounds with full-length, unmutated tau under conditions that promote oligomer formation, without heparin or intercalating dyes, to best recapitulate the oligomers linked to PSP, FTD and Alzheimer’s disease. Most competing programmes act further downstream.",'<circle class="f" cx="16" cy="28" r="4"/><circle cx="30" cy="20" r="4"/><circle cx="30" cy="36" r="4"/><circle cx="42" cy="28" r="4"/><path class="a" d="M22 28h2"/>'],
  ["An oral small molecule","Simple to take, with a smaller safety-monitoring burden than recently approved antibody treatments, a low cost of manufacturing and access on a global scale. It could also complement tau and beta-amyloid antibodies.",'<rect x="12" y="22" width="32" height="13" rx="0" transform="rotate(-30 28 28)"/><path class="a" d="M22.4 18.3l11.2 19.4"/>'],
  ["Into the brain and the neuron","OLX-07010 has established brain penetration and can enter neurons, where tau aggregation takes place.",'<path d="M28 10c-9 0-15 6-15 13 0 5 3 8 3 12v9h12"/><path d="M28 10c9 0 15 6 15 13 0 5-3 8-3 12v9H28"/><circle class="f" cx="28" cy="26" r="4.5"/><path class="a" d="M28 44V31"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Preclinical evidence</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Results in transgenic mouse models of tauopathy, as published by Oligomerix and its collaborators (Davidowitz EJ et al., 2020 and 2023; Patel DR et al., 2024).</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Tauopathies<span class="nomob"> · OLX-07010</span> · Bronx, New York</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Stop tau</span><span class="l">at the</span><span class="l"><em>first step.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Oligomerix develops oral, disease-modifying small molecules that inhibit tau self-association, the beginning of the tau aggregation cascade, for Alzheimer’s disease and rare tauopathies such as progressive supranuclear palsy.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">Our science '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why tau</span>'+
   '<h2 class="txt" id="mani">Inside healthy neurons, tau steadies the microtubules. In Alzheimer’s disease and the rare tauopathies it comes loose and binds to itself, forming toxic oligomers and, later, tangles. OLX-07010 is an oral small molecule built to <em>block that first step.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">76</span><p class="k">Volunteers dosed in the completed Phase 1a study of OLX-07010, at 25 to 200 mg</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20</span><p class="k">Known tauopathies; Alzheimer’s disease, the largest, affects 6.7 million people in the US</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.9M</span><p class="k">NIH Phase II SBIR Fast-Track grant (June 2026) for the safety studies that lead to patient trials</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How OLX-07010 works</span><h2 class="d3">Keep tau apart, <em>stop the cascade.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Tau</span><span>Cascade</span><span>Block</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Tau steadies the neuron.</h2><p>Along the axon, microtubules carry cargo from the cell body to the synapse. Tau binds along them and holds the tracks together.</p></article>'+
     '<article class="step"><h2>Loose tau binds to itself.</h2><p>In tauopathies, tau comes off the microtubules and self-associates: first into small toxic oligomers, then into ever larger aggregates and the tangles of Alzheimer’s disease and PSP.</p></article>'+
     '<article class="step"><h2>OLX-07010 blocks the first step.</h2><p>By inhibiting tau self-association, OLX-07010 acts at the start of the cascade, minimising the formation of toxic oligomers and of the aggregates and tangles that follow.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">Inhibitors of tau <em>self-association.</em></h2></div><p data-r>Oligomerix has built a platform of assays, tools and know-how around one target, tau, for more than sixteen years, and discovered drug-like small molecules that stop it forming toxic oligomers.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One lead compound, <em>two paths.</em></h2></div><p data-r>OLX-07010 has completed its first-in-human Phase 1a study and is preparing for Phase 1b. Oligomerix is developing it for both Alzheimer’s disease and PSP.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people behind <em>OLX-07010.</em></h2></div><p data-r>Founded by scientists who have worked on tau for more than sixteen years, now led by a physician with a quarter century in clinical development.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NIH SBIR Fast-Track awards from the National Institute on Aging for the safety studies that support clinical trials in Alzheimer’s patients.</p></div>'+
    '<div><span class="lab kick" data-r>Diagnostics</span><p data-r>An exclusive global licensing agreement with NanoDetection Technology for neurodegenerative diagnostic antibodies (June 2026).</p></div>'+
    '<div><span class="lab kick" data-r>Partnering</span><p data-r>Oligomerix welcomes discussions with strategic partners, foundations, dementia funds and investors on its clinical programme.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the clinic <em>and the lab.</em></h2></div><p data-r>The latest on OLX-07010: the trial, the grants, the people and the papers.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and foundations</span>'+
   '<h2 class="big split">Talk to <em>Oligomerix.</em></h2>'+
   '<p class="sub" data-r>Oligomerix is in discussions with strategic partners, leading foundations, dementia funds and investors, and welcomes the opportunity to talk.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Oligomerix '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Oligomerix, Inc.<br>1300 Morris Park Avenue<br>Bronx, NY 10461</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r>Jack Pasini, Chief Commercial Officer<br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19179124088">917-912-4088</a></p></div>'+
    '<div><span class="lab" data-r>Lead programme</span><p data-r>OLX-07010, an oral tau self-association inhibitor, for Alzheimer’s disease and rare tauopathies.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>1300 Morris Park Avenue<br>Bronx, NY 10461</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19179124088">917-912-4088</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead compound</span>OLX-07010 · Oral inhibitor of tau self-association</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Jost\',Arial,sans-serif;font-weight:500;font-size:56px;letter-spacing:.24em">OLIGOMERIX</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Oligomerix, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",mechanism:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Oligomerix — oral small molecules that stop tau self-association in Alzheimer’s disease and rare tauopathies",x:"Home"};
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
