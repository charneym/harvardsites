/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page CTAs scroll) ================= */
function aimRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'<span class="loc">'+esc(c[3])+'</span></h3><p>'+esc(c[1])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">Source</a></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Hemorrhage control training<span class="nomob"> · Houston, Texas</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Train the hands</span><span class="l">that stop</span><span class="l"><em>the bleeding.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Better Bleeding Control is developing a biofeedback hemorrhage control trainer: a manikin that bleeds like a real wound, senses the force a trainee applies, and shows in real time whether the bleeding has stopped.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How the trainer works '+ARR+'</a><a class="btn" href="#/development">The STTR programme</a></div></div>'+
   '<span class="lab cap" aria-hidden="true">Bleeding-control kit · Unsplash</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-row">'+
    '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
     '<h2 class="txt" id="mani">Uncontrolled hemorrhage remains the leading cause of preventable death in military combat. Trainees learn to stop it, but <b class="w0">skills fade, and under stress they fail.</b> <em>Most training models never tell you whether you got it right.</em></h2></div>'+
    '<div class="stats">'+
     '<div class="stat"><span class="ln2"></span><span class="v">~50%</span><span class="k">Of preventable combat hemorrhage deaths come from extremity and junctional injuries</span></div>'+
     '<div class="stat"><span class="ln2"></span><span class="v">0.5 s</span><span class="k">Target for a trainee to see the flow respond to an intervention</span></div>'+
     '<div class="stat"><span class="ln2"></span><span class="v">$320K</span><span class="k">NIH NIBIB STTR Phase I award, September 2026</span></div>'+
    '</div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Realistic bleeding</span><p data-r>A pump and a reservoir of simulated blood feed each wound through its own valve, so the manikin actively bleeds until the trainee controls it.</p></div>'+
    '<div><span class="lab kick" data-r>Objective measurement</span><p data-r>Pressure sensors in the wound bed measure the force a trainee applies, in place of an instructor’s judgement by eye.</p></div>'+
    '<div><span class="lab kick" data-r>Feedback that teaches</span><p data-r>Tactile, audio and visual cues respond to tourniquet use or direct pressure in real time, and each session produces a performance report.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">A wound that <em>answers back.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Bleed</span><span>Intervene</span><span>Sense</span><span>Feedback</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The wound bleeds.</h2><p>A self-contained reservoir in the torso feeds a pump, and a valve for each wound sets the flow, so the manikin bleeds continuously for a full training session.</p></article>'+
     '<article class="step"><h2>The trainee intervenes.</h2><p>A tourniquet above the wound, or direct pressure into it: the trainer responds to the same interventions taught in hemorrhage control courses.</p></article>'+
     '<article class="step"><h2>The sensors measure.</h2><p>Pressure sensors across the wound bed read the applied force. The Phase I goal is detection within ±5% of that force and at least 90% coverage of the wound.</p></article>'+
     '<article class="step"><h2>The feedback teaches.</h2><p>When the intervention works, the flow slows and visual and audio indicators say so, within 0.5 seconds. A performance report records the session.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="development" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Development</span><h2 class="d2 split">From prototype <em>to proficiency.</em></h2></div><p data-r>The NIH NIBIB STTR Phase I project, Advanced Biofeedback Mechanisms for Realistic Hemorrhage Control Training, refines the existing bleeding control manikin prototype in two aims.</p></div>'+
   aimRows(AIMS)+
   '<p class="ack" data-r>Research reported here is supported by the National Institute of Biomedical Imaging and Bioengineering of the National Institutes of Health under award 1R41EB038879.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="use" data-theme="dark"><div class="wrap">'+
   '<div class="two">'+
    '<div><span class="lab kick" data-r>Who it is for</span><h2 class="d2 split">Military first, <em>then everyone.</em></h2>'+
     '<p class="intro" data-r>The immediate goal is efficient, cost-effective, skill-retaining training for military use. The long-term objective is a scalable hemorrhage control trainer for peri-military and civilian populations as well.</p></div>'+
    '<dl class="facts">'+
     '<div><dt class="lab">Military</dt><dd>Hemorrhage control training with objective feedback and fewer instructor hours</dd></div>'+
     '<div><dt class="lab">Responders</dt><dd>Civilian emergency responders and public safety agencies</dd></div>'+
     '<div><dt class="lab">Institutions</dt><dd>Medical institutions that teach bleeding control</dd></div>'+
     '<div><dt class="lab">Origin</dt><dd>Born in Stop the Bleed training, tested through the NSF I-Corps program</dd></div>'+
    '</dl>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built by a <em>trauma surgeon.</em></h2></div><p data-r>A women-owned company founded on what trauma surgeons see every day: in a bleeding emergency, time is the one thing no one can control.</p></div>'+
   '<div class="lead">'+
    '<div class="lead-n"><h3>Brittany Bankhead, MD, MS, FACS</h3><span class="lab ro">Principal investigator, NIH STTR</span></div>'+
    '<div class="lead-b"><p data-r>A double-board-certified trauma and general surgeon and surgical intensivist, and Associate Professor of Surgery at the Medical University of South Carolina, previously at Texas Tech University Health Sciences Center.</p>'+
     '<p data-r>As Stop the Bleed State Champion of Texas for the American College of Surgeons Committee on Trauma, she saw the need for better hemorrhage control training, and led the team that took it through NSF I-Corps.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From I-Corps <em>to the NIH.</em></h2></div><p data-r>The milestones behind the Better Bleeding Control trainer.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Trainers, responders and partners</span>'+
   '<h2 class="big split">Stop the bleed, <em>and know it.</em></h2>'+
   '<p class="sub" data-r>For military and civilian training programmes, research collaborations or partnership on the biofeedback hemorrhage control trainer, get in touch with Better Bleeding Control.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+RPT+'" target="_blank" rel="noopener">The NIH project '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r>Houston, Texas</p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r>NIH NIBIB STTR Phase I<br>1R41EB038879</p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>Better Bleeding Control, LLC</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Houston</span>Better Bleeding Control, LLC<br>Houston, Texas</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/development">Development</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="#/contact">Get in touch</a></div>'+
   '<div class="c"><span class="lab">Support</span>Research reported here is supported by the NIH (NIBIB 1R41EB038879).</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="48" text-anchor="middle" style="font-family:\'Inter Tight\',system-ui,sans-serif;font-weight:600;font-size:52px;letter-spacing:-.01em">Better Bleeding Control</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Better Bleeding Control, LLC</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (nav items are taken over by buildout.js) ================= */
var SECS={about:"about",technology:"story",development:"development",use:"use",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Better Bleeding Control — biofeedback hemorrhage control training, Houston",x:"Home"};
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
