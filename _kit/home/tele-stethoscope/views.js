/* ================= VIEWS (home only: Technology / Clinical studies / Team / Publications open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[3])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Mobile phone auscultation<span class="nomob"> · Louisville, Kentucky</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Gold-standard insight</span><span class="l"><em>from an ordinary phone.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Tele-stethoscope (TSI) makes software that records heart and lung sounds on a mobile phone and models them with physics, to predict what an echocardiogram or spirometry would find where neither is at hand.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Render · a phone recording heart sounds. Research use only.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Technology</span>'+
   '<h2 class="txt" id="mani">Echocardiograms, spirometers and CT scanners are scarce where care is thin. A phone is not. TSI’s software lets the phone <em>stand in for them.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">20+</span><span class="k">Clinical studies since 2020, in four hospital systems</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50×</span><span class="k">Faster recording on a phone than on the leading digital stethoscope</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$406K</span><span class="k">NHLBI SBIR award, July 2026, for remote and rural chronic disease detection</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>mHealth</span><p data-r>Diagnostic devices that proxy gold standards: echocardiogram, spirometry, MRI/CT, PCR and certain blood labs, from a phone.</p></div>'+
    '<div><span class="lab kick" data-r>Smarter devices</span><p data-r>The same software extracts time-series markers from auscultation, PPG, near-infrared, thermography, Doppler and ECG.</p></div>'+
    '<div><span class="lab kick" data-r>Prediction</span><p data-r>Future health states as a trajectory from each patient’s own data. In clinical study it predicted low birth weight early in pregnancy.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Sound in, <em>physics out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Record</span><span>Reconstruct</span><span>Read out</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A phone on the chest.</h2><p>Held over the heart or a lung field, an ordinary phone records at very high speed and picks up infrasonic sound. No extra hardware, no gels, and simple enough for self-examination.</p></article>'+
     '<article class="step"><h2>The turbulence, reconstructed.</h2><p>TSI models the hemodynamic and pneumodynamic turbulence in each recording with computational nonlinear dynamics: a locked, physics-based method rather than an iterative neural network, built to hold up to noise, BMI and skin color.</p></article>'+
     '<article class="step"><h2>Read out like a gold standard.</h2><p>The markers are modeled against echocardiography, spirometry, imaging and labs, so a provider can review the result in real time and adjust the exam without a follow-up visit.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="studies" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical studies</span><h2 class="d2 split">Over twenty studies, <em>four hospital systems.</em></h2></div><p data-r>Since 2020 TSI has tested its software against gold standards in more than 20 clinical studies, funded internally and by the NIH and BARDA. Selected programs:</p></div>'+
   progs()+
   '<p class="note" data-r>The technology is early stage and for research use only. It is not FDA cleared and not yet supported by phase II clinical trials.</p>'+
   '<div class="bk"><span class="lab kick" data-r>Clinical partners and funders</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineering, physics <em>and the clinic.</em></h2></div><p data-r>TSI is led by its CEO, with Fleming Scientific as its analytics partner and clinical investigators at its partner hospitals.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Publications</span><h2 class="d2 split">Peer-reviewed, <em>study by study.</em></h2></div><p data-r>No completed patient recording has been discarded from the analysis. Recent papers and awards:</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Physicians, researchers, device makers, providers and payers</span>'+
   '<h2 class="big split">Bringing healthcare <em>to billions.</em></h2>'+
   '<p class="sub" data-r>TSI is always glad to hear from anyone who would like to collaborate or simply learn more. Write to the team through the contact form.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+FORM+'" target="_blank" rel="noopener">Contact TSI '+ARR+'</a><a class="btn" href="#/news">Read the publications</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Tele-stethoscope, Inc.<br>Louisville, Kentucky 40207</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a></p></div>'+
    '<div><span class="lab" data-r>Status</span><p data-r>Research use only<br>Not FDA cleared</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Tele-stethoscope, Inc.<br>Louisville, Kentucky</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/studies">Clinical studies</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">Publications</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a></div>'+
   '<div class="c"><span class="lab">Note</span>Research use only.<br>Not FDA cleared.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 74" aria-hidden="true"><text x="450" y="60" text-anchor="middle" style="font-family:\'Manrope\',system-ui,sans-serif;font-weight:700;font-size:80px;letter-spacing:-.02em"><tspan fill="#f2f6f9">Tele-stethoscope</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Tele-stethoscope, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",studies:"studies",team:"team",news:"news",publications:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Tele-stethoscope (TSI) — software that turns any mobile phone into a diagnostic device, Louisville",x:"Home"};
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
