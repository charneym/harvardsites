/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3></div><p>'+esc(c[3])+'</p><span class="lab lk av">NIDDK SBIR</span></li>'}).join("")+'</ul>'}
function probRows(){return '<ul class="pfr prob">'+PROB.map(function(c,i){
  return '<li><span class="lab tg"><b>0'+(i+1)+'</b><i>'+esc(c[0])+'</i></span><div class="pgm"><h3>'+esc(c[1])+'</h3></div><p>'+esc(c[2])+'</p><span></span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["01","A decade of materials science at MIT","GastroShield is founded on more than ten years of materials science and tissue engineering research at MIT, where our team developed advanced hydrogel systems designed for challenging environments.",'<path d="M10 44h36"/><path d="M20 44V22h16v22"/><path d="M24 22V12h8v10"/><path class="a" d="M14 30c4-3 8-3 12 0s8 3 12 0"/>'],
  ["02","Instant adhesion from two components","Delivered as two liquid components that mix at the tip of an endoscopic catheter. On contact with GI tissue they rapidly form a thin, durable hydrogel layer that adheres strongly, even in the presence of blood, moisture or constant motion.",'<path d="M22 4v26"/><path d="M34 4v26"/><path d="M18 4h20"/><path d="M18 30h20"/><circle class="f" cx="28" cy="38" r="6"/><path class="a" d="M10 50h36"/>'],
  ["03","Targeted, transparent, durable protection","The hydrogel forms a transparent coating that preserves visualization of the underlying tissue. Its mechanical strength and tunable degradation profile provide extended protection where powders and short-lived gels often fail to remain effective.",'<path d="M6 40c8 0 10-8 22-8s14 8 22 8"/><path class="a" d="M10 34c6-1 10-7 18-7s12 6 18 7"/><circle cx="28" cy="16" r="7"/><circle class="f" cx="28" cy="16" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+c[0]+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function props(){return '<div class="ev"><span class="lab kick" data-r>GastroShield</span><div><dl>'+PROPS.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl></div></div>'}
function done(){return '<div class="ev ev-top"><span class="lab kick" data-r>Reached</span><div><dl>'+DONE.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>De-risking milestones reached before the direct-to-Phase II award, as the NIH RePORTER record for 5R44DK139828 states; in vitro and in vivo biocompatibility studies were also conducted.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>GastroShield<span class="nomob"> · Endoscopic hydrogel sealant</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A clear hydrogel</span><span class="l">to <em>seal and shield</em></span><span class="l">the GI mucosa.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Biodevek is developing GastroShield, an advanced biocompatible material for effective management of gastrointestinal bleeding and shielding of high-risk lesions in endoscopy procedures.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">To improve the standard of care for treatment of gastrointestinal bleeding <em>and protection of the mucosa in endoscopy procedures.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">500K+</span><p class="k">Hospital admissions from GI hemorrhage alone</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2M+</span><p class="k">Hospital days</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$5B</span><p class="k">In direct costs</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Two liquids, <em>one clear shield.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Deliver</span><span>Form</span><span>Protect</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Two liquids reach the lesion.</h2><p>GastroShield is delivered as two liquid components through an endoscopic catheter, and they mix at its tip.</p></article>'+
     '<article class="step"><h2>A thin hydrogel forms on contact.</h2><p>On contact with GI tissue they rapidly form a thin, durable hydrogel layer that adheres strongly, even with moisture or constant motion.</p></article>'+
     '<article class="step"><h2>The clear shield stays.</h2><p>The transparent coating keeps the lesion in view, and remains adhered in place during the healing process.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="problem" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The problem</span><h2 class="d2 split">GI bleeding is still <em>hard to control.</em></h2></div><p data-r>Despite advances in endoscopy, controlling GI bleeding and protecting large lesions remains challenging. GI hemorrhage alone results in more than 500,000 hospital admissions, 2 million hospital days and $5 billion in direct costs.</p></div>'+
   probRows()+
   props()+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">A sprayable, adhesive <em>biomaterial.</em></h2></div><p data-r>GastroShield is a sprayable biocompatible adhesive for endoscopic management of GI lesions, formed by cross-linking biodegradable polymer solutions, and designed to be easy to use, fast and less dependent on operator skill.</p></div>'+
   caps()+
   '<div class="act tlinks" data-r><a class="btn" href="https://www.biodevek.com/publications" target="_blank" rel="noopener">See publications '+ARR+'</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="progress" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Progress</span><h2 class="d2 split">On the path to an <em>FDA submission.</em></h2></div><p data-r>An NIDDK SBIR Phase II award (5R44DK139828) supports scale-up manufacturing, quality control systems and the pre-clinical data package for GastroShield’s FDA regulatory submission.</p></div>'+
   done()+
   '<span class="lab sub-l pr" data-r>Phase II aims</span>'+
   pipeRows(AIMS)+
   '<div class="bk"><span class="lab kick" data-r>Support and partners</span><p class="cr" data-r><span>NIH</span><i>·</i><span>NSF</span><i>·</i><span>ARPA-H</span><i>·</i><span>LabCentral</span><i>·</i><span>Harvard Innovation Labs</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Materials scientists, <em>clinicians, builders.</em></h2></div><p data-r>A team grounded in hydrogel and tissue engineering research at MIT, with medical, scientific and business advisors, building GastroShield at LabCentral in Cambridge.</p></div>'+
   team()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering</span>'+
   '<h2 class="big split">Let’s <em>connect.</em></h2>'+
   '<p class="sub" data-r>We look forward to connecting with new potential partners, collaborators or investors to leverage our proprietary biomaterial platform to solve new challenges.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Biodevek '+ARR+'</a><a class="btn" href="#/technology">See the technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Biodevek, Inc.<br>LabCentral, 700 Main St<br>Cambridge, MA 02139</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">talent@biodevek.com</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="https://www.linkedin.com/company/biodevek/" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>LabCentral, 700 Main St<br>Cambridge, MA 02139</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">talent@biodevek.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/problem">The Problem</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/progress">Progress</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Product</span>GastroShield · endoscopic hydrogel sealant</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Roboto Condensed\',sans-serif;font-weight:400;font-size:64px">BIODEVEK</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Biodevek, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",problem:"problem",technology:"technology",progress:"progress",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Biodevek — GastroShield, a hydrogel shield for the GI mucosa",x:"Home"};
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
