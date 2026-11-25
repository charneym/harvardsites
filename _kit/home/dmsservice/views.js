/* ================= VIEWS (home only: myPatch®sl / Services / Electrodes / About open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function servs(){return '<ul class="pfr">'+SERV.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><div class="pn"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[2])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function elecs(){return '<ul class="pel">'+ELEC.map(function(e){
  return '<li><figure><img src="'+e[1]+'" alt="myPatch®sl recorder on the '+esc(e[0])+' electrode" width="400" height="400" loading="lazy" decoding="async"></figure><div class="et"><h3>'+esc(e[0])+'</h3><span class="lab ch">'+esc(e[2])+'</span></div><p>'+esc(e[3])+'</p><p class="elpt">'+esc(e[4])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Ambulatory ECG monitoring<span class="nomob"> · Los Angeles, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Holter monitoring</span> <span class="l"><em>patients forget</em></span> <span class="l"><em>they are wearing.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>The myPatch®sl is a waterproof, FDA-cleared patch Holter that records two channels of ECG for up to 14 days. Designed and made in the USA by DMS-Service, a woman-owned Holter specialist in Los Angeles.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/product">See how it works '+ARR+'</a><a class="btn" href="#/contact">Talk to sales</a></div></div>'+
   '<p class="lab hcap" data-r>The myPatch®sl recorder on its adult electrode. Product photograph: DMS-Service.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="overview" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">A Holter study is only as good as the patient’s willingness to wear it. myPatch®sl was designed around comfort, because <em>a comfortable patient is a compliant patient.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">14 days</span><p class="k">Of continuous two-channel ECG on one recorder, or three channels for up to 9 days</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">IP68</span><p class="k">Tested to 2 metres of water for one hour, so patients shower as normal</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1995</span><p class="k">The year DMS-Service began scanning Holter recordings for US physicians</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>FDA 510(k) cleared</span><p data-r>The myPatch®sl was cleared by the FDA in February 2017 under 510(k) K163535.</p></div>'+
    '<div><span class="lab kick" data-r>Made in the USA</span><p data-r>Designed and manufactured in the United States, with design patents on its electrodes at home and abroad.</p></div>'+
    '<div><span class="lab kick" data-r>Woman-owned</span><p data-r>Certified by WBENC as a Women’s Business Enterprise and a Woman-Owned Small Business.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3"><span class="nw">Snap, stick</span> <em class="nw">and go.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Apply</span><span>Wear</span><span>Report</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Up and running</span> <span class="nw">in 30 seconds.</span></h2><p>The recorder snaps into a disposable electrode that sticks to the chest. No lead wires, pouches or batteries to stock, and patients go back to normal activity right after application.</p></article>'+
     '<article class="step"><h2><span class="nw">Two weeks,</span> <span class="nw">shower included.</span></h2><p>Two channels of continuous ECG for up to 14 days, or three for up to 9. Rated IP68, it is dust-tight and waterproof, and a double tap on the recorder marks a symptom as it happens.</p></article>'+
     '<article class="step"><h2><span class="nw">Read it</span> <span class="nw">your way.</span></h2><p>Recordings open in most major Holter analysis systems, so practices can scan in-house, or send them to the DMS-Service scanning service for a colour-coded full-disclosure report.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="services" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split"><span class="nw">Scanning, monitoring</span> <em class="nw">and support.</em></h2></div><p data-r>Since 1995 DMS-Service has scanned Holter recordings for physicians across the United States, with cardiac event monitoring, recorder sales and repairs from one team in Los Angeles.</p></div>'+
   servs()+
   '<div class="bk"><span class="lab kick" data-r>Reports</span><p class="cr" data-r>'+REPORTS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="electrodes" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Electrodes</span><h2 class="d2 split">One recorder, <em class="nw">four electrodes.</em></h2></div><p data-r>One size does not fit all on a body-worn device. The myPatch®sl snaps into four patented electrode shapes, so the patch fits the patient it was prescribed for, from newborns to adults.</p></div>'+
   elecs()+
  '</div></section>'+

  '<section class="sec dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About</span><h2 class="d2 split">A Holter family <em class="nw">since 1973.</em></h2></div><p data-r>DMS-Service is led by its manager, Lynda Cole, who has worked with Holter recorders for more than fifty years.</p></div>'+
   '<div class="abt">'+
    '<div class="abt-l">'+
     '<p class="who top" data-r><b>Lynda Cole</b> · Manager, DMS-Service</p>'+
     '<p data-r>Lynda Cole started in the Holter industry in 1973 at her father’s company, Scole Engineering, which built recorders for Marquette Electronics, Burdick, Hittman, Advanced Med and Pacesetters.</p>'+
     '<p data-r>Frustrated that recorders were tied to a single analysis system, she and her team of programmers wrote the myPatch® utility software, which lets one recorder work with many Holter systems without altering the analysis software. It shipped with the original myPatch® and now with the myPatch®sl.</p>'+
     '<div class="firsts"><span class="lab kick" data-r>Scole Engineering firsts</span><ul>'+
      '<li data-r>The first Holter recorder to use a disposable 9V battery</li><li data-r>The first multi-day recorder</li><li data-r>The first 3-channel Holter recorder</li></ul></div>'+
    '</div>'+
    '<figure class="abt-q"><blockquote data-r>“Lynda has proven to be professional and a reliable resource for the last 35 years we have worked with her. She is always available to help us and always willing to train our new technicians and nurses.”</blockquote>'+
     '<figcaption data-r><b>Stephen R. Corday, MD, FACC</b><br>Cedars-Sinai Medical Towers, Los Angeles</figcaption></figure>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From FDA clearance <em class="nw">to MEDICA.</em></h2></div><p data-r>Cleared by the FDA in 2017, the myPatch®sl is now shown to cardiology buyers from around the world at MEDICA in Düsseldorf.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Physicians, practices and distributors</span>'+
   '<h2 class="big split"><span class="nw">Monitoring that is</span> <em class="nw">easy to wear.</em></h2>'+
   '<p class="sub" data-r>Talk to DMS-Service about the myPatch®sl, Holter scanning or cardiac event monitoring. We will set your practice up with recorders, electrodes and training.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Email sales '+ARR+'</a><a class="btn" href="'+TEL+'">Call (855) 40-PATCH</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>DMS-Service, LLC<br>11845 W. Olympic Blvd, Ste 880W<br>Los Angeles, CA 90064</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Sales and support</span><p data-r><a class="ul" href="'+MAIL+'">'+EMAIL+'</a><br><a class="ul" href="'+TEL+'">(855) 40-PATCH</a><br><a class="ul" href="'+TEL2+'">(540) 212-7000</a></p></div>'+
    '<div><span class="lab" data-r>Certified</span><p data-r>FDA 510(k) K163535<br>WBENC Women’s Business Enterprise</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>11845 W. Olympic Blvd, Ste 880W<br>Los Angeles, California 90064</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/product">Product</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/electrodes">Electrodes</a><br><a class="ul" href="#/about">About</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">'+EMAIL+'</a><br><a class="ul" href="'+TEL+'">(855) 40-PATCH</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Patch Holter recorders<br>and cardiac monitoring services</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Saira\',system-ui,sans-serif;font-weight:600;font-size:76px;letter-spacing:.01em">DMS-SERVICE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 DMS-Service, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={overview:"overview",product:"story",services:"services",electrodes:"electrodes",about:"about",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"DMS-Service — myPatch®sl waterproof Holter monitoring, Los Angeles",x:"Home"};
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
