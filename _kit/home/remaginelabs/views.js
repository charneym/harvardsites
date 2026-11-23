/* ================= VIEWS (home only: Technology / Programs / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function caps(){return '<div class="plat caps">'+CAPS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><p data-r>'+esc(a[1])+'</p></div>'}).join("")+'</div>'}
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><div class="pn"><h3>'+esc(c[1])+'</h3></div><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh tm2">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Wearable drug delivery<span class="nomob"> · Melbourne and Austin</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Drug delivery,</span><span class="l"><em>electronically</em></span><span class="l"><em>controlled.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Remagine Labs is building a wearable patch that delivers medicine through the skin under electronic control: precise, programmable dosing for chronic conditions like epilepsy, in place of the burden of daily pills.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>The Remagine Labs patch in an exploded view, layer by layer down to the skin (the company’s own render).</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Daily pills ask a lot of people living with chronic conditions, and deliver medicine in peaks and troughs. <em>Remagine puts precise, programmable dosing into a patch.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">Multi-day</span><span class="k">Precise, active transdermal dosing from one wearable patch</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2026</span><span class="k">Collaboration with Praxis Precision Medicines, and a Series Seed led by Praxis</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><span class="k">Bases, in Melbourne, Australia and Austin, Texas</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">From the seesaw of pills <em>to a steady dose.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Pills</span><span>Patch</span><span>Current</span><span>Steady</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The seesaw of pills.</h2><p>Oral medicines reach the blood in peaks and troughs. Peaks can bring side effects; troughs can let breakthrough seizures through. And every dose depends on remembering to take it.</p></article>'+
     '<article class="step"><h2>A patch, not a pill.</h2><p>Remagine’s wearable patch sits on the skin and carries both the drug and the electronics that control it, designed for precise dosing over several days.</p></article>'+
     '<article class="step"><h2>A small current does the work.</h2><p>Iontophoresis: a low electric current carries charged drug molecules through the skin and toward the blood, so delivery is driven actively rather than left to diffusion.</p></article>'+
     '<article class="step"><h2>Steady, by design.</h2><p>Because the current is electronically controlled, dosing is programmable and aims for steady drug levels, with smart monitoring built into the patch.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="platform" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The platform</span><h2 class="d2 split">Medicine, <em>under control.</em></h2></div><p data-r>A wearable, electronically controlled transdermal system, designed to provide precise, programmable dosing of pharmaceutical compounds through the skin.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="programs" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">Starting with <em>the brain.</em></h2></div><p data-r>Remagine’s first programs are in neurology: epilepsy, and with Praxis Precision Medicines, essential tremor.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r>'+BACK.map(function(b){return '<span>'+esc(b)+'</span>'}).join("")+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Deep tech, <em>meeting medtech.</em></h2></div><p data-r>Founders, directors and advisors from engineering, neurology and drug delivery, with clinician advisors in epilepsy.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">A partner, <em>and a Seed round.</em></h2></div><p data-r>2026 brought a strategic collaboration and equity investment from Praxis Precision Medicines, then a Series Seed led by Praxis.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, clinicians and investors</span>'+
   '<h2 class="big split">Rethink <em>the daily dose.</em></h2>'+
   '<p class="sub" data-r>To talk about the platform, a drug-device collaboration or an investment, write to the Remagine Labs team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Offices</span><p data-r>Melbourne, Australia<br>Austin, Texas</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>Remagine Labs, Inc.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Offices</span>Melbourne, Australia<br>Austin, Texas</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Wearable, electronically<br>controlled drug delivery</div>'+
  '</div><svg class="bigsvg flk" viewBox="0 0 1600 205" aria-hidden="true"><image href="data:image/png;base64,__LOCKL__" x="0" y="0" width="1600" height="205"/></svg>'+
  '<div class="legal"><span class="lab">© 2026 Remagine Labs, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",platform:"platform",programs:"programs",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Remagine Labs — wearable, electronically controlled drug delivery, Melbourne and Austin",x:"Home"};
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
