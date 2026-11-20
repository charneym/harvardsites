/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Ambroxol","A small molecule with a 20-year history of safety that crosses the blood–brain barrier. Ambroxol exerts strong effects on the autophagy–lysosomal pathway and also suppresses inflammation.",'<circle cx="28" cy="28" r="9"/><circle class="f" cx="28" cy="28" r="3"/><path class="a" d="M37 28h12M7 28h12"/><circle cx="50" cy="28" r="2.4"/><circle cx="6" cy="28" r="2.4"/>'],
  ["Stabilised analogs","Low stability limits ambroxol’s clinical performance, so Zywie engineered ZW-002 and ZW-010 for markedly better metabolic stability and has filed patents on deuterated and halogenated forms of ambroxol.",'<path d="M28 8l15 8.5v17L28 42l-15-8.5v-17z"/><path class="a" d="M28 42v8M43 33.5l7 4M13 33.5l-7 4"/><circle class="f" cx="28" cy="25" r="3"/>'],
  ["Treat early","Alzheimer’s pathology starts about ten years before physical symptoms, and late in the disease the system is far harder to clear. New blood biomarkers make it possible to choose the moment.",'<path d="M6 44h44"/><path class="a" d="M6 40c14 0 18-4 24-14s10-16 20-18"/><path d="M16 44v-6M28 44v-14"/><circle class="f" cx="16" cy="37" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Ambroxol in the clinic</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From Zywie’s clinical status summary. ZW-002 and ZW-010 are preclinical.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Alzheimer’s disease<span class="nomob"> · Small molecules</span> · Reno, NV</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Helping neurons</span><span class="l">clear what they</span><span class="l"><em>can’t.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Zywie is developing stabilised analogs of ambroxol, a brain-penetrant small molecule with a long safety record, to switch on the cell’s own lysosomal clearance of amyloid beta and tau, as disease-modifying therapies for Alzheimer’s disease and related dementias.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Antibodies against amyloid are costly, carry notable safety risks and offer only partial benefit. Zywie’s complementary approach is to <em>stimulate the cell’s own clearance</em> of the proteins that build up in Alzheimer’s.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$497K</span><span class="k">NIH SBIR Phase I award from the National Institute on Aging, September 2025</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><span class="k">Ambroxol analogs, ZW-002 and ZW-010, engineered for markedly improved metabolic stability</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20 yrs</span><span class="k">Ambroxol’s history of safety in people; it crosses the blood–brain barrier</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Switch on the cell’s <em>own clean-up.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Build-up</span><span>Signal</span><span>Clearance</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Misfolded proteins build up.</h2><p>In Alzheimer’s disease, amyloid beta and tau accumulate in and around neurons and disrupt how they work. Many neurodegenerative and lysosomal storage diseases share this failure to clear misfolded proteins.</p></article>'+
     '<article class="step"><h2>Ambroxol turns on TFEB.</h2><p>Ambroxol stimulates TFEB, which in turn stimulates the autophagy system: the route by which cells deliver unwanted proteins to their lysosomes.</p></article>'+
     '<article class="step"><h2>Lysosomes clear the load.</h2><p>Through the autophagy–lysosomal pathway the cell clears misfolded proteins such as tau and amyloid beta. Zywie’s preliminary evidence shows that ambroxol can reverse Alzheimer’s pathology.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our approach</span><h2 class="d2 split">A known molecule, <em>made to last.</em></h2></div><p data-r>Zywie moved its strategy from Gaucher disease to Alzheimer’s after Dr. Stephen Pasternak’s clinical work in Parkinson’s showed that ambroxol stimulates TFEB and the lysosomal clearance of misfolded proteins.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One mechanism, <em>many diseases.</em></h2></div><p data-r>Alzheimer’s first. Because clearing misfolded proteins matters across neurology, the same science reaches Parkinson’s, Lewy body disease and the lysosomal storage disease where Zywie began.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Company builders and <em>lysosome scientists.</em></h2></div><p data-r>Led by a founder of Sepracor, Cytogen and i-STAT, with scientists from Rutgers, Princeton, Western University and SickKids who study protein folding, lysosomes and the aging brain.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Intellectual property</span><p data-r>Patents filed on deuterated forms of ambroxol and halogenated forms of ambroxol.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>An SBIR award from the National Institute on Aging, NIH, for ambroxol analogs in Alzheimer’s disease.</p></div>'+
    '<div><span class="lab kick" data-r>Next</span><p data-r>Phase I will pick the analog that best balances manufacturability, safety and disease-modifying effect, ahead of IND-enabling studies.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards, papers <em>and trials.</em></h2></div><p data-r>The latest on Zywie and the science of ambroxol.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Collaboration</span>'+
   '<h2 class="big split">Talk to <em>Zywie.</em></h2>'+
   '<p class="sub" data-r>Zywie welcomes conversations about collaboration opportunities, from research partners to investors and licensees.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Zywie '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Zywie LLC<br>Reno, Nevada</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+16099242575">'+TEL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Reno, Nevada</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+16099242575">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Programme</span>ZW-002 · ZW-010<br>Alzheimer’s disease</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 70" aria-hidden="true"><text x="280" y="58" text-anchor="middle" style="font-family:\'Marcellus\',Georgia,serif;font-weight:400;font-size:72px;letter-spacing:.01em">Zywie Bio</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Zywie LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",approach:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Zywie Bio — Ambroxol analogs for Alzheimer’s disease, Reno, NV",x:"Home"};
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
