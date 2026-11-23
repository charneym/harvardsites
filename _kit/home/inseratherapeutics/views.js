/* ================= VIEWS (home only: Technology / System / Milestones / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(A,cls){return '<ul class="pfr'+(cls?' '+cls:'')+'">'+A.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p>'+(c[3]?'<a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Source</a>':'')+'</li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function lst(a){return a.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')}
var ICO={wave:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4 22h5l3-9 4 18 4-18 4 18 4-18 3 9h5"/></svg>',
 dial:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M7 28a14 14 0 1 1 26 0"/><path d="M20 26l7-9"/><circle cx="20" cy="26" r="2"/><path d="M6 33h28"/></svg>',
 vessel:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4 14c10-3 22-3 32 0"/><path d="M4 27c10 3 22 3 32 0"/><path d="M4 20.5h14"/><path d="M18 18.5v4"/><ellipse cx="26" cy="20.5" rx="5" ry="3.5"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Medical devices for thrombectomy<span class="nomob"> · Dallas, Texas</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Thrombectomy,</span><span class="l">with suction</span><span class="l"><em>that cycles.</em></span></h1>'+
   '<i class="hrule" aria-hidden="true" data-r></i>'+
   '<div class="hero-foot"><p class="s" data-r>The CLEAR™ Aspiration System varies vacuum pressure and intervals to draw in thrombus. FDA 510(k) cleared for the peripheral arteries and veins, and CE marked in Europe.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<p class="lab hcap" data-r>An aspiration catheter meeting a clot inside an artery, rendered.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">To be the most competitive and innovative provider of cures for neurovascular diseases, <em>using minimally invasive therapeutics.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Aspiration modes on one digital pump: cyclical, uniform and blood saver</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">−98.2<small>kPa</small></span><p class="k">Vacuum the system can deliver, uniform or cyclical (−29 inHg)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100</span><p class="k">Patents issued or allowed, from 108 filings on cyclical aspiration</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div class="p1"><span class="pic">'+ICO.wave+'</span><span class="lab kick" data-r>Cyclical, not static</span><p data-r>CLEAR varies suction pressure and intervals, aiming to take a clot in whole on the first pass instead of breaking it apart.</p></div>'+
    '<div class="p2"><span class="pic">'+ICO.dial+'</span><span class="lab kick" data-r>One digital platform</span><p data-r>A reusable aspiration pump with single-use catheter, tubing and canister; in Europe, an optional iPad app has run the pump and logged procedure times.</p></div>'+
    '<div class="p3"><span class="pic">'+ICO.vessel+'</span><span class="lab kick" data-r>Arteries and veins</span><p data-r>Cleared in the U.S. to remove fresh, soft emboli and thrombi from the peripheral arterial and venous systems.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Cyclical aspiration</span><h2 class="d3">From a blocked vessel <em>to flow.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Reach</span><span>Engage</span><span>Cycle</span><span>Flow</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Reach the clot.</h2><p>The INSERA™ aspiration catheter is advanced through the vessel until its tip meets the face of the thrombus.</p></article>'+
     '<article class="step"><h2>Engage it.</h2><p>The CLEAR™ pump draws a vacuum through the catheter, up to −98.2 kPa, and the clot is pulled against the catheter mouth.</p></article>'+
     '<article class="step"><h2>Cycle the suction.</h2><p>In cyclical mode the pump varies pressure and intervals, so the clot is drawn into the catheter whole rather than fragmented.</p></article>'+
     '<article class="step"><h2>Restore flow.</h2><p>With the thrombus in the canister, the vessel is open and blood flows again: the aim is to do it on the first pass.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Suction that varies, <em>by design.</em></h2></div><p data-r>Insera is an ISO 13485-certified medical device company focused on cyclical aspiration for mechanical thrombectomy, the removal of blood clots through a catheter.</p></div>'+
   rows(TECH)+
  '</div></section>'+

  '<section class="sec dark" id="system" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>System</span><h2 class="d2 split">The CLEAR™ <em>Aspiration System.</em></h2></div><p data-r>A patented digital aspiration platform for removing thrombus from the peripheral vasculature: one reusable pump and three single-use disposables.</p></div>'+
   rows(SYS)+
   '<div class="bk"><span class="lab kick" data-r>Leadership</span><p class="cr" data-r>'+lst(LEAD)+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="milestones" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Milestones</span><h2 class="d2 split">From Zagreb <em>to FDA clearance.</em></h2></div><p data-r>CE Mark in 2019, the first stroke and pulmonary embolism patients treated in Croatia the same year, and U.S. 510(k) clearance in 2026.</p></div>'+
   rows(MIL,'pgr')+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Cyclical aspiration, <em>in the news.</em></h2></div><p data-r>Clearance in the United States, approval in Europe and the first patients treated, as reported by Insera and the trade press.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec dark2 cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Physicians, hospitals and partners</span>'+
   '<h2 class="big split">Let’s clear <em>the way, together.</em></h2>'+
   '<p class="sub" data-r>Write to us about the CLEAR™ Aspiration System, clinical collaboration, distribution or partnering with Insera.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to Insera '+ARR+'</a><a class="btn" href="#/technology">See the technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Dallas, Texas<br>United States</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Regulatory</span><p data-r>FDA 510(k) K253404<br>CE Mark · ISO 13485</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Dallas, Texas<br>United States</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/system">System</a><br><a class="ul" href="#/milestones">Milestones</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Cyclical aspiration<br>for mechanical thrombectomy</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 82" aria-hidden="true"><text x="320" y="62" text-anchor="middle" style="font-family:\'Arimo\',system-ui,sans-serif;font-weight:700;font-size:82px;letter-spacing:0"><tspan fill="#f2f0e4">Insera</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Insera Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"technology",system:"system",milestones:"milestones",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Insera Therapeutics — the CLEAR Aspiration System, cyclical aspiration for thrombectomy",x:"Home"};
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
