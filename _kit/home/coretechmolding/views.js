/* ================= VIEWS (home only: Capabilities / Industries / Quality / Company open build-out pages via _kit/lib/buildout.js;
   Contact and in-page CTAs scroll). Hero: their own product photograph, a medical-grade fluid transfer tube set (from their cleanroom
   page), keyed to real alpha so it sits on the ink with no box, right of a type-led headline; three facts as the bottom band. Then
   bone and dark grounds alternate: about (bone), the molding story (dark), capabilities as six figures (bone), industries as a grid
   (dark), quality and certifications (bone), company: owners and news (dark), contact (bone). Content is never hidden at rest. ================= */
function caps(){return '<div class="tscale ctcap"><ol class="ts-row">'+CAPS.map(function(c){
  return '<li class="ts" data-r><span class="ts-dot" aria-hidden="true"></span><span class="ts-m">'+esc(c[0])+(c[1]?'<small>'+esc(c[1])+'</small>':'')+'</span><h3>'+esc(c[2])+'</h3><p>'+esc(c[3])+'</p></li>'}).join("")+'</ol></div>'}
function inds(){return '<div class="svg6">'+IND.map(function(c,i){
  return '<article class="svc" data-r><span class="lab sv-n">'+String(i+1).padStart(2,"0")+'</span><h3>'+esc(c[0])+'</h3><span class="sv-k">'+esc(c[1])+'</span><p>'+esc(c[2])+'</p></article>'}).join("")+'</div>'}
function certs(){return '<div class="ctq"><ul class="ctc">'+CERTS.map(function(c){return '<li data-r><span class="ctc-c">'+esc(c[0])+'</span><span class="ctc-s">'+esc(c[1])+'</span></li>'}).join("")+'</ul>'+
  '<div class="cta-aw"><span class="lab kick" data-r>Awards</span><ul>'+AWARDS.map(function(a){return '<li data-r><h3>'+esc(a[0])+'</h3><p>'+esc(a[1])+'</p></li>'}).join("")+'</ul></div></div>'}
