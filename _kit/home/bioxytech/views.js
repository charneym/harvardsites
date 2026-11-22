/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Fits the camera clinics already use","An add-on module with proprietary hardware and software integrates with widely used fundus cameras, so any healthcare professional in a clinic can run it: not only physicians, but nurses and medical assistants.",'<rect x="6" y="20" width="26" height="18"/><path d="M32 24h8v10h-8"/><circle cx="19" cy="29" r="5"/><path class="a" d="M40 29h12"/><path d="M12 38v8M26 38v8M8 46h22"/>'],
  ["One snapshot, a full oxygen map","Spatially modulated light lets the system image the retina’s multi-layered structure and produce a high-resolution map of retinal oxygen saturation in a single snapshot, unaffected by the eye’s movement between frames.",'<circle cx="28" cy="28" r="20"/><circle class="f" cx="22" cy="28" r="3.2"/><path class="a" d="M25 27c8-6 14-12 20-14M25 30c8 4 13 10 18 15"/><path d="M19 26c-5-4-8-9-9-13M19 31c-4 4-7 8-8 12"/>'],
  ["Read by machine learning","An integrated machine-learning platform enhances diagnostic accuracy, automates image analysis and improves disease classification, for tailored monitoring across a broad range of clinical settings.",'<rect x="8" y="8" width="40" height="40"/><path d="M8 22h40M8 36h40M22 8v40M36 8v40"/><rect class="f" x="22" y="22" width="14" height="14"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Retinal oximetry<span class="nomob"> · Diabetic retinopathy</span> · Richmond, CA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">See diabetic eye</span><span class="l">disease before</span><span class="l"><em>the damage.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Bioxytech Retina has built a non-invasive imaging platform that maps the oxygen in the retina’s blood vessels in a single snapshot from a standard fundus camera, detecting diabetic retinopathy 4–13 months before structural changes appear.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How it works '+ARR+'</a><a class="btn" href="#/technology">Our technology</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why oxygen</span>'+
   '<h2 class="txt" id="mani">Diabetic retinopathy damages the retina’s blood vessels, and once that structural damage is done it is difficult, if not impossible, to reverse. Small changes in the vessels’ oxygen saturation come first. Bioxytech measures that <em>earlier, functional signal.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">4–13 mo</span><p class="k">Earlier than structural imaging: how far ahead retinal oxygen saturation has predicted diabetic retinopathy</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;2.5%</span><p class="k">Margin of error measuring retinal oxygen saturation non-invasively, from a fundus camera</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.6M</span><p class="k">In NSF and NIH SBIR awards since 2016, with a strategic investment from Topcon Healthcare in 2025</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">From a fundus photo <em>to an oxygen map.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Image</span><span>Measure</span><span>Flag</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Image the retina as usual.</h2><p>The add-on module fits a standard fundus camera, the same exam in which a light is shone into the eye to see the retina. The optic disc and the retinal vessels are captured in one snapshot.</p></article>'+
     '<article class="step"><h2>Map oxygen in every vessel.</h2><p>Spatially modulated light and Bioxytech’s mathematical models turn that snapshot into a high-resolution map of oxygen saturation: oxygen-rich arteries, and the veins carrying blood back from the tissue.</p></article>'+
     '<article class="step"><h2>Flag disease months earlier.</h2><p>Shifts in retinal venous oxygen saturation stage diabetic retinopathy quantitatively, and have predicted it 4–13 months before the structural changes that cause vision loss.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">A functional view <em>of the retina.</em></h2></div><p data-r>Conventional imaging finds diabetic retinopathy after the vessels are damaged. Bioxytech’s platform combines proprietary hardware and software to measure the retina’s metabolic and oxygenation-related changes first, quantitatively and without touching the eye.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One platform, <em>many diseases.</em></h2></div><p data-r>Developed for diabetic retinopathy as its initial indication, the platform reads early functional changes in retinal blood circulation that also accompany age-related macular degeneration and neurodegenerative disorders.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Optics, AI and <em>retinal medicine.</em></h2></div><p data-r>Founded and led by Dr. Ali Basiri, Bioxytech Retina began at QB3@953 in San Francisco and now works from Richmond, California, with a world-class retinal specialist supervising its patient eye exams.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NSF SBIR Phase I and Phase II awards for non-invasive retinal oximetry, and an NIH SBIR award from the National Institute on Minority Health and Health Disparities.</p></div>'+
    '<div><span class="lab kick" data-r>Strategic investor</span><p data-r>Topcon Healthcare, a global leader in ophthalmic imaging devices, invested in August 2025 to accelerate commercialisation.</p></div>'+
    '<div><span class="lab kick" data-r>Patients</span><p data-r>Free eye exams for people with diabetes, funded by the National Science Foundation, with $50 for taking part.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, papers <em>and partners.</em></h2></div><p data-r>The latest from Bioxytech Retina, from its NSF and NIH research to its strategic investment from Topcon Healthcare.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function evid(){return '<div class="ev"><span class="lab kick" data-r>NSF SBIR Phase II</span><div><dl>'+
  [["Accuracy","Retinal oxygen saturation measured with a margin of error under 2.5%"],["Earlier","Diabetic retinopathy predicted 4–13 months before structural change"],["Easy to use","Run by any healthcare professional in a clinical setting"],["FDA","A regulatory strategy submitted, with promising written FDA feedback"]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Project outcomes reported to the National Science Foundation for SBIR Phase II award 1853245, “Non-Invasive Retinal Oximetry for Detecting Diabetic Retinopathy prior to Structural Damage” (2019–2024).</p></div></div>'}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and investment</span>'+
   '<h2 class="big split">Talk to <em>Bioxytech.</em></h2>'+
   '<p class="sub" data-r>Bioxytech Retina is moving its retinal oximetry platform toward the clinic and welcomes conversations with clinicians, device partners and investors. Patients with diabetes can call or text to book a free eye exam.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Bioxytech '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Bioxytech Retina, Inc.<br>2600 Hilltop Drive, Bldg B, Ste 132<br>Richmond, CA 94806</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19253389325">+1 925 338 9325</a></p></div>'+
    '<div><span class="lab" data-r>Free eye exam</span><p data-r>Call or text<br><a class="ul" href="tel:+19253389325">(925) 338-9325</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>2600 Hilltop Drive, Bldg B<br>Richmond, CA 94806</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platform</span>Non-invasive retinal oximetry<br>NSF &amp; NIH SBIR funded</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 620 62" aria-hidden="true"><text x="310" y="52" text-anchor="middle" style="font-family:\'Outfit\',Arial,sans-serif;font-weight:700;font-size:62px;letter-spacing:.02em">BIOXYTECH</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Bioxytech Retina, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"technology",how:"story",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Bioxytech Retina — Retinal oximetry for diabetic retinopathy before structural damage, Richmond, CA",x:"Home"};
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
