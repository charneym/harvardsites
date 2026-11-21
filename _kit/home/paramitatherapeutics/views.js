/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Multivalent drug conjugates<span class="nomob"> · San Diego, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Smart chemotherapy,</span><span class="l"><em>built to find the tumor.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Paramita Therapeutics is a preclinical-stage biotech developing small molecule multivalent drug conjugates (MDCs), starting with a triple attack on advanced prostate cancer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Paclitaxel, the taxane payload, atom by atom (RCSB ligand TA1, ideal coordinates).</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">There is still no FDA-approved small molecule-drug conjugate. Paramita’s chemistry sets exactly how many cancer-targeting molecules each one carries: <em>two, four or eight.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$353K</span><span class="k">NCI SBIR Phase I grant for PSMA-targeted MDCs, awarded September 2025</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20+</span><span class="k">US patents held by founder Dr. Sang Van in drug conjugates and nanoparticles</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">90%</span><span class="k">Of men who died with metastatic prostate cancer had bone metastases, in an autopsy study</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Smaller than an antibody</span><p data-r>Every approved drug conjugate today is an antibody-drug conjugate. MDCs deliver the payload on a small molecule instead.</p></div>'+
    '<div><span class="lab kick" data-r>Ahead of Taxotere</span><p data-r>In an animal model of prostate cancer, Paramita’s MDCs outperformed first-line Taxotere chemotherapy.</p></div>'+
    '<div><span class="lab kick" data-r>Backed by NSF and NCI</span><p data-r>Founded in San Diego in late 2018 by Dr. Sang Van and Dr. Jack Bui, and seed-funded by both agencies.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">One payload, <em>many hands.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Payload</span><span>Multivalency</span><span>Triple attack</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Start with a proven taxane.</h2><p>Docetaxel is the standard of care for metastatic, castration-resistant prostate cancer, but its systemic toxicity limits it, above all in bone. Paramita starts from the same drug class: a paclitaxel or docetaxel payload.</p></article>'+
     '<article class="step"><h2>Two, four or eight arms.</h2><p>Patented multivalent chemistry attaches the payload to several water-soluble, PSMA-targeting molecules at once, with the number of arms set by design to optimize binding to prostate cancer cells.</p></article>'+
     '<article class="step"><h2>A triple attack.</h2><p>Better water solubility for distribution into bone and higher dosing; selective uptake by prostate cancer cells, less by healthy ones; and free drug released as effectively as chemotherapy.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">First prostate cancer, <em>then beyond.</em></h2></div><p data-r>The first programme targets prostate cancer that has spread to bone. Because the targeting molecules can be exchanged, the platform can follow into other cancers.</p></div>'+
   progs()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug development <em>meets immunology.</em></h2></div><p data-r>Paramita was founded in late 2018 by a drug-conjugate chemist and a UC San Diego immunologist, and launched operations in 2019.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Seed-funded <em>by two agencies.</em></h2></div><p data-r>Paramita’s research is supported by Small Business Innovation Research grants from the National Science Foundation and the National Cancer Institute.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and scientists</span>'+
   '<h2 class="big split">Make chemotherapy <em>smarter.</em></h2>'+
   '<p class="sub" data-r>Paramita Therapeutics works from San Diego, California. To talk about the MDC platform, a partnership or an investment, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Paramita Therapeutics, Inc.<br>San Diego, California</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>A Delaware C-corporation<br>Founded in late 2018</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>San Diego,<br>California</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Multivalent drug conjugates<br>for cancer</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:\'Outfit\',system-ui,sans-serif;font-weight:500;font-size:68px;letter-spacing:-.01em"><tspan fill="#eff3ec">Paramita</tspan><tspan fill="#b4cdb8" font-weight="400" dx="14">Therapeutics</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Paramita Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Paramita Therapeutics — multivalent drug conjugates for cancer, San Diego",x:"Home"};
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
