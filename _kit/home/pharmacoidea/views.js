/* ================= VIEWS (home only: Technology / Programmes / Nutraceuticals / Team open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(L){return '<ul class="pfr">'+L.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
var AREAS=["Metabolic health","Digestive health","Bone and joint health","Nervous system support","Immune system support","Cardiovascular health","Vision support","Liver health","Beauty and weight management","Women’s health"];
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Drug delivery and diagnostics<span class="nomob"> · Szeged, Hungary</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Syndecans,</span><span class="l"><em>from the cell surface</em></span><span class="l"><em>to the clinic.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Pharmacoidea is a Hungarian biotech company that turns syndecan biology into targeted drug delivery to the brain, gene therapy and an early blood test for Alzheimer’s disease, and makes science-based nutraceuticals.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How syndecans work '+ARR+'</a><a class="btn" href="#/contact">Partner with us</a></div></div>'+
   '<p class="lab hcap" data-r>Red blood cells. SYNEAD, Pharmacoidea’s Horizon Europe project, is developing a syndecan-3 based blood test for early Alzheimer’s diagnosis.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Since 2006</span>'+
   '<h2 class="txt" id="mani">Our mission is to translate the latest scientific results into practice against diseases with unmet medical needs, and <em>to bring them to the people who need them as soon as possible.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2006</span><p class="k">Founded in Szeged, partnering with the world’s leading pharmaceutical companies</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">€485k</span><p class="k">EU Horizon contribution to SYNEAD, the syndecan-3 blood test, 2026 to 2028</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40+</span><p class="k">Science-based nutraceutical formulations, made in our own Szeged plant</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Patented delivery</span><p data-r>Syndecan-4 delivery is protected by US Patent US8647828B2; brain delivery via syndecan-3 by EP3911362A1 and US20220002433A1.</p></div>'+
    '<div><span class="lab kick" data-r>European consortia</span><p data-r>A partner in Innovative Medicines Initiative projects on the blood-brain barrier, drug delivery and gene therapy: IM2PACT, COMPACT and ARDAT.</p></div>'+
    '<div><span class="lab kick" data-r>Doctors and biologists</span><p data-r>A team of medical doctors and molecular biologists, from bioinformatics and transgenic mouse models to AAV vectors.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How syndecans work</span><h2 class="d3">A door in <em>the cell membrane.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Syndecans</span><span>Delivery</span><span>Diagnosis</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Proteoglycans on every cell.</h2><p>Syndecans are proteins that cross the cell membrane and carry long heparan sulfate sugar chains on the outside. Many molecules, viruses among them, bind to these chains first.</p></article>'+
     '<article class="step"><h2>A way in for large drugs.</h2><p>Pharmacoidea found that syndecan-4 lets proteins and macromolecules that cannot cross the membrane enter the cell. Its patented syndecan-3 method aims the same route at the brain, for proteins and nucleic acids.</p></article>'+
     '<article class="step"><h2>A signal for early Alzheimer’s.</h2><p>Syndecans also take part in the protein aggregation behind neurodegeneration, and syndecan-3 is a candidate biomarker. SYNEAD is turning that finding into a blood test for early diagnosis.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Twenty-first-century <em>drug development.</em></h2></div><p data-r>From bioinformatics and transgenic mouse models to adeno-associated virus vectors, Pharmacoidea applies a broad toolkit to therapeutic and diagnostic R&amp;D against neurodegenerative, inflammatory and infectious diseases.</p></div>'+
   rows(TEC)+
  '</div></section>'+

  '<section class="sec dark" id="programmes" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">Research with <em>Europe’s best.</em></h2></div><p data-r>Pharmacoidea leads and joins consortia with universities, research centres and industry in Hungary, across Europe and beyond, funded by Horizon Europe, the Innovative Medicines Initiative and Hungary’s NKFI Fund.</p></div>'+
   rows(PRG)+
  '</div></section>'+

  '<section class="sec light" id="nutraceuticals" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Nutraceuticals</span><h2 class="d2 split">Herbal science, <em>made in Szeged.</em></h2></div><p data-r>Scientifically and clinically supported dietary supplements with herbal extracts for everyday health, developed from our own research and produced in our own plant.</p></div>'+
   '<div class="ntr">'+
    '<div class="ntr-a"><span class="lab" data-r>Health areas</span><ul class="areas">'+AREAS.map(function(a){return '<li data-r>'+esc(a)+'</li>'}).join("")+'</ul></div>'+
    '<div class="ntr-b">'+
     '<div><span class="lab" data-r>Production</span><p data-r>Testing, blending, encapsulation and storage are being modernised with a multichannel fluorimeter, a high-capacity V-blender and an automatic capsule filler, at Régész tér 12, Szeged.</p></div>'+
     '<div><span class="lab" data-r>Distribution partners</span><p data-r>We are looking for distributors, wholesalers and pharmacy chains in selected markets, with marketing materials, product training and scientific support.</p></div>'+
     '<div class="ntr-l" data-r><a class="lab ul lk" href="https://pharmacoidea.shop.hu" target="_blank" rel="noopener">Webshop</a><a class="lab ul lk" href="'+WEB+'distributor-opportunities/" target="_blank" rel="noopener">Become a distributor</a></div>'+
    '</div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Doctors and <em>molecular biologists.</em></h2></div><p data-r>Pharmacoidea’s research team of medical doctors and molecular biologists looks for answers to critical questions in modern medicine, as drug candidates, cell therapies and functional food products.</p></div>'+
   '<div class="lead">'+
    '<div class="lead-n"><h3 data-r>Tamás Letoha, MD, PhD</h3><span class="lab rl" data-r>Managing Director</span></div>'+
    '<div class="lead-b"><p data-r>A physician-scientist, first author of Pharmacoidea’s papers on syndecan-based drug delivery and protein aggregation, and project lead of its national and European research.</p>'+
     '<ul class="aw">'+
      '<li data-r><span class="lab">2013</span>Enterprise Europe Network ambassador for the Southern Great Plain region</li>'+
      '<li data-r><span class="lab">2013</span>Role Model of the Year</li>'+
      '<li data-r><span class="lab">2014</span>Winner, NO-BLE Ideas transnational competition, South-East Europe</li>'+
      '<li data-r><span class="lab">2016–2020</span>Magyar Brands, innovative brand category, for Pharmacoidea</li>'+
     '</ul></div>'+
   '</div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and distributors</span>'+
   '<h2 class="big split">Let’s work on <em>what’s still incurable.</em></h2>'+
   '<p class="sub" data-r>Looking for a partner in drug delivery, Alzheimer’s diagnostics or a European consortium, or for nutraceutical products for your market? Write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/how">How syndecans work</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Derkovits fasor 7–11</span><br><span>H-6726 Szeged, Hungary</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+SALES+'">'+SALES+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+36302577393">+36 30 257 7393</a><br><span>Sales +36 70 414 0709</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Szeged,<br>Hungary</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/nutraceuticals">Nutraceuticals</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+36302577393">+36 30 257 7393</a></div>'+
   '<div class="c"><span class="lab">Company</span>Pharmacoidea Kft.<br>Reg. no. 06-09-010412</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="58" text-anchor="middle" fill="#f3f6f8" style="font-family:\'Jost\',system-ui,sans-serif;font-weight:400;font-size:60px;letter-spacing:.3em">PHARMACOIDEA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Pharmacoidea Ltd.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",how:"story",technology:"technology",programmes:"programmes",nutraceuticals:"nutraceuticals",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Pharmacoidea — syndecan-based drug delivery and Alzheimer’s diagnostics, Szeged",x:"Home"};
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
