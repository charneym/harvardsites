/* ================= VIEWS (home only: Peptide Platform / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(L){return '<ul class="pfr">'+L.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage immunotherapy<span class="nomob"> · Minneapolis, Minnesota</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Reactivating</span><span class="l">the immune system</span><span class="l"><em>against cancer.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>OX2 Therapeutics is engineering ARL200, a first-of-its-kind peptide immunotherapy that targets CD200 signaling, to act as a master regulator of the immune system.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How ARL200 works '+ARR+'</a><a class="btn" href="#/programs">The pipeline</a></div></div>'+
   '<p class="lab hcap" data-r>A human T lymphocyte, the immune cell ARL200 is designed to set back to work. Scanning electron micrograph, NIAID.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>A new approach to checkpoint modulation</span>'+
   '<h2 class="txt" id="mani">Tumors shed PD-L1 and CD200, ligands that bind inhibitory receptors and switch the immune response off. ARL200 is built to <em>switch it back on.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2020</span><p class="k">FDA authorization of the Investigational New Drug application for ARL200</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">14</span><p class="k">Issued or pending patents worldwide protecting the platform</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">150+</span><p class="k">Years of combined oncology and immunology experience across leaders and advisors</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Fast Track</span><p data-r>ARL200 holds FDA Fast Track designation and Rare Pediatric Disease priority.</p></div>'+
    '<div><span class="lab kick" data-r>Vaccine-like injections</span><p data-r>ARL200 is given as vaccine-like injections, paired with a personalized tumor lysate.</p></div>'+
    '<div><span class="lab kick" data-r>Since 2016</span><p data-r>A University of Minnesota spinout, built on more than a decade of peer-reviewed preclinical research.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The peptide platform</span><h2 class="d3">Restoring the conversation <em>tumors interrupt.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Suppression</span><span>ARL200</span><span>Activation</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The tumor cuts the line.</h2><p>Tumors shed PD-L1 and CD200 ligands that bind to inhibitory receptors. They disrupt the antigen-presenting cell’s communication with T cells, and the tumor evades detection.</p></article>'+
     '<article class="step"><h2>ARL200 steps in.</h2><p>Unlike conventional checkpoint inhibitors, the peptide engages both the activating and the inhibitory CD200 receptor pathways, and is designed to adjust PD-1, PD-L1 and CTLA-4 signaling too.</p></article>'+
     '<article class="step"><h2>T cells go back to work.</h2><p>With the suppression neutralized, antigen-presenting cells can activate T cells again, and a healthy immune response is turned against the tumor.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One peptide, <em>many solid tumors.</em></h2></div><p data-r>The current focus is pediatric brain cancer, where the trial has reached its Recommended Phase 2 Dose. A Phase II is planned for late 2026, with plans to take ARL200 to other cancers.</p></div>'+
   rows(PIPE)+
   '<div class="bk"><span class="lab kick" data-r>Clinical collaborators</span><p class="cr" data-r><span>Children’s Minnesota</span><i>·</i><span>University of Minnesota</span><i>·</i><span>Masonic Cancer Center</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Born in a Minnesota <em>cancer lab.</em></h2></div><p data-r>OX2 is a privately held company, founded on research at the University of Minnesota and led by a chief executive who has taken it into the clinic.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">The latest <em>from OX2.</em></h2></div><p data-r>Trial milestones, regulatory news and the families the research is for.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Patients, clinicians, partners and investors</span>'+
   '<h2 class="big split">Turning fatal cancers into <em>manageable ones.</em></h2>'+
   '<p class="sub" data-r>OX2 Therapeutics is committed to turning fatal cancers into manageable, if not curable, diseases. Whether you are a patient or loved one, a clinician or a potential partner, write to the team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+CONTACT+'" target="_blank" rel="noopener">Contact the team '+ARR+'</a><a class="btn" href="#/technology">How ARL200 works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span>Minneapolis,</span><br><span>Minnesota</span></p></div>'+
    '<div><span class="lab" data-r>Write to us</span><p data-r><a class="ul" href="'+CONTACT+'" target="_blank" rel="noopener">ox2therapeutics.com/contact</a></p></div>'+
    '<div><span class="lab" data-r>Clinical trial</span><p data-r><a class="ul" href="'+CT+'" target="_blank" rel="noopener">NCT06305910</a><br><span>Children’s Minnesota</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Minneapolis,<br>Minnesota</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/platform">Peptide Platform</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+CONTACT+'" target="_blank" rel="noopener">Contact form</a><br><a class="ul" href="'+CT+'" target="_blank" rel="noopener">NCT06305910</a></div>'+
   '<div class="c"><span class="lab">Lead candidate</span>ARL200<br>CD200 peptide immunotherapy</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-weight:600;font-size:64px;letter-spacing:.16em"><tspan fill="#f3f6fb">OX2</tspan><tspan fill="#86a6ff" style="font-weight:400" dx="18">THERAPEUTICS</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 OX2 Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",platform:"story",technology:"story",pipeline:"pipeline",programs:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"OX2 Therapeutics — reactivating the immune system against cancer, Minneapolis",x:"Home"};
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
