/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){
  return '<div class="mh"><div class="mh-group"><p class="mh-label">Board of directors</p><ul class="mh-list">'+TEAM.map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Production","Made in our own facility","Hip and knee implants, trauma plates and screws, spinal implants and their instrument sets are manufactured in Covision’s own production facility, equipped with some of the very latest high performance machining centres.",'<rect x="8" y="22" width="40" height="28"/><path d="M8 22L20 12V22L32 12V22L44 12V22"/><path class="a" d="M16 34H40M16 42H32"/><circle class="f" cx="44" cy="42" r="2.2"/>'],
  ["Testing","Test and development laboratories","Designs are based on well proven technologies whose long term use has been shown to deliver excellent clinical outcomes, and are tested and developed in the company’s own laboratories.",'<path d="M22 8V24L10 46H46L34 24V8"/><path d="M18 8H38"/><path class="a" d="M15 38H41"/><circle class="f" cx="28" cy="31" r="2.2"/>'],
  ["Regulation","CE and MDD requirements","Every product in the range meets all of the CE and MDD regulatory and quality requirements, and electronic instructions for use are published for every product group.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M19 28L25 34L37 22"/><circle class="f" cx="28" cy="10" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<span class="lab eyebrow" data-r>Orthopaedic implants<span class="nomob"> · Worksop, UK</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Proven implants,</span> </span><span class="l"><em><span class="nw">better outcomes.</span></em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Covision Medical Technologies supplies clinically proven, cost-effective knee, hip, trauma and spine implants, with the instrument sets to place them, to orthopaedic surgeons and hospitals in Europe, Africa, the Middle East and Latin America.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/systems">See the systems '+ARR+'</a><a class="btn" href="#/contact">Talk to us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Realising the vision</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Clinically proven</span> <span class="nw">generic implants,</span> <span class="nw">made in our own facility,</span> <em><span class="nw">at a price that lowers</span> <span class="nw">the cost of surgery.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">94.1%</span><p class="k">Non-revision rating for Covision hip replacements for displaced femoral neck fractures (Swedish Hip Registry, 7-year follow-up)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">Implant systems, knee, hip, trauma and spine, each with its own instrument set</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2004</span><p class="k">Covision Medical Technologies Limited is registered at Companies House</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Knee designs</span><h2 class="d3"><span class="nw">Four knees,</span> <em><span class="nw">one range.</span></em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">C/R</span><span>P/S</span><span>M/P</span><span>Revision</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Cruciate retaining.</h2><p>St Leger C/R keeps the posterior cruciate ligament, which helps prevent anterior translation of the femur on the tibia. Potential advantages include preservation of bone, more normal knee kinematics, increased proprioception and femoral rollback in flexion.</p></article>'+
     '<article class="step"><h2>Posterior stabilised.</h2><p>In St Leger P/S a post on the insert and a cam on the femoral component take over from the ligament: a less technically demanding procedure and a more stable component interface, with an increased range of motion.</p></article>'+
     '<article class="step"><h2>Medial pivot.</h2><p>The Superica M/P knee has an anatomic design with a ball and socket articulation throughout the range of motion, to enhance stability, drive normal knee kinematics and reduce wear.</p></article>'+
     '<article class="step"><h2>Revision.</h2><p>The Reflecto Revision Knee System is a fixed-bearing femoral revision prosthesis with a constrained PS insert, an extension press-fit stem and posterior, distal and tibial augments, designed for predictable stability.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="systems" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Systems</span><h2 class="d2 split"><span class="nw">Every major sector</span> <em class="nw">of orthopaedics.</em></h2></div><p data-r>Complete ranges of implants for hip and knee replacement, plates and screws for trauma and reconstructive surgery, and spinal implants, each with a dedicated instrument set.</p></div>'+
   prods()+
   '<div class="act shop" data-r><a class="btn solid" href="mailto:'+MAIL+'">Ask for a brochure '+ARR+'</a></div>'+
  '</div></section>'+

  '<section class="sec light" id="inhouse" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality and cost</span><h2 class="d2 split"><span class="nw">Quality first,</span> <em class="nw">at a fair price.</em></h2></div><p data-r>Price pressure in many markets means demand for lower cost, high quality, clinically proven generic implants is growing strongly throughout the world. Covision answers it with a strong focus on quality and competitive prices.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Trusted in</span><p class="cr" data-r><span>Europe</span><span>Africa</span><span>The Middle East</span><span>Latin America</span><span>Thailand</span><span>Vietnam</span></p></div>'+
  '</div></section>'+

  '<section class="sec light co" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Headquartered</span> <em class="nw">in Nottinghamshire.</em></h2></div><p data-r>Covision Medical Technologies Limited is based at Carlton-in-Lindrick, near Worksop, and is part of the Ortopro group of Istanbul, its parent company. It serves hospitals, administrators and surgeons with high levels of customer service and product quality.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Courses, congresses</span> <em class="nw">and launches.</em></h2></div><p data-r>Covision shows its full range at the major medical trade fairs and supports surgeon training. The latest is on the News page and on LinkedIn.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Talk to the</span> <em class="nw">Covision team.</em></h2>'+
   '<p class="sub" data-r>For product information, brochures, distribution or a printed copy of an instruction for use (sent within 7 days), contact the head office in Worksop.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Covision '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Head office</span><p data-r>Covision Medical Technologies Ltd<br>Lawn Road, Carlton-in-Lindrick<br>Worksop, Nottinghamshire S81 9LB</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Instructions for use</span><p data-r>Electronic IFUs for knee, hip, trauma and spine products<br><a class="ul" href="'+CV+'ifu.php" target="_blank" rel="noopener">Open the e-IFU library</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Head office</span>Covision Medical Technologies Ltd<br>Lawn Road, Carlton-in-Lindrick, Worksop, Nottinghamshire S81 9LB</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/systems">Systems</a><br><a class="ul" href="#/knee-designs">Knee designs</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Range</span>Knee · Hip<br>Trauma · Spine<br>Instrument sets</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 120" aria-hidden="true"><text x="450" y="98" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:600;font-size:124px;letter-spacing:.06em">COVISION</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Covision Medical Technologies Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro","knee-designs":"story",systems:"systems",quality:"inhouse",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Covision Medical Technologies — knee, hip, trauma and spine implants",x:"Home"};
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
