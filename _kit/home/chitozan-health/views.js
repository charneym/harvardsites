/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><div class="pnm"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Broad spectrum","Independent laboratory testing at GMP and ISO registered facilities shows Silver Shell working against a broad spectrum of bacteria and fungi, including MRSA, VRE, C. difficile, K. pneumoniae, A. baumannii and Candida auris.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M17 19l22 18M39 19L17 37"/><circle class="f" cx="28" cy="28" r="3.2"/>'],
  ["Built against resistance","The silver chitosan attacks microbial cells in several ways at once: electrostatic disruption, membrane damage, biofilm inhibition and oxidative and metal-ion stress. Research at the University of Technology Sydney validated its effect on multi-drug-resistant pathogens.",'<path d="M10 28h36"/><path d="M14 18h28M14 38h28"/><path class="a" d="M28 8v40"/><circle class="f" cx="28" cy="28" r="3.2"/>'],
  ["Less silver, held fast","The advanced formula uses significantly less silver than other silver finishes, and holds it in the chitosan: a zero zone of inhibition and silver barely detectable in wash water show that leaching is greatly minimised.",'<path d="M8 40c8-8 12-8 20 0s12 8 20 0"/><path d="M8 30c8-8 12-8 20 0s12 8 20 0"/><circle class="f" cx="20" cy="22" r="2.6"/><circle class="f" cx="34" cy="17" r="2.6"/><circle class="a" cx="27" cy="12" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The testing record</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>As reported by Chitozan Health on chitozanhealth.com. The 2022 NIAID STTR study (1R41AI172693-01) set out to measure loading, contact inhibition and wash durability of the finish on cotton, polyester, spandex and blends.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Antimicrobial textile finishes<span class="nomob"> · NIH NIAID-funded · Summerville, SC</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Hospital fabrics</span><span class="l">that keep killing</span><span class="l"><em>wash after wash.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Chitozan Health makes Silver Shell™, a silver-chitosan finish for privacy curtains, linens, scrubs and other textiles. Treated fabrics have withstood 75 commercial and home washes without a loss of efficacy.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/products">See the products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Hospital-acquired infections affect about two million US patients a year, and the curtains and linens around them can harbour microbes. Silver Shell turns those fabrics into a surface that <em>fights back.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">99.99%</span><span class="k">Sustained kill of bacteria or better, across more than 70 efficacy tests on finished textiles</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">75</span><span class="k">Commercial and home washes withstood by treated textiles without a loss of efficacy</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$630K</span><span class="k">NIH NIAID STTR funding across three awards, 2022 to 2026</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How Silver Shell works</span><h2 class="d3">Silver, held in chitosan, <em>on every fibre.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Finish</span><span>Wash</span><span>Contact</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A finish made of chitosan.</h2><p>Chitosan, a natural biopolymer, carries fine silver chloride particles about a quarter of a micron across. Applied as a finish, it coats the fibres of cotton, polyester and blended textiles.</p></article>'+
     '<article class="step"><h2>It stays on the fabric.</h2><p>The chitosan holds the silver to the fibre. In wash studies silver was barely detectable in the water, and treated textiles kept their efficacy through 75 commercial and home washes.</p></article>'+
     '<article class="step"><h2>Microbes die on contact.</h2><p>Bacteria and fungi that land on a treated fibre meet a multi-stage, multi-modal attack on their cell processes, which kills them and makes it much harder for them to develop resistance.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Silver Shell <em>and Glucosil.</em></h2></div><p data-r>Chitozan Health builds its products on a patented silver chitosan technology, improved with an NIH NIAID award: sustainable, responsibly sourced solutions made from one of nature’s most abundant materials.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">One chemistry, <em>five uses.</em></h2></div><p data-r>From hospital textiles and flame-resistant apparel to medical devices, wound gels and biodegradable packaging, each product carries the same silver chitosan technology.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineers <em>and chemists.</em></h2></div><p data-r>Austin Van Horn founded Chitozan Health with partners Matthew and Alan Taylor to solve hard problems with chitosan; Chief Scientist David Juhas joined in 2022 to develop the advanced silver chitosan formula.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Where</span><p data-r>Summerville, South Carolina, with a European arm led by Matthew Taylor in England.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>STTR awards from the National Institute of Allergy and Infectious Diseases in 2022 and 2026, after an NIH I-Corps project.</p></div>'+
    '<div><span class="lab kick" data-r>Research partners</span><p data-r>The University of Georgia on Silver Shell FR, and the Australian Institute of Microbiology and Infection at UTS on resistance.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards <em>and milestones.</em></h2></div><p data-r>Chitozan Health’s NIH grant record, from the first textile-finish study to the flame-resistant finish.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Licensing and partnerships</span>'+
   '<h2 class="big split">Talk to <em>Chitozan.</em></h2>'+
   '<p class="sub" data-r>For textile mills, healthcare suppliers, device makers and packaging partners interested in Silver Shell, Glucosil and the barrier coatings.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Austin Van Horn '+ARR+'</a><a class="btn" href="#/products">See the products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Chitozan Health LLC<br>143 Helena Park Dr<br>Summerville, SC 29486</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19047296126">904 729 6126</a></p></div>'+
    '<div><span class="lab" data-r>Current award</span><p data-r><a class="ul" href="'+RP+'11315042" target="_blank" rel="noopener">NIH RePORTER</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>143 Helena Park Dr<br>Summerville, SC 29486</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>Silver Shell™ · textiles<br>Silver Shell FR · flame resistant<br>Glucozan™ · wound care</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="52" text-anchor="middle" style="font-family:\'Jost\',system-ui,sans-serif;font-weight:600;font-size:76px;letter-spacing:.14em">CHITOZAN</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Chitozan Health LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"platform",platform:"platform",products:"products",pipeline:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Chitozan Health — Silver Shell antimicrobial textile finishes, Summerville, SC",x:"Home"};
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
