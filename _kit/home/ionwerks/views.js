/* ================= VIEWS (home only: Technology / Products / Team / News open build-out pages; Contact scrolls) ================= */
function lines(){return '<ul class="pfr">'+LINES.map(function(c){return '<li><span class="lab tg">'+esc(c[1])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[2])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Details</a></li>'}).join("")+'</ul>'}
function firsts(){return '<ol class="frs">'+FIRSTS.map(function(a){return '<li><span class="y">'+esc(a[0])+'</span><p>'+esc(a[1])+'</p></li>'}).join("")+'</ol>'}
function sites(){return '<div class="crd"><span class="lab" data-r>Systems designed, delivered and integrated at</span><p data-r>'+SITES.map(function(x){return '<span>'+esc(x)+'</span>'}).join(' <i aria-hidden="true">·</i> ')+'</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Time-of-flight instrumentation<span class="nomob"> · Houston, Texas · since 1986</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Instruments</span><span class="l">that weigh ions</span><span class="l"><em>by their flight.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Ionwerks engineers and research scientists develop time-of-flight mass spectrometers, ion detectors, ion beam lines and timing electronics for universities and laboratories worldwide.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">See the instruments '+ARR+'</a><a class="btn" href="#/contact">Discuss your application</a></div></div>'+
   '<p class="lab hcap" data-r>Illustrative render: a microchannel-plate ion detector on a ConFlat vacuum flange</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Who we are</span>'+
   '<h2 class="txt" id="mani">Since 1986, our engineers and research scientists have designed, delivered and integrated <b class="w0">complete spectrometer systems</b>, from the ion source to the detector <em>and the electronics that time every ion.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1986</span><span class="k">Founded in Houston by Dr. J. Albert Schultz, for surface analysis</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">26</span><span class="k">Phase I SBIR projects completed, funded by DoD, DOE, NASA, NIH and NSF</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">R&amp;D 100</span><span class="k">Award in 1997, with Argonne, for our MSRI analyzer</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Ion beams and sources</span><p data-r>Pulsed alkali beam lines on surface ionization sources, designed and simulated for each vacuum system they attach to.</p></div>'+
    '<div><span class="lab kick" data-r>Analyzers</span><p data-r>Reflectron and orthogonal time-of-flight analyzers for SIMS, direct recoil spectroscopy, MSRI and biomolecular mass analysis.</p></div>'+
    '<div><span class="lab kick" data-r>Detectors and timing</span><p data-r>Segmented ion detectors with multichannel time-to-digital converters: exactly the data system new high-performance spectrometers need.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Time-of-flight mass spectrometry</span><h2 class="d3">Light ions arrive first. <em>The clock does the weighing.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Pulse</span><span>Fly</span><span>Reflect</span><span>Time</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A pulse of ions.</h2><p>A short pulse from the ion source, an alkali ion beam or a laser, knocks ions off the sample surface. One start signal marks the moment they leave.</p></article>'+
     '<article class="step"><h2>The same push for all.</h2><p>An electric field gives every ion the same energy. Light ions leave fast and heavy ions slow, so down the field-free flight tube the pulse spreads out by mass.</p></article>'+
     '<article class="step"><h2>Turned by a reflectron.</h2><p>A stack of rings at rising voltage turns the ions around. Faster ions of the same mass dig deeper and travel further, so each mass arrives back together, as one sharp packet.</p></article>'+
     '<article class="step"><h2>Counted and timed.</h2><p>A microchannel-plate detector turns each arriving ion into a pulse, and an eight-channel time-to-digital converter records every stop against the start. Flight time becomes mass: the spectrum.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">From the source <em>to the stopwatch.</em></h2></div><p data-r>A complete line of instrumentation and equipment for time-of-flight mass spectrometry. Our scientists and engineers customise each system to your application.</p></div>'+
   lines()+
  '</div></section>'+

  '<section class="sec dark" id="firsts" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research and development</span><h2 class="d2 split">Four decades <em>of ion physics.</em></h2></div><p data-r>We refine our instruments through research grants and collaborations with national laboratories and universities, and publish the results in refereed journals.</p></div>'+
   firsts()+sites()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineers and <em>research scientists.</em></h2></div><p data-r>A Houston team, close to Rice University and the University of Houston, available to customise products to your application.</p></div>'+
   '<div class="fdr"><div class="fdr-n"><span class="lab" data-r>Founder and President</span><h3 data-r>Dr. J. Albert Schultz</h3></div>'+
    '<div class="fdr-b"><p data-r>Founded Ionwerks in 1986 as a provider of surface analysis systems and equipment, and has led its research programmes since: ion mobility and laser desorption mass spectrometry, mass spectrometric imaging of tissue, and, most recently, coatings that make microchannel-plate detectors more sensitive and longer lived.</p>'+
    '<p data-r>Co-editor, with Orlando Auciello, Alan R. Krauss and Eugene A. Irene, of <i>In-Situ Process Diagnostics and Modeling</i>, MRS Symposium Proceedings volume 569.</p></div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent work <em>and records.</em></h2></div><p data-r>Publications with research partners, and federal funding for the next generation of ion detectors.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Universities, laboratories and industry</span>'+
   '<h2 class="big split">We look forward to hearing <em>about your application.</em></h2>'+
   '<p class="sub" data-r>Questions about a beam line, an analyzer, a detector or the TDCx8, or a system built for your vacuum chamber: write to us directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Ionwerks '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Ionwerks, Inc.<br>Houston, Texas</p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Ionwerks, Inc.<br>Houston, Texas</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Elsewhere</span><a class="ul" href="https://www.ionwerks.com/publicat.html" target="_blank" rel="noopener">Publications</a><br><a class="ul" href="https://reporter.nih.gov/search/results?query=ionwerks" target="_blank" rel="noopener">NIH RePORTER</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 720 60" aria-hidden="true"><text x="360" y="50" text-anchor="middle" style="font-family:\'Cinzel\',Georgia,serif;font-weight:500;font-size:60px;letter-spacing:.14em">IONWERKS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Ionwerks, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",products:"products",firsts:"firsts",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Ionwerks — time-of-flight instrumentation and electronics, Houston, Texas",x:"Home"};
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
