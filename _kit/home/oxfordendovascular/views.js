/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function specRows(){return '<ul class="pfr pipe np">'+SPECS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row mf-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Bench tested","The flow diverter and its delivery system have been tested on the bench, and a functional performance study of the whole system fed further design improvements.",'<rect x="10" y="20" width="36" height="16"/><path class="a" d="M14 28H42"/><circle class="f" cx="42" cy="28" r="2.2"/>'],
  ["Pilot-line manufacture","Specific device sizes have been transferred to pilot-line manufacture, with process validation prioritising the sizes for the animal and clinical studies.",'<path d="M8 40H48M14 40V24L24 30V24L34 30V18H44V40"/><circle class="f" cx="39" cy="24" r="2.2"/>'],
  ["Toward first-in-human","The programme leads to a 10-patient first-in-human study of OXIFLOW, on the way to regulatory approval and the clinic.",'<circle cx="28" cy="20" r="8"/><path d="M14 46C14 36 20 31 28 31C36 31 42 36 42 46"/><path class="a" d="M22 20L26 24L34 16"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function certs(){var S=[
  ["European Union","Horizon 2020","A grant of up to €2.96 million from the Horizon 2020 SME Instrument for OXIFLOW, under grant agreement 859001."],
  ["Innovate UK","Smart and Biomedical Catalyst","A Smart Grant in 2020 and Biomedical Catalyst funding in 2025 for an advanced hybrid flow diverter."],
  ["Investors","Oxford-backed","Parkwalk Advisors, Oxford Sciences Innovation, Vulpes Investment Management, Perivoli Innovations and the University of Oxford, among others."]];
  return '<div class="mfs">'+S.map(function(s){return '<div class="mf-site"><span class="lab" data-r>'+esc(s[0])+'</span><h3 data-r>'+esc(s[1])+'</h3><p data-r>'+esc(s[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Neurovascular medical devices<span class="nomob"> · a University of Oxford spin-out</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Origami engineering</span><span class="l"><em>for brain aneurysms.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Oxford Endovascular is developing OXIFLOW, a next-generation flow diverter laser-cut from nitinol, that diverts blood away from aneurysms at risk of rupture. It is designed to place more accurately and safely than existing devices, and to treat more patients.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Contact the team</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Preventing brain haemorrhage</span>'+
   '<h2 class="txt" id="mani">A ruptured brain aneurysm is entirely avoidable through early intervention. OXIFLOW was invented by a pioneering neuroradiologist and an expert in origami engineering <em>to cure aneurysms before they bleed.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 in 50</span><p class="k">People affected by a brain aneurysm</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">51,000</span><p class="k">EU citizens a year who suffer a subarachnoid haemorrhage</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">Patent regions: Europe, the US, China and Japan</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology · flow diversion</span><h2 class="d3">Divert the flow, <em>let it heal.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Aneurysm</span><span>Place</span><span>Divert</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A weak point in the wall.</h2><p>An intracranial aneurysm is a balloon-like dilation of an artery wall in the brain. Under the pressure of the blood flowing into it, it can grow and rupture.</p></article>'+
     '<article class="step"><h2>Placed across the neck.</h2><p>OXIFLOW is delivered through the vessel and opens across the aneurysm’s neck. Its origami-designed inner frame gives uniform radial force, so it lands where intended and opens fully against the wall.</p></article>'+
     '<article class="step"><h2>Flow diverted.</h2><p>The outer sleeve diverts blood along the parent vessel and away from the aneurysm, removing the risk of growth and rupture, and enabling it to heal naturally.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="oxiflow" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>OXIFLOW</span><h2 class="d2 split">A flow diverter, <em>rethought.</em></h2></div><p data-r>Existing flow diverters are braided meshes, with uneven radial force that can lead to poor positioning and opening. OXIFLOW combines an inner frame and an outer sleeve to solve each problem separately.</p></div>'+
   specRows()+
  '</div></section>'+

  '<section class="sec light" id="programme" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programme</span><h2 class="d2 split">From the bench <em>to first-in-human.</em></h2></div><p data-r>Supported by Horizon 2020, Innovate UK and its investors, Oxford Endovascular is working through design freeze, pilot-scale manufacture, a GLP animal study and regulatory approvals toward its first clinical study.</p></div>'+
   caps()+
   certs()+
  '</div></section>'+

  '<section class="sec light alt" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Clinic, engineering <em>and medtech.</em></h2></div><p data-r>Founded in 2015 as a spin-out from the University of Oxford, the company combines over 30 years of clinical experience with internationally renowned expertise in origami-based endovascular devices.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, rounds <em>and milestones.</em></h2></div><p data-r>The company’s funding and recognition since 2019. Each item links to the full story.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Talk to the team <em>in Oxford.</em></h2>'+
   '<p class="sub" data-r>For clinical collaboration, partnership or investment enquiries about OXIFLOW, email the company at its Oxford Science Park laboratory.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Oxford Endovascular '+ARR+'</a><a class="btn" href="#/news">Latest news</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Laboratory</span><p data-r>S7 Magdalen Centre<br>Robert Robinson Avenue, Oxford Science Park<br>Oxford OX4 4GA, United Kingdom</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Office address for invoicing</span><p data-r>Oxford Endovascular Ltd<br>9400 Garsington Road, Oxford Business Park<br>Oxford OX4 2HN</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Laboratory</span>S7 Magdalen Centre, Oxford Science Park<br>Oxford OX4 4GA, UK</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/oxiflow">OXIFLOW</a><br><a class="ul" href="#/programme">Programme</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Company</span>Oxford Endovascular Ltd<br>Registered in England, 09769779</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Mulish\',Arial,sans-serif;font-weight:300;font-size:50px;letter-spacing:.2em">OXFORD ENDOVASCULAR</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Oxford Endovascular Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",oxiflow:"oxiflow",programme:"programme",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Oxford Endovascular — origami engineering for brain aneurysms",x:"Home"};
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
