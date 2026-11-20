/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b></span><h3>'+esc(c[0])+'<span class="loc">'+esc(c[1])+'</span></h3><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["One dose, written in","An adeno-associated virus vector carries a normal copy of the gene into the cell nucleus, where it stays as an episome and keeps making the missing protein. One intravenous administration, not a lifetime of injections.",'<path d="M6 44h44"/><path class="a" d="M28 8v26"/><path class="a" d="M21 27l7 7 7-7"/><circle class="f" cx="28" cy="8" r="3.2"/>'],
  ["Serotypes that reach the tissue","Enyx builds on AAVrh.10, a non-human primate serotype that reaches the liver efficiently after an intravenous dose, so the liver becomes the factory for the protein the body cannot make.",'<circle cx="28" cy="28" r="17"/><path class="a" d="M11 28h34M28 11v34"/><path d="M16 16l24 24M40 16L16 40"/>'],
  ["Inherited disorders first","Each programme starts from a single hereditary defect with no good treatment: a missing enzyme, a missing inhibitor, a graft without a blood supply. The therapy supplies exactly what the gene should have made.",'<path d="M18 6c0 12 20 16 20 28S22 50 22 50"/><path d="M38 6c0 12-20 16-20 28s16 16 16 16"/><path class="a" d="M20 18h17M19 32h18M21 44h15"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>ENX03 in the preclinical models</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>NIH NIAAA STTR Phase II award 2R42AA028465-02A1, “Gene Therapy to Treat Ethanol-induced Osteoporosis Associated with Aldehyde Dehydrogenase 2 Deficiency in Post-menopausal East Asian Women”, $1,253,597, awarded 27 August 2025; continued for the 2026 fiscal year at $791,929.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>In vivo gene therapy<span class="nomob"> · AAV vectors</span> · New York</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">One dose, for</span><span class="l">a disorder written</span><span class="l">in the <em>genes.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Enyx Therapeutics is an early-stage biotechnology company using in vivo gene therapy to treat hereditary disorders of unmet medical need. Its lead programme, ENX03, is a one-time therapy for the bone loss that alcohol causes in people with ALDH2 deficiency.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How ENX03 works '+ARR+'</a><a class="btn" href="#/pipeline">Our programmes</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">ALDH2 deficiency is inherited by 8% of the world and by 35 to 45% of people of East Asian background. In women who drink after menopause it quietly takes the bone away, and ends in a broken hip. Enyx is building a therapy <em>given once.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.25M</span><span class="k">NIAAA STTR Phase II award to take ENX03 toward an IND, August 2025, continued for 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">8%</span><span class="k">Of the world population carries the ALDH2 deficiency that lets toxic acetaldehyde accumulate</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;4%</span><span class="k">Enzyme activity left in homozygotes, because the mutant subunit disables the whole tetramer</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How ENX03 works</span><h2 class="d3">Clear the aldehyde, <em>keep the bone.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Acetaldehyde</span><span>Bone loss</span><span>ENX03</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A toxin with nowhere to go.</h2><p>ALDH2 is the enzyme that clears acetaldehyde, the toxic product of ethanol. With the ALDH2*2 variant the enzyme barely works, and after a drink acetaldehyde accumulates throughout the body.</p></article>'+
     '<article class="step"><h2>The bone thins.</h2><p>Acetaldehyde and ethanol together suppress the early osteoblast progenitors that build bone. Formation falls behind, the trabeculae thin and break, and osteopenia becomes osteoporosis.</p></article>'+
     '<article class="step"><h2>ENX03 restores the enzyme.</h2><p>One intravenous dose of AAVrh.10hALDH2 delivers the normal human ALDH2 coding sequence. In mice it prevented the bone abnormalities, and in animals that had already lost bone it increased cortical thickness.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="approach" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">Gene transfer, <em>given once.</em></h2></div><p data-r>Enyx develops in vivo gene therapies: a vector delivers a working copy of a gene to the patient’s own cells, which then make the protein the body cannot.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">Three vectors, <em>three unmet needs.</em></h2></div><p data-r>A lead programme heading toward an IND, a safety study in hereditary angioedema, and a vector that gives a transplanted fat graft the blood supply it needs. All developed with the Crystal laboratory at Weill Cornell and funded by the NIH.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built around <em>a gene therapy laboratory.</em></h2></div><p data-r>Enyx’s programmes are run in collaboration with the laboratory of Dr. Ronald G. Crystal at Weill Cornell Medicine, the contact principal investigator on each of the company’s NIH awards.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Collaborating laboratory</span><p data-r>The Crystal laboratory, Department of Genetic Medicine, Weill Cornell Medicine, New York.</p></div>'+
    '<div><span class="lab kick" data-r>Funding agencies</span><p data-r>National Institute on Alcohol Abuse and Alcoholism; National Institute of Allergy and Infectious Diseases; National Heart, Lung, and Blood Institute.</p></div>'+
    '<div><span class="lab kick" data-r>Mechanism</span><p data-r>Small Business Technology Transfer (STTR), the NIH programme for companies developing a university laboratory’s discovery toward the clinic.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">The awards <em>behind the work.</em></h2></div><p data-r>Every Enyx programme to date has been funded by the National Institutes of Health.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and collaborators</span>'+
   '<h2 class="big split">Talk to <em>Enyx.</em></h2>'+
   '<p class="sub" data-r>Interested in ENX03, AAV gene transfer or the programmes behind it? We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Enyx '+ARR+'</a><a class="btn" href="#/pipeline">See the programmes</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Enyx Therapeutics, LLC<br>New York, NY</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r>National Institutes of Health, STTR Phase II</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>New York, NY</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead programme</span>ENX03 · AAVrh.10hALDH2<br>NIH STTR 2R42AA028465</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 62" aria-hidden="true"><text x="260" y="52" text-anchor="middle" style="font-family:\'Source Serif 4\',Georgia,serif;font-style:italic;font-weight:400;font-size:64px;letter-spacing:.01em">enyx</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Enyx Therapeutics, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Enyx Therapeutics — in vivo gene therapy for hereditary disorders, New York",x:"Home"};
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
