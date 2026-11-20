/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b>'+(c[3]?'<i>'+esc(c[3])+'</i>':'')+'</span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="cgt">'+TEAM.map(function(p){
  return '<li><figure class="cgp"><img src="'+p.img+'" alt="'+esc(p.name)+'" width="320" height="400" loading="lazy" decoding="async"></figure>'+
   '<h3>'+esc(p.name)+'</h3><span class="lab ro">'+esc(p.title)+'</span><p>'+esc(p.sum)+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Native catestatin","The natural 21-amino-acid peptide (human CgA352–372) and its 22-residue form CST-R, with the naturally occurring human variants G364S-CST and P370L-CST.",'<circle cx="10" cy="34" r="5"/><circle cx="22" cy="26" r="5"/><circle class="f" cx="34" cy="30" r="5"/><circle cx="46" cy="22" r="5"/><path class="a" d="M14.5 31.5l3-3M27 27.5l2 1.5M39 27.5l2.5-3"/>'],
  ["Retro-inverso CST","RI-CST reverses the sequence and builds it from D-amino acids, so proteases pass it by: a substantially prolonged pharmacokinetic profile, with its biological activity retained.",'<circle cx="46" cy="34" r="5"/><circle cx="34" cy="26" r="5"/><circle class="f" cx="22" cy="30" r="5"/><circle cx="10" cy="22" r="5"/><path class="a" d="M8 46h40M14 42l-6 4 6 4"/>'],
  ["Peptidomimetics","D-amino-acid CST and further peptide and peptidomimetic candidates, chosen on activity, efficacy, pharmacokinetics, safety, tissue exposure, manufacturability and formulation together.",'<path d="M28 8l15 8.5v17L28 42l-15-8.5v-17z"/><path class="a" d="M28 42v8M43 33.5l7 4M13 33.5l-7 4"/><circle class="f" cx="28" cy="25" r="3"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function ipList(){return '<div class="ev"><span class="lab kick" data-r>Intellectual property</span><div><dl>'+IP.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>In January 2026 CgA Therapeuticals executed an exclusive licence with The Regents of the University of California, represented by UC San Diego, covering defined patent rights for the cardiometabolic, neurodegeneration and oncology families. CST, RI-CST and other CST-based candidates are investigational and not approved by the FDA for any condition.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Catestatin therapeutics<span class="nomob"> · San Diego, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The body’s own</span><span class="l">peptide, made</span><span class="l"><em>into medicine.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>CgA Therapeuticals develops catestatin (CST), a naturally occurring 21-amino-acid peptide cut from chromogranin A, and next-generation CST peptidomimetics for gastroparesis, cardiometabolic disease and Alzheimer’s disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our platform '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
   '<span class="lab hcap" data-r>Human catestatin, CgA<sub>352–372</sub> · NMR structure, PDB 1LV4</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why catestatin</span>'+
   '<h2 class="txt" id="mani">Most drugs act on one target. Catestatin is an endogenous regulator that helps keep blood pressure, metabolism, inflammation, gut motility and the brain in balance, which makes it the base of <em>a platform, not a single drug.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">21</span><span class="k">Amino acids in catestatin, residues 352–372 of human chromogranin A</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1997</span><span class="k">The year Dr. Sushil Mahata named catestatin, a year after identifying its active domain</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$350K</span><span class="k">NIH/NIDDK SBIR Phase I award, 2026, for peptide and peptidomimetic therapy for gastroparesis</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">From protein to medicine</span><h2 class="d3">One fragment, <em>many systems.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Origin</span><span>Action</span><span>Durability</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Cut from chromogranin A.</h2><p>Catestatin is residues 352–372 of chromogranin A, a 439-amino-acid neuroendocrine secretory protein. It was first found as the body’s own brake on catecholamine release.</p></article>'+
     '<article class="step"><h2>One peptide, many systems.</h2><p>In preclinical studies CST improves impaired gastric function, insulin sensitivity and glucose metabolism, lowers elevated blood pressure, and reduces tau pathology and neuroinflammation.</p></article>'+
     '<article class="step"><h2>Built to last in the body.</h2><p>Native peptides are cleared quickly. RI-CST reverses the sequence in D-amino acids, so proteases that cut the native peptide leave it intact, while it keeps its activity.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A natural peptide, <em>made durable.</em></h2></div><p data-r>Native CST is potent but, like most endogenous peptides, short-lived in the circulation. CgA Therapeuticals builds analogues and peptidomimetics that improve stability, exposure and dosing.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Gut, metabolism, <em>heart and brain.</em></h2></div><p data-r>Five programmes from one peptide, each grounded in decades of federally funded research at UC San Diego and the VA San Diego Healthcare System.</p></div>'+
   pipeRows(PIPE)+
   ipList()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Led by the people <em>who found it.</em></h2></div><p data-r>The co-discoverers of catestatin lead CgA Therapeuticals, with expertise in metabolism, peptide formulation and manufacturing, and corporate law.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Licence</span><p data-r>Exclusive therapeutic licence from UC San Diego, executed January 2026.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NIH/NIDDK SBIR, built on research funded by the NIH (NIA) and the U.S. Department of Veterans Affairs.</p></div>'+
    '<div><span class="lab kick" data-r>Published</span><p data-r>2026 studies in Molecular Therapy, Communications Biology and Acta Neuropathologica Communications.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Papers, awards <em>and coverage.</em></h2></div><p data-r>The latest from CgA Therapeuticals and its collaborators at UC San Diego.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and questions</span>'+
   '<h2 class="big split">Talk to <em>CgA Therapeuticals.</em></h2>'+
   '<p class="sub" data-r>Questions about the patents, the peptides or the company: CgA Therapeuticals would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>CgA Therapeuticals, Inc.<br>San Diego, CA 92130</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+18582042924">'+TEL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>San Diego, California</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platform</span>Catestatin · RI-CST<br>Peptidomimetics</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Fira Sans\',Arial,sans-serif;font-weight:500;font-size:64px;letter-spacing:-.01em"><tspan style="font-weight:700">CgA</tspan> Therapeuticals</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 CgA Therapeuticals, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"platform",story:"story",platform:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"CgA Therapeuticals — Catestatin-based peptide therapeutics, San Diego",x:"Home"};
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
