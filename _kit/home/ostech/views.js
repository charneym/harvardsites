/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">'+"Details"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Management</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* four technology points (ostech.de/en > Company Profile, Products, Downloads) */
function caps(){var C=[
  ["Modular system","<span class=\"nw\">One system,</span> <span class=\"nw\">many ranges</span>","OsTech supplies a modular system that can drive laser diodes and TECs at different peak current and voltage ranges, tabletop, OEM or 19-inch.",'<rect x="6" y="14" width="20" height="28"/><rect x="30" y="20" width="20" height="22"/><path class="a" d="M6 48H50"/><path d="M10 22H22M34 27H46"/>'],
  ["Safety","<span class=\"nw\">Precise</span> <span class=\"nw\">and protected</span>","All drivers come with a great variety of control options in the standard, at the highest precision and security levels, with numerous safety functions on board.",'<path d="M28 6L48 14V28C48 40 38 48 28 51C18 48 8 40 8 28V14Z"/><path class="a" d="M19 28L26 35L38 22"/>'],
  ["Remote control","<span class=\"nw\">Controlled</span> <span class=\"nw\">over RS232</span>","Every device can be controlled over RS232. OsTerm, a LabVIEW™ user interface, a command reference and source code examples in several languages are free downloads.",'<rect x="8" y="12" width="40" height="26"/><path d="M14 20L20 25L14 30M24 31H34"/><path class="a" d="M20 44H36M28 38V44"/>'],
  ["Custom versions","<span class=\"nw\">Derived</span> <span class=\"nw\">from the standard</span>","From the standard, OsTech quickly and reliably derives custom versions: very compact or economic drivers, special laser modes, fast pulsers, burn-in racks and drivers for medical devices.",'<path d="M6 40H14V20H22V40H30V20H38V40H50"/><circle class="f" cx="50" cy="40" r="2.4"/><path class="a" d="M6 48H50"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Laser diode drivers and TEC controllers<span class="nomob"> · Berlin</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Driving laser diodes,</span> <span class="l"><em class="nw">with precision.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Since 1998, OsTech in Berlin has developed and manufactured electronic control systems for laser diodes: current sources, Peltier cooler controls and complete diode laser systems.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Send an inquiry</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Berlin, since 1998</span>'+
   '<h2 class="txt" id="mani"><span class="nwp">A modular system</span> <span class="nwp">that drives laser diodes and TECs,</span> <em><span class="nwp">with safety built into the standard.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1998</span><p class="k">founded in Berlin by Dipl.-Ing. Robby Oswald, electro-optical instruments ever since</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">125 A</span><p class="k">maximum laser current from one 19-inch driver, the ds11-t192, at up to 48 V</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">TEC controllers in a single device, next to the laser current source</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside a diode laser system</span><h2 class="d3"><span class="nw">From the mains</span> <em class="nw">to the fibre.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Current</span><span>Cooling</span><span>Pulses</span><span>Fibre</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">A current source</span> <span class="nw">for the diode.</span></h2><p>The laser driver feeds the diode its current, up to 125 A at 48 V in the largest devices, with numerous safety functions in the standard.</p></article>'+
     '<article class="step"><h2><span class="nw">The TEC holds</span> <span class="nw">the temperature.</span></h2><p>Up to three TEC controllers per device drive the Peltier coolers. On an active hsa heatsink the probe temperature is settable from 0 °C to 80 °C with high accuracy.</p></article>'+
     '<article class="step"><h2><span class="nw">Continuous or pulsed,</span> <span class="nw">even in bursts.</span></h2><p>CW and various pulse modes are supported: digital or analog modulation, single pulses or bursts. Typical rise times are 15 to 25 µs, down to 5 µs on request.</p></article>'+
     '<article class="step"><h2><span class="nw">Light in the fibre,</span> <span class="nw">ready to use.</span></h2><p>Every OsTech diode laser system is fibre coupled, from 450 to 1064 nm and up to 400 W water cooled, with fibre cores from 100 to 600 µm.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Drivers, coolers</span> <em class="nw">and laser systems.</em></h2></div><p data-r>Laser drivers with up to three TEC controllers, TEC controllers, fibre-coupled diode laser systems, heatsinks and the accessories to complete any working setup.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">One standard,</span> <em class="nw">many versions.</em></h2></div><p data-r>All OsTech drivers share one modular platform. That is why custom versions, from compact OEM boards to drivers for medical devices, can be derived quickly and reliably.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Made in Berlin</span> <em class="nw">since 1998.</em></h2></div><p data-r>OsTech electro-optical instruments was founded in 1998 by Dipl.-Ing. Robby Oswald and specialises in the development and production of electronic devices for driving laser diodes and TECs.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>What we stand for</span><ul>'+
     '<li data-r><b>Quality</b>OsTech GmbH is certified to ISO 9001:2015 and offers a high standard of quality and reliability.</li>'+
     '<li data-r><b>Integration</b>OsTech integrates laser diodes from different manufacturers into complete turnkey light sources.</li>'+
     '<li data-r><b>Custom work</b>Customised versions, such as fast pulsers, burn-in racks or medical devices, can be offered.</li>'+
    '</ul></div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Distributors</span><p class="cr" data-r><span>North America</span><span>China</span><span>Taiwan</span><span>Japan</span><span>South Korea</span><span>Europe and all other countries: OsTech direct</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News and trade fairs</span><h2 class="d2 split"><span class="nw">Last seen in Munich,</span> <em class="nw">at LASER 2025.</em></h2></div><p data-r>In June 2025 OsTech exhibited at LASER World of PHOTONICS in Munich, Hall A2, Stand 117. Each entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Your laser diode,</span> <em class="nw">our electronics.</em></h2>'+
   '<p class="sub" data-r>Tell us about your diode, its current and its cooling. From a standard driver to a customised system, we are looking forward to your inquiry.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email OsTech '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>OsTech GmbH</span><br><span>Plauener Straße 163-165, Haus i</span><br><span>13053 Berlin, Germany</span></p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Phone '+TELT+'</span><br><span>Fax '+FAXT+'</span></p></div>'+
    '<div><span class="lab" data-r>Owner</span><p data-r><span>Dipl.-Ing. Robby Oswald</span><br><span>ISO 9001:2015 certified</span><br><a class="ul" href="'+CP+'distributors" target="_blank" rel="noopener">Distributors worldwide</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>OsTech GmbH<br>Plauener Straße 163-165, Haus i<br>13053 Berlin, Germany</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>Laser drivers, TEC controllers, diode laser systems, heatsinks and accessories</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:400;font-size:40px;letter-spacing:.2em">OSTECH · BERLIN</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 OsTech GmbH</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",products:"products",technology:"technology",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"OsTech — Laser diode drivers and TEC controllers, Berlin",x:"Home"};
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
