/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function mileRows(){return '<ul class="pfr mile">'+MILE.map(function(m){
  return '<li><span class="lab tg">'+esc(m[0])+'</span><h3>'+esc(m[1])+'</h3><p>'+esc(m[2])+'</p><a class="lab lk" href="'+m[4]+'" target="_blank" rel="noopener">'+esc(m[3])+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Entirely resorbable","BoneTape is made entirely of resorbable materials. It is designed to dissolve in the body over many months as the bone heals, so there is no hardware to remove in a second operation.",'<path d="M8 30c6-9 14-9 20 0s14 9 20 0"/><path class="a" d="M12 40l2 2M22 44l2 1M33 43l1 2M43 40l2 1" /><circle class="f" cx="16" cy="18" r="1.6"/><circle class="f" cx="28" cy="13" r="1.3"/><circle class="f" cx="40" cy="18" r="1"/>'],
  ["One piece, cut to shape","Plates and screws come in many shapes and sizes. BoneTape is a single, thin, flexible piece that the surgeon cuts to the shape of the fracture in the operating room.",'<path d="M10 20h36v16H10z"/><path class="a" d="M30 8v40" stroke-dasharray="3 3"/><circle cx="24" cy="10" r="3"/><circle cx="36" cy="10" r="3"/>'],
  ["No drilling, no screws","A handheld applicator fixes BoneTape to the bone surface. It is translucent, so the surgeon can see the fracture beneath it and confirm the bones are held in alignment.",'<path d="M6 34l14-4 6 6 8-8 6 4 10-3"/><path d="M14 22h28v8H14z"/><path class="a" d="M20 8l16 16M36 8L20 24"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function study(){return '<div class="ev"><span class="lab kick" data-r>The study</span><div><dl>'+STUDY.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>BoneTape is an investigational device; it is not licensed for commercial sale. Its use in this clinical study has been authorized by Health Canada under an Investigational Testing Authorization (ITA). Safety and effectiveness have not been established. ClinicalTrials.gov identifier NCT06600854.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>BoneTape<span class="nomob"> · Resorbable fixation</span> · Toronto</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Fracture repair,</span><span class="l"><em>without the screws.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Cohesys is developing BoneTape: a single-piece, fully resorbable fixation device that surgeons cut to shape and apply to bone without drilling or screws. It is now in its first clinical study, for fractures of the midface.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/clinical">Clinical study</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Surgical repair has long depended on highly invasive plates and screws, slow to shape and fit to the thin bones of the face, and sometimes removed in a second operation. BoneTape is designed to <em>hold the bone, then disappear.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1</span><p class="k">Single piece, cut to shape, in place of plates and screws in many shapes and sizes</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30</span><p class="k">Participants planned in the BoneTape feasibility study (estimated, ClinicalTrials.gov)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2025</span><p class="k">First in human, in a feasibility study at Sunnybrook Health Sciences Centre</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How BoneTape works</span><h2 class="d3">Taped in place, <em>then gone.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Align</span><span>Tape</span><span>Resorb</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The fracture is reduced.</h2><p>Midface fractures, often from car accidents or falls, need the bones aligned and held still to heal. The surgeon first brings the fragments back into position.</p></article>'+
     '<article class="step"><h2>Cut to shape, taped down.</h2><p>BoneTape is cut to fit and fixed across the fracture with a handheld applicator, with no holes drilled. It is translucent, so the surgeon can confirm the alignment through it.</p></article>'+
     '<article class="step"><h2>It holds, then dissolves.</h2><p>Made entirely of resorbable materials, the tape is designed to dissolve over many months as the bone heals, leaving no hardware behind to remove.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A new approach <em>to fixation.</em></h2></div><p data-r>BoneTape began as a surgeons’ idea for the thin, complex bones of the head and face. Its adhesive was inspired by the proteins mussels use to cling to rock underwater: it works in wet and dry conditions, without the complex steps and drying that dental adhesives need.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical</span><h2 class="d2 split">From the bench <em>to the clinic.</em></h2></div><p data-r>BoneTape is being evaluated for the fixation of non-load-bearing craniofacial fractures. The data from the first clinical study will inform Cohesys’s regulatory strategy and path to commercialization.</p></div>'+
   mileRows()+
   study()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Materials science, <em>built for surgeons.</em></h2></div><p data-r>Led by materials scientists who studied at Trent University, Cohesys grew out of biomaterials research in Toronto and works closely with surgeons on its clinical programme.</p></div>'+
   team()+
   '<div class="bk light-bk"><span class="lab kick" data-r>Origins and support</span><p class="cr" data-r><span>University of Toronto</span><span>Sunnybrook Research Institute</span><span>University Health Network</span><span>MedTech Innovator</span><span>Innovation Factory</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Milestones <em>and coverage.</em></h2></div><p data-r>The first clinical use of BoneTape, and the story of how it began.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Cohesys.</em></h2>'+
   '<p class="sub" data-r>To learn more about BoneTape, the clinical programme or working with us, write to the team in Toronto.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="https://clinicaltrials.gov/study/NCT06600854" target="_blank" rel="noopener">The study record</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Cohesys Inc.<br>1300-661 University Avenue<br>Toronto, Ontario M5G 0B7</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Regulatory status</span><p data-r>Investigational device, not licensed for commercial sale</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>1300-661 University Avenue<br>Toronto, ON M5G 0B7</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">BoneTape</span>Investigational device · not licensed for commercial sale</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="74" text-anchor="middle" style="font-family:\'Fira Sans\',Arial,sans-serif;font-weight:300;font-size:88px;letter-spacing:.01em">cohesys</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Cohesys Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story",clinical:"clinical",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Cohesys — BoneTape, resorbable fracture fixation without screws",x:"Home"};
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
