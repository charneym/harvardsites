/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function dq(A,cls){
  return '<dl class="drq'+(cls?' '+cls:'')+'">'+A.map(function(q){return '<div data-r><dt class="lab">'+esc(q[0])+'</dt><dd>'+(q.length>2?'<b>'+esc(q[1])+'</b>':'')+'<span>'+esc(q[q.length-1])+'</span></dd></div>'}).join("")+'</dl>'}
function sec(){return '<ul class="pfr pipe np pl2">'+SEC.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><p>'+esc(c[1])+'</p></li>'}).join("")+'</ul>'}
function quotes(){
  return '<ul class="aq">'+QUOTES.map(function(q){return '<li data-r><blockquote>“'+esc(q[0])+'”</blockquote><p><b>'+esc(q[1])+'</b><span>'+esc(q[2])+'</span></p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1713" height="1219" alt="A model pump machined from ABS and painted blue by Eurospray" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Sub-contract paint finishing<span class="nomob"> · Glenrothes, Fife</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Total component</span></span> <span class="l"><span class="nw">finishing,</span> <span class="nw">since 1998.</span></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>One of the UK’s largest sub-contract paint finishers: wet painting in 15 purpose-built booths, two powder coating lines, refurbishment, and screen and pad printing, for OEMs in rail, defence, aerospace, electronics, automotive and medical.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/contact">Send an enquiry '+ARR+'</a><a class="btn" href="#/solutions">Our solutions</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Quality finishing at competitive prices</span>'+
   '<h2 class="txt" id="mani"><span class="nwp">The most appropriate,</span> <span class="nwp">cost-effective finish</span> <span class="nwp">on every product,</span> <span class="nwp">and long-lasting</span> <span class="nwp">relationships</span> <span class="nwp">with our customers.</span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">15</span><p class="k">wet paint booths, two of them back-to-back online-to-oven</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30,000 sq ft</span><p class="k">across two sites on the Southfield Industrial Estate, Glenrothes</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">70+</span><p class="k">employees, including more than 20 experienced wet painters</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">On the online-to-oven line</span><h2 class="d3"><span class="nw">Painted, cured,</span> <span class="nw">inspected, packed.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Prepare</span><span>Paint</span><span>Cure</span><span>Inspect</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Prepared</span> <span class="nw">before painting.</span></h2><p>Parts are wash cleaned, chemically stripped or shot blasted before painting, so the finish keys to a clean surface.</p></article>'+
     '<article class="step"><h2><span class="nw">Painted</span> <span class="nw">by hand.</span></h2><p>Fifteen purpose-built booths and more than 20 experienced wet painters, for cosmetic and protective finishes.</p></article>'+
     '<article class="step"><h2><span class="nw">Cured</span> <span class="nw">online.</span></h2><p>Two of the booths are back-to-back online-to-oven, so components are painted and cured in large volumes.</p></article>'+
     '<article class="step"><h2><span class="nw">Checked,</span> <span class="nw">every item.</span></h2><p>Every item that goes through the process gets a rigorous manual inspection before it is packed.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="solutions" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Solutions</span><h2 class="d2 split"><span class="nw">Four ways we</span> <em class="nw">finish a component.</em></h2></div><p data-r>Alongside painting, we offer chemical stripping, shot blasting, and pad printing and silk screening in our purpose-built print room.</p></div>'+
   dq(SOL,"dq4")+
  '</div></section>'+

  '<section class="sec dark2" id="space" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Space coatings</span><h2 class="d2 split"><span class="nw">The approved UK applicator</span> <em class="nw">for MAP Space Coatings.</em></h2></div><p data-r>Eurospray has coated satellite components for a number of years. In 2025 the French specialist MAP Space Coatings certified Eurospray as the first official application partner for its high-performance coatings for satellites and launchers.</p></div>'+
   dq([["Coatings","MAP’s white and black coatings","For thermal or conductive applications, applied throughout the British Isles."],["Track record","The James Webb Space Telescope","Parts of its Mid-Infrared Instrument (the Spectrometer Pre-Optics) were painted in Glenrothes with a space coating, working with the Royal Observatory Edinburgh."]])+
  '</div></section>'+

  '<section class="sec light" id="sectors" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Sectors</span><h2 class="d2 split"><span class="nw">Finishes for rail, defence,</span> <em class="nw">automotive and more.</em></h2></div><p data-r>Working in partnership with clients including Aston Martin, Jaguar, Ford, BAE Systems and Honeywell, we often develop finishes our customers had not considered.</p></div>'+
   sec()+
  '</div></section>'+

  '<section class="sec dark" id="quality" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality</span><h2 class="d2 split"><span class="nw">Finished and</span> <em class="nw">checked by hand.</em></h2></div><p data-r>Eurospray was the first paint company to gain ISO 9001:2015 for powder coatings and wet spray painted finishes, and its processes have been verified and approved by the Ministry of Defence.</p></div>'+
   quotes()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Latest</span> <em class="nw">from Eurospray.</em></h2></div><p data-r>Each entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Talk to us about</span> <em class="nw">your components.</em></h2>'+
   '<p class="sub" data-r>For a quote, samples or more about our quality processes, email or call the team in Glenrothes.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Eurospray '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Head office</span><p data-r>Eurospray Limited, 2 Crompton Road<br>Southfield Industrial Estate<br><span>Glenrothes, Fife KY6 2SF</span></p></div>'+
    '<div><span class="lab" data-r>Second site</span><p data-r>30 Rutherford Road<br>Southfield Industrial Estate<br><span>Glenrothes, Fife KY6 2RT</span></p></div>'+
    '<div><span class="lab" data-r>Enquiries</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><span>Company no. SC181149</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Head office</span>2 Crompton Road, Southfield Industrial Estate<br>Glenrothes, Fife KY6 2SF</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/solutions">Solutions</a><br><a class="ul" href="#/space">Space coatings</a><br><a class="ul" href="#/sectors">Sectors</a><br><a class="ul" href="#/quality">Quality</a></div>'+
   '<div class="c"><span class="lab">Approvals</span>ISO 9001:2015 (UKAS)<br>Processes approved by the Ministry of Defence</div>'+
  '</div><svg class="bigsvg flogo" viewBox="0 0 1000 70" aria-hidden="true"><text x="500" y="56" text-anchor="middle" style="letter-spacing:.16em">EUROSPRAY · GLENROTHES</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Eurospray Limited</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",solutions:"solutions",space:"space",sectors:"sectors",quality:"quality",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Eurospray — sub-contract paint finishing, Glenrothes, Fife",x:"Home"};
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
