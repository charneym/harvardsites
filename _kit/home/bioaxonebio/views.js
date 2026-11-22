/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk'+(/partner|Neurelis/.test(c[3])?' av':'')+'">'+(c[5]?'Next':/Neurelis/.test(c[3])?'Licensed':/partner/.test(c[3])?'Partnering':'In development')+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Rho · neurotrauma","Inhibitory proteins at an injury switch Rho on, and Rho stops axons growing. BA-210 is a cell-penetrating form of C3 transferase that locks Rho in its inactive state: neuroprotective, pro-regenerative, and calming to the destructive inflammatory response.",'<path d="M8 28h18"/><path class="a" d="M30 28h18"/><circle class="f" cx="28" cy="28" r="3"/><path d="M26 20v16"/>'],
  ["ROCK2 · blood-brain barrier","In cerebral cavernous malformation, endothelial cell dysfunction is driven by overactivation of ROCK2. NRL-1049 is ROCK2-selective, the form of the kinase most highly expressed in the CNS, and restores barrier integrity in preclinical studies.",'<path d="M10 16h36M10 40h36"/><path class="a" d="M16 22v12M24 22v12M32 22v12M40 22v12"/>'],
  ["PTEN · axon regeneration","Silencing PTEN in neurons promotes long-distance regrowth of injured axons. BA-434 is a self-delivering RNAi that suppresses PTEN transiently, not permanently, to promote regeneration and reduce paralysis.",'<path d="M8 40c10 0 14-6 18-12s8-12 22-12"/><path class="a" d="M38 12l10 4-6 8"/><circle class="f" cx="8" cy="40" r="3"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The need</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From bioaxonebio.com (Technology, Disease Focus and News), the companies\' press releases and the peer-reviewed literature.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage neurological repair<span class="nomob"> · Boston</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Drugs to restore</span><span class="l"><em>neurological function.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>BioAxone BioSciences develops transformative treatments for spinal cord injury and neurovascular disorders, built on a deep understanding of axon regeneration and the Rho signalling pathway.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our science '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why Rho</span>'+
   '<h2 class="txt" id="mani">Rho signalling is a central control system inside cells. When its balance is lost, axons stop regrowing and the blood-brain barrier leaks. Target the pathway, and you can <em>treat the biology</em> of injury.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Drug candidates created by BioAxone, against Rho, ROCK2 and PTEN</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">12,000+</span><p class="k">New spinal cord injuries in the United States each year, with no drug on the market to repair the damage</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20+</span><p class="k">Years of research led by the founder into what blocks axon regeneration in the CNS</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How BA-210 works</span><h2 class="d3">Switch Rho off, <em>let axons grow.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Injury</span><span>Deliver</span><span>Regrow</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>An injury switches Rho on.</h2><p>Spinal cord injury cuts axons and floods the lesion with growth-inhibitory proteins. Their signals converge on Rho, which becomes over-activated: injured neurons die back, inflammation spreads, and the cut axons stop growing.</p></article>'+
     '<article class="step"><h2>Delivered during surgery.</h2><p>The first-line treatment is decompression surgery. BA-210 is applied to the site of injury in a fibrin sealant during that operation, and enters the tissue, where it locks Rho in its inactive state to limit secondary damage.</p></article>'+
     '<article class="step"><h2>Axons cross the lesion.</h2><p>With Rho held off, damaged neurons are protected and injured axons regenerate. In rats and mice, BA-210 promoted functional recovery of walking ability after spinal cord injury.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">One pathway, <em>three points of attack.</em></h2></div><p data-r>Rho signalling governs neuronal repair and blood-brain barrier integrity, both disrupted in disease. By targeting different points along the pathway, BioAxone tailors therapies to the underlying biology of neurotrauma and neurovascular disorders.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Clinical candidates for <em>CNS repair.</em></h2></div><p data-r>BioAxone is a clinical-stage company. Its ROCK2 inhibitor is in Phase 1 with licensee Neurelis, and it is seeking a partner to take BA-210, its Phase 3 drug for acute spinal cord injury, forward, ideally alongside combination therapy.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Neuroscience and <em>drug development.</em></h2></div><p data-r>A clinical-focused company based in Boston, led by the scientist whose laboratory first showed the importance of Rho in axon regeneration, and advised by executives from CRISPR Therapeutics, Novartis and GSK.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Origins</span><p data-r>Developed in Canada through a university spin-out, the technology was transferred to the US company, BioAxone BioSciences.</p></div>'+
    '<div><span class="lab kick" data-r>Partners</span><p data-r>Vertex Pharmaceuticals licensed BA-210 and ran its Phase 2b/3 trial; Neurelis licensed BA-1049 and Rho kinase inhibitor portfolio in 2021.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NIH SBIR awards from NINDS and NEI supported BA-1049, BA-434 and BA-210 programmes.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Publications, patents <em>and partners.</em></h2></div><p data-r>The latest from BioAxone and the peer-reviewed literature.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, clinicians and investors</span>'+
   '<h2 class="big split">Talk to <em>BioAxone.</em></h2>'+
   '<p class="sub" data-r>We are seeking a partner for development of our Phase 3 drug for acute spinal cord injury, and we would be glad to hear from groups working on neurotrauma and the blood-brain barrier.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email BioAxone '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>BioAxone BioSciences, Inc.<br>Boston, Massachusetts<br>USA</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Please note</span><p data-r>BioAxone no longer has laboratories, and is not accepting applications for internships.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Boston, Massachusetts<br>USA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Programmes</span>BA-210 · NRL-1049 · BA-434</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Source Serif 4\',Georgia,serif;font-weight:600;font-size:56px;letter-spacing:.1em">BIOAXONE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 BioAxone BioSciences, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",platform:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"BioAxone BioSciences — drugs to restore neurological function",x:"Home"};
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
