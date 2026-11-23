/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+esc(c[6])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Gaussian bone-pattern topography","A fully porous structure modelled on the trabecular pattern of vertebral bone, set between the threads, with texture on the threads themselves, to give bone room for on-growth and in-growth.",'<path d="M6 28h44"/><path d="M10 28l5-12 5 12 5-12 5 12 5-12 5 12 5-12"/><circle class="a" cx="17" cy="36" r="3"/><circle class="a" cx="27" cy="38" r="2.2"/><circle class="a" cx="37" cy="36" r="3"/><circle class="a" cx="22" cy="44" r="2"/><circle class="a" cx="33" cy="45" r="2.4"/>'],
  ["Fixation where bone is strongest","Integr8 concentrates its porosity in the proximal pedicle region, where bone quality is best, a departure from distal-dominant fixation, to reduce toggle and loosening.",'<path d="M8 14c10 6 10 22 0 28"/><path d="M48 14c-10 6-10 22 0 28"/><path d="M14 28h30"/><path class="a" d="M18 22v12M26 22v12"/><circle class="f" cx="46" cy="28" r="2.4"/>'],
  ["Therapeutic Hardware","A term Allumin8 coined and trademarked: implants purposely engineered to deliver bone marrow, drugs and biologics. These capabilities are not yet cleared by FDA.",'<path d="M10 40c0-12 8-22 18-22s18 10 18 22"/><path class="a" d="M28 6v18"/><path class="a" d="M23 19l5 5 5-5"/><circle class="f" cx="20" cy="36" r="2.2"/><circle class="f" cx="28" cy="33" r="2.2"/><circle class="f" cx="36" cy="36" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function ev(){return '<div class="ev"><span class="lab kick" data-r>Evidence &amp; licensing</span><dl>'+
  '<div><dt class="lab">Study</dt><dd>Can the Integr8 draw in bone marrow cells? Bill Walsh, University of New South Wales, Australia, 24 May 2023</dd></div>'+
  '<div><dt class="lab">Partnering</dt><dd>Licensing opportunities available. Write to <a class="ul" href="'+MAIL+'">'+MAILA+'</a></dd></div>'+
  '</dl></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Therapeutic Hardware<span class="nomob"> · Springfield, Missouri</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A pedicle screw</span><span class="l">patterned on</span><span class="l"><em>vertebral bone.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Allumin8 designs 3D-printed porous implants to reduce spinal and orthopedic reoperation rates. The A8 Integr8 Porous Pedicle Screw System is FDA cleared.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/products">A8 Integr8</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The problem</span>'+
   '<h2 class="txt" id="mani">Screw loosening is the most common mechanical issue in spine fusion. <em>Our mission is to reduce spinal and orthopedic reoperation rates.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">21&#8211;62%</span><p class="k">Of spine fusions have serious and debilitating complications</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30&#8211;54%</span><p class="k">Rate of screw loosening, the most common mechanical issue</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5.2M</span><p class="k">Spine surgery procedures a year worldwide, growing at 7.9% a year (figures as cited on allumin8.com)</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Why screws loosen</span><h2 class="d3">Built for the bone <em>it sits in.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Loosening</span><span>The bone</span><span>Integr8</span><span>Ingrowth</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Screws loosen.</h2><p>A conventional screw holds by its threads alone. Under load it toggles in the pedicle, the bone around it gives way, and the screw loosens: the most common mechanical issue in spine fusion.</p></article>'+
     '<article class="step"><h2>Vertebral bone is unique.</h2><p>Compared with bone elsewhere in the body, vertebral bone has thinner lattices, larger macro pores, smaller micro pores, more vessels and large variances in shape. It needs more help to hold hardware.</p></article>'+
     '<article class="step"><h2>Porous where it counts.</h2><p>Integr8 puts a Gaussian bone-pattern topography between its threads and texture on them, concentrated in the proximal pedicle region, where bone quality is strongest.</p></article>'+
     '<article class="step"><h2>Room to grow in.</h2><p>The fully porous structure is designed to support on-growth and in-growth, so that bone can take hold of the screw. No change in surgical technique, cost or care.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Implants that work <em>with biology.</em></h2></div><p data-r>Implant failure is rarely a material issue alone. Patients present with widely varying bone quality, shaped by age, osteoporosis, diabetes, trauma, smoking and cancer treatment. Allumin8 engineers hardware for the bone it meets.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">The A8 <em>platform.</em></h2></div><p data-r>A8 Integr8 is a strategic platform for therapeutic spine care: FDA cleared for mechanical fixation today, and designed from the start for biological integration and therapeutic delivery.</p></div>'+
   pipeRows(PIPE)+
   ev()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">From the operating room <em>to the lattice.</em></h2></div><p data-r>Allumin8 was founded by Alyssa Huffman after years in hundreds of surgeries as an orthopedic and spine rep. Its team joins engineering, regulatory and commercial experience with spine surgeons at leading centres.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Allumin8.</em></h2></div><p data-r>Clearance, coverage and the story behind the company, from the FDA and the orthopedic press.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, hospitals, investors and partners</span>'+
   '<h2 class="big split">Talk to <em>Allumin8.</em></h2>'+
   '<p class="sub" data-r>Licensing opportunities are available. Write or call us to learn more about the A8 Integr8 Porous Pedicle Screw System.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r>Springfield, Missouri<br>United States</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+MAIL+'">'+MAILA+'</a><br><a class="ul" href="'+TEL+'">'+TELS+'</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Springfield, Missouri<br>United States</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">Write to us</a><br><a class="ul" href="'+TEL+'">'+TELS+'</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Regulatory</span>A8 Integr8 Porous Pedicle Screw System: FDA cleared. A8 Circul8 Bone Marrow Delivery System: not FDA cleared for sale.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="78" text-anchor="middle" style="font-family:\'Italiana\',serif;font-weight:400;font-size:96px">ALLUMIN8</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Allumin8, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",story:"story",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Allumin8 — porous pedicle screws and Therapeutic Hardware for the spine",x:"Home"};
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
