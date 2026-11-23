/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk'+(c[3].indexOf("In the")===0?' av':'')+'">'+(c[3].indexOf("In the")===0?'In catalogue':c[5]?'By request':'To order')+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function said(){return '<div class="qts">'+SAID.map(function(q){
  return '<figure class="qt"><blockquote data-r>'+esc(q[0])+'</blockquote><figcaption class="lab" data-r>'+esc(q[1])+'</figcaption></figure>'}).join("")+'</div>'}
function caps(){var C=[
  ["Wild-type chemokines","Any chemokine in the catalogue, in the quantity a study needs — from milligrams at the bench to the cost-effective larger lots that in vivo work in animal models calls for.",'<path d="M23 8v14L11 44a5 5 0 0 0 4 8h26a5 5 0 0 0 4-8L33 22V8"/><path class="a" d="M19 8h18"/><path class="a" d="M16 38h24"/>'],
  ["Mutant chemokines","Our production methods are robust enough to accommodate sequence modifications to any of the chemokines in the catalogue — point mutants, truncations and designed variants.",'<path class="a" d="M8 38l13-9l13 4l14-11"/><circle cx="8" cy="38" r="4.5"/><circle cx="21" cy="29" r="4.5"/><circle class="f" cx="34" cy="33" r="6"/><circle cx="48" cy="22" r="4.5"/>'],
  ["Stable-isotope labelling","Metabolic labelling with 15N and 13C for NMR and mass spectrometry, from a pipeline built in laboratories that solve chemokine structures for a living.",'<circle cx="28" cy="28" r="7"/><ellipse class="a" cx="28" cy="28" rx="22" ry="9"/><ellipse class="a" cx="28" cy="28" rx="22" ry="9" transform="rotate(60 28 28)"/><ellipse cx="28" cy="28" rx="22" ry="9" transform="rotate(-60 28 28)"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Every lot, before it ships</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Recombinant chemokines<span class="nomob"> · Milwaukee, Wisconsin</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Chemokines,</span><span class="l"><em>folded right.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Protein Foundry produces recombinant human and murine chemokines with their native N-termini intact — labelled with the dye, biotin or C-terminal tag you choose, and verified by HPLC, mass spectrometry, NMR and cell-based assay before a vial leaves the laboratory.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/catalogue">The catalogue '+ARR+'</a><a class="btn" href="#/custom">Custom production</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why the N-terminus</span>'+
   '<h2 class="txt" id="mani">A chemokine signals with its first few residues. Leave an extra methionine on the front and the protein still looks right on a gel — and <em>reads wrong to the receptor.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">20 yrs</span><p class="k">Of research programmes developing molecular tools for the production and functional analysis of chemokines</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><p class="k">Independent quality checks on every lot: purity, authenticity, fold, activity and endotoxin</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;0.01</span><p class="k">Endotoxin units per microgram of protein, by the LAL method, across every protein we sell</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a vial is made</span><h2 class="d3">From plasmid <em>to proven protein.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Express</span><span>Refold</span><span>Verify</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Expressed with a native front end.</h2><p>Chemokines are expressed in E. coli cultures from plasmid vectors engineered to yield a native N-terminus — no leftover initiator residue, no tag where the receptor binds. The cells pack the protein into inclusion bodies.</p></article>'+
     '<article class="step"><h2>Refolded, then purified twice over.</h2><p>A robust refolding process restores the disulfide pairings found in chemokines from their native sources, at high yield. Ion exchange and reversed-phase HPLC then take the material to the purity a binding study can trust.</p></article>'+
     '<article class="step"><h2>Verified five ways.</h2><p>SDS-PAGE and RP-HPLC for purity, mass spectrometry for identity, 1D and 2D NMR for fold, calcium flux or chemotaxis for activity, and the LAL assay for endotoxin — the lot-to-lot consistency a long campaign depends on.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="catalogue" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Catalogue</span><h2 class="d2 split">Nearly every human <em>and murine chemokine.</em></h2></div><p data-r>Browse or search the catalogue: the CXC, CC and smaller families, human and murine, each of which can be supplied labelled with your choice of fluorescent dye, biotin or C-terminal tag.</p></div>'+
   pipeRows(PIPE)+
   said()+
  '</div></section>'+

  '<section class="sec light" id="custom" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Custom production</span><h2 class="d2 split">Let the experts make <em>the molecule you need.</em></h2></div><p data-r>Over the last twenty years our research programmes have developed unique and specialised molecular tools for the production and functional analysis of chemokines. The same pipeline makes custom-designed molecules for your research.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="quality" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality assurance</span><h2 class="d2 split">Purity, fold, activity — <em>measured, not assumed.</em></h2></div><p data-r>Recombinant chemokines are expressed in E. coli from vectors engineered for native N-termini, then taken through ion exchange and reversed-phase HPLC to preserve purity and the native disulfide bond pairings. Purified protein is then put through a rigorous set of standards.</p></div>'+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Structural biologists <em>who use this protein.</em></h2></div><p data-r>Protein Foundry was founded by three Medical College of Wisconsin faculty whose own laboratories determine chemokine structures, run the bioassays and depend on the same material they sell.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Applications</span><p data-r>Imaging and flow cytometry with labelled chemokines, receptor binding and chemotaxis assays, NMR and mass spectrometry with stable-isotope-labelled protein.</p></div>'+
    '<div><span class="lab kick" data-r>Who orders</span><p data-r>Academic laboratories and industrial R&amp;D groups across the biomedical research community, in the United States and abroad.</p></div>'+
    '<div><span class="lab kick" data-r>Where we are</span><p data-r>Milwaukee, Wisconsin — in the city’s growing biotechnology cluster, alongside the Medical College of Wisconsin.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Publications, highlights <em>and chemokine science.</em></h2></div><p data-r>What our proteins are being used for, what the chemokine literature is showing, and what the team is writing about.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Laboratories, core facilities and R&amp;D groups</span>'+
   '<h2 class="big split">Talk to <em>Protein Foundry.</em></h2>'+
   '<p class="sub" data-r>Tell us which chemokine, which label and how much. If it is not in the catalogue, or needs a mutation or an isotope, we will quote the custom run.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Protein Foundry '+ARR+'</a><a class="btn" href="#/catalogue">Browse the catalogue</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Laboratory</span><p data-r>Protein Foundry, LLC<br>662 S 94th Place<br>Milwaukee, Wisconsin 53214</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>414-301-2601</p></div>'+
    '<div><span class="lab" data-r>Custom work</span><p data-r>Wild-type and mutant chemokines, pre-clinical quantities, and 15N or 13C labelling for NMR and mass spectrometry.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Laboratory</span>662 S 94th Place<br>Milwaukee, Wisconsin 53214</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>414-301-2601</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/catalogue">Catalogue</a><br><a class="ul" href="#/custom">Custom production</a><br><a class="ul" href="#/quality">Quality</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Catalogue</span>CXC · CC · other chemokines · labelled and tagged proteins · human and murine</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:300;font-size:50px;letter-spacing:.09em">protein foundry</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Protein Foundry, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",catalogue:"catalogue",custom:"custom",quality:"quality",process:"story",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Protein Foundry — recombinant chemokines, made right",x:"Home"};
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