function team(){return '<section class="mh"><div class="mh-group"><p class="mh-label" data-r>Owners</p><ul class="mh-list">'+TEAM.map(function(p){
  return '<li data-r><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span><span></span></div></li>'}).join("")+'</ul></div></section>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
var ICO={iso:'<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="17" r="11"/><path d="M15 17l3.5 3.5L26 13"/><path d="M13 26l-3 10 6-3 4 4M27 26l3 10-6-3-4 4"/></svg>',
 room:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M5 34V12l15-7 15 7v22z"/><path d="M5 34h30"/><path d="M15 34V22h10v12"/><path d="M11 15h18" stroke-dasharray="2 3"/></svg>',
 clock:'<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="14"/><path d="M20 11v9l6 4"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>Precision injection molding<span class="nomob"> · Greensboro, North Carolina</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Precision parts,</span> <span class="l"><em>molded clean.</em></span></h1>'+
    '<i class="hrule" aria-hidden="true" data-r></i>'+
    '<div class="hx-foot"><p class="s" data-r>Close-tolerance plastic components for medical devices and pharmaceuticals, aerospace, automotive and appliances, molded and assembled in our ISO Class 7 and Class 6 cleanrooms, for customers in 150 countries.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/capabilities">Our capabilities '+ARR+'</a><a class="btn" href="#/contact">Start a project</a></div></div>'+
   '</div>'+
   '<ul class="pil" aria-label="Core Technology at a glance">'+
    '<li class="p1" data-r><span class="pic">'+ICO.iso+'</span><div><span class="lab">ISO 13485:2016</span><p>Certified for medical devices, alongside ISO 9001, IATF 16949 and ISO 14001.</p></div></li>'+
    '<li class="p2" data-r><span class="pic">'+ICO.room+'</span><div><span class="lab">ISO Class 7 and 6</span><p>Cleanrooms for medical molding and for assembly.</p></div></li>'+
    '<li class="p3" data-r><span class="pic">'+ICO.clock+'</span><div><span class="lab">24/7, five shifts</span><p>Twelve presses from 110 to 1,000 tons, and eleven robots.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="about" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>About Core Technology</span>'+
   '<h2 class="txt" id="mani">We are a custom injection molding solutions provider: we design, mold, assemble and sterilize precision plastic parts, <em>from syringe plunger rods to <span class="nw">aircraft seating.</span></em></h2></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2006</span><p class="k">Founded in Greensboro, North Carolina, by Geoff Foster</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">150</span><p class="k">Countries our customers’ parts are shipped to</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">104k<small>sq ft</small></span><p class="k">Our new plant on Millstream Road, a $28 million expansion</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a part is made</span><h2 class="d3"><span class="nw">From resin</span> <span class="nw"><em>to released part.</em></span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Design</span><span>Mold</span><span>Release</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Design for manufacture.</h2><p>Our engineers shape the part and its mold together: CAD and mold flow analysis in SolidWorks, the right resin, and a 3D-printed prototype before you invest in a tool.</p></article>'+
     '<article class="step"><h2>Mold it, scientifically.</h2><p>Dried resin is melted and injected into a close-tolerance mold. Our three RJG-certified Master Molders set each process by scientific molding, from drying the resin to shipping.</p></article>'+
     '<article class="step"><h2>Measure, then release.</h2><p>The mold opens, and parts are checked on CMMs and vision systems in our quality lab, assembled under cleanroom conditions where needed, and shipped just in time.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="capabilities" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Capabilities</span><h2 class="d2 split"><span class="nw">In house,</span> <span class="nw"><em>end to end.</em></span></h2></div><p data-r>We run 24/7 across five shifts, in an air-conditioned plant with central chilled water. Engineering, tooling, assembly and inspection are all in house, so a part goes from concept to shipment under one roof.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="industries" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Industries</span><h2 class="d2 split"><span class="nw">Six industries,</span> <span class="nw"><em>one standard.</em></span></h2></div><p data-r>From medical devices molded in a cleanroom to parts for aircraft cabins, cars and kitchens, we work with almost every engineering resin, from polycarbonate and nylon to ABS, acetal and reinforced grades.</p></div>'+
   inds()+
  '</div></section>'+

  '<section class="sec light" id="quality" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality</span><h2 class="d2 split"><span class="nw">Zero tolerance</span> <span class="nw"><em>for defects.</em></span></h2></div><p data-r>Our quality team monitors production around the clock, with process control plans, FMEA, Six Sigma, advanced quality planning and FDA-compliant quality systems, and removes root causes at their source.</p></div>'+
   certs()+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Family owned,</span> <span class="nw"><em>Greensboro grown.</em></span></h2></div><p data-r>Founded in 2006 and family owned, we partner with Guilford County Schools on advanced manufacturing, and our non-profit Molding Kids For Success brings students from the classroom onto the factory floor.</p></div>'+
   team()+
   '<div class="ctnews" id="news"><span class="lab kick" data-r>In the news</span>'+news()+'</div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Medical, aerospace, automotive and more</span>'+
   '<h2 class="big split"><span class="nw">Have a part in mind?</span> <span class="nw"><em>Let’s mold it.</em></span></h2>'+
   '<p class="sub" data-r>Tell us about your part, its volumes and its standards, from first prototype to production in the cleanroom.</p>'+
   '<div class="act" data-r><a class="btn solid" href="tel:'+TEL+'">Call '+TELS+' '+ARR+'</a><a class="btn" href="#/capabilities">See our capabilities</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Plant</span><p data-r>Core Technology Molding Corp.<br>5670 Millstream Road<br>Whitsett, NC 27377</p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELS+'</a></p></div>'+
    '<div><span class="lab" data-r>Hours</span><p data-r>Production runs 24/7<br>across five shifts</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Plant</span>5670 Millstream Road<br>Whitsett, NC 27377</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/capabilities">Capabilities</a><br><a class="ul" href="#/industries">Industries</a><br><a class="ul" href="#/quality">Quality</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="tel:'+TEL+'">'+TELS+'</a></div>'+
   '<div class="c"><span class="lab">Certified</span>ISO 13485 · ISO 9001<br>IATF 16949 · ISO 14001</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 100" aria-hidden="true"><text x="450" y="80" text-anchor="middle" style="font-family:\'Exo 2\',system-ui,sans-serif;font-style:italic;font-weight:700;font-size:104px;letter-spacing:0"><tspan fill="#f3f7fb">Core Technology</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Core Technology Molding Corporation</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route. A typed or linked #/section hash scrolls to that section; nav clicks on #/capabilities,
   #/industries, #/quality or #/company (the nav items) opens that item's build-out page, as a nav click does (buildout.js) ================= */
var BOK={capabilities:1,industries:1,quality:1,company:1};
function boOpen(k){try{if(window.BuildOut&&BuildOut.open){BuildOut.open(k);return true}}catch(x){}return false}
var SECS={about:"about",capabilities:"capabilities",industries:"industries",quality:"quality",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Core Technology Molding — precision injection molding",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){try{history.replaceState(null,"","#/")}catch(x){}secGo(r.sec,true)},300)})()})();
