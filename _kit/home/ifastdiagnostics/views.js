/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function specRows(){return '<ul class="pfr pipe np">'+SPECS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row mf-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["A pivotal trial at three UK sites","375 Gram-negative samples of 7 species, tested in Portsmouth, Southampton and Bristol against the gold standard, broth microdilution, and for reproducibility.",'<circle cx="16" cy="18" r="6"/><circle cx="40" cy="18" r="6"/><circle cx="28" cy="40" r="6"/><path class="a" d="M21 21L25 35M35 21L31 35"/><circle class="f" cx="28" cy="40" r="2.2"/>'],
  ["Peer-reviewed science","The single-cell impedance method was published in Nature Communications in 2020, followed by a research article in the Journal of Clinical Microbiology.",'<rect x="12" y="8" width="32" height="40"/><path d="M18 18H38M18 26H38"/><path class="a" d="M18 34H30"/><circle class="f" cx="36" cy="38" r="2.2"/>'],
  ["Recognised by the profession","The Institute of Biomedical Science Award for Best Use of Research, and the Institute of Physics Business Award, the Lee Lucas Award.",'<circle cx="28" cy="22" r="12"/><path d="M20 32L16 48L28 42L40 48L36 32"/><circle class="f" cx="28" cy="22" r="2.2"/><path class="a" d="M23 22L27 26L34 18"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function certs(){var S=[
  ["Great Britain","UKCA certified","iFAST ONE is UKCA certified for Gram-negative positive blood cultures and Gram-negative isolates, with quantitative AST for key drugs."],
  ["Quality system","ISO 13485","Certified for the design, manufacture and distribution of antimicrobial susceptibility testing devices."],
  ["NHS","Supply Chain DPS","A listed Supplier of Goods on the NHS Supply Chain MedTech Innovation Dynamic Purchasing System for England and Wales."]];
  return '<div class="mfs">'+S.map(function(s){return '<div class="mf-site"><span class="lab" data-r>'+esc(s[0])+'</span><h3 data-r>'+esc(s[1])+'</h3><p data-r>'+esc(s[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Rapid antimicrobial susceptibility testing<span class="nomob"> · Whiteley, Hampshire</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The right antibiotic,</span><span class="l"><em>in under three hours.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>iFAST ONE measures the electrical properties of thousands of single bacteria at high speed, and tells the clinician which drug will work, from a positive blood culture or bacterial isolates. UKCA certified, and available to the NHS.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">See how it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Combating antimicrobial resistance</span>'+
   '<h2 class="txt" id="mani">Current susceptibility testing can take 24 to 72 hours, and patients deteriorate whilst they wait for the correct drug. iFAST gives the clinician <em>the best drug, every time, within a single\u00a0shift.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;3 h</span><p class="k">From a Gram-negative positive blood culture or isolates to a result</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">16</span><p class="k">Drugs per sample, with resistant/susceptible calls and MICs</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">£30</span><p class="k">Per sample, equivalent to or cheaper than current gold-standard methods</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology · single-cell impedance</span><h2 class="d3">Every bacterium, <em>measured.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Expose</span><span>Measure</span><span>Prescribe</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Exposed to the drugs.</h2><p>Bacteria from a positive blood culture or isolated colonies are suspended in solution, then exposed to a range of antibiotics, each across a series of concentrations, and incubated for two hours.</p></article>'+
     '<article class="step"><h2>Read one cell at a time.</h2><p>The iFAST microfluidic impedance chip measures the electrical properties of each individual bacterium at high speed: about 5,000 bacteria per sample, in some 30 seconds per well.</p></article>'+
     '<article class="step"><h2>The best drug, chosen.</h2><p>From those single-cell signatures the iFAST instrument calls each drug resistant or susceptible, gives its minimum inhibitory concentration, and determines the optimum antibiotic for the clinician to prescribe.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="product" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>iFAST ONE</span><h2 class="d2 split">Ultra-rapid AST, <em>at the cost of today’s.</em></h2></div><p data-r>The iFAST ONE system brings phenotypic antimicrobial susceptibility testing down from days to hours on a benchtop reader, with research and UKCA approved systems available now.</p></div>'+
   specRows()+
  '</div></section>'+

  '<section class="sec light" id="evidence" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Evidence</span><h2 class="d2 split">Validated in the clinic, <em>approved for it.</em></h2></div><p data-r>iFAST completed its pivotal clinical trials in UK hospital laboratories, validating its claim to consistently give accurate, rapid AST results from a positive blood culture in under three hours.</p></div>'+
   caps()+
   certs()+
  '</div></section>'+

  '<section class="sec light alt" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Spun out of Southampton <em>in\u00a02023.</em></h2></div><p data-r>iFAST Diagnostics was founded by Prof Hywel Morgan and Dr Daniel Spencer to take their research at the University of Southampton to market. Three years on, it designs and builds its systems at its own facility in Whiteley, Hampshire.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From UKCA mark <em>to NHS supply.</em></h2></div><p data-r>A year of approvals, partners and funding, and where to meet the team next. Each item links to the full story on ifastdiagnostics.com.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Laboratories, trusts and partners</span>'+
   '<h2 class="big split">Bring rapid AST <em>into your laboratory.</em></h2>'+
   '<p class="sub" data-r>NHS trusts in England and Wales can buy iFAST ONE directly through the NHS Supply Chain Dynamic Purchasing System. Email the team to see the system, plan an evaluation or book a meeting.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email iFAST '+ARR+'</a><a class="btn" href="#/news">Upcoming events</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters and laboratory</span><p data-r>iFAST Diagnostics Ltd<br>1500 Parkway, Whiteley<br>Hampshire PO15 7AF, United Kingdom</p></div>'+
    '<div><span class="lab" data-r>Sales and meetings</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Next events</span><p data-r>WHX Dubai, 25–28 January 2027<br>ESCMID Global 2027, Stockholm</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>1500 Parkway, Whiteley<br>Hampshire PO15 7AF, UK</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/product">iFAST ONE</a><br><a class="ul" href="#/evidence">Evidence</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Certifications</span>UKCA certified<br>ISO 13485<br>NHS Supply Chain DPS</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:300;font-size:58px;letter-spacing:.16em">iFAST</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 iFAST Diagnostics Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",product:"product",evidence:"evidence",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"iFAST Diagnostics — the right antibiotic, in under three hours",x:"Home"};
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
