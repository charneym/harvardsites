/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Antagonist at the breast","Lasofoxifene is an investigational, nonsteroidal selective estrogen receptor modulator (SERM). It has shown robust target engagement as an antagonist at the breast, blocking the receptor that drives ER+ breast cancer.",'<circle cx="28" cy="28" r="19"/><path class="a" d="M14.5 41.5l27-27"/><circle class="f" cx="28" cy="28" r="3.2"/>'],
  ["Built for ESR1 mutations","Mutations of the estrogen receptor gene ESR1 are a significant cause of resistance to aromatase inhibitors. Lasofoxifene stays active against the receptor in their presence, the setting of every ELAINE study.",'<path d="M16 8c0 10 24 14 24 20S16 38 16 48"/><path d="M40 8c0 10-24 14-24 20s24 10 24 20"/><circle class="f" cx="28" cy="28" r="3.6"/><path class="a" d="M21 18h14M21 38h14"/>'],
  ["Tissue selective","Unlike other endocrine therapies, lasofoxifene showed beneficial effects on vagina and bone in earlier clinical studies. In ELAINE-1 it improved vaginal and vulvar symptoms where fulvestrant did not.",'<path d="M28 8v40"/><path d="M12 18h32M12 38h32"/><circle class="f" cx="28" cy="18" r="3"/><circle cx="28" cy="38" r="3"/><path class="a" d="M8 28h40"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Licensed to LeonaBio · December 2025</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>LeonaBio (Nasdaq: LONA, formerly Athira Pharma) acquired the rights to develop and commercialise lasofoxifene from Sermonix Pharmaceuticals; release of 18 December 2025.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Women’s oncology<span class="nomob"> · Phase 3</span> · Columbus, Ohio</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A new answer</span><span class="l">to resistant</span><span class="l"><em>breast cancer.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Sermonix Pharmaceuticals develops lasofoxifene, an investigational oral SERM that blocks the estrogen receptor in the breast, including when ESR1 mutations have made the cancer resistant to aromatase inhibitors. It is now in the Phase 3 <span class="nw">ELAINE-3</span> study.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How it works '+ARR+'</a><a class="btn" href="#/pipeline">The ELAINE studies</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Most women with ER+ metastatic breast cancer receive endocrine therapy, but eventually all become resistant, and mutations of the estrogen receptor are a significant cause. Sermonix is developing a therapy for that moment, <em>with quality of life in mind.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">70%</span><p class="k">Of breast cancers are estrogen receptor-positive and need some form of antiestrogen treatment</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">13 mo</span><p class="k">Of progression-free survival with lasofoxifene and abemaciclib in heavily pretreated patients in ELAINE-2</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2027</span><p class="k">Pivotal ELAINE-3 data expected mid-year; the Phase 3 study was more than half enrolled by December 2025</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How lasofoxifene works</span><h2 class="d3">Switch the receptor off, <em>even when it mutates.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Estrogen</span><span>Mutation</span><span>Lasofoxifene</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Estrogen drives the cancer.</h2><p>In ER+ breast cancer, estrogen binds the estrogen receptor, which closes over it, recruits its partners and switches on the genes that make the tumour grow. Aromatase inhibitors starve it of estrogen.</p></article>'+
     '<article class="step"><h2>The receptor learns to resist.</h2><p>Under that pressure, mutations arise in the receptor gene ESR1. The mutated receptor stays switched on without estrogen, and the disease progresses: a significant cause of resistance to hormonal therapy.</p></article>'+
     '<article class="step"><h2>Lasofoxifene holds it off.</h2><p>Lasofoxifene binds the receptor’s pocket and acts as an antagonist at the breast, particularly in the presence of ESR1 mutations, holding the receptor in its inactive shape so the growth genes stay quiet.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">One molecule, <em>three advantages.</em></h2></div><p data-r>Sermonix’s lead candidate is oral lasofoxifene, an investigational endocrine therapy with a precision-medicine focus: patients with ER+/HER2- breast cancer who have developed an ESR1 mutation.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">The ELAINE studies, <em>to Phase 3.</em></h2></div><p data-r>From a signal-seeking Phase 2 against fulvestrant to a pivotal combination study with abemaciclib, every ELAINE study enrols people whose breast cancer carries an ESR1 mutation.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Women’s health experts, <em>since 2014.</em></h2></div><p data-r>Founded in late 2014 by David Portman, MD, Sermonix is a privately held Ohio company whose management has experience in every stage of drug development, regulation and commercialisation.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Origins</span><p data-r>Lasofoxifene’s activity in ESR1 mutations was discovered in the laboratory of Donald McDonnell, MD, at Duke University. Sermonix holds the exclusive rights to develop it in this area.</p></div>'+
    '<div><span class="lab kick" data-r>Structure</span><p data-r>Clinical scientists at the University of Chicago use crystallography to understand lasofoxifene’s mechanism of action at the estrogen receptor.</p></div>'+
    '<div><span class="lab kick" data-r>Discovery</span><p data-r>A strategic collaboration with Regor Therapeutics, 2025, applies its rCARD platform to new targets and therapies in breast oncology.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From Phase 2 <em>to a Phase 3 partner.</em></h2></div><p data-r>The latest releases from Sermonix Pharmaceuticals and its licensee.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering, trials and enquiries</span>'+
   '<h2 class="big split">Talk to <em>Sermonix.</em></h2>'+
   '<p class="sub" data-r>For partnering and collaboration, clinical trials, investor relations or general information, the team would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Sermonix '+ARR+'</a><a class="btn" href="#/pipeline">See the ELAINE studies</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Sermonix Pharmaceuticals<br>250 East Broad Street, Suite 250<br>Columbus, Ohio 43215</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+16148644919">614-864-4919</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>250 East Broad Street, Suite 250<br>Columbus, Ohio 43215</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead candidate</span>Lasofoxifene<br>Investigational oral SERM</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="50" text-anchor="middle" style="font-family:\'Comfortaa\',Arial,sans-serif;font-weight:500;font-size:62px;letter-spacing:.01em">Sermonix</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Sermonix Pharmaceuticals</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",approach:"story",science:"science",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Sermonix Pharmaceuticals — Lasofoxifene for ESR1-mutated breast cancer, Columbus, Ohio",x:"Home"};
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
