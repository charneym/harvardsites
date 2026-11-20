/* ================= VIEWS (home only: Technology / Products / Manufacturing / Company open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><div class="pn"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[2])+'</span></div><p>'+esc(c[3])+'</p></li>'}).join("")+'</ul>'}
function team(){var p=TEAM[0];return '<div class="bk ldx"><span class="lab kick" data-r>Leadership</span><div data-r><p class="cr"><span>'+esc(p[0])+'</span><i aria-hidden="true">·</i><span class="rl2">'+esc(p[1])+'</span></p><p class="bio">'+esc(p[2])+'</p></div></div>'}
function news(){return '<ul class="nws newslist">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
var MFG=[
 ["Clean rooms","Fully controlled, certified clean rooms","Production and packaging take place in dedicated clean rooms, with real-time monitoring of every production parameter."],
 ["Quality system","ISO 13485 under MDSAP","BIOMATCAN holds a Medical Device Single Audit Program ISO 13485 certificate, which covers the requirements of Canadian and U.S. regulators."],
 ["Sterility","Gamma sterilized","Every graft is manufactured, packaged and gamma sterilized under strict quality conditions."],
 ["Standards","Controls at every stage","Products are subjected to stringent quality and safety controls at all stages of production and certified to the relevant international standards and regulations."]];
function mfg(){return '<ul class="tm mf">'+MFG.map(function(p){
  return '<li><div class="tn"><span class="lab rl">'+esc(p[0])+'</span><h3>'+esc(p[1])+'</h3></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Orthobiologics<span class="nomob"> · Fredericton, New Brunswick</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Synthetic bone graft,</span><span class="l"><em>made to become bone.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>BIOMATCAN develops and manufactures fully synthetic, bone-like calcium phosphate bioceramics for orthopedic, dental and maxillofacial surgery, in its own certified facility in New Brunswick, Canada.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Order or collaborate</a></div></div>'+
   '<p class="lab hcap" data-r>Porous calcium phosphate granules, rendered: interconnected macropores, micropores and a fine mineral surface.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Bone grafting is the second most performed transplant, after blood transfusion. BIOMATCAN makes the graft without a donor, an animal or a second surgery: <em>a ceramic close to bone’s own mineral.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">100%</span><span class="k">Synthetic: no human or animal tissue, so no risk of disease transmission or rejection</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><span class="k">Scales of controlled porosity, macro, micro and nano, in one bioceramic</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><span class="k">Forms: powders, granules, blocs, porous shapes, and settable pastes and putties</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Three surgical fields</span><p data-r>Orthopedic, dental and skull-maxillofacial surgery: wherever bone must be replaced or augmented.</p></div>'+
    '<div><span class="lab kick" data-r>Supply without limits</span><p data-r>A synthetic graft is made in consistent, high-quality batches, so supply never depends on a donor.</p></div>'+
    '<div><span class="lab kick" data-r>Made in New Brunswick</span><p data-r>Every product comes from BIOMATCAN’s custom-designed, certified facility in Fredericton.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">A scaffold the body <em>rebuilds as bone.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Defect</span><span>Scaffold</span><span>Uptake</span><span>Ingrowth</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A gap bone cannot bridge alone.</h2><p>Bone regenerates completely when it has a space to grow into. The gold standard, autograft, is harvested from the patient’s own iliac crest: a second surgery, donor-site pain, and often not enough material.</p></article>'+
     '<article class="step"><h2>Filled with a bone-like ceramic.</h2><p>BIOMATCAN fills the defect with biphasic calcium phosphate: hydroxyapatite and beta-tricalcium phosphate, close in composition to the mineral phase of bone, with highly interconnected porosity.</p></article>'+
     '<article class="step"><h2>Drawn in by capillarity.</h2><p>The bioceramic is highly hydrophilic. Fluid wicks into its pores, which helps hold the implant in place, and its nanostructured surface gives cells a good place to attach.</p></article>'+
     '<article class="step"><h2>Replaced by new bone.</h2><p>Bone grows through the pores. The beta-TCP resorbs and remodels while the hydroxyapatite keeps the scaffold stable, until the region is fully integrated new bone.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Engineered <em>to the pore.</em></h2></div><p data-r>A new generation of orthobiologic bioceramics with enhanced bioactivity and excellent osteoconduction. The B-REGEN line is coming soon.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Supplied as</span><p class="cr" data-r>'+FORMS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="manufacturing" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality and manufacturing</span><h2 class="d2 split">Made, packed and sterilized <em>in Fredericton.</em></h2></div><p data-r>“It is the policy of BIOMATCAN Ltd. to meet or exceed customer expectations by maintaining the effectiveness of our quality management system.”</p></div>'+
   mfg()+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">One material, <em>made in Canada.</em></h2></div><p data-r>BIOMATCAN Ltd. is a private medical device company. Its scientists work with biomaterials researchers, biologists and clinicians around the world to develop products that meet surgeons’ needs.</p></div>'+
   team()+
   '<span class="lab kick nk" data-r>News</span>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, distributors and partners</span>'+
   '<h2 class="big split">Order material or <em>talk collaboration.</em></h2>'+
   '<p class="sub" data-r>BIOMATCAN supplies its bioceramics and works with distributors and research partners. Write or call the team in Fredericton.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="tel:+18005581979">'+TEL1+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>BIOMATCAN Ltd.<br>Unit 1, 151 Whiting Road<br>Fredericton, NB E3B 5Y5, Canada</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Telephone and email</span><p data-r><a class="ul" href="tel:+18005581979">'+TEL1+'</a><br><a class="ul" href="tel:+15064500404">'+TEL2+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Hours</span><p data-r>Monday to Friday<br>8:15 am to 5 pm</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Unit 1, 151 Whiting Road<br>Fredericton, New Brunswick E3B 5Y5</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/manufacturing">Manufacturing</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18005581979">'+TEL1+'</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Synthetic bone graft bioceramics<br>for orthopedic and dental surgery</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:\'Krona One\',system-ui,sans-serif;font-weight:400;font-size:62px">BIOMATCAN</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 BIOMATCAN Ltd.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",products:"products",manufacturing:"manufacturing",company:"company",news:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"BIOMATCAN — synthetic bone graft bioceramics, Fredericton, New Brunswick",x:"Home"};
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
