/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk'+(c[3].indexOf("FDA")===0?' av':'')+'">'+(c[3].indexOf("FDA")===0?'Clinical':c[5]?'Pre-order':'Research')+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["MEPA wideband immittance","Middle-ear power analysis characterises how the middle ear transmits sound from 200 to 8,000 Hz in about four seconds, without changing the pressure in the ear canal. For newborns, infants, children and adults.",'<path d="M8 40c6-18 12-24 20-24s14 6 20 24"/><path class="a" d="M8 40h40"/><circle class="f" cx="28" cy="16" r="3"/>'],
  ["Otoacoustic emissions","DPOAEs are an objective indicator of normally functioning outer hair cells, measured with the digital signal processing and algorithms of the original CUBeDIS™ system developed at AT&T Bell Labs. TEOAE and SFOAE modules extend the picture.",'<path d="M10 34c4-10 8-10 12 0s8 10 12 0 8-10 12 0"/><path class="a" d="M28 12v10"/><circle class="f" cx="28" cy="10" r="3"/>'],
  ["Reflexes and calibration","MEMR and MOCR modules test the middle-ear muscle and medial-olivocochlear reflexes, and every OAE module can be calibrated at forward pressure level, derived from the same wideband measurement.",'<circle cx="18" cy="28" r="10"/><circle cx="38" cy="28" r="10"/><path class="a" d="M18 18c4-6 16-6 20 0"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Clinician’s guides</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Guides based on peer-reviewed research, with instructions for each version of HearID and OtoStat. From mimosaacoustics.com.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Auditory diagnostics for clinics and research labs<span class="nomob"> · Champaign, Illinois</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The middle ear and</span><span class="l">the inner ear,</span><span class="l"><em>one probe fit.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Mimosa Acoustics makes OtoStat® and HearID®, portable systems that measure wideband acoustic immittance and otoacoustic emissions quickly and easily, with pre-programmed protocols for the clinic and full control for the lab.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/products">The systems</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why wideband</span>'+
   '<h2 class="txt" id="mani">A tympanogram reads one tone. MEPA measures how much sound power the middle ear <em>actually absorbs</em> across the whole range of hearing, and then uses that to make every inner-ear test that follows more accurate.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1994</span><p class="k">Founded in Champaign-Urbana, close to the University of Illinois and its research community</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.2–8</span><p class="k">kHz covered by MEPA wideband immittance, in about four seconds, without pressurising the ear</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20 dB</span><p class="k">Stimulus level errors that standard in-ear calibration can cause, and forward-pressure-level calibration avoids</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a test works</span><h2 class="d3">One probe fit, <em>two answers.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Measure</span><span>Calibrate</span><span>Listen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A chirp meets the eardrum.</h2><p>The ear probe plays a wideband chirp into the sealed ear canal. Part of its power is absorbed by the eardrum and middle ear, part is reflected back to the probe microphone. MEPA turns the difference into absorbance across 200 to 8,000 Hz.</p></article>'+
     '<article class="step"><h2>The ear calibrates the test.</h2><p>Standing waves in the ear canal can make the level at the probe microphone wrong by up to 20 dB. From the same wideband measurement, OtoStat derives the forward pressure level and sets every stimulus that follows accurately.</p></article>'+
     '<article class="step"><h2>The cochlea answers.</h2><p>Two tones, f1 and f2, travel through the middle ear into the cochlea. Healthy outer hair cells respond with a faint distortion product at 2f1−f2 that travels back out, where the same probe records it as a DPOAE.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Middle ear and inner ear, <em>measured together.</em></h2></div><p data-r>Mimosa Acoustics was the first to bring wideband acoustic immittance into the hands of clinicians. Pairing it with otoacoustic emissions gives diagnostic information about both the middle and the inner ear, from a single probe fit.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Two systems, <em>made in the USA.</em></h2></div><p data-r>Lightweight hardware that combines state-of-the-art data collection electronics with a low-noise, high-sensitivity ear probe, plugged into a PC by USB. Modular, so tests can be added as needs expand and change.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Audiology, <em>by research.</em></h2></div><p data-r>Mimosa Acoustics is based in the tech hub of Champaign-Urbana, drawing on the University of Illinois community and working with leading audiological researchers.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>Numerous NIH and Department of Defense SBIR and STTR grants, including NIDCD awards since 1996 for wideband reflectance, DPOAE screening and middle-ear reflex testing.</p></div>'+
    '<div><span class="lab kick" data-r>Heritage</span><p data-r>DPOAE systems built on the signal processing, algorithms and hardware principles of the CUBeDIS™ measurement system developed at AT&T Bell Labs.</p></div>'+
    '<div><span class="lab kick" data-r>Distributors</span><p data-r>Starkey Laboratories in the USA and Europe, and J. Morita Manufacturing Corporation in Japan.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">Published with <em>leading hearing researchers.</em></h2></div><p data-r>Papers and presentations on wideband acoustic immittance, otoacoustic emissions, the medial olivocochlear reflex and audiometry, and the NIH awards behind them.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinics, hospitals and research labs</span>'+
   '<h2 class="big split">Talk to <em>Mimosa.</em></h2>'+
   '<p class="sub" data-r>Tell us about your patients or your study, and we will help you choose the system and modules that fit, with a free quote.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Mimosa Acoustics '+ARR+'</a><a class="btn" href="#/products">See the systems</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Mimosa Acoustics, Inc.<br>335 Fremont St.<br>Champaign, IL 61820, USA</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>+1 (217) 359-9740</p></div>'+
    '<div><span class="lab" data-r>Sales and support</span><p data-r><a class="ul" href="mailto:sales@mimosaacoustics.com">sales@mimosaacoustics.com</a><br><a class="ul" href="mailto:support@mimosaacoustics.com">support@mimosaacoustics.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>335 Fremont St.<br>Champaign, IL 61820, USA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>+1 (217) 359-9740</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Systems</span>OtoStat® · HearID® · OtoStation®</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 62" aria-hidden="true"><text x="500" y="50" text-anchor="middle" style="font-family:\'Lato\',Arial,sans-serif;font-weight:300;font-size:58px;letter-spacing:.1em">mimosa acoustics</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Mimosa Acoustics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",how:"story",products:"products",research:"research",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Mimosa Acoustics — auditory diagnostics for clinics and research labs",x:"Home"};
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
