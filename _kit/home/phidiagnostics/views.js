/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["The biomarker: circular DNA","Besides the familiar linear chromosomes, human cells carry circles of DNA that originate from the chromosomes. Tumours shed them into the blood, where they can be found in a plasma sample: a new tumour biomarker first identified in the Regenberg Lab.",'<circle cx="28" cy="28" r="15"/><circle class="a" cx="28" cy="28" r="10"/><path d="M6 50l10-6M40 12l10-6"/>'],
  ["The method: purify and sequence","Molecular methods purify the circular DNA from plasma or tumour tissue, away from the far more abundant linear DNA, before sequencing; a computational method then maps every sequenced circle back to its place in the genome.",'<path d="M8 14h40M8 42h40"/><circle class="a" cx="20" cy="28" r="6"/><circle class="a" cx="38" cy="28" r="4"/><path d="M8 28h4M46 28h2"/>'],
  ["The read-out: a classifier","A machine-learning classifier is trained to detect cancer from maps of circular plasma DNA, giving clinicians diagnostic information earlier in the patient pathway, from a simple blood test.",'<path d="M8 46h40"/><path class="a" d="M12 46V34M20 46V24M28 46V30M36 46V16M44 46V28"/><circle class="f" cx="36" cy="10" r="3"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Our history</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Eight years of research and 7.8 million euros of funding in the analysis of circular DNA in the Regenberg Lab preceded the company. The test is in development and is not yet approved for clinical use; it is being built for approval under the EU In Vitro Diagnostic Regulation.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Pancreatic cancer<span class="nomob"> · Liquid biopsy</span> · Copenhagen</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Thousands of</span><span class="l">second chances,</span><span class="l"><em>one blood test away.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Phi Diagnostics is developing a non-invasive blood test that reads circular DNA, a new tumour biomarker, to find pancreatic cancer early, when treatment can make the biggest difference.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How the test works '+ARR+'</a><a class="btn" href="#/programmes">Our programmes</a></div></div>'+
   '<p class="hero-cap lab" aria-hidden="true">A circle of double-stranded DNA, 168 base pairs · rendered from B-DNA geometry</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Most pancreatic cancers are found only when symptoms appear, by then usually at stage IV. Patients diagnosed earlier have better options for both surgery and chemotherapy. Phi Diagnostics aims to give them <em>that chance.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">12%</span><span class="k">Five-year survival for pancreatic ductal adenocarcinoma, one of the deadliest cancers, with more than 400,000 deaths a year worldwide</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">18M</span><span class="k">Danish kroner from the EU’s EIC Transition programme, 2025, with the University of Copenhagen, to validate the technology</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~1,000</span><span class="k">Individuals whose plasma and tumour samples the screening and prognostic tests are being validated on</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the test works</span><h2 class="d3">One blood sample, <em>read for circles.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sample</span><span>Purify</span><span>Classify</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>DNA in the blood.</h2><p>A plasma sample carries fragments of DNA released from the body’s cells. Tumours shed circular DNA among them, circles that originate from the chromosomes.</p></article>'+
     '<article class="step"><h2>The circles are purified.</h2><p>Molecular methods separate the circular DNA from the far more abundant linear DNA, so only the circles go on to be sequenced.</p></article>'+
     '<article class="step"><h2>A map, and a classifier.</h2><p>Each sequenced circle is mapped back to its place in the genome, and a machine-learning classifier reads the map for the signature of cancer.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">A new kind <em>of biomarker.</em></h2></div><p data-r>In 2017 the Regenberg Lab found that human DNA exists not only as linear chromosomes but as circles, in our cells and our blood. The Circle-DNA technology turns that discovery into a test.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="programmes" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">Pancreatic cancer first, <em>then more.</em></h2></div><p data-r>The goal is a non-invasive, sensitive and specific test for early detection of pancreatic cancer and other hard-to-detect cancers, fully clinically implementable and approved under the IVDR.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">From the lab <em>to the clinic.</em></h2></div><p data-r>Phi Diagnostics joins the scientists who discovered circular DNA in human blood with an operating team building the test for hospitals.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Origin</span><p data-r>A Danish spinout from the Regenberg Lab at the University of Copenhagen, founded in 2024 as CARE-DNA IP and renamed Phi Diagnostics in 2026.</p></div>'+
    '<div><span class="lab kick" data-r>Clinical collaboration</span><p data-r>The technology was developed with Herlev and Gentofte Hospital, with clinics and patients across Denmark providing the samples.</p></div>'+
    '<div><span class="lab kick" data-r>Support</span><p data-r>The EU’s European Innovation Council, the Bio Innovation Institute’s Venture Lab, the Danish Tech Challenge and the Innovation Fund Denmark.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, prizes <em>and milestones.</em></h2></div><p data-r>The latest from Phi Diagnostics, formerly CARE-DNA.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Hospitals, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Phi Diagnostics.</em></h2>'+
   '<p class="sub" data-r>Phi Diagnostics is preparing its first commercial activities with hospitals in Denmark and building for future funding, and would be glad to hear from clinicians, partners and investors.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Phi Diagnostics '+ARR+'</a><a class="btn" href="#/programmes">See the programmes</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Business address</span><p data-r>Phi Diagnostics ApS<br>Gammel Kalkbrænderivej 8, 3 tv<br>DK-2100 Copenhagen Ø, Denmark</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Founded at</span><p data-r>University of Copenhagen</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Gammel Kalkbrænderivej 8, 3 tv<br>DK-2100 Copenhagen Ø</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead programme</span>Circular DNA in plasma<br>Early detection of pancreatic cancer</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Barlow Semi Condensed\',\'Arial Narrow\',sans-serif;font-weight:400;font-size:60px;letter-spacing:0">Phi Diagnostics</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Phi Diagnostics ApS</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"platform",story:"story",platform:"platform",programmes:"programmes",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Phi Diagnostics — a blood test for circular DNA, for early detection of pancreatic cancer, Copenhagen",x:"Home"};
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
