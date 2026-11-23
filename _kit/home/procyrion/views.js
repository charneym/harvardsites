/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  var tag=c[7]?'<a href="'+CT+c[7]+'" target="_blank" rel="noopener">'+esc(c[6])+' '+ARR+'</a>':esc(c[6]);
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+tag+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'+
  '<div class="sabx"><p class="mh-label" data-r>Scientific advisory board</p><ul class="sabl">'+SAB.map(function(s){return '<li data-r><b>'+esc(s[0])+'</b><span>'+esc(s[1])+'</span></li>'}).join("")+'</ul></div>'}
function caps(){var C=[
  ["Designed to reduce cardiac workload","By boosting flow in the aorta and lowering pressure at the aortic root, Aortix could reduce the resistance the heart pumps against, letting it work better and more efficiently.",'<path d="M28 48C14 38 6 30 6 20a11 11 0 0 1 22-3 11 11 0 0 1 22 3c0 10-8 18-22 28z"/><path class="a" d="M14 26h8l3-6 4 12 3-6h8"/>'],
  ["Designed to increase renal perfusion","By raising pressure in the lower aorta, Aortix could improve blood flow to the kidneys and their function, increasing urine output to help decongest patients, including those who are diuretic resistant.",'<path d="M22 8c-9 0-14 9-14 20s5 20 14 20c6 0 8-5 6-10-2-4-2-6 0-10 2-5 0-20-6-20z"/><path class="a" d="M50 28H34M34 28l6-5M34 28l6 5"/>'],
  ["Deployed percutaneously in under ten minutes","A catheter-deployed pump placed in the descending thoracic aorta, Aortix is designed from the ground up for patients who are too sick for medication alone.",'<circle cx="28" cy="28" r="20"/><path d="M28 12v16l10 6"/><path class="a" d="M28 8a20 20 0 0 1 17.3 10"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+e[0]+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Caution: investigational device. Aortix is limited by federal law to investigational use and is not available for sale in any country.</p></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+NR+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">Press release '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Medical devices<span class="nomob"> · Houston, Texas</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Rest the heart.</span><span class="l"><em>Perfuse the kidneys.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Aortix is a catheter-deployed pump placed in the descending aorta, designed for heart failure patients who are too sick for medication alone. It is now in the DRAIN-HF pivotal trial.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How Aortix works '+ARR+'</a><a class="btn" href="#/clinical">Clinical trials</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Cardiorenal syndrome</span>'+
   '<h2 class="txt" id="mani">In heart failure, a weak heart starves the kidneys, and failing kidneys leave the body congested, which strains the heart further. <em>Aortix is designed to break that cycle from inside the aorta.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">6M+</span><p class="k">Adults in the United States living with heart failure</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~40%</span><p class="k">Of patients admitted with acute decompensated heart failure have cardiorenal syndrome</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;10 min</span><p class="k">To deploy Aortix percutaneously, by catheter</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Mechanism of action</span><h2 class="d3">Pumping by <em>entrainment.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Inlet</span><span>Jets</span><span>Entrain</span><span>Perfuse</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A share of the flow.</h2><p>Aortix sits in the descending thoracic aorta. A portion of the native blood flow enters the pump at its inlet.</p></article>'+
     '<article class="step"><h2>Out as fast jets.</h2><p>Inside the pump the flow is accelerated, and it leaves the device as high-velocity jets directed downstream.</p></article>'+
     '<article class="step"><h2>The jets entrain.</h2><p>The jets draw the surrounding native flow along with them, transferring momentum and energy to it. The result is a net increase in velocity and aortic flow.</p></article>'+
     '<article class="step"><h2>Heart rested, kidneys perfused.</h2><p>Pressure falls at the aortic root, so the heart pumps against less resistance, and rises in the lower aorta, increasing blood flow to the kidneys.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">One pump, <em>two organs.</em></h2></div><p data-r>Aortix is a percutaneous mechanical circulatory support (pMCS) device. It is designed to pump blood from the aortic arch to the lower aorta, unloading the heart and perfusing the kidneys at the same time, an effect observed in preclinical testing.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical trials</span><h2 class="d2 split">From pilot <em>to pivotal.</em></h2></div><p data-r>Aortix is under clinical evaluation for acute decompensated heart failure with diuretic resistance and for renal support in cardiac surgery and coronary interventions. Two studies have completed enrollment; the DRAIN-HF pivotal trial is enrolling.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built by heart failure <em>specialists.</em></h2></div><p data-r>Procyrion is a team of life science entrepreneurs, engineers, cardiologists and heart failure specialists, founded by a Texas Heart Institute cardiologist and advised by leading heart failure and nephrology physicians.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Procyrion.</em></h2></div><p data-r>Company press releases. Publications, awards and the full archive are on the news page.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Procyrion.</em></h2>'+
   '<p class="sub" data-r>We are based in Houston, Texas, and would be glad to hear from you, whether about the DRAIN-HF trial, partnership or careers.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/clinical">See the trials</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>3900 Essex Lane, Suite 850<br>Houston, TX 77027</p></div>'+
    '<div><span class="lab" data-r>General inquiries</span><p data-r><a class="ul" href="'+MAIL+'">info@procyrion.com</a></p></div>'+
    '<div><span class="lab" data-r>Clinical trial</span><p data-r><a class="ul" href="'+CT+'NCT05677100" target="_blank" rel="noopener">DRAIN-HF on ClinicalTrials.gov</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>3900 Essex Lane, Suite 850<br>Houston, TX 77027</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@procyrion.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/clinical">Clinical trials</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Investigational</span>Aortix is for investigational use only and is not for sale in any country.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Archivo\',sans-serif;font-weight:600;font-size:64px">PROCYRION</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Procyrion, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",story:"story",clinical:"clinical",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Procyrion — Aortix, circulatory support for heart and kidneys",x:"Home"};
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
