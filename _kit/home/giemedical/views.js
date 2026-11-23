/* ================= VIEWS (home only: Technology / Trials / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function trials(){return '<ul class="pfr">'+TRIALS.map(function(p){
  return '<li data-r><span class="lab tg">'+esc(p[0])+'</span><div class="pn"><h3>'+esc(p[1])+'</h3>'+(p[3]?'<span class="loc">'+esc(p[3])+'</span>':'')+'</div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function mh(label,list){return '<div class="mhg"><p class="mh-label" data-r>'+label+'</p><ul class="mh-list">'+list.map(function(p){
  return '<li data-r><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li data-r><a href="'+WEB+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+n[0]+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">giemedical.com '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Gastrointestinal · Esophageal<span class="nomob"> · Brooklyn Park, Minnesota</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A drug-coated</span><span class="l">balloon for</span><span class="l"><em>GI strictures.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>GIE Medical is a clinical-stage company developing the ProTractX3™ through-the-scope drug-coated balloon for benign strictures of the esophagus and bowel, now in two randomized trials in the United States.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>ProTractX3™ 3-Stage TTS DCB, inflated (illustrative render). An investigational device in the United States.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Dilation opens a benign stricture, but it often narrows again. GIE Medical’s balloon aims to <em>keep it open, with fewer treatments.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">30–40%</span><p class="k">Of patients have symptoms return within a year of a successful dilation (Said &amp; Brust, Am J Gastroenterol, 2003)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Multicenter randomized US trials: PATENT-E in the esophagus and PATENT-B in the bowel</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2023</span><p class="k">FDA Breakthrough Device Designation for recurrent benign esophageal strictures</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">Open the stricture, <em>treat the wall.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Stricture</span><span>The scope</span><span>Dilation</span><span>Paclitaxel</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A narrowing that comes back.</h2><p>A benign stricture narrows the esophagus or the bowel. It is opened with rigid or balloon dilators, yet 30–40% of patients have symptoms again within a year: the stricture cycle.</p></article>'+
     '<article class="step"><h2>Through the scope.</h2><p>ProTractX3 is a through-the-scope (TTS) balloon. It passes down the endoscope’s working channel and is placed across the stricture under direct view.</p></article>'+
     '<article class="step"><h2>Dilation in three stages.</h2><p>The multi-stage balloon inflates to open the narrowed segment, as a standard balloon dilation does, with three stages in one catheter.</p></article>'+
     '<article class="step"><h2>Medication where it narrows.</h2><p>The balloon is coated with paclitaxel. It releases the drug into the stricture with the dilation, to help prevent the stricture from re-forming and to reduce repeat treatments.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="trials" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical programme</span><h2 class="d2 split">Tested against <em>standard dilation.</em></h2></div><p data-r>Two large, multicenter randomized controlled trials across the United States compare the ProTractX3™ drug-coated balloon with standard endoscopic dilation, in the esophagus and in the bowel.</p></div>'+
   trials()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Experience from <em>Lutonix and Urotronic.</em></h2></div><p data-r>Founded by Lixiao Wang, PhD, co-founder and CTO of Lutonix and founder and CTO of Urotronic. The team’s experience spans Lutonix, Urotronic, Boston Scientific, Medtronic, Philips, Teleflex and SurModics.</p></div>'+
   '<div class="mh">'+mh("Leadership",LEAD)+mh("Vice presidents",VPS)+'</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>GIE Medical.</em></h2></div><p data-r>Trials, regulatory milestones and publications, from the press releases on giemedical.com.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Patients, physicians and partners</span>'+
   '<h2 class="big split">Fewer dilations, <em>longer relief.</em></h2>'+
   '<p class="sub" data-r>Patients aged 22 and older with benign stricture disease of the esophagus or bowel can ask to be considered for the clinical studies. For the studies and any other inquiry, write to the GIE Medical team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/trials">The trials</a></div>'+
   '<div class="cinfo cgrid">'+
    '<div><span class="lab" data-r>Office</span><p data-r>7601 Northland Drive N, Suite 170<br>Brooklyn Park, MN 55428</p></div>'+
    '<div><span class="lab" data-r>Clinical studies</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Status</span><p data-r>ProTractX3™ is investigational in the US</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>7601 Northland Drive N, Suite 170<br>Brooklyn Park, MN 55428</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/trials">Trials</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Notice</span>ProTractX3 is an investigational device in the US, limited by federal law to investigational use.</div>'+
  '</div><div class="flogo" aria-hidden="true"><img src="logo-w.png" alt="" width="560" height="435"></div>'+
  '<div class="legal"><span class="lab">© 2026 GIE Medical, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",trials:"trials",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"GIE Medical — drug-coated balloons for GI strictures, Brooklyn Park, Minnesota",x:"Home"};
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
