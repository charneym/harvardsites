/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["A donor-acceptor core","Two donor cores take their light from the UV laser (355 nm) and the violet laser (405 nm). Changing the acceptor tunes where it comes back out, from blue to red, without moving the excitation.",'<circle cx="17" cy="28" r="9"/><circle class="a" cx="41" cy="28" r="9"/><path d="M26 28h6"/><path class="a" d="M36 15l3 4M46 15l-3 4"/>'],
  ["Molecular, not polymer","ChromaTwist dyes are small molecules: no polymer dyes, no tandems, so none of the degradation issues common in some conventional UV dyes, and the same chemistry makes about a hundred compounds.",'<path d="M28 8l15 8.5v17L28 42l-15-8.5v-17z"/><path class="a" d="M28 42v8M43 33.5l7 4M13 33.5l-7 4"/><circle class="f" cx="28" cy="25" r="3"/>'],
  ["Ready to conjugate","Reactive groups (-CO₂H, -N₃, -NH₂, -SH, alkenes, -Br and active esters) make the dyes plug-and-play for antibody conjugation, and they dissolve in DMSO for use in water.",'<path d="M10 46L28 28M28 28l10-18M28 28l18 4"/><circle class="f" cx="10" cy="46" r="3"/><path class="a" d="M38 10l6-2M46 32l4 5"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Key properties</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From ChromaTwist’s technology data. The same dyes also sense pH, metal ions and electron-poor aromatics, form discotic liquid crystals, and conduct charge under UV light.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Fluorescent dyes<span class="nomob"> · University of Birmingham spin-out</span> · Wolverhampton, UK</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Excited in the UV,</span><span class="l">glowing in</span><span class="l"><em>every colour.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ChromaTwist develops patented large Stokes shift fluorescent dyes. They take their light from the UV and the blue and give it back, bright and tuneable, across the entire visible spectrum: for flow cytometry, microscopy and sensing.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How the dyes work '+ARR+'</a><a class="btn" href="#/products">Our dyes</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">High-parameter flow cytometry reads many colours from every cell, and every colour needs a dye that its laser can excite. ChromaTwist’s molecules all answer the UV laser, and each gives its light back in a different part of the spectrum: <em>more colours, more choice.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">100+</span><p class="k">Fluorophores made on the platform, emitting from blue to red</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">18</span><p class="k">ChromaTwist dyes placed in the Merck (Sigma-Aldrich) catalogue under a 2021 supply agreement</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">£0.5M</span><p class="k">Innovate UK Smart project, 2024, to raise the brightness and staining indices of the UV dyes</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the dyes work</span><h2 class="d3">In at the UV, <em>out in colour.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Excite</span><span>Shift</span><span>Tune</span><span>Label</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Excite in the UV.</h2><p>Each dye is built on a donor-acceptor core that absorbs strongly in the ultraviolet: one core for the 355 nm laser, another for the 405 nm violet laser, with 320 nm excitation tested too.</p></article>'+
     '<article class="step"><h2>A large Stokes shift.</h2><p>The light comes back far from where it went in. That wide gap between excitation and emission is what lets one UV laser drive dyes whose colour sits anywhere in the visible.</p></article>'+
     '<article class="step"><h2>Tune the colour.</h2><p>Changing the acceptor moves the emission from blue through to red while the excitation stays put. The same modular, scalable chemistry has made more than a hundred fluorophores.</p></article>'+
     '<article class="step"><h2>Label the cell.</h2><p>Conjugated to an anti-CD4 antibody, CT Blue stained human blood cells (PBMCs) with staining indices comparable to leading UV dyes, alongside commercial dyes in four- and five-colour panels.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">A patented platform, <em>built to tune.</em></h2></div><p data-r>The fluorophores were discovered in 2014 in the Preece and Robinson groups at the University of Birmingham. Patents cover the dye families, with the phenoxazoles patent granted in the USA and Europe.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">From the cytometer <em>to the bench.</em></h2></div><p data-r>UV and violet dye series for flow cytometry, reagent dyes for your own conjugates, imaging probes and the chemical precursors behind them. Several global flow cytometry companies have tested ChromaTwist conjugates and reproduced the data.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Chemists who found <em>the dyes.</em></h2></div><p data-r>ChromaTwist was founded in December 2018 by the two Birmingham professors whose groups discovered the fluorophores, with an entrepreneur experienced in spin-outs, and began operating in April 2019.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Partners</span><p data-r>A dye supply agreement with Merck (Sigma-Aldrich); flow cytometry work with the Babraham Institute in Cambridge.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>Innovate UK grants, angel and private investors, the Angelgroups (SEI) and the University of Birmingham.</p></div>'+
    '<div><span class="lab kick" data-r>Recognition</span><p data-r>Finalist, Royal Society of Chemistry Emerging Technology Award, 2019; “One to Watch”, Nature Research Spin-off Prize, 2020.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Data, meetings <em>and awards.</em></h2></div><p data-r>The latest from ChromaTwist and its partners.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, licensing and evaluation</span>'+
   '<h2 class="big split">Talk to <em>ChromaTwist.</em></h2>'+
   '<p class="sub" data-r>Licensing partners, high-parameter flow cytometry users who would like to evaluate the dyes, or chemists after a precursor: ChromaTwist would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email ChromaTwist '+ARR+'</a><a class="btn" href="#/products">See the dyes</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Laboratory</span><p data-r>ChromaTwist Ltd, Lab PD206<br>Science Centre, University of Wolverhampton Science Park<br>Glaisher Drive, Wolverhampton WV10 9RU</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Origin</span><p data-r>A spin-out of the University of Birmingham</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Laboratory</span>Wolverhampton Science Park, UK</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Dyes</span>CT_UV · 355 nm<br>CT_V · 405 nm</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="50" text-anchor="middle" style="font-family:\'Jost\',Arial,sans-serif;font-weight:400;font-size:60px;letter-spacing:.01em">ChromaTwist</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ChromaTwist Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",platform:"platform",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ChromaTwist — Large Stokes shift fluorescent dyes for flow cytometry and microscopy",x:"Home"};
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
