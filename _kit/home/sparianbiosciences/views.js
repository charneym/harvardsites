/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["A newly discovered receptor","The arylepoxamide receptors (AEAr) are a novel class of receptors, widely distributed throughout the brain and spinal cord, that are believed to modulate pain signalling and pain perception. Dr. Ying-Xian Pan led the research on their molecular biology in the Pasternak Lab at MSK.",'<circle cx="28" cy="28" r="17"/><path class="a" d="M28 11v10M28 35v10M11 28h10M35 28h10"/><circle class="f" cx="28" cy="28" r="3.4"/>'],
  ["First-in-class arylepoxamides","SBS-1000 and SBS-147 bind and activate the AEAr. In preclinical studies they show potent analgesia for acute and chronic pain, in nociceptive and neuropathic models.",'<path d="M10 40l9-16 9 6 9-16 9 8"/><circle class="f" cx="19" cy="24" r="2.6"/><circle class="f" cx="37" cy="14" r="2.6"/><path class="a" d="M8 46h40"/>'],
  ["Without the opioid burden","A clean preclinical safety profile lacking respiratory depression, physical dependence and reward behaviour. In the SBS-1000 Phase 1, respiratory parameters stayed within normal range at all doses, with no sign of mu opioid receptor activation.",'<path d="M8 30c5 0 6-8 10-8s5 16 10 16 5-16 10-16 5 8 10 8"/><path class="a" d="M8 44h40"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Origins</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From sparianbiosciences.com. The SBS-147 study is supported by NIDA HEAL Initiative award 1UG3DA064392-01.</p></div></div>'}
var EVID=[
 ["Memorial Sloan Kettering","Spun out of MSK, from the Pasternak Lab; SBS-1000 and SBS-226 were developed there by Dr. Susruta Majumdar"],
 ["Academic partners","Compounds from the Majumdar Lab (UHSP / Washington University), Rutgers University Medical School, the USC Michelson Center for Convergent Bioscience and the University of Florida"],
 ["In the clinic","SBS-1000 completed a Phase 1 single ascending dose study in 2024; the oral SBS-147 entered a Phase 1 SAD/MAD study in April 2026"],
 ["NIH / NIDA HEAL","Five NIH/NIDA grants worth nearly $75 million, and a research collaboration with the U.S. Army Institute of Surgical Research"]];
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage CNS biopharma<span class="nomob"> · Pain and addiction</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">New medicines</span><span class="l">for pain, <em>beyond</em></span><span class="l"><em>the opioid.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Sparian Biosciences develops first-in-class therapies for the central nervous system: a new receptor target for acute and chronic pain, and new approaches to opioid and stimulant use disorders.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our story</span>'+
   '<h2 class="txt" id="mani">As neurologists and neuroscientists, our co-founders set out to build a CNS company with truly innovative compounds. <em>Our initial focus is pain and substance use disorders.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><p class="k">Programs, in acute and chronic pain, opioid use disorder and withdrawal, opioid overdose and stimulant use disorder</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~$75M</span><p class="k">In NIH/NIDA grants, across five awards</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">AEAr agonists in Phase 1: SBS-1000 and the oral SBS-147</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">A new receptor <em>for pain.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Signal</span><span>Activate</span><span>Spare</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Pain rises to the brain.</h2><p>Pain signals travel up the spinal cord to the brain. Opioids relieve pain, but they bring respiratory depression, dependence and abuse liability.</p></article>'+
     '<article class="step"><h2>Arylepoxamides activate the AEAr.</h2><p>The AEAr is a novel class of receptor found throughout the brain and spinal cord, believed to modulate pain signalling and perception. SBS-1000 and SBS-147 bind and activate it, giving potent analgesia in preclinical models.</p></article>'+
     '<article class="step"><h2>Breathing is left alone.</h2><p>Preclinically, arylepoxamides lack respiratory depression, physical dependence and reward behaviour. In the SBS-1000 Phase 1, breathing stayed within normal range in every subject at every dose.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Potent analgesia, <em>a clean profile.</em></h2></div><p data-r>We take novel compounds with validated preclinical data from highly recognized academic labs through early-stage drug development. Our lead class acts on a receptor discovered in the Pasternak Lab at Memorial Sloan Kettering.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Five programs, <em>two in the clinic.</em></h2></div><p data-r>Two AEAr agonists for acute and chronic pain, and three first-in-class compounds for opioid use disorder and withdrawal, opioid overdose and stimulant use disorder.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Neurologists, chemists and <em>drug developers.</em></h2></div><p data-r>Co-founded by Jeff Reich, MD, and Gavril Pasternak, MD, PhD, with a Scientific Advisory Board of leaders in opiate biology, pain and addiction medicine.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Sparian.</em></h2></div><p data-r>Clinical milestones, NIH/NIDA awards and research collaborations.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Talk to <em>Sparian.</em></h2>'+
   '<p class="sub" data-r>For partnering, investor and media enquiries, write to us. We work from New York City, Farmingdale on Long Island, and Cambridge, Massachusetts.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Sparian Biosciences, Inc.<br>Cure, 345 Park Avenue South, 2nd Floor<br>New York, NY 10010</p></div>'+
    '<div><span class="lab" data-r>Also at</span><p data-r>Broadhollow Bioscience Park, 3 Bioscience Park Drive, Farmingdale, NY 11735<br>Cambridge Innovation Center, 1 Broadway, Cambridge, MA 02142</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">contact@sparianbiosciences.com</a><br><a class="ul" href="https://www.linkedin.com/company/sparian-biosciences/" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>345 Park Avenue South<br>New York, NY 10010</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">contact@sparianbiosciences.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead programs</span>SBS-147 and SBS-1000 · AEAr agonists for pain</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Inter Tight\',sans-serif;font-weight:300;font-size:64px;letter-spacing:-1px">SPARIAN BIOSCIENCES</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Sparian Biosciences, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",science:"science",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Sparian Biosciences — new medicines for pain and addiction",x:"Home"};
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
