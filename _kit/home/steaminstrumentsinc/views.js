/* ================= VIEWS (home only: Technology / Applications / Team / News open build-out pages; Contact scrolls) ================= */
function apps(){return '<ul class="pfr">'+APPS.map(function(c){return '<li><span class="lab tg">'+esc(c[1])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function awards(){return '<ol class="frs">'+AWARDS.map(function(a){return '<li><span class="y">'+esc(a[0])+'</span><div><span class="lab ag">'+esc(a[1])+' · '+esc(a[3])+'</span><p>'+esc(a[2])+'</p></div></li>'}).join("")+'</ol>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Imaging mass spectrometry<span class="nomob"> · Madison, Wisconsin</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Mass spectrometry,</span><span class="l">imaged at the</span><span class="l"><em>nanoscale.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Ion detectors, ion imaging optics and high-mass spectrometer designs that enhance mass range, quantum efficiency and spatial resolution.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">See how it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Rendered: ions from a point source, focused by a ring-electrode lens onto an imaging detector</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Who we are</span>'+
   '<h2 class="txt" id="mani">A Madison start-up at the forefront of <b class="w0">high-spatial-resolution mass spectrometry,</b> dedicated to <em>revolutionizing mass spectrometry imaging.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.25M</span><span class="k">NSF SBIR Phase II, 2025: ion optics optimized for nanoscale stigmatic imaging</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100×</span><span class="k">Faster data acquisition from the new generation of ion detectors our optics make usable</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2026</span><span class="k">First commercial-ready products ready for evaluation</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Ion detectors</span><p data-r>Ion and ion imaging detectors built for detection efficiency, including a quantum ion detector for almost any mass ion or biomolecule.</p></div>'+
    '<div><span class="lab kick" data-r>Ion imaging optics</span><p data-r>A new optical approach to control beam divergence from point sources, projecting stigmatic ion images onto standard-sized detectors.</p></div>'+
    '<div><span class="lab kick" data-r>High-mass designs</span><p data-r>Spectrometer designs for large field of view and high mass resolving power together. Some of these technologies have already shipped to early customers.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Stigmatic ion imaging</span><h2 class="d3">Every ion identified, <em>every ion in its place.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Source</span><span>Dilemma</span><span>Optics</span><span>Image</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Ions from a point.</h2><p>A pulse liberates ions from a small point source on the sample, and they fly toward the detector in a diverging beam. Where each ion lands, and when, holds the composition of the material.</p></article>'+
     '<article class="step"><h2>The old dilemma.</h2><p>Mass resolving power improves with longer flight times, so the detector belongs far away. But then much of the diverging beam lands outside its active area. Move it close, and ions can no longer be confidently identified.</p></article>'+
     '<article class="step"><h2>Optics that bend the beam.</h2><p>Steam’s ion optics control wide angular distributions of ions and deliver them to standard-sized detectors at the optimal distance from the source. Our Phase II work makes lens elements that hold the extremely high electric fields this needs, without failing from electrostatic discharge.</p></article>'+
     '<article class="step"><h2>Time gives mass, place gives image.</h2><p>Arrival time identifies each ion; arrival position maps where it came from. Large field of view and high mass resolving power at once, with detectors fast enough to quantify very small concentrations.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">From a single cell <em>to a transistor.</em></h2></div><p data-r>Our detectors, ion imaging optics and high-mass spectrometer designs push boundaries in several key areas, with speed and accuracy that imaging mass spectrometry has not had before.</p></div>'+
   apps()+
  '</div></section>'+

  '<section class="sec dark" id="funding" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Federal support</span><h2 class="d2 split">Backed by NSF, NIH <em>and CHIPS.</em></h2></div><p data-r>A proud SBIR recipient of DOE, NSF and CHIPS Act innovation funding. Highlights from the public award records:</p></div>'+
   awards()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Instrument builders, <em>again.</em></h2></div><p data-r>Founded in 2018 by Dr. Thomas F. Kelly, who created the Local Electrode Atom Probe, with principals tied to the University of Wisconsin and personnel in Madison and Pacific Grove, California.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards on <em>the public record.</em></h2></div><p data-r>Each item links to the funding agency’s own record of the award.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Laboratories, partners and investors</span>'+
   '<h2 class="big split">Put our ions <em>to work.</em></h2>'+
   '<p class="sub" data-r>If you’re interested in harnessing Steam Instruments’ technologies for your products, laboratories or financial portfolio, we invite you to get in touch.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Steam Instruments, Inc.<br>931 East Main Street, Suite 3<br>Madison, WI 53703</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>931 East Main Street, Suite 3<br>Madison, Wisconsin 53703</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Funding</span>SBIR awards from DOE, NSF, NIH and the CHIPS Act</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 60" aria-hidden="true"><text x="280" y="50" text-anchor="middle" style="font-family:\'Josefin Sans\',Arial,sans-serif;font-weight:600;font-size:60px;letter-spacing:.2em">STEAM</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Steam Instruments, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",applications:"applications",funding:"funding",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Steam Instruments — high-spatial-resolution imaging mass spectrometry, Madison, Wisconsin",x:"Home"};
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
