/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["GABAkines","EndeavourRx","Positive allosteric modulators of the GABA-A receptor, the brain’s main inhibitory channel. KRM-II-81 amplifies inhibition at a selective subset of receptor subtypes, aiming at the anti-seizure and analgesic effects of benzodiazepines without their sedation, tolerance and abuse.",'<circle cx="28" cy="28" r="19"/><circle cx="28" cy="15" r="5.4"/><circle cx="40.4" cy="24" r="5.4"/><circle cx="35.6" cy="38.6" r="5.4"/><circle cx="20.4" cy="38.6" r="5.4"/><circle cx="15.6" cy="24" r="5.4"/><circle class="f" cx="28" cy="28" r="2.6"/><path class="a" d="M28 28h11"/>'],
  ["AMPAkines","EndeavourRx","Low-impact modulators of the AMPA glutamate receptor, which carries most excitatory transmission in the central nervous system. CX717 and CX1739 belong to a class without the convulsive effects seen with earlier ampakines, and have been through Phase 2A trials.",'<path d="M7 34h7.5l4-13 5 21 5-28 5 20h4.5l3-7h7"/><path class="a" d="M7 46h42"/><circle class="f" cx="23.5" cy="46" r="2.4"/>'],
  ["Pharmaceutical cannabinoids","ResolutionRx","The repurposing of dronabinol, an FDA-approved CB1 and CB2 receptor agonist, as a drug treatment for obstructive sleep apnea, with formulations and dosage strengths designed for that use. Two placebo-controlled trials have reduced the apnea-hypopnea index.",'<path d="M28 9v13M28 22c-3 2-5 4-6.4 6.4M28 22c3 2 5 4 6.4 6.4"/><path d="M23.2 14.5c-6.8.5-12.6 10.6-12.6 21.2 0 5.8 3.4 7.7 7.3 6l5.3-2.6z"/><path d="M32.8 14.5c6.8.5 12.6 10.6 12.6 21.2 0 5.8-3.4 7.7-7.3 6l-5.3-2.6z"/><path class="a" d="M4 51c6-3.4 12 3.4 19 0M33 51c7-3.4 13 3.4 19 0"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The record so far</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Sources: the platform pages on respirerx.com; the RespireRx release of 19 November 2025; Radin and colleagues in the European Journal of Pharmacology (2025); Carley and colleagues in SLEEP (2018). Results for KRM-II-81 are preclinical and translational; no clinical trial of it has yet begun.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Neuromodulators<span class="nomob"> · Epilepsy, pain, ADHD, sleep apnea</span> · Glen Rock, NJ</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Bring neuronal</span><span class="l">signalling back</span><span class="l"><em>into balance.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>RespireRx develops treatments for disorders caused by disruption of neuronal signalling. Its lead compound, KRM-II-81, is a selective GABA-A receptor potentiator for epilepsy, now in IND-enabling work under an NIH Phase II award.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">The science '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Even on several medicines at once, as many as 60 to 70% of people with epilepsy keep having seizures. KRM-II-81 has stopped seizures in models where standard-of-care drugs fail, and quietened epileptiform activity in tissue taken from patients’ own brains, <em>without the sedation.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$3.0M</span><span class="k">Awarded by NIH/NINDS under the SBIR programme over two years to take KRM-II-81 toward an IND</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">34</span><span class="k">Preclinical models in which KRM-II-81 has shown anti-seizure activity, treatment-resistant ones included</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Three</span><span class="k">Phase 2A trials of the AMPAkines CX717 and CX1739, confirming target engagement in humans</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a GABAkine works</span><h2 class="d3">Not a switch, <em>a volume control.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">The channel</span><span>The modulator</span><span>The selectivity</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Five subunits, one chloride pore.</h2><p>The GABA-A receptor is a pentameric, neurotransmitter-gated chloride channel. When GABA binds, the pore opens and the neuron becomes harder to excite. Twenty distinct gene products assemble into some ten common combinations, so the receptor is not one target but a family of them.</p></article>'+
     '<article class="step"><h2>The modulator sits beside the gate.</h2><p>A positive allosteric modulator has no activity of its own. It binds next to the GABA site and, when GABA arrives, makes the channel’s response larger. Benzodiazepines work this way, but they do it indiscriminately, at every subtype at once, which is where their sedation, tolerance and abuse come from.</p></article>'+
     '<article class="step"><h2>Choose the subtypes, drop the side effects.</h2><p>KRM-II-81 potentiates a selective subset of GABA-A subtypes, the ones involved in seizures and pain. In animal studies this separates the anti-seizure and analgesic effects from sedation, motor incoordination, respiratory depression, tolerance and withdrawal.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Three platforms, <em>one idea.</em></h2></div><p data-r>RespireRx coined the terms AMPAkine and GABAkine for drugs that act as positive allosteric modulators at the AMPA and GABA-A receptors. Alongside them, its ResolutionRx unit repurposes an approved cannabinoid. All three turn signalling up or down where it has gone wrong, rather than replacing it.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Six programmes, <em>four receptors.</em></h2></div><p data-r>KRM-II-81 for epilepsy is the lead and the one that is funded: an NIH/NINDS SBIR Phase II award is carrying it through manufacturing scale-up and preclinical toxicology toward an IND. The AMPAkines CX717 and CX1739 have Phase 2A data behind them, and dronabinol has completed a Phase 2B trial.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people <em>behind the chemistry.</em></h2></div><p data-r>A small company run by the pharmacologists who publish its work, with the GABAkines invented in Dr. James Cook’s laboratory at the University of Wisconsin–Milwaukee and licensed from the UWM Research Foundation.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Where</span><p data-r>126 Valley Road, Suite C, Glen Rock, New Jersey, with two operating subsidiaries: EndeavourRx LLC and ResolutionRx Ltd.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>An SBIR Phase II award from NIH/NINDS, Department of Defense–funded collaboration, and a Rule 506(c) private placement of up to $45 million.</p></div>'+
    '<div><span class="lab kick" data-r>Licensed from</span><p data-r>An amended and restated patent licence with the University of Wisconsin–Milwaukee Research Foundation, entered into October 2025.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards <em>and papers.</em></h2></div><p data-r>Grant records, company releases and the peer-reviewed work behind the programmes.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and investment</span>'+
   '<h2 class="big split">Talk to <em>RespireRx.</em></h2>'+
   '<p class="sub" data-r>Licensing, co-development, clinical collaboration or investment: RespireRx is glad to hear from partners, clinicians and investors as KRM-II-81 moves toward a first clinical trial.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email RespireRx '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>RespireRx Pharmaceuticals Inc.<br>126 Valley Road, Suite C<br>Glen Rock, NJ 07452</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>(201) 444-4947</p></div>'+
    '<div><span class="lab" data-r>Lead programme</span><p data-r><a class="ul" href="'+RP+'11420545" target="_blank" rel="noopener">NIH RePORTER</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Glen Rock, NJ</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platforms</span>GABAkines · AMPAkines<br>Pharmaceutical cannabinoids</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="50" text-anchor="middle" style="font-family:\'Manrope\',system-ui,sans-serif;font-weight:700;font-size:58px;letter-spacing:-.03em">RespireRx</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 RespireRx Pharmaceuticals Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"platform",platform:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"RespireRx Pharmaceuticals — GABAkines and AMPAkines for disorders of neuronal signalling, Glen Rock, NJ",x:"Home"};
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
