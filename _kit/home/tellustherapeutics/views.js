/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+esc(c[6])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["White matter injury","The most common brain injury in preterm infants. Inflammation and hypoxia destroy oligodendrocyte progenitor cells, myelination of the developing brain is disrupted, and the result is lifelong motor and cognitive deficits, cerebral palsy in severe cases.",'<path d="M6 30C14 22 22 38 30 30S46 22 50 30"/><path class="a" d="M14 25l4 10M30 24l-3 12M42 25l3 10" stroke-dasharray="2 3"/>'],
  ["A solution from nature","Scientists at Duke University and Tellus found a family of compounds in maternal breast milk that stimulate neural stem cells, restore progenitor levels and promote myelination, restoring lost motor function in neonatal animal models.",'<path d="M28 8C20 20 14 28 14 35a14 14 0 0 0 28 0c0-7-6-15-14-27z"/><path class="a" d="M22 36l4-4h6l3 4-3 4h-6z"/>'],
  ["New hope for the NICU","Tellus is set to take one such compound, TT-20, into human clinical trials. If successful, it will be the first treatment for white matter injury, for patients and clinicians in neonatal intensive care units worldwide.",'<path d="M8 40h40M12 40V24h32v16"/><path d="M12 24c0-8 7-14 16-14s16 6 16 14"/><path class="a" d="M28 28v8M24 32h8"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[3])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Neonatal therapeutics<span class="nomob"> · Durham, North Carolina</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Restoring myelin</span><span class="l"><em>in the newborn brain.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Tellus Therapeutics is developing TT-20, an oxysterol found in human breast milk, as the first treatment for white matter injury in premature infants.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">The science '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Within and beyond the NICU</span>'+
   '<h2 class="txt" id="mani">The first company dedicated to treatments designed for the unique biology of newborns. <em>Starting where the need is greatest.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 in 10</span><p class="k">Babies born prematurely and at risk for white matter injury, which has no treatment today</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.5M+</span><p class="k">Lifetime care costs a family can face for each affected child</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$35M</span><p class="k">Series A led by the Perceptive Xontogeny Venture Fund, December 2022</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The mechanism</span><h2 class="d3">From breast milk <em>to myelin.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Injury</span><span>Signal</span><span>Renewal</span><span>Myelin</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>White matter, unwrapped.</h2><p>In the preterm brain, inflammation and hypoxia cause the loss of oligodendrocyte progenitor cells. The nerve fibres they should insulate are left without myelin.</p></article>'+
     '<article class="step"><h2>A signal from breast milk.</h2><p>Duke and Tellus scientists found that 20-&#945;-hydroxycholesterol, an oxysterol in human breast milk, acts on the brain&#8217;s own neural stem cells. TT-20 is one such compound.</p></article>'+
     '<article class="step"><h2>New progenitors.</h2><p>The stem cells respond through Gli-dependent oligodendrogenesis, restoring the progenitor cells that injury destroyed.</p></article>'+
     '<article class="step"><h2>Myelin, restored.</h2><p>The new oligodendrocytes wrap the nerve fibres in myelin again, restoring lost motor function in neonatal animal models of white matter injury.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Nature presents <em>a solution.</em></h2></div><p data-r>Founded in 2018, Tellus is translating science from Eric Benner&#8217;s laboratory at Duke University, published in Cell Stem Cell in 2023, into a regenerative medicine platform for diseases of myelination and inflammation.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Starting at birth, <em>scaling across the lifespan.</em></h2></div><p data-r>TT-20 leads three neonatal programmes. The same repair biology reaches adult conditions where damaged myelin and chronic inflammation drive disease.</p></div>'+
   pipeRows(PIPE)+
   '<div class="bk"><span class="lab kick" data-r>Origins and support</span><p class="cr" data-r><span>Duke University</span><i>·</i><span>Perceptive Xontogeny Venture Fund</span><i>·</i><span>NIH NINDS (SBIR)</span><i>·</i><span>C-Path Neonatal Brain Injury Collaborative</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Neonatologists and <em>drug developers.</em></h2></div><p data-r>Founded by a Duke neonatologist and a neuropharmacologist, with advisors who lead newborn medicine and neonatal trials, and a board from Xontogeny and Perceptive.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Tellus.</em></h2></div><p data-r>Company news and the research behind TT-20.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, partners and media</span>'+
   '<h2 class="big split">Talk to <em>Tellus.</em></h2>'+
   '<p class="sub" data-r>We would be glad to hear from investors, clinical partners and the neonatal community.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>8 Davis Drive, Suite 220<br>Durham, NC 27713</p></div>'+
    '<div><span class="lab" data-r>Investor contact</span><p data-r>Jason Kralic<br><a class="ul" href="'+MAIL+'">jasonkralic@<wbr>tellustherapeutics.com</a></p></div>'+
    '<div><span class="lab" data-r>Media contact</span><p data-r>Austin Schwartz<br><a class="ul" href="'+MAIL2+'">austinschwartz@<wbr>tellustherapeutics.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>8 Davis Drive, Suite 220<br>Durham, NC 27713</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">Investors</a><br><a class="ul" href="'+MAIL2+'">Media</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Follow</span><a class="ul" href="https://www.linkedin.com/company/tellus-therapeutics-inc/" target="_blank" rel="noopener">LinkedIn</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:64px">TELLUS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Tellus Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",story:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Tellus Therapeutics — treatments for the newborn brain",x:"Home"};
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
