/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function resRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><a class="lab lk" href="'+c[6]+'" target="_blank" rel="noopener">'+esc(c[5])+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
var BICO=[
 '<circle cx="28" cy="28" r="17"/><path class="a" d="M28 11v34"/><path d="M14 20c6 4 22 4 28 0M14 36c6-4 22-4 28 0"/>',
 '<path d="M8 40c8-10 14-10 20 0s12 10 20 0"/><path class="a" d="M28 30V10M21 17l7-7 7 7"/>',
 '<path d="M10 42c6-14 12-20 18-20s12 6 18 20"/><path class="a" d="M28 22V8"/><path d="M20 30h16"/>'];
function bundles(){
  return '<div class="caps">'+BUND.map(function(b,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+BICO[i]+'</svg><span class="lab" data-r>'+esc(b[1])+'</span><h3 data-r>'+esc(b[0])+'</h3><p data-r>'+esc(b[2])+'</p>'+
   '<p class="bpg" data-r>'+esc(b[3])+'</p><p class="bsp" data-r>'+esc(b[4])+'</p></div>'}).join("")+'</div>';}
function delivery(){return '<div class="bk light-bk"><span class="lab kick" data-r>Also</span><p class="cr" data-r><span>Salty for Chronic Pain, through providers, health systems and employers</span><i>·</i><span>Tobacco programs for teens, pregnancy and Black Americans</span><i>·</i><span>One app, iPhone and Android</span></p></div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Phase III trial<br>at a glance</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>iCanQuit was the research app evaluated in the trial, conducted by Fred Hutchinson Cancer Center; SmartQuit was an earlier version. The research app and the current 2Morrow program share the same ACT-based foundation, although features and implementation may differ from the versions studied.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Digital behavioral health<span class="nomob"> · Since 2011</span> · Kirkland, WA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Do more of</span><span class="l">the things</span><span class="l"><em>that matter.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>2Morrow makes evidence-based digital programs, grounded in Acceptance and Commitment Therapy, that help people quit tobacco, manage stress and live well with pain, through one app and coaches on their terms.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/programs">Our programs '+ARR+'</a><a class="btn" href="#/evidence">The evidence</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Behaviors are interconnected</span>'+
   '<h2 class="txt" id="mani">Change doesn’t happen in a vacuum. When you change one behavior, it affects others, so 2Morrow bundles programs that teach the same transferable skills, <em>starting with what really matters to you.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1M+</span><p class="k">People helped to quit tobacco, manage stress and change health behaviors since 2011</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2,415</span><p class="k">Adults in the Phase III randomized clinical trial behind its tobacco program</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20+</span><p class="k">Studies and clinical trials, including RCTs, informing the programs</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a program works</span><h2 class="d3">Values first, <em>then action.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Values</span><span>Make room</span><span>Act</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>It starts with Valued Goals.</h2><p>Participants define what matters most to them and set goals that align with those values. Those personal values become the motivation for change people actually want to make.</p></article>'+
     '<article class="step"><h2>Make room for what shows up.</h2><p>A guided exploration of new ways to deal with the unhelpful thoughts, feelings and urges that keep people stuck in old patterns: noticing them, without automatically acting on them.</p></article>'+
     '<article class="step"><h2>Take valued action.</h2><p>Participants practice taking steps toward their goals in the real world. Each program teaches skills that build on each other, and coaches are there for support along the way.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="programs" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>2Morrow Health</span><h2 class="d2 split">Three bundles, <em>one app.</em></h2></div><p data-r>Self-paced behavioral programs, each completed in just weeks, delivered through the privacy and convenience of a smartphone, with on-demand content, progress tracking and human coaching.</p></div>'+
   bundles()+
   delivery()+
  '</div></section>'+

  '<section class="sec dark2" id="evidence" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research and evidence</span><h2 class="d2 split">Evidence is part of <em>our DNA.</em></h2></div><p data-r>A Phase III randomized trial in smoking cessation with Fred Hutchinson Cancer Center, and NIH-funded research in chronic pain with the University of Washington School of Medicine.</p></div>'+
   resRows(RES)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Nursing, technology <em>and behavioral science.</em></h2></div><p data-r>Led by a nurse turned serial entrepreneur and the founder who built mobile behavior change before it had a name, with clinicians and researchers across the team.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Partners</span><p data-r>2Morrow’s programs reach people through employers, health plans, state public health agencies and health systems; its tobacco programs meet the ACA Reasonable Alternative Standard.</p></div>'+
    '<div><span class="lab kick" data-r>Recognition</span><p data-r>TIME’s World’s Top HealthTech Companies 2026, Newsweek’s World’s Best Digital Health Companies 2024, and the DiMe Seal for the Breathe Bundle in 2025.</p></div>'+
    '<div><span class="lab kick" data-r>Collaborators</span><p data-r>Fred Hutchinson Cancer Center, UW Medicine, Seattle Children’s, the University of New Mexico, the Washington State Department of Health and Trinity College Dublin.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Studies, seals <em>and recognition.</em></h2></div><p data-r>The latest from 2Morrow, from the NIH-funded chronic pain study to TIME’s list of top healthtech companies.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Employers, health plans, states and researchers</span>'+
   '<h2 class="big split">Talk to <em>2Morrow.</em></h2>'+
   '<p class="sub" data-r>Whether you are bringing behavioral health to employees, members or a state program, or partnering on research, we would love to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email 2Morrow '+ARR+'</a><a class="btn" href="#/programs">See the programs</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>2Morrow, Inc.<br>Kirkland, Washington</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18333448425">(833) 344-8425</a></p></div>'+
    '<div><span class="lab" data-r>Please note</span><p data-r>2Morrow’s programs offer behavioral support and education, not a replacement for professional medical care or therapy.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>2Morrow, Inc.<br>Kirkland, Washington</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18333448425">(833) 344-8425</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/evidence">Evidence</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">The platform</span>2Morrow Health · Wellbeing, Resolve and Breathe bundles · Salty for Chronic Pain</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="76" text-anchor="middle" style="font-family:\'Barlow Semi Condensed\',Arial,sans-serif;font-weight:600;font-size:96px">2Morrow</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 2Morrow® Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",programs:"programs",approach:"story",evidence:"evidence",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"2Morrow — evidence-based digital behavioral health, Kirkland, Washington",x:"Home"};
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
