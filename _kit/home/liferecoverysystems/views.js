/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+esc(c[6])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["The ThermoSuit","A disposable suit used on a conventional gurney. A porous lining spreads the water evenly; expandable gussets fit a wide range of patients, and a head positioning indicator sets the patient in place.",'<path d="M20 8h16c4 0 6 3 6 7v26c0 4-2 7-6 7H20c-4 0-6-3-6-7V15c0-4 2-7 6-7z"/><circle cx="28" cy="15" r="4"/><path class="a" d="M19 26c3 2 6-2 9 0s6 2 9 0M19 34c3 2 6-2 9 0s6 2 9 0"/>'],
  ["The TSP50 pump","The &#8220;heart&#8221; of the system. It cycles water through the suit and back, controlled from an easy touch screen, and moves about the room on casters.",'<path d="M14 10h28v30H14z"/><path class="a" d="M19 16h18v10H19z"/><path d="M18 40v6M38 40v6"/><circle cx="18" cy="48" r="2"/><circle cx="38" cy="48" r="2"/><path d="M42 20c6 0 8 4 8 10"/>'],
  ["Access while cooling","Velcro seals let IV, ECG and defibrillation lines route out of the suit. Pause the top sheet to reach the patient and cooling continues from below; press resume and full flow returns.",'<path d="M8 36h40"/><path d="M12 36c2-8 8-12 16-12s14 4 16 12"/><path class="a" d="M28 24V10M22 16l6-6 6 6"/><path d="M14 44h28"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Cooling performance</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Howes et al., Resuscitation 2010, compared with Heard et al., Resuscitation 2010, as reported on life-recovery.com. Ischemic stroke is an investigational use; the ThermoSuit is not FDA-cleared for it.</p></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Therapeutic hypothermia<span class="nomob"> · Kinnelon, New Jersey</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Cooling at the</span><span class="l"><em>speed of water.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>The ThermoSuit System cools patients with cold water flowing directly over the skin, to target temperature in about 30 minutes. Non-invasive, and deployed by a nurse.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The ThermoSuit '+ARR+'</a><a class="btn" href="#/clinical">Clinical evidence</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Emergency medical care</span>'+
   '<h2 class="txt" id="mani">Water immersion is the fastest way to cool a body. The ThermoSuit brings it to the emergency room, on a conventional gurney, <em>and is now in a pivotal trial in ischemic stroke.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">33&#176;C</span><p class="k">Target temperature, typically reached in about 30 minutes with the ThermoSuit System</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">160</span><p class="k">Patients in up to 8 hospitals, approved by FDA for the pivotal ischemic stroke trial</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">800,000</span><p class="k">Americans who suffer a stroke each year</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">How the ThermoSuit <em>cools.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Suit</span><span>Flow</span><span>Target</span><span>Off</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>On a gurney, in minutes.</h2><p>The patient lies in the ThermoSuit on a conventional gurney. The portable TSP50 pump connects beside the bed, and an esophageal probe tracks core temperature.</p></article>'+
     '<article class="step"><h2>Water on skin.</h2><p>Cold water flows over the patient and returns to the pump, cycled continuously, drawing heat off the body far faster than gel pads or cooling blankets.</p></article>'+
     '<article class="step"><h2>To target, fast.</h2><p>Core temperature falls steadily toward the target and is monitored throughout. The system typically cools to target in about 30 to 40 minutes.</p></article>'+
     '<article class="step"><h2>Drained, and cool.</h2><p>At about 33&#176;C the water is drawn off and the suit is rolled up and discarded. The patient stays cool for hours, and is maintained at target with conventional surface cooling.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The ThermoSuit <em>System.</em></h2></div><p data-r>The ThermoSuit cools by direct contact of water on skin, the unmatched cooling speed of immersion in an easy, nurse-deployable, non-invasive form. It was developed with funding assistance from the NIH&#8217;s National Heart, Lung, and Blood Institute, and won a Medical Design Excellence Award in 2009.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical</span><h2 class="d2 split">From heatstroke <em>to stroke.</em></h2></div><p data-r>The ThermoSuit is FDA 510(k) cleared for temperature reduction where clinically indicated, such as in hyperthermic patients. Laboratory studies predict that rapid, early cooling could reduce brain injury from ischemic stroke, and a pivotal trial is now approved.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Cardiology, engineering, <em>emergency medicine.</em></h2></div><p data-r>Founded in 2003 by Dr. Robert Freedman and Dr. Robert Schock, the team brings years of experience in medical devices, cardiology, neurology and emergency medicine, from product development to launch.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">News and <em>publications.</em></h2></div><p data-r>Company announcements and peer-reviewed work on the ThermoSuit System and rapid cooling.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Hospitals, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Life Recovery Systems.</em></h2>'+
   '<p class="sub" data-r>Research, development and manufacturing are in Kinnelon, New Jersey, with corporate offices in Alexandria, Louisiana. We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/clinical">See the evidence</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Research and manufacturing</span><p data-r>170 Kinnelon Road, Suite 5<br>Kinnelon, NJ 07405</p></div>'+
    '<div><span class="lab" data-r>Corporate offices</span><p data-r>711 Kimball Avenue<br>Alexandria, LA 71301</p></div>'+
    '<div><span class="lab" data-r>General inquiries</span><p data-r><a class="ul" href="'+MAIL+'">info@life-recovery.com</a><br><a class="ul" href="tel:+19732832800">973-283-2800</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Research and manufacturing</span>Kinnelon, New Jersey<br>USA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@life-recovery.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Corporate offices</span>Alexandria, Louisiana</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 66" aria-hidden="true"><text x="450" y="56" text-anchor="middle" style="font-family:\'Sofia Sans\',sans-serif;font-weight:700;font-size:64px">LIFE RECOVERY SYSTEMS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Life Recovery Systems HD, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",story:"story",clinical:"clinical",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Life Recovery Systems — the ThermoSuit System, rapid patient cooling",x:"Home"};
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
