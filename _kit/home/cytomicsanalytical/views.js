/* ================= VIEWS (home only: Technology / Programmes / Software / Team open build-out pages; Contact scrolls) ================= */
function progs(){return '<ul class="pfr">'+PROGS.map(function(c){return '<li><span class="lab tg">'+esc(c[1])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[2])+'<span class="loc">'+esc(c[3])+'</span></p>'+(c[4]?'<a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">Details</a>':'<span></span>')+'</li>'}).join("")+'</ul>'}
function firsts(){return '<ol class="frs">'+FIRSTS.map(function(a){return '<li><span class="y">'+esc(a[0])+'</span><p><a class="ul" href="'+a[2]+'" target="_blank" rel="noopener">'+esc(a[1])+'</a></p></li>'}).join("")+'</ol>'}
function soft(){return '<div class="swg">'+SOFT.map(function(s,i){return '<div class="swc"><span class="lab n">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></div>'}).join("")+'</div>'+
  '<div class="cyt"><div><span class="lab kick" data-r>Education</span><p data-r>Five-minute CyTorials support our education and training programme in cytomics.</p></div><ul>'+CYT.map(function(c){return '<li>'+esc(c)+'</li>'}).join("")+'</ul></div>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Spectral flow cytometry · Cell analysis<span class="nomob"> · West Lafayette, Indiana</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Every cell,</span><span class="l">read across</span><span class="l"><em>its spectrum.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Cytomics Analytical develops next-generation cell analysis: advanced detection technologies, high-parameter algorithms and automated immune-biomarker tools for flow cytometry.</p>'+
   '<div class="act" data-r><a class="btn solid" data-to="programmes" href="#programmes">Our programmes '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Rendered: a quartz flow cell, where each cell crosses the laser in single file</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Who we are</span>'+
   '<h2 class="txt" id="mani">A technology developer in the cell analysis domain, building <b class="w0">more sensitive detection</b> and high-speed applications, and the high-parameter algorithms that <em>make flow cytometry quantitative.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">32</span><span class="k">Detector channels per cell in our group’s hyperspectral cytometer (Cytometry A, 2012)</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><span class="k">NIH SBIR awards since 2015, from the NHLBI, NIDA and NIA</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2004</span><span class="k">Our group’s first spectral flow cytometry work, presented at ISAC</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Software tools</span><p data-r>Multiparametric analysis tools that perform complex analysis on large multiparametric data sets.</p></div>'+
    '<div><span class="lab kick" data-r>Services</span><p data-r>A cloud-based service for uploading data sets for automated analysis, available for testing in Q1 2027.</p></div>'+
    '<div><span class="lab kick" data-r>Clients</span><p data-r>We work with several pharma companies developing analytical tools in the high-parameter flow cytometry domain.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">One cell at a time, <em>in full spectrum.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Focus</span><span>Excite</span><span>Disperse</span><span>Classify</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Single file.</h2><p>Sheath fluid narrows the sample stream inside a quartz flow cell, so cells cross the detection point one at a time.</p></article>'+
     '<article class="step"><h2>Through the laser.</h2><p>At the interrogation point a laser excites each cell. It scatters light, and the fluorescent labels bound to it emit.</p></article>'+
     '<article class="step"><h2>Spread over 32 channels.</h2><p>Instead of one filter per colour, the emitted light is dispersed across a multichannel detector, the approach our group patented in 2004, recording each cell’s whole emission spectrum.</p></article>'+
     '<article class="step"><h2>A fingerprint per cell.</h2><p>Spectral deconvolution and classification software turn every spectrum into labels and quantities, and sort the cells into populations.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="programmes" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">From immune fingerprints <em>to nanoparticles.</em></h2></div><p data-r>Federally funded development across high-parameter immune monitoring, extracellular-vesicle detection and new cytometry optics, with automated analysis to tie it together.</p></div>'+
   progs()+
  '</div></section>'+

  '<section class="sec dark" id="spectral" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Spectral heritage</span><h2 class="d2 split">Spectral cytometry, <em>from the first paper.</em></h2></div><p data-r>Our group presented the first work on spectral flow cytometry in 2004 and has published on it since, from a 32-channel detector to single-cell hyperspectral analysis.</p></div>'+
   firsts()+
  '</div></section>'+

  '<section class="sec light" id="software" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Software</span><h2 class="d2 split">Instrument software <em>that delivers the result.</em></h2></div><p data-r>Our engineers work from core software design to full system integration: an intuitive interface, the appropriate solution and accurate results, with rapid turnaround on updates and urgent requests.</p></div>'+
   soft()+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A long record <em>in analytical cytometry.</em></h2></div><p data-r>Our team of highly skilled individuals has a long track record of productivity in analytical cytometry, and we partner with companies that share related approaches.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Funded by <em>the NIH.</em></h2></div><p data-r>Small Business Innovation Research awards from three NIH institutes, for immune monitoring in Alzheimer’s disease, extracellular vesicles and scanning cytometry.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Pharma, research and instrument partners</span>'+
   '<h2 class="big split">Let’s talk about <em>your cells.</em></h2>'+
   '<p class="sub" data-r>Questions about our services, software, analysis tools or a collaboration: write or call, and the team answers directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Cytomics Analytical, LLC<br>West Lafayette, Indiana</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>West Lafayette, Indiana</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/software">Software</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Elsewhere</span><a class="ul" href="https://cytomicsanalytical.com/spectral-flow-cytometry/" target="_blank" rel="noopener">Publications</a><br><a class="ul" href="https://reporter.nih.gov/project-details/11407255" target="_blank" rel="noopener">NIH RePORTER</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 60" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Newsreader\',Georgia,serif;font-weight:400;font-size:64px;letter-spacing:-.01em">Cytomics Analytical</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Cytomics Analytical, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",programmes:"programmes",spectral:"spectral",software:"software",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Cytomics Analytical — spectral flow cytometry and cell analysis, West Lafayette, Indiana",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(a){e.preventDefault();e.stopPropagation();secGo(a.getAttribute("data-to"));return}
  a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){secGo(r.sec,true);try{history.replaceState(null,"","#/")}catch(x){}},300)})()})();
