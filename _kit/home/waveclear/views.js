/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Acoustic, not thermal","Micro-cavitation acts on thrombus and calcified occlusion at the structural level, without thermal energy, cutting or trauma to the vessel wall.",'<path d="M8 28h6"/><path class="a" d="M18 18c4 6 4 14 0 20M25 13c6 9 6 21 0 30M32 8c8 12 8 28 0 40"/><circle class="f" cx="44" cy="28" r="3"/><circle cx="48" cy="20" r="1.6"/><circle cx="48" cy="36" r="1.6"/>'],
  ["Lytics where they work","Acoustic micro-streaming draws surgeon-specified thrombolytics into the clot matrix, so ultrasonic therapy and targeted drug infusion work in the same procedure.",'<path d="M6 22h44M6 34h44"/><path class="a" d="M14 28c6-8 14-8 20 0s14 8 20 0"/><circle class="f" cx="22" cy="28" r="2.2"/><circle class="f" cx="36" cy="28" r="2.2"/>'],
  ["Clot and calcium","Designed to safely and efficiently remove blood clots and calcification, acute and chronic, across the full lumen, even in large-diameter vessels.",'<circle cx="28" cy="28" r="20"/><circle cx="28" cy="28" r="14"/><path class="a" d="M20 18l-3 -4M36 18l3-4M18 34l-4 2M38 34l4 2"/><circle class="f" cx="28" cy="28" r="3"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function spec(){var S=[
  ["Catheter","6 French, catheter-based","A minimally invasive catheter system engineered to remove acute and chronic thrombus while preserving vessel integrity."],
  ["Energy","Over one million micro-pulses a minute","Ultrasound-driven micro-cavitation from WaveClear’s proprietary ultrasonic platform."],
  ["Rate","About 1 cm of occlusion a minute","Designed to clear occlusion in a single-session procedure, engineered for no associated blood loss."],
  ["Drug delivery","Targeted infusion during the procedure","Surgeon-specified thrombolytics delivered directly into the clot matrix, intra-procedurally."],
  ["Settings","Interventional radiology, peripheral vascular and cardiovascular","Designed across the full range of peripheral vascular disease presentations."]];
  return '<ul class="pfr spec">'+S.map(function(s){return '<li><span class="lab tg" data-r>'+esc(s[0])+'</span><h3 data-r>'+esc(s[1])+'</h3><p data-r>'+esc(s[2])+'</p></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>RESOLUTION™<span class="nomob"> Cavitation System</span> · Plymouth, Minnesota</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Clot resolution</span><span class="l">at the speed</span><span class="l"><em>of sound.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>WaveClear Vascular is developing RESOLUTION, a 6 French catheter-based thrombectomy platform that delivers more than one million ultrasonic micro-pulses a minute to disrupt and remove thrombus while preserving the vessel.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How it works '+ARR+'</a><a class="btn" href="#/system">The system</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Peripheral vascular disease affects more than 20% of people over 70. When conservative or inefficient treatment leaves thrombus behind, the residual clot can have long-term consequences. We are building cavitation technology to <em>restore flow and advance patient care.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt;1M</span><p class="k">Ultrasonic micro-pulses a minute, delivered through the catheter</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~1&nbsp;cm</span><p class="k">Of occlusion cleared a minute, by design, in a single session</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6&nbsp;Fr</span><p class="k">Catheter-based platform, engineered for no associated blood loss</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works · RESOLUTION</span><h2 class="d3">Three motions, <em>one clear vessel.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Cavitate</span><span>Stream</span><span>Sweep</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Micro-cavitation breaks the clot down.</h2><p>Millions of ultrasound-driven micro-cavitations a minute act on thrombus and calcified occlusion at the structural level, without heat, cutting or trauma to the vessel wall.</p></article>'+
     '<article class="step"><h2>Micro-streaming carries the lytic in.</h2><p>Acoustic micro-streaming recirculates thrombus in the treatment zone, reducing particle size and drawing surgeon-specified thrombolytics directly into the clot matrix.</p></article>'+
     '<article class="step"><h2>Macro-motion sweeps wall to wall.</h2><p>Large-scale oscillation of the catheter becomes a controlled forward-and-backward sweep that clears thrombus across the full lumen, even in large-diameter vessels.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Ultrasound that resolves clot <em>and spares the vessel.</em></h2></div><p data-r>WaveClear’s proprietary ultrasonic platform combines micro-cavitation, acoustic micro-streaming and controlled macro-motion, for efficient clot disruption and removal, enhanced therapeutic delivery and continuous luminal clearance, with precise control for the physician.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="system" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The system</span><h2 class="d2 split">The RESOLUTION <em>Cavitation System.</em></h2></div><p data-r>A generator console and a handheld catheter system, designed for physicians in interventional radiology, peripheral vascular and cardiovascular procedures.</p></div>'+
   spec()+
   '<div class="bk"><span class="lab kick" data-r>Licensing partners, China</span><p class="cr" data-r><span>Botong Medical Technology (Beijing) Co., Ltd.</span><span>Liaoning Langsheng MedTech Co., Ltd.</span></p></div>'+
   '<p class="tnote" data-r>RESOLUTION is not cleared for sale in the USA. It is not approved for sale in any country.</p>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Ultrasound, devices <em>and the clinic.</em></h2></div><p data-r>WaveClear’s leadership brings together decades of medical device operations and commercial experience, a founder behind more than 25 ultrasound patents, and a limb-salvage specialist guiding clinical strategy.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Partners <em>and people.</em></h2></div><p data-r>The latest from WaveClear Vascular, from licensing in China to a new Chief Medical Officer.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Physicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>WaveClear.</em></h2>'+
   '<p class="sub" data-r>Whether you treat peripheral vascular disease, want to partner on the RESOLUTION Cavitation System, or are interested in investing, we would like to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:Info@waveclear.com">Email us '+ARR+'</a><a class="btn" href="tel:+16128868068">612-886-8068</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>WaveClear Vascular, Inc.<br>Plymouth, Minnesota</p></div>'+
    '<div><span class="lab" data-r>General</span><p data-r><a class="ul" href="mailto:Info@waveclear.com">Info@waveclear.com</a><br><a class="ul" href="tel:+16128868068">612-886-8068</a></p></div>'+
    '<div><span class="lab" data-r>Media</span><p data-r>Chris Forgione<br><a class="ul" href="mailto:chrisf@waveclear.com">chrisf@waveclear.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Plymouth, Minnesota</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:Info@waveclear.com">Info@waveclear.com</a><br><a class="ul" href="tel:+16128868068">612-886-8068</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/system">The system</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Regulatory</span>RESOLUTION is not cleared for sale in the USA. It is not approved for sale in any country.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 124" aria-hidden="true"><text x="380" y="100" text-anchor="middle" style="font-family:\'Manrope\',Arial,sans-serif;font-weight:600;font-size:122px;letter-spacing:-.02em">WaveClear</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 WaveClear Vascular</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",how:"story",technology:"technology",system:"system",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"WaveClear Vascular — RESOLUTION, clot resolution at the speed of sound",x:"Home"};
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
