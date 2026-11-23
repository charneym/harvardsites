/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Mg OSTEOCRETE","Moldable and injectable","A high-viscosity putty or medium-viscosity paste, mixed in a bowl or in a syringe. Optimised for trauma, extremity, revision, sports medicine, intervertebral body fusions and posterolateral spine surgery.",'<path d="M10 40c4-12 14-18 24-16s14 10 12 18c-1 4-6 6-12 5-9-1-16 1-24-7z"/><path class="a" d="M16 38c6-6 14-8 22-6"/><circle class="f" cx="30" cy="34" r="2.2"/>'],
  ["Mg OSTEOINJECT","Injectable","Mixed within a syringe and delivered through a cannula. A fast-setting bone substitute optimised for trauma, extremity, revision and sports medicine.",'<rect x="14" y="20" width="28" height="12"/><path d="M42 26h10M6 26h8M6 20v12"/><path class="a" d="M18 26h20"/>'],
  ["T-HAN delivery system","Intramedullary delivery","Designed for simple, effective delivery of Mg OSTEOCRETE into and throughout the intramedullary canal of long bones, for backfilling hard-to-reach defects or managing dead space.",'<path d="M8 28h40"/><path d="M8 22h6v12H8z"/><path class="a" d="M22 28h26"/><path d="M48 24l4 4-4 4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function props(){var A=[
  ["30 s","Ready in 30 seconds","Each kit comes with a powder and a solution. Once mixing begins, the material is ready to implant in 30 seconds."],
  ["Set","Drillable and settable","It sets in place, and once set it is drillable."],
  ["Bond","Cohesive and adhesive","Mg OSTEOCRETE does not wash away from unconstrained defects."],
  ["X-ray","Radiopaque","Visible on radiographs, so its remodelling can be followed over time."]];
  return '<ul class="pfr awd">'+A.map(function(a){return '<li><span class="lab tg">'+a[0]+'</span><h3>'+esc(a[1])+'</h3><p>'+esc(a[2])+'</p><span></span></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Mg OSTEOCRETE<span class="nomob"> · Mg OSTEOINJECT</span> · Colleyville, Texas</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Magnesium-based</span><span class="l">bone substitutes,</span><span class="l"><em>replaced by bone.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Bone Solutions makes FDA-cleared, magnesium-based bone void fillers. Mixed and ready to implant in 30 seconds, they set in place and are resorbed and replaced with bone during the healing process.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/products">The products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why magnesium</span>'+
   '<h2 class="txt" id="mani">Magnesium is critical for bone health and development. Our platform is built on it, to give orthopedic surgeons implant solutions that are <em>biologically safe and completely resorbable.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">30 s</span><p class="k">From the start of mixing until the material is ready to implant</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~60%</span><p class="k">Of the body’s magnesium resides in the bones, where it helps regulate calcium</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6+</span><p class="k">Years of age: FDA clearance for pediatric use of Mg OSTEOCRETE and Mg OSTEOINJECT (2025)</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology · Magnesium phosphate</span><h2 class="d3">Support while it heals, <em>then bone.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Mix</span><span>Fill</span><span>Remodel</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Mixed in 30 seconds.</h2><p>A pre-measured magnesium powder and a solution are mixed in a bowl or within a syringe. Once mixing begins, the material is ready to implant in 30 seconds.</p></article>'+
     '<article class="step"><h2>Molded or injected into the void.</h2><p>The putty is pressed into the defect, or the paste is injected through a cannula. It sets in place, adheres to bone and stays put, and it is radiopaque and drillable.</p></article>'+
     '<article class="step"><h2>Resorbed as bone forms.</h2><p>Magnesium phosphate stays long enough to support bone formation, then degrades once bone has formed. Radiographs show Mg OSTEOCRETE remodelling over one year.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">One magnesium <em>platform.</em></h2></div><p data-r>Each kit is a synthetic, pre-measured powder mixed with a solution, and each sets in place. The difference is in how they handle and where they are cleared for use.</p></div>'+
   caps()+
   '<div class="ev lt"><span class="lab kick" data-r>From the clinic</span><dl>'+
    '<div><dt class="lab" data-r>Adam I. Harris, MD, FAAOS</dt><dd data-r>“It is the only bone graft material that does not wash away from unconstrained defects.”</dd></div>'+
    '<div><dt class="lab" data-r>Spine</dt><dd data-r>The first and only magnesium-based bone substitute cleared by the FDA for intervertebral body fusion (2024).</dd></div>'+
   '</dl></div>'+
   '<p class="note-s tnote" data-r>Dr Harris is a fellowship-trained, board-certified orthopedic surgeon in adult reconstruction and joint replacement; quoted on bonesolutions.net on the use of Mg OSTEOCRETE in revision and complex total joint arthroplasty. Product use follows each device’s Instructions for Use.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="features" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Features</span><h2 class="d2 split">What sets <em>ours apart.</em></h2></div><p data-r>There are many bone substitutes on the market. In an equine model, Mg OSTEOCRETE required up to 43% more force to remove a bone screw than calcium cement or no treatment at 5 days.*</p></div>'+
   props()+
   '<p class="tnote" data-r>* Hirvinen LJ et al., Am J Vet Res 2009;70(8):964–972. All claims based on an equine model; it is unknown how results from the equine models compare with clinical results in humans.</p>'+
  '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Orthopedic device leaders <em>in Texas.</em></h2></div><p data-r>From headquarters in Colleyville, Texas, a centre for research, development and distribution, Bone Solutions is registered with the FDA and builds its quality system around compliant design, development, production and delivery.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Clearances, patents <em>and insights.</em></h2></div><p data-r>The latest FDA clearances, patents and articles from the Bone Solutions blog on bone grafting and orthopedic practice.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, hospitals and distributors</span>'+
   '<h2 class="big split">Talk to <em>Bone Solutions.</em></h2>'+
   '<p class="sub" data-r>Contact us for more information about Bone Solutions, ordering, fact sheets and our magnesium-based technology.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+EMAIL+'">Email us '+ARR+'</a><a class="btn" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Bone Solutions, Inc.<br>5712 Colleyville Blvd., Suite 210<br>Colleyville, Texas 76034</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+EMAIL+'">'+EMAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+18178098850">817-809-8850</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>5712 Colleyville Blvd., Suite 210<br>Colleyville, Texas 76034</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+EMAIL+'">Email us</a><br><a class="ul" href="tel:+18178098850">817-809-8850</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>Mg OSTEOCRETE · Mg OSTEOINJECT · Mg OSTEOREVIVE · T-HAN delivery system</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="72" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:300;font-size:70px;letter-spacing:.01em">BONE<tspan font-weight="600">SOLUTIONS</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Bone Solutions, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",products:"products",features:"features",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Bone Solutions — Magnesium-based bone void fillers",x:"Home"};
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
