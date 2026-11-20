/* ================= VIEWS (home only: Technology / Programs / Team / News open build-out pages via _kit/lib/buildout.js; Contact scrolls) ================= */
function progs(){return '<ul class="pfr">'+PROGS.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'<span class="loc">'+esc(c[1])+'</span></h3><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+RP+c[4]+'" target="_blank" rel="noopener">NIH RePORTER</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function crew(){return '<div class="crew"><p class="mh-label" data-r>The investigator team</p><div class="crew-g">'+CREW.map(function(c){return '<div><span class="lab kick" data-r>'+esc(c[0])+'</span><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Cell isolation<span class="nomob"> · NIH SBIR Phase II</span> · Worcester, Massachusetts</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Cell isolation,</span><span class="l"><em>rebuilt on a chip.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>CG Scientific is developing a low-cost, easy-to-use microfluidic device that isolates peripheral blood mononuclear cells from whole blood, built on its patented HEDS technology.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How HEDS works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Rendering: a plastic HEDS chip separating whole blood</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">The standard way to isolate PBMCs, Ficoll density gradient centrifugation, is difficult, hands-on and varies from user to user. We are building the tool that could become <em>the new standard.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">97.2%</span><span class="k">PBMC recovery with HEDS in Phase I, against Ficoll, with no loss of viability</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">99.97%</span><span class="k">Of red blood cells removed in the same Phase I work, with 99.86% of platelets</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$6.2M</span><span class="k">In NIH SBIR funding since 2016, from five institutes and offices of the NIH</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Ten milliliters, fifteen minutes</span><p data-r>The device in development is designed to isolate PBMCs from 10 mL of blood in 15 minutes, as an easy-to-use alternative to a density gradient.</p></div>'+
    '<div><span class="lab kick" data-r>Molded, not machined</span><p data-r>HEDS chips can be made cost-effectively in cyclic olefin polymer by soft embossing, a mass-production technique, the key to a price the research market can bear.</p></div>'+
    '<div><span class="lab kick" data-r>Cells as they were</span><p data-r>No change in immunophenotype and no T cell activation: results that stay consistent, accurate and representative of the disease being studied.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How HEDS works</span><h2 class="d3">Whole blood in, <em>clean PBMCs out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Blood</span><span>Chip</span><span>Separate</span><span>Collect</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A tube of blood.</h2><p>PBMCs are essential to immunology, vaccine development and drug discovery. Today they are pulled from whole blood by Ficoll centrifugation, which recovers them sub-optimally and is poor at removing platelets.</p></article>'+
     '<article class="step"><h2>Into a HEDS chip.</h2><p>The blood runs through a microfluidic chip built on CG Scientific’s patented High Efficiency Deterministic Separation technology, molded in plastic for low manufacturing cost.</p></article>'+
     '<article class="step"><h2>Two streams out.</h2><p>PBMCs leave in one stream, red cells and platelets in the other. In Phase I, HEDS recovered about 97.2% of PBMCs and removed about 99.97% of red cells and 99.86% of platelets.</p></article>'+
     '<article class="step"><h2>Cells as they were.</h2><p>No loss of viability, no change in immunophenotype and no T cell activation. Phase II builds the chip into a cartridge, then a pre-production device, benchmarked at multiple sites.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="programs" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">One problem, <em>four kinds of cell.</em></h2></div><p data-r>Each program takes a slow, user-dependent isolation step, from blood, pancreas or fat, and builds a device for higher yield, better cell quality and less variation from run to run.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Funded by the National Institutes of Health</span><p class="cr" data-r>'+FUNDERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Separation science, <em>brought to the bench.</em></h2></div><p data-r>The investigator team includes the inventor of HEDS, with cell biologists, engineers, and directors of the laboratories that use Ficoll regularly.</p></div>'+
   team()+crew()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Funded, <em>and building.</em></h2></div><p data-r>NIH awards behind the HEDS platform and the company’s other cell isolation programs.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, partners and laboratories</span>'+
   '<h2 class="big split">Let’s talk about <em>cell isolation.</em></h2>'+
   '<p class="sub" data-r>For more information about CG Scientific as an investment opportunity, or about piloting a device in your lab, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email CG Scientific '+ARR+'</a><a class="btn" href="'+RP+'11337608" target="_blank" rel="noopener">Read the NIH award</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>CG Scientific, Inc.<br>60 Prescott Street<br>Worcester, MA 01605</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Policies</span><p data-r><a class="ul" href="https://www.cg-scientific.com/fcoi-policy" target="_blank" rel="noopener">Financial conflict of interest policy</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>60 Prescott Street<br>Worcester, Massachusetts 01605</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Rapid, low-cost<br>cell isolation</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 620 64" aria-hidden="true"><text x="310" y="52" text-anchor="middle" style="font-family:\'Cormorant Garamond\',Georgia,serif;font-weight:500;font-size:66px;letter-spacing:.01em">CG Scientific</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 CG Scientific, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (buildout.js owns #/more/*) ================= */
var SECS={about:"about",technology:"story",programs:"programs",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"CG Scientific — Rapid, low-cost cell isolation on a chip, Worcester, Massachusetts",x:"Home"};
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
