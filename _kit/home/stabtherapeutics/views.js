/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[3])+'</b><i>'+esc(c[0])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><a class="mh-row" href="'+p.li+'" target="_blank" rel="noopener"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span class="mh-ar" aria-hidden="true">'+ARR+'</span></a></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Cell therapy","Like CAR-T, the treatment starts from the patient’s own T cells, engineered once and infused back, where they expand and persist.",'<circle cx="28" cy="28" r="17"/><circle class="a" cx="26" cy="30" r="7"/><path d="M28 6v5M28 45v5M6 28h5M45 28h5"/>'],
  ["Bispecific antibodies","Like a bispecific T cell-engager, the drug has two arms: one binds the tumour antigen, the other the CD3 receptor of any T cell nearby.",'<path d="M14 28h28"/><ellipse class="a" cx="12" cy="28" rx="7" ry="5"/><ellipse cx="44" cy="28" rx="7" ry="5"/>'],
  ["Made in the body","STAb-T cells secrete the engagers in vivo, so effective levels build up in the blood, and modified and unmodified bystander T cells are both recruited against the tumour.",'<circle cx="20" cy="30" r="12"/><path class="a" d="M33 24l6-4M35 32l7 1M31 40l5 5"/><circle class="f" cx="43" cy="18" r="2"/><circle class="f" cx="46" cy="33" r="2"/><circle class="f" cx="39" cy="48" r="2"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Cell immunotherapy<span class="nomob"> · imas12 spin-off</span> · Madrid</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">T cells that make</span><span class="l">their own</span><span class="l"><em>engagers.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>STAb Therapeutics develops STAb-T cells: engineered T cells that secrete T cell-engaging antibodies inside the body, recruiting the patient’s own T cells against haematological and solid tumours.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our approach</span>'+
   '<h2 class="txt" id="mani">CAR-T cells and bispecific antibodies have changed blood cancer care, yet many patients still relapse. STAb immunotherapy combines the two: <em>cells that act as a living drug factory.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><span class="k">Tumour targets in development, CD19 for B-cell malignancies and BCMA for multiple myeloma</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">24</span><span class="k">Patients planned in the first-in-human Phase I study of STAb-T19, authorised in the EU</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">€335K</span><span class="k">CDTI NEOTEC 2024 grant to advance the STAb-T platform and the STAb-TBCMA programme for multiple myeloma</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">One engineered cell, <em>many recruits.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Engineer</span><span>Secrete</span><span>Recruit</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The T cell gets a new gene.</h2><p>A patient’s own T cells are engineered with the gene for a T cell-engager (TCE), a small bispecific antibody, turning them into STAb-T cells.</p></article>'+
     '<article class="step"><h2>It secretes engagers in vivo.</h2><p>Back in the body, STAb-T cells release the engagers continuously, reaching effective serum concentrations. One arm of each engager binds the tumour antigen, such as CD19 or BCMA.</p></article>'+
     '<article class="step"><h2>Bystander T cells join in.</h2><p>The other arm binds CD3, so modified and unmodified bystander T cells at the tumour are recruited too, a polyclonal attack that leads to significantly enhanced antitumour responses.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The best of two <em>immunotherapies.</em></h2></div><p data-r>STAb immunotherapy is a T cell-redirecting strategy that combines principles of adoptive cell therapy and bispecific antibodies. Its therapeutic potential has been validated preclinically in B-cell and T-cell haematological malignancies.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From the lab <em>to the clinic.</em></h2></div><p data-r>Two STAb-T programmes and an off-the-shelf platform, developed with the Hospital 12 de Octubre and the H12O-CNIO Cancer Immunotherapy Clinical Research Unit.</p></div>'+
   pipeRows(PIPE)+
   '<div class="bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r><span>European Union · Horizon Europe</span><i>/</i><span>CDTI · NEOTEC 2024</span><i>/</i><span>Comunidad de Madrid · FEDER</span><i>/</i><span>Agencia Estatal de Investigación</span><i>/</i><span>Fundación madri+d</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Clinicians, scientists <em>and builders.</em></h2></div><p data-r>A spin-off of the Research Institute Hospital 12 de Octubre (imas12) in Madrid, led by a team that pairs the inventors of the STAb-T approach with biotech company building.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, trials <em>and science.</em></h2></div><p data-r>The latest on STAb Therapeutics and its programmes.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors, clinicians</span>'+
   '<h2 class="big split">Let’s talk about <em>STAb-T.</em></h2>'+
   '<p class="sub" data-r>Whether you want to partner, invest or learn more about our programmes, write to the STAb Therapeutics team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+FORM+'">Email us '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Calle Ferraz 78, 2º A<br>28008 Madrid, Spain</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+FORM+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a><br><a class="ul" href="'+TW+'" target="_blank" rel="noopener">X / Twitter</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Calle Ferraz 78, 2º A<br>28008 Madrid, Spain</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+FORM+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Roots</span>Research Institute Hospital<br>12 de Octubre (imas12)</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Outfit\',Arial,sans-serif;font-weight:300;font-size:64px;letter-spacing:.01em">STAb Therapeutics</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 STAb Therapeutics S.L.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"platform",platform:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"STAb Therapeutics — T cells that make their own engagers, Madrid",x:"Home"};
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
