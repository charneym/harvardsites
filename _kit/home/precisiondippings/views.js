/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){
  return '<div class="mh"><div class="mh-group"><p class="mh-label">The team</p><ul class="mh-list">'+TEAM.map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* the three sectors (precisiondippings.co.uk > Medical, Marine, Industrial), each with a small line icon of a part they make */
function caps(){var C=[
  ["Medical","A perfect fit.","Medical training aids, devices, products and components for a global client base and the NHS, including rubber dental dams, prosthetic cones and Bloccs waterproof cast and dressing covers, in natural rubber or latex-free polyisoprene.",'<path d="M20 6H36V14C36 18 44 22 44 30V50H12V30C12 22 20 18 20 14Z"/><path class="a" d="M22 32H34M28 26V38"/><circle class="f" cx="28" cy="10" r="2.2"/>'],
  ["Marine","Dry and mighty.","Latex neck and wrist seals and patented heat weldable seals for dry suits and survival suits, diving gloves and hoods, and neoprene neck seals for smoke escape hoods, for the Armed Services, rescue services and the world’s leading dry suit makers.",'<path d="M22 8H34V18C34 20 46 24 46 34V48H10V34C10 24 22 20 22 18Z"/><path class="a" d="M6 52C12 48 16 48 22 52S32 56 38 52 46 48 50 52"/><circle class="f" cx="28" cy="13" r="2.2"/>'],
  ["Industrial","Moulded to your needs.","Rubber triaxial membranes for soil testing, isostatic pressing bags and caps (customers report 4,000 pressings from one bag), dip coating in natural rubber or neoprene, bellows, gaiters, bladders, liners and seals.",'<path d="M14 8H42V48H14Z"/><path class="a" d="M14 18H42M14 28H42M14 38H42"/><circle class="f" cx="28" cy="52" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* milestones: precisiondippings.co.uk > About us, News (60th anniversary) and Queen's Award pages */
function hist(){var H=[
  ["1964","The family business starts making custom dip-moulded rubber products, today from its factory in Yate, near Bristol."],
  ["1970s","It puts the s-t-r-e-t-c-h into the original Stretch Armstrong toy."],
  ["2016","Bloccs, the waterproof cast and dressing covers developed in-house, win a Queen’s Award for Enterprise for Innovation."],
  ["2019","A second Queen’s Award, this time for International Trade, for the volume of Bloccs’ global sales."]];
  return '<ol class="sg-tl">'+H.map(function(h){return '<li><span class="y" data-r>'+h[0]+'</span><p data-r>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<span class="lab eyebrow" data-r>Dip-moulded rubber<span class="nomob"> · Made in the UK since 1964</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Custom rubber,</span> </span><span class="l"><em><span class="nw">dipped to</span> <span class="nw">your design.</span></em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Precision Dippings Manufacturing designs, tools and makes bespoke dip-moulded products and components in natural rubber latex, neoprene, nitrile and polyisoprene for medical, marine and industrial customers around the world.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/sectors">What we make '+ARR+'</a><a class="btn" href="#/contact">Talk to us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Since 1964</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Bespoke dipped rubber,</span> <span class="nw">made in the UK</span> <span class="nw">for companies</span> <span class="nw">around the world.</span> <em><span class="nw">The only thing that rivals</span> <span class="nw">our materials</span> <span class="nw">is our service.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1964</span><p class="k">A family-run business making custom dip-moulded rubber products in Yate, near Bristol</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Queen’s Awards for Enterprise for Bloccs, for Innovation in 2016 and International Trade in 2019</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30</span><p class="k">Years of ISO 9001 accreditation, with a BSI audit every year</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a part is made</span><h2 class="d3"><span class="nw">From the drawing board</span> <em><span class="nw">to production.</span></em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Design</span><span>Tooling</span><span>Dip</span><span>Production</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Drawing board.</h2><p>We work in partnership with you, taking your specification from technical drawings and designs, and advise on the material best suited to the part: natural rubber, neoprene, nitrile or polyisoprene.</p></article>'+
     '<article class="step"><h2>Tooling.</h2><p>Our team designs the former, the tool the rubber forms on, as prototype tooling first and low-cost production tooling after, all made for your part.</p></article>'+
     '<article class="step"><h2>Dip.</h2><p>The former is dipped into the latex and drawn out with an even coat, which cures into a seamless rubber part. Rapid prototyping gives you samples fast, in high quality.</p></article>'+
     '<article class="step"><h2>Production.</h2><p>Automated and traditional manual dipping methods make the parts in low or high volume, colour matched and pad printed if you wish, under an ISO 9001 quality system.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="sectors" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Sectors</span><h2 class="d2 split"><span class="nw">From training room</span> <em class="nw">to the deep sea.</em></h2></div><p data-r>A trusted supplier to sectors that include medical, veterinary, dental, marine, the military, emergency and rescue services, automotive, motor racing, fire safety and industry.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="materials" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Materials</span><h2 class="d2 split"><span class="nw">Four latexes,</span> <em class="nw">one for every job.</em></h2></div><p data-r>Standard colours are available in every material, and a colour-matching service when the specification needs it. The team will advise on the properties of each for your part.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Services</span><p class="cr" data-r><span>Product development</span><span>Prototyping</span><span>Production tooling</span><span>Automation</span><span>Contract manufacturing</span><span>Pad printing</span><span>ISO 9001 quality</span></p></div>'+
  '</div></section>'+

  '<section class="sec light co" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Sixty years,</span> <em class="nw">still family-run.</em></h2></div><p data-r>A hands-on team of 36 in Yate, many of whom have been with the business for years. We are constantly researching new materials, tooling, dip moulds and processes to keep quality high and prices competitive.</p></div>'+
   hist()+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">At the shows,</span> <em class="nw">and in the factory.</em></h2></div><p data-r>From MEDICA in Düsseldorf to the latest BSI audit, the news from Precision Dippings and Bloccs.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us about</span> <em class="nw">your part.</em></h2>'+
   '<p class="sub" data-r>Send a drawing or a question about rubber seals, dip-moulded product design, prototypes, materials or production, and the team in Yate will be happy to advise.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email the team '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Factory</span><p data-r>Precision Dippings Manufacturing Ltd<br>Stover Trading Estate, Lawrence Drive<br>Yate, Bristol BS37 5PG</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Opening hours</span><p data-r>Monday to Friday<br>9 am to 3.30 pm (UK time)</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Factory</span>Precision Dippings Manufacturing Ltd<br>Stover Trading Estate, Lawrence Drive, Yate, Bristol BS37 5PG</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/sectors">Sectors</a><br><a class="ul" href="#/process">Process</a><br><a class="ul" href="#/materials">Materials</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Sectors</span>Medical, marine and industrial dip-moulded rubber products and components</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 96" aria-hidden="true"><text x="450" y="76" text-anchor="middle" style="font-family:\'Open Sans\',Arial,sans-serif;font-weight:400;font-size:84px;letter-spacing:-.01em">Precision Dippings</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Precision Dippings Manufacturing Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",process:"story",sectors:"sectors",materials:"materials",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Precision Dippings Manufacturing — custom dip-moulded rubber products, made in the UK since 1964",x:"Home"};
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
