/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["In the left ventricle","The PReduction pump sits in the left ventricle, held by an anchor and gated to the ECG. It runs during diastole to reduce left atrial pressure, and rises with the elevated pressures of exercise.",'<path d="M20 8v12M36 8v12"/><path d="M14 20h28l-4 30H18z"/><path class="a" d="M28 24v22M23 30l5-4 5 4M23 38l5-4 5 4"/>'],
  ["Below the clavicle","A subdermal unit below the left clavicle holds the rechargeable battery, motor, power and control. A torque cable, pressure sensors and an ECG sensor run to the pump through a lumen in the left subclavian vein.",'<rect x="12" y="20" width="32" height="18"/><path d="M8 12c8-4 32-4 40 0"/><path class="a" d="M44 29c6 0 8 6 8 14"/><circle class="f" cx="20" cy="29" r="2.4"/>'],
  ["Through the skin","Power and control cross the skin wirelessly, by a Transcutaneous Energy Transfer System (TETS), and the driveline wire itself is delivered by catheter.",'<path d="M6 28h44"/><path class="a" d="M16 18c4-5 20-5 24 0M20 12c3-3 13-3 16 0"/><rect x="16" y="34" width="24" height="10"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function awards(){var A=[
  ["2025","Tech Excellence Awards","Start Up Award, presented to CSO Dr Andrew Malone by the Irish Computer Society, Dublin"],
  ["2024","TCT Shark Tank","One of six finalists pitching for the $200,000 prize at TCT 2024, Washington DC"],
  ["2024","National Startup Awards","Gold, Medtech Startup category (silver in 2022 and 2023)"],
  ["2023","American Irish Medical Summit","AIMS Innovation Award"],
  ["2022","Disruptive Technologies Innovation Fund","€3.14M to a Pumpinheart-led consortium with Boston Scientific, Gentian Health and RCSI"]];
  return '<ul class="pfr awd">'+A.map(function(a){return '<li><span class="lab tg">'+a[0]+'</span><h3>'+esc(a[1])+'</h3><p>'+esc(a[2])+'</p><span></span></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>PReduction<span class="nomob"> · Diastolic heart pump</span> · Dublin, Ireland</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A diastolic pump</span><span class="l">for heart failure</span><span class="l"><em>with preserved EF.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Pumpinheart, a Royal College of Surgeons in Ireland (RCSI) spinout, is developing PReduction: an ECG-gated pump implanted in the left ventricle by catheter, to reduce left atrial pressure in advanced HFpEF.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/device">How PReduction works '+ARR+'</a><a class="btn" href="#/system">The system</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">PReduction aims to treat ambulatory patients with Stage C and D heart failure with preserved ejection fraction, and to <em>let them survive HFpEF and live active lives at home.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">€3.14M</span><p class="k">Disruptive Technologies Innovation Fund award to the Pumpinheart-led consortium</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">€500k</span><p class="k">Enterprise Ireland Commercialisation Fund grant to RCSI to develop PReduction (2019)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2018</span><p class="k">The year Dr Aamir Hameed invented the PReduction diastolic pump at RCSI</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The device · PReduction</span><h2 class="d3">Pumping in diastole, <em>not against it.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Deliver</span><span>Pump</span><span>Power</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Delivered in the cath lab.</h2><p>An interventional cardiologist implants PReduction by catheter, through femoral venous access. The anchor holds the pump in place in the heart, with no open surgery.</p></article>'+
     '<article class="step"><h2>Gated to the heartbeat.</h2><p>The pump reads the ECG and runs during diastole, when the heart fills, to reduce left atrial pressure, and it responds to the elevated pressures of exercise.</p></article>'+
     '<article class="step"><h2>Powered through the skin.</h2><p>A subdermal unit below the left clavicle holds the battery, motor and controls, connected by a torque cable through the left subclavian vein, and is charged wirelessly by TETS.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="system" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>System</span><h2 class="d2 split">One implant, <em>three parts.</em></h2></div><p data-r>The PReduction device (patent pending) is a transcatheter implantable pump with its own power and control, designed for a cath-lab procedure with a short post-operative recovery.</p></div>'+
   caps()+
   '<div class="ev lt"><span class="lab kick" data-r>Designed for</span><dl>'+
    '<div><dt class="lab" data-r>Heart failure clinicians</dt><dd data-r>A treatment for Stage C and D ambulatory HFpEF patients (NYHA classification).</dd></div>'+
    '<div><dt class="lab" data-r>Hospital management</dt><dd data-r>Cath-lab delivery and short recovery, aiming to reduce HFpEF hospitalisations and their cost.</dd></div>'+
   '</dl></div>'+
   '<p class="note-s tnote" data-r>PReduction is at the pre-clinical research phase. At least seven years of further research and clinical trials are required before it can be approved, certified and available.</p>'+
  '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Surgeons, physicists <em>and heart-failure leaders.</em></h2></div><p data-r>Founded at RCSI University of Medicine and Health Sciences in Dublin, Pumpinheart is advised by heart-failure, mechanical circulatory support and interventional cardiology leaders in Ireland and the United States.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Funders and partners</span><p class="cr" data-r><span>Enterprise Ireland</span><span>Government of Ireland DTIF</span><span>RCSI</span><span>Boston Scientific</span><span>Gentian Health</span><span>Health Wildcatters</span><span>European Society for Clinical Investigation</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards, pitches <em>and partners.</em></h2></div><p data-r>From the National Startup Awards to TCT Shark Tank and the Health Wildcatters accelerator in Dallas.</p></div>'+
   awards()+
   '<span class="lab sub-l pr" data-r>Latest</span>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Pumpinheart.</em></h2>'+
   '<p class="sub" data-r>Whether you treat patients with HFpEF, want to collaborate on the research, or invest in the next stage of PReduction, we would like to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+EMAIL+'">Email us '+ARR+'</a><a class="btn" href="https://www.linkedin.com/company/pumpinheart" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Registered office</span><p data-r>Pumpinheart Ltd<br>12 Prince Edward Terrace Lower<br>Blackrock, Co Dublin A94&nbsp;W3V1</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+EMAIL+'">'+EMAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+353868391435">+353 86 839 1435</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>12 Prince Edward Terrace Lower<br>Blackrock, Co Dublin, Ireland</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+EMAIL+'">Email us</a><br><a class="ul" href="https://www.linkedin.com/company/pumpinheart" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/device">The device</a><br><a class="ul" href="#/system">System</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">In development</span>PReduction diastolic heart pump · Pre-clinical, not available for clinical use</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="74" text-anchor="middle" style="font-family:\'Inter Tight\',Arial,sans-serif;font-weight:400;font-size:84px;letter-spacing:.02em">PUMPINHEART</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Pumpinheart Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",device:"story",system:"system",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Pumpinheart — PReduction, a diastolic heart pump for HFpEF",x:"Home"};
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
