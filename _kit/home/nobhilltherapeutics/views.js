/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
var PHS=["Preclinical","Phase 1","Phase 2","Phase 3"];
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[7]?' class="dim"':'')+'><span class="lab tg"><b'+(c[7]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span>'+
   '<span class="stg" aria-hidden="true"><span class="tr"><i class="p" style="width:'+(c[5]/4*100)+'%"></i><i style="width:'+(c[4]/4*100)+'%"></i></span><span class="ph">'+PHS.map(function(p){return '<span>'+p+'</span>'}).join("")+'</span></span></div>'+
   '<p>'+esc(c[6])+'</p><span class="lab lk">'+esc(c[8])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Independent of the breath","The DryNeb disperses the powder independently of the patient’s inhalation breath maneuver and lung function, generating highly efficient drug aerosols.",'<circle cx="28" cy="28" r="17"/><circle class="a" cx="22" cy="24" r="2.2"/><circle class="a" cx="32" cy="21" r="2.2"/><circle class="a" cx="35" cy="31" r="2.2"/><circle class="a" cx="25" cy="34" r="2.2"/><circle class="a" cx="28" cy="28" r="1.4"/>'],
  ["No coordination required","It is designed to emit powder only when a patient inhales. Patients breathe normally, with easy tidal breathing and no forced maneuvers.",'<path d="M6 30c5 0 6-10 11-10s6 20 11 20 6-20 11-20 6 10 11 10"/><path class="a" d="M17 12v6M14 15l3 3 3-3"/>'],
  ["High doses of pure drug","The DryNeb can deliver high doses of pure active ingredient to the lower respiratory tract, more efficiently than current dry powder inhalers, as a platform for many medicines.",'<path d="M28 8v30"/><path d="M18 22c0 14 4 22 10 22M38 22c0 14-4 22-10 22"/><circle class="a" cx="20" cy="46" r="2.4"/><circle class="a" cx="36" cy="46" r="2.4"/><circle class="a" cx="28" cy="50" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From nobhilltherapeutics.com, ClinicalTrials.gov (NCT07864584), NIH RePORTER and Nob Hill’s releases of August 2024 and June 2025.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>DryNeb™ dry powder nebulizer<span class="nomob"> · Albuquerque, NM</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">High doses,</span><span class="l">straight to</span><span class="l"><em>the lung.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Nob Hill Therapeutics is re-envisioning inhalation medicines and how they are delivered to the lungs. Its patented DryNeb delivers high doses of pure drug to the lower respiratory tract while the patient simply breathes normally.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/mechanism">How the DryNeb works '+ARR+'</a><a class="btn" href="#/applications">Our programs</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">To improve patients’ lives by re-envisioning inhalation medicines, and to <em>change the treatment paradigm for high-dose lung delivery</em> for lung diseases that can’t be effectively treated today.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">70–95%</span><p class="k">Less tumor burden with tidally inhaled 5-AZA dry powder in a rat lung tumor model, against 32% for injected 5-AZA</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$3M</span><p class="k">Series A first close in August 2024, led by Tramway Venture Partners</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">HHS Phase II SBIR grants, for inhaled therapies for lung fungal infection (2022) and lung cancer (2023)</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the DryNeb works</span><h2 class="d3">Just breathe. <em>The DryNeb does the rest.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Disperse</span><span>Inhale</span><span>Deliver</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The powder is dispersed.</h2><p>The DryNeb disperses a high dose of pure dry powder drug into a fine aerosol independently of the patient’s breath and lung function, so a weak or diseased lung does not limit the dose.</p></article>'+
     '<article class="step"><h2>Released as the patient breathes in.</h2><p>Powder leaves the device only when the patient inhales, so no coordination is required. Patients breathe normally, with easy tidal breathing and no forced maneuvers.</p></article>'+
     '<article class="step"><h2>Delivered deep into the lung.</h2><p>Aerosol particles sized for the lower respiratory tract carry high concentrations of drug to the site of disease or infection, while minimizing side effects and toxicities.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A dry powder <em>nebulizer.</em></h2></div><p data-r>The DryNeb is a patented technology that can deliver drugs to the lungs with higher efficiency than current dry powder inhalers. It is being developed as a platform, with innovations in generating highly efficient drug aerosols and delivering them to the lower respiratory tract.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">Medicines made <em>for the DryNeb.</em></h2></div><p data-r>Nob Hill is developing pulmonary therapeutics for use with the DryNeb, from an inhaled epigenetic therapy for lung cancer to an inhaled antifungal, with diseases that impact millions of patients in view.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Pulmonary drug delivery <em>experts.</em></h2></div><p data-r>A highly qualified team develops the DryNeb and the drug and device products that use it, guided by advisors in patient care, drug formulation, device engineering, efficacy and clinical trials.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Investors</span><p data-r>Tramway Venture Partners, TCA Venture Group and VIC Technology Venture Development, with thanks to all our investors for their support and partnership.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>SBIR awards from the National Heart, Lung, and Blood Institute and the National Cancer Institute.</p></div>'+
    '<div><span class="lab kick" data-r>Our values</span><p data-r>Deliver results. Act pragmatically. Move fast. Trust and support each other. Do the right thing.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the lab <em>to the clinic.</em></h2></div><p data-r>The latest on NHT102, the DryNeb and our team, from Nob Hill and the public record.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>Nob Hill.</em></h2>'+
   '<p class="sub" data-r>We would be glad to hear from you about the DryNeb, our programs, or the lung diseases you work on.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Nob Hill '+ARR+'</a><a class="btn" href="tel:+14795712592">479.571.2592</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Nob Hill Therapeutics, Inc.<br>5901 Indian School Road, Suite 209<br>Albuquerque, NM 87110</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+14795712592">479.571.2592</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="https://www.linkedin.com/company/43355197" target="_blank" rel="noopener">LinkedIn</a><br>Part of the VIC Technology Venture Development ecosystem</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>5901 Indian School Road, Suite 209<br>Albuquerque, NM 87110</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+14795712592">479.571.2592</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead program</span>NHT102 · Inhaled 5-AZA dry powder with the DryNeb, for non-small cell lung cancer</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Outfit\',system-ui,sans-serif;font-weight:400;font-size:50px;letter-spacing:.06em">NOB HILL THERAPEUTICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Nob Hill Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story",applications:"applications",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Nob Hill Therapeutics — High-dose inhaled medicines with the DryNeb",x:"Home"};
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
