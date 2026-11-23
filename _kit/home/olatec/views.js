/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Oral, not injected","Dapansutrile&#8217;s specific inhibition of the NLRP3 inflammasome is an oral alternative, and potentially a safer option, to biologic agents that neutralize processed IL-1&#946; and IL-18.",'<rect x="12" y="20" width="32" height="16" rx="8"/><path d="M28 20v16"/><circle class="f" cx="20" cy="28" r="2.4"/>'],
  ["Specific to NLRP3","Acting at the inflammasome rather than the IL-1 receptor, dapansutrile spares other inflammasomes (NLRP1, NLRC4 and AIM2) that are critical to immune surveillance.",'<circle cx="28" cy="28" r="17"/><circle cx="28" cy="28" r="7"/><path class="a" d="M28 4v10M28 42v10"/>'],
  ["A clean safety profile","To date, selective inhibition of NLRP3 by dapansutrile has not shown the immunosuppressive side effects and infection risk seen with certain anti-cytokine biologics.",'<path d="M28 7l17 6v13c0 11-7 19-17 23-10-4-17-12-17-23V13z"/><path class="a" d="M20 28l6 6 11-12"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Completed trials</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From olatec.com. OLT1177&#174; is the pharmaceutical grade of dapansutrile and a registered trademark of Olatec Therapeutics.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Dapansutrile<span class="nomob"> · OLT1177&#174;</span> · NLRP3</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Calming</span><span class="l">inflammation</span><span class="l"><em>at its source.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Olatec is developing dapansutrile, a specific oral NLRP3 inhibitor, in clinical trials in gout, advanced melanoma, type 2 diabetes and Parkinson&#8217;s disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our trials</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why NLRP3</span>'+
   '<h2 class="txt" id="mani">When IL-1&#946; is dysregulated it drives disease, from gout and heart failure to diabetes and Alzheimer&#8217;s. NLRP3, the body&#8217;s first-line sensor in the innate immune system, sits upstream of it. <em>Block the sensor, and the fire never starts.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><p class="k">Clinical trials of dapansutrile completed to date</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">Ongoing trials, in rheumatology, oncology, cardiometabolic disease and neurology</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">180+</span><p class="k">Patents and patent applications worldwide protecting the platform</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Stop the alarm <em>before it sounds.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sense</span><span>Assemble</span><span>Inhibit</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>NLRP3 senses danger.</h2><p>NLRP3 resides within cells and senses perturbations of cell homeostasis and intracellular danger, such as the urate crystals of a gout flare or cellular stress.</p></article>'+
     '<article class="step"><h2>The inflammasome assembles.</h2><p>Activated NLRP3 recruits ASC and pro-caspase-1 into the inflammasome. Active caspase-1 cleaves IL-1&#946; and IL-18 into their bioactive forms, and a cascade of inflammation follows.</p></article>'+
     '<article class="step"><h2>Dapansutrile binds NLRP3.</h2><p>By specific binding to NLRP3, dapansutrile prevents the formation of the inflammasome, which in turn inhibits the production of IL-1&#946; and IL-18.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">A new class of <em>anti-inflammatory.</em></h2></div><p data-r>Dapansutrile, a &#946;-sulfonyl nitrile compound, is a leader in the NLRP3 antagonist class. Olatec&#8217;s platform also includes more than 40 structurally related compounds, the OLT Analogues, for inflammatory diseases known to be mediated by IL-1.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Trials</span><h2 class="d2 split">One oral molecule, <em>four diseases.</em></h2></div><p data-r>Dapansutrile is in clinical development in the US and Europe across rheumatologic, oncologic, cardiometabolic and neurologic disease, supported by a favorable safety and tolerability profile across preclinical studies and clinical trials.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Leaders in <em>inflammation.</em></h2></div><p data-r>Olatec&#8217;s drug development team has worked together for over ten years, with key opinion leaders who were involved in first-line treatments in the NSAID and biologic classes, and scientific and clinical advisory boards in the US and Europe.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Olatec.</em></h2></div><p data-r>Releases on our clinical programmes, research and leadership.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investigators and investors</span>'+
   '<h2 class="big split">Talk to <em>Olatec.</em></h2>'+
   '<p class="sub" data-r>Write to us about partnering, clinical research or investment. Researchers interested in OLT1177&#174; for preclinical work can request it from Olatec directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Olatec '+ARR+'</a><a class="btn" href="#/pipeline">See the trials</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Offices</span><p data-r>Olatec Therapeutics, Inc.<br>Greater New York area<br>and the Netherlands</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">inquiries@olatec.com</a></p></div>'+
    '<div><span class="lab" data-r>OLT1177&#174;</span><p data-r>OLT1177&#174; is the pharmaceutical grade of dapansutrile. Olatec does not authorize other parties to sell OLT1177&#174; for research.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Offices</span>Greater New York area<br>The Netherlands</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">inquiries@olatec.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Science</a><br><a class="ul" href="#/pipeline">Trials</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead compound</span>Dapansutrile · OLT1177&#174;</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Sora\',sans-serif;font-weight:500;font-size:84px;letter-spacing:.18em">OLATEC</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Olatec Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Olatec Therapeutics — oral NLRP3 inhibitors for inflammatory disease",x:"Home"};
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
