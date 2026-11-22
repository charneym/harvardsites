/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
var PHS=["Discovery","Pre-clinical","Phase 1","Phase 2-3"];
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[7]?' class="dim"':'')+'><span class="lab tg"><b'+(c[7]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span>'+
   '<span class="stg" aria-hidden="true"><span class="tr"><i class="p" style="width:'+(c[5]/4*100)+'%"></i><i style="width:'+(c[4]/4*100)+'%"></i></span><span class="ph">'+PHS.map(function(p){return '<span>'+p+'</span>'}).join("")+'</span></span></div>'+
   '<p>'+esc(c[6])+'</p><span class="lab lk">'+(c[7]?'Solid tumours':'Lead programme')+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Peptide engineering","PHIN-214 is a partial vasopressin V1a receptor agonist: an evolutionary vasopressor engineered around a clinically validated mechanism, with a broad therapeutic index that may offer improved safety versus existing vasopressor therapies.",'<circle cx="12" cy="38" r="6"/><circle cx="28" cy="18" r="6"/><circle class="f" cx="44" cy="38" r="6"/><path d="M16 33.5l8-10.5M32 23l8 10.5"/><path class="a" d="M6 50h44"/>'],
  ["Subcutaneous, once daily","Designed for self-administration by subcutaneous injection. Pharmacokinetic data from the Phase 1 study support once-daily dosing, with negligible accumulation over 28 days.",'<path d="M14 42l24-24"/><path d="M32 12l12 12"/><path d="M18 46l-8 0 0-8"/><path class="a" d="M41 15l6-6M22 30l6 6M26 26l6 6"/>'],
  ["Care beyond the clinic","A practical outpatient option for people with advanced cirrhosis, so they can manage their condition more effectively and independently, while supporting continuity of care in hospital when needed.",'<path d="M10 28L28 12l18 16"/><path d="M15 24v20h26V24"/><path class="a" d="M28 30v9M23.5 34.5h9"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Phase 1 PHIN-001</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Preliminary results in a small cohort, presented at AASLD’s The Liver Meeting® 2025 (single ascending dose, 15 subjects, eight dose levels) and 2026 (multiple ascending dose, twelve participants with Child-Pugh class B cirrhosis). The study is ongoing (NCT05490888).</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Advanced liver cirrhosis<span class="nomob"> · PHIN-214</span> · Bothell, WA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Peptide therapy</span><span class="l">for cirrhosis,</span><span class="l"><em>self-injected.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>PharmaIN is a clinical-stage biopharmaceutical company pioneering first- and best-in-class subcutaneous therapies through peptide engineering, for patients with advanced liver cirrhosis and cancer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">Our science '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The unmet need</span>'+
   '<h2 class="txt" id="mani">In decompensated cirrhosis the liver is so scarred it can no longer function properly. There are no effective drugs to treat its progression, and a transplant is the only cure. PHIN-214 is built to <em>be taken at home.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">~500K</span><p class="k">People in the United States living with decompensated cirrhosis</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">12%</span><p class="k">Of people with cirrhosis decompensate each year</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~2 yrs</span><p class="k">Median survival after decompensation without a liver transplant</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How PHIN-214 works</span><h2 class="d3">Tone the vessels, <em>restore the flow.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Pooling</span><span>V1a</span><span>Kidneys</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Blood pools in the abdomen.</h2><p>In decompensated cirrhosis, vessels in the abdomen become too relaxed. Blood pools around the abdominal organs instead of circulating, blood pressure falls and the kidneys are starved, driving ascites and hepatorenal syndrome.</p></article>'+
     '<article class="step"><h2>PHIN-214 engages V1a.</h2><p>A once-daily subcutaneous dose of PHIN-214 stimulates vasopressin V1a receptors on abdominal smooth muscle. The vessels constrict, the clinically validated route to reversing this hemodynamic dysfunction.</p></article>'+
     '<article class="step"><h2>Blood returns to the kidneys.</h2><p>Pooled blood is redirected into the general circulation, raising systemic pressure and improving blood supply to the kidneys, with the aim of reducing fluid retention and improving organ perfusion.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">Thoughtful peptide <em>engineering.</em></h2></div><p data-r>PharmaIN combines expertise in target-specific biology, peptide drug design and innovative drug delivery into therapies that are both effective and easily administered.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Self-injectable therapies, <em>in the clinic.</em></h2></div><p data-r>PHIN-214 is the only subcutaneous vasopressor therapy currently in development, now in a Phase 1 study in patients with advanced cirrhosis.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Led by drug <em>developers.</em></h2></div><p data-r>A Bothell team with deep expertise in drug development, biotechnology and healthcare, committed to therapies that improve both clinical outcomes and quality of life.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>More than $75M from the NIH, investors and strategic partners, including Shionogi and Asahi Kasei Ventures.</p></div>'+
    '<div><span class="lab kick" data-r>NIH support</span><p data-r>An NIDDK SBIR award for subcutaneous drug development for portal hypertension ascites, continued in 2025.</p></div>'+
    '<div><span class="lab kick" data-r>Partnering</span><p data-r>PharmaIN is actively seeking a strategic partner to advance PHIN-214 through clinical development and commercialisation.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Data, meetings <em>and awards.</em></h2></div><p data-r>The latest on PHIN-214 from PharmaIN and the NIH.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>PharmaIN.</em></h2>'+
   '<p class="sub" data-r>PharmaIN is actively seeking a strategic partner for PHIN-214, and collaborates with pharmaceutical companies, research institutions and industry leaders.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email PharmaIN '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>PharmaIN Corporation<br>11812 North Creek Parkway N, Suite 101<br>Bothell, WA 98011</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>206.568.1450</p></div>'+
    '<div><span class="lab" data-r>Partnering, media and investors</span><p data-r><a class="ul" href="mailto:'+BD+'">'+BD+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>11812 North Creek Parkway N, Suite 101<br>Bothell, WA 98011</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>206.568.1450</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead programme</span>PHIN-214 · Partial V1a receptor agonist</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 72" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Cinzel\',Georgia,serif;font-weight:500;font-size:62px;letter-spacing:.04em;font-variant:small-caps;fill:#3fc0c1">Pharma<tspan style="fill:#6cc46f;font-size:68px">IN</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 PharmaIN Corporation</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",mechanism:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"PharmaIN — PHIN-214, a self-injectable peptide therapy for decompensated cirrhosis",x:"Home"};
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
