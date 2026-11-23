/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function progRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3></div>'+
   '<p>'+esc(c[3])+'</p><span class="lab lk">'+esc(c[4])+'</span></li>'}).join("")+'</ul>'}
function trial(){return '<div class="ev"><span class="lab kick" data-r>The EMERALD study</span><div><dl>'+
  TRIAL.map(function(t){return '<div><dt class="lab" data-r>'+esc(t[0])+'</dt><dd data-r>'+esc(t[1])+'</dd></div>'}).join("")+
  '</dl><p class="note-s" data-r>The first of two trials in a planned registrational program; the first patient was dosed in November 2026. EO2002 is investigational and not approved for commercial use. For clinical trial enquiries, write to <a class="ul" href="mailto:clinicaltrials@emmecell.com">clinicaltrials@emmecell.com</a>.</p></div></div>'}
function linkList(list){return '<ul class="nws">'+list.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function pubs(){return '<div class="pubs"><span class="lab kick" data-r>Selected publications</span>'+linkList(PUBS.map(function(p){return [p[0],p[1],"doi.org",p[2]]}))+'</div>'}
function caps(){var C=[
  ["Delivery","Cell therapies that replace or enhance damaged tissue are often limited by the ability to localise the cells to the target tissue. Magnetic nanoparticles carry them there.",'<path d="M6 28h36"/><path class="a" d="M34 20l8 8-8 8"/><circle class="f" cx="50" cy="28" r="3"/>'],
  ["Retention","Once delivered, the cells need to stay at that site. A magnetic field holds them against the target surface while they attach.",'<path class="a" d="M14 10v18a14 14 0 0 0 28 0V10"/><path d="M14 10h7v18a7 7 0 0 0 14 0V10h7"/>'],
  ["Integration","The retained cells integrate into the host tissue. In the cornea, they repopulate the endothelium that keeps it clear.",'<circle cx="12" cy="40" r="5"/><circle cx="24" cy="40" r="5"/><circle cx="36" cy="40" r="5"/><circle cx="48" cy="40" r="5"/><path class="a" d="M6 30C20 18 36 18 50 30"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function people(lbl,list){return '<div class="mh-group"><p class="mh-label" data-r>'+lbl+'</p><ul class="mh-list">'+list.map(function(p){
  return '<li data-r><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Magnetic Cell Delivery</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A cell injection</span><span class="l">to replace</span><span class="l"><em>corneal surgery.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Emmecell uses magnetic nanoparticles to deliver, retain and integrate cell therapies at their target tissue. Its lead program, EO2002, is in a Phase 2 study for corneal edema.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">At Emmecell, we are committed to curing blindness: to bring innovative regenerative medicine out of the laboratory and <em>into patient care.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">Phase 2</span><p class="k">First patient dosed in the EMERALD study of EO2002, November 2026</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">RMAT</span><p class="k">Regenerative Medicine Advanced Therapy designation from the FDA for EO2002, July 2026</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">500K</span><p class="k">Cells in the higher of two EO2002 doses tested against placebo in EMERALD</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Magnetic Cell <em>Delivery.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Label</span><span>Steer</span><span>Restore</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Label the cells.</h2><p>Human corneal endothelial cells, cultured from donor tissue, are loaded with magnetic nanoparticles.</p></article>'+
     '<article class="step"><h2>Inject, then steer.</h2><p>A single injection places the cells in the front chamber of the eye. A magnetic patch on the outside of the eye steers them toward the back of the cornea.</p></article>'+
     '<article class="step"><h2>Attach and restore.</h2><p>More of the cells attach to the endothelial surface, repopulating the layer that keeps the cornea clear, without grafting donor tissue.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">A platform for <em>cell therapy.</em></h2></div><p data-r>Using a proprietary Magnetic Cell Delivery nanoparticle platform, Emmecell solves the challenges of delivery, retention and integration of cell therapies. The company holds a broad IP portfolio and is focusing its initial efforts on ophthalmic indications.</p></div>'+
   caps()+
   '<div class="cmp"><span class="lab kick" data-r>cGMP manufacturing</span><p data-r>CellMP, a subsidiary of Emmecell, provides integrated research, process development, cGMP manufacturing and testing services to biotechnology companies, from early development through clinical-stage manufacturing.</p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">EO2002, for <em>corneal edema.</em></h2></div><p data-r>When corneal endothelial cells decrease in number, the cornea swells with fluid and loses its clarity. There are no non-surgical treatments approved for advanced corneal edema, the most common reason for corneal transplantation.</p></div>'+
   progRows(PROG)+
   trial()+
  '</div></section>'+

  '<section class="sec light white" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built by <em>eye specialists.</em></h2></div><p data-r>Management and a board with decades in ophthalmology, from Allergan, AbbVie and Neurotech to the Byers Eye Institute at Stanford, advised by leading cornea and retina surgeons.</p></div>'+
   '<section class="mh">'+people("Leadership",LEAD)+people("Board of Directors",BOARD)+'</section>'+
   '<div class="bk"><span class="lab kick" data-r>Medical Advisory Board</span><p class="cr" data-r>'+MAB.map(function(n){return '<span>'+esc(n)+'</span>'}).join("")+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the <em>clinic.</em></h2></div><p data-r>The latest from Emmecell, from the first patient dosed in EMERALD to the FDA’s RMAT designation for EO2002.</p></div>'+
   linkList(NEWS)+
   pubs()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Let’s shape the future of <em>medicine together.</em></h2>'+
   '<p class="sub" data-r>For general enquiries, clinical trials or careers, write to the Emmecell team in Menlo Park.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Emmecell '+ARR+'</a><a class="btn" href="#/pipeline">See our pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>3475 Edison Way, Suite T<br>Menlo Park, CA 94025</p></div>'+
    '<div><span class="lab" data-r>General enquiries</span><p data-r><a class="ul" href="'+MAIL+'">info@emmecell.com</a></p></div>'+
    '<div><span class="lab" data-r>Clinical trials</span><p data-r><a class="ul" href="mailto:clinicaltrials@emmecell.com">clinicaltrials@emmecell.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Menlo Park, California</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@emmecell.com</a><br><a class="ul" href="mailto:careers@emmecell.com">careers@emmecell.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Subsidiary</span>CellMP · cell manufacturing and production</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Montserrat\',sans-serif;font-weight:300;font-size:76px">EMMECELL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Emmecell</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Emmecell — Magnetic Cell Delivery for cell therapy",x:"Home"};
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
