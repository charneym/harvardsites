/* ================= VIEWS (home only: Technology / Products / Team / News open build-out pages; Contact scrolls) ================= */
function lines(){return '<ul class="pfr">'+LINES.map(function(c){return '<li><span class="lab tg">'+esc(c[1])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[2])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Specifications</a></li>'}).join("")+'</ul>'}
function firsts(){return '<ol class="frs">'+FIRSTS.map(function(a){return '<li><span class="y">'+esc(a[0])+'</span><p>'+esc(a[1])+'</p></li>'}).join("")+'</ol>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>NMR probes · MRI coils · THz<span class="nomob"> · Columbia, South Carolina</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Solids NMR probes,</span><span class="l">made in Columbia,</span><span class="l"><em>since 1982.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Doty Scientific designs and builds solids NMR probes, pre-clinical MRI coils and low-loss THz components for Bruker, Varian/Agilent, JEOL, Tecmag and Q-One systems.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">See the products '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
   '<p class="lab hcap" data-r>Pictured: the copper heat exchanger in the vacuum base of a Doty ULT probe</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Who we are</span>'+
   '<h2 class="txt" id="mani">A small team of scientists and engineers, supporting the <b class="w0">NMR and MRI researcher</b> with custom probe development and <em>the best solids NMR and MRI-RF products in the industry.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">28,000</span><span class="k">Revolutions per second from our 3 mm microturbine sample spinners</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1200 MHz</span><span class="k">Solids NMR probes now reach 1.2 GHz, with H/F/X/Y high resolution</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~30</span><span class="k">Patents, in NMR, RF, turbomachinery and heat transfer</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Dozens of firsts in CP/MAS</span><p data-r>Multinuclear, narrow-bore, triple-resonance, 500 MHz, SAS, 750 °C, 26 kHz, 15 K and 600 MHz: for years the major force in solids probe technology.</p></div>'+
    '<div><span class="lab kick" data-r>Supersonic spinners</span><p data-r>Air-bearing-supported, microturbine-driven, all-ceramic sample spinners, capable of supersonic surface speeds.</p></div>'+
    '<div><span class="lab kick" data-r>A team that stays</span><p data-r>Four PhDs, engineers, and highly skilled machinists and technicians. More than half of our people have been with us over seven years.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Magic-angle spinning</span><h2 class="d3">A solid, spun until <em>its spectrum sharpens.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sample</span><span>Angle</span><span>Spin</span><span>Signal</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A ceramic rotor.</h2><p>Solids, semi-solids, tissues or lossy liquids are packed into an all-ceramic rotor a few millimetres across and sealed with a cap. Held still, a solid gives only broad, featureless humps.</p></article>'+
     '<article class="step"><h2>Tilted to 54.74°.</h2><p>The couplings that smear a solid’s spectrum scale with 3cos²θ − 1, which vanishes when the rotor axis sits at the magic angle to the magnet’s field.</p></article>'+
     '<article class="step"><h2>Spun on air.</h2><p>Air bearings float the rotor in its stator and a microturbine drives it. Our 3 mm spinners reach 28,000 revolutions per second.</p></article>'+
     '<article class="step"><h2>Read by a No-E coil.</h2><p>The RF coil around the rotor excites and detects the nuclei. Doty No-E designs keep electric fields ultra-low, so decoupling heats the sample far less, and the humps resolve into sharp lines.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Five lines, <em>one workshop.</em></h2></div><p data-r>Designed, simulated and machined in Columbia, South Carolina, for Bruker, Varian/Agilent, JEOL, Tecmag, Q-One and other systems, with custom probe development on request.</p></div>'+
   lines()+
  '</div></section>'+

  '<section class="sec dark" id="firsts" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Achievements</span><h2 class="d2 split">Four decades <em>of firsts.</em></h2></div><p data-r>From a 5 kHz MAS probe that could spin upside down to quad-resonance probes at 1.2 GHz and a THz programme funded by the NIH.</p></div>'+
   firsts()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Physics, chemistry <em>and the machine shop.</em></h2></div><p data-r>Our strengths lie in physics, biochemistry, and electrical, mechanical and manufacturing engineering, in a company founded and still led by Dr. F. David Doty.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Ever higher <em>fields.</em></h2></div><p data-r>New probes, new publications with research partners, and federal funding for the next generation of DNP.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers and facilities</span>'+
   '<h2 class="big split">Tell us about <em>your sample.</em></h2>'+
   '<p class="sub" data-r>Questions about a probe, a coil or a custom build, quotes, accessories and service: the Doty team answers directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email sales '+ARR+'</a><a class="btn" href="'+TELSH+'">Call '+TELS+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Doty Scientific, Inc.<br>700 Clemson Road<br>Columbia, SC 29229</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r>Main <a class="ul" href="'+TELH+'">'+TEL+'</a><br>Sales <a class="ul" href="'+TELSH+'">'+TELS+'</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+SVC+'">'+SVC+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>700 Clemson Road<br>Columbia, South Carolina 29229</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+INFO+'">'+INFO+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Elsewhere</span><a class="ul" href="https://www.linkedin.com/company/doty-scientific" target="_blank" rel="noopener">LinkedIn</a><br><a class="ul" href="https://dotynmr.com/references/doty-publications/" target="_blank" rel="noopener">Publications</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'IBM Plex Sans\',Arial,sans-serif;font-weight:500;font-size:60px;letter-spacing:.2em">DOTY</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Doty Scientific, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",products:"products",firsts:"firsts",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Doty Scientific — NMR probes, MRI coils and THz components, Columbia, South Carolina",x:"Home"};
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
