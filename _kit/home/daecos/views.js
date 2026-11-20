/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[3])+'</i></span><div class="pnm"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[2])+'</span></div><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function leader(){return '<div class="ldr"><div class="ldr-n"><span class="lab kick" data-r>Principal investigator, NIH SBIR</span><h3 data-r>Ravindra L. Mehta, MD</h3><p class="ldr-r" data-r>Professor Emeritus of Medicine, University of California San Diego</p></div>'+
  '<div class="ldr-b"><p data-r>Dr. Mehta has spent his career on acute kidney injury in critically ill patients. He is credited with developing citrate anticoagulation for continuous renal replacement therapy, with forming the Acute Kidney Injury Network (AKIN), and with diagnostic and staging criteria for AKI.</p>'+
  '<p data-r>He co-directed the NIDDK-funded UAB-UCSD O’Brien Center for AKI Research, and is the contact principal investigator on Daecos’s PACKS-ICU award.</p></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Connects to the record","Links to electronic health records through FHIR and HL7 endpoints and takes real-time data from many patient records at once, across different EHRs and settings.",'<rect x="8" y="12" width="18" height="32"/><rect x="30" y="12" width="18" height="32"/><path class="a" d="M26 22h4M26 34h4"/>'],
  ["Runs in the cloud","Hosted on Amazon Web Services, the platform runs each patient’s data through the algorithm whenever new data arrive, or at set intervals: real-time and hospital-wide.",'<path d="M14 40h30a9 9 0 0 0-2-17.8A13 13 0 0 0 17 25a8 8 0 0 0-3 15z"/><path class="a" d="M22 34h14"/>'],
  ["Alerts the bedside team","A customisable dashboard alerts clinicians at the thresholds they set, with several ways to view each patient’s risk, so the right patients get kidney support at the right time.",'<rect x="9" y="12" width="38" height="26"/><path class="a" d="M14 30l7-8 6 5 6-9 9 12"/><path d="M22 46h12M28 38v8"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Critical care<span class="nomob"> · Clinical decision support</span> · La Jolla, CA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Kidney support,</span><span class="l">at the right</span><span class="l"><em>time.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Daecos has a validated clinical decision support platform for critically ill patients who need extracorporeal organ support, such as dialysis: it identifies patients at risk, guides and monitors treatment, and predicts outcomes, inside the electronic health record.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/programmes">Validation</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Dialysis in the ICU is highly variable. Under current criteria, over 40% of patients who receive it may not need it, while those who start late face higher mortality. Daecos helps clinicians start kidney support <em>for the right patient, at the right time.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">50%+</span><span class="k">In-hospital mortality of acute kidney injury requiring dialysis in critically ill patients</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">96 h</span><span class="k">The window in which the Daecos algorithm predicts the need for dialysis, at any point in the ICU stay</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.945</span><span class="k">AUC for predicting dialysis need within 96 hours, on external data from 80,000 ICU patients</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Demand, capacity, <em>mismatch.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Data</span><span>Mismatch</span><span>Alert</span><span>Support</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Read the record.</h2><p>The algorithm uses only 20 commonly available data points that are already in every ICU record: demographics, clinical characteristics and routine labs, taken from the EHR in real time.</p></article>'+
     '<article class="step"><h2>Weigh demand against capacity.</h2><p>It quantifies the demand placed on the kidney and the capacity it has left. When demand exceeds capacity, the patient is in mismatch: the core of Daecos’s patent-pending Demand/Capacity/Mismatch algorithm.</p></article>'+
     '<article class="step"><h2>Alert ahead of time.</h2><p>Because the score is rooted in understandable pathophysiology, it predicts the need for dialysis within 96 hours, at any point in the ICU stay, and alerts the care team at the thresholds they choose.</p></article>'+
     '<article class="step"><h2>Add capacity, close the gap.</h2><p>The algorithm also accounts for the capacity that dialysis adds, so clinicians can see when support closes the mismatch and plan care and resources around it.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Platform</span><h2 class="d2 split">Built into the <em>ICU’s workflow.</em></h2></div><p data-r>A suite of applications on one cloud platform: identify patients at risk, implement and monitor therapeutic interventions, and predict outcomes for efficient use of resources and care delivery.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="programmes" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Validation and programmes</span><h2 class="d2 split">Tested on <em>100,000+ ICU patients.</em></h2></div><p data-r>Derived in more than 20,000 ICU patients from the US, Canada and Europe, validated externally and prospectively, and now moving into the record at UC San Diego Health with NIH support.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Rooted in <em>AKI research.</em></h2></div><p data-r>The science behind Daecos comes from clinical research on acute kidney injury and kidney support in critically ill patients.</p></div>'+
   leader()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NIH NIDDK SBIR Phase I award 1R43DK146600, 2026: $314,364 for PACKS-ICU.</p></div>'+
    '<div><span class="lab kick" data-r>Collaborators</span><p data-r>The UC San Diego Center for Health Innovation, with data from three UC San Diego hospitals.</p></div>'+
    '<div><span class="lab kick" data-r>Status</span><p data-r>Proprietary and patent pending; validated across five international centres.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards and <em>publications.</em></h2></div><p data-r>The latest on Daecos and the science behind it.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Hospitals, health systems and partners</span>'+
   '<h2 class="big split">Talk to <em>Daecos.</em></h2>'+
   '<p class="sub" data-r>If you care for critically ill patients and want earlier, more consistent decisions on kidney support, Daecos would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Daecos '+ARR+'</a><a class="btn" href="#/technology">How it works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>La Jolla, CA 92037</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Developers</span><p data-r><a class="ul" href="https://daecospredictor-docs.pages.dev/docs/introduction" target="_blank" rel="noopener">Daecos Predictor docs</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>La Jolla, CA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/platform">Platform</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platform</span>Clinical decision support<br>for kidney support in the ICU</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Sora\',Arial,sans-serif;font-weight:600;font-size:60px;letter-spacing:.06em">DAECOS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Daecos</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",platform:"platform",programmes:"programmes",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Daecos — Clinical decision support for kidney support in the ICU, La Jolla, CA",x:"Home"};
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
