/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["A powerful assay","préXclude measures sFlt-1 and PlGF, well-established biomarkers that deliver over 95% accuracy in centralized lab assays. Our proprietary technology brings that measurement to an affordable near-patient test.",'<path d="M28 6v14"/><path d="M28 20l-9-9M28 20l9-9"/><path d="M14 40h28"/><path class="a" d="M20 34v12M36 34v12"/><circle class="f" cx="28" cy="40" r="3"/>'],
  ["A compact instrument","eFlow, our patented platform, pairs a single-use cartridge with a compact, low-cost handheld reader: the sensitivity of a lab assay at the point of care, with minimal hands-on time and training.",'<rect x="12" y="10" width="32" height="40"/><rect x="17" y="15" width="22" height="18"/><path class="a" d="M22 50v-10h12v10"/>'],
  ["Near the patient","A fingerstick of blood is all it needs, so the test can run in hospitals and clinics, and even at home, during routine prenatal checkups.",'<circle cx="28" cy="20" r="9"/><path d="M12 50c0-10 7-17 16-17s16 7 16 17"/><path class="a" d="M40 8c3 3 3 7 0 10"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>préXclude<span class="nomob"> · Rapid preeclampsia test</span> · Basel, Switzerland</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Preeclampsia,</span><span class="l">seen sooner,</span><span class="l"><em>near the patient.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>MOMM Diagnostics is developing préXclude, a rapid sFlt-1/PlGF test for our eFlow reader. A simple fingerstick of blood gives a result in minutes, in hospitals, clinics and even at home.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/test">How the test works '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Preeclampsia affects 5 to 8% of all pregnancies, progresses rapidly and can be deadly for mother and baby. We are building the timely, accurate and affordable test it has been missing, to <em>bring peace of mind to families worldwide.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt;95%</span><p class="k">Accuracy of the sFlt-1/PlGF biomarkers in centralized lab assays, now in a near-patient test</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20&nbsp;µL</span><p class="k">Of fingerstick blood is all préXclude needs</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.5M</span><p class="k">Gates Foundation grant (2025) for the PREVENT study in Kenya, Nigeria and Rwanda</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Our test · préXclude</span><h2 class="d3">One drop, <em>two markers, one ratio.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sample</span><span>Separate</span><span>Read</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A drop from a fingertip.</h2><p>A fingerstick gives 20 µL of whole blood, placed in the sample well of the single-use préXclude cartridge. No blood draw and no central lab.</p></article>'+
     '<article class="step"><h2>Plasma flows to the markers.</h2><p>The cartridge holds back the blood cells and the plasma flows along the strip, where antibodies capture the two key preeclampsia proteins, sFlt-1 and PlGF.</p></article>'+
     '<article class="step"><h2>The reader gives the ratio.</h2><p>The cartridge goes into the handheld eFlow reader, which measures both markers and reports the sFlt-1/PlGF ratio, helping assess the likelihood of severe preeclampsia in the coming weeks.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Lab sensitivity, <em>at the point of care.</em></h2></div><p data-r>préXclude runs on eFlow, our patented diagnostics platform: an electrochemical, enzyme-linked lateral flow immunoassay on a single-use cartridge, read by a handheld instrument. eFlow is built to take more tests, and we are happy to discuss novel biomarkers with researchers.</p></div>'+
   caps()+
   '<p class="note-s tnote" data-r>préXclude and eFlow are in development and not yet available for commercial use. Accuracy: Andersen et al., J Am Soc Hypertens 2015; van Helden et al., Clin Biochem 2015; Zeisler et al., Ultrasound Obstet Gynecol 2019; Hund et al., BMC Pregnancy and Childbirth 2014.</p>'+
  '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Biosensors, assays <em>and the clinic.</em></h2></div><p data-r>Founded in 2018 from a partnership between Avails Medical, Inc. and the Swiss research institute Empa, MOMM brings together biosensor physicists, assay scientists and engineers who have worked as nurses and healthcare professionals.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Partners and funders</span><p class="cr" data-r><span>Gates Foundation</span><span>Innosuisse</span><span>Empa</span><span>Swiss TPH</span><span>CSEM</span><span>FHNW School of Life Sciences</span><span>Swiss Nanoscience Institute</span><span>Venturelab</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, studies <em>and partners.</em></h2></div><p data-r>The latest on préXclude and eFlow, from the Gates Foundation grant to the PREVENT study with Swiss TPH.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, researchers and investors</span>'+
   '<h2 class="big split">Talk to <em>MOMM.</em></h2>'+
   '<p class="sub" data-r>Whether you want to explore near-patient testing for your patients, test a novel biomarker on eFlow, or join us as an investor, we would love to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:Mathias.wipf@mommdiagnostics.com">Email us '+ARR+'</a><a class="btn" href="'+CONTACT+'" target="_blank" rel="noopener">Contact form</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>MOMM Diagnostics<br>Hochbergerstrasse 60C<br>4057 Basel, Switzerland</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:Mathias.wipf@mommdiagnostics.com">Mathias.wipf@<wbr>mommdiagnostics.com</a></p></div>'+
    '<div><span class="lab" data-r>Online</span><p data-r><a class="ul" href="https://www.linkedin.com/company/84518481/" target="_blank" rel="noopener">LinkedIn</a><br><a class="ul" href="'+CONTACT+'" target="_blank" rel="noopener">Contact form</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Hochbergerstrasse 60C<br>4057 Basel, Switzerland</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:Mathias.wipf@mommdiagnostics.com">Email us</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/test">Our test</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">In development</span>préXclude rapid preeclampsia test · eFlow platform</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="74" text-anchor="middle" style="font-family:\'Jost\',Arial,sans-serif;font-weight:400;font-size:70px;letter-spacing:.06em">MOMM DIAGNOSTICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 MOMM Diagnostics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",test:"story",technology:"technology",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"MOMM Diagnostics — préXclude, the rapid preeclampsia test",x:"Home"};
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
