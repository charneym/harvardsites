/* ================= VIEWS (home only: Science / Platform / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div>'+(p[2]?'<p>'+esc(p[2])+'</p>':'<p class="em" aria-hidden="true"></p>')+'</li>'}).join("")+'</ul>'+
  '<div class="adv"><span class="lab kick" data-r>Scientists</span><p data-r>'+SCI.map(function(a){return '<span>'+esc(a)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '<div class="adv"><span class="lab kick" data-r>Board of advisors</span><p data-r>'+ADVISORS.map(function(a){return '<span>'+esc(a)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Human-relevant cancer models<span class="nomob"> · Birmingham, Alabama</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The right treatment,</span><span class="l"><em>the first time.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>CerFlux tests cancer therapies on the patient’s own tumor tissue, outside the body and before treatment begins, to match treatments to tumors, from drug discovery to the bedside.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Concept render: one biopsy across nine wells, a different agent in each, in the spirit of POET<sup>®</sup>.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Cancer is personal</span>'+
   '<h2 class="txt" id="mani">Each tumor is distinct and responds differently to the same treatment. CerFlux builds models from human tumors, <em>with their microenvironment intact,</em> to show which therapies will work.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.25M</span><p class="k">NSF SBIR Phase II award, July 2026, to advance the BEST platform with the University of Virginia</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3 in 4</span><p class="k">Patients on systemic therapy who are treated with drugs that do not work for them</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;7 days</span><p class="k">For POET<sup>®</sup> to match treatments to a tumor, before treatment begins</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Ex vivo</span><p data-r>Intact patient tumor tissue and bioprinted microtissues, tested outside the body with their architecture and microenvironment preserved.</p></div>'+
    '<div><span class="lab kick" data-r>In silico</span><p data-r>Structured, quantitative, AI/ML-ready response data from human-relevant systems rather than animal studies.</p></div>'+
    '<div><span class="lab kick" data-r>Molecule to medicine</span><p data-r>From discovery and preclinical development to the bedside, one continuous, human-relevant line of evidence.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The science</span><h2 class="d3">Tumors tested <em>outside the body.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Tissue</span><span>BEST™</span><span>Screen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The tumor, kept whole.</h2><p>A tumor is not just cancer cells: it is stroma, extracellular matrix and 3D architecture. CerFlux starts from the patient’s own tumor tissue and keeps that microenvironment intact, because the omics tell the story, but the microenvironment decides the ending.</p></article>'+
     '<article class="step"><h2>Bioprinted ex vivo slice tissue.</h2><p>BEST™ tests drugs directly on patient tumor tissue and on tissue-engineered 3D microtissues that mimic the human tumor microenvironment, so a small sample can carry many experiments.</p></article>'+
     '<article class="step"><h2>Tic-tac-toe on tumor tissue.</h2><p>Every agent is tested at once, a different one in each box. Xs show treatments that will not work; Os point to the best options. For patients, POET<sup>®</sup>; for drug developers, PEER<sup>®</sup>.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="platform" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Platform</span><h2 class="d2 split">One tumor, <em>many answers.</em></h2></div><p data-r>Human-relevant new approach methods (NAMs) for the whole molecule-to-medicine journey, from the bench to the bedside.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Partners</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Scientists in <em>Birmingham.</em></h2></div><p data-r>CerFlux is led from Birmingham, Alabama, with a lab team of cancer biologists, chemists and data scientists and a board of advisors.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, patents <em>and AACR.</em></h2></div><p data-r>Recent awards and milestones, from the NSF Phase II grant to a patented tumor supermodel.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Pharma, providers and collaborators</span>'+
   '<h2 class="big split">Match treatments <em>to tumors.</em></h2>'+
   '<p class="sub" data-r>CerFlux invites collaborators who share its commitment to reshaping how cancer therapies are discovered, developed and delivered. Write to the team in Birmingham.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+N_NSF+'" target="_blank" rel="noopener">Latest news</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>CerFlux, Inc.<br>215 Richard Arrington Jr Blvd N, Suite 101<br>Birmingham, AL 35203</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Focus</span><p data-r>Human-relevant ex vivo and in silico cancer models</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>215 Richard Arrington Jr Blvd N, Suite 101<br>Birmingham, Alabama 35203</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/platform">Platform</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Human-relevant cancer models<br>that match treatments to tumors</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:600;font-size:78px;letter-spacing:-.01em"><tspan fill="#f6f3f1">Cer</tspan><tspan fill="#f6f3f1">Flux</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 CerFlux, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",platform:"platform",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"CerFlux — human-relevant cancer models that match treatments to tumors, Birmingham",x:"Home"};
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
