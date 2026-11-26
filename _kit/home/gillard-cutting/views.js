/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function types(){return '<div class="swtw"><ol class="swtl">'+TYPES.map(function(t,i){
  return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(t[0])+'</h3><p>'+esc(t[1])+'</p></li>'}).join("")+'</ol>'+
  '<aside class="swsp" data-r><span class="lab kick">Servo-Torq® rotary cutters · as standard</span><dl>'+
   '<div><dt class="lab">Cutting rate</dt><dd>Automatic, stepless, 1 to 2,000 cuts a minute</dd></div>'+
   '<div><dt class="lab">Capacity</dt><dd>Up to 300 mm outer diameter, six levels of cutting power</dd></div>'+
   '<div><dt class="lab">Drives</dt><dd>Multi-axis digital AC servo technology from Lenze</dd></div>'+
   '<div><dt class="lab">Controls</dt><dd>Siemens colour touch screens: 4.3″, 7″ or 9″</dd></div>'+
  '</dl><p>Blade lubrication as standard, and remote support through an integrated VPN router, with ProfiNet options.</p></aside></div>'}
/* extrusion sectors (gillardcutting.com > Applications) */
function apps(){var C=[
  ["Plastics","Flexible tube, hose and profile; rigid pipe; PE foam; corrugated and concertina pipe; cuffed tube.",'<circle cx="28" cy="28" r="20"/><circle class="a" cx="28" cy="28" r="12"/>'],
  ["Rubber","Reinforced tube and hose; cured and uncured profiles; sponge and foam seals; silicone rubber.",'<circle cx="28" cy="28" r="20"/><circle class="a" cx="28" cy="28" r="15" stroke-dasharray="3 4"/><circle cx="28" cy="28" r="9"/>'],
  ["Medical","Medical tubing in all materials; cuffed respirator tubing; bubble, bump and taper tube; off-line cutting in clean rooms.",'<path d="M4 24H18C22 14 34 14 38 24H52M4 32H18C22 42 34 42 38 32H52"/><path class="a" d="M4 28H52"/>'],
  ["Food","Flat and toasted breads; croutons and breadsticks; bouillon, soup and stock cubes; snacks; dog chews and dental sticks.",'<rect x="6" y="20" width="14" height="14"/><rect x="24" y="20" width="14" height="14"/><rect class="a" x="42" y="20" width="10" height="14"/>'],
  ["Automotive","Heat shrink; multi-layer fuel pipes; brake tubes; PTFE brake hoses; radiator tubing; coolant and turbocharger hoses.",'<path d="M4 20L10 16L16 20L22 16L28 20L34 16L40 20L46 16L52 20M4 36L10 40L16 36L22 40L28 36L34 40L40 36L46 40L52 36"/><path class="a" d="M4 28H52"/>'],
  ["Consumer","Crayons, pencils and erasers; pen barrels and refills; drinking straws; cotton-bud sticks; soap bars; glue sticks.",'<path d="M8 22H42L50 28L42 34H8Z"/><path class="a" d="M42 22V34"/>'],
  ["Industrial","Graphite sections and profiles; aluminium and ceramics.",'<path d="M28 6L47 17V39L28 50L9 39V17Z"/><path class="a" d="M28 18L38 24V34L28 40L18 34V24Z"/>'],
  ["Mastic","Epoxy putty sticks and bars; reusable adhesives and play dough; sealants, pastes and gels.",'<rect x="6" y="20" width="44" height="16"/><path class="a" d="M20 20V36M34 20V36"/>']];
  return '<div class="caps c4 apg">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
/* free cutting trials (gillardcutting.com > Extrusion cutting challenge) */
function trials(){var S=[
  ["Send us your samples","Some lengths of the material you want to cut, with your cut length, accuracy and cut rate."],
  ["Realistic cutting trials","Run in our fully equipped test laboratory in Tewkesbury, and the results analysed."],
  ["A free report","Precise recommendations on blade shape, thickness and speed."],
  ["The right cutter","Our advice on which cutter is best for your application."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Extrusion cutting<span class="nomob"> · Tewkesbury, England</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Every millimetre</span> <span class="l"><em class="nw">counts, every cut.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Since 1968, Gillard has designed and built extrusion cutters, caterpillar haul-offs and downstream equipment in England, for plastics, rubber, medical, food and mastic extrusion around the world.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/machines">Our machines '+ARR+'</a><a class="btn" href="#/trials">Free cutting trials</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Committed to extrusion cutting since 1968</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Innovation, combined</span> <span class="nw">with decades of experience,</span> <span class="nw">has given us one of the most</span> <span class="nw">technically advanced ranges</span> <span class="nw">of extrusion cutters.</span> <em><span class="nw">Custom made,</span> <span class="nw tail">at a standard cost.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1968</span><p class="k">founded in Maidenhead; at home in Tewkesbury, Gloucestershire, since 1990</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2,000</span><p class="k">cuts a minute, set steplessly from one, on every Servo-Torq® rotary cutter</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">300 mm</span><p class="k">outer diameter: the largest cutting capacity in the Servo-Torq® range</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Downstream of the extruder</span><h2 class="d3"><span class="nw">From the die</span> <em class="nw">to the bin.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Pull</span><span>Guide</span><span>Cut</span><span>Collect</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">A caterpillar</span> <span class="nw">takes the line.</span></h2><p>Twin belts, each driven by its own direct-drive AC servo motor, grip the extrusion and pull it steadily at line speed.</p></article>'+
     '<article class="step"><h2><span class="nw">Through the</span> <span class="nw">guide bush.</span></h2><p>The extrusion feeds into the cutter through a guide bush sized to the product, from medical tubing up to 300 mm outer diameter.</p></article>'+
     '<article class="step"><h2><span class="nw">One sweep,</span> <span class="nw">one clean cut.</span></h2><p>The Servo-Torq® fly knife slices across the bush face under servo control, at any rate from 1 to 2,000 cuts a minute, without stopping the line.</p></article>'+
     '<article class="step"><h2><span class="nw">Collected, length</span> <span class="nw">after length.</span></h2><p>A conveyor supports the extrusion out of the cutter and carries each cut length away, separating any scrap from good product.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="machines" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Machines</span><h2 class="d2 split"><span class="nw">Cutters, pullers</span> <em class="nw">and the whole line.</em></h2></div><p data-r>Every machine is custom made to order, to your specification and your budget, with solid engineering and the best available components for a lifespan measured in decades.</p></div>'+
   types()+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split"><span class="nw">From silicone hose</span> <em class="nw">to croutons.</em></h2></div><p data-r>The vast majority of extruded products can be cut with our machines. Choose by your extrusion sector.</p></div>'+
   apps()+
  '</div></section>'+

  '<section class="sec dark" id="trials" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Free cutting trials</span><h2 class="d2 split"><span class="nw">Accept the extrusion</span> <em class="nw">cutting challenge.</em></h2></div><p data-r>Not sure your product will cut cleanly? Send it to us. The trial and the report are free.</p></div>'+
   trials()+
   '<div class="qual"><span class="lab kick" data-r>Designed for</span><p class="cr" data-r><span>Cut length accuracy</span><span>Higher cut rates</span><span>Maximum uptime</span><span>A quick pay-back</span><span>Durability as standard</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Made in Tewkesbury,</span> <em class="nw">since 1968.</em></h2></div><p data-r>Gillard &amp; Co. was founded in Maidenhead in 1968, incorporated as Peter Gillard &amp; Co. Limited in 1971, and has built its machines in Tewkesbury since 1990.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Director</span><ul>'+
     '<li data-r><span class="nm">Christopher Gillard</span><span class="lab rl">Director and company secretary</span></li>'+
    '</ul></div>'+
    '<div class="engpol"><span class="lab kick" data-r>Milestones</span><ul class="hst">'+
     [["1968","Gillard & Co. founded in Maidenhead, making guillotine cutters and pullers."],["1985","The first Vac-U-Torq® rotary cutter is sold; turnover grows almost 400% by the end of the decade."],["1990","The move to a larger, modern factory in Tewkesbury, Gloucestershire."],["1996","The first Servo-Torq® clutch-less servo rotary cutter is built."],["2001","The first cutters for extruded food products are sold."],["2018","Our 50th year, and multi-lane food cutting systems for multinational food processors."],["2025","The Servo-Torq® Eco-Cut™ combi cutter is launched."]].map(function(h){return '<li data-r><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+
    '</ul></div></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">New cutters,</span> <em class="nw">new markets.</em></h2></div><p data-r>Our latest machines and shows. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Your extrusion,</span> <em class="nw">cut to length.</em></h2>'+
   '<p class="sub" data-r>Tell us what you extrude, the cut length, accuracy and rate you need, and we will recommend the machine, or send us samples for a free cutting trial.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email new machine sales '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Factory</span><p data-r><span>Gillard Cutting Technology</span><br><span>Alexandra Way</span><br><span>Ashchurch Business Centre</span><br><span>Tewkesbury GL20 8NB, England</span></p></div>'+
    '<div><span class="lab" data-r>New machines</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Telephone '+TELT+'</span></p></div>'+
    '<div><span class="lab" data-r>Spares and support</span><p data-r><a class="ul" href="mailto:'+SPARES+'">'+SPARES+'</a><br><a class="ul" href="mailto:'+TECH+'">'+TECH+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Gillard Cutting Technology, Alexandra Way, Ashchurch Business Centre, Tewkesbury GL20 8NB, England</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/machines">Machines</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/trials">Cutting trials</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Since 1968</span>Servo-Torq® fly-knife rotary cutters, caterpillar haul-offs and downstream equipment</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:800;font-style:italic;font-size:46px;letter-spacing:.08em">GILLARD CUTTING TECHNOLOGY</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Peter Gillard &amp; Co. Limited · Registered in England No. 1034752</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",machines:"machines",applications:"applications",trials:"trials",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Gillard Cutting Technology — Extrusion Cutters and Downstream Equipment, Tewkesbury",x:"Home"};
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
