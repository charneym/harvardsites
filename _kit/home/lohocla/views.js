/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Network pharmacology","Chronic pain and addiction are failures of biological networks, not of one receptor or enzyme. Lohocla chooses targets for their interactivity, so that engaging them together gives additive or synergistic results.",'<circle cx="12" cy="14" r="5"/><circle cx="44" cy="12" r="5"/><circle cx="28" cy="44" r="5"/><circle class="f" cx="28" cy="24" r="4"/><path class="a" d="M16 16l9 6M40 14l-9 8M28 39V29"/>'],
  ["Rational drug design","Target-structure-based design builds one molecule that engages several chosen targets at once and leaves others alone: the multi-target approach, with superiority in action and safety over many single-target drugs.",'<circle cx="22" cy="30" r="13"/><circle class="a" cx="38" cy="22" r="8"/><circle cx="14" cy="14" r="6"/><circle cx="40" cy="42" r="6"/>'],
  ["Genetics and genomics","Genetic, genomic, biochemical and molecular-biological methods find the targets, and have produced genetically based diagnostic tools for alcohol use disorder and depression.",'<path d="M18 6c0 14 20 16 20 30s-20 14-20 14"/><path class="a" d="M38 6c0 14-20 16-20 30s20 14 20 14"/><path d="M21 14h14M21 28h14M21 42h14"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Chronic pain<span class="nomob"> · Addiction</span> · Aurora, Colorado</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">One molecule,</span><span class="l">several targets.</span><span class="l"><em>Therapeutics by design.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Lohocla Research uses network pharmacology and rational drug design to build non-opiate, non-addicting medicines for chronic pain and alcohol use disorder. Both lead molecules are cleared by the FDA for human trials.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/research">Our approach '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Chronic pain and addiction are both maladaptations of the nervous system, and no single neurochemical causes either. So Lohocla designs one molecule that calms <em>several systems at once.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">100M</span><p class="k">Adults in the US living with chronic pain, at a cost of $560–635 billion a year (Institute of Medicine)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">First-in-class molecules with FDA-cleared IND applications: Kindolor in 2023 and Nezavist in 2024</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.71M</span><p class="k">NIAAA SBIR Phase II funding in 2025 for Nezavist, for alcohol use disorder</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Our approach</span><h2 class="d3">Treat the network, <em>not one target.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Network</span><span>Design</span><span>Periphery</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Find the network that has gone wrong.</h2><p>Chronic pain is not a malfunction of one receptor or enzyme. It is a failure of a network of several interconnected elements, which become over-active and keep the sensory system sensitised.</p></article>'+
     '<article class="step"><h2>Design one molecule for all of it.</h2><p>For Kindolor, rational drug design built a molecule that modulates four key elements of the chronic-pain network at the same time, chosen because they sit in series within the pain sensory system.</p></article>'+
     '<article class="step"><h2>Act in the periphery, not the brain.</h2><p>Its targets are confined to peripheral sensory neurons. Kindolor does not act in the central nervous system, so it controls the heightened pain without removing normal, protective pain, and without the potential for addiction.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">Network pharmacology, <em>rationally designed.</em></h2></div><p data-r>The same neural systems change in response to nerve damage and to addictive chemicals. Lohocla studies them together, and designs medicines that act on several of them through one molecule.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Two molecules <em>in the clinic.</em></h2></div><p data-r>Non-opiate, non-addicting medicines for chronic pain and alcohol use disorder, funded by the National Institutes of Health through NIDA, NIAAA and the HEAL Initiative.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Decades of addiction <em>and pain science.</em></h2></div><p data-r>Lohocla is led by pharmacologists who helped shape alcohol research worldwide, advised by specialists in pharmacokinetics, toxicology, clinical trials, CMC and regulatory affairs.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Home</span><p data-r>Bioscience 2 on the Fitzsimons Innovation Campus in Aurora, Colorado.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NIH SBIR, STTR and HEAL Initiative awards from NIDA and NIAAA.</p></div>'+
    '<div><span class="lab kick" data-r>Recognition</span><p data-r>2024 Colorado Inno Award from Colorado Inno and the Denver Business Journal.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From IND <em>to the clinic.</em></h2></div><p data-r>Press releases and funding news from Lohocla Research.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Invest and collaborate</span>'+
   '<h2 class="big split">Talk to <em>Lohocla.</em></h2>'+
   '<p class="sub" data-r>Lohocla Research is always interested in joint-venture and partnership opportunities, and in investors who share its mission. We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Lohocla '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Lohocla Research Corporation<br>Bioscience 2, 12705 East Montview Blvd., Ste. 350<br>Aurora, CO 80045</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+13036453788">'+TEL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Bioscience 2<br>Aurora, CO 80045</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>'+TEL+'</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Pipeline</span>Kindolor® · chronic pain<br>Nezavist® · alcohol use disorder</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="54" text-anchor="middle" style="font-family:\'Josefin Sans\',Futura,sans-serif;font-weight:600;font-size:60px;letter-spacing:.12em">LOHOCLA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Lohocla Research Corporation</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",research:"story",science:"science",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Lohocla Research — Therapeutics by design for chronic pain and addiction, Aurora, CO",x:"Home"};
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
