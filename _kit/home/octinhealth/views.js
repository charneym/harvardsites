/* ================= VIEWS (home only: Technology / Elika Device / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(L){return '<ul class="pfr">'+L.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'+
  '<div class="adv"><span class="lab kick">Board and advisors</span><p>'+BOARD.map(function(b){return '<span>'+esc(b[0])+' <i>'+esc(b[1])+'</i></span>'}).join("")+'</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Cardiovascular medical devices<span class="nomob"> · Edina, Minnesota</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Aortic arch surgery,</span><span class="l"><em>without stopping</em></span><span class="l"><em>the circulation.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Octin Health is developing the Elika Device, designed to keep blood flowing to the brain and lower body while a surgeon repairs the aortic arch. Founded by a practicing cardiovascular surgeon.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How Elika works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>The thoracic aorta: the ascending aorta, the arch and its three branches, and the descending aorta. A rendering.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Surgeon driven. Outcome oriented.</span>'+
   '<h2 class="txt" id="mani">Since 1952, repairing the aortic arch has often meant cooling the body and stopping the circulation. Octin Health is building <em>the tool surgeons need to operate without it.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">9%</span><p class="k">Operative mortality of aortic surgery in national data</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">80%</span><p class="k">Out-of-hospital mortality of an aortic dissection</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">18°C</span><p class="k">The body temperature of deep hypothermic circulatory arrest</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>The clinical need</span><p data-r>Guidelines recommend a preventive operation once the aorta reaches 5 cm, yet the risk of surgery makes many patients hesitate and surgeons cautious.</p></div>'+
    '<div><span class="lab kick" data-r>Continuous perfusion</span><p data-r>Elika is designed to maintain blood flow to the brain and the lower body, so the arch can be isolated without circulatory arrest.</p></div>'+
    '<div><span class="lab kick" data-r>For more hospitals</span><p data-r>The goal is to make elective arch operations safer and more feasible in hospitals with fewer resources, and to reduce emergency cases.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Keep the blood flowing, <em>keep the field clear.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Today</span><span>Elika</span><span>The repair</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Cooled, then stopped.</h2><p>To repair the arch without blood in the field, surgeons today cool the body to about 18°C and halt the circulation for 20 to 90 minutes: deep hypothermic circulatory arrest, with no meaningful advance since 1952.</p></article>'+
     '<article class="step"><h2>Flow that never stops.</h2><p>Elika is a specialised cardiopulmonary bypass cannula. Working with the bypass machine, it is designed to keep blood flowing to the brain and to the lower body at the same time.</p></article>'+
     '<article class="step"><h2>A bloodless arch.</h2><p>With flow and occlusion together, the arch can be isolated as a bloodless surgical field, with the potential for shorter procedures, fewer complications and faster recovery.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="device" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The Elika Device</span><h2 class="d2 split">From prototype <em>to practice.</em></h2></div><p data-r>The only solution designed specifically to let surgeons perform the necessary operation without the physiological price of deep hypothermic circulatory arrest. Elika is entering formal development and is not yet FDA cleared.</p></div>'+
   rows(PROG)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded in <em>the operating room.</em></h2></div><p data-r>A practicing cardiovascular surgeon leads Octin Health, with a team that has taken cardiovascular devices from concept through clearance, commercialisation and acquisition.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">The latest <em>from Octin Health.</em></h2></div><p data-r>Awards, accelerators and partnerships on the way to making aortic arch surgery safer.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, hospitals, investors and partners</span>'+
   '<h2 class="big split">Let’s make arch surgery <em>safer.</em></h2>'+
   '<p class="sub" data-r>Interested in Elika, our clinical studies or working with Octin Health? Write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/technology">How Elika works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span>Edina, Minnesota</span><br><span>United States</span></p></div>'+
    '<div><span class="lab" data-r>Status</span><p data-r><span>The Elika Device is in development and not FDA cleared.</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Edina,<br>Minnesota</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/device">Elika Device</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Recognition</span>2026 MN Cup Grand Prize<br>MedTech Innovator 2025<br>UCSF Rosenman RISE 2025</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Poppins\',system-ui,sans-serif;font-weight:500;font-size:62px;letter-spacing:.28em">OCTIN HEALTH</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Octin Health, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",device:"device",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Octin Health — safer aortic arch surgery, Edina, Minnesota",x:"Home"};
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
