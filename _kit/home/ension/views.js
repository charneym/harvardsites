/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+CAPS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function prodRows(){return '<ul class="pfr path">'+PROGRAMS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' source">Source '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Medical device design and development<span class="nomob"> · Butler, Pennsylvania</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Life support,</span><span class="l">designed for</span><span class="l"><em>children.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Ension designs and develops medical technologies through to clinical translation. Its bearingless pediatric cardiopulmonary assist system is built for neonates and children, not scaled down from an adult pump.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/programs">Our programs '+ARR+'</a><a class="btn" href="#/technology">How the pump works</a></div></div>'+
   '<span class="lab cap">Illustrative render · bearingless motor stator and levitated impeller</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why Ension</span>'+
   '<h2 class="txt" id="mani">Many medical products for children are scaled-down versions of adult products. <b class="w0">Ension develops life support designed specifically for neonatal and pediatric patients,</b> <em>under FDA design controls from the first sketch.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1998</span><span class="k">First NIH SBIR award, for a pulsatile pediatric blood pump</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5–15 kg</span><span class="k">Neonates and infants the bearingless motor is being extended to support</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.03M</span><span class="k">NIH NHLBI SBIR Phase II funding for 2026, awarded in May</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">A pump with <em>nothing to wear out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Stator</span><span>Impeller</span><span>Levitation</span><span>Circuit</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The stator.</h2><p>A reusable motor stator in the system controller, a ring of copper-wound teeth, supplies the power and the control signals.</p></article>'+
     '<article class="step"><h2>The impeller.</h2><p>The single-use pump head clips onto the stator. Its impeller carries an iron rotor rim, so no costly rare-earth magnets go into the disposable.</p></article>'+
     '<article class="step"><h2>Levitation.</h2><p>The stator’s field both suspends and turns the impeller. No bearings, no shaft, no blood seal: none of the wear and heat that contribute to hemolysis and thrombosis.</p></article>'+
     '<article class="step"><h2>The circuit.</h2><p>Blood enters through the inlet and leaves at the outlet; with an oxygenator in the circuit, oxygen is added and carbon dioxide removed before the blood returns to the patient.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="programs" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">From the motor <em>to the blood it touches.</em></h2></div><p data-r>Ension’s programmes cover the whole blood-contacting device: the pump and its motor, the surfaces, and the tests that show how blood responds to them.</p></div>'+
   prodRows()+
   '<p class="ack" data-r>Research reported here is supported by the National Heart, Lung, and Blood Institute of the National Institutes of Health under award R44HL178134. Earlier work on pCAS was funded through the NHLBI Pediatric Circulatory Support Program and the PumpKIN programme.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineers and scientists <em>in Butler.</em></h2></div><p data-r>A small team that has carried pediatric devices from feasibility through animal studies, with NIH support, for more than two decades.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards <em>and publications.</em></h2></div><p data-r>Recent funding and peer-reviewed work from Ension.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Life support, <em>sized for children.</em></h2>'+
   '<p class="sub" data-r>For pCAS, blood compatibility testing or a device development partnership, contact the Ension team in Butler, Pennsylvania.</p>'+
   '<div class="act" data-r><a class="btn solid" href="https://www.google.com/maps/search/?api=1&amp;query=508+Pittsburgh+Rd+Butler+PA+16002" target="_blank" rel="noopener">Find us in Butler '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span class="bl">Ension, Inc.</span><span class="bl">508 Pittsburgh Road</span><span class="bl">Butler, PA 16002</span></p></div>'+
    '<div><span class="lab" data-r>Web</span><p data-r><a class="ul" href="'+WEB+'" target="_blank" rel="noopener">ension.com</a></p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r><a class="ul" href="'+RPT+'" target="_blank" rel="noopener">NIH RePORTER</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>508 Pittsburgh Road<br>Butler, PA 16002</div>'+
   '<div class="c"><span class="lab">Focus</span>Pediatric life support<br>Blood compatibility</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Web</span><a class="ul" href="'+WEB+'" target="_blank" rel="noopener">ension.com</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 300 60" aria-hidden="true"><text x="150" y="50" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-weight:400;font-size:62px;letter-spacing:.02em">Ension</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Ension, Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",programs:"programs",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Ension — medical device design and development, bearingless pediatric life support",x:"Home"};
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
