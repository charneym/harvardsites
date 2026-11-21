/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Drug-free","Cognitive behavioral therapy for insomnia is the gold-standard treatment for chronic insomnia, with better and safer outcomes than prescription sleep medication. Media Rez delivers its components (sleep diaries, a planned sleep window, wind-down routines) without a pill.",'<rect x="12" y="20" width="32" height="16"/><path class="a" d="M28 20v16"/><path d="M10 10l36 36"/>'],
  ["Screen-free","Web and app CBT-I asks people to look at a bright screen in bed, which is activating and suppresses melatonin. Media Rez programs are spoken: a conversational smart speaker and custom lighting, with a smart router that reports bedtime screen use.",'<ellipse cx="28" cy="30" rx="13" ry="12"/><ellipse class="a" cx="28" cy="20" rx="9" ry="3"/><path d="M8 22c-2 5-2 11 0 16M48 22c2 5 2 11 0 16"/><circle class="f" cx="28" cy="30" r="2.4"/>'],
  ["Hassle-free","Trained CBT-I therapists are scarce, even in accredited sleep centers, and in-person therapy costs time and money. A voice program at the bedside works just in time, at home, with no sleep therapist office visits.",'<path d="M10 40V22l18-12 18 12v18z"/><path class="a" d="M22 40V28h12v12"/><circle class="f" cx="28" cy="20" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The Sleep Helper trial</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Starling, Greenberg, Lewin et al., “Voice-Activated Cognitive Behavioral Therapy for Insomnia: A Randomized Clinical Trial,” JAMA Network Open, 3 September 2024 (NCT05233800). Breast cancer survivors with insomnia, randomized 1:1 to the smart-speaker program or an educational control for six weeks.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Digital therapeutics<span class="nomob"> · NIH-funded</span> · Washington, DC</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Insomnia therapy</span><span class="l">that talks you</span><span class="l"><em>to sleep.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Media Rez delivers cognitive behavioral therapy for insomnia, the gold-standard treatment, through a screen-free, conversational smart speaker at the bedside. Drug-free, screen-free, and tested in a randomized trial.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How it works '+ARR+'</a><a class="btn" href="#/programs">See the programs</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Insomnia affects up to 75% of young adult cancer survivors, and trained CBT-I therapists are few. Media Rez puts the gold-standard therapy <em>on the nightstand.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">−8.4</span><span class="k">points on the Insomnia Severity Index after six weeks with the smart-speaker program, against −2.6 for control</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.84M</span><span class="k">in National Cancer Institute SBIR awards to Media Rez since June 2025</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2013</span><span class="k">the year of Media Rez’s first NIH award; it has built NIH-funded games and apps for health ever since</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a night works</span><h2 class="d3">Lights down, <em>screens off.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Bedtime</span><span>Talk</span><span>Six weeks</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The phone keeps you up.</h2><p>Most digital insomnia programs live on a phone or a laptop. Used in bed, a bright screen is activating and suppresses the melatonin the body needs for sleep.</p></article>'+
     '<article class="step"><h2>A coach you talk to.</h2><p>Media Rez programs run on a smart speaker. You report your night out loud, get feedback, and are reminded of your plan, while custom lighting supports it and the screen stays dark.</p></article>'+
     '<article class="step"><h2>Sleep, week by week.</h2><p>Over six weeks the program walks through the components of CBT-I. In a randomized trial with breast cancer survivors, insomnia severity fell by 8.4 points, against 2.6 with education alone.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Approach</span><h2 class="d2 split">The gold standard, <em>out loud.</em></h2></div><p data-r>Media Rez is a software and game studio that builds behavior-change tools with leading researchers and tests them in NIH-funded trials. Its insomnia programs keep everything that makes CBT-I work and remove the screen, the pill and the office visit.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">Built with researchers, <em>tested in trials.</em></h2></div><p data-r>Every Media Rez title is created with clinical researchers and tested for effectiveness. Current work is funded by the National Cancer Institute: two insomnia programs for cancer survivors and a virtual reality program for cancer pain.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Game design <em>meets clinical science.</em></h2></div><p data-r>Media Rez brings together research, game design, software engineering, animation, virtual and augmented reality and AI, and builds every program with clinician-scientists as principal investigators.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Where</span><p data-r>A full-service software and game development studio in the heart of Washington, DC.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>SBIR awards and contracts from the National Cancer Institute, NICHD, NIMH and NIDA since 2013.</p></div>'+
    '<div><span class="lab kick" data-r>Published</span><p data-r>Results in JAMA Network Open, JMIR Formative Research, JMIR Cancer, JMIR Serious Games and Games for Health Journal.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards <em>and results.</em></h2></div><p data-r>Media Rez’s recent grant record and published research.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Physicians, payers and patients</span>'+
   '<h2 class="big split">Sleep better, <em>with Media Rez.</em></h2>'+
   '<p class="sub" data-r>Media Rez works with clinicians, health plans and research partners to bring screen-free CBT-I to the people who need it.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Contact Media Rez '+ARR+'</a><a class="btn" href="#/programs">See the programs</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Studio</span><p data-r>Media Rez, LLC<br>1325 Corcoran Street NW<br>Washington, DC 20009</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>By audience</span><p data-r><a class="ul" href="mailto:physicians@mediarez.com">Physicians</a> · <a class="ul" href="mailto:payers@mediarez.com">Payers</a> · <a class="ul" href="mailto:patients@mediarez.com">Patients</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Studio</span>1325 Corcoran Street NW<br>Washington, DC 20009</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Programs</span>More SHEEP · insomnia<br>Sleep Helper · insomnia<br>VR · cancer pain</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Figtree\',system-ui,sans-serif;font-weight:600;font-size:68px;letter-spacing:.02em">Media Rez</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Media Rez, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",approach:"platform",technology:"platform",platform:"platform",programs:"pipeline",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Media Rez — screen-free, voice-driven therapy for insomnia, Washington, DC",x:"Home"};
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
