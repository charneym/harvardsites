/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Scanner","Eve Clear Scan™ e750","SmartBreast’s name for the Discovery NM750b molecular breast imaging system, acquired from GE Healthcare in 2021 with its designs, manufacturing tools, patents and installed-base service business.",'<path d="M8 12h40v9H8z"/><path d="M8 35h40v9H8z"/><path class="a" d="M14 28c8-3 20-3 28 0"/><circle class="f" cx="33" cy="27.6" r="2.4"/>'],
  ["Scanner and biopsy","Eve Clear Scan™ e680","The Dilon 6800: an FDA-cleared, compact, mobile MBI scanner, also FDA-cleared for MBI-guided biopsy with GammaLoc®, installed at 176 sites in more than 10 countries when SmartBreast acquired it.",'<path d="M12 10h32v10H12z"/><path d="M18 20v26M38 20v26M12 46h32"/><path class="a" d="M28 24v14"/><circle class="f" cx="28" cy="40" r="2.4"/>'],
  ["Software","The Eve Suite™","SmartBreast’s mission is one cohesive suite for breast radiologists, surgeons and oncologists: AI software and clinical decision support alongside the dense-breast imaging scanners.",'<path d="M10 10h36v36H10z"/><path d="M10 22h36M10 34h36M22 10v36M34 10v36"/><path class="a" d="M30 26l8 8"/><circle class="f" cx="28" cy="28" r="3"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Why screening, why now</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From the project summary of SmartBreast’s NCI SBIR Phase II award 1R44CA315543-01, “Commercial-Ready Molecular Breast Imaging (MBI) for Biopsy Guidance”, 2026.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Molecular breast imaging<span class="nomob"> · Dense breasts</span> · Sherman Oaks, CA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">See the cancer</span><span class="l">dense tissue</span><span class="l"><em>hides.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>SmartBreast’s Eve Clear Scan™ molecular breast imaging finds early-stage cancer by the activity of its cells, not the shape of the tissue around it, so it sees clearly in dense breasts, where mammography so often fails.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How MBI works '+ARR+'</a><a class="btn" href="#/products">The Eve Suite™</a></div></div>'+
   '<span class="lab hcap" data-r>Eve Clear Scan™ MBI image · SmartBreast</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The dense breast problem</span>'+
   '<h2 class="txt" id="mani">About half of American women have dense breasts, and dense tissue hides cancer: mammography fails up to 70% of the time to find it while it is small, early and curable. SmartBreast exists to help women with dense breasts <em>defeat breast cancer.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">94%</span><span class="k">Of all cancers in dense breasts detected by SmartBreast™ MBI, against 30% for mammograms</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">217</span><span class="k">MBI installation sites worldwide, most of them in North America and the Asia-Pacific region</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$946K</span><span class="k">NCI SBIR Phase II award, September 2026, for commercial-ready MBI with biopsy guidance</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How MBI works</span><h2 class="d3">Look for activity, <em>not shadows.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Tracer</span><span>Position</span><span>Detect</span><span>See</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A tracer finds the active cells.</h2><p>Technetium-99m sestamibi is injected into a vein in the arm. It binds to mitochondria, which crowd fast-growing cancer cells, and pools where tumours grow new blood vessels.</p></article>'+
     '<article class="step"><h2>Held gently, never crushed.</h2><p>Seated, the patient rests one breast on a gamma camera, and a second camera lowers onto it with about a third of the force of a mammogram or 3D mammogram.</p></article>'+
     '<article class="step"><h2>The cameras count gamma photons.</h2><p>For a few minutes the cameras record where the tracer is. In cadmium zinc telluride detectors, each photon becomes an electric signal directly, giving its location and energy.</p></article>'+
     '<article class="step"><h2>Density no longer hides it.</h2><p>Because the image shows cellular activity, it is not affected by breast density: the cancer stands out clearly, often long before anatomic changes show on a mammogram or MRI.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">One suite for the <em>dense breast.</em></h2></div><p data-r>Founded in May 2019 to become the first dense-breast management company, SmartBreast acquired the molecular breast imaging businesses of GE Healthcare and Dilon Technologies and rebuilt them as the Eve Clear Scan™ line.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="programmes" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Development</span><h2 class="d2 split">Rebuilt for <em>screening.</em></h2></div><p data-r>SmartBreast’s NCI-funded work rethinks MBI for supplemental screening in dense breasts: higher patient throughput, a much lower dose, and biopsy guidance for the lesions only MBI can see.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Physicists, surgeons <em>and radiologists.</em></h2></div><p data-r>An international group of medical imaging scientists, breast surgeons and radiologists, led by the people who built some of the first molecular breast imaging companies.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Acquisitions <em>and awards.</em></h2></div><p data-r>The latest from SmartBreast.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Sales, service and partnerships</span>'+
   '<h2 class="big split">Talk to <em>SmartBreast.</em></h2>'+
   '<p class="sub" data-r>Breast imaging centres, physicians, researchers and partners: SmartBreast would be glad to hear from you about Eve Clear Scan™ molecular breast imaging.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email SmartBreast '+ARR+'</a><a class="btn" href="#/technology">How MBI works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>14930 Ventura Blvd, Ste 325<br>Sherman Oaks, CA 91403</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+17245843266">+1 724 584 3266</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Sherman Oaks, CA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Eve Clear Scan™</span>Molecular breast imaging<br>217 sites worldwide</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 62" aria-hidden="true"><text x="326" y="52" text-anchor="middle" style="font-family:\'Jost\',Arial,sans-serif;font-weight:400;font-size:64px;letter-spacing:.18em">SMARTBREAST</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 SmartBreast Corporation</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",products:"products",programmes:"programmes",development:"programmes",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"SmartBreast — Molecular breast imaging for dense breasts, Sherman Oaks, CA",x:"Home"};
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
