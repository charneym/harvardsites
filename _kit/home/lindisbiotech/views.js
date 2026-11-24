/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[7]?' class="ap"':'')+'><span class="lab tg"><b'+(c[7]?'':' class="pz"')+'>'+esc(c[1])+'</b><i>'+esc(c[0])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+' · '+esc(c[4])+'</span>'+
   '<span class="stg" aria-hidden="true"><i style="width:'+Math.round(c[6]*100)+'%"></i></span></div><p>'+esc(c[5])+'</p><span class="lab lk'+(c[7]?' av':'')+'">'+(c[7]?'<a class="ul" href="'+BS_LAUNCH+'" target="_blank" rel="noopener">Launch '+ARR+'</a>':'')+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh ldt">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function partners(){return '<div class="prt"><span class="lab kick" data-r>Partners</span><ul>'+PARTNERS.map(function(p){return '<li data-r><b>'+esc(p[0])+'</b><span>'+esc(p[1])+'</span></li>'}).join("")+'</ul></div>'}
function caps(){var C=[
  ["Microgram doses","Triomab® antibodies are effective at low therapeutic dosages, in the microgram (µg) range.",'<circle cx="28" cy="28" r="18"/><circle class="f" cx="28" cy="28" r="3.2"/><path class="a" d="M28 4v8M28 44v8M4 28h8M44 28h8"/>'],
  ["Full activation at the tumour","A full, physiological activation of the patient’s most important cancer-fighting immune cells, T cells and accessory cells, right at the tumour site.",'<circle cx="18" cy="28" r="11"/><circle cx="40" cy="20" r="8"/><circle cx="40" cy="40" r="8"/><path class="a" d="M29 28l4-5M29 28l4 6"/>'],
  ["A vaccination-like effect","Linking innate and adaptive immunity can induce a patient-specific, long-term immunisation against the individual mutations of the patient’s cancer.",'<path d="M28 50V30"/><path d="M28 30L14 12"/><path d="M28 30L42 12"/><path class="a" d="M10 18l6-8M46 18l-6-8"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Triomab® antibodies<span class="nomob"> · Puchheim, Munich</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Empowering the</span><span class="l">immune system</span><span class="l"><em>against cancer.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Lindis Biotech develops Triomab® antibodies, trifunctional bispecific T-cell engagers that link tumour cells, T cells and accessory immune cells, to turn malignant cancers into manageable and possibly curable diseases.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The trifunctional, bispecific onco-immune company</span>'+
   '<h2 class="txt" id="mani">Our lead Triomab®, catumaxomab, was the first T-cell engaging multi-specific antibody approved anywhere in the world. <em>Today it is approved again in Europe, and further Triomab® programmes follow it.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2009</span><p class="k">Catumaxomab becomes the first multi-specific antibody to win EU approval, for malignant ascites</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2025</span><p class="k">EU marketing authorisation for KORJUNY®, launched in Germany by Pharmanovia in December</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20+</span><p class="k">Patents with Dr. Horst Lindhofer as inventor or co-inventor, many granted worldwide</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">One antibody, <em>three immune functions.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Link</span><span>Recruit</span><span>Remember</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Tumour meets T cell.</h2><p>One arm of the Triomab® binds a tumour antigen such as EpCAM, the other binds CD3 on a T cell. The T cell is redirected to the tumour and activated, independent of MHC.</p></article>'+
     '<article class="step"><h2>The Fc calls in help.</h2><p>Through its Fc region the same antibody binds accessory cells: macrophages, dendritic cells and NK cells. Costimulatory molecules and cytokines start a cross-talk that fully activates the T cell.</p></article>'+
     '<article class="step"><h2>Attack, then memory.</h2><p>T cells and accessory cells destroy the tumour cell together. Its fragments are taken up and presented by antigen-presenting cells, which can lead to a patient-specific, long-term anti-tumour immunisation.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">A highly potent immune response <em>against the tumour.</em></h2></div><p data-r>Triomab® antibodies combine, for the first time, direct tumour-cell killing with an anti-tumour vaccine approach. In immunofluorescence, they zip EpCAM-positive tumour cells and human immune effector cells together into multiple immune-cell complexes.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From malignant ascites <em>to lymphoma.</em></h2></div><p data-r>One approved product and further Triomab® candidates in solid tumours, haematological cancers and tumours of ektodermal origin. Lindis runs lean, with extensive outsourcing.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="partnering" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Partnering</span><h2 class="d2 split">In a team, <em>you do better.</em></h2></div><p data-r>Lindis welcomes licensing or co-development opportunities for its proprietary Triomab® platform, and brings partners deep expertise in biopharmaceutical production and clinical development. As immune-cell engaging therapies, its products are also open to combination-therapy collaborations.</p></div>'+
   partners()+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">Pioneers of <em>trifunctional antibodies.</em></h2></div><p data-r>Lindis Biotech is a clinical-stage biopharmaceutical company in Puchheim, near Munich. Since its foundation it has acquired selected assets and continued as a lean company, combining scientific and pharmaceutical experience.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Lindis.</em></h2></div><p data-r>Approvals, partnerships and clinical data.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Lindis Biotech.</em></h2>'+
   '<p class="sub" data-r>Licensing, co-development and combination therapies: licence or co-develop opportunities are welcome. Write to the team in Puchheim.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Lindis '+ARR+'</a><a class="btn" href="#/partnering">Partnering</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Head office</span><p data-r>LINDIS Biotech GmbH<br>Zeppelinstraße 4<br>82178 Puchheim, Germany</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@lindisbiotech.de</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="'+TEL+'">+49 89 4523960 0</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Head office</span>Zeppelinstraße 4<br>82178 Puchheim, Germany</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@lindisbiotech.de</a><br><a class="ul" href="'+TEL+'">+49 89 4523960 0</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/partnering">Partnering</a><br><a class="ul" href="#/team">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Publications</span><a class="ul" href="'+LNEWS+'" target="_blank" rel="noopener">Publications and news</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="80" text-anchor="middle" style="font-family:\'Jura\',sans-serif;font-weight:600;font-size:96px">LINDIS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Lindis Biotech</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",science:"science",pipeline:"pipeline",partnering:"partnering",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Lindis Biotech — Triomab® antibodies against cancer",x:"Home"};
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
