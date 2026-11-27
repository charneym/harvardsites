/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* technology and services (tecportoptics.com > home, Our Technology, Milestones) */
var TECH=[
 ["High Density Plasma","Since 2005","Tecport’s HD plasma source gives the highest-performance coatings at the most consistent rate, and made non-absorbing 3 to 5 µm infrared oxide coatings possible."],
 ["Shift-free filters","Colour that holds","Shift-free colour filter coatings: more vivid, accurate colour control for lighting, and better instruments for solar observation."],
 ["Retrofit and upgrade","Plug and play","A flexible automation control system for any existing coating system, built from off-the-shelf parts by industrial leaders with worldwide service support."]];
function tech(){return '<div class="caps nwc tst">'+TECH.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
var USES=["Ophthalmic lenses","3D glass","Night vision","Solar","DLP projector windows","Infrared optics","Polymer optics","Mirrors and filters"];
function uses(){return '<div class="bk cnd"><span class="lab kick" data-r>Coatings for</span><p class="cr" data-r>'+USES.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
var SERV=[
 ["Process development","New coating processes and technology that give customers a technical and competitive advantage, or improve the processes and systems they already run."],
 ["Service and support","Preventive maintenance and repair, training and technology support, and a growing worldwide network of qualified technicians and engineers."],
 ["Delivery and commissioning","Lead times that bring a coating system in faster than any other manufacturer, and trouble-free commissioning on site."]];
function serv(){return '<div class="caps nwc tst">'+SERV.map(function(c){return '<div class="cap"><span class="lab" data-r>Service</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
/* milestones (tecportoptics.com > Our Milestones, Press Releases) and activity */
var NEWS=[
 ["Jun 2025","Exhibitor at LASER World of Photonics 2025, Messe München","LASER 2025","https://exhibitors.world-of-photonics.com/exhibitor-portal/2025/list-of-exhibitors/"],
 ["2016","Licensing agreement with Middle Tennessee State University to commercialize its thin-film biosensor","Press release",TW+"/press-releases/"],
 ["2005","High Density Plasma Source introduced: non-absorbing 3 to 5 µm infrared coatings","Milestones",TW+"/our-accomplishments/"],
 ["2004","The modular Symphony PVD series is launched","Milestones",TW+"/our-accomplishments/"],
 ["2003","With a Fortune 500 partner, coatings for DLP windows: an estimated 70% of the world’s are coated on Tecport systems","Milestones",TW+"/our-accomplishments/"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1605" height="1271" alt="Tecport Symphony S16 thin film box coater with its orange chamber door and control rack" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Thin film deposition<span class="nomob"> · Orlando, Florida</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Coating systems,</span> <span class="l">built to serve again.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Since 1997 we design, manufacture, sell and service thin film vacuum deposition systems for customers across the globe, customised to the specifications of each industry.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/systems">Our systems '+ARR+'</a><a class="btn" href="#/contact">Start a project</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Tecport Optics</span>'+
   '<h2 class="txt" id="mani"><span class="nw">From a two-person</span> <span class="nw">operation to coating</span> <span class="nw">systems at work</span> <span class="nw">around the world.</span> <em><span class="nw">Our motto:</span> <span class="nw">we serve to serve again.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1997</span><p class="k">founded in Florida to build custom systems with guaranteed process results</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">70%</span><p class="k">of the world’s DLP windows are estimated to be coated on Tecport systems</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2.2 m</span><p class="k">batch systems, sole-sourced by Lockheed Martin for the F-35 programme</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside a Symphony coater</span><h2 class="d3"><span class="nw">Layer by layer,</span> <span class="nw">under vacuum.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Vacuum</span><span>Source</span><span>Rotation</span><span>Control</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">First,</span> <span class="nw">the vacuum.</span></h2><p>The chamber is pumped down to high vacuum; Symphony Opus handles the pumps, cryogenic pump regeneration and Polycold, and checks the leak rate.</p></article>'+
     '<article class="step"><h2><span class="nw">Material</span> <span class="nw">into vapour.</span></h2><p>Evaporation sources turn the coating material into vapour, and the High Density Plasma source packs the film for the highest-performance, most consistent coatings.</p></article>'+
     '<article class="step"><h2><span class="nw">Substrates</span> <span class="nw">in rotation.</span></h2><p>The lenses, windows or parts turn above the sources, on planetary rotation in the ROCK, so every surface takes an even layer.</p></article>'+
     '<article class="step"><h2><span class="nw">Every layer,</span> <span class="nw">on recipe.</span></h2><p>Thickness is measured as it grows, and recipes built in blocks run the stack from first layer to last, with trending, data analysis and remote control.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="systems" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Systems</span><h2 class="d2 split"><span class="nw">Coaters, controls</span> <span class="nw">and cold plasma.</span></h2></div><p data-r>The most reliable, efficient and flexible coating systems we can build, customised to the technical specifications of each industry.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">Research in</span> <span class="nw">every coating.</span></h2></div><p data-r>Continuous research in advanced material science and automation keeps pace with a fast-changing market, from ophthalmic and 3D glass to night vision and solar.</p></div>'+
   tech()+uses()+
  '</div></section>'+

  '<section class="sec dark" id="services" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split"><span class="nw">We serve</span> <span class="nw">to serve again.</span></h2></div><p data-r>Our relentless drive for customer service: from the first process trial to the last service call, wherever you are.</p></div>'+
   serv()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split"><span class="nw">The people</span> <span class="nw">behind the systems.</span></h2></div><p data-r>A 20+ person team in Orlando, Florida, with worldwide recognition, working with world-class instrument suppliers.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="history" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>History</span><h2 class="d2 split"><span class="nw">From 1997</span> <span class="nw">to today.</span></h2></div><p data-r>From DLP windows and infrared coatings to cold plasma on plastics, and now at the trade fairs of the photonics world.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Would you like to</span> <span class="nw">start a project?</span></h2>'+
   '<p class="sub" data-r>We love our customers: call us or visit during normal business hours, or send us your coating requirements.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Tecport Optics</span><br><span>6457 Hazeltine National Dr</span><br><span>Suite 140, Orlando</span><br><span>FL 32822</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Systems, retrofits and service</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><span>Fax (407) 855-1213</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>6457 Hazeltine National Dr<br>Orlando, FL 32822</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">Email us</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/systems">Systems</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/history">History</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Systems</span>Symphony Precision<br>Symphony Opus<br>ROCK and Polaris</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">Tecport</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Tecport Optics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",systems:"systems",technology:"technology",services:"services",team:"team",history:"history",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Tecport Optics — Thin film vacuum deposition systems, Orlando, Florida",x:"Home"};
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
