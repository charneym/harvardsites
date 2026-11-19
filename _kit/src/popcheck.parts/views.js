/* ================= VIEWS (home only; the nav scrolls to sections on this page) ================= */
function goTo(id){var el=document.getElementById(id);if(!el)return;var t=el.parentNode&&el.parentNode.classList&&el.parentNode.classList.contains("pin-spacer")?el.parentNode:el;
  var y=Math.max(0,t.getBoundingClientRect().top+window.scrollY);if(lenis)lenis.scrollTo(y,{duration:1.5,force:true});else window.scrollTo({top:y,behavior:RM?"auto":"smooth"})}
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-go]");if(!a)return;e.preventDefault();e.stopImmediatePropagation();
  var id=a.getAttribute("data-go");if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){goTo(id)},450)}else goTo(id)},true);
function mhStatic(list){return '<div class="mh"><div class="mh-group"><ul class="mh-list">'+list.map(function(p){return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span><span class="mh-arrow" aria-hidden="true"></span></div></li>'}).join("")+'</ul></div></div>'}
function prods(){var P=[
  ["VenaCheck","A single-patient-use, AI-enabled wearable worn on the calf. It stimulates the calf muscles to move blood, and reads blood flow with light-based sensors.","Wearable · prototype","Not yet FDA-cleared"],
  ["PopCheck app, for patients","Keeps patients on top of their recovery: report and document concerning symptoms, and schedule the studies and appointments their providers request.","Digital platform","Not yet FDA-cleared"],
  ["PopCheck platform, for providers","Shows each patient’s recovery in real time and signals concerns for complications such as venous clots; request patient-reported data, or order labs, imaging, consults and follow-ups.","Digital platform","Not yet FDA-cleared"]];
  return '<ul class="pf">'+P.map(function(c){return '<li><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p><p class="pfm"><span class="lab">'+esc(c[2])+'</span></p><p class="pfs"><span class="lab">'+esc(c[3])+'</span></p></li>'}).join("")+'</ul>'}
function adv(){return '<div class="pillars p4">'+[
  ['<path d="M8 56h48M20 56V30h24v26M26 30v-8a6 6 0 0 1 12 0v8"/><path class="a" d="M32 40v8"/>',"Portable","Worn at home, not wheeled to the bedside: removing a major barrier to patient compliance."],
  ['<path d="M24 6c-6 18-6 34 0 52M40 6c6 18 6 34 0 52"/><path class="a" d="M32 50V18M25 25l7-7 7 7"/>',"More effective prevention","Muscle stimulation, a more effective way to generate blood flow than antiquated pneumatic compression."],
  ['<path d="M4 34h12l5-12 8 26 7-20 4 6h20"/><circle class="a" cx="47" cy="34" r="3"/>',"Real-time monitoring","A first-of-its-kind, non-invasive monitoring platform for venous clots."],
  ['<rect x="18" y="6" width="28" height="52"/><path d="M27 50h10"/><path class="a" d="M25 22l5 5 10-11"/>',"Connected to the care team","Real-time changes in clotting risk are communicated to the patient’s healthcare team."]
 ].map(function(p){return '<div class="pl3"><svg viewBox="0 0 64 64" aria-hidden="true">'+p[0]+'</svg><h3>'+p[1]+'</h3><p>'+p[2]+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Postoperative care · Memphis, Tennessee</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Rest more.</span><span class="l">Worry <em>less.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>PopCheck Technologies is building VenaCheck, a wearable that helps prevent venous clots after surgery, detects the patterns that signal one forming, and alerts the care team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology" data-go="story">How it works '+ARR+'</a><a class="btn" href="#/contact" data-go="contact">Get in touch</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The problem</span>'+
   '<p class="txt" id="mani">Venous clots are one of the most common, potentially life-threatening yet <em>preventable</em> complications of surgery, and the danger continues after patients go home.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1M<sup>+</sup></span><span class="k">People in the U.S. affected by venous clots each year</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30%</span><span class="k">Mortality: up to 30% of patients may die</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$12B<sup>+</sup></span><span class="k">Cost burden of venous clots per year</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How VenaCheck works</span><h2 class="d3">Prevent, detect, <em>alert.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Prevent</span><span>Detect</span><span>Alert</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Keep the blood moving.</h2><p>Worn on the calf, VenaCheck prevents clots by external stimulation of the calf muscles, pushing blood out of the deep veins and back toward the heart.</p></article>'+
     '<article class="step"><h2>Read the flow, catch the pattern.</h2><p>Light-based (PPG) sensors track changes in blood flow, and AI looks for the abnormal patterns that predict a clot forming, earlier than symptoms alone.</p></article>'+
     '<article class="step"><h2>Tell the care team, in real time.</h2><p>The PopCheck digital platform alerts the patient’s healthcare team to changes in clotting risk, so they can act early and avoid delays in care.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The PopCheck advantage</span><h2 class="d2 split">Care that goes <em>home with you.</em></h2></div><p data-r>Tailored to the postoperative phase of care, for high-risk patients such as those recovering from total joint replacement.</p></div>'+
   adv()+
  '</div></section>'+

  '<section class="sec dark2" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">One wearable, <em>one platform.</em></h2></div><p data-r>VenaCheck feeds the PopCheck digital platform, which connects the patient at home with the team that performed the surgery.</p></div>'+
   prods()+
   '<p class="note-s" data-r>Our products are not available for sale or yet cleared for use in patients by the FDA or other regulatory bodies.</p>'+
  '</div></section>'+

  '<section class="sec light" id="research" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research · NIH SBIR Phase I</span><h2 class="d2 split">Proving it at the <em>Cleveland Clinic.</em></h2></div><p data-r>In September 2026 the National Heart, Lung, and Blood Institute awarded PopCheck a Phase I SBIR grant to test VenaCheck’s ability to detect deep vein thrombosis.</p></div>'+
   '<dl class="facts">'+
    '<div><dt class="lab">The study</dt><dd>30 adults undergoing ultrasound for suspected DVT, 15 with a confirmed clot and 15 without, wear a VenaCheck prototype during guided leg exercises.</dd></div>'+
    '<div><dt class="lab">At home</dt><dd>Participants track symptoms in the PopCheck app for 30 days, with virtual check-ins at days 15 and 30.</dd></div>'+
    '<div><dt class="lab">The model</dt><dd>About 80,000 ultrasound scans train two DVT prediction models: one on clinical data alone, one enhanced with VenaCheck’s data.</dd></div>'+
    '<div><dt class="lab">The goal</dt><dd>Identify DVT with at least 80% sensitivity and specificity; a model AUROC of at least 0.8, improved by 10% or more with wearable data.</dd></div>'+
    '<div><dt class="lab">Award</dt><dd>$390,966 · NHLBI 1R43HL184749-01 · September 2026 to September 2027. <a class="ul" href="https://reporter.nih.gov/project-details/11316725" target="_blank" rel="noopener">View on NIH RePORTER</a></dd></div>'+
   '</dl>'+
  '</div></section>'+

  '<section class="sec light team" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded by a <em>physician-scientist.</em></h2></div><p data-r>As a neurosurgery resident, Dr. Erika Dillard saw first-hand how patients’ outcomes after surgery are shaped by factors beyond the operation itself.</p></div>'+
   '<div class="grp"><span class="lab grp-l" data-r>Leadership</span>'+mhStatic(LEAD)+'</div>'+
   '<div class="grp"><span class="lab grp-l" data-r>Advisors</span>'+mhStatic(ADV)+'</div>'+
  '</div></section>'+

  '<section class="sec dark sup" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, partners &amp; programs</span>'+
   '<p class="cred" data-r>'+SUPPORT.map(function(s){return '<span>'+esc(s)+'</span>'}).join("")+'</p>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>News</span><h2 class="d3 split">Press and <em>updates.</em></h2></div></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For clinicians, partners and investors</span>'+
   '<h2 class="big split">Make recovery <em>safer.</em></h2>'+
   '<p class="sub" data-r>Want to learn more about VenaCheck, join a study or invest in PopCheck Technologies? Write to us at 460 S. Highland St, Memphis, TN 38111, or by email.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>460 S. Highland St<br>Memphis, TN 38111</div>'+
   '<div class="c"><span class="lab">Products</span>VenaCheck<br>PopCheck digital platform</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology" data-go="story">Technology</a><br><a class="ul" href="#/research" data-go="research">Research</a><br><a class="ul" href="#/team" data-go="team">Team</a><br><a class="ul" href="#/news" data-go="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="#/contact" data-go="contact">Get in touch</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:Manrope,system-ui,sans-serif;font-weight:400;font-size:46px;letter-spacing:.12em">POPCHECK</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 PopCheck Technologies, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one page; any hash shows home ================= */
function route(h){return {k:"home",v:vHome,t:"PopCheck Technologies — Wearable monitoring for safer recovery after surgery",x:"Home"}}
