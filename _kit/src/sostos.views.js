/* ================= VIEWS (home only: Technology / Products / Team / News open build-out pages via _kit/lib/buildout.js;
   Contact and in-page CTAs scroll). Hero: the PCR strip render right of a type-led headline (their tagline), the patient
   journey as its bottom band; then dark and bone grounds alternate: statement + stats (bone), the assay story (dark),
   technology tiles (bone), products (dark), team masthead (bone), news (dark), contact (bone). Content is never hidden at rest
   (DW): reveals only enhance (see the failsafe in site.js). ================= */
function tiles(){return '<div class="ptile-g">'+PROPS.map(function(c){
  return '<div class="ptile"><span class="pm word">'+esc(c[0])+(c[1]?'<small>'+esc(c[1])+'</small>':'')+'</span><h3>'+esc(c[2])+'</h3><p>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
function prods(){return '<div class="sxp">'+PROD.map(function(c,i){
  return '<article class="sxr"><span class="lab sxn">'+String(i+1).padStart(2,"0")+'</span><div class="sxid"><h3>'+esc(c[0])+'</h3><span class="lab sxk">'+esc(c[1])+'</span></div>'+
   '<p class="sxd">'+esc(c[2])+'</p><div class="sxs"><span class="lab">Status</span><p>'+esc(c[3])+'</p><a class="lab ul lk2" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+' '+ARR+'</a></div></article>'}).join("")+'</div>'}
function mhList(label,arr){return '<div class="mh-group"><p class="mh-label">'+label+'</p><ul class="mh-list">'+arr.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function lst(a){return a.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')}
var ICO={scr:'<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="17" cy="17" r="10"/><path d="M24.5 24.5L34 34"/><path d="M12 17h10M17 12v10"/></svg>',
 sel:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 6V16"/><path d="M20 16L10 26M20 16L30 26"/><circle cx="20" cy="6" r="2.4"/><circle cx="10" cy="29" r="3.2"/><circle cx="30" cy="29" r="3.2"/></svg>',
 drug:'<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="7" y="15" width="26" height="10" transform="rotate(-35 20 20)"/><path d="M15.4 13.4L20.9 21.3" transform="rotate(0)"/></svg>'};
function vHome(){
  var PR=MOBILE()?'':' data-r';setTimeout(pilReveal,60);
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>AI for precision oncology<span class="nomob"> · Morgantown, West Virginia</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Precision for</span><span class="l"><em>every patient.</em></span></h1>'+
    '<i class="hrule" aria-hidden="true" data-r></i>'+
    '<div class="hx-foot"><p class="s" data-r>Cancer Treatment Optimization Solutions: AI software and gene-expression assays that guide each patient’s care, from diagnosis to treatment selection and new drug options.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '</div>'+
   '<ul class="pil" aria-label="Across the patient journey">'+
    '<li class="p1" data-r><span class="pic">'+ICO.scr+'</span><div><span class="lab">Screening and diagnosis</span><p>From liquid biopsies and biopsies to single cells and bulk tumors.</p></div></li>'+
    '<li class="p2"'+PR+'><span class="pic">'+ICO.sel+'</span><div><span class="lab">Treatment selection</span><p>Prognosis and the predicted benefit of therapy for each patient.</p></div></li>'+
    '<li class="p3"'+PR+'><span class="pic">'+ICO.drug+'</span><div><span class="lab">New drug options</span><p>Repositioned drugs for patients whose prior therapies have failed.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="about" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>Why Sostos</span>'+
   '<h2 class="txt" id="mani">The AI we built to predict which parts of a satellite system would fail now predicts how a tumor will behave, <em>and which treatment will help.</em></h2></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1,600+</span><p class="k">Patients in the validation of our 7-gene lung cancer assay, including randomized phase III trials</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">696</span><p class="k">Candidate compounds for lung cancer identified with our AI; 18 patented</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$45.5M+</span><p class="k">Federal funding obtained by our founder to develop AI for healthcare</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How CATOS-LU works</span><h2 class="d3">Seven genes, <em>one clearer decision.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Measure</span><span>Model</span><span>Stratify</span><span>Decide</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Read the tumor’s genes.</h2><p>After surgery for early-stage non-small cell lung cancer, the expression of seven signature genes is measured in the tumor by qRT-PCR.</p></article>'+
     '<article class="step"><h2>Run the decision model.</h2><p>A decision-tree model, built by our AI from hundreds of tumors, weighs the seven expression levels together.</p></article>'+
     '<article class="step"><h2>Find who will benefit.</h2><p>Each patient is placed in a predicted-benefit or predicted-non-benefit group for adjuvant chemotherapy.</p></article>'+
     '<article class="step"><h2>Treat with confidence.</h2><p>In validation, patients predicted to benefit lived significantly longer with chemotherapy; in the non-benefit group, chemotherapy brought no survival gain.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">AI and big data <em>for precision medicine.</em></h2></div><p data-r>CATOS products enable personalized cancer care throughout the patient journey. Our technologies have been funded by the NSF, NASA, NIH, CDC and CPSC.</p></div>'+
   tiles()+
  '</div></section>'+

  '<section class="sec dark" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Three CATOS products, <em>one engine.</em></h2></div><p data-r>A portal for oncologists and drug developers, and gene-expression assays for lung and breast cancer, all built with the same AI.</p></div>'+
   prods()+
   '<div class="cred">'+
    '<div class="bk"><span class="lab kick" data-r>Funded by</span><p class="cr" data-r>'+lst(FUND)+'</p></div>'+
    '<div class="bk"><span class="lab kick" data-r>Commercialization programs</span><p class="cr" data-r>'+lst(PROGS)+'</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Computational scientists, <em>and the clinicians beside them.</em></h2></div><p data-r>Founded in 2020 by Nancy L. Guo, PhD, now Professor of Empire Innovation at Binghamton University, Sostos is advised by thoracic oncologists and diagnostics leaders.</p></div>'+
   '<div class="mh" data-r>'+mhList("Leadership",LEAD)+mhList("Board and business advisors",BOARD)+'</div>'+
   '<div class="cred">'+
    '<div class="bk"><span class="lab kick" data-r>Clinical advisors</span><p class="cr" data-r>'+lst(CLIN)+'</p></div>'+
    '<div class="bk"><span class="lab kick" data-r>Data science</span><p class="cr" data-r>'+lst(STAFF)+'</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>milestones.</em></h2></div><p data-r>New NSF funding for CATOS, and Sostos on the stage at BIO 2026.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
/* phones: the pillar band sits below the fold, so it reveals on scroll (enhancement only: the site failsafe shows anything in view) */
function pilReveal(){if(!MOBILE()||RM||!window.ScrollTrigger)return;$$(".pil li:not([data-r])").forEach(function(li){if(li.getBoundingClientRect().top<innerHeight)return;
  gsap.set(li,{opacity:0,y:24});ScrollTrigger.create({trigger:li,start:"top 96%",once:true,onEnter:function(){gsap.to(li,{opacity:1,y:0,duration:.8,ease:"power2.out",clearProps:"transform,opacity"})}})})}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors and customers</span>'+
   '<h2 class="big split">Bring precision <em>to every patient.</em></h2>'+
   '<p class="sub" data-r>For partnerships, investment, CATOS-AI access or our assays, write to our founder or call us in Morgantown.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to Dr. Guo '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call (304) 276-6217</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p class="al" data-r>591 Herman Ave.</p><p class="al" data-r>Morgantown, WV 26505</p></div>'+
    '<div><span class="lab" data-r>Founder and CEO</span><p class="al" data-r>Nancy L. Guo, PhD</p><p class="al" data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:'+TEL+'">(304) 276-6217</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>591 Herman Ave.<br>Morgantown, WV 26505</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">(304) 276-6217</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Cancer Treatment<br>Optimization Solutions</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 150" aria-hidden="true"><text x="320" y="128" text-anchor="middle" fill="#f3f5fa" style="font:600 138px \'Exo\',sans-serif;letter-spacing:12px">SOSTOS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Sostos Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route. #/contact and #/about scroll to their section; a typed or linked #/technology,
   #/products, #/team or #/news scrolls to that section too; nav clicks open the build-out pages (buildout.js) ================= */
var BOK={technology:1,products:1,team:1,news:1};
function boOpen(k){try{if(window.BuildOut&&BuildOut.open){BuildOut.open(k);return true}}catch(x){}return false}
var SECS={about:"about",technology:"technology",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Sostos — AI and gene-expression assays for precision oncology",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){try{history.replaceState(null,"","#/")}catch(x){}secGo(r.sec,true)},300)})()})();
