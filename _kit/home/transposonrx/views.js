/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Retrotransposons","Almost half of our genome is occupied by virus-like elements, introduced over millions of years. They copy themselves with a reverse transcriptase enzyme, so the body keeps them under strict control.",'<path d="M10 22c6-8 12-8 18 0s12 8 18 0"/><path d="M10 34c6-8 12-8 18 0s12 8 18 0"/><path class="a" d="M22 19v18M34 19v18"/><circle class="f" cx="28" cy="28" r="3"/>'],
  ["LINE-⁠1 in disease","Today only human-specific LINE-⁠1 elements can still become active. Abnormal tau and TDP-43 increase their expression, starting a cascade in the neuron that leads to dysfunction, inflammation and death.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M17 30c4-6 7-6 11 0s7 6 11 0"/><circle class="f" cx="28" cy="15" r="3"/>'],
  ["TPN-⁠101","A first-in-class nucleoside inhibitor of LINE-⁠1 reverse transcriptase (censavudine). Once-daily oral dosing, excellent systemic and brain bioavailability, and well tolerated in over 250 subjects for about 48 weeks.",'<path d="M28 9l15 8.5v17L28 43l-15-8.5v-17z"/><path class="a" d="M28 43v6M43 34.5l5 3M13 34.5l-5 3"/><circle class="f" cx="28" cy="26" r="3"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Phase 2 · C9orf72-related ALS/FTD</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Randomised, double-blind, placebo-controlled study: 42 participants randomised 3:2 to 400 mg TPN-⁠101 daily or placebo for 24 weeks, then 24 weeks open-label. Transposon releases of 24 July 2024 and 28 May 2025.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage neuroscience<span class="nomob"> · LINE-⁠1</span> · San Diego</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Blocking LINE-⁠1</span><span class="l">in neurodegeneration</span><span class="l"><em>and aging.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Transposon Therapeutics is developing TPN-⁠101, a first-in-class oral inhibitor of LINE-⁠1 reverse transcriptase, for progressive supranuclear palsy, ALS, Alzheimer’s disease and healthy aging.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">The science '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">LINE-⁠1 is the last part of our genome that can still copy itself. In diseases driven by tau and TDP-43 it is no longer held in check, and the DNA it makes sets off inflammation in the brain. TPN-⁠101 <em>stops that copying at its source.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$22M</span><p class="k">ARPA-H PROSPR award, March 2026, to study TPN-⁠101 for extending healthy aging (up to)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50%</span><p class="k">Less decline in vital capacity than on placebo after 24 weeks, Phase 2 in C9orf72-related ALS</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">250+</span><p class="k">Subjects exposed to TPN-⁠101 for about 48 weeks, with the drug well tolerated</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How TPN-⁠101 works</span><h2 class="d3">Keep <span class="nw">LINE-⁠1</span> <em>from copying itself.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Silent</span><span>Active</span><span>Blocked</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>In a healthy neuron, LINE-⁠1 stays silent.</h2><p>LINE-⁠1 elements are mobile DNA that copy themselves with a reverse transcriptase. Because that is damaging, the cell keeps their expression under strict control.</p></article>'+
     '<article class="step"><h2>Disease wakes LINE-⁠1 up.</h2><p>Abnormal tau and TDP-43 raise LINE-⁠1 expression. Its reverse transcriptase turns LINE-⁠1 RNA into DNA, which triggers innate immune responses, neuroinflammation and neurodegeneration.</p></article>'+
     '<article class="step"><h2>TPN-⁠101 blocks the reverse transcriptase.</h2><p>TPN-⁠101 specifically inhibits LINE-⁠1 reverse transcriptase, cutting off the DNA and with it the activation of innate immunity. In Phase 2, markers of neurodegeneration and inflammation such as NfL and IL-6 fell.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">The enemy <em>within the genome.</em></h2></div><p data-r>Transposon’s mission is to develop innovative treatments for LINE-⁠1 associated neurodegenerative disease, with inhibitors of LINE-⁠1 reverse transcriptase and other mediators of LINE-⁠1 pathology.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One compound, <em>several diseases.</em></h2></div><p data-r>TPN-⁠101 is in late-stage development for multiple indications, with follow-on nucleoside inhibitors and protein kinase R inhibitors in preclinical development.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug developers, <em>and the scientists of LINE-⁠1.</em></h2></div><p data-r>Pioneering scientists, experienced drug developers with a collective record of over 30 NDA approvals, and repeat entrepreneurs.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Clinical</span><p data-r>TPN-⁠101 is part of the HEALEY ALS Platform Trial at the Sean M. Healey & AMG Center for ALS, Massachusetts General Hospital, with NEALS.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>An ARPA-H PROSPR award of up to $22 million for healthy aging, and an investment from the Alzheimer’s Drug Discovery Foundation.</p></div>'+
    '<div><span class="lab kick" data-r>Academic</span><p data-r>PROSPR collaborators: the Universities of Rochester, Connecticut and Nebraska, Brown University, UTMB and UT Health.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From Phase 2 <em>to healthy aging.</em></h2></div><p data-r>The latest press releases from Transposon Therapeutics.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and enquiries</span>'+
   '<h2 class="big split">Talk to <em>Transposon.</em></h2>'+
   '<p class="sub" data-r>Would you like to learn more about Transposon and TPN-⁠101? The team would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Transposon '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Transposon Therapeutics, Inc.<br>San Diego, California</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+18585354821">(858) 535-4821</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>San Diego<br>California</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead compound</span>TPN-⁠101<br>LINE-⁠1 reverse transcriptase inhibitor</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:500;font-size:64px;letter-spacing:.04em">TRANSPOSON</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Transposon Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",approach:"story",science:"science",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Transposon Therapeutics — Silencing LINE-⁠1 in neurodegeneration, San Diego",x:"Home"};
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
