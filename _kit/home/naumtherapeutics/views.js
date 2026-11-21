/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function newsUnused(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Start at the synapse","In Alzheimer’s disease, amyloid-driven synaptic weakening and loss come first, in a long prodromal phase before irreversible neurodegeneration. Naum’s programme is aimed at that phase: protecting and restoring synaptic function by blunting the toxic effects of amyloid beta.",'<path d="M10 44c8-3 28-3 36 0"/><path d="M24.5 42V31M31.5 42V31"/><ellipse class="a" cx="28" cy="24" rx="11" ry="8"/><path d="M16 11c3.6-4 7.6-6 12-6s8.4 2 12 6"/><circle class="f" cx="28" cy="16.6" r="2.2"/>'],
  ["A receptor that amyloid hijacks","The target is a neuronal and synaptic protein that normally regulates synaptic weakening and pruning as the developing brain wires itself. In Alzheimer’s it is a high-affinity receptor for oligomeric Aβ42, and the binding turns a normal plasticity mechanism into a driver of synapse loss.",'<path d="M28 46V30M28 30l-8-9M28 30l8-9"/><circle class="a" cx="17" cy="15" r="3.6"/><circle class="a" cx="23" cy="10" r="3.6"/><circle class="a" cx="20" cy="5.4" r="3"/><circle class="f" cx="38" cy="16" r="3"/>'],
  ["Small molecules to block it","Proof-of-concept studies have shown the target can be drugged with small molecules, and in animal models blocking it preserved synaptic strengthening and restored cognitive function to normal levels. Naum is building the discovery pipeline to find candidates.",'<path d="M28 8l15.6 9v18L28 44l-15.6-9V17z"/><path class="a" d="M28 18l6.9 4v8L28 34l-6.9-4v-8z"/><circle class="f" cx="28" cy="26" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The science, as funded</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From the project abstract of NIH award 1R43AG099483-01A1, “First-in-class drug to protect and regrow synapses in the presence of amyloid beta”, National Institute on Aging, SBIR Phase I, September 2026. Animal-model and proof-of-concept results as the abstract reports them.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r><span class="nomob">Small-molecule </span>drug discovery<span class="nomob"> · Alzheimer’s disease</span> · Cupertino, CA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Protect the</span><span class="l">synapse, and</span><span class="l"><em>let it regrow.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Naum Therapeutics is developing a first-in-class drug that shields synapses from amyloid beta, intervening at the top of the cascade that leads to neurodegeneration in Alzheimer’s disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">The science '+ARR+'</a><a class="btn" href="#/programme">See the programme</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Amyloid beta weakens synapses long before neurons are lost. Approved treatments reduce the amyloid burden, but bring only modest functional recovery. Naum goes after <em>what amyloid does to the synapse.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">65%</span><span class="k">Of dementia cases are caused by Alzheimer’s disease, among the top ten causes of death in the U.S. and worldwide</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">22 yrs</span><span class="k">Of Aβ42 build-up before symptoms begin in familial Alzheimer’s, a long window of synaptic weakening</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$537K</span><span class="k">NIH National Institute on Aging SBIR Phase I award to Naum, September 2026</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the approach works</span><h2 class="d3">Where amyloid meets <em>the synapse.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Synapse</span><span>Hijack</span><span>Protection</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A synapse that can learn.</h2><p>Synapses strengthen and weaken with activity, and both are essential for learning and memory. Naum’s target normally regulates the weakening and pruning of synapses while the developing brain wires itself.</p></article>'+
     '<article class="step"><h2>Amyloid takes over the switch.</h2><p>Oligomeric Aβ42 binds the target with high affinity. The binding hijacks normal plasticity: synapses weaken too much and are eventually lost, ahead of irreversible neurodegeneration.</p></article>'+
     '<article class="step"><h2>Block the receptor, keep the synapse.</h2><p>A small molecule that blocks the target is designed to shield synapses from Aβ42. In animal models, blocking the target preserved synaptic strengthening and restored cognitive function to normal levels.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Stop the damage <em>at the top.</em></h2></div><p data-r>Rather than clearing amyloid, Naum intervenes where it does its first harm: at a synaptic receptor that amyloid hijacks. A drug there would act at the top of the amyloid-driven neurodegenerative cascade and could modify the course of the disease.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="programme" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programme</span><h2 class="d2 split">A first-in-class <em>synapse drug.</em></h2></div><p data-r>One programme, funded by the National Institute on Aging: a small-molecule therapy that preserves and rebuilds synaptic networks, so that patients can keep their cognitive function and independence despite amyloid pathology.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Synapse biology, <em>in Cupertino.</em></h2></div><p data-r>Naum Therapeutics is an early-stage company in Cupertino, California, built around the synaptic biology of Alzheimer’s disease and funded through the NIH’s small business research programme.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Where</span><p data-r>Cupertino, California, in Silicon Valley.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>A Small Business Innovation Research award from the NIH National Institute on Aging, running to November 2027.</p></div>'+
    '<div><span class="lab kick" data-r>Focus</span><p data-r>Alzheimer’s disease: protecting and restoring synaptic function in the presence of amyloid beta.</p></div>'+
   '</div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and investment</span>'+
   '<h2 class="big split">Talk to <em>Naum.</em></h2>'+
   '<p class="sub" data-r>Synapse biology, Alzheimer’s drug discovery or a programme of your own: Naum is glad to hear from scientists, clinicians, partners and investors as the discovery pipeline gets under way.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+AWARD+'" target="_blank" rel="noopener">The NIH award '+ARR+'</a><a class="btn" href="#/science">The science</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Naum Therapeutics Inc.<br>Cupertino, CA 95014</p></div>'+
    '<div><span class="lab" data-r>Web</span><p data-r><a class="ul" href="'+SITEURL+'" target="_blank" rel="noopener">naumtherapeutics.com</a></p></div>'+
    '<div><span class="lab" data-r>Programme</span><p data-r><a class="ul" href="'+AWARD+'" target="_blank" rel="noopener">NIH RePORTER</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Cupertino, CA</div>'+
   '<div class="c"><span class="lab">Funding</span>NIH · National Institute on Aging</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/programme">Programme</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Synapse protection<br>Alzheimer’s disease</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Fraunces\',Georgia,serif;font-weight:400;font-size:64px;letter-spacing:-.01em">naum</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Naum Therapeutics Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",programme:"programme",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Naum Therapeutics — small molecules to protect and regrow synapses in Alzheimer’s disease, Cupertino, CA",x:"Home"};
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
