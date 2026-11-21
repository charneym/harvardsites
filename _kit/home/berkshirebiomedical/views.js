/* ================= VIEWS (home only: Technology / Programs / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(L){return '<ul class="pfr">'+L.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){function g(lab,L){return '<div class="mh-group"><p class="mh-label">'+lab+'</p><ul class="mh-list">'+L.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span><span></span></div></li>'}).join("")+'</ul></div>'}
  return '<section class="mh">'+g("Board and leadership",TEAM.slice(0,5))+g("Advisors and team leaders",TEAM.slice(5))+'</section>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Secure medication delivery<span class="nomob"> · Dallas, Texas</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The right dose,</span><span class="l"><em>at the right time,</em></span><span class="l"><em>to the right person.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Berkshire Biomedical is developing COPA™, a hand-held dispenser that releases each prescribed dose of liquid medication only after it confirms the patient’s fingerprint and dentition, and reports every dose to the care team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How COPA works '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<p class="lab hcap" data-r>The COPA™ device, dose ready. COPA is under FDA review and not available for sale or commercial distribution.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Find a better way</span>'+
   '<h2 class="txt" id="mani">Half of all patients fail to take their medication as directed. COPA is designed to deliver <em>an accurate dose to the authenticated intended user, and to tell the care team.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">50%</span><p class="k">Of patients fail to take their medications as directed</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">125K+</span><p class="k">Untimely U.S. deaths a year linked to non-adherence</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Biometrics confirmed before every dose: fingerprint and dentition</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Dual biometrics</span><p data-r>A fingerprint scan and a dentition sensor confirm the Authenticated Intended User (AIU™) before any medication is released.</p></div>'+
    '<div><span class="lab kick" data-r>Remote monitoring</span><p data-r>Integrated cellular sends usage data in real time and lets physicians adjust doses; dosing itself never waits on a signal.</p></div>'+
    '<div><span class="lab kick" data-r>Pharmacy ready</span><p data-r>New and refill prescriptions follow NCPDP standards, and setup takes about a minute once the patient’s IDs are recorded.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">A dose released <em>only to its patient.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fill</span><span>Confirm</span><span>Report</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Filled at the pharmacy.</h2><p>The prescribed oral liquid goes into the device in a standard amber bottle under a security cap and smart cap, behind a window that keeps the drug label in view.</p></article>'+
     '<article class="step"><h2>Two biometrics, every dose.</h2><p>When a dose is due, COPA asks for the patient’s finger and then their bite. Only when both the fingerprint scanner and the dentition sensor match does it dispense an accurate, precise dose.</p></article>'+
     '<article class="step"><h2>The care team sees it.</h2><p>Each dose, and each missed dose, goes to a cloud-based, HIPAA-compliant database, with dashboards and alerts for physicians, pharmacists and caregivers.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="programs" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">From take-home methadone <em>to FDA review.</em></h2></div><p data-r>COPA’s first use is take-home methadone for opioid use disorder, developed with support from the National Institute on Drug Abuse and now before the FDA.</p></div>'+
   rows(PROG)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A personal experience, <em>a seasoned team.</em></h2></div><p data-r>Founded in Dallas in 2016 after Tommy Rouse’s difficult recovery from spinal surgery, Berkshire Biomedical is led by executives from medical devices, pharma and financial technology.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">The latest <em>on COPA.</em></h2></div><p data-r>Regulatory milestones, NIH awards and published research from Berkshire Biomedical.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Providers, partners and investors</span>'+
   '<h2 class="big split">Let’s find <em>a better way.</em></h2>'+
   '<p class="sub" data-r>Treatment programs, pharmacies and business development partners can write to us about COPA. Investors can reach the company directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/technology">How COPA works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r><span>5950 Berkshire Ln, Ste 375</span><br><span>Dallas, TX 75225</span></p></div>'+
    '<div><span class="lab" data-r>Business development</span><p data-r><a class="ul" href="mailto:'+BD+'">'+BD+'</a></p></div>'+
    '<div><span class="lab" data-r>Investors</span><p data-r><a class="ul" href="mailto:'+INV+'">'+INV+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>5950 Berkshire Ln, Ste 375<br>Dallas, TX 75225</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+BD+'">'+BD+'</a></div>'+
   '<div class="c"><span class="lab">COPA™</span>Under FDA review. Not available for sale or commercial distribution.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:\'Sorts Mill Goudy\',Georgia,serif;font-weight:400;font-size:66px;letter-spacing:.2em">BERKSHIRE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Berkshire Biomedical Corporation</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",programs:"programs",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Berkshire Biomedical — COPA™ secure medication delivery, Dallas, TX",x:"Home"};
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
