/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Selective, not total","Previous CB1 antagonists blocked the entire activity of the receptor, with adverse effects that made them unusable in most patients. CB1-SSi inhibit only the subset of cellular activity involved in its pathological hyperactivity, leaving the rest undisturbed.",'<path d="M28 8v40"/><path class="a" d="M28 18l14 10M28 18L14 28"/><circle class="f" cx="42" cy="28" r="3"/><circle cx="14" cy="28" r="3"/><path d="M14 31v13M42 31v13"/>'],
  ["Modelled on the brain’s own defence","CB1-SSi are new molecular entities that mimic a natural defence mechanism the brain developed against a hyperactive CB1 receptor (Science, 2014), while being well absorbed, stable and not transformed into steroids.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M28 16v24M16 28h24"/><circle class="f" cx="28" cy="28" r="3.4"/>'],
  ["One target, many brain diseases","CB1 is the principal receptor of the endocannabinoid system and one of the brain’s main neurotransmitter receptors. When dysregulated it is involved in several disease states, which gives the platform a wide, diversified pipeline.",'<path d="M10 44h36"/><path d="M14 44V30M24 44V22M34 44V26M44 44V14" class="a"/><circle class="f" cx="44" cy="12" r="3"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From aelisfarma.com and Aelis Farma press releases. Clinical development of AEF0217 is supported by the EU Horizon 2020 programme (ICOD, grant 899986); that of AEF0117 by grants from NIDA-NIH.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>CB1-SSi<span class="nomob"> · Signaling specific inhibitors of the CB1 receptor</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Opening a new</span><span class="l">frontier in</span><span class="l"><em>pharmacology.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Aelis Farma develops a new pharmacological class, the signaling specific inhibitors of the CB1 receptor, to treat disease states of the brain while preserving normal behaviour.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">To combine the scientific breakthrough of CB1-SSi with innovative drug development, <em>to provide new effective and safe treatments for brain diseases with unmet medical needs.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Clinical drug candidates developed from our own platform</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">188</span><p class="k">Participants with Down syndrome in the Phase 2B trial of AEF0217</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">333</span><p class="k">Patients randomised in the US Phase 2B study of AEF0117</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Inhibit the excess, <em>keep the function.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Hyperactive</span><span>Blocked</span><span>Selective</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A hyperactive CB1 receptor.</h2><p>CB1 regulates many functions of the brain. When it becomes overactive, for example through excessive cannabis use, one part of its signalling drives disease.</p></article>'+
     '<article class="step"><h2>Old antagonists blocked it all.</h2><p>The previous generation of CB1 antagonists stopped agonists reaching the receptor, shutting down its entire activity, and with it normal functions.</p></article>'+
     '<article class="step"><h2>CB1-SSi inhibit only the excess.</h2><p>Our signaling specific inhibitors selectively inhibit the activity behind the pathological hyperactivity, leaving the receptor’s other activities undisturbed.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">A new <em>pharmacological class.</em></h2></div><p data-r>The signaling specific inhibitors of the cannabinoid type 1 receptor are proprietary small molecules that appear able to treat brain diseases without side effects on normal behaviour. No behavioural side effects have been identified to date.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Two clinical candidates, <em>one platform.</em></h2></div><p data-r>AEF0217 for the cognitive impairments of Down syndrome, AEF0117 for cannabis-related disorders, and new CB1-SSi from the same platform for other cannabinoid-dependent diseases.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people behind <em>CB1-SSi.</em></h2></div><p data-r>A management team, board and scientific advisory board with one goal: to transform innovation into reliable therapeutic solutions for diseases with unmet medical needs.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Aelis Farma.</em></h2></div><p data-r>Clinical, regulatory and scientific milestones from our programmes.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Get in <em>touch.</em></h2>'+
   '<p class="sub" data-r>For partnering, investor or scientific enquiries, write to us at our Bordeaux headquarters. Aelis Farma is listed on Euronext Growth Paris (ticker AELIS).</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Aelis Farma '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>1 rue Lafaurie de Monbadon<br>33000 Bordeaux, France</p></div>'+
    '<div><span class="lab" data-r>Laboratory</span><p data-r>IECB, 2 rue Robert Escarpit<br>33607 Pessac, France</p></div>'+
    '<div><span class="lab" data-r>Email · Phone</span><p data-r><a class="ul" href="'+MAIL+'">contact@aelisfarma.com</a><br><a class="ul" href="tel:+33554542327">+33 5 54 54 23 27</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Bordeaux, France</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">contact@aelisfarma.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Follow</span><a class="ul" href="https://fr.linkedin.com/company/aelis-farma" target="_blank" rel="noopener">LinkedIn</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Montserrat\',sans-serif;font-weight:400;font-size:64px">AELIS FARMA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Aelis Farma</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",science:"science",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Aelis Farma — opening a new frontier in pharmacology",x:"Home"};
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
