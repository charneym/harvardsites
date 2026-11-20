/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">Work package '+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+NSF+'" target="_blank" rel="noopener">NSF award</a></li>'}).join("")+'</ul>'}
function lead(){var p=TEAM[0];
  return '<div class="ldr"><div class="ldr-n"><span class="lab kick" data-r>'+esc(p.g)+'</span><h3 data-r>'+esc(p.name)+'</h3><span class="lab ldr-r" data-r>'+esc(p.title)+'</span></div>'+
   '<div class="ldr-b"><p data-r>'+esc(p.sum)+'</p>'+
   '<dl class="ldr-f"><div><dt class="lab" data-r>Funding</dt><dd data-r>U.S. National Science Foundation, SBIR Phase I (award 2537342)</dd></div>'+
   '<div><dt class="lab" data-r>Engineering</dt><dd data-r>Device flows modelled in COMSOL Multiphysics (CFD)</dd></div>'+
   '<div><dt class="lab" data-r>Base</dt><dd data-r>Woodland Hills, Los Angeles, California</dd></div></dl></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Three layers, like tissue","Each biochip has three layers: a central reservoir that holds the islets in place, flanked by two capillary-like layers whose channels are sealed with semipermeable membranes.",'<rect x="8" y="12" width="40" height="8"/><rect class="a" x="8" y="22" width="40" height="12"/><rect x="8" y="36" width="40" height="8"/><circle class="f" cx="20" cy="28" r="2.6"/><circle class="f" cx="30" cy="28" r="3.2"/><circle class="f" cx="39" cy="28" r="2.2"/>'],
  ["Modular by design","Ten chips connect in parallel to form a module, and several modules combine in a cartridge. If a biochip fails, its module can be changed.",'<rect x="6" y="10" width="13" height="36"/><rect x="22" y="10" width="13" height="36"/><rect class="a" x="38" y="10" width="13" height="36"/><path d="M6 28h45"/>'],
  ["Sensing in real time","Biosensors in the design track glucose, oxygen and lactate, so the cells’ insulin and glucagon answer the patient’s own blood sugar.",'<path d="M6 36c6 0 8-16 14-16s8 22 14 22 8-18 16-18"/><path class="a" d="M6 46h44"/><circle class="f" cx="34" cy="42" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Bioartificial pancreas<span class="nomob"> · Type 1 diabetes</span> · Woodland Hills, CA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A pancreas,</span><span class="l">rebuilt in</span><span class="l"><em>microfluidics.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Micromedics is developing the mPancreas: a wearable, biomimetically designed microfluidic bioartificial pancreas that keeps living insulin-producing cells supplied with oxygen and nutrients, so they can restore natural glucose control.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/programme">The NSF programme</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Transplanted insulin-producing cells can restore natural glucose control. What holds the therapy back is their poor survival, and the lack of technology that keeps oxygen and nutrients reaching them. Micromedics is engineering <em>the environment they need.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$305K</span><span class="k">NSF SBIR Phase I award, June 2026, to design and develop the mPancreas ($304,926)</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><span class="k">Signals the design senses in real time: glucose, oxygen and lactate</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">26 yrs</span><span class="k">Of academic and clinical experience in treating diabetes and diabetic nephropathy behind the design</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Islets, fed <em>like tissue.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Hold</span><span>Feed</span><span>Respond</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Hold the islets in place.</h2><p>Human islets, the pancreas’s own insulin-producing clusters, sit in a central reservoir on a thin microfluidic biochip.</p></article>'+
     '<article class="step"><h2>Feed them like capillaries.</h2><p>Channels sealed with semipermeable membranes mimic capillaries above and below. Thin permeable membranes and precisely controlled flow regulate oxygen, nutrients and metabolic products, and shield the cells.</p></article>'+
     '<article class="step"><h2>Answer the blood sugar.</h2><p>Biosensors track glucose, oxygen and lactate. When blood sugar is high the islets release insulin; if it dips to dangerous levels, glucagon.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">Modelled on the <em>endocrine pancreas.</em></h2></div><p data-r>The mPancreas copies what keeps islets alive in the body: a close bed of capillaries, a protective barrier and constant sensing. It is built from thin biochips, designed to be worn, with no injections and no immunosuppressive drugs as the goal.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="programme" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programme</span><h2 class="d2 split">NSF SBIR <em>Phase I.</em></h2></div><p data-r>“Design and Development of the mPancreas: A Wearable Biomimetically Designed Microfluidic BioArtificial Pancreas”, funded by the U.S. National Science Foundation from July 2026 to June 2027. Its results will lay the technical foundation for a therapeutic platform.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built from the <em>clinic outward.</em></h2></div><p data-r>The mPancreas grew out of decades spent treating people with diabetes and its complications, and the conviction that the cells, not the injections, should do the work.</p></div>'+
   lead()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From concept <em>to award.</em></h2></div><p data-r>The mPancreas on the public record, from its first published design to federal funding.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>Micromedics.</em></h2>'+
   '<p class="sub" data-r>Whether you work on islet transplantation, microfluidics or diabetes care, or want to support the next phase of the mPancreas, Micromedics would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Micromedics '+ARR+'</a><a class="btn" href="#/technology">How it works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Micromedics Inc.<br>24548 Eilat St, Suite A2<br>Woodland Hills, CA 91367</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+12138045096">(213) 804-5096</a></p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r><a class="ul" href="'+NSF+'" target="_blank" rel="noopener">NSF SBIR award 2537342</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Woodland Hills, CA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programme">Programme</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">mPancreas</span>Wearable microfluidic<br>bioartificial pancreas</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 720 62" aria-hidden="true"><text x="360" y="52" text-anchor="middle" style="font-family:\'Instrument Sans\',Arial,sans-serif;font-weight:600;font-size:64px;letter-spacing:-.03em">Micromedics</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Micromedics Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",platform:"platform",programme:"programme",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Micromedics — The mPancreas, a wearable microfluidic bioartificial pancreas, Woodland Hills, CA",x:"Home"};
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
