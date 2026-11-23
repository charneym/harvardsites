/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Learned from nature","Certain viruses have &#8220;learned&#8221; to modulate host immunity without suppressing it. Modeled on such naturally occurring receptor-targeting sequences, our peptides have a nuanced receptor bias that would be difficult to find by typical drug screening.",'<path d="M10 40c8-14 14-24 18-24s10 10 18 24"/><path d="M18 30c3-6 6-9 10-9s7 3 10 9"/><circle class="f" cx="28" cy="16" r="3.2"/>'],
  ["Balance, not blockade","Receptides are partial antagonists of a cluster of chemokine receptors (CCR2/5/8, CXCR4). They balance excess immune responses without completely shutting them down, while activating cellular repair processes.",'<path d="M8 36h40"/><path d="M28 36V14"/><path class="a" d="M14 24h28"/><circle class="f" cx="14" cy="24" r="3"/><circle class="f" cx="42" cy="24" r="3"/>'],
  ["Small, safe and oral","Small oral peptides suitable for once-daily dosing. Our lead, RAP-103, is safe in animal toxicity studies, with rapid brain entry and stability, and it overcomes the formulation limits of the first-generation nasal peptide.",'<rect x="12" y="20" width="32" height="16"/><path d="M28 20v16"/><path class="a" d="M28 4v10M23 9l5 5 5-5"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From creativebiopeptides.com and NIH RePORTER. The current NIA award is 5R44AG074715-03; the PET imaging award is R43AG085779.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Receptides<span class="nomob"> · Oral chemokine antagonist peptides</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Small oral peptides</span><span class="l">to <em>protect</em></span><span class="l"><em>the synapse.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Creative Bio-Peptides advances disease-modifying oral chemokine antagonist peptides that repair synapses and regenerate neurons, for dementias, chronic pain and opioid use disorders.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our programs</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why chemokines</span>'+
   '<h2 class="txt" id="mani">Dysregulated activation of the innate immune system underlies chronic pain, dementia and opioid use disorders. <em>Our peptides re-balance chemokine receptors from neurodegeneration to regeneration.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$75M+</span><p class="k">In legacy research and development behind the first-generation peptide, safe and effective in controlled trials</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1&#215;</span><p class="k">Daily oral dosing: our Receptides are small, safe oral peptides</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">450K+</span><p class="k">People in the US each year with persistent post-surgical pain</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Calm the receptor, <em>save the synapse.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Inflame</span><span>Block</span><span>Restore</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Inflammation damages neurons.</h2><p>Activated microglia and astrocytes drive chemokine signalling. Chemokine receptors act on immune cells and on neurons, and persistent activation damages dendrites and synapses.</p></article>'+
     '<article class="step"><h2>A Receptide blocks the receptor.</h2><p>RAP-103, a small oral peptide, is a partial antagonist of CCR2 and CCR5: it balances the excess immune response without shutting it down.</p></article>'+
     '<article class="step"><h2>Synapses are restored.</h2><p>Blocking these receptors inhibits the neurotoxic effects of glial activation, restoring synapses and dendritic arbor to stop, even reverse, the damage.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Receptides: receptor-active <em>oral peptides.</em></h2></div><p data-r>We call our oral peptides Receptides for their receptor-mediated actions. They are biased antagonists of select chemokine receptors, such as CCR2 and CCR5, which sculpt neuronal connections and synapses.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One oral lead, <em>four conditions.</em></h2></div><p data-r>RAP-103 is the oral successor to the first-generation peptide DAPTA, which improved cognitive endpoints in controlled clinical trials. Our next step is human safety and pilot efficacy testing.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Peptide scientists and <em>drug developers.</em></h2></div><p data-r>Founded in late 2017 by Michael Ruff, PhD, whose work began at the National Institutes of Health, with advisors in pain medicine, neuropharmacology, regulatory affairs and peptide manufacturing.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>CBP.</em></h2></div><p data-r>Announcements on our research results, publications and NIH awards.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering</span>'+
   '<h2 class="big split">Partner with <em>us.</em></h2>'+
   '<p class="sub" data-r>Please contact us for further information, or to partner using our Receptide&#174; research technology.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to CBP '+ARR+'</a><a class="btn" href="#/pipeline">See the programs</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Creative Bio-Peptides, Inc.<br>Rockville, Maryland 20854</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@creativebiopeptides.com</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="https://www.linkedin.com/company/creative-bio-peptides/" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Rockville, Maryland</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@creativebiopeptides.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead program</span>RAP-103 · oral CCR2/CCR5 antagonist</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Tenor Sans\',sans-serif;font-weight:400;font-size:64px">CREATIVE BIO-PEPTIDES</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Creative Bio-Peptides, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Creative Bio-Peptides — small oral peptides to protect the synapse",x:"Home"};
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
