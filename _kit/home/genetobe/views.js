/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Gene silencing with siRNA","A systematic platform for liver-selective small interfering RNAs: target selection and optimised siRNA design to speed bench-to-bedside translation, with bias targeting that can act against a pathogenic variant while preserving the normal physiological function of the wild-type form.",'<path d="M8 20q7-11 14 0t14 0 14 0"/><path d="M8 36q7 11 14 0t14 0 14 0"/><path class="a" d="M15 23v10M29 23v10M43 23v10"/>'],
  ["MiCas9 gene editing","A patented next-generation CRISPR/Cas9 system. Brex27, a 36-amino-acid peptide fused to Cas9, recruits and stabilises RAD51, raising homology-directed repair efficiency and improving the specificity and precision of editing across many therapeutic areas.",'<path d="M18 9c15 9 15 29 0 38"/><path d="M38 9c-15 9-15 29 0 38"/><path class="a" d="M21 20h14M21 36h14"/><circle class="f" cx="28" cy="28" r="2.8"/>'],
  ["Animal models of rare disease","Gene-edited rabbit models of cystic fibrosis and Usher syndrome, built by GeneToBe scientists to replicate human disease more closely: matched clinical techniques, detailed structure and function analysis, and deep molecular evaluation of biological samples.",'<ellipse cx="28" cy="27" rx="19" ry="9"/><path d="M9 27v8c0 5 8 9 19 9s19-4 19-9v-8"/><path class="a" d="M19 26q9-7 18 0"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Base editing, November 2026</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Zhou, Liang, Xiong et al., with GeneToBe authors, “Development of an efficient and precise TadA-based C-to-G base editor Mi-zCGBE”, Molecular Therapy, 7 November 2026 (doi 10.1016/j.ymthe.2026.10.031). Preclinical results in patient-derived cells.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Genetic medicine<span class="nomob"> · siRNA and CRISPR</span> · Ann Arbor, MI</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Repair the</span><span class="l">gene, <em>not the</em></span><span class="l"><em>symptom.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>GeneToBe is a University of Michigan spinout developing lifelong therapies for genetically-defined disease: liver-selective siRNA gene silencing, and MiCas9, a patented CRISPR/Cas9 platform that edits with higher fidelity.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Most genetic disease is still treated at the symptom. GeneToBe works one level down: silence the transcript that drives the disease, or correct the mutation itself, <em>once and for life.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><p class="k">Programmes across MASH, alcoholic liver disease, Usher syndrome and cystic fibrosis</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Platforms in parallel: liver-selective siRNA gene silencing and MiCas9 gene editing</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2020</span><p class="k">MiCas9 published in Nature Communications; the company founded the same year in Ann Arbor</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How MiCas9 works</span><h2 class="d3">Cut, recruit, <em>repair precisely.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Cut</span><span>Recruit</span><span>Repair</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Cut at the target locus.</h2><p>A guide RNA brings the Cas9 nuclease to one address in the genome, where it makes a double-strand break in the patient’s own DNA. Conventional Cas9 stops here, and the cell repairs the break however it can.</p></article>'+
     '<article class="step"><h2>Recruit RAD51 to the break.</h2><p>MiCas9 carries Brex27, a 36-amino-acid peptide fused to the nuclease. It recruits and stabilises RAD51, the protein that drives homology-directed repair, exactly where and when the break occurs.</p></article>'+
     '<article class="step"><h2>Repair from the donor template.</h2><p>Repair runs off the supplied template instead of the error-prone route: higher rates of large knock-in, and fewer undesirable on-target and off-target insertions and deletions.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">Two ways to reach <em>one gene.</em></h2></div><p data-r>GeneToBe pursues gene silencing and gene editing side by side, with disease models built in-house so a candidate can be tested where it has to work.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Liver, eye, ear <em>and lung.</em></h2></div><p data-r>Five programmes in genetically-defined patient populations, at the stage GeneToBe publishes on its own pipeline chart: early discovery, late discovery, IND-enabling, development.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founders, physicians <em>and gene editors.</em></h2></div><p data-r>GeneToBe was founded in 2020 by Charles Bisgaier, PhD, and Y. Eugene Chen, MD, PhD, and is led today by Ricardo Garcia, PhD, with programme leads from the Michigan Center for Advanced Models and Translational Sciences.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Origin</span><p data-r>A spinout of the University of Michigan; converted from a Michigan LLC to a Delaware corporation in 2022.</p></div>'+
    '<div><span class="lab kick" data-r>Platform</span><p data-r>MiCas9 is patented, and the Brex27 strategy now extends to base editing as well as knock-in.</p></div>'+
    '<div><span class="lab kick" data-r>Backing</span><p data-r>Privately held, funded by angel investors and a 2022 convertible note.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Papers <em>and milestones.</em></h2></div><p data-r>The latest from GeneToBe and its collaborators at the University of Michigan.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnership and investment</span>'+
   '<h2 class="big split">Talk to <em>GeneToBe.</em></h2>'+
   '<p class="sub" data-r>Partnership, collaboration and investment to drive the mission: lifelong therapies for patients with unmet need. GeneToBe would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email GeneToBe '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>GeneToBe, Inc.<br>Ann Arbor, MI</p></div>'+
    '<div><span class="lab" data-r>Research centre</span><p data-r>Northville Research Center<br>43334 W. Seven Mile Road, Suite 100<br>Northville, MI 48167</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Ann Arbor, MI</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platforms</span>siRNA gene silencing<br>MiCas9 gene editing</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:800;font-size:64px;letter-spacing:-.03em">GeneToBe</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 GeneToBe, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"platform",platform:"platform",story:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"GeneToBe — Gene silencing and MiCas9 gene editing for genetic disease, Ann Arbor, MI",x:"Home"};
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
