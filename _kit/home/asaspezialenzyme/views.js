/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Industrial enzymes","Thirteen enzymes for food, textile and paper processing, by the kilogram: amylases, cellulase, glucoamylase, invertase, lactase, lipase, pectinase, proteases and transglutaminase.",'<circle cx="20" cy="22" r="10"/><circle cx="38" cy="34" r="12"/><path class="a" d="M8 48h40"/>'],
  ["Special enzymes","Twenty enzymes for analytics, biosensors and synthesis, among them laccases, dehydrogenases, cutinases, chitinase, alcohol and glucose oxidase, and carboxypeptidase B.",'<path d="M28 6c10 8 14 18 14 26a14 14 0 0 1-28 0c0-8 4-18 14-26z"/><circle class="f" cx="28" cy="34" r="4"/>'],
  ["Microbial cultures","Mixed microbial cultures for industrial and private use: pond and lake restoration, and better water quality in aquariums, garden ponds and commercial aquaculture.",'<path d="M6 30c8-6 14-6 22 0s14 6 22 0"/><path class="a" d="M6 42c8-6 14-6 22 0s14 6 22 0"/><circle cx="20" cy="14" r="3"/><circle cx="36" cy="18" r="2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'+
  '<div class="crd lt"><span class="lab kick" data-r>Where our enzymes work</span><p class="crl" data-r>'+APPS.map(function(n){return '<span>'+esc(n)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'}
function svcs(){var C=[
  ["Contract research","New biotechnological processes for producing enzymes, and enzymes and microorganisms that solve environmental problems."],
  ["Process development","Fermentation and purification processes for enzymes, fungicides, antibiotics and organic acids."],
  ["Strain development","High-performance production strains by classical mutagenesis, and expression in E. coli and Pichia pastoris."],
  ["Environmental biotechnology","Biological lake restoration, water analytics, bioremediation of soil and rehabilitation of heavy-metal soils."]];
  return '<ul class="svl">'+C.map(function(c){return '<li><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></li>'}).join("")+'</ul>'}
function projects(){return '<div class="pj"><span class="lab kick" data-r>EU research projects</span><ul class="nws">'+PROJ.map(function(n){
  return '<li data-r><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><div><h3>'+esc(n[1])+'</h3><span class="loc">'+esc(n[2])+'</span></div><span class="lab src">'+esc(n[4])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Spezialenzyme<span class="nomob"> · Wolfenbüttel, since 1991</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Enzymes for</span><span class="l">industry, science</span><span class="l">and <em>medicine.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ASA Spezialenzyme develops, produces and supplies enzymes, microbial cultures and other biotechnological products, and fills small clinical batches under GMP in its own cleanrooms.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/pharma">Pharma &amp; GMP</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Since 1991</span>'+
   '<h2 class="txt" id="mani">For more than three decades we have built our capabilities around enzymes: from food processing and organic synthesis to biosensors, textiles, paper and biogas, and <em>since 2020, GMP pharmaceuticals.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1991</span><p class="k">Founded in Wolfenbüttel by Dr. Arno Cordes</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">33</span><p class="k">Industrial and special enzymes in the catalogue</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2,000</span><p class="k">Vials a week, small-batch fill and finish under Annex 1</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">From strain to vial</span><h2 class="d3">How an enzyme is <em>made.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Express</span><span>Purify</span><span>Fill</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A strain that makes the enzyme.</h2><p>We develop high-performance production strains, by classical mutagenesis or by expressing the enzyme in E. coli or Pichia pastoris, and grow them in the fermenter.</p></article>'+
     '<article class="step"><h2>Purified to the grade it needs.</h2><p>Our own fermentation and purification processes take the enzyme from the broth to a defined product, for industry, for analytics or for synthesis.</p></article>'+
     '<article class="step"><h2>Filled under GMP.</h2><p>For clinical work, our Annex 1 cleanrooms fill 0.3 to 1 mL into glass vials, at up to 2,000 vials a week, for Phase I and II trials.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Enzymes, cultures <em>and more.</em></h2></div><p data-r>We produce and distribute enzymes, microbial cultures and other innovative biotechnological products for industry, science and research, and order directly from our online shop.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pharma" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pharma &amp; GMP</span><h2 class="d2 split">Built for compliance <em>from day one.</em></h2></div><p data-r>Since 2018 ASA has worked on pharmaceutical compounds made by biotechnological means. Quality and regulatory excellence are part of the department’s foundations: GMP standards and cleanrooms built to Ph. Eur. Annex 1.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="research" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">Application-oriented <em>research.</em></h2></div><p data-r>Research and development are central to our company policy. Since 1997 we have offered our know-how as services, in cooperation with research institutes and companies, and close to our partner, the Helmholtz Centre for Infection Research in Braunschweig.</p></div>'+
   svcs()+projects()+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people <em>behind ASA.</em></h2></div><p data-r>A small team of biotechnologists and engineers in Wolfenbüttel, led by our founder, Dr. Arno Cordes.</p></div>'+
   team()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Let’s talk <em>enzymes.</em></h2>'+
   '<p class="sub" data-r>For products, prices, fill and finish or a research project, write to us or call our office in Wolfenbüttel.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to ASA '+ARR+'</a><a class="btn" href="#/products">See the products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>ASA Spezialenzyme GmbH<br>Am Exer 19c<br>38302 Wolfenbüttel, Germany</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">service@asa-enzyme.de</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+495331882530">+49 5331 8825-30</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Am Exer 19c, 38302 Wolfenbüttel</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">service@asa-enzyme.de</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/pharma">Pharma &amp; GMP</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">The company</span>Enzymes, microbial cultures and GMP fill and finish since 1991</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Inter Tight\',sans-serif;font-weight:600;font-size:64px">ASA SPEZIALENZYME</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ASA Spezialenzyme GmbH</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",products:"products",pharma:"pharma",research:"research",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ASA Spezialenzyme — special enzymes since 1991",x:"Home"};
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
