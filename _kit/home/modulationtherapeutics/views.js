/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><div class="pn"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[0])+'</span></div><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Small molecule","Starve the cancer cell","Aggressive tumours lean on SCD1, the enzyme that makes monounsaturated fatty acids. MTI-301 is an oral inhibitor of it: cut off the supply and the cancer cell's endoplasmic reticulum goes into stress, and the tumour becomes visible to T cells again.",'<path d="M8 40l6-10 6 10 6-10 6 10"/><path class="a" d="M32 40l5-10 5 4 6-12"/><circle class="f" cx="28" cy="18" r="4.2"/><path d="M22 18h-9M34 18h9"/>'],
  ["Targeted alpha therapy","Deliver the dose to the tumour","MTI-201 carries actinium-225, an alpha-particle emitter, to melanoma cells that display the MC1R receptor on their surface, so the radiation is delivered at the tumour itself. It is paired with a companion diagnostic imaging agent that targets MC1R.",'<circle cx="28" cy="28" r="17"/><circle class="f" cx="28" cy="28" r="4.6"/><path class="a" d="M28 11v-6M45 28h6M28 45v6M11 28H5"/><path d="M16 16l-4-4M40 16l4-4M40 40l4 4M16 40l-4 4"/>'],
  ["Cyclic peptide","Built from peptide chemistry","MTI-101 is a cyclic peptide for relapsed myeloma, prostate and lung cancer. It comes out of the team's own peptide chemistry: beta-sheet mimicry scaffolds, unnatural amino acids, linkers and chelators.",'<path d="M28 9l16.5 9.5v19L28 47 11.5 37.5v-19z"/><path class="a" d="M28 9v8M44.5 37.5l-7-4M11.5 37.5l7-4"/><circle class="f" cx="28" cy="28" r="3.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>How MTI-301 works</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From the abstract of the NCI Fast-Track SBIR award R44CA272064, “Modulation of cancer induced immune suppression via inhibition of SCD1” (NIH RePORTER). Preclinical results in mouse models.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage oncology<span class="nomob"> · Moffitt spinout</span> · Morgantown, WV</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">First-in-class</span><span class="l">medicines for</span><span class="l"><em>aggressive cancers.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Modulation Therapeutics targets the mechanisms that drive the most aggressive solid tumours and liver disease. Its oral SCD1 inhibitor, MTI-301, opened a Phase 1 trial in December 2025.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">The science '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div></div>'+
   '<span class="lab hcap" aria-hidden="true">Cytotoxic T cells (red) attacking a cancer cell · electron micrograph, NCI</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Aggressive cancers rewire how they grow, how they spread and how they hide from the immune system. Current standards of care leave those patients with the greatest unmet needs. Modulation builds <em>first-in-class therapies against those mechanisms.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Novel first-in-class therapies, targeting nine diseases</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$11.9M</span><p class="k">NIH SBIR, STTR and contract funding across 24 awards since 2012</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Programmes in Phase 1 clinical trials: MTI-301 and MTI-201</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How MTI-301 works</span><h2 class="d3">Cut the supply, <em>expose the tumour.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Addiction</span><span>Block</span><span>Attack</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A cancer cell, hooked on fat.</h2><p>Inside an aggressive tumour cell, the enzyme SCD1 converts saturated fatty acids into monounsaturated ones. Tumour growth, metastasis and drug resistance have all been linked to these fatty acids, and the tumour suppresses the immune response around it.</p></article>'+
     '<article class="step"><h2>MTI-301 shuts the enzyme down.</h2><p>Taken by mouth, MTI-301 inhibits SCD1. Deprived of monounsaturated fatty acids, the addicted cell’s endoplasmic reticulum goes into stress, and that stress signals through the calreticulin/PERK pathway.</p></article>'+
     '<article class="step"><h2>The immune system moves in.</h2><p>The stressed tumour becomes visible again. In mouse models, activated T cells infiltrated the tumour, and with an anti-PD1 antibody MTI-301 sensitised breast cancers to checkpoint blockade.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Three ways <em>in.</em></h2></div><p data-r>A small molecule, a targeted radiotherapy and a peptide, each aimed at a mechanism aggressive cancers rely on, and each invented by the team or in-licensed from leading institutions.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Two in the clinic, <em>more behind them.</em></h2></div><p data-r>MTI-301 is in a first-in-human Phase 1 trial and MTI-201 has FDA Orphan Drug and Fast Track status, alongside programmes in liver disease and in myeloma, prostate and lung cancer.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug hunters <em>since 2011.</em></h2></div><p data-r>Founded as a spinoff of the Moffitt Cancer Center in Tampa and in Morgantown since 2016: pharmaceutical scientists, chemists, biologists and business developers moving their own discoveries toward FDA approval.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Where</span><p data-r>Morgantown, West Virginia, where the founders also teach and research at West Virginia University.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>SBIR and STTR awards from the National Cancer Institute and NIDDK, with grants from the Melanoma Research Alliance and the Multiple Myeloma Research Foundation.</p></div>'+
    '<div><span class="lab kick" data-r>Company</span><p data-r>A privately held Delaware corporation, now raising a Series A to take its pipeline through the first clinical milestones.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Trials <em>and awards.</em></h2></div><p data-r>The clinical record and the National Institutes of Health awards behind it.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and investment</span>'+
   '<h2 class="big split">Talk to <em>Modulation.</em></h2>'+
   '<p class="sub" data-r>Modulation is raising its Series A and is glad to hear from partners, investors and clinicians as MTI-301 and MTI-201 move through the clinic.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Modulation '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>781 Chestnut Ridge Road, Suite 1500<br>Morgantown, WV 26505</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Company inquiries</span><p data-r>Tim Hazlehurst, COO<br><a class="ul" href="mailto:Timh@modulationtherapeutics.com">Timh@modulationtherapeutics.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>781 Chestnut Ridge Road<br>Morgantown, WV 26505</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Programmes</span>MTI-301 · SCD1 inhibitor<br>MTI-201 · targeted alpha therapy<br>MTI-101 · cyclic peptide</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="50" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-weight:600;font-size:58px;letter-spacing:.08em">MODULATION</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Modulation Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",technology:"science",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Modulation Therapeutics — first-in-class therapies for aggressive cancers and liver disease, Morgantown, WV",x:"Home"};
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
