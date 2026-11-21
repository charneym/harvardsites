/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["It reaches the brain","Most drugs that work on a primary breast tumour never cross the blood-brain barrier. SEAK193 shows high brain penetration in mice and good efficacy in an aggressive brain metastasis model; the current award quantifies its penetration in rats, whose barrier is closer to ours.",'<path d="M8 20h40M8 36h40"/><path class="a" d="M28 8v40"/><circle class="f" cx="28" cy="28" r="3.6"/><path d="M14 20v16M42 20v16"/>'],
  ["A mechanism you can see","SEAK193 stops cancer cells dividing. Its mechanism of action is confirmed by an X-ray co-crystal structure and other experimental data, and the compound has shown excellent metabolic stability and pharmacokinetic profiles.",'<circle cx="20" cy="28" r="12"/><circle cx="36" cy="28" r="12"/><path class="a" d="M28 12v32"/><circle class="f" cx="28" cy="28" r="2.6"/>'],
  ["Built for resistant disease","SEAK193 is potent against drug-resistant breast tumour models in vivo, including a taxane-refractory triple-negative model, and has shown a promising ability to potentiate anti-PD-L1 immunotherapy.",'<path d="M10 44L28 10l18 34z"/><path class="a" d="M16 33h24"/><circle class="f" cx="28" cy="25" r="3.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The SEAK193 Phase I plan</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From the abstract of NCI STTR Phase I award 1R41CA310186-01, “Development of a potent and highly brain-penetrable antimitotic agent SEAK193 to treat breast cancer brain metastasis” (contact PI: Wei Li), from September 2025. Preclinical work; Phase II is planned for IND-enabling studies.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Targeted small molecules<span class="nomob"> · UTHSC spinout</span> · Memphis, TN</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Targeted drugs</span><span class="l">for the cancers</span><span class="l"><em>hardest to reach.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>SEAK Therapeutics develops targeted small-molecule drugs for cancer and neurological disease. Its lead, SEAK193, is a brain-penetrant antimitotic for breast cancer that has spread to the brain.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The science '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Breast cancer brain metastases are becoming more common as patients live longer, and few drugs cross the blood-brain barrier to reach them. SEAK193 is an antimitotic that <em>does.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2018</span><span class="k">Founded in Memphis by Dr. Wei Li as a spinout of the University of Tennessee Health Science Center</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.58M</span><span class="k">NIH SBIR and STTR funding awarded to SEAK across five awards since 2019</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Three</span><span class="k">NIH-funded programmes: brain metastasis, childhood cancers and epilepsy</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How SEAK193 works</span><h2 class="d3">Past the barrier, <em>into the tumour.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Metastasis</span><span>Barrier</span><span>Mitosis</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A tumour behind a wall.</h2><p>Breast cancer that spreads to the brain grows behind the blood-brain barrier, the tight lining of the brain’s capillaries. Drugs that control the primary tumour often cannot follow it there.</p></article>'+
     '<article class="step"><h2>A small molecule that crosses.</h2><p>SEAK193 is a small molecule with high brain penetration in mice. Carried in the blood, it passes the barrier and reaches the metastasis; the current award measures how much of it gets through in rats.</p></article>'+
     '<article class="step"><h2>Division stops.</h2><p>Inside the tumour SEAK193 acts as an antimitotic: it stops cancer cells from dividing. It has been potent against drug-resistant breast tumour models and effective in a taxane-refractory brain metastasis model.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Small molecules, <em>made to arrive.</em></h2></div><p data-r>SEAK discovers and develops targeted small molecules from patented scaffolds invented at UTHSC, and de-risks them toward the clinic: mechanism, stability, brain penetration and safety, one milestone at a time.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Three targets, <em>one discipline.</em></h2></div><p data-r>Three NIH-funded programmes, each built on a patented small molecule: SEAK193 for breast cancer brain metastasis, the MDM2/XIAP dual inhibitor SEAK-114b for childhood cancers, and the TRPC3 inhibitor JW-65 for epilepsy.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Medicinal chemists, <em>from the bench.</em></h2></div><p data-r>SEAK was founded in November 2018 by Dr. Wei Li to develop the patented small molecules invented in his lab at the University of Tennessee Health Science Center College of Pharmacy.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Where</span><p data-r>Downtown Memphis, Tennessee, close to the UTHSC College of Pharmacy and its Drug Discovery Center.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>SBIR and STTR awards from the National Cancer Institute and NINDS, with matching grants from the State of Tennessee through Launch Tennessee.</p></div>'+
    '<div><span class="lab kick" data-r>Programmes</span><p data-r>Accepted to NCI’s CARE pilot programme in 2021, and selected for the NIH TABA programme for the brain metastasis therapy.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards <em>and milestones.</em></h2></div><p data-r>SEAK’s grant record and the news behind it.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and investment</span>'+
   '<h2 class="big split">Talk to <em>SEAK.</em></h2>'+
   '<p class="sub" data-r>SEAK welcomes angel investment, partners and collaborators as SEAK193 moves toward IND-enabling studies.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Dr. Wei Li '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>SEAK Therapeutics, LLC<br>20 Dudley Street, Suite 900<br>Memphis, TN 38103</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Lead programme</span><p data-r><a class="ul" href="'+RP+'11312503" target="_blank" rel="noopener">NIH RePORTER</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>20 Dudley Street, Suite 900<br>Memphis, TN 38103</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Programmes</span>SEAK193 · brain metastasis<br>SEAK-114b · childhood cancers<br>JW-65 · epilepsy</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'IBM Plex Sans\',system-ui,sans-serif;font-weight:600;font-size:78px;letter-spacing:.22em">SEAK</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 SEAK Therapeutics, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"platform",platform:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"SEAK Therapeutics — targeted small-molecule drugs for cancer and neurological disease, Memphis, TN",x:"Home"};
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
