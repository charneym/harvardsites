/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="rg-tm">'+gs.map(function(g){return '<div class="rg-tg"><span class="lab kick" data-r>'+esc(g)+'</span><ul>'+by[g].map(function(p){
    return '<li data-r><span class="rg-nm">'+esc(p.name)+'</span>'+(p.title!==g?'<span class="rg-rl">'+esc(p.title)+'</span>':'')+'</li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Equipment for tissue manufacturing","Some challenges in regenerative medicine simply don’t have off-the-shelf equipment. We design and build custom automation for the specific tissue, scale and quality requirements of your work, from single processing modules to integrated production lines.",'<path d="M8 44h40"/><path d="M14 44V22h28v22"/><path class="a" d="M22 22V10h12v12"/><circle class="f" cx="28" cy="33" r="4"/>'],
  ["Process development as a service","A protocol that works on the bench rarely works the same way at scale. We take your existing process and make it scalable, reliable and manufacturing-ready: re-engineering steps, automating where it adds value, and validating along the way.",'<path d="M6 40c10 0 12-24 22-24s12 24 22 24"/><path class="a" d="M6 46h44"/><circle class="f" cx="28" cy="16" r="3.5"/>'],
  ["Knowledge and collaborations","We run grant-funded projects that produce micro- and macro-tissue with automated workflows, validating innovations and delivering proof-of-concept with and for our partners.",'<circle cx="20" cy="28" r="12"/><circle cx="36" cy="28" r="12"/><path class="a" d="M28 19v18"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function expert(){return '<div class="rg-ex"><div class="rg-exh"><span class="lab kick" data-r>Areas of expertise</span><p data-r>Behind every capability is an expert who has spent years working with it. Many techniques can be adapted, combined or extended for new applications.</p></div><div class="rg-exg">'+
  EXPERT.map(function(e){return '<div class="rg-exc" data-r><h4>'+esc(e[0])+'</h4><ul>'+e[1].map(function(x){return '<li>'+esc(x)+'</li>'}).join("")+'</ul></div>'}).join("")+'</div></div>'}
function collab(){return '<div class="rg-co">'+
  '<div class="rg-cc"><span class="lab kick" data-r>Access</span><h3 data-r>Our facilities and expertise</h3><p data-r>ReGEN Biomedical operates as part of the RegMed XB Pilot Factory. Our laboratories, automated platforms and specialised expertise are open to companies, start-ups, knowledge institutions, consortia and ecosystem partners.</p>'+
   '<ul data-r><li>Use of our facilities and equipment</li><li>Process development for cell-based systems</li><li>Automation and scale-up support</li><li>Feasibility studies and pilot projects</li><li>Workshops and training</li></ul></div>'+
  '<div class="rg-cc"><span class="lab kick" data-r>Funding</span><h3 data-r>The Development Program</h3><p data-r>Alongside access to our facilities, we fund R&D projects that advance manufacturing technology for regenerative medicine. SMEs can apply for targeted funding to develop scalable manufacturing equipment that aligns with our roadmap; each call is assessed by a project advisory board.</p>'+
   '<ul data-r><li>Open: multi-cellular microtissue development, deadline 1 January 2027</li><li>Under review: high-throughput µtissue visualisation, “TissueFlux”</li><li>More topics opening soon</li></ul></div>'+
  '</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>ReGEN Biomedical<span class="nomob"> · Maastricht, the Netherlands</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Regenerative</span><span class="l">medicine,</span><span class="l"><em>made at scale.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>We grow large amounts of robust, reproducible micro-tissues and assemble them into macro-tissues, on automated, quality-controlled production platforms that help therapies move from research to clinical and commercial reality.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/what-we-do">What we do</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why now</span>'+
   '<h2 class="txt" id="mani">Most breakthroughs in regenerative medicine never reach patients because they can’t be produced at scale. Manual lab processes don’t translate easily into industrial manufacturing. <em>That’s where we come in.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">€2.05M</span><p class="k">EU contribution to ReGEN Biomedical in NEOLIVER, Horizon Europe, 2025–2028</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">Pilot plants in the RegMed XB regenerative medicine pilot factory, Maastricht among them</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Ways to work with us: equipment, process development, and grant-funded collaboration</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">From cells to <em>tissue.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Expand</span><span>Form</span><span>Assemble</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Cells, grown at scale.</h2><p>Stem cells such as hMSCs and iPSCs are expanded in small-scale stirred tank bioreactors, on microcarriers or in suspension, in place of manual, labour-intensive flask work.</p></article>'+
     '<article class="step"><h2>Robust, reproducible micro-tissues.</h2><p>The cells form large amounts of small, uniform pieces of tissue: building blocks for regenerative therapies, and models for toxicity and pharma screening.</p></article>'+
     '<article class="step"><h2>Assembled into macro-tissues.</h2><p>Micro-tissues are assembled into functional pieces of human organs, on fully automated platforms with advanced offline and inline quality control.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="what-we-do" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>What we do</span><h2 class="d2 split">From research to <em>scalable production.</em></h2></div><p data-r>We combine cell biology, automation, bioprinting and engineering under one roof, so partners can move from a working protocol to a scalable, reproducible process, and ultimately to clinical and commercial reality.</p></div>'+
   caps()+expert()+
  '</div></section>'+

  '<section class="sec dark2" id="projects" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Projects</span><h2 class="d2 split">Building the <em>RM industry.</em></h2></div><p data-r>Large-scale, reliable production is one of the foundations of a new manufacturing industry around affordable regenerative medicine. These programmes fund the platforms we build.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people behind <em>the platforms.</em></h2></div><p data-r>A team of biologists, engineers and quality specialists in Maastricht, with hands-on experience across cell biology, tissue engineering and automation, guided by supervisory and advisory boards.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="collaborate" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Collaborate</span><h2 class="d2 split">Let’s <em>collaborate.</em></h2></div><p data-r>Do you see a connection between your ambitions and our expertise, facilities and strategic focus? Our collaborations are built on transparent, objective and clearly defined principles.</p></div>'+
   collab()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Ready to <em>work together?</em></h2>'+
   '<p class="sub" data-r>Whether you’re scaling up a promising therapy, looking for a development partner, or solving a manufacturing problem without an off-the-shelf answer, we’d be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to ReGEN '+ARR+'</a><a class="btn" href="#/collaborate">Ways to collaborate</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Graanmolen 20<br>6229 PA Maastricht</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@regenbiomedical.com</a></p></div>'+
    '<div><span class="lab" data-r>Visits</span><p data-r>By appointment only</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Maastricht, the Netherlands</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@regenbiomedical.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/what-we-do">What we do</a><br><a class="ul" href="#/projects">Projects</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/collaborate">Collaborate</a></div>'+
   '<div class="c"><span class="lab">Funding</span>Horizon Europe participant</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Montserrat\',sans-serif;font-weight:600;font-size:60px">ReGEN Biomedical</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ReGEN Biomedical BV</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story","what-we-do":"what-we-do",projects:"projects",team:"team",collaborate:"collaborate",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ReGEN Biomedical — regenerative medicine, made at scale",x:"Home"};
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
