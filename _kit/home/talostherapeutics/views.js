/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Glia","Quiet the inflammation","In the Alzheimer's brain, glial cells sustain an inflammatory state that precedes cognitive decline. CK2 is a promising target for blocking that inflammation in glia, at its source.",'<path d="M28 21v-12M28 35v12M21 28H9M35 28h12M23 23l-8-8M33 33l8 8M33 23l8-8M23 33l-8 8"/><circle cx="28" cy="28" r="7"/><circle class="f" cx="28" cy="28" r="2.6"/><path class="a" d="M9 9l-3-3M47 47l3 3M47 9l3-3M9 47l-3 3"/>'],
  ["Neurons","Restore the energy","Abnormal metabolic activity is one of the processes that lead to neuronal death and defects in brain function. Inhibiting CK2 is a way to boost mitochondrial function in neurons.",'<ellipse cx="28" cy="28" rx="20" ry="10"/><path class="a" d="M12 28c3-6 5 6 8 0s5 6 8 0 5 6 8 0 5 6 8 0"/><circle class="f" cx="28" cy="28" r="2.2"/>'],
  ["Brain-permeable","Reach the brain","A CNS drug has to cross the blood–brain barrier. Talos designs CK2 inhibitors to do exactly that, and is now optimising them for oral dosing, brain exposure, selectivity and safety.",'<path d="M6 18h44M6 38h44"/><path class="a" d="M28 6v44M22 44l6 6 6-6"/><path d="M14 18v20M42 18v20" stroke-dasharray="2 4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function path(){return '<ol class="tpath">'+PATH.map(function(s,i){var st=/^Done/.test(s[1])?"dn":/^Now/.test(s[1])?"nw":"nx";
  return '<li class="'+st+'"><span class="tpath-n lab">0'+(i+1)+'</span><span class="tpath-s lab">'+esc(s[1])+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[2])+'</p></li>'}).join("")+'</ol>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The Phase I award</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>NIH National Institute on Aging, SBIR Phase I 1R43AG099398-01, “Optimization of brain-permeable CK2 inhibitors to inhibit neuroinflammation and metabolic dysfunction in Alzheimer’s disease”, Talos Therapeutics, Inc., from September 2026. Preclinical.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>CK2 inhibitors<span class="nomob"> · Alzheimer’s disease</span> · San Diego, CA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Confront the world’s</span><span class="l">most challenging</span><span class="l"><em>diseases.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Talos Therapeutics designs brain-permeable CK2 inhibitors to quiet neuroinflammation and restore metabolic function in Alzheimer’s disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">The science '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why CK2</span>'+
   '<h2 class="txt" id="mani">Inflammation, proteinopathy and abnormal metabolism drive Alzheimer’s disease, and all three begin before memory fails. Talos targets CK2, a kinase that sits at two of them: <em>inflammation in glia, energy in neurons.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$497K</span><span class="k">NIH National Institute on Aging SBIR Phase I award, September 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3 weeks</span><span class="k">Of daily treatment to show in vivo proof of concept in an Alzheimer’s mouse model</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Two</span><span class="k">Cell types reached by one target: inflamed glia and energy-starved neurons</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">One kinase, <em>two cells.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Disease</span><span>Target</span><span>Inhibitor</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Before memory fails.</h2><p>Inflammation, proteinopathy and abnormal metabolic activity shape how Alzheimer’s disease starts and how severe it becomes. These connected processes come before cognitive decline, and lead to neuronal death and defects in brain function.</p></article>'+
     '<article class="step"><h2>CK2 sits in both cells.</h2><p>In glia, the kinase CK2 is a promising target for blocking inflammation. In neurons, inhibiting it is a way to boost mitochondrial function. One target reaches two of the processes behind the disease.</p></article>'+
     '<article class="step"><h2>A molecule that gets in.</h2><p>Talos designed a brain-permeable CK2 inhibitor that crosses into the brain, is well tolerated, and showed proof-of-concept efficacy in an Alzheimer’s mouse model after three weeks of daily treatment.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">One target, <em>three jobs.</em></h2></div><p data-r>CK2 is a protein kinase. Talos inhibits it in the brain to block inflammation in glia and to improve bioenergetics in neurons, with small molecules designed to cross the blood–brain barrier.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From proof of concept <em>to a lead.</em></h2></div><p data-r>One programme in Alzheimer’s disease, funded by the National Institute on Aging: a brain-permeable CK2 inhibitor with in vivo proof of concept, now being optimised into an orally bioavailable lead.</p></div>'+
   pipeRows(PIPE)+
   path()+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Neuroscience, <em>made into medicine.</em></h2></div><p data-r>Talos is a San Diego company working where neuroimmunology meets medicinal chemistry: kinase inhibitors designed for the brain.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Where</span><p data-r>San Diego, California, where the company is incorporated as Talos Therapeutics, Inc.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>Small Business Innovation Research award from the NIH National Institute on Aging.</p></div>'+
    '<div><span class="lab kick" data-r>Mission</span><p data-r>Confront the world’s most challenging diseases, starting with Alzheimer’s.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards <em>and reading.</em></h2></div><p data-r>Talos’s grant record, and independent published work on the role of CK2 in brain inflammation.</p></div>'+
   news()+
   '<span class="lab sub-l pr" data-r>Further reading</span>'+
   '<ul class="nws"><li><a href="'+PREPRINT+'" target="_blank" rel="noopener"><span class="lab dt">August 2025</span><h3>“CK2 inhibition suppresses glial inflammation in the brain”: Gage, Allen and colleagues, Salk Institute</h3><span class="lab src">bioRxiv preprint '+ARR+'</span></a></li></ul>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and investment</span>'+
   '<h2 class="big split">Talk to <em>Talos.</em></h2>'+
   '<p class="sub" data-r>Neuroinflammation, kinase chemistry or Alzheimer’s drug development: Talos is glad to hear from scientists, partners and investors as its CK2 programme moves toward a lead.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+FORM+'" target="_blank" rel="noopener">Contact Talos '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Talos Therapeutics, Inc.<br>San Diego, CA 92126</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">talostherapeutics.com/contact</a></p></div>'+
    '<div><span class="lab" data-r>Current award</span><p data-r><a class="ul" href="'+AWARD+'" target="_blank" rel="noopener">NIH RePORTER</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>San Diego, CA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Brain-permeable CK2 inhibitors<br>Alzheimer’s disease</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Source Serif 4\',Georgia,serif;font-weight:600;font-size:62px;letter-spacing:.08em">TALOS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Talos Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",technology:"science",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Talos Therapeutics — Brain-permeable CK2 inhibitors for Alzheimer's disease, San Diego, CA",x:"Home"};
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
