/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page CTAs scroll) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'<span class="loc">'+esc(c[3])+'</span></h3><p>'+esc(c[1])+'</p><a class="lab ul lk" href="https://champaignimaging.com/nextgen-neuroimaging/" target="_blank" rel="noopener">Details</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Pediatric neuro MRI<span class="nomob"> · Shoreview, Minnesota</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Quieter MRI,</span><span class="l"><em>built for children.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Champaign Imaging is developing GenNext NP, a pediatric MRI system that brings quieter scan sequences and motion-correction software together in a tailored head-only coil, so hard-to-image patients get a meaningful scan the first time.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology" data-to="story">How it works '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<span class="lab cap" aria-hidden="true">MRI suite · photo MART PRODUCTION, Pexels</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why Champaign Imaging</span>'+
   '<h2 class="txt" id="mani">Loud, abrupt sounds make young children flinch, and <b class="w0">movement is the enemy of MRI.</b> <em>We are making neuro MRI quieter and movement tolerant, in one integrated system.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">38%</span><span class="k">Of pediatric neuro MRIs up to age 4 with motion artifacts that render the images unusable (Jaimes et al., AJR 2021)</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$300K</span><span class="k">Potential cost of re-scans per MRI machine per year (Slipsager et al., JMRI 2020)</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$6M+</span><span class="k">In NIMH grants across four awards since 2017, including SBIR Phase II</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Reduce</span><p data-r>Patient agitation and movement in the scanner, by reducing the acoustic noise of the scan.</p></div>'+
    '<div><span class="lab kick" data-r>Optimize</span><p data-r>Image data capture for motion correction, with fewer artifacts and less data lost to movement.</p></div>'+
    '<div><span class="lab kick" data-r>Increase</span><p data-r>First-time success, so second or third scans, and the sedation they can bring, become non-issues.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">A quiet scan <em>that forgives motion.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Noise</span><span>Quiet</span><span>Motion</span><span>Correct</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The scanner is loud.</h2><p>Rapid gradient switching makes the banging that startles children. They flinch, and every movement degrades the data the image is built from.</p></article>'+
     '<article class="step"><h2>Ramp it gently.</h2><p>GenNext NP uses zero echo time (ZTE), the quietest sequence known, and multi-band SWIFT, with gradients ramped gently so the scan is far quieter.</p></article>'+
     '<article class="step"><h2>Let the head move.</h2><p>A 3D radial readout samples the centre of the data on every spoke, so the scan itself tracks where the head was, self-navigated, without stopping.</p></article>'+
     '<article class="step"><h2>Correct, and check.</h2><p>Motion-correction software realigns the data and completes the image during the session, and the technologist sees a green, yellow or red status at the console.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="gennext" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>GenNext NP</span><h2 class="d2 split">One system, <em>three elements.</em></h2></div><p data-r>The GenNext NP™ Pediatric MRI System is designed for pediatric neuroimaging and to fit into existing MRI suites. System in development, not for sale.</p></div>'+
   pfRows(PROG)+
  '</div></section>'+

  '<section class="sec dark" id="partners" data-theme="dark"><div class="wrap">'+
   '<div class="plf">'+
    '<div class="plf-t"><span class="lab kick" data-r>Collaborators</span><h2 class="d2 split">Tested where <em>children are scanned.</em></h2>'+
     '<p data-r>Champaign Imaging works with leading MRI centres of excellence and a US coil design-manufacturer to develop and test its concepts. The newest version of the coil goes first to its investigator site at the University of Iowa.</p>'+
     '<div class="act" data-r><a class="btn" href="mailto:'+MAIL+'?subject=Research%20collaboration">Talk to us about a site '+ARR+'</a></div></div>'+
    '<dl class="facts">'+
     '<div><dt class="lab">Investigator site</dt><dd>University of Iowa, MR research centre (MRRC)</dd></div>'+
     '<div><dt class="lab">Coil hardware</dt><dd>ScanMed, selected for the pediatric head coil</dd></div>'+
     '<div><dt class="lab">Intellectual property</dt><dd>Two US patents, more pending, and a patent option with the University of Minnesota</dd></div>'+
     '<div><dt class="lab">Funder</dt><dd>National Institute of Mental Health, SBIR Phase I and Phase II</dd></div>'+
    '</dl>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Imaging physics, <em>and the market.</em></h2></div><p data-r>Founded in 2015 on Dr. Curt Corum’s ideas for neuro MRI, with a business lead who has run diagnostic imaging divisions worldwide, and an advisory board of MRI clinicians and industry experts.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>milestones.</em></h2></div><p data-r>Awards, publications and agreements behind GenNext NP.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Hospitals, imaging centres, partners and investors</span>'+
   '<h2 class="big split">The first scan, <em>the one that counts.</em></h2>'+
   '<p class="sub" data-r>Interested in GenNext NP for your MRI suite, in collaborating on pediatric neuroimaging, or in Champaign Imaging’s work? We would like to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Champaign Imaging '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELS+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Shoreview, Minnesota</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELS+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Champaign Imaging LLC<br>Shoreview, Minnesota</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELS+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/gennext-np">GenNext NP</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Support</span>Research at Champaign Imaging is supported by the National Institute of Mental Health of the NIH (R44MH122028). GenNext NP is in development and not for sale.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Raleway\',sans-serif;font-weight:400;font-size:58px;letter-spacing:.04em">CHAMPAIGN</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Champaign Imaging LLC</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (nav items are taken over by buildout.js) ================= */
var SECS={about:"about",technology:"story","gennext-np":"gennext",partners:"partners",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Champaign Imaging — Quieter, motion-corrected MRI for young children, Shoreview, Minnesota",x:"Home"};
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
