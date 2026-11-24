/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Nature’s own cofactor","Polyphosphate (polyP) is part of the natural healing response and is stored in platelets. As a cofactor, it modulates the activation efficiency of key coagulation factors.",'<circle cx="16" cy="40" r="6"/><circle cx="28" cy="30" r="6"/><circle cx="40" cy="20" r="6"/><path class="a" d="M21 36l2-2M33 26l2-2"/><circle class="f" cx="40" cy="20" r="2.4"/>'],
  ["Targeted to the bleed","PolyP is targeted to the site of bleeding and is inert elsewhere in the body, so CAY001 can be given systemically and still act where it is needed.",'<circle cx="28" cy="28" r="18"/><circle cx="28" cy="28" r="9"/><circle class="f" cx="28" cy="28" r="3"/><path class="a" d="M28 2v8M28 46v8M2 28h8M46 28h8"/>'],
  ["Restores the ability to clot","By accelerating or normalizing thrombin production, polyP enables clot formation, where current treatments only slow clot breakdown.",'<path d="M8 44h40"/><path class="a" d="M10 42c10 0 12-26 18-26s8 26 18 26"/><circle class="f" cx="28" cy="16" r="3"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Preclinical data</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Data is highly reproducible in predictive models with proven translational power. Sources: Cayuga Biotech publications listed on cayugabiotech.com; Phase 1 details from ClinicalTrials.gov, NCT06845839.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>CAY001<span class="nomob"> · Phase 1 · polyP-SNP complex</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Transforming</span><span class="l">the treatment of</span><span class="l"><em>hemorrhage.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Cayuga Biotech is harnessing the body’s innate ability to stop bleeding with first-in-class therapeutics. Our lead, CAY001, is a synthetic short-chain polyphosphate complexed with a silica nanoparticle, given as a single intravenous dose.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Hemorrhage is a top underlying cause of death after surgery, childbirth, trauma and the use of blood thinners, and today’s treatments do not adequately treat noncompressible bleeding. <em>Every second counts.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2M</span><p class="k">Deaths from hemorrhage each year, worldwide</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3.5M</span><p class="k">Annual treatment opportunities, a total addressable market of $25B</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$8M</span><p class="k">Seed funding closed in December 2025 to advance CAY001 through Phase 1</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Clotting where it is needed, <em>inert elsewhere.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Deliver</span><span>Target</span><span>Clot</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>One intravenous dose.</h2><p>CAY001 is given systemically, so it reaches non-compressible bleeding sites, such as intracranial bleeding or a penetrating injury, that pressure and dressings cannot.</p></article>'+
     '<article class="step"><h2>It finds the bleed.</h2><p>CAY001 mimics the polyphosphate that platelets release. It is targeted to the site of bleeding and is inert elsewhere in the body.</p></article>'+
     '<article class="step"><h2>Thrombin, then a clot.</h2><p>As a cofactor, polyP accelerates and normalizes thrombin production, restoring the ability to clot even under the lethal triad of hemodilution, acidosis and hypothermia.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our novel science</span><h2 class="d2 split">Biomimetic solutions for <em>hemorrhage control.</em></h2></div><p data-r>Impaired thrombin production is the hallmark of coagulation dysfunction, including that due to blood thinners, factor deficiency, hemodilution, acidosis and hypothermia. Cayuga was founded to tackle it with proprietary polyP science.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">First-in-class, <em>clinical stage.</em></h2></div><p data-r>CAY001, an optimized polyP-SNP complex, is in Phase 1 for life-threatening hemorrhage, with CAY002 in discovery for inherited bleeding disorders and an early pipeline across the healing continuum.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Experience behind <em>every approved hemorrhage therapy.</em></h2></div><p data-r>Our collective experience has resulted in the discovery, development, commercialization and partnering of more than 50 drugs, including all of the currently approved therapeutics for hemorrhage.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">CAY001 <em>in the clinic.</em></h2></div><p data-r>The latest on our Phase 1 study, our data and our funding.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Collaborate <em>with us.</em></h2>'+
   '<p class="sub" data-r>If you are interested in investment, development, licensing or other partnership discussions, we invite you to get in touch.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+PMAIL+'">Write to our partnering team '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Cayuga Biotech, Inc.<br>500 Eighth Avenue, Front 3, #1596<br>New York, NY 10018</p></div>'+
    '<div><span class="lab" data-r>General</span><p data-r><a class="ul" href="'+MAIL+'">info@cayugabiotech.com</a></p></div>'+
    '<div><span class="lab" data-r>Partnering</span><p data-r><a class="ul" href="'+PMAIL+'">partner@cayugabiotech.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>New York, NY</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@cayugabiotech.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead programme</span>CAY001 · polyP-SNP complex for life-threatening hemorrhage</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Jost\',sans-serif;font-weight:400;font-size:66px;letter-spacing:.06em">CAYUGA BIOTECH</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Cayuga Biotech, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",science:"science",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Cayuga Biotech — CAY001, a first-in-class treatment for life-threatening hemorrhage",x:"Home"};
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
