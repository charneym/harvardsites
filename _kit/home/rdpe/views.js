/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Submersible","Down to 2.2 km of sea water","The electronics can be welded inside and the fluid allowed into the tube, so LVDTs work under water, deep under water. The seawater range is submersible to 2.2 km for 10 years or more.",'<path d="M6 16C14 11 20 21 28 16S42 11 50 16"/><path class="a" d="M28 22V46"/><rect x="23" y="30" width="10" height="16"/><circle class="f" cx="28" cy="50" r="2.4"/>'],
  ["Temperature","From −220 ℃ to 600 ℃","By controlling the materials used inside and outside the transducer, RDP designs sensors for high and low temperatures, and has built LVDTs for liquid lead at 400 ℃ and for cryogenic work.",'<rect x="23" y="6" width="10" height="34"/><circle cx="28" cy="44" r="8"/><path class="a" d="M28 16V44"/><circle class="f" cx="28" cy="44" r="3"/>'],
  ["Radiation","Built for the nuclear plant","Displacement transducers are offered for normal service and through rated levels of radiation exposure up to 1 GGy, for very high nuclear radiation environments.",'<circle cx="28" cy="28" r="20"/><path class="a" d="M28 28L18 11A20 20 0 0 1 38 11ZM28 28L48 28A20 20 0 0 1 38 45ZM28 28L18 45A20 20 0 0 1 8 28Z"/><circle class="f" cx="28" cy="28" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>LVDT · load · pressure<span class="nomob"> · Wolverhampton · since 1966</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Every movement, </span><span class="l">measured without </span><span class="l"><em>a touch.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>RDP designs and makes LVDT displacement transducers, amplifiers, load cells and pressure sensors for the factory, the laboratory, the sea bed and space.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">See the range '+ARR+'</a><a class="btn" href="#/contact">Talk to RDP</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Privately owned since 1966</span>'+
   '<h2 class="txt" id="mani">One of the first manufacturers of LVDT displacement transducers, and the first to build the amplifier <span class="nw">into the sensor.</span> <em>Made by us, in our <span class="nw">own UK factory.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1966</span><p class="k">The year RDP was started by the two directors who still own it</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2.2 km</span><p class="k">The depth in sea water the seawater submersible LVDTs are built for</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50+</span><p class="k">Years of making LVDT displacement sensors, standard and special</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How an LVDT works</span><h2 class="d3">No contact, <em>infinite resolution.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Excite</span><span>Centre</span><span>Move</span><span>Output</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Excite.</h2><p>An LVDT, a linear variable differential transformer, has three coils: a primary in the centre and a secondary at either end. The primary is excited with an ac signal.</p></article>'+
     '<article class="step"><h2>Centre.</h2><p>A magnetic core, the armature, carries the signal from the primary into the secondaries. They are connected in opposition, so at the centre of the stroke their voltages cancel and the output is zero.</p></article>'+
     '<article class="step"><h2>Move.</h2><p>As the armature moves away from centre, one secondary rises and the other falls, and an output appears. Its phase tells the electronics which half of the coil the armature is in.</p></article>'+
     '<article class="step"><h2>Output.</h2><p>RDP signal conditioning turns this into voltage, current or serial data proportional to position. The core never touches the coils: clean data, infinite resolution, a very long life.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Displacement, load</span> <em class="nw">and pressure.</em></h2></div><p data-r>RDP designs, manufactures and distributes transducers and the electronics that read them. The LVDT displacement sensors and amplifiers are made at the head office and factory in Wolverhampton.</p></div>'+
   prods()+
   '<div class="act shop" data-r><a class="btn solid" href="mailto:'+MAIL+'">Ask about a sensor '+ARR+'</a></div>'+
  '</div></section>'+

  '<section class="sec light" id="env" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Environments</span><h2 class="d2 split"><span class="nw">The laboratory,</span> <em class="nw">the sea bed.</em></h2></div><p data-r>The standard industrial series is designed for factories, laboratories and research departments: the elongation of a test sample, the position of a steam valve in a power station. Then there are the harder places.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Where they have been</span><p class="cr" data-r><span>Valve position at the bottom of the sea</span><span>Mirror deflection in space</span><span>Cutting tools in production</span><span>Test samples under load</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About RDP</span><h2 class="d2 split"><span class="nw">Sixty years</span> <em class="nw">of measurement.</em></h2></div><p data-r>RDP is privately owned by the two directors who started the company in 1966. Sales and support run from the Global Head Office in Wolverhampton and from RDP Electrosense in Pottstown, Pennsylvania, for the USA and Canada, with distributors worldwide.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Firsts and standards</span><dl>'+
    '<div data-r><dt class="lab">LVDT pioneer</dt><dd>One of the first manufacturers of LVDT displacement transducers</dd></div>'+
    '<div data-r><dt class="lab">Built in</dt><dd>The first to build the LVDT signal conditioning amplifier into the sensor</dd></div>'+
    '<div data-r><dt class="lab">ISO 9001:2015</dt><dd>A certified quality management system for design and manufacture</dd></div>'+
    '<div data-r><dt class="lab">Specials</dt><dd>A very wide standard range, and very many special designs for unusual environments</dd></div>'+
   '</dl></div>'+
   '<div class="tm"><span class="lab kick" data-r>Board</span>'+team()+'</div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Tell us what <em>you need to measure.</em></h2>'+
   '<p class="sub" data-r>For a standard sensor, a special design or support on an RDP product, reach the team in Wolverhampton, or RDP Electrosense in the USA and Canada.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email sales '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Global head office</span><p data-r>RDP Electronics Ltd<br>Grove Street, Heath Town<br>Wolverhampton WV10 0PY, UK</p></div>'+
    '<div><span class="lab" data-r>Sales</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>USA &amp; Canada</span><p data-r>RDP Electrosense, Pottstown, PA<br><a class="ul" href="mailto:'+USMAIL+'">'+USMAIL+'</a><br><a class="ul" href="tel:'+USTEL+'">'+USTELT+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Head office</span>RDP Electronics Ltd<br>Grove Street, Heath Town, Wolverhampton WV10 0PY</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/how-it-works">How it works</a><br><a class="ul" href="#/environments">Environments</a><br><a class="ul" href="#/about">About</a></div>'+
   '<div class="c"><span class="lab">Range</span>LVDT displacement<br>Load cells · Pressure<br>Amplifiers · Displays</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 72" aria-hidden="true"><text x="450" y="58" text-anchor="middle" style="font-family:\'Raleway\',Arial,sans-serif;font-weight:500;font-size:62px;letter-spacing:.3em">RDP GROUP</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 RDP Electronics Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro","how-it-works":"story",products:"products",environments:"env",about:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"RDP Electronics — LVDT displacement transducers, load cells and pressure sensors",x:"Home"};
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
