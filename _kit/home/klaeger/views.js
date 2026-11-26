/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">'+"More"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Endoscope nozzles","Smaller than a match head","Nozzles for argon plasma coagulation in mixed-oxide ATZ: Ø 1.7 mm, walls down to 0.15 mm, cross holes at different angles. Insulating, biocompatible and sterilisable.",'<circle cx="28" cy="28" r="16"/><circle class="a" cx="28" cy="28" r="9"/><path d="M28 6V12M28 44V50"/><circle class="f" cx="28" cy="28" r="2.2"/>'],
  ["Ceramic screws","Zirconia, MRT compatible","Zirconia screws from 5 to 13 mm, with inner or outer hex, non-magnetic so they do not disturb MRT imaging. Interchangeable inserts give many designs from one mould.",'<path d="M14 22H42V30H14Z"/><path class="a" d="M20 30V48L28 52L36 48V30"/><path d="M20 36H36M20 42H36"/><circle class="f" cx="28" cy="26" r="2.2"/>'],
  ["Paediatric crowns","Ceramic Award, 2018","Kläger’s injection-moulded zirconia paediatric crowns won one of the two top prizes of the first Ceramic Award at ceramitec 2018, the only injection moulder ever to receive it.",'<path d="M12 22L20 14L28 22L36 14L44 22V34Q44 46 28 46Q12 46 12 34Z"/><path class="a" d="M18 30H38"/><circle class="f" cx="28" cy="30" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Ceramic and plastic injection moulding<span class="nomob"> · Dornstetten</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Precision parts</span><span class="l">in technical ceramics</span><span class="l"><em>and plastics.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Kläger is a development partner and system supplier for precision injection-moulded components, from engineering and mould making to series production and assembly. Family-owned since 1959, a pioneer of ceramic injection moulding since 1996.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/capabilities">Our capabilities '+ARR+'</a><a class="btn" href="#/contact">Start a project</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Home of CIM</span>'+
   '<h2 class="txt" id="mani">Engineering, mould making and injection moulding under one roof, so we take full responsibility for <em>turning product ideas into market-ready parts.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1959</span><p class="k">Founded in Dornstetten by Ing. Gerhard Kläger, still family-owned today</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt; 300</span><p class="k">Materials processed, from standard plastics to high-performance ceramics</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt; 900</span><p class="k">Products currently in production, in three shifts on about 40 machines</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Ceramic injection moulding</span><h2 class="d3">From feedstock <em>to ceramic.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Mould</span><span>Debind</span><span>Sinter</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Moulded like a plastic part.</h2><p>Ceramic feedstock is injected into a precision mould, so threads, undercuts and ribs familiar from plastics become possible in technical ceramics, shaped in a single step.</p></article>'+
     '<article class="step"><h2>The binder comes out.</h2><p>Unlike plastic moulding, CIM goes on after forming. Kläger debinds thermally or catalytically, with acetone or isopropanol pre-debinding where needed, and can run its own compounds and every feedstock on the market.</p></article>'+
     '<article class="step"><h2>Sintered, then finished.</h2><p>Sintering turns the part into dense technical ceramic, ready for hard machining where required: components from 0.1 g to 300 g, in series of 500 to 4 million a year.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="capabilities" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Capabilities</span><h2 class="d2 split">The whole chain, <em>in-house.</em></h2></div><p data-r>From the first idea to the assembled module: Kläger covers engineering, mould making, plastic and ceramic injection moulding, additive manufacturing and system integration in Dornstetten.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="medical" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Medical technology</span><h2 class="d2 split">Ceramics for <em>medical devices.</em></h2></div><p data-r>Technical ceramics insulate, withstand heat, are biocompatible and can be sterilised. CIM makes them small, thin-walled and precise enough for instruments and implants.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="materials" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Materials and production</span><h2 class="d2 split">More than 300 materials, <em>one standard.</em></h2></div><p data-r>Only the dimensional and functional conformity of every single part keeps the end product working. That is why Kläger commits to uncompromising precision, in the mould and in the moulded part.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>At a glance</span><dl>'+
    '<div data-r><dt class="lab">Technical ceramics</dt><dd>Al₂O₃, ZTA, ATZ, ZrO₂, Si₃N₄ and more</dd></div>'+
    '<div data-r><dt class="lab">Plastics</dt><dd>Standard, engineering and high-performance thermoplastics</dd></div>'+
    '<div data-r><dt class="lab">Machines</dt><dd>About 40 injection moulding machines, 25 to 220 t</dd></div>'+
    '<div data-r><dt class="lab">Production</dt><dd>Three shifts, with a multi-level quality assurance system</dd></div>'+
   '</dl></div>'+
   '<div class="bk"><span class="lab kick" data-r>Responsibility</span><p class="cr" data-r><span>DIN ISO 9001:2015</span><span>Sprues regranulated since the 1950s</span><span>Solar power since 2010</span><span>Process heat recovered</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">A hidden champion <em>from Baden-Württemberg.</em></h2></div><p data-r>In 1959 Ing. Gerhard Kläger began moulding switch receptacles in plastic. Today about 100 people in Dornstetten build moulds and mould parts for market leaders, as one of the pioneers of ceramic injection moulding.</p></div>'+
   team()+
   '<div class="qual"><span class="lab kick" data-r>Industries</span><p class="cr" data-r><span>Medical and dental</span><span>Measurement and control</span><span>Electrical</span><span>Household appliances</span><span>Consumer goods</span><span>Mechanical engineering</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Trade fairs <em>and new materials.</em></h2></div><p data-r>Recent work and appearances from Dornstetten; every entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Moving products <em>forward.</em></h2>'+
   '<p class="sub" data-r>For ceramic or plastic injection moulding, engineering, prototypes or mould making, talk to us directly in Dornstetten.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Kläger Spritzguss GmbH &amp; Co. KG<br>Hochgerichtstraße 33<br>72280 Dornstetten, Germany</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telephone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Downloads</span><p data-r><a class="ul" href="'+KL+'downloads/" target="_blank" rel="noopener">Certificates, materials and technical information</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Kläger Spritzguss GmbH &amp; Co. KG<br>Hochgerichtstraße 33, 72280 Dornstetten</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/capabilities">Capabilities</a><br><a class="ul" href="#/medical">Medical technology</a><br><a class="ul" href="#/materials">Materials</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Processes</span>Ceramic injection moulding<br>Plastic injection moulding<br>Mould making · CAM-X</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Sora\',system-ui,sans-serif;font-weight:400;font-size:60px;letter-spacing:.3em">KLÄGER</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Kläger Spritzguss GmbH &amp; Co. KG</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",process:"story",capabilities:"capabilities",medical:"medical",materials:"materials",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Kläger — Precision injection moulding in technical ceramics and plastics, Dornstetten",x:"Home"};
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
