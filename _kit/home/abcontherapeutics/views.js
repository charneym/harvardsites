/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){return '<div class="tmg"><div class="tmg-list" role="list">'+TEAM.map(function(p){
    return '<div class="tmg-p" role="listitem"><figure><div class="tmg-ph"><img src="'+p.img+'" alt="'+esc(p.name)+'" width="480" height="600" loading="lazy" decoding="async" onerror="this.style.visibility=\'hidden\'"></div><figcaption><span class="tmg-n">'+esc(p.name)+'</span><span class="tmg-r">'+esc(p.title)+'</span></figcaption></figure></div>'}).join("")+'</div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function pubs(){return '<ul class="nws pubs">'+PUBS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><div class="pbt"><h3>'+esc(n[1])+'</h3><span class="au">'+esc(n[2])+'</span></div><span class="lab src">Read '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["A target found almost only on T cells","CD6 was discovered more than 30 years ago as a T-cell surface marker, an important co-stimulatory and adhesion molecule. It is found almost exclusively on T cells, and on almost all T-cell lymphoma biopsies analysed to date.",'<circle cx="28" cy="28" r="17"/><path class="a" d="M28 11V4M40 16l5-5M45 28h7M40 40l5 5M28 45v7M16 40l-5 5M11 28H4M16 16l-5-5"/>'],
  ["Kills dividing cells, spares resting ones","ATX101 is rapidly and completely internalised after it binds CD6. Its anti-mitotic payload, MMAE, kills dividing T cells such as lymphoma cells and autoreactive T cells, while non-dividing normal T cells are spared.",'<circle cx="18" cy="28" r="11"/><circle class="a" cx="40" cy="28" r="11"/><path class="a" d="M33 21l14 14"/>'],
  ["A proven linker and payload","ATX101 uses the same linker and payload technology as FDA-approved ADCs that target other proteins. With CD6’s restricted expression, it is expected to be a safe and effective treatment for aggressive TCL.",'<path d="M28 52V30M28 30L14 14M28 30l14-16"/><circle class="f" cx="28" cy="24" r="3.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function backers(){return '<div class="bk"><span class="lab kick" data-r>Backed by</span><div><p class="cr" data-r><span>Cleveland Clinic</span><i>·</i><span>National Cancer Institute, NExT</span><i>·</i><span>National Eye Institute</span><i>·</i><span>University of Michigan</span></p>'+
  '<p class="note-s" data-r>Abcon was formed as a Cleveland Clinic spin-off with an initial investment from the Cleveland Clinic, received NIH STTR grants from the National Eye Institute (uveitis) and the National Cancer Institute (T-cell lymphoma), licensed ATX006 from the University of Michigan, and is raising its Series A round.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>ATX101<span class="nomob"> · An anti-CD6 antibody-drug conjugate</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Targeting CD6</span><span class="l">to treat <em>T-cell</em></span><span class="l"><em>lymphoma.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Abcon Therapeutics is developing ATX101, a fully humanized antibody-drug conjugate against CD6, a marker found almost exclusively on T cells. The National Cancer Institute’s NExT program is advancing it toward the clinic.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why ATX101</span>'+
   '<h2 class="txt" id="mani">T-cell lymphoma is aggressive, and current therapies are not very effective. ATX101 kills the dividing T cells that drive it, <em>while sparing the normal, resting T cells that carry the same marker.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2019</span><p class="k">Founded by the Cleveland Clinic and Professor Feng Lin</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">pM</span><p class="k">Picomolar affinity of ATX006, the antibody in ATX101, for CD6</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+</span><p class="k">Years since CD6 was discovered as a marker of T cells</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Find CD6, <em>stop the dividing cell.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Bind</span><span>Inside</span><span>Select</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>ATX101 binds CD6.</h2><p>CD6 sits almost exclusively on T cells, and on almost all T-cell lymphoma biopsies tested. The fully humanized antibody in ATX101 binds it at picomolar affinity.</p></article>'+
     '<article class="step"><h2>It is taken inside the cell.</h2><p>After binding, ATX101 is rapidly and completely internalised, carrying its payload, the mitotic toxin MMAE, into the T cell.</p></article>'+
     '<article class="step"><h2>Only dividing cells are cleared.</h2><p>MMAE stops cells that are dividing, such as T lymphoma cells and autoreactive T cells. Resting, normal T cells are spared, even though they carry CD6.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Built on <em>CD6.</em></h2></div><p data-r>CD6 has long been suggested as a target in autoimmune disease. Abcon’s founders showed that a high-affinity antibody against it suppresses autoreactive T cells, and that, armed with MMAE, it selectively kills dividing T cells.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Two molecules, <em>one target.</em></h2></div><p data-r>ATX101 for T-cell lymphoma leads the pipeline. ATX006, the antibody at its core, is being developed for solid tumours and, in time, for autoimmune disorders.</p></div>'+
   pipeRows(PIPE)+
   backers()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Leadership</span><h2 class="d2 split">The team behind <em>ATX101.</em></h2></div><p data-r>Abcon was founded in 2019 by the Cleveland Clinic and Professor Feng Lin, with his colleague Dr. David Fox of the University of Michigan. Tony Giordano, an experienced biotechnology CEO, has led the company since 2021.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="publications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Publications</span><h2 class="d2 split">The science, <em>published.</em></h2></div><p data-r>Key manuscripts on CD6 in cancer and autoimmunity from Abcon’s founders and collaborators, and news of the company’s progress.</p></div>'+
   pubs()+
   '<span class="lab sub-l pr" data-r>In the news</span>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Talk to <em>us.</em></h2>'+
   '<p class="sub" data-r>For partnering, investment or scientific questions about ATX101 and ATX006, please get in touch with the Abcon team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Abcon '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>10000 Cedar Ave.<br>GCIC Building<br>Cleveland, OH 44106</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">tgiordano@abcontx.com</a></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>Abcon Therapeutics, Inc.<br>A Cleveland Clinic spin-off</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Cleveland, Ohio</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">tgiordano@abcontx.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Leadership</a><br><a class="ul" href="#/publications">Publications</a></div>'+
   '<div class="c"><span class="lab">Lead programme</span>ATX101 · anti-CD6 antibody-drug conjugate for T-cell lymphoma</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Raleway\',sans-serif;font-weight:600;font-size:64px">ABCON</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Abcon Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",science:"science",pipeline:"pipeline",team:"team",publications:"publications",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Abcon Therapeutics — targeting CD6 to treat T-cell lymphoma",x:"Home"};
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
