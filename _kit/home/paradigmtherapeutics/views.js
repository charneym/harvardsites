/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+CT+c[7]+'" target="_blank" rel="noopener">'+c[7]+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function ebTypes(){
  /* each icon: a tiny skin section (surface, basement membrane, dermis) with the cleft where that type's blisters arise */
  var base='<path d="M4 10h48"/><path d="M4 14h48" class="o"/><path d="M4 31c4-3 8-3 12 0s8 3 12 0 8-3 12 0 8 3 12 0"/><path d="M4 44c6-2 12 2 18 0s12-2 18 0 8 1 12 0" class="o"/><path d="M4 51c6-2 12 2 18 0s12-2 18 0 8 1 12 0" class="o"/>';
  var cl=function(y){return '<path class="a" d="M14 '+y+'c5-4 23-4 28 0c-5 3-23 3-28 0z"/>'};
  var C=[
   ["Simplex","About 70% of patients","Blisters and wounds arise within the lower epidermis.",cl(22)],
   ["Dystrophic","About 25% of patients","Blisters arise below the basement membrane, in the upper dermis, from a defect in the anchoring fibrils.",cl(37)],
   ["Junctional","About 5% of patients","Blisters arise in the lamina lucida, the top of the basement membrane.",cl(28)],
   ["Kindler","Under 1% of patients","Blisters arise in several skin layers, including the basement membrane, at the same time.",'<path class="a" d="M10 22c3-3 11-3 14 0c-3 2-11 2-14 0z"/><path class="a" d="M24 28c3-3 11-3 14 0c-3 2-11 2-14 0z"/><path class="a" d="M36 37c3-3 11-3 14 0c-3 2-11 2-14 0z"/>']];
  return '<div class="caps eb4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+base+c[3]+'</svg><span class="lab" data-r>'+c[1]+'</span><h3 data-r>'+c[0]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function ebFacts(){var F=[["United States","An estimated 20,000 to 50,000 people, comparable to cystic fibrosis; about 20 in every million newborns"],["Europe","An estimated 50,000 to 80,000 people"],["Worldwide","About 500,000 people are estimated to live with EB"],["Standard of care","Supportive only: daily wound care, protective bandaging, treating infections, managing pain and itch, and good nutrition"]];
  return '<div class="ev lev"><span class="lab kick" data-r>Who lives with EB</span><div><dl>'+F.map(function(e){return '<div><dt class="lab" data-r>'+e[0]+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Estimates as cited by Paradigm from the National Epidermolysis Bullosa Registry, Stanford Medicine and the EB Research Network. There is no medicine, product or procedure proven to cure EB.</p></div></div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>What Zorblesia&#8217;s active moiety does</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Zorblesia&#8217;s active ingredient is allantoin, in a cream formulation with demonstrated stability of allantoin for several years at concentrations up to 9%. The cream is stored at room temperature and needs no special clinical handling.</p></div></div>'}
function desig(){return '<div class="bk"><span class="lab kick" data-r>Designations</span><p class="cr" data-r><span>FDA Breakthrough Therapy, the first for EB</span><i>·</i><span>FDA Rare Pediatric Disease</span><i>·</i><span>FDA Orphan Drug</span><i>·</i><span>European Commission Orphan Drug</span></p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Zorblesia&#8482; (SD-101)<span class="nomob"> · Phase 3 enrolling</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">One cream for</span><span class="l">the whole skin, in</span><span class="l"><em>every kind of EB.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Paradigm Therapeutics is developing Zorblesia&#8482;, a topical cream applied daily over the entire skin surface to treat the blisters, tears and wounds of epidermolysis bullosa, across all of its major subtypes.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/zorblesia">About Zorblesia '+ARR+'</a><a class="btn" href="#/eb">What is EB</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Partner in rare diseases</span>'+
   '<h2 class="txt" id="mani">No approved therapy was developed to treat the entire skin surface across every subtype of epidermolysis bullosa. <em>Zorblesia is the first topical therapy developed to treat the wounds and lesions on the entire skin surface, across all EB subtypes.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">217</span><p class="k">Children and adults with EB treated in the completed Phase II and Phase III studies</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1st</span><p class="k">EB treatment to receive the FDA&#8217;s Breakthrough Therapy designation</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">14</span><p class="k">Countries, at 17 sites, in the SD-007 Phase 3 trial, which enrolled its first patient in October 2026</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How Zorblesia is used</span><h2 class="d3">From open wounds <em>to new skin.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fragile skin</span><span>Whole body</span><span>Closure</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Skin that tears at a touch.</h2><p>In EB, defective structural proteins let the skin&#8217;s layers come apart from the slightest friction, leaving blisters and open wounds that heal slowly and can become infected.</p></article>'+
     '<article class="step"><h2>Applied to the whole body.</h2><p>Zorblesia is a cream applied every day over the entire skin surface, wounds and lesional skin alike, in children as young as a few weeks old and in adults.</p></article>'+
     '<article class="step"><h2>Wounds that close.</h2><p>Its active moiety promotes the formation of epithelial and granulation tissue. Target wound closure is what the clinical studies measure first.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="eb" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>What is EB</span><h2 class="d2 split">Fragile skin, <em>from birth.</em></h2></div><p data-r>Epidermolysis bullosa is a group of rare, inherited disorders in which the skin, and sometimes the lining of internal organs, blisters and tears from minor friction or trauma. More than 30 distinct gene mutations cause it; the four major types differ in where the skin comes apart.</p></div>'+
   ebTypes()+
   ebFacts()+
  '</div></section>'+

  '<section class="sec dark2" id="zorblesia" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Zorblesia&#8482; (SD-101)</span><h2 class="d2 split">A whole-body cream, <em>in Phase 3.</em></h2></div><p data-r>Zorblesia is Paradigm&#8217;s investigational topical therapy for the whole-body skin lesions of EB: blisters, tears and sores. Studies in the U.S. and Europe have shown improvements in wound healing, and an excellent long-term safety profile to date.</p></div>'+
   pipeRows(PIPE)+
   evid()+
   desig()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug developers who <em>have done this before.</em></h2></div><p data-r>A team with decades of global drug development behind it, led by the co-founder of Scioderm, where SD-101 began, and backed by Eshelman Ventures.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Backing</span><p data-r>$25.1 million from Eshelman Ventures in 2025, to complete development of SD-101 and prepare for its global launch.</p></div>'+
    '<div><span class="lab kick" data-r>Recognition</span><p data-r>A finalist for the Prix Galien USA Award for Best Startup in 2025 and again in 2026.</p></div>'+
    '<div><span class="lab kick" data-r>The EB community</span><p data-r>Paradigm supports DEBRA of America, DEBRA International and the EB Research Partnership.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From acquisition <em>to Phase 3.</em></h2></div><p data-r>Paradigm acquired the worldwide rights to SD-101 from Amicus Therapeutics in 2023. The latest from the programme and the company.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Families, clinicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Paradigm.</em></h2>'+
   '<p class="sub" data-r>For the company, write to Paradigm. For the SD-007 Phase 3 trial, its sites and eligibility, the study team will help; travel assistance is provided.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Paradigm '+ARR+'</a><a class="btn" href="'+TRIAL+'">Ask about the trial</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Paradigm Therapeutics, Inc.<br>465 West Coleman Blvd., Suite 202<br>Mt. Pleasant, SC 29464</p></div>'+
    '<div><span class="lab" data-r>Company contact</span><p data-r><a class="ul" href="'+MAIL+'">rryan@paradigmtherapeutics.com</a></p></div>'+
    '<div><span class="lab" data-r>Phase 3 trial</span><p data-r><a class="ul" href="'+TRIAL+'">cure@kapadi.com</a></p><a class="lab lk ul" data-r href="'+CT+'NCT07482787" target="_blank" rel="noopener">NCT07482787 '+ARR+'</a></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>465 West Coleman Blvd., Suite 202<br>Mt. Pleasant, SC 29464</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">rryan@paradigmtherapeutics.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/eb">What is EB</a><br><a class="ul" href="#/zorblesia">Zorblesia</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Programme</span>Zorblesia&#8482; (SD-101) for epidermolysis bullosa</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 980 70" aria-hidden="true"><text x="490" y="58" text-anchor="middle" style="font-family:\'Crimson Pro\',serif;font-weight:500;font-size:80px">Paradigm Therapeutics</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Paradigm Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",eb:"eb",story:"story",zorblesia:"zorblesia",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Paradigm Therapeutics — Zorblesia for epidermolysis bullosa",x:"Home"};
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
