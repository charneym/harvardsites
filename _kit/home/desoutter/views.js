/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function hist(){return '<ol class="sg-tl">'+HIST.map(function(h){return '<li data-r><span class="y">'+esc(h[0])+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function team(){
  return '<div class="mh"><div class="mh-group"><p class="mh-label">Board of directors</p><ul class="mh-list">'+TEAM.map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Design","Engineered in house, with surgeons","Every product is designed and developed in house by mechanical, electronic, manufacturing and software engineers, and tested with leading surgeons and clinical staff in the UK and overseas.",'<path d="M10 46L40 16L46 22L16 52Z"/><path d="M40 16L44 8L52 6L50 14L46 22"/><path class="a" d="M18 38L26 46M24 32L32 40"/><circle class="f" cx="48" cy="10" r="2.2"/>'],
  ["Manufacture","Machined, assembled and packed under one roof","Most mechanical parts are machined on CNC centres at the Tewkesbury plant; skilled technicians assemble and test in Aston Clinton, which also houses the clean room for sterile blades, burs and drills.",'<rect x="8" y="20" width="40" height="30"/><path d="M8 20L20 10V20L32 10V20L44 10V20"/><path class="a" d="M16 34H40M16 42H32"/><circle class="f" cx="44" cy="42" r="2.2"/>'],
  ["Quality and service","ISO 13485, CE marked, before and after sales","The company is accredited to ISO 13485, products carry CE marking and most are FDA registered, and the service team answers questions on De Soutter equipment before and after sales.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M19 28L25 34L37 22"/><circle class="f" cx="28" cy="10" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<span class="lab eyebrow" data-r>Powered surgical instruments<span class="nomob"> · Aston Clinton, UK</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Surgical power, </span><span class="l"><em><span class="nw">built for</span> <span class="nw">the hand.</span></em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>De Soutter Medical designs and makes battery, electric and pneumatic power tools for orthopaedic, trauma, cardiothoracic, neuro and ENT surgery, cast saws for the plaster room, and the sterile blades and burs that go with them.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">See the range '+ARR+'</a><a class="btn" href="#/contact">Talk to us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>A family company</span>'+
   '<h2 class="txt" id="mani">Surgical power tools designed and developed <span class="nw">in house,</span> <span class="nw">in Buckinghamshire,</span> <em><span class="nw">with surgeons,</span> <span class="nw">for the operating room.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1914</span><p class="k">Desoutter Bros is set up in Baker Street, London; its medical heritage runs to this day</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1990</span><p class="k">De Soutter Medical becomes an independent, family-owned company</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">60+</span><p class="k">Countries reached through specialist distribution partners</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3"><span class="nw">One handpiece,</span> <em><span class="nw">many tools.</span></em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Power</span><span>Lock</span><span>Drive</span><span>Cut</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Power.</h2><p>The orthodrive® handpiece runs on a sterile Li-Ion battery, an aseptic battery or corded direct power. De Soutter’s Lithium Ion batteries carry a unique integral fuel gauge.</p></article>'+
     '<article class="step"><h2>Lock.</h2><p>Attachments snap in to lock with an easy, quick-change mechanism: keyed and keyless drills, quick-release drill and reaming attachments, saws and a wire and pin driver, 17 options in all.</p></article>'+
     '<article class="step"><h2>Drive.</h2><p>Twin triggers give instant forward, reverse and oscillating drill and tap modes. The in-built gearbox drills at up to 1,350 rpm and reams at up to 300 rpm, with 19 Nm of torque.</p></article>'+
     '<article class="step"><h2>Cut.</h2><p>Swap to the sagittal or reciprocating saw, running at up to 13,500 cycles a minute, for clean, precise cuts in the hardest bone.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="inhouse" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Made in house</span><h2 class="d2 split"><span class="nw">Designed, made</span> <em class="nw">and serviced.</em></h2></div><p data-r>De Soutter Medical keeps design, machining, assembly, testing and sterile packing under its own control, which lets it keep improving quality and efficiency and meet rigorous international standards.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Direct sales</span><p class="cr" data-r><span>United Kingdom</span><span>USA</span><span>Germany</span><span>Italy</span><span>France</span><span>Belgium</span><span>Austria</span><span>Netherlands</span><span>Australia</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Every speciality,</span> <em class="nw">every bone size.</em></h2></div><p data-r>Modular and dedicated instruments for large and small bone, trauma, maxillo-facial, oral, ENT, cardiothoracic, neuro, spinal and plastics procedures, with a choice of battery, electric or pneumatic power, plus cast and autopsy saws.</p></div>'+
   prods()+
   '<div class="act shop" data-r><a class="btn solid" href="mailto:'+MAIL+'">Ask about a system '+ARR+'</a></div>'+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">A century of</span> <em class="nw">precision tools.</em></h2></div><p data-r>Founded as an independent company in 1990, De Soutter Medical is a leading European manufacturer of surgical power tools, still run by the Desoutter family from its head office in Aston Clinton.</p></div>'+
   hist()+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="events" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Events</span><h2 class="d2 split"><span class="nw">Meet the team</span> <em class="nw">on the stand.</em></h2></div><p data-r>De Soutter Medical shows its systems at the major orthopaedic and medical trade fairs. The latest dates are on the News &amp; Events page.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Trials, quotes</span> <em class="nw">and service.</em></h2>'+
   '<p class="sub" data-r>For a product trial, a quote, a service call or a technical question, or a copy of the user manual for a De Soutter product, contact the head office or your local team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email De Soutter '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>UK and international head office</span><p data-r>De Soutter Medical Limited<br>Halton Brook Business Park, Weston Road<br>Aston Clinton, Bucks HP22 5WF</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>North America</span><p data-r>De Soutter Medical USA Inc<br>Mooresville, NC<br><a class="ul" href="mailto:'+USMAIL+'">'+USMAIL+'</a><br><a class="ul" href="tel:'+USTEL+'">'+USTELT+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Head office</span>De Soutter Medical Limited<br>Halton Brook Business Park, Weston Road, Aston Clinton, Bucks HP22 5WF</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/how-it-works">How it works</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/events">Events</a></div>'+
   '<div class="c"><span class="lab">Range</span>Large bone · Extremities<br>Trauma · Cardiothoracic<br>Cast removal · Stericut®</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 120" aria-hidden="true"><text x="450" y="98" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:800;font-size:132px;letter-spacing:-.04em">deSoutter</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 De Soutter Medical Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro","how-it-works":"story",products:"products","in-house":"inhouse",company:"company",events:"events",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"De Soutter Medical — powered surgical instruments, cast saws and Stericut® consumables",x:"Home"};
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
