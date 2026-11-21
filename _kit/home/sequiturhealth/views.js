/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function prodRows(){return '<ul class="pfr path">'+PRODUCTS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+', public record">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Whole-blood metabolic measurement<span class="nomob"> · Scottsdale, Arizona</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">One drop of blood,</span><span class="l">measured</span><span class="l"><em>at home.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>For people living with rare metabolic disorders, a metabolite building up in the blood can bring on a crisis. There is no home device to measure it today; Sequitur Health is bringing one to market that works from a single drop of whole blood.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/programmes">Our programmes '+ARR+'</a><a class="btn" href="#/technology">How it works</a></div></div>'+
   '<span class="lab cap">Render · a drop of whole blood on a single-use sensor</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">Today the metabolite that drives these crises can only be measured in a clinical laboratory, from plasma spun out of the blood. <b class="w0">Sequitur measures it directly in whole blood, at the point of care.</b> <em>To improve patient care and quality of life.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 drop</span><span class="k">Of whole blood is all the sensor needs, with no centrifuge and no plasma separation</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt;0.99</span><span class="k">Correlation with the clinical laboratory reference across 60 whole-blood samples (NSF Phase I)</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.0M</span><span class="k">NIH NICHD Commercialization Readiness funding for the year, awarded August 2026</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">From a fingertip <em>to a result.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Drop</span><span>Sensor</span><span>Reader</span><span>Result</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The drop.</h2><p>A single drop of whole blood goes onto a consumable, single-use sensor, at home or at the bedside. No tube, no centrifuge.</p></article>'+
     '<article class="step"><h2>The sensor.</h2><p>Inside the multilayer sensor, modified materials keep out the blood components that would confound the reading, so the metabolite is measured directly in whole blood.</p></article>'+
     '<article class="step"><h2>The reader.</h2><p>The sensor goes into a compact reader. The design-locked instrument has passed basic safety and essential performance testing at an FDA ASCA-accredited laboratory.</p></article>'+
     '<article class="step"><h2>The result.</h2><p>An elevated result tells the patient to contact their medical team, so known, effective treatments can start in time to prevent or treat a metabolic crisis.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="programmes" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">From the laboratory <em>to the home.</em></h2></div><p data-r>Sequitur’s work is supported by the National Institutes of Health and the National Science Foundation, from the first sensor materials to the device patients will use at home.</p></div>'+
   prodRows()+
   '<div class="fig" data-r><div><span class="v">~10,000</span><span class="k">people in the US live with these rare metabolic disorders, the first users of a home device</span></div><div><span class="v">1 in 3,500</span><span class="k">newborns has one of these disorders; the same measurement could support newborn screening</span></div></div>'+
   '<p class="ack" data-r>Research reported here is supported by the Eunice Kennedy Shriver National Institute of Child Health and Human Development of the National Institutes of Health (R44HD107897, R44HD112243, SB1HD116629) and the National Science Foundation (1914240, 2111884). AMGO is for research use only.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineering and medicine, <em>side by side.</em></h2></div><p data-r>A small team developing the device with Arizona State University and Mayo Clinic, and studying it with patients at Oregon Health &amp; Science University.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Seven years <em>of SBIR support.</em></h2></div><p data-r>Awards and milestones from Sequitur Health, with links to the public records.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, researchers and partners</span>'+
   '<h2 class="big split">Measure what matters, <em>where it matters.</em></h2>'+
   '<p class="sub" data-r>For AMGO performance data and quotes, research collaborations or partnerships, write to Sequitur Health.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span class="bl">Sequitur Health Corp.</span><span class="bl">Scottsdale, Arizona</span></p></div>'+
    '<div><span class="lab" data-r>Research products</span><p data-r><span class="bl">AMGO™, for research use only</span><a class="ul" href="https://sequiturhealth.com/amgo" target="_blank" rel="noopener">sequiturhealth.com/amgo</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Sequitur Health Corp.<br>Scottsdale, Arizona</div>'+
   '<div class="c"><span class="lab">Supported by</span>NIH NICHD<br>National Science Foundation</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Jost\',system-ui,sans-serif;font-weight:400;font-size:58px;letter-spacing:.12em">SEQUITUR</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Sequitur Health Corp.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",programmes:"programmes",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Sequitur Health — whole-blood metabolic measurement from a single drop, at home and at the point of care",x:"Home"};
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
