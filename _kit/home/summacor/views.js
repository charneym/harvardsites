/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab lk">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Pulsatile, positive displacement","A linear element moves blood in strokes at 150–325 cycles per minute, delivering 3.5–7.0 litres per minute, rather than spinning a rotor at thousands of RPM. The risk of hemolysis is low.",'<path d="M4 28h9l4-12 6 26 6-30 6 24 4-8h13"/><path class="a" d="M40 44h10M46 40l4 4-4 4"/>'],
  ["Precision ECG gating","Each power stroke is timed to the patient’s own ECG, so support pulses in step with the heart instead of running as continuous flow.",'<path d="M4 34h10l3-6 3 6h4l3-22 4 34 3-12h5l3-4 3 4h10"/><circle class="f" cx="31" cy="12" r="2.6"/>'],
  ["No aortic valve crossing","The pump sits in the descending aorta, above the renal arteries, and never crosses the aortic valve. It can be deployed or reconstrained in under two minutes.",'<path d="M22 4v20c0 6-12 6-12 16v12M34 4v20c0 6 12 6 12 16v12"/><path class="a" d="M28 30v18M24 44l4 4 4-4"/><path d="M18 18c4 3 16 3 20 0"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function outcomes(){var O=[["Reduced","Afterload · LVEDP · LVESP · CVP"],["Improved","LV function · Ejection fraction"],["Increased","Organ perfusion · Cardiac output"],["No reduction","Carotid blood flow velocity"]];
  return '<div class="ev light-ev"><span class="lab kick" data-r>In-vivo outcomes</span><div><dl>'+O.map(function(o){return '<div><dt class="lab" data-r>'+esc(o[0])+'</dt><dd data-r>'+esc(o[1])+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>In-vivo data, including pressure–volume loops during LCAPP support, show how the pump unloads the heart. The LCAPP is in development and has not been evaluated by the FDA or any other regulatory agency.</p></div></div>'}
var CMPH=["LCAPP","Transvalvular LV rotary pump","Cardio-renal rotary pumps","Balloon pump"];
function compare(){var R=[["Pump speed","150–325 CPM","33–45K RPM","8–20K RPM","40–180 CPM"],["Pump output","3.5–7.0 LPM","2.5–3.5 LPM","3.0–6.0 LPM","0.5–1.5 LPM"],["Pulsatile positive displacement","Yes","No","No","Yes"],["Precision ECG gating","Yes","No","No","Yes"],["Risk of hemolysis","Low","High","High","Low"],["Time of implant / explant","~1–2 min","~22 min","~10–30 min","~15 min"],["Crosses the aortic valve","No","Yes","No","No"],["Cardio-renal application","Yes","No","Yes","Yes"]];
  return '<div class="cmp"><span class="lab kick" data-r>How the LCAPP compares</span><div class="cmp-w" data-r><table><thead><tr><th></th><th class="me">LCAPP</th><th>Transvalvular LV rotary pump</th><th>Cardio-renal rotary pumps</th><th>Balloon pump</th></tr></thead><tbody>'+
   R.map(function(r){return '<tr><th>'+esc(r[0])+'</th>'+r.slice(1).map(function(v,i){return '<td data-l="'+CMPH[i]+'"'+(i?'':' class="me"')+'>'+esc(v)+'</td>'}).join("")+'</tr>'}).join("")+'</tbody></table></div></div>'}
function ipList(){return '<div class="ev"><span class="lab kick" data-r>Intellectual property</span><div><dl>'+IP.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+' · '+esc(e[2])+'</dt><dd data-r>'+esc(e[1])+'<span class="st">'+esc(e[3])+'</span></dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Further applications published in the United States, with corresponding foreign applications filed in Australia, Canada, Europe and Japan: “a picket fence around the linear cardiac assist space.”</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Pulsatile cardiac support<span class="nomob"> · Medical devices</span> · San Diego</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The new pulse</span><span class="l">in cardiac</span><span class="l"><em>support.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>SummaCor is developing the LCAPP, a Linear Cardiac Assist Pulsatile Pump. Placed through the femoral artery into the descending aorta, it pulses in time with the heart and unloads it without crossing the aortic valve, allowing time for cardiac recovery.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/indications">Indications</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why a pulse</span>'+
   '<h2 class="txt" id="mani">Today’s heart pumps spin rotors at thousands of revolutions a minute, and some must cross the aortic valve. The LCAPP is a positive-displacement pump that <em>beats with the heart,</em> to revolutionise cardiac support.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;2<small>min</small></span><p class="k">To deploy or reconstrain the LCAPP</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">7.0<small>LPM</small></span><p class="k">Peak pump output, from 3.5 litres per minute</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">8</span><p class="k">Patents issued or published, with filings in Australia, Canada, Europe and Japan</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the LCAPP works</span><h2 class="d3">A second pulse, <em>in the aorta.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Deploy</span><span>Fill</span><span>Power stroke</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>In through the femoral artery.</h2><p>The LCAPP is inserted percutaneously and its nitinol frame opens in the descending aorta, above the renal arteries, anchored on its drive shaft. Deployment or reconstraint takes under two minutes.</p></article>'+
     '<article class="step"><h2>The element draws back.</h2><p>Inside the flow chamber a linear element travels up the centre core wire, letting blood fill the chamber below it, gated to the patient’s ECG.</p></article>'+
     '<article class="step"><h2>The power stroke.</h2><p>The element drives down, pushing blood toward the kidneys and the lower body. In vivo this reduced afterload and LV pressures, and increased cardiac output and organ perfusion.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A pump that <em>pulses.</em></h2></div><p data-r>The LCAPP is a truly pulsatile, percutaneous pump. Its nitinol frame holds a flow chamber in the descending aorta, where a linear element strokes in step with the heartbeat, reducing the load on the left ventricle.</p></div>'+
   caps()+
   outcomes()+
   compare()+
  '</div></section>'+

  '<section class="sec dark2" id="indications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Indications</span><h2 class="d2 split">Time for the heart <em>to recover.</em></h2></div><p data-r>The potential clinical indications for the LCAPP, from the cath lab to heart failure with cardio-renal syndrome.</p></div>'+
   pipeRows(PIPE)+
   ipList()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Cardiologists, engineers <em>and inventors.</em></h2></div><p data-r>A leadership team that has built and sold a cardiac device company before, advised by heart failure and interventional leaders at Duke, Stanford, UCSD and UC Irvine.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Milestones <em>and meetings.</em></h2></div><p data-r>Accelerators, publications and conference presentations, from TCT and CSI Frankfurt to the MedTech Innovator 2025 cohort.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, clinicians and partners</span>'+
   '<h2 class="big split">Talk to <em>SummaCor.</em></h2>'+
   '<p class="sub" data-r>Whether you have an enquiry or need further details on the LCAPP, we would love to hear from you, and we will get back to you promptly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+CONTACT+'" target="_blank" rel="noopener">Contact us '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>SummaCor, Inc.<br>San Diego, California</p></div>'+
    '<div><span class="lab" data-r>Enquiries</span><p data-r><a class="ul" href="'+CONTACT+'" target="_blank" rel="noopener">Contact form</a></p></div>'+
    '<div><span class="lab" data-r>Programme</span><p data-r>MedTech Innovator<br>2025 cohort</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>San Diego, California</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+CONTACT+'" target="_blank" rel="noopener">Contact form</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/indications">Indications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Device</span>LCAPP · Linear Cardiac Assist Pulsatile Pump</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="76" text-anchor="middle" style="font-family:\'Fira Sans\',Arial,sans-serif;font-weight:300;font-size:84px;letter-spacing:.01em">SummaCor</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 SummaCor, Inc.</span><span class="lab">Not evaluated by the FDA</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story",indications:"indications",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"SummaCor — the new pulse in cardiac support",x:"Home"};
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
