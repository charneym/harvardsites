/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><a class="lab lk" href="'+c[6]+'" target="_blank" rel="noopener">'+esc(c[5])+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Sample","Pressed and rotated on the tissue, the hooks flex down, engage the epithelium and lift a trans-epithelial biopsy by frictional de-bonding, layer by layer.",'<path d="M6 40h44"/><path class="a" d="M12 40c0-8 4-12 8-12M24 40c0-8 4-12 8-12M36 40c0-8 4-12 8-12"/><path d="M20 28a3 3 0 1 1 0 .1M32 28a3 3 0 1 1 0 .1M44 28a3 3 0 1 1 0 .1"/>'],
  ["Debride","With moderate pressure the hook array becomes a field of frictional micro-curettes that clears slough, necrotic debris and biofilm while sparing healthy tissue.",'<path d="M6 42c8-3 14-3 22 0s14 3 22 0"/><path class="a" d="M10 30l36-10"/><circle class="f" cx="18" cy="36" r="2"/><circle class="f" cx="27" cy="34" r="2"/><circle class="f" cx="36" cy="36" r="2"/>'],
  ["Trap and transport","The dislodged tissue stays inside the fabric. The tip snaps off into the transport vial, so no one handles the specimen and the lab receives all of it.",'<rect x="16" y="20" width="24" height="30"/><path d="M14 20h28"/><path class="a" d="M28 4v12M23 11l5 5 5-5"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function backers(){return '<div class="bk light-bk"><span class="lab kick" data-r>Assurance</span><p class="cr" data-r><span>FDA-registered devices</span><i>·</i><span>Multi-patented in the US and abroad</span><i>·</i><span>Reimbursable for debridement and wound-bed prep</span></p></div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Three<br>divisions</span><div><dl>'+
  [["Women’s health","Compassionate Colposcopy®: SoftBiopsy®, Soft ECC®, Soft ECC-S and SpiraBrush CX® for biopsy after an abnormal cervical cancer screen"],
   ["Wound care","SoftBiopsy®+D, Soft K-Cot®, Soft K-Rette® and Soft K-Bride® for debridement, wound-bed preparation and tangential biopsy of chronic wounds"],
   ["Veterinary","Soft K-Cot, Soft K-Rette and SoftBiopsy for debridement and biopsy in animal care, an emerging division"],
   ["Antibiotic stewardship","Tangential biopsies of the debrided wound base go to the lab for culture or molecular testing, to guide therapy rather than broad-spectrum antibiotics"]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Device descriptions from histologicswh.com, histologicswc.com and histologicsvet.com, and the Soft K-Bride® release of 6 November 2025. For use by licensed clinicians.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Tissue-focused medical devices<span class="nomob"> · Kylon®</span> · Anaheim, California</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Tissue sampling,</span><span class="l">gentle enough to</span><span class="l"><em>be compassionate.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Histologics makes biopsy, debridement and wound-bed preparation devices built on Kylon®, a patented medical fabric of micro-hooks that lifts tissue gently and traps it for the lab.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How Kylon® works '+ARR+'</a><a class="btn" href="#/devices">Devices</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">Instruments from the late nineteenth century were still taking tissue from patients. Histologics set out to advance tissue sampling into the twenty-first, <em>and to help save lives worldwide.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1M+</span><p class="k">Clinical cases performed with Kylon® devices in the United States, as of 2023</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2008</span><p class="k">Established as a technology incubator for better histological sampling</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Divisions: women’s health, wound care and veterinary care</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How Kylon® works</span><h2 class="d3">A fabric that <em>takes and keeps.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Press</span><span>Rotate</span><span>Capture</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Press: the hooks flex.</h2><p>Kylon® is nylon woven with fenestrated loops cut into micro-hooks. Applied to tissue with light pressure, the hooks flex downward and expose their tips to the tissue face.</p></article>'+
     '<article class="step"><h2>Rotate: tissue lifts.</h2><p>Rotated or agitated on the surface, the hook tips engage the epithelium and lift it by frictional de-bonding, a selective, layer-by-layer removal instead of a steel punch or curette.</p></article>'+
     '<article class="step"><h2>Capture: the fabric is the container.</h2><p>The dislodged tissue is trapped inside the fabric. The tip snaps free into the vial and travels to the lab, so the pathologist receives the entire sample, untouched.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">One medical fabric, <em>three jobs at once.</em></h2></div><p data-r>Unlike bristle brushes, a fabric can be applied to any device contour, shape or surface to match the tissue being sampled. Every Histologics device is built on the same Kylon® platform.</p></div>'+
   caps()+
   backers()+
  '</div></section>'+

  '<section class="sec dark2" id="devices" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Devices</span><h2 class="d2 split">Biopsy and debridement, <em>single-use.</em></h2></div><p data-r>From colposcopy to chronic wounds, each device puts Kylon® where the tissue is, newest first: the Soft K-Bride® brush-curette, launched in November 2025.</p></div>'+
   devRows(DEV)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded by a clinician, <em>guided by wound experts.</em></h2></div><p data-r>Histologics grew out of Dr. Neal Lonky’s practice in lower genital tract disease, and its wound-care devices were shaped by feedback from medical, nursing and allied-health wound professionals.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Origins</span><p data-r>Established in 2008 out of dedication to women undergoing evaluation for abnormal cervical cancer screening, and the need for better histologic sampling.</p></div>'+
    '<div><span class="lab kick" data-r>Regulatory</span><p data-r>Devices are listed with the FDA as tissue collection and transport systems, curettes and biopsy brushes, and made to high quality standards.</p></div>'+
    '<div><span class="lab kick" data-r>Intellectual property</span><p data-r>Kylon®, SoftBiopsy®, Soft-ECC®, Soft K-Cot®, Soft K-Rette® and Soft K-Bride® are protected by issued US and non-US patents and trademarks.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Launches <em>and recognition.</em></h2></div><p data-r>The latest from Histologics, from the Soft K-Bride® launch to recognition for its founder.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, distributors and partners</span>'+
   '<h2 class="big split">Feel the Kylon® <em>at your fingertips.</em></h2>'+
   '<p class="sub" data-r>Licensed clinicians can request free samples to evaluate in hand. For orders, distribution or partnering, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Histologics '+ARR+'</a><a class="btn" href="#/devices">The devices</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>4095 E. La Palma Ave., Suite N<br>Anaheim, CA 92807</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18882352275">+1 (888) 235-2275</a></p></div>'+
    '<div><span class="lab" data-r>Divisions</span><p data-r><a class="ul" href="'+WH+'" target="_blank" rel="noopener">Women’s health</a><br><a class="ul" href="'+WC+'" target="_blank" rel="noopener">Wound care</a><br><a class="ul" href="'+VT+'" target="_blank" rel="noopener">Veterinary</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>4095 E. La Palma Ave., Suite N<br>Anaheim, CA 92807</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18882352275">+1 (888) 235-2275</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/devices">Devices</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platform</span>Kylon® medical fabric · Tissue sampling, debridement, wound-bed preparation</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="62" text-anchor="middle" style="font-family:\'Barlow Semi Condensed\',Arial,sans-serif;font-weight:800;font-style:italic;font-size:72px">HISTOLOGICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Histologics, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story",devices:"devices",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Histologics — Kylon® tissue sampling and debridement devices",x:"Home"};
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
