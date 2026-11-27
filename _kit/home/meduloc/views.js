/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab lk xt2">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* the bones Meduloc treats (meduloc.com home and Surgeons) */
var APPS=[
 ["Metacarpal and metatarsal","Mid-shaft fractures of the hand and foot, through a minimally invasive approach that leaves the joints intact."],
 ["Clavicle","Intramedullary fixation of clavicle fractures, with length and rotational stability."],
 ["Radius, ulna and fibula","The same platform across the forearm and the lower leg, in adult and pediatric patients."]];
function apps(){return '<div class="caps nwc tst">'+APPS.map(function(c,i){return '<div class="cap"><span class="lab" data-r>Application</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
var BONES=["Metacarpal","Metatarsal","Phalange","Clavicle","Radius","Ulna","Fibula","Adult patients","Pediatric patients"];
function bones(){return '<div class="bk cnd"><span class="lab kick" data-r>Mid-shaft fractures of the</span><p class="cr" data-r>'+BONES.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* for surgeons (meduloc.com > Surgeons) */
var ICO={
 m:'<svg viewBox="0 0 56 56"><path d="M8 40L48 16"/><path class="a" d="M22 32L26 38M30 27L34 33"/></svg>',
 j:'<svg viewBox="0 0 56 56"><circle cx="16" cy="28" r="9"/><circle cx="40" cy="28" r="9"/><path class="a" d="M25 28H31"/></svg>',
 i:'<svg viewBox="0 0 56 56"><path d="M10 14H46V42H10Z"/><path class="a" d="M18 22V34M28 20V36M38 24V32"/></svg>',
 r:'<svg viewBox="0 0 56 56"><path d="M8 28H48"/><path class="a" d="M40 20L48 28L40 36"/><path d="M16 20V36"/></svg>'};
var SURG=[
 ["m","Minimally invasive","Soft tissue sparing","Inserted through a tiny incision, with minimal impact on muscles, tendons and skin."],
 ["j","Joint preserving","Joints left intact","An approach that leaves the joints intact, unlike plate and screw fixation."],
 ["i","Minimal inventory","Three diameters","Implant sizes of 1.5, 2.5 and 3.5 mm address every application; each is cut to fit."],
 ["r","No second surgery","No removal","No need to tie up the operating room again to remove wires, plates or screws."]];
function surg(){return '<div class="caps svc">'+SURG.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
/* the studies cited on meduloc.com > Surgeons; each row opens a PubMed search for it */
var EVID=[
 ["Moon et al.","Intramedullary nailing vs percutaneous K-wires: similar radiographic healing, a return to work 2.3 weeks sooner on average, and fewer complications","https://pubmed.ncbi.nlm.nih.gov/?term=Moon+intramedullary+nailing+K-wire+metacarpal"],
 ["Hussain et al.","Clavicle fractures: equivalent functional outcomes, with a higher risk of failure and complications for plate and screw fixation","https://pubmed.ncbi.nlm.nih.gov/?term=Hussain+clavicle+intramedullary+plate"],
 ["Ozer et al.","No significant difference in clinical outcome; shorter operating time for intramedullary nailing","https://pubmed.ncbi.nlm.nih.gov/?term=Ozer+intramedullary+nailing+plate+metacarpal"]];
function evid(){return '<ul class="nws">'+EVID.map(function(n){return '<li><a href="'+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">PubMed '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1580" height="1175" alt="Meduloc nitinol intramedullary rod with its titanium locking screw" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Intramedullary fracture fixation<span class="nomob"> · Del Mar, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Fracture fixation,</span> <span class="l">from the inside.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Meduloc is a flexible, intramedullary fixation platform of superelastic nitinol, designed to provide length and rotational stability across small, long-bone fractures.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Flexibility meets stability</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Minimally invasive.</span> <span class="nw">Joint preserving.</span> <span class="nw">Soft tissue sparing.</span> <em><span class="nw">And no second surgery</span> <span class="nw">to take it out.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3 sizes</span><p class="k">1.5, 2.5 and 3.5 mm implant diameters cover every application</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">7 bones</span><p class="k">metacarpal, metatarsal, phalange, clavicle, radius, ulna and fibula</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">510(k)</span><p class="k">FDA clearance for the Meduloc Intramedullary Fracture Fixation System, 2025</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How Meduloc works</span><h2 class="d3"><span class="nw">Inside the bone,</span> <em class="nw">in four steps.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Insert</span><span>Anchor</span><span>Lock</span><span>Heal</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">In through</span> <span class="nw">a sheath.</span></h2><p>The nitinol rod is inserted through a sheath and a tiny incision; superelastic, it flexes to navigate the intramedullary canal.</p></article>'+
     '<article class="step"><h2><span class="nw">The prongs</span> <span class="nw">deploy.</span></h2><p>The expanding prongs anchor against the distal bone in two places, for rotational resistance.</p></article>'+
     '<article class="step"><h2><span class="nw">Locked</span> <span class="nw">in reduction.</span></h2><p>A bone screw provides the proximal anchor; the titanium locking screw secures the rod to it, locking in the reduction and axial compression.</p></article>'+
     '<article class="step"><h2><span class="nw">Cut to size,</span> <span class="nw">left to heal.</span></h2><p>The rod is cut to fit the patient and stays in the body: no need to remove it after the fracture heals.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">The power</span> <em class="nw">of nitinol.</em></h2></div><p data-r>Nitinol, a superelastic alloy, lets the implant flex during insertion and return to its intended form, with controlled micro-motion at the fracture site in mind, which may support natural secondary bone healing.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split"><span class="nw">Upper and</span> <em class="nw">lower extremity.</em></h2></div><p data-r>Designed for flexibility across a range of fracture applications, in both adult and pediatric patients.</p></div>'+
   apps()+bones()+
  '</div></section>'+

  '<section class="sec dark" id="surgeons" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Surgeons</span><h2 class="d2 split"><span class="nw">Reduction and</span> <em class="nw">rotational control.</em></h2></div><p data-r>Focused on fracture reduction and fixation control along with rotational stability, without the entry-point and removal limits of conventional intramedullary nails.</p></div>'+
   surg()+
  '</div></section>'+

  '<section class="sec light" id="about" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About</span><h2 class="d2 split"><span class="nw">Founded by</span> <em class="nw">a physician inventor.</em></h2></div><p data-r>Meduloc LLC was founded in 2016 by inventor Joshua Hustedt, MD, MHS, and Cor Medical Ventures, who saw the need for improved fixation of small long bones.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Milestones</span><h3 data-r>Patents and design</h3><p data-r>Issued patents, and a design made stable through surgeon feedback, customer surveys and cadaveric testing.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Reimbursement</span><h3 data-r>Existing CPT codes</h3><p data-r>A clear reimbursement pathway using existing CPT codes, and approved suppliers and manufacturers in place.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>FDA 510(k) K250316</span><h3 data-r>Cleared in 2025</h3><p data-r>The Meduloc Intramedullary Fracture Fixation System, cleared on 29 October 2025. <a class="ul" href="'+K510+'" target="_blank" rel="noopener">See the FDA record</a></p></div>'+
   '</div>'+
  '</div></section>'+
  '<section class="sec dark" id="evidence" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical evidence</span><h2 class="d2 split"><span class="nw">Why intramedullary,</span> <em class="nw">and why better.</em></h2></div><p data-r>The literature on K-wires and plate and screw fixation shows the need for better small-bone fixation; intramedullary nailing has been well received, with limits Meduloc’s design addresses.</p></div>'+
   evid()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Interested in</span> <em><span class="nw">the Meduloc platform?</span></em></h2>'+
   '<p class="sub" data-r>For surgeons, distributors and investors: write to the Meduloc team at Cor Medical Ventures.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Meduloc</span><p data-r>Meduloc LLC<br>Del Mar, California</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Cor Medical Ventures</span><p data-r>230 Birmingham Drive, Suite 200<br>Cardiff, CA 92007<br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Meduloc</span>Del Mar, California</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Uses</a><br><a class="ul" href="#/surgeons">Surgeons</a><br><a class="ul" href="#/about">About</a></div>'+
   '<div class="c"><span class="lab">Implant</span>Nitinol rod<br>Titanium locking screw<br>1.5, 2.5, 3.5 mm</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">meduloc</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Meduloc LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",technology:"technology",applications:"applications",surgeons:"surgeons",about:"about",evidence:"evidence",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Meduloc — Flexible intramedullary fixation for small, long-bone fractures",x:"Home"};
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
