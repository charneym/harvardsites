/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["A natural scavenger","2-HOBA (2-hydroxybenzylamine) is a natural product found in buckwheat seeds. It is highly bioavailable, and showed no toxicity in rodents or in human Phase I trials.",'<path d="M28 6l17 30H11z"/><path class="a" d="M28 36v14"/><circle class="f" cx="28" cy="25" r="3"/>'],
  ["Faster than the damage","Oxidative stress turns lipids into reactive dicarbonyls such as isolevuglandins. 2-HOBA reacts with them about 1,600 times faster than lysine does, so they are caught before they modify proteins.",'<path d="M28 10l15 8.5v17L28 44l-15-8.5v-17z"/><path class="a" d="M28 10V3M43 35.5l6 3.5"/><circle class="f" cx="28" cy="27" r="3"/>'],
  ["One mechanism, many diseases","Reactive lipid adducts on DNA, histones and proteins appear in pulmonary hypertension, Alzheimer’s disease, chronic inflammation and liver disease, which is why MTI tests 2-HOBA across all four.",'<circle cx="28" cy="28" r="7"/><path d="M28 21V8M28 35v13M21 28H8M35 28h13"/><circle class="f" cx="28" cy="8" r="3"/><circle class="f" cx="48" cy="28" r="3"/><circle class="f" cx="28" cy="48" r="3"/><circle class="f" cx="8" cy="28" r="3"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>2-HOBA in pulmonary hypertension</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>West et al., with MTI Biotech, Journal of Translational Medicine, August 2026 (doi 10.1186/s12967-026-08716-8). Preclinical results in mouse models.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Pulmonary hypertension<span class="nomob"> · 2-HOBA</span> · Ames, Iowa</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Breaking the</span><span class="l">cycle that harms</span><span class="l"><em>the lungs.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>MTI Biotech is developing 2-HOBA, a natural compound from buckwheat seeds that soaks up the reactive lipids driving pulmonary hypertension, with Phase II support from the National Heart, Lung, and Blood Institute.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How 2-HOBA works '+ARR+'</a><a class="btn" href="#/programmes">Our programmes</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">In pulmonary hypertension, oxidative stress makes reactive lipids, reactive lipids switch off the mitochondria’s SIRT3, and failing metabolism makes more oxidative stress. MTI Biotech is developing the molecule that <em>breaks the cycle.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1,600×</span><p class="k">How much faster 2-HOBA reacts with reactive lipid electrophiles than lysine, the protein residue they would otherwise modify</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$3.3M</span><p class="k">NIH NHLBI STTR support since 2021 for “2-HOBA for Treatment of Pulmonary Hypertension”, now in Phase II</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1990</span><p class="k">The year university professors Steven Nissen and Naji Abumrad founded MTI Biotech, whose research led to the discovery of HMB</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How 2-HOBA works</span><h2 class="d3">Catch the lipids, <em>save the enzyme.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Stress</span><span>Damage</span><span>Rescue</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Oxidative stress makes reactive lipids.</h2><p>Across most forms of pulmonary hypertension, reactive oxygen species rise. They oxidise lipids into reactive dicarbonyls, such as isolevuglandins, that bind to proteins.</p></article>'+
     '<article class="step"><h2>The lipids switch off SIRT3.</h2><p>Reactive lipids form adducts on SIRT3, a mitochondrial enzyme at the centre of the cell’s metabolism. With SIRT3 inactivated, metabolism fails and makes still more reactive oxygen: a vicious cycle.</p></article>'+
     '<article class="step"><h2>2-HOBA catches them first.</h2><p>2-HOBA reacts with the reactive lipids before they reach the protein and carries them off. SIRT3 keeps working, mitochondrial function is restored and the cycle is broken.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">A molecule from buckwheat, <em>a target in every cell.</em></h2></div><p data-r>MTI Biotech develops credible, safe and effective compounds backed by research and tested at top institutions. Its lead, 2-HOBA, is a scavenger of the reactive lipids that oxidative stress leaves behind.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="programmes" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">From the lungs <em>to the brain.</em></h2></div><p data-r>2-HOBA programmes funded by the National Institutes of Health and run with Vanderbilt University, alongside HMB, the ingredient MTI Biotech’s founders discovered.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Scientists who bridge <em>industry and academia.</em></h2></div><p data-r>The principals and researchers at MTI Biotech hold academic appointments at major research universities and continue to contribute to basic science.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Laboratory</span><p data-r>Heartland Assays, MTI’s partner lab since 2015: ISO 17025 accredited and certified by the CDC for the standardisation of 25OH vitamin D.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>SBIR and STTR awards from the National Institutes of Health: NHLBI, NIA and NCI.</p></div>'+
    '<div><span class="lab kick" data-r>Partners</span><p data-r>Vanderbilt University Medical Center for 2-HOBA research; Metabolic Technologies and TSI for HMB.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Papers <em>and awards.</em></h2></div><p data-r>The latest from MTI Biotech and its collaborators.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Research and partnerships</span>'+
   '<h2 class="big split">Talk to <em>MTI Biotech.</em></h2>'+
   '<p class="sub" data-r>Research proposals go to Dr. John A. Rathmacher; business questions to Shawn Baier, COO. MTI Biotech would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email MTI Biotech '+ARR+'</a><a class="btn" href="#/programmes">See the programmes</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Iowa State University Research Park<br>2711 South Loop Drive, Suite 4400<br>Ames, Iowa 50010</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+15152969916">(515) 296-9916</a></p></div>'+
    '<div><span class="lab" data-r>Research · Business</span><p data-r><a class="ul" href="mailto:rathmacher@mtibiotech.com">rathmacher@mtibiotech.com</a><br><a class="ul" href="mailto:baier@mtibiotech.com">baier@mtibiotech.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Iowa State University Research Park<br>Ames, Iowa</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Since 1990</span>2-HOBA · HMB<br>NIH SBIR and STTR funded</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 62" aria-hidden="true"><text x="320" y="52" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:800;font-style:italic;font-size:64px;letter-spacing:-.02em">MTI Biotech</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 MTI Biotech</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"story",programmes:"programmes",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"MTI Biotech — 2-HOBA for pulmonary hypertension, Ames, Iowa",x:"Home"};
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
