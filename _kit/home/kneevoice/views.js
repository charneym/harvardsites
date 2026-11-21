/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Knee sensors","Patented, non-invasive sensors placed securely on the patient’s knee by the clinician. They listen to the joint, capturing the sound, vibration and position generated as the knee bends.",'<circle cx="28" cy="28" r="18"/><circle class="a" cx="28" cy="28" r="9"/><path d="M46 28c4 0 6 3 6 8"/>'],
  ["The console","A compact, quiet console designed to sit in any physician’s office or practice. It guides the exam on screen, counts the knee movements and plays back the sound of the knee.",'<rect x="16" y="6" width="24" height="34"/><path class="a" d="M21 30h14"/><path d="M28 40v8M18 50h20"/>'],
  ["The algorithm","Proprietary signal processing and machine-learned algorithms analyse each recording, compare it with existing data and generate a cartilage score report, refining their accuracy over time.",'<path d="M6 30h7l4-12 6 24 6-30 6 26 4-8h11"/><path class="a" d="M6 46h44"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Clinical evidence</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Leal C, Rahman O, Hunter R, Bert J, et al. “Comparison of audioarthrography and magnetic resonance imaging for diagnosis of patellofemoral cartilage damage.” Journal of Orthopaedic Experience &amp; Innovation 6(2), September 2025. Ninety patients tested before knee arthroscopy, the reference standard. <a class="ul" href="'+JOEI+'" target="_blank" rel="noopener">Read the paper</a></p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Cartilage auscultation<span class="nomob"> · FDA 510(k) cleared</span> · Santa Monica, CA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Cartilage,</span><span class="l">heard and</span><span class="l"><em>scored.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Kneevoice records the sounds and vibrations of the knee through a few simple flexions and turns them into an objective score of cartilage condition, in the physician’s own office. Now FDA cleared and commercially available in the United States.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/products">The system</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">By the time a patient feels knee pain, the cartilage may already be badly damaged. X-rays, CT and MRI struggle to show it early, and reading them takes a specialist. Kneevoice gives the treating physician <em>an objective answer in the office.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">87%</span><span class="k">Agreement with arthroscopy in a 90-patient clinical study, against 53% for MRI</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">8–10</span><span class="k">Simple knee flexions are all an exam takes: pain-free, non-invasive and repeatable at every visit</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$398K</span><span class="k">NIH SBIR Phase I award from the National Institute on Aging, 2026, to develop Wearable Kneevoice</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Every knee has a sound. <em>We score it.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Place</span><span>Flex</span><span>Score</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Sensors on the knee.</h2><p>The clinician places Kneevoice’s patented sensors securely on the patient’s knee and enters the patient’s details: height, weight, gender and other relevant information.</p></article>'+
     '<article class="step"><h2>The patient flexes the knee.</h2><p>The patient performs 8–10 knee flexions while the console counts each movement. The sensors record the noise the joint makes, capturing its vibration and position.</p></article>'+
     '<article class="step"><h2>A score for the cartilage.</h2><p>The data are analysed and a score report on the cartilage is generated automatically, for sharing and the clinical history, with the sound recording kept for further analysis.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">Audio-arthrography, <em>made simple.</em></h2></div><p data-r>Kneevoice combines sound acquisition, sensor technology and machine-learned analysis in one portable platform, so the physician can assess cartilage personally, in the office, and repeat it at every visit.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">From the clinic <em>to the home.</em></h2></div><p data-r>The company is focusing its first commercial launch on the knee. Behind it sits a pipeline of wearable technology and long-term diagnostic support tools.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Orthopedics, engineering <em>and launch.</em></h2></div><p data-r>Kneevoice is led by experts in orthopedic surgery, sports medicine, medical technology and business strategy, with decades of experience at the world’s largest orthopedic companies.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Clinical partners</span><p data-r>A partnership with Cedars-Sinai Kerlan-Jobe, and collaboration agreements with the Michigan Knee Institute and Samimi Orthopedic Group.</p></div>'+
    '<div><span class="lab kick" data-r>Regulatory</span><p data-r>FDA 510(k) clearance in February 2026, after a series of pre-submissions with the agency, and patents granted on the sensing technology.</p></div>'+
    '<div><span class="lab kick" data-r>Recognition</span><p data-r>Gold in “Most Fundable Companies” at Pepperdine University, and an NIH SBIR award from the National Institute on Aging.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Clearance, evidence <em>and awards.</em></h2></div><p data-r>The latest from Kneevoice.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Hear it for <em>yourself.</em></h2>'+
   '<p class="sub" data-r>The Kneevoice Cartilage Evaluation System is now available in the United States. For a demonstration, a partnership or investor information, get in touch.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Kneevoice '+ARR+'</a><a class="btn" href="#/technology">See how it works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Kneevoice, Inc.<br>1626 Montana Avenue<br>Santa Monica, CA 90403</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>1626 Montana Avenue<br>Santa Monica, CA 90403</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Cartilage Evaluation System</span>FDA 510(k) cleared<br>Available in the United States</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Sora\',Arial,sans-serif;font-weight:600;font-size:62px;letter-spacing:-.03em">kneevoice</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Kneevoice, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",platform:"platform",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Kneevoice — Cartilage auscultation for the knee, Santa Monica, CA",x:"Home"};
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
