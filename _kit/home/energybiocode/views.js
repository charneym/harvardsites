/* ================= VIEWS (home only: Technology / Programs / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function lead(){var p=TEAM[0];
  return '<div class="lead"><div class="lead-n"><span class="lab kick" data-r>'+esc(p.g)+'</span><h3 class="split">'+esc(p.name)+'</h3><p class="lab rl" data-r>'+esc(p.title)+'</p></div>'+
   '<div class="lead-b"><p data-r>'+esc(p.sum)+'</p><p class="aff" data-r>EnergyBioCode LLC · Cedar Knolls, New Jersey</p></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Aerosol drug delivery<span class="nomob"> · Cedar Knolls, New Jersey</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Calmer airflow,</span><span class="l">deeper <em>in the lung.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>EnergyBioCode develops ModiFlow, a flow-modification device that laminates an inhaled aerosol to reduce its turbulence, so more of the medicine can travel past the upper airways toward the lower lungs.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How ModiFlow works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>The human bronchial tree · schematic render</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">The lower lungs receive the whole of the heart’s output, and medicine that reaches them skips liver metabolism and digestive enzymes. Yet inhaled aerosol settles mostly in the upper airways. <em>ModiFlow is built to change where it lands.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">100%</span><span class="k">Of cardiac output flows through the lower lungs</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~1%</span><span class="k">Of cardiac output reaches the upper airways, where most aerosol deposits</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$306.8K</span><span class="k">NHLBI SBIR Phase I award, September 2026</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Beyond lung disease</span><p data-r>The deep lung is an attractive route for inhalable insulin, pain management, cancer treatment and immunotherapy, as well as for diseases of the lung itself.</p></div>'+
    '<div><span class="lab kick" data-r>For costly, aggressive drugs</span><p data-r>Nebulizers, metered-dose and dry-powder inhalers often miss the right regions of the lung, which matters most when the drug is expensive or highly aggressive.</p></div>'+
    '<div><span class="lab kick" data-r>Tested against the spacer</span><p data-r>Earlier studies found that pre-laminating the aerosol flow improved delivery to distant targets, with or without spatial barriers in the way.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Straighten the flow, <em>reach the lung.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Spray</span><span>Laminate</span><span>Deliver</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A turbulent cloud.</h2><p>A puff from an inhaler leaves as a turbulent cloud. Much of it strikes the walls of the device and the upper airways, so deposition is skewed far from the lower lungs where it could do most.</p></article>'+
     '<article class="step"><h2>Split into calm sub-flows.</h2><p>ModiFlow pre-laminates the aerosol before it is inhaled: internal septa divide the flow into smaller, orderly sub-flows, and the turbulence drops.</p></article>'+
     '<article class="step"><h2>Through the bifurcation.</h2><p>The NHLBI-funded Phase I project refines ModiFlow’s geometry and compares pre-laminated flow with a standard spacer through 3D models of the bronchial bifurcation.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="programs" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">Device science, <em>cell science.</em></h2></div><p data-r>EnergyBioCode’s work runs on public research funding: a federal SBIR award for ModiFlow, and a New Jersey R&amp;D voucher for its cell-based breast cancer research.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Funded by</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A small lab with <em>a clear target.</em></h2></div><p data-r>EnergyBioCode is a New Jersey research company working on aerosol drug delivery and cell-based cancer research from Cedar Knolls.</p></div>'+
   lead()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Funded, published, <em>under way.</em></h2></div><p data-r>A federal SBIR award and a peer-reviewed paper in September 2026, both on the public record.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, clinicians and investors</span>'+
   '<h2 class="big split">Help the dose <em>reach the lung.</em></h2>'+
   '<p class="sub" data-r>EnergyBioCode is based in Cedar Knolls, New Jersey. To talk about ModiFlow, the SBIR project or a research partnership, find us here.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAP+'" target="_blank" rel="noopener">Find us in Cedar Knolls '+ARR+'</a><a class="btn" href="'+RP_MF+'" target="_blank" rel="noopener">See the NHLBI award</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>EnergyBioCode LLC<br>Cedar Knolls<br>New Jersey 07927</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Technology</span><p data-r>ModiFlow flow-modification device<br>for aerosol drug delivery</p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r>NIH National Heart, Lung, and Blood Institute<br>SBIR Phase I</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Cedar Knolls<br>New Jersey 07927</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Supported by</span>NIH National Heart, Lung,<br>and Blood Institute</div>'+
   '<div class="c"><span class="lab">Focus</span>Laminated aerosol flow<br>for inhaled drug delivery</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 62" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'IBM Plex Sans\',system-ui,sans-serif;font-weight:500;font-size:60px;letter-spacing:.02em">EnergyBioCode</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 EnergyBioCode LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",programs:"programs",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"EnergyBioCode — ModiFlow aerosol drug delivery, Cedar Knolls, New Jersey",x:"Home"};
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
