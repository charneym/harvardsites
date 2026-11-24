/* ================= VIEWS (home only: Technology / Products / Instruments / Team / News open build-out pages; Contact scrolls) ================= */
function lines(){return '<ul class="pfr">'+LINES.map(function(c){return '<li><span class="lab tg">'+esc(c[1])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[2])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Learn more</a></li>'}).join("")+'</ul>'}
function bands(){return '<div class="ubands"><span class="lab kick">From the XUV to the mid-IR</span><ol>'+BANDS.map(function(b,i){return '<li style="--i:'+i+'"><span class="bn">'+esc(b[0])+'</span><span class="br">'+esc(b[1])+'</span></li>'}).join("")+'</ol></div>'}
function insts(){return '<ul class="uin">'+INST.map(function(c){return '<li><a href="https://www.ultrafast-innovations.com/our-products/instruments.html" target="_blank" rel="noopener"><h3>'+esc(c[0])+''+'</h3><p>'+esc(c[1])+(c[2]?'<span class="nw">New</span>':'')+'</p></a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Ultrafast optics<span class="nomob"> · Garching (Munich)</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Optics for</span><span class="l">the <em>shortest</em></span><span class="l">pulses of light.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>UltraFast Innovations makes custom-made optics, broadband coherent sources, diagnostic devices and engineering solutions in ultrafast science, from the infrared to the XUV.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">See the products '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
   '<p class="lab hcap" data-r>Rendered: a one-inch dispersive mirror</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About UFI</span>'+
   '<h2 class="txt" id="mani">A 2009 spin-off from <b class="w0">LMU Munich and the Max Planck Institute of Quantum Optics,</b> with roots in the first chirped mirrors of the 1990s. <em>More than components: we deliver solutions.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">80 as</span><span class="k">Some of the shortest light pulses ever created, achieved with this experience</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3 fs</span><span class="k">Laser pulses of three femtoseconds, among the innovations it made possible</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">ISO 4</span><span class="k">Class 100 cleanroom housing the HELIOS and SYRUS coating machines</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Close to research</span><p data-r>Deeply integrated in ongoing research, we turn the latest results into products tested in real-world applications.</p></div>'+
    '<div><span class="lab kick" data-r>Femto to atto</span><p data-r>Generation and diagnostics of the shortest pulses on the market, in the femtosecond (UV-VIS-IR) and attosecond (XUV/soft X-ray) range.</p></div>'+
    '<div><span class="lab kick" data-r>Integral consultation</span><p data-r>From standard to tailor-made, we help each customer find the solution that best suits their exact specifications.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The chirped mirror</span><h2 class="d3">Every colour, <em>back in step.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Chirp</span><span>Layers</span><span>Depth</span><span>Pulse</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A stretched pulse.</h2><p>Passing through glass, crystals or air, an ultrashort pulse spreads out in time: its red end runs ahead and its blue end lags behind.</p></article>'+
     '<article class="step"><h2>A stack of thin layers.</h2><p>A dispersive mirror is a multilayer coating of alternating high- and low-index materials, with layer thicknesses that change through the stack.</p></article>'+
     '<article class="step"><h2>Each colour, its own depth.</h2><p>Shorter wavelengths reflect near the surface; longer ones travel deeper before they turn back, so the leading red is delayed the most.</p></article>'+
     '<article class="step"><h2>A shorter pulse.</h2><p>The colours leave the mirror together, and the pulse is compressed. Chirped mirrors helped make three-femtosecond pulses possible.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">From the UV-VIS-IR <em>to the XUV.</em></h2></div><p data-r>Dielectric optics for laser applications, metallic multilayer structures for XUV/soft X-ray, broadband coherent sources and the devices that characterise them, all designed and coated in Garching.</p></div>'+
   lines()+bands()+
  '</div></section>'+

  '<section class="sec dark" id="instruments" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Instruments</span><h2 class="d2 split">Fifteen instruments <em>for ultrafast light.</em></h2></div><p data-r>Systems for the generation, characterisation and manipulation of ultrafast light, and for the characterisation and quality control of optical components.</p></div>'+
   insts()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded by <em>attosecond pioneers.</em></h2></div><p data-r>UltraFast Innovations grew out of the groups of Professors Ferenc Krausz and Ulf Kleineberg, and reaches industry worldwide through its distributors.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Light, <em>and time.</em></h2></div><p data-r>New coatings, new partners and the conferences where you can meet our team.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Laboratories and laser makers</span>'+
   '<h2 class="big split">Tell us what <em>your pulse needs.</em></h2>'+
   '<p class="sub" data-r>Questions about an optic, an instrument or a customised beamline, quotes and consultation: the UFI team answers directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email UFI '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>UltraFast Innovations GmbH<br>Dieselstr. 5<br>85748 Garching (Munich)</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Office</span><p data-r>Am Coulombwall 1<br>85748 Garching (Munich)<br>Germany</p></div>'+
    '<div><span class="lab" data-r>Email and telephone</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+TELH+'">'+TEL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Dieselstr. 5<br>85748 Garching (Munich), Germany</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/instruments">Instruments</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Elsewhere</span><a class="ul" href="https://www.linkedin.com/company/ultrafast-innovations/" target="_blank" rel="noopener">LinkedIn</a><br><a class="ul" href="https://www.ultrafast-innovations.com/fileadmin/user_upload/UserData/Files/UFI_Product_Catalogue.pdf" target="_blank" rel="noopener">Product catalogue</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Sora\',Arial,sans-serif;font-weight:400;font-size:60px;letter-spacing:.2em">ULTRAFAST</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 UltraFast Innovations GmbH</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",products:"products",instruments:"instruments",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"UltraFast Innovations — Dispersive optics and ultrafast instruments, Garching (Munich)",x:"Home"};
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
