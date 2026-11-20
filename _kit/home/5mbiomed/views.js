/* ================= VIEWS (home only; nav items open #/more/<item> build-out pages, in-page CTAs scroll) ================= */
function pipeRows(){return '<ul class="pfr pipe">'+PIPE.map(function(c){return '<li><span class="lab tg">'+esc(c[4])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="pind">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'<span class="loc">'+esc(c[3])+'</span></p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener" aria-label="NIH record for '+esc(c[0])+'">NIH record</a></li>'}).join("")+'</ul>'}
function prodRows(){return '<ul class="pfr prod">'+PROD.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab ul lk" href="'+SHOP+'" target="_blank" rel="noopener" aria-label="Shop '+esc(c[1])+'">Shop</a></li>'}).join("")+'</ul>'}
function serv(){return '<ol class="serv">'+SERV.map(function(s,i){return '<li><span class="lab n">0'+(i+1)+'</span><span class="sv">'+esc(s)+'</span></li>'}).join("")+'</ol>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Magnetic nanomaterials<span class="nomob"> · Johns Creek, Georgia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Magnetic nanomaterials</span><span class="l">for <em>precision medicine.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Bio-inspired magnetic nanomaterials and molecularly targeted imaging for in vitro diagnostics, quantitative imaging and drug delivery. First in development: Imagnostix, an NIH-funded blood test for Alzheimer’s disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/products">Products</a></div></div>'+
   '<span class="lab hero-cap nomob" data-r>Nanorod synthesis in the 5M Biomed laboratory</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About 5M Biomed</span>'+
   '<h2 class="txt" id="mani">Founded by biomedical researchers, engineers and clinical scientists to translate scientific discoveries into products that <em>advance research and improve healthcare.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$888,723</span><span class="k">NIH STTR Phase II award for Imagnostix, September 2025</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">7</span><span class="k">NIH awards since 2020, from NIA, NCI, NHLBI and NIDDK</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><span class="k">Alzheimer’s biomarkers measured in one Imagnostix blood test</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Liquid biopsy</span><p data-r>Sensitive, specific blood tests built on magnetic nanomaterials and biomarker targeting.</p></div>'+
    '<div><span class="lab kick" data-r>Contrast agents</span><p data-r>Iron oxide nanoparticles of different sizes and shapes for MRI and magnetic particle imaging.</p></div>'+
    '<div><span class="lab kick" data-r>Imaging probes</span><p data-r>Biomarker-targeted probes for optical, PET, acoustic and magnetic resonance imaging.</p></div>'+
    '<div><span class="lab kick" data-r>AI for imaging</span><p data-r>Machine and deep learning to sharpen images, speed acquisition and extract quantitative information.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How Imagnostix works</span><h2 class="d3">From a blood sample to <em>four biomarkers.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Make</span><span>Coat</span><span>Stir</span><span>Read</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Ultra-magnetic nanorods.</h2><p>Iron oxide nanorods, made in a one-step synthesis, carry magnetism as strong as the beads used in today’s lab-based Alzheimer’s blood tests.</p></article>'+
     '<article class="step"><h2>An anti-biofouling coat.</h2><p>A polymer coating keeps serum proteins from forming a corona on the rods, so the capture antibodies stay free to bind their targets.</p></article>'+
     '<article class="step"><h2>Nano stir bars.</h2><p>Under an alternating electromagnetic field the rods act as nano stir bars, mixing the blood sample so biomarkers are captured more efficiently.</p></article>'+
     '<article class="step"><h2>Four biomarkers, one test.</h2><p>The magnetic rods are drawn out with what they caught, and four Alzheimer’s biomarkers are measured at the point of care.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="pipeline" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One platform, <em>five programmes.</em></h2></div><p data-r>Each programme is funded by the National Institutes of Health, from Alzheimer’s disease and heart repair to brain tumours and diabetes.</p></div>'+
   pipeRows()+
  '</div></section>'+

  '<section class="sec dark" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products and services</span><h2 class="d2 split">Magnetic nanomaterials, <em>ready to order.</em></h2></div><p data-r>Iron oxide nanorods and nanoparticles from our laboratory, made to order when you need something else, and testing services in our lab at your request.</p></div>'+
   prodRows()+
   '<div class="svwrap"><span class="lab kick" data-r>Laboratory services</span>'+serv()+'</div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Scientists in <em>imaging and biomaterials.</em></h2></div><p data-r>A group of biomedical researchers, engineers and clinical scientists in life sciences, diagnostics, biomaterials, medical imaging and imaging informatics.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Funding <em>milestones.</em></h2></div><p data-r>Awards from the National Institutes of Health, each with its public record.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Products, services and partnerships</span>'+
   '<h2 class="big split">Let’s talk about <em>your research.</em></h2>'+
   '<p class="sub" data-r>For nanomaterials, custom synthesis, laboratory services or collaboration, write to us. We reply to quote requests within 48 hours.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="'+SHOP+'" target="_blank" rel="noopener">Browse products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Mailing address</span><p data-r>5M Biomed, LLC<br>P.O. Box 133146<br>Atlanta, GA 30333</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+14049133660">'+TEL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Mail</span>5M Biomed, LLC<br>P.O. Box 133146<br>Atlanta, GA 30333</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+14049133660">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/more/technology">Technology</a><br><a class="ul" href="#/more/pipeline">Pipeline</a><br><a class="ul" href="#/more/products">Products</a><br><a class="ul" href="#/more/team">Team</a><br><a class="ul" href="#/more/news">News</a></div>'+
   '<div class="c"><span class="lab">Note</span>Imagnostix is in development and is not available for clinical use.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:700;font-size:62px;letter-spacing:.12em">5M BIOMED</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 5M Biomed, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= BUILD-OUT PAGES (HOME_BRIEF update 2026-11-20): every nav item but Contact opens #/more/<item> ================= */
var MORE={technology:["Technology","technology"],pipeline:["Pipeline","pipeline"],products:["Products","products"],team:["Team","team"],news:["News","news"]};
function vMore(id){var m=MORE[id];
  return '<section class="ph-head more" data-field data-theme="dark"><span class="lab eyebrow">Concept preview</span>'+
   '<h1 class="d1" id="pageTitle" tabindex="-1">'+esc(m[0])+', <em>built out.</em></h1>'+
   '<p class="lede intro" data-r>This is a concept for the home page. If you like the direction, I’d build out this page and the rest of the site in the same style, with your team, portfolio and news, and handle the move from your current site. Reply to the email this link came in, and we can take it from there.</p>'+
   '<div class="act more-act" data-r><a class="btn solid" href="#/">Back to the home page '+ARR+'</a></div>'+
   '<a class="ul more-lk" data-r href="#/'+m[1]+'">Or keep scrolling the concept</a></section>';
}

/* ================= ROUTER: #/ is the home page; #/<section> scrolls to that section; #/more/<item> is a build-out page ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  if(p[0]==="more"&&MORE[p[1]])return {k:"more-"+p[1],v:function(){return vMore(p[1])},t:MORE[p[1]][0]+" — 5M Biomed",x:MORE[p[1]][0]};
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"5M Biomed — Magnetic nanomaterials for precision medicine",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
/* on the home page, section links scroll in place */
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a||curKey!=="home")return;var r=route(a.getAttribute("href"));if(r.k!=="home"||!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home"||r.k!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
/* arriving at a section from a build-out page (or a cold link): wait for the home view, then jump to the section */
function secAfter(sec){var n=0;(function wait(){if(++n>80)return;var lk=document.documentElement.style.overflow==="hidden"||curKey!=="home"||busy||!document.getElementById(sec);if(lk){setTimeout(wait,120);return}
  setTimeout(function(){secGo(sec,true);try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"},250)})()}
addEventListener("hashchange",function(){var r=route(location.hash);if(curKey!=="home"&&r.k==="home"&&r.sec)secAfter(r.sec)});
(function(){var r=route(location.hash);if(r.k==="home"&&r.sec)secAfter(r.sec)})();
