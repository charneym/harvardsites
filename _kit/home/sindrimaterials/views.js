/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><a class="lab lk" href="'+c[6]+'" target="_blank" rel="noopener">'+esc(c[5])+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Ultra-clean support layer","Clean, damage-free monolayer graphene with the lowest levels of contamination, for clear, unobstructed protein imaging.",'<path d="M28 6l19 11v22L28 50 9 39V17z"/><path class="a" d="M28 17l9.5 5.5v11L28 39l-9.5-5.5v-11z"/>'],
  ["Stable molecular environment","A continuous graphene support helps keep particles from clumping and aggregating, so more of each grid is usable.",'<circle cx="28" cy="28" r="20"/><circle class="f" cx="20" cy="22" r="3"/><circle class="f" cx="34" cy="20" r="3"/><circle class="f" cx="25" cy="35" r="3"/><circle class="f" cx="37" cy="33" r="3"/>'],
  ["The same grid in every box","Extremely high quality-control thresholds, with every lot inspected by SEM, so a box of Sindri grids performs like the last one.",'<rect x="8" y="14" width="40" height="30"/><path d="M8 24h40M8 34h40M21 14v30M35 14v30"/><path class="a" d="M17 50l6 4 14-12"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function sems(){var S=[
  ["sem30.webp","30×","Full grid coverage","At 30× magnification, full grid coverage, intact windows, and large-scale cleanliness and continuity are visible.",570,521],
  ["sem500.webp","500×","Intact membranes, window after window","At 500× magnification, widespread intact graphene membranes are visible.",863,572],
  ["sem5000.webp","5,000×","Clean suspended graphene","At 5,000× magnification, the clean graphene membranes suspended across the holey carbon are visible.",862,571]];
  return '<div class="sems">'+S.map(function(m){return '<figure class="sem"><div class="semi"><img src="'+m[0]+'" alt="Scanning electron micrograph of a Sindri graphene grid at '+m[1]+'" width="'+m[4]+'" height="'+m[5]+'" loading="lazy" decoding="async"></div>'+
   '<figcaption><span class="lab mg" data-r>'+m[1]+'</span><h3 data-r>'+esc(m[2])+'</h3><p data-r>'+esc(m[3])+'</p></figcaption></figure>'}).join("")+'</div>'+
   '<p class="note-s sem-n" data-r>Scanning electron micrographs of Sindri graphene on holey carbon over gold, from sindrimaterials.com.</p>'}
function backers(){return '<div class="bk light-bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r><span>NIH · NIGMS SBIR</span><i>·</i><span>Delaware Division of Small Business</span><i>·</i><span>The Innovation Space</span><i>·</i><span>Delaware Bioscience CAT</span><i>·</i><span>Singh Center for Nanotechnology, Penn</span></p></div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Every<br>lot</span><div><dl>'+
  [["Graphene","Continuous monolayer graphene, synthesized in-house; over 99% monolayer, free from add-on layers"],
   ["Support","R1.2/1.3 holey carbon film on 300-mesh gold or copper grids"],
   ["Inspection","SEM quality control of every production lot for suspended-membrane integrity, coverage and cleanliness"],
   ["Acceptance","Greater than 95% average intact suspended membranes across inspected grid holes"]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Specifications from sindrimaterials.com. Grids are offered in Limited Early Access; pricing and pack sizes as listed in November 2026.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Graphene cryo-EM grids<span class="nomob"> · Monolayer graphene</span> · Wilmington, Delaware</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Better graphene.</span><span class="l"><em>Better grids.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Sindri Materials makes its own ultra-high-quality monolayer graphene and carries it onto cryo-EM grids, so every box holds clean, continuous, suspended membranes.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/process">How the grids are made '+ARR+'</a><a class="btn" href="#/grids">The grids</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why graphene</span>'+
   '<h2 class="txt" id="mani">Cryo-EM can see molecules at near-atomic resolution, yet poor-quality sample grids have held it back. Sindri builds the grid from graphene <em>made for the job.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt;95%</span><p class="k">Intact suspended membranes: the acceptance bar for every production lot</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt;97%</span><p class="k">Average membrane yield across hundreds of grids, in an October 2026 quality-control snapshot</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt;99%</span><p class="k">Monolayer graphene, free from add-on layers</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">From graphene to grid</span><h2 class="d3">Quality made, then <em>kept.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Grow</span><span>Transfer</span><span>Inspect</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Grow: graphene made in-house.</h2><p>Sindri designed and built its own graphene production, for clean, damage-free, continuous monolayer graphene. That quality is the first step.</p></article>'+
     '<article class="step"><h2>Transfer: onto the grid, intact.</h2><p>Proprietary processes lay the sheet across R1.2/1.3 holey carbon on a 300-mesh grid and preserve it, so the graphene arrives as clean and continuous as it was grown.</p></article>'+
     '<article class="step"><h2>Inspect: every lot, under the SEM.</h2><p>Each production lot is checked by scanning electron microscopy, from the whole grid down to single holes, for membrane integrity, coverage and cleanliness.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Graphene grids, <em>made by graphene experts.</em></h2></div><p data-r>Commercial graphene often carries defects, contamination and damage. Sindri’s proprietary production method was built for atomic cleanliness and reproducibility at scale, with cryo-EM as its first application.</p></div>'+
   caps()+
   '<span class="lab sub-l pr" data-r>Quality you can see</span>'+
   sems()+
   backers()+
  '</div></section>'+

  '<section class="sec dark2" id="grids" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Grids</span><h2 class="d2 split">Two supports, <em>one graphene.</em></h2></div><p data-r>Sindri Graphene Grids are open to researchers in Limited Early Access, now in packs of 5, 10 and 20 for larger experiments and repeat use.</p></div>'+
   devRows(DEV)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">From synthesis <em>to application.</em></h2></div><p data-r>Sindri brings together graphene research, materials characterization, manufacturing systems, engineering and commercial operations, to preserve an atomically thin material through every stage of production.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Milestones, <em>one at a time.</em></h2></div><p data-r>The latest from Sindri, from early access for the grids to recognition across Delaware and Philadelphia.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Cryo-EM labs and facilities</span>'+
   '<h2 class="big split">Discuss your <em>application.</em></h2>'+
   '<p class="sub" data-r>Have a question about graphene grids, product specifications or the requirements of your research? Talk with the Sindri team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Sindri '+ARR+'</a><a class="btn" href="#/grids">The grids</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Home</span><p data-r>The Innovation Space<br>Wilmington, Delaware</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Shop</span><p data-r><a class="ul" href="'+SHOP+'" target="_blank" rel="noopener">Graphene cryo-EM grids</a><br><a class="ul" href="'+NWS+'" target="_blank" rel="noopener">News and updates</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Home</span>The Innovation Space<br>Wilmington, Delaware</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/grids">Grids</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>Graphene cryo-EM grids · Monolayer graphene on holey carbon, gold and copper</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="62" text-anchor="middle" style="font-family:\'Krona One\',Arial,sans-serif;font-weight:400;font-size:64px">SINDRI</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Sindri Materials Corp.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",process:"story",grids:"grids",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Sindri Materials — Graphene cryo-EM grids, made by graphene experts",x:"Home"};
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
