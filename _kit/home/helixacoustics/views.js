/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function prodRows(){return '<ul class="pfr path hx-app">'+PRODUCTS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Focused ultrasound DNA extraction<span class="nomob"> · Roanoke, Virginia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">DNA, released</span><span class="l"><em>by sound.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Helix Acoustics is developing a benchtop focused ultrasound system that breaks down tough tissue and releases high-quality DNA in one acoustic step, without harsh chemicals.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/applications">Applications</a></div></div>'+
   '<span class="lab cap">Focused transducer array and sample tube · illustrative render</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">DNA sample preparation is the slow, manual first step of every genetic test, and tough tissue is where it fails. <b class="w0">Helix Acoustics replaces multi-step chemical workflows with precisely controlled acoustic cavitation.</b> <em>Less time, better DNA.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$305K</span><span class="k">NSF STTR Phase I award for the benchtop transducer array, 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 step</span><span class="k">Tissue homogenization and cell lysis at the same time, in one integrated system</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2020</span><span class="k">FUSE first described in Methods in Ecology and Evolution</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Focused sound, <em>one point, one step.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sample</span><span>Array</span><span>Cloud</span><span>DNA</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The sample.</h2><p>Tough tissue such as plant material or dense tissue sits in a tube of buffer. Conventional preparation needs lengthy chemical processing, and often fails.</p></article>'+
     '<article class="step"><h2>The array.</h2><p>A concave array of ultrasound transducers focuses high-pressure pulses onto a single point inside the sample.</p></article>'+
     '<article class="step"><h2>The cloud.</h2><p>At the focus the pulses raise a dense cavitation “bubble cloud” that mechanically disintegrates the tissue into acellular debris.</p></article>'+
     '<article class="step"><h2>The DNA.</h2><p>Homogenization and cell lysis happen together, releasing high-quality DNA for amplification and sequencing, without harsh chemicals.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">Wherever genetic testing <em>starts with a sample.</em></h2></div><p data-r>Sample preparation is a critical, universal step in genetic testing, from diagnostics to agriculture, food safety and forensics.</p></div>'+
   prodRows()+
   '<p class="ack" data-r>This material is based upon work supported by the U.S. National Science Foundation under STTR Phase I award 2537879, “The Development of a Benchtop Focused Ultrasound Transducer Array for Rapid DNA Extraction”.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Years of FUSE research, <em>now on the bench.</em></h2></div><p data-r>The team behind the NSF award brings doctoral research on focused ultrasound extraction and long experience in cavitation and therapeutic ultrasound.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the lab <em>to the bench.</em></h2></div><p data-r>Milestones in focused ultrasound extraction and Helix Acoustics.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Laboratories, partners and investors</span>'+
   '<h2 class="big split">Rapid DNA extraction, <em>by sound.</em></h2>'+
   '<p class="sub" data-r>To learn more about the benchtop system or to talk about working together, write to the Helix Acoustics team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email the team '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Roanoke, Virginia</span><p data-r><span class="bl">709 S. Jefferson St., Suite 3</span><span class="bl">Roanoke, VA 24016</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Supported by</span><p data-r><a class="ul" href="'+NSF+'" target="_blank" rel="noopener">U.S. National Science Foundation, STTR Phase I</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Roanoke</span>709 S. Jefferson St., Suite 3<br>Roanoke, VA 24016</div>'+
   '<div class="c"><span class="lab">Supported by</span>U.S. National Science Foundation<br>STTR Phase I</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Hanken Grotesk\',system-ui,sans-serif;font-weight:400;font-size:62px;letter-spacing:.01em">Helix Acoustics</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Helix Acoustics</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",applications:"applications",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Helix Acoustics — focused ultrasound for rapid DNA extraction",x:"Home"};
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
