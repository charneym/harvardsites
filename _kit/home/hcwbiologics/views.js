/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){
  return '<div class="hcp">'+TEAM.map(function(p){
  return '<article class="hcp-c"><div class="hcp-p"><img class="g" src="'+p.img+'" alt="" loading="lazy" width="415" height="415"><span class="cl"><img class="c" src="'+p.img+'" alt="'+esc(p.name)+'" loading="lazy" width="415" height="415"></span></div>'+
   '<div class="hcp-t"><h3>'+esc(p.name)+'</h3><p>'+esc(p.title)+'</p></div></article>'}).join("")+'</div>'+
  '<div class="bk"><span class="lab kick" data-r>Board of Directors</span><p class="cr" data-r>'+BOARD.map(function(n){return '<span>'+esc(n)+'</span>'}).join('<i>&#183;</i>')+'</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["TOBI&#8482; platform","Tissue factOr-Based fusIon: multi-domain, cytokine-based immunotherapeutics built on a tissue-factor scaffold, packing cytokines, single-chain antibodies and ligands into one fusion molecule. Reproducible and suitable for cGMP manufacturing.",'<circle cx="28" cy="28" r="18"/><path d="M28 10v36M12 19l32 18M12 37l32-18"/><circle class="f" cx="28" cy="28" r="3.4"/>'],
  ["TRBC platform","T-Cell Receptor &#946; Chain Constant region: a scaffold for multi-chain chimeric polypeptides with target-binding and affinity domains, for immune cell stimulators, second-generation checkpoint inhibitors and immune cell engagers.",'<path d="M16 46V24c0-7 5-12 12-12s12 5 12 12v22"/><path d="M22 46V26c0-4 3-7 6-7s6 3 6 7v20"/><path class="a" d="M10 46h36"/>'],
  ["Subcutaneous by design","Our specialty is treatments administered by subcutaneous injection, with an eye toward cost containment at commercialization and toward quality of life for the patient.",'<path d="M14 42l16-16M30 26l10-10 4 4-10 10zM40 16l4-4M18 46l-8-8"/><path class="a" d="M8 48h18"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Fusion immunotherapeutics<span class="nomob"> · Nasdaq: HCWB</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Immunotherapy</span><span class="l">for <em>inflammaging.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>HCW Biologics is a clinical stage biopharmaceutical company developing first-in-class fusion immunotherapeutics for autoimmune diseases, cancer and senescence-associated dysplasia.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our company</span>'+
   '<h2 class="txt" id="mani">Chronic inflammation promotes autoimmune disease, cancer and senescence. <em>Our fusion immunotherapeutics address its main drivers.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">50+</span><p class="k">Novel fusion immunotherapeutics created on our two proprietary platforms</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.0B</span><p class="k">The 2017 acquisition of Anktiva&#174;, which our founder discovered and developed through pivotal trials</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Lead candidates: two commercial-ready reagents and one in a clinical trial</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How HCW9302 works</span><h2 class="d3">Rebalance the <em>immune system.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Imbalance</span><span>Bind</span><span>Rebalance</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Activated cells persist.</h2><p>Regulatory T cells downregulate the cytotoxicity of activated immune cells. When activated immune cells persist, autoimmune disease follows.</p></article>'+
     '<article class="step"><h2>HCW9302 finds the T<sub>reg</sub>.</h2><p>An IL-2 fusion protein built on our TOBI platform, given by subcutaneous injection, binds IL-2&#945;&#946;&#947; receptors predominantly expressed on regulatory T cells.</p></article>'+
     '<article class="step"><h2>T<sub>reg</sub> cells expand.</h2><p>HCW9302 activates and expands T<sub>reg</sub> cells but not effector T cells, and the activated T<sub>reg</sub> cells suppress unwanted immune and inflammatory responses.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="approach" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Approach</span><h2 class="d2 split">Two platforms, <em>over 50 molecules.</em></h2></div><p data-r>We combine a deep understanding of disease-related immunology with advanced protein engineering, to rebalance or rejuvenate immune cells and so remove disease cells or reduce senescent cells.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From the clinic <em>to the cell factory.</em></h2></div><p data-r>One fusion immunotherapeutic in a clinical trial for an autoimmune disease, two commercial-ready molecules for producing cell-based therapies, and three candidates in IND-enabling studies.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Led by the team <em>behind Anktiva&#174;.</em></h2></div><p data-r>Founder and CEO Dr. Hing C. Wong discovered and developed Anktiva&#174; (ALT-803, an IL-15 receptor agonist) through pivotal trials. The FDA approved it in April 2024 for BCG-unresponsive non-muscle invasive bladder cancer.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>HCW Biologics.</em></h2></div><p data-r>News releases on our clinical trial, our programs and our financing.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners and investors</span>'+
   '<h2 class="big split">Talk to <em>HCW Biologics.</em></h2>'+
   '<p class="sub" data-r>Business development is a key part of how we advance our programs. For partnering, investor or general inquiries, write to us or call during office hours.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>2929 N Commerce Parkway<br>Miramar, FL 33025</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@hcwbiologics.com</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+19548422024">(954) 842-2024</a><br><span class="hrs">Mon&#8211;Fri, 9:00 AM&#8211;5:00 PM ET</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>2929 N Commerce Parkway<br>Miramar, FL 33025</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@hcwbiologics.com</a><br>(954) 842-2024</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Nasdaq</span>HCWB</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Manrope\',sans-serif;font-weight:400;font-size:76px">HCW BIOLOGICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 HCW Biologics Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* team: Leavitt-style hover (AC): lift, portrait scale, colour revealed through a circle opening from the pointer */
addEventListener("pointerover",function(e){var c=e.target.closest&&e.target.closest(".hcp-c");if(!c||c.contains(e.relatedTarget))return;var p=c.querySelector(".hcp-p"),r=p.getBoundingClientRect();
  p.style.setProperty("--mx",((e.clientX-r.left)/r.width*100).toFixed(1)+"%");p.style.setProperty("--my",((e.clientY-r.top)/r.height*100).toFixed(1)+"%")});
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",approach:"approach",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"HCW Biologics — fusion immunotherapeutics for diseases of chronic inflammation",x:"Home"};
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
