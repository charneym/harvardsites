/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b></span><h3>'+esc(c[0])+'<span class="loc">'+esc(c[1])+'</span></h3><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["One fold, many targets","The pleckstrin homology (PH) domain is a protein fold that binds phosphoinositide lipids and so places its host protein at the right spot on the cell membrane.",'<path d="M4 40H52"/><path d="M4 46H52"/><path class="a" d="M16 40c0-14 8-22 12-22s12 8 12 22"/><circle class="f" cx="28" cy="40" r="3"/>'],
  ["Block the domain, stop the signal","Small molecules that occupy a PH domain keep proteins such as AKT and PDK1 off the membrane, so the growth and survival signals they carry are never switched on.",'<path d="M4 44H52"/><path d="M16 44c0-12 5-18 12-18s12 6 12 18"/><path class="a" d="M20 14l16 16M36 14L20 30"/>'],
  ["Precision, by design","Each programme starts from a protein a defined cancer depends on, and uses computational docking and X-ray crystal structures to design inhibitors for patients with limited treatment options.",'<circle cx="28" cy="28" r="20"/><circle cx="28" cy="28" r="11"/><circle class="f" cx="28" cy="28" r="3.2"/><path d="M28 2v10M28 44v10M2 28h10M44 28h10"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>PHT-427 in actinic keratosis</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>NCI SBIR Phase II award 1R44CA306740-01, “Clinical evaluation of a novel AKT/PDK1 inhibitor, PHT-427, for the treatment of multi-field actinic keratoses”, $2,085,765, September 2025 to August 2027.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Precision oncology<span class="nomob"> · PH-domain inhibitors</span> · La Jolla, California</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Precision medicines</span><span class="l">for the treatment</span><span class="l">of <em>cancer.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>PHusis develops targeted small molecules that bind and block the pleckstrin homology (PH) domain of signalling proteins that drive cancer cell growth and survival. First: topical PHT-427 for actinic keratosis.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How PHT-427 works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Actinic keratosis affects more than 58 million people in the US and can progress to skin cancer. The creams used today are toxic and clear few lesions. PHusis is developing a topical treatment designed to be <em>convenient, effective and low in toxicity.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.09M</span><span class="k">NCI SBIR Phase II award to take topical PHT-427 into the clinic, September 2025</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">58M+</span><span class="k">People in the US with actinic keratosis, up to 10% of cases progressing to squamous cell carcinoma</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 in 2</span><span class="k">Actinic keratoses and skin squamous cell carcinomas that carry an oncogenic PI-3-kinase mutation</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How PHT-427 works</span><h2 class="d3">Keep the signal <em>off the membrane.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">PI-3-kinase</span><span>PH domains</span><span>PHT-427</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A switch left on.</h2><p>In sun-damaged skin, mutations often leave PI-3-kinase active. At the inner face of the cell membrane it makes the lipid PIP3, a docking signal for growth and survival.</p></article>'+
     '<article class="step"><h2>Two kinases dock.</h2><p>AKT and PDK1 each carry a pleckstrin homology (PH) domain that grips PIP3. Side by side on the membrane, PDK1 activates AKT, and AKT drives the cell to grow and survive.</p></article>'+
     '<article class="step"><h2>PHT-427 blocks the dock.</h2><p>PHT-427 binds the PH domains of AKT and PDK1 and blocks their membrane binding. Neither kinase reaches PIP3, and the signal stays off.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="approach" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">Built on the <em>PH domain.</em></h2></div><p data-r>PHusis builds inhibitors of the PH domain, a lipid-binding fold that critical cancer signalling proteins need to work at the cell membrane.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From the skin to <em>the hardest targets.</em></h2></div><p data-r>A topical PDK1/AKT inhibitor heading into the clinic, and discovery programmes against cancers driven by mutant KRAS, aldolase A and ERK5.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug hunters in <em>signalling biology.</em></h2></div><p data-r>PHusis was co-founded by Drs. Lynn Kirkpatrick, Garth Powis, Emmanuelle Meuillet and Shuxing Zhang, and its research has been funded by the National Cancer Institute since 2013.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Milestones, <em>funded by the NCI.</em></h2></div><p data-r>The awards behind PHT-427 and the PH-domain programmes.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and collaborators</span>'+
   '<h2 class="big split">Talk to <em>PHusis.</em></h2>'+
   '<p class="sub" data-r>Interested in PHT-427, actinic keratosis or PH-domain inhibition? We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email PHusis '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>PHusis Therapeutics, Inc.<br>La Jolla, California</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r>National Cancer Institute, SBIR Phase II</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>La Jolla, California</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead programme</span>Topical PHT-427<br>NCI SBIR 1R44CA306740</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 62" aria-hidden="true"><text x="260" y="52" text-anchor="middle" style="font-family:\'Figtree\',Arial,sans-serif;font-weight:500;font-size:64px;letter-spacing:.01em">PHusis</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 PHusis Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"PHusis Therapeutics — PH-domain inhibitors for cancer, La Jolla",x:"Home"};
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
