/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="rg-tm">'+gs.map(function(g){return '<div class="rg-tg"><span class="lab kick" data-r>'+esc(g)+'</span><ul>'+by[g].map(function(p){
    return '<li data-r><span class="rg-nm">'+esc(p.name)+'</span><span class="rg-rl">'+esc(p.title)+'</span>'+(p.sum?'<p class="io-sum">'+esc(p.sum)+'</p>':'')+'</li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Immuno-oncology","Dial immunity up","Tumours exploit inhibitory LILRB receptors to hold back macrophages, NK and T cells. Blocking them releases both innate and adaptive immune responses against the tumour.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M28 18v20M18 28h20"/><path d="M28 4v6M28 46v6M4 28h6M46 28h6"/>'],
  ["Inflammatory diseases","Dial immunity down","The same receptors can be switched on. Molecules that mimic the natural HLA ligands calm the overactive B, T, NK and dendritic cells behind autoimmune and inflammatory diseases.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M18 28h20"/><path d="M28 4v6M28 46v6M4 28h6M46 28h6"/>'],
  ["The platform","HLA-based molecules","ImmunOs identifies HLA molecules with naturally tailored affinity and specificity for LILRB and KIR receptors, and builds them into tailored modalities: fusion proteins, multi-specifics and agonists.",'<path d="M16 50V30M40 50V30"/><path d="M16 30c0-8 4-12 12-12s12 4 12 12"/><path class="a" d="M22 18l-6-10M34 18l6-10"/><circle class="f" cx="28" cy="18" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+c[0]+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function backers(){return '<div class="io-pa"><span class="lab kick" data-r>Backed by</span><ul data-r>'+INVESTORS.map(function(p){return '<li>'+esc(p)+'</li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="pfr io-news">'+NEWS.map(function(n){
  return '<li data-r><span class="lab tg"><b>'+esc(n[0])+'</b></span><div class="pgm"><h3><a href="'+n[2]+'" target="_blank" rel="noopener">'+esc(n[1]).replace("IOS-1002",'<span class="nw">IOS-1002</span>')+'</a></h3></div><span class="lab lk av"><a class="ul" href="'+n[2]+'" target="_blank" rel="noopener">Read '+ARR+'</a></span></li>'}).join("")+'</ul>'+
  '<div class="act io-more" data-r><a class="btn" href="'+NEWS_URL+'" target="_blank" rel="noopener">All news and media '+ARR+'</a></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>ImmunOs Therapeutics<span class="nomob"> · Schlieren, Switzerland</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Harnessing the</span><span class="l">immune system against</span><span class="l"><em>cancer and inflammation.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ImmunOs develops first-in-class therapeutics from its HLA-based platform. Its lead programme, IOS-1002, blocks three immune checkpoints at once and is in Phase I in advanced solid tumours.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">The receptors that hold the immune system back can be blocked to fight cancer, or switched on to calm inflammation. <em>We develop the next generation of immunotherapeutics to improve the lives of patients with serious diseases.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Immune checkpoints targeted at once by IOS-1002: LILRB1, LILRB2 and KIR3DL1</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">47</span><p class="k">Patients enrolled in the Phase I study of IOS-1002 by October 2025</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$74M</span><p class="k">Series B financing in 2022, followed by an $11M Series C in 2024</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How IOS-1002 works</span><h2 class="d3">Releasing the <em>immune brakes.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Brake</span><span>Block</span><span>Attack</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Tumours apply the brakes.</h2><p>Inhibitory LILRB and KIR receptors on macrophages, NK and T cells are engaged in the tumour, which keeps the immune cells quiet and lets the cancer escape.</p></article>'+
     '<article class="step"><h2>IOS-1002 blocks three of them.</h2><p>An HLA-based fusion protein binds LILRB1, LILRB2 and KIR3DL1 at once and blocks their inhibitory signal, instead of a single checkpoint.</p></article>'+
     '<article class="step"><h2>The immune cells attack.</h2><p>Through its Fc part, IOS-1002 also engages Fcγ receptors such as CD64 to activate macrophages, so innate and adaptive immune cells move in and kill tumour cells.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">One receptor family, <em>two directions.</em></h2></div><p data-r>ImmunOs targets LILRB receptors, also known as ILTs, and specific NK receptors such as KIR3DL1. They transmit a negative signal to macrophages, MDSCs, T, B and NK cells, so blocking them treats cancer and activating them treats inflammatory disease.</p></div>'+
   caps()+backers()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">A leader in the <em>HLA field.</em></h2></div><p data-r>A clinical-stage lead programme in solid tumours, multi-specific molecules in immuno-oncology, and HLA-based agonists for inflammatory diseases.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug developers in <em>immunology and oncology.</em></h2></div><p data-r>The ImmunOs team brings extensive expertise in drug development and global commercialisation in immunology, immunotherapy and oncology.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>ImmunOs.</em></h2></div><p data-r>Clinical data, appointments and financing, from the company’s own releases.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">For patients with <em>serious diseases.</em></h2>'+
   '<p class="sub" data-r>To reach any of our corporate departments, for partnering, investment or clinical enquiries, please write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to ImmunOs '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Wagistrasse 18</span><br><span>8952 Schlieren, Switzerland</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@immunostherapeutics.com</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+41447319035">+41 44 731 90 35</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Schlieren (Zurich area), Switzerland</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@immunostherapeutics.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead programme</span>IOS-1002, Phase I</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Raleway\',sans-serif;font-weight:600;font-size:56px">IMMUNOS THERAPEUTICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ImmunOs Therapeutics AG</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",science:"science",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ImmunOs Therapeutics — HLA-based immunotherapies for cancer and inflammatory diseases",x:"Home"};
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
