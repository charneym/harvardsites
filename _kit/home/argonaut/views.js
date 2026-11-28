/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
/* four uses (argonautscientific.com > Home, LF-MISG, Cyclone; Prof. Olfert's research page; USAspending order descriptions) */
function caps(){var C=[
  ["Research","<span class=\"nw\">Aerosol</span> <span class=\"nw\">research</span>","A steady stream of soot particles for laboratory aerosol studies.",'<circle cx="18" cy="34" r="6"/><circle cx="34" cy="22" r="8"/><circle class="a" cx="40" cy="40" r="5"/>'],
  ["Calibration","<span class=\"nw\">Instrument</span> <span class=\"nw\">calibration</span>","A known, stable particle source to check aerosol instruments against.",'<path d="M8 44H48"/><path class="a" d="M12 44Q28 4 44 44"/>'],
  ["Aviation","<span class=\"nw\">Aviation</span> <span class=\"nw\">emission testing</span>","Jet A1 in the liquid-fuel MISG, and a cyclone built to SAE ARP 6320B.",'<path d="M6 30L50 22L30 36L22 48L20 36Z"/><path class="a" d="M6 30L20 36"/>'],
  ["Fire safety","<span class=\"nw\">Smoke detector</span> <span class=\"nw\">testing</span>","NASA ordered one for laboratory smoke detector testing.",'<circle cx="28" cy="20" r="12"/><path class="a" d="M16 44Q22 36 28 44T40 44"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* how the burner works (argonautscientific.com > Liquid-Fuel MISG description and features) */
function svc(){var S=[
  ["Inverted flame","An inverted flame geometry gives a stable soot concentration."],
  ["High concentrations","Up to about 10⁷ particles per cm³, and up to about 100 mg/m³, depending on flows."],
  ["Gas or liquid fuel","Jet A1, kerosene or n-dodecane, in an inert carrier such as nitrogen or a reactive one such as ethylene or propane."],
  ["Tunable","Change the fuel, carrier gas or air flow rate to change the concentration and size of the soot."],
  ["Standard fittings","Swagelok connections: 1/4\" for fuel and air, 3/4\" for the exhaust."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["2013","Argonaut is founded to provide consulting services to the aerosol instrumentation industry."],
  ["2017","Argonaut launches the miniature inverted burner for soot generation."],
  ["Today","The original MISG, the liquid-fuel MISG and the 1 micron cyclone."]];
  return '<ol class="hst">'+H.map(function(h){return '<li data-r><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="931" height="866" alt="Argonaut Miniature Inverted Soot Generator with its flame lit" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Aerosol instrumentation<span class="nomob"> · Edmonton, Alberta</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Steady soot,</span> <span class="l nw">on demand.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Argonaut Scientific makes the Miniature Inverted Soot Generator: a small inverted flame that produces a steady stream of soot particles for aerosol research and instrument calibration.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/instruments">Our instruments '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>What we do</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Calibrating an aerosol</span> <span class="nw">instrument takes</span> <span class="nw">particles you</span> <span class="nw">can count on.</span> <em><span class="nw">We make them</span> <span class="nw">in a miniature</span> <span class="nw">inverted flame.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2017</span><p class="k">the year Argonaut launched its miniature inverted burner for soot generation</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100 mg/m³</span><p class="k">of soot from a liquid-fuel MISG, depending on flows</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 µm</span><p class="k">the cut-off of our cyclone at 25 L/min, for SAE ARP 6320B testing</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside a soot generator</span><h2 class="d3"><span class="nw">Fuel and air in,</span> <em class="nw">steady soot out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fuel</span><span>Flame</span><span>Soot</span><span>Steady</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Fuel and air</span> <span class="nw">flow in.</span></h2><p>A gaseous fuel, or in the liquid-fuel MISG Jet A1, kerosene or n-dodecane vaporised into a carrier gas, meets a metered air flow of 7 to 10 SLPM.</p></article>'+
     '<article class="step"><h2><span class="nw">The flame</span> <span class="nw">burns inverted.</span></h2><p>The burner\'s inverted flame geometry is what gives a stable soot concentration.</p></article>'+
     '<article class="step"><h2><span class="nw">Soot leaves</span> <span class="nw">the burner.</span></h2><p>The exhaust carries a high concentration of soot: up to about 10⁷ particles per cm³ from the liquid-fuel MISG, depending on flows.</p></article>'+
     '<article class="step"><h2><span class="nw">Set the flows,</span> <span class="nw">and it holds.</span></h2><p>Fuel, carrier gas and air flow rates set the concentration and size of the soot, for a steady stream to research or calibrate with.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="instruments" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Instruments</span><h2 class="d2 split"><span class="nw">Soot generators</span> <em class="nw">and a cyclone.</em></h2></div><p data-r>Argonaut Scientific Corporation manufactures and distributes aerosol instrumentation. Contact us for a quote.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split"><span class="nw">Wherever soot</span> <em class="nw">has to be measured.</em></h2></div><p data-r>From aerosol laboratories to aviation emission and smoke detector testing.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Ordered by</span><p class="cr" data-r><span>NASA</span><span>US Department of Defense</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">Stable, dense</span> <em class="nw">and tunable.</em></h2></div><p data-r>The liquid-fuel MISG integrates a Bronkhorst Controlled Evaporator and Mixer, which atomises the liquid fuel and mixes it with the carrier gas.</p></div>'+
   svc()+
   '<div class="trn" data-r><span class="lab kick">Published</span><p>The miniature inverted-flame burner is described in Aerosol Science and Technology.</p><a class="ul" href="https://doi.org/10.1080/02786826.2018.1556774" target="_blank" rel="noopener">Read the paper</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Aerosol scientists</span> <em class="nw">in Edmonton.</em></h2></div><p data-r>Argonaut began in 2013 as a consultancy to the aerosol instrumentation industry, and now builds its own instruments.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Founder</span><ul>'+
     '<li data-r><span class="nm">Jason S. Olfert</span><span class="lab rl">Founder</span></li>'+
    '</ul><p class="bio" data-r>Professor of Mechanical Engineering at the University of Alberta, he has worked on the development of the miniature inverted soot generator, the centrifugal particle mass analyzer and the aerodynamic aerosol classifier.</p></div>'+
    '<div class="engpol"><span class="lab kick" data-r>Milestones</span>'+hist()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">In the lab,</span> <em class="nw">in the papers.</em></h2></div><p data-r>Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us what</span> <em class="nw">you need to measure.</em></h2>'+
   '<p class="sub" data-r>Fuel, flows and the concentration you need: write to us and we will send a quote.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Request a quote '+ARR+'</a><a class="btn" href="#/instruments">See the instruments</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Company</span><p data-r><span>Argonaut Scientific Corporation</span><br><span>Edmonton, Alberta, Canada</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Company</span>Argonaut Scientific Corporation, Edmonton, Alberta, Canada</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/instruments">Instruments</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Aerosol instrumentation</span>Soot generators and cyclones for aerosol research, calibration and emission testing.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:400;font-size:40px;letter-spacing:.3em">ARGONAUT</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Argonaut Scientific Corporation</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",instruments:"instruments",applications:"applications",technology:"technology",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Argonaut Scientific — soot generators and aerosol instrumentation",x:"Home"};
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
