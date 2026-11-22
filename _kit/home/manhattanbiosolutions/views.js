/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk'+(false?' av':'')+'">'+(false?'For licensing':c[5]?'Next':'In development')+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Linker","A legumain-activated linker, stable in circulation and cleaved by lysosomal legumain only after the ADC is taken up by the tumour cell, so the payload is released where it should be.",'<path d="M8 28h14"/><path d="M34 28h14"/><path class="a" d="M22 28l4-6 4 12 4-6"/><circle class="f" cx="48" cy="28" r="3"/><circle cx="8" cy="28" r="3"/>'],
  ["Payloads","Exatecan-derived topoisomerase I inhibitors that cause irreparable DNA double-strand breaks, and fluorine-containing taxoids from Stony Brook for drug-resistant tumours.",'<path d="M16 16l8-5 8 5v9l-8 5-8-5Z"/><path d="M32 16l8-5 8 5v9l-8 5-8-5Z"/><path class="a" d="M24 30v10l8 5 8-5V30"/><circle class="f" cx="32" cy="45" r="2.6"/>'],
  ["Targets","Antibodies to tumour-associated antigens licensed from the NIH and partners, including FGFR4 for rhabdomyosarcoma and a glycoprotein highly expressed across aggressive solid tumours.",'<circle cx="28" cy="30" r="17"/><path class="a" d="M28 13V5M22 7l6-2 6 2"/><path d="M14 22l-6-4M42 22l6-4M14 40l-6 4M42 40l6 4"/><circle class="f" cx="28" cy="5" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>What the platform fixes</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From manhattanbiosolutions.com (Scientific Platforms: ADCs), Manhattan BioSolutions press releases and the July 2026 paper in Cell Reports Medicine.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Antibody-drug conjugates for advanced cancers<span class="nomob"> · New York</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Release the payload</span><span class="l"><em>inside the tumour.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Manhattan BioSolutions engineers next-generation antibody-drug conjugates: a linker that stays intact in the blood and is cut by legumain inside the cancer cell, carrying TOP1-inhibitor and taxoid payloads to tumours that resist today’s drugs.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/pipeline">The programmes</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why a new linker</span>'+
   '<h2 class="txt" id="mani">The weak point of an ADC is the moment it lets go. Release the payload in the blood and it poisons healthy tissue; hold it until the <em>tumour cell</em> and the same drug can do far more.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Oncology programmes in which the legumain-cleavable platform has been validated, with auristatin and then exatecan-derived payloads</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">Mouse models of rhabdomyosarcoma and breast cancer in which the FGFR4 exatecan ADC controlled tumours, published 2026</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Payload classes in development: TOP1 inhibitors and taxoids, the basis for dual-payload designs</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the conjugate works</span><h2 class="d3">Bind, enter, <em>release.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Bind</span><span>Enter</span><span>Release</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Intact in the blood.</h2><p>The antibody carries its payloads on a legumain-cleavable linker that is designed to stay closed in circulation, then finds its antigen on the surface of the cancer cell.</p></article>'+
     '<article class="step"><h2>Taken into the cell.</h2><p>Once bound, the conjugate is internalised and trafficked through the endosome into the lysosome, where the protease legumain, frequently overexpressed in tumours, is waiting.</p></article>'+
     '<article class="step"><h2>Cut, freed, lethal.</h2><p>Legumain cuts the linker and the exatecan-derived TOP1 inhibitor is set free. It reaches the nucleus and traps topoisomerase I on the DNA, leaving double-strand breaks the cell cannot repair.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">One conjugate, <em>three choices.</em></h2></div><p data-r>Current ADCs lose payload early: cathepsin-cleavable linkers such as val-cit and GGFG can be cut in the blood and in healthy tissue. Manhattan BioSolutions combines in-house linker and payload libraries, synthetic chemistry and bioconjugation to build tumour-selective linker-payloads instead.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">ADCs for tumours <em>that resist.</em></h2></div><p data-r>The company applies its platform to high-value oncology targets, with conventional single-payload ADCs and dual-payload designs, in collaboration with the NIH, the National Cancer Institute, Binghamton University and Stony Brook University.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">ADC drug hunters, <em>and their advisors.</em></h2></div><p data-r>A New York team with industry ADC, finance, licensing and regulatory experience, advised by the academic chemists and pharmacologists behind its linkers and payloads.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Collaborators</span><p data-r>The National Institutes of Health and National Cancer Institute, Binghamton University, Stony Brook University and Nascent Biotech.</p></div>'+
    '<div><span class="lab kick" data-r>Support</span><p data-r>NCI and NSF SBIR grants, REACH awards from Stony Brook’s Center for Biotechnology, and New York State and New Jersey innovation grants.</p></div>'+
    '<div><span class="lab kick" data-r>Laboratories</span><p data-r>Headquartered at JLABS @ NYC, with a laboratory on Fifth Avenue in Manhattan.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Papers, partnerships <em>and awards.</em></h2></div><p data-r>The latest from Manhattan BioSolutions and the peer-reviewed literature.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, licensors and investors</span>'+
   '<h2 class="big split">Talk to <em>Manhattan Bio.</em></h2>'+
   '<p class="sub" data-r>Whether you hold a target antibody, are looking for a linker-payload partner, or are an accredited investor interested in the next generation of ADCs, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Manhattan Bio '+ARR+'</a><a class="btn" href="#/pipeline">See the programmes</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>JLABS @ NYC<br>101 Sixth Avenue, 3rd Floor<br>New York, NY 10013</p></div>'+
    '<div><span class="lab" data-r>Laboratory</span><p data-r>80 Fifth Avenue, Suite 1007<br>New York, NY 10011</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>JLABS @ NYC, 101 Sixth Avenue<br>New York, NY 10013</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">Email Manhattan Bio</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Programmes</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platforms</span>LEG-TOP1i · TxD taxoid payloads · dual-payload ADCs</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Poppins\',Arial,sans-serif;font-weight:300;font-size:56px;letter-spacing:.06em">Manhattan</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Manhattan BioSolutions, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",platform:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Manhattan BioSolutions — next-generation antibody-drug conjugates",x:"Home"};
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
