/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+esc(c[6])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Transcriptome drug discovery","Developed in Professor Hagiwara's laboratory at Kyoto University: an approach that identifies how a small molecule acts by reading the transcriptome, the collection of all RNAs a cell expresses at a given time, and that treats genetic disorders and cancer by intervening in it.",'<path d="M8 40c6-16 12-16 18 0s12 16 18 0"/><path d="M8 16c6 16 12 16 18 0s12-16 18 0"/><path class="a" d="M17 22v12M35 22v12"/><circle class="f" cx="26" cy="28" r="2.6"/>'],
  ["A new target for pain","BTB-101 is the world\'s first small molecule discovered through transcriptome analysis that inhibits the α2B adrenergic receptor. It acts in the spinal cord, where pain signals from the body are relayed to the brain.",'<circle cx="28" cy="28" r="18"/><path d="M28 10v36"/><path class="a" d="M19 20c4 4 4 12 0 16M37 20c-4 4-4 12 0 16"/><circle class="f" cx="28" cy="28" r="2.4"/>'],
  ["Splicing, corrected by mouth","Compared with nucleic acid medicines, small-molecule RNA splicing regulators are less costly to manufacture and can be taken orally for long periods. One compound can work across several genetic diseases, opening the door to preemptive medicine.",'<rect x="8" y="22" width="12" height="12"/><rect x="36" y="22" width="12" height="12"/><path class="a" d="M20 28c4-10 12-10 16 0"/><path d="M20 28h16" stroke-dasharray="2 3"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Non-opioid analgesia<span class="nomob"> · Escondido and Kyoto</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Stopping pain</span><span class="l">in the spinal cord,</span><span class="l"><em>without an opioid.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>BTB Therapeutics is developing BTB-101 (ENDOPIN), an oral non-opioid analgesic that blocks α2B adrenergic receptors in the spinal cord, to help resolve the opioid crisis. Its pipeline also corrects RNA splicing with small molecules, for rare genetic diseases and cancer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">Our science '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Strong pain relief still means opioids, and the dependence that comes with them. In preclinical studies BTB-101 gave an analgesic effect similar to opioids, <em>without side effects or dependence</em> in the therapeutic range.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2020</span><p class="k">Founded in Kyoto on the transcriptomics drug discovery programmes of Professor Masatoshi Hagiwara</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Phase II</span><p class="k">Part of an investigator-initiated trial of BTB-101, begun at Kyoto University Hospital in 2024</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><p class="k">Programmes, from post-surgical pain to RNA splicing in rare disease and cancer</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How BTB-101 is designed to work</span><h2 class="d3">Lift a brake, <em>quiet the pain.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Pain</span><span>Brake</span><span>Relief</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A pain signal climbs.</h2><p>After an injury, nociceptors fire. In the dorsal horn of the spinal cord their signal crosses a synapse onto the neurons of the pain pathway, which carry it up to the brain.</p></article>'+
     '<article class="step"><h2>The body\'s own brake.</h2><p>Nerve fibres descending from the brain release noradrenaline onto that synapse, the body\'s own analgesia. But α2B receptors on the same terminals sense it and hold further release back, by negative feedback.</p></article>'+
     '<article class="step"><h2>BTB-101 lifts it.</h2><p>Taken by mouth, BTB-101 blocks the α2B receptors. More noradrenaline is released, it acts on α2A receptors along the pain pathway, and the signal to the brain is damped: analgesia without an opioid.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Drugs found by <em>reading RNA.</em></h2></div><p data-r>BTB Therapeutics was founded in 2020 in Kyoto on the transcriptomics drug discovery programmes of Professor Masatoshi Hagiwara of Kyoto University. The same platform produced a non-opioid analgesic with a new mechanism and small molecules that modify RNA.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Five programmes, <em>one platform.</em></h2></div><p data-r>A nonopioid analgesic programme led by BTB-101, in the clinic for post-surgical pain, and an RNA regulatory programme for cardiac Fabry disease, long QT syndrome and cancer immunotherapy. Stages as shown on the company\'s pipeline chart.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded in Kyoto, <em>built in California.</em></h2></div><p data-r>BTB completed its US corporate inversion in January 2025: BTB Therapeutics, Inc. is now based in Escondido, California, with its operating subsidiary in Kyoto, Japan. It is led by a founder of MediciNova, with the Kyoto University scientist behind its platform.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Origin</span><p data-r>The Department of Drug Discovery Medicine at Kyoto University Graduate School of Medicine, chaired by co-founder Masatoshi Hagiwara.</p></div>'+
    '<div><span class="lab kick" data-r>Support</span><p data-r>Selected in 2023 for AMED\'s Drug Discovery Venture Ecosystem Enhancement Project, to begin full-scale development in the United States.</p></div>'+
    '<div><span class="lab kick" data-r>Investors</span><p data-r>SMBC Venture Capital; Innovation Kyoto 2021 Investment LP with Kyoto iCAP; and the Kyogin Shining Future Support Fund III.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From Kyoto <em>to the clinic.</em></h2></div><p data-r>Publications, people and milestones from BTB Therapeutics.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>BTB Therapeutics.</em></h2>'+
   '<p class="sub" data-r>Whether you would like to partner on BTB-101 or our RNA programmes, invest in the company or join the team, we would like to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email BTB Therapeutics '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>BTB Therapeutics, Inc.<br>Escondido, California</p></div>'+
    '<div><span class="lab" data-r>Operating subsidiary</span><p data-r>BTB Therapeutics GK<br>Kyoto, Japan</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Escondido, California<br>Kyoto, Japan</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Mission</span>A non-opioid analgesic to help resolve the opioid crisis, and RNA medicines for rare disease and cancer.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 44" aria-hidden="true"><text x="320" y="36" text-anchor="middle" style="font-family:\'Source Sans 3\',Arial,sans-serif;font-weight:600;font-size:46px;letter-spacing:-.01em">BTB Therapeutics</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 BTB Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",how:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"BTB Therapeutics — a non-opioid analgesic and RNA-targeted small molecules",x:"Home"};
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
