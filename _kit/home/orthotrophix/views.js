/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Bone shape, measured","In more than 9,000 osteoarthritic and healthy knees from the NIH Osteoarthritis Initiative, the 3D shape of the knee’s bones changed one way and irreversibly over time, much faster in osteoarthritis. Bone shape can be measured objectively with conventional MRI.",'<path d="M14 6v16c0 6-6 8-6 14s6 8 12 8h16c6 0 12-2 12-8s-6-8-6-14V6"/><path class="a" d="M8 48h40"/>'],
  ["Earlier than cartilage","Accelerated bone-shape change starts much earlier than cartilage degeneration and appears to be the most reliable structural marker to date for the onset of osteoarthritis; its extent and rate predict progression and the need for joint replacement.",'<path d="M6 40C14 40 18 18 28 18S42 40 50 40"/><path class="a" d="M6 46h44"/><circle class="f" cx="28" cy="18" r="3.2"/>'],
  ["Built on MEPE","TPX-100 and TPX-200 are both based on MEPE, matrix extracellular phosphoglycoprotein. OrthoTrophix develops them for diseases and conditions of the hard tissues, bone and cartilage.",'<path d="M10 28h36"/><circle class="f" cx="10" cy="28" r="3"/><circle cx="22" cy="28" r="3"/><circle class="f" cx="34" cy="28" r="3"/><circle cx="46" cy="28" r="3"/><path class="a" d="M10 16h20"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From orthotrophix.com and the company’s press releases. Phase 2b details at ClinicalTrials.gov (NCT06865079).</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>TPX-100<span class="nomob"> · Knee osteoarthritis</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Treating knee</span><span class="l">osteoarthritis</span><span class="l"><em>at the bone.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>OrthoTrophix is developing TPX-100, a candidate first-in-class disease-modifying osteoarthritis drug, now in a Phase 2b trial in knee osteoarthritis.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our programs</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why bone</span>'+
   '<h2 class="txt" id="mani">Osteoarthritis has long been treated as a disease of cartilage. <em>The knee’s bones change shape first. TPX-100 is designed to slow or halt that change.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">350M+</span><p class="k">People worldwide affected by knee osteoarthritis, a major cause of years lived with disability</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">15</span><p class="k">U.S. centers in the placebo-controlled Phase 2 study of TPX-100</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$30M+</span><p class="k">Raised in partnering revenue and equity financing since 2011</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Hold the shape, <em>protect the knee.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Change</span><span>Inject</span><span>Hold</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The bone changes shape.</h2><p>In osteoarthritis the 3D shape of the femur and tibia changes one way and irreversibly, faster than in healthy knees, and before cartilage measurably deteriorates.</p></article>'+
     '<article class="step"><h2>TPX-100 goes into the joint.</h2><p>TPX-100 is given as an intra-articular injection into the knee, where it is designed not only to improve symptoms but to slow or halt disease progression.</p></article>'+
     '<article class="step"><h2>The shape change slows.</h2><p>In the Phase 2 study, TPX-100-treated knees showed significantly less pathological 3D bone-shape change of the femur than placebo-treated knees, with better knee function.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A structural marker <em>you can measure.</em></h2></div><p data-r>For decades, DMOAD candidates built on cartilage loss failed to show clinical benefit over placebo. A growing body of evidence puts subchondral bone at the centre of both symptoms and structural progression.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">TPX-100 in Phase 2b, <em>partnered in the U.S.</em></h2></div><p data-r>In a randomized, placebo-controlled Phase 2a trial, TPX-100 showed a favorable safety profile and statistically significant improvements in knee function. The Phase 2b trial now evaluates those clinical and structural findings further.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug developers in <em>hard tissue.</em></h2></div><p data-r>OrthoTrophix was incorporated in May 2011 by its three co-founders, all of whom previously held leadership roles at Acologix, a developer of hard-tissue and kidney therapeutics.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>OrthoTrophix.</em></h2></div><p data-r>Announcements on the TPX-100 clinical program, partnerships and data.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Talk to <em>OrthoTrophix.</em></h2>'+
   '<p class="sub" data-r>OrthoTrophix retains all rights to TPX-100 outside the United States. For business, scientific or clinical trial inquiries, please write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/pipeline">See the programs</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>OrthoTrophix, Inc.<br>Foster City, California</p></div>'+
    '<div><span class="lab" data-r>General inquiries</span><p data-r><a class="ul" href="'+MAIL+'">info@orthotrophix.com</a><br>510-488-3832</p></div>'+
    '<div><span class="lab" data-r>Scientific and clinical</span><p data-r><a class="ul" href="mailto:medical@orthotrophix.com">medical@orthotrophix.com</a><br><a class="ul" href="mailto:clinicaltrial@orthotrophix.com">clinicaltrial@orthotrophix.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Foster City, California</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@orthotrophix.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead program</span>TPX-100 · candidate DMOAD in Phase 2b</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Spectral\',serif;font-weight:400;font-size:64px">ORTHOTROPHIX</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 OrthoTrophix, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"OrthoTrophix — TPX-100 for knee osteoarthritis",x:"Home"};
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
