/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[6]?' class="dim"':'')+'><span class="lab tg"><b'+(c[6]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk">'+esc(c[5])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["For patients","An earlier diagnosis aims to keep treatment inside the therapeutic window, from a minimally invasive blood draw. The test is accessed through primary care physicians and specialists.",'<path d="M28 6C28 6 14 23 14 33a14 14 0 0 0 28 0C42 23 28 6 28 6z"/><circle class="f" cx="28" cy="34" r="5"/>'],
  ["For physicians","Disease-state information arrives earlier, so intervention can start earlier, and the test can monitor how well a treatment is working so plans can be adjusted in real time.",'<path d="M6 40h8l5-14 6 22 6-30 5 22h14"/><path class="a" d="M6 48h44"/>'],
  ["For health systems","A faster route to diagnosis may reduce overall healthcare expenditure and support more strategic allocation of resources, in symptomatic patients and at routine check-ups.",'<rect x="8" y="14" width="40" height="32"/><path d="M8 24h40M18 14v-6M38 14v-6"/><path class="a" d="M20 35l6 5 11-11"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function backers(){return '<div class="bk light-bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r><span>National Science Foundation SBIR</span><i>·</i><span>Tech Launch Arizona</span><i>·</i><span>Arizona Innovation Challenge</span><i>·</i><span>Flinn Foundation</span></p></div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Selected<br>publications</span><div><dl>'+
  [["June 2025","Predictive modeling of ARDS mortality integrating biomarker and cytokine, clinical and metabolomic data"],
   ["January 2020","Pulmonary arterial hypertension induces a distinct signature of circulating metabolites"],
   ["September 2019","A focus on the early events in the pathogenesis of pulmonary arterial hypertension"],
   ["March 2016","Metabolic changes precede the development of pulmonary hypertension in the monocrotaline-exposed rat lung"]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>As listed on metfora.com. ExpertLungDx is an investigational test and has not been cleared or approved by the FDA.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Metabolomic blood diagnostics<span class="nomob"> · ExpertLungDx</span> · Tucson</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Detect early,</span><span class="l"><em>treat effectively.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Metfora Diagnostics is developing a minimally invasive blood test that reads the metabolic fingerprint of chronic disease, starting with ExpertLungDx for four chronic lung diseases.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/pipeline">Pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">Fatigue and shortness of breath can be the first signs of serious chronic disease, yet a diagnosis can take years. What if a single test could catch it early, <em>before it becomes debilitating?</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">4 yrs</span><p class="k">Up to four years to a diagnosis today, delaying treatment planning</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3 days</span><p class="k">As little as three days to a potential diagnosis with Metfora’s test</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">Chronic lung diseases in the first test: COPD, asthma, PH and ILD</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the test works</span><h2 class="d3">From one blood draw <em>to a diagnosis.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sample</span><span>Measure</span><span>Read</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A minimally invasive blood draw.</h2><p>Disease changes cellular function, often before overt symptoms, and those changes show up in the metabolites circulating in the blood. One routine draw captures them.</p></article>'+
     '<article class="step"><h2>GC-MS measures the metabolites.</h2><p>Gas chromatography–mass spectrometry separates the sample and quantifies panels of circulating metabolites, each one a peak in the trace.</p></article>'+
     '<article class="step"><h2>Machine learning reads the fingerprint.</h2><p>The pattern across those metabolites is a metabolic fingerprint tightly linked to disease pathology. Machine learning matches it to the disease that is present.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The metabolic fingerprint <em>of chronic disease.</em></h2></div><p data-r>Metfora’s approach analyzes circulating metabolites to detect disease-driven metabolic changes, and turns them into fingerprints predictive of chronic disease, before overt symptoms appear.</p></div>'+
   caps()+
   backers()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Lung disease first, <em>then the platform.</em></h2></div><p data-r>The pipeline is initially focused on chronic lung diseases: chronic obstructive pulmonary disease, asthma, pulmonary hypertension and interstitial lung disease.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Metabolite chemists, clinicians <em>and data scientists.</em></h2></div><p data-r>The leadership team brings experience across diagnostics, cardiovascular and lung disease, metabolite chemistry and data analysis.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Origins</span><p data-r>Built on research by the founding scientific team at Indiana University, and launched in 2020 through Tech Launch Arizona at the University of Arizona.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>A National Science Foundation SBIR Phase I award of $255,706 in 2023, after the NSF I-Corps program, and a 2024 Arizona Innovation Challenge award.</p></div>'+
    '<div><span class="lab kick" data-r>Programs</span><p data-r>The Flinn Foundation Bioscience Entrepreneurship Program, the University of Arizona Center for Innovation and Arizona FORGE.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Toward the FDA, <em>step by step.</em></h2></div><p data-r>The latest from Metfora, from its first NSF award to alignment with the FDA on ExpertLungDx.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Physicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Metfora.</em></h2>'+
   '<p class="sub" data-r>For clinical collaborations, partnering or investment, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+FORM+'" target="_blank" rel="noopener">Contact Metfora '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>9040 S Rita Rd, Suite 1270<br>Tucson, AZ 85747</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
    '<div><span class="lab" data-r>Lead test</span><p data-r>ExpertLungDx, aligned with the FDA on its regulatory pathway in 2025.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>9040 S Rita Rd, Suite 1270<br>Tucson, AZ 85747</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead test</span>ExpertLungDx · Chronic lung disease from one blood test</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="60" text-anchor="middle" style="font-family:\'Hanken Grotesk\',Arial,sans-serif;font-weight:500;font-size:66px">metfora</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Metfora Diagnostics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Metfora Diagnostics — a metabolomic blood test for chronic lung disease",x:"Home"};
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
