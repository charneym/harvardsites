/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[4]?'':' class="now"')+'><span class="lab tg"><b>'+esc(c[0])+'</b></span><div class="pgm"><h3>'+esc(c[1])+'</h3></div>'+
   '<p>'+esc(c[2])+'</p><span class="lab lk">'+(c[4]?'<i class="ok" aria-hidden="true"></i>':'<i class="go" aria-hidden="true"></i>')+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Anatomic congruence","Shaped like a native meniscus: thick at the rim, thin toward the centre and curved to seat the femur, with fixation at the same locations as the natural meniscus.",'<path d="M10 40C10 20 46 20 46 40"/><path d="M10 40h36"/><path class="a" d="M14 40c2-8 8-12 14-12s12 4 14 12"/><circle class="f" cx="10" cy="40" r="2.2"/><circle class="f" cx="46" cy="40" r="2.2"/>'],
  ["Meniscus-like mechanics","A composite biomaterial, a self-lubricating hydrogel surface with oriented reinforcement fibres, built to deform, dissipate energy and recover under millions of load cycles.",'<path d="M8 22c8-6 32-6 40 0"/><path d="M8 30c8-6 32-6 40 0"/><path d="M8 38c8-6 32-6 40 0"/><path class="a" d="M28 4v10M24 10l4 4 4-4M28 52V42M24 46l4-4 4 4"/>'],
  ["Minimally invasive","Placed with common arthroscopic techniques, as a far less invasive alternative for patients not yet ready for a knee replacement.",'<circle cx="34" cy="30" r="14"/><path d="M6 48l18-12"/><path class="a" d="M24 36l6-4"/><circle class="f" cx="34" cy="30" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function gap(){return '<div class="ev"><span class="lab kick" data-r>The treatment gap</span><div><dl>'+
  [["Conservative care","Non-surgical treatments are largely ineffective and do not address the underlying dysfunction."],
   ["Meniscectomy","Trimming surgery gives only temporary relief and accelerates a cascade of knee degeneration."],
   ["Knee replacement","Highly invasive and costly, and generally indicated only for older patients with advanced arthritis."],
   ["Defender","A first-of-its-kind option for patients with meniscus dysfunction who want to keep walking the dog, or playing sport, without pain."]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>For investigational use only. Defender is not available for commercial sale.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Artificial meniscus implant<span class="nomob"> · FDA Breakthrough Device</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Restoring the knee’s</span><span class="l">own <em>cushion.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>OrthoPreserve is developing Defender, a next-generation artificial meniscus implant designed to relieve knee pain after meniscus injury, restore function for an active life, and preserve the joint from degeneration leading to arthritis.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The implant '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">The meniscus stabilises the knee and absorbs its shocks. When it fails, the standard of care is to cut the damaged tissue away. We are building an implant to <em>put the cushion back.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1M</span><p class="k">Meniscus surgeries every year</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">25%</span><p class="k">Of those patients still live with recurring knee pain</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0</span><p class="k">FDA-approved implants for this population today</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside the knee</span><h2 class="d3">From a torn meniscus <em>to a restored one.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Tear</span><span>Trim</span><span>Restore</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The meniscus tears.</h2><p>Two C-shaped cushions sit between the thigh bone and the shin bone, stabilising the joint and absorbing shock. Injury leaves many patients with ongoing pain.</p></article>'+
     '<article class="step"><h2>Surgery takes the cushion away.</h2><p>A meniscectomy cuts out the damaged tissue. Relief is often temporary: with less cushion, contact stress on the cartilage rises, and arthritis can follow.</p></article>'+
     '<article class="step"><h2>Defender restores it.</h2><p>Placed arthroscopically, the implant replaces the dysfunctional meniscus, restoring a physiologic load distribution to relieve symptoms and protect the joint.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">An implant built <em>like a meniscus.</em></h2></div><p data-r>Defender is engineered from a composite biomaterial that replicates the mechanical properties of natural meniscus tissue. Shape, compliance and fixation were developed together, so the implant restores load distribution and stability rather than acting as a generic spacer.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">On a clear path <em>to the clinic.</em></h2></div><p data-r>OrthoPreserve is advancing through a rigorous pre-clinical programme toward first-in-human clinical trials. Two FDA designations have validated the regulatory strategy, and the company is raising to complete the final testing for its IDE submission.</p></div>'+
   pipeRows(PIPE)+
   gap()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Surgeons and <em>engineers.</em></h2></div><p data-r>Founded by orthopedic clinicians and biomedical engineers, with first-hand clinical experience of how hard meniscus injuries are to treat, and the engineering to do something about it.</p></div>'+
   team()+
   '<div class="bk light-bk"><span class="lab kick" data-r>Support</span><p class="cr" data-r><span>Georgia Tech</span><span>ATDC</span><span>Portal Innovations</span><span>National Institutes of Health</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Designations, press <em>and milestones.</em></h2></div><p data-r>Coverage of Defender, the FDA Breakthrough Device designation and TAP enrollment, and the story of how a Georgia Tech thesis became a company.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, surgeons and patients</span>'+
   '<h2 class="big split">Talk to <em>OrthoPreserve.</em></h2>'+
   '<p class="sub" data-r>We are always happy to hear from investors, surgeons and healthcare professionals, and potential patients.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="'+LI+'" target="_blank" rel="noopener">Follow on LinkedIn</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Offices</span><p data-r>OrthoPreserve, Inc.<br>Richmond, Virginia<br>Atlanta, Georgia</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">jschwartz@<wbr>orthopreserve.com</a></p></div>'+
    '<div><span class="lab" data-r>Online</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Offices</span>Richmond, Virginia<br>Atlanta, Georgia</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">jschwartz@<wbr>orthopreserve.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Investigational device</span>Defender is for investigational use only and not available for commercial sale.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="74" text-anchor="middle" style="font-family:\'Manrope\',Arial,sans-serif;font-style:italic;font-weight:500;font-size:84px;letter-spacing:-.01em">OrthoPreserve</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 OrthoPreserve, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"OrthoPreserve — a next-generation artificial meniscus implant",x:"Home"};
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
