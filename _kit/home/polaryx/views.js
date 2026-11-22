/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
var PHS=["Preclinical","Phase 1","Phase 2","Phase 3"];
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[6]?' class="dim"':'')+'><span class="lab tg"><b'+(c[6]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3>'+
   '<span class="stg" aria-hidden="true"><span class="tr"><i style="width:'+(c[4]/4*100)+'%"></i></span><span class="ph">'+PHS.map(function(p){return '<span>'+p+'</span>'}).join("")+'</span></span></div>'+
   '<p>'+esc(c[5])+'</p><span class="lab lk">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["More lysosomes","As PPARα agonists, our small molecules upregulate TFEB, the master regulator of lysosomal biogenesis, so cells build the machinery that clears their toxic waste.",'<circle cx="28" cy="30" r="15"/><circle cx="28" cy="30" r="9"/><circle class="f" cx="25" cy="28" r="2.2"/><circle class="f" cx="31" cy="33" r="2.2"/><path class="a" d="M28 13V5M24 9l4-4 4 4"/>'],
  ["Calmer brain","In animal models and human primary astrocytes, the candidates reduce inflammation in the brain, a shared pathology across lysosomal storage disorders.",'<path d="M14 34c-4-10 4-20 14-20s18 10 14 20c-2 6-8 8-14 8s-12-2-14-8Z"/><path class="a" d="M20 30c3-3 5 3 8 0s5 3 8 0"/>'],
  ["Neurons protected","Preclinical studies improved motor and cognitive function, promoted neuronal survival and increased life expectancy.",'<circle cx="22" cy="28" r="6"/><path d="M28 28h20M42 28l6-6M42 28l6 6M17 24l-7-7M17 32l-7 7M22 22V10"/><circle class="f" cx="22" cy="28" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function dis(){return '<div class="ev"><span class="lab kick" data-r>Disease areas</span><div><dl>'+DIS.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[1])+'</dt><dd data-r><b>'+esc(e[0])+'.</b> '+esc(e[2])+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Preclinical efficacy confirmed in collaboration with Rush University Medical Center, in human astrocytes and murine models of lysosomal storage disorders.</p></div></div>'}
function desig(){return '<p class="note-s pnote" data-r>PLX-200 holds three FDA orphan drug designations (all 13 NCL subtypes, GM2 gangliosidoses, Krabbe disease) and is pursued through the 505(b)(2) pathway as a proprietary oral solution. SOTERIA: <a class="ul" href="https://clinicaltrials.gov/study/NCT04637282" target="_blank" rel="noopener">trial registry NCT04637282</a>.</p>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Lysosomal storage disorders<span class="nomob"> · Nasdaq: PLYX · Paramus, New Jersey</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Help the cell</span><span class="l">clear what it</span><span class="l"><em>cannot.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Polaryx Therapeutics develops patient-friendly small molecule and gene therapy treatments for rare pediatric lysosomal storage disorders. Our oral lead, PLX-200, is cleared for the Phase 2 SOTERIA basket trial.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">Our science '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why Polaryx</span>'+
   '<h2 class="txt" id="mani">More than 50 inherited lysosomal storage disorders leave undegraded waste inside cells, driving inflammation and neuronal loss in children. Since 2014 we have pursued <em>safe, effective, patient-friendly</em> treatments for the underlying disease.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">Indications in the SOTERIA basket trial, each with FDA Fast Track designation</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">FDA orphan drug designations granted to PLX-200</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">13</span><p class="k">NCL (Batten disease) subtypes covered by its orphan designation</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How PLX-200 works</span><h2 class="d3">Switch on the cell’s <em>own clean-up.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Bind</span><span>Build</span><span>Clear</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>It activates PPARα.</h2><p>Taken by mouth, PLX-200 reaches the cell and binds PPARα, a nuclear receptor. In lysosomal storage disorders the cell’s lysosomes are clogged with material they cannot break down.</p></article>'+
     '<article class="step"><h2>TFEB builds new lysosomes.</h2><p>PPARα upregulates TFEB, the master regulator of lysosomal biogenesis. The nucleus switches on lysosomal genes and the cell produces fresh, working lysosomes.</p></article>'+
     '<article class="step"><h2>Stored waste is cleared.</h2><p>New lysosomes take up the accumulated storage material. In murine models this reduced brain inflammation, promoted neuronal survival and improved motor function.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Boost the lysosome, <em>protect the brain.</em></h2></div><p data-r>Lysosomes eliminate cellular toxic waste and take part in cell signalling. Our small molecule candidates, PLX-100, -200 and -300, enhance lysosomal biogenesis through TFEB, attenuate inflammation in the brain and reduce neuronal apoptosis. Our gene therapy, PLX-400, addresses the genetic cause.</p></div>'+
   caps()+
   dis()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Small molecules <em>and gene therapy.</em></h2></div><p data-r>A diversified, potentially disease-modifying pipeline aimed at both the genetic and downstream features of lysosomal storage disorders. PLX-200 holds IND authorization for three trials; SOTERIA comes first, and its data will guide pivotal trials in CLN2 and CLN3.</p></div>'+
   pipeRows(PIPE)+
   desig()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built to reach <em>the clinic and beyond.</em></h2></div><p data-r>Our team brings together leaders with the deep experience required to guide the pipeline toward commercialization, from pediatric rare-disease development to manufacturing and public-company finance.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Listing, financing <em>and SOTERIA.</em></h2></div><p data-r>Recent announcements as Polaryx prepares the SOTERIA Phase 2 basket trial of PLX-200.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, families and investors</span>'+
   '<h2 class="big split">Talk to <em>Polaryx.</em></h2>'+
   '<p class="sub" data-r>We are seeking partners to help bring Polaryx therapies to patients and families fighting lysosomal storage disorders. For clinical trial questions, write to us as well.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:info@polaryx.com">info@polaryx.com '+ARR+'</a><a class="btn" href="tel:+12019407236">Call +1 (201) 940 7236</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Polaryx Therapeutics, Inc.<br>140 East Ridgewood Avenue<br>Suite 415, South Tower<br>Paramus, NJ 07652</p></div>'+
    '<div><span class="lab" data-r>Investors</span><p data-r><a class="ul" href="mailto:investor@polaryx.com">investor@polaryx.com</a><br><a class="ul" href="https://investors.polaryx.com/" target="_blank" rel="noopener">Investor relations</a></p></div>'+
    '<div><span class="lab" data-r>Online</span><p data-r><a class="ul" href="https://www.linkedin.com/company/polaryxtherapeutics/" target="_blank" rel="noopener">LinkedIn</a><br><a class="ul" href="https://x.com/PolaryxTx" target="_blank" rel="noopener">X (Twitter)</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>140 East Ridgewood Ave., Suite 415<br>Paramus, NJ 07652</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:info@polaryx.com">info@polaryx.com</a><br><a class="ul" href="tel:+12019407236">+1 (201) 940 7236</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead candidate</span>PLX-200 · oral PPARα agonist · Phase 2 SOTERIA</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="74" text-anchor="middle" style="font-family:\'Poppins\',Arial,sans-serif;font-weight:600;font-size:76px;letter-spacing:.12em">POLARYX</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Polaryx Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",mechanism:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Polaryx Therapeutics — patient-friendly therapies for lysosomal storage disorders",x:"Home"};
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
