/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) =================
   Sources: NSF SBIR awards 2433137 (Phase I, with its project outcomes report) and 2604163 (Phase II), neuraltrak.com, and
   the "Why Should I Invest?" podcast episode naming Linxi Shi as founder and CEO. Nothing else is claimed. */
function caps(){var C=[
  ["Physics-informed AI","<span class=\"nw\">Physics in,</span> <span class=\"nw\">not just pixels</span>","Generative AI that reconstructs from the X-ray data itself, guided by a physics model of detector geometry, noise and scatter, rather than cleaning up images after the fact.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M16 28H40M28 16V40"/>'],
  ["Limited angle","<span class=\"nw\">A partial sweep</span> <span class=\"nw\">is enough</span>","High-fidelity 3D from as little as 50 to 90 degrees of rotation, where conventional CT needs 180 degrees or more.",'<path d="M10 40A20 20 0 0 1 46 40"/><path class="a" d="M10 40A20 20 0 0 1 20 22"/><circle cx="28" cy="40" r="3"/>'],
  ["Real-time calibration","<span class=\"nw\">Steady geometry</span> <span class=\"nw\">by hand</span>","Real-time geometric calibration follows non-reproducible, hand-held C-arm motion, so low-cost, non-motorized machines stay accurate.",'<path d="M8 36C16 30 20 40 28 34S40 26 48 30"/><path class="a" d="M8 30C18 30 38 30 48 30"/>'],
  ["Works with your C-arm","<span class=\"nw\">No changes</span> <span class=\"nw\">to the machine</span>","Validated on image-intensifier and flat-panel C-arms. Data is captured from the external monitor, with no internal modification of the X-ray system.",'<path d="M40 12A18 18 0 1 0 40 44"/><rect class="a" x="34" y="8" width="14" height="6"/><rect class="a" x="34" y="42" width="14" height="6"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function svc(){var S=[
  ["Spine surgery","Live 3D guidance for spine screw placement, with vertebral bodies and pedicles preserved in the reconstruction."],
  ["Orthopedic and urologic procedures","3D views during orthopedic work and procedures such as kidney stone removal, without bringing in a CT scanner."],
  ["Ambulatory surgery centers","Moving complex spine procedures from hospitals to outpatient centers closer to home, on equipment they already own."],
  ["Low-resource settings","Low-dose, CT-quality imaging for community hospitals, rural clinics and global low-resource settings."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["2024","NSF SBIR Phase I award, Directorate for Technology, Innovation and Partnerships."],
  ["2025","Phase I complete: an engineering prototype validated on spine phantoms, image-intensifier and flat-panel C-arms."],
  ["2026","NSF SBIR Phase II: clinical validation in realistic surgical settings and readiness for FDA review."]];
  return '<ol class="hst">'+H.map(function(h){return '<li data-r><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero.webp" width="1094" height="1237" alt="A standard mobile C-arm X-ray system, the kind of machine NeuralTrak software turns into a 3D scanner" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Low-dose 3D imaging<span class="nomob"> · Los Altos, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">See in 3D</span> <span class="l"><em class="nw">with the C-arm</em></span> <span class="l"><em class="nw">you already have.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>NeuralTrak software turns a standard 2D mobile C-arm into a low-dose 3D scanner, so surgeons get CT-like images in the operating room without buying a CT.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>A democratization of imaging</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Advanced 3D imaging</span> <span class="nw">has been limited to</span> <span class="nw">high-resource hospitals.</span> <em><span class="nw">We bring it to</span> <span class="nw">every operating room,</span> <span class="nw">with software alone.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;40 s</span><p class="k">for a full 3D volume on a standard GPU, after a C-arm sweep of about 12 seconds</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50–90°</span><p class="k">of rotation is enough, where conventional CT needs 180 degrees or more</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~3%</span><p class="k">mean Hounsfield-unit deviation from ground-truth CT on spine phantoms</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">From sweep to volume</span><h2 class="d3"><span class="nw">Two dimensions in,</span> <em class="nw">three out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sweep</span><span>Calibrate</span><span>Reconstruct</span><span>Guide</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">A short sweep</span> <span class="nw">of the C-arm.</span></h2><p>About 12 seconds of pulsed fluoroscopy at 15 frames a second, over as little as 50 to 90 degrees, captured from the C-arm&#39;s external monitor.</p></article>'+
     '<article class="step"><h2><span class="nw">Calibrated</span> <span class="nw">in real time.</span></h2><p>Hand-held motion is never perfectly repeatable. Real-time geometric calibration estimates where every frame was taken from, for smooth, accurate geometry.</p></article>'+
     '<article class="step"><h2><span class="nw">Physics-informed AI</span> <span class="nw">fills the gaps.</span></h2><p>Trained on hundreds of anonymized CT scans and a physics model of the detector, noise and scatter, it reconstructs what a limited sweep leaves out.</p></article>'+
     '<article class="step"><h2><span class="nw">A 3D volume</span> <span class="nw">for guidance.</span></h2><p>In under 40 seconds: vertebral bodies and pedicles clear enough to guide spine screws, within about 3% of CT in Hounsfield units.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">Upgrade the C-arm,</span> <em class="nw">don&#39;t replace it.</em></h2></div><p data-r>Mobile C-arms rotate over a small angle under tight dose limits, so they give flat 2D images. Our software reconstructs 3D from that limited data, on equipment already in the operating room.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Dose</span><p class="cr" data-r><span>Pulsed fluoroscopy, 15 fps</span><span>60–80% less dose than CT (estimated)</span><span>No repeat scans</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split"><span class="nw">Where 3D</span> <em class="nw">changes surgery.</em></h2></div><p data-r>Spine first, then orthopedic and urologic surgery, in hospitals, outpatient surgical centers and settings that could never justify a CT scanner.</p></div>'+
   svc()+
   '<div class="trn" data-r><span class="lab kick">Phase II, 2026</span><p>Clinical validation in realistic surgical environments, image quality across systems and patient anatomies, and FDA regulatory readiness. Collaborations with Stanford and UC Irvine are planned to test the system with surgeons.</p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split"><span class="nw">Imaging physics</span> <em class="nw">meets AI.</em></h2></div><p data-r>Our goal is to make real-time 3D imaging available in every operating room, clinic, ambulance and rural health setting.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Leadership</span><ul>'+
     '<li data-r><span class="nm">Linxi Shi</span><span class="lab rl">Founder and chief executive officer</span></li>'+
    '</ul></div>'+
    '<div class="engpol"><span class="lab kick" data-r>Milestones</span>'+hist()+'</div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Funded by</span><p class="cr" data-r><span>U.S. National Science Foundation</span><span>SBIR Phase I and II</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Phase II,</span> <em class="nw">funded in 2026.</em></h2></div><p data-r>Awards, results and interviews. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Bring 3D</span> <em class="nw">to your OR.</em></h2>'+
   '<p class="sub" data-r>Surgeons, surgical centers, hospitals and imaging partners: tell us about your C-arm and your procedures, and we will come back to you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email NeuralTrak '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r><span>NeuralTrak, Inc.</span><br><span>Los Altos, California</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r><span>NSF SBIR Phase II</span><br><span>Award 2604163, 2026</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>NeuralTrak, Inc., Los Altos, California</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Physics-informed AI</span>Low-dose 3D imaging from standard 2D mobile C-arms, for surgical guidance.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:400;font-size:52px;letter-spacing:.06em">NEURALTRAK</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 NeuralTrak, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",technology:"technology",applications:"applications",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"NeuralTrak — 3D imaging from the C-arm you already have",x:"Home"};
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
