/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[4])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Clinician led","Our innovations stem from close collaboration with clinicians worldwide, so each technology is tailored to the specific needs of their patients.",'<circle cx="28" cy="17" r="8"/><path d="M12 48c0-9 7-16 16-16s16 7 16 16"/><path class="a" d="M22 38v6M19 41h6"/><circle class="f" cx="28" cy="17" r="2.4"/>'],
  ["Leaner patient pathways","We simplify complex patient pathways, reduce unnecessary hospital stays and minimise invasive procedures, for swifter recoveries and less burden on patients and hospitals.",'<path d="M8 40C18 40 18 16 28 16S38 40 48 40"/><path class="a" d="M8 40H48"/><circle class="f" cx="48" cy="40" r="3"/><circle cx="8" cy="40" r="3"/>'],
  ["A lower carbon spend","Every procedure and hospital stay has a carbon and waste cost. Shorter pathways, and implants that need no removal, mean fewer of both.",'<path d="M28 48V24"/><path d="M28 30C28 20 36 12 46 12C46 22 38 30 28 30Z"/><path class="a" d="M28 36C28 28 21 22 12 22C12 30 19 36 28 36Z"/><circle class="f" cx="28" cy="48" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick">Regulatory record</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab">'+esc(e[0])+'</dt><dd>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s">Sources: FDA 510(k) database and summaries; amg International GmbH. ARCHIMEDES is made of polydioxanone with barium sulphate, so it is visible under fluoroscopy, in 6F, 8F and 10F diameters.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Biodegradable and minimally invasive devices<span class="nomob"> · Dublin · Winsen · Charlotte</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The stent that</span><span class="l">needs no <em>removal.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Q3 Medical develops biodegradable and minimally invasive technologies that reduce complications and the need for removal procedures. Its <span class="nw">ARCHIMEDES</span> stent drains the bile and pancreatic ducts, then degrades in place.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How ARCHIMEDES works '+ARR+'</a><a class="btn" href="#/products">Our products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick">Creating value by helping people</span>'+
   '<h2 class="txt" id="mani">A multidisciplinary approach with the patient at the core: technology that shortens hospital stays, minimises costly complications and <em>eliminates the need for follow-up procedures.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1.5M</span><p class="k">Plastic biliary stents used each year, each needing a removal procedure; ARCHIMEDES is designed to replace them</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">70+</span><p class="k">Patents and utility models held worldwide</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+</span><p class="k">Countries where the group’s AMG business commercialises its technology</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How ARCHIMEDES works</span><h2 class="d3">Drain the duct, <em>then dissolve.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Today</span><span>Drainage</span><span>Degradation</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Plastic stents must come out.</h2><p>A blocked bile or pancreatic duct is commonly held open with a plastic stent. It works, but it has to be taken out again in a second procedure, with its own risk of complications.</p></article>'+
     '<article class="step"><h2>A helix that drains.</h2><p>ARCHIMEDES is placed endoscopically, like a plastic stent. Its fluted profile has two spiral drainage channels and a central lumen, so fluid flows around and through it. Flaps and split ends hold it in place.</p></article>'+
     '<article class="step"><h2>Then it degrades in place.</h2><p>Made of polydioxanone, the stent loses its strength after about 20 days and degrades fully within 161 days, in the duct. There is no removal procedure.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Technology</span><h2 class="d2 split">Better pathways, <em>lower costs.</em></h2></div><p>Our mission is to develop and commercialise biodegradable and minimally invasive technologies that improve patients’ quality of life, lower costs and promote sustainability.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Products</span><h2 class="d2 split">Biodegradable <em>and peripheral.</em></h2></div><p>Biodegradable stents for the bile and pancreatic ducts, and catheter-based technologies for peripheral interventions, built on the group’s own manufacturing.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="group" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Group</span><h2 class="d2 split">Built on <em>German manufacturing.</em></h2></div><p>Q3 Medical Group is a holding business that helps its companies with capital, efficiency and growth. Each business runs its own development, production and distribution.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick">Q3 Medical Germany</span><p>Founded in 1997 as an OEM maker of implantable stents. Two Class 10,000 clean rooms in its own facility in Winsen, near Hamburg.</p></div>'+
    '<div><span class="lab kick">amg International</span><p>Develops and sells cardiology and peripheral vascular devices in Europe, South America, the Middle East and Asia, and the ARCHIMEDES line in Europe.</p></div>'+
    '<div><span class="lab kick">Q3 Medical USA</span><p>Based in Charlotte, North Carolina, the group’s company for the North American market and the applicant for the ARCHIMEDES FDA clearances.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">News</span><h2 class="d2 split">From CE mark <em>to FDA clearance.</em></h2></div><p>Milestones for ARCHIMEDES, from its European approval to two FDA 510(k) clearances in the United States.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick">Clinicians, partners and distributors</span>'+
   '<h2 class="big split">Talk to <em>Q3 Medical.</em></h2>'+
   '<p class="sub">Whether it is feedback, a question about our products or a partnership, someone from the team will get back to you as soon as possible.</p>'+
   '<div class="act"><a class="btn solid" href="mailto:'+MAIL+'">Email Q3 Medical '+ARR+'</a><a class="btn" href="#/products">See the products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab">Q3 Medical Group</span><p>20 Holles Street<br>Dublin 2, Ireland</p></div>'+
    '<div><span class="lab">Manufacturing</span><p>Q3 Medical Germany GmbH<br>Boschstrasse 16<br>21423 Winsen, Germany</p></div>'+
    '<div><span class="lab">Enquiries</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+4941716578">+49 4171 6578 0</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Group</span>20 Holles Street<br>Dublin 2, Ireland</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/group">Group</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead product</span>ARCHIMEDES<br>Biodegradable stent</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Newsreader\',Georgia,serif;font-weight:300;font-size:58px;letter-spacing:.04em">Q3 Medical</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Q3 Medical Group</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",approach:"story",technology:"technology",products:"products",group:"group",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Q3 Medical Group — ARCHIMEDES biodegradable stents and minimally invasive devices",x:"Home"};
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
