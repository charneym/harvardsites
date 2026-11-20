/* ================= VIEWS (home only: Technology / System / Team / Publications open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<section class="mh">'+TEAM.map(function(g){
  return '<div class="mh-group"><p class="mh-label">'+esc(g[0])+'</p><ul class="mh-list">'+g[1].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</section>'}
function pubs(){return '<ul class="nws">'+PUBS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Simultaneous PET/MRI<span class="nomob"> · Sunnyvale, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">PET imaging</span><span class="l">for your <em>MRI.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>PETcoil is developing a portable PET scanner that slides into the MRI a hospital already has, for simultaneous PET and MRI without buying a dedicated integrated system.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>An MRI scanner of the kind PETcoil’s insert is designed to fit inside.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Many patients need both a PET and an MRI scan, usually on two machines. An integrated PET/MRI system costs about $5 million, plus $1.5–2 million to rebuild the room. <b>PETcoil brings PET to the MRI already in the building.</b></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">~60</span><span class="k">Integrated PET/MRI systems in use in the US, against about 13,500 MRI systems</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10×</span><span class="k">Lower cost to reach simultaneous PET/MRI than a permanently integrated system</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$7.4M</span><span class="k">In NIH SBIR and STTR awards since 2020</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Rooted at Stanford</span><p data-r>The core technology began at Stanford University, where the founders built a radio-frequency-penetrable PET insert for simultaneous PET and MRI.</p></div>'+
    '<div><span class="lab kick" data-r>Sharper and more sensitive</span><p data-r>Designed for over three times the photon sensitivity and over four times finer volumetric resolution of current PET/MRI systems.</p></div>'+
    '<div><span class="lab kick" data-r>Removable</span><p data-r>The insert goes into an MRI and comes out again, so one scanner can serve both clinical and research work.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">Two scanners, <em>one bore.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">MRI</span><span>Insert</span><span>PET/MRI</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The MRI already in the room.</h2><p>Most hospitals have an MRI scanner; very few have integrated PET/MRI. Patients who need both usually get a PET/CT and an MRI on separate days, with extra radiation from the CT and fusion errors between the images.</p></article>'+
     '<article class="step"><h2>A PET ring that slides in.</h2><p>PETcoil’s insert is a ring of PET detectors that slides into the MRI bore around the patient’s head, and out again. It is radio-frequency penetrable: the MRI’s own RF field passes through it, so the MRI keeps imaging.</p></article>'+
     '<article class="step"><h2>Both pictures, at once.</h2><p>Each positron annihilation sends two gamma photons in opposite directions. The ring catches both and times them (time-of-flight) to place the event, while the MRI images the anatomy in the same scan.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="system" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>System</span><h2 class="d2 split">PET for the head, <em>inside any MRI.</em></h2></div><p data-r>PETcoil’s first product is a portable PET scanner for head imaging, intended to deliver high-quality PET at a fraction of the cost of PET/CT and integrated PET/MRI. Both programmes are funded by the National Institutes of Health.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Working with</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Imaging scientists <em>and engineers.</em></h2></div><p data-r>PETcoil was formed by imaging scientists, engineers and radiologists. Its core technology has its roots in Craig Levin’s laboratory at Stanford University.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="publications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Publications</span><h2 class="d2 split">A decade of <em>peer review.</em></h2></div><p data-r>The insert’s detectors, RF penetrability and MR compatibility have been characterised in peer-reviewed journals since 2015. Selected papers:</p></div>'+
   pubs()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Hospitals, researchers and partners</span>'+
   '<h2 class="big split">PET/MRI, <em>within reach.</em></h2>'+
   '<p class="sub" data-r>PETcoil is based in Sunnyvale, California. To talk about the system, a research collaboration or a role on the team, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+MAP+'" target="_blank" rel="noopener">Find us in Sunnyvale</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>PETcoil, Inc.<br>1257 Oakmead Parkway, Suite B<br>Sunnyvale, CA 94085</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r>NIMH and NIDCR<br>SBIR and STTR programmes</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>1257 Oakmead Parkway, Suite B<br>Sunnyvale, California 94085</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/system">System</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/publications">Publications</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Removable PET inserts<br>for simultaneous PET/MRI</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 62" aria-hidden="true"><text x="320" y="52" text-anchor="middle" style="font-family:\'Sora\',system-ui,sans-serif;font-weight:500;font-size:66px;letter-spacing:-.02em">PETcoil</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 PETcoil, Inc.</span><span class="lab">Concept website · Not available for commercial sale</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",system:"system",team:"team",publications:"publications",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"PETcoil — a removable PET insert for simultaneous PET/MRI, Sunnyvale",x:"Home"};
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
