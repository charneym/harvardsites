/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Phenotypic screening","Aiming to prevent early cancer resistance, TOLREMO screened for small molecules able to switch off non-genetic resistance phenotypes in cancer cells. That unbiased search pointed to one target.",'<rect x="8" y="8" width="40" height="40"/><path d="M8 21h40M8 35h40M21 8v40M35 8v40"/><circle class="f" cx="28" cy="28" r="3.4"/>'],
  ["CBP/p300","Highly similar transcriptional coactivators that regulate gene expression. Clinically validated in multiple myeloma, but never before implicated in non-genetic drug resistance: TOLREMO found they govern critical transcriptional resistance pathways.",'<path d="M10 40c6-14 12-14 18 0s12 14 18 0"/><path class="a" d="M10 16c6 14 12 14 18 0s12-14 18 0"/><circle class="f" cx="28" cy="28" r="3"/>'],
  ["TT125-802","An orally available, selective small molecule that targets the bromodomain of CBP/p300. It blocks the escape programme upstream without interfering with pathways unrelated to cancer: a new clinical opportunity for an established target.",'<path d="M28 9l15 8.5v17L28 43l-15-8.5v-17z"/><path class="a" d="M28 43v6M43 34.5l5 3M13 34.5l-5 3"/><circle class="f" cx="28" cy="26" r="3"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Final Phase I data · WCLC 2026</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>TT125-802 monotherapy, 45 patients with advanced solid tumours including 24 with NSCLC (NCT06403436). Presented at the 2026 World Conference on Lung Cancer in Seoul; TOLREMO release, 15 September 2026.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage oncology<span class="nomob"> · CBP/p300</span> · Basel</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Stopping cancer</span><span class="l">drug resistance</span><span class="l"><em>as it emerges.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>TOLREMO tackles non-oncogene addiction in cancer. Its oral CBP/p300 bromodomain inhibitor, TT125-802, blocks the transcriptional escape that lets tumours evade targeted therapy, alone and in combination.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">Our approach '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Drug resistance is the leading cause of poor outcomes for patients on targeted cancer therapies. Genetic mutations eventually make a cancer impervious, but early resistance is non-genetic. TOLREMO stops it <em>while it is still reversible.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">42%</span><p class="k">Of patients with NSCLC saw their tumours shrink on TT125-802 alone in the completed Phase I study</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">FDA Fast Track designations, 2025, in pretreated EGFR- and KRAS-G12C-mutated lung cancer</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$39M</span><p class="k">Series A, led by BioMedPartners with Pierre Fabre Invest, to take TT125-802 into the clinic</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Our approach</span><h2 class="d3">Close the escape route <em>before it opens.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Therapy</span><span>Escape</span><span>Blockade</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Targeted therapy hits the oncogene.</h2><p>Targeted drugs such as EGFR and KRAS inhibitors block the primary oncogene signalling axis that drives the tumour, and at first the cancer responds.</p></article>'+
     '<article class="step"><h2>The cancer cell reprograms.</h2><p>Cancer’s first defence is transcriptional: CBP/p300 switches on escape genes that run parallel to the blocked oncogene, and the tumour learns to evade the drug. This early resistance is non-genetic, and still reversible.</p></article>'+
     '<article class="step"><h2>TT125-802 shuts the escape down.</h2><p>TT125-802 binds the bromodomain of CBP/p300 and blocks that reprogramming. Combined with targeted therapy, it gave deeper and more durable responses in preclinical models.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Discovery</span><h2 class="d2 split">From phenotype <em>to target.</em></h2></div><p data-r>A unique approach to target identification and medicinal chemistry uncovered a key mechanism upstream of transcriptional oncogene addiction, a driver of cancer and of drug resistance.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One compound, <em>many targeted therapies.</em></h2></div><p data-r>TT125-802 is advancing as monotherapy and in combination with targeted agents, in solid tumours and haematological malignancies, to turn targeted treatments into long-term therapeutic solutions.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built in Basel, <em>advised by the field.</em></h2></div><p data-r>A team of experts in medicinal chemistry, bioinformatics and therapeutic development, with a board and scientific advisors who have taken cancer drugs from the clinic to approval.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Origins</span><p data-r>Founded on science from the laboratory of the late Prof. Wilhelm Krek, cell biologist at ETH Zurich and TOLREMO co-founder.</p></div>'+
    '<div><span class="lab kick" data-r>Investors</span><p data-r>Series A of USD 39 million led by BioMedPartners, with Pierre Fabre Invest and existing investors.</p></div>'+
    '<div><span class="lab kick" data-r>Support</span><p data-r>A CHF 1.5 million Innosuisse grant, 2023, from the Swiss Innovation Agency’s Start-up Innovation Projects.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From first patient <em>to final data.</em></h2></div><p data-r>The latest press releases from TOLREMO therapeutics.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and enquiries</span>'+
   '<h2 class="big split">Talk to <em>TOLREMO.</em></h2>'+
   '<p class="sub" data-r>Would you like to learn more about TOLREMO and TT125-802? The team would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email TOLREMO '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>TOLREMO therapeutics AG<br>Hochbergerstrasse 60C<br>CH-4057 Basel, Switzerland</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Hochbergerstrasse 60C<br>CH-4057 Basel</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead compound</span>TT125-802<br>CBP/p300 bromodomain inhibitor</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:500;font-size:64px;letter-spacing:.01em">TOLREMO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 TOLREMO therapeutics AG</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",approach:"story",platform:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"TOLREMO therapeutics — Stopping cancer drug resistance as it emerges, Basel",x:"Home"};
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
