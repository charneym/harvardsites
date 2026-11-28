/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function specRows(){return '<ul class="pfr pipe np">'+SPECS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row mf-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Gut disorders","A first clinical study with St George’s University Hospital will recruit 50 patients with IBS and IBD for advanced gut analysis and modelling of microbiome–host interactions.",'<path d="M18 10C10 10 10 22 18 22H38C46 22 46 34 38 34H18C10 34 10 46 18 46H40"/><circle class="f" cx="40" cy="46" r="2.2"/>'],
  ["Resistant infections","PhageX applies the platform to antibiotic-resistant infections, from the gut to wounds, using clinical data that includes highly drug-resistant bacteria.",'<rect x="12" y="18" width="32" height="20" rx="10"/><path class="a" d="M8 46L48 10"/>'],
  ["Testing services","Microbiome and metabolome testing for partners: at-home stool kits, results within five business days and capacity for up to 100 tests a week.",'<rect x="18" y="8" width="20" height="40" rx="3"/><path class="a" d="M18 30H38"/><circle class="f" cx="28" cy="20" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function certs(){var S=[
  ["Innovate UK","£693,673 from June 2026","An end-to-end AI platform for fast, safe and scalable precision phage therapies, project 10187674."],
  ["Venture capital","Backed by Zinc","Initial venture investment in 2024 to build the multi-omics AI discovery platform and microbiome therapies for IBS and IBD."],
  ["Recognition","European Defense Tech Hackathon","PhageX took first place in Warsaw in 2025, for phage therapy against antibiotic-resistant infections in the field."]];
  return '<div class="mfs">'+S.map(function(s){return '<div class="mf-site"><span class="lab" data-r>'+esc(s[0])+'</span><h3 data-r>'+esc(s[1])+'</h3><p data-r>'+esc(s[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Microbiome and phage therapeutics<span class="nomob"> · United Kingdom</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Precision phage therapy,</span><span class="l"><em>matched by AI.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>GutSee Health uses AI to find the phages, natural viruses that kill specific bacteria, that will remove the harmful microbes behind chronic gut disorders and resistant infections, while the body’s healthy bacteria are left in place.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How it works '+ARR+'</a><a class="btn" href="#/contact">Contact the team</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Decoding the microbiome</span>'+
   '<h2 class="txt" id="mani">There is no curative treatment for irritable bowel syndrome, and existing symptom management fails 40 to 60% of patients. GutSee is re-engineering the disrupted gut ecosystem itself, <em>to treat the root cause of the disease.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">62m+</span><p class="k">People with IBS in the USA</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100m+</span><p class="k">People with gut disorders worldwide</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">15%</span><p class="k">Of the UK affected by IBS</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Science · targeted phages</span><h2 class="d3">Remove the harmful, <em>keep the healthy.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Disrupted</span><span>Match</span><span>Restore</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A disrupted ecosystem.</h2><p>In IBS and IBD the gut microbiome is out of balance: harmful or pro-inflammatory bacteria crowd the healthy ones. Antibiotics cannot tell them apart.</p></article>'+
     '<article class="step"><h2>The right phage, predicted.</h2><p>Each phage infects only certain bacteria. GutSee’s models predict which phages will work against a specific strain in minutes, rather than months of laboratory testing.</p></article>'+
     '<article class="step"><h2>Ecosystem restored.</h2><p>The matched phages remove the harmful bacteria and leave healthy microbes in place, while missing and therapeutic bacteria are added back.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="platform" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Platform</span><h2 class="d2 split">AI discovery, <em>end to end.</em></h2></div><p data-r>Finding the right phage for an infection has meant slow laboratory testing, which limits how widely phage therapy can be used. GutSee’s platform replaces that search with data and machine learning.</p></div>'+
   specRows()+
  '</div></section>'+

  '<section class="sec light" id="programmes" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">From gut disease <em>to resistant infection.</em></h2></div><p data-r>The same platform serves chronic gut disorders, antimicrobial resistance and partners’ drug development, with the goal of making phage therapy practical and scalable for health systems such as the NHS.</p></div>'+
   caps()+
   certs()+
  '</div></section>'+

  '<section class="sec light alt" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Microbiome science, <em>science-first.</em></h2></div><p data-r>Co-founded by Dr Joanna Wiecek, a microbiome researcher, GutSee combines laboratory biology with AI modelling, and works with clinicians at St George’s University Hospital.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Funding, studies <em>and awards.</em></h2></div><p data-r>The company’s latest grant, clinical collaboration and recognition. Each item links to the full story.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>GutSee Health.</em></h2>'+
   '<p class="sub" data-r>For clinical collaboration, microbiome testing, partnering or investment enquiries, email the CEO directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email GutSee '+ARR+'</a><a class="btn" href="#/news">Latest news</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Registered office</span><p data-r>Campus Technology Hub, Daresbury Laboratory<br>Keckwick Lane, Daresbury<br>Warrington WA4 4AD, United Kingdom</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Clinical partner</span><p data-r>St George’s University Hospital<br>London</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Registered office</span>Daresbury Laboratory, Keckwick Lane<br>Warrington WA4 4AD, UK</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/platform">Platform</a><br><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Company</span>GutSee Health Limited<br>Registered in England, 15954302</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Mulish\',Arial,sans-serif;font-weight:300;font-size:50px;letter-spacing:.2em">GUTSEE HEALTH</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 GutSee Health Limited</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"story",platform:"platform",programmes:"programmes",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"GutSee Health — precision phage therapy, matched by AI",x:"Home"};
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
