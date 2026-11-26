/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+c[1].split('|').map(function(x){return '<span class="nw">'+esc(x)+'</span>'}).join(' ')+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["STAR series","Up to 12-inch optics","Our well-established high-quality mounts, anodised in one of 12 colours or high-vacuum suitable, with 170 TPI screws, micrometer screws or piezo drives.",'<path d="M10 10H46V46H10Z"/><circle class="a" cx="28" cy="28" r="11"/><circle class="f" cx="14.5" cy="14.5" r="2"/><circle class="f" cx="41.5" cy="41.5" r="2"/>'],
  ["PLANET series","Premium, left or right","Two or three adjusters, the third for precise horizontal positioning, stainless M8 × 0.15 mm screws and an optional locking system.",'<path d="M8 14H48V42H8Z"/><circle class="a" cx="28" cy="28" r="9"/><circle class="f" cx="12.5" cy="18.5" r="2"/><circle class="f" cx="43.5" cy="37.5" r="2"/>'],
  ["ASTEROID series","Half-inch, in stainless","Back plate, front plate and adjusters in stainless steel to compensate for thermal expansion and reduce wear, with a lock for the fine-thread screws.",'<path d="M17 17H39V39H17Z"/><circle class="a" cx="28" cy="28" r="6"/><circle class="f" cx="20.5" cy="20.5" r="1.6"/><circle class="f" cx="35.5" cy="35.5" r="1.6"/>'],
  ["ANTARES®","Large optics, gimbal design","For large optics to customer demand, e.g. 600 × 350 × 100 mm and 95 kg, for beam steering in the compressor chambers of ultra-high-power lasers.",'<circle cx="28" cy="28" r="19"/><path class="a" d="M16 22H40V34H16Z"/><path d="M28 6V12M28 44V50"/><circle class="f" cx="28" cy="28" r="2"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3><span class="nw">'+esc(c[1])+'</span></h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Dye lasers and opto-mechanics<span class="nomob"> · Made in Germany</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Light is</span> <span class="l acc">our profession.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>LIOP-TEC builds pulsed, tunable dye lasers and high-precision opto-mechanics in Radevormwald, Germany, for laser and optical scientists around the world.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/laser">See the lasers '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our expertise, your advantage</span>'+
   '<h2 class="txt" id="mani">For more than a decade we have worked hand in hand with leading researchers. We build what their experiments need, <em>and stay to make it work.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">197–5000</span><p class="k">nanometres: the spectral range of the LiopStar dye lasers with frequency conversion</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.02</span><p class="k">cm⁻¹: linewidth down to this value, for high-resolution spectroscopy</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">170 TPI</span><p class="k">fine-thread adjusters in every mirror mount series, for drift-free positioning</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside the LiopStar</span><h2 class="d3">From pump pulse <em>to tuned light.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Pump</span><span>Tune</span><span>Amplify</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A pump pulse excites the dye.</h2><p>A pulsed Nd:YAG laser at 532 nm or 355 nm, from 10 mJ up to 1500 mJ per pulse, pumps the dye cells of the LiopStar.</p></article>'+
     '<article class="step"><h2>A grating picks one wavelength.</h2><p>In the oscillator, an exchangeable 90 mm grating of 1800, 2400 or 3000 lines/mm tunes the laser, with a linewidth down to 0.02 cm⁻¹ and reproducibility below 0.002 nm.</p></article>'+
     '<article class="step"><h2>Bethune cells build the beam.</h2><p>Amplifier dye cells raise the pulse energy to a near-Gaussian beam with less than 0.5 % ASE. A third cell takes high-power pump lasers, and frequency conversion reaches down to 197 nm.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="laser" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Laser</span><h2 class="d2 split">Pulsed dye lasers, <em>tunable by design.</em></h2></div><p data-r>The LiopStar family covers the ultraviolet to the mid-infrared with the smallest footprint, LabVIEW software and a USB port, for LIF, LIDAR, Raman, CARS, photolysis and combustion studies.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="optomechanics" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Opto-Mechanics</span><h2 class="d2 split">Mirror mounts that <em>hold their line.</em></h2></div><p data-r>Every mount series is available non-magnetic and for vacuum down to 10⁻⁸ mbar, made at our own facility in Germany and colour-coded to identify beam paths.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Custom-made</span><p class="cr" data-r><span>5-axis laser table</span><span>6-inch x-y lens mounts</span><span>PiezoStar</span><span>Linear translation stages</span><span>3-axis sliding table</span><span>Dye circulators</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">A team of experts <em>in Radevormwald.</em></h2></div><p data-r>Our team specialises in lasers, scientific laser applications and high-precision opto-mechanics, and supports every system through to its successful use in the lab.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Distributors</span><p class="cr" data-r><span>China</span><span>France</span><span>India</span><span>Israel</span><span>Italy</span><span>Japan</span><span>South Korea</span><span>United Kingdom</span><a class="ul" href="'+OG+'10.html" target="_blank" rel="noopener">Find your partner</a></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News and exhibitions</span><h2 class="d2 split">New products, <em>and where to meet us.</em></h2></div><p data-r>LIOP-TEC exhibits at LASER World of PHOTONICS in Munich, the leading trade fair for photonics components, systems and applications.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us about</span> <em class="nw">your experiment.</em></h2>'+
   '<p class="sub" data-r>For quotations, custom-made solutions and support, reach the team directly in Radevormwald.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>LIOP-TEC GmbH<br>Industriestrasse 4<br>42477 Radevormwald, Germany</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Catalogues</span><p data-r><a class="ul" href="'+OG+'resources/LiopTec_overview.pdf" target="_blank" rel="noopener">Product overview (PDF)</a><br><a class="ul" href="'+OG+'resources/opto-mechanic+Catalogue+2018.pdf" target="_blank" rel="noopener">Opto-mechanics catalogue (PDF)</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>LIOP-TEC GmbH<br>Industriestrasse 4, 42477 Radevormwald</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/laser">Laser</a><br><a class="ul" href="#/mirror-mounts">Mirror Mounts</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>LiopStar · LiopStar-E<br>STAR · PLANET · ASTEROID<br>ANTARES® · FLUPS</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="54" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:500;font-size:66px;letter-spacing:.3em">LIOP-TEC</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 LIOP-TEC GmbH</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",process:"story",laser:"laser","mirror-mounts":"optomechanics",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"LIOP-TEC — Pulsed dye lasers and high-precision opto-mechanics, made in Germany",x:"Home"};
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
