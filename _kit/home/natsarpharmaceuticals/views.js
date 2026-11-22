/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk'+(c[3].indexOf("IND")===0?' av':'')+'">'+(c[3].indexOf("IND")===0?'Clinical stage':c[5]?'Next':c[3].indexOf("Planned")===0?'Planned':'Preclinical')+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["The target: DDX3","A DEAD-box RNA helicase that unwinds RNA for transcription, splicing, export and translation. Overexpressed in many tumour types, it drives proliferation, resists apoptosis, responds to hypoxia, and has been associated with lower survival in lung cancer patients.",'<path d="M8 22c8-8 16 8 24 0s16 8 24 0"/><path class="a" d="M8 34c8-8 16 8 24 0s16 8 24 0"/><circle class="f" cx="32" cy="28" r="3"/>'],
  ["The molecule: RK-33","A first-in-class small molecule, designed by rational drug design, that binds DDX3 and abrogates its activity: cell-death pathways switch on, Wnt signalling falls, and non-homologous end-joining DNA repair is blocked.",'<path d="M16 18l8-5 8 5v10l-8 5-8-5Z"/><path class="a" d="M32 18l8-5 8 5v10l-8 5-8-5Z"/><path d="M24 33v10"/><circle class="f" cx="24" cy="45" r="3"/>'],
  ["The medicine: NSF-1","The intravenous formulation of RK-33, designed for administration in the hospital and infusion-centre settings where aggressive cancers are treated, and the subject of Natsar's IND, in effect since September 2026.",'<path d="M22 8h12M28 8v8"/><path d="M20 16h16v24a8 8 0 0 1-16 0Z"/><path class="a" d="M20 30h16"/><circle class="f" cx="28" cy="50" r="2.5"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Preclinical results</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From natsarpharmaceuticals.com (The Technology, Results, Clinical Development), Natsar press releases of 2025 and 2026, and the public NIH award record. RK-33 is investigational and has not been approved by the FDA.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Targeted oncology<span class="nomob"> · Ellicott City, Maryland</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Stopping the helicase</span><span class="l"><em>cancer depends on.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Natsar Pharmaceuticals is taking RK-33, a first-in-class inhibitor of the RNA helicase DDX3, into the clinic for aggressive solid tumours — on its own, and as a radiosensitiser alongside radiation therapy.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The science '+ARR+'</a><a class="btn" href="#/pipeline">Clinical development</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Who is Natsar</span>'+
   '<h2 class="txt" id="mani">Many cancers lean on one RNA helicase, DDX3, to repair their DNA, signal, move and keep growing. Natsar built a small molecule that <em>switches it off</em> — and turns radiation against the tumour.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">70</span><p class="k">Human cancer cell lines in which RK-33 alone showed anti-tumour activity, independently confirmed by the National Cancer Institute</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><p class="k">Preclinical tumour models with anti-tumour activity: sarcoma, brain, pancreatic, lung, triple-negative breast and breast cancer bone metastasis</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.25M</span><p class="k">NCI SBIR Direct-to-Phase II award, 2025, carrying RK-33 through IND to the clinic</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How RK-33 works</span><h2 class="d3">One target, <em>three effects.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Unwind</span><span>Block</span><span>Sensitise</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A helicase in overdrive.</h2><p>In many tumour cells DDX3 is overexpressed. Using the energy of ATP, it unwinds RNA for transcription, splicing, export and translation, and keeps the Wnt signalling, repair and survival programmes of the cancer running.</p></article>'+
     '<article class="step"><h2>RK-33 jams the motor.</h2><p>RK-33 binds DDX3 and abrogates its activity. The RNA stays wound, Wnt signalling falls, and the cell arrests in the G1 phase of its cycle while its death pathways switch on.</p></article>'+
     '<article class="step"><h2>Radiation, made to count.</h2><p>DDX3 also supports non-homologous end-joining, the main repair route for DNA broken by radiation. With RK-33 on board the breaks stay broken: in preclinical models the two together caused synergistic cell death and durable responses.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">From helicase <em>to medicine.</em></h2></div><p data-r>Natsar found DDX3 in a microarray screen of breast cancer cells exposed to cigarette smoke and showed its role in cancer progression. In characterising the pathways essential to the oncogenic state, the company has focused on helicases, which are dysregulated in many cancers.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical development</span><h2 class="d2 split">Into the clinic, <em>sarcoma first.</em></h2></div><p data-r>With its IND in effect, Natsar is a clinical-stage company. Phase 1 starts with dose escalation in solid tumours and expands in sarcoma; preclinical work continues in pancreatic and breast cancer and in combination with radiation.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Cancer researchers <em>and clinicians.</em></h2></div><p data-r>Natsar grew out of Dr. Venu Raman\'s laboratory at Johns Hopkins, and its advisers include the oncologists, pathologists and paediatric neuro-oncologists whose work established DDX3 in sarcoma, medulloblastoma and breast cancer.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>A National Cancer Institute SBIR Direct-to-Phase II award (R44CA295155), continued in 2026, with Series A financing being raised to run the Phase 1 programme.</p></div>'+
    '<div><span class="lab kick" data-r>Intellectual property</span><p data-r>Natsar has licensed all of the intellectual property for RK-33.</p></div>'+
    '<div><span class="lab kick" data-r>Origins</span><p data-r>RK-33 came from rational drug design in Dr. Raman\'s Johns Hopkins laboratory, which also showed DDX3\'s role in breast, lung, colorectal and prostate cancer.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Milestones <em>and publications.</em></h2></div><p data-r>The latest from Natsar, Johns Hopkins Medicine and the NIH record.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, partners and clinical investigators</span>'+
   '<h2 class="big split">Talk to <em>Natsar.</em></h2>'+
   '<p class="sub" data-r>Whether you are an investor joining us as RK-33 moves into the clinic, a partner, or an investigator interested in the Phase 1 programme, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Natsar '+ARR+'</a><a class="btn" href="mailto:'+INV+'">Investor enquiries</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Natsar Pharmaceuticals, Inc.<br>Ellicott City, Maryland<br>United States</p></div>'+
    '<div><span class="lab" data-r>General enquiries</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Investors and partnerships</span><p data-r><a class="ul" href="mailto:'+INV+'">'+INV+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Ellicott City, Maryland<br>United States</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+INV+'">'+INV+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Programme</span>NSF-1 (RK-33 I.V.), a first-in-class DDX3 inhibitor. Investigational; not approved by the FDA.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Raleway\',Arial,sans-serif;font-weight:300;font-size:58px;letter-spacing:.1em">natsar</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Natsar Pharmaceuticals, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",platform:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Natsar Pharmaceuticals — RK-33, a first-in-class DDX3 inhibitor for solid tumours",x:"Home"};
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
