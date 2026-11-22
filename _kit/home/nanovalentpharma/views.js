/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
var PHS=["R&D","Preclinical","IND","Clinical"];
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[6]?' class="dim"':'')+'><span class="lab tg"><b'+(c[6]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3>'+
   '<span class="stg" aria-hidden="true"><span class="tr"><i style="width:'+(c[4]/4*100)+'%"></i></span><span class="ph">'+PHS.map(function(p){return '<span>'+p+'</span>'}).join("")+'</span></span></div>'+
   '<p>'+esc(c[5])+'</p><span class="lab lk">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Thousands, not a handful","An ADC antibody carries 2 to 8 drug molecules. Each antibody on an nADC/TNS brings thousands, held in a hollow shell of about 60,000 drug molecules, for a far greater on-target drug-to-antibody ratio.",'<circle cx="28" cy="28" r="17"/><circle class="f" cx="23" cy="24" r="2.4"/><circle class="f" cx="31" cy="22" r="2.4"/><circle class="f" cx="27" cy="31" r="2.4"/><circle class="f" cx="34" cy="31" r="2.4"/><circle class="f" cx="21" cy="32" r="2.4"/><path class="a" d="M28 11V4M24 1l4 3 4-3"/>'],
  ["Many antibodies, one particle","About 20 targeting antibodies, peptides or other agents sit on each nanosphere. That polyvalency raises its avidity for tumour cells compared with a single ADC molecule.",'<circle cx="28" cy="28" r="12"/><path class="a" d="M28 16V9M24 5l4 4 4-4M28 40v7M24 51l4-4 4 4M16 28H9M5 24l4 4-4 4M40 28h7M51 24l-4 4 4 4"/>'],
  ["No decoupling needed","The drug inside the shell is not chemically conjugated to the carrier. Once released in the tumour cell it is fully bioavailable, with no in situ chemistry, while encapsulation limits free drug in the plasma.",'<circle cx="24" cy="28" r="14"/><circle cx="24" cy="28" r="9"/><circle class="f" cx="42" cy="18" r="2.6"/><circle class="f" cx="47" cy="27" r="2.6"/><circle class="f" cx="41" cy="36" r="2.6"/><path class="a" d="M33 22l4-2M34 28h5M33 34l4 2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Publications</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r><a class="ul" href="'+e[2]+'" target="_blank" rel="noopener">'+esc(e[1])+'</a></dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Development supported by National Cancer Institute SBIR and STTR awards (R44CA233128, R42CA281707). Exclusive global licence from Children\u2019s Hospital Los Angeles. Pipeline as of January 21, 2026.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Targeted nanospheres<span class="nomob"> · Oncology</span> · Bozeman, Montana</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Advancing the power</span><span class="l">of targeted</span><span class="l"><em>therapies.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>NanoValent develops nano-ADC-like Targeted Nanospheres (nADC/TNS): antibody-guided nanoparticles that carry thousands of drug molecules to cancer cells and spare healthy tissue. Our lead, NV103/NV105, is approaching IND status.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/platform">The platform '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Antibody-drug conjugates brought tumour-specific targeting, but their performance remains limited and many patients cannot benefit. We pair the precision of an antibody with a nanoparticle\u2019s payload, to <em>deliver more and spare more.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">20&times;</span><p class="k">Greater anti-tumour effect than free irinotecan for NV103 in Ewing sarcoma models (2026)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~20</span><p class="k">Targeting antibodies on each nanosphere</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">60k</span><p class="k">Drug molecules carried per nADC/TNS; an ADC antibody carries 2 to 8</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How an nADC/TNS works</span><h2 class="d3">Into the cancer cell, <em>and nowhere else.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Bind</span><span>Enter</span><span>Release</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>It finds the tumour cell.</h2><p>Antibodies on the nanosphere, anti-CD99 for NV103, recognise antigens that tumours express far more than healthy tissue. Many antibodies on one particle bind with high avidity.</p></article>'+
     '<article class="step"><h2>The cell takes it in.</h2><p>The bound nanosphere is drawn inside by endophagocytosis and carried in an endosome. Unlike an untargeted liposome, it does not empty its drug at the cell surface.</p></article>'+
     '<article class="step"><h2>The drug reaches the nucleus.</h2><p>In the lysosome the cytotoxic payload is released and diffuses to the nucleus, causing irreparable DNA damage and tumour cell death, from a lower systemic dose.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Platform</span><h2 class="d2 split">One shell, <em>many payloads.</em></h2></div><p data-r>Our HPLN platform is a robust lipid shell whose cross-linking and polymer content tune drug release. Two cores take two kinds of payload: small molecules in an aqueous core, nucleic acids in a cationic lipid core. The nanospheres can also cross the blood\u2013brain barrier.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Wholly owned, <em>first in class.</em></h2></div><p data-r>Different antibodies and payloads on one platform: CD99, CD19 and B7H3 targets; irinotecan, doxorubicin, temozolomide and nucleic acids. In preclinical PDX models, at least 75% of common cancers showed dramatically improved survival with NV103/NV105.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Chemistry, pathology <em>and oncology.</em></h2></div><p data-r>A privately held company founded by a nanoparticle chemist and a pediatric cancer pathologist, led by an oncology industry executive, and working closely with US and international academic and industry partners.</p></div>'+
   team()+
   '<div class="bk light-bk"><span class="lab kick" data-r>Partners</span><p class="cr" data-r><span>Children\u2019s Hospital Los Angeles</span><span>University of Southern California</span><span>National Cancer Institute</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Data, papers <em>and milestones.</em></h2></div><p data-r>Recent publications and presentations on our targeted nanospheres, and the milestones behind them.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, partners and clinicians</span>'+
   '<h2 class="big split">Talk to <em>NanoValent.</em></h2>'+
   '<p class="sub" data-r>Whether you are an investor, a healthcare or media professional, a jobseeker or interested in collaborating, we would like to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+CONTACT+'" target="_blank" rel="noopener">Contact us '+ARR+'</a><a class="btn" href="tel:+14065868420">Call +1 (406) 586 8420</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Corporate address</span><p data-r>NanoValent Pharmaceuticals, Inc.<br>351-B Evergreen Dr.<br>Bozeman, MT 59715</p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+14065868420">+1 (406) 586 8420</a></p></div>'+
    '<div><span class="lab" data-r>Online</span><p data-r><a class="ul" href="https://www.linkedin.com/company/nanovalent-pharmaceuticals-inc-/" target="_blank" rel="noopener">LinkedIn</a><br><a class="ul" href="'+CONTACT+'" target="_blank" rel="noopener">Contact form</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>351-B Evergreen Dr.<br>Bozeman, MT 59715</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="tel:+14065868420">+1 (406) 586 8420</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/platform">Platform</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead candidate</span>NV103/NV105 · CD99-targeted irinotecan</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="74" text-anchor="middle" style="font-family:\'Questrial\',Arial,sans-serif;font-weight:400;font-size:74px;letter-spacing:.04em">NANOVALENT</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 NanoValent Pharmaceuticals, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",platform:"platform",mechanism:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"NanoValent Pharmaceuticals — targeted nanospheres for hard-to-treat cancers",x:"Home"};
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
