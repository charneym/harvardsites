/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[7]?' class="dim"':'')+'><span class="lab tg"><b'+(c[7]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span>'+
   '<span class="stg" aria-hidden="true"><span class="tr"><i class="p" style="width:'+(c[5]/5*100)+'%"></i><i style="width:'+(c[4]/5*100)+'%"></i></span><span class="ph">'+PHS.map(function(p){return '<span>'+p+'</span>'}).join("")+'</span></span></div>'+
   '<p>'+esc(c[6])+'</p><span class="lab lk">'+(c[7]?'Discovery':(c[1]==="Lead programme"?'Lead programme':'Preclinical'))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["A precision kinase inhibitor","ABI-171 is a small molecule that selectively targets two kinases, DYRK1A and PIM1, both crucial in the pathogenesis of fibrotic processes, to modulate the TGF-β-driven signalling that builds scar tissue.",'<circle cx="20" cy="22" r="10"/><circle cx="38" cy="34" r="10"/><path class="a" d="M8 46l40-34"/>'],
  ["From green-tea chemistry","Avanti started from EGCG, the main catechin of green tea, and designed a fluorinated derivative with stronger kinase inhibition and considerably better bioavailability and selectivity.",'<path d="M28 6l17 10v20L28 46 11 36V16z"/><path class="a" d="M28 18v12M22 24h12"/>'],
  ["Oral, and built to reverse","An oral therapy. In the bleomycin mouse model ABI-171 cut scar tissue and improved survival, against pirfenidone and EGCG as reference compounds.",'<path d="M10 40c6-18 30-18 36 0"/><path class="a" d="M14 26c4-8 24-8 28 0"/><path d="M28 10v8"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>ABI-171 milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From Avanti’s pipeline and news pages. Preclinical results: Araldi, Hwang and Raghu, Int J Mol Sci 2024 (doi 10.3390/ijms252111827).</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Idiopathic pulmonary fibrosis<span class="nomob"> · ABI-171</span> · San Diego, CA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Built to reverse</span><span class="l">lung fibrosis,</span><span class="l"><em>not slow it.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Avanti Biosciences is advancing ABI-171, an oral precision kinase inhibitor for idiopathic pulmonary fibrosis: IND-ready, with FDA Orphan Drug Designation, and headed for Phase 1.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">Our science '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
   '<p class="hcap lab" data-r aria-hidden="true">The target · DYRK1A kinase, ATP site in red · PDB 2VX3</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">IPF scars the lung until it can no longer breathe. Every approved therapy for IPF slows the decline. None of them reverses it. ABI-171 is <em>designed to reverse it.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">150,000+</span><p class="k">Adults in the United States living with idiopathic pulmonary fibrosis</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$7M+</span><p class="k">In NIH non-dilutive funding, including an NIDDK SBIR grant</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">H2 2026</span><p class="k">Phase 1 initiation targeted for ABI-171, after the FDA Pre-IND meeting</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How ABI-171 works</span><h2 class="d3">Quiet the scar, <em>open the lung.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Scar</span><span>Inhibit</span><span>Reverse</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Scar builds in the lung.</h2><p>In IPF, fibroblasts lay down collagen in the thin walls of the air sacs. The walls thicken and stiffen, the air sacs close down, and lung function declines.</p></article>'+
     '<article class="step"><h2>Switch off two kinases.</h2><p>ABI-171, taken by mouth, selectively inhibits DYRK1A and PIM1 inside the fibroblast, turning down the TGF-β-driven signalling that keeps the scar growing.</p></article>'+
     '<article class="step"><h2>Let the scar recede.</h2><p>In preclinical models ABI-171 reduced collagen and fibrotic tissue and improved survival. The goal: restore lung function, not only slow its loss.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">One molecule, <em>two fibrotic kinases.</em></h2></div><p data-r>ABI-171 is a fluoro-catechin designed by Avanti’s founder, a medicinal chemist, and backed by a comprehensive preclinical package: human fibroblast mechanistic validation, functional in vivo endpoints and a head-to-head comparison with current standard of care.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From IPF <em>to every fibrotic organ.</em></h2></div><p data-r>ABI-171 is IND-ready for idiopathic pulmonary fibrosis, with liver fibrosis next and a DYRK1A discovery programme in Alzheimer’s disease.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug hunters and <em>fibrosis experts.</em></h2></div><p data-r>A founder who has taken medicines from the bench to the clinic, advised by leaders in interstitial lung disease, chemical biology, pathology and cardiovascular medicine.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>Over $7M from the NIH (NIA, NIDDK and NHLBI), including SBIR Fast-Track and Phase II awards and the NHLBI Catalyze Program.</p></div>'+
    '<div><span class="lab kick" data-r>Home</span><p data-r>Johnson &amp; Johnson Innovation – JLABS in San Diego since 2018, after starting in the Long Island High Technology Incubator.</p></div>'+
    '<div><span class="lab kick" data-r>Collaborators</span><p data-r>Ohio State University (Prof. Richard Bruno) on liver fibrosis, and the Children’s Hospital of Philadelphia.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Milestones <em>and recognition.</em></h2></div><p data-r>The FDA, the NIH and San Diego’s start-up community on ABI-171.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, partners and clinicians</span>'+
   '<h2 class="big split">Fast forward <em>with Avanti.</em></h2>'+
   '<p class="sub" data-r>For business development or investment enquiries about ABI-171 and the pipeline, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+BD+'">Business development '+ARR+'</a><a class="btn" href="mailto:'+MAIL+'">General enquiries</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Avanti Biosciences<br>3210 Merryfield Row<br>San Diego, CA 92121</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+BD+'">'+BD+'</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+18582421570">858 242 1570</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>JLABS · 3210 Merryfield Row<br>San Diego, CA 92121</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead programme</span>ABI-171 · Oral DYRK1A / PIM1 kinase inhibitor for IPF</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Jost\',Arial,sans-serif;font-weight:400;font-size:52px;letter-spacing:.16em">AVANTI <tspan style="font-weight:500">BIOSCIENCES</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Avanti Biosciences</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",mechanism:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Avanti Biosciences — ABI-171, an oral kinase inhibitor designed to reverse lung fibrosis",x:"Home"};
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
