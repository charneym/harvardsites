/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk">'+(c[5]?'Earlier programme':'Active')+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["H-NOX: a heme protein family","H-NOX is a unique, stable and non-reactive heme-binding protein family with tunable affinity for oxygen, discovered and characterised in Michael Marletta’s laboratory at UC Berkeley.",'<circle cx="28" cy="28" r="17"/><path d="M28 11v34M11 28h34" opacity=".4"/><circle class="f" cx="28" cy="28" r="4.5"/><circle class="a" cx="28" cy="28" r="10"/>'],
  ["OMX: engineered carriers","H-NOX-based OMX products are sized for optimal efficacy, each engineered with the circulation half-life and tissue penetration its indication needs.",'<path d="M28 10l15 8.7v17.3L28 44.7 13 36V18.7z"/><circle class="f" cx="28" cy="20" r="3.5"/><circle class="f" cx="20.5" cy="33" r="3.5"/><circle class="f" cx="35.5" cy="33" r="3.5"/>'],
  ["Oxygen where it is missing","OMX keeps its oxygen until it reaches hypoxic microenvironments, then releases it, restoring normal tissue function where low oxygen drives disease.",'<path d="M8 28h30"/><path class="a" d="M32 21l8 7-8 7"/><circle class="f" cx="46" cy="24" r="3.2"/><circle class="f" cx="46" cy="32" r="3.2"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Platform properties</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From Omniox’s technology overview (omniox.com). Status lines above are from Omniox’s NIH project records (NIH RePORTER).</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>H-NOX oxygen delivery<span class="nomob"> · IND-stage</span> · San Francisco</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Oxygen, carried</span><span class="l">to the tissue</span><span class="l"><em>that needs it.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Omniox is developing its H-NOX platform into OMX oxygen delivery biologics: engineered proteins that carry oxygen safely into hypoxic tissue, where low oxygen drives disease and worsens outcomes.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
   '<span class="lab hcap" data-r>H-NOX domain, oxygen bound · PDB 1U55</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why oxygen</span>'+
   '<h2 class="txt" id="mani">In a stroke, a hypoxic tumour or a newborn’s heart on bypass, tissue is starved of oxygen, and red blood cells give theirs up before they reach it. OMX biologics are built to <em>go the rest of the way.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$18M</span><p class="k">In NIH awards since 2008, from NCI, NINDS, NICHD and NIGMS (NIH RePORTER)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10,000</span><p class="k">Children a year, of some 40,000 born with congenital heart disease, need urgent surgery (Omniox NIH abstract)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">60%</span><p class="k">Up to this share of infants on cardiopulmonary bypass face post-operative complications</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Mechanism of action</span><h2 class="d3">Past the red cells, <em>into the hypoxic core.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Hypoxia</span><span>Carry</span><span>Restore</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Oxygen runs out with distance.</h2><p>Oxygen falls away from the nearest capillary. Deep in a tumour or injured tissue, levels drop low enough to drive disease: cancers resist radiation and chemotherapy, heart and brain tissue is damaged.</p></article>'+
     '<article class="step"><h2>Red cells let go too early.</h2><p>Red blood cells release oxygen at ordinary venous levels, so they are depleted before they reach the hypoxic microenvironment. OMX holds on to its oxygen and travels on.</p></article>'+
     '<article class="step"><h2>OMX delivers it deep.</h2><p>Only where oxygen is pathologically low does OMX release its load, oxygenating the hypoxic core and restoring normal tissue function, without reacting with nitric oxide on the way.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A protein built <em>to hold oxygen.</em></h2></div><p data-r>OMX biologics come from H-NOX, a heme protein family that binds oxygen without reacting with nitric oxide. Omniox tunes each product’s oxygen affinity, size and half-life to the tissue it has to reach.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Where hypoxia <em>drives disease.</em></h2></div><p data-r>OMX programmes in paediatric cardiac surgery and hypoxic cancers, built on earlier work in ischemic stroke, each supported by the National Institutes of Health.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people behind <em>OMX.</em></h2></div><p data-r>An in-house team of scientific and biotechnology professionals in San Francisco, with clinical collaborators at UCSF and advisory boards of experts in medicine, science and business.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Origins</span><p data-r>Founded on H-NOX technology developed in Michael Marletta’s laboratory at the University of California, Berkeley.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>Grants from the National Cancer Institute, NINDS, NICHD and the Wellcome Trust, and private investors.</p></div>'+
    '<div><span class="lab kick" data-r>Mission</span><p data-r>To solve difficult clinical problems where hypoxia plays a central role, through rigorous science and world-class partnerships.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards <em>and milestones.</em></h2></div><p data-r>The latest on OMX from Omniox’s National Institutes of Health awards.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>Omniox.</em></h2>'+
   '<p class="sub" data-r>Whether you are a clinician working where hypoxia drives disease, an investor or a potential partner for OMX, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Omniox '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Omniox<br>181 2nd Street<br>San Francisco, CA 94105</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+16506547873">650 654 7873</a></p></div>'+
    '<div><span class="lab" data-r>Compliance</span><p data-r>Omniox adheres to NIH/PHS Financial Conflict of Interest requirements.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>181 2nd Street<br>San Francisco, CA 94105</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>650 654 7873</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platform</span>H-NOX · OMX oxygen delivery biologics</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="52" text-anchor="middle" style="font-family:\'Jost\',Arial,sans-serif;font-weight:300;font-size:64px;letter-spacing:.02em">Omni<tspan fill="#66ccff">ox</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Omniox</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Omniox — H-NOX oxygen delivery biologics for hypoxic disease",x:"Home"};
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
