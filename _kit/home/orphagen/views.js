/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
var PHS=["Discovery","Lead opt.","IND","Phase 1"];
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[7]?' class="dim"':'')+'><span class="lab tg"><b'+(c[7]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span>'+
   '<span class="stg" aria-hidden="true"><span class="tr"><i class="p" style="width:'+(c[5]/4*100)+'%"></i><i style="width:'+(c[4]/4*100)+'%"></i></span><span class="ph">'+PHS.map(function(p){return '<span>'+p+'</span>'}).join("")+'</span></span></div>'+
   '<p>'+esc(c[6])+'</p><span class="lab lk">'+esc(c[8])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["01 · Screen","Find the orphans’ first ligands","High-throughput assays for several unexplored or orphan nuclear receptors, screened against diverse compound libraries, identify selective chemical probes.",'<circle cx="16" cy="16" r="5"/><circle cx="40" cy="16" r="5"/><circle cx="16" cy="40" r="5"/><circle class="f" cx="40" cy="40" r="5"/><path class="a" d="M33 47l14-14"/>'],
  ["02 · Confirm","Prove the binding","Orthogonal assays confirm direct binding to the receptor’s ligand-binding domain. Agonist and antagonist probes support validation of the target.",'<path d="M8 40c0-16 10-28 20-28s20 12 20 28"/><path d="M20 40c0-6 3.5-10 8-10s8 4 8 10"/><circle class="f" cx="28" cy="38" r="4.5"/>'],
  ["03 · Optimise","Turn a probe into a medicine","Iterative medicinal chemistry builds drug-like properties, while literature, public databases and in-house pharmacology point to the patients who could benefit.",'<path d="M28 9l14 8v16l-14 8-14-8V17z"/><path class="a" d="M42 33l8 5M28 41v8"/><circle class="f" cx="50" cy="38" r="3"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From Orphagen’s announcements and NIH RePORTER (R44DK136458). OR-449, OR-812 and the RORβ ligands are investigational and preclinical.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Nuclear receptor drugs<span class="nomob"> · First in class</span> · San Diego</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Drug hunters,</span><span class="l">exploring the</span><span class="l"><em>unexplored.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Orphagen discovers small molecule drugs for orphan members of the nuclear receptor family, for cancer and other serious diseases. Its lead, OR-449, is on the path to a Phase 1 trial in adrenocortical cancer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">Our science '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why nuclear receptors</span>'+
   '<h2 class="txt" id="mani">Nuclear receptors have given medicine oral drugs for breast and prostate cancer, diabetes and inflammation. Orphagen goes after the members of the family no one has drugged, <em>with medicines of its own design.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$10.2M</span><p class="k">CPRIT product development award toward IND filing and a Phase 1 trial of OR-449</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10–20%</span><p class="k">Five-year survival with metastatic adrenocortical cancer, the disease OR-449 is built for</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.7M</span><p class="k">NIH NIDDK award for OR-812, an oral drug for inflammatory bowel disease</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How OR-449 works</span><h2 class="d3">Switch off the receptor <em>driving the tumour.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Driver</span><span>Block</span><span>Effect</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>SF-1 drives the cancer.</h2><p>Steroidogenic factor-1 is a tissue-selective transcription factor crucial for adrenal development. In adrenocortical cancer its binding to super-enhancers is markedly increased, and high SF-1 levels go with poorer survival.</p></article>'+
     '<article class="step"><h2>OR-449 fills the pocket.</h2><p>OR-449 is a first-in-class, orally bioavailable antagonist of SF-1. Pharmacological studies show it is potent and selective for the receptor, which is found in only a narrow set of tissues, including the adrenal gland.</p></article>'+
     '<article class="step"><h2>The growth signal falls.</h2><p>In preclinical tumour models, OR-449 and other SF-1 antagonists inhibit tumour DNA synthesis: a mechanism unlike chemotherapy, kinase inhibitors or immunotherapy, none of which is selective for adrenal tumours.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">A proven drug class, <em>largely unexplored.</em></h2></div><p data-r>Nuclear receptors are unique among transcription factors: well-defined pockets let highly potent, selective small molecules regulate them, at doses suitable for a pill. Orphagen built its pipeline by screening the receptors no one had drugged.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">First in class, <em>by design.</em></h2></div><p data-r>Starting from a therapeutic-area agnostic approach, Orphagen has proprietary lead molecules in oncology and autoimmune disease, with the goal of novel oral drugs for patients with significant unmet need.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">We are <em>drug hunters.</em></h2></div><p data-r>A San Diego team from Allergan, Neurocrine, Celgene, Pfizer, Eli Lilly and Exelixis, with an outside board and advisors in adrenal cancer and immunology.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Built on grants and partners</span><p data-r>More than twenty NIH/SBIR and other grants, together with industry partnerships, laid the foundation for Orphagen’s programmes.</p></div>'+
    '<div><span class="lab kick" data-r>Open to collaboration</span><p data-r>Orphagen continues to evaluate partnerships for OR-449 and its other programmes as it moves into clinical development.</p></div>'+
    '<div><span class="lab kick" data-r>Toward the clinic</span><p data-r>MD Anderson Cancer Center in Houston would be a major site for the planned Phase 1 trial of OR-449.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards, designations <em>and data.</em></h2></div><p data-r>The latest from Orphagen and the NIH on OR-449, OR-812 and the pipeline.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, scientists, investors and patients</span>'+
   '<h2 class="big split">Talk to <em>Orphagen.</em></h2>'+
   '<p class="sub" data-r>We talk actively with the clinical, scientific, investment and patient communities to enable new kinds of therapy. Reach out to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Orphagen '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Orphagen Pharmaceuticals, Inc.<br>9276 Sorrento Valley Rd, Suite 500<br>San Diego, CA 92121</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Research integrity</span><p data-r>Orphagen keeps a Financial Conflict of Interest policy for research funded by the National Institutes of Health.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>9276 Sorrento Valley Rd, Suite 500<br>San Diego, CA 92121</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead programme</span>OR-449 · SF-1 antagonist for adrenocortical cancer</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Arimo\',Arial,sans-serif;font-weight:600;font-size:60px;letter-spacing:.16em">ORPHAGEN</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Orphagen Pharmaceuticals</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",mechanism:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Orphagen Pharmaceuticals — first-in-class drugs for orphan nuclear receptors",x:"Home"};
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
