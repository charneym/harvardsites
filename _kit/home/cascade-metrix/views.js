/* ================= VIEWS (home only: Technology / Solution / Team / News open build-out pages; Contact scrolls) ================= */
function need(){return '<ul class="pfr">'+NEED.map(function(c){return '<li><span class="lab tg">'+esc(c[1])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function miles(){return '<ol class="frs">'+MILES.map(function(a){return '<li><span class="y">'+esc(a[0])+'</span><p>'+esc(a[1])+'</p></li>'}).join("")+'</ol>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Critical care · Blood analysis<span class="nomob"> · Fishers, Indiana</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Critical blood values,</span><span class="l">measured at the bedside,</span><span class="l"><em>around the clock.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Cascade Metrix is building the AutoPlexer: an automated, patient-attached analyzer that measures lactate, glucose and hematocrit in whole blood, in a closed loop that consumes no blood.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How it works '+ARR+'</a><a class="btn" href="#/contact">Partner with us</a></div></div>'+
   '<p class="lab hcap" data-r>Illustration: a closed-loop flow cell passing blood over three sensor wells. Not the AutoPlexer itself.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>A new paradigm in critical care</span>'+
   '<h2 class="txt" id="mani">Repeated, around-the-clock blood tests for the <b class="w0">critically ill</b>, <em>run automatically at the bedside, without costing the patient blood.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">40%+</span><span class="k">Of ICU patients are hyperglycemic</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><span class="k">Analytes in the first application: glucose, lactate, hemoglobin, oxygen saturation</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.97M</span><span class="k">In NIH SBIR awards, 2022 to 2026</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Sepsis and trauma</span><p data-r>Timely lactate, with glucose and hematocrit beside it, supports early diagnosis and rapid intervention in sepsis, shock, acidosis and traumatic injury.</p></div>'+
    '<div><span class="lab kick" data-r>Tight glycemic control</span><p data-r>Appropriately timed glucose readings, without a nurse drawing each sample, make the protocols ICUs already call for achievable.</p></div>'+
    '<div><span class="lab kick" data-r>No blood lost</span><p data-r>Long-stay ICU patients become anemic from blood testing alone. The AutoPlexer returns the sample and needs no heparin infusion.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The AutoPlexer loop</span><h2 class="d3">Drawn, measured <em>and returned.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Attach</span><span>Draw</span><span>Measure</span><span>Return</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>On the central line.</h2><p>The AutoPlexer attaches to the patient’s central venous catheter, which is already in place in the critically ill, so there is no new puncture and no fingerstick.</p></article>'+
     '<article class="step"><h2>Sampled on schedule.</h2><p>Pre-programmed or on demand, the system draws blood automatically into a closed loop. No caregiver handles the sample, which removes infection-control and handling errors.</p></article>'+
     '<article class="step"><h2>Read by whole-blood sensors.</h2><p>Lactate, glucose and hematocrit are measured at once, and the trend builds reading by reading to support early diagnosis and ongoing therapy.</p></article>'+
     '<article class="step"><h2>Returned, not wasted.</h2><p>The sample goes back to the patient. No blood is lost and no anticoagulant such as heparin is infused, so testing no longer drives anemia.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="solution" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Solution</span><h2 class="d2 split">Unmet needs, <em>one platform.</em></h2></div><p data-r>Critical care depends on frequent blood measurements that today are manual, infrequent and wasteful of blood. The AutoPlexer automates them at the bedside.</p></div>'+
   need()+
  '</div></section>'+

  '<section class="sec dark" id="milestones" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Progress</span><h2 class="d2 split">From prototype <em>to the bedside.</em></h2></div><p data-r>Prototype development and preclinical validation are complete. Efforts are now under way toward inpatient trials ahead of regulatory filings.</p></div>'+
   miles()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Inventors, clinicians <em>and operators.</em></h2></div><p data-r>Founded in Indiana by an engineer and inventor in glucose sensing, a surgeon and clinical researcher, and a diagnostics executive, with advisors from diabetes devices and critical care.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Backed by <em>the NIH.</em></h2></div><p data-r>Federal SBIR funding from the National Institute of General Medical Sciences, from Phase I through the current Phase II programme.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, health systems and partners</span>'+
   '<h2 class="big split">Bring the lab <em>to the bedside.</em></h2>'+
   '<p class="sub" data-r>Cascade Metrix is seeking investment and partnerships with firms in medical technology, health systems and related areas.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="'+MAP+'" target="_blank" rel="noopener">Find us in Fishers</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Cascade Metrix, Inc.<br>11650 Olio Road, Suite 1000-110<br>Fishers, IN 46037</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r>NIH NIGMS SBIR<br>R44GM146498</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>11650 Olio Road, Suite 1000-110<br>Fishers, Indiana 46037</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/solution">Solution</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Elsewhere</span><a class="ul" href="https://reporter.nih.gov/project-details/11406343" target="_blank" rel="noopener">NIH RePORTER</a><br><a class="ul" href="https://cascademetrix.com/images/CMX_FCOI_Policy_final.pdf" target="_blank" rel="noopener">FCOI policy</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 60" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'IBM Plex Sans\',Arial,sans-serif;font-weight:500;font-size:60px;letter-spacing:.2em">CASCADE METRIX</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Cascade Metrix, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",how:"story",solution:"solution",milestones:"milestones",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Cascade Metrix — automated critical care blood analysis, Fishers, Indiana",x:"Home"};
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
