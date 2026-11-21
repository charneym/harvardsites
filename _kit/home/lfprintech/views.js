/* ================= VIEWS (home only: BurnHeal / Technology / Team open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(L){return '<ul class="pfr">'+L.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Bioprinting and additive manufacturing<span class="nomob"> · Rolla, Missouri</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Printed to heal,</span><span class="l"><em>layer by layer.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>LF Printech develops BurnHeal, a 3D-printed bioactive hydrogel dressing for second-degree burns, and advances additive manufacturing for biomedical, aerospace and defense applications.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How BurnHeal works '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<p class="lab hcap" data-r>A porous hydrogel dressing mid-print: filament laid layer by layer in a 0/90 lattice. Illustrative render.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why burns need a new dressing</span>'+
   '<h2 class="txt" id="mani">Burn wounds dry out, and dressings stick to them. BurnHeal is a printed hydrogel with a porous, non-adhesive contact <em>that keeps the wound hydrated and comes away without pain.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1M+</span><p class="k">People in the US affected by second-degree burn wounds each year</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$305K</span><p class="k">NSF STTR Phase I award, 2025, for porous bioactive hydrogel dressings</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30 yrs</span><p class="k">Of 3D printing and additive manufacturing research by co-founder Dr. Ming Leu</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Founded 2022</span><p data-r>A small business co-founded in Rolla, Missouri by Dr. Ming Leu and Dr. Fateme Fayyazbakhsh, now focused on product commercialization.</p></div>'+
    '<div><span class="lab kick" data-r>Federally funded</span><p data-r>Previous and ongoing research has been funded by the NIH, the National Science Foundation and the Department of Defense.</p></div>'+
    '<div><span class="lab kick" data-r>Research to market</span><p data-r>Proof-of-concept and feasibility studies, and product performance tested in real-world settings to address unmet needs.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How BurnHeal works</span><h2 class="d3">A dressing, <em>printed for the burn.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Print</span><span>Contact</span><span>Heal</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Printed, layer by layer.</h2><p>Natural hydrogels enriched with bioactive compounds are 3D-printed into a dressing with a porous surface, in a range of sizes, shapes and pore designs.</p></article>'+
     '<article class="step"><h2>Gentle on the wound.</h2><p>The porous, non-adhesive contact spreads the pull-off force across a larger area, so the dressing comes away without trauma, and the transparent gel lets clinicians see the wound without removing it.</p></article>'+
     '<article class="step"><h2>Hydrated while it heals.</h2><p>The dressing keeps the wound moist for days. Its bioactive molecules promote early re-epithelialization and wound closure, and trace copper and zinc support the growth of new blood vessels.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="burnheal" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>BurnHeal™</span><h2 class="d2 split">An advanced dressing <em>for second-degree burns.</em></h2></div><p data-r>BurnHeal is a multifunctional 3D-printed dressing for burn wound treatment, designed to close the gaps that powders, ointments, foams and sheet hydrogels leave open.</p></div>'+
   '<div class="bh">'+
    '<div><span class="lab sub-l" data-r>Features</span><ul class="ft">'+FEAT.map(function(f){return '<li data-r>'+esc(f)+'</li>'}).join("")+'</ul></div>'+
    '<div><span class="lab sub-l" data-r>Intended for</span><ul class="ft">'+USE.map(function(f){return '<li data-r>'+esc(f)+'</li>'}).join("")+'</ul>'+
     '<p class="bnote" data-r>Being developed under <a class="ul" href="'+NSF+'" target="_blank" rel="noopener">NSF STTR Phase I award 2507525</a>, with antibacterial and anti-inflammatory performance evaluated in a preclinical model.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Four ways <em>to print what’s hard to make.</em></h2></div><p data-r>Additive manufacturing is a tool-less, light-out technology, strongest for one-of-a-kind parts and small batches with complex geometries or materials. LF Printech develops it in hydrogels, ceramics and metals.</p></div>'+
   rows(TECH)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded by <em>printing researchers.</em></h2></div><p data-r>LF Printech’s founders lead additive manufacturing and biomaterials research at Missouri University of Science and Technology.</p></div>'+
   team()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Let’s talk <em>about BurnHeal.</em></h2>'+
   '<p class="sub" data-r>Interested in BurnHeal, a research collaboration or an additive manufacturing project in biomedical, aerospace or defense applications? Write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/how">How BurnHeal works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>10517 Pine Lake Dr</span><br><span>Rolla, MO 65401</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+15734662959">(573) 466-2959</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Rolla,<br>Missouri</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/burnheal">BurnHeal</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+15734662959">(573) 466-2959</a></div>'+
   '<div class="c"><span class="lab">Platforms</span>Bioprinting<br>Ceramic extrusion<br>Laser printing</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:\'Manrope\',system-ui,sans-serif;font-weight:500;font-size:60px;letter-spacing:.12em"><tspan fill="#ebb658">LF </tspan><tspan fill="#f4efe5">PRINTECH</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 LF Printech LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",how:"story",burnheal:"burnheal",technology:"technology",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"LF Printech — bioprinting and additive manufacturing, Rolla, Missouri",x:"Home"};
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
