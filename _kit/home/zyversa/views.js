/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+esc(c[6])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function newsUnused(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Blocks inflammasomes at ASC","IC 100 is a humanized IgG4 monoclonal antibody against adaptor ASC, shared by twelve or more inflammasomes. Unlike NLRP3 inhibitors, which target one, it is designed to block inflammasome formation and the start of the inflammatory cascade.",'<circle cx="28" cy="28" r="6"/><path d="M28 6v14M28 36v14M6 28h14M36 28h14"/><path class="a" d="M14 14l28 28"/>'],
  ["Stops inflammation spreading","IC 100 also disrupts ASC specks released outside the cell, which carry inflammation to neighbouring cells and tissues and drive the systemic spread behind comorbidities.",'<circle cx="21" cy="28" r="13"/><circle cx="21" cy="28" r="4"/><circle class="f" cx="43" cy="18" r="3"/><circle class="f" cx="46" cy="36" r="2.6"/><path class="a" d="M37 10l12 30"/>'],
  ["Carries cholesterol out","VAR 200 is a cholesterol efflux mediator. Its active ingredient, 2-hydroxypropyl-beta-cyclodextrin, is a cone-shaped ring of seven glucose units that takes cholesterol into its cavity and out of the kidney&#8217;s filtering cells.",'<ellipse cx="28" cy="16" rx="15" ry="5"/><path d="M13 16l6 24M43 16l-6 24"/><ellipse cx="28" cy="40" rx="9" ry="3"/><circle class="f" cx="28" cy="27" r="3.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
var EVID=[
 ["12 or more","Inflammasomes IC 100 can potentially inhibit by targeting ASC; NLRP3 inhibitors target one"],
 ["Initiation and spread","IC 100 blocks inflammasome formation and disrupts the ASC specks that perpetuate inflammation"],
 ["Seven glucose units","The cone-shaped ring of 2HP&#946;CD, hydrophilic outside, hydrophobic inside"],
 ["Mostly to the kidney","Given IV or subcutaneously, VAR 200 accumulates in the kidney before excretion in the urine"]];
function evid(){return '<div class="ev"><span class="lab kick" data-r>The two platforms</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+e[0]+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Both platforms are licensed from the University of Miami Miller School of Medicine, as described on zyversa.com.</p></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[3])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage specialty biopharma<span class="nomob"> · Inflammatory and renal disease</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Restoring health,</span><span class="l"><em>transforming lives.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ZyVersa is developing IC 100, an inflammasome ASC inhibitor, and VAR 200, a cholesterol efflux mediator, for patients with inflammatory and renal diseases.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">The science '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Two licensed platforms</span>'+
   '<h2 class="txt" id="mani">Two programmes from the University of Miami Miller School of Medicine. <em>One targets inflammation where it starts; one clears the cholesterol that damages the kidney&#8217;s filter.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">12+</span><p class="k">Inflammasomes IC 100 can potentially inhibit by targeting their shared adaptor, ASC</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$100B+</span><p class="k">Global addressable market for inflammatory diseases, as the company estimates it</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$18B</span><p class="k">Global addressable market for the renal diseases in ZyVersa&#8217;s focus</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside the kidney&#8217;s filter</span><h2 class="d3">Cholesterol out, <em>the filter protected.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Trapped</span><span>Arrives</span><span>Removed</span><span>Protected</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Cholesterol, trapped.</h2><p>In chronic kidney disease, cholesterol builds up in the podocytes of the kidney&#8217;s filter, in part because the transporters that move it out, ABCA1 and ABCG1, are reduced. The cells&#8217; foot processes are damaged and protein leaks into the urine.</p></article>'+
     '<article class="step"><h2>VAR 200 arrives.</h2><p>Given intravenously or subcutaneously, VAR 200 distributes to tissues and accumulates mostly in the kidney, where it interacts with the podocytes&#8217; cell membranes.</p></article>'+
     '<article class="step"><h2>Cholesterol, carried out.</h2><p>Its cone-shaped ring takes cholesterol into its hydrophobic cavity as an inclusion complex and brings it into solution, for transfer to acceptors such as HDL.</p></article>'+
     '<article class="step"><h2>The filter, protected.</h2><p>In preclinical studies, removing excess cholesterol protected podocytes against structural damage and reduced protein in the urine, the proteinuria that can lead to kidney failure.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Inflammasomes <em>and renal lipids.</em></h2></div><p data-r>Inflammasomes activate the innate immune system; when activation is excessive or chronic, it drives inflammatory disease. In chronic kidney disease, cholesterol that cannot leave the filter&#8217;s cells damages their structure and function. ZyVersa has a first-in-class candidate for each.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Two candidates, <em>five indications.</em></h2></div><p data-r>IC 100 leads in cardiometabolic disease associated with obesity, with room to expand into CNS and peripheral inflammation. VAR 200 leads in the orphan renal disease FSGS, with Alport syndrome and diabetic kidney disease to follow.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built by people who <em>build biopharma.</em></h2></div><p data-r>A leadership team with deep pharmaceutical experience and a record in R&amp;D, commercialisation, licensing, M&amp;A, capital raising and taking companies public.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>ZyVersa.</em></h2></div><p data-r>Company news releases. Filings, presentations and the full archive are on the investor site.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and media</span>'+
   '<h2 class="big split">Talk to <em>ZyVersa.</em></h2>'+
   '<p class="sub" data-r>ZyVersa is headquartered in Lighthouse Point, Florida. We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Corporate headquarters</span><p data-r>2436 N. Federal Highway, Suite 466<br>Lighthouse Point, Florida 33064</p></div>'+
    '<div><span class="lab" data-r>Direct</span><p data-r><a class="ul" href="tel:+17542311688">754-231-1688</a></p></div>'+
    '<div><span class="lab" data-r>Corporate, media and IR</span><p data-r><a class="ul" href="'+MAIL+'">kcashmere@zyversa.com</a><br><a class="ul" href="tel:+17862519641">786-251-9641</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Lighthouse Point, Florida<br>USA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">kcashmere@zyversa.com</a><br><a class="ul" href="tel:+17542311688">754-231-1688</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platforms</span>Licensed from the University of Miami Miller School of Medicine</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Titillium Web\',sans-serif;font-weight:600;font-size:64px">ZYVERSA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ZyVersa Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",story:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ZyVersa Therapeutics — inflammasome and renal disease therapeutics",x:"Home"};
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
