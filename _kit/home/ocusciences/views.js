/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row ocr"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Only OcuMet autofluorescence","The Beacon’s patented autofluorescence technology gives ophthalmologists and optometrists a new way to view ocular disease, as a colour-coded image.",'<circle cx="28" cy="28" r="18"/><circle class="a" cx="28" cy="28" r="8"/><circle class="f" cx="28" cy="28" r="3"/>'],
  ["Automated, touch-screen","Fully automated and easy to use. The touch-based tablet needs minimal training, so setting up and imaging a patient is simple.",'<rect x="10" y="14" width="36" height="26"/><path d="M10 34h36"/><path class="a" d="M22 46h12M28 40v6"/>'],
  ["Non-invasive and rapid","Three to five minutes images most patients: no injections, no dyes and no contact with the eye. A clinician report is generated at the end.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M28 16v12l8 6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function specs(){return '<div class="ev"><span class="lab kick" data-r>OcuMet Beacon</span><div><dl>'+SPEC.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From the OcuMet Beacon’s technical specifications. The OcuMet Beacon is not intended to diagnose, treat, cure, or prevent any disease or health condition.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>OcuMet Beacon<span class="nomob"> · FDA cleared and CE marked</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">See beyond</span><span class="l"><em>structure.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>OcuSciences develops ocular imagers to detect and monitor eye diseases. The OcuMet Beacon images the retina’s own natural autofluorescence, in minutes, without dyes or injections.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/devices">The devices</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">To help physicians and their patients detect ocular diseases earlier, to prevent loss of vision. <em>Born out of the University of Michigan.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3–5</span><p class="k">Minutes to image most patients with the OcuMet Beacon</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">17 µm</span><p class="k">Optical resolution on the retina</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Regulatory clearances in 2025: the FDA in the United States and CE in the European Union</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Light in, <em>function out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Illuminate</span><span>Fluoresce</span><span>Map</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Light, through the pupil.</h2><p>The OcuMet Beacon aligns, focuses and captures on its own, imaging the retina with blue (460–480 nm) and infrared (825–870 nm) light, with or without dilating drops.</p></article>'+
     '<article class="step"><h2>The retina answers.</h2><p>Retinal tissue fluoresces naturally. Proprietary illumination and detection capture that autofluorescence: no dyes, no injections and no contact with the eye.</p></article>'+
     '<article class="step"><h2>A functional map.</h2><p>Software renders a colour-coded functional image signature, and a clinician report is ready at the end of a three- to five-minute session.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A new way to view <em>ocular disease.</em></h2></div><p data-r>OcuSciences builds its devices on a published and patented OcuMet autofluorescence technology, a rapid, non-invasive measure that assesses the eye, so physicians can detect and monitor disease earlier.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="devices" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Devices</span><h2 class="d2 split">From the clinic <em>to the laboratory.</em></h2></div><p data-r>The OcuMet Beacon is cleared for clinical use in the United States and the European Union. The OcuMet Mariner will bring the same imaging to preclinical research.</p></div>'+
   pipeRows(PIPE)+
   specs()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Optics, software <em>and ophthalmology.</em></h2></div><p data-r>An interdisciplinary team from the ophthalmic and diagnostic industries and leading healthcare institutions, with pioneers in computational biology, optical engineering, artificial intelligence, image analysis and ophthalmic diagnostics.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Cleared on <em>both sides of the Atlantic.</em></h2></div><p data-r>The latest on the OcuMet Beacon, from our announcements and the FDA.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">See the <em>Beacon.</em></h2>'+
   '<p class="sub" data-r>Interested in the OcuMet Beacon, our preclinical imager or the science behind them? Get in touch with our team in Ann Arbor.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to OcuSciences '+ARR+'</a><a class="btn" href="#/devices">See the devices</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>OcuSciences, Inc.<br>2890 Carpenter Road, Suite 1800<br>Ann Arbor, MI 48108</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@ocusciences.com</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+17346239434">(734) 623-9434</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Ann Arbor, Michigan</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@ocusciences.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/devices">Devices</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Device</span>OcuMet Beacon · FDA cleared and CE marked</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="62" text-anchor="middle" style="font-family:\'Poppins\',sans-serif;font-size:64px"><tspan class="o">OCU</tspan><tspan class="s">SCIENCES</tspan></text></svg>'+
  '<p class="disc">The OcuMet Beacon is not intended to diagnose, treat, cure, or prevent any disease or health condition.</p>'+
  '<div class="legal"><span class="lab">© 2026 OcuSciences, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",devices:"devices",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"OcuSciences — see beyond structure",x:"Home"};
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
