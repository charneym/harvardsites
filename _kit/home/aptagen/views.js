/* ================= VIEWS (home only: Technology / Services / Team / News open build-out pages via _kit/lib/buildout.js; Contact and
   in-page CTAs scroll). Hero: a real DNA aptamer bound to its protein target (PDB 4I7Y, rendered in render.py) right of a
   type-led headline (their own registered line, "Forget Antibodies. Use Aptamers!"), with three facts from their aptamer-vs-
   antibody banner as the bottom band; then bone and dark grounds alternate: about (bone), the selection story (dark), the
   target range as a size scale (bone), services and technologies as a grid (dark), team (bone, masthead), news (dark),
   contact (bone). Content is never hidden at rest: reveals only enhance (see the failsafe in site.js). ================= */
function scale(){return '<div class="tscale"><div class="ts-axis" aria-hidden="true"><span class="lab">Smaller</span><i></i><span class="lab">Larger</span></div><ol class="ts-row">'+TARGETS.map(function(c,i){
  return '<li class="ts" data-r><span class="ts-dot" aria-hidden="true" style="--k:'+(i/(TARGETS.length-1)).toFixed(2)+'"></span><span class="ts-m">'+esc(c[0])+(c[1]?'<small>'+esc(c[1])+'</small>':'')+'</span>'+(c[2]!==c[0]?'<h3>'+esc(c[2])+'</h3>':'')+'<p>'+esc(c[3])+'</p></li>'}).join("")+'</ol></div>'}
function svcs(){return '<div class="svg6">'+SVC.map(function(c,i){
  return '<article class="svc" data-r><span class="lab sv-n">'+String(i+1).padStart(2,"0")+'</span><h3>'+esc(c[0])+'</h3><span class="sv-k">'+esc(c[1])+'</span><p>'+esc(c[2])+'</p><a class="lab ul lk2" href="'+c[3]+'" target="_blank" rel="noopener">'+esc(c[4])+' '+ARR+'</a></article>'}).join("")+'</div>'}
