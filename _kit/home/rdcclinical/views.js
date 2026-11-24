/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function pubs(){return '<ul class="nws pubs">'+PUBS.map(function(n){return '<li><div class="pr"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+'</span></div></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["What we study","TGA-listed dietary supplements, including herbs and vitamins; ingredients on the ATAGI register; functional foods; cosmetics; and pharmaceuticals, never first in human. Only products already proven safe for human use.",'<path d="M16 22h24a6 6 0 0 1 0 12H16a6 6 0 0 1 0-12z"/><path class="a" d="M28 22v12"/><path d="M10 48h36"/>'],
  ["How we test","Phase I, III and IV trials, post-market surveys and pharmacokinetic studies, from one day to several months, with healthy or otherwise healthy volunteers in an outpatient model.",'<path d="M6 44h44"/><path class="a" d="M10 38l10-10 9 6 17-18"/><circle class="f" cx="46" cy="16" r="3"/>'],
  ["What it is for","Publication in relevant journals, submissions to regulatory authorities around the world for compliance and marketing approvals, and insight that helps developers improve their products.",'<path d="M16 6h18l8 8v36H16z"/><path d="M34 6v8h8"/><path class="a" d="M21 24h16M21 31h16M21 38h11"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Taking part</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Studies listed as recruiting on rdcclinical.com.au, November 2026. Most studies also offer a small payment for participation.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical research organisation<span class="nomob"> · Brisbane, Australia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Innovative</span><span class="l"><em>health</em></span><span class="l"><em>research.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>RDC Clinical runs ethically approved, evidence-based human trials of complementary medicines, dietary supplements, functional foods and cosmetics, helping bring safe, effective and well-researched health products to market.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How a trial runs '+ARR+'</a><a class="btn" href="#/trials">Current trials</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About RDC Clinical</span>'+
   '<h2 class="txt" id="mani">We work with sponsors, health professionals and volunteers to generate credible data on product efficacy and safety, <em>so health products are backed by rigorous science.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">7</span><p class="k">Studies recruiting volunteers now, in Brisbane and Australia-wide</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">25+</span><p class="k">Peer-reviewed papers from RDC studies, from 2001 to 2025</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1–4</span><p class="k">Months of free active product for placebo participants, where possible</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a trial runs</span><h2 class="d3">From volunteer <em>to evidence.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Screen</span><span>Randomise</span><span>Measure</span><span>Publish</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Volunteers are screened.</h2><p>Volunteers answer a few eligibility questions online, then a Trial Co-ordinator calls to explain the study. Everyone reads the Participant Information and Consent form and gives informed consent before taking part.</p></article>'+
     '<article class="step"><h2>Allocated by chance.</h2><p>Most RDC trials are randomised, double-blind and placebo-controlled: validated software allocates the active product or a placebo, and neither the participant nor the Trial Co-ordinators know which.</p></article>'+
     '<article class="step"><h2>Measured from baseline.</h2><p>Assessments happen at baseline, at the end and often along the way: short clinic visits in Fortitude Valley, questionnaires completed at home, and tests such as blood tests or body scans.</p></article>'+
     '<article class="step"><h2>Unblinded and published.</h2><p>When the study ends it is unblinded. The results are published in journals and presented to regulators, and participants who took the placebo may then receive the active product.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>What we study</span><h2 class="d2 split">Evidence for <em>natural health.</em></h2></div><p data-r>RDC Clinical specialises in evidence-based trials for complementary medicines, dietary supplements, functional foods and cosmetic products, bridging innovation and scientific validation.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="trials" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Current trials</span><h2 class="d2 split">Studies recruiting <em>now.</em></h2></div><p data-r>New studies start throughout the year. Volunteers check their eligibility on each study page; many studies can be completed from anywhere in Australia.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="research" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Previous research</span><h2 class="d2 split">Published, <em>peer-reviewed.</em></h2></div><p data-r>RDC studies are published in journals for the scientific, medical and general community, and presented at conferences from Vitafoods Europe in Geneva to Probiota Americas in Vancouver.</p></div>'+
   pubs()+
   '<p class="pubmore" data-r><a class="ul" href="'+RDC+'previous-research/" target="_blank" rel="noopener">All publications and presentations '+ARR+'</a></p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our team</span><h2 class="d2 split">Our clinical <em>trial team.</em></h2></div><p data-r>Each study has a Principal Investigator, supported by trial co-ordinators and health professionals, and RDC regularly collaborates with academics, scientists and medical professionals.</p></div>'+
   team()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Talk to <em>us.</em></h2>'+
   '<p class="sub" data-r>Sponsors planning a study of a supplement, functional food or cosmetic, and volunteers with a question about a trial, can reach the RDC team directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to RDC '+ARR+'</a><a class="btn" href="#/trials">Current trials</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Clinic</span><p data-r>Level 3, 252 Saint Pauls Terrace<br>Fortitude Valley QLD 4006<br>Brisbane, Australia</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">research@rdcglobal.com.au</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+61731024486">07 3102 4486</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Clinic</span>Level 3, 252 Saint Pauls Terrace, Fortitude Valley QLD 4006</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">research@rdcglobal.com.au</a><br><a class="ul" href="tel:+61731024486">07 3102 4486</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/services">What we study</a><br><a class="ul" href="#/trials">Trials</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Mail</span>PO Box 667, New Farm QLD 4005</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Jost\',sans-serif;font-weight:500;font-size:64px">RDC CLINICAL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 RDC Clinical</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",services:"services",trials:"trials",research:"research",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"RDC Clinical — innovative health research",x:"Home"};
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
