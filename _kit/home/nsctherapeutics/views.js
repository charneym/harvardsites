/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Highly selective for M1","NSC001 is rigid and orthosteric: it binds the receptor’s own acetylcholine site, with high selectivity for the M1 subtype over the other muscarinic receptors.",'<path d="M28 8l17 10v20L28 48 11 38V18z"/><circle class="f" cx="28" cy="28" r="4"/><path class="a" d="M28 28v-12"/>'],
  ["Oral and brain-penetrant","Excellent oral bioavailability, high penetration of the blood–brain barrier and absolutely linear pharmacokinetics, for simple once-daily dosing.",'<rect x="12" y="20" width="32" height="16"/><path d="M28 20v16"/><path class="a" d="M28 4v10M23 9l5 5 5-5"/>'],
  ["Fast and lasting","Rapid cognitive enhancement together with long-term disease-modifying effects, through precise modulation of the M1 receptor and a favourable safety profile.",'<path d="M8 40h40"/><path class="a" d="M10 36c8-2 12-14 18-18s12-6 18-8"/><circle class="f" cx="46" cy="10" r="3"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Mechanism</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Activation of M1 receptors by NSC001, as described by NSC-Therapeutics. Trial details from ClinicalTrials.gov, NCT06995573.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>NSC001<span class="nomob"> · Selective M1 muscarinic agonist</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Treating Alzheimer’s</span><span class="l">at the <em>M1</em></span><span class="l"><em>receptor.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>NSC-Therapeutics develops NSC001, a rigid, orthosteric and highly specific muscarinic M1 receptor agonist, for fast cognitive improvement and long-term disease modification in Alzheimer’s disease and related disorders.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">The programme</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why M1</span>'+
   '<h2 class="txt" id="mani">In Alzheimer’s disease the cholinergic neurons of the basal forebrain degenerate early, yet the M1 receptors that learning and memory depend on are preserved. <em>NSC001 activates them directly.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><p class="k">Phase 1 trials of NSC001 completed: well tolerated, with a good safety profile</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$5M</span><p class="k">From the Alzheimer’s Drug Discovery Foundation in 2024, for Phase 2 proof of concept</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10</span><p class="k">Clinical sites in Austria and Germany for the Phase 1/2 study in Alzheimer’s disease</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Where the signal fades, <em>NSC001 restores it.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fade</span><span>Activate</span><span>Protect</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Acetylcholine runs short.</h2><p>An extremely early event in Alzheimer’s disease is the degeneration of the basal forebrain’s cholinergic neurons, leaving a deficit in acetylcholine, while the post-synaptic M1 receptors are preserved.</p></article>'+
     '<article class="step"><h2>NSC001 activates M1.</h2><p>A rigid, orthosteric agonist, NSC001 binds the preserved M1 receptor at the acetylcholine site and stimulates cholinergic signalling, for fast cognitive improvement.</p></article>'+
     '<article class="step"><h2>The disease is modified.</h2><p>M1 activation shifts amyloid precursor protein processing away from β-amyloid, inhibits tau hyperphosphorylation through GSK3β, and modulates microglia through TREM2.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">NSC001: a highly selective <em>M1 agonist.</em></h2></div><p data-r>NSC001, also known as AF267B, was invented by our CSO Abraham Fisher and is exclusively licensed from Life Sciences Research Israel. The M1 receptor is a validated target for cognitive dysfunction in Alzheimer’s disease.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From safety studies <em>to proof of concept.</em></h2></div><p data-r>After five Phase 1 trials, NSC001 is in a Phase 1/2 study in patients with mild to moderate Alzheimer’s disease, run with the contract research organisation NeuroScios.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Decades in Alzheimer’s <em>drug development.</em></h2></div><p data-r>A semi-virtual company led by Manfred Windisch, with the inventor of NSC001 as Chief Scientific Officer and a Scientific Advisory Board of leading Alzheimer’s researchers.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">NSC001 <em>in the clinic.</em></h2></div><p data-r>The latest on our clinical study and funding, from the trial registry and our partners.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Talk to <em>us.</em></h2>'+
   '<p class="sub" data-r>For partnering, clinical or scientific questions about NSC001, please get in touch with our office in St. Radegund near Graz.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to NSC '+ARR+'</a><a class="btn" href="#/pipeline">See the programme</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>NSC-Therapeutics GmbH<br>Willersdorferstraße 7<br>8061 St. Radegund, Austria</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">office@nsctherapeutics.com</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+4366488869905">+43 664 888 699 05</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>St. Radegund near Graz, Austria</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">office@nsctherapeutics.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead compound</span>NSC001 · selective M1 muscarinic agonist</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Merriweather\',serif;font-weight:300;font-size:60px">NSC-THERAPEUTICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 NSC-Therapeutics GmbH · FN 482035 a</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"NSC-Therapeutics — a selective M1 muscarinic agonist for Alzheimer’s disease",x:"Home"};
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
