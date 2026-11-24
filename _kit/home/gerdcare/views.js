/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="rg-tm">'+gs.map(function(g){return '<div class="rg-tg"><span class="lab kick" data-r>'+esc(g)+'</span><ul'+(by[g].length===2?' class="n2"':'')+'>'+by[g].map(function(p){
    return '<li data-r><span class="rg-nm">'+esc(p.name)+'</span><span class="rg-rl">'+esc(p.title)+'</span>'+(p.sum?'<p class="kl-sum">'+esc(p.sum)+'</p>':'')+'</li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function sitesLine(){return '<div class="kl-pa gc-sites"><span class="lab kick" data-r>Study sites</span><ul data-r>'+SITES.map(function(p){return '<li>'+esc(p)+'</li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li data-r><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Wearable","Drug-free, non-invasive","A belt with two electrode pads, worn on the abdomen. No drugs, no surgery, no preparation before use.",'<path d="M6 30C18 36 38 36 50 30"/><path d="M6 38C18 44 38 44 50 38"/><rect class="a" x="13" y="28" width="9" height="12"/><rect class="a" x="34" y="28" width="9" height="12"/>'],
  ["Synchronised","Pulses timed to breathing","Modulated, asymmetrical bursts of electrical pulses, synchronised with breathing, stimulate the abdominal muscles.",'<path d="M4 34C12 34 14 22 22 22S32 34 40 34 48 22 52 22"/><path class="a" d="M20 16v-6M24 16v-6M28 16v-6"/>'],
  ["Connected","App and cloud","A proprietary smartphone app controls the device; clinical data is stored securely on the GerdCare cloud.",'<rect x="17" y="8" width="22" height="40"/><path class="a" d="M24 42h8"/><path class="a" d="M22 22c4-4 8-4 12 0M25 26c2-2 4-2 6 0"/>'],
  ["Personalised","Data-driven treatment","Collected data is processed to create personalised, optimised treatment, for use anytime and anywhere.",'<circle cx="28" cy="28" r="19"/><path class="a" d="M18 34l7-8 6 5 8-10"/><circle class="f" cx="39" cy="21" r="2.4"/>']];
  return '<div class="caps gc-caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+c[0]+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function partners(){return '<div class="kl-pa"><span class="lab kick" data-r>Today’s options</span><ul data-r><li>PPI drugs: ineffective for up to 40% of patients</li><li>Surgery (fundoplication, LINX): low acceptance</li></ul></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>GerdCare Medical<span class="nomob"> · Yokneam, Israel</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Relief from reflux,</span><span class="l"><em>without a pill.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>eGERD is a wearable, non-invasive electro-stimulator for gastroesophageal reflux disease, now in a multi-centre, sham-controlled pivotal study in Israel and the United States.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/clinical">Clinical results</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why GERD</span>'+
   '<h2 class="txt" id="mani">Gastroesophageal reflux disease is one of the most common digestive disorders: a billion people live with reflux, heartburn and regurgitation. PPI drugs fail up to 40% of them, and surgery is invasive. <em>eGERD is designed as a drug-free, non-surgical alternative.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1B</span><p class="k">People worldwide affected by GERD</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">75%</span><p class="k">Reduction in acid exposure and DeMeester score in the 31-patient pilot study</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">84</span><p class="k">Patients in the ongoing sham-controlled pivotal study</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">A belt that helps <em>the valve close.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Reflux</span><span>Wear</span><span>Pulse</span><span>Relief</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A valve that lets acid back.</h2><p>In GERD, the lower esophageal sphincter (LES) between the esophagus and the stomach does not hold, and stomach acid flows back up: reflux, heartburn and regurgitation.</p></article>'+
     '<article class="step"><h2>Worn on the abdomen.</h2><p>eGERD is a digital therapeutic electro-stimulator: a belt with two electrode pads, controlled from a smartphone app. No preparation is needed before use.</p></article>'+
     '<article class="step"><h2>Pulses, in time with breathing.</h2><p>The device generates modulated, asymmetrical bursts of electrical pulses, synchronised with breathing, that stimulate the abdominal muscles.</p></article>'+
     '<article class="step"><h2>The sphincter works better.</h2><p>The stimulation improves the function of the lower esophageal sphincter and reduces acid reflux from the stomach into the esophagus.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The eGERD <em>platform.</em></h2></div><p data-r>A novel, drug-free, non-invasive and user-friendly medical platform for relieving the symptoms of GERD, set for immediate use by any GERD patient.</p></div>'+
   caps()+partners()+
  '</div></section>'+

  '<section class="sec dark2" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical</span><h2 class="d2 split">Three studies, <em>one direction.</em></h2></div><p data-r>From a seven-patient proof of concept to a multi-centre pivotal study: eGERD has been studied in GERD patients since 2016.</p></div>'+
   pipeRows(PIPE)+sitesLine()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Physicians, engineers <em>and builders.</em></h2></div><p data-r>Founded in 2017 by a physician-engineer and an R&D veteran, both with experience developing electrical stimulators, and chaired by a serial medical-device entrepreneur.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>milestones.</em></h2></div><p data-r>An interim analysis, a published pilot study and a pivotal trial under way: GerdCare in the record.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">A drug-free option <em>for GERD.</em></h2>'+
   '<p class="sub" data-r>For partnerships, investment, clinical collaboration or general enquiries, the GerdCare Medical team would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to GerdCare '+ARR+'</a><a class="btn" href="#/clinical">The clinical studies</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>3 Hatnufa Street, High-Tech Park<br>Yokneam Ilit 2069207, Israel</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@gerd-care.com</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+972559984415">+972 55 998 4415</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Yokneam Ilit, Israel</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@gerd-care.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Status</span>eGERD is in a multi-centre pivotal clinical study.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Spectral\',serif;font-weight:400;font-size:60px">GERDCARE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 GerdCare Medical</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",clinical:"clinical",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"GerdCare Medical — eGERD, drug-free relief for reflux",x:"Home"};
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
