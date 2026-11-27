/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) =================
   Sources: NIH RePORTER abstracts of Trestle Optics' four NIGMS SBIR awards (2R44GM149018-02, 1R43GM149018-01, 1R43GM149004-01,
   1R43GM157792-01) and trestle-optics.com (home, Collaborations, Contact, Newsletters). Nothing else is claimed. */
/* the lens, as the Phase I and Phase II abstracts describe it */
function caps(){var C=[
  ["All-reflective","<span class=\"nw\">Built from</span> <span class=\"nw\">curved mirrors</span>","An objective constructed entirely from curved mirrors in a non-concentric geometry, instead of the refractive glass of standard objectives.",'<path d="M8 40Q28 12 48 40"/><path class="a" d="M22 46Q28 38 34 46"/><path d="M28 6V20"/>'],
  ["Ultra-broadband","<span class=\"nw\">Visible to</span> <span class=\"nw\">the mid-infrared</span>","Ultra-broad transmission from the visible through the mid-infrared, where the refractive elements of standard lenses stop transmitting.",'<path d="M6 34C12 22 16 22 20 34S28 46 32 34S40 22 44 34S50 40 52 34"/><path class="a" d="M6 46H50"/>'],
  ["Color-corrected","<span class=\"nw\">Every color,</span> <span class=\"nw\">one focus</span>","Mirrors bend no color more than another, so the lens is free of chromatic aberration and stays diffraction-limited across the whole field of view.",'<path d="M8 10L28 44L48 10"/><path d="M18 10L28 44L38 10"/><circle class="a" cx="28" cy="44" r="3"/>'],
  ["Low dispersion","<span class=\"nw\">Short pulses</span> <span class=\"nw\">stay short</span>","Minimal group delay dispersion, so ultrafast pulses for multiphoton and third-harmonic imaging are not stretched on their way to the sample.",'<path d="M6 40H18L22 14L26 40H50"/><path class="a" d="M30 8V48"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* the imaging platform the lens is built for (NIH abstracts) */
function svc(){var S=[
  ["Spatial metabolomics","Rapid, subcellular localization of metabolites, to assess the metabolic composition of cells and their microenvironment. Complementary to platforms that map DNA, RNA and proteins."],
  ["Photothermal microscopy","Widefield: a tunable mid-infrared source excites the molecules' own vibrations; a visible light source maps where they absorb. Label-free and non-destructive."],
  ["Vibrational phase contrast","Photothermal contrast being integrated with spatial light interference microscopy (SLIM), a quantitative phase technique, for sensitivity at lower chemical concentrations."],
  ["Live-cell screening","Phenotypic assays of metabolite content on live single cells, with a microfluidic sorting chip in development to keep the most productive ones."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["2019","With Vertical Irrigation of Fresno, a 2019 Irrigation Innovation Consortium award; Trestle supplies lighting for advanced agricultural growth chambers."],
  ["2023","Two NIH SBIR Phase I awards from NIGMS: the catadioptric lens, and photothermal microscopy with a tunable ZGP source."],
  ["2025","A third Phase I: in vitro metabolite profiling with vibrational phase-contrast imaging."],
  ["2026","NIH SBIR Phase II for the lens: liquid immersion, integration on the imaging platform, and beta-testing with early adopters."]];
  return '<ol class="hst">'+H.map(function(h){return '<li data-r><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero.webp" width="1149" height="882" alt="An all-reflective microscope objective: the concave primary mirror and the secondary on its spider vanes, seen through the front aperture" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Mid-infrared optics<span class="nomob"> · Irvine, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">New colors,</span> <span class="l"><em class="nw">brought to focus.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Trestle Optics builds microscope objectives from curved mirrors instead of glass, so visible and mid-infrared light meet at one focus, for label-free chemical imaging of cells.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The lens '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Supplier of sophisticated optics</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Almost every microscope</span> <span class="nw">focuses light with glass,</span> <span class="nw">and glass stops short</span> <span class="nw">of the mid-infrared.</span> <em><span class="nw">We build the lens</span> <span class="nw">from mirrors instead,</span> <span class="nw">so every color</span> <span class="nw">comes to focus.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">NIH SBIR awards from NIGMS since 2023, for the lens and the imaging platform it serves</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.05M</span><p class="k">first-year NIH SBIR Phase II award, June 2026, to take the lens to commercial readiness</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3–10 µm</span><p class="k">the mid-wave infrared, where light excites the vibrations of molecules</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside the objective</span><h2 class="d3"><span class="nw">Glass splits light.</span> <em class="nw">Mirrors don\'t.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Glass</span><span>Infrared</span><span>Mirrors</span><span>Immersion</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Glass bends</span> <span class="nw">each color differently.</span></h2><p>A refractive objective is close to perfect over a narrow band. Across a broad one, its colors come to focus at different depths: chromatic aberration.</p></article>'+
     '<article class="step"><h2><span class="nw">The mid-infrared</span> <span class="nw">never gets through.</span></h2><p>Glass elements barely transmit the mid-infrared, so photothermal imaging and sum-frequency generation cannot use a standard objective at all.</p></article>'+
     '<article class="step"><h2><span class="nw">Curved mirrors</span> <span class="nw">focus every color.</span></h2><p>A mirror reflects every wavelength the same way. Our non-concentric mirror design brings visible and mid-infrared light to one focus, diffraction-limited across the field.</p></article>'+
     '<article class="step"><h2><span class="nw">Add an immersion</span> <span class="nw">for resolution.</span></h2><p>In Phase II, a liquid immersion raises the numerical aperture, for very high-resolution imaging over a virtually unlimited spectral bandwidth.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">An objective</span> <em class="nw">made of mirrors.</em></h2></div><p data-r>The all-reflective objectives used until now are achromatic but suffer from a non-ideal point spread function and a central obscuration. Our design keeps what mirrors do well and removes those limits.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Built for</span><p class="cr" data-r><span>Photothermal imaging</span><span>Sum-frequency generation</span><span>Three-photon fluorescence</span><span>Third-harmonic generation</span><span>Multiphoton microscopy</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="platform" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Platform</span><h2 class="d2 split"><span class="nw">Chemical imaging</span> <em class="nw">of living cells.</em></h2></div><p data-r>The lens sits on our spatial biology platform, which maps where metabolites are inside cells, to support target validation, hit-to-lead screening and lead optimization in preclinical research.</p></div>'+
   svc()+
   '<div class="trn" data-r><span class="lab kick">Phase II, 2026</span><p>We will integrate the immersion lens on the platform and follow pyridoxal 5′-phosphate, vitamin B6, in a panel of human colorectal cancer cells. The lens is planned to reach commercial readiness, with the platform ready for beta-testing by early adopters.</p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split"><span class="nw">Optics people,</span> <em class="nw">building for biology.</em></h2></div><p data-r>We specialize in extending the performance and availability of visible optics to the mid-infrared, and we are hard at work tackling R&amp;D to grow our catalog.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Leadership</span><ul>'+
     '<li data-r><span class="nm">Adam Hanninen, PhD</span><span class="lab rl">Chief executive officer and principal investigator</span></li>'+
    '</ul></div>'+
    '<div class="engpol"><span class="lab kick" data-r>Milestones</span>'+hist()+'</div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Funded by</span><p class="cr" data-r><span>NIH</span><span>NIGMS</span><span>SBIR Phase I and II</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Phase II,</span> <em class="nw">awarded in 2026.</em></h2></div><p data-r>Our NIH awards, newest first. Each item links to its public record on NIH RePORTER.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Questions about</span> <em class="nw">our optics?</em></h2>'+
   '<p class="sub" data-r>Tell us about your imaging problem, from mid-infrared focusing to broadband multiphoton work, and we will come back to you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Trestle '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r><span>Trestle Optics LLC</span><br><span>Irvine, California</span></p></div>'+
    '<div><span class="lab" data-r>Products and services</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Telephone '+TELT+'</span></p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r><span>NIH NIGMS SBIR Phase II</span><br><span>2R44GM149018, 2026</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Trestle Optics LLC, Irvine, California</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/platform">Platform</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Bringing new colors to focus</span>Mirror objectives and mid-infrared optics for broadband and vibrational microscopy.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Varela\',Arial,sans-serif;font-weight:400;font-size:46px;letter-spacing:.06em">TRESTLE OPTICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Trestle Optics LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",technology:"technology",platform:"platform",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Trestle Optics — Mirror objectives for mid-infrared microscopy",x:"Home"};
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
