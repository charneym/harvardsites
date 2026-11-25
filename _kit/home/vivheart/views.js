/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Two coaxial tubes","A 12 Fr catheter introduced through the femoral artery with conventional catheterisation techniques. The inner tube takes 0.035-in guidewires and 5 Fr diagnostic catheters.",'<circle cx="28" cy="28" r="20"/><circle class="a" cx="28" cy="28" r="10"/><circle class="f" cx="28" cy="28" r="2.6"/>'],
  ["A six-arm basket","A push-pull action on the proximal tube opens the distal basket in three dimensions, over a modulable range, distancing the tip from the aortic walls and aligning it with the prosthesis.",'<path d="M4 28h12M40 28h12"/><path class="a" d="M16 28C22 10 34 10 40 28M16 28C22 46 34 46 40 28M16 28C24 20 32 20 40 28M16 28C24 36 32 36 40 28"/>'],
  ["Pebax polymers","Made for an optimal combination of toughness and flexibility. EasyCross is non-implantable: a temporary catheter, withdrawn once the valve is crossed.",'<path d="M6 40C18 40 18 16 30 16S42 40 50 40"/><path class="a" d="M6 46h44"/><circle class="f" cx="30" cy="16" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function study(){return '<div class="vgrp">'+GROUPS.map(function(g){return '<div class="vg"><span class="n">'+esc(g[0])+'</span><h3>'+esc(g[1])+'</h3><p>'+esc(g[2])+'</p></div>'}).join("")+'</div>'+
  '<div class="ev"><span class="lab kick">VIV-FIH · first-in-human</span><div><dl>'+STUDY.map(function(e){return '<div><dt class="lab">'+esc(e[0])+'</dt><dd>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s">Twenty patients (60% women; median age 82) with severe aortic stenosis or bioprosthetic valve failure. In every patient with a surgical or transcatheter prosthesis, the device placed the guidewire within the prosthetic chamber. Ancona et al., Canadian Journal of Cardiology, 2025. The authors note that the small sample calls for caution; the data are exploratory and promising.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Valve-in-valve TAVI<span class="nomob"> · Medical devices</span> · Milan</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A safer way</span><span class="l"><em>across the valve.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ViVHeart developed and manufactures EasyCross, the first catheter designed to place the guidewire inside the frame of an aortic bioprosthesis before the valve is crossed.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How it works '+ARR+'</a><a class="btn" href="#/results">Clinical results</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick">Mission</span>'+
   '<h2 class="txt" id="mani">Transcatheter valves now dominate the treatment of aortic valve disease. As they reach younger patients, more will need a second valve inside the first, and crossing a degenerated prosthesis is a big, unmet challenge. <em>ViVHeart was founded to make it safe.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">20</span><p class="k">Patients in the first-in-human feasibility study at IRCCS San Raffaele, Milan</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100%</span><p class="k">Technical success, with no device-related complications</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">208 s</span><p class="k">Median crossing time, from device insertion to wire in the left ventricle</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Centre the wire, <em>then cross.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Challenge</span><span>Basket</span><span>Crossing</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A chamber within the root.</h2><p>A surgical or transcatheter prosthesis builds a prosthetic chamber inside the aortic root. A wire that wanders outside its frame can pass a strut or a paravalvular leak, with a risk of embolisation, entrapment or crushing the prosthesis.</p></article>'+
     '<article class="step"><h2>Open the basket.</h2><p>EasyCross is advanced over the arch. A push-pull action opens its six-arm basket, which distances the tip from the aortic walls and aligns it with the outflow of the prosthesis.</p></article>'+
     '<article class="step"><h2>Cross in the true lumen.</h2><p>The guidewire leaves the centred tip inside the prosthetic chamber and crosses the valve. The inner lumen takes 5 Fr catheters, so leaflets are crossed with the usual tools before a pigtail goes on to the ventricle.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Technology</span><h2 class="d2 split">EasyCross, <em>built for the crossing.</em></h2></div><p>The first device designed to support the positioning of a guidewire within the frame of a surgical or transcatheter aortic bioprosthesis, the crucial step before valve crossing in any valve-in-valve procedure.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Clinical</span><h2 class="d2 split">First in human, <em>at San Raffaele.</em></h2></div><p>EasyCross was used in three scenarios in its first-in-human study: recrossing transcatheter valves, crossing failed surgical bioprostheses, and crossing native aortic valves during TAVR.</p></div>'+
   study()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">News</span><h2 class="d2 split">EasyCross <em>in the journals.</em></h2></div><p>The first-in-human experience, as published and presented by the investigators at IRCCS San Raffaele.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick">Contact</span>'+
   '<h2 class="big split">Talk to <em>ViVHeart.</em></h2>'+
   '<p class="sub">For more on EasyCross and valve-in-valve crossing, the team in Milan would be glad to hear from you.</p>'+
   '<div class="act"><a class="btn solid" href="mailto:'+MAIL+'">Email ViVHeart '+ARR+'</a><a class="btn" href="#/results">See the results</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab">Headquarters</span><p>Via Senato, 15<br>20121 Milano, Italy</p></div>'+
    '<div><span class="lab">Contact</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Company</span><p>Privately owned, founded 2019<br>P. IVA 10900740969</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>ViVHeart s.r.l.<br>Via Senato, 15, 20121 Milano</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/mission">Mission</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Device</span>EasyCross catheter<br>for valve-in-valve TAVI</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Lexend Zetta\',\'Montserrat\',Arial,sans-serif;font-weight:600;font-size:52px;letter-spacing:-.04em"><tspan class="v">VIV</tspan>HEART</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ViVHeart s.r.l.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={mission:"about",approach:"story",technology:"platform",clinical:"clinical",results:"clinical",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ViVHeart — EasyCross, a catheter for safe valve crossing in valve-in-valve TAVI, Milan",x:"Home"};
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
