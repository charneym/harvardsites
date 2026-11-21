/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["It reaches the brain","Any drug for brain cancer has to cross the blood-brain barrier first. LMP744 and LMP400 cross it easily, are not pumped back out by the efflux transporters that guard it, and stay in the brain for up to 24 hours after a single dose.",'<path d="M6 18h44M6 38h44"/><path class="a" d="M28 6v44"/><circle class="f" cx="28" cy="28" r="4"/><path d="M14 18v20M42 18v20"/>'],
  ["It traps topoisomerase I","Topoisomerase I nicks DNA so it can unwind. The indenoisoquinolines wedge into that nick and hold the enzyme there, a non-camptothecin mechanism that is most potent in cancers with homologous recombination deficiency or high SLFN11, and works with PARP inhibitors.",'<path d="M6 28c6-10 12-10 18 0s12 10 18 0 8-6 8-6"/><path d="M6 28c6 10 12 10 18 0s12-10 18 0 8 6 8 6"/><path class="a" d="M17 12c0-6 22-6 22 0M17 44c0 6 22 6 22 0"/><rect class="f" x="25" y="24.5" width="6" height="7"/>'],
  ["It turns down cMYC","cMYC drives a large share of cancers, brain tumours among them, and has long been called undruggable. The same molecules bind and stabilise the G-quadruplex in the MYC promoter and lower MYC expression: two targets, one drug.",'<path d="M10 22l18-8 18 8-18 8z"/><path d="M10 31l18-8 18 8-18 8z"/><path class="a" d="M10 40l18-8 18 8-18 8z"/><circle class="f" cx="28" cy="10" r="3.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Behind the Phase 2 trial</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Purdue University, “Gibson Oncology, NIH to begin Phase 2 trials of LMP744 for treatment of first-time recurrent glioblastoma”, 25 February 2026; FDA designations as reported by OncLive (2024) and the NCI Center for Cancer Research (2023).</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage oncology<span class="nomob"> · Glioblastoma</span> · Miami, FL</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">New hope in</span><span class="l"><em>brain cancer.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Gibson Oncology develops indenoisoquinolines: small molecules that cross the blood-brain barrier and act on both topoisomerase I and the cMYC oncogene. Its lead drug, LMP744, is in a Phase 2 trial at the NIH in recurrent glioblastoma.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">Our science '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">For three decades, life expectancy after a glioblastoma diagnosis has stayed at about 15 to 18 months, and at six to nine once the tumour comes back. A brain cancer drug has to reach the brain first. <em>Gibson’s do, and stay there.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">40</span><span class="k">Patients with first-time recurrent glioblastoma in the NIH Phase 2 trial of LMP744</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">24 h</span><span class="k">How long LMP744 and LMP400 stay in the brain after a single dose</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Two</span><span class="k">FDA orphan drug designations for glioma: LMP744 in 2024 and LMP400 in 2023</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How LMP744 works</span><h2 class="d3">Into the brain, <em>onto the DNA.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Barrier</span><span>Top1</span><span>cMYC</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Through the barrier.</h2><p>The blood-brain barrier keeps most cancer drugs out of the brain, and its efflux transporters pump out many that get in. LMP744 crosses it easily, is not pumped back out, and stays in the brain for up to 24 hours after a single dose.</p></article>'+
     '<article class="step"><h2>Trap the enzyme on the DNA.</h2><p>Topoisomerase I clamps round DNA and nicks one strand to let it unwind. LMP744 wedges into the nick and holds the complex there, so the break cannot be resealed. Cancer cells that are poor at repairing DNA are hit hardest.</p></article>'+
     '<article class="step"><h2>Turn down cMYC.</h2><p>Upstream of the MYC oncogene, the DNA can fold into a G-quadruplex. The indenoisoquinolines bind and stabilise it, and MYC expression falls: a second blow against a driver that has resisted drugs for decades.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Two targets, <em>one molecule.</em></h2></div><p data-r>LMP744 and LMP400 were designed by Mark Cushman’s group at Purdue University and, with LMP776, taken through Phase 1 by the National Cancer Institute. When Gibson found that LMP744 crosses the blood-brain barrier, the NIH began its brain cancer research.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Three drugs <em>in the clinic.</em></h2></div><p data-r>Six programmes from three licensed indenoisoquinolines invented at the NIH and Purdue, all through Phase 1, and a second generation designed for oral dosing. Brain cancer comes first.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Chemists, clinicians <em>and company builders.</em></h2></div><p data-r>Gibson’s team has developed over a billion dollars in new companies, including other drugs now approved for the treatment of cancer. Its scientific founder designed the molecules it develops.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Collaborators</span><p data-r>Senior scientists at NINDS and the National Cancer Institute, Duke University, Purdue University, the University of Maryland and Miami Cancer Institute.</p></div>'+
    '<div><span class="lab kick" data-r>Trials</span><p data-r>Phase 2 of LMP744 at the National Institute of Neurological Disorders and Stroke; a second LMP744 study at Mayo Clinic.</p></div>'+
    '<div><span class="lab kick" data-r>Where</span><p data-r>Headquartered in Miami, Florida, with its chemistry rooted at Purdue University in West Lafayette, Indiana.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Trials, designations <em>and science.</em></h2></div><p data-r>The Phase 2 trial, the FDA’s orphan drug designations and the research behind them.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and investment</span>'+
   '<h2 class="big split">Talk to <em>Gibson.</em></h2>'+
   '<p class="sub" data-r>Data on blood-brain barrier transmission and on the design of the Phase 2 trial are available under a confidentiality agreement. Gibson is glad to hear from clinicians, partners and investors.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Gibson '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Gibson Oncology<br>7772 Fisher Drive, Miami, FL 33109</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Lead programme</span><p data-r><a class="ul" href="'+PU+'" target="_blank" rel="noopener">LMP744 Phase 2</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>7772 Fisher Drive<br>Miami, FL 33109</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Programmes</span>LMP744 · LMP400 · LMP776<br>G-103 (oral)</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Manrope\',system-ui,sans-serif;font-weight:600;font-size:60px;letter-spacing:-.03em">Gibson</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Gibson Oncology</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"platform",technology:"platform",platform:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Gibson Oncology — LMP744 for recurrent glioblastoma, Miami, FL",x:"Home"};
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
