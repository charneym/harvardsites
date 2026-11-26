/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Range '+ARR+'</a></li>'}).join("")+'</ul>'}
/* the ways a guard is watched (mechancontrols.com > Categories and history), each with a small line icon */
function caps(){var C=[
  ["Coded magnetic","A coded field, no contact","A coded magnet actuator on the guard and a sensor on the frame: no moving parts to wear, from Category 1 up to Category 4 systems.",'<path d="M10 18H26V38H10Z"/><path d="M30 18H46V38H30Z"/><path class="a" d="M26 24H30M26 28H30M26 32H30"/><path d="M6 46H50"/>'],
  ["RFID","4 billion possible codes","The R-Type reads a uniquely coded RFID actuator, with 4 billion possible codes and unlimited re-teaching, so it cannot be defeated with a spare magnet.",'<path d="M10 18H26V38H10Z"/><path class="a" d="M32 22C36 25 36 31 32 34M37 18C43 23 43 33 37 38"/><circle class="f" cx="18" cy="28" r="2.4"/><path d="M6 46H50"/>'],
  ["OSSD","CAT4, SIL3, PL-e in series","O-Type switches carry their own OSSD outputs, so a chain of guards still meets CAT4, SIL3 and PL-e.",'<path d="M8 22H18V34H8Z"/><path d="M23 22H33V34H23Z"/><path d="M38 22H48V34H38Z"/><path class="a" d="M18 28H23M33 28H38"/><path d="M6 46H50"/>'],
  ["Safety relays","Up to 30 devices, no programming","The GM1 controller and its GSM extender monitor up to 30 safety devices without the need for programming.",'<path d="M14 8H42V46H14Z"/><path d="M20 16H36M20 22H36"/><circle class="f" cx="22" cy="34" r="2.4"/><circle class="f" cx="34" cy="34" r="2.4"/><path class="a" d="M22 34H34"/>'],
  ["Mechanical","Tongue, hinge and key","The TG1 tongue interlock, the TurnCam hinge switch and the MK-Safe coded key exchange range for guards that open by hand.",'<path d="M10 14H30V42H10Z"/><path class="a" d="M30 28H46"/><path d="M40 22V34"/><path d="M6 46H50"/>'],
  ["316 stainless","Built for wash-down","Many ranges come in 316 grade stainless steel housings, which gave Mechan an advantage in the food and beverage sectors.",'<path d="M12 12H44V40H12Z"/><path class="a" d="M18 6C18 9 16 9 16 12M28 4C28 8 26 8 26 12M38 6C38 9 36 9 36 12"/><path d="M6 46H50"/>']];
  return '<div class="caps six">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["24–26 Nov 2026","SPS 2026, Nuremberg: Hall 9, Booth 159","sps.mesago.com","https://sps.mesago.com/nuernberg/en/exhibitor-search.detail.html/mechan-controls-ltd.html"],
 ["14 Oct 2026","Machine Building Live Exhibition 2026","mechancontrols.com",MC+"news/show/machine-building-live-exhibition-2026"],
 ["22 Sep 2026","PPMA Show Exhibition 2026","mechancontrols.com",MC+"news/show/ppma-show-exhibition-2026"],
 ["8 Sep 2026","Automatik Exhibition 2026","mechancontrols.com",MC+"news/show/automatik-exhibition-2026"],
 ["7 Jul 2026","Machine Building South Exhibition 2026","mechancontrols.com",MC+"news/show/machine-building-south-exhibition-2026"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* milestones from mechancontrols.com > Company > History */
function hist(){var H=[
  ["1972","Established in Skelmersdale to design and make non-contact safety switches for the harsh conditions of the can making industry, and the world’s first modular electronic RFID safety system."],
  ["2000","Every Mechan product submitted for independent testing and approval by TÜV and cULus."],
  ["2011","Azbil appointed sole distributor in Japan, after detailed quality audits at the UK plant."],
  ["2017","Mabruk Farrah becomes sole owner, with a growth strategy built on new products and new markets."],
  ["2022","Fifty years, and the Imperium control station range."],
  ["2024","The TG1 tongue interlock, the TurnCam hinge switch and the ES1 and ES2 emergency stops."]];
  return '<ol class="hst">'+H.map(function(h){return '<li><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Machine guard safety<span class="nomob"> · Made in the UK since 1972</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Machine safety</span> <span class="l">for people</span> <span class="l"><em>and productivity.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Mechan Controls designs and manufactures machine guard safety products in Lancashire: RFID, OSSD and coded magnetic safety switches, safety relays, interlocks, key exchange, rope pull and emergency stop devices.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">See the ranges '+ARR+'</a><a class="btn" href="#/contact">Get a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Since 1972</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Hundreds of thousands</span> <span class="nw">of applications worldwide</span> <span class="nw">attest to the reliability</span> <span class="nw">of our safety switches.</span> <em><span class="nw">Every one designed</span> <span class="nw">and made in the UK.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1972</span><p class="k">the world’s first modular electronic RFID safety system, built for the can making industry</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4 bn</span><p class="k">possible codes in an R-Type RFID safety switch, with unlimited re-teaching</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30</span><p class="k">safety devices monitored by one GM1 controller and its extender, without programming</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">SafeLine SL4 · Grabwire</span><h2 class="d3"><span class="nw">Pull anywhere,</span> <em><span class="nw">the line stops.</span></em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Tension</span><span>Pull</span><span>Reset</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Tension.</h2><p>A wire rope runs the length of the conveyor. A tensioner clamps it and hooks to the SL4’s eyebolt; the indicators on both sides of the housing show when the tension is right, and the machine can run.</p></article>'+
     '<article class="step"><h2>Pull.</h2><p>Pull the rope anywhere along its length, press the red e-stop, or let the rope break: a positive mechanical linkage opens the safety contacts, as per IEC 60947-5-1, and the conveyor stops.</p></article>'+
     '<article class="step"><h2>Reset.</h2><p>The SL4 is mechanically latched. The line stays stopped until someone turns the blue reset switch back to RUN at the switch itself, as ISO 13850 requires.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Safety</span><h2 class="d2 split"><span class="nw">Every way</span> <em><span class="nw">to watch a guard.</span></em></h2></div><p data-r>From the simplest Category 1 magnetic switch to Category 4 electronic safety systems, independently tested and approved by TÜV Nord and cULus to European and international safety standards.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Seven ranges,</span> <em><span class="nw">one factory.</span></em></h2></div><p data-r>Switches, relays, interlocks and stops that work together, all designed and manufactured in Skelmersdale and available worldwide through a growing network of distributors.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Approvals</span><p class="cr" data-r><span>TÜV Nord</span><span>cULus</span><span>CE</span><span>ISO 9001 quality assurance</span><span>Made in the UK</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Made in the UK</span> <em><span class="nw">since 1972.</span></em></h2></div><p data-r>What began as a small company in the north-west of England is now one of the leading designers and manufacturers of machine guard safety products worldwide, still customer-led, still making everything in Skelmersdale.</p></div>'+
   hist()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Come and see us</span> <em><span class="nw">on the stand.</span></em></h2></div><p data-r>Mechan exhibits across the UK and Europe through the year, from Machine Building Live and the PPMA Show to SPS in Nuremberg.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Your guards,</span> <em><span class="nw">our switches.</span></em></h2>'+
   '<p class="sub" data-r>Ask for a quote, request a visit or talk through an application with the team in Skelmersdale.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab">Address</span><p>Mechan Controls Ltd<br>14 Seddon Place, Stanley Industrial Estate<br>Skelmersdale, Lancashire WN8 8EB</p></div>'+
    '<div><span class="lab">Contact</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telephone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+TEL2+'</p></div>'+
    '<div><span class="lab">Worldwide</span><p>Distributors across Europe, Asia Pacific, the USA and South America</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Mechan Controls Ltd<br>14 Seddon Place, Skelmersdale WN8 8EB</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/safety">Safety</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Ranges</span>Safety switches<br>Safety relays<br>Interlocks and key exchange<br>Rope pull and e-stop</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:500;font-size:52px;letter-spacing:.2em">MECHAN</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Mechan Controls Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",how:"story",safety:"technology",technology:"technology",products:"products",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Mechan Controls — Machine guard safety switches, designed and made in the UK since 1972",x:"Home"};
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
