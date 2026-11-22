/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
var PHS=["Pre-clinical","Phase 1","Phase 2","Phase 3"];
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[7]?' class="dim"':'')+'><span class="lab tg"><b'+(c[7]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span>'+
   (c[7]?'':'<span class="stg" aria-hidden="true"><span class="tr"><i class="p" style="width:'+(c[5]/4*100)+'%"></i><i style="width:'+(c[4]/4*100)+'%"></i></span><span class="ph">'+PHS.map(function(p){return '<span>'+p+'</span>'}).join("")+'</span></span>')+'</div>'+
   '<p>'+esc(c[6])+'</p><span class="lab lk">'+(c[7]?'Partnering':(c[4]>=2?'Phase 2':(c[6].indexOf('oral')>0?'Research':'Discovery')))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["From the brain’s own peptides","Endomorphins are produced naturally by the human brain and are not structurally related to the classical opioids. CYT-1010 is an analog of endomorphin-1 and cannot be chemically converted to known drugs of abuse.",'<circle class="f" cx="10" cy="30" r="5"/><circle cx="23" cy="24" r="5"/><circle class="f" cx="36" cy="30" r="5"/><circle cx="49" cy="24" r="5"/><path d="M15 28l3-2M28 26l3 2M41 28l3-2"/>'],
  ["A different receptor","Morphine and the marketed opioids activate the full-length mu receptor (Exon 1). CYT-1010 preferentially activates the EM receptor (Exon 11), associated with powerful pain relief and a greater margin of safety.",'<path d="M6 20h44M6 36h44"/><rect x="14" y="14" width="5" height="28"/><rect x="22" y="14" width="5" height="28"/><rect class="a" x="34" y="14" width="5" height="28"/><rect class="a" x="42" y="14" width="5" height="28"/>'],
  ["Anti-inflammatory as well","In non-clinical studies CYT-1010 showed anti-inflammatory activity similar to high-dose corticosteroids, whereas opioids can be pro-inflammatory and extend the duration of pain.",'<path d="M28 48c-10 0-16-7-16-15 0-10 10-16 16-27 6 11 16 17 16 27 0 8-6 15-16 15z"/><path class="a" d="M18 40L38 20"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function backers(){return '<div class="bk light-bk"><span class="lab kick" data-r>Protected by</span><p class="cr" data-r><span>30+ issued patents</span><i>·</i><span>CYT-1010® US trademark</span><i>·</i><span>CRADA with the U.S. Army Institute of Surgical Research</span></p></div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Pre-clinical<br>evidence</span><div><dl>'+
  [["Potency","CYT-1010 gave 3–4 times more potent pain relief than morphine in pre-clinical studies"],
   ["Breathing","Profoundly reduced respiratory depression, the side effect behind many postoperative respiratory failures"],
   ["Abuse potential","Substantially reduced abuse potential, with little to no addiction potential at therapeutic doses"],
   ["Recovery","In breakthrough research, endomorphins cut recovery time from pain after surgery by over 75% compared to morphine"]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Cytogel Pharma (CYT-1010, Therapeutic Areas and Home pages). CYT-1010 is an investigational new drug and has not been approved by the FDA or any regulatory body.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage biopharma<span class="nomob"> · CYT-1010®</span> · Darien, Connecticut</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A new class of pain</span><span class="l">medicine, from the body’s</span><span class="l"><em>own endomorphins.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Cytogel Pharma is developing CYT-1010, the first member of the endomorphin class to reach clinical development. It is now in Phase 2 for moderate to severe pain after surgery.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/mechanism">The mechanism '+ARR+'</a><a class="btn" href="#/pipeline">Pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">Cytogel is dedicated to developing and bringing to market innovative treatments that effectively resolve pain, <em>with substantially reduced side effects.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">53M</span><p class="k">Surgeries a year in the US that need drugs for post-operative pain</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3–4×</span><p class="k">More potent pain relief than morphine for CYT-1010 in pre-clinical studies</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+</span><p class="k">Issued patents protecting Cytogel’s endomorphin science</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How CYT-1010 works</span><h2 class="d3">Pain relief <em>by another route.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Pain</span><span>Opioids</span><span>CYT-1010</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Pain signals rise.</h2><p>Surgery or injury sends pain signals along the nerves. On the nerve cells sit two forms of the mu receptor: the full-length receptor (Exon 1) and the six-transmembrane EM receptor (Exon 11).</p></article>'+
     '<article class="step"><h2>Opioids pull one lever.</h2><p>Morphine and the marketed opioids activate only the full-length receptor. Pain eases, but that receptor is associated with reward, withdrawal, respiratory depression and slowed GI transit.</p></article>'+
     '<article class="step"><h2>CYT-1010 takes the other.</h2><p>CYT-1010, an analog of the natural peptide endomorphin-1, preferentially activates the EM receptor, associated with powerful pain relief without the reward that can lead to addiction.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="mechanism" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Mechanism</span><h2 class="d2 split">A novel mechanism, <em>a new class of drug.</em></h2></div><p data-r>CYT-1010 is the first endomorphin to enter human clinical development. Its structure, its receptor and its effect on inflammation all set it apart from the existing opioids.</p></div>'+
   caps()+
   backers()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">CYT-1010 in Phase\u00a02, <em>more endomorphins behind it.</em></h2></div><p data-r>After a successful Phase 1 study in humans, CYT-1010 is in Phase 2 for acute postoperative pain, with results expected in the first quarter of 2027.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built to take CYT-1010 <em>through the clinic.</em></h2></div><p data-r>A focused leadership team, supported by directors and advisors from medicine, science, public policy, behavioral health and patient advocacy.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Directors and advisors</span><p data-r>Members include Jerry Leamon, Michael Ullmann and Fred Telling, PhD, with advisors the Hon. Chris Christie and the Hon. Patrick J. Kennedy.</p></div>'+
    '<div><span class="lab kick" data-r>Financing</span><p data-r>In April 2026 Cytogel completed the initial closing of a financing round that funds the Phase 2 study, and continues to raise for further clinical work.</p></div>'+
    '<div><span class="lab kick" data-r>Two sites</span><p data-r>Headquartered in Darien, Connecticut, with Cytogel’s research and development office in Troy, New York.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From Phase 1 <em>to Phase 2.</em></h2></div><p data-r>The latest from Cytogel: financing, the start of Phase 2, and the science behind the endomorphins.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, scientists and partners</span>'+
   '<h2 class="big split">Talk to <em>Cytogel.</em></h2>'+
   '<p class="sub" data-r>For investment, licensing, collaboration or corporate partnership, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Cytogel '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>3 Thorndal Circle<br>Darien, Connecticut 06820</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+12036626617">203-662-6617</a></p></div>'+
    '<div><span class="lab" data-r>Clinical stage</span><p data-r>CYT-1010 in Phase 2 for acute postoperative pain.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>3 Thorndal Circle<br>Darien, Connecticut 06820</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+12036626617">203-662-6617</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/mechanism">Mechanism</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead candidate</span>CYT-1010® · First-in-class endomorphin</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="60" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:600;font-size:64px">Cytogel Pharma</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Cytogel Pharma, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",mechanism:"mechanism",story:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Cytogel Pharma — endomorphin-based pain therapeutics",x:"Home"};
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
