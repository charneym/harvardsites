/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function types(){return '<div class="swtw"><ol class="swtl">'+TYPES.map(function(t,i){
  return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(t[0])+'</h3><p>'+esc(t[1])+'</p></li>'}).join("")+'</ol>'+
  '<aside class="swsp" data-r><span class="lab kick">Deva CMM controllers · at a glance</span><dl>'+
   '<div><dt class="lab">Formats</dt><dd>PCI Express, PCI and USB</dd></div>'+
   '<div><dt class="lab">Scale</dt><dd>Up to four controllers and 16 axes in one PC</dd></div>'+
   '<div><dt class="lab">Probes</dt><dd>Renishaw SP600 and SP25 scanning support in DevaCmmCtrl78</dd></div>'+
   '<div><dt class="lab">Developers</dt><dd>Libraries, examples and an ActiveX component for CNC CMM applications</dd></div>'+
  '</dl><p>Some combinations of products and software need the CMM I++ Server. Our support team will always confirm compatibility first.</p></aside></div>'}
function soft(){return '<div class="dvsw">'+
  '<div class="dvq" data-r><span class="lab kick">New in 2026 · PolyWorks|Inspector™</span>'+
   '<p class="dvqn">Native CNC integration: direct touch-probe control of Deva CMM controllers inside the PolyWorks® metrology process, with tactile and laser scanning support planned.</p>'+
   '<blockquote><p>“Our customers have been asking for this capability, and we’re excited to deliver it.”</p><div class="dvqa"><span class="nm">Ruth Pickworth</span><span class="lab">Managing Director</span></div></blockquote></div>'+
  '<div class="dvpk"><span class="lab kick" data-r>Compatible CMM software</span><ul>'+SOFT.map(function(n){return '<li data-r>'+esc(n)+'</li>'}).join("")+'</ul>'+
  '<p class="dvnt" data-r>Levels of support vary with the combination of products and software. Please check with <a class="ul" href="mailto:'+SUPPORT+'">'+SUPPORT+'</a> to confirm compatibility.</p></div></div>'}
