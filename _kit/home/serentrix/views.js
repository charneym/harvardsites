/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function more(){return '<div class="morep"><span class="lab kick" data-r>Also on the pipeline · preclinical</span><ul>'+MORE.map(function(m){return '<li data-r><b>'+esc(m[0])+'</b><span>'+esc(m[1])+'</span></li>'}).join("")+'</ul></div>'}
function caps(){var C=[
  ["The target","TRPV1 is perhaps the most important signal integrator in sensory nociceptors: the receptor that turns heat, acid and inflammatory signals into the sensation of burning pain. Blocking it stops pain at its source, before the signal reaches the spinal cord.",'<path d="M6 28h44"/><path class="a" d="M22 12v32M34 12v32"/><circle class="f" cx="28" cy="28" r="3"/>'],
  ["The problem","TRPV1 antagonists from several companies were discontinued in the early 2010s. They blocked all three modes of activation (heat, protons and capsaicin) and raised body temperature and the threshold for sensing heat.",'<path d="M28 6v30"/><circle cx="28" cy="42" r="8"/><path class="a" d="M28 36V16"/><path d="M36 12h6M36 20h6M36 28h6"/>'],
  ["Our answer","SER114 is a next-generation, modality-selective antagonist: it has no potent effect on the proton mode of activation, and so no effect on body temperature. In Phase 1 studies in 35 subjects, no increase in body temperature was observed.",'<path d="M10 40l12-12 8 8 16-20"/><path class="a" d="M38 16h8v8"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Non-opioid pain therapeutics<span class="nomob"> · TRPV1</span> · Exton, PA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Pain relief without</span><span class="l">the worry of</span><span class="l"><em>addiction.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Serentrix develops targeted small molecules that block TRPV1, the receptor at the heart of burning pain, without the rise in body temperature that stopped earlier drugs. First programmes: burn pain and endometriosis pain.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">Our science '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">NSAIDs and opiates help many patients, but bring dose-limiting side effects, poor tolerability and fading efficacy, so pain is often under-treated, and opioids carry the risk of dependence. Serentrix targets the key mediator of pain itself, <em>with no addiction risk.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">35</span><span class="k">Subjects in Phase 1 human studies of the lead compound, with no increase in body temperature observed</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$731K</span><span class="k">NIH SBIR and STTR awards since 2024, from NIGMS for burn pain and NICHD for endometriosis pain</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~10%</span><span class="k">Of women affected by endometriosis, a chronic inflammatory disease and an important driver of opioid use</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How SER114 works</span><h2 class="d3">Block the pain, <em>spare the thermostat.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Signal</span><span>Old blockers</span><span>Selective</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>TRPV1 turns injury into burning pain.</h2><p>On sensory nerve endings, the TRPV1 channel opens to heat, to protons released by inflamed tissue and to capsaicin. Calcium floods in and the nerve fires: the ongoing, burning pain patients describe.</p></article>'+
     '<article class="step"><h2>First-generation blockers shut every door.</h2><p>Earlier antagonists blocked all three modes of activation. Pain fell, but so did the body’s own temperature signal: hyperthermia and a raised heat-pain threshold ended most of those programmes.</p></article>'+
     '<article class="step"><h2>SER114 blocks selectively.</h2><p>Serentrix’s compound is modality-selective: it has no potent effect on the proton mode of activation, so body temperature holds steady. In Phase 1 studies in 35 subjects, no increase was observed.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">The next generation of <em>TRPV1 antagonists.</em></h2></div><p data-r>TRPV1 antagonism is one of the few genuinely new mechanisms for pain relief, a candidate for the next-generation analgesic. Serentrix is developing a lead and a back-up compound for multiple indications.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One mechanism, <em>many kinds of pain.</em></h2></div><p data-r>Because TRPV1 sits wherever pain and inflammation meet, one selective antagonist can serve the skin, the eye, the gut and the pelvis. Two programmes are funded by the National Institutes of Health.</p></div>'+
   pipeRows(PIPE)+
   more()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Pharma experience, <em>TRP channel science.</em></h2></div><p data-r>Serentrix is led by a founder from Merck, Pfizer and Johnson &amp; Johnson, with scientists and developers who have taken drugs into the clinic and through the FDA.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Funded by <em>the NIH.</em></h2></div><p data-r>Recent awards from the National Institutes of Health for safe, non-addictive treatments for pain.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and licensing</span>'+
   '<h2 class="big split">Talk to <em>Serentrix.</em></h2>'+
   '<p class="sub" data-r>Investors, clinical collaborators and partners for burn pain, endometriosis, ophthalmology and beyond: we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Serentrix '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Serentrix, LLC<br>1 East Uwchlan Avenue, Suite 301<br>Exton, PA 19341</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r>NIH SBIR and STTR awards from NIGMS and NICHD</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Exton, PA 19341</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Mechanism</span>Modality-selective<br>TRPV1 antagonists</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Raleway\',Arial,sans-serif;font-weight:700;font-size:64px;letter-spacing:-.01em">Serentrix</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Serentrix, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",science:"science",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Serentrix — Non-opioid pain relief through selective TRPV1 blockade, Exton, PA",x:"Home"};
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
