/* ================= VIEWS (home only: Technology / Products / Team / News open build-out pages; Contact scrolls) ================= */
/* ================= VIEWS (home only: The problem / Technology / Team / News open build-out pages; Contact scrolls) ================= */
function parts(){return '<ul class="pfr">'+PARTS.map(function(c){return '<li><span class="lab tg">'+esc(c[1])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function miles(){return '<ol class="frs">'+MILES.map(function(a){return '<li><span class="y">'+esc(a[0])+'</span><p>'+esc(a[1])+'</p></li>'}).join("")+'</ol>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Endorectal MRI · In-bore biopsy<span class="nomob"> · Portland, Oregon</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Fuse procedures,</span><span class="l"><em>not modalities.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>The OmnEcoil is a novel device that uses the benefits of MRI for prostate cancer detection and tissue sampling in one integrated procedure, for a more efficient and accurate diagnosis.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="problem" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The problem</span>'+
   '<h2 class="txt" id="mani">The standard prostate biopsy takes <b class="w0">twelve blind samples</b> from set locations. <em>No other solid organ cancer is diagnosed this way.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">32%</span><span class="k">of cancers are missed: the needle misses the cancer</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">38%</span><span class="k">of cancers are upgraded at prostatectomy: the needle hits a low-grade part</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">45%</span><span class="k">of new diagnoses are overdiagnosed: small, low-risk cancers</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>A shot in the dark</span><p data-r>The needle is deployed into standard target areas without ever visualising a cancerous lesion. It is like playing a game of Battleship.</p></div>'+
    '<div><span class="lab kick" data-r>Built for the pre-MRI era</span><p data-r>Ultrasound shows the prostate, but not where the cancers lie within it. MRI does both, yet blind biopsy remains the gold standard.</p></div>'+
    '<div><span class="lab kick" data-r>Dr. Fergus Coakley, inventor</span><p data-r>“No woman on earth would let you randomly stick 12 needles in the breast to diagnose breast cancer.”</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">One procedure</span><h2 class="d3">See the target, <em>then sample it, in the bore.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Blind</span><span>Image</span><span>Guide</span><span>Sample</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Twelve blind cores.</h2><p>The ultrasound-guided biopsy samples twelve standard locations across the gland. Ultrasound cannot show where the cancer is, so the needle can miss it, or hit only its low-grade part.</p></article>'+
     '<article class="step"><h2>An endorectal coil.</h2><p>The disposable OmnEcoil coil sits right beside the prostate inside a standard MRI scanner. Endorectal MRI shows the gland and the suspicious target within it.</p></article>'+
     '<article class="step"><h2>A curved array of channels.</h2><p>Multiple biopsy channels form a curved array. A guide at its geometric centre, the point where the channels converge, directs the needle towards the target.</p></article>'+
     '<article class="step"><h2>Sampled in the bore.</h2><p>The needle is placed under MRI without leaving the scanner. In ex vivo testing across 15 channels, needle tips landed on average 1.7 mm laterally and 2.0 mm longitudinally from target.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="system" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The OmnEcoil system</span><h2 class="d2 split">Imaging and biopsy, <em>one device.</em></h2></div><p data-r>Designed to work with any standard MRI scanner, so radiologists or urologists can perform endorectal MRI and in-bore MRI-targeted biopsy of the prostate as a single procedure.</p></div>'+
   parts()+
  '</div></section>'+

  '<section class="sec dark" id="progress" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Progress</span><h2 class="d2 split">From prototype <em>to the clinic.</em></h2></div><p data-r>Developed with our partner research institution, Oregon Health &amp; Science University, and supported by the National Science Foundation and the National Cancer Institute.</p></div>'+
   miles()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Prostate imaging, <em>from the inside.</em></h2></div><p data-r>The innovative minds driving OmnEcoil Instruments forward: the inventor, an MRI-guided therapy pioneer, a serial medical device CEO, and a clinical advisory board from OHSU and the University of Chicago.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, papers <em>and trials.</em></h2></div><p data-r>Federal awards, the published prototype evaluation and the registered feasibility study, each linked to its public record.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Radiologists, urologists and partners</span>'+
   '<h2 class="big split">Talk to us about <em>the OmnEcoil.</em></h2>'+
   '<p class="sub" data-r>OmnEcoil operations are located at the Oregon Bioscience Incubator. Send us a note and the team will reply.</p>'+
   '<form class="cform" id="cform" novalidate data-r>'+
    '<label><span class="lab">Name</span><input name="n" required autocomplete="name"></label>'+
    '<label><span class="lab">Email</span><input name="e" type="email" required autocomplete="email"></label>'+
    '<label class="w"><span class="lab">Message</span><textarea name="m" rows="3" required></textarea></label>'+
    '<div class="w fact"><button class="btn solid" type="submit">Send message '+ARR+'</button><p class="lab cthx" id="cthx" role="status" aria-live="polite"></p></div>'+
   '</form>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Operations</span><p data-r>OmnEcoil Instruments<br>Oregon Bioscience Incubator<br>4640 SW Macadam Avenue, Suite 200D<br>Portland, OR 97239</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Clinical partner</span><p data-r>Oregon Health &amp; Science University<br>Knight Cancer Institute</p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r>NIH National Cancer Institute<br>National Science Foundation</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Operations</span>4640 SW Macadam Avenue, Suite 200D<br>Portland, Oregon 97239</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="#/contact">Send a message</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/problem">The problem</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Records</span><a class="ul" href="https://reporter.nih.gov/project-details/11186195" target="_blank" rel="noopener">NIH RePORTER</a><br><a class="ul" href="https://clinicaltrials.gov/study/NCT05362032" target="_blank" rel="noopener">ClinicalTrials.gov</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 64" aria-hidden="true"><text x="380" y="52" text-anchor="middle" style="font-family:\'Sora\',Arial,sans-serif;font-weight:500;font-size:64px;letter-spacing:.02em">OmnEcoil</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 OmnEcoil Instruments</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* the contact form: front-end only, with a thank-you state */
addEventListener("submit",function(e){var f=e.target;if(!f||f.id!=="cform")return;e.preventDefault();var ok=f.n.value.trim()&&/.+@.+\..+/.test(f.e.value)&&f.m.value.trim();
  var t=document.getElementById("cthx");if(!ok){t.textContent="Please add your name, email and a message.";return}f.reset();t.textContent="Thank you. Your message is noted.";});

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={problem:"problem",technology:"story",system:"system",progress:"progress",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"OmnEcoil Instruments — endorectal MRI and in-bore prostate biopsy in one procedure",x:"Home"};
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
