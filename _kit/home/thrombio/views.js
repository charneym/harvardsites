/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Targets PI3Kβ","Professor Shaun Jackson’s team discovered that PI3Kβ is a critical regulator of platelet function and thrombosis (Nature Medicine, 2005), driving shear-dependent platelet activation (Nature Medicine, 2009).",'<circle cx="28" cy="28" r="17"/><circle class="f" cx="28" cy="28" r="4"/><path class="a" d="M28 4v8M28 44v8M4 28h8M44 28h8"/>'],
  ["A wide therapeutic window","TBO-309 inhibits arterial thrombus formation in a dose-dependent manner without causing a major increase in bleeding, a key point of difference from approved antiplatelets.",'<path d="M8 44h40"/><path class="a" d="M10 40c10 0 12-26 18-26s8 26 18 26"/><path d="M14 14v30M42 14v30"/>'],
  ["Built to combine","In preclinical models and two Phase I trials, TBO-309 could be safely combined with other antithrombotic agents, so it can be added to the stroke treatment of today.",'<circle cx="22" cy="28" r="12"/><circle class="a" cx="34" cy="28" r="12"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The need</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Limits of rtPA, the only drug approved for acute stroke, as described by ThromBio; it reaches only 10–13% of stroke patients. Trial details from ClinicalTrials.gov, NCT05363397 and NCT06813651.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>TBO-309<span class="nomob"> · A PI3K<span class="lc">β</span> antiplatelet for stroke</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Innovators</span><span class="l">in <em>stroke</em></span><span class="l"><em>therapy.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ThromBio is developing TBO-309, a novel antiplatelet drug that blocks PI3Kβ, the enzyme behind disease-causing blood clots, to advance the global standard of care for acute ischaemic stroke. It is now in two Phase II trials.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">The trials</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why TBO-309</span>'+
   '<h2 class="txt" id="mani">For more than 40 years, every clot-targeting drug tried in acute stroke risked fatal bleeding in the brain. <em>TBO-309 blocks only the abnormal clotting process, leaving healthy clotting intact.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">85%</span><p class="k">Of strokes are caused by blood clots that block blood flow to the brain</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30</span><p class="k">Years of Australian research in blood clotting and stroke behind TBO-309</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Phase II trials of TBO-309 in acute stroke, STARS and Co-STARS</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Stop the clot, <em>keep healthy clotting.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Block</span><span>Inhibit</span><span>Reflow</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A clot blocks the artery.</h2><p>More than 85% of strokes are caused by blood clots. Under the high shear of a narrowed artery, platelets are activated through the enzyme PI3Kβ and build the clot that cuts off blood flow to the brain.</p></article>'+
     '<article class="step"><h2>TBO-309 calms the platelets.</h2><p>Given intravenously with standard therapy, TBO-309 blocks PI3Kβ, a single protein inside platelets, switching off disease-causing clot growth while the body’s normal clotting ability stays intact.</p></article>'+
     '<article class="step"><h2>Blood flow returns.</h2><p>As an adjunct to thrombolysis or thrombectomy, TBO-309 aims to help dissolve the clot and stop it forming again, restoring blood flow to the brain without a major increase in bleeding.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">TBO-309: a new kind <em>of antiplatelet.</em></h2></div><p data-r>TBO-309 is an Australian drug development success story: a novel antiplatelet compound built on 30 years of research in Professor Shaun Jackson’s laboratory into how pathological blood clots form.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical trials</span><h2 class="d2 split">Two Phase II trials <em>in acute stroke.</em></h2></div><p data-r>With no new approved drug therapy for stroke in 17 years, TBO-309 is being tested as an adjunct to clot-removal treatment in stroke units across Australia.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Leadership</span><h2 class="d2 split">Leaders in <em>stroke therapy.</em></h2></div><p data-r>ThromBio’s programme is driven by international leaders in drug discovery and development, experimental biomedicine, global clinical trials and commercialisation.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Media</span><h2 class="d2 split">TBO-309 <em>in the news.</em></h2></div><p data-r>Trial milestones, publications and press coverage of ThromBio’s work.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Talk to <em>us.</em></h2>'+
   '<p class="sub" data-r>For partnering, investment, clinical or scientific questions about TBO-309, please get in touch with the ThromBio team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to ThromBio '+ARR+'</a><a class="btn" href="#/pipeline">See the trials</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r>ThromBio Holdings Pty Ltd<br>Sydney, New South Wales<br>Australia</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@thrombio.com.au</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="https://www.linkedin.com/company/thrombioholdings" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Sydney, Australia</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@thrombio.com.au</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Clinical trials</a><br><a class="ul" href="#/team">Leadership</a><br><a class="ul" href="#/news">Media</a></div>'+
   '<div class="c"><span class="lab">Lead candidate</span>TBO-309 · PI3Kβ antiplatelet for acute stroke</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Syne\',sans-serif;font-weight:600;font-size:64px">THROMBIO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ThromBio Holdings Pty Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ThromBio — innovators in stroke therapy",x:"Home"};
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
