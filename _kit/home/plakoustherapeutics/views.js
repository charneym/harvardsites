/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[7]?' class="dim"':'')+'><span class="lab tg"><b'+(c[7]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span>'+
   '<span class="stg" aria-hidden="true"><span class="tr"><i class="p" style="width:'+(c[5]/4*100)+'%"></i><i style="width:'+(c[4]/4*100)+'%"></i></span><span class="ph">'+PHS.map(function(p){return '<span>'+p+'</span>'}).join("")+'</span></span></div>'+
   '<p>'+esc(c[6])+'</p><span class="lab lk">'+(c[7]?'Future':'Active')+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["From donated birth tissue","HPE is made from donated full-term placental tissue, the organ that supports a baby’s development in utero. Nothing new is invented: the extract carries what nature already uses to build a healthy gut.",'<path d="M28 9c11 0 19 7 19 16s-8 15-19 15S9 34 9 25 17 9 28 9z"/><path class="a" d="M28 40c0 6-3 10-8 13"/><path d="M20 22c4 2 6 5 8 9M36 20c-3 3-5 7-8 11"/>'],
  ["Over 950 factors, preserved","Plakous’ own processing collects and preserves more than 950 proliferative, developmental and anti-inflammatory proteins and chemokines, in high-yield, consistent concentrations.",'<circle cx="16" cy="18" r="4"/><circle class="a" cx="32" cy="14" r="3"/><circle cx="42" cy="28" r="5"/><circle class="a" cx="22" cy="34" r="3.5"/><circle cx="34" cy="42" r="4"/><circle cx="12" cy="44" r="2.5"/>'],
  ["Calm, then repair","The factors work together to inhibit inflammation directly and prevent the over-activation of immune cells, while driving the maturation and repair of organs damaged by inflammation.",'<path d="M8 40c6-10 12-10 18 0s12 10 18 0"/><path class="a" d="M12 22h32M12 14h22"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Value of HPE</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Preclinical results, from plakoustherapeutics.com (data on file; McKinney-Aguirre et al., Cell Mol Gastroenterol Hepatol 20(1):101619). These statements have not been evaluated by the Food and Drug Administration.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Human placental extract<span class="nomob"> · Protego-PD™ · Winston-Salem, NC</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A head start</span><span class="l">for the</span><span class="l"><em>premature gut.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Plakous Therapeutics is developing human placental extract (HPE), an orally delivered, cell-free biotherapeutic from donated placentas, to prevent necrotizing enterocolitis in premature babies by accelerating the maturation of their intestine.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">Our science '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Necrotizing enterocolitis strikes the smallest babies, when runaway inflammation meets an intestine not yet ready for the world. There is no approved treatment or diagnostic test. Plakous aims to <em>prevent it.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">90%</span><p class="k">Of the 3,000 NEC cases a year in the US occur in babies born before 30 weeks</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30%</span><p class="k">Mortality rate of NEC, which consumes an estimated $4 billion in NICU and hospital costs</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">950+</span><p class="k">Proteins and chemokines preserved in HPE from donated full-term placental tissue</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How HPE works</span><h2 class="d3">Mature the gut, <em>calm the fire.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Immature</span><span>Dose</span><span>Calm</span><span>Mature</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>An intestine born too soon.</h2><p>In a baby born very early, the gut lining is still immature: short villi, a weak barrier and an immune response that can run away. That inflammation is what drives necrotizing enterocolitis.</p></article>'+
     '<article class="step"><h2>HPE, given by mouth.</h2><p>Human placental extract is an orally delivered, cell-free biotherapeutic made from donated full-term placentas. It brings the gut the growth and maturation factors it would have received in utero.</p></article>'+
     '<article class="step"><h2>Inflammation held back.</h2><p>Working together, its growth factors inhibit inflammation directly and keep immune cells from over-activating, so a damaging inflammatory microenvironment does not take hold.</p></article>'+
     '<article class="step"><h2>A gut that grows up faster.</h2><p>HPE accelerates intestinal maturation. In preclinical models it reduced NEC severity and the number of gut segments affected, and improved weight gain in extreme prematurity.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">Regenerative medicine <em>from birth tissue.</em></h2></div><p data-r>HPE is a biologic with anti-inflammatory and cellular proliferation capabilities that work together to orchestrate a complex cellular response, restoring and repairing organs damaged by inflammation-driven disease.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From infancy <em>to old age.</em></h2></div><p data-r>Our first clinical target is preventing NEC, with Protego-PD™ in IND-enabling studies. Beyond prematurity, HPE’s anti-inflammatory and regenerative activity points to lung, brain and joint disease.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Birth tissue experts, <em>building a biotherapeutic.</em></h2></div><p data-r>A Winston-Salem team that joins decades of obstetric and neonatal experience with biomedical engineering, tissue processing and life-sciences leadership.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NIH SBIR awards from the Eunice Kennedy Shriver National Institute of Child Health and Human Development, including a Phase IIB grant of up to $2.9 million, and NCBiotech funding.</p></div>'+
    '<div><span class="lab kick" data-r>Designations</span><p data-r>FDA orphan drug and rare pediatric disease designations for Protego-PD™ in the prevention of necrotizing enterocolitis.</p></div>'+
    '<div><span class="lab kick" data-r>Collaboration</span><p data-r>A multi-year know-how license agreement with Mayo Clinic, and an R&amp;D laboratory in Winston-Salem, North Carolina.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, papers <em>and milestones.</em></h2></div><p data-r>Press releases and publications from Plakous Therapeutics, and its NIH award record.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Neonatologists, investors and partners</span>'+
   '<h2 class="big split">Talk to <em>Plakous.</em></h2>'+
   '<p class="sub" data-r>Our team can answer your questions about HPE, Protego-PD™ and our programmes, and about partnering or investing as we move toward the clinic.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Plakous '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Plakous Therapeutics, Inc.<br>755 Highland Oaks Drive, Suite 103<br>Winston-Salem, NC 27103</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19086253295">908-625-3295</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="https://www.linkedin.com/company/plakous-therapeutics/" target="_blank" rel="noopener">LinkedIn ↗</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>755 Highland Oaks Drive, Suite 103<br>Winston-Salem, NC 27103</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19086253295">908-625-3295</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead programme</span>Protego-PD™ · human placental extract for the prevention of NEC</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Figtree\',Arial,sans-serif;font-weight:400;font-size:54px;letter-spacing:.16em">PLAKOUS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Plakous Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",mechanism:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Plakous Therapeutics — human placental extract to protect premature babies from NEC",x:"Home"};
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
