/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
var PHS=["Discovery","Candidate","IND-enabling","Clinic"];
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[7]?' class="dim"':'')+'><span class="lab tg"><b'+(c[7]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span>'+
   (c[7]?'':'<span class="stg" aria-hidden="true"><span class="tr"><i class="p" style="width:'+(c[5]/4*100)+'%"></i><i style="width:'+(c[4]/4*100)+'%"></i></span><span class="ph">'+PHS.map(function(p){return '<span>'+p+'</span>'}).join("")+'</span></span>')+'</div>'+
   '<p>'+esc(c[6])+'</p><span class="lab lk">'+(c[7]?'Programme':'In development')+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Block the source, not the receptor","For nearly three decades, drug developers tried to block the retinoid receptors directly and failed. Kayothera prevents the receptor’s ligand from being made at all, the way aromatase inhibitors work in the estrogen receptor pathway.",'<circle cx="28" cy="28" r="17"/><path class="a" d="M16 40L40 16"/><path d="M22 28h12"/>'],
  ["Oral, selective small molecules","A hybrid computational and high-throughput screen, then medicinal optimisation, produced first-in-class, orally available inhibitors of the ALDH1A enzymes that make retinoic acid.",'<path d="M20 16l8 -5l8 5v10l-8 5l-8 -5z"/><path class="a" d="M36 21l10 -6M28 31v14"/>'],
  ["One pathway, many diseases","Retinoid signalling is clinically linked to adverse cardiometabolic and cancer outcomes. Inhibiting it is being pursued in type 2 diabetes, obesity, contraception and cancer immunotherapy.",'<circle cx="28" cy="28" r="6"/><circle cx="12" cy="14" r="3.5"/><circle cx="46" cy="16" r="3.5"/><circle cx="44" cy="44" r="3.5"/><circle cx="12" cy="42" r="3.5"/><path class="a" d="M23 24l-8 -7M33 24l10 -6M33 32l8 9M23 32l-8 8"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
var PUBS=[
 ["iScience, 2025","Development of retinoid nuclear receptor pathway antagonists through targeting aldehyde dehydrogenase 1A3","https://doi.org/10.1016/j.isci.2025.113675"],
 ["J. Exp. Med., 2024","The pathogenic role of retinoid nuclear receptor signaling in cancer and metabolic syndromes","https://pmc.ncbi.nlm.nih.gov/articles/PMC11318670/"],
 ["Nature Communications, 2023","Genetic and pharmacologic inhibition of ALDH1A3 as a treatment of β-cell failure","https://doi.org/10.1038/s41467-023-36315-4"],
 ["Exp. Mol. Med., 2024","Reversing pancreatic β-cell dedifferentiation in the treatment of type 2 diabetes","https://www.nature.com/articles/s12276-023-01043-8"]];
function pubs(){return '<div class="ev pubs"><span class="lab kick" data-r>Publications</span><ul class="pbl">'+PUBS.map(function(p){return '<li data-r><a href="'+p[2]+'" target="_blank" rel="noopener"><span class="lab">'+esc(p[0])+'</span><span class="pt2">'+esc(p[1])+'</span>'+ARR+'</a></li>'}).join("")+'</ul></div>'}
function buy(){return '<div class="bk"><span class="lab kick" data-r>Backed by</span><p class="cr" data-r><span>Accelerator Life Science Partners</span><i>·</i><span>BioAdvance</span><i>·</i><span>Pier 70 Ventures</span><i>·</i><span>WRF Capital</span><i>·</i><span>7G BioVentures</span><i>·</i><span>New Jersey Health Foundation</span><i>·</i><span>NIH SBIR (NIDDK, NCI)</span><i>·</i><span>Andy Hill CARE Fund</span></p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Retinoid nuclear receptor antagonists<span class="nomob"> · Preclinical</span> · Seattle, WA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Drugging the last</span><span class="l">undrugged nuclear</span><span class="l"><em>receptor pathway.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Kayothera is developing first-in-class, oral, small molecule inhibitors of the retinoid nuclear receptor pathway, to give patients new options for type 2 diabetes, obesity and other unmet medical needs.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">Our science '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
   '<p class="hcap lab" aria-hidden="true">ALDH1A3, the enzyme that makes retinoic acid · retinoid sites in green · PDB 5FHZ</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">The retinoid pathway is clinically validated to drive adverse cardiometabolic and cancer outcomes, yet it has never had an inhibitor. Kayothera blocks the formation of its ligand, <em>to treat disease at its root.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 of 12</span><p class="k">Classic nuclear receptor pathways never successfully drugged: the retinoid pathway, the first discovered</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt;80%</span><p class="k">Of β cell function already lost by the time type 2 diabetes is diagnosed</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$14M</span><p class="k">Total financial support by July 2023: Series A, NIH SBIR and foundation grants</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Stop the signal <em>where it starts.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Source</span><span>Receptor</span><span>Block</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Vitamin A, made into a signal.</h2><p>Retinol (vitamin A) enters the cell, and the enzyme ALDH1A3 turns it into retinoic acid, the ligand of the retinoid nuclear receptors. In diabetes and in many cancers, this enzyme is pathogenically active.</p></article>'+
     '<article class="step"><h2>The receptor switches on.</h2><p>Retinoic acid moves into the nucleus and activates the receptors bound to DNA, changing which genes are expressed. In the pancreas, this drives β cell dedifferentiation and failure.</p></article>'+
     '<article class="step"><h2>Blocked at the source.</h2><p>A Kayothera inhibitor occupies the enzyme, so the ligand is never made and the receptors stay quiet. In preclinical models, β cells returned to a functional, mature state.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">Learning from three decades <em>of failure.</em></h2></div><p data-r>Activation of the retinoid pathway causes acute metabolic dysregulation and a cancer-promoting effect in humans, which suggests its inhibitors may reverse the progression of cardiometabolic diseases and aggressive cancers. Kayothera’s approach is built on biology discovered at Princeton University.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Three first-in-class <em>programmes.</em></h2></div><p data-r>Orally available small molecules for diabetes, obesity and male contraception, led by KAYO-1732, a disease-modifying candidate for type 2 diabetes.</p></div>'+
   pipeRows(PIPE)+
   pubs()+
   buy()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Scientific leaders, <em>experienced management.</em></h2></div><p data-r>Founded on research from Yibin Kang’s laboratory at Princeton, and advised by leaders in β cell biology and diabetes clinical trials, including three Banting Medal recipients.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Candidates, papers <em>and milestones.</em></h2></div><p data-r>The latest from Kayothera, from the American Diabetes Association’s Innovation Challenge to a new Clinical Advisory Board.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>Kayothera.</em></h2>'+
   '<p class="sub" data-r>Whether you are a potential partner, an investor or a clinician working in diabetes, obesity or oncology, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Kayothera '+ARR+'</a><a class="btn" href="#/science">Our science</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>2815 Eastlake Ave East, Suite 300<br>Seattle, WA 98102</p></div>'+
    '<div><span class="lab" data-r>Lab</span><p data-r>CoMotion at Fluke Hall, Rm 304<br>4000 Mason Road, Seattle, WA 98195</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+12069577300">+1 206-957-7300</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>2815 Eastlake Ave East, Suite 300<br>Seattle, WA 98102</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+12069577300">+1 206-957-7300</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead candidate</span>KAYO-1732 · Oral ALDH1A3 inhibitor for type 2 diabetes</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:300;font-size:64px">KAYOTHERA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Kayothera, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",mechanism:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Kayothera — first-in-class antagonists of the retinoid nuclear receptor pathway",x:"Home"};
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
