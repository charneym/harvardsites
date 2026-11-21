/* ================= VIEWS (home only: Amma / Clinics / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(L){return '<ul class="pfr">'+L.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Leadership</p><ul class="mh-list">'+TEAM.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div></div>'}
function credit(lab,L){return '<div class="bk"><span class="lab kick" data-r>'+lab+'</span><p class="cr">'+L.map(function(n){return '<span>'+esc(n)+'</span>'}).join('')+'</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>FDA-cleared scalp cooling<span class="nomob"> · San Diego, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Chemo doesn’t</span><span class="l">have to mean</span><span class="l"><em>hair loss.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Amma™ cools the scalp before, during and after chemotherapy to help patients keep their hair, and their privacy. One cap stays on for the whole treatment, and the cooling unit is portable.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/amma">How Amma works '+ARR+'</a><a class="btn" href="#/contact">Bring Amma to your center</a></div></div>'+
   '<p class="lab hcap" data-r>A patient in the Amma Compression Cap and Cooling Wrap. Photograph: Cooler Heads.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Founded by a survivor</span>'+
   '<h2 class="txt" id="mani">Hair loss can announce to the world that someone is sick. Cooler Heads was founded to protect <em>the dignity and privacy of cancer patients.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$11M</span><p class="k">Oversubscribed Series A, July 2025, led by Mutual Capital Partners</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">22</span><p class="k">States with Amma accounts by February 2025, including Sharp HealthCare</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2026</span><p class="k">The year Category I CPT codes for mechanical scalp cooling took effect</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Not another cold cap</span><p data-r>Continuous, consistent cooling at a steady temperature. Once the cap and wrap are on, they stay on: no swapping caps, no dry ice.</p></div>'+
    '<div><span class="lab kick" data-r>Clinic-portable</span><p data-r>Patients can finish post-infusion cooling outside the infusion chair, which frees valuable chair time for the center.</p></div>'+
    '<div><span class="lab kick" data-r>Supported, start to finish</span><p data-r>Digital support, a dedicated care line, training tools for staff, no proprietary fluid, and a U.S.-based team.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How Amma works</span><h2 class="d3">Cold, steady, <em>and on the move.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fit</span><span>Cool</span><span>Move</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>One cap for the whole treatment.</h2><p>A Cooling Wrap sits on the scalp, a Neoprene Strap adds compression, and a Compression Cap holds everything in place. Cooling begins 30 minutes before chemotherapy, usually during premedication.</p></article>'+
     '<article class="step"><h2>A chilled solution, circulating.</h2><p>The Portable Cooling Unit circulates cold fluid through the wrap at a steady temperature. Cooling constricts blood vessels and puts follicles into a resting phase, so less chemotherapy reaches them.</p></article>'+
     '<article class="step"><h2>Keep cooling, out of the chair.</h2><p>Cooling continues for two to three hours after the infusion ends. Because the unit is portable, patients can post-cool elsewhere in the center and free the infusion chair.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="clinics" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>For clinics</span><h2 class="d2 split">Fits the infusion day. <em>Covered by more plans.</em></h2></div><p data-r>A compact unit that fits easily in any infusion room, staff training and a dedicated care line. And for the first time, a clear path to reimbursement for mechanical scalp cooling.</p></div>'+
   rows(ACC)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built by a patient, <em>run by device veterans.</em></h2></div><p data-r>Kate Dilligan started Cooler Heads after paying for manual cold caps through aggressive chemotherapy. Her team brings decades from Stryker, Hologic, Dexcom, Insulet and oncology nursing.</p></div>'+
   team()+
   credit("Board of directors",BOARD)+
   credit("Series A investors",INV)+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">More centers, <em>more coverage.</em></h2></div><p data-r>Health systems adding Amma, new coverage for scalp cooling, and the company’s funding.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Infusion centers, patients and press</span>'+
   '<h2 class="big split">Keep the hair. <em>Keep the privacy.</em></h2>'+
   '<p class="sub" data-r>Thinking about scalp cooling for your infusion center, or starting chemotherapy and wondering if Amma is right for you? Talk with the Cooler Heads team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/amma">How Amma works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span>San Diego,</span><br><span>California</span></p></div>'+
    '<div><span class="lab" data-r>Press</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>San Diego,<br>California</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/amma">Amma</a><br><a class="ul" href="#/clinics">Clinics</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Amma</span>Portable Scalp Cooling System<br>FDA-cleared<br>For adults 21 and over with solid tumors</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:\'Manrope\',system-ui,sans-serif;font-weight:500;font-size:62px;letter-spacing:.06em">COOLER HEADS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Cooler Heads Care, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",amma:"story",clinics:"clinics",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Cooler Heads — Amma, the FDA-cleared portable scalp cooling system",x:"Home"};
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
