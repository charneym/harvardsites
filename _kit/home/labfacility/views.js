/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">'+"Details"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Management</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* the four custom configurators (labfacility.com > Build Your Sensor) */
function caps(){var C=[
  ["Thermocouples","<span class=\"nw\">Your type,</span> <span class=\"nw\">sheath and plug</span>","Choose the thermocouple type, sheath, length and termination, and send the configurator form. Every custom sensor is made to order to ISO 9001 standards.",'<path d="M8 40H38"/><path d="M8 36H38V44H8Z"/><circle class="f" cx="10" cy="40" r="2.4"/><rect class="a" x="38" y="34" width="10" height="12"/><path d="M48 37H53M48 43H53"/>'],
  ["Resistance thermometers","<span class=\"nw\">A PRT sensor</span> <span class=\"nw\">to your drawing</span>","Specify a custom platinum resistance thermometer on the PRT form. Unsure which sensor suits the application? The team will help you choose.",'<path d="M10 14V44"/><path d="M18 14V44"/><path class="a" d="M10 44C10 50 18 50 18 44"/><path d="M26 22H48M26 30H48M26 38H42"/>'],
  ["Gauges","<span class=\"nw\">A gauge</span> <span class=\"nw\">for the process</span>","A custom gauge configurator follows the same route: send your requirements and you will be contacted with a lead time.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M28 28L38 18"/><circle class="f" cx="28" cy="28" r="2.6"/><path d="M14 36H18M38 36H42"/>'],
  ["Panel systems","<span class=\"nw\">Panel systems,</span> <span class=\"nw\">to order</span>","Thermocouple panel systems are configured to order from the same forms, and like every custom sensor can be shipped worldwide.",'<rect x="8" y="14" width="40" height="28"/><rect class="a" x="13" y="21" width="8" height="12"/><rect x="24" y="21" width="8" height="12"/><rect x="35" y="21" width="8" height="12"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1121" height="857" alt="Labfacility IEC mineral insulated thermocouples with miniature plugs: Types K, J and T coiled, and a straight Type N probe" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Temperature &amp; process technology<span class="nomob"> · Bognor Regis</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Temperature sensors,</span></span> <span class="l"><span class="nw">made in Britain.</span></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Since 1971, Labfacility has designed and manufactured thermocouples, resistance thermometers and thermocouple connectors. It stocks thermocouple cable and supplies the instruments that read them, from two UK sites to over 85 countries.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Send an enquiry</a></div></div>'+
  '</section>'+

  '<section class="sec mani light" id="about" data-theme="light"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>West Sussex and South Yorkshire</span>'+
   '<h2 class="txt" id="mani"><span class="nwp">A temperature reading</span> <span class="nwp">is only as good as</span> <span class="nwp">the sensor, cable and</span> <span class="nwp">connector behind it.</span> <em><span class="nwp">We make, stock</span> <span class="nwp">and supply all three.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1971</span><p class="k">trading since, and ISO 9001 accredited; the 50th anniversary was in 2021</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">85+</span><p class="k">countries Labfacility exports to, with shipments leaving every day</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">18,000</span><p class="k">square feet at the Dinnington plant, where custom sensors are designed and made</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside a thermocouple</span><h2 class="d3"><span class="nw">From the junction</span> <em class="nw">to the reading.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Junction</span><span>Insulate</span><span>Terminate</span><span>Measure</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Two dissimilar</span> <span class="nw">metals, one junction.</span></h2><p>In 1821 Seebeck found that a current flows in a circuit of two dissimilar metals when their junctions are at different temperatures. The measuring junction is the one exposed to the heat.</p></article>'+
     '<article class="step"><h2><span class="nw">Bedded in mineral,</span> <span class="nw">sealed in steel.</span></h2><p>In a mineral insulated thermocouple the two legs are packed in mineral insulation inside a metal sheath, from 1 to 6 mm across, which can be bent and formed to suit the process.</p></article>'+
     '<article class="step"><h2><span class="nw">Terminated in</span> <span class="nw">a colour-coded plug.</span></h2><p>The legs end in a plug coded to the thermocouple type, green for IEC Type K, with pins of different widths so it only fits one way round. Extension cable of the same type carries the signal on.</p></article>'+
     '<article class="step"><h2><span class="nw">Read against</span> <span class="nw">a known reference.</span></h2><p>A thermocouple measures a temperature difference. The instrument holds the reference junction at a known temperature, or compensates for it, and turns the small thermoelectric voltage into a reading.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light alt" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Every part</span> <em class="nw">of the reading.</em></h2></div><p data-r>The UK’s leading manufacturer of temperature sensors, thermocouple connectors and associated temperature instrumentation, and a stockist of thermocouple cable. Digikey and Farnell also stock the range.</p></div>'+
   prods()+
   '<div class="qual mk"><span class="lab kick" data-r>Applications</span><p class="cr" data-r><span>Plastics and rubber processing</span><span>Pharmaceutical</span><span>Cold chain monitoring</span><span>Automotive and motor sport</span><span>HVAC</span><span>Highways</span><span>Healthcare</span><span>Veterinary</span><span>Environmental</span><span>Food and catering</span><span>Agricultural</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="custom" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Custom sensors</span><h2 class="d2 split"><span class="nw">Built to order</span> <em class="nw">in Yorkshire.</em></h2></div><p data-r>Beyond the stocked range, Labfacility specialises in the design and manufacture of custom-built temperature sensors at Dinnington. Tell us the application and our technical sales team will help choose the right sensor.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec light alt" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Two UK sites,</span> <em class="nw">over fifty years.</em></h2></div><p data-r>Labfacility has been trading since 1971, with its office in Bognor Regis, West Sussex, and its manufacturing plant in Dinnington, South Yorkshire. Technical support for sensing and instrumentation is always freely available.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>Facts</span><ul>'+
     '<li data-r><b>1971</b>Labfacility starts trading; it celebrated its 50th anniversary in 2021.</li>'+
     '<li data-r><b>ISO 9001</b>Accredited, with an NQA certificate for the Dinnington site.</li>'+
     '<li data-r><b>Dinnington</b>An 18,000 square foot plant for custom-built temperature sensors.</li>'+
     '<li data-r><b>Distribution</b>Digikey and Farnell stock Labfacility thermocouples, RTDs and connectors.</li>'+
     '<li data-r><b>Cyber Essentials</b>Certified, with quarterly audits of hardware, software and accounts.</li>'+
     '<li data-r><b>Resources</b>Technical guides to thermocouples, PRTs, thermistors and calibration.</li>'+
    '</ul></div></div>'+
  '</div></section>'+

  '<section class="sec light" id="news" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Next seen</span> <em class="nw">at Farnborough.</em></h2></div><p data-r>Labfacility is listed as an exhibitor at Southern Manufacturing &amp; Electronics, 2 to 4 February 2027, on stand N135. Each entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light alt cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Need a sensor?</span> <em class="nw">Talk to our team.</em></h2>'+
   '<p class="sub" data-r>From a stocked thermocouple to a sensor built to your drawing, tell us the application, the temperature range and how you will connect it.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Labfacility '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Head office</span><p data-r><span>Labfacility Ltd</span><br><span>Tradewinds Business Centre</span><br><span>Heath Place, Ash Grove</span><br><span>Bognor Regis PO22 9SL</span></p></div>'+
    '<div><span class="lab" data-r>Manufacturing</span><p data-r><span>Units 3a, 3b &amp; 4b Eden Place</span><br><span>Outgang Lane, Dinnington</span><br><span>Sheffield S25 3QT</span></p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Phone '+TELT+'</span><br><span>Fax '+FAXT+'</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Head office</span>Labfacility Ltd<br>Tradewinds Business Centre<br>Bognor Regis PO22 9SL</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/custom">Custom sensors</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Range</span>Thermocouples, resistance thermometers, connectors, cable and instrumentation</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Open Sans\',system-ui,sans-serif;font-weight:700;font-size:44px;letter-spacing:.12em">LABFACILITY</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Labfacility Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",products:"products",custom:"custom",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Labfacility — Temperature sensors, connectors and instrumentation, since 1971",x:"Home"};
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
