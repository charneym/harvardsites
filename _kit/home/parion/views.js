/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
var PHS=["Preclinical","Phase 1","Phase 2","Phase 3"];
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[7]?' class="dim"':'')+'><span class="lab tg"><b'+(c[7]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span>'+
   '<span class="stg" aria-hidden="true"><span class="tr"><i class="p" style="width:'+(c[5]/4*100)+'%"></i><i style="width:'+(c[4]/4*100)+'%"></i></span><span class="ph">'+PHS.map(function(p){return '<span>'+p+'</span>'}).join("")+'</span></span></div>'+
   '<p>'+esc(c[6])+'</p><span class="lab lk">'+esc(c[8])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["ENaC blockers, built to inhale","Parion was founded on its proprietary epithelial sodium channel (ENaC) blockers. P-1037 was selected as a potent and durable ENaC blocker for inhaled delivery to patients with respiratory disease.",'<path d="M8 40h40"/><path d="M14 40V22a6 6 0 0112 0v18M30 40V22a6 6 0 0112 0v18"/><path class="a" d="M23 13h10l-5 6z"/>'],
  ["Paired with an osmolyte","The P-1037 experience showed why both matter: an osmolyte for clinical activity, and high protein binding for extra-renal excretion and safety. P-1155 carries both lessons forward.",'<path d="M28 8c8 11 13 18 13 25a13 13 0 01-26 0c0-7 5-14 13-25z"/><path class="a" d="M22 34a6 6 0 006 6"/>'],
  ["Epithelial biology, beyond the lung","Parion is leveraging its expertise in epithelial biology to expand into new mechanisms, indications and approaches, from mucolytics to P-321, a topical ENaC blocker for dry eye.",'<path d="M6 28c8-11 36-11 44 0-8 11-36 11-44 0z"/><circle class="a" cx="28" cy="28" r="6"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Clinical evidence</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From Parion’s releases of 8 September 2023 (CLEAN-PCD) and of July and November 2020 (designations).</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Muco-obstructive lung disease<span class="nomob"> · Idrevloride</span> · Durham, NC</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Hydrate the mucus.</span><span class="l"><em>Clear the lung.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Parion Sciences develops inhaled therapies that restore the lung’s innate mucosal defense. Its lead, idrevloride, blocks the epithelial sodium channel to put water back into thick mucus, and improved lung function in a Phase 2 study in primary ciliary dyskinesia.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">Our science '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">In muco-obstructive lung diseases, mucus becomes too concentrated to clear, and plugs can persist for years, with no therapy dedicated to clearing them. Parion’s answer is to <em>rehydrate the mucus.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">28</span><p class="k">Days of idrevloride in hypertonic saline to a significant lung-function gain in the Phase 2 CLEAN-PCD study</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">FDA designations for P-1037 in PCD: orphan drug, fast track and rare pediatric disease</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.3M</span><p class="k">In NHLBI SBIR awards since 2024 to take P-1155 toward IND status</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How idrevloride works</span><h2 class="d3">Put the water <em>back on the airway.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Plugged</span><span>Block</span><span>Clear</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Mucus too thick to clear.</h2><p>In muco-obstructive diseases such as PCD, cystic fibrosis and COPD, the airway surface holds too little water. The mucus becomes concentrated and sticky and settles into plugs. In PCD the cilia cannot sweep it out, so patients rely on cough.</p></article>'+
     '<article class="step"><h2>Block the sodium channel.</h2><p>Inhaled idrevloride blocks the epithelial sodium channel (ENaC) on the airway surface, stopping the absorption of water and stimulating fluid secretion. Given in hypertonic saline, an osmolyte, it draws still more water onto the surface.</p></article>'+
     '<article class="step"><h2>Hydrated mucus, cleared.</h2><p>Rehydrated, the mucus loosens and can be cleared by cough. In CLEAN-PCD, idrevloride in hypertonic saline improved lung function over 28 days compared with hypertonic saline alone.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">Restoring the airway’s <em>own defense.</em></h2></div><p data-r>A protective layer of mucus keeps the lung healthy. Through genetics, aging, disease or the environment, that defense can fail. Parion’s science-driven technologies target the respiratory diseases that follow.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From PCD <em>to COPD.</em></h2></div><p data-r>Idrevloride has completed Phase 2 in primary ciliary dyskinesia, with further studies planned. P-1155, a next-generation ENaC blocker, is moving toward IND status with NIH support.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people behind <em>idrevloride.</em></h2></div><p data-r>A Durham team with decades in respiratory drug development, co-founded by Richard C. Boucher, MD, director of the Marsico Lung Institute at UNC-Chapel Hill.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>Support and grant funding from the National Institutes of Health and the Cystic Fibrosis Foundation.</p></div>'+
    '<div><span class="lab kick" data-r>Partners</span><p data-r>Past collaborations with Vertex on ENaC inhibitors and with Shire on P-321; Parion holds the rights to both again.</p></div>'+
    '<div><span class="lab kick" data-r>Purpose</span><p data-r>“For patients, families and society” is Parion’s raison d’être, with patients first in turning science into treatments.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Results, designations <em>and awards.</em></h2></div><p data-r>The latest on idrevloride and P-1155 from Parion, the regulators and the NIH.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and the PCD community</span>'+
   '<h2 class="big split">Talk to <em>Parion.</em></h2>'+
   '<p class="sub" data-r>Whether you are a clinician, a patient group, an investor or a potential partner, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Parion '+ARR+'</a><a class="btn" href="tel:+19193131180">(919) 313-1180</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Parion Sciences, Inc.<br>2800 Meridian Parkway, Suite 195<br>Durham, NC 27713</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19193131180">(919) 313-1180</a></p></div>'+
    '<div><span class="lab" data-r>Collaboration</span><p data-r>Parion works with universities, therapeutic experts, patient groups and partners.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>2800 Meridian Parkway, Suite 195<br>Durham, NC 27713</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19193131180">(919) 313-1180</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead program</span>Idrevloride (P-1037) · Inhaled ENaC blocker for primary ciliary dyskinesia</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Spectral\',Georgia,serif;font-weight:400;font-size:52px;letter-spacing:.16em">PARION SCIENCES</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Parion Sciences</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",mechanism:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Parion Sciences — Inhaled ENaC blockers that restore the lung’s mucosal defense",x:"Home"};
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
