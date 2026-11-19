/* ================= VIEWS (home only: every nav item scrolls to its section) ================= */
function mhStatic(p){return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span><span class="mh-arrow" aria-hidden="true"></span></div></li>'}
function team(){return '<div class="mh">'+[["Team",TEAM],["Scientific advisor & consultants",ADV]].map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g[0])+'</p><ul class="mh-list">'+g[1].map(mhStatic).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){return '<div class="caps">'+CAPS.map(function(c,i){return '<div class="pl3"><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function apps(){return '<ul class="port apps">'+APPS.map(function(a){return '<li class="pco"><h3>'+esc(a[0])+'</h3><p>'+esc(a[1])+'</p><span class="lab rd">'+esc(a[2])+'</span></li>'}).join("")+'</ul>'}
function stack(){return '<div class="credit"><span class="lab">Built end-to-end on</span><p>'+STACK.map(function(s){return '<span>'+esc(s)+'</span>'}).join(' <i>/</i> ')+'</p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Foundation AI · Live-cell imaging<span class="nomob"> · Laurel, Maryland</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Living cells,</span><span class="l">read over <em>time.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ChrononAI turns raw time-lapse microscopy into decision-ready insight: foundation AI that learns how living cells move and change, in health and in disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/programme">The NCI programme</a></div></div>'+
   '<div class="hero-key" aria-hidden="true"><span class="lab"><i class="ramp"></i>Cell edge, coded by time</span></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Chronon: from the concept of time</span>'+
   '<p class="txt" id="mani">Cells are not static entities. They move, interact and adapt over time, and understanding these temporal dynamics is <em>key to unlocking the mysteries of life.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$400K</span><span class="k">STTR Phase I award from the National Cancer Institute ($399,997), 2026–27</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><span class="k">Application areas: translational oncology, MoA profiling and cell therapy R&amp;D</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><span class="k">Scientists, engineers and advisors across AI, software and imaging</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">From movie to <em>phenotype.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Acquire</span><span>Understand</span><span>Decide</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Acquire.</h2><p>Capture time-lapse sequences from USB microscopes or high-content systems, and import standard scientific formats such as OME-TIFF and OME-NGFF.</p></article>'+
     '<article class="step"><h2>Understand.</h2><p>Precise cell segmentation and multi-object tracking; a time-series Transformer encodes each cell’s dynamic behaviour into a compact temporal embedding.</p></article>'+
     '<article class="step"><h2>Decide.</h2><p>Explore clusters, nearest neighbours and exemplars, compute KPIs such as wound closure rate and motility persistence, and export publication-ready reports.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Foundation AI for <em>live-cell morphodynamics.</em></h2></div><p data-r>Microscope-agnostic, assay-agnostic software that ingests live-cell videos and delivers end-to-end analysis: segmentation, tracking, temporal representation learning and phenotype discovery.</p></div>'+
   caps()+
   '<div class="two diff"><div><span class="lab kick" data-r>Why it’s different</span><h3 class="d3 split">Time, not <em>snapshots.</em></h3></div>'+
   '<div><p class="lede" data-r>Most tools focus on snapshot or assay-specific pipelines. ChrononAI centers on time-dependent, generalizable representations that transfer across microscopes and labs, reducing per-assay re-engineering and enabling zero- and few-shot use.</p>'+
   '<p class="muted" data-r style="margin-top:24px;max-width:58ch">The platform is API-first and cloud-based, with live video overlays, one-click reports and drag-and-drop imports; the same pipeline also runs on a single workstation for on-premises work.</p></div></div>'+
   stack()+
  '</div></section>'+

  '<section class="sec dark2" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Where it applies</span><h2 class="d2 split">Readouts that <em>move.</em></h2></div><p data-r>Dynamic phenotypes for the questions where behaviour over time matters most.</p></div>'+
   apps()+
  '</div></section>'+

  '<section class="sec light" id="programme" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programme · NCI STTR Phase I</span><h2 class="d2 split">A foundation model for <em>cancer research.</em></h2></div><p data-r>Developing and commercializing a foundation AI model for live-cell phenotyping, in an STTR partnership with Boston Children’s Hospital.</p></div>'+
   '<div class="two"><div><dl class="facts">'+
    '<div><dt class="lab">Funder</dt><dd>National Cancer Institute, NIH</dd></div>'+
    '<div><dt class="lab">Award</dt><dd>$399,997 · STTR Phase I</dd></div>'+
    '<div><dt class="lab">Period</dt><dd>Sep 2026 – Aug 2027</dd></div>'+
    '<div><dt class="lab">Partner</dt><dd>Boston Children’s Hospital</dd></div>'+
   '</dl><a class="btn" style="margin-top:36px" href="'+RPT+'" target="_blank" rel="noopener" data-r>NIH RePORTER '+ARR+'</a></div>'+
   '<ul class="aims">'+
    '<li><span><b>Aim 1.</b> A deep-learning foundation model that joins an advanced cell-contour tracking algorithm with a time-series Transformer, extracting morphodynamic features from live-cell movies and learning joint representations with spatial transcriptomic data.</span></li>'+
    '<li><span><b>Aim 2.</b> Fine-tuning for drug-response profiling on organoid-derived monolayers, to resolve subtle treatment-induced phenotypic shifts and link them to therapeutic sensitivity or resistance.</span></li>'+
    '<li><span><b>Platform.</b> A scalable, cloud-based software platform for preclinical research workflows, with real-time analysis, interactive visualization and iterative beta testing with researchers.</span></li>'+
   '</ul></div>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Scientists, engineers, <em>advisors.</em></h2></div><p data-r>Deep learning, live-cell imaging and full-stack engineering, with academic partners at Boston Children’s Hospital and the University of Maryland.</p></div>'+
   team()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For researchers, partners and collaborators</span>'+
   '<h2 class="big split">Let’s make <em>breakthroughs together.</em></h2>'+
   '<p class="sub" data-r>Whether you’re a scientist, an innovator or a collaborator inspired by the potential of bio-AI, we’d like to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="tel:+12403432227">'+TEL+'</a></div>'+
   '<div class="caddr" data-r><span class="lab">Office</span><p>ChrononAI, LLC<br>Laurel, Maryland 20723</p></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>ChrononAI, LLC<br>Laurel, Maryland 20723</div>'+
   '<div class="c"><span class="lab">Support</span>NCI STTR Phase I<br>1R41CA306625</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programme">Programme</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+12403432227">'+TEL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:\'Open Sans\',system-ui,sans-serif;font-weight:500;font-size:46px;letter-spacing:.02em">ChrononAI</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ChrononAI, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; section links scroll ================= */
var SECS={approach:"story",technology:"technology",programme:"programme",team:"team",contact:"contact",about:"about"};
function route(h){return {k:"home",v:vHome,t:"ChrononAI — Foundation AI for live-cell imaging",x:"Home"}}
function toSec(key,inst){var el=document.getElementById(SECS[key]);if(!el)return false;
  var y=el.getBoundingClientRect().top+window.scrollY;if(key!=="approach")y-=MOBILE()?8:0;
  if(lenis&&!inst)lenis.scrollTo(y,{duration:1.5,force:true});else{if(lenis)lenis.scrollTo(y,{immediate:true,force:true});window.scrollTo(0,y)}return true}
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var k=a.getAttribute("href").slice(2);if(!SECS[k])return;
  e.preventDefault();e.stopImmediatePropagation();
  if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){toSec(k)},420)}else toSec(k);
  try{history.replaceState(null,"","#/")}catch(err){}},true);
(function(){var k=(location.hash||"").replace(/^#\/?/,"");if(SECS[k]){try{history.replaceState(null,"","#/")}catch(e){}addEventListener("load",function(){setTimeout(function(){toSec(k,true)},2600)})}})();
