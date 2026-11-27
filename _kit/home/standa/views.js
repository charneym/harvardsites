/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function caps(list){return '<div class="caps nwc tst">'+list.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function chips(kick,list){return '<div class="bk cnd"><span class="lab kick" data-r>'+esc(kick)+'</span><p class="cr" data-r>'+list.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* optomechanics (standa.lt > Optical Tables, Base Positioners) */
var OPTO=[
 ["Optical tables","Honeycomb and solid","1HT honeycomb table tops, aluminium and steel breadboards and non-magnetic versions, with tables and breadboards from stock."],
 ["Vibration isolation","Pneumatic","1VIS pneumatic isolation systems, up to 1000 kg per isolator, with vertical resonance around 1.5 Hz under average load."],
 ["Tilt platforms","Arc-second adjustment","Multi-axis platforms such as the 6TP250: ±2.5° tilt, ±3° rotation and ~1 arcsec sensitivity for loads up to 25 kg."]];
var CATS=["Optical tables and breadboards","Brackets and rails","Optical mounts","Translation and rotation stages","Motorised mirror mounts","Goniometers","Hexapods","Gantry and granite assemblies","Vacuum-compatible stages","Spectrographs and monochromators"];
/* lasers (standa.lt > Lasers & Laser Accessories) */
var LAS=[
 ["STA-01 micro lasers","1064 and 532 nm","Diode-pumped Nd:YAG micro lasers with short pulses at high repetition rates and high peak power, with 355 and 266 nm versions."],
 ["STA-01-YLF","1047 nm · 500 ps","A passively Q-switched laser with 1 MW peak power, TEM00 and single longitudinal mode."],
 ["STA-MOPA","Up to 5 W","A master oscillator power amplifier system: 200-500 ps pulses in TEM00 at 1 Hz to 50 kHz."]];
/* company (standa.lt > Company) */
var CO=[
 ["Our own machine shop","CNC turning, milling, grinding","Design and production in Vilnius on our own industrial base, so custom parts and stock items ship fast."],
 ["Beyond the catalogue","Custom and contract R&D","Custom design and solutions, contract research and development, consulting, and parameters you cannot find elsewhere."],
 ["Lithuanian lasers","LITEK cluster","Together with our partners in the Lithuanian laser association, we develop and build innovative products."]];
/* trade shows (standa.lt > Trade Shows) */
var NEWS=[
 ["Jun 2026","ELI Beamlines, Dolní Břežany: sponsor","Event",PW+"/tradeshows"],
 ["May 2026","CLEO 2026, Charlotte: booth 406","Exhibition",PW+"/tradeshows"],
 ["Apr 2026","Open Readings 2026, Vilnius: sponsor","Conference",PW+"/tradeshows"],
 ["Mar 2026","LASER World of Photonics China, Shanghai: booth 3358, hall N3","Exhibition",PW+"/tradeshows"],
 ["Jan 2026","SPIE Photonics West, San Francisco: booth 1635","Exhibition",PW+"/tradeshows"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1800" height="891" alt="A Standa motorised linear translation stage: an aluminium base with steel guide rails, a carriage with tapped holes and a stepper motor" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Optomechanics and motion<span class="nomob"> · Vilnius, Lithuania</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Precision motion,</span> <span class="l">made in Vilnius.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Optical tables, mounts and positioners, motorised stages, hexapods and controllers, and diode-pumped lasers, designed and machined in-house since 1987.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/motion">Our stages '+ARR+'</a><a class="btn" href="#/contact">Contact sales</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Standa</span>'+
   '<h2 class="txt" id="mani"><span class="nw">From an optical table</span> <span class="nw">to a motorised stage,</span> <span class="nw">designed and machined</span> <span class="nw">in our own workshops.</span> <em><span class="nw">Custom parts,</span> <span class="nw">fast from stock.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1987</span><p class="k">founded in Vilnius, Lithuania</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">190+</span><p class="k">people designing, machining and building</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2.8 m</span><p class="k">longest travel on our 8MT295 motorised stages</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a motorised stage moves</span><h2 class="d3"><span class="nw">Step by step,</span> <span class="nw">micrometre by micrometre.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Motor</span><span>Screw</span><span>Guide</span><span>Travel</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">A stepper motor</span> <span class="nw">turns in steps.</span></h2><p>A Standa controller and power supply drive the motor in precise, countable steps.</p></article>'+
     '<article class="step"><h2><span class="nw">A lead screw</span> <span class="nw">turns them into travel.</span></h2><p>A screw and its replaceable lead block convert rotation into linear motion: 1000 steps per millimetre on the 8MT167-100.</p></article>'+
     '<article class="step"><h2><span class="nw">Rails keep</span> <span class="nw">it straight.</span></h2><p>The carriage runs on guide rails, steel on our delay lines for stability and rigidity, and carries up to 60 kg on long-travel stages.</p></article>'+
     '<article class="step"><h2><span class="nw">Your optics,</span> <span class="nw">in position.</span></h2><p>Micrometre resolution over 100 mm, or up to 2.8 metres of travel: the carriage takes your optics exactly where the experiment needs them.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="motion" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Motorised positioners</span><h2 class="d2 split"><span class="nw">Stages, stepper</span> <span class="nw">to direct drive.</span></h2></div><p data-r>Translation and rotation stages, actuators, mirror mounts and goniometers, direct-drive stages and gimbals, hexapods and the controllers that run them.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="optomechanics" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Optomechanics</span><h2 class="d2 split"><span class="nw">The table</span> <span class="nw">and everything on it.</span></h2></div><p data-r>The base on which precision optical and laser work is done, and the mounts, rails and positioners that hold each part of it.</p></div>'+
   caps(OPTO)+chips("Catalogue",CATS)+
  '</div></section>'+

  '<section class="sec dark" id="lasers" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Lasers</span><h2 class="d2 split"><span class="nw">Short pulses,</span> <span class="nw">high peak power.</span></h2></div><p data-r>Diode-pumped solid-state lasers, actively and passively Q-switched, and master oscillator power amplifier systems.</p></div>'+
   caps(LAS)+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Made in Lithuania</span> <span class="nw">since 1987.</span></h2></div><p data-r>Customer oriented and flexible, with fast delivery for items in stock and a sales network around the world.</p></div>'+
   caps(CO)+
  '</div></section>'+

  '<section class="sec dark2" id="shows" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Trade shows</span><h2 class="d2 split"><span class="nw">Where to</span> <span class="nw">meet us.</span></h2></div><p data-r>You will find us at the major photonics shows and conferences, in Europe, the US and Asia.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us what</span> <span class="nw">has to move.</span></h2>'+
   '<p class="sub" data-r>From a catalogue stage to a custom positioning system, our sales and engineering team will help you choose or design it.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email sales '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Standa Ltd</span><br><span>Kalvarijų g. 125-2</span><br><span>LT-08221 Vilnius</span><br><span>Lithuania</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Sales and quotes</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><span>Distributors worldwide</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Kalvarijų g. 125-2<br>LT-08221 Vilnius, Lithuania</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/motion">Motion</a><br><a class="ul" href="#/optomechanics">Tables</a><br><a class="ul" href="#/lasers">Lasers</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/shows">Shows</a></div>'+
   '<div class="c"><span class="lab">We make</span>Motorised positioners<br>Tables<br>DPSS lasers</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">standa</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Standa Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",motion:"motion",optomechanics:"optomechanics",lasers:"lasers",company:"company",shows:"shows",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Standa — Optomechanics, motorised positioners and lasers, Vilnius, Lithuania",x:"Home"};
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
