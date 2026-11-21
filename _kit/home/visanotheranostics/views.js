/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="vpg">'+PROG.map(function(c,i){
  return '<li><span class="lab ix">0'+(i+1)+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><div class="pd"><span class="lab tg">'+esc(c[2])+'</span><p>'+esc(c[3])+'</p></div><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+' ↗</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="vtm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'+
  '<div class="vadv"><span class="lab kick">Clinical advisors</span><p>'+ADV.map(function(a){return '<span>'+esc(a)+'</span>'}).join("")+'<i>Prostate cancer imaging, image-guided procedures and focal therapy</i></p></div>'}
function news(){return '<ul class="vnw">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Nanobubble ultrasound<span class="nomob"> · Cleveland, Ohio</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Prostate cancer,</span><span class="l">visible on</span><span class="l"><em>ultrasound.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Visano Theranostics is developing PSMA-targeted nanobubbles that bind to prostate cancer cells, adding a real-time molecular layer to the ultrasound systems clinics already use.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
   '<p class="lab hcap" data-r>Targeted nanobubbles gathering on a prostate cancer cell. Illustrative render, not to scale.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why ultrasound</span>'+
   '<h2 class="txt" id="mani">Ultrasound is portable, cost effective and exceptionally powerful. Contrast media sharpen every other kind of scan; <em>ultrasound has lagged behind.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">20×</span><p class="k">Longer-lasting than conventional microbubble contrast agents</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1.3M</span><p class="k">Prostate biopsies performed each year in the U.S.</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2–3</span><p class="k">Biopsies, on average, when standard TRUS misses the tumour</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Small enough to reach</span><p data-r>At the nanoscale, the bubbles penetrate tissue and can target extravascular biomarkers as well as vascular ones, beyond the reach of conventional agents.</p></div>'+
    '<div><span class="lab kick" data-r>Built for the clinic</span><p data-r>Designed for standard clinical ultrasound systems, for small parts and high-frequency imaging modes, with no ionizing radiation.</p></div>'+
    '<div><span class="lab kick" data-r>Image, then treat</span><p data-r>A high-yield process with tunable properties, and on-demand cavitation on the same platform for drug-free, ultrasound-mediated therapy.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">Bubbles that find <em>the tumour.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Inject</span><span>Bind</span><span>See</span><span>Treat</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Into the bloodstream.</h2><p>Nanobubbles, gas cores in a thin shell, are injected into the bloodstream. They last up to twenty times longer than microbubbles, so the imaging window stays open.</p></article>'+
     '<article class="step"><h2>Bound to PSMA.</h2><p>In the prostate they bind to prostate-specific membrane antigen, a biomarker overexpressed on prostate cancer cells, and PSMA-targeted bubbles are taken up and retained inside them.</p></article>'+
     '<article class="step"><h2>Seen in real time.</h2><p>Under a standard transrectal ultrasound probe the bound bubbles light the lesion, so the urologist can aim the biopsy at it rather than sampling blind.</p></article>'+
     '<article class="step"><h2>Then, a pulse.</h2><p>The same bubbles can be ruptured with ultrasound pulses to selectively destroy the cancer cells they mark, sparing the healthy tissue around them: Targeted Nanobubble Therapy.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One platform, <em>image and treat.</em></h2></div><p data-r>Visano holds an exclusive licence from Case Western Reserve University to the targeted and non-targeted nanobubble technologies developed in the Exner and Basilion labs, led by prostate cancer.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r><span>Ohio Third Frontier</span><i>·</i><span>Ohio Department of Development</span><i>·</i><span>JumpStart Trailblazer</span><i>·</i><span>Case Western Reserve University</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Inventors and a builder <em>of companies.</em></h2></div><p data-r>Over fifty years of combined experience in molecular biology, nanomedicine, biomedical ultrasound, image-guided drug delivery and taking technology from bench to bedside.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News and publications</span><h2 class="d2 split">Licensed, funded, <em>and published.</em></h2></div><p data-r>The licence from Case Western Reserve opens Visano’s next phase of development, on a peer-reviewed record of PSMA-targeted nanobubble research.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Molecular imaging, <em>on standard ultrasound.</em></h2>'+
   '<p class="sub" data-r>Whether you are curious about the research, have a partnership in mind, or anything else, the Visano team is ready to talk.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r class="adr"><span>Visano Theranostics</span><span>Cleveland, Ohio</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Origin</span><p data-r>A Case Western Reserve University spinout</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Cleveland, Ohio</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Nanobubble ultrasound<br>contrast and theranostics</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Outfit\',system-ui,sans-serif;font-weight:400;font-size:76px;letter-spacing:-.01em"><tspan fill="#f2f4f7">Visano</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Visano Theranostics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Visano Theranostics — nanobubble ultrasound for prostate cancer, Cleveland, Ohio",x:"Home"};
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
