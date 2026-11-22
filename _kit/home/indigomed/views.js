/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function sysRows(){return '<ul class="pfr sys">'+SYS.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab lk">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["A spectrometer on a chip","Indigo builds on silicon photonics, the technology that revolutionised the internet. A miniature integrated spectrometer, born from UGent’s photonics and imec’s nanoelectronics expertise, fits on a single chip.",'<rect x="10" y="17" width="36" height="22"/><path class="a" d="M14 28h9l4-5 4 10 4-5h7"/><path d="M16 39v5M24 39v5M32 39v5M40 39v5M16 12v5M24 12v5M32 12v5M40 12v5"/>'],
  ["No enzymes, no fluorophores","The inert chip measures how light is absorbed in the interstitial fluid and quantifies each metabolite from its spectrum, without the enzyme chemistry or fluorescent dyes other sensors depend on.",'<path d="M6 40C14 40 16 18 22 18s8 16 12 16 6-10 10-10 6 8 6 8"/><path class="a" d="M6 46h44"/><circle class="f" cx="22" cy="18" r="2.4"/><circle class="f" cx="34" cy="34" r="2.4"/>'],
  ["Several metabolites, one sensor","Glucose, ketones and lactate are read simultaneously and continuously by the same chip: a broad menu of metabolites, where today’s continuous monitors report a single value.",'<circle cx="18" cy="20" r="8"/><circle cx="38" cy="20" r="8"/><circle cx="28" cy="37" r="8"/><circle class="f" cx="28" cy="25" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){var E=[
  ["Quality","ISO 13485 certified by TÜV SÜD for the design and development of biomarker sensing devices and services."],
  ["Patents","Protected by many international patent families, including US Patent No. 11,992,310 (2024)."],
  ["Recognition","Rated ‘Tech Ready’, with high market creation potential, by the European Commission’s Innovation Radar (MuSiC4Diabetes project)."]];
  return '<div class="ev"><span class="lab kick" data-r>Quality and protection</span><div><dl>'+E.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Disclaimer: NOT FDA cleared. NOT CE-marked. Product under clinical investigation; not available on the market, not for sale.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Continuous multi-metabolite monitoring<span class="nomob"> · Gent, Belgium</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A spectrometer</span><span class="l">on a chip,</span><span class="l"><em>under the skin.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Indigo is developing CMM®, an implantable continuous multi-metabolite monitor. A miniature silicon-photonics spectrometer reads glucose, ketones and lactate in the fluid beneath the skin, with nothing worn on the body.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/product">The CMM® system</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">One in three people worldwide live with a chronic condition. Continuous glucose monitoring changed diabetes care, yet it means a device on the body and a single number. We use light to read <em>several metabolites at once, from within.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Metabolites measured in real time by one implanted sensor: glucose, ketones and lactate</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6 mo</span><p class="k">SHINE feasibility study of the implantable monitor, completed in 2025 with no device-related serious adverse events</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2016</span><p class="k">Founded in Gent as a spin-off of Ghent University and imec</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the CMM® sensor works</span><h2 class="d3">Light in, <em>chemistry out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sense</span><span>Resolve</span><span>Share</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Light meets the fluid.</h2><p>Implanted beneath the skin, the chip sends light through the interstitial fluid that bathes the surrounding tissue. Each metabolite absorbs light in its own way.</p></article>'+
     '<article class="step"><h2>The spectrum gives each one away.</h2><p>The on-chip spectrometer measures that absorption across the spectrum and quantifies glucose, ketones and lactate simultaneously, without enzymes or fluorophores.</p></article>'+
     '<article class="step"><h2>The readings reach the phone.</h2><p>The sensor connects securely over Bluetooth to a mobile device, sharing the concentration profiles with the user, their caregivers and family.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Light, <em>not enzymes.</em></h2></div><p data-r>Indigo uses ground-breaking nanophotonics to analyse metabolite levels with an on-chip miniature spectrometer. The name is a nod to the colour Newton added to complete the spectrum: our technology relies on light to sense metabolites accurately inside the body.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="product" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Product</span><h2 class="d2 split">The CMM® system, <em>invisible by design.</em></h2></div><p data-r>A next generation of continuous monitoring for people living with diabetes, our first target market. In the six-month SHINE study, run under MDR 2017/745 and ISO 14155:2020, the sensor collected spectral data reliably at home, with positive patient-reported usability.</p></div>'+
   sysRows()+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Photonics meets <em>diabetes care.</em></h2></div><p data-r>Founded by Danaë Delbeke and her team in 2016, Indigo is headquartered in Gent, Belgium, with employees in the US. Its leadership brings decades at Insulet, Abbott, Stryker and Boston Scientific, advised by leading endocrinologists in Europe and North America.</p></div>'+
   team()+
   '<div class="bk light-bk"><span class="lab kick" data-r>Investors</span><p class="cr" data-r><span>Fund+ (lead)</span><span>Ackermans &amp; van Haaren</span><span>Thuja Capital</span><span>PMV</span><span>Capricorn Partners</span><span>imec.xpand</span><span>Qbic</span></p></div>'+
   '<div class="bk light-bk"><span class="lab kick" data-r>Partners and support</span><p class="cr" data-r><span>Ghent University</span><span>imec</span><span>EU Horizon 2020 (grant 811792)</span><span>Flanders Innovation &amp; Entrepreneurship (VLAIO)</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Milestones, <em>in the open.</em></h2></div><p data-r>Clinical results, certifications, patents and recognition from the past two years.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, partners, clinicians and talent</span>'+
   '<h2 class="big split">Talk to <em>Indigo.</em></h2>'+
   '<p class="sub" data-r>Whether you are a clinician, an investor, a potential partner or someone who would like to join the team, we would like to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="https://www.linkedin.com/company/indigomed.com" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Indigo / Indigo Medical US<br>Bollebergen 2B box 5<br>B-9052 Gent, Belgium</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>Indigo Diabetes NV<br>BTW BE 0666.442.557</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Bollebergen 2B box 5<br>B-9052 Gent, Belgium</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/product">Product</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Product</span>CMM® continuous multi-metabolite monitor · under clinical investigation</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 120" aria-hidden="true"><text x="380" y="92" text-anchor="middle" style="font-family:\'Comfortaa\',Arial,sans-serif;font-weight:500;font-size:112px;letter-spacing:-.01em">indigo</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Indigo Diabetes NV</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story",product:"product",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Indigo — continuous multi-metabolite monitoring",x:"Home"};
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
