/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[3])+'</b><i>'+esc(c[0])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["No water hook-up","A conventional treatment needs more than 150 litres of purified dialysate and a machine plumbed to a reverse-osmosis system. Kuleana’s system primes with a few litres of sterile bagged water and recycles them.",'<path d="M28 8c-8 11-13 18-13 25a13 13 0 0 0 26 0c0-7-5-14-13-25z"/><path class="a" d="M10 46L46 10"/>'],
  ["Light removes the urea","Spent dialysate passes a TiO₂ photocatalyst. Under light it decomposes urea into carbon dioxide and nitrogen, no bulky or expensive sorbent cartridges needed, and the cleaned fluid returns to the machine.",'<circle cx="28" cy="28" r="9"/><path class="a" d="M28 6v7M28 43v7M6 28h7M43 28h7M12.5 12.5l5 5M38.5 38.5l5 5M12.5 43.5l5-5M38.5 17.5l5-5"/>'],
  ["Dialysis on your schedule","A machine the size of a rolling suitcase can move between rooms, go to work or travel, so patients can dialyze for longer, closer to the way healthy kidneys work around the clock.",'<rect x="14" y="16" width="28" height="30"/><path d="M22 16v-6h12v6"/><path class="a" d="M14 30h28"/><circle class="f" cx="20" cy="49" r="2"/><circle class="f" cx="36" cy="49" r="2"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Hemodialysis<span class="nomob"> · UW spinout</span> · Seattle, WA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Dialysis,</span><span class="l">whenever and</span><span class="l"><em>wherever.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Kuleana Technology is developing AKTIV, a suitcase-sized hemodialysis machine that regenerates its own dialysate with light, so it needs no water connection and patients are no longer tied to the clinic chair.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/programmes">Our programmes</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">More than 400,000 people in the US live on dialysis, most of them in a clinic three times a week for hours at a time. Healthy kidneys work around the clock. Patients deserve therapy that <em>fits their lives.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2 L</span><span class="k">Of dialysate to cleanse the blood in Kuleana’s system, against more than 150 litres for a conventional treatment</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">99%</span><span class="k">Of urea decomposed to carbon dioxide and nitrogen by the light-activated TiO₂ catalyst</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+ h</span><span class="k">Of dialysis a week made possible, up from the 12 hours of a standard in-centre schedule</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Clean the fluid, <em>keep the fluid.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Filter</span><span>Break down</span><span>Return</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Blood meets the dialysate.</h2><p>As in any hemodialysis, blood runs through the hollow fibres of a dialyser and urea and other toxins cross the membrane into the dialysate flowing around them.</p></article>'+
     '<article class="step"><h2>Light breaks down the urea.</h2><p>Instead of going down the drain, the spent dialysate passes Kuleana’s Photo-Oxidation Urea Removal (POUR) cell, where a light-activated TiO₂ catalyst decomposes urea into carbon dioxide and nitrogen.</p></article>'+
     '<article class="step"><h2>Clean dialysate goes round again.</h2><p>The refreshed fluid returns to the dialyser, so a small closed loop of about two litres does the work of a constant water supply, and the machine is free of the wall.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">Untethered from <em>the wall.</em></h2></div><p data-r>Kuleana advances technology from the Center for Dialysis Innovation at the University of Washington, where hemodialysis was pioneered in the 1960s, to make dialysis portable without compromising the treatment.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="programmes" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">One device, <em>four advances.</em></h2></div><p data-r>The AKTIV, the Ambulatory Kidney to Improve Vitality, brings together water-free dialysate regeneration, a scalable catalyst and a needleless way for patients to connect.</p></div>'+
   pipeRows(PIPE)+
   '<div class="bk"><span class="lab kick" data-r>Backed by</span><p class="cr" data-r><span>National Institutes of Health · NIDDK</span><i>/</i><span>National Kidney Foundation Innovation Fund</span><i>/</i><span>KidneyX Redesign Dialysis prize</span><i>/</i><span>Northwest Kidney Centers</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Doctors, scientists <em>and engineers.</em></h2></div><p data-r>Kuleana is a Hawaiian word for care, responsibility, accountability and reciprocity. The team behind it brings nephrology, biomaterials and decades of dialysis product development, and works closely with patients and clinicians.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Roots</span><p data-r>A 2020 spinout of the UW Center for Dialysis Innovation, founded with the Northwest Kidney Centers and the UW School of Medicine.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NIDDK STTR Phase I and SBIR Phase II awards, and the National Kidney Foundation Innovation Fund’s first dialysis investment.</p></div>'+
    '<div><span class="lab kick" data-r>Patents</span><p data-r>Built on the prize-winning innovations and the issued and pending patents of the Center for Dialysis Innovation.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards, investment <em>and press.</em></h2></div><p data-r>The latest on Kuleana and the AKTIV.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Patients, clinicians, investors</span>'+
   '<h2 class="big split">We’d love to <em>hear from you.</em></h2>'+
   '<p class="sub" data-r>Whether you live with kidney failure, care for people who do, or want to help bring portable dialysis to them, write to the Kuleana team through the contact form on our current site.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+FORM+'" target="_blank" rel="noopener">Get in touch '+ARR+'</a><a class="btn" href="#/programmes">See the programmes</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Kuleana Technology, Inc.<br>Seattle, WA</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Seattle, WA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Roots</span>UW Center for Dialysis Innovation<br>Northwest Kidney Centers</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Poppins\',Arial,sans-serif;font-weight:300;font-size:64px;letter-spacing:.01em">Kuleana</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Kuleana Technology, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",platform:"platform",programmes:"programmes",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Kuleana Technology — Portable, water-free hemodialysis, Seattle, WA",x:"Home"};
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
