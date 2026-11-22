/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[3])+'</b><i>'+esc(c[2])+'</i></span><h3>'+esc(c[0])+'<span class="loc">'+esc(c[1])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Repurposing first","Ting’s founders began by adapting a drug already used in cancer treatment to prevent hearing loss, and that work led to other candidates. Building on approved drugs shortens development.",'<circle cx="21" cy="28" r="11"/><circle class="a" cx="35" cy="28" r="11"/><circle class="f" cx="28" cy="28" r="2.6"/>'],
  ["One tablet a day","TT004 is developed as an oral tablet, with an extended-release formulation for once-daily dosing alongside standard-of-care chemotherapy.",'<rect x="10" y="20" width="36" height="16" rx="0"/><path class="a" d="M28 20v16"/><path d="M14 44h28"/>'],
  ["Beyond the ear","Cisplatin also injures the kidney in about 30% of patients. Ting develops therapies for treatment-related tissue injury, starting with hearing loss.",'<path d="M20 12c-8 0-12 7-12 16s4 16 12 16c6 0 8-5 8-10 0-4-3-6-3-6s3-2 3-6c0-6-3-10-8-10z"/><path class="a" d="M38 14a14 14 0 0 1 0 28M34 20a8 8 0 0 1 0 16"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>TT004 in preclinical studies</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From Ting Therapeutics’ release of October 21, 2026, and Partnology’s interview with Dr. Jian Zuo. TT004’s protective effects have been demonstrated only in preclinical models and have not yet been shown in humans; the Phase Ib trial is its first clinical evaluation.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Hearing loss therapeutics<span class="nomob"> · Small molecules</span> · San Diego, CA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A world where</span><span class="l">everyone <em>hears.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Ting Therapeutics develops novel and repurposed small molecules to prevent and treat hearing loss, starting with the permanent hearing loss that cisplatin chemotherapy causes. Its lead candidate, TT004, is advancing into a Phase Ib trial.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How TT004 works '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Cisplatin is a highly effective cancer treatment, but it can cause permanent hearing loss in up to 80% of patients, while no FDA-approved drug protects against the hearing loss caused by aminoglycoside antibiotics. Ting is building drugs that <em>protect hearing.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">80%</span><span class="k">Of patients receiving cisplatin can develop permanent hearing loss; about 40% discontinue or modify chemotherapy because of its toxicities</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~70%</span><span class="k">Reduction in cisplatin-induced hearing loss and kidney injury with TT004 in preclinical studies</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$6.5M</span><span class="k">Non-dilutive funding: NIH SBIR Phase I and II awards, the State of Nebraska DED and the Department of Defense</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How TT004 works</span><h2 class="d3">Protect the ear, <em>keep the cure.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Injury</span><span>Protection</span><span>Treatment</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Cisplatin reaches the inner ear.</h2><p>Hearing depends on the sensory hair cells of the cochlea and the bundles of stereocilia on top of them. Cisplatin injures these cells, and the hearing loss that follows is permanent.</p></article>'+
     '<article class="step"><h2>TT004 shields the hair cells.</h2><p>Taken as an oral tablet with chemotherapy, TT004 is designed to protect normal tissues from cisplatin toxicity. In preclinical studies it cut cisplatin-induced hearing loss and kidney injury by about 70%.</p></article>'+
     '<article class="step"><h2>The tumour still responds.</h2><p>In preclinical studies TT004 protected normal tissues without compromising cisplatin’s anticancer effects, and tripled survival after cisplatin exposure. The goal: help more patients receive and complete effective chemotherapy.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our approach</span><h2 class="d2 split">Proven molecules, <em>new purpose.</em></h2></div><p data-r>Founded in 2018 by Dr. Jian Zuo and Dr. Tal Teitz, Ting targets hearing loss from chemotherapy, noise exposure, antibiotics, aging and other causes.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Five candidates, <em>one into the clinic.</em></h2></div><p data-r>TT004 leads, with its first clinical trial preparing to recruit. Four further small molecules are in IND-enabling work against cisplatin-, noise- and aminoglycoside-induced hearing loss.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Hearing scientists <em>since 2010.</em></h2></div><p data-r>A team of scientists and consultants led by its two co-founders, advised by clinicians and a business advisor.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>Three NIH SBIR Phase I and three Phase II awards from the NIDCD, State of Nebraska DED matching funds, a DoD grant and a biopharma contract.</p></div>'+
    '<div><span class="lab kick" data-r>Partner</span><p data-r>Rising Dragon, which licensed TT004’s China rights and co-developed the oral tablet that won IND approval.</p></div>'+
    '<div><span class="lab kick" data-r>Clinical site</span><p data-r>Oncologists and otolaryngologists at the Eye and ENT Hospital of Fudan University, Shanghai.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Trials, papers <em>and talks.</em></h2></div><p data-r>The latest from Ting Therapeutics.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Ting.</em></h2>'+
   '<p class="sub" data-r>Ting is getting its drugs into clinical trials and on to patients. Clinicians, partners and investors are welcome to get in touch.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Ting '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Ting Therapeutics, Inc.<br>6868 Nancy Ridge Dr<br>San Diego, CA 92121</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="'+NEWSURL+'" target="_blank" rel="noopener">Announcements</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>San Diego, CA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead candidate</span>TT004 · Phase Ib<br>Cisplatin-induced hearing loss</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="49" text-anchor="middle" style="font-family:\'Roboto Slab\',Georgia,serif;font-weight:700;font-size:50px;letter-spacing:-.01em">Ting Therapeutics</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Ting Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"story",approach:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Ting Therapeutics — Small molecules to prevent and treat hearing loss, San Diego, CA",x:"Home"};
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
