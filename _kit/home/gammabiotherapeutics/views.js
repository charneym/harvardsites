/* ================= VIEWS (home only: Science / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'+
  '<div class="adv"><span class="lab kick" data-r>Scientific advisors</span><p data-r>'+ADVISORS.map(function(a){return '<span>'+esc(a)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '<div class="adv"><span class="lab kick" data-r>Consultants</span><p data-r>'+CONSULT.map(function(a){return '<span>'+esc(a)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage immuno-oncology<span class="nomob"> · Portland, Oregon</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Protecting</span><span class="l">the T cells that</span><span class="l"><em>fight cancer.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>We’re creating therapies to disarm cancer’s defenses against the immune system, helping the body’s own T cells survive, get inside tumors, and fight cancer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">Explore the science '+ARR+'</a><a class="btn" href="#/pipeline">The trial</a></div></div>'+
   '<p class="lab hcap" data-r>An IgG antibody, atom by atom, from its crystal structure (PDB 1IGT): the class of molecule M3T01 belongs to.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Introduction</span>'+
   '<h2 class="txt" id="mani">For decades, Fas ligand has silently destroyed the body’s T cells and limited the promise of immunotherapy. Gamma has pioneered the first FasL-neutralizing antibody <em>to enter clinical trials.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1st</span><p class="k">FasL-neutralizing monoclonal antibody to enter clinical trials: M3T01</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">300×</span><p class="k">More potent than APG101, the only other FasL blocker taken into cancer trials, in preclinical studies</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">110</span><p class="k">Patients planned in the Phase 1 trial at Providence Cancer Institute, Portland</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Fully human</span><p data-r>M3T01 is a fully human IgG4/kappa monoclonal antibody that binds FasL with picomolar affinity, built for potency, a long half-life and use in combination.</p></div>'+
    '<div><span class="lab kick" data-r>Combination ready</span><p data-r>Because FasL is a distinct immunosuppressive pathway, M3T01 is tested alone and with checkpoint inhibitors such as pembrolizumab.</p></div>'+
    '<div><span class="lab kick" data-r>Born in the clinic</span><p data-r>Discovered by Dr. Matthew Taylor and his team at the Earle A. Chiles Research Institute, the research arm of Providence Cancer Institute.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The science</span><h2 class="d3">A shield for <em>the T cell.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Problem</span><span>Blockade</span><span>Infiltration</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Fas ligand kills the T cells.</h2><p>Many tumors produce Fas ligand (FasL). When activated T cells encounter it, a self-destruct program, apoptosis, starts, and they die before they can eliminate cancer cells.</p></article>'+
     '<article class="step"><h2>M3T01 neutralizes FasL.</h2><p>Gamma’s antibody binds FasL with picomolar affinity and potently inhibits FasL-mediated cell death, so the death signal never reaches the T cell.</p></article>'+
     '<article class="step"><h2>T cells survive and get in.</h2><p>Shielded from FasL, T cells persist, infiltrate tumors and destroy cancer cells, which may augment checkpoint inhibitors and adoptive cell therapies.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One antibody, <em>in the clinic.</em></h2></div><p data-r>A first-in-human Phase 1 trial (NCT06719362) is evaluating M3T01 in patients with advanced solid tumors, alone and in combination, at Providence Cancer Institute in Portland.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Trial and funding</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">From the bedside <em>to the bench.</em></h2></div><p data-r>Led by Matthew Taylor, M.D., the team bridges the bench and the bedside, united by one goal: protect the immune system so patients can live cancer-free.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From first patient <em>to NCI funding.</em></h2></div><p data-r>The Phase 1 trial opened at Providence Cancer Institute in June 2025. In August 2026 the National Cancer Institute awarded an SBIR Phase II grant to support it.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>The trial, partners and investors</span>'+
   '<h2 class="big split">Help T cells <em>win the fight.</em></h2>'+
   '<p class="sub" data-r>Gamma is seeking investors and collaborators to advance M3T01 and explore new indications where protecting T cells could redefine treatment. To ask about the trial, a partnership or an investment, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+CT+'" target="_blank" rel="noopener">Trial details</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Gamma Biotherapeutics, Inc.<br>Portland, Oregon</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Trial site</span><p data-r>Providence Cancer Institute<br>Franz Clinic, Portland</p><a class="ul lk" href="'+CT+'" target="_blank" rel="noopener" data-r>NCT06719362</a></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Gamma Biotherapeutics, Inc.<br>Portland, Oregon</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+CT+'" target="_blank" rel="noopener">The M3T01 trial</a></div>'+
   '<div class="c"><span class="lab">Focus</span>FasL-blocking antibodies<br>for cancer immunotherapy</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="62" text-anchor="middle" style="font-family:\'Sora\',system-ui,sans-serif;font-weight:300;font-size:80px;letter-spacing:.24em"><tspan fill="#eef3fa">GAMMA</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Gamma Biotherapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Gamma Biotherapeutics — protecting T cells from Fas ligand, Portland, Oregon",x:"Home"};
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
