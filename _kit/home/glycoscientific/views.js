/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prodRows(){return '<ul class="pfr prod">'+PROD.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><div class="pgm"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[4]+'" target="_blank" rel="noopener">Shop '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Site-specific recognition","Antibodies raised against a sugar in the context of its own peptide, so they report one modification at one site: a single O-GlcNAc on a defined serine or threonine, or an O-fucose on Notch1.",'<path d="M28 50V30M28 30L14 10M28 30L42 10"/><rect class="a" x="23" y="38" width="10" height="10"/><circle class="a" cx="28" cy="56" r="0"/>'],
  ["The analyte, labelled","The closer an internal standard is to its analyte, the better it corrects for error. For a glycoprotein, the best standard is a labelled glycoprotein, added before processing so it shares every step.",'<path d="M8 46h40"/><path d="M18 46V22"/><path class="a" d="M24 46V28"/><path d="M34 46V14"/><path class="a" d="M40 46V20"/>'],
  ["Built beside the CCRC","A team embedded in proteomics, glycomics, liquid chromatography and mass spectrometry of glycans and glycoproteins, next door to the University of Georgia’s Complex Carbohydrate Research Center.",'<path d="M9 28l9-13h20l9 13-9 12H18z"/><circle class="a" cx="38" cy="15" r="4"/><path class="a" d="M18 40h20l9-12"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function backers(){return '<div class="bk light-bk"><span class="lab kick" data-r>Funding</span><p class="cr" data-r><span>National Institutes of Health</span><i>·</i><span>Georgia Research Alliance</span><i>·</i><span>Private sources</span></p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Glycobiology reagents<span class="nomob"> · Antibodies and standards</span> · Athens, GA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Antibodies and</span><span class="l">standards for the</span><span class="l"><em>sugars on proteins.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>GlycoScientific develops research reagents for glycobiology: site-specific antibodies to O-GlcNAc and O-fucose modified proteins, and isotopically labelled glycoprotein standards for quantitation by mass spectrometry.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Explore the products '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why glycans</span>'+
   '<h2 class="txt" id="mani">Protein glycosylation is bound up with cancer, diabetes and neurodegenerative disease, and antibodies specific to a modified glycoprotein are hard to make. GlycoScientific’s platform overcomes those hurdles, <em>next door to UGA’s Complex Carbohydrate Research Center.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">25+</span><p class="k">Years of the team’s experience in mass spectrometry and glycan research</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">Isotope forms of each IgG1 standard: light, amino-acid heavy, glycan heavy, or both</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2011</span><p class="k">First NIH award; supported since by the NIH and the Georgia Research Alliance</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the standards work</span><h2 class="d3">Every glycan, <em>measured against its twin.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Glycans</span><span>Standard</span><span>Quantify</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The sugars on an antibody.</h2><p>Every IgG carries N-glycans on its Fc, built from GlcNAc, mannose, galactose and fucose. Which glycoforms are present, and how much of each, matters to biotherapeutics and to disease research.</p></article>'+
     '<article class="step"><h2>Add the standard first.</h2><p>A GlycoScientific standard, such as iGlycoMab with its glycans labelled with the stable isotope ¹⁵N, goes into the sample before processing, so it shares every step of release and analysis with the glycans being measured.</p></article>'+
     '<article class="step"><h2>Read the pairs.</h2><p>In the mass spectrum each glycan appears twice: light from the sample, heavy from the standard, shifted by one dalton for every ¹⁵N-labelled GlcNAc. The ratio of each pair gives its amount, with handling errors cancelled.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A platform for antibodies <em>to modified proteins.</em></h2></div><p data-r>GlycoScientific works intensively on antibodies for quantifying specific glycan modifications, and on labelled glycoproteins that make mass spectrometry quantitative.</p></div>'+
   caps()+
   backers()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Reagents for <em>your next discovery.</em></h2></div><p data-r>From isotope-labelled IgG standards to site-specific antibodies and immunological reagents, every line is available from the GlycoScientific store.</p></div>'+
   prodRows()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Glycoscience, <em>from Athens, Georgia.</em></h2></div><p data-r>A privately held company founded by a University of Georgia glycomics and mass spectrometry scientist, with NIH-funded antibody programmes.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Proteomics and glycomics</span><p data-r>The team is embedded in proteomics, glycomics, and liquid chromatography and mass spectrometry of glycans and glycoproteins.</p></div>'+
    '<div><span class="lab kick" data-r>Custom work</span><p data-r>If you have a protein with a glycan or other modification for which you need an antibody, GlycoScientific will see if its technology can meet your needs.</p></div>'+
    '<div><span class="lab kick" data-r>Open to ideas</span><p data-r>“We are always on a steep learning curve, so please reach out to us with your ideas and comments.”</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="publications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Publications</span><h2 class="d2 split">Glycan science, <em>in print.</em></h2></div><p data-r>Recent papers by GlycoScientific scientists and their University of Georgia colleagues, on glycan separation, glycation and quantitation.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers, labs and partners</span>'+
   '<h2 class="big split">Talk to <em>GlycoScientific.</em></h2>'+
   '<p class="sub" data-r>Need a standard, an antibody to a modified site, or a custom protein? Tell us about your project and we will see if our technology can help.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email GlycoScientific '+ARR+'</a><a class="btn" href="#/products">See the products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>GlycoScientific, LLC<br>Athens, Georgia</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p><a class="lab lk ul" href="'+GS+'pages/contact-us" target="_blank" rel="noopener">Contact form</a></div>'+
    '<div><span class="lab" data-r>Neighbours</span><p data-r>Next door to the University of Georgia’s Complex Carbohydrate Research Center.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>GlycoScientific, LLC<br>Athens, Georgia</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/publications">Publications</a></div>'+
   '<div class="c"><span class="lab">Store</span><a class="ul" href="'+GS+'" target="_blank" rel="noopener">glycoscientific.com</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="60" text-anchor="middle" style="font-family:\'League Spartan\',Arial,sans-serif;font-weight:700;font-size:72px;letter-spacing:-1px">GlycoScientific</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 GlycoScientific, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",products:"products",technology:"technology",mechanism:"story",team:"team",publications:"publications",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"GlycoScientific — antibodies and isotope-labelled standards for glycobiology · Athens, Georgia",x:"Home"};
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
