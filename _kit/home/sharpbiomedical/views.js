/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function altRows(){return '<ul class="pfr svc">'+ALT.map(function(c,i){
  return '<li><span class="lab tg"><b>0'+(i+1)+'</b><i>'+esc(c[1])+'</i></span><h3>'+esc(c[0])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function path(){return '<ol class="sbm-path">'+PATH.map(function(x){return '<li><span class="lab sbm-when">'+esc(x[0])+'</span><h3>'+esc(x[1])+'</h3><p>'+esc(x[2])+'</p></li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Altitude by Sharp<span class="nomob"> · Outpatient spinal fixation</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Surgeries should</span><span class="l">be <em>less painful.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Sharp Biomedical is reimagining spinal fixation as a minimally invasive procedure: Altitude is inserted through a 1-inch incision, in an outpatient surgery setting, so patients can go home the same day.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/altitude">Meet Altitude '+ARR+'</a><a class="btn" href="#/procedure">The procedure</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our vision</span>'+
   '<h2 class="txt" id="mani">Intelligent medical devices that move procedures out of the hospital and into the surgery center. Shorter recovery, fewer complications and the same day home, <em>with the same exceptional outcomes as more invasive surgery.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1″</span><p class="k">Incision into the interspinous space</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Same day</span><p class="k">Patients return home, from an outpatient setting</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Q4 2027</span><p class="k">Planned launch of Altitude, now in development</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The procedure</span><h2 class="d3">One small incision, <em>one day.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Access</span><span>Expand</span><span>Home</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A small incision.</h2><p>Altitude is inserted into the interspinous space, between two spinous processes, through a 1-inch incision, reducing blood loss and tissue damage.</p></article>'+
     '<article class="step"><h2>Expansion, not dissection.</h2><p>Once in place, the implant expands. That removes the need for bone dissection, so recovery times can be reduced significantly, with less metal left in the body.</p></article>'+
     '<article class="step"><h2>Home the same day.</h2><p>A faster procedure under moderate anesthesia, in an outpatient surgery setting rather than a hospital operating room, at lower cost to the healthcare system.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="altitude" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Altitude by Sharp</span><h2 class="d2 split">A revolutionary <em>spinal fixation device.</em></h2></div><p data-r>Currently in development, launching Q4 2027. A purpose-built toolset and implant system for manual procedures that outpatient clinics can run without major capital investment.</p></div>'+
   altRows()+
  '</div></section>'+

  '<section class="sec dark2" id="path" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>From the hospital to the surgery center</span><h2 class="d2 split">Built for <em>outpatient clinics.</em></h2></div><p data-r>For patients with early-to-mid-stage chronic pain, Sharp’s system reduces the reliance on large hospital infrastructure, robotics and long operating times.</p></div>'+
   path()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineers and physicians, <em>working together.</em></h2></div><p data-r>Sharp Biomedical develops its device with interventional pain specialists and physician partners, and is backed by physician angel investors.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest <em>from Sharp.</em></h2></div><p data-r>The pre-seed round led by gener8tor 1889, and the company’s start at the University of North Dakota.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Surgeries should be <em>less painful.</em></h2>'+
   '<p class="sub" data-r>Physicians, clinics and investors interested in Altitude: email us, or sign up for news of our advancements.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Sharp Biomedical '+ARR+'</a><a class="btn" href="#/altitude">About Altitude</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>4445 W 77th Street<br>Edina, MN 55435</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+16123883950">612-388-3950</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>4445 W 77th Street<br>Edina, MN 55435</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+16123883950">612-388-3950</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/altitude">Altitude</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Device</span>Altitude by Sharp, spinal fixation for the outpatient setting</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="60" text-anchor="middle" style="font-family:\'Source Serif 4\',Georgia,serif;font-weight:400;font-size:66px;letter-spacing:4px">SHARP</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Sharp Biomedical</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={approach:"about",procedure:"story",altitude:"altitude",path:"path",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Sharp Biomedical — Altitude, spinal fixation for the outpatient setting",x:"Home"};
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
