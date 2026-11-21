/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Continuous suction","The integrated Breathing Optimization and Suction System accommodates various suction options, clearing aspirate and debris from the oral cavity and trachea throughout the intubation, without taking the scope out of the mouth.",'<path d="M20 6v22c0 8 5 13 13 13h17"/><path class="a" d="M28 6v20c0 4 2 7 6 7h16"/><circle class="f" cx="12" cy="44" r="2.4"/><circle class="f" cx="20" cy="49" r="1.8"/>'],
  ["Independent oxygen delivery","Gas flow integrated into the sleeve keeps the camera window clear and delivers oxygen on its own line, so the tracheal view stays clear for precise tube placement while the patient goes without oxygen for less time.",'<circle cx="28" cy="28" r="17"/><circle class="a" cx="28" cy="28" r="7"/><path class="a" d="M28 4v8M28 44v8M4 28h8M44 28h8"/>'],
  ["Fits the scopes you have","A single-use, custom-moulded sleeve, compatible with existing video laryngoscope platforms: economical and disposable, for emergency, perioperative and intensive care settings.",'<path d="M18 6h20v14H18z"/><path class="a" d="M22 20v12c0 8-4 14-12 18"/><path d="M34 20v12c0 8-4 14-12 18"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Airway management<span class="nomob"> · Video laryngoscopy</span> · Irvine, CA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">When seconds</span><span class="l">matter, <em>view</em></span><span class="l"><em>matters.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>IVOS Medical is developing the BOSS G4™, a single-use video laryngoscope sleeve that clears fluids from the airway and keeps the camera view clear, so clinicians can secure the airway on the first attempt.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">See how it works '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">In a soiled airway, fluids can blind a video laryngoscope’s camera, and complications such as cardiac arrest, hypoxaemia and hypotension can happen in seconds. IVOS is built to keep the view and win <em>the first pass.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">15M+</span><span class="k">Intubations performed every year in the United States</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2M+</span><span class="k">Of them performed emergently, where first-pass success matters most</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2M+</span><span class="k">Non-dilutive NIH SBIR funding from the National Heart, Lung, and Blood Institute</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">A clear view, <em>start to finish.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Obscured</span><span>Cleared</span><span>Secured</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Fluids blind the camera.</h2><p>In a soiled airway the camera view is obstructed as soon as the blade goes in. The scope comes out, the lens is wiped, the scope goes back in, and all the while the patient is apnoeic and fluids can reach the lungs.</p></article>'+
     '<article class="step"><h2>The BOSS keeps it clear.</h2><p>With the BOSS G4™ on the blade, integrated gas flow keeps the camera window clear and the suction channel removes fluids from the oral cavity, without the scope ever leaving the mouth.</p></article>'+
     '<article class="step"><h2>The tube goes in, first pass.</h2><p>With the vocal cords in clear view, the clinician places the endotracheal tube and secures the airway for ventilation, and the patient is apnoeic for only a minimal time.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The technology</span><h2 class="d2 split">The BOSS G4™: <em>see through anything.</em></h2></div><p data-r>At the heart of the sleeve is the patented Breathing Optimization and Suction System (BOSS™), exclusively licensed from UC Irvine: continuous, targeted suction and independent oxygen delivery on the blade itself.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="milestones" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Milestones</span><h2 class="d2 split">From the bedside <em>to the market.</em></h2></div><p data-r>Two airway experts saw the need during the first wave of Covid-19. Founded in 2021 at UC Irvine and its Beall Applied Innovation incubator, IVOS has been backed by the NIH at every stage since.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Airway experts, <em>75+ years of medtech.</em></h2></div><p data-r>IVOS is led by a nurse anaesthetist who brings frontline airway expertise, with device leaders from Edwards Lifesciences, Olympus and two Class II/III startups.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Licensed from</span><p data-r>The University of California, Irvine, where the BOSS was developed with the Departments of Emergency Medicine and Anesthesiology.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NIH SBIR Phase I and Phase II awards from the National Heart, Lung, and Blood Institute, and a UCI Beall Applied Innovation startup grant.</p></div>'+
    '<div><span class="lab kick" data-r>Investors</span><p data-r>Investors are invited to join IVOS Medical in reshaping emergency medical care by supporting the development of the BOSS.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards, launches <em>and voices.</em></h2></div><p data-r>The latest from IVOS Medical, its funders and the press.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>IVOS.</em></h2>'+
   '<p class="sub" data-r>Whether you manage airways, build video laryngoscopes or invest in medical devices, IVOS Medical would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email IVOS Medical '+ARR+'</a><a class="btn" href="#/technology">See the technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>UCI Beall Applied Innovation<br>5270 California Ave., Suite 200<br>Irvine, CA 92617</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19493570369">949-357-0369</a></p></div>'+
    '<div><span class="lab" data-r>Media</span><p data-r><a class="ul" href="mailto:press@ivosmedical.com">press@ivosmedical.com</a></p></div>'+
   '</div>'+
   '<p class="disc" data-r>The BOSS Sleeve is an investigational device, not yet cleared by the U.S. Food and Drug Administration, and is not available for commercial sale.</p>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Irvine, CA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/milestones">Milestones</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">The BOSS G4™</span>Investigational device<br>Not available for sale</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Figtree\',Arial,sans-serif;font-weight:800;font-size:60px;letter-spacing:-.02em">IVOS Medical</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 IVOS Medical, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",how:"story",technology:"technology",milestones:"milestones",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"IVOS Medical — The BOSS G4™ video laryngoscope sleeve for soiled airways, Irvine, CA",x:"Home"};
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
