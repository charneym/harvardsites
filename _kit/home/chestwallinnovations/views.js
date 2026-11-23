/* ================= VIEWS (home only: Approach / PC Fix / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function specs(){var S=[
  ["Materials","PEEK or titanium","Rib plates in either PEEK or titanium, so the surgeon can choose the material for each repair."],
  ["Approach","Intrathoracic or extrathoracic","The plate goes on the inner or the outer face of the rib. Chest Wall Innovations calls PC Fix the first and only intrathoracic PEEK rib fixation system available."],
  ["Fixation","Locking posts and caps","Plates with holes, slots and bone-facing anchoring teeth. Locking posts position and stabilise the plate; locking caps engage the posts to secure it to the rib."],
  ["Indications","Rib fractures and osteotomies","Fixation, stabilization and fusion of rib fractures and osteotomies of normal and osteoporotic bone. Prescription use."]];
  return '<ul class="pfr">'+S.map(function(r){return '<li><span class="lab tg" data-r>'+esc(r[0])+'</span><h3 data-r>'+esc(r[1])+'</h3><p data-r>'+esc(r[2])+'</p></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Rib fracture fixation<span class="nomob"> · Hershey, Pennsylvania</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Purpose-built</span><span class="l">for <em>the chest wall.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Chest Wall Innovations develops fixation technologies designed specifically for the unique anatomy and biomechanics of the chest wall, so surgeons can perform the highest quality repairs, every time.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/pcfix">The PC Fix System '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>A rib plate with locking caps bridging a fracture (render, schematic).</p>'+
  '</section>'+

  '<section class="sec mani dark" id="approach" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Advancing the standard of chest wall surgery</span>'+
   /* heading and lede for the build-out page only (buildout.js clears inline styles on its clone, so they show there, not here) */
   '<h2 class="d2" style="display:none">Purpose-built for <em>one thing.</em></h2><p style="display:none">Chest Wall Innovations combines medical expertise with advanced engineering to create reliable, high-performance thoracic fixation systems, developed with leading surgeons.</p>'+
   '<h2 class="txt" id="mani">Chest Wall Innovations is purpose-built for one thing: <em>advancing the surgical treatment of the chest wall.</em> Working closely with leading surgeons, it engineers fixation that maximises the options in the operating room.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">510(k)</span><span class="k">FDA clearance of the PC Fix System, K260411, April 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><span class="k">Plate materials: PEEK or titanium</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><span class="k">Approaches: intrathoracic or extrathoracic</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The repair</span><h2 class="d3">From a broken rib to <em>a stable chest wall.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fracture</span><span>Approach</span><span>Fixation</span><span>Stable</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A broken rib.</h2><p>For select patients with chest wall injuries, surgical stabilization of rib fractures is becoming the standard of care, as reflected in the American College of Surgeons’ November 2025 best-practice guidelines.</p></article>'+
     '<article class="step"><h2>Inside or outside.</h2><p>PC Fix lets the surgeon choose the approach: the plate goes on the outer face of the rib, or on its inner face, intrathoracic, with what the company calls the first and only intrathoracic PEEK rib fixation system.</p></article>'+
     '<article class="step"><h2>Locked in place.</h2><p>A plate with holes and slots spans the fracture. Locking posts position and stabilise it, and locking caps engage the posts to secure the plate to the rib.</p></article>'+
     '<article class="step"><h2>A stable repair.</h2><p>In PEEK or titanium, the rib is held in line while it heals. Surgeon feedback has been extremely positive, says CEO Ken Kremer, with consistent praise for the system’s simplicity and ease of use.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pcfix" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The PC Fix Rib Fixation System</span><h2 class="d2 split">Two materials, <em>two approaches,</em> one system.</h2></div><p data-r>Precision-engineered for chest wall fixation: every part is developed to support surgical accuracy, reduce complications and promote faster patient recovery, using modern materials, biomechanics research and surgeon-focused design.</p></div>'+
   specs()+
   '<div class="plat kf">'+
    '<div><span class="v" data-r>PEEK</span><span class="lab" data-r>or titanium plates</span></div>'+
    '<div><span class="v" data-r>Intra</span><span class="lab" data-r>or extrathoracic approach</span></div>'+
    '<div><span class="v" data-r>Class II</span><span class="lab" data-r>FDA 510(k) cleared, K260411</span></div>'+
    '<div><span class="v" data-r>Rx</span><span class="lab" data-r>Prescription use only</span></div>'+
   '</div>'+
   '<p class="ivd dk" data-r>Caution: Federal (USA) law restricts this device to sale by or on the order of a physician. Rx only.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From clearance to <em>launch.</em></h2></div><p data-r>FDA 510(k) clearance in April 2026, then a commercial launch in September: since clearance, PC Fix has been used in procedures at hospitals across the United States.</p></div>'+
   newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons and hospital administrators</span>'+
   '<h2 class="big split">Ready to <em>learn more?</em></h2>'+
   '<p class="sub" data-r>Whether you are a surgeon or a hospital administrator, Chest Wall Innovations welcomes your inquiry and will respond promptly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/pcfix">The PC Fix System</a></div>'+
   '<div class="cinfo cgrid">'+
    '<div><span class="lab" data-r>Address</span><p data-r>710 W. Chocolate Ave, Suite 1061<br>Hershey, PA 17033</p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+17175530824">717-553-0824</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>710 W. Chocolate Ave, Suite 1061<br>Hershey, PA 17033</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/pcfix">PC Fix</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+17175530824">717-553-0824</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Rib fracture fixation<br>and chest wall surgery</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:Tinos,\'Times New Roman\',serif;font-weight:700;font-size:64px;letter-spacing:-1.5px"><tspan fill="#f4f6f8">Chest Wall</tspan><tspan fill="#5aa9e6" dx="16" style="font-size:40px;letter-spacing:4px">Innovations</tspan></text></svg>'+
  '<p class="lab fcau">Caution: Federal (USA) law restricts this device to sale by or on the order of a physician. Rx only.</p>'+
  '<div class="legal"><span class="lab">© 2026 Chest Wall Innovations</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={approach:"approach",procedure:"story",pcfix:"pcfix",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Chest Wall Innovations — the PC Fix Rib Fixation System, Hershey, PA",x:"Home"};
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
