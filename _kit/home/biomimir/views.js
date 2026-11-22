/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Biomimetic by design","Biomimetics are materials inspired by nature that replicate the structure and function of features in plants, animals and human tissues. BioMimir’s polymers mimic the body’s own extracellular matrix.",'<path d="M6 16c12-8 22 8 34 0s10-6 10-6M6 30c12-8 22 8 34 0s10-6 10-6M6 44c12-8 22 8 34 0s10-6 10-6"/><circle class="f" cx="18" cy="16" r="2.4"/><circle class="f" cx="34" cy="30" r="2.4"/><circle class="f" cx="22" cy="44" r="2.4"/>'],
  ["Three functions in one","Tri-functional biomaterials: self-adhesive so they stay in the wound, anti-inflammatory, and anti-fibrotic, designed to be pro-regenerative and to prevent scar tissue.",'<path d="M28 8l9 9-9 9-9-9z"/><path d="M15 26l9 9-9 9-9-9zM41 26l9 9-9 9-9-9z"/><path class="a" d="M28 26L15 44M28 26l13 18"/>'],
  ["Made to reach everyone","Regenerative medicine should be accessible to everyone in need of healthcare. Biomimetics are affordable, scalable and globally deployable, and can be used immediately at the point of care.",'<circle cx="28" cy="28" r="20"/><path d="M8 28h40M28 8c-8 10-8 30 0 40M28 8c8 10 8 30 0 40"/><path class="a" d="M14 15c8 4 20 4 28 0M14 41c8-4 20-4 28 0"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Regenerative medical devices<span class="nomob"> · Wound care</span> · Sherbrooke, QC</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Medicine</span><span class="l">without <em>scars.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>BioMimir designs biomimetic polymers that mimic the body’s extracellular matrix. Our wound fillers are adhesive, anti-inflammatory and pro-regenerative, made for complex wounds and designed to prevent scar tissue, affordably and at the point of care.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why biomimetics</span>'+
   '<h2 class="txt" id="mani">Complex wounds heal slowly and often heal with scar. BioMimir is a female-founded medical device company building regenerative wound fillers that work with the body’s own healing response, and that are <em>affordable, accessible and globally deployable.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">Top 4%</span><p class="k">Of nearly 1,500 global applicants: one of 65 companies selected for the MedTech Innovator 2025 Accelerator</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3-in-1</span><p class="k">Self-adhesive, anti-inflammatory and anti-fibrotic: tri-functional biomaterials in a single wound filler</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2021</span><p class="k">Founded in Montréal by Dr. Fiona Simpson, Dr. Elle Edin and Benjamin Yam; lab now in Sherbrooke, Québec</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Fill the wound, <em>not with scar.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Wound</span><span>Fill</span><span>Regenerate</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A complex, inflamed wound.</h2><p>Ulcers, abscesses and fistulas leave deep cavities that are hard to dress and slow to close. Left to itself, inflammation drives the body to fill the gap with scar tissue.</p></article>'+
     '<article class="step"><h2>MatriFlex flows in, then sets.</h2><p>Applied as a liquid at the point of care, MatriFlex fills the cavity to its edges and turns solid in place. It is self-adhesive, so it stays where it is put.</p></article>'+
     '<article class="step"><h2>Tissue regrows as it resorbs.</h2><p>The polymer mimics the extracellular matrix and is anti-inflammatory and anti-fibrotic, made to kickstart the body’s healing response. It is bioresorbable, designed for regeneration without scar.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Purpose-designed <em>biomimetic polymers.</em></h2></div><p data-r>BioMimir is a B2B medical device company specialising in regenerative technology. Anti-inflammatory polymers are at the core of its innovations, engineered to perform one purpose: next-generation tissue regeneration.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Wound fillers for <em>reconstructive care.</em></h2></div><p data-r>Regenerative wound healing products that are affordable, accessible and address unmet needs in reconstructive surgery, for a wide variety of acute and chronic wounds.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Biomaterials science <em>and operations.</em></h2></div><p data-r>Two biomaterials scientists who have built ISO 13485 medical devices in leading regenerative medicine groups, and a healthcare operator who has scaled clinics into multi-department teams.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Accelerators</span><p data-r>MedTech Innovator 2025 Accelerator; Creative Destruction Lab, Biomedical Engineering stream, 2022/2023.</p></div>'+
    '<div><span class="lab kick" data-r>Awards</span><p data-r>CIX Startup Award, Emerging category, 2025; winner of the 2023 Startup TNT Life Science Investment Summit.</p></div>'+
    '<div><span class="lab kick" data-r>Ecosystem</span><p data-r>Supported from the start by Sherbrooke Innopole and Innovate Calgary, who believed in the team when it had a good idea and a vision.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Accelerators and <em>awards.</em></h2></div><p data-r>The latest from BioMimir, from its graduation at the Creative Destruction Lab to the MedTech Innovator 2025 cohort.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function evid(){return '<div class="ev"><span class="lab kick" data-r>MatriFlex</span><div><dl>'+
  [["Liquid to solid","Applied as a liquid, it sets in place to fill the wound"],["Bioresorbable","Resorbed by the body as tissue regenerates"],["Self-adhesive","Stays in complex cavities such as ulcers, abscesses and fistulas"],["Pro-regenerative","Anti-inflammatory and anti-fibrotic, designed to prevent scar"]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>MatriFlex is BioMimir’s proof of concept and is in development; it is not approved for clinical use.</p></div></div>'}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and investment</span>'+
   '<h2 class="big split">Talk to <em>BioMimir.</em></h2>'+
   '<p class="sub" data-r>BioMimir is validating its technology, building key partnerships and accelerating its path to market. Partners, investors and clinicians are welcome to get in touch.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email BioMimir '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Lab</span><p data-r>BioMimir Inc.<br>7-2650 rue Maximilien-Chagnon<br>Sherbrooke, QC J1E 0M8</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+14383989535">+1 438 398 9535</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a><br>Monday to Friday, 9 am to 6 pm</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Lab</span>7-2650 rue Maximilien-Chagnon<br>Sherbrooke, QC J1E 0M8</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead product</span>MatriFlex · liquid-to-solid<br>bioresorbable skin substitute</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Poppins\',Arial,sans-serif;font-weight:500;font-size:62px;letter-spacing:.08em">BIOMIMIR</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 BioMimir Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",how:"story",technology:"science",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"BioMimir — biomimetic wound fillers for regeneration without scars, Sherbrooke, QC",x:"Home"};
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
