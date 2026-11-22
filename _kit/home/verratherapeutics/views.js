/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Selective by design","Verra’s native peptide sequences block only the intended activity of each multi-domain protease and leave its other functions intact, meeting selectivity requirements that small molecules can’t.",'<circle cx="28" cy="28" r="20"/><path d="M14 28h10M32 28h10"/><circle class="f" cx="28" cy="28" r="4"/><path class="a" d="M22 20l12 16"/>'],
  ["Smaller than antibodies","An order of magnitude smaller yet with a good half-life, they penetrate tissue faster and more effectively, with rapid subcutaneous release and good bioavailability.",'<path d="M8 44c6-18 12-28 20-28s14 10 20 28"/><circle class="f" cx="28" cy="12" r="3.4"/><path class="a" d="M28 18v14M23 27l5 5 5-5"/>'],
  ["Leave the target in place","Unlike RNA silencing or protein degraders, which eliminate every domain of the target, Verra’s inhibitors don’t remove the protease. They are simply manufactured and promise reduced immunogenicity.",'<rect x="10" y="20" width="36" height="22" rx="1"/><path d="M18 20v-8h20v8"/><path class="a" d="M20 31h16"/><circle class="f" cx="28" cy="31" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Protease therapeutics<span class="nomob"> · Heart, lung &amp; kidney</span> · Lansing, NY</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Block only what</span><span class="l">drives the</span><span class="l"><em>disease.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Regulatory proteases underlie major diseases of the heart, lung and kidney. Verra Therapeutics adapts nature’s own inhibitor sequences into small protein drugs that are fully selective for two key targets.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why proteases</span>'+
   '<h2 class="txt" id="mani">Membrane-bound proteases sit where injury, hypoxia, inflammation, matrix breakdown and fibrosis intersect. Small molecules can’t tell them apart and antibodies are too large, so Verra starts from <em>nature’s own inhibitors.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">75%</span><p class="k">Less loss of heart function with VTH144 after a heart attack, relative to controls, in preclinical studies</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">70%</span><p class="k">Reduction in interstitial fibrosis of the heart muscle with VTH144, the scarring that leads to arrhythmia and heart failure</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.39M</span><p class="k">In NHLBI SBIR awards, 2019–2025, for VTH245, a disease-modifying protein therapeutic for COPD</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">One protease, <em>capped cleanly.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Shed</span><span>Block</span><span>Recover</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>ADAM10 drives the damage.</h2><p>After a heart attack, ADAM10 is up-regulated in the heart muscle. It cuts the chemokine CX3CL1 from the cell surface, drawing neutrophils into the heart and fuelling IL-1β-driven inflammation.</p></article>'+
     '<article class="step"><h2>VTH144 blocks only ADAM10.</h2><p>VTH144 is a modified form of ADAM10’s own prodomain, nature’s inhibitor for the enzyme. In FRET assays it proved highly selective for ADAM10, sparing other metalloproteases.</p></article>'+
     '<article class="step"><h2>The heart keeps its pumping power.</h2><p>Given 4 and 48 hours after a heart attack in mice, VTH144 preserved cardiac function by reducing scar size, with no toxic short-term effects in heart, lung, liver or kidney.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A better <em>inhibitor platform.</em></h2></div><p data-r>Based on nature’s elegant design for each target, Verra’s small protein inhibitors are delivered subcutaneously and block a single harmful activity, where small molecules, antibodies, degraders and RNA silencing all come up short.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Two candidates, <em>three organs.</em></h2></div><p data-r>Verra is developing preclinical drug candidates for COPD, recovery after a heart attack, heart failure prevention and kidney injury, by adapting nature’s highly evolved inhibitor sequence for two key targets.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Protease science and <em>drug development.</em></h2></div><p data-r>Led by co-founder Dr. Christopher Prince and Chief Scientist Dr. Marcia Moss, and advised by leading physician-scientists in lung disease and cardiology at Columbia, TU Dresden and Brigham and Women’s Hospital.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Founded</span><p data-r>In 2017, near Ithaca, New York, with a mission of transforming the treatment of protease-driven diseases.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>Phase I and Phase II SBIR awards from the National Heart, Lung, and Blood Institute for VTH245 in COPD.</p></div>'+
    '<div><span class="lab kick" data-r>Collaboration</span><p data-r>VTH144’s heart-attack studies were run with the Institute of Pharmacology and Toxicology at TU Dresden and published in 2026.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants and <em>papers.</em></h2></div><p data-r>The latest from Verra Therapeutics, from its NHLBI-funded COPD programme to the first published study of VTH144.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function evid(){return '<div class="ev"><span class="lab kick" data-r>VTH144 after a heart attack</span><div><dl>'+
  [["Selective","Highly selective for ADAM10 in FRET assays, sparing other metalloproteases"],["Cardioprotective","Preserved cardiac function in a mouse heart-attack model by reducing scar size"],["Anti-inflammatory","Attenuated CX3CL1 shedding, neutrophil infiltration and IL-1β-driven inflammation"],["Well tolerated","No toxic short-term effects in cardiac, pulmonary, hepatic or renal systems"]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Klapproth et al., “Leveraging the ADAM10 prodomain for selective inhibition to enhance recovery after myocardial infarction”, British Journal of Pharmacology 183 (2026), with TU Dresden. Preclinical results.</p></div></div>'}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and investment</span>'+
   '<h2 class="big split">Talk to <em>Verra.</em></h2>'+
   '<p class="sub" data-r>Verra Therapeutics is advancing VTH144 and VTH245 toward the clinic, and would be glad to hear from partners, investors and clinicians working on heart, lung and kidney disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+WEB+'" target="_blank" rel="noopener">Contact Verra '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Verra Therapeutics<br>1939 East Shore Drive, Suite 5<br>Lansing, NY 14882</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+WEB+'" target="_blank" rel="noopener">Enquiry form</a><br>verratherapeutics.com</p></div>'+
    '<div><span class="lab" data-r>Policies</span><p data-r><a class="ul" href="https://img1.wsimg.com/blobby/go/bc8b32df-00b9-4f67-90fc-4b2d6a99360e/Verra%20Therapeutics%20FCOI%20Policy-Final%20Nov%202022.pdf" target="_blank" rel="noopener">Financial conflict of interest policy</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>1939 East Shore Drive, Suite 5<br>Lansing, NY 14882</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+WEB+'" target="_blank" rel="noopener">Enquiry form</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Candidates</span>VTH144 · heart<br>VTH245 · COPD</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Newsreader\',Georgia,serif;font-style:italic;font-weight:400;font-size:64px;letter-spacing:-.01em">Verra Therapeutics</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Verra Therapeutics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"technology",how:"story",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Verra Therapeutics — selective protease inhibitors for heart, lung and kidney disease, Lansing, NY",x:"Home"};
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
