/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Cable-free","Six sonar receivers packed around the imaging face of a wireless ultrasound probe, in one 0.7 kg device that positions anterior, oblique or lateral.",'<rect x="12" y="8" width="32" height="30"/><path d="M12 38h32"/><circle class="a" cx="18" cy="44" r="3"/><circle class="a" cx="28" cy="45" r="3"/><circle class="a" cx="38" cy="44" r="3"/>'],
  ["Co-registered to anatomy","Because the receivers ride on the ultrasound probe, the Bragg peak is located relative to the anatomy the probe images, with the treatment contours overlaid.",'<path d="M28 8L10 46h36z"/><path class="a" d="M20 34c3-6 13-6 16 0"/><circle class="f" cx="28" cy="30" r="3"/>'],
  ["Motion, monitored","Ultrasound images with the RT contours overlaid may be live-streamed to the control room, to watch anatomy move during delivery.",'<path d="M6 30h10l4-12 6 24 5-16 4 4h15"/><path class="a" d="M6 46h44"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>tARV specifications</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Systems and methods for radiation beam range verification using sonic measurements: patented in the United States, China and India, and in Europe (unitary patent; Switzerland, Spain, United Kingdom, Ireland). Performance results on a Mevion Hyperscan accelerator.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Proton therapy range verification<span class="nomob"> · Chicago, IL</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Hear where</span><span class="l"><em>the beam stops.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Acoustic Range Estimates builds the thermoAcoustic Range Verifier (tARV), a wireless research tool that listens to the sound a proton beam makes as it stops, and locates the Bragg peak on an ultrasound image of the anatomy. Non-invasive and non-ionizing.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/how">How it works</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why range matters</span>'+
   '<h2 class="txt" id="mani">A proton beam deposits its dose where it stops, and where it stops depends on tissue the planning CT can only estimate. The tARV <em>listens for the Bragg peak</em> and measures the range; in the 2026 study it added only 5 to 10 minutes at the couch.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.5 mm</span><p class="k">Range accuracy in the 2026 Red Journal phantom study</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><p class="k">Sonar receivers around the face of a wireless ultrasound probe</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.7 kg</span><p class="k">Cable-free device, 150 × 95 × 110 mm</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">From the beam <em>to the range.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Position</span><span>Listen</span><span>Correct</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Place it on the patient.</h2><p>Positioning is fast and flexible: anterior, oblique or lateral. The probe images the anatomy with the treatment contours overlaid, and can stream to the control room to monitor motion.</p></article>'+
     '<article class="step"><h2>Listen to every spot.</h2><p>As each proton spot stops, the energy it deposits launches a faint pressure pulse. Six sonar receivers around the probe face record it, and pulses are averaged to raise the signal.</p></article>'+
     '<article class="step"><h2>Measure the range, correct the dose.</h2><p>Time shifts between measured and simulated pulses give the range error, layer by layer. Offline, the dose is recomputed with those errors and imported back into the treatment planning system.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Non-invasive. <em>Non-ionizing.</em></h2></div><p data-r>The thermoAcoustic Range Verifier acquires signals that can be analyzed for accurate and precise localization of the Bragg peak relative to anatomical structures. The wireless device may have the potential to assist in adaptive planning decisions and to be integrated with the clinical workflow.</p></div>'+
   caps()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Clinical workflow</span><p data-r>Added steps sit inside the clinical workflow or run offline; in the 2026 study the patient-facing workflow grew by only 5 to 10 minutes.</p></div>'+
    '<div><span class="lab kick" data-r>Adaptive planning</span><p data-r>Range errors averaged per energy layer shift each beamlet, and the recomputed dose returns to the treatment planning system.</p></div>'+
    '<div><span class="lab kick" data-r>Research use</span><p data-r>The tARV is a research tool and not yet authorized for patient care.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="evidence" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Evidence</span><h2 class="d2 split">Validated, <em>beam by beam.</em></h2></div><p data-r>A decade of peer-reviewed results, from the first co-registered overlay of the Bragg peak on ultrasound to a cable-free device on a clinical proton system. The 2026 study concludes that the tARV warrants, and is poised for, efficient evidence development such as noninterventional patient safety and offline adaptive studies.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Physics, <em>at the couch.</em></h2></div><p data-r>Acoustic Range Estimates was founded by physicist Sarah K. Patch, whose thermoacoustic work runs from imaging theory to proton range verification, and tests its device with clinical physicists and phantom makers.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>National Cancer Institute</span><p data-r>SBIR Phase I (2019) and Phase II awards, R43CA243764 and R44CA243764, for thermoacoustic range verification on a synchrocyclotron.</p></div>'+
    '<div><span class="lab kick" data-r>Clinical systems</span><p data-r>Studies on clinical proton accelerators, including a Mevion Hyperscan, with plans computed on RayStation’s Monte Carlo engine.</p></div>'+
    '<div><span class="lab kick" data-r>Open manuscripts</span><p data-r>Author manuscripts are freely available from PubMed; ARE helps anyone who has difficulty accessing a paper.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="publications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Publications</span><h2 class="d2 split">The record, <em>in print.</em></h2></div><p data-r>Recent papers on thermoacoustic range verification. Titles link to the publishers’ websites; author manuscripts are freely available from PubMed.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Proton centres, physicists and partners</span>'+
   '<h2 class="big split">Talk to <em>ARE.</em></h2>'+
   '<p class="sub" data-r>For research collaborations, questions about the tARV, or help accessing a manuscript, write to Acoustic Range Estimates or call.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email ARE '+ARR+'</a><a class="btn" href="tel:+14147456577">+1 414 745 6577</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Acoustic Range Estimates, LLC<br>Chicago, Illinois</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>+1 414 745 6577</p></div>'+
    '<div><span class="lab" data-r>Latest study</span><p data-r><a class="ul" href="'+REDJ+'" target="_blank" rel="noopener">Red Journal, 2026</a><br>Cable-free tARV, liver phantom</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Acoustic Range Estimates, LLC<br>Chicago, Illinois</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>+1 414 745 6577</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/evidence">Evidence</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/publications">Publications</a></div>'+
   '<div class="c"><span class="lab">Research use</span>The tARV is a research tool and not yet authorized for patient care.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 62" aria-hidden="true"><text x="500" y="52" text-anchor="middle" style="font-family:\'Manrope\',system-ui,sans-serif;font-weight:500;font-size:64px;letter-spacing:-.02em">Acoustic Range Estimates</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Acoustic Range Estimates, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",how:"story",technology:"technology",evidence:"evidence",team:"team",publications:"publications",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Acoustic Range Estimates — thermoAcoustic range verification for proton therapy, Chicago, IL",x:"Home"};
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
