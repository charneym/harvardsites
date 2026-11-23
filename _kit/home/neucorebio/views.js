/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[0])+'<span class="loc">'+esc(c[1])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Fibroblast-derived, nerve-directed","Abundant human dermal fibroblasts are transiently reprogrammed toward a Schwann-cell identity, so the vesicles they release carry natural homing signals for diseased peripheral nerve cells — no synthetic chemical targeting bolted on afterwards.",'<ellipse cx="27" cy="29" rx="13.5" ry="8.5" transform="rotate(-22 27 29)"/><path d="M15 37c-4 4-7 7-9 11M39 21c4-4 7-7 10-11"/><ellipse class="a" cx="27" cy="29" rx="5.6" ry="4" transform="rotate(-22 27 29)"/><circle class="f" cx="27" cy="29" r="2.1"/>'],
  ["Cargo a virus cannot carry","Plasmid DNA and messenger RNA are packaged into purified vesicles after harvest, at high encapsulation efficiency and without losing nanoscale stability — including genes such as NF1 that exceed the packaging limit of adeno-associated viral vectors.",'<circle cx="28" cy="28" r="17"/><circle class="a" cx="28" cy="28" r="10" stroke-dasharray="3 3.4"/><path class="a" d="M22 28q6-7 12 0"/><circle class="f" cx="28" cy="24" r="2.2"/>'],
  ["Re-administrable, and scalable","Vesicles are biocompatible and show low immunogenicity, so a patient can be dosed again. Chemically defined culture media more than doubled yield and removed bovine serum entirely, putting bioreactor-scale manufacture within reach.",'<path d="M15 16h26v23a13 13 0 0 1-26 0z"/><path d="M28 16V8M21 8h14"/><path class="a" d="M15 26h26"/><circle class="f" cx="28" cy="35" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Phase I results, October 2026</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Project outcomes report for NSF STTR Phase I award 2507437, Neucore Bio, Inc., last modified 12 October 2026. Preclinical results in cell culture; the company states that Phase II will transfer manufacturing to Lonza and run in vivo studies at Indiana University School of Medicine.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Engineered extracellular vesicles<span class="nomob"> · non-viral delivery</span> · Columbus, OH</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Deliver what</span><span class="l">a virus <em>cannot</em></span><span class="l"><em>carry.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Neucore Bio engineers fibroblast-derived extracellular vesicles into FixE, a non-viral platform for genetic medicines too large for a virus to carry, with lead programmes in neurofibromatosis type 1 and Charcot-Marie-Tooth disease type 1A.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/platform">The platform '+ARR+'</a><a class="btn" href="#/pipeline">Programmes</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Viral vectors set the limits of gene therapy: cargo too large for the capsid, immune reactions that rule out a second dose, no natural address on a peripheral nerve. Neucore Bio starts instead from the vesicle the body already uses to carry RNA between cells, <em>and gives it both the cargo and the address.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2&#215;</span><p class="k">Vesicle yield from chemically defined media, with bovine serum contaminants eliminated</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Lead peripheral-nerve programmes: plexiform neurofibromas in NF1, and CMT1A</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2025</span><p class="k">Both STTR Phase I awards granted — NSF and NIH — with The Ohio State University as research partner</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How FixE works</span><h2 class="d3">Skin cell to <em>nerve cell.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Reprogram</span><span>Load</span><span>Deliver</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Reprogram a skin cell.</h2><p>Human dermal fibroblasts are abundant and easy to obtain. Transiently reprogramming them toward a Schwann-cell identity changes what they secrete: the vesicles they release carry the homing signals of the nerve-supporting cell, not of skin.</p></article>'+
     '<article class="step"><h2>Harvest, purify, load.</h2><p>Vesicles are collected from chemically defined media that doubled yield and removed bovine serum, then packaged after harvest — plasmid DNA or messenger RNA pushed into the purified vesicle at high encapsulation efficiency, with its nanoscale structure intact.</p></article>'+
     '<article class="step"><h2>Deliver inside the nerve.</h2><p>In patient-derived NF1-deficient Schwann cells the vesicles selectively entered the diseased cells, escaped the endosome and translated functional protein — restoring tumour-suppressor control, re-establishing cell-death checkpoints and quieting chronic inflammatory signalling.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Platform</span><h2 class="d2 split">What a vesicle does <em>that a virus cannot.</em></h2></div><p data-r>FixE is a non-viral, biological delivery system: built from human cells, aimed by biology rather than chemistry, and designed from the start to be manufactured at scale.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Peripheral nerve <em>first.</em></h2></div><p data-r>Neurofibromatosis type 1 and the Charcot-Marie-Tooth neuropathies cause lifelong disability, chronic pain and nerve tumours, and both are out of reach of conventional viral delivery. Each programme below is listed at the stage its own public award record states.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founders, engineers <em>and nerve biologists.</em></h2></div><p data-r>Neucore Bio is led from Columbus by co-founder and chief executive Brian Price, PhD, with R&amp;D under Silvia Duarte-Sanmiguel, PhD, and scientific co-founders at The Ohio State University.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Research partner</span><p data-r>The platform is developed in close collaboration with researchers at The Ohio State University, where both scientific co-founders hold appointments.</p></div>'+
    '<div><span class="lab kick" data-r>Phase II plan</span><p data-r>The company states that Phase II will transfer the validated manufacturing protocol to the CDMO Lonza and run in vivo preclinical studies at Indiana University School of Medicine.</p></div>'+
    '<div><span class="lab kick" data-r>Patient community</span><p data-r>Customer discovery through the NSF I-Corps programme built relationships with the Children&#8217;s Tumor Foundation and the Gilbert Family Foundation, and with NF1 clinicians including Dr. D. Wade Clapp.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards <em>and results.</em></h2></div><p data-r>Announcements from Neucore Bio and the public records behind them.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnership and investment</span>'+
   '<h2 class="big split">Talk to <em>Neucore Bio.</em></h2>'+
   '<p class="sub" data-r>Phase I established that engineered extracellular vesicles can carry large genetic medicines into diseased nerve cells. Neucore Bio welcomes partners, collaborators and investors for what comes next.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Neucore Bio '+ARR+'</a><a class="btn" href="#/pipeline">See the programmes</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Neucore Bio, Inc.<br>1275 Kinnear Rd<br>Columbus, OH 43212</p></div>'+
    '<div><span class="lab" data-r>Research partner</span><p data-r>The Ohio State University<br>Columbus, OH</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>1275 Kinnear Rd<br>Columbus, OH 43212</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/platform">Platform</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platform</span>FixE engineered<br>extracellular vesicles</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:800;font-size:64px;letter-spacing:-.03em">Neucore Bio</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Neucore Bio, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",platform:"platform",technology:"platform",story:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Neucore Bio — Engineered extracellular vesicles for genetic nerve disease, Columbus, OH",x:"Home"};
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
