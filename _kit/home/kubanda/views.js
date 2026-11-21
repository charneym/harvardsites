/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function prodRows(){return '<ul class="pfr path">'+PRODUCTS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' on kubandacryotherapy.com">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Veterinary cryotherapy<span class="nomob"> · Baltimore, Maryland</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Tumor treatment</span><span class="l">for pets, without</span><span class="l"><em>the scalpel.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Kubanda offers the first minimally invasive, point-of-care treatment for lumps, bumps and tumors in pets: a cryoprobe freezes and kills the unwanted tissue, often without general anesthesia.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Meet CryoDuo '+ARR+'</a><a class="btn" href="#/technology">How it works</a></div></div>'+
   '<span class="lab cap">CryoDuo cryotherapy system · Kubanda</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why wait?</span>'+
   '<h2 class="txt" id="mani">Cutting-edge treatment should not be limited by income or access. <b class="w0">Kubanda’s cryotherapy treats lumps, bumps and tumors at the point of care,</b> <em>at half the cost of surgery.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1st</span><span class="k">And only Fear Free™ Preferred cryotherapy product in veterinary medicine</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.7M</span><span class="k">Seed round closed in 2025</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$5M+</span><span class="k">Raised to date, including over $2M in research awards</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Freeze the tumor, <em>spare the pet.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Mass</span><span>Probe</span><span>Freeze</span><span>Heal</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The mass.</h2><p>A lump, bump or tumor below the skin’s surface: benign or malignant, pea-sized to egg-sized, the kind of mass that usually means surgery.</p></article>'+
     '<article class="step"><h2>The probe.</h2><p>At the point of care, the cryoprobe is inserted into the tumor, often without general anesthesia, while the pet’s skin is protected against the cold.</p></article>'+
     '<article class="step"><h2>The freeze.</h2><p>The gas-control module runs freezing cycles through the probe tip. Ice forms inside the cells of the mass, and the intracellular ice crystals kill them.</p></article>'+
     '<article class="step"><h2>The healing.</h2><p>The frozen tissue dies back and the tumor shrinks, with less pain and faster healing than surgery, chemo or radiation, and no blood on the vet’s hands.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">One system, <em>topical to intratumoral.</em></h2></div><p data-r>CryoDuo treats superficial and subcutaneous masses with a single tool and interchangeable probes. It is commercially available and in use in clinics across the country.</p></div>'+
   prodRows()+
   '<blockquote class="pq" data-r><p>“After the cryo procedure, I was impressed: no blood on my hands! That wouldn’t happen with surgery.”</p><cite class="lab">Dr. Kraitchman, DVM</cite></blockquote>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Biomedical engineers <em>from Johns Hopkins.</em></h2></div><p data-r>The dedicated team behind Kubanda’s pet healthcare solutions, in Baltimore.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the clinic <em>and the lab.</em></h2></div><p data-r>Launches, research and free education for veterinary teams.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Veterinarians and pet parents</span>'+
   '<h2 class="big split">Why wait? <em>See CryoDuo in action.</em></h2>'+
   '<p class="sub" data-r>Book a demo for your practice, or find a vet near you who offers Kubanda Cryotherapy.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Baltimore, Maryland</span><p data-r><span class="bl">3600 Clipper Mill Rd, Suite 310</span><span class="bl">Baltimore, MD 21211</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+16674012796">667.401.2796</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p><p data-r><a class="ul" href="mailto:'+HELP+'">'+HELP+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Baltimore</span>3600 Clipper Mill Rd, Suite 310<br>Baltimore, MD 21211</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Phone</span><a class="ul" href="tel:+16674012796">667.401.2796</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Inter Tight\',system-ui,sans-serif;font-weight:500;font-size:60px;letter-spacing:-.01em">Kubanda Cryotherapy</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Kubanda Cryotherapy</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Kubanda Cryotherapy — minimally invasive tumor treatment for pets",x:"Home"};
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
