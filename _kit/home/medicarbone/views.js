/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function progRows(){return '<ul class="pfr path">'+PROG.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab st2">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function team(){return '<ul class="crew">'+TEAM.map(function(p){
  return '<li><div class="crew-ph"><img src="'+p.img+'" alt="'+esc(p.name)+'" width="440" height="550" loading="lazy" onerror="this.style.display=\'none\'"></div><h3>'+esc(p.name)+'</h3><span class="lab crew-r">'+esc(p.title)+'</span><p>'+esc(p.sum)+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Orthopaedic medical devices<span class="nomob"> · Tucson, Arizona</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Fracture fixation</span><span class="l">that forms</span><span class="l"><em>inside the bone.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>A carbon-fibre-reinforced sleeve, filled with a resin that is light-cured in place: a minimally invasive, patient-specific alternative to the metal intramedullary nail.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology" data-to="story">How it works '+ARR+'</a><a class="btn" href="#/programme" data-to="programme">The programme</a></div></div>'+
   '<span class="lab cap">Carbon-fibre intramedullary sleeve · render</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>A new approach to IM nailing</span>'+
   '<h2 class="txt" id="mani">Metal intramedullary nails are rigid, often fit the bone poorly and can lead to infection and revision surgery. <b class="w0">MediCarbone’s implant takes the shape of the cavity it fills, and is removed by a minimally invasive procedure once the bone has healed.</b></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">10 min</span><span class="k">For the resin to photocure inside the sleeve once the light is applied</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.25M</span><span class="k">NSF SBIR Phase II award, August 2026, after a Phase I in 2023</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2019</span><span class="k">Founded by University of Arizona professors, backed by UAVenture Capital</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">One implant, <em>made in the bone.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Cavity</span><span>Sleeve</span><span>Cure</span><span>Removal</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The cavity.</h2><p>Long-bone fractures are fixed through the intramedullary cavity, the canal at the centre of the bone, which is reamed to receive the implant.</p></article>'+
     '<article class="step"><h2>The sleeve.</h2><p>A flexible two-layer sleeve goes in: a porous carbon fabric that conforms to the cavity, inside a polymer layer that keeps resin from leaking into the canal.</p></article>'+
     '<article class="step"><h2>The cure.</h2><p>Resin is injected into the sleeve and a diffusive light guide carries light along it. Within ten minutes it cures into a solid device, tailored to that bone.</p></article>'+
     '<article class="step"><h2>The removal.</h2><p>After healing, the cured polymer is broken up and removed through a minimally invasive procedure.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="programme" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programme</span><h2 class="d2 split">From prototype <em>to 510(k).</em></h2></div><p data-r>Phase I built the first prototype for large-animal studies and refined insertion in a sheep cadaver. The NSF Phase II programme, through 2028, takes the device toward regulatory submission.</p></div>'+
   progRows()+
   '<p class="ack" data-r>MediCarbone uses FDA-cleared polymer components and works with NAMSA on the regulatory pathway, evidence requirements and preclinical and clinical testing plans. Supported by the National Science Foundation under SBIR awards 2322411 and 2600002.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Orthopaedic engineers <em>and chemists.</em></h2></div><p data-r>Founded by University of Arizona professors with deep experience in orthopaedic engineering and carbon-fibre reinforcement, with an advisory board of surgeons and medical entrepreneurs.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From Phase I <em>to Phase II.</em></h2></div><p data-r>Funding, results and patents from MediCarbone.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, partners and investors</span>'+
   '<h2 class="big split">Be on the front lines of <em>fracture repair.</em></h2>'+
   '<p class="sub" data-r>Request the executive summary and slide deck, see the technology in action, or discuss investment and partnership with the MediCarbone team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Tucson, Arizona</span><p data-r><span class="bl">2820 E Fort Lowell Rd</span><span class="bl">Tucson, AZ 85716</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+15203235057">520-323-5057</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Tucson</span>2820 E Fort Lowell Rd<br>Tucson, AZ 85716</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programme">Programme</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Follow</span><a class="ul" href="https://www.linkedin.com/company/medicarbone-inc/" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+15203235057">520-323-5057</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Jost\',system-ui,sans-serif;font-weight:300;font-size:64px;letter-spacing:.02em">MediCarbone</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 MediCarbone, Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",programme:"programme",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"MediCarbone — minimally invasive, patient-specific intramedullary fracture fixation",x:"Home"};
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
