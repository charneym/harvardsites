/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function modRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk av">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["SAR systems","GLSAR and GSSAR","Compact synthetic aperture radars at L-band (1.2–1.4 GHz) and S-band (3.0–3.4 GHz), with up to four receiver channels and GNSS/inertial positioning. Under 6.5 kg in their carbon frame, they fly on UAVs, ride on a car’s roof rack or fit manned aircraft.",'<path d="M6 20h18v20H6zM32 20h18v20H32z"/><path class="a" d="M24 30h8M28 30v14M18 48h20"/><path d="M15 20v-8M41 20v-8"/>'],
  ["Portable Radar Interferometer","GPRI","A ground-based Ku-band radar (17.2 GHz) whose rotating real-aperture antennas scan a full 360° in about a minute, for millimetre-precision deformation measurements up to 10 km away. Ready for its first acquisition 30–45 minutes after arriving on site.",'<path d="M10 14h36M10 22h36M10 30h36"/><path class="a" d="M28 10v24"/><path d="M28 34l-10 18M28 34l10 18M28 34v18"/>'],
  ["Radiometers and custom instruments","ELBARA-II, SnowScat, WBScat","ELBARA-II, a 1.4 GHz radiometer first built under ESA contract for SMOS and SMAP signature studies, and custom-tailored microwave hardware such as the SnowScat and the 1–40 GHz WBScat scatterometers built for the European Space Agency.",'<path d="M14 40L22 16h12l8 24z"/><path class="a" d="M18 28h20"/><path d="M28 40v10M18 50h20"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+c[1]+'</span><h3 data-r>'+c[0]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function serv(){return '<div class="ev"><span class="lab kick" data-r>What we do for you</span><div><dl>'+SERV.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>We often work alongside partners, supporting geo-engineering firms and specialists in optical remote sensing. Write to us to discuss a solution or request a quote.</p></div></div>'}
function proj(){return '<div class="ev pubs"><span class="lab kick" data-r>Selected projects</span><div><dl>'+PROJ.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r><a class="ul" href="'+e[2]+'" target="_blank" rel="noopener">'+esc(e[1])+'</a></dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>GAMMA is an associated partner in NextGenCarbon, coordinated by the Swedish University of Agricultural Sciences. Successful, validated R&D becomes GAMMA products, services and consulting.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Microwave remote sensing<span class="nomob"> · Gümligen, Switzerland</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Radar that sees</span><span class="l">the ground</span><span class="l"><em>move.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Since 1995, GAMMA Remote Sensing has built the GAMMA Software for SAR and interferometric processing, designed lightweight radar instruments, and measured the Earth’s surface from space, the air and the ground.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How radar measures motion '+ARR+'</a><a class="btn" href="#/software">The GAMMA Software</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About GAMMA</span>'+
   '<h2 class="txt" id="mani">Research is how we start. <em>Once results are demonstrated and validated, they become our software, instruments and services, used by leading research institutes worldwide.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1995</span><p class="k">Founded near Bern by Dr. Charles Werner and Dr. Urs Wegmüller</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">360°</span><p class="k">Scanned by the GPRI’s rotating antennas, in as little as 60 seconds</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6.5 kg</span><p class="k">The upper weight of a complete GAMMA SAR system, ready for a UAV or a car roof</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How radar measures motion</span><h2 class="d3">Millimetres, <em>from kilometres away.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Scan</span><span>Compare</span><span>Map</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Scan the slope.</h2><p>Set on a tripod facing an unstable slope, the GAMMA Portable Radar Interferometer sweeps its narrow Ku-band beam across the terrain, with a strong signal up to 10 km away.</p></article>'+
     '<article class="step"><h2>Compare the phase.</h2><p>Each scan records the phase of the returning microwaves. Comparing two scans, interferometry turns a change in phase into a change in distance: bands of colour, or fringes, where the ground has moved.</p></article>'+
     '<article class="step"><h2>Map the movement.</h2><p>The GAMMA Software geocodes the fringes into a map of displacement with millimetre precision, so you see which part of the slope is moving, and how fast, scan after scan.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="software" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The GAMMA Software</span><h2 class="d2 split">The whole SAR chain, <em>raw data to map.</em></h2></div><p data-r>A commercial toolbox for SAR, InSAR and PSI processing, used by researchers, companies and public authorities across the globe. Modular, fully documented programs run from the command line, in automated cloud scripts, or as Python and MATLAB commands. We also teach it, in small-group training courses.</p></div>'+
   modRows(MODS)+
  '</div></section>'+

  '<section class="sec light" id="instruments" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Instruments</span><h2 class="d2 split">Lightweight radar, <em>designed near Bern.</em></h2></div><p data-r>GAMMA designs and builds advanced microwave instruments: synthetic aperture radars for UAVs, cars and aircraft, a portable radar interferometer, precision radiometers, and specialised systems on contract.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="services" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split">Our radars and software, <em>working for you.</em></h2></div><p data-r>Our R&D experience, our own SAR and InSAR software and our microwave instruments let us offer established services, such as ground-motion monitoring from satellite or terrestrial radar, and solutions on demand.</p></div>'+
   serv()+
  '</div></section>'+

  '<section class="sec dark2" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">Forests, glaciers, snow <em>and slopes.</em></h2></div><p data-r>With space agencies, universities and companies, we measure, model and interpret the microwave signatures of soil, vegetation and snow, and use InSAR to map ground deformation and the motion of infrastructure. GAMMA’s CCI Biomass maps underpin a 2026 study in Nature of tropical forest carbon losses.</p></div>'+
   proj()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Microwave experts, <em>since 1995.</em></h2></div><p data-r>Our team combines deep expertise in active and passive microwave remote sensing with theoretical and empirical modelling, shaped at the Universities of Bern and Zurich, at the Jet Propulsion Laboratory in Pasadena, and in GAMMA’s own projects.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>GAMMA.</em></h2></div><p data-r>Publications, partnerships and datasets from our work in microwave remote sensing.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Let’s measure <em>what moves.</em></h2>'+
   '<p class="sub" data-r>For software licences and training, instruments, services or research collaboration, get in touch with GAMMA Remote Sensing.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/software">The GAMMA Software</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Write to</span><p data-r>GAMMA Remote Sensing AG<br>Worbstrasse 225<br>CH-3073 Gümligen</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">gamma@gamma-rs.ch</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+41319517005">+41 31 951 7005</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Gümligen, near Bern, Switzerland</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">gamma@gamma-rs.ch</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/software">Software</a><br><a class="ul" href="#/instruments">Instruments</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">We make</span>Software, instruments and research in microwave remote sensing</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Archivo\',sans-serif;font-weight:600;font-style:italic;font-size:52px">GAMMA REMOTE SENSING</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 GAMMA Remote Sensing AG</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",software:"software",instruments:"instruments",services:"services",research:"research",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"GAMMA Remote Sensing — microwave remote sensing since 1995",x:"Home"};
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
