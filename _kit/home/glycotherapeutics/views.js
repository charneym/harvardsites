/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[4]?' class="dim"':'')+'><span class="lab tg"><b'+(c[4]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3></div>'+
   '<p>'+c[3]+'</p><span class="lab lk'+(c[4]?'':' av')+'">'+esc(c[5])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><a class="mh-row" href="'+p.url+'" target="_blank" rel="noopener"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum lab">Profile '+ARR+'</span><span></span></a></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Sugar-coated tumours","Many cancer cells carry elevated levels of two sugars, sialic acid and fucose, on the glycans that coat their surface.",'<circle cx="28" cy="28" r="15"/><path d="M28 13V7M38.6 17.4l4.2-4.2M43 28h6M38.6 38.6l4.2 4.2M28 43v6M17.4 38.6l-4.2 4.2M13 28H7M17.4 17.4l-4.2-4.2"/><path class="f" d="M28 2.5l2.5 2.5-2.5 2.5-2.5-2.5zM45.2 10.8l2.5 2.5-2.5 2.5-2.5-2.5zM51.5 28l2.5 2.5-2.5 2.5-2.5-2.5zM28 48.5l2.5 2.5-2.5 2.5-2.5-2.5zM4.5 28l2.5 2.5-2.5 2.5-2.5-2.5z"/>'],
  ["A brake on immunity","These glycans are responsible for immune evasion, part of the reason fewer than half of people with cancer who receive immunotherapy obtain a durable response.",'<circle cx="16" cy="28" r="11"/><circle cx="44" cy="28" r="9"/><path class="a" d="M30 22v12M34 22v12"/>'],
  ["Disrupt the glycans","GlycoTherapeutics&#8217; proprietary solution targets these processes, blocking production of the sugars so the immune system can act on the tumour again.",'<circle cx="28" cy="28" r="15"/><path d="M28 13V7M43 28h6M28 43v6M13 28H7"/><path class="a" d="M10 46L46 10"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function backers(){return '<div class="bk"><span class="lab kick" data-r>Funding and partners</span><p class="cr" data-r><span>NWO Take-off, Phase 1 and 2</span><i>·</i><span>Oost NL</span><i>·</i><span>Vroegefasefinanciering Gelderland</span><i>·</i><span>KWF public&#8211;private partnership</span><i>·</i><span>Radboud University and Radboudumc</span></p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[3])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Cancer immunotherapy<span class="nomob"> · Radboud University spin-off</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Strip the sugar,</span><span class="l"><em>expose the tumour.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>GlycoTherapeutics develops drugs that disrupt the glycans tumours use to evade the immune system, so that immunotherapy can work for more people with cancer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">The science '+ARR+'</a><a class="btn" href="#/approach">Our approach</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Glycobiology in oncology</span>'+
   '<h2 class="txt" id="mani">Immunotherapy has changed cancer care, but most patients do not obtain a durable response. <em>Part of the reason is sugar.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;50%</span><p class="k">Of people with cancer receiving immunotherapy obtain a durable response</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10+ yrs</span><p class="k">Of glycobiology research behind the company&#8217;s proprietary solution</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2022</span><p class="k">Founded as a spin-off from Radboud University, Nijmegen</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">At the tumour surface</span><h2 class="d3">How tumours hide <em>behind sugar.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Coated</span><span>Hidden</span><span>Blocked</span><span>Exposed</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A coat of sugar.</h2><p>Every cell is covered in glycans, chains of sugars. Many cancer cells carry elevated levels of sialic acid and fucose at the tips of these chains.</p></article>'+
     '<article class="step"><h2>Hidden from immunity.</h2><p>These glycans are responsible for immune evasion: they suppress the immune system, so immune cells that reach the tumour are held back from attacking it.</p></article>'+
     '<article class="step"><h2>Production blocked.</h2><p>GlycoTherapeutics&#8217; drug blocks the production of sialic acid and fucose sugars, so the tumour can no longer cap its glycans with them.</p></article>'+
     '<article class="step"><h2>Exposed, and attacked.</h2><p>Without its sugar shield, the tumour is open to the immune system again. The company expects to combine these drugs with immunotherapy or chemotherapy.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Targeting the glycans <em>behind immune evasion.</em></h2></div><p data-r>Based on over a decade of research, GlycoTherapeutics targets the glycobiology processes that suppress the immune system, by disrupting the interaction of the glycans (sugars) responsible for immune evasion.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="approach" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Approach</span><h2 class="d2 split">From proof of concept <em>to combination.</em></h2></div><p data-r>The aim is to overcome the efficacy limitations of current cancer immunotherapies. Development starts with preclinical proof of concept, then moves to combinations with the treatments patients already receive.</p></div>'+
   pipeRows(PIPE)+
   backers()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded by <em>glycobiologists.</em></h2></div><p data-r>A founding team from Radboud University, Nijmegen, covering preclinical development, medicinal chemistry and business development, with two scientific advisors.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>GlycoTherapeutics.</em></h2></div><p data-r>Financing, awards and coverage since the company was founded in 2022, including more than &#8364;1.5 million in non-dilutive funding.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, pharma and collaborators</span>'+
   '<h2 class="big split">Join the <em>mission.</em></h2>'+
   '<p class="sub" data-r>We connect with life science venture capitalists, are open to research and licensing discussions with pharma, and welcome collaboration on glycobiology in oncology.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/approach">See the approach</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r>Nijmegen<br>the Netherlands</p></div>'+
    '<div><span class="lab" data-r>Spin-off from</span><p data-r>Radboud University<br>Nijmegen</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+MAIL+'">johan.pijnenborg@<wbr>glycotherapeutics.eu</a><br><a class="ul" href="tel:+31653182635">+31 6 5318 2635</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Nijmegen<br>the Netherlands</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">Email the CEO</a><br><a class="ul" href="'+LI+'company/glycotherapeutics/" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Origin</span>Radboud University spin-off, 2022</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Ubuntu\',sans-serif;font-weight:500;font-size:60px">GLYCOTHERAPEUTICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 GlycoTherapeutics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",story:"story",approach:"approach",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"GlycoTherapeutics — glycan-targeted cancer immunotherapy",x:"Home"};
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
