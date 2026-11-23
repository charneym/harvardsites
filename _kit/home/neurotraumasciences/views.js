/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(C){
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg>'+(c[3]?'<span class="lab">'+c[3]+'</span>':'')+'<h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
var CAP_STROKE=[
  ["Acute stroke","In the US, approximately 800,000 acute strokes occur each year. The thrombolytic agent tissue plasminogen activator (tPA) is the only FDA-approved drug for treating acute stroke.",'<path d="M6 28h12l4-10 6 20 5-14 3 4h14"/><circle class="f" cx="28" cy="38" r="2.6"/>',""],
  ["Chronic stroke","A lifelong condition for an estimated 7–8 million patients in the US, with motor, sensorimotor, cognitive and neurobehavioral deficits. There are no FDA-approved chronic stroke therapeutics.",'<path d="M8 44h40"/><path d="M14 44V30M24 44V22M34 44V26M44 44V14"/><path class="a" d="M10 18l12-6 10 6 14-8"/>',""],
  ["Lessons from 100+ trials","Over 100 stroke neuroprotection clinical trials have failed, each deficient in multiple criteria. The lessons learned from these failures guide our research and development strategy.",'<path d="M10 8h28l8 8v32H10z"/><path d="M38 8v8h8"/><path class="a" d="M18 30l6 6 12-14"/>',""]];
var CAP_SCI=[
  ["Androgen receptor","Full antagonist. One of three equipotent receptor interactions in NTS-105’s unique target profile.",'<circle cx="28" cy="28" r="17"/><path class="a" d="M17 17l22 22"/><circle class="f" cx="28" cy="28" r="3"/>',"01 · Antagonist"],
  ["Progesterone receptor B","Partial agonist at the cellular progesterone receptor B, the second of the three interactions.",'<circle cx="28" cy="28" r="17"/><path class="a" d="M28 11a17 17 0 0 1 0 34"/><circle class="f" cx="28" cy="28" r="3"/>',"02 · Partial agonist"],
  ["Mineralocorticoid receptor","Full antagonist. Together, the three interactions give potent anti-inflammatory, anti-apoptotic and anti-edema activity, in the brain and systemically.",'<circle cx="28" cy="28" r="17"/><path class="a" d="M39 17L17 39"/><circle class="f" cx="28" cy="28" r="3"/>',"03 · Antagonist"]];
function res(){var R=[
  ["Neurological score","NTS-104, given at four dose levels after embolic stroke, markedly improved the modified neurological severity score (mNSS) in a dose-dependent manner."],
  ["Motor and sensorimotor","Treatment significantly reduced foot faults and improved the time to removal of adhesive tape, both in a dose-dependent manner."],
  ["Infarct size","Examination of the brains one month after the stroke showed that NTS-104 reduced the size of the infarction in a dose-dependent manner."]];
  return '<div class="res"><span class="lab kick" data-r>Preclinical results</span><div><dl>'+R.map(function(e){return '<div><dt class="lab" data-r>'+e[0]+'</dt><dd data-r>'+e[1]+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Evaluated in multiple independent laboratories in two acute ischemic stroke models (tMCAO and eMCAO). Zhang et al., <a class="ul" href="https://www.ahajournals.org/doi/10.1161/STROKEAHA.122.038507" target="_blank" rel="noopener">Stroke, November 2022</a>.</p></div></div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From neurotraumasciences.com, Stroke (2022) and ClinicalTrials.gov.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Neuroprotection<span class="nomob"> · Acute and chronic stroke</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Transforming</span><span class="l">the treatment</span><span class="l">of <em>stroke.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>NeuroTrauma Sciences is a clinical-stage biopharmaceutical company focused on improving the lives of stroke patients, in acute ischemic stroke and chronic stroke.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Founded in 2016</span>'+
   '<h2 class="txt" id="mani">A stroke triggers inflammation, edema and cell death, in the brain and throughout the body. <em>We are developing novel therapeutics to target these processes.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">800K</span><p class="k">Acute strokes each year in the US</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">7–8M</span><p class="k">Patients living with chronic stroke in the US</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$103.5B</span><p class="k">Annual direct US health care cost of stroke</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec light" id="stroke" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Stroke</span><h2 class="d2 split">An acute event, <em>a lifelong injury.</em></h2></div><p data-r>Stroke occurs when blood supply to the brain is disrupted, so brain tissue loses oxygen and nutrients. In many cases it results in a lifelong injury, and there is a massive global unmet need for new stroke therapeutics.</p></div>'+
   caps(CAP_STROKE)+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">One compound, <em>three receptors.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Injury</span><span>Reach</span><span>Protect</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Stroke sets off inflammation.</h2><p>When blood supply to the brain is disrupted, inflammation, edema and cell death follow. Immune cells such as microglia keep the inflammation going and damage brain cells.</p></article>'+
     '<article class="step"><h2>NTS-105 reaches the brain.</h2><p>Given intravenously, the prodrug NTS-104 converts rapidly in plasma to NTS-105, a neuroactive steroid that readily crosses the blood–brain barrier.</p></article>'+
     '<article class="step"><h2>Neurons are protected.</h2><p>NTS-105 acts on three receptors at once, with anti-inflammatory, anti-apoptotic and anti-edema activity in the brain.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">A multi-targeted <em>neurosteroid.</em></h2></div><p data-r>NTS-104 is a prodrug that converts rapidly in plasma to NTS-105. NTS-105 readily crosses the blood–brain barrier, reaches pharmacologic concentrations in the brain and plasma, and has multi-targeted mechanisms of action.</p></div>'+
   caps(CAP_SCI)+
   res()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From first-in-human <em>to Phase 2a.</em></h2></div><p data-r>Our lead indications are acute ischemic stroke (AIS) and chronic stroke, with a next generation candidate for subcutaneous or intramuscular dosing.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Led by <em>industry experts.</em></h2></div><p data-r>Our leadership brings decades of experience in neurology, clinical development, regulatory affairs and manufacturing, from global pharma and from start-ups.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>NTS.</em></h2></div><p data-r>Clinical milestones, publications and company announcements.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Connect</span>'+
   '<h2 class="big split">Partner <em>with us.</em></h2>'+
   '<p class="sub" data-r>Making a difference for patients, together. We welcome partnerships with scientific innovators with novel approaches to treating stroke and other CNS injuries, and we are always interested in the best and brightest talent.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to NTS '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>2655 Northwinds Parkway, Suite 5c<br>Alpharetta, GA 30009</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@neurotraumasciences.com</a></p></div>'+
    '<div><span class="lab" data-r>Call</span><p data-r><a class="ul" href="tel:+18332782888">833-278-2888</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Alpharetta, Georgia</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@neurotraumasciences.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/stroke">Stroke</a><br><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead program</span>NTS-104 · neurosteroid prodrug for acute ischemic stroke</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Barlow\',sans-serif;font-weight:500;font-size:62px">NEUROTRAUMA SCIENCES</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 NeuroTrauma Sciences, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",stroke:"stroke",science:"science",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"NeuroTrauma Sciences — transforming the treatment of stroke",x:"Home"};
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
