/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function pubs(){return '<span class="lab sub-l pr" data-r>Selected publications</span><ul class="nws pubs">'+PUBS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Smad7","Smad7 is the cell’s own brake on TGF-β signalling, and it also restrains NF-κB: a dual inhibitor of the two pathways that drive the inflammation and failed repair behind Allander’s indications.",'<path d="M8 40c6-18 14-18 20 0s14 18 20 0"/><path class="a" d="M8 16h40"/><circle class="f" cx="28" cy="16" r="3.2"/>'],
  ["Cell-penetrating","Allander focuses on cell-penetrating biologics. Its lead fuses a truncated Smad7 to the Tat protein transduction domain, so the protein crosses into the cells of the tissue where it is applied.",'<rect x="10" y="10" width="36" height="36"/><path class="a" d="M28 0v24"/><circle class="f" cx="28" cy="28" r="3.2"/>'],
  ["Local delivery","Delivered locally or topically, as an oral gel or onto skin. In dogs with radiation-induced oral mucositis the gel went mainly into epithelial cells and was undetectable in serum.",'<path d="M6 22c8-4 14 4 22 0s14-4 22 0"/><path class="a" d="M6 34h44"/><path d="M6 44h44"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Preclinical results</span><div><dl>'+
  [["Oral mucositis, dogs","In a canine model of radiation-induced oral mucositis, the topical gel significantly shortened grade 3 mucositis and lowered IL-1β and TNF-α"],
   ["Diabetic wounds, mice and pigs","Topical treatment accelerated healing of diabetic wounds in both species, acting chiefly on keratinocytes and neutrophils"],
   ["Radiodermatitis, dogs and mice","Smad7 therapy was tested in canine and mouse models of radiation dermatitis, published in 2025"],
   ["Alongside cancer therapy","In a xenograft mouse model, Smad7 promoted healing of radiotherapy-induced oral mucositis without compromising the effect of radiation on oral cancer"]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Int J Radiat Oncol Biol Phys 2021; Allander publications 2025 and 2026; Clin Cancer Res 2018. Preclinical results in animal models.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Tissue regeneration<span class="nomob"> · Biologics</span> · Aurora, Colorado</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Biologics that</span><span class="l">help tissue</span><span class="l"><em>heal.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Allander Biotechnologies develops proprietary, cell-penetrating biologics with regeneration and anti-inflammation activities, delivered locally. Its first, a topical oral gel for radiation-induced oral mucositis in cancer patients, is funded by the National Cancer Institute for a first-in-human trial.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The unmet need</span>'+
   '<h2 class="txt" id="mani">Excessive inflammation and failed tissue repair lie behind conditions that still lack good treatments: the mouth sores and skin injury of cancer radiotherapy, and wounds that will not heal in diabetes. Allander builds on Smad7, a protein that <em>calms both.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.4M</span><span class="k">NCI SBIR Phase II award, 2025, for the first-in-human clinical trial of the oral gel</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><span class="k">NIH SBIR awards since 2017, from NIDCR, NIAMS and NCI, the latest in September 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><span class="k">Species in which the Smad7 biologic has been tested: mice, dogs and pigs</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">A protein that gets <em>inside the cell.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Injury</span><span>Uptake</span><span>Repair</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Injury switches inflammation on.</h2><p>Radiation, or diabetes, leaves TGF-β and NF-κB signalling switched on in the tissue. Inflammatory cells gather, and the epithelium cannot close over the wound.</p></article>'+
     '<article class="step"><h2>A gel the cells take in.</h2><p>Allander’s biologic carries Smad7 on a cell-penetrating Tat tag. Applied as a topical gel, it crosses into the epithelial cells of the injured tissue, and in dogs it was undetectable in serum.</p></article>'+
     '<article class="step"><h2>Inflammation falls, the tissue heals.</h2><p>Inside the cells Smad7 blocks both pathways. In animal models inflammatory cytokines fell and healing came faster, in oral mucositis, radiodermatitis and diabetic wounds.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">Cell-penetrating biologics, <em>applied locally.</em></h2></div><p data-r>Built on the Smad7 research of founder Dr. Xiao-Jing Wang, who has studied Smad proteins for over 15 years, and protected by an extensive worldwide patent portfolio.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One mechanism, <em>four indications.</em></h2></div><p data-r>Medical indications related to excessive inflammation and tissue regeneration defects, led by radiation-induced oral mucositis in cancer patients.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Skin biology, <em>drug development.</em></h2></div><p data-r>Allander is led by its founder, an internationally recognised expert in skin biology and oral cancer, and advised by leaders in regulatory science, protein manufacturing, dermatology and radiation oncology.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards and <em>publications.</em></h2></div><p data-r>The latest from Allander, with the papers behind the science.</p></div>'+
   news()+
   pubs()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors and partners</span>'+
   '<h2 class="big split">Talk to <em>Allander.</em></h2>'+
   '<p class="sub" data-r>Allander became a Delaware C-corporation to ease business development and fundraising for equity investment, as its first biologic heads for the clinic. We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="tel:'+TEL+'">Call '+TELT+' '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Allander Biotechnologies, Inc.<br>12635 Montview Boulevard<br>Aurora, Colorado 80045</p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p><span class="lab lk" data-r>Hours 8:00 am to 5:00 pm</span></div>'+
    '<div><span class="lab" data-r>Directions</span><p data-r><a class="ul" href="https://www.google.com/maps/search/?api=1&amp;query=12635+Montview+Boulevard+Aurora+CO+80045" target="_blank" rel="noopener">Open in Maps</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>12635 Montview Boulevard<br>Aurora, Colorado 80045</div>'+
   '<div class="c"><span class="lab">Telephone</span><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead programme</span>Topical oral gel<br>Radiation-induced oral mucositis</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="50" text-anchor="middle" style="font-family:\'Josefin Sans\',Arial,sans-serif;font-weight:400;font-size:56px;letter-spacing:.14em">ALLANDER</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Allander Biotechnologies, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"story",platform:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Allander Biotechnologies — Biologics for tissue regeneration, Aurora, Colorado",x:"Home"};
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
