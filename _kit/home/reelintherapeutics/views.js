/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["A different target","Reelin, a plasma protein made in the liver, binds ApoER2 on the cells that line blood vessels and raises a wide range of adhesion molecules there. Those molecules capture leukocytes and pull them into inflamed tissue.",'<path d="M6 40h44"/><path class="a" d="M14 40V28M28 40V24M42 40V28"/><circle class="f" cx="14" cy="24" r="3"/><circle class="f" cx="28" cy="20" r="3"/><circle class="f" cx="42" cy="24" r="3"/><circle cx="28" cy="10" r="5"/>'],
  ["Restore the barrier","Anti-Reelin monoclonal antibodies deplete Reelin from the plasma in a stable manner. Instead of blocking one adhesion molecule or immune receptor at a time, they turn down all the major inflammation-driven adhesion proteins on the vessel wall together.",'<path d="M28 46V28M28 28L14 12M28 28l14-16"/><path class="a" d="M10 8l6 6M46 8l-6 6"/><path d="M6 50h44"/>'],
  ["Spare the immune system","The aim is to restore immune balance without broad immunosuppression, and to work in the periphery without compromising Reelin’s role in the brain. A Reelin ELISA suitable for clinical use is a further goal of the company’s partnership with UT Southwestern.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M19 28l6 6 12-13"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Peer-reviewed evidence</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Studies by the founders with UT Southwestern colleagues, Reelin Therapeutics co-authoring. Preclinical results in mouse models, with patient blood samples in multiple sclerosis.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Chronic inflammation<span class="nomob"> · Anti-Reelin therapies</span> · San Diego</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Calm the vessel,</span><span class="l">quiet the</span><span class="l"><em>inflammation.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Reelin Therapeutics is pioneering a different approach to chronic inflammatory and autoimmune disease: lowering Reelin in the plasma, so blood vessels stop drawing leukocytes into tissue, to restore immune balance without broad immunosuppression.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our programmes</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Chronic inflammation underlies a wide range of human diseases, yet existing anti-inflammatory therapies often compromise immune function or lose effectiveness over time. Reelin Therapeutics targets the vessel wall instead, to <em>restore immune balance.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><span class="k">NIH SBIR and STTR awards to Reelin Therapeutics since 2020, the latest in August 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.7M</span><span class="k">In NIH small-business research funding across those awards</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><span class="k">NIH institutes funding the work: NIA, NIAMS and NIDDK</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The science</span><h2 class="d3">Inflammation crosses at the <em>vessel wall.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Signal</span><span>Infiltrate</span><span>Restore</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Reelin primes the vessel wall.</h2><p>In inflammation, Reelin in the plasma binds its receptor ApoER2 on the endothelial cells that line blood vessels, and the wall fills with adhesion molecules such as E-selectin and CAMs.</p></article>'+
     '<article class="step"><h2>Leukocytes roll, stick and cross.</h2><p>The now adhesive, permeable endothelium catches passing leukocytes. They roll, adhere and squeeze through into the tissue, into the brain in MS and Alzheimer’s disease or the joint in arthritis, and sustain the damage.</p></article>'+
     '<article class="step"><h2>Take Reelin out of the blood.</h2><p>Anti-Reelin antibodies deplete Reelin from the plasma. The adhesion molecules recede, the barrier is restored and leukocytes flow past, without targeting and dampening the immune system itself.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our approach</span><h2 class="d2 split">Modulate Reelin, <em>not immunity.</em></h2></div><p data-r>We target chronic inflammatory and autoimmune conditions with a biological molecule that decreases leukocyte-driven inflammation, by modulating peripheral Reelin.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">One pathway, <em>many diseases.</em></h2></div><p data-r>Dysregulated Reelin signalling has been implicated in neuroinflammation, immune-cell trafficking and inflamed peripheral tissue. Reelin Therapeutics’ programmes are funded by the National Institutes of Health.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The scientists who found <em>the pathway.</em></h2></div><p data-r>Reelin Therapeutics was co-founded by a drug developer and the UT Southwestern scientists who discovered the Reelin receptors and Reelin’s role in the circulation.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Academic partner</span><p data-r>A partnership with the Calvier Lab at UT Southwestern translates the laboratory’s Reelin findings toward the clinic.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>SBIR and STTR awards from the National Institutes of Health: NIA, NIAMS and NIDDK.</p></div>'+
    '<div><span class="lab kick" data-r>Discovery</span><p data-r>Anti-Reelin antibodies and next-generation γ-secretase modulators, from medicinal chemistry to in vivo models.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards and <em>publications.</em></h2></div><p data-r>The latest from Reelin Therapeutics and its founders.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and investment</span>'+
   '<h2 class="big split">Talk to <em>Reelin.</em></h2>'+
   '<p class="sub" data-r>Reelin Therapeutics is developing anti-Reelin therapies for chronic inflammatory disease and would be glad to hear from partners, investors and clinicians.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+RP+'11418428" target="_blank" rel="noopener">The latest NIH award '+ARR+'</a><a class="btn" href="#/pipeline">See the programmes</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Reelin Therapeutics, Inc.<br>San Diego, California</p></div>'+
    '<div><span class="lab" data-r>Leadership</span><p data-r>Maria Kounnas, PhD<br>Chief Executive Officer</p></div>'+
    '<div><span class="lab" data-r>Academic partner</span><p data-r><a class="ul" href="'+LAB+'" target="_blank" rel="noopener">Calvier Lab, UT Southwestern</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>San Diego, CA</div>'+
   '<div class="c"><span class="lab">Focus</span>Chronic inflammatory and<br>autoimmune disease</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Programmes</span>Alzheimer’s · MS<br>Rheumatoid arthritis · IBD</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:700;font-size:62px;letter-spacing:-.02em">Reelin</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Reelin Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"story",approach:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Reelin Therapeutics — Anti-Reelin therapies for chronic inflammatory disease, San Diego, CA",x:"Home"};
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
