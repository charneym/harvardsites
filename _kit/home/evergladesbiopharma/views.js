/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Ligandomics","A proprietary technology that identifies the ligands binding to a cell across the whole proteome, and quantifies their binding or functional activity at the same time. Comparing the entire ligandome of diseased vessels with that of healthy ones picks out the ligands that disease switches on.",'<circle cx="28" cy="28" r="20"/><circle cx="28" cy="28" r="11"/><circle class="f" cx="28" cy="8" r="2.6"/><circle class="f" cx="45.3" cy="38" r="2.6"/><circle class="f" cx="10.7" cy="38" r="2.6"/><path class="a" d="M28 17v-6M37.5 33.5l5.2 3M18.5 33.5l-5.2 3"/>'],
  ["Disease-restricted targets","Conventional anti-angiogenic targets were found by their activity on normal vessels, then tested for disease relevance, so blocking them can touch healthy vasculature too. Everglades has used ligandomics to identify a dozen disease-specific angiogenic ligands as therapeutic targets.",'<path d="M8 40c8-2 12-10 20-12s14 4 20 0"/><path class="a" d="M28 28c2-6 7-9 12-10M28 28c-3-5-3-10-1-15"/><circle class="f" cx="40" cy="18" r="3"/><circle class="f" cx="27" cy="13" r="3"/><path d="M8 48h40"/>'],
  ["Secretogranin III","The lead target. Scg3 binds to and stimulates the angiogenesis and leakage of diabetic but not healthy vessels, whereas VEGF acts on both, and it signals through a different receptor pathway. Mice lacking it develop normally, and the antibody against it showed minimal side effects even at excessive doses.",'<path d="M6 34c10-3 18-3 22 0s12 3 22 0"/><path d="M6 44c10-3 18-3 22 0s12 3 22 0"/><path class="a" d="M24 31.4v-5M32 31.4v-5"/><circle class="f" cx="28" cy="20" r="4.4"/><circle cx="14" cy="12" r="2.4"/><circle cx="43" cy="14" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The study behind the lead</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Huang, Waduge, Kaur, Tian, Weng, Stout, Pang, Webster and Li, “Optimal Humanized Scg3-Neutralizing Antibodies for Anti-Angiogenic Therapy of Diabetic Retinopathy”, International Journal of Molecular Sciences, 1 September 2024 (PMID 39273454). Preclinical results in mouse models.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Ligand-based therapies<span class="nomob"> · Ophthalmology</span> · Houston, Texas</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Treat the vessels</span><span class="l">disease changed.</span><span class="l"><em>Spare the healthy.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Everglades Biopharma develops therapies against disease-specific ligands. Its lead is a humanized antibody to secretogranin III, an angiogenic factor that acts on diabetic and neovascular vessels in the eye but not on normal ones.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Anti-VEGF drugs were the breakthrough in diabetic retinopathy, but their efficacy is limited and VEGF drives healthy and diseased vessels alike. Everglades blocks a factor that only <em>diseased vessels answer to.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">100M+</span><span class="k">People worldwide affected by diabetic retinopathy, a leading cause of vision loss in working adults</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.67M</span><span class="k">National Eye Institute SBIR and STTR funding awarded to Everglades since 2017</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.116 nM</span><span class="k">Binding affinity of EBP3, the lead humanized anti-Scg3 antibody fragment, for its target</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How anti-Scg3 works</span><h2 class="d3">Map it, <em>then block only it.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Compare</span><span>Target</span><span>Block</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Compare diseased and healthy vessels.</h2><p>Ligandomics maps every ligand that binds to the vessels of a diseased retina and of a healthy one, with its binding activity measured at the same time. The difference between the two profiles is the list of disease-specific targets.</p></article>'+
     '<article class="step"><h2>Secretogranin III binds only the sick ones.</h2><p>In diabetic mice, Scg3 binds the stressed deep retinal plexus, where endothelial junctions are compromised, and drives its angiogenesis and leakage. The healthier superficial and intermediate plexuses of the same retina are left alone. VEGF binds them all.</p></article>'+
     '<article class="step"><h2>The antibody blocks it there.</h2><p>A humanized antibody neutralises Scg3 and reduces the leakage, while the healthy vessels it never bound keep working. Because Scg3 uses a different receptor pathway from VEGF, the two can also be blocked together.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Start from the disease, <em>not the vessel.</em></h2></div><p data-r>Everglades was founded on the belief that therapies against disease-specific ligands will have higher efficacy and fewer side effects than those against ligands every vessel uses. Ligandomics is how it finds them.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One target, <em>across the eye.</em></h2></div><p data-r>Every programme blocks secretogranin III. The lead, a humanized antibody for diabetic retinopathy, is in IND-enabling studies under an NEI Phase II award; the same target is being developed for wet AMD, as a one-time gene therapy and for corneal injury.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The scientists who <em>found the target.</em></h2></div><p data-r>Everglades was founded by the researchers behind ligandomics and the discovery of secretogranin III as a disease-associated angiogenic ligand, and it runs its science alongside ophthalmology at Baylor College of Medicine.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Where</span><p data-r>Houston, Texas, with collaborators at the Cullen Eye Institute, Baylor College of Medicine.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>Four SBIR and STTR awards from the National Eye Institute of the National Institutes of Health since 2017, the latest a Phase II.</p></div>'+
    '<div><span class="lab kick" data-r>Published</span><p data-r>Journal of Experimental Medicine (2017) on secretogranin III; Int J Mol Sci, Gene Therapy, GeroScience and IOVS since.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards <em>and papers.</em></h2></div><p data-r>Everglades’ grant record and the peer-reviewed work behind anti-Scg3 therapy.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and investment</span>'+
   '<h2 class="big split">Talk to <em>Everglades.</em></h2>'+
   '<p class="sub" data-r>Retina specialists, partners and investors interested in disease-targeted anti-angiogenic therapy are welcome to get in touch as the lead programme moves toward an IND.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Everglades '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Everglades Biopharma, LLC<br>Houston, Texas</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Lead programme</span><p data-r><a class="ul" href="'+RP+'11141172" target="_blank" rel="noopener">NIH RePORTER</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Houston, Texas</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platform</span>Ligandomics<br>Anti-Scg3 antibodies</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Figtree\',system-ui,sans-serif;font-weight:700;font-style:italic;font-size:62px;letter-spacing:-.01em">Everglades</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Everglades Biopharma, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"platform",platform:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Everglades Biopharma — disease-targeted anti-angiogenic therapy for the retina, Houston, Texas",x:"Home"};
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
