/* ================= VIEWS (home only: Solutions / Assays / Team / Insights open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(L){return '<ul class="pfr">'+L.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Immunology CRO<span class="nomob"> · Kent Science Park, UK</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The human immune</span><span class="l">response, <em>modelled</em></span><span class="l"><em>before the clinic.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Immundnz designs and runs customised in vitro and ex vivo immunology studies, from cytokine release to macrophage polarisation and phagocytosis, so drug developers get translational human data at the pre-clinical stage.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How a study runs '+ARR+'</a><a class="btn" href="#/contact">Free consultation</a></div></div>'+
   '<p class="lab hcap" data-r>A cancer cell (white) under attack by two cytotoxic T cells (red). Scanning electron micrograph: National Cancer Institute.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The immune response company</span>'+
   '<h2 class="txt" id="mani">Oncology, neuro-immunology, autoimmune and metabolic disease all turn on the immune system. We go off the beaten track to <em>model it in human cells.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2016</span><p class="k">Founded at Alderley Park by two scientists who had each built a company before</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">13</span><p class="k">Channels on the lab’s high-throughput flow cytometer</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">7</span><p class="k">Solution areas, from immune risk to vaccines and drug delivery</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Cell lines and primary cells</span><p data-r>Assays in established cell lines and in primary cells from PBMCs, in mono or co-culture, chosen for the compound’s mechanism.</p></div>'+
    '<div><span class="lab kick" data-r>Read out several ways</span><p data-r>Flow cytometry, immunohistochemistry, microscopy, ELISA and cytokine panels, in 96-well formats for screening.</p></div>'+
    '<div><span class="lab kick" data-r>Tailored, not off the shelf</span><p data-r>There is no one-size-fits-all study. We design the model around your question, and the first consultation is free.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a study runs</span><h2 class="d3">Beyond the standard assay, <em>step by step.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Model</span><span>Challenge</span><span>Read out</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Build the human model.</h2><p>Monocytes from PBMCs or a human cell line are differentiated into the cells the question needs, such as inflammatory M1 or regulatory M2 macrophages, and checked for markers like CD14, HLA-DR, CD80 and CD86.</p></article>'+
     '<article class="step"><h2>Bring in the target.</h2><p>The compound goes in, dose by dose. In an ADCP assay, antibody-coated target cells are co-cultured with the macrophages, which bind them through Fc receptors and engulf them.</p></article>'+
     '<article class="step"><h2>Count what happened.</h2><p>Flow cytometry separates phagocytosed from non-phagocytosed populations and quantifies each, alongside microscopy and cytokine readings, for a human data set you can act on.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="solutions" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Solutions</span><h2 class="d2 split">Seven routes through <em>the immune terrain.</em></h2></div><p data-r>Whether the study starts from a target, a cell type, a cell function or a therapeutic area, we help you choose the route and design the experiment, from early discovery to first-in-human.</p></div>'+
   rows(SOL)+
  '</div></section>'+

  '<section class="sec dark" id="assays" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Assays</span><h2 class="d2 split">Proven assays, <em>ready to run.</em></h2></div><p data-r>A broad set of standardised in-house assays to speed up your research, each one adaptable to your compound, cells and readouts.</p></div>'+
   rows(ASY)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Scientists who <em>enjoy the hike.</em></h2></div><p data-r>An entrepreneurial team in immunology, biochemistry, bio-analytical chemistry and biomarker analysis, with academic and industrial research behind it and a network of biopharma professionals around it.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="insights" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Insights</span><h2 class="d2 split">Notes from <em>the trail.</em></h2></div><p data-r>EU research partnerships, and articles on in vitro immunology for drug discovery from the Immundnz lab.</p></div>'+
   news()+
   '<div class="bk"><span class="lab kick" data-r>TUMORGPLAT partners</span><p class="cr" data-r><span>CSIC</span><i>·</i><span>FRCB-IDIBAPS</span><i>·</i><span>Universitat Politècnica de València</span><i>·</i><span>Fondazione IRCCS Istituto Nazionale dei Tumori</span><i>·</i><span>Università di Pavia</span><i>·</i><span>Immundnz</span></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Biotech and pharma research teams</span>'+
   '<h2 class="big split">Let’s take <em>the road untraveled.</em></h2>'+
   '<p class="sub" data-r>Planning a study that standard assays won’t answer? Tell us about your compound and your question, or book a free 30-minute consultation.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+CAL+'" target="_blank" rel="noopener">Book a free consultation</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Laboratory</span><p data-r><span>Building 400 (Ventures Building)</span><br><span>Kent Science Park, Sittingbourne</span><br><span>Kent ME9 8EF, UK</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+447878279127">+44 (0)7878 279127</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Laboratory</span>Kent Science Park,<br>Sittingbourne, UK</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/solutions">Solutions</a><br><a class="ul" href="#/assays">Assays</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/insights">Insights</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+447878279127">+44 (0)7878 279127</a></div>'+
   '<div class="c"><span class="lab">Assays</span>M1/M2 polarisation<br>ADCP<br>Cytokine release<br>DC maturation</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 96" aria-hidden="true"><text x="320" y="74" text-anchor="middle" style="font-family:\'Alegreya Sans\',system-ui,sans-serif;font-weight:500;font-size:104px;letter-spacing:.02em" fill="#f2f4f7">immundnz</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Immundnz Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approach:"story",solutions:"solutions",assays:"assays",team:"team",insights:"insights",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Immundnz — the immune response company, immunology CRO, Kent, UK",x:"Home"};
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
