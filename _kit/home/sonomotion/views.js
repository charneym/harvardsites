/* ================= VIEWS (home only: Technology / Evidence / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(L){return '<ul class="pfr">'+L.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Leadership</p><ul class="mh-list">'+TEAM.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div></div>'}
function credit(lab,L){return '<div class="bk"><span class="lab kick" data-r>'+lab+'</span><p class="cr">'+L.map(function(n){return '<span>'+esc(n[0])+(n[1]?' <i>'+esc(n[1])+'</i>':'')+'</span>'}).join('')+'</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>FDA-cleared Break Wave™ lithotripsy<span class="nomob"> · San Mateo, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Kidney stones,</span><span class="l">broken without</span><span class="l"><em>anesthesia.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Break Wave™ fragments kidney stones with low-pressure focused ultrasound, on fully awake patients, under real-time ultrasound guidance. Stone Clear™ then helps clear what remains. No incision, no sedation, in nearly any care setting.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How Break Wave works '+ARR+'</a><a class="btn" href="#/contact">Talk with SonoMotion</a></div></div>'+
   '<p class="lab hcap" data-r>The Break Wave therapy probe, mated with its ultrasound imaging probe. Photograph: SonoMotion.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our solution</span>'+
   '<h2 class="txt" id="mani">More than three million Americans see a physician for kidney stones each year. SonoMotion treats them <em>without anesthesia, wherever the patient is.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">FDA clearances for Break Wave in 2026: the original device in January, the next generation in May</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">60+</span><p class="k">Publications in peer-reviewed journals on the science behind Break Wave and Stone Clear</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">750K</span><p class="k">Lithotripsy procedures performed each year in the United States</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Break Wave™</span><p data-r>Fragments stones in the kidney or ureter into small pieces with low-pressure ultrasound, in less time than existing options, with no stent required.</p></div>'+
    '<div><span class="lab kick" data-r>Stone Clear™</span><p data-r>Repositions residual fragments after lithotripsy within a 15-minute office procedure, so patients can pass them naturally.</p></div>'+
    '<div><span class="lab kick" data-r>Awake, and home the same day</span><p data-r>No anesthesia, no sedation and no ionizing radiation: patients can eat and drink beforehand and drive themselves to and from treatment.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How Break Wave works</span><h2 class="d3">Sound in. <em>Stone out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Locate</span><span>Break</span><span>Clear</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>See the stone, from outside the body.</h2><p>The therapy probe is placed on the skin, mated with an ultrasound imaging probe at its centre. The physician finds the stone in the kidney or ureter and treats it under real-time ultrasound guidance.</p></article>'+
     '<article class="step"><h2>Bursts of low-pressure ultrasound.</h2><p>Focused ultrasound sets up standing stress waves within the stone, breaking it into small pieces. The patient stays fully awake, with no anesthesia or sedation.</p></article>'+
     '<article class="step"><h2>Help the fragments pass.</h2><p>With Stone Clear, ultrasound gently repositions the residual fragments in a 15-minute office procedure, so the patient can pass them naturally.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="evidence" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Evidence</span><h2 class="d2 split">Tested in trials. <em>Cleared by the FDA.</em></h2></div><p data-r>A pivotal trial that met its endpoints, two FDA pathways completed, and a cover article in the Journal of Urology, built on burst wave lithotripsy research from the University of Washington.</p></div>'+
   rows(EVD)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Ultrasound veterans, <em>leading urologists.</em></h2></div><p data-r>SonoMotion’s leaders have built ultrasound devices at Philips, Volcano and Fluid Medical, and its advisors include the urologists and engineers behind the published research.</p></div>'+
   team()+
   credit("Physician advisors",MDADV)+
   credit("Technical advisors · University of Washington",TECHADV)+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From pivotal trial <em>to commercial launch.</em></h2></div><p data-r>Clearances, trial results and grants on the way to bringing Break Wave to patients, with commercialization beginning in the second half of 2026.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Urologists, health systems, investors and press</span>'+
   '<h2 class="big split">Treat the stone. <em>Skip the anesthesia.</em></h2>'+
   '<p class="sub" data-r>Interested in Break Wave and Stone Clear for your practice, or in what SonoMotion is building? Get in touch with the team in San Mateo.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/technology">How Break Wave works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span>1600 West Hillsdale Boulevard, Suite 105</span><br><span>San Mateo, CA 94402</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Research</span><p data-r><a class="ul" href="'+PUBS+'" target="_blank" rel="noopener">60+ publications</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>1600 West Hillsdale Blvd, Suite 105<br>San Mateo, CA 94402</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/evidence">Evidence</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+PUBS+'" target="_blank" rel="noopener">Publications</a></div>'+
   '<div class="c"><span class="lab">Products</span>Break Wave™ lithotripsy<br>Stone Clear™<br>Investigational device in Canada</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Newsreader\',Georgia,serif;font-weight:300;font-size:70px;letter-spacing:-.01em">SonoMotion</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 SonoMotion, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",evidence:"evidence",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"SonoMotion — Break Wave™, noninvasive kidney stone treatment",x:"Home"};
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
