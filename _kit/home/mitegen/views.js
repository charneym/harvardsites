/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Crystallography","Everything for crystallization, crystal harvesting, cryocooling and data collection: plates and screens, MicroMounts and MicroLoops, bases, pucks and tools.",'<path d="M28 6l14 10v18L28 50 14 34V16z"/><path class="a" d="M14 16l14 8 14-8M28 24v26"/><circle class="f" cx="28" cy="24" r="2.4"/>'],
  ["Cryo-EM","Grids, equipment and accessories for cryo-EM sample preparation, from graphene-coated grids and FIB autogrid rings to GraVitri plunge coolers and grid storage and shipping pucks.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M16 22h24M14 28h28M16 34h24M22 12v32M28 10v36M34 12v32"/><circle class="f" cx="28" cy="28" r="2.4"/>'],
  ["Cryobiology and reagents","Tools and instruments for cryobiology research, and MiTeGen reagents: stock solutions, buffers, screens and custom formulations.",'<path d="M28 6v44M9 17l38 22M9 39l38-22"/><path class="a" d="M24 10l4 4 4-4M24 46l4-4 4 4"/><circle class="f" cx="28" cy="28" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
/* MiTeGen's own instruments (mitegen.com home, "MiTeGen Technologies" and featured products) */
var TECH=[
 ["NANUQ","Hyperquenching cryocooler","Automated ultra-fast plunge cooling with cold-gas removal and automatic puck loading. Patented.",MG+"nanuqtm-cryocooling-device/"],
 ["NANUQ Desktop HT","High-throughput plunge cooler","Every sample cooled identically and ultra-rapidly, regardless of operator, and placed straight into the puck.",MG+"product/nanuq-desktop-ht/"],
 ["Watershed","Crystallography workstation","Prevents drop dehydration while crystals are harvested, for the best possible diffraction.",MG+"product/watershed/"],
 ["Sentinel Watchdog","Beam stop with X-ray detector","X-ray beam monitoring and dosing information without interfering with diffraction data collection.",MG+"product/sentinel-watchdogtm-kit-g2-gagg/"]];
function tech(){return '<ul class="pfr tech">'+TECH.map(function(t){return '<li><span class="lab tg"><b>'+esc(t[1])+'</b></span><h3>'+esc(t[0])+'</h3><p>'+esc(t[2])+'</p><a class="lab ul lk" href="'+t[3]+'" target="_blank" rel="noopener">Product page</a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Crystallography<span class="nomob"> · Cryo-EM</span> · Cryopreservation · Ithaca, NY</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Small samples.</span><span class="l"><em>Cooled without ice.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>MiTeGen designs, manufactures and distributes tools for crystallography, cryo-EM and the cryopreservation of small biological samples, from the MicroMounts the company was founded on to the NANUQ hyperquenching cryocooler.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How NANUQ works '+ARR+'</a><a class="btn" href="#/products">Our products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About MiTeGen</span>'+
   '<h2 class="txt" id="mani">Our strength is applying concepts and technologies from physics to the practical problems of our friends and collaborators in the life sciences: <em>from sample preparation through data collection.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">6,700+</span><p class="k">Published research articles citing MiTeGen products</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40+</span><p class="k">Countries with academic, medical, pharmaceutical, government and industrial customers</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2004</span><p class="k">Founded by Cornell physicist Robert Thorne, in Ithaca, New York</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How NANUQ works</span><h2 class="d3">Past the cold gas, <em>straight into the liquid.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Hand plunge</span><span>NANUQ</span><span>Vitrified</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The cold gas is the problem.</h2><p>Plunged by hand into an open dewar, a crystal first travels through a layer of cold gas above the liquid nitrogen. Heat moves slowly in gas, so the sample cools there for long enough for crystalline ice to nucleate and grow, damaging the crystal and its diffraction.</p></article>'+
     '<article class="step"><h2>Remove the gas. Plunge fast.</h2><p>NANUQ removes the cold-gas layer and plunges automatically, so the sample goes from ambient temperature directly into contact with the liquid nitrogen. It cools more than ten times faster than hand plunging.</p></article>'+
     '<article class="step"><h2>Trapped as glass, placed in the puck.</h2><p>The solvent is trapped as amorphous ice before crystals can form: less cryoprotectant, less mosaicity, better diffraction. Each sample is then placed automatically into a Unipuck, with no hand transfer.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Tools for structure, <em>made in Ithaca.</em></h2></div><p data-r>MiTeGen designs, manufactures and distributes products for probing the structure and function of proteins, viruses and small molecules, and for handling small samples in cell biology, histology, clinical diagnostics, entomology, archaeology, art restoration and geology.</p></div>'+
   caps()+
   '<span class="lab sub-l pr" data-r>MiTeGen instruments</span>'+
   tech()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>NANUQ Access Facility</span><p data-r>Day-use access to NANUQ cryocooling in Ithaca, just a few miles from the CHESS beamlines.</p></div>'+
    '<div><span class="lab kick" data-r>Custom engineering</span><p data-r>Specialised custom engineering and design to bring new scientific projects to life, to your specifications.</p></div>'+
    '<div><span class="lab kick" data-r>New Lab Program</span><p data-r>A new lab outfitted with the tools and equipment it needs, at a discount, to make the most of startup funds.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research and development</span><h2 class="d2 split">Physics, funded <em>to the bench.</em></h2></div><p data-r>MiTeGen works with academic, government and industrial researchers to develop new tools and methods. Since 2006, a series of NIH small business awards has carried its ideas from the Cornell lab to the beamline and the biobank.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded on <em>Cornell physics.</em></h2></div><p data-r>MiTeGen was founded in 2004 by Cornell Professor Robert Thorne to commercialise MicroMounts, based on research and development at Cornell. Its operational and development team keeps the focus on improving the capabilities of researchers around the world.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Research roots</span><p data-r>Thorne’s Cornell group is known for work on new technologies for macromolecular crystal growth and crystallography, and on the physics of cryopreservation of biological samples.</p></div>'+
    '<div><span class="lab kick" data-r>Distribution</span><p data-r>Sold directly to more than 45 countries, and through local distributors worldwide.</p></div>'+
    '<div><span class="lab kick" data-r>Partners</span><p data-r>Distributor in North America for Puxano graphene-coated grids and for NanoSoft cryo-EM tools.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">New tools, <em>new partners.</em></h2></div><p data-r>Launches, distribution agreements and NIH awards, with a monthly newsletter on crystallography, cryo-EM and beamline research.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers, facilities and partners</span>'+
   '<h2 class="big split">Talk to <em>MiTeGen.</em></h2>'+
   '<p class="sub" data-r>Request a quote, product information or a sample, or bring us a problem you would like solved. MiTeGen welcomes suggestions for new and improved products.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email MiTeGen '+ARR+'</a><a class="btn" href="#/products">See the products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Location</span><p data-r>MiTeGen, LLC<br>95 Brown Road<br>MS 1034, Suite 124<br>Ithaca, NY 14850</p></div>'+
    '<div><span class="lab" data-r>Customer service</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>+1 877 648 3436<br>+1 607 266 8877</p></div>'+
    '<div><span class="lab" data-r>Mail</span><p data-r>MiTeGen<br>PO Box 3867<br>Ithaca, NY 14852</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Location</span>95 Brown Road, Suite 124<br>Ithaca, NY 14850</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>+1 877 648 3436</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Fields</span>Crystallography<br>Cryo-EM<br>Cryobiology</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 74" aria-hidden="true"><text x="280" y="58" text-anchor="middle" style="font-family:\'Spectral\',Georgia,serif;font-style:italic;font-weight:600;font-size:66px;letter-spacing:-.005em">MiTeGen</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 MiTeGen, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",products:"products",research:"research",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"MiTeGen — Tools for crystallography, cryo-EM and cryopreservation, Ithaca, NY",x:"Home"};
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
