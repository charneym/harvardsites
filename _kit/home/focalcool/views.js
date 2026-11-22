/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Minutes, not hours","FocalCool devices cool locally for short durations, on the order of minutes. Therapeutic hypothermia likely does not need to be long; it needs to be carefully timed relative to blood flow events.",'<circle cx="28" cy="30" r="18"/><path class="a" d="M28 30V18M28 30l8 5"/><path d="M22 8h12"/>'],
  ["Cold where it counts","Instead of cooling the whole body, an insulated guiding catheter carries chilled saline straight to the at-risk organ, so the tissue reaches a protective depth of cooling quickly.",'<path d="M10 46c8-4 12-14 14-24s8-16 22-16"/><path class="a" d="M14 46c8-4 12-14 14-24s8-16 22-16"/><path d="M40 4l6 2-2 6"/>'],
  ["Timed to reperfusion","Re-establishing blood flow is essential, yet the return of flow can cause as much as half of the total injury. Cooling begins before the vessel is reopened and continues after.",'<path d="M4 28h14l4-10 6 20 4-10h20"/><path class="a" d="M4 44h48"/><path d="M22 44v-6"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Precision organ cooling<span class="nomob"> · Brain &amp; heart · New Jersey</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Saving brain and</span><span class="l">heart tissue, one</span><span class="l">degree <em>at a time.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>FocalCool develops catheter-based temperature control. Our insulated guiding catheter delivers chilled saline directly to an ischemic organ, cooling tissue within minutes to protect it from reperfusion injury.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How it works '+ARR+'</a><a class="btn" href="#/research">Pre-clinical results</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why hypothermia</span>'+
   '<h2 class="txt" id="mani">Reopening a blocked artery saves tissue, but the returning blood flow can cause injury of its own. Pre-clinical and clinical data show that even a modest drop in temperature <em>can protect that tissue.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2–3°C</span><p class="k">A reduction in temperature that pre-clinical and clinical data show can provide benefit</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50%</span><p class="k">Of total injury can come from reperfusion, when blood flow returns to ischemic tissue</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2M+</span><p class="k">In NIH SBIR funding for FocalCool’s catheter-based cooling technologies</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Cool the brain <em>before the flow returns.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Occlusion</span><span>Cool</span><span>Reperfuse</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A clot blocks the artery.</h2><p>In a large vessel occlusion, a clot cuts off blood to a territory of the brain served by the middle cerebral artery, and an ischemic core begins to form.</p></article>'+
     '<article class="step"><h2>Chilled saline, delivered direct.</h2><p>Minutes before flow is restored, the insulated Khione catheter infuses chilled saline through the internal carotid artery, keeping the saline cold all the way to the brain.</p></article>'+
     '<article class="step"><h2>Reperfuse, protected.</h2><p>The artery is reopened while cooling continues for 20 minutes. In the canine model, infarcts in cooled animals grew 13.8% after reperfusion, against 161.3% without cooling.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Localized cooling, <em>carefully timed.</em></h2></div><p data-r>Our patented CoolGuide technology challenges the paradigms of systemic and long-duration cooling. It provides rapid localized cooling to ischemic organs, and can deliver temperature-sensitive polymers deep inside the body.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">Programmes in brain, heart <em>and beyond.</em></h2></div><p data-r>Our long-term objective is to reduce the tissue injury caused during stroke and heart attack. Pre-clinical work with leading academic teams has shown significant tissue salvage with catheter-based cooling.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec dark" id="publications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Publications</span><h2 class="d2 split">Papers <em>and grants.</em></h2></div><p data-r>The science behind the catheter, from heat-transfer models of localized tissue cooling to proof-of-concept and controlled studies in large vessel occlusion, supported by NIH SBIR grants.</p></div>'+
   news()+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">Engineers <em>and clinicians.</em></h2></div><p data-r>FocalCool was founded in November 2004 by an engineer and two doctors from the Cleveland Clinic Foundation, to develop medical devices that fully harness the therapeutic capabilities of temperature control.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Home</span><p data-r>A Rowan University startup, with lab space at the South Jersey Technology Park on the Rowan campus.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>Mostly through the NIH SBIR programme, with Phase I and Phase II awards, and actively seeking investment.</p></div>'+
    '<div><span class="lab kick" data-r>Manufacturing</span><p data-r>In 2021, VitalPath, an ISO-certified, FDA-registered maker, delivered 120 Khione guiding catheters for verification and validation testing.</p></div>'+
   '</div>'+
  '</div></section>'+
  cta();
}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Selective brain cooling, canine model</span><div><dl>'+
  [["45 min","Temporary middle cerebral artery occlusion"],["5 min","Of chilled saline infusion before flow was restored, continued for 20 minutes"],["13.8%","Infarct growth after recanalization in cooled animals, against 161.3% in controls (p = 0.016)"],["35.5%","Infarct size over area at risk with localized heart cooling, against 49.8% (p = 0.049)"]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>King et al., “Selective brain cooling with a novel catheter reduces infarct growth after recanalization in a canine large vessel occlusion model”, Interventional Neuroradiology 32(5), 2026. Heart data: FocalCool nine-animal myocardial ischemia/reperfusion study.</p></div></div>'}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnerships and investment</span>'+
   '<h2 class="big split">Talk to <em>FocalCool.</em></h2>'+
   '<p class="sub" data-r>We are actively seeking investment and external funding to bring rapid, localized cooling to patients. Clinicians, partners and investors are welcome to get in touch.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#/research">See the research</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Lab</span><p data-r>FocalCool, LLC<br>South Jersey Technology Park<br>Rowan University, New Jersey</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Latest paper</span><p data-r><a class="ul" href="'+PAPER+'" target="_blank" rel="noopener">Interventional Neuroradiology, 2026</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Lab</span>South Jersey Technology Park<br>Rowan University, NJ</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/publications">Publications</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Ischemic stroke<br>Heart attack<br>Polymer drug delivery</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 70" aria-hidden="true"><text x="450" y="58" text-anchor="middle" style="font-family:\'Archivo Black\',Arial,sans-serif;font-weight:400;font-size:74px;letter-spacing:-.01em">FocalCool</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 FocalCool, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",how:"story",technology:"technology",research:"research",publications:"publications",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"FocalCool — rapid, localized cooling catheters to protect brain and heart tissue, New Jersey",x:"Home"};
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
