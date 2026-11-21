/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Selective","Most kinase inhibitors hit many kinases at once. Iluminos's latest compound is described as highly potent and highly selective, telling Dyrk1a apart from roughly 500 other kinases; DYR533 was profiled against a 403-target KINOMEscan panel.",'<circle cx="28" cy="28" r="20"/><circle cx="28" cy="28" r="12.5"/><circle class="f" cx="28" cy="28" r="4"/><path class="a" d="M28 4v8M28 44v8M4 28h8M44 28h8"/>'],
  ["Built for the brain","A drug for cognitive decline has to reach the brain. DYR533 is orally bioavailable and brain-penetrant; the inhibitor described in 2022 had a brain half-life of about four hours and 100% bioavailability.",'<path d="M28 10c-8 0-14 5-15 12-4 2-5 7-2 10 0 6 5 10 11 10 2 3 4 4 6 4s4-1 6-4c6 0 11-4 11-10 3-3 2-8-2-10-1-7-7-12-15-12z"/><path class="a" d="M28 10v36"/><circle class="f" cx="28" cy="28" r="3.4"/>'],
  ["Off in two ways","DYR533 binds the kinase's ATP pocket, and it also prevents newly made Dyrk1a from autophosphorylating, leaving the kinase inactive and lowering how much of it there is.",'<path d="M10 22c4-9 13-13 22-10l10 4"/><path d="M46 34c-4 9-13 13-22 10l-10-4"/><path class="a" d="M20 30l8-6 8 6"/><circle class="f" cx="28" cy="24" r="3.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The 2026 data on DYR533</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Bartholomew et al., “Dyrk1a inhibition with the novel compound DYR533”, bioRxiv, January 2026 (PMID 41648480); Velazquez et al., “Elevated DYRK1A in primary tauopathies and therapeutic targeting with the brain-penetrant inhibitor DYR533”, Research Square, August 2026 (PMID 42687920). Co-authored by Iluminos co-founders Christopher Hulme and Travis Dunckley. Preprints; preclinical results in mouse models.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Small-molecule Dyrk1a inhibitors<span class="nomob"> · Tucson, AZ</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Quiet the kinase</span><span class="l">behind the</span><span class="l"><em>cognitive decline.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Iluminos Therapeutics develops selective, brain-penetrant small molecules that inhibit Dyrk1a, the chromosome 21 kinase linked to Alzheimer’s disease, related tauopathies and the decline seen in Down syndrome.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div></div>'+
   '<p class="hcap lab" data-r>DYRK1A kinase domain with a DYR-series inhibitor in its ATP pocket · crystal structure PDB 8T2H</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Every person with Down syndrome carries an extra copy of Dyrk1a on chromosome 21, and Alzheimer’s-like pathology appears by 40 to 50. No drug is approved to prevent that decline. Iluminos is developing <em>a first-in-class approach.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 in 700</span><span class="k">Live births with Down syndrome, the most common genetic form of intellectual disability</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$3.4M</span><span class="k">NIH STTR and SBIR funding awarded to Iluminos by NINDS since 2022</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Three</span><span class="k">Mouse models in which DYR533 reduced tau pathology and neuroinflammation: 3xTg-AD, PS19 and Ts65Dn</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How DYR533 works</span><h2 class="d3">One extra gene, <em>one pocket to fill.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Gene</span><span>Kinase</span><span>Inhibitor</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A third copy of chromosome 21.</h2><p>Down syndrome is caused by trisomy of chromosome 21, which carries the gene for Dyrk1a. Every person with Down syndrome overexpresses the kinase, and Dyrk1a protein is also elevated in Alzheimer’s disease and in primary tauopathies.</p></article>'+
     '<article class="step"><h2>Too much kinase, too many phosphates.</h2><p>Dyrk1a adds phosphate groups to other proteins. It phosphorylates tau and amyloid precursor protein and regulates inflammatory signalling; hyperphosphorylated tau gathers into the tangles of Alzheimer’s disease.</p></article>'+
     '<article class="step"><h2>DYR533 takes the pocket.</h2><p>The inhibitor sits in the kinase’s ATP pocket and keeps newly made Dyrk1a from switching itself on. In mouse models, tau hyperphosphorylation fell, neuroinflammation eased and spatial memory improved.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Made for <em>one kinase.</em></h2></div><p data-r>The Dyrk1a inhibitors were designed and synthesised at the University of Arizona College of Pharmacy, validated at the ASU-Banner Neurodegenerative Disease Research Center, and licensed to Iluminos through Tech Launch Arizona.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One molecule, <em>several diseases.</em></h2></div><p data-r>DYR533 leads in Down syndrome, where Dyrk1a overexpression is universal and the NIH is funding IND-enabling work. The same mechanism reaches into Alzheimer’s disease and the primary tauopathies.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Two founders, <em>one molecule.</em></h2></div><p data-r>Iluminos was founded by the two scientists behind the Dyrk1a inhibitors: an industry-trained medicinal chemist and a neurodegeneration biologist.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Where</span><p data-r>Tucson, Arizona. The compounds were licensed from the University of Arizona through Tech Launch Arizona.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NIH STTR Phase I (2022) and SBIR Phase II (2024 to 2027) from the National Institute of Neurological Disorders and Stroke.</p></div>'+
    '<div><span class="lab kick" data-r>Published</span><p data-r>Molecular Neurobiology (2019) on chronic Dyrk1 inhibition in 3xTg-AD mice; DYR533 preprints on bioRxiv and Research Square (2026).</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards <em>and papers.</em></h2></div><p data-r>Iluminos’s grant record and the research behind DYR533.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and investment</span>'+
   '<h2 class="big split">Talk to <em>Iluminos.</em></h2>'+
   '<p class="sub" data-r>Down syndrome, Alzheimer’s disease or the tauopathies: Iluminos is glad to hear from clinicians, families, partners and investors as DYR533 moves through IND-enabling studies.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+RP+'11194266" target="_blank" rel="noopener">The NIH programme '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Iluminos Therapeutics, LLC<br>Tucson, AZ 85755</p></div>'+
    '<div><span class="lab" data-r>Lead compound</span><p data-r>DYR533, a selective Dyrk1a inhibitor</p></div>'+
    '<div><span class="lab" data-r>Latest data</span><p data-r><a class="ul" href="'+PM+'42687920/" target="_blank" rel="noopener">Research Square, 2026</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Tucson, Arizona</div>'+
   '<div class="c"><span class="lab">Programme</span><a class="ul" href="'+RP+'11194266" target="_blank" rel="noopener">NIH RePORTER</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Selective Dyrk1a inhibitors<br>Down syndrome · Alzheimer’s · tauopathies</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Questrial\',Arial,sans-serif;font-weight:400;font-size:64px;letter-spacing:-.01em">Iluminos</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Iluminos Therapeutics, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"platform",platform:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Iluminos Therapeutics — selective small-molecule Dyrk1a inhibitors, Tucson, AZ",x:"Home"};
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
