/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function apps(){return '<ol class="apl">'+APPS.map(function(a,i){return '<li><span class="lab no">0'+(i+1)+'</span><div class="at"><span class="lab">'+esc(a[0])+'</span><h3>'+esc(a[1])+'</h3></div><p>'+esc(a[2])+'</p></li>'}).join("")+'</ol>'}
function tech(){var C=[
  ["Current makes a field","Every current flowing in a cell or a pack produces a tiny magnetic field just outside it. Its shape follows the paths the current takes through the electrodes, tabs and welds.",'<rect x="10" y="12" width="36" height="40"/><path d="M20 12V4M36 12V4"/><path class="a" d="M28 18c-10 6-10 22 0 28M28 18c10 6 10 22 0 28"/>'],
  ["Sensors read it from outside","Sensitive magnetometers, classical and quantum, take readings over the cell from outside its enclosure. Nothing touches the battery and nothing is opened.",'<path d="M6 14h44"/><circle class="f" cx="12" cy="20" r="2.4"/><circle class="f" cx="22" cy="20" r="2.4"/><circle class="f" cx="32" cy="20" r="2.4"/><circle class="f" cx="42" cy="20" r="2.4"/><rect x="10" y="32" width="36" height="18"/><path class="a" d="M12 26v4M22 26v4M32 26v4M42 26v4"/>'],
  ["An image of the current","From those readings the system reconstructs a current density image, revealing where current concentrates, where it is missing, and how it changes over charge and discharge.",'<rect x="8" y="8" width="40" height="40"/><circle class="a" cx="20" cy="18" r="5"/><circle cx="20" cy="18" r="10"/><circle cx="36" cy="38" r="3"/><path class="a" d="M8 48l14-12 8 6 18-16"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function why(){return '<div class="ev"><span class="lab kick" data-r>Why CDO2</span><div><dl>'+WHY.map(function(e){return '<div><dt class="lab" data-r>'+e[0]+'</dt><dd data-r>'+e[1]+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>CDO2 and CDO² are registered trade marks of CDO2 Limited.</p></div></div>'}
function backers(){return '<div class="bk"><span class="lab kick" data-r>Funded by and worked with</span><p class="cr" data-r>'+BACK.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Quantum current density imaging<span class="nomob"> · UK and Germany</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Through-life</span><span class="l">battery condition</span><span class="l"><em>analysis.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>CDO2’s patented quantum current density imaging shows the current flowing inside battery cells and packs, without contact, for battery manufacture, monitoring and recycling.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/applications">Applications</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Voltage monitoring sees the effects of self-discharge over days or weeks. Current density imaging shows the current flow behind them <em>in seconds.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2017</span><p class="k">Developing quantum current density imaging for batteries since</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">16<sup>cm</sup></span><p class="k">Square sensor array of the CDA-16 bench-top battery current density analyser</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3<sup>regions</sup></span><p class="k">Patents granted in the UK, Europe and the US</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">A camera for <em>current.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Flow</span><span>Sense</span><span>Image</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Current flows.</h2><p>While a cell charges or discharges, current enters at its tabs and spreads across the electrodes. Where it flows, and where it does not, says a great deal about the cell’s design, health and faults.</p></article>'+
     '<article class="step"><h2>Read from outside.</h2><p>That current produces a tiny magnetic field outside the cell. An array of sensitive magnetometers reads it through the enclosure, without any contact with the cell.</p></article>'+
     '<article class="step"><h2>See inside.</h2><p>The readings become a current density image of the whole cell, revealing defects and inconsistencies that voltage measurements alone would miss, and it can be repeated through the cell’s life.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">See inside a battery <em>from the outside.</em></h2></div><p data-r>CDO2’s quantum current density imaging uses sensitive magnetometer readings to visualise and monitor the current flow within battery cells and packs. Unlike destructive analysis, the inspection is complete, non-invasive and can be repeated throughout the cell’s life.</p></div>'+
   tech()+
  '</div></section>'+

  '<section class="sec dark2" id="why" data-theme="dark"><div class="wrap">'+
   why()+
  '</div></section>'+

  '<section class="sec dark" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">Across the whole <em>battery lifecycle.</em></h2></div><p data-r>One imaging technology, from research and development through manufacturing and quality control to second life and end-of-life recycling.</p></div>'+
   apps()+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">From financial risk software <em>to quantum sensing.</em></h2></div><p data-r>CDO2 Limited was founded in 2004 to develop complex financial risk analysis software through pioneering cloud computing. Since 2017 it has developed quantum current density imaging for batteries, in a partnership with the University of Sussex Quantum Systems and Devices Group.</p></div>'+
   '<div class="co">'+
    '<div class="coi"><span class="ln2"></span><span class="lab" data-r>United Kingdom</span><h3 data-r>CDO2 Ltd</h3><p data-r>London House, High Street, Mayfield, East Sussex TN20 6AQ</p><p class="q" data-r>Registered in England and Wales, 05096725</p></div>'+
    '<div class="coi"><span class="ln2"></span><span class="lab" data-r>Germany</span><h3 data-r>CDO2 Germany UG</h3><p data-r>Salzdahlumer Straße 196, 38126 Braunschweig</p><p class="q" data-r>Founded in 2023 to serve customers across Europe and join the quantum ecosystem in Lower Saxony</p></div>'+
    '<div class="coi"><span class="ln2"></span><span class="lab" data-r>Leadership</span><h3 data-r>Dr Gary Kendall</h3><p data-r>Director of CDO2 and Managing Director of CDO2 Germany</p><p class="q" data-r>Co-author of “Non-invasive Current Density Imaging of Lithium-Ion Batteries” (2021)</p></div>'+
   '</div>'+
   backers()+
  '</div></section>'+

  '<section class="sec dark" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">Funded, tested, <em>on the market.</em></h2></div><p data-r>Innovate UK projects and milestones, from the first commercial battery imaging system built with quantum technology to the next generation of sensors.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Discuss your <em>application.</em></h2>'+
   '<p class="sub" data-r>Interested in quantum current density imaging for cell R&D, manufacturing, second life or recycling, or in a partnership? Write to the team in the UK or in Germany.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/applications">See the applications</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>United Kingdom</span><p data-r>London House, High Street, Mayfield, East Sussex TN20 6AQ</p><p data-r><a class="ul" href="tel:+442071837395">+44 (0)20 7183 7395</a></p></div>'+
    '<div><span class="lab" data-r>Germany</span><p data-r>Salzdahlumer Straße 196, 38126 Braunschweig</p><p data-r><a class="ul" href="tel:+4953189999087">+49 (0)531 8999 9087</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@cdo2.com</a></p><p data-r><a class="ul" href="mailto:germany@cdo2.com">germany@cdo2.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Offices</span>Mayfield, East Sussex<br>Braunschweig, Germany</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@cdo2.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">What we do</span>Quantum current density imaging for batteries</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1100 132" aria-hidden="true"><text x="550" y="118" text-anchor="middle" style="font-family:\'Jost\',sans-serif;font-weight:400;font-size:150px">CDO²</text></svg>'+
  '<div class="legal"><span class="lab">© 2004–2026 CDO2 Limited</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",why:"why",applications:"applications",company:"company",research:"research",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"CDO2 — through-life battery condition analysis",x:"Home"};
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
