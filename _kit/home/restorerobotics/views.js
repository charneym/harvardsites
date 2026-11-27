/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">More '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* the instruments cleared by the FDA for remanufacturing (press releases; FDA 510(k) K252926) */
var INST=[
 ["Mar 2025","8 mm Monopolar Curved Scissors","The first da Vinci Xi instrument cleared for remanufacturing, and the most used robotic instrument in U.S. hospitals.",RW+"/mar-25-2025"],
 ["Mar 2026","Permanent Cautery Hook","Cleared in March 2026 with the spatula, extending the program across more high-utilization instruments.",RW+"/mar-31--2026"],
 ["Mar 2026","Permanent Cautery Spatula","The second of the two instruments added in 2026, with more under review with the FDA.",RW+"/mar-31--2026"]];
function inst(){return '<div class="caps nwc tst">'+INST.map(function(c){return '<div class="cap"><span class="lab" data-r>FDA 510(k) · '+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p><a class="lab lk ul" data-r href="'+c[3]+'" target="_blank" rel="noopener"><span>Press release</span> '+ARR+'</a></div>'}).join("")+'</div>'}
var GAIN=["Meaningful cost reductions versus OEM instruments","Increased sustainability through instrument reuse","Seamless integration into existing robotic surgery workflows","Less medical waste from expired instruments","Budget freed for other critical needs","Substantially equivalent to new instruments"];
function gain(){return '<div class="bk cnd"><span class="lab kick" data-r>What hospitals gain</span><p class="cr" data-r>'+GAIN.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1423" height="923" alt="The working end of a robotic surgical cautery hook instrument, rendered" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Robotic instrument remanufacturing<span class="nomob"> · Henderson, Nevada</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Robotic instruments,</span> <span class="l">restored for reuse.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Restore Robotics holds FDA 510(k) clearances to remanufacture da Vinci Xi robotic instruments: a cost-effective, sustainable alternative to buying new.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/program">The program '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Recycle. Resale. Remanufacture.</span>'+
   '<h2 class="txt" id="mani"><span class="nw">We help hospitals</span> <span class="nw">reduce the cost</span> <span class="nw">of using a surgical robot.</span> <em><span class="nw">Same instrument,</span> <span class="nw">another cycle of uses,</span> <span class="nw">less waste.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">300+</span><p class="k">hospitals and surgery centers in the recycling and remanufacturing program</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">da Vinci Xi instruments cleared by the FDA for remanufacturing, with more under review</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2025</span><p class="k">first in-human use of a remanufactured Xi instrument, at Hillcrest Medical Center, Tulsa</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The remanufacturing loop</span><h2 class="d3"><span class="nw">One instrument,</span> <em class="nw">another life.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Recycle</span><span>Restore</span><span>Clear</span><span>Return</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Expired instruments</span> <span class="nw">come back.</span></h2><p>Hospitals send expired or used da Vinci Xi instruments to the recycling program instead of throwing them away.</p></article>'+
     '<article class="step"><h2><span class="nw">Restored again</span> <span class="nw">in Nevada.</span></h2><p>At the Henderson facility, the original instrument is restored for an additional cycle of uses by Restore Robotics’ subsidiary, Iconocare Health.</p></article>'+
     '<article class="step"><h2><span class="nw">Cleared</span> <span class="nw">as equivalent.</span></h2><p>Each instrument type is cleared through FDA 510(k): the remanufactured instrument is substantially equivalent to a new one.</p></article>'+
     '<article class="step"><h2><span class="nw">Back in</span> <span class="nw">the OR.</span></h2><p>Encore Medical Device Repair delivers it to hospitals and surgery centers across the U.S., at a fraction of the cost of new.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="instruments" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Instruments</span><h2 class="d2 split"><span class="nw">Cleared by</span> <em class="nw">the FDA.</em></h2></div><p data-r>The only company with 510(k) clearance to remanufacture da Vinci Xi robotic instruments, and a growing portfolio of cleared instruments.</p></div>'+
   inst()+gain()+
  '</div></section>'+

  '<section class="sec dark2" id="program" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Program</span><h2 class="d2 split"><span class="nw">Recycle, resale</span> <em class="nw">and remanufacture.</em></h2></div><p data-r>Our national sales and service centers have provided medical device sales and remanufacturing for many years. One program covers the whole life of the instrument.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="about" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About</span><h2 class="d2 split"><span class="nw">A pioneer in</span> <em class="nw">robotic reuse.</em></h2></div><p data-r>Based in Panama City Beach, Florida, with a state-of-the-art remanufacturing facility in Henderson, Nevada, Restore Robotics makes surgical systems more affordable and more sustainable.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Panama City Beach, FL</span><h3 data-r>Headquarters</h3><p data-r>Where the company is based. Panama City Surgery Center performed the first in-human use of a remanufactured instrument on a da Vinci Xi robot.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Henderson, NV</span><h3 data-r>Remanufacturing facility</h3><p data-r>Where instruments are collected, recycled and remanufactured, through the subsidiary Iconocare Health.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Partner</span><h3 data-r>Encore Medical Device Repair</h3><p data-r>The master distributor, delivering remanufactured instruments to hospitals nationwide.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="press" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Press</span><h2 class="d2 split"><span class="nw">From the FDA</span> <em class="nw">to 300 hospitals.</em></h2></div><p data-r>From the first 510(k) submission to more than 300 hospitals in the program.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Join the</span> <em><span class="nw">program.</span></em></h2>'+
   '<p class="sub" data-r>For remanufactured or pre-owned instruments, or to recycle expired ones, send us a note and we will respond as soon as possible.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Locations</span><p data-r>Panama City Beach, Florida<br>Henderson, Nevada</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
   '</div>'+
   '<p class="tmk" data-r>da Vinci, da Vinci Xi and Intuitive are registered trademarks of Intuitive Surgical, Inc. Restore Robotics is an independent entity and is not affiliated with Intuitive Surgical, Inc.</p>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Locations</span>Panama City Beach, FL<br>Henderson, NV</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/program">Program</a><br><a class="ul" href="#/instruments">Instruments</a><br><a class="ul" href="#/about">About</a><br><a class="ul" href="#/press">Press</a></div>'+
   '<div class="c"><span class="lab">Program</span>Remanufactured instruments<br>Pre-owned instruments<br>Instrument recycling</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">Restore</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Restore Robotics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",instruments:"instruments",program:"program",about:"about",press:"press",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Restore Robotics — FDA-cleared remanufactured robotic surgical instruments",x:"Home"};
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
