/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function specRows(){return '<ul class="pfr pipe np">'+SPECS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row mf-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Diabetes","The first programme: an oral replacement for injected insulin, backed by Innovate UK. Insulin is already made by engineered microbes in a factory; Hijack moves that production into a pill.",'<path d="M12 44L44 12"/><path class="a" d="M20 20H36V36"/><circle class="f" cx="16" cy="40" r="2.6"/>'],
  ["Liver health","BacTbio, a consumer research programme in liver health, and a companion for people on GLP-1 therapy.",'<path d="M10 24C10 16 20 12 28 18C36 12 46 16 46 24C46 36 34 44 28 46C22 44 10 36 10 24Z"/><path class="a" d="M22 28H34"/>'],
  ["Menopause","A third research programme, applying the same chassis to gut health through menopause.",'<circle cx="28" cy="22" r="11"/><path d="M28 33V48M21 41H35"/><circle class="f" cx="28" cy="22" r="3"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function certs(){var S=[
  ["Innovate UK","£50,000 from November 2025","Transforming Diabetes Care Through Engineering Biology, project 10171810."],
  ["Founded","London, July 2024","Hijack Bio Limited, registered in England and Wales, company number 15856068."],
  ["Team","Three founders","A CEO, a CTO and a CMO, each with a doctorate, across engineering biology and clinical medicine."]];
  return '<div class="mfs">'+S.map(function(s){return '<div class="mf-site"><span class="lab" data-r>'+esc(s[0])+'</span><h3 data-r>'+esc(s[1])+'</h3><p data-r>'+esc(s[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Engineering biology<span class="nomob"> · London</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A living therapy</span><span class="l"><em>instead of an injection.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Hijack Bio builds programmable, modular living therapies: bio-engineered systems that sense their surroundings and make a biologic drug where the body needs it. The first is a replacement for injected insulin, taken as a daily pill.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Contact the founders</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Insulin, since 1921</span>'+
   '<h2 class="txt" id="mani">Insulin has been made by engineered bacteria for decades — in a factory, then injected. <em>Hijack moves the factory into the pill.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1921</span><p class="k">The year insulin was discovered; its delivery has barely changed since</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Research programmes: diabetes, liver health, menopause</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1</span><p class="k">Daily pill, in place of a daily injection</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology · living therapies</span><h2 class="d3">Made where <em>it is needed.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Today</span><span>Sense</span><span>Release</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A drug made far away.</h2><p>Insulin is produced by engineered microbes in a fermenter, purified, shipped cold, and then injected — a long route for a molecule the body once made for itself.</p></article>'+
     '<article class="step"><h2>A system that reads the room.</h2><p>Hijack’s therapy is the organism itself: environmentally aware, so what it does depends on the conditions it finds rather than on a fixed schedule.</p></article>'+
     '<article class="step"><h2>Produced in place.</h2><p>The biologic is made where it is needed instead of being carried there — which is what lets a peptide drug arrive as a daily pill.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The platform</span><h2 class="d2 split">Programmable, <em>modular, living.</em></h2></div><p data-r>One chassis with swappable parts. Each programme changes what the system senses and what it makes, not the machinery underneath.</p></div>'+
   specRows()+
  '</div></section>'+

  '<section class="sec light" id="research" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">Diabetes first, <em>then the gut.</em></h2></div><p data-r>The diabetes programme is funded by Innovate UK. Three consumer research programmes run alongside it on the same platform.</p></div>'+
   caps()+
   certs()+
  '</div></section>'+

  '<section class="sec light alt" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Three founders, <em>one chassis.</em></h2></div><p data-r>Hijack Bio was founded in London in July 2024 and is run by its three founders.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Funding and programmes</span><h2 class="d2 split">What is <em>under way.</em></h2></div><p data-r>The Innovate UK project behind the diabetes programme, and the research programmes running alongside it.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, clinicians and investors</span>'+
   '<h2 class="big split">Talk to <em>the founders.</em></h2>'+
   '<p class="sub" data-r>For partnership, research collaboration or investment enquiries about the platform or any of the programmes, email the founders directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Hijack Bio '+ARR+'</a><a class="btn" href="#/research">Programmes</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>London</span><p data-r>Hijack Bio Limited<br>4th Floor, 184–192 Drummond Street<br>London NW1 3HP, United Kingdom</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>Registered in England and Wales<br>Company number 15856068<br>Incorporated 24 July 2024</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">London</span>4th Floor, 184–192 Drummond Street<br>London NW1 3HP, UK</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/research">Programmes</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/contact">Contact</a></div>'+
   '<div class="c"><span class="lab">Company</span>Hijack Bio Limited<br>Registered in England and Wales, 15856068</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Poppins\',Arial,sans-serif;font-weight:300;font-size:50px;letter-spacing:.2em">HIJACK BIO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Hijack Bio Limited</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"story",technology:"technology",research:"research",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Hijack Bio — programmable living therapies",x:"Home"};
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
