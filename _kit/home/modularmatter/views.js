/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function prodRows(){return '<ul class="pfr path">'+PRODUCTS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' on modularmatter.com">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Modular prosthesis systems<span class="nomob"> · Maryland</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A socket that grows</span><span class="l">and changes</span><span class="l"><em>with you.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Modular Matter is building a universally adjustable prosthesis socket from discrete, mass-producible modules: reconfigured to the shape of the limb, adjusted for everyday volume changes, for a secure, comfortable fit.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<span class="lab cap">Illustrative render · modular socket on pylon and foot</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our work</span>'+
   '<h2 class="txt" id="mani">A prosthesis attaches to the body through its socket, and rigid sockets cannot easily be adjusted, over time or even within a day. <b class="w0">Modular Matter builds the socket from reconfigurable modules instead.</b> <em>Mobility, strength, comfort and confidence.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 visit</span><p class="k">The fitting the modular socket is designed for, instead of several weeks of iterations</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">⅔</span><p class="k">Less fitting time, the reduction the NSF project sets out to reach</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$305K</span><p class="k">NSF SBIR Phase I award for the modular socket, August 2026</p></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">One socket, built <em>from modules.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Limb</span><span>Modules</span><span>Fit</span><span>Test</p></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The limb.</h2><p>Every residual limb has its own shape, and it changes: through the day with swelling, and over the years as a child grows.</p></article>'+
     '<article class="step"><h2>The modules.</h2><p>Instead of one rigid custom shell, the socket is assembled from discrete modules, sintered in preassembled sheets like mass-produced parts.</p></article>'+
     '<article class="step"><h2>The fit.</h2><p>The modules conform to the limb and adjust to short-term volume changes; for long-term changes they reconfigure, or rebuild with the same components.</p></article>'+
     '<article class="step"><h2>The test.</h2><p>Prototypes on a durable harness are mapped for maximum and minimum pressure and hotspots, under the loads and torque of daily use.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">Tailored comfort, <em>independence in every step.</em></h2></div><p data-r>The modular socket, and the services around it: personalised fitting, custom manufacturing, and the training to resize it yourself.</p></div>'+
   prodRows()+
   '<p class="sub-l lab pr" data-r>Funding and support</p>'+
   '<p class="inv" data-r>National Science Foundation <b>·</b> TEDCO <b>·</b> Defense Health Agency <b>·</b> U.S. Department of Defense <b>·</b> Maryland Industrial Partnerships</p>'+
   '<p class="ack" data-r>The modular socket is supported by the National Science Foundation under SBIR Phase I award 2528353, “Universally-Adjustable Modular Prosthesis Socket”. Modular Matter’s technology is patent-pending.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built by its inventor, <em>tested with UMD.</em></h2></div><p data-r>Modular Matter was founded by the inventor of the modular prosthesis, and works with University of Maryland researchers to refine and test the socket.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">A better fit, <em>in progress.</em></h2></div><p data-r>The latest on Modular Matter and the modular socket.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Patients, prosthetists and partners</span>'+
   '<h2 class="big split">Let’s build <em>a better fit.</em></h2>'+
   '<p class="sub" data-r>Learn more about the modular socket and how we can collaborate: write to Dr. Gair, founder and CEO.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Dr. Gair '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r><span class="bl">Monrovia,</span><span class="bl">Maryland</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Online</span><p data-r><a class="ul" href="'+WEB+'#contact" target="_blank" rel="noopener">modularmatter.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Monrovia,<br>Maryland</div>'+
   '<div class="c"><span class="lab">Supported by</span>NSF SBIR Phase I<br>Award 2528353</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Sora\',system-ui,sans-serif;font-weight:400;font-size:62px;letter-spacing:.01em">Modular Matter</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Modular Matter, Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",applications:"applications",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Modular Matter — the universally adjustable modular prosthesis socket",x:"Home"};
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
