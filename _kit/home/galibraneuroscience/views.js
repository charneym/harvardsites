/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Brain-penetrable AAV","The brain is the hardest place to deliver a gene. Galibra's lead work is built on next-generation AAV capsids engineered to cross the blood-brain barrier, licensed from Apertura Gene Therapy in 2025 for use in GAL005, and supported by an NIH STTR award for brain-penetrable AAV gene therapy in SSADH deficiency.",'<path d="M28 7 44 17v22L28 49 12 39V17z"/><path d="M28 7v42M12 17l32 22M44 17L12 39"/><circle class="f" cx="28" cy="28" r="3.2"/>'],
  ["GABA biology","GABA is the brain's major inhibitory neurotransmitter. Genetic changes that affect how it is made, moved or broken down cause serious neurological disease: in SSADH deficiency, pathologic variants in ALDH5A1 disrupt GABA metabolism and let neuroactive metabolites accumulate.",'<path d="M9 40c7-2 9-8 9-15s3-12 10-12 10 5 10 12 2 13 9 15"/><path class="a" d="M18 25h20"/><circle class="f" cx="28" cy="13" r="3"/><circle class="f" cx="9" cy="40" r="2.6"/><circle class="f" cx="47" cy="40" r="2.6"/>'],
  ["From bench to bedside","Galibra works with leading academic institutes and patient advocacy groups to shorten the path to the clinic: an option licence from Boston Children's Hospital for SLC6A1, natural history and consensus work led by its advisors, and disease models built programme by programme.",'<path d="M20 8v15L9 44c-2 4 1 6 4 6h30c3 0 5-2 4-6L36 23V8"/><path d="M17 8h22"/><path class="a" d="M14 36h28"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Published work</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Publications and preprints listed by Galibra Neuroscience at galibraneuroscience.com/resources. All programmes are investigational; no Galibra therapy is approved, and each requires rigorous preclinical and clinical evaluation to establish safety and efficacy.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>AAV gene therapy<span class="nomob"> · disorders of GABA</span> · Chestnut Hill, MA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Treat the</span><span class="l">gene, <em>not the</em></span><span class="l"><em>symptom.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Galibra Neuroscience was founded at Boston Children’s Hospital and Harvard Medical School to build gene therapies for disorders of GABA, the brain’s major inhibitory neurotransmitter — led by GAL005 for SSADH deficiency, a disease with no approved disease-modifying treatment.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">The science '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">For SSADH deficiency there is no approved therapy: care manages seizures, movement and behaviour while the underlying biology goes untouched. Galibra is building the gene replacement instead — <em>one dose, aimed at the cause.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><p class="k">Programmes, from monogenic rare disorders of GABA to prevalent neurologic conditions</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">FDA designations for the SSADH deficiency programme in August 2026: Orphan Drug and Rare Pediatric Disease</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2023</span><p class="k">Founded by a clinician and a scientist at Boston Children’s Hospital, affiliated with Harvard Medical School</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How GAL005 works</span><h2 class="d3">Deliver the gene <em>the enzyme is missing from.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">The block</span><span>The barrier</span><span>Restored</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A blocked step in GABA metabolism.</h2><p>GABA is broken down in two steps: GABA transaminase makes succinic semialdehyde, and SSADH converts it onward to succinate. In SSADH deficiency, pathologic variants in <i>ALDH5A1</i> remove that second enzyme, and neuroactive metabolites accumulate in the brain.</p></article>'+
     '<article class="step"><h2>Cross the blood-brain barrier.</h2><p>A working copy of the gene is carried in an adeno-associated virus vector. Galibra’s programme uses next-generation capsids engineered to cross the blood-brain barrier after a systemic dose — the problem its NIH STTR award was written to solve.</p></article>'+
     '<article class="step"><h2>Restore the enzyme in neurons.</h2><p>Once the vector reaches brain cells, they read the delivered gene and make SSADH themselves. The pathway runs to completion again instead of stalling, and the metabolites that had built up fall away.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">One neurotransmitter, <em>many disorders.</em></h2></div><p data-r>Galibra’s research spans monogenic rare disorders of GABA metabolism and signalling and broader neurological conditions, with a single question behind each programme: can the underlying biology be corrected rather than managed?</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Six programmes, <em>one pathway.</em></h2></div><p data-r>Four monogenic rare disorders and two prevalent neurologic conditions, at the stage Galibra publishes on its own pipeline chart. GAL005 leads, in AAV toxicology studies, with IND-enabling activities under way.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Clinicians, scientists <em>and parents.</em></h2></div><p data-r>Galibra was founded in 2023 by a clinician and a scientist at Boston Children’s Hospital, with over 25 years of combined experience in clinical care and translational research. Two of its officers are parents of children with the diseases it is working on.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Origin</span><p data-r>Founded in 2023 at Boston Children’s Hospital, affiliated with Harvard Medical School; headquartered in Chestnut Hill, Massachusetts.</p></div>'+
    '<div><span class="lab kick" data-r>Partners</span><p data-r>An option licence from Boston Children’s Hospital for SLC6A1, a capsid licence from Apertura Gene Therapy, and work alongside the SSADH Association and SLC6A1 Connect.</p></div>'+
    '<div><span class="lab kick" data-r>Backing</span><p data-r>An NIH STTR award, a 2025 Harrington Scholar-Innovator Award, patient advocacy funding and a $1M friends-and-family round closed in April 2026.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Designations <em>and data.</em></h2></div><p data-r>The latest from Galibra Neuroscience, its founders and the patient communities it works with.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investment, collaboration and partnership</span>'+
   '<h2 class="big split">Talk to <em>Galibra.</em></h2>'+
   '<p class="sub" data-r>Galibra welcomes conversations with investors, clinicians, researchers and potential partners who share its interest in advancing therapies for GABA disorders. For pipeline information and supporting research, write to the co-founders directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Galibra '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Galibra Neuroscience, Inc.<br>Chestnut Hill, MA</p></div>'+
    '<div><span class="lab" data-r>Co-Founder</span><p data-r>Henry Lee, MPhil, PhD<br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Co-Founder</span><p data-r>Alexander Rotenberg, MD, PhD<br><a class="ul" href="mailto:'+MAIL2+'">'+MAIL2+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Chestnut Hill, MA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Disorders of GABA metabolism<br>AAV gene replacement</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:800;font-size:64px;letter-spacing:-.03em">Galibra</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Galibra Neuroscience, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"platform",platform:"platform",story:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Galibra Neuroscience — AAV gene therapy for GABA disorders, Chestnut Hill, MA",x:"Home"};
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
