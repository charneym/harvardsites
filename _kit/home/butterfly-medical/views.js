/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function mileRows(){return '<ul class="pfr pipe ms">'+MILE.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><div class="pgm"><h3>'+esc(c[1])+'</h3></div><p>'+esc(c[2])+'</p><span class="lab lk">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Nothing cut, burned or removed","The implant retracts the lateral lobes mechanically to open the urethra. No tissue is cut, burned or punctured, and no dedicated capital equipment is needed.",'<path d="M8 28c6-10 14-14 20-14s14 4 20 14c-6 10-14 14-20 14S14 38 8 28Z"/><path class="a" d="M14 14l28 28"/>'],
  ["Reversible by design","Designed as a long-term implant that still allows future intervention, and fully reversible if needed.",'<path d="M14 22a15 15 0 0 1 27-4"/><path class="a" d="M41 10v8h-8"/><path d="M42 34a15 15 0 0 1-27 4"/><path class="a" d="M15 46v-8h8"/>'],
  ["A simple procedure, in many settings","Simple to learn, it can be performed under local anesthesia in the clinic, an ambulatory surgery centre or the hospital.",'<rect x="10" y="16" width="36" height="28"/><path d="M10 24h36"/><path class="a" d="M28 30v10M23 35h10"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Benign prostatic hyperplasia<span class="nomob"> · Medical devices</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Open the way,</span><span class="l"><em>keep the tissue.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>The Butterfly Prostatic Retraction Device is a minimally invasive, reversible implant that holds the prostate’s lateral lobes apart to restore urinary flow, without cutting, burning or removing tissue.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/solution">How it works '+ARR+'</a><a class="btn" href="#/clinical">Clinical evidence</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">BPH affects half of men over 60 and more than 70% of men over 70, and its symptoms weigh on quality of life. Butterfly is a new generation of BPH treatment, <em>a middle ground between medication and surgery.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">244</span><p class="k">Men in the randomized, double-blind U.S. pivotal trial, completed in January 2026</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~30M</span><p class="k">Men worldwide with some level of BPH symptoms; about a quarter actively seek treatment</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$21M</span><p class="k">Upsized Series C closed in May 2026, led by new and existing investors</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How Butterfly works</span><h2 class="d3">Retraction, <em>not resection.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Narrowed</span><span>Placed</span><span>Open</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The lobes close the channel.</h2><p>In BPH the enlarged lateral lobes of the prostate press in on the urethra, narrowing the channel urine has to pass through.</p></article>'+
     '<article class="step"><h2>The implant is placed.</h2><p>Through a cystoscope, often under local anesthesia, the Butterfly implant is positioned in the prostatic urethra, sized to the patient’s prostate.</p></article>'+
     '<article class="step"><h2>The way is held open.</h2><p>Its nitinol wings retract the lateral lobes and keep them apart, restoring flow with no tissue cut, burned or removed, and the implant can be removed if needed.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="solution" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Solution</span><h2 class="d2 split">An elegant, <em>minimally invasive procedure.</em></h2></div><p data-r>A first-line interventional therapy for men with BPH, between medication and surgery. The implant comes in several sizes to fit different prostates, and is applicable in the clinic, the ASC or the hospital.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical and regulatory</span><h2 class="d2 split">From pivotal trial <em>to approval.</em></h2></div><p data-r>A 244-patient pivotal trial completed, a Premarket Approval application with the FDA, and certification in Europe under the Medical Device Regulation.</p></div>'+
   mileRows()+
   '<p class="note-s ms-n" data-r>Butterfly has the CE Mark in Europe. In the USA it is an investigational device, limited by federal (United States) law to investigational use. Potential risks include urinary discomfort, urgency, frequency, bleeding and the possible need for device removal.</p>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">Urologists and <em>medtech builders.</em></h2></div><p data-r>Founded by a urologist and led by a team from Olympus, Abbott Vascular, the Cleveland Clinic and Coloplast, with a board of experienced medtech entrepreneurs and investors.</p></div>'+
   team()+
   '<div class="bk light-bk"><span class="lab kick" data-r>Investors</span><p class="cr" data-r><span>European Innovation Council</span><span>Junson Capital</span><span>MedVenture</span><span>New Rhein Healthcare Investors</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Milestones <em>in 2026.</em></h2></div><p data-r>The pivotal trial’s completion, an upsized Series C and certification under EU MDR.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Urologists, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Butterfly.</em></h2>'+
   '<p class="sub" data-r>For clinical, partnership or investor enquiries, write to the Butterfly Medical office.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Email the office '+ARR+'</a><a class="btn" href="#/solution">How it works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Butterfly Medical<br>3 HaTnufa St., 7th floor<br>Yokneam Illit 2069207, Israel</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">office@butterfly-medical.com</a></p></div>'+
    '<div><span class="lab" data-r>Watch</span><p data-r><a class="ul" href="https://www.youtube.com/watch?v=JX_HDYBEibQ" target="_blank" rel="noopener">The procedure video</a><br><a class="ul" href="https://www.youtube.com/watch?v=i8J0Sr-hEfU" target="_blank" rel="noopener">A patient interview</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>3 HaTnufa St., 7th floor<br>Yokneam Illit, Israel</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">office@butterfly-medical.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/solution">Solution</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/team">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Status</span>CE Mark (EU MDR). Investigational device in the USA.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="74" text-anchor="middle" style="font-family:\'Titillium Web\',Arial,sans-serif;font-weight:300;font-size:80px;letter-spacing:.05em">BUTTERFLY</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Butterfly Medical</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",solution:"solution",mechanism:"story",clinical:"clinical",team:"team",company:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Butterfly Medical — the Butterfly Prostatic Retraction Device for BPH",x:"Home"};
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
