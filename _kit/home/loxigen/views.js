/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Open the stroma","LOX crosslinks the collagen around desmoplastic tumours into stiff tissue. Inhibiting it impairs that crosslinking, reduces tumour stiffness and increases the efficacy of chemotherapy, in part by letting drugs penetrate further.",'<path d="M6 14c14 6 30-6 44 0M6 28c14 6 30-6 44 0M6 42c14 6 30-6 44 0"/><circle class="f" cx="20" cy="17" r="2.6"/><circle class="f" cx="36" cy="25" r="2.6"/><path class="a" d="M14 21v4M42 35v4"/>'],
  ["Block metastatic growth","LOX secreted by hypoxic breast tumour cells gathers at pre-metastatic sites and crosslinks collagen there, preparing the ground for metastasis. Blocking LOX blocks that metastatic growth.",'<circle cx="18" cy="30" r="10"/><circle cx="44" cy="16" r="4"/><circle cx="44" cy="40" r="4"/><path class="a" d="M28 26l11-7M28 34l11 4"/><path d="M38 10l12 12M50 10L38 22"/>'],
  ["Built to be a drug","Every candidate runs an extensive optimisation pipeline: on-target potency, oral bioavailability, in vivo efficacy in combination with standard therapies, and any metabolic or toxicity liabilities addressed.",'<rect x="20" y="6" width="16" height="44" rx="8"/><path class="a" d="M20 28h16"/><path d="M28 34v8M24 38h8"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>LOX inhibitors<span class="nomob"> · Oncology &amp; fibrosis</span> · Charleston, SC</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Break down the wall</span><span class="l">around resistant</span><span class="l"><em>tumours.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>LoxiGen develops next-generation inhibitors of lysyl oxidase (LOX). They break down the rigid tissue surrounding a tumour and help drugs penetrate cancer tissue, in addition to blocking key intracellular processes, to treat aggressive cancers such as triple-negative breast cancer, and fibrosis-driven diseases.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why LOX</span>'+
   '<h2 class="txt" id="mani">Lysyl oxidases crosslink the collagen and elastin of the extracellular matrix. In hard-to-treat cancers that stiff, crosslinked tissue drives chemoresistance and metastasis. LoxiGen is building the inhibitors that <em>open it back up.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.46M</span><p class="k">National Cancer Institute Fast-Track STTR, 2023–2025, to develop LOX inhibitors for chemotherapy-resistant TNBC</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">70–75%</span><p class="k">Of lung fibrosis patients are high LOX-expressing compared with normal lung, in LoxiGen’s own analyses</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Therapeutic areas where lysyl oxidase drives disease: cancer, fibrosis and cardiac disease</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Loosen the matrix, <em>let therapy in.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Crosslink</span><span>Inhibit</span><span>Penetrate</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>LOX stiffens the stroma.</h2><p>Lysyl oxidase converts lysines in collagen into reactive aldehydes that crosslink the fibres. Around desmoplastic tumours such as TNBC and pancreatic cancer, the matrix grows rigid and chemotherapy struggles to get through.</p></article>'+
     '<article class="step"><h2>A LOX inhibitor cuts the crosslinks.</h2><p>LoxiGen’s lead, LXG6403, is a highly potent, orally bioavailable bi-thiazole inhibitor of LOX. It impairs crosslinking and rewires the collagen architecture around the tumour.</p></article>'+
     '<article class="step"><h2>Standard therapy reaches the tumour.</h2><p>With the stroma opened, the standard of care penetrates better. In chemoresistant cell, organoid and animal models of TNBC, LXG6403 overcame chemotherapy resistance.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">Matrix biology, <em>made into medicine.</em></h2></div><p data-r>LoxiGen builds on deep expertise in extracellular matrix remodelling and lysyl oxidase-driven disease, from MUSC’s Hollings Cancer Center and the University of South Carolina, with mechanisms validated across a wide range of cancers and fibrosis-driven diseases.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One lead, <em>a family of targets.</em></h2></div><p data-r>The lead compound is being optimised toward an IND application, alongside several other compounds with variable selectivity across the lysyl oxidase family, for cancer, fibrosis and heart disease.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Cancer biology and <em>drug discovery.</em></h2></div><p data-r>Founded by Dr. Ozgur Sahin, a cancer biologist who has spent his career on drug-resistant and metastatic cancer, and advised by medicinal chemists, a drug-resistance pioneer and SBIR/STTR commercialisation specialists.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>A Fast-Track STTR from the National Cancer Institute, with collaborating scientists at MUSC and the University of South Carolina.</p></div>'+
    '<div><span class="lab kick" data-r>Incubation</span><p data-r>Selected in April 2024 for the Life Science Incubator Program of Innosphere Ventures.</p></div>'+
    '<div><span class="lab kick" data-r>Partners</span><p data-r>Alacrita Consulting on regulatory strategy; Ripple Technology; the Zucker Institute and USC for commercialisation and intellectual property.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants and <em>papers.</em></h2></div><p data-r>The latest from LoxiGen. In January 2025 the team also presented at Biotech Showcase and RESI during JPM week in San Francisco.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function evid(){return '<div class="ev"><span class="lab kick" data-r>LXG6403 in TNBC</span><div><dl>'+
  [["Potent","A highly potent bi-thiazole inhibitor of LOX"],["Collagen","Rewires collagen architecture around the tumour"],["Chemoresponse","Enhances chemoresponse in triple-negative breast cancer"],["Oral","Orally bioavailable, with optimisation toward an IND under way"]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Cetin, Saatci et al., “A highly potent bi-thiazole inhibitor of LOX rewires collagen architecture and enhances chemoresponse in triple-negative breast cancer”, Cell Chemical Biology, 2024. Preclinical results.</p></div></div>'}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and investment</span>'+
   '<h2 class="big split">Talk to <em>LoxiGen.</em></h2>'+
   '<p class="sub" data-r>LoxiGen is advancing its lead LOX inhibitor toward the clinic and would be glad to hear from partners, investors and clinicians. The team answers enquiries within 24 hours on business days.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email LoxiGen '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>LoxiGen, Inc.<br>280 Calhoun St., Rm 308A<br>Charleston, SC 29425</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18032613725">+1 803 261 3725</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a><br><a class="ul" href="https://twitter.com/LoxiGenInc" target="_blank" rel="noopener">X / Twitter</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>280 Calhoun St.<br>Charleston, SC 29425</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead compound</span>LXG6403 · oral LOX inhibitor<br>NCI Fast-Track STTR</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Poppins\',Arial,sans-serif;font-weight:600;font-size:62px;letter-spacing:-.03em">LoxiGen</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 LoxiGen, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",how:"story",technology:"science",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"LoxiGen — LOX inhibitors for chemotherapy-resistant cancers and fibrosis, Charleston, SC",x:"Home"};
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
