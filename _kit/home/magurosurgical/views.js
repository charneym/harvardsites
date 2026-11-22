/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Complete stone removal","MagStone coats kidney stone fragments with magnetic polymer to simplify stone removal, delivering complete stone removal with fewer passes, faster procedures, and less trauma.",'<path d="M14 40V24a14 14 0 0 1 28 0v16"/><path class="a" d="M14 40h8M34 40h8"/><circle class="f" cx="28" cy="13" r="2.6"/><circle class="f" cx="20" cy="9" r="1.8"/><circle class="f" cx="36" cy="10" r="2"/>'],
  ["Streamlined performance","MagStone offers complete stone fragment removal for any size stone and integrates seamlessly with existing workflows and equipment.",'<path d="M6 40h30"/><path d="M36 40q8 0 10-10"/><circle class="f" cx="46.5" cy="27" r="3"/><path class="a" d="M10 34h20M10 46h20"/>'],
  ["Equalizes surgery","MagStone’s innovative approach unlocks better outcomes for every patient: the fragments a basket cannot catch are pulled out on the wire.",'<path d="M8 22h40M8 34h40"/><path class="a" d="M28 10v36"/><circle class="f" cx="16" cy="22" r="2.6"/><circle class="f" cx="40" cy="34" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Medtech<span class="nomob"> · Kidney stone surgery</span> · Mountain View, CA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Redefining</span><span class="l"><em>kidney stone</em></span><span class="l">removal.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Founded by urologists frustrated with existing tools. MagStone coats kidney stone fragments with a magnetic hydrogel, then lifts them out on a magnetic wire: fewer passes, faster procedures, less trauma.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How MagStone works '+ARR+'</a><a class="btn" href="#/team">Our team</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The problem</span>'+
   '<h2 class="txt" id="mani">Laser lithotripsy leaves a kidney stone in fragments, often hundreds of them. A wire basket takes them one at a time, and the smallest slip through to re-obstruct or grow again. MagStone makes the fragments magnetic, <em>so they come out together.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">400K+</span><p class="k">Ureteroscopies performed in the US every year</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~40%</span><p class="k">Of surgeries leave residual fragments behind under the current standard of care</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1</span><p class="k">Fragment at a time: what a standard wire basket generally removes</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How MagStone works</span><h2 class="d3">Fragment, coat, <em>retrieve.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fragment</span><span>Coat</span><span>Retrieve</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The laser breaks up the stone.</h2><p>Through a standard ureteroscope, laser fragmentation reduces the stone to pieces and dust inside the kidney, as it does in any ureteroscopy today.</p></article>'+
     '<article class="step"><h2>A magnetic hydrogel coats them all.</h2><p>Hydrogel precursors are injected through a catheter and set around the fragments en masse, coating every piece, whatever its size, with iron oxide.</p></article>'+
     '<article class="step"><h2>One wire draws them out.</h2><p>A magnetic wire collects the coated fragments and withdraws them in bulk, including the small pieces a basket cannot catch, with more fragments per pass.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Built around the <em>existing workflow.</em></h2></div><p data-r>The MagStone System works alongside the ureteroscope and laser urologists already use. It changes one step, the retrieval, so that every fragment can leave the kidney.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="development" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Development</span><h2 class="d2 split">From the bench <em>toward the clinic.</em></h2></div><p data-r>A Stanford spinout, Maguro Surgical is advancing MagStone with support from the National Institute of Diabetes and Digestive and Kidney Diseases and Stanford’s High Impact Technology Fund.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Urologists <em>and engineers.</em></h2></div><p data-r>Maguro Surgical was founded by urologists who invented the magnetic hydrogel approach at Stanford, joined by engineers and advisors from medtech and Stanford University.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, patents <em>and papers.</em></h2></div><p data-r>Milestones from Maguro Surgical and its founders’ work at Stanford.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnership and investment</span>'+
   '<h2 class="big split">Talk to <em>Maguro Surgical.</em></h2>'+
   '<p class="sub" data-r>Urologists, partners and investors interested in MagStone and complete kidney stone removal: we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Maguro Surgical '+ARR+'</a><a class="btn" href="#/technology">See the technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Maguro Surgical, Inc.<br>2495 Hospital Dr., Ste 300<br>Mountain View, CA 94040</p></div>'+
    '<div><span class="lab" data-r>Product</span><p data-r>MagStone System<br>Investigational device</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>2495 Hospital Dr., Ste 300<br>Mountain View, CA 94040</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/development">Development</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Product</span>MagStone System<br>Magnetic stone retrieval</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Source Serif 4\',Georgia,serif;font-weight:400;font-size:62px;letter-spacing:-.02em">Maguro Surgical</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Maguro Surgical, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"platform",platform:"platform",story:"story",development:"development",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Maguro Surgical — MagStone magnetic kidney stone removal, Mountain View, CA",x:"Home"};
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
