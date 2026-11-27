/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function specRows(){return '<ul class="pfr pipe np">'+SPECS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row mf-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Infection and healing, together","Current solutions often tackle infection or healing, but rarely both. The PDPatch does both in one device.",'<circle cx="20" cy="28" r="10"/><circle cx="36" cy="28" r="10"/><circle class="f" cx="28" cy="28" r="2.2"/>'],
  ["No antibiotics","Non-antibiotic action, to help combat antimicrobial resistance (AMR).",'<rect x="10" y="22" width="36" height="12" rx="6"/><path class="a" d="M12 44L44 12"/>'],
  ["Data-driven care","Smart connectivity for personalised care, with real-time monitoring and remote access for clinicians.",'<path d="M8 40H48"/><path class="a" d="M10 34L20 26L28 30L40 16"/><circle class="f" cx="40" cy="16" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function certs(){var S=[
  ["Setting","Hospitals","Lightweight and intuitive enough for the ward, with remote access for the clinical team."],
  ["Setting","Clinics","Personalised treatment adjustments, guided by real-time wound monitoring."],
  ["Setting","At home","Simple to use at home, with data that reaches clinicians remotely."]];
  return '<div class="mfs">'+S.map(function(s){return '<div class="mf-site"><span class="lab" data-r>'+esc(s[0])+'</span><h3 data-r>'+esc(s[1])+'</h3><p data-r>'+esc(s[2])+'</p></div>'}).join("")+'</div>'}
function backers(){var S=[
  ["NIHR","i4i THRIVE fellowship","£150,000 through the NIHR i4i entrepreneurial fellowship programme."],
  ["Innovate UK","Manufacturing scale-up","£100,000 for an automated manufacturing blueprint for the PDPatch, from July 2026."],
  ["Plug and Play","MedTech Accelerator","Batch 5 of the Health MedTech Accelerator in Warsaw, Indiana, a gateway into the US market."]];
  return '<div class="mfs">'+S.map(function(s){return '<div class="mf-site"><span class="lab" data-r>'+esc(s[0])+'</span><h3 data-r>'+esc(s[1])+'</h3><p data-r>'+esc(s[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Smart photodynamic wound care<span class="nomob"> · Bradford, UK</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Light that clears infection</span><span class="l"><em>and heals the wound.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>The PDPatch combines photodynamic therapy with AI-driven remote monitoring, to transform how chronic wounds are managed and treated, without antibiotics.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Work with us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Chronic wounds are a silent epidemic</span>'+
   '<h2 class="txt" id="mani">Diabetic foot ulcers are among the most severe chronic wounds, leading to amputations. Persistent infections, frequent hospitalisations and ineffective treatments cost health systems billions, and <em>today’s solutions rarely tackle both infection and healing.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">40M+</span><p class="k">People worldwide living with chronic wounds</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2 in 1</span><p class="k">Infection control and wound healing in one device</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Product tiers, Essential, Advanced and Premium, for different healthcare settings</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology · photodynamic therapy</span><h2 class="d3">Light, gel, <em>and healing.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Wound</span><span>Activate</span><span>Heal</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>An infected wound.</h2><p>Chronic wounds stay open, held back by persistent infection, including drug-resistant strains.</p></article>'+
     '<article class="step"><h2>Light meets the gel.</h2><p>The PDPatch’s PhotOxy Gel holds photosensitive compounds. When the patch’s light activates them, they eliminate infection, including drug-resistant strains.</p></article>'+
     '<article class="step"><h2>Healing, monitored.</h2><p>The same therapy accelerates healthy tissue regeneration, while AI-driven monitoring tracks the wound in real time and lets clinicians adjust treatment remotely.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pdpatch" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>PDPatch™</span><h2 class="d2 split">Smart. Connected. <em>Effective.</em></h2></div><p data-r>A novel, non-antibiotic smart textile that transforms wound care through dual-action photodynamic therapy, with connectivity built in.</p></div>'+
   specRows()+
  '</div></section>'+

  '<section class="sec light" id="difference" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Difference</span><h2 class="d2 split">Unlike dressings <em>or antibiotics.</em></h2></div><p data-r>Unlike dressings, antibiotics or traditional wound devices, the PDPatch treats infection and healing together, and brings the wound’s data to the clinician wherever the patient is.</p></div>'+
   caps()+
   certs()+
  '</div></section>'+

  '<section class="sec light alt" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built in Bradford, <em>backed nationally.</em></h2></div><p data-r>Khott Biotech is based at the University of Bradford and partners with healthcare providers, medical device manufacturers, distributors and investors to bring the PDPatch to patients worldwide.</p></div>'+
   team()+
   backers()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Funding, fellowships <em>and prizes.</em></h2></div><p data-r>The latest from Khott Biotech. Each item links to the full story on khottbiotech.com.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Providers, manufacturers, distributors and investors</span>'+
   '<h2 class="big split">Interested in <em>working together?</em></h2>'+
   '<p class="sub" data-r>Together we can reduce amputations, lower healthcare costs and improve quality of life for millions living with chronic wounds.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Khott Biotech '+ARR+'</a><a class="btn" href="#/pdpatch">About the PDPatch</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Khott Biotech Ltd<br>University of Bradford<br>Bradford BD7 1DP</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>Khott Biotech Ltd<br>Company number 16308927</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>University of Bradford<br>Bradford BD7 1DP</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pdpatch">PDPatch</a><br><a class="ul" href="#/difference">Difference</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Supported by</span>NIHR i4i<br>Innovate UK<br>Plug and Play</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Jost\',Arial,sans-serif;font-weight:300;font-size:54px;letter-spacing:.22em">KHOTT BIOTECH</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Khott Biotech Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",pdpatch:"pdpatch",difference:"difference",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Khott Biotech — smart photodynamic therapy for chronic wounds",x:"Home"};
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
