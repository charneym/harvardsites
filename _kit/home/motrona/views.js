/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
/* how motrona builds (motrona.com > Home, Products and category pages), each with a small line icon */
function caps(){var C=[
  ["Own development","Hardware and software","Future-oriented development of our own hardware and software makes motrona a partner for complex applications in industrial automation and drive technology.",'<path d="M10 12H46V40H10Z"/><path class="a" d="M18 22L13 26L18 30M38 22L43 26L38 30M30 19L26 33"/><path d="M6 46H50"/>'],
  ["Certified safety","Up to SIL3/PLe","The DS series and the SRC30/EL are certified to EN 61508, EN ISO 13849-1 and EN IEC 62061, for the safety functions the law requires on hazardous machinery.",'<path d="M28 6L46 13V27C46 38 38 45 28 50C18 45 10 38 10 27V13Z"/><path class="a" d="M19 28L25 34L37 21"/>'],
  ["Fast signals","Up to 2 MHz","Motion controllers with a cut-off frequency up to 2 MHz, indicators up to 1 MHz and safety monitors up to 500 kHz keep pace with fast drives.",'<path d="M6 40H12V18H20V40H28V18H36V40H44V18H50"/><path class="a" d="M6 48H50"/>'],
  ["Simple set-up","DIL switches and TEACH","As with every motrona product, set-up is simple and intuitive: converters scale by DIL switches or TEACH buttons, with linearisation, digital filters and window functions.",'<path d="M10 14H46V42H10Z"/><path d="M18 22V34M28 22V34M38 22V34"/><path class="a" d="M14 26H22M24 30H32M34 24H42"/>'],
  ["Fieldbus and cloud","PROFINET to sens2cloud","PN350, EC350 and PN222 bring sensors onto the fieldbus; the EG222 gateway carries machine data to the cloud for condition monitoring and remote maintenance.",'<path d="M8 38H48"/><path d="M14 38V30H22V38M34 38V30H42V38"/><path class="a" d="M18 30V20H38V30M28 20V12"/><circle class="f" cx="28" cy="10" r="3"/>'],
  ["Customer-specific","There is nothing our engineers relish more","Alongside the catalogue, a team experienced in solution-finding develops bespoke devices, and motrona ems assembles PCBs from small to large series.",'<path d="M12 44L40 16"/><path class="a" d="M36 10L46 20L42 24L32 14Z"/><path d="M10 40L16 46"/>']];
  return '<div class="caps six">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
var NA="https://www.motrona.com/en/company/news/article/";
var NEWS=[
 ["24–26 Nov 2026","SPS 2026, Nuremberg: Hall 7, Booth 150","sps.mesago.com","https://sps.mesago.com/nuernberg/en/exhibitor-search.detail.html/motrona-gmbh.html"],
 ["20 Oct 2026","Sensor data in view at all times: the EG222 with sens2cloud","motrona.com",NA+"keep-an-eye-on-sensor-data-at-all-times-the-motrona-eg222-with-sens2cloud.html"],
 ["26 Aug 2026","New PN222 fieldbus coupler: sensors into PROFINET, simply and reliably","motrona.com",NA+"new-pn222-fieldbus-coupler-easily-and-reliably-integrate-sensors-into-profinet.html"],
 ["23 Feb 2026","SRC30/EL: a compact safety relay for machines and elevators","motrona.com",NA+"src30-el-compact-safety-relay-for-machine-and-elevator-applications.html"],
 ["2–3 Mar 2027","all about automation Friedrichshafen: Hall B1, Booth 416","motrona.com","https://www.motrona.com/en/company/trade-fairs.html"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* the company in six facts (motrona.com > Home, EMS services, Contact international) */
function hist(){var H=[
  ["40 years","of market experience as a specialist for project development and problem solving in automation and drive technology."],
  ["Same day","Production recently expanded to keep a permanent stock of core products, usually ready to ship on the working day the order arrives."],
  ["In-house","Hardware, software and production under one roof in Gottmadingen."],
  ["Bespoke","Customer-specific solutions from a team well experienced in solution-finding, alongside a growing catalogue."],
  ["EMS","motrona ems, formerly Giertz Elektronik: PCB assembly including SMD, from small to large series, with hardware and software development."],
  ["Worldwide","Long-standing partners across Europe, Africa, the Middle East, the Far East, Australia and North and South America."]];
  return '<ol class="hst">'+H.map(function(h){return '<li><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Safety · Control · Motion · Interface<span class="nomob"> · Gottmadingen</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Keeping machines</span> <span class="l"><em>safely</em> in motion.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>motrona develops and builds safety relays, digital indicators, motion controllers and signal converters for industrial automation and drive technology, with its own hardware, software and production in Gottmadingen.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">See the products '+ARR+'</a><a class="btn" href="#/contact">Send an inquiry</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>always in motion</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Our own development</span> <span class="nw">of hardware and software</span> <span class="nw">makes us a partner</span> <span class="nw">for complex applications.</span> <em><span class="nw">There is nothing our engineers</span> <span class="nw">relish more than a challenge.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">40</span><p class="k">years of market experience in industrial automation and drive technology</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">SIL3</span><p class="k">and PLe: the highest certification of the DS safety speed monitors and the SRC30/EL</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2 MHz</span><p class="k">cut-off frequency of the motrona motion controllers</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">DS230 · Safety speed monitor</span><h2 class="d3"><span class="nw">Every turn,</span> <em><span class="nw">counted twice.</span></em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Measure</span><span>Overspeed</span><span>Standstill</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Measure.</h2><p>An encoder on the drive shaft sends its pulses to the DS230 over two independent channels, at up to 500 kHz. The monitor compares them continuously and shows the speed on the BG230 display.</p></article>'+
     '<article class="step"><h2>Overspeed.</h2><p>If the shaft runs faster than its set limit, the forced-guided, redundant output relay opens the safety circuit and the drive is brought to a stop: a certified safety function up to SIL3/PLe.</p></article>'+
     '<article class="step"><h2>Standstill.</h2><p>As the drive runs down, the DS230 follows the shaft all the way to zero, and only then signals standstill to the machine control.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">Measured, controlled,</span> <em><span class="nw">made in-house.</span></em></h2></div><p data-r>From the first circuit to the finished device, motrona develops its electronics, firmware and software itself, for applications where speed, position and safety have to be right.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">From safety relay</span> <em><span class="nw">to fieldbus.</span></em></h2></div><p data-r>A unique range of electronic measuring devices, signal converters, process and motion controllers, with core products in stock and ready to ship.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Standards</span><p class="cr" data-r><span>SIL3 / PLe</span><span>EN 61508</span><span>EN ISO 13849-1</span><span>EN IEC 62061</span><span>EN 81-20 / 81-50</span><span>EN 61800-5-2 functions</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Developed and built</span> <em><span class="nw">in Gottmadingen.</span></em></h2></div><p data-r>An internationally oriented manufacturer, represented worldwide by competent, long-term partners who stand for flexible advice, problem solving and short delivery times.</p></div>'+
   hist()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">New devices</span> <em><span class="nw">and trade fairs.</span></em></h2></div><p data-r>The latest from motrona, and the trade fairs where the team shows its safety, display and fieldbus devices.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Your application,</span> <em><span class="nw">our challenge.</span></em></h2>'+
   '<p class="sub" data-r>Send an inquiry, ask for a datasheet or talk through a customer-specific solution with the team in Gottmadingen.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab">Address</span><p>motrona GmbH<br>Zeppelinstraße 16<br>78244 Gottmadingen, Germany</p></div>'+
    '<div><span class="lab">Contact</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telephone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab">Worldwide</span><p>Partners in Europe, Africa, the Middle East, the Far East, Australia and the Americas</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>motrona GmbH<br>Zeppelinstraße 16, 78244 Gottmadingen</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>Safety relays<br>Digital indicators<br>Motion controllers<br>Signal converters</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:500;font-size:54px;letter-spacing:.2em">MOTRONA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 motrona GmbH</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",how:"story",technology:"technology",products:"products",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"motrona — Safety relays, digital indicators, motion controllers and signal converters from Gottmadingen",x:"Home"};
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
