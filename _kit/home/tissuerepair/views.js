/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+esc(c[6])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["A yeast decoy","Glucoprime® is a high-molecular-weight, micro-particulate beta-1,3/1,6-glucan with a high degree of side-branching. To the skin's immune cells it looks like a yeast cell wall, so it triggers the body's own wound repair pathways.",'<ellipse cx="28" cy="28" rx="19" ry="15"/><path class="a" d="M17 26c4-5 13-6 19-1"/><circle class="f" cx="38" cy="33" r="2.2"/>'],
  ["Macrophages lead the healing","Large beta-glucans attach to macrophage receptors, dectin-1 and TLR-2, and activate them to release cytokines and growth factors. Smaller beta-glucans can engage the receptors but do not activate the cells.",'<circle cx="28" cy="28" r="18"/><circle class="f" cx="28" cy="28" r="5"/><path class="a" d="M28 4v6M28 46v6M4 28h6M46 28h6"/>'],
  ["Size kept intact","Over many years the company has developed a proprietary process to purify Glucoprime® from baker's yeast without significantly compromising its size, the property that lets it activate macrophages.",'<rect x="12" y="12" width="32" height="32"/><path class="a" d="M12 22h32M12 34h32"/><circle class="f" cx="28" cy="28" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Clinical record</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From Tissue Repair\'s clinical programme summary and Wu D, Kollipara R, Carter M, Goldman M, Dermatologic Surgery 2022;48(12):1312-1316. Phase 2B venous leg ulcer results are for 2 to 12 cm² ulcers; the closure result did not reach statistical significance (p=0.12).</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage wound healing<span class="nomob"> · ASX: TRP · Sydney</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Wound healing,</span><span class="l">led by the skin\'s</span><span class="l"><em>own immune system.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Tissue Repair is developing TR987®, a topical gel built on Glucoprime®, a large beta-glucan purified from baker\'s yeast, for chronic venous leg ulcers, now in two Phase 3 trials. Its post-procedure gel TR Pro+® is already used in clinics.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/pipeline">The Phase 3 programme</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">In a chronic wound, an inefficient inflammatory response is one of the reasons healing stalls. Glucoprime® acts as a decoy that looks like yeast, so the skin\'s own macrophages <em>switch the repair back on.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">240+</span><p class="k">Patients studied with TR987® across Phase 1, 2A and 2B</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">90.5%</span><p class="k">Wound-area reduction with TR987® in the Phase 2B per-protocol group, against 46.6% on placebo</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Pivotal Phase 3 trials in venous leg ulcers, in the US and Australia, 312 patients each planned</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How Glucoprime® works in a wound</span><h2 class="d3">Wake the healers, <em>rebuild the skin.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Decoy</span><span>Activate</span><span>Rebuild</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A decoy in the wound bed.</h2><p>Applied as a gel, Glucoprime® particles settle into the wound. Their large, branched beta-glucan mimics a yeast cell wall, and the receptors of nearby macrophages, dectin-1 and TLR-2, latch on.</p></article>'+
     '<article class="step"><h2>The macrophages switch on.</h2><p>Activated macrophages call in more macrophages and neutrophils and release cytokines and growth factors: the inflammation that starts healing, never too severe, nor too long.</p></article>'+
     '<article class="step"><h2>M2 cells rebuild the skin.</h2><p>As healing moves on, macrophages shift from the M1 to the M2 type. They drive type I and III collagen, new capillaries and the return of the skin barrier, and the wound closes.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Glucoprime®, <em>from baker\'s yeast.</em></h2></div><p data-r>The technology began in 1989 as a research project at the Department of Surgery, The University of Sydney, under Professor Graham Kelly. Tissue Repair was formed in 2012 to acquire the advanced wound care assets and IP from Novogen and Glycotex, and its US subsidiary TR Therapeutics, Inc. leads its clinical research.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Chronic and acute wounds, <em>one active ingredient.</em></h2></div><p data-r>After a Phase 2B programme completed under FDA-approved protocols, the company received approval in 2024 to take TR987® into Phase 3. Two pivotal trials in venous leg ulcers are now recruiting, while TR Pro+® brings the same active ingredient to aftercare.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Wound care experts, <em>from bench to clinic.</em></h2></div><p data-r>Tissue Repair is led and advised by scientific and medical experts with experience across clinical development and commercialisation, including specialists in insoluble β-glucans from research, clinical trials and manufacturing.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Listed</span><p data-r>Tissue Repair Ltd trades on the Australian Securities Exchange as TRP.</p></div>'+
    '<div><span class="lab kick" data-r>US subsidiary</span><p data-r>TR Therapeutics, Inc. sponsors the clinical trials in the United States.</p></div>'+
    '<div><span class="lab kick" data-r>Published</span><p data-r>Phase 2B aesthetic results in Dermatologic Surgery, December 2022.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From Phase 2B <em>to Phase 3.</em></h2></div><p data-r>The latest milestones in the TR987® programme, from the public trial registry and the peer-reviewed literature.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, partners, clinicians and distributors</span>'+
   '<h2 class="big split">Talk to <em>Tissue Repair.</em></h2>'+
   '<p class="sub" data-r>Whether you are following the Phase 3 programme, exploring distribution of TR Pro+® or would like to partner on Glucoprime®, we would like to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Tissue Repair '+ARR+'</a><a class="btn" href="#/pipeline">See the trials</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Tower A, Level 9, The Zenith<br>821 Pacific Highway<br>Chatswood NSW 2067, Australia</p></div>'+
    '<div><span class="lab" data-r>General enquiries</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+611300417684">1300 417 684</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>821 Pacific Highway<br>Chatswood NSW 2067</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Advanced therapies for chronic and acute wound healing, across medical and aesthetic care.</div>'+
  '</div>'+logoSvg("bigsvg")+
  '<div class="legal"><span class="lab">© 2026 Tissue Repair Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",how:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Tissue Repair — wound healing led by the skin's own immune system",x:"Home"};
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
