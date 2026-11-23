/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function prodRows(){return '<ul class="pfr path">'+PRODUCTS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' on neurolux.org">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Wireless optogenetics<span class="nomob"> · Northfield, Illinois</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Discovery tools</span><span class="l">for neuroscience,</span><span class="l"><em>without the tether.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>NeuroLux makes fully implantable, wireless and battery-free devices that deliver light deep in the brain or spinal cord of freely moving mice and rats, and record their physiology.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our devices '+ARR+'</a><a class="btn" href="#/technology">How it works</a></div></div>'+
   '<span class="lab cap">The NeuroLux wireless system hardware · NeuroLux photograph</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why NeuroLux</span>'+
   '<h2 class="txt" id="mani">Fiber optic optogenetics ties every animal to a cable. <b class="w0">NeuroLux replaced the cable with soft, wireless implants</b> <em>smaller than a dime.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">30 mg</span><span class="k">The weight of an implant, with no external antennas, batteries, fiber optic cables or head mounts</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2015</span><span class="k">Founded to bring wireless optogenetics from the Rogers, Gereau and Bruchas labs to neuroscientists everywhere</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">+7</span><span class="k">Additional experiments run in parallel with the modular system, each module controlling its own enclosure</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Light in the brain, <em>power from the cage.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Implant</span><span>Power</span><span>Control</span><span>Light</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The implant.</h2><p>A soft, flexible circuit smaller than a U.S. dime: a magnetic loop antenna, a tiny electronics island, and a thin probe that carries a µLED to its tip.</p></article>'+
     '<article class="step"><h2>The power.</h2><p>An antenna around the cage, driven by the PDC Box, couples power to the implant’s loop by magnetic near field, the technology behind NFC payments. No battery.</p></article>'+
     '<article class="step"><h2>The control.</h2><p>The software sets frequency, pulse duration and burst mode, or follows a standard TTL trigger, and the Autotuner matches the antenna to the cage.</p></article>'+
     '<article class="step"><h2>The light.</h2><p>The µLED at the probe tip delivers light directly into the target brain region, while the animal moves, feeds and socializes freely.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">A complete system, <em>ready to run.</em></h2></div><p data-r>A NeuroLux package arrives with everything needed for wireless optogenetic experiments, and the team crafts custom devices for specific experimental designs.</p></div>'+
   prodRows()+
   '<p class="ack" data-r>Development of NeuroLux devices has been supported by Small Business Innovation Research and Technology Transfer grants from the National Institute of Mental Health, the National Institute of Neurological Disorders and Stroke, the National Institute of Biomedical Imaging and Bioengineering, and the National Heart, Lung, and Blood Institute.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Neuroscience and engineering, <em>one bench.</em></h2></div><p data-r>The technology began in 2011 as a collaboration between the research groups of John Rogers, Robert Gereau and Michael Bruchas, and was first shown live at the Society for Neuroscience meeting in 2015.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the booth <em>and the journals.</em></h2></div><p data-r>Where to meet the team, and research built on NeuroLux wireless technology.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers and partners</span>'+
   '<h2 class="big split">Plan your next experiment <em>without the cable.</em></h2>'+
   '<p class="sub" data-r>For devices, quotes, custom designs or surgical advice, write or call the NeuroLux team in Northfield.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r><span class="bl">191 Waukegan Rd, Suite 104</span><span class="bl">Northfield, IL 60093</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+12243076589">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>191 Waukegan Rd, Suite 104<br>Northfield, IL 60093</div>'+
   '<div class="c"><span class="lab">Phone</span><a class="ul" href="tel:+12243076589">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Inter Tight\',system-ui,sans-serif;font-weight:500;font-size:58px;letter-spacing:.02em">NeuroLux</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 NeuroLux, Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"NeuroLux — wireless, battery-free optogenetic implants for neuroscience",x:"Home"};
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
