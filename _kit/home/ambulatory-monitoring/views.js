/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* application areas (ambulatory-monitoring.com > Application Areas) */
var APPS=[
 ["Sleep studies","Motionloggers were the first commercial devices for 24-hour monitoring of activity and sleep, with the highest documented agreement with laboratory polysomnography.",AW+"/application-areas"],
 ["Drug studies","Objective, long-term measures of sleep, activity and vigilance for pharmaceutical trials, with BLE devices for remote collection.",AW+"/application-areas"],
 ["Fatigue and shift work","Actigraphy and the PVT-192 together: how people sleep, and how alert they are, on the job.",AW+"/application-areas"]];
function apps(){return '<div class="caps nwc tst">'+APPS.map(function(c){return '<div class="cap"><span class="lab" data-r>Application</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p><a class="lab lk ul" data-r href="'+c[2]+'" target="_blank" rel="noopener"><span>Bibliography</span> '+ARR+'</a></div>'}).join("")+'</div>'}
var AREAS=["Geriatrics","Nursing","Psychiatry","Pain management","ADHD","Circadian rhythm","Light and its effects","Dermatology","Sports medicine","Animal monitoring"];
function areas(){return '<div class="bk cnd"><span class="lab kick" data-r>Also used in</span><p class="cr" data-r>'+AREAS.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* software and science (ambulatory-monitoring.com > Software, How it Works, Selected Bibliography) */
var ICO={
 w:'<svg viewBox="0 0 56 56"><rect x="16" y="14" width="24" height="28" rx="4"/><path d="M22 14V6H34V14M22 42V50H34V42"/><path class="a" d="M21 28H25L27 22L30 34L32 28H35"/></svg>',
 s:'<svg viewBox="0 0 56 56"><path d="M6 44H50"/><path class="a" d="M8 20H18V36H26V20H34V36H42V28H48"/></svg>',
 c:'<svg viewBox="0 0 56 56"><circle cx="28" cy="28" r="20"/><path class="a" d="M28 16V28L36 34"/></svg>',
 b:'<svg viewBox="0 0 56 56"><path d="M12 8H38L44 14V48H12Z"/><path class="a" d="M18 24H38M18 32H38M18 40H30"/></svg>'};
var SCI=[
 ["w","Watchware","Set up and download","Initialises every Motionlogger and Sleep Watch and downloads the data over infrared or Bluetooth Low Energy."],
 ["s","ActionW","Clinical sleep scoring","Mark sleep periods, adjust them with drag-and-drop boundaries, and report the sleep variables and graphics you choose."],
 ["c","Action4","Circadian research","Autocorrelation, dichotomy index, FACE, and non-parametric variables: interdaily stability, intradaily variability, relative amplitude."],
 ["b","Bibliography","Peer-reviewed","Decades of published comparisons with polysomnography, from SLEEP’s 2003 review of actigraphy to clinical studies worldwide."]];
function sci(){return '<div class="caps svc">'+SCI.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1400" height="1210" alt="AMI Micro Motionlogger actigraph watch" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Actigraphy and ambulatory monitoring<span class="nomob"> · Ardsley, New York</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Sleep, measured</span> <span class="l">on the wrist.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Motionlogger actigraphs have the highest documented agreement with sleep laboratory polysomnography, and are used by medical centers, pharmaceutical companies, NASA and the US Department of Defense.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Ambulatory Monitoring, Inc.</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Founded on basic research</span> <span class="nw">where accelerometry</span> <span class="nw">meets physiology.</span> <em><span class="nw">The term “actigraph”</span> <span class="nw">was coined here.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">35+</span><p class="k">years as an industry leader in monitoring people in their natural environment</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30 days</span><p class="k">of continuous recording on a Motionlogger, with off-wrist detection</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100 m</span><p class="k">water resistance on the Micro Motionlogger: subjects never take it off</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the Motionlogger works</span><h2 class="d3"><span class="nw">From movement</span> <em class="nw">to sleep.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sense</span><span>Filter</span><span>Epoch</span><span>Score</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Every movement</span> <span class="nw">makes a signal.</span></h2><p>The Motionlogger accelerometer generates a voltage each time the actigraph is moved, day and night, on the wrist.</p></article>'+
     '<article class="step"><h2><span class="nw">Amplified</span> <span class="nw">and filtered.</span></h2><p>The signal is amplified and filtered by proprietary signal processing, then handled according to the mode of operation.</p></article>'+
     '<article class="step"><h2><span class="nw">Counted</span> <span class="nw">in epochs.</span></h2><p>The derived information accumulates over an epoch, typically one minute, compatible with all sleep estimation algorithms; 2-second epochs capture periodic leg movements.</p></article>'+
     '<article class="step"><h2><span class="nw">Scored as</span> <span class="nw">sleep and wake.</span></h2><p>ActionW marks the sleep periods and reports the sleep variables; Action4 analyses the circadian rhythm.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Actigraphs, vigilance</span> <em class="nw">and respiration.</em></h2></div><p data-r>Unique instruments to document long-term sleep, activity, fatigue, circadian rhythm, vigilance and respiration, and environmental light and temperature, in ambulatory subjects.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split"><span class="nw">From the clinic</span> <em class="nw">to orbit.</em></h2></div><p data-r>AMI equipment has been used in medical clinics, in orbit around the earth, under the ocean, on Mount Everest and in the sands of Desert Storm.</p></div>'+
   apps()+areas()+
  '</div></section>'+

  '<section class="sec dark" id="science" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split"><span class="nw">Not all actigraphs</span> <em class="nw">are alike.</em></h2></div><p data-r>Ask for peer-reviewed comparisons to polysomnography measured at night, with sensitivity and specificity, not just correlations. Ours are published.</p></div>'+
   sci()+
  '</div></section>'+

  '<section class="sec light" id="about" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About AMI</span><h2 class="d2 split"><span class="nw">Where the actigraph</span> <em class="nw">was named.</em></h2></div><p data-r>Founded by the late William Gruen, AMI made the first commercially available actigraphs for long-term, continuous monitoring of sleep and wake in a subject’s natural environment.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>History</span><h3 data-r>Coined with the US Army</h3><p data-r>The term “actigraph” was coined at AMI during early work with the US Army; before, activity monitors were “actimeters”.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Gold standards</span><h3 data-r>Inductotrace and PVT-192</h3><p data-r>The gold standard in respiration monitoring, and the gold standard in reaction time measurement.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>FDA 510(k) K251574</span><h3 data-r>Sleep Watch cleared</h3><p data-r>Cleared by the FDA on 31 July 2025; AMI is FDA registered (2430863). <a class="ul" href="'+K510+'" target="_blank" rel="noopener">See the FDA record</a></p></div>'+
   '</div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Questions about</span> <em><span class="nw">a Motionlogger?</span></em></h2>'+
   '<p class="sub" data-r>For information and sales, email or call us. For technical support, include the model and the software version.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Ambulatory Monitoring, Inc.<br>731 Saw Mill River Road<br>Ardsley, NY 10502</p></div>'+
    '<div><span class="lab" data-r>Information and sales</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL2+'">'+TEL2T+'</a></p></div>'+
    '<div><span class="lab" data-r>Technical support</span><p data-r><a class="ul" href="mailto:'+SUP+'">'+SUP+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>731 Saw Mill River Road<br>Ardsley, NY 10502</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/applications">Uses</a><br><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/about">About</a></div>'+
   '<div class="c"><span class="lab">Motionlogger</span>Micro Motionlogger<br>Sleep Watch 2.0<br>Zzz-Logger<br>PVT-192</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">Ambulatory</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Ambulatory Monitoring, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",products:"products",applications:"applications",science:"science",about:"about",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Ambulatory Monitoring, Inc. — Motionlogger actigraphs and ambulatory monitoring",x:"Home"};
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
