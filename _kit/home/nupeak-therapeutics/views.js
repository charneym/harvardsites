/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Fixes the root cause","A solution to airway inflammation and mucus production, by correcting the epithelial stem cells that drive both, rather than damping one signal downstream.",'<path d="M28 6v14M28 20c-9 0-14 8-14 16s4 12 8 12M28 20c9 0 14 8 14 16s-4 12-8 12"/><circle class="f" cx="28" cy="20" r="3"/><path class="a" d="M14 36h-6M42 36h6"/>'],
  ["Inhaled, and practical","Inhaled delivery with remarkable potency, duration, selectivity and safety, at low cost, for broad use including children, and with no needles.",'<path d="M20 50V24h16v26z"/><path d="M24 24V14h8v10"/><circle class="f" cx="28" cy="8" r="1.6"/><circle class="f" cx="22" cy="4" r="1.2"/><circle class="f" cx="34" cy="5" r="1.2"/><path class="a" d="M20 34h16"/>'],
  ["Disease modification","Predictable benefit, and a change in the course of disease, not found in current or pipeline drugs, steroids or biologics.",'<path d="M6 44C16 44 20 42 23 30S27 10 30 10S35 22 38 32S42 44 50 44"/><path class="a" d="M6 44h44"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The evidence</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From NuPeak’s NIH STTR Phase II abstract (NHLBI, 2025) and the team’s published reports. Preclinical results in human cell, organoid and animal models.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Asthma · COPD<span class="nomob"> · Inhaled small molecule</span> · St. Louis</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A first-in-kind</span><span class="l">drug for asthma</span><span class="l"><em>and COPD.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>NuPeak Therapeutics is developing an inhaled small-molecule inhibitor of MAPK13, the kinase behind airway inflammation and mucus production, to modify the disease itself rather than manage its symptoms.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How it works '+ARR+'</a><a class="btn" href="#/product">The product</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Asthma and COPD remain leading causes of illness and death in the US and worldwide, and no current drug fully corrects what drives them. NuPeak goes after the root cause: <em>inflammation and mucus at their source.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.02M</span><p class="k">NIH NHLBI STTR Phase II award, 2025, to take the lead MAPK13 inhibitor toward IND approval</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2009</span><p class="k">The year the drug discovery programme began at Washington University, where it still runs alongside NuPeak</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2012</span><p class="k">NuPeak founded to carry the programme through drug development: safety, toxicology, IND and first trials</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">One kinase, <em>two disease drivers.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Target</span><span>Design</span><span>Inhale</span><span>Modify</p></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Find the target.</h2><p>In the airway lining, the kinase MAPK13 reprograms basal-epithelial stem cells and drives the two key features of asthma and COPD: airway inflammation and mucus production.</p></article>'+
     '<article class="step"><h2>Design the inhibitor.</h2><p>MAPK13 was overlooked by earlier kinase-inhibitor screens. NuPeak used structure-based drug design to engineer proprietary small molecules for potency, selectivity, binding kinetics and safety.</p></article>'+
     '<article class="step"><h2>Deliver it to the airway.</h2><p>The lead becomes NuP-4B dpi, a dry powder for inhalation, so the drug reaches the epithelium directly, with no needles and room for broad use, including children.</p></article>'+
     '<article class="step"><h2>Modify the disease.</h2><p>In disease models, airway inflammation and mucus production were blocked and reversed, and did not recur after treatment stopped.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our novel product</span><h2 class="d2 split">A disruptive answer <em>for the airway.</em></h2></div><p data-r>A first-in-kind small-molecule drug for respiratory health, from a multi-disciplinary approach that runs from target discovery to an inhaled product.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="product" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">From the lab bench <em>to the clinic.</em></h2></div><p data-r>The Washington University programme handles drug discovery, from structure-based design to proof of concept. NuPeak takes the compounds through development: safety, toxicology, IND approval and first trials in humans.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Physician-scientists, <em>built to develop.</em></h2></div><p data-r>NuPeak pairs a long-running academic discovery programme with a company built to take its compounds into the clinic.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Licence</span><p data-r>A licence from Washington University under a patent for the composition and use of MAPK13 inhibitors, including the lead and back-ups.</p></div>'+
    '<div><span class="lab kick" data-r>Support</span><p data-r>The entrepreneurial resources of BioGenerator and the Harrington Discovery Institute.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>STTR awards from the National Institutes of Health: the NHLBI for airway disease and the NCI for breast cancer.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="publications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Publications</span><h2 class="d2 split">The science, <em>in print.</em></h2></div><p data-r>Our publications give the background for the discoveries of the drug target and the product.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors and partners</span>'+
   '<h2 class="big split">Talk to <em>NuPeak.</em></h2>'+
   '<p class="sub" data-r>NuP-4B dpi is finance-ready for IND approval and first clinical trials in asthma. NuPeak would be glad to hear from investor and development partners.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email NuPeak '+ARR+'</a><a class="btn" href="#/product">See the programmes</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>NuPeak Therapeutics, Inc.<br>St. Louis, MO 63105</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>St. Louis, MO</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/product">Product</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/publications">Publications</a></div>'+
   '<div class="c"><span class="lab">Lead product</span>NuP-4B dpi<br>Inhaled MAPK13 inhibitor</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Manrope\',Arial,sans-serif;font-weight:800;font-size:58px;letter-spacing:-.03em">NuPeak</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 NuPeak Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"story",platform:"platform",product:"product",team:"team",publications:"publications",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"NuPeak Therapeutics — A first-in-kind inhaled drug for asthma and COPD, St. Louis, MO",x:"Home"};
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
