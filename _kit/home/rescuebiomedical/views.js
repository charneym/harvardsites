/* ================= VIEWS (home only: Technology / A2D2 / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function prods(){return '<ul class="pfr">'+PROGS.map(function(p){
  return '<li data-r><span class="lab tg">'+esc(p[0])+'</span><div class="pn"><h3>'+esc(p[1])+'</h3>'+(p[3]?'<span class="loc">'+esc(p[3])+'</span>':'')+'</div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function mh(label,list){return '<div class="mhg"><p class="mh-label" data-r>'+label+'</p><ul class="mh-list">'+list.map(function(p){
  return '<li data-r><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li data-r><a href="'+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+n[0]+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[3])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Discrete. Comprehensive. Automatic.<span class="nomob"> · West Lafayette, Indiana</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Opioid overdose,</span><span class="l">reversed</span><span class="l"><em>automatically.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Rescue Biomedical is developing A2D2, a wearable that detects an opioid overdose, gives naloxone through a needle-free injector and alerts emergency contacts, for the many people who overdose alone.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/a2d2">How A2D2 works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>A2D2 wearable, Rescue Biomedical 3D rendering of the product in development. Not evaluated by the FDA.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The problem</span>'+
   '<h2 class="txt" id="mani">Overdoses often occur fast and alone. <em>A2D2 is built to act when no one else can.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">37.5</span><span class="k">Opioid prescriptions dispensed per 100 persons in the US in 2023</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">11%</span><span class="k">Of those prescribed opioids develop an addiction</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~80k</span><span class="k">Opioid-involved overdose deaths in the US in 2023</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How A2D2 works</span><h2 class="d3">A closed loop, <em>from breath to rescue.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Breathing</span><span>Detect</span><span>Naloxone</span><span>Alert</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Breathing slows.</h2><p>Opioids bind to receptors in the brainstem that control respiration. Opioid-induced respiratory depression is the primary cause of fatal overdoses, and it can take hold within minutes.</p></article>'+
     '<article class="step"><h2>The wearable notices.</h2><p>Worn on the wrist, A2D2 watches for opioid-induced respiratory depression. Its detection module, the AD2, is being developed and brought to market first.</p></article>'+
     '<article class="step"><h2>Naloxone, without a needle.</h2><p>Upon detection of an overdose, A2D2 autonomously administers naloxone through a needle-free injector to restore normal breathing.</p></article>'+
     '<article class="step"><h2>Help is called.</h2><p>At the same time it alerts emergency contacts, so the person gets further medical care. Detection, treatment and the call for help, in one device.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Saving lives through <em>innovation.</em></h2></div><p data-r>A Purdue spinout funded by the National Institutes of Health, Rescue Biomedical is building a closed-loop drug-delivery system for opioid overdose, starting with the detection component.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people behind <em>Rescue.</em></h2></div><p data-r>Founded by Purdue biomedical engineer Hugh Lee and colleagues, Rescue Biomedical works with Purdue researchers and clinicians at the Indiana University School of Medicine.</p></div>'+
   '<div class="mh">'+mh("Company",TEAM)+mh("Researchers and collaborators",COLLAB)+'</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Rescue.</em></h2></div><p data-r>Awards and announcements, from NIH records and Purdue University news releases.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, treatment centres and partners</span>'+
   '<h2 class="big split">Help, even when <em>no one is there.</em></h2>'+
   '<p class="sub" data-r>To talk about A2D2, the AD2 detection device or a partnership, write to the Rescue Biomedical team or call +1 (346) 333-0088.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/a2d2">How A2D2 works</a></div>'+
   '<div class="cinfo cgrid">'+
    '<div><span class="lab" data-r>Based in</span><p data-r>West Lafayette, Indiana<br>United States</p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+13463330088">+1 (346) 333-0088</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>West Lafayette,<br>Indiana</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/a2d2">A2D2</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+13463330088">+1 (346) 333-0088</a></div>'+
   '<div class="c"><span class="lab">Note</span>The safety and effectiveness of the A2D2 has not been evaluated by the FDA.</div>'+
  '</div><div class="bigsvg flogo" aria-hidden="true">'+LOGO+'</div>'+
  '<div class="legal"><span class="lab">© 2026 Rescue Biomedical</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"technology",a2d2:"story",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Rescue Biomedical — automatic opioid overdose detection and treatment",x:"Home"};
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
