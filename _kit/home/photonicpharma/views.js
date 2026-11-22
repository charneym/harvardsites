/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk">'+(c[5]?'More':(/Patent/.test(c[3])?'Licensed':/Publish/.test(c[3])?'Published':'NIH-funded'))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Biosensor engineering","Each pharmaceutically important protein target is converted, by genetic engineering, into a fluorescent molecular biosensor, with tags placed to report its functionally important structural changes by FRET — wherever possible fully genetically encoded in a stable human cell line.",'<rect x="10" y="20" width="12" height="16"/><rect class="a" x="34" y="12" width="12" height="16"/><path d="M22 28c6-10 8-12 12-10"/><path d="M8 44h40"/>'],
  ["Lifetime screening","FRET is read by high-throughput fluorescence lifetime measurements on a proprietary plate reader developed with Fluorescence Innovations, Inc., resolving small allosteric changes in the target with high precision across small-molecule libraries.",'<path d="M8 12v32h40"/><path class="a" d="M10 14c4 18 12 26 36 28"/><path d="M10 14c3 10 8 16 20 20"/>'],
  ["Functional follow-up","With its collaborators, Photonic Pharma runs the secondary functional assays for each target, and works with medicinal chemistry experts to turn confirmed hits into a strategy for lead discovery.",'<circle cx="28" cy="28" r="16"/><path class="a" d="M20 28l6 6 10-12"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The platform behind them</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1].charAt(0).toUpperCase()+e[1].slice(1))+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From photonicpharma.com (Home, About, Instruments, Patents and News Center) and the public NIH award record.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Fluorescence-lifetime drug discovery<span class="nomob"> · Minneapolis</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Pioneering precision</span><span class="l">in early-phase</span><span class="l"><em>drug discovery.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Photonic Pharma turns protein drug targets into fluorescent biosensors inside living cells, then screens small-molecule libraries by fluorescence lifetime — for a 30-fold gain in the precision of lead discovery.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/programmes">The programmes</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why lifetime</span>'+
   '<h2 class="txt" id="mani">A drug that changes a protein’s shape changes the distance between two fluorescent tags. Read that distance by <em>fluorescence lifetime</em>, in a living cell, and the smallest allosteric shift becomes a hit you can trust.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">30×</span><p class="k">Increase in the precision of high-throughput screening of small-molecule libraries</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10⁵×</span><p class="k">Throughput gain in fluorescence lifetime measurement, from the Thomas lab’s collaboration with Fluorescence Innovations</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">NIH grants, across heart failure, Alzheimer’s disease and cancer</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the platform works</span><h2 class="d3">From target <em>to trusted hit.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Engineer</span><span>Read</span><span>Confirm</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Make the target a sensor.</h2><p>The protein target is engineered with a green donor and a red acceptor tag placed to report its functional structural changes by FRET, and expressed in a stable human cell line — so it is probed in the natural environment of an intact living cell.</p></article>'+
     '<article class="step"><h2>Read lifetime, well by well.</h2><p>Cells go into 1536-well plates and every well is read by the fluorescence lifetime plate reader. Lifetime, not intensity, resolves the small allosteric changes a compound makes in the target.</p></article>'+
     '<article class="step"><h2>Confirm what moves.</h2><p>Compounds whose lifetime shift stands out are taken into secondary functional assays for that target, with medicinal chemistry partners, to identify the most promising leads.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Three steps, <em>each proven.</em></h2></div><p data-r>Photonic Pharma excels in three critical steps of early-phase drug development, and feasibility for each step has been established independently in its published work. Together they make a strategy for lead discovery of unprecedented speed and efficiency.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="programmes" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">Targets across <em>heart, brain and cancer.</em></h2></div><p data-r>With industrial and academic collaborators, Photonic Pharma applies its structure-based screening platform to discover novel small-molecule effectors of therapeutically important proteins, supported by four NIH grants and a seven-year collaboration with Bristol Myers Squibb.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built on biophysics <em>in Minnesota.</em></h2></div><p data-r>Photonic Pharma was established in 2014 to exploit a unique combination of biosensor engineering and fluorescence instrumentation, based on work done in the Thomas lab at the University of Minnesota.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Instrumentation</span><p data-r>Fluorescence Innovations, Inc. co-designed the fluorescence lifetime plate readers for commercial high-throughput screening with Photonic Pharma.</p></div>'+
    '<div><span class="lab kick" data-r>Facilities</span><p data-r>The University of Minnesota Biophysical Technology Center, where the plate readers remain open to users, and the Institute for Therapeutics Discovery & Development.</p></div>'+
    '<div><span class="lab kick" data-r>Recognition</span><p data-r>One of the 40 Best University Startups of 2017 (NCET2), and a 2018 Tekne Awards finalist of the Minnesota High Tech Association.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Publications, grants <em>and milestones.</em></h2></div><p data-r>The latest from Photonic Pharma, the peer-reviewed literature and the NIH record.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Pharmaceutical partners and research groups</span>'+
   '<h2 class="big split">Talk to <em>Photonic Pharma.</em></h2>'+
   '<p class="sub" data-r>Whether you have a protein target that needs a precise live-cell screen, or want to discuss the biosensors, patents and data behind the platform, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Photonic Pharma '+ARR+'</a><a class="btn" href="#/programmes">See the programmes</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Photonic Pharma LLC<br>Minneapolis, Minnesota<br>USA</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Instruments</span><p data-r>FLT-PR and SUPR plate readers, now at the UMN Biophysical Technology Center, Nils Hasselmo Hall.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Minneapolis, Minnesota<br>USA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platform</span>FRET biosensors in living cells · fluorescence lifetime HTS · functional follow-up</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Manrope\',Arial,sans-serif;font-weight:700;font-style:italic;font-size:62px;letter-spacing:-.01em">Photonic Pharma</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Photonic Pharma LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",platform:"story",programmes:"programmes",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Photonic Pharma — precision in early-phase drug discovery",x:"Home"};
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
