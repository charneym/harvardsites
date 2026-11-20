/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function cols(L,cls){return '<div class="plat '+cls+'">'+L.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function prodRows(){return '<ul class="pfr path">'+PRODUCTS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p>'+(c[3]?'<a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' on Innovate UK Business Connect">Source '+ARR+'</a>':'<span></span>')+'</li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Digital health for Parkinson’s<span class="nomob"> · London</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Parkinson’s care,</span><span class="l">measured</span><span class="l"><em>objectively.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Proprietary wearables and AI algorithms that objectively quantify Parkinsonian motor symptoms in and out of the clinic, starting with StimSense, the automated assessment tool for DBS programming.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/stimsense">How StimSense works '+ARR+'</a><a class="btn" href="#/technology">The wearable</a></div></div>'+
   '<span class="lab cap">The SERG assessment app in use · SERG Technologies</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our vision</span>'+
   '<h2 class="txt" id="mani">Parkinson’s is a difficult disease to manage: symptoms change with progression, and therapies grow more complex over time. <b class="w0">SERG brings together experts in bio-mechatronics and clinical neurology to measure those symptoms objectively,</b> <em>so each patient gets a care plan tailored to their needs.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">12M</span><span class="k">People live with Parkinson’s worldwide</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10–15k</span><span class="k">People with Parkinson’s receive a DBS system every year, worldwide</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4–5 h</span><span class="k">To program one DBS stimulator without StimSense: often one patient per clinician per day</span></div>'+
   '</div>'+
   '<span class="lab sub-l pr" data-r>The SERG platform</span>'+
   cols(PILLARS,"p4")+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">StimSense</span><h2 class="d3">DBS works. <em>Programming it shouldn’t take all day.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Stimulate</span><span>Sense</span><span>Score</span><span>Program</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The stimulator.</h2><p>Deep brain stimulation delivers an inhibitory current to the parts of the brain affected by Parkinson’s. Every lead must be programmed, and reviewed as symptoms change.</p></article>'+
     '<article class="step"><h2>The sensors.</h2><p>Two IMU-MMG wearables capture the patient’s motion and muscle activity during each test, and stream it wirelessly to the application.</p></article>'+
     '<article class="step"><h2>The score.</h2><p>StimSense’s AI algorithms, calibrated on specialist scoring, turn the signals into objective scores for tremor, bradykinesia and rigidity.</p></article>'+
     '<article class="step"><h2>The programme.</h2><p>With algorithmic search, the scores guide the next setting automatically: full automatic programming in under 90 minutes in the pilot study.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="evidence" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pilot study and evidence</span><h2 class="d2 split">Tested inside live <em>DBS programming sessions.</em></h2></div><p data-r>SERG completed a pilot study with Boston Scientific to test StimSense in live programming sessions, evaluating its impact on session efficiency, decision making and clinical outcomes.</p></div>'+
   cols(RESULTS,"p3")+
   '<p class="ack" data-r>Study SERG ONE DBS, sponsored by SERG Technologies (REC reference 24/YH/0216): a mechanomyography sensor platform for DBS parametrisation, with settings explored by the StimSearch algorithm developed by Boston Scientific.</p>'+
  '</div></section>'+

  '<section class="sec light" id="tech" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Development</span><h2 class="d2 split">Wearable <em>and software.</em></h2></div><p data-r>A proprietary sensing suite and the software around it, built on research from Imperial College London’s Biomechatronics Lab, with early trials run alongside Charing Cross and St George’s hospitals.</p></div>'+
   prodRows()+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineers and neurologists, <em>one team.</em></h2></div><p data-r>The SERG team and the advisory board that guides its clinical work.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Insights</span><h2 class="d2 split">From Würzburg <em>to the clinic.</em></h2></div><p data-r>The latest from SERG Technologies and StimSense.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Objective scores, <em>every session.</em></h2>'+
   '<p class="sub" data-r>For StimSense, clinical studies or partnerships, write to the SERG Technologies team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Visit us</span><p data-r><span class="bl">124 Barlby Road, North Kensington</span><span class="bl">London W10 6BL</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+442031050903">0203 105 0903</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Visit us</span>124 Barlby Road, North Kensington<br>London W10 6BL<br>Company no. 11844476</div>'+
   '<div class="c"><span class="lab">Get in touch</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+442031050903">0203 105 0903</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/stimsense">StimSense</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/insights">Insights</a></div>'+
   '<div class="c"><span class="lab">Follow</span><a class="ul" href="https://www.linkedin.com/company/serg-technologies/" target="_blank" rel="noopener">LinkedIn</a><br><a class="ul" href="https://www.instagram.com/serg_technologies/" target="_blank" rel="noopener">Instagram</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Inter Tight\',system-ui,sans-serif;font-weight:400;font-size:56px;letter-spacing:.01em">SERG Technologies</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 SERG Technologies Ltd</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",stimsense:"story",evidence:"evidence",technology:"tech",team:"team",insights:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"SERG Technologies — StimSense and wearable sensing for Parkinson’s care",x:"Home"};
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
