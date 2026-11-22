/* ================= VIEWS (home only: Technology / Clinical / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(L){return '<ul class="pfr">'+L.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function mhGroup(lab,L){return '<div class="mh-group"><p class="mh-label" data-r>'+esc(lab)+'</p><ul class="mh-list">'+L.map(function(p){
  return '<li data-r><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span><span></span></div></li>'}).join("")+'</ul></div>'}
function team(){return '<section class="mh">'+mhGroup("Leadership and advisors",TEAM)+mhGroup("Clinical collaborators",CLIN)+'</section>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Neonatal monitoring<span class="nomob"> · Lake Forest, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Continuous care</span><span class="l">for the newest</span><span class="l"><em>patients.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Rekovar is developing NeoMonki, an AI-driven monitoring kit that pairs an infant wristband with a camera and automated scoring, to give NICU teams real-time insight into neonatal abstinence syndrome.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How NeoMonki works '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<p class="lab hcap" data-r>The NeoMonki infant wristband, rendered by Rekovar. Investigational device, not for commercial use.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Newborns in withdrawal are still scored by hand, with tools that are subjective and prone to examiner bias. <em>NeoMonki is built to watch continuously, and to score objectively.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">15 min</span><p class="k">How often a US newborn was diagnosed with NAS by 2019</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">80%</span><p class="k">Of opioid-exposed infants may receive medication, with its risks</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.5M</span><p class="k">NIH SBIR Phase II award from the National Institute on Drug Abuse</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Audio, visual, physiological</span><p data-r>One platform brings the wristband’s vital signs together with what the camera sees and hears at the bedside.</p></div>'+
    '<div><span class="lab kick" data-r>From the NICU to the home</span><p data-r>Continuous monitoring designed to support timely, informed decisions across clinical environments.</p></div>'+
    '<div><span class="lab kick" data-r>Quality first</span><p data-r>Designed, developed and produced under an ISO 13485:2016 quality system, certified by BSI.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How NeoMonki works</span><h2 class="d3">Every sign, <em>seen and scored.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sense</span><span>Score</span><span>Support</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A wristband that never looks away.</h2><p>A soft, wireless wearable on the infant’s wrist streams vital signs continuously, while an imaging camera on the bedside cart watches and listens for the signs of withdrawal.</p></article>'+
     '<article class="step"><h2>AI turns signals into a score.</h2><p>Rekovar’s algorithms combine audio, visual and physiological data to automate the Finnegan and Eat, Sleep, Console assessments that are scored by hand today.</p></article>'+
     '<article class="step"><h2>Real-time insight for the care team.</h2><p>Trends and scores reach a tablet app and a provider portal, so clinicians can follow each baby’s course and personalise care and dosing.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical</span><h2 class="d2 split">From the bassinet <em>to the evidence.</em></h2></div><p data-r>One kit, now in a multicenter study under central IRB approval, funded by the National Institutes of Health.</p></div>'+
   rows(PROD)+
   '<div class="bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r>'+BACK.map(function(x){return '<span>'+esc(x)+'</span>'}).join('<i>·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineers and neonatologists, <em>one mission.</em></h2></div><p data-r>Guided by engineering excellence, driven by innovation and grounded in compassion, with clinical collaborators at children’s hospitals and universities across the country.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">The latest <em>from Rekovar.</em></h2></div><p data-r>Clinical progress, certification and recognition for NeoMonki and the team behind it.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Hospitals, clinicians and partners</span>'+
   '<h2 class="big split">Better care <em>for the smallest patients.</em></h2>'+
   '<p class="sub" data-r>Running a NICU, studying NAS or investing in neonatal care? We value your questions, feedback and collaboration.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/technology">How NeoMonki works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r><span>Lake Forest, CA 92630</span><br><span>Monday to Friday, 9am to 6pm</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+19498781023">(949) 878-1023</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Lake Forest,<br>California</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19498781023">(949) 878-1023</a></div>'+
   '<div class="c"><span class="lab">Device</span>NeoMonki Neonatal<br>Monitoring Kit</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Poppins\',system-ui,sans-serif;font-size:68px;font-weight:300;letter-spacing:.06em"><tspan class="t1">RE</tspan><tspan class="t2">KOVAR</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Rekovar, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",clinical:"clinical",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Rekovar — NeoMonki, continuous AI monitoring for newborns with NAS",x:"Home"};
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
