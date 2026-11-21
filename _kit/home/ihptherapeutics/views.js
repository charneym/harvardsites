/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
var PHS=["Discovery","In vitro","In vivo","IND-enabling"];
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[7]?' class="dim"':'')+'><span class="lab tg"><b'+(c[7]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span>'+
   '<span class="stg" aria-hidden="true"><span class="tr"><i class="p" style="width:'+(c[5]/4*100)+'%"></i><i style="width:'+(c[4]/4*100)+'%"></i></span><span class="ph">'+PHS.map(function(p){return '<span>'+p+'</span>'}).join("")+'</span></span></div>'+
   '<p>'+esc(c[6])+'</p><span class="lab lk">'+(c[7]?'Partnering':'Lead programme')+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Two mechanisms, one molecule","IHP-102 is a novel dual P-selectin and complement inhibitor. Both are key mechanisms of vaso-occlusion in sickle cell disease, and blocking them during a crisis shows strong promise for a disease-modifying effect.",'<path d="M6 40c10-14 34-14 44 0"/><circle class="f" cx="18" cy="22" r="4"/><circle class="f" cx="38" cy="22" r="4"/><path class="a" d="M18 26v8M38 26v8"/>'],
  ["Glycan-based","A glycan therapeutic with pleiotropic activity: rather than masking pain, it targets several of the underlying mechanisms that lead to it, as a non-opioid approach to pain, duration and complications.",'<path d="M28 8l9 5.2v10.4L28 28.8l-9-5.2V13.2z"/><path class="a" d="M37 23.6l8 4.6v9.2l-8 4.6-8-4.6v-9.2z"/><path d="M19 23.6l-8 4.6v9.2l8 4.6"/>'],
  ["Self-administered at home","Given at the earliest onset of symptoms, under the skin, by the person living with sickle cell: moving care to the home and away from costly, ill-equipped healthcare settings.",'<path d="M10 28L28 12l18 16"/><path d="M15 24v20h26V24"/><path class="a" d="M28 30v9M23.5 34.5h9"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Preclinical evidence</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Preclinical results in mouse models, from IHP’s NIH project abstracts (UH3NS134781) and Haematologica (2023, doi 10.3324/haematol.2023.283716).</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Sickle cell disease<span class="nomob"> · IHP-102</span> · San Carlos, CA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Rescue from</span><span class="l">a pain crisis,</span><span class="l"><em>at home.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>IHP Therapeutics is developing IHP-102 for acute vaso-occlusive crisis in sickle cell disease. It aims to be the first self-administered rescue therapeutic, empowering people with sickle cell and moving care into the home.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">Our science '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">In a vaso-occlusive crisis, sickled cells stick in small vessels and block blood flow. Once it starts, there is no disease-modifying treatment: opioids mask the pain, often in a hospital. IHP-102 is built to <em>stop the crisis itself.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">75%</span><p class="k">Fewer vaso-occlusions with IHP-102 in the Townes mouse model of sickle cell disease</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">80%</span><p class="k">Less lung vaso-occlusion in sickle cell mice after a subcutaneous injection (Haematologica, 2023)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$6.6M</span><p class="k">In NIH awards since 2023, from NHLBI and NINDS, for IHP-102</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How IHP-102 works</span><h2 class="d3">Unstick the cells, <em>restore the flow.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Crisis</span><span>Block</span><span>Flow</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A crisis starts in the vessel.</h2><p>In sickle cell disease, P-selectin on the vessel wall catches sickled red cells and white cells, and complement adds to the inflammation. The cells pile up, blood flow stops, and the pain of a vaso-occlusive crisis begins.</p></article>'+
     '<article class="step"><h2>Block both mechanisms.</h2><p>Taken at the first sign of a crisis, IHP-102 binds P-selectin and inhibits complement at once: two key mechanisms of vaso-occlusion, blocked by one glycan-based molecule.</p></article>'+
     '<article class="step"><h2>Let the blood flow again.</h2><p>With the adhesion released, the cells move on and flow returns. The aim: shorter crises and less pain, tissue and organ damage, treated at home rather than in an emergency room.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">A rescue therapy <em>for the first hour.</em></h2></div><p data-r>IHP-102 is designed around a simple idea from the sickle cell community: treat a crisis where and when it starts, with a therapy that changes its course rather than only masking the pain.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One lead molecule, <em>fully focused.</em></h2></div><p data-r>IHP-102 is in IND-enabling studies, with GMP scale-up toward a first-in-human Phase 1 trial supported by the National Institutes of Health.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people behind <em>IHP-102.</em></h2></div><p data-r>A San Carlos team in development, manufacturing and clinical operations, with advisors from Emory University and the University of California San Francisco.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NIH SBIR awards from NHLBI and a UG3/UH3 cooperative agreement from NINDS, with seed funding (BioCentury, 2024).</p></div>'+
    '<div><span class="lab kick" data-r>Origins</span><p data-r>IHP began with a heparin-based treatment for COVID-19, then turned the same glycan science to sickle cell disease.</p></div>'+
    '<div><span class="lab kick" data-r>Beyond sickle cell</span><p data-r>Additional thrombo-inflammatory indications are under investigation; IHP-101 awaits partners.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards, papers <em>and press.</em></h2></div><p data-r>The latest on IHP-102 from the NIH, the journals and the trade press.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and the sickle cell community</span>'+
   '<h2 class="big split">Talk to <em>IHP.</em></h2>'+
   '<p class="sub" data-r>Whether you are a clinician, an investor, a partner for IHP-101 or a person living with sickle cell disease, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email IHP '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>IHP Therapeutics<br>930 Brittan Avenue<br>San Carlos, CA 94070</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>A note for candidates</span><p data-r>IHP only ever writes from @ihptherapeutics.com addresses and never asks candidates to buy anything or send sensitive information.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>930 Brittan Avenue<br>San Carlos, CA 94070</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead programme</span>IHP-102 · Dual P-selectin and complement inhibitor</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Work Sans\',Arial,sans-serif;font-weight:400;font-size:52px;letter-spacing:.16em"><tspan style="font-weight:600">IHP</tspan> THERAPEUTICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 IHP Therapeutics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",mechanism:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"IHP Therapeutics — IHP-102, an at-home rescue therapeutic for sickle cell pain crises",x:"Home"};
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
