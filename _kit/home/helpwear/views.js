/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function studyRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+' · '+esc(c[6])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'"><a class="ul" href="'+CT+c[1]+'" target="_blank" rel="noopener">Study record '+ARR+'</a></span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+n[2]+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Comfort","Non-invasive and non-adhesive, so it can be comfortably worn for months at a time. Discreetly worn on the bicep, and can be worn in the shower.",'<path d="M14 40c0-14 6-26 14-26s14 12 14 26"/><path class="a" d="M12 30c10 4 22 4 32 0M12 38c10 4 22 4 32 0"/><path d="M12 30v8M44 30v8"/>'],
  ["Accuracy","Metal electrodes for medical-grade ECG detection, with continuous monitoring that increases detection and diagnoses of transient arrhythmias.",'<path d="M4 30h12l4-8 5 20 6-30 5 18h16"/><circle class="f" cx="31" cy="12" r="2.6"/>'],
  ["Access","Comprehensive, continuous monitoring without an implant, at the best economic value for patients and payors. HIPAA compliant.",'<path d="M28 8l17 6v13c0 11-7 19-17 23-10-4-17-12-17-23V14z"/><path class="a" d="M20 28l6 6 11-12"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function compare(){var R=[
  ["Short-term","Holter, patch and MCT monitors","15&#8211;30 days","Don&#8217;t monitor long enough: adhesive causes skin irritation and breakdown, which limits the duration of use and the likelihood of detecting an event. They cannot rule out transient arrhythmias.",1],
  ["Long-term","Implantable loop recorders","4&#8211;6 years","Monitoring so long has real costs: an invasive implant that limits patient acceptance, a 4&#8211;6 year physician and resource commitment, and costly devices, procedures and co-pays.",1],
  ["Extended wear","The HeartWatch","Up to 180 days","Covers patients from day 0 through diagnosis, with a medical-grade ECG monitor that can comfortably be worn for as many months as prescribed.",0]];
  return '<div class="cmp"><span class="lab kick" data-r>Where the HeartWatch fits</span><ul class="pfr cm">'+R.map(function(r){
   return '<li'+(r[4]?' class="dim"':'')+'><span class="lab tg"><b'+(r[4]?' class="pz"':'')+'>'+r[0]+'</b></span><div class="pgm"><h3>'+r[1]+'</h3><span class="loc">'+r[2]+'</span></div><p>'+r[3]+'</p></li>'}).join("")+'</ul>'+
   '<p class="note-s" data-r>Caution: Investigational device, limited by United States law to investigational use only. Not available for sale in the United States.</p></div>'}
function backers(){
  return '<div class="bk"><span class="lab kick" data-r>Partners</span><p class="cr" data-r><span>St. Michael&#8217;s</span><span>Mount Sinai</span><span>Texas Medical Center</span><span>Biomedical Zone</span><span>Velocity</span><span>Creative Destruction Lab</span><span>Bayer G4A</span></p></div>'+
  '<div class="bk"><span class="lab kick" data-r>Collaborators</span><p class="cr" data-r><span>University of Calgary</span><span>University of Toronto</span><span>University of Waterloo</span><span>Toronto Metropolitan University</span></p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Ambulatory ECG monitoring<span class="nomob"> · Toronto</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">ECG monitoring,</span><span class="l">worn <em>for months.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>HelpWear is pioneering the HeartWatch&#8482;, the first medical-grade ambulatory ECG monitor specifically designed for extended wear: a non-adhesive, dry-electrode armband to guide treatment after cryptogenic stroke and syncope.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/studies">Our studies</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Patients who leave hospital after an unexplained stroke or faint, without a diagnosis, are at high risk of another event. Patches stop too soon; implants ask too much. <em>Monitoring for up to 180 days is critical.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 in 4</span><p class="k">Cryptogenic stroke patients have a recurrent stroke within 5 years</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 in 2</span><p class="k">Syncope patients leave the hospital without a diagnosis</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~35%</span><p class="k">Of strokes are cryptogenic, with no cause found despite extensive testing</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Detect, treat, <em>protect.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Detect</span><span>Treat</span><span>Protect</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Worn on the arm, recording.</h2><p>The HeartWatch is worn discreetly on the bicep. Medical-grade metal electrodes, with no adhesive, record a continuous ECG and detect abnormal heart rhythms.</p></article>'+
     '<article class="step"><h2>Reports that guide treatment.</h2><p>Clinically actionable reports enable guideline-driven decisions: atrial fibrillation found after a cryptogenic stroke leads to oral anticoagulants; a pause in syncope leads to a pacemaker.</p></article>'+
     '<article class="step"><h2>Covered until diagnosis.</h2><p>Patch and Holter monitors stop at 15&#8211;30 days. The HeartWatch covers patients from day 0 through diagnosis, for as many months as prescribed, without an implant.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Comfort. Accuracy. <em>Access.</em></h2></div><p data-r>The HeartWatch&#8217;s novel dry-electrode, non-adhesive design eliminates the skin irritation and breakdown seen with other ambulatory ECG monitors, allowing far longer continuous wear.</p></div>'+
   caps()+
   compare()+
  '</div></section>'+

  '<section class="sec dark2" id="studies" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Studies</span><h2 class="d2 split">Proving it in <em>the clinic.</em></h2></div><p data-r>HelpWear is on a mission to prove that the HeartWatch provides a definitive diagnosis to enable optimal, patient-specific treatment. Four studies are registered, led with cardiologists at the University of Calgary.</p></div>'+
   studyRows(STUDIES)+
   backers()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Cardiology medtech and <em>electrophysiology.</em></h2></div><p data-r>A team of engineers and clinicians in Toronto, led by a cardiology device veteran and a practising electrophysiologist and clinical trialist.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>HelpWear.</em></h2></div><p data-r>Study registrations, awards and accelerator programmes on the way to the HeartWatch.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Physicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>HelpWear.</em></h2>'+
   '<p class="sub" data-r>We&#8217;re pioneering the first medical-grade ambulatory ECG monitor designed for extended wear. Reach out to our team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to HelpWear '+ARR+'</a><a class="btn" href="#/studies">See the studies</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>209 Victoria St., Rm 774<br>Toronto, Ontario M5B 1T8</p></div>'+
    '<div><span class="lab" data-r>Email and phone</span><p data-r><a class="ul" href="'+MAIL+'">info@helpwear.ca</a><br><a class="ul" href="tel:+16478632420">(647) 863-2420</a></p></div>'+
    '<div><span class="lab" data-r>Wearing a HeartWatch?</span><p data-r>Patients with questions, please call <a class="ul" href="tel:+16477257761">647-725-7761</a>.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>209 Victoria St., Rm 774<br>Toronto, Ontario M5B 1T8</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@helpwear.ca</a><br><a class="ul" href="https://ca.linkedin.com/company/helpwear" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/studies">Studies</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Caution</span>Investigational device. Limited by United States law to investigational use only.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 80" aria-hidden="true"><text x="380" y="68" text-anchor="middle" style="font-family:\'Lato\',sans-serif;font-weight:300;font-size:96px">HelpWear</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 HelpWear Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",studies:"studies",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"HelpWear — the HeartWatch, ECG monitoring designed for extended wear",x:"Home"};
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
