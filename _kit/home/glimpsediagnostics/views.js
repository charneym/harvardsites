/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk">'+esc(c[6])+'</span></li>'}).join("")+'</ul>'}
function founder(){return '<div class="fdr"><figure class="fdr-p" data-r><img src="founder.webp" alt="Dr. Courtney Hill, founder and CEO of Glimpse Diagnostics" width="720" height="900" loading="lazy"></figure>'+
  '<div class="fdr-t"><span class="lab kick" data-r>Founder and CEO</span><h3 data-r>Courtney Hill, MD</h3>'+
  '<p class="fdr-q" data-r>During more than a decade as a physician, Dr. Courtney Hill saw the pain, stress and worry that children and their families went through with ear infections.</p>'+
  '<p data-r>An inventor and board-certified pediatric ear, nose and throat surgeon, she founded Glimpse to merge science and technology for the little ones, with a passion for increasing both access to care and quality of care. She leads the company\'s NIH-funded research as principal investigator.</p>'+
  '<a class="btn" href="'+LI+'" target="_blank" rel="noopener" data-r>Glimpse on LinkedIn '+ARR+'</a></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Little ears and families","No waiting rooms or frantic juggling for a same-day appointment. With the otoscope kit, a smartphone and a telemedicine appointment, parents capture an eardrum image at home.",'<path d="M10 28 28 12l18 16"/><path d="M15 24v20h26V24"/><circle class="f" cx="28" cy="34" r="3"/><path class="a" d="M24 44v-6h8v6"/>'],
  ["Providers and health systems","Classification results in a minute or less help streamline diagnosis, so more young patients can be seen virtually, and the platform can also support imaging and interpretation in clinic.",'<rect x="10" y="14" width="36" height="24"/><path d="M6 44h44"/><ellipse class="a" cx="22" cy="26" rx="5" ry="6"/><path d="M32 22h9M32 28h7"/>'],
  ["Health plans","Helping providers avoid misdiagnosis and unnecessary prescriptions in pediatric ear care, which may lower costs while improving outcomes and satisfaction.",'<path d="M28 10 44 16v12c0 9-7 15-16 18-9-3-16-9-16-18V16Z"/><path class="a" d="M21 28l5 5 9-10"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>What the platform is built on</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From glimpsediagnostics.com and the public NIH award record. Glimpse\'s products are in development and not available for purchase.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Pediatric ear care<span class="nomob"> · Minneapolis</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">At-home care</span><span class="l"><em>for little ears.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Glimpse Diagnostics pairs a pediatric otoscope speculum with AI, so a family can take an eardrum image at home and a telehealth provider can treat ear pain without a trip to the clinic.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How it works '+ARR+'</a><a class="btn" href="#/research">The research</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why ears</span>'+
   '<h2 class="txt" id="mani">Ear pain is the number one reason young children see a doctor. Virtual care could help, but without an ear exam at home, ear pain is often <em>left out of it.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">30M+</span><p class="k">US pediatric visits each year for otitis media, the ear infections and fluid that cause ear pain</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">92.5%</span><p class="k">Image classification accuracy reported for the Glimpse AI</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">≤1 min</span><p class="k">From eardrum image to classification result, ready to send to the healthcare provider</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the platform works</span><h2 class="d3">From the sofa <em>to a diagnosis.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Capture</span><span>Classify</span><span>Diagnose</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>An eardrum image, at home.</h2><p>Families use the easy-to-use otoscope kit with their own phone. The pediatric speculum fits a little ear and lights the eardrum, and the phone captures the image.</p></article>'+
     '<article class="step"><h2>Read by AI in a minute.</h2><p>OtoDL™ classifies the image in a minute or less, with 92.5% image classification accuracy reported by Glimpse, trained on the kind of images parents can take at home.</p></article>'+
     '<article class="step"><h2>A provider makes the call.</h2><p>The result goes to the healthcare professional on the telemedicine visit, who gives the diagnosis and a treatment recommendation: faster from symptom to treatment, without the waiting room.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Platform</span><h2 class="d2 split">One ear exam, <em>three ways it helps.</em></h2></div><p data-r>The Glimpse Ear Platform is designed to enhance and expand pediatric ear care in telehealth: a proprietary pediatric otoscope speculum and AI image classification, made for families and healthcare providers to use together.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">From diagnosis <em>to treatment.</em></h2></div><p data-r>NIH-funded programmes take Glimpse from reading the eardrum, through FDA clearance, towards the first point-of-care treatment for the fluid behind it.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded by a <em>pediatric ENT surgeon.</em></h2></div><p data-r>Glimpse was started in Minneapolis by a surgeon who spent years seeing what ear pain costs children and families, and set out to bring the ear exam home.</p></div>'+
   founder()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NIH SBIR awards from the National Institute of Biomedical Imaging and Bioengineering and the National Institute on Deafness and Other Communication Disorders.</p></div>'+
    '<div><span class="lab kick" data-r>Recognition</span><p data-r>MN Cup division winner, LifeScience/Health IT; P&amp;G Ventures CES Innovation Challenge finalist; a Women-Led Startup Prize.</p></div>'+
    '<div><span class="lab kick" data-r>Support</span><p data-r>An Acceleration Station™ service grant from Diversified Plastics, Inc., announced through Medical Alley.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards, grants <em>and press.</em></h2></div><p data-r>The latest from Glimpse, the press and the NIH record.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Families, providers, health plans and partners</span>'+
   '<h2 class="big split">Keep an ear <em>to the ground.</em></h2>'+
   '<p class="sub" data-r>Whether you care for little ones, run a telehealth service, or want to partner on the road to FDA clearance, Glimpse would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+FORM+'" target="_blank" rel="noopener">Send Glimpse a message '+ARR+'</a><a class="btn" href="#/how">How it works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Glimpse Diagnostics<br>Minneapolis, Minnesota<br>USA</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
    '<div><span class="lab" data-r>Regulatory</span><p data-r>Glimpse is working towards FDA clearance. Until OtoDL™ AI is cleared, it is not available for purchase.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Minneapolis, Minnesota<br>USA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/platform">Platform</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platform</span>Glimpse Ear Platform · OtoDL™ AI · pediatric otoscope speculum</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Poppins\',Arial,sans-serif;font-weight:300;font-size:58px;letter-spacing:.06em">glimpse</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Glimpse Diagnostics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",how:"story",platform:"platform",research:"research",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Glimpse Diagnostics — at-home care for little ears",x:"Home"};
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
