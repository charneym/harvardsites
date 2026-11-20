/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function aimRows(){return '<ul class="pfr path">'+AIMS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span></span></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Pediatric ophthalmology<span class="nomob"> · San Francisco</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Every hour</span><span class="l">of patching,</span><span class="l"><em>measured.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>AmblyoGo is an occlusion dose monitor for children with amblyopia: a clip-on sensor for their glasses that records when the eye patch is really worn, for parents and clinicians.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Contact</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Patching is the gold-standard therapy for amblyopia, the most common cause of visual impairment in children, <b class="w0">yet children wear their patches only about 44% of the prescribed time.</b> <em>AmblyoGo measures what really happens.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2–4%</span><span class="k">Of children in the United States affected by amblyopia</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~44%</span><span class="k">Of the prescribed patching time that children actually wear, in objective studies</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.12M</span><span class="k">NIH National Eye Institute SBIR Phase II award, 2026</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">The patch, the sensor, <em>the record.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Patch</span><span>Sensor</span><span>Station</span><span>Record</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The patch.</h2><p>Patching the stronger eye makes the weaker one work. AmblyoGo starts with the patch itself: a small magnet is embedded in it.</p></article>'+
     '<article class="step"><h2>The sensor.</h2><p>A clip-on sensor worn on the child’s glasses carries dual magnetometers. When the patch is in place, they detect its magnet.</p></article>'+
     '<article class="step"><h2>The base station.</h2><p>The sensor sends its readings by Bluetooth to a base station, which passes them on to a secure cloud platform.</p></article>'+
     '<article class="step"><h2>The record.</h2><p>Parents and clinicians see objective wear time instead of estimates, with real-time monitoring and feedback through the course of treatment.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="programme" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programme</span><h2 class="d2 split">From pilot studies <em>to a commercial system.</em></h2></div><p data-r>In pilot studies, children and families found AmblyoGo highly acceptable, and the wear it recorded agreed closely with parents’ diaries. A Direct-to-Phase II project now takes it toward FDA clearance.</p></div>'+
   aimRows()+
   '<p class="ack" data-r>Research reported here is supported by the National Eye Institute of the National Institutes of Health under award 1R44EY039171. AmblyoGo is in development and is not cleared by the FDA.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Led from <em>San Francisco.</em></h2></div><p data-r>Edge Eye Labs is building AmblyoGo under FDA design controls, with clinicians and families in the loop.</p></div>'+
   '<div class="fdr"><span class="lab fl" data-r>Leadership</span><div class="fdr-b"><h3 class="fn" data-r>Omondi Luthuli Nyongo</h3><p class="fr" data-r>Chief Executive Officer</p><p class="fs" data-r>Contact principal investigator on the National Eye Institute SBIR Phase II award for AmblyoGo.</p></div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Funded by the <em>National Eye Institute.</em></h2></div><p data-r>The latest from Edge Eye Labs and AmblyoGo.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Let’s make every hour <em>of patching count.</em></h2>'+
   '<p class="sub" data-r>For clinical collaboration, partnership or investment in AmblyoGo, get in touch with the Edge Eye Labs team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+WEB+'" target="_blank" rel="noopener">Contact Edge Eye Labs '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Edge Eye Labs, Inc.<br>San Francisco, California</p></div>'+
    '<div><span class="lab" data-r>Product</span><p data-r>AmblyoGo occlusion dose monitor</p></div>'+
    '<div><span class="lab" data-r>Web</span><p data-r><a class="ul" href="'+WEB+'" target="_blank" rel="noopener">edgeeyelabs.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Edge Eye Labs, Inc.<br>San Francisco, California</div>'+
   '<div class="c"><span class="lab">Web</span><a class="ul" href="'+WEB+'" target="_blank" rel="noopener">edgeeyelabs.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programme">Programme</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Notice</span>AmblyoGo is in development and is not cleared by the FDA. Supported by the NIH National Eye Institute.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="48" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-weight:600;font-size:52px;letter-spacing:.14em">EDGE EYE LABS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Edge Eye Labs, Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",programme:"programme",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Edge Eye Labs — AmblyoGo, objective occlusion dose monitoring for children with amblyopia",x:"Home"};
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
