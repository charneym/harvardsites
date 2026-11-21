/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="arp-tm">'+TEAM.map(function(p){
  return '<li><figure><img src="'+p[3]+'" alt="'+esc(p[0])+'" width="400" height="500" loading="lazy" decoding="async"></figure><div class="tx"><h3>'+esc(p[0])+'</h3><span class="lab cr">'+esc(p[1])+'</span><p>'+esc(p[2])+'</p></div></li>'}).join("")+'</ul>'+
  '<div class="adv"><span class="lab kick" data-r>Co-inventor</span><p data-r><span>Dr. Antonia Kolokythas, oral and maxillofacial surgeon</span><i aria-hidden="true">·</i><span>co-developer of the microRNA method</span><i aria-hidden="true">·</i><span>contact principal investigator on the NCI STTR award</span></p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Non-invasive oral diagnostics<span class="nomob"> · Chicago, Illinois</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A faster answer</span><span class="l">to <em>oral cancer.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>A simple, painless brush biopsy, read by its microRNA. Arphion is bringing oral cancer detection to the dentist and their staff, so a surgical biopsy is no longer needed.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How the test works '+ARR+'</a><a class="btn" href="#/pipeline">Pipeline</a></div></div>'+
   '<p class="lab hcap" data-r>Human Argonaute2 holding a microRNA guide strand (cyan), atom by atom from the crystal structure PDB 4W5N.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The need</span>'+
   '<h2 class="txt" id="mani">More than 600 diseases occur in the mouth, and the gold standard for telling them apart is still a visual inspection followed by a surgical biopsy. Arphion is replacing the scalpel with <em>a painless brush.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1M</span><p class="k">surgical oral biopsies a year in the U.S., mostly to tell oral cancer from benign lesions</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">43,000</span><p class="k">new cases of oral cancer each year in the U.S.</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">91%</span><p class="k">sensitivity, with 86% specificity, for the improved prototype classifier on 75 brush biopsy samples</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Non-invasive</span><p data-r>Cells are collected with a cytology brush, right in the dental chair, with no scalpel, no numbing and no referral to an oral surgeon.</p></div>'+
    '<div><span class="lab kick" data-r>Molecular, not visual</span><p data-r>Cell-shape cytology misses the earliest cancers. Arphion measures microRNA, a molecular genetic signal that is accurate and reproducible in oral lesions.</p></div>'+
    '<div><span class="lab kick" data-r>Repeatable</span><p data-r>Painless sampling at the same site allows repeat testing, so the test can also follow patients after treatment.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">From a brush <em>to an answer.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Brush</span><span>Preserve</span><span>Measure</span><span>Classify</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A brush, not a scalpel.</h2><p>The dentist brushes the suspect lesion to collect its cells: in under a minute of gentle brushing, with no surgical biopsy and no numbing.</p></article>'+
     '<article class="step"><h2>Cells kept in solution.</h2><p>The cells are preserved in solution in the Arphion collection kit and sent to Arphion for analysis, with results back to the clinic in days.</p></article>'+
     '<article class="step"><h2>The microRNA is read.</h2><p>RNA is extracted and amplified, and the levels of a panel of microRNAs are measured. Arphion’s founders showed that microRNA from brush biopsies separates tumour from normal epithelium.</p></article>'+
     '<article class="step"><h2>A classifier gives the answer.</h2><p>A microRNA classifier tells cancer from benign lesions, and a simple diagnostic report returns to the clinician to discuss with the patient. The improved prototype reached 91% sensitivity and 86% specificity, matching surgical biopsy.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Tests for the lesions <em>dentists see.</em></h2></div><p data-r>Products are under development for benign and malignant diseases of the mouth, starting with oral lichen planus and oral squamous cell carcinoma, from the same brush and the same microRNA platform.</p></div>'+
   progs()+
   '<div class="plat path">'+
    '<div><span class="lab kick" data-r>Regulatory pathway</span><p data-r>The tests will first be offered as Laboratory Developed Tests through a CLIA-certified laboratory, followed by a 510(k) application to the FDA.</p></div>'+
    '<div><span class="lab kick" data-r>Business model</span><p data-r>Arphion will sell diagnostic kits and provide the clinical evaluation of samples, through a CLIA-certified laboratory partner or directly as it expands.</p></div>'+
    '<div><span class="lab kick" data-r>Intellectual property</span><p data-r>Rights to the microRNA method licensed from the University of Illinois Chicago in 2016; US patent 11,639,528 granted in 2023.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Oral pathology, <em>molecular biology.</em></h2></div><p data-r>Arphion was founded by two University of Illinois Chicago scientists who have worked together on oral cancer since 2006, with a business manager who has taken SBIR technology to market before.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the lab <em>toward the clinic.</em></h2></div><p data-r>In September 2026 the National Cancer Institute funded Arphion to refine its classifier for telling oral cancer from benign leukoplakia.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, clinicians and investors</span>'+
   '<h2 class="big split">Bring the brush <em>to the clinic.</em></h2>'+
   '<p class="sub" data-r>Arphion is looking for business partners to bring its test into dental clinics. We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Dr. Schwartz '+ARR+'</a><a class="btn" href="#/team">Meet the team</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Arphion Ltd<br>2242 W. Harrison St., Suite 201-204<br>Chicago, IL 60612</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p><p class="note" data-r>Dr. Joel Schwartz, President</p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r>National Cancer Institute<br>STTR Phase I, 2026</p><a class="ul lk" href="'+R_STTR+'" target="_blank" rel="noopener" data-r>NIH RePORTER</a></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>2242 W. Harrison St.<br>Suite 201-204<br>Chicago, IL 60612</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Non-invasive oral<br>diagnostics</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 96" aria-hidden="true"><text x="320" y="80" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-weight:500;font-size:96px;letter-spacing:.06em"><tspan fill="#f3f5fa">ARPHION</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Arphion Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Arphion — A faster answer to oral cancer, Chicago",x:"Home"};
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
