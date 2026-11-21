/* ================= VIEWS (home only: Technology / Studies / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(L){return '<ul class="pfr">'+L.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Closed-loop ICU glucose control<span class="nomob"> · Asheville, North Carolina</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Glucose control</span><span class="l"><em>that keeps pace</em></span><span class="l"><em>with the ICU.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>FUSION is an artificially intelligent, hospital-based, closed-loop system that adjusts intravenous insulin and dextrose every five to ten minutes, for safer glucose control and less nursing time.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How FUSION works '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<p class="lab hcap" data-r>The FUSION system: insulin and dextrose channels under one AI controller. Product render, Ideal Medical Technologies.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Ideal Medical Technologies · since 2014</span>'+
   '<h2 class="txt" id="mani">ICU nurses still prick fingers every one to two hours and key insulin doses in by hand. FUSION reads a continuous glucose monitor and <em>adjusts the infusions itself.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">87.8%</span><p class="k">Time in range 70–180 mg/dL in the first-in-human safety study</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.2%</span><p class="k">Time below 70 mg/dL in the same 24-hour meal challenge</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20 min</span><p class="k">Of nursing time a day per patient, down from one to two hours</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>FDA Breakthrough Device</span><p data-r>The FDA granted FUSION Breakthrough Medical Device designation in March 2019, and agreed in 2023 that it will reach market through the 510(k) pathway.</p></div>'+
    '<div><span class="lab kick" data-r>Biomimetic AI</span><p data-r>An expert rule-based system modelled on how the pancreas releases insulin and the liver releases glucose to keep healthy people in tight control.</p></div>'+
    '<div><span class="lab kick" data-r>For every ICU patient</span><p data-r>Stress-induced insulin resistance affects patients with and without diabetes, so safe, reliable closed-loop control can benefit the whole unit.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How FUSION works</span><h2 class="d3">A closed loop, <em>every five minutes.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sense</span><span>Decide</span><span>Infuse</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A new reading every five minutes.</h2><p>A continuous glucose monitor sends an updated glucose value to FUSION’s AI-based control software every five minutes, in place of a finger-stick every one to two hours.</p></article>'+
     '<article class="step"><h2>Read the range and the trend.</h2><p>The software weighs the current glucose against the range the physician prescribed, such as 100–140 mg/dL, the rate of change, and the weight-based insulin and dextrose rates already running.</p></article>'+
     '<article class="step"><h2>Insulin and dextrose, adjusted.</h2><p>Every five to ten minutes FUSION resets the two infusion rates, keeping up with the patient’s changing glucose to avoid both hypoglycemia and hyperglycemia while keeping variability low.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Built for the <em>bedside.</em></h2></div><p data-r>FUSION controls intravenous insulin and dextrose from one hospital-based system, starting with glucose; future versions may also manage osmolality, intravascular volume and blood pressure.</p></div>'+
   rows(TECH)+
  '</div></section>'+

  '<section class="sec dark" id="studies" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Studies</span><h2 class="d2 split">Tested in silico, <em>in the lab, in people.</em></h2></div><p data-r>From a 2010 review of the body’s own glucose control to simulation, animal and first-in-human studies, with clinical work led at Emory University under FDA investigational device exemptions.</p></div>'+
   rows(STUDY)+
   '<div class="bk"><span class="lab kick" data-r>Collaborators</span><p class="cr" data-r><span>North Carolina Biotechnology Center</span><i>·</i><span>National Institutes of Health</span><i>·</i><span>Emory University</span><i>·</i><span>Velentium</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Intensive care <em>meets engineering.</em></h2></div><p data-r>An ICU physician who has worked on glucose control since 2007, and an electrical engineer who built the simulation platform behind FUSION’s software.</p></div>'+
   team()+
   '<div class="adv"><span class="lab kick" data-r>Clinical studies</span><p data-r><span>Francisco Pasquel, MD, MPH</span><i>· principal investigator, Emory University School of Medicine</i></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">The latest <em>from IMT.</em></h2></div><p data-r>Regulatory milestones, clinical studies and investor meetings on the way to bringing FUSION to the ICU.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Hospitals, investigators and investors</span>'+
   '<h2 class="big split">Closed-loop control, <em>for every ICU bed.</em></h2>'+
   '<p class="sub" data-r>Interested in the FUSION system, the clinical studies ahead or working with Ideal Medical Technologies? Write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/how">How FUSION works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span>Asheville, North Carolina</span><br><span>28804, United States</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Current study</span><p data-r><a class="ul" href="'+CT+'" target="_blank" rel="noopener">NCT07646067</a><br><span>ClinicalTrials.gov</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Asheville,<br>North Carolina</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/studies">Studies</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">FUSION</span>Closed-loop glucose control<br>FDA Breakthrough Device<br>Investigational device</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:\'Manrope\',system-ui,sans-serif;font-weight:600;font-size:60px;letter-spacing:.06em"><tspan fill="#9ccb5e">IDEAL</tspan><tspan fill="#86bccd" dx="18">MEDICAL</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Ideal Medical Technologies, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",how:"story",technology:"technology",studies:"studies",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Ideal Medical Technologies — FUSION closed-loop ICU glucose control, Asheville, NC",x:"Home"};
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
