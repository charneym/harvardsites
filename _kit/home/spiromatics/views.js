/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function partRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><div class="pgm"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[2])+'</span></div>'+
   '<p>'+esc(c[3])+'</p><a class="lab lk" href="mailto:'+MAIL+'">Partner '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Lung imaging","Lung CT becomes a comprehensive suite of standard and proprietary biomarkers of lung structure and function, for precise phenotyping, prediction of disease progression and patient stratification.",
   '<path d="M27 9v13M27 22c-4 2-6 4-8 7M27 22c4 2 6 4 8 7"/><path class="a" d="M22 14c-8 2-13 12-13 26 0 5 3 7 8 6 4-1 6-4 6-9V17M32 14c8 2 13 12 13 26 0 5-3 7-8 6-4-1-6-4-6-9V17"/>'],
  ["Spirometry analytics","Signal processing and AI extract standard and novel spirometric biomarkers that go beyond FEV₁ and FVC, revealing subtle patterns of airflow limitation, variability and response to therapy.",
   '<path d="M8 46V8M8 46h40"/><path class="a" d="M8 46c3-18 9-26 18-29s14-3 20-3"/><circle class="f" cx="15" cy="27" r="2"/>'],
  ["Handheld spirometer","Under an NIH Phase I STTR award, a portable, miniature spirometer with audiovisual coaching and embedded firmware that runs the company’s algorithms, for primary care offices and monitoring at home.",
   '<rect x="20" y="16" width="16" height="32"/><path d="M24 16V8h8v8"/><path class="a" d="M24 25h8M24 30h8"/><circle class="f" cx="28" cy="40" r="2"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function backers(){return '<div class="bk light-bk"><span class="lab kick" data-r>Support</span><p class="cr" data-r><span>NIH Phase I STTR, National Library of Medicine</span><i>·</i><span>UAB Blazer Bridge Fund</span><i>·</i><span>Bill L. Harbert Institute for Innovation and Entrepreneurship</span></p></div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Where it<br>applies</span><div><dl>'+
  [["COPD","The primary focus: earlier detection and objective, continuous tracking of airflow obstruction"],
   ["Asthma and bronchiectasis","Related obstructive lung diseases, phenotyped and monitored with the same imaging and spirometry biomarkers"],
   ["Primary care","A two-minute, patient-friendly measurement for clinics that often skip spirometry because of its complexity"],
   ["At home","Monitoring between visits, to detect exacerbations earlier than patients report symptoms"]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From spiromatics.com, the NIH RePORTER abstract for award 1R41LM015295 (2025) and UAB News (2026).</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>AI-based lung function solutions<span class="nomob"> · A UAB startup</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Reading the lungs</span><span class="l"><em>with new precision.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Spiromatics turns lung CT and spirometry into reproducible, AI-driven biomarkers for phenotyping, monitoring and predicting obstructive lung disease: COPD, asthma and bronchiectasis.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/mechanism">How it works '+ARR+'</a><a class="btn" href="#/technology">Technology</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">The way abnormal lung function is diagnosed has barely changed since the 1940s, and about 70% of people with spirometry-defined obstruction remain undiagnosed. <em>Spiromatics was founded to change both.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">~10%</span><p class="k">More patients with COPD the approach may identify, roughly five years earlier than standard criteria</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30 s</span><p class="k">The aim for an automated spirometry result, against up to 30 minutes and a pulmonologist’s reading today</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">42M</span><p class="k">People in the United States living with obstructive lung diseases such as COPD and asthma</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">One breath, <em>read in full.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Exhale</span><span>Ratio</span><span>Shape</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Exhale: the whole curve.</h2><p>A forced exhalation traces a curve of volume over time. Conventional spirometry keeps two numbers from it; Spiromatics keeps the whole shape.</p></article>'+
     '<article class="step"><h2>The ratio: FEV₁ over FVC.</h2><p>The standard test compares the volume blown out in the first second (FEV₁) with the total (FVC), against a threshold that depends on population demographics that need frequent updating.</p></article>'+
     '<article class="step"><h2>The shape: new biomarkers.</h2><p>Spiromatics’ proprietary method analyses the shape of the volume curve with signal processing and AI, detecting airflow limitation that the ratio misses: about 10% more patients with COPD.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Two views of the lungs, <em>one platform.</em></h2></div><p data-r>Validated computational and AI-driven biomarkers that capture classical and novel indicators of lung health, from the CT scan and from the breath, supported by peer-reviewed publications and patents.</p></div>'+
   caps()+
   backers()+
  '</div></section>'+

  '<section class="sec dark2" id="partners" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Partners</span><h2 class="d2 split">Built for trials, devices <em>and research.</em></h2></div><p data-r>Spiromatics works with pharmaceutical, medical device and research partners, providing consistent, quantitative measures of lung structure and function for clinical trials, drug development and imaging-based studies.</p></div>'+
   partRows(PART)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Pulmonology and engineering, <em>under one roof.</em></h2></div><p data-r>Spiromatics was born from a shared vision among experts in pulmonology, biomedical engineering, and electrical and computer engineering, building on more than a decade of collaborative research at UAB.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Founded</span><p data-r>In 2023, at the University of Alabama at Birmingham, to bring precision and reproducibility to lung disease assessment.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>The first startup backed by the UAB Blazer Bridge Fund, and a Phase I STTR award from the National Institutes of Health in 2025.</p></div>'+
    '<div><span class="lab kick" data-r>Next</span><p data-r>Preparing the prototype spirometer for FDA clearance and commercialisation, with a Phase II STTR proposal and a Birmingham manufacturing partner planned.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the lab <em>to the clinic.</em></h2></div><p data-r>The latest on Spiromatics, from its NIH award to coverage by the University of Alabama at Birmingham.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Pharma, device and academic partners</span>'+
   '<h2 class="big split">Let’s talk about <em>lung function.</em></h2>'+
   '<p class="sub" data-r>We are happy to answer any questions about our imaging and spirometry biomarkers, in person or on Zoom.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Spiromatics '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Company</span><p data-r>Spiromatics, Inc.<br>Camden, Delaware</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Research home</span><p data-r>University of Alabama at Birmingham<br>Birmingham, Alabama</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Company</span>Spiromatics, Inc.<br>Camden, Delaware</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/partners">Partners</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Lung imaging and spirometry biomarkers · COPD, asthma, bronchiectasis</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="62" text-anchor="middle" style="font-family:\'Jost\',Arial,sans-serif;font-weight:700;font-size:72px">Spiromatics</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Spiromatics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story",partners:"partners",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Spiromatics — AI-based lung function solutions",x:"Home"};
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
