/* ================= VIEWS (home only: Technology / Development / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(L){return '<ul class="pfr">'+L.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'+
  '<div class="adv"><span class="lab kick" data-r>Advisors</span><p data-r>'+ADV.map(function(x){var q=x.split(" · ");return '<span>'+esc(q[0])+' <i>'+esc(q[1])+'</i></span>'}).join("")+'</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Medical device<span class="nomob"> · Newark, New Jersey</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Stimulating recovery</span><span class="l"><em>for ventilated</em></span><span class="l"><em>patients.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>XN Health is developing Phlex, a diaphragm stimulator that reaches the phrenic nerves through the trachea, so the diaphragm keeps working while a patient is on the ventilator.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How Phlex works '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<p class="lab hcap" data-r>The airway, lungs and diaphragm: the muscle Phlex brings back into every breath.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Mechanical ventilation is nothing like natural breathing. Pressure can injure the lungs, while the idle diaphragm <em>weakens with every day on the ventilator.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1.6M</span><p class="k">Americans mechanically ventilated each year</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40%</span><p class="k">Of ventilator time is spent recovering and trying to wean, by one estimate</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">80+</span><p class="k">Physician interviews behind the design, through NSF I-Corps</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Minimally invasive</span><p data-r>Stimulation is delivered through the respiratory tract, from the airway the ventilated patient already has.</p></div>'+
    '<div><span class="lab kick" data-r>Built for the ICU</span><p data-r>Phlex is designed to integrate seamlessly into the care workflow and to require little training.</p></div>'+
    '<div><span class="lab kick" data-r>Protective ventilation</span><p data-r>The aim: prevent ventilator-associated complications, improve outcomes and shorten the time to wean.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How Phlex works</span><h2 class="d3">Breathing, <em>with the diaphragm.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Ventilator</span><span>Stimulus</span><span>Diaphragm</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Pressure alone.</h2><p>Standard ventilation pushes air into the lungs under positive pressure while the respiratory muscles rest. The risks: barotrauma, poor regional ventilation and lower oxygenation, known together as ventilator-induced lung injury.</p></article>'+
     '<article class="step"><h2>A signal through the trachea.</h2><p>The phrenic nerves run down the neck to the diaphragm. Phlex stimulates them from inside the airway, through the respiratory tract, to induce a diaphragm contraction.</p></article>'+
     '<article class="step"><h2>The diaphragm moves down.</h2><p>As it contracts during the ventilator breath, the chest cavity grows and negative pressure helps fill the lungs: better regional ventilation, lower inflation pressure, and a diaphragm that keeps its strength.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="development" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Development</span><h2 class="d2 split">From the bench <em>to the bedside.</em></h2></div><p data-r>One device, developed with clinicians at the Texas Medical Center and the Mayo Clinic, and now funded by the National Science Foundation.</p></div>'+
   rows(PROD)+
   '<div class="bk"><span class="lab kick" data-r>Backed by</span><p class="cr" data-r>'+BACK.map(function(x){return '<span>'+esc(x)+'</span>'}).join('<i>·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded at <em>the bedside.</em></h2></div><p data-r>XN Health began in the Texas Medical Center’s Biodesign fellowship in 2020, when the COVID pandemic showed how badly patients needed to come off the ventilator sooner.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">The latest <em>from XN Health.</em></h2></div><p data-r>Grants, recognition and coverage of Phlex and the team behind it.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, investors and partners</span>'+
   '<h2 class="big split">Let’s get patients <em>breathing again.</em></h2>'+
   '<p class="sub" data-r>Working in critical care, respiratory therapy or medical device investment? We would be glad to talk about Phlex and where it goes next.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/technology">How Phlex works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r><span>2 Cedar Street, Floor 10</span><br><span>Newark, NJ 07102</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="https://www.linkedin.com/company/xn-health/" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Newark,<br>New Jersey</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/development">Development</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="https://www.linkedin.com/company/xn-health/" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Device</span>Phlex Diaphragm<br>Stimulator</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-size:66px;letter-spacing:.01em"><tspan font-weight="500">XN</tspan><tspan font-weight="700">health</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 XN Health, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",development:"development",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"XN Health — the Phlex diaphragm stimulator for ventilated patients",x:"Home"};
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