/* support (deva.co.uk > Support) */
function support(){var S=[
  ["Email","Technical support","The Deva support team are on hand to offer technical advice on the installation and running of every Deva product.","mailto:"+SUPPORT,SUPPORT],
  ["Guide","CMM controller quick installation guide","Step by step, from the box to a running CMM controller.",CP+"support/cmm-controller-quick-installation-guide","Read the guide"],
  ["Video","Support videos","Short videos for setting up and running Deva hardware.",CP+"support?type=video","Watch"],
  ["Files","Support downloads","Drivers, software releases, manuals and compatibility charts for CMM software, probe systems and laser calibration systems.",CP+"support-downloads","Download"]];
  return '<ul class="svl dvsl">'+S.map(function(s){var ext=s[3].indexOf("mailto:")?' target="_blank" rel="noopener"':'';
    return '<li data-r><span class="lab ix">'+s[0]+'</span><h3>'+esc(s[1])+'</h3><p>'+esc(s[2])+' <a class="ul dvgo" href="'+s[3]+'"'+ext+'>'+esc(s[4])+'</a></p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>CMM controllers and motion control<span class="nomob"> · Birkenhead, England</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Control for</span> <span class="l nw">the machines</span> <span class="l"><em class="nw">that measure.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Deva Electronic Controls designs and manufactures PC-based motion control and position measurement products in the UK: CMM controllers and retrofit hardware, encoder interfaces, vision and signal conversion, for OEMs and end-users worldwide.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/software">CMM software compatibility</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Designed and manufactured in the UK</span>'+
   '<h2 class="txt" id="mani"><span class="nw">High-performance motion control</span> <span class="nw">and position measurement,</span> <span class="nw">for OEMs and end-users</span> <span class="nw">in a variety of fields,</span> <em><span class="nw">backed by a dedicated</span> <span class="nw tail">engineering team.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1985</span><p class="k">incorporated in England; designing and making electronics in Birkenhead, on the Wirral</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">16</span><p class="k">axes from up to four Deva motion controllers, configured automatically in one PC</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20</span><p class="k">CMM software packages named as compatible, from Aberlink 3D to Verisurf</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside a CMM retrofit</span><h2 class="d3"><span class="nw">How a point</span> <em class="nw">gets measured.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Move</span><span>Count</span><span>Touch</span><span>Report</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">The controller</span> <span class="nw">moves the axes.</span></h2><p>A Deva PCI Express servo motion controller drives the bridge, the carriage and the ram under PC control, with synchronisation and triggering built in.</p></article>'+
     '<article class="step"><h2><span class="nw">Every scale,</span> <span class="nw">counted.</span></h2><p>Encoder interfaces read the linear scale on each axis for position, velocity and acceleration; interpolators turn 11 µA or 1 Vpp sine signals into clean RS422 quadrature.</p></article>'+
     '<article class="step"><h2><span class="nw">One touch,</span> <span class="nw">one point.</span></h2><p>The stylus meets the part, the probe triggers, and the position on every axis is captured at that instant.</p></article>'+
     '<article class="step"><h2><span class="nw">Into the software</span> <span class="nw">you already run.</span></h2><p>Point after point passes to your CMM software, natively as in PolyWorks|Inspector™ or through the CMM I++ Server, and the part takes shape.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">From the controller</span> <em class="nw">to the encoder.</em></h2></div><p data-r>Six product families for OEMs, retrofitters and end-users of coordinate measuring machines, CNC and PC-based measurement systems, designed and manufactured in the UK.</p></div>'+
   types()+
  '</div></section>'+

  '<section class="sec light" id="software" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Software</span><h2 class="d2 split"><span class="nw">Works with the software</span> <em class="nw">you already run.</em></h2></div><p data-r>End users and retrofitters can depend on an extensive range of third-party CMM software, compatible with all our solutions.</p></div>'+
   soft()+
  '</div></section>'+

  '<section class="sec dark" id="support" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Support</span><h2 class="d2 split"><span class="nw">World-class support,</span> <em class="nw">on hand.</em></h2></div><p data-r>Quick, effective answers on installation, set-up and compatibility, from the engineers who design Deva’s hardware.</p></div>'+
   support()+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">A long-established</span> <em class="nw">UK manufacturer.</em></h2></div><p data-r>One of the UK’s leading independent electronic design companies, turning an initial design concept into a reality with state-of-the-art design tools.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Leadership</span><ul>'+
     '<li data-r><span class="nm">Ruth Pickworth</span><span class="lab rl">Managing Director</span></li>'+
     '<li data-r><span class="nm">Dr Simon Moruzzi</span><span class="lab rl">Director</span></li>'+
    '</ul></div>'+
    '<div class="engpol"><span class="lab kick" data-r>What our customers get</span><ul class="sct">'+
     ["Precision","Quality","Reliability","Strong support","PC-based, real-time control","Designed and made in the UK"].map(function(h){return '<li data-r>'+esc(h)+'</li>'}).join("")+
    '</ul></div></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">New releases,</span> <em class="nw">new integrations.</em></h2></div><p data-r>Our latest software, partnerships and shows. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Choosing the</span> <em class="nw">right product?</em></h2>'+
   '<p class="sub" data-r>Tell us about your machine, your software and your probe, and our team will recommend the controller, interface or retrofit kit that fits.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email sales '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Deva Electronic Controls Ltd</span><br><span>52 Woodside Business Park</span><br><span>Birkenhead CH41 1EL</span><br><span>United Kingdom</span></p></div>'+
    '<div><span class="lab" data-r>Sales</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Telephone '+TELT+'</span></p></div>'+
    '<div><span class="lab" data-r>Technical support</span><p data-r><a class="ul" href="mailto:'+SUPPORT+'">'+SUPPORT+'</a><br><span>Fax +44 (0)151 647 4511</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Deva Electronic Controls Ltd, 52 Woodside Business Park, Birkenhead CH41 1EL, United Kingdom</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+SUPPORT+'">'+SUPPORT+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/software">Software</a><br><a class="ul" href="#/support">Support</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Designed and made in the UK</span>CMM controllers and retrofit hardware, motion control, encoder interfaces, optical and signal conversion</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Barlow\',Arial,sans-serif;font-weight:500;font-size:44px;letter-spacing:.1em">DEVA ELECTRONIC CONTROLS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Deva Electronic Controls Ltd · Registered in England No. 01876378</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",products:"products",software:"software",support:"support",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Deva Electronic Controls — CMM Controllers, Motion Control and Encoder Interfaces, Birkenhead",x:"Home"};
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
