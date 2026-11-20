/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page CTAs scroll) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'<span class="loc">'+esc(c[3])+'</span></h3><p>'+esc(c[1])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">Source</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tg4">'+TEAM.map(function(p){
  return '<li><figure class="xpt"><img src="'+p.img+'" alt="'+esc(p.name)+'" width="'+p.w+'" height="'+p.h+'" loading="lazy" decoding="async"></figure>'+
   '<h3>'+esc(p.name)+'</h3><span class="lab ro">'+esc(p.title)+'</span>'+(p.sum?'<p>'+esc(p.sum)+'</p>':'')+'</li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Drinking-water BioAssays<span class="nomob"> · Berkeley, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Know what’s</span><span class="l"><em>in the water.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>XCellAssay monitors drinking water for chemical pollutants. Engineered sensor cells read a mailed vial of tap water for chemicals that affect health, including thousands no water district is required to measure.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<span class="lab cap" aria-hidden="true">Tap water · photo Eva Kristensen, Unsplash</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why XCellAssay</span>'+
   '<h2 class="txt" id="mani">Your water district is mandated to track <b class="w0">over 90 contaminants.</b> Modern industry manufactures over 100,000 chemicals in bulk. <em>We built a way to detect any of them in your drinking water.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">84,000</span><span class="k">Chemicals, 10 trillion lbs a year, that human bodies have never seen before</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$350+</span><span class="k">Paid today per sample for a single BioAssay measurement</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2 mL</span><span class="k">A mailable sample and a 10-minute protocol, in place of 2 L and two days</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Engineered cells</span><p data-r>BioAssay cells carry nuclear receptor sensors. Any chemical, known or unknown, that alters a sensor’s activity changes the cell’s signal.</p></div>'+
    '<div><span class="lab kick" data-r>Multiplexed</span><p data-r>Bar-coded BioAssays share each well of a 384-well dish, so one water sample is read against many sensors at once.</p></div>'+
    '<div><span class="lab kick" data-r>Robotic and low-cost</span><p data-r>In Phase I, sensitivity, precision and accuracy exceeded those of competitor, non-multiplexed BioAssays.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">One vial, <em>many sensors.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sample</span><span>Sensors</span><span>Multiplex</span><span>Read</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Take a water sample.</h2><p>Fill an XCellAssay-provided vial with 2 mL of tap water and send it through regular mail. No two-litre bottles, no two-day processing.</p></article>'+
     '<article class="step"><h2>Cells that sense.</h2><p>Engineered BioAssay cells carry nuclear receptor sensors. A chemical that alters a sensor’s activity changes the cell, whatever the chemical is.</p></article>'+
     '<article class="step"><h2>Many sensors, one well.</h2><p>Bar-coded BioAssays are co-plated into 384-well dishes, so one sample is screened against many sensors at once, instead of paying for each.</p></article>'+
     '<article class="step"><h2>Read against thresholds.</h2><p>Robotic detection quantifies each sensor’s response. Phase I found contamination above toxicologic thresholds in samples from municipal districts and private taps.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="programmes" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">From the reservoir <em>to the tap.</em></h2></div><p data-r>Four applications of one idea, rationally designed nuclear receptor BioAssays, supported by SBIR awards from the NIH’s environmental health and drug abuse institutes.</p></div>'+
   pfRows(PROG)+
  '</div></section>'+

  '<section class="sec dark" id="lab" data-theme="dark"><div class="wrap">'+
   '<div class="plf">'+
    '<div class="plf-t"><span class="lab kick" data-r>Partners and funders</span><h2 class="d2 split">Validated with <em>California water.</em></h2>'+
     '<p data-r>XCellAssay is a resident laboratory at the Bakar Bioenginuity Hub of the California Institute for Quantitative Biosciences (QB3), and is validating its measurements on samples provided by California State water agencies.</p>'+
     '<dl class="facts">'+
      '<div><dt class="lab">Laboratory</dt><dd>Bakar Labs, powered by QB3, Berkeley</dd></div>'+
      '<div><dt class="lab">Customers</dt><dd>California water districts, the lead customers for Phase II</dd></div>'+
      '<div><dt class="lab">Funders</dt><dd>NIH NIEHS and NIDA, $2.0M in SBIR awards since 2024</dd></div>'+
     '</dl>'+
     '<div class="act" data-r><a class="btn" href="mailto:'+MAIL+'?subject=Water%20monitoring">Talk to us about monitoring '+ARR+'</a></div></div>'+
    '<div class="plf-i"><figure class="ph"><img src="cells.webp" alt="Fluorescent nuclei of XCellAssay BioAssay cells" width="350" height="350" loading="lazy" decoding="async"></figure>'+
     '<p class="lab fcap">An engineered BioAssay cell line · XCellAssay imaging</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Receptor science, <em>put to work.</em></h2></div><p data-r>A team led by a nuclear receptor biologist, bringing cell engineering, environmental study and consumer technology to the question of what is in the water.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>milestones.</em></h2></div><p data-r>NIH awards behind XCellAssay’s BioAssay programmes.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Water districts, partners and investors</span>'+
   '<h2 class="big split">Clean water, <em>measured.</em></h2>'+
   '<p class="sub" data-r>Interested in multiplexed BioAssay monitoring for your water system, in partnering, or in XCellAssay’s work? We would like to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email XCellAssay '+ARR+'</a><a class="btn" href="'+MAP+'" target="_blank" rel="noopener">Find the lab</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Berkeley</span><p data-r>2630 Bancroft Way<br>Berkeley, CA 94704</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Web</span><p data-r><a class="ul" href="'+WEB+'" target="_blank" rel="noopener">xcellassay.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Berkeley</span>2630 Bancroft Way<br>Berkeley, CA 94704</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Support</span>Research at XCellAssay is supported by the National Institutes of Health (NIEHS R44ES036049, R43ES036903; NIDA R43DA059306).</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Cabin\',sans-serif;font-style:italic;font-weight:700;font-size:64px;letter-spacing:-.005em">XCellAssay</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 XCellAssay Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (nav items are taken over by buildout.js) ================= */
var SECS={about:"about",technology:"story",programmes:"programmes",partners:"lab",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"XCellAssay — Multiplexed BioAssays for chemical pollutants in drinking water, Berkeley",x:"Home"};
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
