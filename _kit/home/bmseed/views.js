/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function prodRows(){return '<ul class="pfr path">'+PRODUCTS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' on bmseed.com">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function labs(){return '<p class="inv" data-r>'+LABS.map(function(n,i){return (i?'<b aria-hidden="true">·</b>':'')+'<span>'+esc(n)+'</span>'}).join("")+'</p>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Stretchable multielectrode arrays<span class="nomob"> · Mesa, Arizona</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><em>In vitro</em> tools</span><span class="l">with true</span><span class="l"><em>in vivo</em> relevance.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>BMSEED bridges the gap between in vitro models and human physiology, integrating biomechanics, electrophysiology and imaging in one platform. Its electrodes stretch with the tissue.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">The platform '+ARR+'</a><a class="btn" href="#/technology">How it works</a></div></div>'+
   '<span class="lab cap">BMSEED stretchable multielectrode array (sMEA)</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Pre-clinical research suffers from a mismatch between rigid in vitro models and complex human biology. <b class="w0">BMSEED simulates the mechanical and electrical environment of living tissue, on one stretchable array.</b> <em>Better pre-clinical tools lead to better clinical results.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">50%</span><span class="k">Maximum strain applied to cells or tissue on a stretchable array, with the electrodes stretching too</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3-in-1</span><span class="k">Stretch, record and image, independently or simultaneously, in the MEASSuRE system</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$700K</span><span class="k">NIH NINDS SBIR Phase II funding for the organoid array, awarded September 2026</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Electrodes that <em>stretch with the tissue.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Array</span><span>Tissue</span><span>Stretch</span><span>Record</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The array.</h2><p>Microelectrodes are built into a soft, elastically stretchable silicone substrate: a multielectrode array that can bend and stretch without breaking.</p></article>'+
     '<article class="step"><h2>The tissue.</h2><p>Cells, brain slices or organoids grow directly on the electrodes, from neurons and astrocytes to hiPSC-derived cardiomyocytes.</p></article>'+
     '<article class="step"><h2>The stretch.</h2><p>The substrate is stretched, by up to 50% strain, to apply physiological or pathological forces. The cells, and the electrodes under them, stretch together.</p></article>'+
     '<article class="step"><h2>The record.</h2><p>Because the electrodes survive the stretch, the same device records before and after injury, while a microscope images the cells from above.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">One platform, <em>from stretch to spike.</em></h2></div><p data-r>The MEASSuRE system and the arrays it runs on, from single-well sMEAs to 3D pockets for organoids.</p></div>'+
   prodRows()+
   '<blockquote class="pq" data-r><p>“The most valuable thing is that we can record from cells multiple times… injure and record on the same device.”</p><cite class="lab">M. K. Dwyer, M.S. · Columbia University</cite></blockquote>'+
   '<p class="ack" data-r>BMSEED holds US patents on soft and stretchable microelectrode arrays with a 3D pocket and microfluidic channel, and on a peripheral nerve interface device, and an exclusive licence to Princeton University’s stretchable and elastic interconnects (US7491892B2). Research reported here is supported by the National Institute of Neurological Disorders and Stroke of the National Institutes of Health under award R44NS124469.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">From the lab <em>to the bench.</em></h2></div><p data-r>BioMedical Sustainable Elastic Electronic Devices was founded to commercialise stretchable microelectrode array technology for biomedical research.</p></div>'+
   '<div class="fdr"><span class="lab fl" data-r>Founder</span><div class="fdr-b"><h3 class="fn" data-r>Oliver Graudejus, PhD</h3><p class="fr" data-r>Founder · Principal investigator</p><p class="fs" data-r>Founded BMSEED to commercialise his stretchable microelectrode array technology, and leads its NIH-funded programmes. Adjunct faculty at Arizona State University; PhD in chemistry, Justus Liebig University Giessen.</p></div></div>'+
   '<div class="labs"><span class="lab kick" data-r>Used and published by researchers at</span>'+labs()+'</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Patents, prizes <em>and Phase II.</em></h2></div><p data-r>The latest from BMSEED.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers, partners and investors</span>'+
   '<h2 class="big split">Bring the mechanics <em>back into the dish.</em></h2>'+
   '<p class="sub" data-r>For a quote, a collaboration or a demonstration of MEASSuRE, write to the BMSEED team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Mesa, Arizona</span><p data-r><span class="bl">LaunchPoint Accelerator</span><span class="bl">245 W 2nd St, Suite 51</span><span class="bl">Mesa, AZ 85201</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+16095329744">+1 (609) 532 9744</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Mesa</span>245 W 2nd St, Suite 51<br>Mesa, AZ 85201</div>'+
   '<div class="c"><span class="lab">Phone</span><a class="ul" href="tel:+16095329744">+1 (609) 532 9744</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Jost\',system-ui,sans-serif;font-weight:300;font-size:60px;letter-spacing:.04em">bmseed</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 BMSEED LLC</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"BMSEED — stretchable multielectrode arrays: biomechanics, electrophysiology and imaging in one platform",x:"Home"};
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
