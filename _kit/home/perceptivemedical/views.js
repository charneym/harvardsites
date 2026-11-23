/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function trialRows(){return '<ul class="pfr trials">'+TRIALS.map(function(m){
  return '<li><span class="lab tg">'+esc(m[0])+'</span><h3>'+esc(m[2])+'<span class="loc">'+esc(m[1])+'</span></h3><p>'+esc(m[3])+'</p><a class="lab lk" href="'+m[4]+'" target="_blank" rel="noopener">Paper '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Impactful","Improve patient care in clinically validated and measurable ways: less time in hypotension, the one modifiable factor linked to perioperative myocardial injury.",'<path d="M28 46C18 38 8 30 8 20a10 10 0 0 1 20-3 10 10 0 0 1 20 3c0 10-10 18-20 26Z"/><path class="a" d="M10 28h9l4-8 6 14 4-6h13"/>'],
  ["Precise","Deliver optimal outcomes through intelligent, clinician-directed therapeutics: the care team sets the blood-pressure target and the system holds the infusion to it.",'<circle cx="28" cy="28" r="19"/><circle cx="28" cy="28" r="11"/><circle class="f" cx="28" cy="28" r="3.2"/><path class="a" d="M28 3v9M28 44v9M3 28h9M44 28h9"/>'],
  ["Empowering","Elevate clinician efficiency, giving practitioners more time and energy for the most significant aspects of patient care, instead of hand-adjusting an infusion rate.",'<circle cx="28" cy="29" r="19"/><path class="a" d="M28 17v12l8 6"/><path d="M22 6h12M28 6v4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function harm(){var H=[["Acute kidney injury","About 300,000 cases a year"],["Myocardial injury","About 150,000 cases a year"],["Deaths","30,000 to 60,000 a year"],["Stroke","Tens of thousands a year"]];
  return '<div class="ev"><span class="lab kick" data-r>What low blood pressure causes</span><div><dl>'+H.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Annual estimates for hypotension in high-risk surgery and intensive care, with references, as published by Perceptive Medical. The trials above were performed and published by the UC Irvine inventors and their collaborators using the prototype system. BaroHawk is in development and is not yet approved for marketing by the FDA.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>BaroHawk™<span class="nomob"> · Closed-loop vasopressor management</span> · Newport Beach</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Blood pressure,</span><span class="l"><em>held on target.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Perceptive Medical is developing the BaroHawk™ Vasopressor Management System: it titrates vasopressor infusions to the blood-pressure target the clinician sets, in surgery and intensive care. Developed by physicians, and designated a Breakthrough Device by the FDA.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/evidence">The evidence</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The problem</span>'+
   '<h2 class="txt" id="mani">Even experienced anesthesiologists cannot hold blood pressure tightly by hand, and patients on manually adjusted vasopressors spend 10 to 15% of their time in preventable hypotension. BaroHawk is built <em>to close that gap.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">75%</span><p class="k">of ICU patients have episodes of severely low blood pressure</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5M</span><p class="k">high-risk non-cardiac surgeries a year, where hypotension remains a key preventable driver of harm</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">90%</span><p class="k">less time in hypotension with closed-loop titration after cardiac surgery (Anesthesia &amp; Analgesia, 2022)</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How closed-loop control works</span><h2 class="d3">The target is set. <em>The loop holds it.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Set</span><span>Sense</span><span>Titrate</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The clinician sets the target.</h2><p>The care team chooses the blood-pressure range each patient should stay in. The system works to that target, and the clinician stays in control of it.</p></article>'+
     '<article class="step"><h2>Pressure is read continuously.</h2><p>BaroHawk takes the patient’s continuous blood-pressure signal and tracks it against the target, so a fall is caught as it begins, not when someone next looks up.</p></article>'+
     '<article class="step"><h2>The infusion follows.</h2><p>The vasopressor rate is adjusted automatically, up and down, to bring pressure back and hold it in range. In the inventors’ trials, time in hypotension fell by about 90%.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Precision vasopressor <em>management.</em></h2></div><p data-r>Today vasopressor infusions are adjusted by hand at the bedside, one task among many. BaroHawk automates that titration with a system designed to integrate seamlessly into existing clinical infrastructure, while keeping the clinician in charge of the target.</p></div>'+
   caps()+
   '<div class="bk light-bk"><span class="lab kick" data-r>Recognition and support</span><p class="cr" data-r><span>FDA Breakthrough Device Designation</span><span>MTEC prototype acceleration grant</span><span>MedTech Innovator 2023</span><span>UCI Beall Applied Innovation</span><span>Cove Fund</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="evidence" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Evidence</span><h2 class="d2 split">Tested in <em>randomized trials.</em></h2></div><p data-r>The technology comes from the University of California, Irvine, where the inventors and their collaborators validated the closed-loop approach in the operating room and the ICU.</p></div>'+
   trialRows()+
   harm()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Developed by <em>physicians.</em></h2></div><p data-r>Perceptive Medical was founded by two anesthesiologists who saw where the evidence on harm was clear but practice lagged behind, and set out to automate the task that bedside teams find hardest to sustain.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>milestones.</em></h2></div><p data-r>Awards, abstracts and regulatory progress from Perceptive Medical and its UC Irvine partners.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Perceptive Medical.</em></h2>'+
   '<p class="sub" data-r>For more information about BaroHawk, investment opportunities or anything else, write to the team. We look forward to hearing from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="https://www.perceptivemedical.com/clinical-studies" target="_blank" rel="noopener">All studies</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r>Perceptive Medical, Inc.<br>Newport Beach, California</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Regulatory status</span><p data-r>FDA Breakthrough Device; in development, not yet approved for marketing</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Newport Beach<br>California</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/evidence">Evidence</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">BaroHawk™</span>FDA Breakthrough Device · in development, not yet approved for marketing</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 92" aria-hidden="true"><text x="500" y="70" text-anchor="middle" style="font-family:\'Jost\',Arial,sans-serif;font-weight:500;font-size:64px;letter-spacing:.24em">PERCEPTIVE MEDICAL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Perceptive Medical, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story",evidence:"evidence",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Perceptive Medical — BaroHawk™ closed-loop vasopressor management",x:"Home"};
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
