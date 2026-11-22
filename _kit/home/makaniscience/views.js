/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function mileRows(){return '<ul class="pfr mile">'+MILE.map(function(m){
  return '<li><span class="lab tg">'+esc(m[0])+'</span><h3>'+esc(m[1])+'</h3><p>'+esc(m[2])+'</p><a class="lab lk" href="'+m[4]+'" target="_blank" rel="noopener">'+esc(m[3])+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Accurate","Real-time monitoring of respiration rate, read directly from the movement of breathing. In published comparisons it showed a 96% correlation with spirometry, the gold standard.",'<path d="M4 30h8l4-10 6 20 6-26 6 22 4-6h14"/><path class="a" d="M4 46h48" stroke-dasharray="2 4"/>'],
  ["Wireless","Bluetooth connectivity removes the bulky wires around the patient and makes monitoring practical at home and in ambulatory settings, not only at the bedside.",'<rect x="18" y="20" width="20" height="26"/><path class="a" d="M20 13c5-5 11-5 16 0M15 8c8-8 18-8 26 0"/><circle class="f" cx="28" cy="33" r="2"/>'],
  ["Comfortable","A proprietary, postage-sized stretchable sensor in a soft design that is easy to wear, for patients of every age, including premature babies.",'<path d="M8 24h40v12H8z"/><path class="a" d="M18 24v12M38 24v12"/><path d="M22 30h12"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function sys(){var S=[["Wearable patch","A small, easy-to-apply wireless device: a stretchable sensor strip and its pod."],["Monitoring platform","An app and monitor that give clinicians real-time feedback."],["Cloud analytics","A secure platform for longitudinal data capture and decision support."]];
  return '<div class="ev ev-l"><span class="lab kick" data-r>The system</span><div><dl>'+S.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'</dd></div>'}).join("")+'</dl></div></div>'}
function need(){return '<div class="ev"><span class="lab kick" data-r>The silent crisis in the NICU</span><div><dl>'+NEED.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Figures as published by Makani Science, with sources, on its Market Opportunity page. The Makani Respiratory Monitor received FDA 510(k) clearance in April 2025.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Respiratory monitoring<span class="nomob"> · FDA cleared</span> · Irvine</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Improving lives,</span><span class="l"><em>one breath at a time.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>The Makani Respiratory Monitoring System tracks respiratory rate wirelessly and in real time, from a soft, stretchable sensor the size of a postage stamp, across a diverse patient population, from the NICU to wellness.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/clinical">Clinical evidence</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why breathing</span>'+
   '<h2 class="txt" id="mani">Respiratory rate is the earliest sign of trouble, yet it is a neglected vital sign, because current monitors are bulky, inconvenient, inaccurate or slow to respond. Makani Science is making it <em>easy to monitor, for everyone.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">4 min</span><p class="k">How long the brain lasts after breathing stops</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">96%</span><p class="k">Correlation with spirometry, the gold standard</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30–60 s</span><p class="k">Faster response than pulse oximetry</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Every breath, <em>read directly.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Wear</span><span>Stretch</span><span>Stream</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A patch the size of a stamp.</h2><p>The soft sensor strip and its small wireless pod apply to the chest or abdomen in moments. There are no cables and nothing bulky, so it suits adults and premature babies alike.</p></article>'+
     '<article class="step"><h2>It stretches as you breathe.</h2><p>With each breath the body expands and the stretchable sensor lengthens with it. The change is measured directly, so it tracks respiration itself rather than inferring it from oxygen or carbon dioxide.</p></article>'+
     '<article class="step"><h2>Streamed in real time.</h2><p>The pod sends the breathing waveform over Bluetooth to an app or monitor, where clinicians see the respiratory rate as it happens, ahead of the delayed response of other monitors.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Soft sensors, <em>accurate breathing.</em></h2></div><p data-r>The Makani Respiratory Monitoring System uses a proprietary, postage-sized, stretchable sensor for comfortable respiratory rate monitoring. It grew from more than ten years of research at the University of California, Irvine.</p></div>'+
   caps()+
   sys()+
  '</div></section>'+

  '<section class="sec dark2" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical</span><h2 class="d2 split">Cleared, tested, <em>and aimed at the NICU.</em></h2></div><p data-r>The monitor is FDA cleared and has been tested against capnography. Makani Science is now focused on newborns, where the lack of accurate respiratory information remains a critical barrier.</p></div>'+
   mileRows()+
   need()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Born from a <em>founder’s question.</em></h2></div><p data-r>Dr. Michelle Khine’s son was born with a collapsed lung, and with all the monitors on him, nothing tracked his breathing well enough to catch it. With co-founder Dr. Michael Chu, the Makani respiratory sensor was born.</p></div>'+
   team()+
   '<div class="bk light-bk"><span class="lab kick" data-r>Board of advisors</span><p class="cr" data-r>'+ADV.map(function(a){return '<span>'+esc(a)+'</span>'}).join("")+'</p></div>'+
   '<div class="bk light-bk"><span class="lab kick" data-r>Accelerators</span><p class="cr" data-r><span>Y Combinator</span><span>MedTech Innovator</span><span>UC Launch</span><span>CTIP</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Milestones <em>and coverage.</em></h2></div><p data-r>FDA clearance, an NIH grant for apnea of prematurity, and clinical results.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Makani Science.</em></h2>'+
   '<p class="sub" data-r>To learn more about the Makani Respiratory Monitoring System, clinical collaborations or investing, write to the team in Irvine.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:+19494275208">(949) 427-5208</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Makani Science<br>5270 California Avenue, Suite 300<br>Irvine, CA 92617</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Regulatory status</span><p data-r>FDA 510(k) cleared, April 2025</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>5270 California Avenue, Suite 300<br>Irvine, CA 92617</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19494275208">(949) 427-5208</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Makani Respiratory Monitor</span>FDA 510(k) cleared · wireless respiratory rate</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="74" text-anchor="middle" style="font-family:\'Open Sans\',Arial,sans-serif;font-weight:600;font-size:96px;letter-spacing:.06em">MAKANI</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Makani Science</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story",clinical:"clinical",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Makani Science — wireless respiratory monitoring",x:"Home"};
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
