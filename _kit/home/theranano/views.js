/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk'+(c[3].indexOf("Available")===0?' av':'')+'">'+(c[5]?'Next':'In development')+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Local, not systemic","Systemic chemotherapy is limited by dose-limiting toxicities. An implant inside the tumour delivers the drug where it is needed, at doses an infusion could never reach, with almost none of it in the bloodstream.",'<circle cx="28" cy="28" r="17"/><circle class="f" cx="28" cy="28" r="4"/><path class="a" d="M28 17v-6M28 45v-6M17 28h-6M45 28h-6"/>'],
  ["Sustained release","Polymer implants release their drug steadily over a prolonged period, so one placement acts as a depot rather than a single pulse; the InCeT-talazoparib depot was designed to release over about thirty days.",'<path d="M10 42c8 0 10-24 18-24s10 24 18 24"/><path class="a" d="M10 46h36"/><circle class="f" cx="28" cy="18" r="3"/>'],
  ["Built for the clinic","Made by solvent-free hot-melt extrusion, in the form of the brachytherapy spacers clinicians already use, so the implant fits an existing procedure and scales to GLP manufacture for IND-enabling studies.",'<rect x="12" y="24" width="32" height="8"/><path class="a" d="M12 28H6M50 28h-6"/><path d="M18 40h20"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>InCeRT-DTX in a large-animal model</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From theranano.com, the public NIH award record and Prostate Cancer and Prostatic Diseases (November 2026).</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Nanomedicine implants for cancer<span class="nomob"> · Newton, Massachusetts</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Chemotherapy,</span><span class="l"><em>from the inside out.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Theranano translates nanomedicines to the clinic. Its InCeRT implants are brachytherapy spacers that carry docetaxel, so the drug is released inside the tumour while the seeds beside them deliver the radiation.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why local delivery</span>'+
   '<h2 class="txt" id="mani">Systemic chemotherapy is capped by what the whole body can tolerate. Put the drug <em>inside the tumour</em>, beside the radiation, and the dose can rise while the side effects fall.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">10×</span><p class="k">More docetaxel tolerated inside the prostate than the estimated dose achievable by intravenous delivery</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">90%</span><p class="k">Of tumour-bearing mice disease-free after intratumoral InCeRT docetaxel as monotherapy</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">200+</span><p class="k">Peer-reviewed publications from the founder&#8217;s thirty years in drug delivery and imaging</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How InCeRT works</span><h2 class="d3">One implant, <em>two therapies.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Place</span><span>Release</span><span>Sensitise</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>It goes in as a spacer.</h2><p>In prostate brachytherapy, radioactive seeds are laid along needle tracks with inert spacers between them. An InCeRT implant is a modified spacer, loaded with docetaxel, that takes an inert spacer&#8217;s place in the strand.</p></article>'+
     '<article class="step"><h2>The drug stays in the gland.</h2><p>Each implant releases docetaxel steadily inside the prostate. In a nineteen-dog study the tolerated local dose was more than ten times what intravenous delivery could achieve, with no systemic toxicity.</p></article>'+
     '<article class="step"><h2>Radiation, made to count.</h2><p>Docetaxel sensitises the tissue to radiation. Delivered together, the two act synergistically, so lower radiation doses can be used and less toxicity reaches the rectum.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Nanomedicine, <em>placed precisely.</em></h2></div><p data-r>Theranano builds drug-releasing implants and nanoparticle formulations on decades of research at Northeastern University, and takes them through scale-up manufacturing, regulatory work and clinical translation.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Three programmes, <em>one aim.</em></h2></div><p data-r>InCeRT implants lead, moving through scale-up manufacturing towards an IND for a Phase I trial. NanoTalazoparib follows in animal studies, and QUTE-CE MRI has completed its first-in-human trial.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Physicists, engineers <em>and clinicians.</em></h2></div><p data-r>Theranano employs domain experts in research, regulatory affairs, scale-up manufacturing, compliance and business development, and works with a roster of outstanding clinicians and medical researchers.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Clinical collaborators</span><p data-r>Prostate brachytherapy clinicians at Brigham and Women&#8217;s Hospital and Dana-Farber Cancer Institute, and radiologists at Massachusetts General Hospital.</p></div>'+
    '<div><span class="lab kick" data-r>Research partners</span><p data-r>Biomaterials and imaging groups at Northeastern University, and the Geisel School of Medicine and Thayer School of Engineering at Dartmouth.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NIH Phase I and Phase II STTR awards from the National Cancer Institute, an NCI Phase I SBIR contract, and an NIDA Phase I STTR grant.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Publications <em>and awards.</em></h2></div><p data-r>The latest from Theranano, the peer-reviewed literature and the NIH record.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Theranano.</em></h2>'+
   '<p class="sub" data-r>Whether you treat patients who could benefit from local chemoradiation, want to partner on manufacturing or development, or would like to know more about QUTE-CE MRI, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Theranano '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Theranano LLC<br>Newton, Massachusetts<br>Greater Boston, USA</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Near Longwood</span><p data-r>Close to the Longwood Medical Area and its extraordinary pool of experts in medical research.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Newton, Massachusetts<br>Greater Boston, USA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Programmes</span>InCeRT implants · NanoTalazoparib · QUTE-CE MRI</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Outfit\',Arial,sans-serif;font-weight:300;font-size:58px;letter-spacing:.1em">theranano</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Theranano LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",platform:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Theranano — drug-eluting implants for local chemoradiation",x:"Home"};
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
