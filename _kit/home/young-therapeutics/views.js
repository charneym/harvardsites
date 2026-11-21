/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[3])+'</b><i>'+esc(c[0])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Two isoforms, two compounds","Protein kinase C is a family of signalling enzymes. Young Therapeutics targets two of its isoforms: PKC epsilon with YT-002 and the peptide YT-001, and PKC beta II with YT-004. Both sit upstream of the burst of oxygen free radicals that follows reperfusion.",'<circle cx="20" cy="22" r="9"/><circle cx="36" cy="34" r="9"/><path class="a" d="M27 27l3 3"/><circle class="f" cx="20" cy="22" r="3"/><circle class="f" cx="36" cy="34" r="3"/><path d="M8 48h40"/>'],
  ["Given at the moment of reflow","Reperfusion injury begins when blood returns, so the treatment is designed for that moment: the PKC epsilon inhibitor patented in 2016 is a solution given into the affected area as flow is restored after a heart attack.",'<path d="M6 30h12l4-10 6 20 5-14 3 4h14"/><path class="a" d="M40 12v8M36 16h8"/><circle class="f" cx="28" cy="40" r="2.6"/>'],
  ["One mechanism, many organs","The same injury follows wherever blood flow is cut and restored. The company's experimental work covers the heart and the kidney, and its molecules are aimed at heart attack, organ transplantation, acute kidney injury and stroke.",'<path d="M28 46c-9-6-16-12-16-20a8 8 0 0 1 16-3 8 8 0 0 1 16 3c0 8-7 14-16 20z"/><path class="a" d="M28 23v14M21 30h14"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The data to date</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>As described by Young Therapeutics on youngtherapeutics.com, alongside the NIH RePORTER abstracts for awards R44HL160338 and R43DK121626. Preclinical results in ex vivo, mouse and pig models; no compound has yet been tested in people.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Ischemia–reperfusion<span class="nomob"> injury · NIH SBIR Phase II</span> · Philadelphia, PA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Protect the heart</span><span class="l">when the blood</span><span class="l"><em>comes back.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Young Therapeutics develops targeted protein kinase C inhibitors against reperfusion injury: the damage done when blood flow returns to heart muscle after a heart attack, or to a kidney after injury or transplant.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">The science '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Reopening a blocked artery saves heart muscle, but the returning blood also injures it. Young Therapeutics’ molecules are built for that moment, to stop <em>the damage that reperfusion itself does.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$3.9M</span><span class="k">NIH SBIR funding awarded to Young Therapeutics by NHLBI and NIDDK since 2019</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Phase II</span><span class="k">NHLBI SBIR programme for YT-002 and YT-004, directed at an Investigational New Drug application</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20+</span><span class="k">Publications behind the company’s work on ischemia–reperfusion injury</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How reperfusion injury happens</span><h2 class="d3">Blood flow returns. <em>So does the danger.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Ischemia</span><span>Reperfusion</span><span>Protection</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>An artery closes.</h2><p>In a heart attack a coronary artery is blocked, and the muscle it feeds is starved of oxygen. The longer the blockage lasts, the more of that territory is at risk.</p></article>'+
     '<article class="step"><h2>Flow is restored, and injures.</h2><p>Reopening the artery is essential, but the returning oxygen sets off a burst of free radicals, signalled in part by protein kinase C, that kills cells which had survived the blockage itself.</p></article>'+
     '<article class="step"><h2>The inhibitor arrives with the flow.</h2><p>Given as blood returns, a targeted PKC inhibitor is designed to damp that burst. In the company’s pig studies, the aim is a smaller infarct and a heart that keeps more of its function.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">One enzyme family, <em>one moment.</em></h2></div><p data-r>Dr Lindon Young’s laboratory found small molecules that inhibit forms of protein kinase C, the enzyme that leads to the generation of oxygen free radicals at reperfusion. Young Therapeutics was founded to develop them.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From the heart <em>to the kidney.</em></h2></div><p data-r>Three NIH-funded compounds. YT-002 and YT-004 are in SBIR Phase II development for myocardial infarction, with porcine studies toward an IND; YT-001 was taken through Phase I in kidney ischemia–reperfusion.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Born in a <em>Philadelphia lab.</em></h2></div><p data-r>A spinout of research at the Philadelphia College of Osteopathic Medicine, led by its chief executive and run with the investigators on its NIH awards.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Where</span><p data-r>Philadelphia, Pennsylvania, with its research roots at the Philadelphia College of Osteopathic Medicine.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>Small Business Innovation Research awards from the National Institutes of Health: NHLBI and NIDDK.</p></div>'+
    '<div><span class="lab kick" data-r>Protected</span><p data-r>A patent, awarded to Dr Young in 2016, for a PKC epsilon peptide inhibitor solution against reperfusion injury.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards <em>and milestones.</em></h2></div><p data-r>The company’s grant record and the work behind it.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and investment</span>'+
   '<h2 class="big split">Talk to <em>Young Therapeutics.</em></h2>'+
   '<p class="sub" data-r>Cardiologists, transplant surgeons, partners and investors: the company is glad to hear from you as YT-002 and YT-004 move toward the clinic.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email the CEO '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Registered office</span><p data-r>Young Therapeutics, LLC<br>1715 Stanwood Street<br>Philadelphia, PA 19152</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18457053517">(845) 705-3517</a></p></div>'+
    '<div><span class="lab" data-r>Lead programme</span><p data-r><a class="ul" href="'+RP+'11310186" target="_blank" rel="noopener">YT-002 and YT-004 on NIH RePORTER</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Philadelphia, PA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Ischemia–reperfusion injury<br>Heart and kidney</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Source Serif 4\',Georgia,serif;font-weight:400;font-size:64px;letter-spacing:-.01em">Young</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Young Therapeutics, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",technology:"science",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Young Therapeutics — Preventing ischemia–reperfusion injury, Philadelphia, PA",x:"Home"};
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
