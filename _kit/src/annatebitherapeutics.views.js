/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Native biology as a payload","Annate harnesses the ApoL1 that already circulates within high-density lipoprotein particles (HDLs), keeping it in its native conformation and reducing the potential for immunogenicity.",'<circle cx="28" cy="28" r="17"/><circle class="a" cx="28" cy="28" r="10.5"/><circle class="f" cx="28" cy="17.5" r="2.4"/><circle class="f" cx="37.1" cy="33.2" r="2.4"/><circle class="f" cx="18.9" cy="33.2" r="2.4"/>'],
  ["Bispecific targeting","Engineered antibody arms selectively bind tumour-associated surface antigens, directing ApoL1 deposition exclusively to sites of disease, tuned for high on-tumour selectivity and minimal off-target activity.",'<path d="M28 50V30M28 30L14 14M28 30l14-16"/><path class="a" d="M10 18l6-6M38 12l6 6"/><path d="M6 50h44"/>'],
  ["Immune-system agnostic","Tumour cell killing comes from the ApoL1 inside the cell, not from effector cells, so the platform is built to keep working under immune suppression or T-cell exhaustion.",'<circle cx="28" cy="28" r="20"/><circle class="a" cx="25" cy="31" r="7" stroke-dasharray="3 3"/><circle class="f" cx="25" cy="31" r="2.2"/><circle cx="35" cy="21" r="5"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Why this matters</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From Annate’s approach and pipeline pages; the company last updated its programme status on 5 October 2025. Both programmes are pre-clinical.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>ApoL1 bispecific antibodies<span class="nomob"> · UGA startup</span> · Athens, GA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Innate immunity,</span><span class="l">delivered into</span><span class="l"><em>the cancer cell.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Annate Bitherapeutics is unlocking the therapeutic potential of ApoL1 through a next-generation bispecific antibody platform, to battle hematologic cancers and solid tumours.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">Our approach '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Ann + innate</span>'+
   '<h2 class="txt" id="mani">Annate is named for Ann Hajduk, whose life was cut short by multiple myeloma, and for the innate immune system it puts to work: antibodies that carry ApoL1, a protein already in the blood, <em>into the tumour cell itself.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$398K</span><span class="k">NCI SBIR Phase I award to advance ANN-01M in multiple myeloma, 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1989</span><span class="k">The year the research behind Annate’s technology began, in Stephen Hajduk’s lab</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Two</span><span class="k">Programmes: ANN-01M in multiple myeloma and ANN-01P in mesothelin-expressing cancers</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the platform works</span><h2 class="d3">Carried in, <em>released inside.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">ApoL1</span><span>Bispecific</span><span>Lysosome</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>ApoL1 is already in the blood.</h2><p>ApoL1 is a component of the body’s innate immune defence. It circulates within high-density lipoprotein particles, in its native conformation, and was identified as a lytic component of HDL in 2003.</p></article>'+
     '<article class="step"><h2>One arm finds the tumour.</h2><p>Annate’s bispecific antibodies bind a tumour-associated surface antigen with one arm and capture the circulating ApoL1 complex with the other, so the payload is deposited only at the cancer cell.</p></article>'+
     '<article class="step"><h2>Released inside the cell.</h2><p>The complex is carried past the tumour surface into lysosomal compartments. There ApoL1 destabilises the lysosome and triggers cell death without relying on T cells or any other effector cell.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="approach" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Approach</span><h2 class="d2 split">The body’s own defence, <em>redirected.</em></h2></div><p data-r>Annate develops bispecific antibodies that deliver ApoL1, a potent component of the body’s innate immune defence, directly into cancer cells. The result is immune-independent tumour killing that complements and extends today’s cancer therapies.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Two of the hardest <em>cancers first.</em></h2></div><p data-r>A new class of ApoL1-based therapeutics acting through a completely new mechanism. The lead programmes target multiple myeloma and pancreatic cancer.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">From one lab, <em>since 2010.</em></h2></div><p data-r>Annate grew out of Stephen Hajduk’s lab at the University of Georgia, where Eric DeJesus earned his PhD, Michael Cipriano did postdoctoral research, and DeJesus first asked whether ApoL1 could be turned against cancer. Clinicians and translational scientists from Emory’s Winship Cancer Institute and the Frederick National Laboratory advise the company.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Where</span><p data-r>Athens, Georgia. Annate was founded in 2021 as a University of Georgia startup.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>A National Cancer Institute SBIR Phase I award (2026), and earlier funding from the Georgia Research Alliance (2022).</p></div>'+
    '<div><span class="lab kick" data-r>Recognition</span><p data-r>A winner at the 2026 GIPA Startup Awards of the Georgia Intellectual Property Alliance.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, awards <em>and the story.</em></h2></div><p data-r>Recent news from Annate’s newsroom, NIH RePORTER and the University of Georgia.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and investment</span>'+
   '<h2 class="big split">Talk to <em>Annate.</em></h2>'+
   '<p class="sub" data-r>Clinicians, partners and investors interested in ApoL1-based therapeutics are welcome to get in touch as ANN-01M advances toward the clinic.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Annate '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Annate Bitherapeutics<br>Athens, GA</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r>Michael Cipriano, PhD<br><a class="ul" href="mailto:'+MAIL+'">'+MAIL.replace("@","@<wbr>")+'</a></p></div>'+
    '<div><span class="lab" data-r>Lead programme</span><p data-r><a class="ul" href="'+RP+'11254465" target="_blank" rel="noopener">NIH RePORTER</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Athens, GA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL.replace("@","@<wbr>")+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platform</span>ApoL1 bispecific antibodies<br>Immune-independent tumour killing</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Lato\',system-ui,sans-serif;font-weight:700;font-size:56px;letter-spacing:.22em"><tspan style="fill:#4bbba1">ANN</tspan>ATE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Annate Bitherapeutics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",approach:"approach",technology:"approach",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Annate Bitherapeutics — ApoL1 bispecific antibodies against cancer, Athens, GA",x:"Home"};
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