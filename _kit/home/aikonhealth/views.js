/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function specRows(){return '<ul class="pfr pipe np">'+SPECS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row mf-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["A consortium","AIKON Health leads HeartLinQ with TNO, Unitron Systems and Datacation, bringing research institutions and innovative SMEs together.",'<circle cx="16" cy="20" r="7"/><circle cx="40" cy="20" r="7"/><circle cx="28" cy="40" r="7"/><path class="a" d="M22 23L25 34M34 23L31 34"/>'],
  ["Continuous, at home","A non-invasive wearable for continuous physiological monitoring outside the hospital.",'<path d="M10 40H46M14 40V24L28 14L42 24V40"/><path class="a" d="M20 32H24L27 26L30 36L33 32H36"/>'],
  ["Earlier intervention","Physiological data turned into actionable insight, for earlier detection of deterioration and more timely clinical interventions.",'<path d="M8 40H48"/><path class="a" d="M10 34L20 30L28 32L40 16"/><circle class="f" cx="40" cy="16" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function certs(){var S=[
  ["Funding","OPZuid 2021–2027","HeartLinQ is funded under the OPZuid programme, co-financed by the European Union, to accelerate development, testing and clinical validation."],
  ["Seed round","€1.2 million","Led by the TTT Medtech programme, with the Brabant Development Agency (BOM), Brabant Startup Fonds, a Rabo Innovation Loan and TNO Ventures."],
  ["Origin","A TNO spin-off","Built on TNO wearable sensor technology, from the Brainport region, at High Tech Campus Eindhoven."]];
  return '<div class="mfs">'+S.map(function(s){return '<div class="mf-site"><span class="lab" data-r>'+esc(s[0])+'</span><h3 data-r>'+esc(s[1])+'</h3><p data-r>'+esc(s[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Remote heart failure monitoring<span class="nomob"> · High Tech Campus Eindhoven</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Heart failure care,</span><span class="l"><em>continued at home.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>AIKON Health is developing a discreet wearable, a chest sensor and an arm sensor, that tracks fluid overload, cardiac output and stroke volume after discharge, so cardiologists and nurses can titrate medication precisely and act early.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Let’s connect</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why heart failure needs it</span>'+
   '<h2 class="txt" id="mani">After discharge, heart failure patients often return to hospital, from medication that is not well titrated or not taken as recommended. Effective post-discharge care is <em>what keeps them at home.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">21M</span><p class="k">People living with heart failure</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1.35M</span><p class="k">Heart failure readmissions a year</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">25%</span><p class="k">The reduction in readmissions AIKON Health aims for</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology · continuous monitoring</span><h2 class="d3">From discharge <em>to early action.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Home</span><span>Monitor</span><span>Act</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Home from hospital.</h2><p>After treatment, a heart failure patient goes home, where fluid can build up again unnoticed and the risk of readmission is high.</p></article>'+
     '<article class="step"><h2>Measured every day.</h2><p>The chest and arm sensors track thoracic fluid, cardiac output and stroke volume continuously, comfortably enough to wear for the long term.</p></article>'+
     '<article class="step"><h2>Acted on early.</h2><p>Digital biomarkers flag early deterioration, so the cardiology team can adjust medication remotely, before the patient needs the hospital again.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="solution" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Solution</span><h2 class="d2 split">A wearable built <em>for heart failure.</em></h2></div><p data-r>A proprietary heart failure monitoring device, integrated with digital health tools, for a seamless transition from in-hospital care to care at home.</p></div>'+
   specRows()+
  '</div></section>'+

  '<section class="sec light" id="heartlinq" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>HeartLinQ</span><h2 class="d2 split">Remote care, <em>built together.</em></h2></div><p data-r>HeartLinQ is the project AIKON Health leads to develop its non-invasive wearable for continuous, remote monitoring of heart failure patients, and to validate it clinically.</p></div>'+
   caps()+
   certs()+
  '</div></section>'+

  '<section class="sec light alt" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A TNO spin-off <em>in Eindhoven.</em></h2></div><p data-r>AIKON Health was launched as a digital health spin-off of TNO, and won the Best Pre-Seed Pitch award at the HealthTech Investor Summit.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">AIKON <em>in the news.</em></h2></div><p data-r>From the TNO spin-off launch to HeartLinQ. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Cardiologists, partners and investors</span>'+
   '<h2 class="big split">Your partner in <em>heart failure care.</em></h2>'+
   '<p class="sub" data-r>Reach out to learn more about AIKON Health’s wearable at-home solution for heart failure.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email AIKON Health '+ARR+'</a><a class="btn" href="#/solution">About the solution</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>AIKON Health B.V.<br>High Tech Campus 5<br>5656 AE Eindhoven, The Netherlands</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Origin</span><p data-r>A TNO spin-off<br>Brainport Eindhoven</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>High Tech Campus 5<br>5656 AE Eindhoven, NL</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/solution">Solution</a><br><a class="ul" href="#/heartlinq">HeartLinQ</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Partners</span>TNO<br>Unitron Systems<br>Datacation</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:300;font-size:56px;letter-spacing:.2em">AIKON HEALTH</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 AIKON Health B.V.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",solution:"solution",heartlinq:"heartlinq",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"AIKON Health — heart failure care, continued at home",x:"Home"};
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
