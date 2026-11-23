/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row ns"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Precise targeting","KT501 binds CD19 and BCMA to reach a wide spectrum of B-cell populations, including plasma cells; KT209 co-engages CD19 and CD20, so B cells cannot escape by losing one antigen.",'<circle cx="28" cy="28" r="17"/><circle cx="28" cy="28" r="9"/><path d="M28 4v8M28 44v8M4 28h8M44 28h8"/><circle class="f" cx="28" cy="28" r="3"/>'],
  ["Controlled cytotoxicity","A proprietary CD3 masking design aims to decouple potent B-cell killing from systemic cytokine release, for a wider therapeutic window than first-generation T-cell engagers.",'<path d="M28 7l17 6v13c0 11-7 19-17 23-10-4-17-12-17-23V13z"/><path class="a" d="M20 28l6 6 11-12"/>'],
  ["An immune reset","Deep B-cell depletion in tissue and the periphery, as a potential immune reset for B cell&#8211;mediated autoimmune disease: more than another chronic therapy.",'<path d="M44 22a17 17 0 1 0 1 10"/><path class="a" d="M46 12v11H35"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From Kali Therapeutics&#8217; releases, May to September 2026. KT209 potency figures are preclinical.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>T-cell engagers<span class="nomob"> · Autoimmune disease</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Reset the immune</span><span class="l">system. <em>Restore health.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Kali Therapeutics leverages T-cell engagers with precise targeting and controlled cytotoxicity to enable a transformative immune system reset and regeneration.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why Kali</span>'+
   '<h2 class="txt" id="mani">Kali, the Hindu goddess, embodies fierce power, destruction and transformation: the cycle of creation and rebirth. <em>We bring the potency of T-cell engagers to autoimmune disease, without the toxicity.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Molecules in the clinic, a little over two years after Kali was founded in July 2024</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$180M</span><p class="k">Upfront and near-term in the worldwide KT501 license to Sanofi, with up to $1.05 billion in milestones</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1,000&#215;</span><p class="k">Up to 1,000-fold greater potency of KT209 against B-cell lymphoma lines than approved engagers, in preclinical studies</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">One antibody, <em>two cells.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Target</span><span>Engage</span><span>Reset</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Find the B cells.</h2><p>Kali&#8217;s engagers bind CD19, with BCMA or CD20, to reach a broad range of B-cell populations, the cells that drive B cell&#8211;mediated autoimmune disease.</p></article>'+
     '<article class="step"><h2>Bring in a T cell.</h2><p>The other arm engages CD3 on the patient&#8217;s own T cells, redirecting them to the B cell. A proprietary masking design tempers that engagement.</p></article>'+
     '<article class="step"><h2>Deplete, with less cytokine.</h2><p>The T cell kills the B cell. In non-human primates, B cells were deeply depleted with only low and transitory cytokine release: the basis for an immune reset.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A masked CD3 <em>platform.</em></h2></div><p data-r>Kali&#8217;s multi-specific T-cell engagers pair precise B-cell targeting with a CD3 masking design intended to maximize potency and limit cytokine release, positioning them for deep B-cell depletion with an improved safety margin.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Three engagers, <em>one platform.</em></h2></div><p data-r>Two programs for B cell&#8211;mediated autoimmune disease and one for B-cell malignancies, all built on the same CD3 masking platform. KT501 is licensed worldwide to Sanofi.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineers of <em>T-cell engagers.</em></h2></div><p data-r>Founded in July 2024 by Weihao Xu, PhD, with cofounders John Wang, Jay Zhao and Min Bao, MD, and a team across clinical development, CMC, regulatory, pharmacology and translational medicine.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Kali.</em></h2></div><p data-r>Press releases on our programs, scientific presentations and regulatory milestones.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Talk to <em>Kali.</em></h2>'+
   '<p class="sub" data-r>Reach out with inquiries about our technologies, collaborations, or any questions about our fast-to-clinic approach.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Kali '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Kali Therapeutics, Inc.<br>400 Concar Dr., San Mateo,<br>California 94402, USA</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@kalitherapeutics.com</a></p></div>'+
    '<div><span class="lab" data-r>Media</span><p data-r><a class="ul" href="mailto:media@kalitherapeutics.com">media@kalitherapeutics.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>400 Concar Dr.<br>San Mateo, CA 94402</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@kalitherapeutics.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Programs</span>KT501 · KT502 · KT209</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Enriqueta\',serif;font-weight:500;font-size:70px">Kali Therapeutics</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Kali Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Kali Therapeutics — T-cell engagers for an immune reset",x:"Home"};
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
