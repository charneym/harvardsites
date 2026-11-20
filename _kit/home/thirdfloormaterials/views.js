/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function prodRows(){return '<ul class="pfr path">'+PRODUCTS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' details">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Snapshot hyperspectral imaging<span class="nomob"> · Durham, North Carolina</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The whole spectrum,</span><span class="l">in a single</span><span class="l"><em>snapshot.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>An NC State University spin-out, Third Floor Materials builds thin-film plasmonic filter arrays that bond directly to an image sensor, so one compact camera captures the complete hyperspectral image cube in a single exposure.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/programmes">Our programmes</a></div></div>'+
   '<span class="lab cap">An image sensor, where the filter array sits</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our approach</span>'+
   '<h2 class="txt" id="mani">Spectroscopy has stayed costly because hardware does the sorting: dispersive optics, scanning, moving parts. <b class="w0">Third Floor Materials moves that work into materials and software.</b> <em>A filter on every pixel, an algorithm for the rest.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1</span><span class="k">Exposure to record the full hyperspectral datacube, spectral and spatial</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2016</span><span class="k">Founded as a spin-out of North Carolina State University</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$298K</span><span class="k">NIH NIGMS SBIR Phase I award for fluorescence microscopy, September 2026</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Every pixel a spectrometer, <em>in one exposure.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sample</span><span>Filters</span><span>Snapshot</span><span>Spectrum</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The sample.</h2><p>Under a widefield fluorescence microscope, a stained tissue glows with many markers at once, their emission spectra overlapping.</p></article>'+
     '<article class="step"><h2>The filters.</h2><p>A plasmonic filter array, bonded directly to a CMOS sensor, gives neighbouring pixels different, well-characterised transmission functions.</p></article>'+
     '<article class="step"><h2>The snapshot.</h2><p>One exposure records a filtered intensity at every pixel. No confocal scanning, no repeated rounds of staining and imaging.</p></article>'+
     '<article class="step"><h2>The spectrum.</h2><p>Compressive sensing algorithms recover the emission spectrum at every pixel and unmix the local concentration of each fluorophore.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="programmes" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">From the microscope <em>to the infrared.</em></h2></div><p data-r>Funded research and development in imaging, spectroscopy and optical components, and the thin-film and simulation know-how behind them, offered as services.</p></div>'+
   prodRows()+
   '<p class="ack" data-r>Research reported here is supported by the National Institute of General Medical Sciences of the National Institutes of Health under award R43GM165166, and was supported by the National Science Foundation under award 2014798.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded on <em>a discovery.</em></h2></div><p data-r>Two former NC State graduate students and their thesis adviser founded the company in early 2016 to commercialise a material found in Sachet’s PhD research.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Funded by <em>NIH and NSF.</em></h2></div><p data-r>Third Floor Materials partners with government agencies, universities and private businesses to advance its technology.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers, partners and customers</span>'+
   '<h2 class="big split">See every colour <em>at once.</em></h2>'+
   '<p class="sub" data-r>For snapshot hyperspectral imaging, infrared spectroscopy, thin-film coatings or simulation projects, write to the Third Floor Materials team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email the team '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r><span class="bl">2 Davis Drive, Suite 512</span><span class="bl">Durham, NC 27709</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Origin</span><p data-r><span class="bl">Spun out of</span><span class="bl">NC State University, 2016</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>2 Davis Drive, Suite 512<br>Durham, NC 27709</div>'+
   '<div class="c"><span class="lab">Research</span>Snapshot hyperspectral imaging<br>Algorithmic IR spectroscopy</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Josefin Sans\',system-ui,sans-serif;font-weight:400;font-size:40px;letter-spacing:.06em">THIRD FLOOR MATERIALS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Third Floor Materials, Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",programmes:"programmes",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Third Floor Materials — snapshot hyperspectral imaging and algorithmic infrared spectroscopy",x:"Home"};
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
