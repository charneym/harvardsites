/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function progRows(){return '<ul class="pfr mile">'+PROG.map(function(m){
  return '<li><span class="lab tg">'+esc(m[0])+'</span><h3>'+esc(m[1])+'</h3><p>'+esc(m[2])+'</p><a class="lab lk" href="'+m[4]+'" target="_blank" rel="noopener">'+esc(m[3])+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Worn for weeks, not minutes","A soft, patent-pending sleeve for the upper arm, with no adhesives or straps. It is designed to be worn for days, weeks or months, through showering and sleep, and it charges wirelessly while worn.",'<path d="M16 8c-3 14-3 26 0 40M40 8c3 14 3 26 0 40"/><path d="M15 18h26M14 26h28M14 34h28M15 42h26"/><path class="a" d="M24 16c3 3-3 5 0 8s-3 5 0 8 3 5 0 8"/><circle class="f" cx="31" cy="28" r="2.2"/><circle class="f" cx="37" cy="28" r="1.6"/>'],
  ["Connected, hospital to home","In hospital it uses long-range (LoRa) radio and a dedicated cellular link to the Senphonix cloud, independent of hospital networks. At home it switches automatically to Bluetooth through the patient’s phone.",'<path d="M8 46V22l12-8 12 8v24"/><path d="M15 46v-9h10v9"/><path class="a" d="M38 20a8 8 0 0 1 8 8M38 13a15 15 0 0 1 15 15"/><circle class="f" cx="38" cy="28" r="2"/>'],
  ["Secure, and led by clinicians","Vitals are served through a secure API on a HIPAA-compliant Microsoft Azure cloud, encrypted in transit and at rest. The EHR pulls readings when clinicians choose to review them; Senphonix sets no thresholds and pushes no alerts.",'<path d="M28 6l16 6v12c0 12-7 20-16 25-9-5-16-13-16-25V12z"/><path class="a" d="M17 29h6l3-7 4 13 3-6h7"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function pathBlock(){return '<div class="ev"><span class="lab kick" data-r>Path to market</span><div><dl>'+PATH.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>SleeveSense is an investigational device. It is not FDA-cleared or approved and is not available for sale. Clinical-grade accuracy is being validated in clinical testing.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>SleeveSense<span class="nomob"> · Continuous vital signs</span> · Minnesota and Arizona</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Continuous vitals,</span><span class="l"><em>without the manual work.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>SleeveSense is a soft sleeve worn on the upper arm that captures heart rate, respiration rate, skin temperature and movement automatically, for days, weeks or months, from the hospital bed to home.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/how">How it works</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">The nursing shortage appears to be permanent, and up to a fifth of a shift can go to taking vital signs by hand. Between those checks a patient’s condition can change unseen; after discharge, most patients are not monitored at all. SleeveSense is built to <em>give that time back to nurses.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">Vital signs captured continuously: heart rate, respiration rate, skin temperature and movement</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$850K+</span><p class="k">Non-dilutive research funding from the NSF, the NIH and Arizona’s WearTech programme</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">98%</span><p class="k">Of 402 practising nurses surveyed would support SleeveSense if it saves time on manual vitals (MarketWise Advising)</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How SleeveSense works</span><h2 class="d3">On the arm, <em>into the record.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Wear</span><span>Sense</span><span>Share</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Worn, not handled.</h2><p>A soft stretch-mesh sleeve sits on the upper arm, with no adhesives or straps. It stays on for days, weeks or months and charges wirelessly in place. Patients don’t operate anything.</p></article>'+
     '<article class="step"><h2>Four vitals, all the time.</h2><p>Heart rate, respiration rate, skin temperature and movement are captured continuously, not only at intermittent checks, so changes between rounds are no longer unseen.</p></article>'+
     '<article class="step"><h2>Into the record, on review.</h2><p>Readings reach a secure cloud by long-range radio and cellular in hospital, or through the patient’s phone at home. The EHR pulls them when clinicians choose to review.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">One platform, <em>bed to home.</em></h2></div><p data-r>SleeveSense pairs a comfortable, long-term wearable with a secure cloud platform. Its core technology is exclusively licensed from the University of Arizona, where the Gutruf Lab developed it.</p></div>'+
   caps()+
   '<div class="bk light-bk"><span class="lab kick" data-r>Built with</span><p class="cr" data-r><span>University of Arizona</span><span>National Science Foundation</span><span>NIH · NHLBI</span><span>Arizona Commerce Authority</span><span>WearTech Applied Research Center</span><span>Microsoft</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="platform" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Platform</span><h2 class="d2 split">Funded to reach <em>the clinic.</em></h2></div><p data-r>Two federal research awards in 2026, on top of state support, carry SleeveSense’s hardware and software toward clinical testing and an FDA submission.</p></div>'+
   progRows()+
   pathBlock()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built by people <em>who have built before.</em></h2></div><p data-r>The founding team was chosen from people who had accomplished great work together before: two co-founders from 3M, the University of Arizona lab behind the technology, and advisors from clinical practice and health systems.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards <em>and coverage.</em></h2></div><p data-r>Federal and state support for SleeveSense, as reported.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Health systems, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Senphonix.</em></h2>'+
   '<p class="sub" data-r>To ask about a SleeveSense pilot, the platform or working with us, write to the team in Minnesota and Arizona.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:+16129130607">612-913-0607</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Offices</span><p data-r>Senphonix, Inc.<br>North Oaks, Minnesota<br>and Arizona</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>SleeveSense</span><p data-r>Investigational device, not FDA-cleared or available for sale</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Offices</span>North Oaks, Minnesota<br>and Arizona</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+16129130607">612-913-0607</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/platform">Platform</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">SleeveSense</span>Investigational device · not FDA-cleared or available for sale</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="70" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:500;font-size:72px;letter-spacing:.26em">SENPHONIX</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Senphonix, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",how:"story",platform:"platform",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Senphonix — SleeveSense, continuous vital signs without the manual work",x:"Home"};
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
