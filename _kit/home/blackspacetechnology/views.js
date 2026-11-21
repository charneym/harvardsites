/* ================= VIEWS (home only: Technology / Products / Research / Company open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(L){return '<ul class="pfr">'+L.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Mobile telemedicine<span class="nomob"> · Birmingham, UK</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Specialist care,</span><span class="l"><em>carried to</em></span><span class="l"><em>the patient.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Black Space Technology builds rugged, hardware-agnostic telemedicine on Android, and now, with Birmingham City University and Innovate UK, a portable AI slit lamp for eye care far from the clinic.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How SIGHT-AI works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>A slit lamp biomicroscope, the eye examination instrument SIGHT-AI makes portable.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Since 2018</span>'+
   '<h2 class="txt" id="mani">Software first and hardware agnostic: one Android platform, configured to the local service and its language, that <em>brings the clinician to wherever the patient is.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1,000</span><p class="k">NHS ambulances that ran the team’s earlier electronic patient record</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30,000</span><p class="k">Cases a week handled on that ambulance EPR deployment</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10,000+</span><p class="k">Elderly patients, average age 75, on the team’s Android home telehealth</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Land, sea and air</span><p data-r>In use internationally by intergovernmental, non-governmental, civilian and military customers, wherever care has to travel.</p></div>'+
    '<div><span class="lab kick" data-r>Accredited</span><p data-r>Built under ISO 13485 and ISO 9001, certified to Cyber Essentials Plus, GDPR compliant and air accredited to RTCA DO-160G.</p></div>'+
    '<div><span class="lab kick" data-r>Clinically founded</span><p data-r>Born out of the research and development of a leading NHS trust; the team has deployed mobile technology in the NHS since 2005.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How SIGHT-AI works</span><h2 class="d3">An eye examination, <em>wherever the patient is.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Capture</span><span>Analyse</span><span>Review</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A slit lamp that fits in a kit.</h2><p>A compact, 3D-printed digital slit lamp connects to an Android device. Built for any current or future handset, it is affordable to produce and scales to resource-limited settings.</p></article>'+
     '<article class="step"><h2>AI checks every image.</h2><p>Image analysis confirms each capture is good enough to diagnose from, then identifies and flags abnormalities, for early detection of eye diseases such as cataract and glaucoma.</p></article>'+
     '<article class="step"><h2>A specialist, remotely.</h2><p>Images are compressed and encrypted, sent to a cloud server even over limited bandwidth, analysed in real time, and reviewed by clinicians who diagnose and monitor patients without the journey.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">One device, <em>many missions.</em></h2></div><p data-r>The Rapid platform configures one Android core for the mission, with wireless and USB point-of-care devices from vital-sign monitors to ultrasound, laryngoscope and defibrillator.</p></div>'+
   rows(PROD)+
  '</div></section>'+

  '<section class="sec dark" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">Closing the gap <em>in eye care.</em></h2></div><p data-r>SIGHT-AI, Slit-lamp Innovation for Global Health Telemedicine using AI, is an Innovate UK collaborative research and development project with Birmingham City University.</p></div>'+
   '<dl class="facts">'+
    '<div><dt class="lab" data-r>Programme</dt><dd data-r>Innovate UK, Collaborative R&amp;D, grant 10150077</dd></div>'+
    '<div><dt class="lab" data-r>Partners</dt><dd data-r>Black Space Technology Limited, with Birmingham City University</dd></div>'+
    '<div><dt class="lab" data-r>Timeline</dt><dd data-r>June 2025 to August 2026</dd></div>'+
    '<div><dt class="lab" data-r>Value</dt><dd data-r>£385,653 for the project</dd></div>'+
    '<div><dt class="lab" data-r>Goal</dt><dd data-r>Give clinicians and health workers in remote and underserved regions affordable, portable diagnostic tools, with less travel and earlier care.</dd></div>'+
   '</dl>'+
   '<p class="crq" data-r><a class="lk" href="'+GTR+'" target="_blank" rel="noopener">The project on UKRI Gateway to Research '+ARR+'</a></p>'+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">Clinically founded, <em>built to deploy.</em></h2></div><p data-r>An agile technology and service business that has designed, built, trained and supported medical software in pre-hospital care, civilian and military, in the UK and abroad.</p></div>'+
   '<ul class="prn">'+
    '<li><span class="lab" data-r>01</span><h3 data-r>Familiar hardware</h3><p data-r>The most appropriate, easy-to-use devices for each end user’s needs.</p></li>'+
    '<li><span class="lab" data-r>02</span><h3 data-r>Open access</h3><p data-r>Incident and patient data in the cloud, on any platform with an internet connection.</p></li>'+
    '<li><span class="lab" data-r>03</span><h3 data-r>Configurable</h3><p data-r>Architected for high levels of configuration and customisation, including language.</p></li>'+
    '<li><span class="lab" data-r>04</span><h3 data-r>Fast to deploy</h3><p data-r>Runs over existing communication systems, with in-field updates by remote access.</p></li>'+
   '</ul>'+
   '<span class="lab sub-l" data-r>Leadership</span>'+team()+
   '<div class="bk"><span class="lab kick" data-r>Certified and approved</span><p class="cr" data-r><span>ISO 9001</span><i>·</i><span>ISO 13485</span><i>·</i><span>Cyber Essentials Plus</span><i>·</i><span>RTCA DO-160G</span><i>·</i><span>NHS Data Security standards exceeded</span><i>·</i><span>Crown Commercial Service frameworks</span><i>·</i><span>Medilink Midlands member</span></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Health services, partners and researchers</span>'+
   '<h2 class="big split">Take care <em>further.</em></h2>'+
   '<p class="sub" data-r>Planning remote care, a telehealth service or a pilot of SIGHT-AI? Write to the team, or visit us in Brindley Place, Birmingham.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/technology">How SIGHT-AI works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Visit</span><p data-r><span>10X Spacemade, 10 Brindley Place</span><br><span>Birmingham B1 2JB</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+441212747171">+44 (0)121 274 7171</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>10 Brindley Place,<br>Birmingham B1 2JB</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+441212747171">+44 (0)121 274 7171</a></div>'+
   '<div class="c"><span class="lab">Products</span>Rapid-EPR<br>Rapid-MCI<br>Rapid-ACE<br>SIGHT-AI</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Barlow Semi Condensed\',system-ui,sans-serif;font-weight:600;font-size:50px;letter-spacing:.05em"><tspan fill="#f4f0eb">BLACK SPACE </tspan><tspan fill="#e85d26">TECHNOLOGY</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Black Space Technology Ltd · No. 11211307</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",products:"products",research:"research",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Black Space Technology — mobile telemedicine, Birmingham, UK",x:"Home"};
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
