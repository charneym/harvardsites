/* ================= VIEWS (home only: Technology / Programmes / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p>'+
   (c[4]?'<a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a>':'<span class="lk" aria-hidden="true"></span>')+'</li>'}).join("")+'</ul>'}
function credit(kick,list){return '<div class="adv"><span class="lab kick" data-r>'+esc(kick)+'</span><p data-r>'+list.map(function(a){return '<span>'+esc(a)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'+
  credit("The team in Galway",STAFF)+credit("Clinical advisors",ADVISORS)}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Resorbable embolization<span class="nomob"> · Galway, Ireland</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Embolization</span><span class="l">that <em>leaves no trace.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>SakuraBead is a resorbable embolic microsphere for chronic inflammatory pain. Delivered to the inflamed tissue under image guidance, it pauses the blood supply long enough to reset the inflammation, then dissolves and the flow returns.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/programmes">Clinical programmes</a></div></div>'+
   '<p class="lab hcap" data-r>SakuraBead resorbable microspheres, rendered at macro scale: calibrated beads made from organic, biocompatible materials.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Introduction</span>'+
   '<h2 class="txt" id="mani">Chronic joint pain was long treated as wear and tear. The research now points to a loop of inflammation, new blood vessels and new nerves. CrannMed builds the embolic that <em>interrupts the loop, then disappears.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">€12.5m</span><p class="k">Approved from the European Innovation Council Accelerator in 2026, for new pain indications and commercialisation</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">FDA Breakthrough Device Designations, for knee osteoarthritis and frozen shoulder</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">89</span><p class="k">Patients in the randomised SURE study, comparing SakuraBead with a steroid injection</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Leaves no trace</span><p data-r>An enzyme embedded in each microsphere targets only the bead’s own base material, so it degrades on a controlled schedule, independent of the patient’s physiological response.</p></div>'+
    '<div><span class="lab kick" data-r>Tunable resorption</span><p data-r>The time to resorb can be set from a few hours to six months. Restoring flow protects downstream tissue, limits the effect of non-target embolization and allows repeat procedures.</p></div>'+
    '<div><span class="lab kick" data-r>Made in Galway</span><p data-r>Developed in CrannMed’s own materials lab, then manufactured, lyophilized and packaged in its Class 8 cleanroom, inside a 6,000 sq ft facility in Ireland’s medical device hub.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">How SakuraBead <em>resets the joint.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">The loop</span><span>Delivery</span><span>Pause</span><span>Resorb</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Inflammation feeds itself.</h2><p>Damaged cartilage triggers inflammatory signals that grow new blood vessels around the joint. They are immature and leaky, so they let in more inflammation, and new sensory nerves grow in alongside them.</p></article>'+
     '<article class="step"><h2>A catheter reaches the knee.</h2><p>Under local anaesthetic, an interventional radiologist guides a thin catheter through the arteries to the knee, using X-ray and contrast dye to find the abnormal vessels as a visible blush.</p></article>'+
     '<article class="step"><h2>The beads pause the flow.</h2><p>SakuraBead microspheres are released into those vessels and block them. Without a blood supply, the immature vessels regress, the nerves that depend on them go too, and the cycle of inflammation is interrupted.</p></article>'+
     '<article class="step"><h2>Then they dissolve.</h2><p>The embedded enzyme breaks the beads down and blood flow is restored. Nothing is left behind in the knee, and every other treatment option remains open.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="programmes" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical programmes</span><h2 class="d2 split">One bead, <em>many kinds of pain.</em></h2></div><p data-r>Musculoskeletal embolization treats the inflammation behind chronic pain rather than masking it. CrannMed’s first application is knee osteoarthritis, now in a randomised study in the US, and the same microsphere is being taken to the shoulder, the spine, the hand and the foot.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Funders and partners</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Clinicians, chemists <em>and engineers.</em></h2></div><p data-r>CrannMed was founded in 2018 to bring together world-leading clinical, material science and delivery system experts. Its team in Galway spans chemistry, engineering, clinical, regulatory and material science, working with interventional radiologists in Europe, the US and Japan.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Up to €12.5m from <em>the EIC Accelerator.</em></h2></div><p data-r>In February 2026 the European Innovation Council approved CrannMed for blended finance of up to €12.5m: a €2.5m first phase to extend SakuraBead to new pain indications, and a €10m second phase for commercialisation in Europe and the US.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Rethink chronic pain, <em>with us.</em></h2>'+
   '<p class="sub" data-r>CrannMed works with interventional radiologists and clinical sites across Europe and the United States. Physicians and patients interested in the SURE study can write to the study team directly; for everything else, the Galway team is one email away.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Galway</span><p data-r>CrannMed Ltd<br>Block 11, Galway Technology Park<br>Parkmore, Galway, Ireland</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>The SURE study</span><p data-r><a class="ul" href="mailto:'+MAIL_SURE+'">'+MAIL_SURE+'</a></p><a class="ul lk" href="'+N_CT+'" target="_blank" rel="noopener" data-r>NCT06550024</a></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Galway</span>Block 11, Galway Technology Park<br>Parkmore, Galway, Ireland</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Resorbable embolics for<br>chronic inflammatory pain</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 86" aria-hidden="true"><text x="320" y="70" text-anchor="middle" style="font-family:\'Figtree\',system-ui,sans-serif;font-weight:600;font-size:96px;letter-spacing:-.01em"><tspan fill="#f2f5f4">Crann</tspan><tspan fill="#22b5b0">Med</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 CrannMed Ltd. SakuraBead is an investigational device.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",programmes:"programmes",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"CrannMed — resorbable embolization, Galway",x:"Home"};
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
