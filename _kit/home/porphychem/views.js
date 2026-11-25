/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label" data-r>'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li data-r><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<div class="pnw">'+NEWS.map(function(n){return '<a class="pn" href="'+n[3]+'" target="_blank" rel="noopener" data-r><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a>'}).join("")+'</div>'}
function fams(){return '<ul class="fam">'+FAM.map(function(f){return '<li data-r><a href="'+SHOP+'/'+f[1]+'" target="_blank" rel="noopener">'+esc(f[0])+'</a></li>'}).join("")+'</ul>'}
function serv(){return '<div class="svc">'+SERV.map(function(s){return '<article class="sv" data-r><span class="n">'+s[0]+'</span><h3>'+esc(s[1])+'</h3><p>'+esc(s[2])+'</p><a class="lab ul lk" href="'+s[3]+'" target="_blank" rel="noopener">More on porphychem.com</a></article>'}).join("")+'</div>'}
function caps(){var C=[
  ["Health","Photodynamic therapy and photoimmunotherapy, and antimicrobial photodynamic inactivation: porphyrin-derived photosensitisers absorb strongly in the long wavelengths and generate singlet oxygen efficiently.",'<circle cx="28" cy="28" r="10"/><path class="a" d="M28 6v8M28 42v8M6 28h8M42 28h8M12.4 12.4l5.7 5.7M37.9 37.9l5.7 5.7M12.4 43.6l5.7-5.7M37.9 18.1l5.7-5.7"/><circle class="f" cx="28" cy="28" r="3.2"/>'],
  ["Energy","Solar cells and artificial photosynthesis: tetrapyrroles sit at the heart of natural photosynthesis, and porphyrin dyes have been applied with success in dye-sensitised solar cells.",'<path d="M10 40h36M14 40l6-18h16l6 18"/><path d="M24 22l-2 18M32 22l2 18M17 31h22"/><circle class="f" cx="42" cy="12" r="4"/><path class="a" d="M42 3v3M42 18v3M33 12h3M48 12h3"/>'],
  ["Smart materials","Sensors, molecular electronics and metal-organic frameworks, with porphyrins and phthalocyanines incorporated into, or grafted onto, metal oxide materials.",'<path d="M28 8l17 10v20L28 48 11 38V18z"/><path d="M28 8v40M11 18l34 20M45 18L11 38"/><circle class="f" cx="28" cy="28" r="3.4"/>'],
  ["Chemical processes","Catalysis and photocatalysis, a line that runs back to the founding laboratory’s biomimetic models of enzymes such as cytochrome P450.",'<circle cx="20" cy="30" r="11"/><circle cx="38" cy="22" r="8"/><path class="a" d="M10 46c8-4 16-4 24 0s12 4 16 0"/><circle class="f" cx="38" cy="22" r="2.8"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap" data-r><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Porphyrin chemicals &amp; engineering<span class="nomob"> · ISO 9001</span> · Dijon, France</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Porphyrins,</span><span class="l">from milligram</span><span class="l"><em>to kilogram.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>PorphyChem designs and makes porphyrins, phthalocyanines, BODIPYs and related compounds for research and industry: catalogue building blocks, custom synthesis, scale-up and porphyrin-based APIs, from a spin-off of the University of Burgundy.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/services">Our services '+ARR+'</a><a class="btn" href="'+SHOP+'.html" target="_blank" rel="noopener">Browse the catalogue</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About PorphyChem</span>'+
   '<h2 class="txt" id="mani">More than a manufacturer, PorphyChem develops technologies built on porphyrins, phthalocyanines and BODIPYs, and helps industrial companies and healthcare institutions <em>turn them into products.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">35+</span><p class="k">Years of porphyrin chemistry at the University of Burgundy’s Institute of Molecular Chemistry, the laboratory PorphyChem spun out of</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2013</span><p class="k">Founded in June by Dr. Benoit Habermeyer and Dr. Jean-Michel Barbe, at the initiative of Prof. Roger Guilard</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">12</span><p class="k">Product families in the catalogue, from dipyrrylmethanes to phthalocyanines and nanoparticles</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a synthesis runs</span><h2 class="d3">From a structure <em>to a certified lot.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Target</span><span>Synthesis</span><span>Quality</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Name the molecule.</h2><p>Send the structure, chemical name or CAS number and the quantity you need. From the literature and their own experience, PorphyChem’s chemists judge its feasibility and find the shortest route to it.</p></article>'+
     '<article class="step"><h2>Build it, metal and all.</h2><p>The macrocycle is made and purified with methods developed in house, and can be metallated with almost any metal of the periodic table, from milligrams up to kilograms.</p></article>'+
     '<article class="step"><h2>Test every lot.</h2><p>HPLC with diode array, 500 and 600 MHz NMR, UV-Vis, MALDI-TOF and ESI mass spectrometry, infrared. Each lot stays in quarantine until Quality Assurance validates its certificate of analysis.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="expertise" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Expertise</span><h2 class="d2 split">One family of molecules, <em>four fields.</em></h2></div><p data-r>PorphyChem’s products are key precursors for research and industrial use in health, energy, smart materials and chemical processes, and its know-how runs from the design of a photosensitiser to its manufacture.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">A catalogue of <em>rare building blocks.</em></h2></div><p data-r>Research products you do not find elsewhere, developed by the R&amp;D department with the Scientific Advisory Board. Every family links to the online shop.</p></div>'+
   fams()+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split">When the catalogue <em>is not enough.</em></h2></div><p data-r>Custom synthesis is a specialty of PorphyChem and a major part of its activity, with routes, treatment and purification processes developed for short lead times and competitive prices.</p></div>'+
   serv()+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founders and <em>advisers.</em></h2></div><p data-r>A spin-off of the Institute of Molecular Chemistry of the University of Burgundy, supported by the Premice incubator in 2011, with an international Scientific Advisory Board of porphyrin chemists since 2015.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec light" id="news" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">At the heart of <em>the porphyrin community.</em></h2></div><p data-r>PorphyChem supports the conferences and awards of its field, as it has since helping more than 100 young researchers attend ICPP in 2014.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Quotes, custom synthesis and enquiries</span>'+
   '<h2 class="big split">Talk to <em>PorphyChem.</em></h2>'+
   '<p class="sub" data-r>For a quotation, a custom synthesis, API/GMP work, contract research, distribution or careers, the team will be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email PorphyChem '+ARR+'</a><a class="btn" href="#/services">See the services</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Laboratory</span><p data-r>PorphyChem SAS<br>390, Rue Charles de Freycinet<br>ZAC de Beauregard<br>21600 Longvic, France</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+33380673330">+33 (0)3 80 67 33 30</a></p></div>'+
    '<div><span class="lab" data-r>Shop</span><p data-r><a class="ul" href="'+SHOP+'.html" target="_blank" rel="noopener">shop.porphychem.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Laboratory</span>390, Rue Charles de Freycinet<br>21600 Longvic, France</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>+33 (0)3 80 67 33 30</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/about">About</a><br><a class="ul" href="#/expertise">Expertise</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Quality</span>ISO 9001 certified<br>Lot-specific certificates of analysis</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 600 62" aria-hidden="true"><text x="300" y="50" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:500;font-size:62px;letter-spacing:.005em">PorphyChem</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 PorphyChem SAS</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",approach:"story",expertise:"expertise",products:"products",services:"services",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"PorphyChem — Porphyrins, phthalocyanines and BODIPYs for research and industry, Dijon, France",x:"Home"};
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
