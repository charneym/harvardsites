/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Unobtrusive care","Removing the small but critical obstacles that stand in the way of compliance and independence. Our solutions are most meaningful when the value we provide is unobtrusive, yet indispensable.",'<circle cx="28" cy="28" r="19"/><path class="a" d="M19 29l6 6 12-13"/>'],
  ["Directed to the inflammation","Rectally administered topical treatments direct delivery to inflammation sites and limit systemic drug exposure. ngHCA is a small-volume suppository given with the Sephure&#174; applicator.",'<circle cx="28" cy="28" r="19"/><circle cx="28" cy="28" r="9"/><circle class="f" cx="28" cy="28" r="3.2"/>'],
  ["Formulation and device, together","Patented drug formulations, delivery devices, manufacturing processes and assay methods, developed in-house from concept to the FDA.",'<rect x="13" y="20" width="30" height="16"/><path d="M28 20v16"/><path class="a" d="M8 28h5M43 28h5"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From cristcot.com and Cristcot&#8217;s releases of 9 January 2025 and 21 April 2026. ngHCA is investigational and has not been approved by the FDA.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Ulcerative colitis of the rectum<span class="nomob"> · NDA accepted</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Calming the flare</span><span class="l"><em>where it starts.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Cristcot is a clinical-stage pharmaceutical company developing ngHCA, a small-volume hydrocortisone acetate suppository given with the FDA-cleared Sephure&#174; applicator, for acute flares of ulcerative colitis.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our approach</span>'+
   '<h2 class="txt" id="mani">We are in the business of addressing the problem within the problem: the details and connections <em>other companies have left undone.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1.3M</span><p class="k">Ulcerative colitis patients in the U.S., roughly</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">80%+</span><p class="k">Of UC patients experience two flares a year</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2008</span><p class="k">Founded; now a global development and research organization</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Treat the rectum, <em>calm the flare.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Flare</span><span>Deliver</span><span>Release</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Flares start in the rectum.</h2><p>UC flares originate in the rectum. Left untreated, the inflammation can progress to more proximal disease, leading to hospitalization or surgery.</p></article>'+
     '<article class="step"><h2>A small suppository, placed.</h2><p>ngHCA is a small-volume 90 mg hydrocortisone acetate suppository, given with Cristcot&#8217;s patented Sephure&#174; applicator to direct it to the site of inflammation.</p></article>'+
     '<article class="step"><h2>Released where it is needed.</h2><p>The formulation allows rapid, sustained release with very limited systemic exposure. In Phase 3, patients reached clinical remission by Day 29.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Better drugs, <em>better delivery.</em></h2></div><p data-r>Cristcot specializes in innovative drug formulations and unobtrusive drug-device technologies that help patients and caregivers overcome the persistent, often unseen obstacles in disease management, starting in gastroenterology.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From the rectum to <em>the wider gut.</em></h2></div><p data-r>Our programs are built on patented drug formulations and delivery platforms designed for reliability, usability and patient acceptance. If approved, ngHCA would be the first and only FDA-approved hydrocortisone acetate suppository.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">From invention <em>to approval.</em></h2></div><p data-r>Cristcot&#8217;s leadership combines scientific invention, pharmaceutical development, device engineering, regulatory expertise, clinical research and financial discipline.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Cristcot.</em></h2></div><p data-r>Our regulatory, clinical and leadership news, and our scientific presentations.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>Cristcot.</em></h2>'+
   '<p class="sub" data-r>Improving people&#8217;s lives through better therapies, innovations and care. We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Cristcot '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>901 S. Mopac Expressway<br>Building 3, Suite 375<br>Austin, Texas 78746</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@cristcot.com</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+19782126380">978.212.6380</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>901 S. Mopac Expressway<br>Austin, Texas 78746</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@cristcot.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead program</span>ngHCA · ulcerative colitis of the rectum</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Figtree\',sans-serif;font-weight:400;font-size:80px">cristcot</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Cristcot</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",science:"science",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Cristcot — targeted therapies for ulcerative colitis",x:"Home"};
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
