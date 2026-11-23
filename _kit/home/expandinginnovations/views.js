/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Powerful, controlled expansion","Moving the expansion screw into the insertion instrument allows a larger, highly polished screw: less friction, more tactile feedback, more lifting power. Expansion is slow and controlled, and can start and stop as needed.",'<path d="M12 44h32M12 12h32"/><path class="a" d="M28 38V18M22 24l6-6 6 6"/>'],
  ["Open architecture","With no screw inside the cage, it is open from endplate to endplate. Lateral windows let graft flow into the disc space for maximum graft volume and bridging bone fusion.",'<path d="M10 14h36v28H10z"/><path d="M20 22h16v12H20z"/><circle class="f" cx="25" cy="27" r="1.6"/><circle class="f" cx="31" cy="29" r="1.6"/><circle class="f" cx="27" cy="31" r="1.4"/>'],
  ["Matched to bone quality","Multiple inserters with incremental lifting force accommodate different bone qualities, and can be exchanged intra-operatively to adjust the lifting force as needed.",'<path d="M8 40h40"/><path d="M14 40V30M24 40V24M34 40V18M44 40V12"/><path class="a" d="M10 22l10-6 10 2 14-10"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From Expanding Innovations&#8217; releases, May 2025 to February 2026.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Expandable interbody cages<span class="nomob"> · spine surgery</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The NON-SCREW</span><span class="l"><em>expandable cage.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>X-PAC&#174; Expandable Interbody Cages replace the traditional inner drive screw with a patented lift-and-lock mechanism, designed to mitigate post-operative cage collapse and vertebral body subsidence.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How X-PAC works '+ARR+'</a><a class="btn" href="#/products">Our products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why NON-SCREW</span>'+
   '<h2 class="txt" id="mani">Cage collapse and subsidence are the two most common complications of screw-based expandable cages. We moved the lifting screw out of the cage and into the inserter. <em>Because bone quality matters.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">20,000+</span><p class="k">X-PAC cages implanted across the United States</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">31%</span><p class="k">Growth in 2024, followed by record growth in Q1 2025</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">65+ yrs</span><p class="k">Combined spine-industry experience of the founding team</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How X-PAC works</span><h2 class="d3">Lift and lock, <em>no screw inside.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Insert</span><span>Expand</span><span>Lock</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Insert it collapsed.</h2><p>The cage enters the disc space at a low insertion height, on its inserter. The expansion screw lives in the instrument, not in the cage.</p></article>'+
     '<article class="step"><h2>Expand under control.</h2><p>A powerful, continuous lift expands the cage anteriorly and posteriorly, restoring disc height and opening the foramen for indirect decompression. The surgeon can start and stop as needed.</p></article>'+
     '<article class="step"><h2>Lock, then pack.</h2><p>Unidirectional locking teeth hold the height to mitigate post-operative collapse. The open cage takes graft from endplate to endplate, for bridging bone fusion.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Designed for <em>the aging spine.</em></h2></div><p data-r>The heart of the X-PAC design is the relocation of the lifting screw from the cage to the inserter instrument, which prioritizes patient bone quality while mitigating the risk of subsidence and early torque out.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Posterior, lateral, <em>and the plate.</em></h2></div><p data-r>The X-PAC platform covers posterior and lateral lumbar fusion, and the N-GAGE plate connects to X-PAC LLIF cages without a screw. More than half a dozen new products are scheduled for launch over the next 12 to 18 months.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Spine-industry <em>operators.</em></h2></div><p data-r>Founded by a team of healthcare executives with over 65 years of combined experience in research and development, marketing, operations and commercial distribution within the spine industry.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>EI.</em></h2></div><p data-r>Press releases on clearances, growth, leadership and the new Enabling Technologies Division.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, distributors and investors</span>'+
   '<h2 class="big split">Talk to <em>Expanding Innovations.</em></h2>'+
   '<p class="sub" data-r>For more information about X-PAC, or to have a local sales representative contact you, write to us or call (650) 861-3129.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to EI '+ARR+'</a><a class="btn" href="#/products">See the products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Expanding Innovations, Inc.<br>110 Pioneer Way, Suite I<br>Mountain View, CA 94041</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@expandinginnovations.com</a></p></div>'+
    '<div><span class="lab" data-r>Investors and media</span><p data-r><a class="ul" href="mailto:IR@expandinginnovations.com">IR@expandinginnovations.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>110 Pioneer Way, Suite I<br>Mountain View, CA 94041</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@expandinginnovations.com</a><br>(650) 861-3129</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>X-PAC TLIF · X-PAC LLIF · N-GAGE</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Montserrat\',sans-serif;font-weight:500;font-size:62px">EXPANDING INNOVATIONS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Expanding Innovations, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Expanding Innovations — NON-SCREW based expandable cages for spine surgery",x:"Home"};
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
