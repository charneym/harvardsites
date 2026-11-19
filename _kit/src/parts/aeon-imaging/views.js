/* ================= VIEWS (home only: every nav item scrolls to its section) ================= */
function mhStatic(p){return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span><span class="mh-arrow" aria-hidden="true"></span></div></li>'}
function team(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Leadership</p><ul class="mh-list">'+TEAM.map(mhStatic).join("")+'</ul></div></div>'}
function caps(){return '<div class="caps">'+CAPS.map(function(c,i){return '<div class="pl3"><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function plats(){return '<ul class="port apps">'+PLAT.map(function(a){return '<li class="pco"><h3>'+esc(a[0])+'</h3><p>'+esc(a[1])+'</p><span class="lab rd">'+esc(a[2])+'</span></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Confocal retinal imaging<span class="nomob"> · Bloomington, Indiana · Since 2005</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A clearer view</span><span class="l">of the <em>aging eye.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Aeon Imaging applies novel imaging and image display technology to advance medicine and science, using the rolling shutter of an everyday CMOS camera as a flexible confocal aperture.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/programme">The NEI programme</a></div></div>'+
   '<div class="hero-key" aria-hidden="true"><span class="lab"><i class="ramp"></i>Retina, scanned line by line</span></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Founded by Dr. Ann Elsner, 2005</span>'+
   '<p class="txt" id="mani">Built with researchers at the Schepens Eye Research Institute and the Indiana University School of Optometry, our technology exploits the flexible electronic aperture inherent in current CMOS sensors to perform <em>unique confocal imaging.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$9.4M</span><span class="k">In NIH SBIR and STTR awards since 2008, across 22 grant records on NIH RePORTER</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><span class="k">Jurisdictions with issued patents: the US, Canada, Europe, Australia, Japan and Mexico</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2026</span><span class="k">New National Eye Institute STTR award for a lower-cost, more accurate acuity test</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">An aperture made of <em>time.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Illuminate</span><span>Read</span><span>Offset</span><span>Measure</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Illuminate.</h2><p>A series of lines is rapidly projected onto the retina in a raster pattern, simulating line scanning without a moving scanner. The near-infrared light is dim and comfortable.</p></article>'+
     '<article class="step"><h2>Read.</h2><p>A CMOS rolling shutter integrates light one band of pixel rows at a time. Synchronised with the illumination line, it becomes a confocal aperture: stray light outside the band is never captured.</p></article>'+
     '<article class="step"><h2>Offset.</h2><p>Shift the aperture away from the line and the image is built from multiply scattered light from deeper layers, revealing drusen, a hallmark of age-related macular degeneration.</p></article>'+
     '<article class="step"><h2>Measure.</h2><p>The Potential Vision Tester projects acuity targets in Maxwellian view through a 3 mm pupil, with tunable lenses that correct sphere and astigmatism, to separate optical from retinal loss.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A flexible <em>electronic aperture.</em></h2></div><p data-r>Unlike a global shutter, a rolling shutter integrates light over one or more pixel rows at a time. Synchronise it, in space and time, with an illumination line on the target, and confocal imaging follows.</p></div>'+
   caps()+
   '<div class="two diff"><div><span class="lab kick" data-r>Why it matters</span><h3 class="d3 split">Better outcome measures, <em>at lower cost.</em></h3></div>'+
   '<div><p class="lede" data-r>Visual function is a key outcome in almost every clinical trial for age-related macular degeneration and diabetic retinopathy. If visual acuity could be measured more accurately and cost-effectively, with less test-retest variability, trials could use smaller samples, saving cost and time in bringing therapies to market.</p>'+
   '<p class="muted" data-r style="margin-top:24px;max-width:58ch">The same approach underpins Aeon’s retinal cameras, its OEM kits for microscopy and structured light, and design services drawing on more than fifteen years of building confocal imaging systems.</p></div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="platforms" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Platforms</span><h2 class="d2 split">One method, <em>five instruments.</em></h2></div><p data-r>From the back of the eye to the microscope slide. Aeon’s retinal devices are research instruments and are not FDA approved.</p></div>'+
   plats()+
  '</div></section>'+

  '<section class="sec light" id="programme" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programme · NEI STTR Phase I</span><h2 class="d2 split">Lowering the cost of <em>better acuity.</em></h2></div><p data-r>Improved measurements of visual acuity in real-world older patients, whose small pupils, cataract and aberrations make wall charts and screens unreliable.</p></div>'+
   '<div class="two"><div><dl class="facts">'+
    '<div><dt class="lab">Funder</dt><dd>National Eye Institute, NIH</dd></div>'+
    '<div><dt class="lab">Award</dt><dd>$311,748 · STTR Phase I</dd></div>'+
    '<div><dt class="lab">Period</dt><dd>Aug 2026 – Jul 2027</dd></div>'+
    '<div><dt class="lab">Investigator</dt><dd>Ann E. Elsner, Ph.D.</dd></div>'+
   '</dl><a class="btn" style="margin-top:36px" href="'+RPT+'" target="_blank" rel="noopener" data-r>NIH RePORTER '+ARR+'</a></div>'+
   '<ul class="aims">'+
    '<li><span><b>Aim 1.</b> Design, build and optimise a new visual stimulation channel with tunable sphere and astigmatism correction, comparing objective and subjective sphere settings and the resulting acuities.</span></li>'+
    '<li><span><b>Aim 2.</b> Compare Potential Vision Tester acuity with standard best-corrected acuity in patients with cataract, posterior capsule opacification, high astigmatism or coma, with and without pupil dilation.</span></li>'+
    '<li><span><b>Builds on.</b> The Phase II award R44EY030829 (through April 2026) that developed the Potential Vision Tester, with adaptive optics, Hartmann-Shack wavefront sensing and simultaneous retinal imaging.</span></li>'+
   '</ul></div>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Vision science, optics, <em>the clinic.</em></h2></div><p data-r>A founder who has developed retinal imaging for more than two decades, an optical engineer who invented the DLO, and an ophthalmologist guiding image analysis.</p></div>'+
   team()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Research use, licensing and design services</span>'+
   '<h2 class="big split">Let’s look <em>closer, together.</em></h2>'+
   '<p class="sub" data-r>Aeon’s patents and their international counterparts are available for licensing or sub-licensing, and its instruments for research. Get in touch to discuss your project.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="tel:+18128222048">'+TEL+'</a></div>'+
   '<div class="caddr" data-r><span class="lab">Office</span><p>Aeon Imaging, LLC<br>501 S Madison St., Ste. 103<br>Bloomington, IN 47403</p></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>501 S Madison St., Ste. 103<br>Bloomington, IN 47403</div>'+
   '<div class="c"><span class="lab">Support</span>NEI STTR Phase I<br>1R41EY039129</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/platforms">Platforms</a><br><a class="ul" href="#/programme">Programme</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18128222048">'+TEL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-style:italic;font-weight:800;font-size:58px;letter-spacing:.02em">AEON IMAGING</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Aeon Imaging, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; section links scroll ================= */
var SECS={technology:"technology",platforms:"platforms",programme:"programme",team:"team",contact:"contact",about:"about",approach:"story"};
function route(h){return {k:"home",v:vHome,t:"Aeon Imaging — Confocal retinal imaging and vision testing",x:"Home"}}
function toSec(key,inst){var el=document.getElementById(SECS[key]);if(!el)return false;
  var y=el.getBoundingClientRect().top+window.scrollY;if(key!=="approach")y-=MOBILE()?8:0;
  if(lenis&&!inst)lenis.scrollTo(y,{duration:1.5,force:true});else{if(lenis)lenis.scrollTo(y,{immediate:true,force:true});window.scrollTo(0,y)}return true}
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var k=a.getAttribute("href").slice(2);if(!SECS[k])return;
  e.preventDefault();e.stopImmediatePropagation();
  if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){toSec(k)},420)}else toSec(k);
  try{history.replaceState(null,"","#/")}catch(err){}},true);
(function(){var k=(location.hash||"").replace(/^#\/?/,"");if(SECS[k]){try{history.replaceState(null,"","#/")}catch(e){}addEventListener("load",function(){setTimeout(function(){toSec(k,true)},2600)})}})();
