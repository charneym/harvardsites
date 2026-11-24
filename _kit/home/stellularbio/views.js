/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["The power of platelet-rich plasma","PRB harnesses the regenerative potential that underlies autologous treatments such as platelet-rich plasma, inspired by a robust body of research on blood products in ocular conditions.",'<circle cx="28" cy="28" r="18"/><ellipse class="a" cx="22" cy="24" rx="6" ry="3.2"/><ellipse class="a" cx="34" cy="30" rx="6" ry="3.2"/><circle class="f" cx="25" cy="36" r="2"/><circle class="f" cx="33" cy="20" r="1.6"/>'],
  ["Without the bespoke process","Autologous products must be made separately for each patient from a sample of their own blood, a process that can be cumbersome, inconsistent and expensive.",'<path d="M20 8h16M22 8v14l-10 20c-1 3 1 6 4 6h24c3 0 5-3 4-6L34 22V8"/><path class="a" d="M16 38h24"/>'],
  ["The advantages of an engineered product","A mass-manufactured therapeutic: standardised, off the shelf and lower cost, with the quality standards of approved medicines and the potential to reach a broad range of patients.",'<rect x="10" y="20" width="10" height="24"/><rect x="23" y="20" width="10" height="24"/><rect x="36" y="20" width="10" height="24"/><path class="a" d="M10 34h10M23 34h10M36 34h10"/><path d="M12 14h6M25 14h6M38 14h6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>PRB production</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From stellularbio.com (Science) and the Series 1 announcement of 28 January 2026.</p></div></div>'}
function backers(){return '<div class="bk"><span class="lab kick" data-r>Series 1</span><div><p class="cr" data-r><span>Ziff Capital Partners</span><i>·</i><span>Cockrell Interests</span><i>·</i><span>and others</span></p>'+
  '<p class="bkn" data-r>The round, closed in January 2026 and led by Ziff Capital Partners, will help advance STLR-201 into clinical testing. <a class="ul" href="'+PRN+'" target="_blank" rel="noopener">Read the announcement '+ARR+'</a></p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Platelet-derived regenerative biologics<span class="nomob"> · STLR-201</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Expanding the reach</span><span class="l">of <em>regenerative</em></span><span class="l"><em>medicine.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Stellular Bio develops PRB, a platelet-derived regenerative biologic: the regenerative potential of platelet-rich plasma in an off-the-shelf, mass-manufactured therapeutic. Our lead candidate, STLR-201, is advancing into clinical testing for Sjögren’s disease dry eye.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How PRB works '+ARR+'</a><a class="btn" href="#/pipeline">Our programme</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">We aim to improve the lives of patients with ocular surface disease with our pioneering platelet-inspired regenerative biologic. <em>Proven in animal models, built for scale.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">~20M</span><p class="k">Patients in the US affected by ocular surface disease</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~4M</span><p class="k">With severe disease and the potential for corneal damage or vision loss</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">75%</span><p class="k">Of Sjögren’s patients say eye dryness and irritation has a major or moderate impact on their lives</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How PRB works</span><h2 class="d3">The healing power of platelets, <em>made to scale.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Platelets</span><span>Source</span><span>Eye</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Platelets carry hundreds of signals.</h2><p>Platelets hold hundreds of active substances, the polypharmacology behind the regenerative effect of platelet-rich plasma. PRB retains it.</p></article>'+
     '<article class="step"><h2>Made from stem cells, not donors.</h2><p>STLR-201 is derived from platelet-progenitor stem cells by a proprietary, reproducible process, so it does not depend on donor plasma and can be manufactured off the shelf.</p></article>'+
     '<article class="step"><h2>Acting across the ocular surface.</h2><p>STLR-201 is designed to modulate, at the same time, the multiple cell and tissue types that are affected in ocular surface disease.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Platelet-inspired <em>regenerative biologic.</em></h2></div><p data-r>PRB combines the regenerative potential of platelet-rich plasma with the advantages of an engineered product. We have demonstrated its efficacy in animal models and established scalable manufacturing methods for clinical trials and commercial production.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From Sjögren’s dry eye <em>to the ocular surface.</em></h2></div><p data-r>We are pursuing initial clinical proof of concept in Sjögren’s disease dry eye, and are poised to expand into the broader ocular surface disease market and beyond.</p></div>'+
   pipeRows(PIPE)+
   evid()+
   backers()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Builders of biologics <em>and platelet science.</em></h2></div><p data-r>Led by Derek Adams, formerly Chief Technology and Manufacturing Officer at bluebird bio, with co-founder Joseph Italiano of Boston Children’s Hospital and advisors in ophthalmology, platelet biology and stem cells.</p></div>'+
   team()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Talk to <em>us.</em></h2>'+
   '<p class="sub" data-r>For partnering, investment or scientific questions about PRB, or to join a team quickly advancing new treatment options for patients with ocular surface disease, write to us in Watertown.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Stellular '+ARR+'</a><a class="btn" href="mailto:careers@stellularbio.com">Careers</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Stellular Bio, Inc.<br>65 Grove St, Suite 303<br>Watertown, MA 02472</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@stellularbio.com</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+18572996024">857-299-6024</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>65 Grove St, Suite 303<br>Watertown, MA 02472</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@stellularbio.com</a><br><a class="ul" href="tel:+18572996024">857-299-6024</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/mission">Mission</a><br><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Lead candidate</span>STLR-201 · Sjögren’s disease dry eye</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Outfit\',sans-serif;font-weight:400;font-size:62px">STELLULAR BIO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Stellular Bio, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={mission:"about",about:"about",story:"story",science:"science",pipeline:"pipeline",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Stellular Bio — platelet-derived regenerative biologics for ocular surface disease",x:"Home"};
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
