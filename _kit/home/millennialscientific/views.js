/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prodRows(list){return '<ul class="pfr prod">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3></div>'+
   '<p>'+esc(c[3])+'</p><a class="lab lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[4])+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Starting materials","Sources of sp² carbon such as graphite, graphene, carbon nanotubes and fullerenes, or acrylates; or condensates such as silanes, agarose, dextran, amino acids and their blends.",'<circle cx="28" cy="28" r="18"/><path d="M28 14l12 7v14l-12 7-12-7V21Z"/><path class="a" d="M28 21l6 3.5v7L28 35l-6-3.5v-7Z"/>'],
  ["Crosslinkers","Hydrophobic linkers such as alkyl chains, or hydrophilic ones such as polyethylene glycol, of variable length and with functional groups such as epoxides and proteins.",'<circle cx="16" cy="28" r="9"/><circle cx="40" cy="28" r="9"/><path class="a" d="M25 28c2-4 4-4 6 0"/><circle class="f" cx="25" cy="28" r="2"/><circle class="f" cx="31" cy="28" r="2"/>'],
  ["Additives","Atoms such as iron or copper, and molecules such as porogens, change the beads’ physical and chemical properties, from porosity to surface chemistry.",'<circle cx="28" cy="28" r="18"/><circle class="f" cx="22" cy="23" r="2.4"/><circle class="f" cx="33" cy="26" r="2.4"/><circle class="f" cx="26" cy="34" r="2.4"/><circle cx="35" cy="35" r="3.2"/><circle cx="20" cy="31" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>All-carbon chromatography<span class="nomob"> media</span> · Stony Brook<span class="nomob">, New York</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Separate the</span><span class="l"><em>unseparatable.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Millennial Scientific makes NanoPak all-carbon chromatography microbeads, formed drop by drop in a continuous microfluidic stream. They hold up across all pHs and at high temperatures, for extraction, separation and purification.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/products">Our products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Extraction, separation and purification stand behind affordable food, water and medicines, yet most industrial separations burn energy. We assemble materials from the bottom up, so separations can be <em>cleaner, cheaper and better.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">80%</span><p class="k">Of industrial separation processes are energy-intensive, about half of all industrial energy use</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">550+</span><p class="k">Applicants for BioTools Innovator 2026; Millennial was one of about 30 companies selected</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">Patent offices, the US, China, Japan and India, granting or allowing our microdroplet bead process</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a NanoPak bead is made</span><h2 class="d3">One droplet, <em>one bead.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Droplet</span><span>Cure</span><span>Pack</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A carbon slurry meets the stream.</h2><p>A syringe pump feeds the material slurry, carbon with binder, crosslinker and additives, into a microfluidic chip, where a water- or oil-based phase pinches it into a train of uniform microdroplets.</p></article>'+
     '<article class="step"><h2>Each droplet is cured in flow.</h2><p>In the reaction chamber, UV or thermal illumination sets every droplet into a solid microbead with tunable properties. The same setup makes a whole library of candidates, then scales up unchanged.</p></article>'+
     '<article class="step"><h2>The beads are packed to separate.</h2><p>Finished microbeads are sold as bulk stationary-phase media or packed into solid-phase extraction and liquid chromatography columns, from capillary to preparative scale.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">From the bottom up, <em>bead by bead.</em></h2></div><p data-r>Microdroplet flow reactions, from microlitre to picolitre volumes, combine atoms, molecules and inks into a library of materials. We iterate to the best candidate for an application, then scale up on the same setup: continuous, distributed and enabled by automation and machine learning.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">One carbon platform, <em>four chemistries.</em></h2></div><p data-r>Our carbon microbead platform underpins the NanoPak suite, available as bulk stationary-phase media or packed in solid-phase extraction tips and columns and in analytical, semi-preparative and preparative HPLC columns.</p></div>'+
   prodRows(PROD)+
   '<div class="bk"><span class="lab kick" data-r>Recognition</span><p class="cr" data-r><span>R&amp;D 100 Award</span><span>Pittcon Today Excellence Award</span><span>BioTools Innovator 2026</span><span>Hello Tomorrow DeepTech Pioneer</span></p></div>'+
   '<div class="bk"><span class="lab kick" data-r>Markets</span><p class="cr" data-r><span>Pharmaceuticals</span><span>Biotechnology</span><span>Food, agriculture and beverage</span><span>Semiconductor</span><span>Metals and radioisotopes</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Carbon science, <em>built to ship.</em></h2></div><p data-r>Millennial Scientific is the trade name of Millennial Materials &amp; Devices Inc. Our leaders bring decades in nanotechnology, advanced materials and manufacturing, and scientific supplies and instrumentation for the life sciences.</p></div>'+
   team()+
   '<div class="bk light-bk"><span class="lab kick" data-r>Credentials</span><p class="cr" data-r><span>ISO 9001:2015</span><span>ISO 27001</span><span>NYS MWBE</span><span>MTA DBE</span><span>START-UP NY</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Patents, products <em>and applications.</em></h2></div><p data-r>Recent milestones and application notes from our lab in Stony Brook.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Samples, consults and partnerships</span>'+
   '<h2 class="big split">Bring us your <em>hardest separation.</em></h2>'+
   '<p class="sub" data-r>We partner with academic groups, pharmaceutical companies and emerging firms, from sample preparation and discovery to pilot and commercial manufacturing. Request samples or a consult.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:+18553882800">Call 855 388 2800</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Millennial Scientific<br>25 Health Sciences Drive, Suite 123<br>Stony Brook, NY 11790</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+18553882800">855 388 2800</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>25 Health Sciences Drive, Suite 123<br>Stony Brook, NY 11790</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18553882800">855 388 2800</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>NanoPak-C · NanoPak-M · NanoPak-E · NanoPak-B</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="72" text-anchor="middle" style="font-family:\'Figtree\',Arial,sans-serif;font-weight:600;font-size:80px;letter-spacing:-.01em">Millennial</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Millennial Materials &amp; Devices Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",process:"story",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Millennial Scientific — all-carbon chromatography media",x:"Home"};
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
