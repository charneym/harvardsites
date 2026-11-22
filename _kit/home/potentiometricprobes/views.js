/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
/* the three parts of a Stark-shift electrochromic dye (potentiometricprobes.com/how-vsds-work) */
function caps(){var C=[
  ["The fluorophore","The chromophore backbone that reports voltage. ANEP (aminonaphthylethenylpyridinium) absorbs at 450–510 nm; ANBDQ (aminonaphthylbutadienylquinolinium) is red-shifted past 530–550 nm. Fluorination improves photostability and tunes the spectra.",'<path d="M6 40c6 0 8-24 14-24s8 24 14 24 8-12 16-12"/><path class="a" d="M6 40c6 0 9-30 16-30s9 30 16 30"/><circle class="f" cx="22" cy="10" r="2.4"/>'],
  ["The polar head group","Sits at the membrane surface and sets how the dye dissolves and stains. Changing it is one of the levers that turns a single backbone into a family of dyes.",'<circle class="f" cx="28" cy="14" r="7"/><path d="M28 21v28"/><path d="M8 30h40M8 44h40" class="a"/>'],
  ["The membrane-binding motif","Two hydrocarbon chains anchor the dye in the lipid bilayer. The name says how long they are (Di-2, Di-4, Di-8): longer chains bind the membrane better and reduce aqueous solubility.",'<path d="M8 12h40M8 46h40" class="a"/><path d="M22 12v34M28 12v34M34 12v34"/><circle class="f" cx="22" cy="12" r="2.4"/><circle class="f" cx="28" cy="12" r="2.4"/><circle class="f" cx="34" cy="12" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Voltage-sensitive dyes<span class="nomob"> · The VSD experts</span> · Farmington, CT</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">See the voltage</span><span class="l">of cells, tissues</span><span class="l"><em>and whole hearts.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Potentiometric Probes makes voltage-sensitive dyes for academic and pharmaceutical researchers: fast fluorescent probes that bind cell membranes and turn changes in membrane potential into changes in fluorescence, from single neurons to intact brains and hearts.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How VSDs work '+ARR+'</a><a class="btn" href="#/dyes">Our dyes</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our story</span>'+
   '<h2 class="txt" id="mani">Every dye in our catalogue was first designed and synthesised in Dr. Leslie Loew’s lab at UConn Health. Since 2017 Potentiometric Probes has carried that work forward, with brighter, more photostable and <em>longer-wavelength dyes.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">19</span><p class="k">Voltage-sensitive and potentiometric dyes in the catalogue: classic, fluorinated and long-wavelength</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.8M</span><p class="k">In NIH SBIR awards since 2018 from the NIMH, NIGMS and NHLBI, including a Phase II</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~20%</span><p class="k">Fluorescence change per 100 mV for some dyes, with red-edge excitation</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How VSDs work</span><h2 class="d3">Voltage in, <em>light out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Stain</span><span>Shift</span><span>Read</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The dye stains the membrane.</h2><p>Applied to cells or tissue, the dye’s hydrocarbon chains anchor it in the lipid bilayer, with its polar head group at the surface and its chromophore sitting in the membrane’s electric field.</p></article>'+
     '<article class="step"><h2>Voltage shifts its spectrum.</h2><p>When the membrane depolarises, the Stark effect shifts the dye’s absorption spectrum, instantly. The response is fast enough to follow millisecond changes in neurons and heart cells.</p></article>'+
     '<article class="step"><h2>Two colours give a clean reading.</h2><p>Exciting at the red and blue wings of the spectrum, not the peak, turns the shift into a fluorescence change. Their ratio boosts the signal and removes artifacts from motion, uneven staining and bleaching.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">A toolkit, <em>not a single dye.</em></h2></div><p data-r>Stark-shift electrochromic dyes have three parts. By changing the head group and the membrane-binding chains around a common fluorophore, and then fluorinating it, Potentiometric Probes builds a palette of dyes tuned for solubility, staining and spectra.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="dyes" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our dyes</span><h2 class="d2 split">A palette from green <em>to far red.</em></h2></div><p data-r>Classic, fluorinated and long-wavelength dyes, all sold pre-aliquoted and pre-dried. Not sure which one fits your cells, tissue or imaging set-up? Potentiometric Probes will recommend the best dye for your measurement.</p></div>'+
   pipeRows(PIPE)+
   apps()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Decades of dye chemistry, <em>now a company.</em></h2></div><p data-r>Founded by three UConn Health scientists to continue the dye development and distribution work of the Loew lab, and located at the University of Connecticut’s Technology Incubation Program in Farmington.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>NIH funding</span><p data-r>Four SBIR projects since 2018: from the NIMH for brain imaging dyes, the NIGMS for ratiometric dyes and the NHLBI for near-infrared cardiac sensors.</p></div>'+
    '<div><span class="lab kick" data-r>Early support</span><p data-r>SPARK and Accelerate UConn (an NSF I-Corps programme), BiopipelineCT from Connecticut Innovations, and the TIP Summer Fellowship Program.</p></div>'+
    '<div><span class="lab kick" data-r>Distribution</span><p data-r>Took over from the Loew lab in 2017 to supply ThermoFisher with several VSDs; Funakoshi distributes the dyes in Japan and other Asian countries.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Papers and <em>grants.</em></h2></div><p data-r>The latest from Potentiometric Probes and the labs imaging with its dyes.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
/* research applications (potentiometricprobes.com/research) under the dye rows */
function apps(){return '<div class="ev"><span class="lab kick" data-r>Where they’re used</span><div><dl>'+
  [["Neuroscience","Electrical signalling in neurons, for disorders such as Alzheimer’s and autism"],["Cardiac research","From single cells to whole hearts, for conditions such as arrhythmogenic cardiomyopathy"],["Drug screening","High-throughput tests of the efficacy and safety of new compounds"],["New applications","Such as tracking how hyperpolarisation propagates through cancer cell lines"]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Commonly used: Di-4-ANEPPS and Di-8-ANEPPS across all four; ElectroFluor530 and 550 in neuroscience and screening; ElectroFluor630 and CytoVolt1 and 2 in cardiac work.</p></div></div>'}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Choosing a dye</span>'+
   '<h2 class="big split">Find the right <em>VSD.</em></h2>'+
   '<p class="sub" data-r>Tell us about your cells, tissue and imaging modality, and we’ll recommend the best dye for your measurement, or answer any questions you have.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="'+STORE+'" target="_blank" rel="noopener">Visit the store</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Potentiometric Probes, LLC<br>UConn Health Technology Incubation Program<br>400 Farmington Avenue<br>Farmington, CT 06032</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a><br><a class="ul" href="https://www.funakoshi.co.jp" target="_blank" rel="noopener">Funakoshi (Japan)</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>400 Farmington Avenue<br>Farmington, CT 06032</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/dyes">Dyes</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>Classic ANEP dyes<br>ElectroFluor™ dyes</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Cormorant Garamond\',Georgia,serif;font-weight:500;font-size:72px;letter-spacing:-.01em">Potentiometric Probes</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Potentiometric Probes, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",how:"story",science:"science",dyes:"dyes",products:"dyes",research:"dyes",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Potentiometric Probes — voltage-sensitive dyes for neuroscience, cardiac research and drug discovery, Farmington, CT",x:"Home"};
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
