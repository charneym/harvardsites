/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){
  return '<div class="mh"><div class="mh-group"><p class="mh-label">The team</p><ul class="mh-list">'+TEAM.map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* the clinical evidence, from neater.co.uk > Clinical Evidence: three independent studies, each with a small line icon */
function caps(){var C=[
  ["University of Nottingham","The Neater Arm Support.","A positive impact on independence, confidence and social interaction, with everyday activities made easier and quicker, and the occupational therapist’s role important to the outcome.",'<path d="M10 46H46"/><path d="M16 46V20H40V46"/><path class="a" d="M22 32L27 37L35 27"/><circle class="f" cx="28" cy="12" r="2.2"/>'],
  ["Denmark","The Neater Eater.","More independence, better health and better relationships with carers. The initial cost is offset after a few months by savings on care, a good outcome at reduced cost.",'<path d="M14 14H42V46H14Z"/><path class="a" d="M20 38L26 30L31 34L37 22"/><circle class="f" cx="37" cy="22" r="2.2"/>'],
  ["University of Brighton","Eating devices.","Independence, freedom and a better quality of life for people with neuromuscular conditions: eating enjoyed as a social event, and carers less stressed. Published in the American Journal of Occupational Therapy, 2018.",'<path d="M28 10C18 10 12 17 12 25C12 37 28 46 28 46S44 37 44 25C44 17 38 10 28 10Z"/><path class="a" d="M20 27H25L28 21L31 31L34 27H38"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<span class="lab eyebrow" data-r>Assistive eating technology<span class="nomob"> · Buxton, UK</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Independence, dignity</span> </span><span class="l"><em><span class="nw">and choice</span> <span class="nw">at every meal.</span></em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Neater Solutions designs and makes the Neater Eater, the Neater Arm Support and Neater Drinkers in the UK: robotic and manual eating aids, powered arm supports and drinking aids for people who find eating or drinking difficult.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Book a free trial</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Neater Solutions</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Drinking aids,</span> <span class="nw">eating aids</span> <span class="nw">and mobile arm supports</span> <span class="nw">for ataxia, muscular dystrophy,</span> <span class="nw">tremors and more.</span> <em><span class="nw">Designed with</span> <span class="nw">the people who use them,</span> <span class="nw">made in the UK.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+</span><p class="k">Years of working with real customers and innovating on their feedback</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10,000+</span><p class="k">Personalised assessments behind the design of every product</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3 yr</span><p class="k">Warranty as standard on all new main equipment, with repairs for up to ten years</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3"><span class="nw">The Neater Eater Robotic,</span> <em><span class="nw">one mouthful</span> <span class="nw">at a time.</span></em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Set up</span><span>Control</span><span>Scoop</span><span>Serve</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Plug and go.</h2><p>No engineer set-up: it is ready out of the box, with two plates, two pieces of cutlery, a plate stand and a padded rucksack, and its battery lets it travel to a restaurant.</p></article>'+
     '<article class="step"><h2>Your control.</h2><p>Single, head or foot switches, the touch screen, voice control or eye gaze: the user chooses how to drive it, and a demonstrator helps choose the accessories.</p></article>'+
     '<article class="step"><h2>Scoop.</h2><p>The spoon takes food from the plate, with adjustable scooping, plate scraping and a sauce-dipping function set to the user’s preferences.</p></article>'+
     '<article class="step"><h2>To the mouth.</h2><p>The arm brings the spoon up to the user, wiping it automatically, for people who can chew and swallow but cannot take food to their mouth, including MND, MS, cerebral palsy and tetraplegia.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Eating, drinking</span> <em class="nw">and reaching.</em></h2></div><p data-r>The Neater range is designed and assembled in the UK from trusted suppliers, and comes with a three-year warranty as standard. Plates, cutlery and other accessories are in the online shop.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Support</span><p class="cr" data-r><span>Free home assessment or postal trial (UK)</span><span>Remote technical support</span><span>Free virtual training</span><span>Repairs for ten years</span><span>Refurbishment up to seven years</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="evidence" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Evidence</span><h2 class="d2 split"><span class="nw">Clinically proven,</span> <em class="nw">in three studies.</em></h2></div><p data-r>Independent academic research has shown the clinical effectiveness and benefits of many Neater products, at home and in community equipment services.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>In their words</span><p class="cr" data-r>“I would sooner lose my power wheelchair for a day than my Neater Eater Robot.” <span class="qby">Geoff, client</span></p></div>'+
  '</div></section>'+

  '<section class="sec light co" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split"><span class="nw">The people</span> <em class="nw">behind Neater.</em></h2></div><p data-r>Engineers, demonstrators and trainers in Buxton, some of whom have worked with Neater users and occupational therapists for more than twenty years.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">New designs,</span> <em class="nw">from user feedback.</em></h2></div><p data-r>The latest from Neater Solutions, from the 2026 arm support to voice control on the Neater Eater Robotic.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Try it at home,</span> <em class="nw">free of charge.</em></h2>'+
   '<p class="sub" data-r>Every UK client is offered one free home assessment or postal trial, to test the equipment in real life. Postal trials usually last five days, with secure delivery and collection. International enquiries are welcome.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email the team '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Neater Solutions Ltd<br>12 Burlington Road<br>Buxton, Derbyshire SK17 9AL</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Shop</span><p data-r>Plates, cutlery and accessories<br><a class="ul" href="'+NS+'shop" target="_blank" rel="noopener">neater.co.uk/shop</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Neater Solutions Ltd<br>12 Burlington Road, Buxton, Derbyshire SK17 9AL</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/how-it-works">How it works</a><br><a class="ul" href="#/evidence">Evidence</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Range</span>Eating aids, mobile arm supports and drinking aids, designed and made in the UK</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 120" aria-hidden="true"><text x="450" y="98" text-anchor="middle" style="font-family:\'Outfit\',Arial,sans-serif;font-weight:400;font-size:112px;letter-spacing:-.01em">Neater</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Neater Solutions Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro","how-it-works":"story",products:"products",evidence:"evidence",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Neater Solutions — assistive eating and drinking technology, designed and made in the UK",x:"Home"};
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
