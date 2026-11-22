/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function servRows(){return '<ul class="pfr srv">'+SERV.map(function(s){
  return '<li><span class="lab tg">'+esc(s[1])+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[2])+'</p><span class="lab lk">'+esc(s[3])+'</span></li>'}).join("")+'</ul>'}
function kits(){return '<div class="kit"><span class="lab kick" data-r>Kits</span><div><ul class="kl">'+KITS.map(function(k){return '<li data-r><span>'+esc(k[0])+'</span><b>'+esc(k[1])+'</b></li>'}).join("")+'</ul>'+
  '<p class="note-s" data-r>Each kit isolates and purifies samples with ProMTag chemistry, with no filtration or precipitation steps. Kits are also available through Science Exchange and Avantor Science Central; volume discounts are available.</p></div></div>'}
function caps(){var C=[
  ["ProMTag","Patented chemistry","A reversible protein label. It forms a covalent link with a protein’s primary amines for rapid, unbiased capture, even in harsh denaturants and contaminants, and a simple pH change releases the protein in its original, unmodified state.",'<circle cx="28" cy="28" r="15"/><path class="a" d="M43 28h9M47 24l5 4-5 4"/><path d="M4 28h9"/><circle class="f" cx="13" cy="28" r="2.4"/>'],
  ["IP-to-MS","Patent-pending method","Immunoprecipitation to mass spectrometry. A small volume of patient serum pulls its antigens from natively expressed proteins, which are identified directly by mass spectrometry: unbiased, in under six hours, with no specialized equipment.",'<path d="M28 50V30M28 30L14 12M28 30l14-18"/><circle class="f" cx="12" cy="9" r="3.2"/><circle class="f" cx="44" cy="9" r="3.2"/>'],
  ["Impact Analysis","Proprietary workflows","Deconvolution of the resolved antigen landscape and prioritization of targets, delivering validated antigen profiles tailored to the biological question.",'<path d="M6 48h44M6 48V8"/><path class="a" d="M14 48V36M22 48V20M30 48V30M38 48V14M46 48V40"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function apps(){var A=[
  ["Companion diagnostics","Antigen-based biomarkers that stratify cohorts, support companion diagnostic development and enable monitoring over time, in oncology and autoimmune disease."],
  ["Target discovery","Novel antigens found directly in patient samples (neoantigens, tumour-associated antigens, autoantigens), without the bias of prediction-based approaches."],
  ["Therapeutic selection","Patient-specific antigen landscapes that help prioritize antibody, TCR, BiTE and cell-therapy candidates before costly development decisions."]];
  return '<div class="plat light-plat">'+A.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><p data-r>'+esc(a[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Antigen profiling<span class="nomob"> · Native proteins</span> · Pittsburgh</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">We see what the</span><span class="l"><em>immune system sees.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Impact Proteomics identifies the antigens a patient’s antibodies recognise, working directly from patient samples and natively expressed proteins, with no cloned intermediates, manufactured arrays or predefined targets.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The platform '+ARR+'</a><a class="btn" href="#/contact">Start a conversation</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Most immunoassays can only confirm antigens someone already knew to look for, so many autoimmune diseases still have no identified target. Impact resolves the full antigen landscape of each patient, to <em>see what the immune system sees.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">6 h</span><p class="k">The IP-to-MS workflow completes in under six hours, with no specialized equipment</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1</span><p class="k">Analysis to identify autoantigens and cancer antigens, patient by patient</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1M</span><p class="k">NSF Phase II SBIR grant to develop the ProMTag chemistry (2021)</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How IP-to-MS works</span><h2 class="d3">From a drop of serum <em>to an antigen profile.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Capture</span><span>Pull down</span><span>Identify</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The patient’s antibodies.</h2><p>A small volume of serum, plasma or another antibody source carries the antibodies a patient’s immune system has made. They are captured on beads.</p></article>'+
     '<article class="step"><h2>Native antigens, pulled down.</h2><p>The antibodies meet natively expressed proteins from a cell lysate (K562, provided, or a lysate of choice). Only the proteins they recognise stay bound; ProMTag labelling replaces traditional radiolabelling.</p></article>'+
     '<article class="step"><h2>Identified directly.</h2><p>The captured antigens become mass-spec-ready peptides and are identified by mass spectrometry, cataloguing a patient’s antigens in a single analysis, including ones no one knew to look for.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">An unbiased view <em>of the immune response.</em></h2></div><p data-r>Founded by Carnegie Mellon University faculty, Impact Proteomics built a validated, end-to-end workflow on naturally and natively expressed and modified proteins, so the antigens it finds carry the same modifications as in human cells.</p></div>'+
   caps()+
   apps()+
  '</div></section>'+

  '<section class="sec dark2" id="services" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services and kits</span><h2 class="d2 split">Work with <em>the platform.</em></h2></div><p data-r>Impact partners with pharmaceutical and biopharmaceutical companies, in vitro diagnostic companies, and academic and non-profit researchers, through services, kits and co-discovery collaborations.</p></div>'+
   servRows()+
   kits()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Academic roots, <em>a collaborative company.</em></h2></div><p data-r>Impact Proteomics grew out of proteomics research at Carnegie Mellon University and works as a partner to the scientists it serves.</p></div>'+
   team()+
   '<div class="bk light-bk"><span class="lab kick" data-r>Recognition</span><p class="cr" data-r><span>Journal of Proteome Research</span><span>Communications Biology</span><span>StartUs Insights Top 5 Biotech</span><span>F6S #17 Top US Diagnostic Startup</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Publications <em>and milestones.</em></h2></div><p data-r>Funding, peer-reviewed work and new workflows from the team in Pittsburgh.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, researchers and diagnostics teams</span>'+
   '<h2 class="big split">Discuss a <em>partnership.</em></h2>'+
   '<p class="sub" data-r>We start by understanding your biological question, then co-design the study, run the platform workflows and work with you to interpret what the immune system reveals.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="https://www.linkedin.com/company/impact-proteomics/" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r>Impact Proteomics, LLC<br>Pittsburgh, Pennsylvania</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+14122069735">412-206-9735</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Pittsburgh, Pennsylvania</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platform</span>IP-to-MS antigen profiling · ProMTag</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="72" text-anchor="middle" style="font-family:\'Roboto\',Arial,sans-serif;font-weight:700;font-size:70px;letter-spacing:-.005em">Impact Proteomics</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Impact Proteomics, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",platform:"story",services:"services",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Impact Proteomics — Seeing what the immune system sees",x:"Home"};
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
