/* ================= VIEWS (home only: Zip-stitch / Clinical / Surgeons / Team open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(L){return '<ul class="pfr">'+L.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function quotes(lab,L){return '<div class="qg"><p class="lab kick qk" data-r>'+lab+'</p><ul class="qr">'+L.map(function(q){
  return '<li><blockquote><p>“'+esc(q[0])+'”</p></blockquote><span class="lab qa">'+esc(q[1])+'</span></li>'}).join("")+'</ul></div>'}
function team(){return '<ul class="tmg">'+TEAM.map(function(p){
  return '<li class="tmt"><div class="tmp"><img src="'+p[2]+'" alt="'+esc(p[0])+'" loading="lazy" decoding="async" width="560" height="700"></div><h3>'+esc(p[0])+'</h3><span class="tmr">'+esc(p[1])+'</span></li>'}).join("")+'</ul>'}
function board(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Board of Managers</p><ul class="mh-list">'+BOARD.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div></div>'}
function credit(lab,L){return '<div class="bk"><span class="lab kick" data-r>'+lab+'</span><p class="cr">'+L.map(function(n){return '<span>'+esc(n)+'</span>'}).join('')+'</p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage surgical closure<span class="nomob"> · Women’s health</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A new paradigm</span><span class="l">for surgical</span><span class="l"><em>closure.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Zip-stitch closes the vaginal cuff in laparoscopic hysterectomy with a series of bioabsorbable clips, deployed from a laparoscopic applicator. No knots to tie, and no needle through tissue.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/zip-stitch">How Zip-stitch works '+ARR+'</a><a class="btn" href="#/contact">Contact ZSX</a></div></div>'+
   '<p class="lab hcap" data-r>A Zip-stitch bioabsorbable clip. Photograph: ZSX Medical. Investigational device.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Reinventing surgery in women’s health</span>'+
   '<h2 class="txt" id="mani">Closing the cuff is the hardest step of a laparoscopic hysterectomy. Zip-stitch is designed to make it <em>fast and easy for surgeons, and better for patients.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">500k</span><p class="k">Minimally-invasive hysterectomies performed in the U.S. each year, approximately</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100</span><p class="k">Patients in the NIH-funded study comparing Zip-stitch with suture closure time</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10</span><p class="k">ZIMS cases through 6-week follow-up in the first stage of the U.S. study</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>No knots</span><p data-r>Laparoscopic knot tying is the step surgeons most try to avoid. Zip-stitch replaces it with clips placed from one applicator.</p></div>'+
    '<div><span class="lab kick" data-r>No puncture</span><p data-r>The clips approximate the wound and hold it closed through healing, with enough pressure for hemostasis, without piercing tissue.</p></div>'+
    '<div><span class="lab kick" data-r>Bioabsorbable</span><p data-r>The clips dissolve over time in the body. Zip-stitch leads a platform of closure devices for internal surgical incisions.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How Zip-stitch works</span><h2 class="d3">Approximate, clip, <em>and heal.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Cuff</span><span>Clip</span><span>Heal</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The hardest step: the cuff.</h2><p>After the uterus is removed, the vaginal cuff must be closed. Laparoscopic suturing and knot tying are difficult, and poor closure can lead to cuff dehiscence, the wound separating.</p></article>'+
     '<article class="step"><h2>Clips, from one applicator.</h2><p>The laparoscopic applicator brings the opposing edges of the wound together and deploys a clip onto them, then the next, along the length of the cuff.</p></article>'+
     '<article class="step"><h2>Compression, not puncture.</h2><p>The clips hold the wound closed with enough pressure for hemostasis, without piercing tissue. The wound heals, and the bioabsorbable clips dissolve over time.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical</span><h2 class="d2 split">From first use <em>to the pivotal trial.</em></h2></div><p data-r>Zip-stitch is a clinical-stage device, tested in real clinical use, and funded by the National Institutes of Health and the National Science Foundation along the way.</p></div>'+
   rows(CLIN)+
  '</div></section>'+

  '<section class="sec light" id="surgeons" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Surgeons</span><h2 class="d2 split">Heard in the OR, <em>in their own words.</em></h2></div><p data-r>Gynecologic surgeons on the difficulty of laparoscopic suturing, and on Zip-stitch after using it.</p></div>'+
   '<div class="qcols">'+quotes("On closing the cuff",QPROB)+quotes("On Zip-stitch",QZIP)+'</div>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Lean in-house, <em>deep in device development.</em></h2></div><p data-r>Led by a biomechanical engineer with twenty years in medical implants, with product development experience from Pfizer, Ethicon and Johnson &amp; Johnson, and a wide network of development partners.</p></div>'+
   team()+
   board()+
   credit("Grants and clinical partners",FUND)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, hospitals and partners</span>'+
   '<h2 class="big split">Closure, <em>made simple.</em></h2>'+
   '<p class="sub" data-r>Surgeons interested in Zip-stitch or the clinical study, and partners who want to help bring it to market: talk with the ZSX team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/zip-stitch">How Zip-stitch works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Moorestown</span><p data-r><span>110 Marter Avenue, Suite 210</span><br><span>Moorestown, NJ 08057</span></p></div>'+
    '<div><span class="lab" data-r>King of Prussia</span><p data-r><span>530D South Henderson Road</span><br><span>King of Prussia, PA 19406</span></p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+16176318865">+1 617 631 8865</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Offices</span>Moorestown, New Jersey<br>King of Prussia, Pennsylvania</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/zip-stitch">Zip-stitch</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/surgeons">Surgeons</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+16176318865">+1 617 631 8865</a></div>'+
   '<div class="c"><span class="lab">Zip-stitch</span>Surgical closure system<br>Restricted by Federal Law to investigational use</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-weight:700;font-size:60px;letter-spacing:.02em">ZSX Medical</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ZSX Medical, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about","zip-stitch":"story",clinical:"clinical",surgeons:"surgeons",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ZSX Medical — Zip-stitch, a new paradigm for surgical closure",x:"Home"};
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
