/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function prodRows(){return '<ul class="pfr path">'+PRODUCTS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' on paratechs.com">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function servList(){return '<div class="srv"><span class="lab sub-l" data-r>Contract research services</span><ul>'+SERV.map(function(x){return '<li data-r>'+esc(x)+'</li>'}).join("")+'</ul></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Rodent assisted reproduction<span class="nomob"> · Lexington, Kentucky</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Embryo transfer,</span><span class="l">without the</span><span class="l"><em>surgery.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ParaTechs’ NSET™ devices transfer embryos and sperm into the uterus of mice and rats without surgery: no anesthesia, no recovery. Humane, quick and cost-effective tools for laboratory animal research.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/technology">How it works</a></div></div>'+
   '<span class="lab cap">mNSET™ devices for mice · ParaTechs</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>3Rs solutions</span>'+
   '<h2 class="txt" id="mani">Surgical embryo transfer puts every recipient through anesthesia, surgery and recovery. <b class="w0">ParaTechs’ devices reach the uterus without a single incision.</b> <em>Easier, more cost-effective research.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2004</span><span class="k">Founded in Lexington on intellectual property from the University of Kentucky</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$535K</span><span class="k">NIH SBIR Phase II funding in August 2026 for a rat artificial insemination system</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">8×</span><span class="k">Up to eight times the protein yield of parental Sf9 cells with VE-BEVS cell lines</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology · in development</span><h2 class="d3">Bank a rat line, bring it back <em>without surgery.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Freeze</span><span>Recover</span><span>Transfer</span><span>Protect</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Freeze.</h2><p>Under its NIH Phase II award, ParaTechs is building a complete rat sperm cryorecovery system. First, sperm is frozen quickly and easily in a Cryodropper.</p></article>'+
     '<article class="step"><h2>Recover.</h2><p>A motility enhancing device then selects the motile sperm, removes the cryoprotectants and concentrates the sample.</p></article>'+
     '<article class="step"><h2>Transfer.</h2><p>A non-surgical insemination device carries the motile sperm to the uterine horn of the recipient female, with no anesthesia or analgesia.</p></article>'+
     '<article class="step"><h2>Protect.</h2><p>Fewer animals kept in idle colonies, and rat models safe from loss to disaster, genetic drift, disease and breeding problems.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Tools for the vivarium <em>and the bench.</em></h2></div><p data-r>Assisted reproduction devices for mice and rats, alongside protein expression and assay products, all for research use.</p></div>'+
   prodRows()+
   servList()+
   '<p class="ack" data-r>Research reported here is supported by the NIH Office of the Director under award R44OD032088. Products for research purposes only; not for therapeutic or diagnostic use.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Scientists who use <em>what they make.</em></h2></div><p data-r>A Lexington team that trains researchers in NSET technique, runs contract rodent work and has won NIH SBIR and STTR funding since 2005.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent work <em>and recognition.</em></h2></div><p data-r>Funding, publications and meetings from ParaTechs.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers, facilities and partners</span>'+
   '<h2 class="big split">Simpler procedures <em>for animal models.</em></h2>'+
   '<p class="sub" data-r>For products, NSET training workshops, contract research or partnering and licensing, write to the ParaTechs team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Lexington, Kentucky</span><p data-r><span class="bl">1122 Oak Hill Drive, Suite 100</span><span class="bl">Lexington, KY 40505</span></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+18593179213">+1 (859) 317-9213</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p><p data-r><a class="ul" href="mailto:sales@paratechs.com">sales@paratechs.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Lexington</span>1122 Oak Hill Drive, Suite 100<br>Lexington, KY 40505</div>'+
   '<div class="c"><span class="lab">Telephone</span><a class="ul" href="tel:+18593179213">+1 (859) 317-9213</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:400;font-size:62px;letter-spacing:.01em">ParaTechs</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ParaTechs Corporation</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ParaTechs — non-surgical embryo and sperm transfer for laboratory mice and rats",x:"Home"};
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
