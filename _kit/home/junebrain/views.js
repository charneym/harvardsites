/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Device","Neuro-i SS-OCT","A point-of-care swept-source OCT with a wearable headset. Image acquisition is automated, so minimally trained users can run it; the design is light and affordable enough to monitor patients inside and outside the clinic, weekly or monthly, and is built to match the performance of clinical devices.",
   '<path d="M14 50V14q0-6 6-6h12q6 0 6 6v36z"/><path class="a" d="M18 12h16v10H18z"/><path d="M40 40q0-8 7-8h3q4 0 4 5v6q0 5-4 5h-3q-7 0-7-8z"/><path class="a" d="M42 41h10"/>'],
  ["Software and service","The Reading Center","Automated, quantitative analysis of OCT data for clinical research. JDAe, a deep-learning engine, segments eight or more retinal layers and measures thickness across the nine ETDRS subfields; JAM lets a grader correct a boundary by hand, and an experienced clinician checks the quality of every result.",
   '<path d="M6 24q22-10 44 0"/><path d="M6 31q11-3 17 3t17-3q6-2 10-1"/><path class="a" d="M6 38q11-3 17 3t17-3q6-2 10-1"/><path d="M6 45q22-6 44 0"/>'],
  ["2026 pilot programme","A free OCT analysis","Research teams can send one de-identified OCT volume from a Cirrus, Spectralis or Neuro-i device and receive a sample report the next day: thickness maps, ETDRS-grid values and full macula data. Licensing the JDAe and JAM tools for in-house use follows on a call.",
   '<circle cx="28" cy="28" r="20"/><circle cx="28" cy="28" r="12"/><circle class="a" cx="28" cy="28" r="4"/><path d="M14 14l8.5 8.5M42 14l-8.5 8.5M14 42l8.5-8.5M42 42l-8.5-8.5"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Neuro-i SS-OCT<span class="nomob"> · Eye and brain health</span> · Baltimore</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Retinal imaging</span><span class="l">for the eye</span><span class="l"><em>and the brain.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>JuneBrain develops telehealth OCT devices and AI software to monitor neurological and retinal disease remotely: the Neuro-i SS-OCT, a portable, automated retinal imager with a wearable headset, and a Reading Center that measures the retina layer by layer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/products">Our products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Nearly a billion people live with retinal and neurological diseases like MS and macular degeneration, yet monitoring waits on infrequent clinic visits and imaging exams. We bring OCT to the patient, <em>so change is seen between visits.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">~1B</span><p class="k">People worldwide living with retinal and neurological diseases such as MS and AMD</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">8+</span><p class="k">Retinal layers segmented automatically by JuneBrain’s deep-learning engine</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.1M</span><p class="k">In NSF SBIR and STTR awards for the wearable retinal imaging device</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology · Neuro-i SS-OCT</span><h2 class="d3">Light in, <em>layers out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Align</span><span>Scan</span><span>Segment</span><span>Report</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The headset finds the eye.</h2><p>The patient puts on the Neuro-i headset. Acquisition is automated, keeping the scanning light aligned with the eye, so a minimally trained user, or the patient, can run the scan.</p></article>'+
     '<article class="step"><h2>Light scans the retina.</h2><p>Swept-source optical coherence tomography sends near-infrared light through the pupil and sweeps it across the back of the eye. The light echoing from each depth builds a cross-section of the retina, painlessly and in seconds.</p></article>'+
     '<article class="step"><h2>AI traces every layer.</h2><p>A deep-learning model, published in Medical Image Analysis, segments eight or more retinal layers and measures their thickness, including the nerve fibre and ganglion cell layers that track neurodegeneration in MS.</p></article>'+
     '<article class="step"><h2>A report for each doctor.</h2><p>The results go to providers as a report: detailed images and metrics for the ophthalmologist, specific biomarkers for the neurologist. Scans taken weekly or monthly show how a retina changes over time.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">A device, a reading center, <em>one workflow.</em></h2></div><p data-r>JuneBrain is building a network of telehealth device and AI software products designed to work together, from scan to report, for clinical research today and for point-of-care settings next.</p></div>'+
   caps()+
   '<p class="note-s tnote" data-r>JuneBrain’s products and services are for research and investigational use only and are not for clinical diagnosis. Segmentation: He Y, Carass A, Liu Y, et al. Structured layer surface segmentation for retina OCT using fully convolutional regression networks. Med Image Anal. 2021;68:101856.</p>'+
  '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineers, clinicians <em>and neurologists.</em></h2></div><p data-r>Founded in Maryland by Samantha Scott, PhD, and headquartered in Baltimore, JuneBrain is a certified women’s business enterprise whose biomedical engineers, software developers, neurologists and ophthalmologists work with Johns Hopkins University and the University of Maryland, Baltimore.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Advisors</span><p class="cr" data-r>'+ADVISORS.map(function(a){return '<span>'+esc(a)+'</span>'}).join("")+'</p></div>'+
   '<div class="bk bk2"><span class="lab kick" data-r>Collaborators and backers</span><p class="cr" data-r><span>Johns Hopkins University</span><span>University of Maryland, Baltimore</span><span>Texas A&amp;M University</span><span>National Science Foundation</span><span>MDIC</span><span>AgeTech Collaborative from AARP</span><span>WBENC</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards, grants <em>and milestones.</em></h2></div><p data-r>The latest on the Neuro-i SS-OCT and the Reading Center, from the 2025 BioChallenge to the NSF awards behind the device.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers, clinicians and investors</span>'+
   '<h2 class="big split">Talk to <em>JuneBrain.</em></h2>'+
   '<p class="sub" data-r>Whether you want a free analysis of your own OCT data, want to bring retinal imaging to your patients, or want to back the next stage of the Neuro-i, we would love to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:info@junebrain.com">Email us '+ARR+'</a><a class="btn" href="'+PILOT+'" target="_blank" rel="noopener">Free OCT analysis</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>JuneBrain, Inc.<br>101 W. Dickman Street, Suite 703<br>Baltimore, MD 21230</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:info@junebrain.com">info@junebrain.com</a></p></div>'+
    '<div><span class="lab" data-r>Online</span><p data-r><a class="ul" href="https://www.linkedin.com/company/junebrain/" target="_blank" rel="noopener">LinkedIn</a><br><a class="ul" href="'+PILOT+'" target="_blank" rel="noopener">2026 pilot programme</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>101 W. Dickman Street, Suite 703<br>Baltimore, MD 21230</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:info@junebrain.com">info@junebrain.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Investigational use only</span>Not for clinical diagnosis. Neuro-i SS-OCT · Reading Center</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="74" text-anchor="middle" style="font-family:\'Outfit\',Arial,sans-serif;font-weight:300;font-size:84px;letter-spacing:.02em">JuneBrain</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 JuneBrain, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"JuneBrain — retinal imaging for eye and brain health",x:"Home"};
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
