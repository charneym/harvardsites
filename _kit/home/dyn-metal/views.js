/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">'+"Details"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Management</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* the four works activities (dynmetal.co.uk > Foundry & Machine Shop) */
function caps(){var C=[
  ["Casting","<span class=\"nw\">A foundry on</span> <span class=\"nw\">a split shift</span>","The foundry runs a 16-hour split shift. Alongside a large continuous cast stock it casts a wide spectrum of bronze alloys and sizes centrifugally, and can change production within hours.",'<path d="M12 10H44L38 22H18Z"/><path class="a" d="M28 22V34"/><rect x="10" y="36" width="36" height="12"/><path d="M10 42H46"/>'],
  ["Proof machining","<span class=\"nw\">From stock,</span> <span class=\"nw\">within hours</span>","A vast range of centrifugal stock castings means proof-machined parts can very often be turned around within hours; breakdown sizes from stock can go out the same day at no extra cost.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M28 16V28L36 33"/><path d="M28 6V10M28 46V50M6 28H10M46 28H50"/>'],
  ["Finish machining","<span class=\"nw\">Turned to 2.2 m,</span> <span class=\"nw\">up to 5 tonnes</span>","A fully equipped CNC machine shop of Mazak and DMG Mori Seiki machines, with a Deckel Maho DMU 200FD that turns up to 2,200 mm diameter and 5 tonnes. A new CNC machine has been added every year.",'<rect x="10" y="18" width="30" height="20"/><path d="M18 18V38M32 18V38"/><path class="a" d="M40 28H50M46 24L50 28L46 32"/>'],
  ["Control and quality","<span class=\"nw\">Measured</span> <span class=\"nw\">on every piece</span>","A Wenzel XO87 and an Aberlink Axiom Too CMM check all critical dimensions and tolerances on finished pieces. Chemical composition and hardness are tested in-house, under ISO 9001 since 1990.",'<path d="M8 46H48"/><path d="M16 46V12H40V20"/><path class="a" d="M40 20V34"/><circle class="f" cx="40" cy="36" r="2.6"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Wear resistant bronzes<span class="nomob"> · North Acton, London</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Longer life than</span> <span class="l"><em class="nw">standard bronzes.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>The only manufacturer and supplier of DYN processed bronzes: tin, lead and aluminium bronzes and high-tensile brasses, cast in our own foundry and finish machined at our London works.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/bronzes">Our bronzes '+ARR+'</a><a class="btn" href="#/contact">Send an enquiry</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>London, since 1937</span>'+
   '<h2 class="txt" id="mani"><span class="nwp">A DYN bronze looks</span> <span class="nwp">chemically like</span> <span class="nwp">its standard counterpart.</span> <em><span class="nwp">A finer grain structure</span> <span class="nwp">makes it wear longer.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1937</span><p class="k">first registered in June as RESISTO metals, renamed DYN-METAL that July</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2.2 m</span><p class="k">turning diameter on the Deckel Maho DMU 200FD, for pieces up to 5 tonnes</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">24 h</span><p class="k">to respond to a material breakdown, or the next working day</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">At the North Acton works</span><h2 class="d3"><span class="nw">From the melt</span> <em class="nw">to the bush.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Cast</span><span>Process</span><span>Machine</span><span>Measure</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Cast in</span> <span class="nw">our own foundry.</span></h2><p>Molten bronze is poured into a spinning mould and thrown against its wall. The foundry casts centrifugally, to any BS, EN or ASTM specification, and can respond to a breakdown within 24 hours.</p></article>'+
     '<article class="step"><h2><span class="nw">A finer grain,</span> <span class="nw">a longer life.</span></h2><p>A special process, conducted in-house, gives every DYN bronze a finer grain structure. That structural change and realignment is what sets it apart from standard British, European and American grades.</p></article>'+
     '<article class="step"><h2><span class="nw">Finish machined</span> <span class="nw">on CNC.</span></h2><p>The casting is proof machined, then turned and bored to size on Mazak and DMG Mori Seiki machines, up to 2.2 m in diameter and 5 tonnes.</p></article>'+
     '<article class="step"><h2><span class="nw">Every critical</span> <span class="nw">size, measured.</span></h2><p>Coordinate measuring machines check all critical dimensions and tolerances on every finished piece before it is assembled and dispatched from the works.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="bronzes" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Bronzes</span><h2 class="d2 split"><span class="nw">DYN processed,</span> <em class="nw">and standard grades.</em></h2></div><p data-r>All DYN bronzes are manufactured and processed in-house at our North Acton works. As well as our own processed alloys, we hold recognised bronze grades to British, European and American standards.</p></div>'+
   prods()+
   '<div class="qual mk"><span class="lab kick" data-r>Markets</span><p class="cr" data-r><span>Offshore and marine</span><span>Gearbox refurbishment</span><span>Mandrels and wiper dies</span><span>New build machinery</span><span>Oil and gas</span><span>Automotive</span><span>Press bearings</span><span>Quarry and mining</span><span>Ship repair</span><span>Steel manufacturing</span><span>Aerospace</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="works" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Foundry and machine shop</span><h2 class="d2 split"><span class="nw">Designed, cast</span> <em><span class="nw">and machined</span> <span class="nw">in one works.</span></em></h2></div><p data-r>A full solution under one roof, from in-house design and material specification to a part that is cast, finish machined, assembled and dispatched from our works.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Bronze in London</span> <em class="nw">since 1937.</em></h2></div><p data-r>DYN-Metal started out in Victoria, Central London, with its first works under railway arches in Camden, and moved to its Park Royal site in North Acton in 1977.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>Milestones</span><ul>'+
     '<li data-r><b>1937</b>Registered on 19 June as RESISTO metals, and renamed DYN-METAL on 16 July.</li>'+
     '<li data-r><b>1976</b>The Park Royal site is acquired in September; the works move in during 1977.</li>'+
     '<li data-r><b>1984</b>The first CNC machine, a Colchester 650, is installed on 3 October.</li>'+
     '<li data-r><b>1990</b>The first ISO quality system, now a BSI approved system to ISO 9001:2015.</li>'+
     '<li data-r><b>1993</b>The first electric melting furnace is installed in July.</li>'+
     '<li data-r><b>2004</b>The Deckel Maho DMU 200 is installed in July.</li>'+
     '<li data-r><b>2015</b>A second Mazak Integrex i300-S joins the machine shop.</li>'+
     '<li data-r><b>2023</b>A Hitachi OES spectrometer is installed for chemical analysis.</li>'+
    '</ul></div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Next seen at</span> <em class="nw">the NEC, Birmingham.</em></h2></div><p data-r>DYN-Metal is listed as an exhibitor at UK Metals Expo on Stand A40, with centrifugally cast bronze bushes to any BS, EN or ASTM specification. Each entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">A worn bearing?</span> <em class="nw">Call the works.</em></h2>'+
   '<p class="sub" data-r>From a standard bush out of stock to a part designed, cast and finish machined for you, tell us the alloy, the size and how soon you need it.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email DYN-Metal '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Works</span><p data-r><span>DYN Metal Limited</span><br><span>25-29 Chase Road, North Acton</span><br><span>London NW10 6TA, England</span></p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Phone '+TELT+'</span><br><span>Fax '+FAXT+'</span></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r><span>Registered in England, 00328977</span><br><span>ISO 9001:2015 certified</span><br><a class="ul" href="'+CP+'gallery" target="_blank" rel="noopener">Our work, in photos</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Works</span>DYN Metal Limited<br>25-29 Chase Road, North Acton<br>London NW10 6TA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/bronzes">Bronzes</a><br><a class="ul" href="#/works">Foundry</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Bronzes</span>Tin, lead and aluminium bronzes, high-tensile brasses and standard grades</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:400;font-size:40px;letter-spacing:.2em">DYN-METAL · LONDON</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 DYN Metal Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",bronzes:"bronzes",works:"works",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"DYN-Metal — Wear resistant bronzes, North Acton, London",x:"Home"};
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
