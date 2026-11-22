/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
var PHS=["Cells","Animal","Device","Human"];
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[7]?' class="dim"':'')+'><span class="lab tg"><b'+(c[7]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span>'+
   '<span class="stg" aria-hidden="true"><span class="tr"><i class="p" style="width:'+(c[5]/4*100)+'%"></i><i style="width:'+(c[4]/4*100)+'%"></i></span><span class="ph">'+PHS.map(function(p){return '<span>'+p+'</span>'}).join("")+'</span></span></div>'+
   '<p>'+esc(c[6])+'</p><span class="lab lk">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Delivered at the margin","Cold plasma is an ionized, non-thermal gas that generates reactive species. The CPJ delivers them directly to the surgical margin in the tumour bed, during surgery, where residual cancer cells drive recurrence.",'<path d="M8 40c6-10 14-14 20-14s14 4 20 14"/><path class="a" d="M28 6v14"/><path class="a" d="M23 26l5-6 5 6"/><circle class="f" cx="20" cy="36" r="2.6"/><circle class="f" cx="34" cy="34" r="2.6"/>'],
  ["The right species, by design","NexPlasmaGen’s patented device can selectively produce and deliver the plasma species most relevant to a given type of cancer, to induce the oxidative stress that leads to cancer cell death.",'<circle cx="28" cy="28" r="18"/><circle class="f" cx="22" cy="22" r="3"/><circle cx="35" cy="24" r="3"/><circle class="f" cx="31" cy="35" r="3"/><circle cx="20" cy="34" r="3"/><path class="a" d="M10 28h-6M52 28h-6"/>'],
  ["Reproducible, and handheld","A controlled plasma environment that does not alter plasma properties at the treatment site, for a reproducible therapeutic effect, from a compact, portable unit with a handheld applicator.",'<rect x="23" y="6" width="10" height="30"/><rect class="f" x="21.5" y="16" width="13" height="6"/><path d="M23 36l5 6 5-6"/><path class="a" d="M28 42v8"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Peer-reviewed</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+(e[2]?'<a class="ul" href="'+e[2]+'" target="_blank" rel="noopener">'+esc(e[1])+'</a>':esc(e[1]))+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Ten peer-reviewed papers with the CPJ technology and its earlier versions. Patents: US 7,608,839 and WO2021/022371 A1.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Cold plasma<span class="nomob"> · Breast-conserving surgery</span> · Montréal</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Because patients</span><span class="l">with cancer</span><span class="l"><em>deserve better.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>NexPlasmaGen is developing the Convertible Plasma Jet, a handheld cold plasma device that lets a surgeon kill the cancer cells left in the tumour bed after the tumour is removed. Our first target: breast-conserving surgery.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/progress">Our progress</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Every year over a million women worldwide undergo breast-conserving surgery instead of a mastectomy. Yet up to 15% see their cancer return within ten years, often from cancer cells left at the margin, and a mastectomy follows. We want surgeons to <em>leave none behind.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">15%</span><p class="k">Locoregional recurrence within 10 years of breast-conserving therapy</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10</span><p class="k">Peer-reviewed papers with the CPJ technology and its earlier versions</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">27</span><p class="k">Conferences, and two patents, granted and pending</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the CPJ works</span><h2 class="d3">Surgery, augmented <em>by cold plasma.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Remove</span><span>Treat</span><span>Clear</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The tumour is removed.</h2><p>In a lumpectomy the surgeon removes the tumour and keeps the breast. But cancer cells can remain at the margin of the tumour bed, and they are responsible for high rates of locoregional recurrence.</p></article>'+
     '<article class="step"><h2>The margin is treated.</h2><p>Still in the operating room, the surgeon sweeps the CPJ’s handheld applicator over the tumour bed. Its cold plasma jet delivers reactive species directly to the surgical margin.</p></article>'+
     '<article class="step"><h2>Residual cells are killed.</h2><p>The reactive species induce oxidative stress, the same route most anti-cancer therapies use, killing the remaining cancer cells right in the tumour bed, without the damage to surrounding organs that traditional therapies can cause.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The Convertible <em>Plasma Jet.</em></h2></div><p data-r>The CPJ produces an extremely reactive ionized gas, a plasma, to kill cancer cells in the tumour bed after the tumour is removed. It was developed with academic and health care partners over many years, and is first used for breast cancer.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="progress" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Progress</span><h2 class="d2 split">From cell lines <em>to the clinic.</em></h2></div><p data-r>The CPJ has completed a preclinical programme in vitro and in vivo. We are now building a pre-production applicator and preparing the first trials in humans.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineers, oncologists <em>and surgeons.</em></h2></div><p data-r>A Montréal team in plasma engineering and breast cancer research, guided by clinicians from the CHUM, the University of Toronto and Princess Margaret Cancer Centre, and by medtech veterans.</p></div>'+
   team()+
   '<div class="bk light-bk"><span class="lab kick" data-r>Partners</span><p class="cr" data-r><span>NRC IRAP</span><span>CR-CHUM</span><span>McGill University</span><span>Université de Montréal</span><span>MEDTEQ</span><span>Mitacs</span><span>Gouvernement du Québec</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Pitches, prizes <em>and press.</em></h2></div><p data-r>The latest from NexPlasmaGen, from the women’s health and medtech stages of 2026 to our NRC IRAP-supported development work.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, investors and partners</span>'+
   '<h2 class="big split">Talk to <em>NexPlasmaGen.</em></h2>'+
   '<p class="sub" data-r>Whether you are a breast surgeon, an oncologist, an investor or a clinical partner for our first-in-human trials, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#/technology">See the technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Our office</span><p data-r>NexPlasmaGen<br>3801 Wilson Avenue<br>Montréal, QC, Canada</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+15142299458">514-229-9458</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>3801 Wilson Avenue<br>Montréal, QC, Canada</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/progress">Progress</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">First target</span>Breast-conserving surgery · Convertible Plasma Jet</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="72" text-anchor="middle" style="font-family:\'Questrial\',Arial,sans-serif;font-weight:400;font-size:96px;letter-spacing:-.01em"><tspan class="w1">nex</tspan><tspan class="w2">plasma</tspan><tspan class="w1">gen</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 NexPlasmaGen Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story",progress:"progress",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"NexPlasmaGen — cold plasma for breast-conserving cancer surgery",x:"Home"};
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
