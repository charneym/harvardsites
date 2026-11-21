/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Oral metabolic therapies<span class="nomob"> · Chapel Hill, North Carolina</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">What metabolic surgery does,</span><span class="l"><em>in a tablet.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>BioKier is a clinical-stage company developing oral products that deliver a nutrient to the lower gut, restoring the gut hormone secretion that regulates glucose and lipids, without the surgery.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How BKR-017 works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Oral capsules on black. Photograph by Daniel Dan, Unsplash; illustrative, not a BioKier product.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Metabolic surgery resolves type 2 diabetes within days in a majority of patients. BioKier sends the same signal to the lower gut, <em>without the surgery.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$3.0M</span><span class="k">NIDDK SBIR Phase IIb award for the manufacture and clinical development of BKR-017</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">−19%</span><span class="k">LDL cholesterol after 28 days of BKR-017 in 14 type 2 diabetes patients (95.9 to 77.8 mg/dL)</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$436K</span><span class="k">NHLBI SBIR Phase I award for the Phase 1 study of BKR-017 in people on statin therapy</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Oral, not injected</span><p data-r>BioKier’s products are taken by mouth. Some of the newer, more effective metabolic drugs are injectable, inconvenient to give and expensive to make.</p></div>'+
    '<div><span class="lab kick" data-r>Targeted to the colon</span><p data-r>The Phloral™ coating, in-licensed from University College London, is designed to open only in the colon, by colonic enzymes and by pH.</p></div>'+
    '<div><span class="lab kick" data-r>505(b)(2) pathway</span><p data-r>BioKier’s products are designed for approval through the FDA’s 505(b)(2) regulatory pathway.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">Surgery’s signal, <em>delivered to the colon.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Swallow</span><span>Release</span><span>Respond</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Through the stomach, intact.</h2><p>BKR-017 is butyrate in a sustained-release tablet core under the Phloral™ coating. In tests simulating the stomach and small intestine, the coating held and nothing was released.</p></article>'+
     '<article class="step"><h2>The coating opens in the colon.</h2><p>Phloral™ comes off by two mechanisms, colonic amylase and a pH above 7.4. The core then releases butyrate slowly: over about ten hours in simulated colonic fluid.</p></article>'+
     '<article class="step"><h2>The L-cells answer.</h2><p>Butyrate stimulates the L-cells of the lower gut, correcting the deficient secretion of GLP-1 and other gut hormones, such as PYY, GLP-2 and oxyntomodulin, that regulate glucose, lipids and appetite.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One tablet, <em>several indications.</em></h2></div><p data-r>BioKier has devised proprietary oral formulations with two active ingredients: butyrate tablets (BKR-017, sustained-release, and BKR-021, rapid-release) and a glutamine capsule (BKR-013).</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Partners</span><p class="cr" data-r><span>Pennington Biomedical Research Center</span><span>Duke University</span><span>Mayo Clinic</span><span>Emerson Resources <i>BKR-017 manufacturing</i></span><span>University College London <i>Phloral™ licence</i></span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug discovery veterans, <em>since 2008.</em></h2></div><p data-r>BioKier was founded in November 2008 in Chapel Hill, North Carolina, by two scientists with long careers in metabolic disease research and drug development.</p></div>'+
   team()+
   '<div class="adv"><span class="lab kick" data-r>Advisors</span><p data-r><span>Michael Camilleri <i>MD, Mayo Clinic</i></span><span>David D’Alessio <i>MD, Duke University</i></span><span>Kishore M. Gadde <i>MD</i></span><span>L. Kristin Newby <i>MD, MHS, Duke University</i></span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Backed by <em>the NIH.</em></h2></div><p data-r>BKR-017 has been developed with SBIR awards from the National Institute of Diabetes and Digestive and Kidney Diseases and the National Heart, Lung, and Blood Institute, and with a JDRF grant.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">The surgery’s benefits. <em>Without the surgery.</em></h2>'+
   '<p class="sub" data-r>BioKier works from Chapel Hill, North Carolina. To talk about BKR-017, a clinical collaboration, a partnership or an investment, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>BioKier, Inc.<br>Chapel Hill, North Carolina</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>Founded in 2008<br>NIH SBIR awardee</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>BioKier, Inc.<br>Chapel Hill, North Carolina</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Colon-targeted oral<br>cardiometabolic therapies</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Open Sans\',Arial,sans-serif;font-style:italic;font-weight:700;font-size:72px;letter-spacing:-.01em"><tspan fill="#f3f5f9">BioKier</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 BioKier, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"BioKier — oral therapies that mimic metabolic surgery, Chapel Hill, North Carolina",x:"Home"};
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
