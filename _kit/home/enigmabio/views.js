/* ================= VIEWS (home only; nav items scroll to sections, build-out pages via the kit's buildout module) =================
   Sources: enigmabiomedicalgroup.com (Who We Are, Programs & Services, Press Releases, the footer address and email)
   and NIH RePORTER project 1R44AG102186-01 (abstract, narrative, award amount and date, and "Hartmuth C Kolb,
   Chief Scientific Officer"). The hero model is PDB 7P65, credited on the page. Nothing else is claimed. */
function caps(){var C=[
  ["Six isoforms, two groups","<span class=\"nw\">Three repeats,</span> <span class=\"nw\">or four</span>","The adult brain splices tau into six isoforms, carrying either three or four repeats of the microtubule-binding domain. In disease, both groups are abnormally hyperphosphorylated.",'<path d="M10 20h36M10 30h36M10 40h36"/><path class="a" d="M10 20h22M10 30h22M10 40h22"/>'],
  ["One disease, one signature","<span class=\"nw\">4R marks</span> <span class=\"nw\">PSP and CBD</span>","Alzheimer's carries 3R and 4R in roughly equal measure. Pick's disease runs 3R. Progressive supranuclear palsy and corticobasal degeneration are predominantly 4R.",'<rect x="8" y="26" width="10" height="22"/><rect class="a" x="23" y="14" width="10" height="34"/><rect class="a" x="38" y="18" width="10" height="30"/>'],
  ["An unmet need","<span class=\"nw\">Confirmed only</span> <span class=\"nw\">after death</span>","Definitive diagnosis of a 4R tauopathy still requires post-mortem confirmation, which delays detection, impedes research into mechanism and slows therapeutic development.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M28 18v12l8 6"/>'],
  ["The burden","<span class=\"nw\">Faster, and</span> <span class=\"nw\">costlier, than AD</span>","PSP and CBD together affect hundreds of thousands worldwide at 5 to 7 per 100,000. They often progress faster than Alzheimer's, with combined motor and cognitive impairment.",'<path d="M8 44L20 30L30 36L48 14"/><path class="a" d="M8 46h40"/><circle class="a" cx="48" cy="14" r="3"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+c[0]+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function svc(){var S=[
  ["GMP production network","We manage the product and information supply chains for our PET tracers, with a GMP production network built for scale and growth as demand rises."],
  ["Users Group and Image Core","Images from the Users Group are warehoused in the Enigma Biomedical Image Core, often alongside associated imaging, blood chemistry and cognitive assessments, quality controlled and constantly curated."],
  ["Pre-competitive data sets","All parties contributing to the Image Core have access to the pre-competitive data sets, so partners in pharma and academia can read across the field rather than only their own studies."],
  ["Quality and regulatory","Quality assurance, image data management, and timely, transparent and rigorous communication with regulatory authorities under all applicable international rules."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function team(){var T=[
  ["Rick Hiatt","Board Chairman and Chief Executive Officer"],
  ["Dr Hartmuth Kolb","Chief Science Officer, and principal investigator on the 4R trial"],
  ["Dr Samantha Budd Haeberlein","Chief Medical Officer"],
  ["Jack Coffey","VP Quality and Regulatory, Corporate Officer"]];
  return '<ul>'+T.map(function(t){return '<li data-r><span class="nm">'+esc(t[0])+'</span><span class="lab rl">'+esc(t[1])+'</span></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["Aug 2026","TAUKLARIFY (florquinitau F 18 injection) is approved by the FDA for use in patients being evaluated for Alzheimer's disease."],
  ["Sep 2026","The National Institute on Aging awards $896,719 under SBIR Direct to Phase II to evaluate a 4R tau tracer in the clinic."],
  ["2026-29","A single-site trial at UT Southwestern enrols 40 participants: 10 PSP, 10 CBD, 10 CTE or TES, and 10 healthy volunteers."]];
  return '<ol class="hst">'+H.map(function(h){return '<li data-r><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero.webp" width="693" height="611" alt="Space-filling model of a tau filament from the brain of a person with progressive supranuclear palsy, five stacked subunits, from cryo-EM structure PDB 7P65" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>PET imaging biomarkers<span class="nomob"> · Knoxville, Tennessee</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Proof you can see</span> <span class="l"><em class="nw">in a living brain.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Enigma Biomedical makes and supplies PET tracers for neurodegenerative disease. One was approved by the FDA in August 2026. The next is entering the clinic for tauopathies that today can only be confirmed after death.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/trial">The 4R trial '+ARR+'</a><a class="btn" href="#/contact">Talk to us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Biomarkers changed</span> <span class="nw">what Alzheimer\'s care</span> <span class="nw">could do.</span> <em><span class="nw">For the tauopathies</span> <span class="nw">next door,</span> <span class="nw">the scan does not</span> <span class="nw">exist yet.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">Aug 2026</span><p class="k">FDA approval of TAUKLARIFY, florquinitau F 18 injection</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$896,719</span><p class="k">NIA SBIR Direct to Phase II award for the 4R tau tracer trial</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5–7</span><p class="k">people per 100,000 live with PSP or CBD, often progressing faster than Alzheimer\'s</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Which tau, which disease</span><h2 class="d3"><span class="nw">Three repeats,</span> <em class="nw">or four.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Splice</span><span>Sort</span><span>Target</span><span>Scan</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">One gene,</span> <span class="nw">six isoforms.</span></h2><p>Alternative splicing of MAPT yields six tau isoforms in the adult brain, carrying either three or four repeats of the microtubule-binding domain.</p></article>'+
     '<article class="step"><h2><span class="nw">Each disease keeps</span> <span class="nw">its own mix.</span></h2><p>Alzheimer\'s involves 3R and 4R in roughly equal proportions. Pick\'s disease is predominantly 3R. PSP and CBD are predominantly 4R, and CTE, like Alzheimer\'s, carries both.</p></article>'+
     '<article class="step"><h2><span class="nw">A tracer</span> <span class="nw">with a preference.</span></h2><p>Our fluorine-18 tracer binds 4R tau with high affinity. Preclinical results have been promising, and further testing precedes the trial itself.</p></article>'+
     '<article class="step"><h2><span class="nw">Forty people,</span> <span class="nw">one site.</span></h2><p>The Direct to Phase II study runs at UT Southwestern in Dallas: ten with PSP, ten with CBD, ten with CTE or TES and ten healthy volunteers, assessing safety and test-retest reproducibility.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="trial" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The 4R trial</span><h2 class="d2 split"><span class="nw">The diagnosis that</span> <em class="nw">waits for an autopsy.</em></h2></div><p data-r>While biomarkers have transformed how Alzheimer\'s is diagnosed and monitored, there is still no accurate in vivo tool for the 4R tauopathies. That gap is what this trial is for.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Enrolling</span><p class="cr" data-r><span>Progressive supranuclear palsy</span><span>Corticobasal degeneration</span><span>CTE and TES</span><span>Healthy volunteers</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="platform" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Platform</span><h2 class="d2 split"><span class="nw">A tracer is only</span> <em class="nw">as good as its supply.</em></h2></div><p data-r>We manage every part of the PET tracer product and information supply chain, so partners in pharma and academia can use the imaging biomarker to the fullest advantage.</p></div>'+
   svc()+
   '<div class="trn" data-r><span class="lab kick">Partner with us</span><p>We work with pharmaceutical companies, academic institutions and regional distributors, and our Users Group shares a curated, pre-competitive image core.</p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split"><span class="nw">Subject matter experts,</span> <em class="nw">end to end.</em></h2></div><p data-r>A team covering every area essential to producing and managing a portfolio of PET tracers, advised by a scientific board of clinicians and researchers in the field.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Leadership</span>'+team()+'</div>'+
    '<div class="engpol"><span class="lab kick" data-r>Recent milestones</span>'+hist()+'</div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Scientific Advisory Board</span><p class="cr" data-r><span>Chaired by Dr Serge Gauthier, McGill University</span><span>Meets regularly</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">An approval,</span> <em class="nw">and a trial ahead.</em></h2></div><p data-r>Announcements and awards, newest first. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Running a study?</span> <em class="nw">Let\'s talk tracers.</em></h2>'+
   '<p class="sub" data-r>Email us about the Users Group, tracer supply for a trial, or the 4R programme.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Enigma '+ARR+'</a><a class="btn" href="#/platform">See the platform</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r><span>Enigma Biomedical</span><br><span>308 N. Peters Road, Suite 201</span><br><span>Knoxville, Tennessee 37922</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Hero model</span><p data-r><span>PDB 7P65, a PSP tau filament</span><br><span>Shi, Zhang et al., Nature 2021</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Enigma Biomedical, 308 N. Peters Road, Suite 201, Knoxville, Tennessee 37922</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/trial">The 4R trial</a><br><a class="ul" href="#/platform">Platform</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">PET imaging biomarkers</span>For researchers and clinicians working on neurodegenerative disease.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><defs><mask id="engapF" maskUnits="userSpaceOnUse" x="0" y="0" width="900" height="62"><rect x="0" y="0" width="900" height="62" fill="#fff"/><rect x="0" y="27" width="900" height="8" fill="#000"/></mask></defs><text x="450" y="52" text-anchor="middle" mask="url(#engapF)" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:600;font-size:52px;letter-spacing:.14em">ENIGMA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Enigma Biomedical</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",tracers:"trial",trial:"trial",platform:"platform",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Enigma Biomedical — PET imaging biomarkers for neurodegenerative disease",x:"Home"};
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
