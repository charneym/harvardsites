/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+esc(c[6])+'</span></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["A human protein","Every Venturis drug candidate is built on FGF-1, a human protein from the fibroblast growth factor family, as its active pharmaceutical ingredient.",'<circle cx="28" cy="28" r="7"/><circle class="f" cx="28" cy="28" r="2.4"/><path d="M28 21V9M28 35v12M21 28H9M35 28h12"/><circle cx="28" cy="7" r="2"/><circle cx="28" cy="49" r="2"/><circle cx="7" cy="28" r="2"/><circle cx="49" cy="28" r="2"/>'],
  ["Grows new vessels","FGF-1 stimulates the growth of new blood vessels, a process called neovascularization, increasing the blood supply to ischemic organs and tissues.",'<path d="M28 50V30"/><path d="M28 30C28 22 20 18 14 10M28 30C28 22 36 18 42 10"/><path class="a" d="M21 20C16 20 11 22 8 26M35 20C40 20 45 22 48 26"/>'],
  ["Delivered where it is needed","Venturis is focused on targeted delivery, administering its molecules to the ischemic organs and tissues that need a new blood supply.",'<path d="M8 40C18 34 38 34 48 40"/><path d="M8 46C18 40 38 40 48 46"/><path class="a" d="M28 8V30M22 24l6 6 6-6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Why it matters</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>American Heart Association, Heart Disease and Stroke Statistics, 2018 Update, as cited by Venturis.</p></div></div>'}
function deals(){return '<ul class="pfr dl">'+DEALS.map(function(d){return '<li><span class="lab tg"><b>'+esc(d[0])+'</b></span><div class="pgm"><h3>'+d[1]+'</h3><span class="loc">'+esc(d[2])+'</span></div><p>'+d[3]+'</p><span></span></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+NR+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">Release (PDF) '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage biopharma<span class="nomob"> · FGF-1 protein therapies</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">New blood vessels,</span><span class="l"><em>where tissue</em></span><span class="l"><em>is starved.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Venturis is developing VT-141, a human FGF-1 protein that stimulates the growth of new blood vessels in ischemic tissue, for diabetic foot ulcers, coronary artery disease and peripheral artery disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">The science '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Therapeutic angiogenesis</span>'+
   '<h2 class="txt" id="mani">When an artery narrows, the tissue beyond it starves. <em>Venturis is developing a human protein that grows new vessels to feed it again.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Open INDs with the U.S. Food and Drug Administration, in diabetic foot ulcers, coronary and peripheral artery disease</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">Preclinical programmes: erectile dysfunction, infarct stroke, ischemic disc disease and Parkinson&#8217;s disease</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">15</span><p class="k">Claims in the U.S. patent for the angiogenic treatment of ischemic heart disease, issued in April 2021</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Around the blockage, <em>a new blood supply.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Starved</span><span>Delivered</span><span>Sprouting</span><span>Restored</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Flow stops, tissue starves.</h2><p>In ischemic disease a narrowed or blocked artery can no longer carry enough blood. The heart muscle, limb or wound beyond it is starved of oxygen and cannot heal.</p></article>'+
     '<article class="step"><h2>A human growth factor.</h2><p>VT-141 is administered to the ischemic organ or tissue. Its active ingredient is FGF-1, a human protein from the fibroblast growth factor family.</p></article>'+
     '<article class="step"><h2>New vessels sprout.</h2><p>FGF-1 stimulates the growth of new blood vessels. Branches sprout from the existing vasculature and grow into the tissue that needs them.</p></article>'+
     '<article class="step"><h2>Blood flow, restored.</h2><p>By promoting neovascularization, the therapy has shown evidence of increased blood flow to ischemic organs and tissues.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Growth factors for <em>vascular disease.</em></h2></div><p data-r>Venturis employs human proteins from the fibroblast growth factor family. Its lead candidate stimulates the growth of new blood vessels when administered to ischemic organs and tissues, to improve the quality of life of people living with vascular dysfunction.</p></div>'+
   caps()+
   evid()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One protein, <em>seven programmes.</em></h2></div><p data-r>Venturis holds three open INDs with the U.S. FDA for VT-141, Vascu-Grow&#8482;, and runs four preclinical research and development programmes on the same active ingredient.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">A new chapter, <em>based in Chicago.</em></h2></div><p data-r>In August 2026 Venturis announced a shareholder-led restructuring and a new corporate office in Chicago, a major financial centre and hub for pharmaceutical and biotechnology companies. The company expects to name its new leadership team and Board of Directors soon.</p></div>'+
   '<span class="lab kick sub" data-r>Agreements and affiliations</span>'+
   deals()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Venturis.</em></h2></div><p data-r>Company news releases, from the move to Chicago back to the coronary artery disease patent.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>Venturis.</em></h2>'+
   '<p class="sub" data-r>Venturis Therapeutics is moving its corporate headquarters from Dallas to Chicago. We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+TEL+'">Call us '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Chicago, Illinois<br>USA</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r>Amy Gordon<br><a class="ul" href="'+TEL+'">(714) 280-6028</a></p></div>'+
    '<div><span class="lab" data-r>Online</span><p data-r>venturistherapeutics.com</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Chicago, Illinois<br>USA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TEL+'">(714) 280-6028</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead candidate</span>VT-141 · Vascu-Grow&#8482;</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Archivo\',sans-serif;font-weight:600;font-size:64px">VENTURIS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Venturis Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",story:"story",pipeline:"pipeline",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Venturis Therapeutics — growing new blood vessels",x:"Home"};
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
