/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="rg-tm">'+gs.map(function(g){return '<div class="rg-tg"><span class="lab kick" data-r>'+esc(g)+'</span><ul>'+by[g].map(function(p){
    return '<li data-r><span class="rg-nm">'+esc(p.name)+'</span><span class="rg-rl">'+esc(p.title)+'</span>'+(p.sum?'<p class="kl-sum">'+esc(p.sum)+'</p>':'')+'</li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function sitesLine(){return '<div class="kl-pa cm-sites"><span class="lab kick" data-r>Study sites</span><ul data-r>'+SITES.map(function(p){return '<li>'+esc(p)+'</li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li data-r><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Access","Transfemoral, transseptal","Artificial chords are delivered by catheter through a vein and across the septum, to replace broken or elongated native chordae tendineae.",'<path d="M6 46C18 46 22 30 30 24S44 14 50 10"/><path class="a" d="M30 24l4 10"/><circle class="f" cx="34" cy="35" r="2.6"/>'],
  ["Procedure","Simple and straightforward","Designed for potentially one-chord, sub-hour procedures in simple DMR cases, with the ability to deploy up to two chords for more complex cases.",'<circle cx="28" cy="28" r="19"/><path class="a" d="M28 15v13l8 6"/><circle class="f" cx="28" cy="28" r="2.4"/>'],
  ["Beating heart","No cardiac arrest","Artificial chords are implanted on a beating heart, under echocardiographic guidance.",'<path d="M5 30h11l4-10 6 20 5-14 3 4h17"/><path class="a" d="M5 30h11l4-10 6 20 5-14 3 4"/>'],
  ["For the future","Therapy options preserved","Because the implant is small, future options may remain open for the patient, including cardiac surgery (repair or replacement) or other transcatheter technologies.",'<rect x="10" y="10" width="36" height="36"/><path class="a" d="M10 28h36M28 10v36"/><circle class="f" cx="28" cy="28" r="2.6"/>']];
  return '<div class="caps cm-caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+c[0]+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function partners(){return '<div class="kl-pa"><span class="lab kick" data-r>Partner</span><ul data-r><li>Innovation Norway</li></ul></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>CardioMech<span class="nomob"> · Trondheim, Norway</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Mitral repair,</span><span class="l"><em>on a beating</em></span><span class="l"><em>heart.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>CardioMech is developing the MVRS: an artificial chord, delivered by catheter through a vein, designed to reduce or eliminate mitral regurgitation and restore the native anatomy.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/clinical">The clinical study</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why the mitral valve</span>'+
   '<h2 class="txt" id="mani">Mitral regurgitation is the third most common cardiovascular disease: blood flows backwards across the mitral valve. It is highly prevalent, debilitating, and deadly if untreated. <em>CardioMech’s catheter-based chord could reduce the need for open-heart surgery.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$42M</span><p class="k">Raised in total, including a $13M round closed in January 2024</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">12</span><p class="k">US sites in the early feasibility study of the CardioMech MVRS</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2021</span><p class="k">First-in-human procedure, at Atrium Health Sanger Heart & Vascular Institute</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">A new chord, <em>without opening the chest.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Seal</span><span>Leak</span><span>Access</span><span>Repair</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A valve that seals.</h2><p>With every beat the mitral valve closes. Its two leaflets are held in place by chords, the chordae tendineae, tethered to the muscle of the left ventricle.</p></article>'+
     '<article class="step"><h2>A broken chord, a leaking valve.</h2><p>When native chords break or elongate, a leaflet prolapses and blood flows backwards into the atrium: degenerative mitral regurgitation, or DMR.</p></article>'+
     '<article class="step"><h2>Through a vein, across the septum.</h2><p>The MVRS is delivered by catheter, transfemorally and transseptally, on a beating heart under echocardiographic guidance. No cardiac arrest.</p></article>'+
     '<article class="step"><h2>An artificial chord restores the valve.</h2><p>An artificial chord is anchored at each end, on the leaflet and on the ventricle wall, to reduce or eliminate the leak. Up to two chords for complex cases.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The CardioMech <em>MVRS.</em></h2></div><p data-r>A transcatheter mitral valve repair solution designed to address key limitations in today’s standard of care for degenerative mitral regurgitation, with the potential to become first-line therapy for DMR patients.</p></div>'+
   caps()+partners()+
  '</div></section>'+

  '<section class="sec dark2" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical</span><h2 class="d2 split">In the clinic <em>since 2021.</em></h2></div><p data-r>The MVRS is being studied in an early feasibility study at twelve centres across the United States, following a first-in-human procedure in 2021.</p></div>'+
   pipeRows(PIPE)+sitesLine()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Surgeons, engineers <em>and builders.</em></h2></div><p data-r>Founded by a cardiac surgeon and a mechanical engineer, and led by a team with decades of experience in structural heart devices.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>milestones.</em></h2></div><p data-r>A new chairman, an oversubscribed round, the first patient treated: CardioMech in the press.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">New options for <em>heart disease.</em></h2>'+
   '<p class="sub" data-r>For partnerships, investment, clinical collaboration or general enquiries, the CardioMech team would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to CardioMech '+ARR+'</a><a class="btn" href="#/clinical">The clinical study</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>CardioMech AS<br>7030 Trondheim, Norway</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@cardiomech.com</a></p></div>'+
    '<div><span class="lab" data-r>United States</span><p data-r>Fridley, Minnesota</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Trondheim, Norway<br>Fridley, Minnesota</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@cardiomech.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Caution</span>Investigational device. Limited by law to investigational use.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Montserrat\',sans-serif;font-weight:400;font-size:60px">CARDIOMECH</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 CardioMech AS</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",clinical:"clinical",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"CardioMech — transcatheter mitral chordal repair",x:"Home"};
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
