/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Super pulsing","The 905 nm laser fires pulses of 100 to 200 nanoseconds at high peak power, for a higher photon density deeper in the tissue than a laser of the same average power that is not super pulsed.",'<path d="M6 40h8l3-26 3 26h6l3-26 3 26h6l3-26 3 26h6"/><path class="a" d="M6 48h44"/>'],
  ["LaserSweep&#8482;","Frequencies sweep from highest to lowest during treatment, scanning the tissue from superficial to deep so it does not adapt to one fixed signal.",'<path d="M6 28c4-14 8-14 12 0s8 14 12 0 6-10 9 0 5 7 7 0 3-5 4 0"/><path class="a" d="M6 46h44M44 42l6 4-6 4"/>'],
  ["TARGET&#8482;","Treatment Area Recognition and Guidance Enhanced Technology constantly measures the electroconductivity of treated tissue, helping the clinician find the optimal treatment locations.",'<circle cx="28" cy="28" r="18"/><circle cx="28" cy="28" r="9"/><circle class="f" cx="28" cy="28" r="3"/><path class="a" d="M28 4v8M28 44v8M4 28h8M44 28h8"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Evidence</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From Multi Radiance Medical&#8217;s press releases of 9 June 2026 and 1 February 2024. The lateral epicondylitis clearance is FDA 510(k) K254024, decided 19 May 2026.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Super Pulsed Laser therapy<span class="nomob"> · FDA-cleared</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Light that reaches</span><span class="l">the pain, <em>without drugs.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Multi Radiance Medical designs and manufactures Super Pulsed Laser devices for non-invasive pain relief, FDA-cleared and validated in randomized, placebo-controlled clinical trials.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/products">Our lasers</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why super pulsing</span>'+
   '<h2 class="txt" id="mani">A continuous-wave laser holds one level of power. Ours fire high peak power in billionth-of-a-second pulses, <em>driving photons deeper into the tissue.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">200 W</span><p class="k">Peak super pulsed power in the MR5 ACTIV PRO LaserShower</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">72%</span><p class="k">Clinical success in the lateral epicondylitis trial, against 40% on placebo</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">35+</span><p class="k">Global clinical trials the company has taken part in</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The Cascading Energy Effect&#8482;</span><h2 class="d3">Three wavelengths, <em>each one deeper.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Red</span><span>Infrared</span><span>Laser</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>660 nm red clears the way.</h2><p>Pulsed red light is absorbed by the superficial tissue, clearing the way for the infrared to penetrate deeper.</p></article>'+
     '<article class="step"><h2>875 nm infrared goes further.</h2><p>Pulsed broad-band infrared diodes reach deeper and cover a broader spectrum, eliminating cellular interference.</p></article>'+
     '<article class="step"><h2>905 nm laser goes deepest.</h2><p>The super pulsed laser drives photons deep into the target tissue in billionth-of-a-second pulses, reducing pain and improving microcirculation.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Light, laser and <em>magnetic energy.</em></h2></div><p data-r>Multi Radiance lasers combine a 905 nm super pulsed laser, pulsed infrared and red light and a static magnetic field, synchronised by our own software algorithm. Since its beginnings as a space-age invention, the technology was designed for non-invasive use.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Portable lasers for <em>every practice.</em></h2></div><p data-r>Cordless super pulsed lasers for sports medicine, chiropractic, physical therapy, general medicine and dental care, a Class IV laser, a laser for fibromyalgia, and a veterinary line.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="research" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">Proven in <em>clinical trials.</em></h2></div><p data-r>Our mission is to investigate, validate and educate. Two long-standing members of our research team were named to the 2025 Stanford University Top 2% Scientists list for their work in photobiomodulation.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Multi Radiance.</em></h2></div><p data-r>Clearances, research recognition and partnerships, from our press room.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians and partners</span>'+
   '<h2 class="big split">Talk to <em>Multi Radiance.</em></h2>'+
   '<p class="sub" data-r>Request a demo or a quote, ask about the clinical evidence, or find a distributor near you. We invite you to become part of our story.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+TEL+'">Call (440) 542-0761 '+ARR+'</a><a class="btn" href="'+MAIL+'">Media enquiries</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Corporate headquarters</span><p data-r>Multi Radiance Medical<br>6521 Davis Industrial Pkwy<br>Solon, OH 44139</p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="'+TEL+'">(440) 542-0761</a><br><a class="ul" href="tel:+18003730955">800-373-0955</a></p></div>'+
    '<div><span class="lab" data-r>Media</span><p data-r><a class="ul" href="'+MAIL+'">ajacobi@multiradiance.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>6521 Davis Industrial Pkwy<br>Solon, Ohio 44139</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TEL+'">(440) 542-0761</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lasers</span>MR5 ACTIV PRO · FibroLux · ALPHA</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Figtree\',sans-serif;font-weight:400;font-size:70px">MULTI RADIANCE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Multi Radiance Medical</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",products:"products",research:"research",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Multi Radiance Medical — Super Pulsed Laser therapy",x:"Home"};
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
