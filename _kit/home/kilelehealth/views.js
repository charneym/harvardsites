/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function progRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  var two=c[1]==="Second wave";
  return '<li'+(two?' class="dim"':'')+'><span class="lab tg"><b'+(two?' class="pz"':'')+'>'+esc(c[1])+'</b><i>'+(two?'Roadmap':'Scheduled first')+'</i></span><div class="pgm"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[2])+'</span></div>'+
   '<p>'+esc(c[3])+'</p><span class="lab lk">'+(two?'Wave 2':'Wave 1')+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Beyond glucose","Aptamers are the most broadly demonstrated in vivo of any sensing approach, and in vitro they now quantify nearly half the human proteome in a single commercial assay. SunVida brings them to hormones, metabolites and proteins.",'<path d="M8 40c8 0 8-18 16-18s8 12 16 12 8-20 16-20"/><path class="a" d="M8 48h40"/><circle class="f" cx="40" cy="34" r="3"/>'],
  ["Built to last","Sensor longevity has been the aptamer’s major weakness. Kilele is the first to solve it, and the first to patent against it, matching the 2-week, factory-calibrated performance now standard for glucose monitors.",'<rect x="10" y="12" width="36" height="34"/><path d="M10 22h36M18 8v8M38 8v8"/><path class="a" d="M18 34l6 6 14-14"/>'],
  ["A format patients know","The highest-accuracy sensors, built on proven glucose-monitor-style device formats, and deployed against the most compelling needs in chronic disease management.",'<circle cx="28" cy="28" r="18"/><circle cx="28" cy="28" r="9"/><path class="a" d="M28 19v-9M28 46v-9"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){var EV=[
  ["In vivo, March 2025","10-day performance of the SunVida wearable aptamer biosensor in a porcine model, measuring a key hormone biomarker with no significant decline: believed to be a world first for any aptamer biosensor"],
  ["In whole serum, October 2026","A mixed charge monolayer extended electrochemical aptamer sensors to 14 days without a filtering membrane: cortisol sensors kept ~80% of their signal gain, PDGF-bb sensors nearly 100%"],
  ["Support","The National Science Foundation, the National Institutes of Health and corporate collaborators"],
  ["Next","Human studies, with a focus on heart failure, pediatric phenylketonuria and patients with multiple chronic diseases"]];
  return '<div class="ev light-ev"><span class="lab kick" data-r>Proof points</span><div><dl>'+EV.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From Kilele Health’s release of March 23, 2025, and Young et al., “Mixed Charge Monolayers Enable Multi-Week Continuous Analyte Monitoring in Whole Serum,” ACS Sensors, 2026. SunVida is in development and not cleared for clinical use.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Continuous biochemical monitoring<span class="nomob"> · SunVida™</span> · Oakwood, OH</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Real-time biochemistry,</span><span class="l"><em>beyond glucose.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Kilele Health’s SunVida™ is a wearable aptamer biosensor platform: continuous, real-time readings of the blood biomarkers that drive chronic disease, in the glucose-monitor formats patients already wear.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/platform">The SunVida platform '+ARR+'</a><a class="btn" href="#/programmes">Programmes</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The missing layer</span>'+
   '<h2 class="txt" id="mani">AI, analytics and digital health are advancing fast, yet biochemical data beyond glucose is largely invisible outside the clinic. SunVida makes it continuous, <em>so care can move from snapshots to what is happening in the body now.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">10 days</span><p class="k">In vivo performance of the SunVida aptamer biosensor, with no significant decline</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">14 days</span><p class="k">Sensor life in whole serum with Kilele’s mixed charge monolayer</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1M</span><p class="k">In National Science Foundation funding, 2024</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a SunVida sensor works</span><h2 class="d3">One molecule, read <em>for weeks.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Bind</span><span>Resist</span><span>Last</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Recognise the molecule.</h2><p>Each sensor carries aptamers: short synthetic strands that fold around one target molecule, such as cortisol. When the target binds, the strand changes shape on the electrode, and the change is read as current, continuously.</p></article>'+
     '<article class="step"><h2>Keep the surface clean.</h2><p>Proteins in blood foul affinity sensors within days, and membranes that block them also block the proteins worth measuring. Kilele’s mixed charge monolayer, compact amine and carboxyl terminations on 8-carbon thiolates, resists fouling without a membrane.</p></article>'+
     '<article class="step"><h2>Hold accuracy for weeks.</h2><p>In whole serum the interface kept aptamer sensors working for 14 days: cortisol sensors kept about 80% of their signal gain and PDGF-bb sensors nearly all of it. In vivo, SunVida has run for 10 days.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The SunVida™ platform</span><h2 class="d2 split">Next-generation aptamer sensors, <em>in a familiar format.</em></h2></div><p data-r>SunVida unlocks the biochemical data layer: real-time and longitudinal molecular information, turned into actionable insight for individuals and for populations.</p></div>'+
   caps()+
   evid()+
  '</div></section>'+

  '<section class="sec dark2" id="programmes" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">Where continuous insight <em>changes care first.</em></h2></div><p data-r>The aptamer roadmap runs in two waves, starting with phenylalanine for phenylketonuria and GLP-1 therapy, then cortisol, insulin and multi-analyte panels for chronic disease.</p></div>'+
   progRows(PROG)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Medtech operators, <em>sensor scientists.</em></h2></div><p data-r>Over 50 years of medtech and start-up experience, including multiple exits and M&amp;A deals, with an aptamer and electrochemistry team working out of Ohio.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Origins</span><p data-r>Founded in 2021 to commercialise wearable sensing from the University of Cincinnati, where co-founder Jason Heikenfeld directs the Novel Devices Laboratory.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>Supported by the National Science Foundation, including $1 million in 2024, the National Institutes of Health and corporate collaborators.</p></div>'+
    '<div><span class="lab kick" data-r>Recognition</span><p data-r>First place at the 2024 OhioXcelerate pitch competition, a Dayton Inno Fire Award honoree, and a Startup to Watch in Dayton and Cincinnati.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Papers, proof points <em>and press.</em></h2></div><p data-r>The latest from Kilele Health, from the first 10-day aptamer biosensor in vivo to two weeks in whole serum.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Collaborators, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>Kilele Health.</em></h2>'+
   '<p class="sub" data-r>Interested in collaborating with us? Share your information and we’ll reach out. Together, we can bring great ideas to life.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Kilele Health '+ARR+'</a><a class="btn" href="#/platform">About SunVida</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Kilele Health Inc.<br>Oakwood, Ohio</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Investor relations &amp; media</span><p data-r>Inquiries to the same address, or through <a class="ul" href="https://www.linkedin.com/company/82792278" target="_blank" rel="noopener">LinkedIn</a>.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Kilele Health Inc.<br>Oakwood, Ohio</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/platform">Platform</a><br><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platform</span>SunVida™ · Wearable aptamer biosensors for continuous biochemical monitoring</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="60" text-anchor="middle" style="font-family:\'Barlow Condensed\',Arial,sans-serif;font-weight:600;font-size:66px">KILELE HEALTH</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Kilele Health Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",platform:"platform",technology:"story",programmes:"programmes",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Kilele Health — SunVida™, continuous biochemical monitoring beyond glucose",x:"Home"};
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
