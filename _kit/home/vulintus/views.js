/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function prodRows(){return '<ul class="pfr path">'+PRODUCTS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' on vulintus.com">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Automated preclinical behavior systems<span class="nomob"> · Lafayette, Colorado</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Accelerating</span><span class="l">the pace of</span><span class="l">biomedical</span><span class="l"><em>research.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Vulintus designs and builds automated behavior systems for preclinical research, and finds new ways to cut the cost of research tools for investigators working toward the public good.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our systems '+ARR+'</a><a class="btn" href="#/technology">How MotoTrak works</a></div></div>'+
   '<span class="lab cap">Pellet dispenser redesign · Vulintus render</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why Vulintus</span>'+
   '<h2 class="txt" id="mani">Standard motor tests for rodents were slow, manually scored reaching tasks. <b class="w0">Being engineers, Vulintus set out to automate them.</b> <em>Then labs asked for more.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2010</span><span class="k">Founded at the University of Texas at Dallas, during preclinical studies of VNS therapy for stroke</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><span class="k">Automated behavior systems, from forelimb function to home-cage monitoring</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><span class="k">NIH institutes, NINDS, NIMH and NIA, have funded Vulintus systems through SBIR and STTR grants</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Forelimb function, <em>measured every trial.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Booth</span><span>Module</span><span>Trial</span><span>Data</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The booth.</h2><p>MotoTrak is a complete, modular system: the rat trains and tests in a clear behavior booth, reaching through a slot in its front wall.</p></article>'+
     '<article class="step"><h2>The module.</h2><p>Outside the slot sits an interchangeable behavior module, such as a pull handle on a force sensor, to isolate strength, speed, pronation and supination.</p></article>'+
     '<article class="step"><h2>The trial.</h2><p>Software supervises every trial and records the movement continuously, pre-trial activity included, then adaptively raises the target as the animal learns.</p></article>'+
     '<article class="step"><h2>The data.</h2><p>Hundreds of data-rich trials a day, analysed in real time, with offline measures of impulse, timing and fatigue. No manual scoring.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Behavior tests, <em>automated.</em></h2></div><p data-r>A growing catalog of preclinical behavior systems, with interfaces that feel familiar to researchers who use phones and connected devices every day.</p></div>'+
   prodRows()+
   '<div class="mfig"><figure data-r><img src="mototrak.webp" alt="A MotoTrak system: a clear behavior booth with a rat, a pull module on a black base, a pellet dispenser and the Vulintus controller" width="1600" height="1200" loading="lazy"><figcaption class="lab">MotoTrak system, booth, pull module, pellet dispenser and controller · Vulintus</figcaption></figure>'+
   '<div class="mtx"><p class="mq" data-r>MotoTrak systems are used in labs across the United States and Europe, measuring lasting motor deficits in rat models of stroke, traumatic brain injury, Parkinson’s disease, spinal cord and peripheral nerve injury.</p>'+
   '<p class="ack" data-r>Development of Vulintus systems has been supported by Small Business Innovation Research and Small Business Technology Transfer grants from the National Institute of Neurological Disorders and Stroke, the National Institute of Mental Health and the National Institute on Aging.</p></div></div>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineer-neuroscientists <em>who build.</em></h2></div><p data-r>A small team of engineers and neuroscientists who love to design and build in the name of advancing biomedical research.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the bench <em>and the lab.</em></h2></div><p data-r>Research using Vulintus systems, and what the team is working on.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers and partners</span>'+
   '<h2 class="big split">Got a great idea <em>you want to test?</em></h2>'+
   '<p class="sub" data-r>If you’re not quite sure how to build it, we’re here to help. For products, technical support or collaboration, write or call the Vulintus team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r><span class="bl">75 Waneka Pkwy</span><span class="bl">Lafayette, CO 80026</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+17202306644">'+TEL+'</a></p><p class="hrs" data-r>Monday to Friday, 8:30 am to 5:00 pm Mountain time</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>75 Waneka Pkwy<br>Lafayette, CO 80026</div>'+
   '<div class="c"><span class="lab">Phone</span><a class="ul" href="tel:+17202306644">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Inter Tight\',system-ui,sans-serif;font-weight:500;font-size:58px;letter-spacing:.02em">Vulintus</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Vulintus, Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Vulintus — automated preclinical behavior systems for biomedical research",x:"Home"};
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
