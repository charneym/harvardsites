/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Image-guided","A coherent imaging fibre bundle watches the photosensitizer (PpIX) bleach as light is delivered, a reading the team has shown correlates strongly with treatment outcome in early oral cancers.",'<circle cx="28" cy="28" r="18"/><circle class="a" cx="28" cy="28" r="8"/><path d="M28 4v8M28 44v8M4 28h8M44 28h8"/><circle class="f" cx="28" cy="28" r="2.6"/>'],
  ["Hands-free delivery","An intraoral light applicator found ergonomic and clinically effective, so the clinician no longer holds a fibre in place for half an hour.",'<path d="M6 44c8-2 14-8 18-16s10-14 18-16"/><path class="a" d="M42 12l8-4"/><circle class="f" cx="50" cy="8" r="2.6"/><path class="a" d="M44 18l6 3M40 8l2-6"/>'],
  ["Low cost","A standalone bench-top unit with a display and a 635 nm laser, designed for clinics in resource-limited settings in the US and around the world.",'<rect x="8" y="18" width="40" height="24"/><path class="a" d="M14 26h18M14 33h12"/><circle class="f" cx="40" cy="30" r="2.6"/><path d="M48 30h6"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Head and neck PDT, clinical summary</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Published multi-institutional clinical experience with PDT in head and neck cancer, as summarised on photodynamica.com (Research).</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Photodynamic therapy<span class="nomob"> · Oral cancer</span> · Waltham, MA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Light that treats</span><span class="l">oral <em>cancer.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Photodynamic Solutions is developing a low-cost, image-guided light delivery system for photodynamic therapy of oral cancer and oral potentially malignant lesions, built on decades of clinical PDT research.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How PDT works '+ARR+'</a><a class="btn" href="#/research">Our research</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Surgery and radiation, the standard of care for oral cancer, often compromise the oral muscles and salivary glands and can disfigure. Photodynamic therapy treats early oral lesions with a drug and light: no scarring, no tissue removal, no harmful <em>radiation.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">73%</span><span class="k">One-time complete cure rate in the founders\' 30-patient trial for early oral cancers in India</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50,000</span><span class="k">New cases of oral cancer in the U.S. every year</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">7</span><span class="k">FDA-approved medical indications of photodynamic treatment</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How PDT works</span><h2 class="d3">Drug, light, <em>singlet oxygen.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Drug</span><span>Light</span><span>Oxygen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The lesion takes up the drug.</h2><p>A photosensitizing agent is applied. With FDA-approved aminolevulinic acid (ALA), cancer and pre-cancer cells absorb it and build up protoporphyrin IX (PpIX), which only works once it is turned on by light.</p></article>'+
     '<article class="step"><h2>Matching light turns it on.</h2><p>After the drug-to-light interval, 635 nm light is delivered through optical fibre to the lesion. Typical PDT doses do not generate heat, and there is no harmful radiation.</p></article>'+
     '<article class="step"><h2>Singlet oxygen clears the lesion.</h2><p>Activated PpIX makes singlet oxygen, which kills the cancer cells. As it works the PpIX fluorescence bleaches, the signal the image-guided system tracks, and the mucosa heals without scarring.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our solution</span><h2 class="d2 split">Decades of PDT, <em>in one simple device.</em></h2></div><p data-r>A proprietary protocol enriched with decades of clinical experience, combined with state-of-the-art fibre optic technology, to give doctors and patients a cost-effective, user-friendly treatment.</p></div>'+
   caps()+
   '<figure class="qt"><blockquote data-r>“I was not comfortable holding the fiber in my hand for 30 min using the traditional laser device. But this device gave me confidence. The treatment process was easy and hands-free. Patients felt comfortable and relaxed.”</blockquote><figcaption class="lab" data-r>Dr. Bilal, Radiologist, Aligarh Muslim University, India</figcaption></figure>'+
  '</div></section>'+

  '<section class="sec dark2" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">From clinical trials <em>to a device.</em></h2></div><p data-r>PhotoDynamica builds on more than a decade of NIH-funded clinical research on PDT for oral cancer in India, and is now turning it into image-guided technology any clinic can use.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Scientists with <em>one vision.</em></h2></div><p data-r>A group of scientists with a vision to make affordable PDT available to every patient who needs it, led by pioneers of photodynamic therapy and laser engineering.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>How it started</span><p data-r>Professor Hasan long wanted to bring PDT to oral cancer in India, where it is a pandemic. In 2014 she and Professor Celli received a $4 million NIH grant to make it possible.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>An STTR Phase I award from the National Cancer Institute (1R41CA302359), building on multi-million NIH funding behind PDT over the past 40 years.</p></div>'+
    '<div><span class="lab kick" data-r>Clinical partner</span><p data-r>Aligarh Muslim University, India, site of the founders\' first 30-patient clinical trial for early oral cancers.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards, trials <em>and talks.</em></h2></div><p data-r>The latest from PhotoDynamica, from the 2026 National Cancer Institute award to the grants and trials that came before it.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Promoting PDT, preserving lives</span>'+
   '<h2 class="big split">Let’s work <em>together.</em></h2>'+
   '<p class="sub" data-r>Clinicians, partners and investors: PhotoDynamica would like to hear from you, exchange thoughts and expertise and build new partnerships.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email PhotoDynamica '+ARR+'</a><a class="btn" href="#/research">See the research</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Photodynamic Solutions, Inc.<br>465 Waverley Oaks Road, Suite 417<br>Waltham, MA 02452</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="'+YT+'" target="_blank" rel="noopener">YouTube</a><br><a class="ul" href="'+XT+'" target="_blank" rel="noopener">X (Twitter)</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>465 Waverley Oaks Road, Suite 417<br>Waltham, MA 02452</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Oral cancer and oral<br>potentially malignant lesions</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 62" aria-hidden="true"><text x="320" y="52" text-anchor="middle" style="font-family:\'Lexend\',Arial,sans-serif;font-weight:500;font-size:60px;letter-spacing:-.02em">PhotoDynamica</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Photodynamic Solutions, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",platform:"platform",research:"research",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"PhotoDynamica — Image-guided photodynamic therapy for oral cancer, Waltham, MA",x:"Home"};
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