function team(){return '<section class="mh"><div class="mh-group"><p class="mh-label" data-r>Leadership and lab</p><ul class="mh-list">'+TEAM.map(function(p){
  return '<li data-r><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span><span></span></div></li>'}).join("")+'</ul></div></section>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
var ICO={small:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M14 36V19a6 6 0 0 1 12 0v17"/><path d="M14 23h12M14 28h12M14 33h12"/><circle cx="32" cy="9" r="3.2"/><path d="M8 9h7"/><path d="M11.5 5.5v7"/></svg>',
 cost:'<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="7" y="8" width="26" height="24"/><path d="M7 15h26"/><path d="M12 21h4M12 26h9M24 21h4"/></svg>',
 same:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M9 34V19a5 5 0 0 1 10 0v15"/><path d="M21 34V19a5 5 0 0 1 10 0v15"/><path d="M9 25h10M9 30h10M21 25h10M21 30h10"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>Aptamer development<span class="nomob"> · Jacobus, Pennsylvania</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Forget antibodies.</span> <span class="l"><em>Use aptamers.</em></span></h1>'+
    '<i class="hrule" aria-hidden="true" data-r></i>'+
    '<div class="hx-foot"><p class="s" data-r>DNA-based synthetic antibodies with high affinity and specificity, against targets from small molecules to protein biomarkers, cells and tissues. You own 100% of the IP.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/services">Our services '+ARR+'</a><a class="btn" href="#/contact">Start a project</a></div></div>'+
   '</div>'+
   '<ul class="pil" aria-label="Aptamers compared with antibodies">'+
    '<li class="p1" data-r><span class="pic">'+ICO.small+'</span><div><span class="lab">Small ligand</span><p>Under 30 kD, against about 150 kD for an antibody.</p></div></li>'+
    '<li class="p2" data-r><span class="pic">'+ICO.cost+'</span><div><span class="lab">Lower cost to produce</span><p>Once the sequence is known, it is made on an oligo synthesizer.</p></div></li>'+
    '<li class="p3" data-r><span class="pic">'+ICO.same+'</span><div><span class="lab">No batch variation</span><p>The same synthetic molecule, lot after lot.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="about" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>About Aptagen</span>'+
   '<h2 class="txt" id="mani">We develop DNA-based antibodies called aptamers: target-recognition elements with high affinity and specificity, <em>for diagnostic, therapeutic and <span class="nw">bio-industrial applications.</span></em></h2></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+</span><p class="k">Years of experience in developing aptamers</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2006</span><p class="k">Operations began in Jacobus, Pennsylvania, two years after Aptagen was formed</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100%</span><p class="k">Of the rights to the aptamers we develop belong to the client</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How an aptamer is found</span><h2 class="d3"><span class="nw">From a library</span> <span class="nw"><em>to your aptamer.</em></span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Select</span><span>Enrich</span><span>Deliver</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Select against your target.</h2><p>A library of single-stranded DNA sequences meets your target. The few that fold to fit it bind; the rest are washed away.</p></article>'+
     '<article class="step"><h2>Enrich, round after round.</h2><p>The binders are amplified and selected again under tighter conditions, so each round leaves a purer pool of high-affinity, high-specificity sequences.</p></article>'+
     '<article class="step"><h2>Deliver the aptamer.</h2><p>The winning sequence is identified and characterised. From then on it is made on an oligo synthesizer, with no batch-to-batch variation, and you own 100% of it.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">Aptamers against</span> <span class="nw"><em>virtually any target.</em></span></h2></div><p data-r>Aptamers are single-stranded DNA, RNA or peptide molecules that bind their target with high affinity and specificity. They are easy to label with reporters, enzymes or fluorescent tags, and can be chemically modified for stability or coupling.</p></div>'+
   scale()+
  '</div></section>'+

  '<section class="sec dark" id="services" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split"><span class="nw">We guarantee</span> <span class="nw"><em>our services.</em></span></h2></div><p data-r>Taking on challenging projects and delivering positive results: contract R&amp;D with a price-match guarantee, our own aptamer technologies, and kits and data for labs that want to work with aptamers themselves.</p></div>'+
   svcs()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split"><span class="nw">Big science</span> <span class="nw"><em>in a small-town lab.</em></span></h2></div><p data-r>Aptagen grew from a one-man operation, with the support of interns, graduate students and post-docs, into a tight-knit team serving academic labs and BigPharma worldwide.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">From the lab</span> <span class="nw"><em>to MEDICA.</em></span></h2></div><p data-r>Our AptaReport™ newsletter, features and awards, and the research we publish.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers, diagnostics and pharma</span>'+
   '<h2 class="big split"><span class="nw">Have a difficult target?</span> <span class="nw"><em>Try an aptamer.</em></span></h2>'+
   '<p class="sub" data-r>Tell us about your target and your milestones, and we will send a quote on cost and time.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to Aptagen '+ARR+'</a><a class="btn" href="#/services">See our services</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Location</span><p data-r>Aptagen, LLC<br>250 North Main Street<br>Jacobus, PA 17407</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+17172782436">717-APTAGEN</a><br>(717-278-2436)</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Location</span>Aptagen, LLC<br>250 North Main Street<br>Jacobus, PA 17407</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+17172782436">717-APTAGEN</a></div>'+
   '<div class="c"><span class="lab">Focus</span>DNA aptamers for diagnostic,<br>therapeutic and bio-industrial use</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 96" aria-hidden="true"><text x="320" y="78" text-anchor="middle" style="font-family:\'Questrial\',system-ui,sans-serif;font-weight:400;font-size:104px;letter-spacing:.01em"><tspan fill="#f4f6fb">Aptagen</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Aptagen, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route. #/contact and #/about scroll to their section; a typed or linked #/technology,
   #/services, #/team or #/news (the nav items) opens that item's build-out page, as a nav click does (buildout.js) ================= */
var BOK={technology:1,services:1,team:1,news:1};
function boOpen(k){try{if(window.BuildOut&&BuildOut.open){BuildOut.open(k);return true}}catch(x){}return false}
var SECS={about:"about",technology:"technology",services:"services",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Aptagen — forget antibodies, use aptamers",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home")return;e.stopImmediatePropagation();
  if(r.sec&&BOK[r.sec]){try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/";boOpen(r.sec);return}
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){try{history.replaceState(null,"","#/")}catch(x){}if(BOK[r.sec]&&boOpen(r.sec))return;secGo(r.sec,true)},300)})()})();
