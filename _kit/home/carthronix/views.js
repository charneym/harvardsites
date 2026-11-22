/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
var PHS=["Discovery","Pre-clinical","IND","Phase 1/2a"];
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[7]?' class="dim"':'')+'><span class="lab tg"><b'+(c[7]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span>'+
   (c[7]?'':'<span class="stg" aria-hidden="true"><span class="tr"><i class="p" style="width:'+(c[5]/4*100)+'%"></i><i style="width:'+(c[4]/4*100)+'%"></i></span><span class="ph">'+PHS.map(function(p){return '<span>'+p+'</span>'}).join("")+'</span></span>')+'</div>'+
   '<p>'+esc(c[6])+'</p><span class="lab lk">'+(c[7]?'Platform':(c[4]>=3?'Phase 1/2a':'Pre-clinical'))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Regenerate, not only relieve","Current treatments only address symptoms. CarthroniX is developing first-in-class therapies designed to regenerate cartilage and halt the progression of osteoarthritis.",'<path d="M6 40h44"/><path class="a" d="M10 34c6-6 12-6 18-2s12 4 18-2"/><path d="M10 26c6-6 12-6 18-2s12 4 18-2"/><circle class="f" cx="28" cy="16" r="3"/>'],
  ["Inflammation, redirected","The company has identified a key linkage between inflammation and cellular aging. Its proprietary, patented platform is designed to reverse that process.",'<circle cx="28" cy="28" r="17"/><path class="a" d="M28 11a17 17 0 0 1 17 17"/><path d="M45 28l-4-4M45 28l4-4"/><circle class="f" cx="28" cy="28" r="3"/>'],
  ["One small molecule, into the joint","CX-011 is a hydrophobic small molecule given by intra-articular injection, so the drug is delivered directly into the knee it is meant to treat.",'<path d="M10 46L36 20"/><path class="a" d="M36 20l8-8"/><path d="M32 16l8 8"/><circle class="f" cx="16" cy="40" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function backers(){return '<div class="bk light-bk"><span class="lab kick" data-r>Backed by</span><p class="cr" data-r><span>U.S. Department of Defense (CDMRP)</span><i>·</i><span>National Institutes of Health</span><i>·</i><span>Pacira BioSciences</span><i>·</i><span>Boehringer Ingelheim</span></p></div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The CX-011<br>trial</span><div><dl>'+
  [["Design","Phase 1/2a, dose-escalating, placebo-controlled: three dose levels of CX-011 against placebo, after a single intra-articular injection"],
   ["Patients","Up to 72 people with osteoarthritis of the knee and moderate to severe pain"],
   ["Site","University of Southern California, Los Angeles; recruiting since August 2026"],
   ["Funding","A $5.0M U.S. Department of Defense grant and financing led by Pacira BioSciences, including $1.25M in April 2025"]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>ClinicalTrials.gov NCT07308834; carthronix.com. CX-011 is an investigational drug and has not been approved by the FDA.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage biotech<span class="nomob"> · CX-011</span> · California</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Regenerate cartilage.</span><span class="l"><em>Halt osteoarthritis.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>CarthroniX is harnessing the regenerative power of inflammation. Its lead, CX-011, a first-in-class small molecule injected into the knee, is now in a Phase 1/2a trial.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">The science '+ARR+'</a><a class="btn" href="#/pipeline">Pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The unmet need</span>'+
   '<h2 class="txt" id="mani">Osteoarthritis is a leading cause of disability worldwide, yet no approved drug can stop or reverse it. Today’s treatments only address the symptoms. CarthroniX is built to <em>change the course of the disease.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">50M+</span><p class="k">Americans live with osteoarthritis</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">500M</span><p class="k">People affected by osteoarthritis worldwide</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$300B</span><p class="k">Annual economic burden of arthritis in the United States</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside the knee</span><h2 class="d3">From wear <em>to repair.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Wear</span><span>Inject</span><span>Regenerate</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The cartilage wears away.</h2><p>In osteoarthritis the smooth cartilage that caps the ends of the femur and tibia thins, fissures and breaks down, and the joint space narrows. No approved drug can stop it.</p></article>'+
     '<article class="step"><h2>One injection, into the joint.</h2><p>CX-011 is a hydrophobic small molecule delivered by a single intra-articular injection, directly into the knee capsule where the damage is.</p></article>'+
     '<article class="step"><h2>Designed to rebuild.</h2><p>CX-011 is designed to halt or reverse the progression of mild-to-moderate knee osteoarthritis, regenerating cartilage rather than only masking pain.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">The regenerative power <em>of inflammation.</em></h2></div><p data-r>CarthroniX develops next-generation therapies against the effects of age-related inflammation, starting with the cartilage loss behind osteoarthritis.</p></div>'+
   caps()+
   backers()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">CX-011 first, <em>then beyond the knee.</em></h2></div><p data-r>The focus is advancing CX-011 through the clinic in knee osteoarthritis, while the inflammation-modulating platform extends to fibrosis and oncology.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Musculoskeletal veterans, <em>stem cell scientists.</em></h2></div><p data-r>Led by a former J&amp;J DePuy Synthes Distinguished Fellow and a stem cell scientist co-founder, with advisors from UCLA, USC and Boston University.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the IND <em>to the clinic.</em></h2></div><p data-r>Recent milestones: FDA clearance in 2025 and a recruiting Phase 1/2a trial in 2026.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, partners and clinicians</span>'+
   '<h2 class="big split">Talk to <em>CarthroniX.</em></h2>'+
   '<p class="sub" data-r>We are dedicated to delivering groundbreaking science to patients, and welcome the opportunity to partner with you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email CarthroniX '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>43364 10th St. W, Suite A<br>Lancaster, CA 93534</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Clinical trial</span><p data-r><a class="ul" href="'+CTG+'" target="_blank" rel="noopener">NCT07308834</a>, recruiting at USC, Los Angeles.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>43364 10th St. W, Suite A<br>Lancaster, CA 93534</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead asset</span>CX-011 · Intra-articular small molecule for knee osteoarthritis</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="62" text-anchor="middle" style="font-family:\'Saira Condensed\',Arial,sans-serif;font-weight:500;font-size:72px;letter-spacing:.12em">CARTHRONIX</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 CarthroniX, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",mechanism:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"CarthroniX — cartilage-regenerative therapies for osteoarthritis",x:"Home"};
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
