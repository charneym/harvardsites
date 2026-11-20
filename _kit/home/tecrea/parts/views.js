/* ================= VIEWS (home only: Technology / Reagents / Programmes / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><div class="pn"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[2])+'</span></div><p>'+esc(c[3])+'</p></li>'}).join("")+'</ul>'}
function pipe(){return '<ul class="tm mf">'+PIPE.map(function(p){
  return '<li><div class="tn"><span class="lab rl">'+esc(p[0])+'</span><h3>'+esc(p[1])+'</h3></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm crew">'+TEAM.map(function(p){return '<li><h3>'+esc(p[0])+'</h3><p class="lab rl">'+esc(p[1])+'</p></li>'}).join("")+'</ul>'+
  '<div class="adv"><span class="lab kick" data-r>Advisory &amp; support</span><p data-r>'+ADV.map(function(a){return '<span>'+esc(a[0])+' <b>'+esc(a[1])+'</b></span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'}
function news(){return '<ul class="nws newslist">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Nanotechnology<span class="nomob"> · London Bioscience Innovation Centre</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">We think small,</span><span class="l"><em>so you can work big.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Tecrea’s Nanocin platform packages DNA, RNA, small molecules, proteins and peptides into nanoparticles that carry them into cells and tissue, while keeping more than 99% of cells viable, from the research bench to the clinic.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How Nanocin works '+ARR+'</a><a class="btn" href="#/contact">Talk to a Tecrea scientist</a></div></div>'+
   '<p class="lab hcap" data-r>Cultured cells, fluorescence microscopy. Illustrative photograph.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About Tecrea</span>'+
   '<h2 class="txt" id="mani">Founded in 2012 as a spin-out of the Royal Veterinary College, Tecrea built one delivery platform for research, bioprocessing and medicine: <em>Nanocin, the transfection reagent that translates to the clinic.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt;99%</span><span class="k">Cell viability maintained during delivery, so Nanocin supports serial transfections and in vivo use</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><span class="k">Cargo classes delivered: DNA, RNA, small molecules, proteins and peptides</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2b</span><span class="k">Phase of a clinical study, using Nanocin in a topical antifungal, that met its primary endpoint</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Research</span><p data-r>Transfection reagents for mammalian and bacterial cells, with simple, fast protocols and low toxicity.</p></div>'+
    '<div><span class="lab kick" data-r>Bioprocessing</span><p data-r>Higher yields and more reliable results in scalable AAV and lentivirus production, with GMP-compliant Nanocin.</p></div>'+
    '<div><span class="lab kick" data-r>Human and animal health</span><p data-r>Reformulating existing drugs for better penetration and more targeted delivery, with large and small pharma partners.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">Packaged small, <em>delivered whole.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Cargo</span><span>Assembly</span><span>Uptake</span><span>Delivery</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A cargo that has to get inside.</h2><p>DNA, RNA, small molecules, proteins and peptides only work once they reach the inside of the cell. Getting them there, at the site of action, is where many experiments and drugs fall short.</p></article>'+
     '<article class="step"><h2>Self-assembled into nanoparticles.</h2><p>Nanocin is a dynamic system: its core polymer, polyhexanide, rapidly self-assembles with the cargo and packages it into nanoparticles. The same polymer has a long safety record in products from eye drops to hand wash.</p></article>'+
     '<article class="step"><h2>Carried across the membrane.</h2><p>The nanoparticles penetrate cells and tissue far better than the free cargo, delivering into both mammalian and bacterial cells, with fast, streamlined protocols.</p></article>'+
     '<article class="step"><h2>Delivered, with the cell intact.</h2><p>The cargo is released inside the cell, which typically stays more than 99% viable. That is what lets Nanocin be used for serial transfections, sensitive cells, in vivo work and, under GMP, the clinic.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="reagents" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Nanocin reagents</span><h2 class="d2 split">One platform, <em>every cargo.</em></h2></div><p data-r>Transfection, small-molecule, protein and peptide delivery reagents that give high accuracy, speed and yield, and keep cells viable.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>In use at</span><p class="cr" data-r>'+LABS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="programmes" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes and partnerships</span><h2 class="d2 split">From the bench <em>to the clinic.</em></h2></div><p data-r>“Nanocin offers enormous potential for significant improvements in drug efficiency and targeted delivery.”</p></div>'+
   pipe()+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Scientists <em>who think small.</em></h2></div><p data-r>A privately held company registered in the UK, with its research and development at the London Bioscience Innovation Centre, next to the Royal Veterinary College.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest <em>from Tecrea.</em></h2></div></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers, partners and distributors</span>'+
   '<h2 class="big split">Take your research <em>to the next level.</em></h2>'+
   '<p class="sub" data-r>Questions about Nanocin products, bioprocessing or drug formulation go straight to Tecrea’s scientists. The same address handles partnerships and distribution.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+WEB+'buy/" target="_blank" rel="noopener">Buy Nanocin</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Research &amp; development</span><p data-r>Tecrea Ltd<br>London Bioscience Innovation Centre<br>2 Royal College Street<br>London NW1 0NH</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Visiting</span><p data-r>4 Royal College Street<br>London NW1 0TU<br>Enter via RVC reception</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p><span class="lab" data-r>UK company no. 07966622</span></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Research &amp; development</span>London Bioscience Innovation Centre<br>2 Royal College Street, London NW1 0NH</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/reagents">Reagents</a><br><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+WEB+'" target="_blank" rel="noopener">Shop</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Nanocin cell and tissue delivery<br>for research, bioprocessing and medicine</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 96" aria-hidden="true"><text x="320" y="84" text-anchor="middle" style="font-family:\'Big Shoulders Display\',system-ui,sans-serif;font-weight:700;font-size:104px;letter-spacing:.06em">TECREA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Tecrea Ltd.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",reagents:"reagents",programmes:"programmes",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Tecrea — Nanocin nanotechnology for cell and tissue delivery, London",x:"Home"};
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