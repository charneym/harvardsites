/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function partRows(){return '<div class="plat">'+PARTS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function powderRows(){return '<ul class="pfr path">'+POWDERS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' on metal-powder.co.uk">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function techGrid(){return '<div class="atg">'+TECH.map(function(t,i){return '<div class="atc"><span class="lab ati">0'+(i+1)+'</span><h3>'+esc(t[0])+'</h3><p>'+esc(t[1])+'</p>'+(t[2]?'<p class="atf"><b>'+esc(t[2])+'</b><span class="lab">'+esc(t[3])+'</span></p>':'')+'</div>'}).join("")+'</div>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Atomising technology<span class="nomob"> · Sheffield, England</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Molten metal,</span><span class="l">made into</span><span class="l"><em>powder.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Atomising Systems provides the technology for powder production through atomising, used around the world. Whether you need atomised powders or atomising equipment, we can help.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/powders">Our powders '+ARR+'</a><a class="btn" href="#/equipment">Atomising equipment</a></div></div>'+
   '<span class="lab cap">A pour at Atomising Systems · Sheffield</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Since 1992</span>'+
   '<h2 class="txt" id="mani">Atomising breaks a stream of molten metal into fine droplets that freeze as powder. <b class="w0">ASL designs the atomisers, and runs its own in Sheffield.</b> <em>Powders and plants, from one team.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">140+</span><p class="k">Atomising plants supplied worldwide</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3,500 t</span><p class="k">Metal powders produced each year by the powder division</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">400+</span><p class="k">Registrants from 16 countries on ASL’s course on atomisation</p></div>'+
   '</div>'+
   partRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">From a stream of melt <em>to a fine powder.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Melt</span><span>Stream</span><span>Jets</span><span>Powder</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The melt.</h2><p>Metal is melted, from a 30 kg batch for trial lots to a 750 kg melt on ASL’s large water atomisers. Its atomisers take ladles from 1 kg to 100 t.</p></article>'+
     '<article class="step"><h2>The stream.</h2><p>The melt pours as one stream into the atomiser: typically 10 to 50 kg a minute for gas, and up to around 1,000 kg a minute for water.</p></article>'+
     '<article class="step"><h2>The jets.</h2><p>Jets of gas or water break the stream into droplets. ASL’s Hot Gas system adds energy for finer powder; its Anti-Satellite system keeps the particles free-flowing.</p></article>'+
     '<article class="step"><h2>The powder.</h2><p>The droplets freeze as they fall: spherical, low-oxygen particles from gas, irregular ones from water. Sieving, classification and laser diffraction set the size.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="powders" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Powder division</span><h2 class="d2 split">Stainless steel powders, <em>water and gas atomised.</em></h2></div><p data-r>Large enough for volume, flexible enough for special chemistries and particle sizes: from test batches to production campaigns, for MIM, AM, PM, filtration, thermal spray and brazing.</p></div>'+
   powderRows()+
  '</div></section>'+

  '<section class="sec dark" id="equipment" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Atomising equipment</span><h2 class="d2 split">The atomiser, <em>sized to the job.</em></h2></div><p data-r>A wide range of atomisation technologies: gas, water, centrifugal, ultrasonic and pressure-nozzle. Annual outputs run from under 1 t to over 100,000 t a year.</p></div>'+
   techGrid()+
   '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A family-based company <em>in Darnall, Sheffield.</em></h2></div><p data-r>Established in 1992, with a highly skilled workforce of more than 70 and a solid commitment to research and development.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Courses and <em>technical papers.</em></h2></div><p data-r>ASL’s two-day course on atomisation for metal powders, and its papers on the process.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Powders, plants and refining</span>'+
   '<h2 class="big split">Tell us the powder <em>you need to make.</em></h2>'+
   '<p class="sub" data-r>For atomised powders, atomising equipment or a refining application, write to Atomising Systems in Sheffield.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Sheffield, England</span><p data-r><span class="bl">371 Coleford Road</span><span class="bl">Sheffield S9 5NF</span></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+441142626200">+44 114 262 6200</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Sheffield</span>371 Coleford Road<br>Sheffield S9 5NF, England</div>'+
   '<div class="c"><span class="lab">Company</span>Atomising Systems Ltd<br>Company no. 2731401</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/powders">Powders</a><br><a class="ul" href="#/equipment">Equipment</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+441142626200">+44 114 262 6200</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Poppins\',system-ui,sans-serif;font-weight:600;font-size:52px;letter-spacing:.01em">Atomising Systems</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Atomising Systems Ltd</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",powders:"powders",equipment:"equipment",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Atomising Systems — atomising equipment and atomised metal powders, Sheffield",x:"Home"};
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
