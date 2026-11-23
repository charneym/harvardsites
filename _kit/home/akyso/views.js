/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Tunable","The release rate of a small- or large-molecule drug is set by the ratio of the two control-release polymers in the formulation, so pharmacokinetics can be optimised. The implant is sturdy, can be made in any size and is stable at room temperature.",'<path d="M10 40h36"/><circle class="f" cx="20" cy="40" r="4"/><path d="M10 18h36"/><circle class="f" cx="36" cy="18" r="4"/><path class="a" d="M10 29h36"/>'],
  ["Versatile","The non-reactive, biocompatible material can be loaded with any medication. Both control-release polymers have been used in FDA-approved devices for decades and are well tolerated.",'<circle cx="28" cy="28" r="17"/><circle class="f" cx="22" cy="24" r="3"/><circle class="f" cx="33" cy="22" r="3"/><circle class="f" cx="30" cy="34" r="3"/><circle class="f" cx="21" cy="34" r="2"/>'],
  ["Simple","Designed for easy subcutaneous placement in an office procedure under local anesthesia. The implant comes loaded and ready to use, and it is bioabsorbable: it does not need to be removed.",'<path d="M8 22c10-4 30-4 40 0"/><path d="M8 34c10 4 30 4 40 0"/><rect class="a" x="18" y="25" width="20" height="6" rx="3"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>All programs are investigational and have not been approved by the FDA. Programs and timelines are subject to change. From akyso.com and the 29 July 2025 release.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>The iSTEP platform<span class="nomob"> · Addiction medicine</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">One implant,</span><span class="l"><em>months of</em></span><span class="l"><em>treatment.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Akyso Therapeutics is developing iSTEP, a tunable, bioabsorbable implant placed under the skin in an office visit, built to deliver a drug steadily for six to twelve months. First: iSTEP-N, a naltrexone implant for opioid use disorder.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Recovery from opioid use disorder is most successful when medication is combined with counseling and support, yet adherence to today&#8217;s medications is poor. <em>A single implant lasting six to twelve months takes adherence out of the equation.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">6&#8211;12 mo</span><p class="k">Of extended-release drug delivery from one subcutaneous iSTEP implant</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4.8 g</span><p class="k">Naltrexone payload in the 10 cc iSTEP-N implant, which needs no removal</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$15M</span><p class="k">Multi-year NIH/NIDA grant that funded iSTEP-N through first-in-human testing</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Placed once, <em>released for months.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Place</span><span>Release</span><span>Absorb</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Placed under the skin.</h2><p>The implant is inserted subcutaneously through a small incision, in an office procedure under local anesthesia. It comes loaded with drug, ready to use.</p></article>'+
     '<article class="step"><h2>A steady, tunable release.</h2><p>Two control-release polymers set the rate. In vitro, the 10 cc iSTEP-N implant released its drug near-linearly over 12 months.</p></article>'+
     '<article class="step"><h2>Absorbed, not removed.</h2><p>The polymer is bioabsorbable, so there is nothing to take out at the end of treatment.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>iSTEP technology</span><h2 class="d2 split">Implantable, subcutaneous, <em>tunable.</em></h2></div><p data-r>iSTEP, the Implantable, Subcutaneous, Tunable, Extended-release Polymeric implant, is Akyso&#8217;s proprietary formulation for safe and effective drug delivery over six to twelve months, for drugs that would otherwise have to be injected. U.S. patents 9,452,083, 9,445,941 and 11,197,819.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Addiction medicine, <em>and beyond.</em></h2></div><p data-r>Naltrexone and buprenorphine implants for opioid use disorder, naltrexone for alcohol use disorder, and a GLP-1 receptor agonist implant for weight loss and metabolic disease, all on the iSTEP platform.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Physicians, inventors and <em>drug developers.</em></h2></div><p data-r>Founded by two physician-inventors, Jeffrey Benner, MD, and Steven Cohen, MD, with a team that has extensive experience in formulation, regulatory, quality and clinical development.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Akyso.</em></h2></div><p data-r>Clinical results, grants, publications and new programs.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Akyso.</em></h2>'+
   '<p class="sub" data-r>We are excited about this promising treatment for opioid use disorder. For our clinical progress or partnership opportunities, get in touch.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+FORM+'" target="_blank" rel="noopener">Write to Akyso '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Akyso Therapeutics<br>26627 Pemberton Drive<br>Salisbury, MD 21801</p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="'+TEL+'">(727) 270-0659</a></p></div>'+
    '<div><span class="lab" data-r>Clinical trials</span><p data-r><a class="ul" href="https://clinicaltrials.gov/study/NCT06216132" target="_blank" rel="noopener">NCT06216132</a><br><a class="ul" href="https://clinicaltrials.gov/study/NCT07064564" target="_blank" rel="noopener">NCT07064564</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>26627 Pemberton Drive<br>Salisbury, MD 21801</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TEL+'">(727) 270-0659</a><br><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Programs</span>iSTEP-N® · iSTEP-B · iSTEP-G</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Figtree\',sans-serif;font-weight:400;font-size:76px">AKYSO THERAPEUTICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Akyso Therapeutics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Akyso Therapeutics — long-acting bioabsorbable implants",x:"Home"};
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
