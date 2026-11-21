/* ================= VIEWS (home only: Technology / Applications / Clinical / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(L){return '<ul class="pfr">'+L.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Cuff-less blood pressure<span class="nomob"> · Newton, Massachusetts</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Blood pressure,</span><span class="l"><em>every heartbeat,</em></span><span class="l">from the wrist.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ViTrack is a wearable, connected monitor that measures systolic and diastolic blood pressure continuously and non-invasively, without a cuff and without anyone pressing a button.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How ViTrack works '+ARR+'</a><a class="btn" href="#/contact">Partner with us</a></div></div>'+
   '<p class="lab hcap" data-r>ViTrack, Dynocardia’s wrist-worn cNIBP monitor</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Since 2015, with MIT and Tufts</span>'+
   '<h2 class="txt" id="mani">An arm cuff gives one reading at a time, and misdiagnoses high blood pressure about a third of the time. ViTrack reads the pressure in the artery itself, <em>continuously, beat to beat.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$5M+</span><p class="k">In NHLBI SBIR awards since 2021, plus NSF SBIR support</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30%</span><p class="k">Of hypertension diagnoses are wrong with today’s cuff readings</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1.5B</span><p class="k">People worldwide living with high blood pressure</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>No cuff, no calibration</span><p data-r>A wrist-worn device measures absolute systolic and diastolic pressure without an external calibration and without the participation of the user, caregiver or provider.</p></div>'+
    '<div><span class="lab kick" data-r>More than a number</span><p data-r>The calibrated arterial waveform also yields heart rate, respiratory patterns, arterial stiffness, cardiac output and other hemodynamic parameters.</p></div>'+
    '<div><span class="lab kick" data-r>Tested in the ICU</span><p data-r>ViTrack was compared with simultaneous arterial-line readings in critically ill patients, and held its readings through movement and abnormal rhythms.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Touch, <em>turned into images.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sensor</span><span>Force map</span><span>Pressure</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Over the radial artery.</h2><p>ViTrack sits on the wrist with its optomechanical tactile sensor resting on the skin above the radial artery, where the pulse can be felt.</p></article>'+
     '<article class="step"><h2>A force map at the micron level.</h2><p>With every beat the artery wall pushes on the tissue around it. The sensor images that skin displacement, the spatiotemporal distribution of force, continuously.</p></article>'+
     '<article class="step"><h2>Systolic and diastolic, beat to beat.</h2><p>Dynocardia’s proprietary method turns the force map into the intra-arterial pressure waveform, and from it absolute systolic and diastolic pressure for every heartbeat.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">Across the <em>continuum of care.</em></h2></div><p data-r>ViTrack is a platform technology. The same measurement can serve the hospital, the home and prevention, in different form factors.</p></div>'+
   rows(APPS)+
  '</div></section>'+

  '<section class="sec dark" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical program</span><h2 class="d2 split">Tested <em>in the clinic.</em></h2></div><p data-r>Studies with critical-care patients and outpatients with and without hypertension, including pregnancy-induced hypertension and dementia prevention, funded by the NIH and NSF.</p></div>'+
   rows(PROG)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">From MIT and Tufts <em>to the bedside.</em></h2></div><p data-r>A cardiovascular surgeon, an MIT vision scientist and engineers from the patient-monitoring industry, building accurate, continuous and ubiquitous BP monitoring.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">The latest <em>from Dynocardia.</em></h2></div><p data-r>Grants, partnerships and clinical studies for ViTrack.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, clinicians and study sites</span>'+
   '<h2 class="big split">Let’s bring ViTrack <em>to patients.</em></h2>'+
   '<p class="sub" data-r>Dynocardia is looking for partners in product development, manufacturing and commercial distribution, and for clinical study collaborators across hospitals, government and industry.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/technology">How ViTrack works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r><span>1188 Centre Street, Suite 2</span><br><span>Newton Center, MA 02459</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+16176395569">617.639.5569</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Newton,<br>Massachusetts</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/clinical">Clinical program</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+16176395569">617.639.5569</a></div>'+
   '<div class="c"><span class="lab">ViTrack</span>Continuous, non-invasive<br>blood pressure monitoring</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:\'Sora\',system-ui,sans-serif;font-weight:400;font-size:84px;letter-spacing:-.01em" fill="#f3f5fa">dynocardia</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Dynocardia, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",applications:"applications",clinical:"clinical",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Dynocardia — ViTrack continuous, cuff-less blood pressure monitoring",x:"Home"};
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
