/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Fixed tissue wears out","Today’s biological valves are animal tissue cross-linked with glutaraldehyde to stop rejection. Fixed tissue can’t be repopulated or renewed: chronic immune attack and calcification limit it to about ten years in adults, and in children 35 to 85% need another operation after six to seven years.",'<path d="M8 44h40"/><path class="a" d="M14 40c4-14 8-22 14-22s10 8 14 22"/><path d="M20 30l4 4M30 26l3 5M36 32l-4 3"/><circle class="f" cx="28" cy="14" r="2.4"/>'],
  ["Remove the trigger, not the tissue","The patented SPEAR Process (Solubilization-Promoted Elimination of Antigenic Residues) uses stepwise, differential solubilization to wash the antigens out of animal tissue, while the matrix stays unfixed and intact.",'<rect x="10" y="14" width="36" height="28"/><path class="a" d="M14 22c5-3 9 3 14 0s9-3 14 0M14 30c5-3 9 3 14 0s9-3 14 0"/><path d="M18 36l-3 4M28 36l0 5M38 36l3 4"/><circle class="f" cx="40" cy="10" r="2.4"/>'],
  ["A blueprint for regeneration","The result, the BARE Patch (Biocompatible and Regenerative Extracellular Matrix), is read by the body as self. The patient’s own cells move in and remodel it, so a valve made from it could grow and last a lifetime.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M16 26c4-3 8 3 12 0s8-3 12 0M16 33c4-3 8 3 12 0s8-3 12 0"/><circle class="f" cx="22" cy="20" r="2.4"/><circle class="f" cx="35" cy="38" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The SPEAR Platform</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From vivitatechnologies.com and ViVita’s NIH SBIR records (R43HL136003, R44HL164140, R43HL180206). BARE Patch products are in development and not approved for clinical use.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Regenerative biomaterials<span class="nomob"> · Heart valves</span> · Woodland, CA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A heart valve</span><span class="l">the body can</span><span class="l"><em>call its own.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ViVita’s patented SPEAR Platform removes the antigens that make the body reject animal tissue. What remains, the unfixed BARE Patch, keeps its native structure and gives the patient’s own cells a blueprint to regenerate.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How it works '+ARR+'</a><a class="btn" href="#/programs">Our programs</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">About 130,000 heart valve replacements are performed each year in the U.S. The tissue valves used today are chemically fixed, so they can’t renew themselves and fail in about ten years. ViVita makes animal tissue that <em>stays alive in the patient.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">97%</span><p class="k">Of all detectable antigens removed from animal tissue by the SPEAR Platform</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.5M</span><p class="k">NIH SBIR Phase II award, 2022, toward FDA clearance of the BARE Patch</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">U.S. patents: the SPEAR Platform and the BARE patches it makes</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The science</span><h2 class="d3">From animal tissue <em>to your own.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Remove</span><span>Keep</span><span>Regenerate</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Wash out what the immune system sees.</h2><p>The SPEAR Process applies protein chemistry, stepwise and differential solubilization, to strip the cells and the antigens from animal tissue: the known ones, like MHC and α-gal, and the unidentified, hydrophilic and lipophilic alike. Up to 97% of detectable antigens are gone.</p></article>'+
     '<article class="step"><h2>Keep the matrix exactly as it was.</h2><p>Decellularization methods disrupt the extracellular matrix and provoke inflammation and scarring. SPEAR leaves the collagen structure native and unfixed: a BARE Patch with the mechanics of the original tissue.</p></article>'+
     '<article class="step"><h2>Let the patient make it their own.</h2><p>Recognised as self, the patch avoids destructive immune attack. The recipient’s own cells move in and remodel the matrix, and the implant becomes the patient’s own tissue.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The BARE Patch</span><h2 class="d2 split">Not fixed. <em>Not rejected.</em></h2></div><p data-r>Animal-derived tissue is ideal valve material in structure and strength. The obstacle has always been the immune response to it. ViVita removes the obstacle instead of chemically locking the tissue against it.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="programs" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">From a patch <em>to a valve.</em></h2></div><p data-r>Funded by the National Heart, Lung, and Blood Institute since 2017, ViVita is taking the BARE Patch toward FDA clearance for vascular use, and toward surgical and transcatheter heart valves.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Born at UC Davis. <em>Built for the heart.</em></h2></div><p data-r>ViVita grew out of research at the University of California, Davis, where Maelene Wong pioneered the process as a graduate student. She leads the company as chief executive, with co-founder Leigh Griffiths, who runs the UC Davis cardiovascular surgery program, as chairman.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NIH SBIR awards from the National Heart, Lung, and Blood Institute in 2017, 2022 and 2025, including a $1.5 million Phase II grant.</p></div>'+
    '<div><span class="lab kick" data-r>Origins</span><p data-r>Winner of the UC Davis Big Bang! Business Competition in 2013 for a new approach to heart valve replacement.</p></div>'+
    '<div><span class="lab kick" data-r>Patents</span><p data-r>US 9,220,733 (SPEAR Platform) and US 9,827,350 (BARE patches).</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Funded, awarded, <em>in the news.</em></h2></div><p data-r>ViVita’s grants are on the public record of the National Institutes of Health, and its story has been told from UC Davis to the Sacramento business press.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Pilots, partnerships and investment</span>'+
   '<h2 class="big split">Talk to <em>ViVita.</em></h2>'+
   '<p class="sub" data-r>Help make regenerative tissues and organs a reality. ViVita would love to hear from you about pilot, partnership or investment opportunities.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email ViVita '+ARR+'</a><a class="btn" href="#/programs">See the programs</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>ViVita Technologies, Inc.<br>Woodland, California</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Research roots</span><p data-r>University of California, Davis</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Woodland, California</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platform</span>SPEAR Process<br>BARE Patch</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 70" aria-hidden="true"><text x="280" y="58" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:700;font-size:72px;letter-spacing:0">ViVita</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ViVita Technologies, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"story",platform:"platform",programs:"programs",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ViVita Technologies — Immune-compatible, regenerative biomaterials for heart valves, Woodland, CA",x:"Home"};
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
