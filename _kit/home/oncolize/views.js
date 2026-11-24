/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div><p class="mh-label" data-r>'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li data-r><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span class="mh-arrow" aria-hidden="true"></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Works with many drugs","Small-molecule drugs and peptides, from poorly to highly soluble, with molecular weights from 100 D to 5 kD and drug loading from 0.01% up to 5% weight/volume.",'<circle cx="28" cy="28" r="20"/><path class="a" d="M28 14v28M14 28h28"/><circle class="f" cx="28" cy="28" r="4"/>'],
  ["Simple to make, at scale","Making a formulation is little more than standard mixing and compounding of drug and excipients in an aqueous solvent. Any CDMO or hospital pharmacy that processes sterile injectables can produce it under licence.",'<path d="M16 10h24M20 10v14L10 46h36L36 24V10"/><path class="a" d="M14 38h28"/><circle class="f" cx="25" cy="42" r="2.6"/><circle class="f" cx="33" cy="40" r="2"/>'],
  ["Imageable, image-guided","Depots are visible on CT and ultrasound, so they can be placed under image guidance with the endoscopes, percutaneous needles and catheters cancer clinics already use to take biopsies.",'<circle cx="28" cy="28" r="18"/><circle cx="28" cy="28" r="9"/><path class="a" d="M6 6l16 16"/><circle class="f" cx="28" cy="28" r="3.5"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev lt"><span class="lab kick" data-r>Evidence and IP</span><dl>'+
  '<div data-r><dt class="lab">Patents</dt><dd>Base patents granted in the USA, EU, China and Japan</dd></div>'+
  '<div data-r><dt class="lab">Licence</dt><dd>Exclusive worldwide licences to the ChemoGell™ platform</dd></div>'+
  '<div data-r><dt class="lab">Preclinical</dt><dd>Animal studies with gemcitabine, paclitaxel, cisplatin and a proprietary peptide</dd></div>'+
  '<div data-r><dt class="lab">Models</dt><dd>PDX and GEMM mouse studies at Leiden University Medical Center and CROs</dd></div>'+
  '</dl></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li data-r><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>OncoLize<span class="nomob"> · Utrecht, the Netherlands</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Treating tumors</span><span class="l"><em>from the inside.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>OncoLize develops injectable drug depots that deliver oncology drugs where they matter most: inside tumors. Our lead product, ChemGem™, is aimed at pancreatic cancer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why local</span>'+
   '<h2 class="txt" id="mani">What if we turn oncology drug delivery upside down? Deliver the drugs inside the targeted tumors, where they should be, and keep them there: <em>better tumor eradication, fewer side effects, lower cost of care.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">170×</span><p class="k">Up to 170 times higher drug concentration in the tumor</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100×</span><p class="k">Up to 100 times lower exposure outside the target tissue</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">25G</span><p class="k">Injectable through long, thin needles up to 25G, or catheters up to 1.5 metres</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How ChemoGell™ works</span><h2 class="d3">A depot, inside <em>the tumor.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Inject</span><span>Gel</span><span>Release</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Injected into the tumor.</h2><p>ChemoGell™ is injected directly into the tumor through a thin needle, catheter or endoscope, so treatment starts exactly where it is needed.</p></article>'+
     '<article class="step"><h2>A depot, in seconds.</h2><p>Within seconds the liquid turns into a soft, thermo-responsive hydrogel depot that stays inside the tumor as a stable local drug reservoir.</p></article>'+
     '<article class="step"><h2>Released where it matters.</h2><p>The depot releases its drug over hours to days, keeping concentrations high inside the tumor with minimal exposure for the rest of the body.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The ChemoGell™ <em>platform.</em></h2></div><p data-r>A thermo-responsive hydrogel of bio-erodible polymers that are off-the-shelf, pharma grade and affordable. Upon injection the liquid formulation forms a localized drug depot, in situ, in seconds, and releases drugs inside the tumor mass at concentrations no other delivery method can reach.</p></div>'+
   caps()+evid()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Three tumors <em>first.</em></h2></div><p data-r>We develop products in-house on a focused selection of well-proven generic chemo drugs, take them into clinical trials and, once proven, license them to oncology marketeers. Our primary focus is pancreatic cancer, one of the most difficult to treat.</p></div>'+
   pipeRows(PIPE)+
   '<div class="bk"><span class="lab kick" data-r>Working with</span><p class="cr" data-r><span>Amsterdam UMC</span><i>·</i><span>Leiden University Medical Center</span><i>·</i><span>Radboud UMC</span><i>·</i><span>RCSI</span><i>·</i><span>Dutch Cancer Foundation (KWF)</span><i>·</i><span>Horizon Europe PALACROS</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Senior experts in <em>local delivery.</em></h2></div><p data-r>OncoLize originated in Maastricht and now operates from Utrecht. The founders are senior experts in hydrogels, polymer-enabled drug delivery and biotech start-ups, with long careers in major pharma and chemicals companies.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">What’s <em>happening.</em></h2></div><p data-r>Research results, programmes and perspectives from OncoLize and its partners.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Let’s treat tumors <em>from the inside.</em></h2>'+
   '<p class="sub" data-r>Clinicians, investors, pharma and biotech partners, patients and public: we’d be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to OncoLize '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>David de Wiedgebouw<br>Universiteitsweg 99, third floor<br>3584 CG Utrecht</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@oncolize.com</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="https://linkedin.com/company/oncolize/" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Utrecht, the Netherlands</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@oncolize.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Funding</span>Dutch Cancer Foundation<br>Horizon Europe PALACROS</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:62px">ONCOLIZE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 OncoLize B.V.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"OncoLize — treating tumors from the inside",x:"Home"};
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
