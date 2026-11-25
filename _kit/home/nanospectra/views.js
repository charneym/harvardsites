/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[3])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["AuroShell® nanoshells","Each particle is a non-conducting silica core inside a thin gold shell. Tuning the two gives the shells their ‘optical tunability’: they are made to absorb near-infrared light.",'<circle cx="28" cy="28" r="19"/><circle class="a" cx="28" cy="28" r="15"/><path d="M28 9V28H47"/><circle class="f" cx="28" cy="28" r="2.6"/>'],
  ["Light becomes heat","Near-infrared light passes through tissue. Where AuroShells have gathered, they absorb it and convert it to heat, destroying the tumor and the blood vessels that feed it.",'<path d="M6 28H22"/><path d="M6 22H18M6 34H18"/><circle class="a" cx="34" cy="28" r="9"/><path d="M34 12v4M34 40v4M48 28h-4M44 18l-3 3M44 38l-3-3"/><circle class="f" cx="34" cy="28" r="3"/>'],
  ["Ultra-focal by design","Healthy tissue next to the tumor holds no particles, so it is spared. The aim: fewer side effects, future treatment options kept open and a faster return to normal life.",'<circle cx="28" cy="28" r="19"/><circle class="a" cx="30" cy="25" r="7"/><path d="M28 3v8M28 45v8M3 28h8M45 28h8"/><circle class="f" cx="30" cy="25" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Ultra-focal · Patient focused<span class="nomob"> · Houston, Texas</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Nanoshells for</span><span class="l">the first true</span><span class="l"><em>focal therapy.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Nanospectra Biosciences pioneers a patient-centric use of nanomedicine for selective thermal ablation. Its AuroLase® Therapy uses gold AuroShell® nanoshells that turn near-infrared light into heat, destroying tumor tissue while sparing the healthy tissue around it.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How AuroLase works '+ARR+'</a><a class="btn" href="#/clinical">The clinical path</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Delivering on the nanomedicine promise</span>'+
   '<h2 class="txt" id="mani">AuroLase is the first and only ultra-focal tissue ablation therapy, designed to maximize treatment efficacy while minimizing the side effects of surgery, radiation and <em>traditional focal therapies.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">13 of 15</span><p class="k">First prostate cancer patients treated with no detectable cancer in the ablation zone at one year</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">46</span><p class="k">Patients in the first-in-human pilot study, at three US clinical sites</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">60</span><p class="k">Patients enrolled in the pivotal study at nine US sites, completed in 2021</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How AuroLase works</span><h2 class="d3">Light, turned to heat, <em>only where it counts.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Infuse</span><span>Guide</span><span>Ablate</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Nanoshells find the tumor.</h2><p>AuroShell nanoshells are infused intravenously. They circulate in the bloodstream and accumulate in the tumor.</p></article>'+
     '<article class="step"><h2>Imaging guides the fiber.</h2><p>With MRI and ultrasound fusion imaging, the clinician locates the lesion and places a thin optical fiber probe into it, through the skin.</p></article>'+
     '<article class="step"><h2>Heat, only inside the lesion.</h2><p>Near-infrared light from an FDA-cleared laser passes through the fiber. The nanoshells convert it into heat, ablating the tumor and its blood supply while the healthy tissue around it is spared.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The first ultra-focal <em>nanoshell technology.</em></h2></div><p data-r>Nanospectra’s proprietary AuroLase Therapy uses ‘optical tunability’ in a new class of nanoparticles, called AuroShells. They convert light into heat and thermally destroy solid tumors without damaging adjacent healthy tissue.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical</span><h2 class="d2 split">From pilot study <em>to pivotal data.</em></h2></div><p data-r>AuroLase Therapy is being developed first for the focal ablation of prostate tissue, primarily for men with intermediate-risk localized prostate cancer.</p></div>'+
   pipeRows(CLIN)+
   '<div class="bk"><span class="lab kick" data-r>Backed by</span><p class="cr" data-r><span>Grants</span><span>Private equity</span><span>Corporate partnerships</span><span>Sirtex Medical, strategic investor (Series B-1, 2020)</span></p></div>'+
   '<p class="note-s disc" data-r>AuroLase Therapy is an investigational device and is not approved for sale or distribution. Trial information: <a class="ul" href="https://clinicaltrials.gov/study/NCT04240639" target="_blank" rel="noopener">ClinicalTrials.gov NCT04240639</a>.</p>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Born in Houston’s <em>nanophotonics labs.</em></h2></div><p data-r>Founded in 2002 on gold-nanoshell research from Rice University, Nanospectra works with urologists and radiologists at leading US centers to bring ultra-focal ablation to patients.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Milestones, <em>in the record.</em></h2></div><p data-r>Clearances, trial milestones, financing and peer-reviewed results, each linked to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>Nanospectra.</em></h2>'+
   '<p class="sub" data-r>To learn more about AuroLase Therapy, partnering or investment, or the clinical program, the team in Houston would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="tel:'+TEL+'">Call Nanospectra '+ARR+'</a><a class="btn" href="#/clinical">The clinical path</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Nanospectra Biosciences, Inc.<br>8285 El Rio St., Suite 150<br>Houston, Texas 77054</p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Clinical trial</span><p data-r><a class="ul" href="https://clinicaltrials.gov/study/NCT04240639" target="_blank" rel="noopener">NCT04240639</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>8285 El Rio St., Suite 150<br>Houston, Texas 77054</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Therapy</span>AuroLase® Therapy<br>AuroShell® nanoshells</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Sora\',Arial,sans-serif;font-weight:300;font-size:58px;letter-spacing:.12em">NANOSPECTRA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Nanospectra Biosciences, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",approach:"story",technology:"technology",clinical:"clinical",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Nanospectra Biosciences — AuroLase® Therapy, ultra-focal nanoshell ablation, Houston, Texas",x:"Home"};
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
