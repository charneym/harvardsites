/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function laserRows(){return '<ul class="pfr pipe np">'+LASERS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row sl-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function projects(){return '<div class="slp">'+PROJ.map(function(p){return '<a class="slp-c" href="'+p[4]+'" target="_blank" rel="noopener"><span class="lab" data-r>'+esc(p[3])+'</span><h3 data-r><b>'+esc(p[0])+'</b> '+esc(p[1])+'</h3><p data-r>'+esc(p[2])+'</p><span class="lab more">Project page '+ARR+'</span></a>'}).join("")+'</div>'}
function facts(){var S=[
  ["Marburg · since 1992","A university spin-off","Founded in Marburg as a spin-off of the university, where the first successful antireflection coatings on diode lasers were realised in 1987."],
  ["Headquarters · since 2021","1,200 m² with clean rooms","Larger facilities of more than 1,200 m² (13,000 sq. ft.), with office space and clean room production."],
  ["United States · since 1999","Buena Park, California","Sacher Lasertechnik, LLC was founded to serve customers in the U.S., with service centers in Europe, India, Japan and the U.S.A."]];
  return '<div class="sls">'+S.map(function(s){return '<div class="sl-site"><span class="lab" data-r>'+esc(s[0])+'</span><h3 data-r>'+esc(s[1])+'</h3><p data-r>'+esc(s[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Tunable diode lasers<span class="nomob"> · Marburg, since 1992</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">External cavity</span><span class="l">diode lasers,</span><span class="l"><em>tuned in Marburg.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Sacher Lasertechnik designs and builds high power tunable diode lasers, tapered amplifiers, laser diodes and low-noise controllers for research, spectroscopy, metrology, biomedicine and process control.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/lasers">Explore the lasers '+ARR+'</a><a class="btn" href="#/contact">Request an offer</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>From a university spin-off</span>'+
   '<h2 class="txt" id="mani">Founded by Dr. Joachim R. Sacher, one of the pioneers of diode lasers with external cavity, Sacher Lasertechnik grew into a technology leader in <em>high power tunable external cavity diode lasers.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1987</span><p class="k">The first successful antireflection coatings on diode lasers, realised at Marburg University</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5×10⁻⁵</span><p class="k">The reflectivity below which Sacher antireflection coats its laser diodes</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">sub-kHz</span><p class="k">Instantaneous linewidth of the Micron laser, with no moving parts</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside a Littman/Metcalf laser</span><h2 class="d3">One wavelength, <em>chosen by a mirror.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Diode</span><span>Grating</span><span>Tune</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>An AR-coated diode.</h2><p>The laser chip’s front facet is antireflection coated, to a reflectivity below 5×10⁻⁵, so it no longer forms a laser on its own. The cavity is built outside the chip.</p></article>'+
     '<article class="step"><h2>A grating, and a mirror.</h2><p>The collimated light strikes a diffraction grating at grazing incidence. The first order goes to a mirror and back into the chip, so only one wavelength is amplified; the zero order leaves as the output beam.</p></article>'+
     '<article class="step"><h2>Tilt the mirror, tune the laser.</h2><p>Turning the mirror selects a new wavelength, while the output beam keeps its direction. Sacher’s LION series covers 397 to 2,450 nm, with manual or motorized tuning.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="lasers" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Lasers</span><h2 class="d2 split">Tunable light, <em>from 370 to 2,450 nm.</em></h2></div><p data-r>Laser product families based on patented technology: tunable external cavity lasers, amplified lasers, laser diodes and the electronics that drive and lock them. Each links to its product page.</p></div>'+
   laserRows()+
   '<div class="bk"><span class="lab kick" data-r>Applications</span><p class="cr" data-r>'+APPS.map(function(g){return '<span>'+esc(g)+'</span>'}).join("")+'</p></div>'+
   '<div class="bk"><span class="lab kick" data-r>Fields</span><p class="cr" data-r><span>Research</span><span>Spectroscopy</span><span>Metrology</span><span>Quantum technologies</span><span>Environmental science</span><span>Biomedicine</span><span>Space technology</span><span>Process control</span></p></div>'+
   '<div class="act shop" data-r><a class="btn solid" href="https://www.sacher-laser.com/shop/" target="_blank" rel="noopener">Visit the online shop '+ARR+'</a></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Physicists and engineers, <em>in Marburg.</em></h2></div><p data-r>An interdisciplinary team of physicists, electrical engineers and biologists, presenting its research at international conferences and in journals since 1989. Your contacts:</p></div>'+
   team()+
   facts()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Research projects <em>and news.</em></h2></div><p data-r>Sacher Lasertechnik develops the laser sources for collaborative research projects in medical diagnostics, therapy and quantum technologies, alongside its product news.</p></div>'+
   projects()+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Sales and support</span>'+
   '<h2 class="big split">Find your <em>wavelength.</em></h2>'+
   '<p class="sub" data-r>For offers, custom systems or support, the teams in Marburg and Buena Park would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Sacher '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Sacher Lasertechnik GmbH<br>Hedwig-Jahnow-Str. 12<br>35037 Marburg, Germany</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>United States</span><p data-r>Sacher Lasertechnik, LLC<br>5765 Equador Way<br>Buena Park, CA 90620<br><a class="ul" href="tel:'+USTEL+'">'+USTELT+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Hedwig-Jahnow-Str. 12<br>35037 Marburg, Germany</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/lasers">Lasers</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">United States</span>Buena Park, California<br><a class="ul" href="tel:'+USTOLL+'">'+USTOLLT+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1200 72" aria-hidden="true"><text x="600" y="58" text-anchor="middle" style="font-family:\'Hanken Grotesk\',Arial,sans-serif;font-weight:300;font-size:66px;letter-spacing:.06em">SACHER LASERTECHNIK</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Sacher Lasertechnik GmbH</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",lasers:"lasers",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Sacher Lasertechnik — tunable external cavity diode lasers, Marburg, since 1992",x:"Home"};
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
