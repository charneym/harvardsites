/* ================= VIEWS (home only: Science / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function caps(){return '<div class="plat caps">'+CAPS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><p data-r>'+esc(a[1])+'</p></div>'}).join("")+'</div>'}
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><div class="pn"><h3>'+esc(c[1])+'</h3></div><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Regenerative cell therapy for chronic wounds<span class="nomob"> · Geneva, Switzerland</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Turning fat</span><span class="l"><em>into life.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>HekeTiss is developing TrophiPatch, an off-the-shelf patch of adipose-derived stem cells that restores the blood supply chronic wounds need to heal. It is now in a first-in-human Phase I/IIa trial at the Geneva University Hospitals.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>TrophiPatch: donor adipose-derived stem cells in a gelatin sponge matrix (render).</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The unmet medical need</span>'+
   '<h2 class="txt" id="mani">Chronic ulcers affect 1–2% of the world’s population and up to 5% of people over 65. Without a blood supply, tissue cannot receive the oxygen and nutrients it needs to heal. <em>TrophiPatch restores the vessels, to restart the healing.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1–2%</span><p class="k">Of the global population lives with a chronic wound</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10–20%</span><p class="k">Of ulcers remain refractory to current therapies</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50%</span><p class="k">Of planned patients recruited in the RESCUE-PATCH trial, 2026</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Science</span><h2 class="d3">Bringing blood back <em>to the wound.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">The wound</span><span>The patch</span><span>Signals</span><span>Vessels</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A wound without supply.</h2><p>Diabetes, cardiovascular and peripheral vascular disease leave the wound bed without a functional vascular network. Without oxygen and nutrients, the tissue cannot heal.</p></article>'+
     '<article class="step"><h2>Living cells, laid on the wound.</h2><p>TrophiPatch carries adipose-derived stem cells from the fat tissue of healthy donors, embedded in an active supporting matrix.</p></article>'+
     '<article class="step"><h2>The cells send signals.</h2><p>The cells secrete angiogenic and regenerative growth factors. HekeTiss’ proprietary technology enhances that activity within the matrix.</p></article>'+
     '<article class="step"><h2>New vessels, new tissue.</h2><p>The patient’s own repair processes restart: new blood vessels form in the wound bed and the tissue can regenerate.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="solution" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our solution</span><h2 class="d2 split">TrophiPatch, <em>a living skin patch.</em></h2></div><p data-r>An innovative allogeneic cell-based patch, designed to promote superior wound healing by restoring a functional vascular network in damaged tissue.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From the bench <em>to the bedside.</em></h2></div><p data-r>More than six years of research and completed preclinical testing, now in the Phase I/IIa RESCUE-PATCH trial with the Dermatology Division of the Geneva University Hospitals (ClinicalTrials.gov NCT07048054).</p></div>'+
   pipe()+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Recognition</span><p class="cr" data-r><span>TOP 100 Swiss Startups</span><i>2025</i><span>Prix Strategis</span><i>2025</i><span>Innosuisse Certificate</span><i>2024</i></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">From the lab <em>to the clinic.</em></h2></div><p data-r>Expertise in dermatology, stem cell biology, biotechnology and translational development, with hands-on GMP manufacturing experience in the Geneva University Hospitals’ GMP facility.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">TrophiPatch <em>in the clinic.</em></h2></div><p data-r>The latest milestones from HekeTiss and the RESCUE-PATCH trial.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function pipe(){
  return '<div class="ppl" data-r><div class="ppl-h"><span class="lab">Programme</span><span class="lab">Indication</span><span class="lab ppl-st"><i>Preclinical</i><i>Phase I/IIa</i><i>Phase II/III</i></span></div>'+
   '<div class="ppl-r"><h3>TrophiPatch</h3><p>Chronic, non-healing wounds: venous leg ulcers, diabetic foot ulcers, mixed etiology</p><div class="ppl-bar"><span class="ppl-tr"></span><span class="ppl-f"></span><span class="lab ppl-now">Recruiting</span></div></div></div>';
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Regeneration, <em>off the shelf.</em></h2>'+
   '<p class="sub" data-r>To talk about TrophiPatch, a clinical collaboration, a partnership or an investment, write to the HekeTiss team in Geneva.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/science">The science</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>HekeTiss S.A.<br>c/o FONGIT, Route de la Galaise 34<br>1228 Plan-les-Ouates, Geneva</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Clinical trial</span><p data-r><a class="ul" href="https://clinicaltrials.gov/study/NCT07048054" target="_blank" rel="noopener">RESCUE-PATCH, NCT07048054</a></p></div>'+
   '</div>'+
   '<p class="ivd" data-r>TrophiPatch is an investigational therapy under clinical evaluation and is not approved for use outside clinical studies.</p>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Plan-les-Ouates,<br>Geneva, Switzerland</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Origins</span>A spin-off of the University of Geneva<br>and the Geneva University Hospitals</div>'+
  '</div>'+LOGO_FTR+
  '<div class="legal"><span class="lab">© 2026 HekeTiss S.A.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",solution:"solution",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"HekeTiss — stem-cell skin regeneration for chronic wounds, Geneva",x:"Home"};
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
