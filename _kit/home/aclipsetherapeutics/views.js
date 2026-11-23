/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["A known molecule","Lobeglitazone was developed by Chong Kun Dang and approved in South Korea for type 2 diabetes. It has been dosed in over 3,600 patients and healthy volunteers during development and post-marketing surveillance.",'<circle cx="16" cy="38" r="5"/><circle cx="40" cy="38" r="5"/><circle cx="28" cy="16" r="5"/><path d="M19 34l6-13M37 34l-6-13M21 38h14"/><circle class="f" cx="28" cy="30" r="2.6"/>'],
  ["Rebalancing macrophages","M107 has been shown to shift pro-inflammatory M1 macrophages towards anti-inflammatory M2 macrophages, addressing the macrophage dysregulation behind gastroparesis.",'<circle cx="18" cy="28" r="9"/><path class="a" d="M30 28h10M36 24l4 4-4 4"/><circle cx="46" cy="28" r="6"/>'],
  ["Oral and protective","An orally available small molecule with anti-inflammatory benefits and a clinically favorable safety profile; in the kidney, PPAR&#947; agonists act directly on podocytes to protect them from injury.",'<rect x="14" y="20" width="28" height="16" rx="8"/><path d="M28 20v16"/><path class="a" d="M28 4v10M23 9l5 5 5-5"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From Aclipse Therapeutics&#8217; releases. Completion of the Cypress BioPharma transaction is subject to specified closing conditions. Aclipse is raising a Series B preferred equity financing to advance its expanded pipeline.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage biopharma<span class="nomob"> · Gastroparesis</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Targeting the cause</span><span class="l"><em>of gastroparesis.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Aclipse Therapeutics develops disease-modifying therapies for chronic and severe diseases. Our lead molecule, M107, is a best-in-class PPAR&#947; activator, heading into a Mayo Clinic-sponsored Phase 2 trial.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How M107 works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why gastroparesis</span>'+
   '<h2 class="txt" id="mani">Gastroparesis is stomach paralysis: a chronic, debilitating disease of the stomach&#8217;s nerves and muscles. Current approved and in-development drugs only treat its symptoms. <em>M107 seeks to address its biological cause.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">600,000</span><p class="k">Estimated patients in the U.S., with a high hospitalization rate</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2 in 3</span><p class="k">Patients report being dissatisfied with current treatments</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3,600+</span><p class="k">Patients and healthy volunteers dosed with lobeglitazone, the M107 molecule</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How M107 works</span><h2 class="d3">Calm the inflammation, <em>not just the symptoms.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Stall</span><span>Inflame</span><span>Rebalance</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The stomach stalls.</h2><p>Gastroparesis affects the stomach&#8217;s nerves and muscles. The stomach is paralysed and empties late, with nausea, vomiting and abdominal pain.</p></article>'+
     '<article class="step"><h2>Macrophages turn inflammatory.</h2><p>In the stomach wall, immune cells called macrophages shift towards a pro-inflammatory M1 state. Aclipse targets this macrophage-related inflammation.</p></article>'+
     '<article class="step"><h2>M107 rebalances them.</h2><p>M107, an oral PPAR&#947; activator, has been shown to shift M1 macrophages towards anti-inflammatory M2 macrophages, with the potential to modify the disease.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">One molecule, <em>two Phase 2 programs.</em></h2></div><p data-r>M107 is lobeglitazone, a best-in-class PPAR&#947; activator, licensed worldwide (excluding South Korea, Indonesia and Vietnam) from Chong Kun Dang. It is a new chemical entity in the U.S., EU, Japan and China, with an extensive clinical safety database.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Chronic, rare and <em>severe diseases.</em></h2></div><p data-r>Parallel gastrointestinal (M107G) and renal (M107R) programs for the M107 molecule, with dual-track Phase 2 proof-of-concept readouts, alongside M102 in neurology and M228 in a rare kidney disease.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug developers and <em>clinical leaders.</em></h2></div><p data-r>An experienced drug development team, with clinical advisory boards of key opinion leaders in gastroparesis and ALS, working with Mayo Clinic and the University of Sheffield.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Aclipse.</em></h2></div><p data-r>Announcements on our clinical collaborations, licensing and pipeline.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors and partners</span>'+
   '<h2 class="big split">Talk to <em>Aclipse.</em></h2>'+
   '<p class="sub" data-r>We&#8217;re happy to hear from you. Contact us to learn more about our business and scientific innovation, and how you can benefit from working with us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Aclipse '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>411 Swedeland Rd.<br>Suite 23-1080<br>King of Prussia, PA 19406</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@aclipse&#8203;therapeutics.com</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="https://www.linkedin.com/company/aclipse-therapeutics" target="_blank" rel="noopener">LinkedIn</a><br><a class="ul" href="https://twitter.com/aclipseone" target="_blank" rel="noopener">X (Twitter)</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>411 Swedeland Rd., Suite 23-1080<br>King of Prussia, PA 19406</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@aclipsetherapeutics.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Programs</span>M107G · M107R · M102 · M228</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Montserrat\',sans-serif;font-weight:500;font-size:84px;letter-spacing:.08em">ACLIPSE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Aclipse Therapeutics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",science:"technology",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Aclipse Therapeutics — disease-modifying medicine for gastroparesis",x:"Home"};
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
